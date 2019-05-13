global.window = global;
require('../src/data');

const inputGen = [{ name: "Harry Potter", gender: "male"}, { name: "Hermione Granger", gender: "female"}];
const conditionGen = "male";
const outputGen = [{name: "Harry Potter", gender: "male"}];

const inputHouse = [{ name: "Harry Potter", house: "Gryffindor"}, { name: "Draco Malfoy", house: "Slytherin"}];
const conditionHouse = "Slytherin";
const outputHouse = [{ name: "Draco Malfoy", house: "Slytherin"}];

const inputStudent = [{ name: "Hermione Granger", hogwartsStudent: true}, { name: "Draco Malfoy", hogwartsStaff: false}];
const conditionStudent = "student";
const outputstudent = [{ name: "Hermione Granger", hogwartsStudent: true}];

const inputStaff = [{ name: "Minerva McGonagall", hogwartsStaff: true}, { name: "Severus Snape", hogwartsStudent: false}];
const conditionStaff = "staff";
const outputStaff = [{ name: "Minerva McGonagall", hogwartsStaff: true}];

const inputAscent1 = [{"yearOfBirth": 1990}, {"yearOfBirth": 1800}, {"yearOfBirth": 1990}];
const outputAscent1 = [{"yearOfBirth": 1800}, {"yearOfBirth": 1990}, {"yearOfBirth": 1990}];

const inputDescent2 = [{"yearOfBirth": 1800}, {"yearOfBirth": 1979}, {"yearOfBirth": 1800}];
const outputDescent2 = [{"yearOfBirth": 1979}, {"yearOfBirth": 1800}, {"yearOfBirth": 1800}];

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

  it('Esta funcion deberia filtrar por casa', () => {
    expect(POTTER.filtrarCasa(inputHouse, conditionHouse)).toEqual(outputHouse);
  });
});

describe('filtrarStudent', () => {
  it('debería ser una función', () => {
    expect(typeof POTTER.filtrarStudent).toBe('function');
  });

  it('Esta funcion deberia filtrar por estudiantes', () => {
    expect(POTTER.filtrarStudent(inputStudent, conditionStudent)).toEqual(outputstudent);
  });
});

describe('filtrarStaff', () => {
  it('debería ser una función', () => {
    expect(typeof POTTER.filtrarStaff).toBe('function');
  });

  it('Esta funcion deberia filtrar por personal', () => {
    expect(POTTER.filtrarStaff(inputStaff, conditionStaff)).toEqual(outputStaff);
  });
});

describe('ordenarAscendente', () => {
  it('debería ser una función', () => {
    expect(typeof POTTER.ordenarAscendente).toBe('function');
  });

  it('debería retornar un array ordenado ', () => {
    expect(POTTER.ordenarAscendente(inputAscent1)).toEqual(outputAscent1);
  });
});

describe('ordenarDescendent', () => {
  it('debería ser una función', () => {
    expect(typeof POTTER.ordenarDescendente).toBe('function');
  });

  it('debería retornar un array ordenado ', () => {
    expect(POTTER.ordenarDescendente(inputDescent2)).toEqual(outputDescent2);
  });
});
