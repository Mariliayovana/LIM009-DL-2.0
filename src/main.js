/* Manejo del DOM */
 
/*const mostrarData = () => {
  fetch('./data/potter.json')
  .then((response => response.json() )
  . then((data) =>{
    dataPotter(data);
    imprimirPorGenero(data);
    filtrarDatos(data,'male')
  }),


const genero = document.getElementById('genero');
const rol = document.getElementById('rol');
const casa = document.getElementById('casa');
*/
const personajes = document.getElementById("personajes");

const dataPotter =(data) =>{
  let mostrar = ' ';
  for(let i=0 ; i < data.length ; i++){
     mostrar += `
     <img src="${data[i].image}" class ="fotos">
     <div> Nombre: ${data[i].name} </div>
     <div> Casa: ${data[i].house} </div> 
     <div> Especie: ${data[i].species}</div>
     <div> Rol: roles(data) ${data[i].roles}</div>
     <div> Edad: ${2019-data[i].yearOfBirth}</div>
     <div> Actor:${data[i].actor}</div>
    `}
      return  personajes.innerHTML = mostrar;
         
  };
  
  //data es un objeto. ¿cómo voy al atributo de un objeto?
  const roles =(data) =>{
    let rol =[];
    if (hogwartsStudent)
    return estudiante
else
   if (hogwartsStaff == true)
    return 
   
  }
  console.log(dataPotter(POTTER));

  