# Especificidad en CSS

La especificidad en CSS es un mecanismo que determina qué reglas CSS se aplican a un elemento dado. La especificidad se basa en la combinación de tres factores:

* **El tipo de selector:** Los selectores de ID tienen la mayor especificidad, seguidos de los selectores de clase, los selectores de etiqueta y los selectores universales.
* **La cantidad de selectores:** Cuantos más selectores se utilicen en una regla, mayor será su especificidad.
* **La posición de los selectores:** Las reglas que se encuentran más arriba en la hoja de estilos tienen mayor especificidad que las que se encuentran más abajo.

Por ejemplo, la siguiente regla CSS tiene una especificidad de 100:

```css
#mi-id {
  color: red;
}
```

Esta regla tiene una especificidad de 100 porque utiliza un selector de ID, que tiene la mayor especificidad.

La siguiente regla CSS tiene una especificidad de 10:

```css
.mi-clase {
  color: red;
}
```

Esta regla tiene una especificidad de 10 porque utiliza un selector de clase, que tiene una menor especificidad que un selector de ID.

La siguiente regla CSS tiene una especificidad de 1:

```css
p {
  color: red;
}
```

Esta regla tiene una especificidad de 1 porque utiliza un selector de etiqueta, que tiene una menor especificidad que un selector de clase o de ID.

La siguiente regla CSS tiene una especificidad de 0:

```css
* {
  color: red;
}
```

Esta regla tiene una especificidad de 0 porque utiliza un selector universal, que tiene la menor especificidad.

Cuando se aplican varias reglas CSS a un mismo elemento, la regla con la mayor especificidad es la que se aplica. Por ejemplo, si tenemos las siguientes reglas CSS:

```css
#mi-id {
  color: red;
}

.mi-clase {
  color: blue;
}
```

La regla que se aplicará al elemento con el ID "mi-id" es la primera regla, ya que tiene una especificidad de 100, que es mayor que la especificidad de la segunda regla, que es de 10.

> Recuerda, si un elemento tiene un selector mas especifico no importa mucho donde haya sido declarado, CSS decidira por su especificidad

ejemplo

```css
.titulo span {
    color: red;
}

.titulo span {
    color: blue;
}
```

En ese caso el color aplicado seria el azul, esto porque es el ultimo estilo aplicado en el css a ese mismo elemento.

otro ejemplo

```css
p.parrafo {
    color: blue;
}

p {
    color: red;
}
```

En este otro ejemplo se aplicaria el estilo con el color azul dado que pese a ser el primero en ser declarado, tiene un grado de especificidad mayor al ultimo estilo declarado.

ejemlo extra

```css
p#parrafo {
    color: blue;
}

p {
    /* eso de abajo es una bandera de importancia */
    color: red!important;
}
```

En este ultimo caso el estilo a aplicar es el de color rojo porque pese a que el primer estilo tiene una mayor especificidad, el ultimo estilo tiene una bandera de importancia.

La especificidad es un concepto importante en CSS que debe entenderse para poder controlar el aspecto de las páginas web.
