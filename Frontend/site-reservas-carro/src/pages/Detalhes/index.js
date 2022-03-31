import React from 'react';
import { Items } from './components/Items';
import { Map } from './components/Mapa';
import { Politicas } from './components/Politicas';
import { Calendar } from './components/Calendar';
import { Descricao } from './components/Descricao';
import InfoProduto from './components/InfoProduto';


import { useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
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
        <Galery/>
        <Descricao descricao={produto.descricao} />
        <Items caracteristicas={produto.caracteristicas} />
        <Calendar/>
        <Map/>
        <Politicas/>
    </>
  )
}

export default Detalhes;

