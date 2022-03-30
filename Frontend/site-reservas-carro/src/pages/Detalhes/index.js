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


function Detalhes() {


  const [listaProdutos, setListaProdutos] = useState([]);

  const {id} = useParams();
  const getProdutos = async () => {
        const response = await api.get(`produto/id/${id}`)
        .then(response => setListaProdutos(response.data)).then(console.log(listaProdutos))
        .catch((err) => console.error(err))         
  }

  useEffect(() => {
      getProdutos();
  }, [])


// console.log("TESTE: " + listaProdutos.nome)

  return (
    <>
        <InfoProduto nome={listaProdutos.nome} categoria={listaProdutos.categoria.titulo} cidade={listaProdutos.cidade.nome} pais={listaProdutos.cidade.pais} />
        <Descricao />
        <Items />
        <Calendar/>
        <Map/>
        <Politicas/>
    </>
  )
}

export default Detalhes;

