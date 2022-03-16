import React from 'react';
import "./style.css";

export default function Galery() {

    const dataImage = [
        {   
            id: "01",
            img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202202/20220211/volkswagen-voyage-1.6-msi-totalflex-4p-manual-wmimagem09153952423.jpg?s=fill&w=552&h=414&q=60",
            title: "VOLKSWAGEN VOYAGE",
            clasS: "grid-photo1"
        },
        {
            id: "02",
            img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2021/202111/20211110/volkswagen-voyage-1.6-mi-comfortline-8v-flex-4p-manual-wmimagem12254559271.jpg?s=fill&w=552&h=414&q=60",
            title: "VOLKSWAGEN VOYAGE",
            clasS: "grid-photo2"
        },
        {
            id: "03",
            img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202202/20220203/chevrolet-tracker-1.2-turbo-flex-premier-automatico-wmimagem10142539237.jpg?s=fill&w=552&h=414&q=60",
            title: "CHEVROLET TRACKER",
            clasS: "grid-photo3"
        },
        {   
            id: "04",
            img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202201/20220108/ford-focus-2.0-se-fastback-16v-flex-4p-powershift-wmimagem12093590834.jpg?s=fill&w=552&h=414&q=60",
            title: "FORD FOCUS",
            clasS: "grid-photo4"
        },    
        {
            id: "05",
            img: "https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202201/20220120/chevrolet-s10-2.5-ltz-4x2-cd-16v-flex-4p-automatico-wmimagem17254076413.jpg?s=fill&w=552&h=414&q=60",
            title: "CHEVROLET S10",
            clasS: "grid-photo5"
        }
    ]

  return (
    <>
    <div className="div-galery">
        {dataImage.map(({id,img,clasS, title})=>{
            return (
                <div  key={id} id={clasS} className="div-photo">
                    <img className="photo-galery" src={img} alt={title}  />
                </div>
            )
        })}
        </div>
    </>
  )
}
