import { usuario, niveles } from "./usuario.js";
export var data = new usuario("Ernesto", "Almazan", "perfil.jpeg", "Desarrollador Web", 27, niveles.LIC);
var tabla = document.getElementById("tarjeta");
function ASignarUsuarios(data) {
    tabla.innerHTML = "<div class=\"card p-4 shadow-sm\" style=\"width: 100%;\">\n                               <img src=\"./img/".concat(data.avatar, "\" class=\"card-img-top\" alt=\"").concat(data.profesion, " \">     \n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\">").concat(data.nombre, " ").concat(data.apellidos, "</h5>\n                                    <h6 class=\"card-subtitle mb-2 text-muted\">").concat(data.profesion, " </h6>\n                                    <p class=\"card-text\"><b>Nivel de estudios:</b>").concat(data.nivelEducativo, "</p>\n                                    <a href=\"#\" class=\"card-link btn-primary btn\">Linkedin</a>\n                                    <a href=\"#\" class=\"card-link btn-dark btn\">Git Hub</a>\n                                </div>\n                        </div>");
}
ASignarUsuarios(data);
