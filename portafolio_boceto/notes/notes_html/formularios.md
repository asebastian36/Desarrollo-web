# Formularios en HTML

Los formularios en HTML se utilizan para recopilar información del usuario. Los formularios se pueden utilizar para realizar una variedad de tareas, como registrarse en un sitio web, realizar una compra en línea o solicitar información.

**Etiqueta `<form>`**

La etiqueta `<form>` se utiliza para crear un formulario. Esta etiqueta tiene dos atributos obligatorios:

* `action`: Indica la URL a la que se enviarán los datos del formulario.
* `method`: Indica el método utilizado para enviar los datos del formulario.

Etiquetas de entrada

Las etiquetas de entrada se utilizan para crear elementos de entrada de formulario. Los elementos de entrada se utilizan para recopilar diferentes tipos de información del usuario, como texto, números, fechas y contraseñas.

## Tipos de elementos de entrada

Los tipos de elementos de entrada más comunes son:

| Tipo | Descripción |
|---|---|
| `<input type="text">` | Se utiliza para recopilar texto. |
| `<input type="password">` | Se utiliza para recopilar contraseñas. |
| `<input type="number">` | Se utiliza para recopilar números. |
| `<input type="date">` | Se utiliza para recopilar fechas. |
| `<input type="email">` | Se utiliza para recopilar direcciones de correo electrónico. |
| `<input type="checkbox">` | Se utiliza para recopilar una respuesta de sí o no. |
| `<input type="radio">` | Se utiliza para recopilar una respuesta de una lista de opciones. |
| `<input type="file">` | Se utiliza para recopilar archivos. |
| `<input type="submit">` | Se utiliza para enviar los datos del formulario. |
| `<input type="reset">` | Se utiliza para restablecer los valores del formulario. |
| `<input type="hidden">` | Se utiliza para ocultar los datos del formulario. |
| `<input type="image">` | Se utiliza para crear un botón de envío con una imagen. |
| `<input type="color">` | Se utiliza para recopilar colores. |
| `<input type="range">` | Se utiliza para recopilar valores numéricos en un rango. |
| `<input type="tel">` | Se utiliza para recopilar números de teléfono. |
| `<input type="url">` | Se utiliza para recopilar direcciones URL. |

Además de estos tipos, también existen otros tipos de inputs que son menos comunes, como:

* `<input type="search">` | Se utiliza para crear un cuadro de búsqueda.
* `<input type="datetime-local">` | Se utiliza para recopilar fechas y horas.
* `<input type="month">` | Se utiliza para recopilar meses.
* `<input type="week">` | Se utiliza para recopilar semanas.
* `<input type="time">` | Se utiliza para recopilar horas.
* `<input type="datetime">` | Se utiliza para recopilar fechas y horas.

Ejemplo

El siguiente código crea un formulario simple que recopila el nombre y la dirección de correo electrónico del usuario:

```html
<form action="procesar_formulario.php" method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" name="nombre" id="nombre">
  <br>
  <label for="email">Correo electrónico:</label>
  <input type="email" name="email" id="email">
  <br>
  <input type="submit" value="Enviar">
</form>
```

Este código crea un formulario con dos elementos de entrada: un elemento de entrada de texto para el nombre y un elemento de entrada de correo electrónico. El elemento de entrada de texto tiene un atributo `id` que se utiliza para identificar el elemento de entrada. El elemento de entrada de correo electrónico tiene un atributo `name` que se utiliza para enviar el valor del elemento de entrada al archivo `procesar_formulario.php`. El botón de envío tiene un valor predeterminado de "Enviar".

## Enviar datos de formulario

Los datos de formulario se pueden enviar a un archivo PHP o a un servidor web. Para enviar datos de formulario a un archivo PHP, se utiliza el atributo `action` de la etiqueta `<form>`. Para enviar datos de formulario a un servidor web, se utiliza el método `post`.

## Validar datos de formulario

Los datos de formulario deben validarse para asegurarse de que sean correctos y completos. La validación de datos de formulario se puede realizar utilizando código PHP o JavaScript.

### Etiqueta fieldset y legend

Las etiquetas fieldset y legend se utilizan en HTML para agrupar elementos de formulario relacionados. La etiqueta fieldset crea un contenedor para los elementos de formulario, mientras que la etiqueta legend proporciona un título para el contenedor.

#### Etiqueta fieldset

La etiqueta fieldset tiene dos atributos obligatorios:

* `id`: Identifica el contenedor.
* `class`: Asigna una clase al contenedor.

#### Etiqueta legend

La etiqueta legend tiene un atributo obligatorio:

* `for`: Identifica el contenedor.

Ejemplo

El siguiente código crea un formulario con dos campos de texto, uno para el nombre y otro para la dirección de correo electrónico. Los dos campos de texto se agrupan en un contenedor fieldset con el título "Información de contacto":

```html
<form action="procesar_formulario.php" method="post">
  <fieldset id="informacion_contacto">
    <legend>Información de contacto</legend>
    <input type="text" name="nombre" id="nombre">
    <input type="email" name="email" id="email">
  </fieldset>
  <input type="submit" value="Enviar">
</form>
```

### Consejos para crear formularios

* Utiliza etiquetas de entrada adecuadas para recopilar la información que necesitas.
* Utiliza atributos `id` para identificar los elementos de entrada.
* Utiliza atributos `name` para enviar los valores de los elementos de entrada al servidor web.
* Valida los datos de formulario para asegurarte de que sean correctos y completos.

Espero que esto te ayude a entender los formularios en HTML.
