import { Maquina } from "../../../models/catamodels/maquinas.models"; 
import { Card,Bloque } from "@/components";



function Dtf({data}:any) {

  const maquinas:Maquina[] = data;


  return (
    <div className='max-w-6xl w-full pt-5 relative overflow-hidden min-h-screen'>

      <div className="absolute right-0 h-[1100px] w-[1100px] -z-20 rotate-[100deg] translate-x-[800px] md:translate-x-[500px]">
        <Bloque />
      </div>
        
      <h1 className='text-primary font-semibold text-2xl lg:text-4xl pl-3'>
        ECOSOLVENTES
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

export default Dtf;


export async function getStaticProps(){

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

        return{
            props: {
                data
            }
        }

    } catch (error) {
        console.log(error);
    }
}
