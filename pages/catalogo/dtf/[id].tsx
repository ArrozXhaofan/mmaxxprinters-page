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

        const res = await fetch('https://apimaxv2.apexmaicol.online/VPdtf/')
        const data = await res.json()

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
        
        const res = await fetch(`https://apimaxv2.apexmaicol.online/VPdtf/${params.id}`)
        const data = await res.json()

        return{
            props: {
                data
            }
        }

    } catch (error) {
        console.log(error);
    }
}