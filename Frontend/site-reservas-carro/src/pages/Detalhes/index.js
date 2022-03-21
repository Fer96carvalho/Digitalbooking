import React from 'react';
import { Items } from './components/Items';
import { Map } from './components/Mapa';
import { Politicas } from './components/Politicas';
import { Calendar } from './components/Calendar';
import { Descricao } from './components/Descricao';
import InfoProduto from './components/InfoProduto';


function Detalhes() {

  return (
    <>
        <InfoProduto/>
        <Descricao/>
        <Items/>
        <Calendar/>
        <Map/>
        <Politicas/>
    </>
  )
}

export default Detalhes;

