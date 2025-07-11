const somaHorasExtras = (salario, valorHorasExtras) => {
  return salario + valorHorasExtras;
};

const calculaDesconto = (salario, descontos) => {
  return salario - descontos;
};

export { somaHorasExtras, calculaDesconto };
