import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import { BsGeoAltFill } from "react-icons/bs";

export default function DetalhesReserva() {
  return (
    <>
      <div className="div-detalhes">
        <h2 className=" text-primary fs-4 font-500">Detalhes da reserva</h2>
        <div className="detalhesImg">
          <img src='https://s2.glbimg.com/-5PMiETMb1uoYaOvNnMTHjDa8dI=/0x0:2500x1722/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/p/S/j4KpguQiCWKtM8ulpkHw/troller-tx4-dianteira-movimento.jpeg' alt="" />
        </div>
        <div className="detalhesDados">
          <div className="div-titulo">
            <h5>Categoria</h5>
            <h4>nome</h4>
          </div>
          <div className="div-endereco">
            <div>
              <BsGeoAltFill color="#FBC02D" />
            </div>
            <div className="div-info">
              <p className="localiz">cidade, pais</p>
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

      </div>
    </>
  )
}
