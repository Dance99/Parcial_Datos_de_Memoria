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

  //* Añadir un pasajero al frente de la lista
    addFront(passenger) {
    const node = new Node(passenger); //* Crear un nuevo nodo
    if (!this.head) {
      this.head = this.tail = node;  //* Si la lista está vacía, el nuevo nodo es tanto la cabeza como la cola
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node; 
    }
    this.size++;
  }

  //* Añadir un pasajero al final de la lista
   addEnd(passenger) {
    const node = new Node(passenger);
    if (!this.tail) {  //* Si la lista está vacía
      this.head = this.tail = node; 
    } else {  
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  //*
  removeByDocument(document) {
    let current = this.head;
    while (current) {
        if (current.passenger.document === document){  //* Encuentra el pasajero por documento
            if(current.prev) current.prev.next = current.next; //* Si no es el primer nodo, actualizar el puntero del nodo anterior
            else this.head = current.next;  //* Si es el primer nodo, actualizar la cabeza
            if(current.next) current.next.prev = current.prev; //* Si no es el último nodo, actualizar el puntero del nodo siguiente
            else this.tail = current.prev; //* Si es el último nodo, actualizar la cola
            this.size--; //* Decrementar el tamaño de la lista
            return true;  //* Pasajero eliminado
          }
    }
  }