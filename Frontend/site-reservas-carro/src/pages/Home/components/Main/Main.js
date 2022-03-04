import React from "react";

import './style.css';

function Main () {
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

                    <div className="cartao">

                        <div className="cartaoImg">
                            <img src="http://blogadhesivoindustrial.com/wp-content/uploads/2018/04/vida-util-pecas-carro-2.jpg" />
                        </div>

                        <div className="cartaoDados">
                            <span>Categoria</span>
                            <h4>Fusca</h4>
                            <p>Rio de Janeiro</p>
                            <p>Descrição</p>
                            <button>Ver descrição</button>
                        </div>
                        
                    </div>

                    <div className="cartao">

                        <div className="cartaoImg">
                            <img src="http://blogadhesivoindustrial.com/wp-content/uploads/2018/04/vida-util-pecas-carro-2.jpg" />
                        </div>

                        <div className="cartaoDados">
                            <span>Categoria</span>
                            <h4>Fusca</h4>
                            <p>Rio de Janeiro</p>
                            <p>Descrição</p>
                            <button>Ver descrição</button>
                        </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="http://blogadhesivoindustrial.com/wp-content/uploads/2018/04/vida-util-pecas-carro-2.jpg" />
                    </div>

                    <div className="cartaoDados">
                        <span>Categoria</span>
                        <h4>Fusca</h4>
                        <p>Rio de Janeiro</p>
                        <p>Descrição</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="http://blogadhesivoindustrial.com/wp-content/uploads/2018/04/vida-util-pecas-carro-2.jpg" />
                    </div>

                    <div className="cartaoDados">
                        <span>Categoria</span>
                        <h4>Fusca</h4>
                        <p>Rio de Janeiro</p>
                        <p>Descrição</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="http://blogadhesivoindustrial.com/wp-content/uploads/2018/04/vida-util-pecas-carro-2.jpg" />
                    </div>

                    <div className="cartaoDados">
                        <span>Categoria</span>
                        <h4>Fusca</h4>
                        <p>Rio de Janeiro</p>
                        <p>Descrição</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="http://blogadhesivoindustrial.com/wp-content/uploads/2018/04/vida-util-pecas-carro-2.jpg" />
                    </div>

                    <div className="cartaoDados">
                        <span>Categoria</span>
                        <h4>Fusca</h4>
                        <p>Rio de Janeiro</p>
                        <p>Descrição</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="http://blogadhesivoindustrial.com/wp-content/uploads/2018/04/vida-util-pecas-carro-2.jpg" />
                    </div>

                    <div className="cartaoDados">
                        <span>Categoria</span>
                        <h4>Fusca</h4>
                        <p>Rio de Janeiro</p>
                        <p>Descrição</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="http://blogadhesivoindustrial.com/wp-content/uploads/2018/04/vida-util-pecas-carro-2.jpg" />
                    </div>

                    <div className="cartaoDados">
                        <span>Categoria</span>
                        <h4>Fusca</h4>
                        <p>Rio de Janeiro</p>
                        <p>Descrição</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                </div>


                                
            </div>
        </>
    )
}

export default Main;