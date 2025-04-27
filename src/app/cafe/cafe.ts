export class Cafe 
{
    id: number;
    nombre: string;
    tipo: string;
    region: string;
    nota: string;
    descripcion: string;
    imagen: string;
  
    constructor(id: number, nombre: string, tipo: string, region: string, nota: string, descripcion: string, imagen: string) 
    {
      this.id = id;
      this.nombre = nombre;
      this.tipo = tipo;
      this.region = region;
      this.nota = nota;
      this.descripcion = descripcion;
      this.imagen = imagen;
    }
}  