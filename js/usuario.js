/*Creamos clase usuario para acceder a sus metodos y propiedades  */
export var niveles;
(function (niveles) {
    niveles["LIC"] = "Licenciatura";
    niveles["BACH"] = "Bachillerato";
    niveles["POSGRADOS"] = "Posgrados";
})(niveles || (niveles = {}));
var usuario = /** @class */ (function () {
    function usuario(nombre, apellidos, avatar, profesion, gitProfile, liProfile, edad, nivelEducativo, cursosUsuario) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.profesion = profesion;
        this.gitProfile = gitProfile;
        this.liProfile = liProfile;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursosUsuario = cursosUsuario;
    }
    /*Funciones */
    usuario.prototype.numeroDeCursosAprobados = function (valor) {
        if (valor.length > 0) {
            return valor.filter(function (dato) { return dato.certificado == "si"; }).length;
        }
        else {
            return 0;
        }
    };
    return usuario;
}());
export { usuario };
