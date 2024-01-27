
/*Creamos clase usuario para acceder a sus metodos y propiedades  */


export class Cursos {
    constructor(public nombre: string, public escuela: string, public descripcion: string, public certificado: string, public periodo: number) {
        console.log(this.nombre)
    }
}



