
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

const data = new usuario("Ernesto", "Almazan", "perfil.png", "Desarrollador Web", "https://github.com/Dev-almazan", "https://www.linkedin.com/in/dev-almazan/", 27, niveles.LIC, cursos, );

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
                                            <a target="_blank" href="${data.gitProfile}" class="card-link btn-dark btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                            </svg> Git Hub</a>
                                            <a target="_blank" href="${data.liProfile}" class="card-link btn-primary btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                            </svg> Linkedin</a>
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
                               <a href="${element.certUrl}" target="_blank" class="btn btn-primary"  ${element.certificado !== 'si' ? 'style="display: none;"' : ''}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                                </svg> Ver certificado</a>
                            </div>
                            <div class="card-footer text-muted">Finalizado en: ${element.periodo}</div>
                        </div>`;
            
        });
}

ASignarUsuarios(data);
AsignarCursos(data.cursosUsuario);