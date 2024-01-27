
/*Creamos clase usuario para acceder a sus metodos y propiedades  */

export enum niveles {
    LIC ="Licenciatura",
    BACH = "Bachillerato",
    POSGRADOS = "Posgrados"

}

export class usuario
{
    constructor(public nombre: string, public apellidos: string, public edad: number, public nivelEducativo: niveles)
    {
        console.log(this.nombre)
    }
}


