import { Container } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.control.zoom({
  zoomOutTitle: "10px"
})

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export function Map() {
  return (
    <Container as="section" fluid className="bg-light p-0">
      <Container fluid className="border-bottom border-primary border-2 p-0">
        <Container fluid className="max-width-1180">
          <h2 className="fs-4 font-600 pt-3 pb-1">Locais disponíveis</h2>
        </Container>
      </Container>
      <Container fluid className="max-width-1180 py-3">
        <MapContainer center={[-23.548670, -46.638248]} zoom={12} style={{height: 450}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-23.548670, -46.638248]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Marker position={[-23.531570, -46.789890]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>    
      </Container>
    </Container>
  );
}