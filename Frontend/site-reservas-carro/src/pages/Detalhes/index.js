import React from 'react';
import { Items } from './components/Items';
import { Map } from './components/Mapa';
import { Politicas } from './components/Politicas';
import { Calendar } from './components/Calendar';
import { Descricao } from './components/Descricao';
import InfoProduto from './components/InfoProduto';
import styled from "./components/Calendar/styles.module.scss";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";



import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import Galery from './components/Galery';


function Detalhes() {


  const { id } = useParams();

  const [produto, setProduto] = useState({});

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
      <InfoProduto nome={produto.nome} categoria={produto.categoria.titulo} cidade={produto.cidade.nome} pais={produto.cidade.pais} />
      <Galery id={id}/>
      <Descricao descricao={produto.descricao} />
      <Items caracteristicas={produto.caracteristicas} />
      <h2 className="fs-4 font-600 m-3">Datas disponíveis</h2>
      <Container as="section" fluid className="max-width-1180 py-4">
        <Container fluid className={`${styled.container} p-0`}>
          <Calendar />
          <div className={styled.box_info}>
            <div>
              <p className="font-500 my-3">Deseja reservar este produto?</p>
              <Link to={`/reserva/produto/${id}`}>
              <button className="font-500">Iniciar Reserva</button>
              </Link>
            </div>
          </div>
        </Container>
      </Container>
      <Map />
      <Politicas />
    </>
  )
}

export default Detalhes;

