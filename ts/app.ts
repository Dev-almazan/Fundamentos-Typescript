

import { usuario,niveles } from "./usuario.js";

export const data = new usuario("Ernesto", "Almazan","perfil.jpeg","Desarrollador Web",27,niveles.LIC);

let tabla: HTMLElement = document.getElementById("tarjeta")!;

function ASignarUsuarios(data :usuario):void
{

    tabla.innerHTML = `<div class="card p-4 shadow-sm" style="width: 100%;">
                               <img src="./img/${data.avatar}" class="card-img-top" alt="${data.profesion}" >     
                                <div class="card-body">
                                    <h5 class="card-title">${data.nombre} ${data.apellidos}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${data.profesion} </h6>
                                    <p class="card-text"><b>Nivel de estudios:</b>${data.nivelEducativo}</p>
                                    <a href="#" class="card-link btn-primary btn">Linkedin</a>
                                    <a href="#" class="card-link btn-dark btn">Git Hub</a>
                                </div>
                        </div>`;
}

ASignarUsuarios(data);