import { Maquina } from "../../../models/catamodels/maquinas.models"; 
import { Card,Bloque } from "@/components";



function Sublimacion({data}:any) {

  const maquinas:Maquina[] = data;


  return (
    <div className='max-w-6xl w-full pt-5 relative overflow-hidden min-h-screen'>

      <div className="absolute right-0 h-[1100px] w-[1100px] -z-20 rotate-[100deg] translate-x-[800px] md:translate-x-[500px]">
        <Bloque />
      </div>
        
      <h1 className='text-primary font-semibold text-2xl lg:text-4xl pl-3'>
        SUBLIMADORAS
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10 flex-wrap">
        
       {
        maquinas.map(maquina => (
          <Card key={maquina.id} data={maquina} />
        ))
       }
        
      </div>

    </div>
  );
}

export default Sublimacion;


export async function getStaticProps(){

    try {
        
        /*const res = await fetch('https://apimaxv2.apexmaicol.online/VPsublimacion/')
        const data = await res.json()*/

        const data: Maquina[] = [
          
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

        return{
            props: {
                data
            }
        }

    } catch (error) {
        console.log(error);
    }
}
