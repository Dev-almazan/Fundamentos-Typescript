
let nombre: string = "Dev almazan"; // se puede asignar  tipo de dato string
let numeros: number | null = 50 ; // se puede asignar  tipo de dato number
let general: any; // se puede asignar cualquier tipo de dato
let varVoid: void;// se puede asignar cualquier tipo de dato null o undefined se utliza en funciones que no retornan valores
general = 'cambie a tipo string';
varVoid = null;

const  mensajeTexto= (valor:string,valor2:number)=>
{
    console.log(valor)
    alert(valor2 * 7)
}
mensajeTexto(general, numeros);

const sumaTotales = (valor: number, valor2?: number) => {
    if (valor2 === undefined) {
        valor2 = 0;
    }
    return valor * valor2;
};

/*f pasar tipo de datos en parametros y declarar retorno */
let sumaFinal: number = sumaTotales(20,numeros);

alert(sumaFinal)
