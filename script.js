//* Representación de un nodo en una lista doblemente enlazada
class Node { 
  constructor(passenger) {
    this.passenger = passenger;
    this.prev = null;
    this.next = null;  //* Puntero al siguiente nodo
  }
}

//* Representación de la lista doblemente enlazada
class PassengerList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }