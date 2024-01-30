/*Creamos clase usuario para acceder a sus metodos y propiedades  */
var Cursos = /** @class */ (function () {
    function Cursos(nombre, escuela, descripcion, certificado, periodo, certUrl) {
        this.nombre = nombre;
        this.escuela = escuela;
        this.descripcion = descripcion;
        this.certificado = certificado;
        this.periodo = periodo;
        this.certUrl = certUrl;
        console.log(this.nombre);
    }
    return Cursos;
}());
export { Cursos };
