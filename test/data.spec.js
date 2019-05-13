global.window = global;
require('../src/data');

const inputGen = [{ name: "Harry Potter", gender: "male"}, { name: "Hermione Granger", gender: "female"}];
const conditionGen = "male";
const outputGen = [{name: "Harry Potter", gender: "male"}];

const inputHouse = [{ name: "Harry Potter", house: "Gryffindor"}, { name: "Draco Malfoy", house: "Slytherin"}];
const conditionHouse = "Slytherin";
const outputHouse = [{ name: "Draco Malfoy", house: "Slytherin"}];

describe('filtrarGenero', () => {
  it('debería ser una función', () => {
    expect(typeof POTTER.filtrarGenero).toBe('function');
  });

  it('Esta funcion deberia filtrar por genero', () => {
    expect(POTTER.filtrarGenero(inputGen, conditionGen)).toEqual(outputGen);
  });
});

describe('filtrarHouse', () => {
  it('debería ser una función', () => {
    expect(typeof POTTER.filtrarCasa).toBe('function');
  });

  it('Esta funcion deberia filtrar por genero', () => {
    expect(POTTER.filtrarCasa(inputHouse, conditionHouse)).toEqual(outputHouse);
  });
});