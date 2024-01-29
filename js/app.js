import { usuario, niveles } from "./usuario.js";
import { Cursos } from "./cursos.js";
export var cursos = [
    new Cursos("React JS", "Coder House", "Curso desarrollo web front end", "si", 2022),
    new Cursos("Front End", "Bedu tech", "Curso desarrollo web front end", "si", 2020),
    new Cursos("Java", "Platzi", "Curso desarrollo de aplicaciones móviles", "si", 2021),
    new Cursos("Python", "Udemy", "Curso aprendizaje automático", "si", 2023),
    new Cursos("C++", "Coursera", "Curso programación de sistemas", "no", 2021),
    new Cursos("SQL", "EdX", "Curso bases de datos relacionales", "no", 2022),
    new Cursos("HTML y CSS", "Khan Academy", "Curso fundamentos de desarrollo web", "si", 2020)
];
var data = new usuario("Ernesto", "Almazan", "perfil.jpeg", "Desarrollador Web", 27, niveles.LIC, cursos);
var cursosAprobados = data.numeroDeCursosAprobados(data.cursosUsuario);
var card = document.getElementById("tarjeta");
var cursoSec = document.getElementById("SecCursos");
function ASignarUsuarios(data) {
    card.innerHTML = "<div class=\"card p-4 shadow-sm\" style=\"width: 100%;\">\n                               <img src=\"./img/".concat(data.avatar, "\" class=\"card-img-top\" alt=\"").concat(data.profesion, "\" >     \n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">").concat(data.nombre, " ").concat(data.apellidos, "</h5>\n                                    <h6 class=\"card-subtitle mb-2 text-muted\">").concat(data.profesion, " </h6>\n                                    <p class=\"card-text\"><b>Cursos aprobados:</b>").concat(cursosAprobados, "</p>\n                                    <a href=\"#\" class=\"card-link btn-primary btn\">Linkedin</a>\n                                    <a href=\"#\" class=\"card-link btn-dark btn\">Git Hub</a>\n                                </div>\n                        </div>");
}
function AsignarCursos(data) {
    data.forEach(function (element) {
        cursoSec.innerHTML += "<div class=\"card text-center mb-4\">\n                            <div class=\"card-header\">".concat(element.nombre, " </div>\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\"><strong>").concat(element.escuela, "</strong></h5>\n                                <p class=\"card-text\">").concat(element.descripcion, "</p>\n                                <a href=\"#\" class=\"btn btn-primary\" data-mdb-ripple-init>Ver certificado</a>\n                            </div>\n                            <div class=\"card-footer text-muted\">").concat(element.periodo, "</div>\n                        </div>");
    });
}
ASignarUsuarios(data);
AsignarCursos(data.cursosUsuario);
