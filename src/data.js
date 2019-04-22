/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
let personajes =[];
const dataPotter = () => {
  fetch('./data/potter.json')
  .then(function(response) {
    return response.json();
  }).then(function(data){
    filtrarDatos(data, "male", "staff", "Gryffindor")
    //perosnaje = data;
  })

};

/*filtrar por cada personaje*/
const filtrarDatos = (data, gender, role, house) => {
  let filtrar = data;
  //filtrar mi array
// datap un elemento del array
// si cumple la condición
  if(gender)
  filtrar = filtrar.filter(datap => datap.gender === gender)
 
  if(house) 
filtrar = filtrar.filter(datap => datap.house === house)
  
  if (role === "student")
  filtrar = filtrar.filter(datap => datap.hogwartsStudent === true)
   else if(role === "staff")
  filtrar = filtrar.filter(datap => datap.hogwartsStaff === true) 



 console.log(filtrar)
  
}


window.dataPotter = dataPotter;
window.personajes = personajes;
window.filtrarDatos = filtrarDatos;
