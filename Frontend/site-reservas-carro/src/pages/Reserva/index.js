import React,{useEffect, useState} from 'react';
import { Calendar } from '../Detalhes/components/Calendar'
import BannerInfo from './components/BannerInfo';
import DetalhesReserva from './components/DetalheReserva';
import FormHoraReserva from './components/HoraReserva';
import { Politicas } from '../Detalhes/components/Politicas';
import { useParams } from 'react-router-dom';
import api from '../../services/api';


import "./style.css";
import FormsCliente from './components/FormDadosCliente';

export default function Reserva() {

    const { id } = useParams();
    const [produto, setProduto] = useState({});
    let selected = true;

    function topo()
    {
        window.parent.scroll(0,0);
    }

    window.onload = topo();
  
    useEffect(() => {
      async function getProduto() {
        await api.get(`/produto/id/${id}`)
          .then(response => setProduto(response.data))
      }
      getProduto();
    }, []);
  
    if (!produto.nome) {
      return null;
    }

    

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
                    <DetalhesReserva id={id} nome={produto.nome} categoria={produto.categoria.titulo} cidade={produto.cidade.nome} pais={produto.cidade.pais}/>
                </section>
            </section>
            <section>
                <Politicas/>
            </section>

        </>
    )
}
