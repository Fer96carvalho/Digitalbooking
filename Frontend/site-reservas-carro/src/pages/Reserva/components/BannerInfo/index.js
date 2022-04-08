import React from 'react';
import { AiOutlineLeft } from "react-icons/ai";


export default function BannerInfo({categoria, nome}) {

    function goBack() {
        window.history.back()
    }

    return (
        <>
            <section className="section-cabecalho">
                <div className="div-titulo">
                    <h5>{categoria}</h5>
                    <h4>{nome}</h4>
                </div>
                <div className="div-btn-voltar">
                    <button type="button"><AiOutlineLeft color="fff" size="2.7em" onClick={goBack} /></button>
                </div>
            </section>
        </>
    )
}
