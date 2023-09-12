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
        DTFs
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
        
        /*const res = await fetch('https://apimaxv2.apexmaicol.online/VPdtf/')
        const data = await res.json()*/

        const data:Maquina[] = [
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

        return{
            props: {
                data
            }
        }

    } catch (error) {
        console.log(error);
    }
}
