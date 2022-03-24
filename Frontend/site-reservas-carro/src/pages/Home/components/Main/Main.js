import React from "react";
import {Link} from "react-router-dom";

import './style.css';

const cartaoList = [
    {   
        id: "01",
        img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202202/20220211/volkswagen-voyage-1.6-msi-totalflex-4p-manual-wmimagem09153952423.jpg?s=fill&w=552&h=414&q=60",
        categoria: "Carro Sedan",
        title: "VOLKSWAGEN VOYAGE",
        localizacao: "Rio de Janeiro  -RJ",
        descricao: "1.6 MSI TOTALFLEX 4P MANUAL"
    },
    {
        id: "02",
        img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202111/20211110/volkswagen-voyage-1.6-mi-comfortline-8v-flex-4p-manual-wmimagem12254559271.jpg?s=fill&w=552&h=414&q=60",
        categoria: "Carro Sedan",
        title: "VOLKSWAGEN VOYAGE",
        localizacao: "São carlos - SP",
        descricao: "1.6 MI COMFORTLINE 8V FLEX 4P MANUAL"
    },
    {
        id: "03",
        img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202202/20220203/chevrolet-tracker-1.2-turbo-flex-premier-automatico-wmimagem10142539237.jpg?s=fill&w=552&h=414&q=60",
        categoria: "Carro SUV",
        title: "CHEVROLET TRACKER",
        localizacao: "São Paulo - SP",
        descricao: "1.2 TURBO FLEX PREMIER AUTOMÁTICO"
    },
    {   
        id: "04",
        img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202201/20220108/ford-focus-2.0-se-fastback-16v-flex-4p-powershift-wmimagem12093590834.jpg?s=fill&w=552&h=414&q=60",
        categoria: "Carro Sedan",
        title: "FORD FOCUS",
        localizacao: "São Paulo - SP",
        descricao: "2.0 SE FASTBACK 16V FLEX 4P POWERSHIFT"
    },    
    {
        id: "05",
        img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202201/20220120/chevrolet-s10-2.5-ltz-4x2-cd-16v-flex-4p-automatico-wmimagem17254076413.jpg?s=fill&w=552&h=414&q=60",
        categoria: "Carro Picape",
        title: "CHEVROLET S10",
        localizacao: "São Paulo - SP",
        descricao: "2.5 LTZ 4X2 CD 16V FLEX 4P AUTOMÁTICO"
    },    
    {        
        id: "06",
        img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202112/20211228/ford-fusion-2.0-titanium-awd-16v-gasolina-4p-automatico-wmimagem11290167140.jpg?s=fill&w=552&h=414&q=60",
        categoria: "Carro Sedan",
        title: "FORD FUSION",
        localizacao: "Cascavel - PR",
        descricao: "2.0 TITANIUM AWD 16V GASOLINA 4P AUTOMÁTICO"
    },
    {
        id: "07",
        img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202112/20211223/ford-mustang-5.0-v8-tivct-gasolina-gt-premium-selectshift-wmimagem11433457411.jpg?s=fill&w=552&h=414&q=60",
        categoria: "Carro Sedan",
        title: "FORD MUSTANG",
        localizacao: "São José dos Campos - SP",
        descricao: "5.0 V8 TI-VCT GASOLINA GT PREMIUM SELECTSHIFT teste teste e teste"
    },
    {
        id: "08",
        img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202203/20220302/ford-ecosport-1.6-se-16v-flex-4p-powershift-wmimagem14091502613.jpg?s=fill&w=552&h=414&q=60",
        categoria: "Carro SUV",
        title: "FORD ECOSPORT",
        localizacao: "Campinas - SP",
        descricao: "1.6 SE 16V FLEX 4P POWERSHIFT"
    }
]


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

                    {cartaoList.map(({id, img, categoria, title, localizacao, descricao}) => {
                        return (
                            <div className="cartao" key={id}>
                                <div className="cartaoImg">
                                    <img src={img} alt="" />
                                </div>

                                <div className="cartaoDados">
                                    <span>{categoria}</span>
                                    <h4>{title}</h4>
                                    <p>{localizacao}</p>
                                    <p>{ descricao.length > 57 ? descricao.slice(0, 57) + "..." : descricao } </p>
                                    <Link to="/detalhes">
                                        <button>Ver descrição</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}

                </div>
                                
            </div>
        </>
    )
}

export default Main;