const { calcularHorasDeProjeto } = require('..\..\dominio\calculadora\Projeto\horasPorProjeto.js'); 

const HORAS_POR_FUNCIONALIDADE = {
  func1: 5,
  func2: 3,
  func3: 8,
};

describe('calcularHorasDeProjeto', () => {
  test('Deve retornar o total de horas do projeto com uma lista válida de funcionalidades', () => {
    const listaDeFuncionalidades = ['func1', 'func2', 'func3'];
    const horasTotais = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect(horasTotais).toBe(16); // A soma das horas  = 16
  });

  test('Deve retornar 0 se a lista de funcionalidades estiver vazia', () => {
    const listaDeFuncionalidades = [];
    const horasTotais = calcularHorasDeProjeto(listaDeFuncionalidades);
    expect(horasTotais).toBe(0);
  });

  test('Deve retornar 0 se a lista de funcionalidades for undefined', () => {
    const horasTotais = calcularHorasDeProjeto(undefined);
    expect(horasTotais).toBe(0);
  });

  
});
