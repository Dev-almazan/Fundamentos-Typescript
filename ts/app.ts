
import { usuario,niveles } from "./usuario.js";
import { Cursos } from "./cursos.js";

const data = new usuario("Ernesto", "Almazan", "perfil.jpeg", "Desarrollador Web", 27, niveles.LIC, [new Cursos("React JS", "Coder House", "Curso desarrollo web front end", "si", 2022), new Cursos("Front End", "Bedu tech", "Curso desarrollo web front end", "si", 2020)]);

let cursosAprobados:number = data.numeroDeCursosAprobados(data.cursosUsuario);

let card: HTMLElement = document.getElementById("tarjeta")!;
let cursoSec: HTMLElement = document.getElementById("SecCursos")!;

function ASignarUsuarios(data :usuario):void
{

    card.innerHTML = `<div class="card p-4 shadow-sm" style="width: 100%;">
                               <img src="./img/${data.avatar}" class="card-img-top" alt="${data.profesion}" >     
                                <div class="card-body">
                                    <h5 class="card-title">${data.nombre} ${data.apellidos}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${data.profesion} </h6>
                                    <p class="card-text"><b>Cursos aprobados:</b>${cursosAprobados}</p>
                                    <a href="#" class="card-link btn-primary btn">Linkedin</a>
                                    <a href="#" class="card-link btn-dark btn">Git Hub</a>
                                </div>
                        </div>`;
}


function AsignarCursos(data:Cursos[]):void
{
        data.forEach(element => {
            cursoSec.innerHTML += `<div class="card text-center mb-4">
                            <div class="card-header">${element.nombre} </div>
                            <div class="card-body">
                                <h5 class="card-title"><strong>${element.escuela}</strong></h5>
                                <p class="card-text">${element.descripcion}</p>
                                <a href="#" class="btn btn-primary" data-mdb-ripple-init>Ver certificado</a>
                            </div>
                            <div class="card-footer text-muted">${element.periodo}</div>
                        </div>`;
            
        });
}

ASignarUsuarios(data);

AsignarCursos(data.cursosUsuario);