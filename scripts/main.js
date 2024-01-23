var nombre = "Dev almazan"; // se puede asignar  tipo de dato string
var numeros = 50; // se puede asignar  tipo de dato number
var general; // se puede asignar cualquier tipo de dato
var varVoid; // se puede asignar cualquier tipo de dato null o undefined se utliza en funciones que no retornan valores
general = 'cambie a tipo string';
varVoid = null;
var mensajeTexto = function (valor, valor2) {
    console.log(valor);
    alert(valor2 * 7);
};
mensajeTexto(general, numeros);
var sumaTotales = function (valor, valor2) {
    if (valor2 === undefined) {
        valor2 = 0;
    }
    return valor * valor2;
};
/*f pasar tipo de datos en parametros y declarar retorno */
var sumaFinal = sumaTotales(20, numeros);
alert(sumaFinal);
