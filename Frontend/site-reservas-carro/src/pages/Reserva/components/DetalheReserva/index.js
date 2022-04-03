import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import { BsGeoAltFill } from "react-icons/bs";
import api from "../../../../services/api";

export default function DetalhesReserva({id, nome, categoria, cidade, pais}) {
  const [listaImagens, setListaImagens] = useState([]);


  const getImg = async () => {
    await api.get(`/imagem/produto/${id}`)
    .then(response => setListaImagens(response.data))
    .catch((err) => console.error(err))
}

useEffect(() => {
    getImg();
}, [])

let imageGalery = [];
    function getImageGalery(item) {
        listaImagens.map(({ url }) => {
            return (
                item.push(url)
            )
        })
        return item;
    }
    getImageGalery(imageGalery);

  return (
    <>
      <div className="div-detalhes">
        <h2 className=" text-primary fs-4 font-500">Detalhes da reserva</h2>
        <div className="detalhesImg">
          <img src={imageGalery[0]} alt="" />
        </div>
      </div>
      <div className="detalhesDados-reserva">
          <div className="div-titulo">
            <h5>{categoria}</h5>
            <h4>{nome}</h4>
          </div>
          <div className="div-endereco">
            <div>
              <BsGeoAltFill color="#FBC02D" />
            </div>
            <div className="div-info">
              <p className="localiz">{cidade}, {pais}</p>
              <p className="info-add">1 kilomentro do Morumbi</p>
            </div>
          </div>
        </div>
      <div className="detalhes-data-reserva">
          <div className="data-hora-checkin">
            <h5>
            check in
            </h5>
            <p>
            xx/xx/xxxx xxh:00
            </p>
          </div>
          <div className="data-hora-checkout">
            <h5>
            check out
            </h5>
            <p>
            xx/xx/xxxx xxh:00
            </p>
          </div>
        </div>
      <div className="div-button-reserva">
          <Link to={`/`}>
            <button className="button-confirm-reserva">Confirmar reserva</button>
          </Link>
        </div>
    </>
  )
}
