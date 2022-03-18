import React from 'react'
import {AiOutlineLeft, AiOutlineShareAlt, AiOutlineHeart} from "react-icons/ai"
import {BsGeoAltFill} from "react-icons/bs";
import Galery from './components/Galery';
import "./style.css";


function Detalhes() {

  return (
    <>
    <section className="section-cabecalho">
        <div className="div-titulo">
            <h4>SUV</h4>
            <h2>Fiat Pulse Abarth</h2>
        </div>
        <div className="div-btn-voltar">
            <button type="button"><AiOutlineLeft color="fff" size="2.7em"/></button>
        </div>
    </section>
    <section className="section-info">
        <div className="div-endereco">
            <div>
            <BsGeoAltFill color="#FBC02D"/>
            </div>
            <div className="div-info">
            <p className="localiz">São Paulo, Capital, Brasil</p>
            <p className="info-add">1 kilomentro do Morumbi</p>
            </div>
        </div>
        <div className="div-avaliacao">
            <div className="ava-quali">
                <p className="ava-1">Muito bom</p>
                <p className="ava-2"> *****</p>
            </div>
            <div className="ava-quanti">
                <p className="ava-3">8</p>
            </div>
        </div>
    </section>
    <section className="section-galery">
        <div className="div-actions">
            <div className="icon-share" >
            <AiOutlineShareAlt color="#FBC02D" size="1.7em"/>
            </div>
            <div className="icon-like">
            <AiOutlineHeart  color="#FBC02D" size="1.7em"/>
            </div>
        </div>
        <div>
            <Galery/>
        </div>
    </section>
    <section>
        
    </section>
    </>
  )
}

export default Detalhes;

