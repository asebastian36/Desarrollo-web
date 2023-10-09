# Display en CSS

La propiedad CSS **display** especifica cómo se mostrará un elemento en la página web. La propiedad **display** puede tomar los siguientes valores:

* **inline:** Los elementos con un **display** de **inline** se mostrarán en línea, uno al lado del otro.
* **block:** Los elementos con un **display** de **block** se mostrarán como bloques, uno debajo del otro.
* **none:** Los elementos con un **display** de **none** no se mostrarán.
* **flex:** Los elementos con un **display** de **flex** se mostrarán como contenedores flexbox.
* **grid:** Los elementos con un **display** de **grid** se mostrarán como contenedores grid.
* **inline-block:** Los elementos con un **display** de **inline-block** se mostrarán en línea, pero tendrán un ancho y un alto definidos.
* **table:** Los elementos con un **display** de **table** se mostrarán como tablas.
* **table-row:** Los elementos con un **display** de **table-row** se mostrarán como filas de una tabla.
* **table-cell:** Los elementos con un **display** de **table-cell** se mostrarán como celdas de una tabla.

Ejemplos

El siguiente código CSS establece un **display** de **inline** para los elementos con la clase **mi-clase:**

```css
.mi-clase {
  display: inline;
}
```

Este código CSS establecerá un **display** de **block** para los elementos con la clase **mi-bloque:**

```css
.mi-bloque {
  display: block;
}
```

Este código CSS establecerá un **display** de **none** para los elementos con la clase **mi-oculto:**

```css
.mi-oculto {
  display: none;
}
```

## Valores personalizados

La propiedad **display** también puede tomar valores personalizados. Por ejemplo, el siguiente código CSS establece un **display** de **flex-container** para los elementos con la clase **mi-contenedor-flex:**

```css
.mi-contenedor-flex {
  display: flex-container;
}
```

Este código CSS establecerá un **display** de **grid-container** para los elementos con la clase **mi-contenedor-grid:**

```css
.mi-contenedor-grid {
  display: grid-container;
}
```

### Uso de display

La propiedad **display** es una propiedad importante en CSS que se utiliza para controlar el aspecto de los elementos en la página web. Al utilizar la propiedad **display**, puede crear diseños flexibles y atractivos para sus sitios web y aplicaciones web.

### Consejos para el uso de display

* Utilice un **display** de **inline** para los elementos que deben mostrarse en línea, como los enlaces y las imágenes.
* Utilice un **display** de **block** para los elementos que deben mostrarse como bloques, como los párrafos y las imágenes.
* Utilice un **display** de **none** para ocultar elementos de la página web.
* Utilice valores personalizados de **display** para crear diseños personalizados.

> Ningun elemento tiene display flex o grid por defecto y no es necesario especificar un display para cada elemento, salvo que se desee modificar el que viene por default.
