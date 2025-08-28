# 🚍 Simulación de Pasajeros con Lista Doblemente Enlazada

Este proyecto implementa una **lista doblemente enlazada** en JavaScript para simular la gestión de pasajeros en un bus con varias paradas.  
La simulación incluye operaciones como: **subir y bajar pasajeros, búsqueda por nombre/documento, impresión del estado actual del bus y medición del rendimiento** de la estructura de datos.

---

## 📂 Contenido del Código

- **Clase `Node`**  
  Representa un nodo en la lista doblemente enlazada.  
  Cada nodo almacena:  
  - `passenger`: objeto con `name` y `document`.  
  - `prev`: puntero al nodo anterior.  
  - `next`: puntero al nodo siguiente.  

- **Clase `PassengerList`**  
  Implementa la lista doblemente enlazada y sus operaciones principales:  
  - `addFront(passenger)`: inserta pasajero al inicio.  
  - `addEnd(passenger)`: inserta pasajero al final.  
  - `removeByDocument(document)`: elimina un pasajero por su documento.  
  - `findByName(name)`: busca pasajeros por nombre (case-insensitive).  
  - `findByDocument(document)`: busca pasajero por documento exacto.  
  - `printStatus()`: imprime el estado actual del bus (total, primer y último pasajero, lista completa).  

- **Funciones auxiliares**  
  - `createPassenger(name, document)`: crea un objeto pasajero.  
  - `simulateRoute()`: simula una ruta con **5 paradas**, mostrando cómo los pasajeros suben, bajan y se buscan en la lista.  
  - `measurePerformance()`: mide el rendimiento de las operaciones en listas de distintos tamaños (10, 100 y 1000 elementos).  

---

## ▶️ Ejecución del Programa

Ejecuta el archivo en Node.js:

```bash
node nombre_del_archivo.js

Simulación de ruta con gestión dinámica de pasajeros:
Estado actual del bus:
Total pasajeros: 3
Primer pasajero: Ana, Doc: D001
Último pasajero: María, Doc: D003
Lista completa de pasajeros:
1. Ana (Doc: D001)
2. Luis (Doc: D002)
3. María (Doc: D003)
----------------------
...

Medición de rendimiento:
Insertar al inicio con 10 elementos: 0.0100 ms
Insertar al final con 10 elementos: 0.0050 ms
Buscar por documento con 10 elementos: 0.0020 ms
Eliminar por documento con 10 elementos: 0.0040 ms
---------------------------
````
## ⚖️ Comparación: Array vs Lista Doblemente Enlazada

| Operación               | Array (push/splice) | Lista Doblemente Enlazada |
|-------------------------|----------------------|----------------------------|
| Insertar al inicio      | O(n)                | O(1)                       |
| Insertar al final       | O(1)                | O(1)                       |
| Eliminar por documento  | O(n)                | O(n)                       |
| Buscar por documento    | O(n)                | O(n)                       |
| Recorrido completo      | O(n)                | O(n)                       |

---

### 📌 Conclusión
- ✅ La **lista doblemente enlazada** es **más eficiente para inserciones al inicio** (O(1) frente a O(n) de los arrays).  
- 🔍 Ambas estructuras tienen **búsquedas lineales** (O(n)).  
- 🚍 Este modelo es ideal para **simular flujos dinámicos**, como la gestión de pasajeros en un bus.  
- ⚡ Puede mejorarse combinando con un `Map` para búsquedas más rápidas.  
