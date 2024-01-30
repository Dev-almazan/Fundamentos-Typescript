import { usuario, niveles } from "./usuario.js";
import { Cursos } from "./cursos.js";
export var cursos = [
    new Cursos("React JS", "Coder House", "Curso desarrollo web framework React JS , creación de SPA", "si", 2023, "https://www.coderhouse.com.mx/certificados/63f9534bddb983000e1b648c"),
    new Cursos("Front End", "Bedu tech", "Curso de fundamentos del desarrollo Front End", "si", 2022, "https://www.linkedin.com/in/dev-almazan/overlay/1607963516664/single-media-viewer/?profileId=ACoAACkQPpMBTWbeCN9D5yI0eA06RPJFnI0Bt88"),
    new Cursos("Java", "Platzi", "Curso desarrollo de aplicaciones móviles", "no", 2021, ""),
    new Cursos("Python", "Udemy", "Curso aprendizaje automático", "no", 2023, ""),
    new Cursos("TypeScript", "Coursera", "Fundamentos de TypeScript", "si", 2024, "https://www.coursera.org/account/accomplishments/certificate/LYSYL8B82WSL"),
    new Cursos("SQL", "EdX", "Curso bases de datos relacionales", "no", 2022, ""),
    new Cursos("HTML y CSS", "Khan Academy", "Curso fundamentos de desarrollo web", "no", 2020, "")
];
var data = new usuario("Ernesto", "Almazan", "perfil.png", "Desarrollador Web", 27, niveles.LIC, cursos);
var cursosAprobados = data.numeroDeCursosAprobados(data.cursosUsuario);
var card = document.getElementById("tarjeta");
var cursoSec = document.getElementById("SecCursos");
function ASignarUsuarios(data) {
    card.innerHTML = "<div class=\"card shadow-sm card-Perfil\" >\n                               <img src=\"./img/".concat(data.avatar, "\" class=\"card-img-top img-pf\" alt=\"").concat(data.profesion, "\" >     \n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\"> ").concat(data.nombre, " ").concat(data.apellidos, "</h5>\n                                    <h6 class=\"card-subtitle  mb-2 text-muted\"> ").concat(data.profesion, " </h6>\n                                    <p class=\"card-text \"><b>Cursos con certificado: </b>").concat(cursosAprobados, "</p>\n                                        <div class=\"btn-group\">\n                                            <a href=\"#\" class=\"card-link btn-dark btn\">Git Hub</a>\n                                            <a href=\"#\" class=\"card-link btn-primary btn\">Linkedin</a>\n                                        </div>   \n                                    \n                                </div>\n                        </div>");
}
function AsignarCursos(data) {
    data.forEach(function (element) {
        cursoSec.innerHTML += "<div class=\"card text-center mb-4\">\n                            <div class=\"card-header\">".concat(element.nombre, " </div>\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\"><strong>").concat(element.escuela, "</strong></h5>\n                                <p class=\"card-text\">").concat(element.descripcion, "</p>\n                               <a href=\"").concat(element.certUrl, "\" target=\"_blank\" class=\"btn btn-primary\"  ").concat(element.certificado !== 'si' ? 'style="display: none;"' : '', ">Ver certificado</a>\n                            </div>\n                            <div class=\"card-footer text-muted\">").concat(element.periodo, "</div>\n                        </div>");
    });
}
ASignarUsuarios(data);
AsignarCursos(data.cursosUsuario);
