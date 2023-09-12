export  interface Maquina {
  id: number;
  modelo: string;
  imagen: string;
  categoria: string;
}

export  interface Maquina2 {
  ID: number;
  MODELO: string;
  CATEGORIA: string;
  DESCRIPCION: string;
  IMAGEN: string;
  VELOCIDAD: VELOCIDAD[];
  MARCA: string;
  CANTIDAD_CABEZAL: string;
  AREA_IMPRESION: string;
  GARANTIA_MAQUINA: string;
  GARANTIA_CABEZAL: string;
  SUPERFICIE: any;
}

export interface SUPERFICIE {
  imagen: string;
  material: string;
  descripcion: string;
}

interface VELOCIDAD {
  pass: string;
  Velocidad: string;
}

export const Catacartas = [
  {
    id: 1,
    title: "SUBLIMACIÓN",
    description:'Ecosostenibles como siempre este es un texto de prueba que se ra ejecucate en el textoto',
    path: 'catalogo/sublimacion'
  },
  {
    id: 2,
    title: "DTF",
    description:'Ecosostenibles como siempre este es un texto de prueba que se ra ejecucate en el textoto',
    path: 'catalogo/dtf'
  },
  {
    id: 3,
    title: "ECOSOLVENTE",
    description:'Ecosostenibles como siempre este es un texto de prueba que se ra ejecucate en el textoto',
    path: 'catalogo/ecosolvente'

  },
];

export interface Catacarta{
  id:number,
  title:string,
  description:string
  path:string
}
