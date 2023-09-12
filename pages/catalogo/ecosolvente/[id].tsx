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
              "id": 1,
              "modelo": "1300 EX1",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/1300 EX1_1300.png",
              "categoria": "ECOSOLVENTE"
            },
            {
              "id": 2,
              "modelo": "ME - 1600 EX1-E",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 1600 EX1-E_1600.png",
              "categoria": "ECOSOLVENTE"
            },
            {
              "id": 3,
              "modelo": "ME - 1600 EX2-E",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 1600 EX2-E_1600.png",
              "categoria": "ECOSOLVENTE"
            },
            {
              "id": 8,
              "modelo": "ME - 3000 EX2-E",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 3000 EX2-E_3000.png",
              "categoria": "ECOSOLVENTE"
            },
            {
              "id": 9,
              "modelo": "ME - 300 EX4-E",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 300 EX4-E_3000.png",
              "categoria": "ECOSOLVENTE"
            },
            {
              "id": 12,
              "modelo": "ME - 1800I E1/2",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/EWRWE_1800.png",
              "categoria": "ECOSOLVENTE"
            },
            {
              "id": 13,
              "modelo": "ME - 2500I E2",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 2500I E2_2500i.png",
              "categoria": "ECOSOLVENTE"
            },
            {
              "id": 14,
              "modelo": "ME - 3000I E2",
              "imagen": "https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 3000I E2_3000i.png",
              "categoria": "ECOSOLVENTE"
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
        
        /* const res = await fetch(`https://apimaxv2.apexmaicol.online/VPecosolvente/${params.id}`)
        const data = await res.json()*/
        const modelo: Maquina2[] = [
            {"ID":1,"MODELO":"1300 EX1","CATEGORIA":"ECOSOLVENTE","DESCRIPCION":"El tamaño y el tipo de impresión de este equipo te da la oportunidad de realizar trabajos de alta calidad en vinil para interiores y/o materiales decorativos. ","IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/1300 EX1_1300.png","VELOCIDAD":[{"pass":"4","Velocidad":"12"},{"pass":"6","Velocidad":"10"},{"pass":"8","Velocidad":"8"}],"MARCA":"EPSON","CANTIDAD_CABEZAL":"1","AREA_IMPRESION":"1300","GARANTIA_MAQUINA":"5","GARANTIA_CABEZAL":"2","SUPERFICIE":null},
            {"ID":2,"MODELO":"ME - 1600 EX1-E","CATEGORIA":"ECOSOLVENTE","DESCRIPCION":"La versatilidad de este equipo te permite trabajar publicidad de alta calidad para interiores y exteriores en diferentes materiales priorizando formato de tamaño estándar.","IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 1600 EX1-E_1600.png","VELOCIDAD":[{"pass":"4","Velocidad":"13"},{"pass":"6","Velocidad":"10"},{"pass":"8","Velocidad":"8"}],"MARCA":"EPSON","CANTIDAD_CABEZAL":"1","AREA_IMPRESION":"1600","GARANTIA_MAQUINA":"5","GARANTIA_CABEZAL":"2","SUPERFICIE":null},
            {"ID":3,"MODELO":"ME - 1600 EX2-E","CATEGORIA":"ECOSOLVENTE","DESCRIPCION":"La versatilidad de este equipo te permite trabajar publicidad de alta calidad para interiores y exteriores en diferentes materiales priorizando formato de tamaño estándar.","IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 1600 EX2-E_1600.png","VELOCIDAD":[{"pass":"4","Velocidad":"16"},{"pass":"6","Velocidad":"12"},{"pass":"8","Velocidad":"10"}],"MARCA":"EPSON","CANTIDAD_CABEZAL":"2","AREA_IMPRESION":"1600","GARANTIA_MAQUINA":"5","GARANTIA_CABEZAL":"2","SUPERFICIE":null},
            {"ID":8,"MODELO":"ME - 3000 EX2-E","CATEGORIA":"ECOSOLVENTE","DESCRIPCION":"Nuestro formatos de escala industrial te aseguran la mayor productividad en alta calidad, este equipo te permitirá cumplir cualquier reto de alta producción.  ","IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 3000 EX2-E_3000.png","VELOCIDAD":[{"pass":"4","Velocidad":"15"},{"pass":"6","Velocidad":"13"},{"pass":"8","Velocidad":"10"}],"MARCA":"EPSON","CANTIDAD_CABEZAL":"2","AREA_IMPRESION":"3200","GARANTIA_MAQUINA":"5","GARANTIA_CABEZAL":"2","SUPERFICIE":null},
            {"ID":9,"MODELO":"ME - 300 EX4-E","CATEGORIA":"ECOSOLVENTE","DESCRIPCION":"Nuestro formatos de escala industrial te aseguran la mayor productividad en alta calidad, este equipo te permitirá cumplir cualquier reto de alta producción.","IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 300 EX4-E_3000.png","VELOCIDAD":[{"pass":"4","Velocidad":"30"},{"pass":"6","Velocidad":"26"},{"pass":"8","Velocidad":"20"}],"MARCA":"EPSON","CANTIDAD_CABEZAL":"4","AREA_IMPRESION":"3200","GARANTIA_MAQUINA":"5","GARANTIA_CABEZAL":"2","SUPERFICIE":null},
            {"ID":12,"MODELO":"ME - 1800I E1/2","CATEGORIA":"ECOSOLVENTE","DESCRIPCION":"La nueva generación i de cabezales EPSON, le permite a este equipo cumplir con trabajos de alta calidad y a mayor velocidad. No pierdas la oportunidad de probar esta nueva tecnología.","IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/EWRWE_1800.png","VELOCIDAD":[{"pass":"4","Velocidad":"28"},{"pass":"6","Velocidad":"20"},{"pass":"8","Velocidad":"15"}],"MARCA":"EPSON","CANTIDAD_CABEZAL":"1","AREA_IMPRESION":"1800","GARANTIA_MAQUINA":"5","GARANTIA_CABEZAL":"2","SUPERFICIE":null},
            {"ID":13,"MODELO":"ME - 2500I E2","CATEGORIA":"ECOSOLVENTE","DESCRIPCION":"La capacidad de los nuevos cabezales EPSON en esta impresora te asegura la mejor producción en alta calidad una velocidad sorprendente.","IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 2500I E2_2500i.png","VELOCIDAD":[{"pass":"4","Velocidad":"25"},{"pass":"6","Velocidad":"18"},{"pass":"8","Velocidad":"15"}],"MARCA":"EPSON","CANTIDAD_CABEZAL":"2","AREA_IMPRESION":"2500","GARANTIA_MAQUINA":"5","GARANTIA_CABEZAL":"2","SUPERFICIE":null},
            {"ID":14,"MODELO":"ME - 3000I E2","CATEGORIA":"ECOSOLVENTE","DESCRIPCION":"El poder de esta impresora con los nuevos cabezales EPSON te garantiza dar un paso adelante en el negocio de la alta producción, la nueva tecnología que trae MMAXX asegura tu éxito. ","IMAGEN":"https://maxv2.apexmaicol.online/imagenes/img_producto/ME - 3000I E2_3000i.png","VELOCIDAD":[{"pass":"4","Velocidad":"35"},{"pass":"6","Velocidad":"25"},{"pass":"8","Velocidad":"15"}],"MARCA":"EPSON","CANTIDAD_CABEZAL":"2","AREA_IMPRESION":"3200","GARANTIA_MAQUINA":"5","GARANTIA_CABEZAL":"2","SUPERFICIE":null}
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