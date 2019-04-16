/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const dataPotter = () => {
  fetch('./data/potter.json')
  .then(function(response) {
    return response.json();
  }).then(function(data){
    pintarDatos(data)
  })
  

};


const pintarDatos = (data) => {
  for(let i=0; i< data.length; i++){
    
    console.log(data[i].name)
    console.log(data[i].species)
  }

}


window.dataPotter = dataPotter;
