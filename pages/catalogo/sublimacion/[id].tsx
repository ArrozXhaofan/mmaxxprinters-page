import React from 'react'
import { Maquina2 } from '../../../models/catamodels/maquinas.models';
import { Descripcion } from '@/components';

function EcoId({data}:any) {
    

    const maquina:Maquina2 = data

  return (
    <Descripcion data={maquina} />
  )
}

export default EcoId

export async function getStaticPaths(){

    try {

        const data = [
          
            {
              "id": 4,
              "modelo": "SL1800 E15",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/SL1800 E15_SL1800i E15.png",
              "categoria": "SUBLIMACION"
            },
            {
              "id": 5,
              "modelo": "SL1800I E8",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/SL1800I E8_SL1800i E8.png",
              "categoria": "SUBLIMACION"
            },
            {
              "id": 15,
              "modelo": "MS 1300 EX1",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/MS 1300 EX1_1300.png",
              "categoria": "SUBLIMACION"
            },
            {
              "id": 16,
              "modelo": "MS 1600 EX1-S",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/MS 1600 EX1-S_1600.png",
              "categoria": "SUBLIMACION"
            },
            {
              "id": 17,
              "modelo": "MS 1600 EX2-S",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/ms 1600 EX2-S_1600.png",
              "categoria": "SUBLIMACION"
            },
            {
              "id": 18,
              "modelo": "MS 1800 EX1-S",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/MS 1800 EX1-S_1800.png",
              "categoria": "SUBLIMACION"
            },
            {
              "id": 19,
              "modelo": "MS 1800 EX2-S",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/MS 1800 EX2-S_1800.png",
              "categoria": "SUBLIMACION"
            }
          
        ]

        const paths = data.map(({id}:any) => ({params:{id:`${id}`}}))

        return{
            paths,
            fallback:false
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getStaticProps({params}:any){

    try {
        
        const res = await fetch(`https://apimaxv2.apexmaicol.online/VPsublimacion/${params.id}`)
        const modelo: Maquina2[] = [
            {"ID":4,
            "MODELO":"SL1800 E15",
            "CATEGORIA":"SUBLIMACION",
            "DESCRIPCION":"La tecnología de este equipo y su fácil operatividad te da la posibilidad de asegurar una producción de muy alta calidad, además su diseño permite conservar materiales y proteger los insumos a la hora de impresión. ",
            "IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/SL1800 E15_SL1800i E15.png",
            "VELOCIDAD":[{"pass":"4","Velocidad":"200"},{"pass":"6","Velocidad":"180"},{"pass":"8","Velocidad":"150"}],
            "MARCA":"EPSON",
            "CANTIDAD_CABEZAL":"1",
            "AREA_IMPRESION":"1800",
            "GARANTIA_MAQUINA":"5",
            "GARANTIA_CABEZAL":"2",
            "SUPERFICIE":null},
         
            {"ID":5,
            "MODELO":"SL1800I E8",
            "CATEGORIA":"SUBLIMACION",
            "DESCRIPCION":"La tecnología de este equipo junto con su facilidad de uso te brinda la oportunidad de garantizar una producción de alta calidad. Además, su diseño te permite conservar los materiales y proteger los insumos durante el proceso de impresión.",
            "IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/SL1800I E8_SL1800i E8.png",
            "VELOCIDAD":[{"pass":"4","Velocidad":"250"},{"pass":"6","Velocidad":"200"},{"pass":"8","Velocidad":"180"}],
            "MARCA":"EPSON",
            "CANTIDAD_CABEZAL":"1",
            "AREA_IMPRESION":"1800",
            "GARANTIA_MAQUINA":"5",
            "GARANTIA_CABEZAL":"2",
            "SUPERFICIE":null},
         
            {"ID":15,
            "MODELO":"MS 1300 EX1",
            "CATEGORIA":"SUBLIMACION",
            "DESCRIPCION":"Tu negocio de ropa urbana y/o deportiva tiene ahora la oportunidad de imprimir a mayor calidad de los diferentes diseños y colores que tus clientes exigen, con esta impresora de sublimación ingresa tu negocio a un nuevo mundo tecnológico.",
            "IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/MS 1300 EX1_1300.png",
            "VELOCIDAD":[{"pass":"4","Velocidad":"12"},{"pass":"6","Velocidad":"10"},{"pass":"8","Velocidad":"8"}],
            "MARCA":"EPSON",
            "CANTIDAD_CABEZAL":"1",
            "AREA_IMPRESION":"1300",
            "GARANTIA_MAQUINA":"5",
            "GARANTIA_CABEZAL":"2",
            "SUPERFICIE":null},
         
            {"ID":16,
            "MODELO":"MS 1600 EX1-S",
            "CATEGORIA":"SUBLIMACION",
            "DESCRIPCION":"Este formato versátil de impresora de sublimación te permite aumentar la capacidad de producción para tu negocio de ropa urbana y/o deportiva con nueva tecnologías. ingresa tu también a este reto de mayor producción en impresiones textiles.",
            "IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/MS 1600 EX1-S_1600.png",
            "VELOCIDAD":[{"pass":"4","Velocidad":"13"},{"pass":"6","Velocidad":"10"},{"pass":"8","Velocidad":"10"}],
            "MARCA":"EPSON",
            "CANTIDAD_CABEZAL":"1",
            "AREA_IMPRESION":"1600",
            "GARANTIA_MAQUINA":"5","GARANTIA_CABEZAL":"2","SUPERFICIE":null},
         
            {"ID":17,
            "MODELO":"MS 1600 EX2-S",
            "CATEGORIA":"SUBLIMACION",
            "DESCRIPCION":"Este formato versátil de impresora de sublimación te permite aumentar la capacidad de producción para tu negocio de ropa urbana y/o deportiva con nueva tecnologías. ingresa tu también a este reto de mayor producción en impresiones textiles.",
            "IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/ms 1600 EX2-S_1600.png",
            "VELOCIDAD":[{"pass":"4","Velocidad":"16"},{"pass":"6","Velocidad":"12"},{"pass":"8","Velocidad":"10"}],
            "MARCA":"EPSON",
            "CANTIDAD_CABEZAL":"2",
            "AREA_IMPRESION":"1600",
            "GARANTIA_MAQUINA":"5",
            "GARANTIA_CABEZAL":"2",
            "SUPERFICIE":null},
         
            {"ID":18,
            "MODELO":"MS 1800 EX1-S",
            "CATEGORIA":"SUBLIMACION",
            "DESCRIPCION":"Esta impresora de sublimación en alta producción te ofrece cumplir con las exigencias de tus clientes dándoles la mas alta calidad, usando tecnologías de ultima generación. ",
            "IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/MS 1800 EX1-S_1800.png",
            "VELOCIDAD":[{"pass":"4","Velocidad":"15"},{"pass":"6","Velocidad":"12"},{"pass":"8","Velocidad":"10"}],
            "MARCA":"EPSON",
            "CANTIDAD_CABEZAL":"1",
            "AREA_IMPRESION":"1800",
            "GARANTIA_MAQUINA":"5",
            "GARANTIA_CABEZAL":"2",
            "SUPERFICIE":null},
         
            {"ID":19,
            "MODELO":"MS 1800 EX2-S",
            "CATEGORIA":"SUBLIMACION",
            "DESCRIPCION":"Esta impresora de sublimación en alta producción te ofrece cumplir con las exigencias de tus clientes dándoles la mas alta calidad, usando tecnologías de ultima generación.",
            "IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/MS 1800 EX2-S_1800.png",
            "VELOCIDAD":[{"pass":"4","Velocidad":"18"},{"pass":"6","Velocidad":"14"},{"pass":"8","Velocidad":"12"}],
            "MARCA":"EPSON",
            "CANTIDAD_CABEZAL":"2",
            "AREA_IMPRESION":"1800",
            "GARANTIA_MAQUINA":"5",
            "GARANTIA_CABEZAL":"2",
            "SUPERFICIE":null}
         ]

         const data: Maquina2 | undefined = modelo.find(item => item.ID === parseInt(params.id)) 

        return{
            props: {
                data
            }
        }

    } catch (error) {
        console.log(error);
    }
}