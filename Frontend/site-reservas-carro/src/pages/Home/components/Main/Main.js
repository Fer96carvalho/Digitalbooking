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
                            <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202202/20220211/volkswagen-voyage-1.6-msi-totalflex-4p-manual-wmimagem09153952423.jpg?s=fill&w=552&h=414&q=60" alt=""/>
                        </div>

                        <div className="cartaoDados">
                            <span>Carro Sedan</span>
                            <h4>VOLKSWAGEN VOYAGE</h4>
                            <p>Rio de Janeiro  -RJ</p>
                            <p>1.6 MSI TOTALFLEX 4P MANUAL</p>
                            <button>Ver descrição</button>
                        </div>
                        
                    </div>

                    <div className="cartao">

                        <div className="cartaoImg">
                            <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202111/20211110/volkswagen-voyage-1.6-mi-comfortline-8v-flex-4p-manual-wmimagem12254559271.jpg?s=fill&w=552&h=414&q=60" alt=""/>
                        </div>

                        <div className="cartaoDados">
                            <span>Carro Sedan</span>
                            <h4>VOLKSWAGEN VOYAGE</h4>
                            <p>São carlos - SP</p>
                            <p>1.6 MI COMFORTLINE 8V FLEX 4P MANUAL</p>
                            <button>Ver descrição</button>
                        </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202202/20220203/chevrolet-tracker-1.2-turbo-flex-premier-automatico-wmimagem10142539237.jpg?s=fill&w=552&h=414&q=60" alt=""/>
                    </div>

                    <div className="cartaoDados">
                        <span>Carro SUV</span>
                        <h4>CHEVROLET TRACKER</h4>
                        <p>São Paulo - SP</p>
                        <p>1.2 TURBO FLEX PREMIER AUTOMÁTICO</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202201/20220108/ford-focus-2.0-se-fastback-16v-flex-4p-powershift-wmimagem12093590834.jpg?s=fill&w=552&h=414&q=60" alt=""/>
                    </div>

                    <div className="cartaoDados">
                        <span>Carro Sedan</span>
                        <h4>FORD FOCUS</h4>
                        <p>São Paulo - SP</p>
                        <p>2.0 SE FASTBACK 16V FLEX 4P POWERSHIFT</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202201/20220120/chevrolet-s10-2.5-ltz-4x2-cd-16v-flex-4p-automatico-wmimagem17254076413.jpg?s=fill&w=552&h=414&q=60" alt=""/>
                    </div>

                    <div className="cartaoDados">
                        <span>Carro Picape</span>
                        <h4>CHEVROLET S10</h4>
                        <p>São Paulo - SP</p>
                        <p>2.5 LTZ 4X2 CD 16V FLEX 4P AUTOMÁTICO</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202112/20211228/ford-fusion-2.0-titanium-awd-16v-gasolina-4p-automatico-wmimagem11290167140.jpg?s=fill&w=552&h=414&q=60" alt=""/>
                    </div>

                    <div className="cartaoDados">
                        <span>Carro Sedan</span>
                        <h4>FORD FUSION</h4>
                        <p>Cascavel - PR</p>
                        <p>2.0 TITANIUM AWD 16V GASOLINA 4P AUTOMÁTICO</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202112/20211223/ford-mustang-5.0-v8-tivct-gasolina-gt-premium-selectshift-wmimagem11433457411.jpg?s=fill&w=552&h=414&q=60" alt=""/>
                    </div>

                    <div className="cartaoDados">
                        <span>Carro Sedan</span>
                        <h4>FORD MUSTANG</h4>
                        <p>São José dos Campos - SP</p>
                        <p>5.0 V8 TI-VCT GASOLINA GT PREMIUM SELECTSHIFT</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                    <div className="cartao">

                    <div className="cartaoImg">
                        <img src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202203/20220302/ford-ecosport-1.6-se-16v-flex-4p-powershift-wmimagem14091502613.jpg?s=fill&w=552&h=414&q=60" alt=""/>
                    </div>

                    <div className="cartaoDados">
                        <span>Carro SUV</span>
                        <h4>FORD ECOSPORT</h4>
                        <p>Campinas - SP</p>
                        <p>1.6 SE 16V FLEX 4P POWERSHIFT</p>
                        <button>Ver descrição</button>
                    </div>

                    </div>

                </div>


                                
            </div>
        </>
    )
}

export default Main;