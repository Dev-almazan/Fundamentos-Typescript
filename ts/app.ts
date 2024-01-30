
import { usuario,niveles } from "./usuario.js";
import { Cursos } from "./cursos.js";

export let cursos:any = [
    new Cursos("React JS", "Coder House", "Curso desarrollo web framework React JS , creación de SPA", "si", 2023,"https://www.coderhouse.com.mx/certificados/63f9534bddb983000e1b648c"),
    new Cursos("Front End", "Bedu tech", "Curso de fundamentos del desarrollo Front End", "si", 2022, "https://www.linkedin.com/in/dev-almazan/overlay/1607963516664/single-media-viewer/?profileId=ACoAACkQPpMBTWbeCN9D5yI0eA06RPJFnI0Bt88"),
    new Cursos("Java", "Platzi", "Curso desarrollo de aplicaciones móviles", "no", 2021,""),
    new Cursos("Python", "Udemy", "Curso aprendizaje automático", "no", 2023,""),
    new Cursos("TypeScript", "Coursera", "Fundamentos de TypeScript", "si", 2024,"https://www.coursera.org/account/accomplishments/certificate/LYSYL8B82WSL"),
    new Cursos("SQL", "EdX", "Curso bases de datos relacionales", "no", 2022,""),
    new Cursos("HTML y CSS", "Khan Academy", "Curso fundamentos de desarrollo web", "no", 2020,"")
];

const data = new usuario("Ernesto", "Almazan", "perfil.png", "Desarrollador Web", 27, niveles.LIC,cursos);

let cursosAprobados:number = data.numeroDeCursosAprobados(data.cursosUsuario);

let card: HTMLElement = document.getElementById("tarjeta")!;
let cursoSec: HTMLElement = document.getElementById("SecCursos")!;

function ASignarUsuarios(data :usuario):void
{

    card.innerHTML = `<div class="card shadow-sm card-Perfil" >
                               <img src="./img/${data.avatar}" class="card-img-top img-pf" alt="${data.profesion}" >     
                                <div class="card-body">
                                    <h5 class="card-title"> ${data.nombre} ${data.apellidos}</h5>
                                    <h6 class="card-subtitle  mb-2 text-muted"> ${data.profesion} </h6>
                                    <p class="card-text "><b>Cursos con certificado: </b>${cursosAprobados}</p>
                                        <div class="btn-group">
                                            <a href="#" class="card-link btn-dark btn">Git Hub</a>
                                            <a href="#" class="card-link btn-primary btn">Linkedin</a>
                                        </div>   
                                    
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
                               <a href="${element.certUrl}" target="_blank" class="btn btn-primary"  ${element.certificado !== 'si' ? 'style="display: none;"' : ''}>Ver certificado</a>
                            </div>
                            <div class="card-footer text-muted">Finalizado en: ${element.periodo}</div>
                        </div>`;
            
        });
}

ASignarUsuarios(data);
AsignarCursos(data.cursosUsuario);