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

  //* Buscar pasajeros por nombre (case-insensitive)
  findByName(name) {
    let current = this.head;  //* Empezar desde la cabeza de la lista
    const results = [];
    while (current) {
      if (current.passenger.name.toLowerCase() === name.toLowerCase()) { //* Comparación case-insensitive
        results.push(current.passenger); //* Añadir pasajero a los resultados
      }
      current = current.next; 
    }
    return results;
  }

   //* Buscar pasajero por documento (exact match)
  findByDocument(document) {
    let current = this.head;
    while (current) {
      if (current.passenger.document === document) {
        return current.passenger;
      }
      current = current.next;
    }
    return null;
  }

  //* Imprimir el estado actual del bus
  printStatus() {
    console.log("Estado actual del bus:");  
    console.log(`Total pasajeros: ${this.size}`);
    //* Mostrar primer y último pasajero
    if (this.head) console.log(`Primer pasajero: ${this.head.passenger.name}, Doc: ${this.head.passenger.document}`);
    if (this.tail) console.log(`Último pasajero: ${this.tail.passenger.name}, Doc: ${this.tail.passenger.document}`);
    console.log("Lista completa de pasajeros:");
    //* Recorrer la lista e imprimir cada pasajero
    let current = this.head;
    let idx = 1;
    while (current) {  //* Mientras haya nodos
      console.log(`${idx}. ${current.passenger.name} (Doc: ${current.passenger.document})`); //* Imprimir detalles del pasajero
      current = current.next;
      idx++;
    }
    console.log("----------------------"); //* Separador para claridad
  }
}

// Datos de pasajeros para ejemplo
function createPassenger(name, document) {
  return { name, document };
}

// Simula la ruta con 5 paradas
function simulateRoute() {
  const passengerList = new PassengerList();

 // Parada 0: subir pasajeros iniciales al final
  passengerList.addEnd(createPassenger("Ana", "D001"));
  passengerList.addEnd(createPassenger("Luis", "D002"));
  passengerList.addEnd(createPassenger("María", "D003"));
  passengerList.printStatus();

  // Parada 1: sube 2 pasajeros al inicio, baja 1 pasajero
  passengerList.addFront(createPassenger("Carlos", "D004"));
  passengerList.addFront(createPassenger("Sofía", "D005"));
  passengerList.removeByDocument("D002"); // Luis baja
  passengerList.printStatus();

    // Parada 2: sube 1 pasajero al final, busca un pasajero por nombre
  passengerList.addEnd(createPassenger("Pedro", "D006"));
  const buscado = passengerList.findByName("María");
  console.log("Búsqueda por nombre 'María':", buscado);
  passengerList.printStatus();

   // Parada 3: baja 2 pasajeros
  passengerList.removeByDocument("D001"); // Ana baja
  passengerList.removeByDocument("D005"); // Sofía baja
  passengerList.printStatus();

   // Parada 4: sube 1 pasajero al inicio, busca por documento
  passengerList.addFront(createPassenger("Laura", "D007"));
  const buscadoDoc = passengerList.findByDocument("D003");
  console.log("Búsqueda por documento 'D003':", buscadoDoc);
  passengerList.printStatus();
  
  return passengerList;
}

// Medición del rendimiento
function measurePerformance() {
  const sizes = [10, 100, 1000];
  sizes.forEach(size => {
    const list = new PassengerList();
    for (let i=0; i<size; i++) {
      list.addEnd(createPassenger(`Nombre${i}`, `Doc${i}`));
    }

    let start, end;

    start = performance.now();
    list.addFront(createPassenger("TestFront", "DocTestFront"));
    end = performance.now();
    console.log(`Insertar al inicio con ${size} elementos: ${(end - start).toFixed(4)} ms`);

    start = performance.now();
    list.addEnd(createPassenger("TestEnd", "DocTestEnd"));
    end = performance.now();
    console.log(`Insertar al final con ${size} elementos: ${(end - start).toFixed(4)} ms`);

    start = performance.now();
    list.findByDocument(`Doc${Math.floor(size/2)}`);
    end = performance.now();
    console.log(`Buscar por documento con ${size} elementos: ${(end - start).toFixed(4)} ms`);

    start = performance.now();
    list.removeByDocument(`Doc${Math.floor(size/2)}`);
    end = performance.now();
    console.log(`Eliminar por documento con ${size} elementos: ${(end - start).toFixed(4)} ms`);

    console.log('---------------------------');
  });
}

// Ejecutar simulación
console.log("Simulación de ruta con gestión dinámica de pasajeros:");
const finalList = simulateRoute();

// Medir rendimiento
console.log("Medición de rendimiento:");
measurePerformance();
