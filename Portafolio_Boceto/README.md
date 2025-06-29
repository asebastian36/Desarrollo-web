# Primer proyecto

## Etiqueta `meta`

La etiqueta `<meta>` en HTML es una de las más importantes para proporcionar información adicional sobre el documento web. Aunque no es visible directamente para los usuarios, los navegadores, motores de búsqueda y otras herramientas utilizan esta información para entender mejor la página.

### ¿Qué hace la etiqueta `<meta>`?
La etiqueta `<meta>` se utiliza para definir metadatos (información sobre los datos) del documento HTML. Estos metadatos no afectan directamente el contenido visible de la página, pero son cruciales para aspectos como SEO (optimización para motores de búsqueda), compatibilidad, rendimiento y configuraciones generales.

Se coloca dentro del `<head>` del documento.

### Resumen de atributos comunes

| Atributo     | Descripción                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `name`       | Define el tipo de metadato (ej. `description`, `keywords`, `author`).       |
| `content`    | Proporciona el valor del metadato.                                          |
| `charset`    | Define la codificación de caracteres del documento (ej. `UTF-8`).           |
| `http-equiv` | Proporciona instrucciones HTTP adicionales (ej. `refresh`, `content-type`). |
| `viewport`   | Controla cómo se muestra la página en dispositivos móviles.                 |

### Importancia de los metadatos

- **SEO (Optimización para motores de búsqueda)**: Los metadatos como `description` y `keywords` ayudan a mejorar la visibilidad de tu sitio en los resultados de búsqueda.
- **Compatibilidad**: La codificación (`charset`) asegura que los caracteres se muestren correctamente en todos los navegadores.
- **Diseño responsivo**: El atributo `viewport` garantiza que tu sitio se vea bien en dispositivos móviles.
- **Redirecciones**: El uso de `http-equiv="refresh"` permite redirigir automáticamente a otra página.


## Textos

La etiqueta `<h>` hay desde el 1 hasta el 6 para titulos segun su importancia, la etiqueta `<p>` para textos como parrafos.

> No puede haber dos `<h1>`

## Estructurar la pagina

> Es buena idea empezar una pagina por la estructura

Para parte superior: `<header>`, parte inferior: `<footer>`, para navegacion: `<nav>`, para el contenido principal: `<main>`, para otro tipo de seccion: `<section>`, Para entradas de blog o noticias: `<article>`, para una barra lateral: `<aside>`, para secciones distintas a las anteriores: `<div>`.

> Tip para usar `<section>` si el primer elemento hijo es un titulo, se usa `<section>`, la excepcion para no usarla es que ese titulo sea el principal.

## Navegacion

> Una barra de navegacion solo es necesaria si hay multiples enlaces en una parte de la pagina.

Se utiliza `<nav>` para navegacion sin multiples niveles, sino se usa `<ul>` con `<li>`.

> Un boton puede ser un enlace con estilos css



