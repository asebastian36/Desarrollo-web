# Margin y padding

En CSS, **margin** y **padding** son propiedades que se utilizan para controlar el espacio entre los bordes de un elemento y su contenido o otros elementos.

## Margin

La propiedad **margin** especifica el espacio entre el borde de un elemento y otros elementos de la página web. La propiedad **margin** puede tomar los siguientes valores:

* **Un valor absoluto:** Se especifica en píxeles, ems, rems o unidades CSS personalizadas.
* **Un valor relativo:** Se especifica como un porcentaje del ancho o el alto del elemento.
* **Un valor negativo:** Se especifica para crear un espacio negativo.

Ejemplos

El siguiente código CSS establece un margen de 10px en todos los lados para los elementos con la clase **mi-clase:**

```css
.mi-clase {
  margin: 10px;
}
```

Este código CSS establecerá un margen de 10px en la parte superior, inferior, izquierda y derecha para los elementos con la clase **mi-clase:**

```css
.mi-clase {
  margin: 10px 10px 10px 10px;
}
```

Este código CSS establecerá un margen de 10px en la parte superior e inferior para los elementos con la clase **mi-clase:**

```css
.mi-clase {
  margin: 10px 0 10px 0;
}
```

## Padding

La propiedad **padding** especifica el espacio entre el contenido de un elemento y su borde. La propiedad **padding** puede tomar los siguientes valores:

* **Un valor absoluto:** Se especifica en píxeles, ems, rems o unidades CSS personalizadas.
* **Un valor relativo:** Se especifica como un porcentaje del ancho o el alto del elemento.

Ejemplos

El siguiente código CSS establece un relleno de 10px en todos los lados para los elementos con la clase **mi-clase:**

```css
.mi-clase {
  padding: 10px;
}
```

Este código CSS establecerá un relleno de 10px en la parte superior, inferior, izquierda y derecha para los elementos con la clase **mi-clase:**

```css
.mi-clase {
  padding: 10px 10px 10px 10px;
}
```

Este código CSS establecerá un relleno de 10px en la parte superior e inferior para los elementos con la clase **mi-clase:**

```css
.mi-clase {
  padding: 10px 0 10px 0;
}
