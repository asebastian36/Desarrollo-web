# Fuentes en CSS

En CSS, las fuentes se pueden especificar utilizando las siguientes propiedades:

* **Font-family:** Esta propiedad especifica el tipo de letra que se utilizará para el texto.
* **Font-size:** Esta propiedad especifica el tamaño de la letra.
* **Font-style:** Esta propiedad especifica el estilo de la letra, como negrita o cursiva.
* **Font-weight:** Esta propiedad especifica el grosor de la letra.
* **Line-height:** Esta propiedad especifica la altura de las líneas de texto.

## Font-family

La propiedad font-family especifica el tipo de letra que se utilizará para el texto. La propiedad font-family puede tomar como valor el nombre de una fuente específica, o una lista de fuentes separadas por comas.

Si se especifica una lista de fuentes, el navegador intentará cargar la primera fuente de la lista. Si la primera fuente no está disponible, el navegador intentará cargar la segunda fuente, y así sucesivamente.

## Font-size

La propiedad font-size especifica el tamaño de la letra. La propiedad font-size puede tomar como valor un valor absoluto, como 16px, o un valor relativo, como 1.5em.

Un valor absoluto especifica el tamaño de la letra en píxeles. Un valor relativo especifica el tamaño de la letra en relación con el tamaño de la letra del elemento padre.

## Font-style

La propiedad font-style especifica el estilo de la letra, como negrita o cursiva. La propiedad font-style puede tomar como valor los siguientes valores:

* **normal:** Texto normal.
* **bold:** Texto en negrita.
* **italic:** Texto en cursiva.

## Font-weight

La propiedad font-weight especifica el grosor de la letra. La propiedad font-weight puede tomar como valor los siguientes valores:

* **normal:** Grosor normal.
* **bold:** Grosor grueso.
* **lighter:** Grosor más ligero.
* **bolder:** Grosor más grueso.

## Line-height

La propiedad line-height especifica la altura de las líneas de texto. La propiedad line-height puede tomar como valor un valor absoluto, como 20px, o un valor relativo, como 1.5em.

Un valor absoluto especifica la altura de las líneas de texto en píxeles. Un valor relativo especifica la altura de las líneas de texto en relación con el tamaño de la letra.

Ejemplos

El siguiente código CSS especifica que el texto tendrá un tamaño de fuente de 16px:

```css
p {
  font-size: 16px;
}
```

Este código CSS especifica que el texto tendrá un estilo de negrita:

```css
p {
  font-weight: bold;
}
```

Este código CSS especifica que el texto tendrá un estilo de cursiva:

```css
p {
  font-style: italic;
}
```

Este código CSS especifica que el texto tendrá un tamaño de fuente de 20px y un estilo de negrita:

```css
p {
  font-size: 20px;
  font-weight: bold;
}
```

Este código CSS especifica que el texto tendrá una altura de línea de 30px:

```css
p {
  line-height: 30px;
}
```

## Importar fuentes externas

Google Fonts es una biblioteca de fuentes web gratuita y abierta que ofrece más de 1.000 fuentes de alta calidad. Las fuentes de Google Fonts se pueden utilizar en cualquier sitio web o aplicación web sin necesidad de pagar derechos de autor.

Para utilizar las fuentes de Google Fonts en CSS, primero se debe agregar la siguiente línea a la etiqueta `<head>` del documento HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
```

Esta línea cargará las fuentes de Roboto en el documento HTML.

Una vez que se hayan cargado las fuentes, se pueden utilizar en CSS especificando el nombre de la fuente en la propiedad font-family. Por ejemplo, el siguiente código CSS utilizará la fuente Roboto para el texto:

```css
p {
  font-family: Roboto;
}
```

También se pueden especificar estilos de fuente adicionales, como el tamaño, el grosor y el estilo, en la propiedad font-family. Por ejemplo, el siguiente código CSS utilizará la fuente Roboto en negrita con un tamaño de 16px:

```css
p {
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
}
```

Google Fonts ofrece una amplia gama de fuentes para elegir, desde fuentes clásicas hasta fuentes modernas. Las fuentes de Google Fonts se pueden utilizar para crear un aspecto único y atractivo para su sitio web o aplicación web.

**Ventajas de utilizar Google Fonts:**

* **Gratis y de código abierto:** Las fuentes de Google Fonts son gratuitas y de código abierto, lo que significa que puede utilizarlas en cualquier sitio web o aplicación web sin necesidad de pagar derechos de autor.
* **Amplia gama de fuentes:** Google Fonts ofrece una amplia gama de fuentes para elegir, desde fuentes clásicas hasta fuentes modernas.
* **Fácil de usar:** Las fuentes de Google Fonts se pueden utilizar en CSS de forma sencilla.

**Desventajas de utilizar Google Fonts:**

* **Pueden ralentizar su sitio web:** Las fuentes web pueden ralentizar su sitio web, especialmente si utiliza muchas fuentes diferentes.
* **No son compatibles con todos los navegadores:** Las fuentes web no son compatibles con todos los navegadores.

En general, las fuentes de Google Fonts son una gran opción para cualquier sitio web o aplicación web. Son gratuitas, ofrecen una amplia gama de opciones y son fáciles de usar.
