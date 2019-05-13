global.window = global;
require('../src/data');
require('./data.spec.js');
const inputGen = [{ name:"Harry Potter", gender: "male"},{ name:"Hermione Granger", gender:"female"}];
const conditionGen = "male";
const outputGen = {name:"Harry Potter", gender:"male"}

describe('filtrarGenero', () => {
  it('debería ser una función', () => {
    expect(typeof POTTER.filtrarGenero).toBe('function');
  });

  it('Esta funcion deberia filtrar por genero', () => {
    expect(POTTER.filtrarGenero(inputGen, conditionGen)).toEqual(outputGen);
  });
});
