import React from "react";
import { Link } from "react-router-dom";

import api from '../../../../services/api';
import { useState, useEffect } from 'react';

import './style.css';

import SearchMain from "../SearchMain";
import PrincipalMain from "../PrincipalMain";

function Main ({objeto}) {

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

    if (!objeto.cidade) {
        return (<PrincipalMain />);
    }

    
    // if ('geolocation' in navigator) {
    //      navigator.geolocation.getCurrentPosition((position) => {
    //          console.log(position)
    //      }, (error) => {
    //          console.log(error)
    //      })
    //     const watcher = navigator.geolocation.watchPosition((position) => {
    //         console.log(position)
    //     }, (error) => {
    //         console.log(error)
    //     }, {
    //         enableHighAccuracy: true, maximumAge: 30000, timeout: 30000
    //     })
    //     navigator.geolocation.clearWatch(watcher)
    // } else {
    //     alert('Ops, não foi possivel pegar localização')
    // }

   
    return (
        <>

            {objeto.map(({cidade, rangeReserva}) => {
                if (cidade == "") {
                    return(<PrincipalMain />)
                } else {
                    return(<SearchMain />)
                    
                }
            })}
            
        </>
    )
}

export default Main;

