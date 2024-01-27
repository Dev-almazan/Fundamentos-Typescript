/*Creamos clase usuario para acceder a sus metodos y propiedades  */
var Cursos = /** @class */ (function () {
    function Cursos(nombre, escuela, descripcion, certificado, periodo) {
        this.nombre = nombre;
        this.escuela = escuela;
        this.descripcion = descripcion;
        this.certificado = certificado;
        this.periodo = periodo;
        console.log(this.nombre);
    }
    return Cursos;
}());
export { Cursos };
