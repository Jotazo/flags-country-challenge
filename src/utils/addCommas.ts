export const addCommas = (numero: number) => {
  // Convertir el número a cadena y dividir en parte entera y decimal
  // eslint-disable-next-line prefer-const
  let [parteEntera, parteDecimal] = numero.toString().split(".");

  // Agregar comas a la parte entera
  parteEntera = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Reconstruir el número con comas
  const resultado = parteDecimal
    ? `${parteEntera}.${parteDecimal}`
    : parteEntera;

  return resultado;
};
