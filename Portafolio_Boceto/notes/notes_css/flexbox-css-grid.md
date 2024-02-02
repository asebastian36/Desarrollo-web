# Flexbox y css grid

Flexbox y CSS Grid son dos sistemas de diseño de cuadrículas en CSS que se utilizan para crear diseños flexibles y responsivos.

## Flexbox

Flexbox es un sistema de diseño de cuadrícula unidimensional que se utiliza para organizar elementos en una fila o columna. Flexbox es ideal para crear diseños flexibles que se adapten a diferentes tamaños de pantalla.

**Propiedades principales de flexbox:**

* **display:** Especifica el modo de visualización de un elemento. Para utilizar flexbox, debe establecer el modo de visualización de un elemento en **flex** o **inline-flex**.
* **flex-direction:** Especifica la dirección de la cuadrícula flex. Los valores posibles son **row**, **column**, **row-reverse** y **column-reverse**.
* **justify-content:** Especifica cómo se distribuyen los elementos a lo largo de la dirección principal de la cuadrícula flex. Los valores posibles son **flex-start**, **flex-end**, **center**, **space-between**, **space-around** y **space-evenly**.
* **align-items:** Especifica cómo se alinean los elementos a lo largo de la dirección transversal de la cuadrícula flex. Los valores posibles son **flex-start**, **flex-end**, **center**, **stretch** y **baseline**.

> funciona en un solo eje ya sea de altura o acomodando a lo ancho: ejemplo fila(row) hacia los lados y columna (column) de arriba a abajo

**Ejemplo de flexbox:**

El siguiente código CSS crea una fila de tres elementos con flexbox:

```css
.contenedor {
  display: flex;
  flex-direction: row;
}

.elemento {
  background-color: #ccc;
  width: 100px;
  height: 100px;
}
```

Este código CSS creará una fila de tres elementos con un ancho de 100px y una altura de 100px. Los elementos se distribuirán uniformemente a lo largo de la fila.

> tip, para alinear elementos con flexbox se empieza aplicando flexbox al elemento padre de lo que se desea alinear.

## CSS Grid

CSS Grid es un sistema de diseño de cuadrícula bidimensional que se utiliza para organizar elementos en una cuadrícula. CSS Grid es ideal para crear diseños complejos y estructurados.

**Propiedades principales de CSS Grid:**

* **display:** Especifica el modo de visualización de un elemento. Para utilizar CSS Grid, debe establecer el modo de visualización de un elemento en **grid**.
* **grid-template-columns:** Especifica el ancho de las columnas de la cuadrícula.
* **grid-template-rows:** Especifica la altura de las filas de la cuadrícula.
* **grid-template-areas:** Especifica las áreas de la cuadrícula.
* **grid-column-start:** Especifica la columna en la que comienza un elemento.
* **grid-column-end:** Especifica la columna en la que termina un elemento.
* **grid-row-start:** Especifica la fila en la que comienza un elemento.
* **grid-row-end:** Especifica la fila en la que termina un elemento.

**Ejemplo de CSS Grid:**

El siguiente código CSS crea una cuadrícula de dos columnas y tres filas:

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

.elemento {
  background-color: #ccc;
  width: 100px;
  height: 100px;
}
```

Este código CSS creará una cuadrícula de dos columnas y tres filas. Cada columna tendrá un ancho de 50% y cada fila tendrá una altura de 33,33%. Los elementos se distribuirán uniformemente en la cuadrícula.

**Ventajas de flexbox y CSS Grid:**

* **Flexibilidad:** Flexbox y CSS Grid permiten crear diseños flexibles que se adapten a diferentes tamaños de pantalla.
* **Responsividad:** Flexbox y CSS Grid permiten crear diseños responsivos que se adapten a diferentes dispositivos.
* **Eficiencia:** Flexbox y CSS Grid pueden ayudar a reducir la cantidad de código CSS necesario para crear diseños complejos.

**Desventajas de flexbox y CSS Grid:**

* **Curva de aprendizaje:** Flexbox y CSS Grid pueden tener una curva de aprendizaje más pronunciada que otros sistemas de diseño de cuadrículas.
* **Soporte de navegadores:** El soporte de navegadores para Flexbox y CSS Grid aún no es universal.

**En general, flexbox y CSS Grid son herramientas poderosas que pueden ayudar a crear diseños flexibles y responsivos
