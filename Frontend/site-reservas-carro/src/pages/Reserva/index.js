import React from 'react';
import { Calendar } from '../Detalhes/components/Calendar'
import BannerInfo from './components/BannerInfo';
import DetalhesReserva from './components/DetalheReserva';
import FormHoraReserva from './components/HoraReserva';
import { Politicas } from '../Detalhes/components/Politicas';

import "./style.css";
import FormsCliente from './components/FormDadosCliente';

export default function Reserva() {

    let selected = true;

    return (
        <>
            <section>
                <BannerInfo />
            </section>
            <section className="body-reserva">
                <section className="main-reserva">
                    {/* Section-form vai sumir caso o usuario esteva logado */}
                    <div className="section-form">
                        <FormsCliente/>
                    </div>
                    <div>
                        <div className="div-calendar">
                            <h2 className=" text-primary fs-4 font-500 mb-4">Selecione a data da reserva</h2>
                            <Calendar selected={selected} />
                        </div>
                    </div>
                    <div>
                    <FormHoraReserva />
                    </div>
                </section>
                <section className="section-detalhe-reserva">
                    <DetalhesReserva/>
                </section>
            </section>
            <section>
                <Politicas/>
            </section>

        </>
    )
}
