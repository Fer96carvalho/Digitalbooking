import React from "react";
import { Link } from "react-router-dom";

import api from '../../../../services/api';
import { useState, useEffect } from 'react';

import './style.css';

function SearchMain () {

    const [listaProdutos, setListaProdutos] = useState([]);
    const [listaImagens, setListaImagens] = useState([]);
    const [listaReservas, setListaReservas] = useState([]);

    const getProdutos = async () => {
        await api.get('/produto')
        .then(response => setListaProdutos(response.data))
        .catch((err) => console.error(err))         
    }

    const getReservas = async () => {
        await api.get('/reserva')
        .then(response => setListaReservas(response.data))
        .catch((err) => console.log(err))
    }

    const getImg = async () => {
        await api.get('/imagem')
        .then(response => setListaImagens(response.data))
        .catch((err) => console.error(err))
    }

    useEffect(() => {
        getProdutos();
        getReservas();
        getImg();
    }, [])

    return (
            <div className="main__Container">
                <div className="blocoLista">

                    <h2>
                        Resultado:
                    </h2>

                    {listaProdutos.map(({ id, nome, descricao, cidade, categoria }) => {
                        return (
                            <div className="cartao" key={id}>
                                <span className="heart"></span>
                                <span className="nota">8.0</span>

                                <div className="cartaoImg">
                                    {listaImagens.filter(iLista => iLista.produto.id === id).slice(0, 1).map(({ id, url }) => {
                                        return (<img src={url} key={id} alt="" />)
                                    })}
                                </div>

                                <div className="cartaoDados">
                                    <span>{categoria.titulo}</span>
                                    <h4>{nome}</h4>
                                    <p>{cidade.nome}</p>
                                    <p>{ descricao.length > 57 ? descricao.slice(0, 57) + "..." : descricao } </p>
                                    <Link to={`/produto/detalhes/${id}`}>
                                        <button >Ver descrição</button>
                                    </Link>
                                </div>

                            </div>
                        )
                    })}

                </div>
            </div>
    )
}

export default SearchMain;