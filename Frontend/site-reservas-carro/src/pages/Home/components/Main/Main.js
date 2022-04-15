import React from "react";
import { Link } from "react-router-dom";

import api from '../../../../services/api';
import { useState, useEffect } from 'react';

import './style.css';

import SearchMain from "../SearchMain";
import PrincipalMain from "../PrincipalMain";

function Main ({props}) {

    // const [listaProdutos, setListaProdutos] = useState([]);
    // const [listaImagens, setListaImagens] = useState([]);
    // const [listaReservas, setListaReservas] = useState([]);

    // const getProdutos = async () => {
    //     await api.get('/produto')
    //     .then(response => setListaProdutos(response.data))
    //     .catch((err) => console.error(err))         
    // }

    // const getReservas = async () => {
    //     await api.get('/reserva')
    //     .then(response => setListaReservas(response.data))
    //     .catch((err) => console.log(err))
    // }

    // const getImg = async () => {
    //     await api.get('/imagem')
    //     .then(response => setListaImagens(response.data))
    //     .catch((err) => console.error(err))
    // }

    // useEffect(() => {
    //     getProdutos();
    //     getReservas();
    //     getImg();
    // }, [])
  
// if (localStorage.getItem('@SESSION') === 'null') {
//     console.log("Null")
// } else {
//     console.log("Não null")
// }


    if((props.cidade == "" && props.rangeReserva == "") || (typeof props.cidade === "undefined" && typeof props.rangeReserva === "undefined")) {
        return (
            <>
                <PrincipalMain />
                {/* {console.log(props.cidade + " " + props.rangeReserva)} */}
            </>
            
        )
    } else {
        return (
            <>
                <SearchMain props={props} />
                {/* {console.log(props.cidade + " " + props.rangeReserva)} */}
            </>
        )
    }
    



        
        // <>
 
     
        //     {objeto.map(({cidade, rangeReserva}) => {
                
        //         if (objeto) {
        //             return(<PrincipalMain />)
        //         } else {
        //             return(<SearchMain />)
                    
        //         }

        //     })}

        // </>
    
}

export default Main;

