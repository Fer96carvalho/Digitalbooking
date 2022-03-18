import React from 'react';
import "./style.css";
import ImageGallery from 'react-image-gallery';

export default function Galery() {

    // Adicionar um parametro com o json das imagens em Galery

    const dataImage = [
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
            img: "https://styles.redditmedia.com/t5_2twpw/styles/communityIcon_8bhyo9k303x7",
            categoria: "Carro SUV",
            title: "FORD ECOSPORT",
            localizacao: "Campinas - SP",
            descricao: "1.6 SE 16V FLEX 4P POWERSHIFT"
        }
    ]

    let image = [];
    function getDataImage(item) {
        dataImage.map(({ img }) => {
            return (
                item.push({
                    original: `${img}`,
                    thumbnail: `${img}`
                })
            )
        })
        return item;
    }
    getDataImage(image);

    let imageGalery = [];
    function getImageGalery(item) {
        dataImage.map(({ img }) => {
            return (
                item.push(img)
            )
        })
        return item;
    }
getImageGalery(imageGalery);

    return (
        <>
            <div className="container-image">
                <div className="div-img div-img1">
                    <img src={imageGalery[0]} alt="" />
                </div>
                <div className="container-grid">
                    <div className="grid-container">
                        <div className="grid-img div-img2">
                            <img src={imageGalery[1]} alt="" />
                        </div>
                        <div className="grid-img div-img3">
                            <img src={imageGalery[2]} alt="" />
                        </div>
                        <div className="grid-img div-img4">
                            <img src={imageGalery[3]} alt="" />
                        </div>
                        <div className="grid-img div-img5">
                            <img src={imageGalery[4]} alt="" />
                        <p>Ver mais</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-galery">
                < ImageGallery items={image} showIndex={true} showThumbnails={true} autoPlay={true} onErrorImageURL="https://styles.redditmedia.com/t5_2twpw/styles/communityIcon_8bhyo9k303x71.png" />
            </div>
        </>
    )
}
