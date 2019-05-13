/* Manejo del DOM */

const personajes = document.getElementById("personajes");
const ascendente = document.getElementById("ordenarAs");
const descendente = document.getElementById("ordenarDes");
const genero = document.getElementById("genero");
const rol = document.getElementById("rol");
const casa = document.getElementById("casa");

const mostrarData = () => {
  fetch('./data/potter.json')
    .then((response) => response.json())
    .then((data) => {
      dataPotter(data);
      imprimirGenero(data);
      imprimirCasa(data);
      imprimirRol(data);
      ascenDente(data);
      desCendente(data);
    });
};
mostrarData();

const dataPotter = (data) => {
  let mostrar = "";
  data.forEach((element) => {
    mostrar += `
    <section class ="col-xs-6 col-sm-6 col-md-6 col-lg-4">
      <div class="personaje">
        <div class="caja-fotos">
          <img class ="fotos" src = ${element.image} >
        </div>
        <div class ="center name"> ${element.name} </div>
        <div class ="center"> ${element.house} </div>

        <div class="info-extra">
          <div class="info-item">
            <div class="emoji">&#128515;</div>
            <div>
              <p>ESPECIE:</p>
              <p><strong>${element.species}</strong></p> 
            </div> 
          </div>
          <div class="info-item">
            <div class="emoji">&#x1F393;</div>
            <div>
              <p> ROL:</p>
              <p><strong>${ mostrarRol(element) } </strong></p>
            </div>
          </div>
          <div class="info-item">
            <div class ="emoji">&#127916;</div> 
            <div> 
              <p> ACTOR : </p>
              <p><strong>${element.actor}</strong></p>
            </div>
          </div>
          <div class="info-item">
            <div class ="emoji">&#9203;</div> 
            <div>  
              <p> EDAD : </p>
              <p><strong>${element.yearOfBirth ? 2019 - element.yearOfBirth : "-"}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  });
  return personajes.innerHTML = mostrar;
};

const mostrarRol = (personaje) => {

  if(personaje.hogwartsStudent) {
    return "Student"
  }
  else if(personaje.hogwartsStaff) {
    return "Staff"
  }
  else {
    return "-" 
  }
}

const imprimirGenero = (data) => {
  genero.addEventListener('change', () => {
    const imprimir = POTTER.filtrarGenero(data, genero.value);
    dataPotter(imprimir);
  });
};

const imprimirCasa = (data) => {
  casa.addEventListener('change', () => {
    const imprimir = POTTER.filtrarCasa(data, casa.value);
    dataPotter(imprimir);
  });
};
const imprimirRol = (data) => {
  rol.addEventListener('change', () => {
    if (rol.value === "hogwartsStudent") {
      const student = POTTER.filtrarStudent(data, rol.value);
      dataPotter(student);
    } else if (rol.value === "hogwartsStaff") {
      const staff = POTTER.filtrarStaff(data, rol.value);
      dataPotter(staff);
    }
  });
};

const ascenDente = (data) => {
  ascendente.addEventListener("click", () => {
    const evento = POTTER.ordenarAscendente(data);
    dataPotter(evento);
  });
};

const desCendente = (data) => {
  descendente.addEventListener("click", () => {
    const evenTo = POTTER.ordenarDescendente(data);
    dataPotter(evenTo);
  });
};