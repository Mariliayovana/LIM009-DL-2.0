const filtrarGenero = (data, condicion) => {
  const filtrar = data.filter(element => element.gender === condicion);
  return filtrar;
};

const filtrarCasa = (data, condicion) => {
  const filtrar = data.filter(element => element.house === condicion);
  return filtrar;
};

const filtrarStudent = (data) => {
  const filtrar = data.filter(element => element.hogwartsStudent);
  return filtrar;
};

const filtrarStaff = (data) => {
  const filtrar = data.filter(element => element.hogwartsStaff);
  return filtrar;
};

const ordenarAscendente = (data) => {
  const ordena = data.sort((objeto1, objeto2) => {
    if (objeto1.yearOfBirth >= objeto2.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  });
  return ordena;
};

const ordenarDescendente = (data) => {
  const orden = data.sort((objeto1, objeto2) => {
    if (objeto1.yearOfBirth <= objeto2.yearOfBirth) {
      return 1;
    } else {
      return -1;
    }
  });
  return orden;
};


window.POTTER = {
  filtrarGenero,
  filtrarCasa,
  filtrarStudent,
  filtrarStaff,
  ordenarAscendente,
  ordenarDescendente,
};