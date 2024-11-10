export const sumar = (a: number, b: number): number => a + b;
export const restar = (a: number, b: number): number => a - b;
export const multiplicar = (a: number, b: number): number => a * b;
export const dividir = (a: number, b: number): number => {
  if (b === 0) throw new Error("No se puede dividir por cero");
  return a / b;
};
export const raizCuadrada = (a: number): number => {
  if (a < 0) throw new Error("No se puede calcular la raíz cuadrada de un número negativo");
  return Math.sqrt(a);
};
export const potencia = (a: number, b: number): number => Math.pow(a, b);
