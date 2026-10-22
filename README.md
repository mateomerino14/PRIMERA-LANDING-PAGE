# Landing page · Academia Digital Pro

Landing page de un programa ficticio de 12 semanas para crear y publicar un primer curso online. Su objetivo es que la persona entienda en qué consiste el programa y reserve su lugar en la próxima cohorte.

## Secciones

| Sección | Contenido |
|---|---|
| Portada | Propuesta del programa, acceso a la inscripción y tres datos clave: duración, horario de las clases y reembolso |
| Programa | Las cuatro etapas del programa en orden, con las semanas que dura cada una |
| Video | Video embebido de YouTube para conocer más antes de inscribirse |
| Qué incluye | Clases en vivo, revisión del material, plantillas y grupo de la cohorte |
| Inscripción | Formulario con validación y mensaje de confirmación |

## Diseño

- **Tipografía:** Alegreya para los títulos y Alegreya Sans para el texto. Son de la misma familia, así que combinan sin competir entre sí.
- **Colores:** fondo claro, texto verde muy oscuro, la sección del programa en verde pizarra y amarillo lápiz para botones y detalles.
- **Fotos:** tres fotos de Unsplash enlazadas desde su servidor, con el crédito de cada autor en el pie de página.
- **Movimiento:** solo la foto de la portada aparece con una transición al cargar, y se desactiva si el sistema pide menos movimiento.
- **Adaptable:** las columnas pasan a una sola en tabletas y celulares.

## Funcionalidad

- Navegación con desplazamiento suave entre secciones, compensando la cabecera fija.
- Formulario de inscripción que valida el nombre y el correo, marca el campo con error y muestra una confirmación con los datos ingresados. No envía datos a ningún servidor.
- Foco visible para navegar con teclado.

## Tecnologías

- HTML5
- CSS3 (variables, grid, flexbox, contadores y media queries)
- JavaScript sin frameworks
- Google Fonts (Alegreya y Alegreya Sans)

## Ejecución

Abrir `index.html` en el navegador. No necesita instalación.

## Estructura

```
index.html   Estructura y contenido de la página
styles.css   Estilos, paleta y diseño adaptable
script.js    Validación y confirmación del formulario
```

## Créditos

Fotos de [Vitaly Gariev](https://unsplash.com/photos/woman-recording-video-with-camera-in-living-room-F9gWctom-pI), [Fa Barboza](https://unsplash.com/photos/person-in-gray-dress-shirt-writing-on-white-paper-Lf3S2zRXKXk) y [Look Studio](https://unsplash.com/photos/a-woman-sitting-on-a-couch-using-a-laptop-computer-pccGXVm8XVM) en Unsplash.

## Licencia

Este proyecto está bajo la Licencia MIT.
