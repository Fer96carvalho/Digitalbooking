import React from 'react';
import { Items } from './components/Items';
import { Map } from './components/Mapa';
import { Politicas } from './components/Politicas';
import { Calendar } from './components/Calendar';
import { Descricao } from './components/Descricao';
import InfoProduto from './components/InfoProduto';


import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/api';


function Detalhes() {

  const [listaProdutos, setListaProdutos] = useState([]);

  const {id} = useParams("/detalhes/:id");

  const getProdutos = async (id) => {
        const response = await api.get(`/produto/id/${id}`)
        .then(response => setListaProdutos(response.data))
        .catch((err) => console.error(err))         
  }

  useEffect(() => {
      getProdutos(id);
  }, [id])


  return (
    <>
        <InfoProduto nome={listaProdutos.nome} cidade={listaProdutos.cidade.nome} categoria={listaProdutos.categoria.titulo} />
        <Descricao descricao={listaProdutos.descricao} />
        <Items caracteristicas={listaProdutos.caracteristicas}/>
        <Calendar/>
        <Map/>
        <Politicas/>
    </>
  )
}

export default Detalhes;

