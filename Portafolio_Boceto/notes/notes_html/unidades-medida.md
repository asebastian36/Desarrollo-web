# Unidades de medida en el desarrollo web

Las unidades de medida en HTML se utilizan para indicar el tamaño o la longitud de un elemento. Las unidades de medida se pueden utilizar para especificar el tamaño de elementos de texto, imágenes, tablas, etc.

## Tipos de unidades de medida

Hay dos tipos de unidades de medida en HTML:

* **Unidades absolutas:** Las unidades absolutas se basan en una medida física, como píxeles, pulgadas o centímetros.
* **Unidades relativas:** Las unidades relativas se basan en el tamaño del elemento padre o del elemento raíz.

### Unidades absolutas

Las unidades absolutas son las más utilizadas en HTML. Estas unidades son las siguientes:

* **Píxeles (px):** Los píxeles son la unidad de medida más común en HTML. Un píxel es un punto en la pantalla del ordenador.
* **Pulgadas (in):** Las pulgadas son una unidad de medida estándar. Una pulgada equivale a 2,54 centímetros.
* **Centímetros (cm):** Los centímetros son una unidad de medida estándar. Un centímetro equivale a 0,39 pulgadas.

### Unidades relativas**

Las unidades relativas son menos utilizadas en HTML. Estas unidades son las siguientes:

* **Porcentaje (%):** Los porcentajes se utilizan para especificar el tamaño de un elemento en relación con el tamaño del elemento padre.
* **Em:** Las unidades em se utilizan para especificar el tamaño de un elemento en relación con el tamaño de la letra del elemento padre.
* **Ex:** Las unidades ex se utilizan para especificar el tamaño de un elemento en relación con el tamaño de la letra "x" del elemento padre.
* **Rem:** Las unidades rem se utilizan para especificar el tamaño de un elemento en relación con el tamaño de la fuente del elemento raíz.

Ejemplos

El siguiente código especifica que un elemento de texto tendrá un ancho de 200 píxeles:

```html
<p style="width: 200px;">Este texto tendrá un ancho de 200 píxeles.</p>
```

Este código especificará que un elemento de texto tendrá un ancho de 200 píxeles en relación con el tamaño del elemento padre:

```html
<p style="width: 50%;">Este texto tendrá un ancho del 50% del elemento padre.</p>
```

El siguiente código especifica que un elemento de texto tendrá un tamaño de fuente de 2rem:

```html
<p style="font-size: 2rem;">Este texto tendrá un tamaño de fuente de 2rem.</p>

```
