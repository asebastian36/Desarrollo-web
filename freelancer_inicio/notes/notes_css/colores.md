# Colores en CSS

En CSS, los colores se pueden especificar de varias maneras:

* **Palabras clave:** Los colores se pueden especificar utilizando palabras clave predefinidas, como "red", "blue" o "green".
* **Códigos hexadecimales:** Los colores se pueden especificar utilizando códigos hexadecimales, que son una combinación de seis dígitos hexadecimales (0-9, A-F).
* **RGB:** Los colores se pueden especificar utilizando valores RGB, que son tres valores numéricos que representan la intensidad de los colores rojo, verde y azul.
* **HSL:** Los colores se pueden especificar utilizando valores HSL, que son tres valores numéricos que representan la tonalidad, la saturación y el brillo del color.

## Palabras clave

Las palabras clave son la forma más sencilla de especificar colores en CSS. Las palabras clave predefinidas son las siguientes:

* **black**
* **white**
* **red**
* **green**
* **blue**
* **yellow**
* **orange**
* **purple**
* **pink**

## Códigos hexadecimales

Los códigos hexadecimales son una forma más precisa de especificar colores en CSS. Los códigos hexadecimales se representan utilizando seis dígitos hexadecimales (0-9, A-F), que se dividen en tres pares. Cada par representa la intensidad de un color primario: rojo, verde o azul.

Por ejemplo, el código hexadecimal #FF0000 representa el color rojo, mientras que el código hexadecimal #00FF00 representa el color verde.

> pueden usarse 6 o 3 numeros ejemplo #000 o #000000

## RGB

Los valores RGB son una forma aún más precisa de especificar colores en CSS. Los valores RGB se representan utilizando tres valores numéricos, que van de 0 a 255. Cada valor representa la intensidad de un color primario: rojo, verde o azul.
Por ejemplo, el valor RGB (255, 0, 0) representa el color rojo, mientras que el valor RGB (0, 255, 0) representa el color verde.  

## HSL

Los valores HSL son una forma más abstracta de especificar colores en CSS. Los valores HSL se representan utilizando tres valores numéricos, que representan la tonalidad, la saturación y el brillo del color.

* **Tonalidad:** La tonalidad es el color en sí mismo. Se representa utilizando un valor numérico de 0 a 360 grados.
* **Saturación:** La saturación es la intensidad del color. Se representa utilizando un valor numérico de 0 a 100.
* **Brillo:** El brillo es la luminosidad del color. Se representa utilizando un valor numérico de 0 a 100.

Por ejemplo, el valor HSL (0, 100, 50) representa el color rojo puro, mientras que el valor HSL (120, 50, 50) representa el color verde lima.

Ejemplos

El siguiente código CSS especifica que el texto tendrá un color rojo:

```css
p {
  color: hsl(0, 100, 50);
}
```

Este código CSS especifica que el fondo de la página tendrá un color azul:

```css
body {
  background-color: #0000FF;
}
```

Este código CSS especifica que el color de los enlaces será verde:

```css
a {
  color: rgb(0, 255, 0);
}
```

Este código CSS especifica que el color del borde de los elementos será amarillo:

```css
border-color: #FFFF00;
```
