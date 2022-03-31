import React from "react";
import { Link } from "react-router-dom";

import api from '../../../../services/api';
import { useState, useEffect } from 'react';

import './style.css';

function Main () {

    const [listaProdutos, setListaProdutos] = useState([]);
    const [listaImagens, setListaImagens] = useState([]);
    let imgSRC = [];

    const getProdutos = async () => {
        const response = await api.get('/produto')
        .then(response => setListaProdutos(response.data))
        .catch((err) => console.error(err))         
    }

    const getImg = async () => {
        const response = await api.get('/imagem')
        .then(response => setListaImagens(response.data))
        .catch((err) => console.error(err))
    }

    useEffect(() => {
        getProdutos();
        getImg();
    }, [])

   
    return (
        <>
            <div className="main__Container">
                
                <div className="sugestaoBusca">
                    <h2>Busca por tipo de carro</h2>
                    <p>Encontre os melhores carros para você!</p>


                    <div className="card">
                        <img src="https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/Volkswagen-Talagon-5-e1619133617681.jpg?quality=70&strip=info" alt="Imagem carro SUV" />
                        <div className="legenda">
                            <p>SUV Chevrolet - Modelo 2021</p>
                        </div>
                     </div>

                    <div className="card">
                        <img src="https://motorshow.com.br/wp-content/uploads/sites/2/2020/01/7_ms431_onix-plus1.jpg" alt="Imagem carro Sedan" />
                        <div className="legenda">
                            <p>Sedan Nissan - Modelo 2022</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2021/06/28103156/peugeot-208-1gen-1-1160x652.png" alt="Imagem carro Hatch" />
                        <div className="legenda">
                            <p>Hatch Peugeot - Modelo 2020</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="https://f.i.uol.com.br/fotografia/2018/12/27/15459485435c254d7fb3273_1545948543_3x2_md.jpg" alt="Imagem carro Picape" />
                        <div className="legenda">
                            <p>Picape Ford - modelo 2021</p>
                        </div>
                    </div>
                    
                </div>

                <div className="blocoLista">

                    <h2>
                        Recomendações
                    </h2>

                    {listaProdutos.map(({ id, nome, descricao, cidade, categoria }) => {
                        return (
                            <div className="cartao" key={id}>
                                <span className="heart"></span>
                                <span className="nota">8.0</span>

                                <div className="cartaoImg">
                                    {imgSRC = listaImagens.filter(iLista => iLista.produto.id === id).map(({ id, url }) => {
                                        return (<img src={url} key={id} alt="" />)
                                    })}
                                </div>

                                <div className="cartaoDados">
                                    <span>{categoria.titulo}</span>
                                    <h4>{nome}</h4>
                                    <p>{cidade.nome}</p>
                                    <p>{ descricao.length > 57 ? descricao.slice(0, 57) + "..." : descricao } </p>
                                    <Link to={`/detalhes/${id}`}>
                                        <button>Ver descrição</button>
                                    </Link>
                                </div>

                            </div>
                        )
                    })}
                    
                </div>
                                
            </div>
        </>
    )
}

export default Main;

