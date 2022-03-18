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

        {/* <div className="container-image">
            <div className="div-img div-img1">
                <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202112/20211223/ford-mustang-5.0-v8-tivct-gasolina-gt-premium-selectshift-wmimagem11433457411.jpg" alt="" />
            </div>
            <div className="container-grid">
            <div className="grid-container">
                <div className="grid-img div-img2">
                    <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202112/20211223/ford-mustang-5.0-v8-tivct-gasolina-gt-premium-selectshift-wmimagem11433457411.jpg" alt=""/>
                </div>
                <div className="grid-img div-img3">
                    <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202112/20211223/ford-mustang-5.0-v8-tivct-gasolina-gt-premium-selectshift-wmimagem11433457411.jpg" alt=""/>
                </div>
                <div className="grid-img div-img4">
                    <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202112/20211223/ford-mustang-5.0-v8-tivct-gasolina-gt-premium-selectshift-wmimagem11433457411.jpg" alt=""/>
                </div>
                <div className="grid-img div-img5">
                    <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202112/20211223/ford-mustang-5.0-v8-tivct-gasolina-gt-premium-selectshift-wmimagem11433457411.jpg" alt=""/>
                    <p>Ver mais</p>
                </div>
            </div>
            </div>
        </div> */}


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

