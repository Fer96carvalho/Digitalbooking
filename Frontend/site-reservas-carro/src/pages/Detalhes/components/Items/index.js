import { Container, Row, Col } from 'react-bootstrap';
import { BsSnow3 } from 'react-icons/bs';

export function Items() {
  return (
    <Container as="section" fluid className="bg-light p-0">
      <Container fluid className="border-bottom border-primary border-2 p-0" >
        <Container fluid className="max-width-1180">
          <h2 className="fs-4 font-600 pt-3 pb-1">O que este carro oferece?</h2>
        </Container>
      </Container>
      <Container fluid className="max-width-1180 py-4">
        <Row>
          <Col xs={6} sm={6} md={4} lg={4} xl={3} className="my-3">
            <span className="d-inline-flex align-items-center w-100">
              <BsSnow3 color="#FBC02D" size={20}/>
              <small className="ms-3">Ar Condicionado</small>
            </span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={3} className="my-3">
            <span className="d-inline-flex align-items-center w-100">
              <BsSnow3 color="#FBC02D" size={20}/>
              <small className="ms-3">Ar Condicionado</small>
            </span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={3} className="my-3">
            <span className="d-inline-flex align-items-center w-100">
              <BsSnow3 color="#FBC02D" size={20}/>
              <small className="ms-3">Ar Condicionado</small>
            </span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={3} className="my-3">
            <span className="d-inline-flex align-items-center w-100">
              <BsSnow3 color="#FBC02D" size={20}/>
              <small className="ms-3">Ar Condicionado</small>
            </span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={3} className="my-3">
            <span className="d-inline-flex align-items-center w-100">
              <BsSnow3 color="#FBC02D" size={20}/>
              <small className="ms-3">Ar Condicionado</small>
            </span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={3} className="my-3">
            <span className="d-inline-flex align-items-center w-100">
              <BsSnow3 color="#FBC02D" size={20}/>
              <small className="ms-3">Ar Condicionado</small>
            </span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={3} className="my-3">
            <span className="d-inline-flex align-items-center w-100">
              <BsSnow3 color="#FBC02D" size={20}/>
              <small className="ms-3">Ar Condicionado</small>
            </span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={3} className="my-3">
            <span className="d-inline-flex align-items-center w-100">
              <BsSnow3 color="#FBC02D" size={20}/>
              <small className="ms-3">Ar Condicionado</small>
            </span>
          </Col>
          <Col xs={6} sm={6} md={4} lg={4} xl={3} className="my-3">
            <span className="d-inline-flex align-items-center w-100">
              <BsSnow3 color="#FBC02D" size={20}/>
              <small className="ms-3">Ar Condicionado</small>
            </span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
