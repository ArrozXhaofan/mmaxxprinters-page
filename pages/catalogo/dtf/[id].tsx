import React from 'react'
import { Maquina2 } from '../../../models/catamodels/maquinas.models';
import { Descripcion } from '@/components';

function Dtfid({data}:any) {
    

    const maquina:Maquina2 = data

  return (
    <Descripcion data={maquina} />
  )
}

export default Dtfid

export async function getStaticPaths(){

    try {

        /*const res = await fetch('https://apimaxv2.apexmaicol.online/VPdtf/')
        const data = await res.json()*/

        const data = [
            {
              "id": 6,
              "modelo": "MD 700 EX2",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/MD 700 EX2_DTF700.png",
              "categoria": "DTF"
            },
            {
              "id": 7,
              "modelo": "MD 700 EX4",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/MD 700 EX4_DTF700.png",
              "categoria": "DTF"
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
        
        const modelo: Maquina2[] = [

            {
                "ID":6,
                "MODELO":"MD 700 EX2",
                "CATEGORIA":"DTF",
                "DESCRIPCION":"Hoy la industria textil exige calidad y velocidad, con esta impresora DTF tu emprendimiento será imparable.",
                "IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/MD 700 EX2_DTF700.png",
                "VELOCIDAD":[{"pass":"4","Velocidad":"15"},{"pass":"6","Velocidad":"12"},{"pass":"8","Velocidad":"10"}],
                "MARCA":"EPSON",
                "CANTIDAD_CABEZAL":"2",
                "AREA_IMPRESION":"600",
                "GARANTIA_MAQUINA":"5",
                "GARANTIA_CABEZAL":"2",
                "SUPERFICIE": null
            },
            {
                "ID":7,
                "MODELO":"MD 700 EX4",
                "CATEGORIA":"DTF",
                "DESCRIPCION":"Hoy la industria textil exige calidad y velocidad, con esta impresora DTF tu emprendimiento será imparable.\t",
                "IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/MD 700 EX4_DTF700.png",
                "VELOCIDAD":[{"pass":"4","Velocidad":"28"},{"pass":"6","Velocidad":"20"},{"pass":"8","Velocidad":"18"}],
                "MARCA":"EPSON",
                "CANTIDAD_CABEZAL":"4",
                "AREA_IMPRESION":"600",
                "GARANTIA_MAQUINA":"5",
                "GARANTIA_CABEZAL":"2",
                "SUPERFICIE":null
            }

        ]

        //const res = await fetch(`https://apimaxv2.apexmaicol.online/VPdtf/${params.id}`)

        const data: Maquina2 | undefined = modelo.find(item => item.ID === parseInt(params.id));

        console.log(data)

        return{
            props: {
                data
            }
        }

    } catch (error) {
        console.log(error);
    }
}