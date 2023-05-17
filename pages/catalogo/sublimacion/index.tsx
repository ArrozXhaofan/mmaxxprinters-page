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

export default Sublimacion;


export async function getStaticProps(){

    try {
        
        const res = await fetch('https://apimaxv2.apexmaicol.online/VPsublimacion/')
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
