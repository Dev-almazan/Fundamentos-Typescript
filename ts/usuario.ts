
/*Creamos clase usuario para acceder a sus metodos y propiedades  */

import { Cursos } from "./cursos.js"

export enum niveles {
    LIC ="Licenciatura",
    BACH = "Bachillerato",
    POSGRADOS = "Posgrados"

}


export class usuario
{
    constructor(public nombre: string, public apellidos: string, public avatar: string, public profesion: string, public edad: number, public nivelEducativo: niveles, public cursosUsuario:Cursos[])
    {
    }
        
    /*Funciones adicionales */
    public numeroDeCursosAprobados(valor:any):number {
        if (valor.length > 0)
        {
            return valor.filter((dato: { certificado: string; }) => dato.certificado == "si").length;
        }
        else
        {
            return 0;
        }
    }

}



