/*Creamos clase usuario para acceder a sus metodos y propiedades  */
export var niveles;
(function (niveles) {
    niveles["LIC"] = "Licenciatura";
    niveles["BACH"] = "Bachillerato";
    niveles["POSGRADOS"] = "Posgrados";
})(niveles || (niveles = {}));
var usuario = /** @class */ (function () {
    function usuario(nombre, apellidos, edad, nivelEducativo) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        console.log(this.nombre);
    }
    return usuario;
}());
export { usuario };