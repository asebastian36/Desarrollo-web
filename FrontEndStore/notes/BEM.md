# BEM

BEM es un acrónimo de Block Element Modifier. Es una metodología de nomenclatura para clases en CSS que ayuda a mantener una estructura clara y consistente en el estilo de un proyecto.

> Hay que seguir convenciones de BEM.

**Principios de BEM:**

* **Bloques:** Los bloques son los componentes principales de un diseño web. Un bloque puede ser un elemento HTML, un grupo de elementos HTML o incluso un componente de terceros. Si un contenedor por si solo es significativo y no requiere de otras secciones para su apariencia (CSS) debera ir en un bloque.
* **Elementos:** Los elementos son partes individuales de un bloque. Un elemento puede ser un texto, una imagen, un video o cualquier otro contenido. Depende del bloque y no es por si solo significativo; tienen la caracteristica de que utilizan el nombre bloque y despues doble "_".
* **Modificadores:** Los modificadores se utilizan para cambiar el comportamiento o el estilo de un bloque o elemento. Por ejemplo, un modificador podría cambiar el color de fondo de un bloque o el tamaño de fuente de un elemento.

**Sintaxis de BEM:**

La sintaxis de BEM para nombrar clases CSS es la siguiente:

```css
.block-name {
  // Estilos para el bloque
}

.block-name__element-name {
  // Estilos para el elemento
}

.block-name--modifier {
  // Estilos para el modificador
}
```

**Ejemplo de BEM:**

El siguiente código es un ejemplo de cómo utilizar BEM para nombrar clases CSS:

```html
<div class="header">
  <h1 class="header__title">Mi título</h1>
  <nav class="header__nav">
    <ul>
      <li class="header__nav-item">
        <a href="#">Inicio</a>
      </li>
      <li class="header__nav-item">
        <a href="#">Acerca de</a>
      </li>
      <li class="header__nav-item">
        <a href="#">Contacto</a>
      </li>
    </ul>
  </nav>
</div>
```

El código CSS para este HTML sería el siguiente:

```css
.header {
  background-color: #fff;
  padding: 10px;
}

.header__title {
  font-size: 2em;
  font-weight: bold;
}

.header__nav {
  display: flex;
  justify-content: space-between;
}

.header__nav-item {
  list-style: none;
  padding: 10px;
}
```

Este ejemplo utiliza BEM para nombrar las clases CSS de la siguiente manera:

* **Bloque:** `header`
* **Elemento:** `title`
* **Modificador:** `nav`

Esta nomenclatura ayuda a mantener una estructura clara y consistente en el estilo del código.

**Ventajas de BEM:**

* **Estructura clara:** BEM ayuda a mantener una estructura clara y consistente en el estilo del código. Esto facilita la comprensión y el mantenimiento del código.
* **Reutilización:** BEM facilita la reutilización de bloques y elementos. Esto puede ayudar a ahorrar tiempo y esfuerzo.
* **Flexibilidad:** BEM es flexible y se puede adaptar a diferentes proyectos.

**Desventajas de BEM:**

* **Puede ser complejo:** BEM puede ser complejo para aprender y utilizar al principio.
* **Puede ser rígido:** BEM puede ser rígido y no siempre es adecuado para todos los proyectos.

En general, BEM es una metodología de nomenclatura CSS que puede ser muy útil para mantener una estructura clara y consistente en el estilo del código.
