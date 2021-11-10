/*
Escribe una clase Vec que represente un vector en un espacio de dos dimensiones. Toma los parámetros (numericos) x y y, que debería guardar como propiedades del mismo nombre.

Dale al prototipo de Vector dos métodos, mas y menos, los cuales toman otro vector como parámetro y retornan un nuevo vector que tiene la suma o diferencia de los valores x y y de los dos vectores (this y el parámetro).

Agrega una propiedad getter llamada longitud al prototipo que calcule la longitud del vector—es decir, la distancia del punto (x, y) desde el origen (0, 0).
*/

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mas(x, y) {
    return new Vec(this.x + x, this.y + y);
  }

  menos(x, y) {
    return new Vec(this.x - x, this.y - y);
  }

  get longitud() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

const v1 = new Vec(5, 8);
console.log(v1.mas(2, 2));
console.log(v1.menos(5, 3));
console.log(v1.longitud);
