import { somaHorasExtras, calculaDesconto } from "../index.js";

describe("Testes do calculo de folha de pagamento", () => {
  it("Deve retornar a soma das horas extras", () => {
    const salario = 3000;
    const horasExtras = 600;
    const resultado = somaHorasExtras(salario, horasExtras);
    expect(resultado).toBe(3600);
  });

  it("Deve descontar o valor do salario", () => {
    const salario = 4000;
    const descontos = 500;
    const resultado = calculaDesconto(salario, descontos);
    expect(resultado).toBe(3500);
  });
});
