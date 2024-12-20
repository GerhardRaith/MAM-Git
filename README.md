# Página Web de Asociación Mutual Alberto Magno

Este es un proyecto de página web responsiva para la Asociación Mutual Alberto Magno de los Profesionales de la Salud. El proyecto se realiza como parte del curso de front-end JS24229

## Descripción:

La página web está diseñada para proporcionar información sobre los servicios y beneficios ofrecidos por la Asociación Mutual Alberto Magno. Incluye secciones sobre la misión, visión, servicios, noticias y contacto de la asociación.

## Características:

- **Responsive Design**: La página se adapta a diferentes tamaños de pantalla, garantizando una experiencia de usuario óptima en dispositivos móviles, tabletas y escritorios.
- **HTML5 y CSS3**: Utiliza las últimas tecnologías para asegurar una estructura y estilos modernos.
- **Interactividad**: Implementación de JavaScript para mejorar la experiencia del usuario.
- **Entrega Final**: se agregó el archivo validacionForm.js, en el valido Nombre, Apellido, DNI, edad, teléfono, e-mail y mensaje. Se quita y deja comentado el envío de formulario a https://formspree.io/f/movqqepl para probar las validaciones sin interferencia del envío.
Se consume una API (ZeroBounce) para validar el e-mal y de esa forma evitar datos inservibles en el formulario
Se habilita el java script interno en el html para cargar el mapa y que la “carga” y el “referrerpolicy” sea compatible con más navegadores.
El script eterno se coloca en el head con el atributo defer, para no colocarlo debajo del html.
•	Nombre y Apellido: se mantiene las validaciones de html; se agrega en java script expresiones regulares para que el contenido sean solo letras y espacios y además se agrega expresiones regulares para contenido de vocales y consonantes, haciendo una lógica que al menos tanto para el nombre como para el apellido se forme con una consonante y una vocal.
•	DNI: se agrega al java script una expresión regular para que solo contenga números. Y se repite la validación de html para que tenga entre 7 y 8 números sin puntos.
•	Edad: se corrige el html para poder colocar una edad de 16 años para probar la lógica de exigir una edad mínima de 18 en java script.
•	Teléfono: valido con expresión regular para que tenga entre 10 y 13 dígitos y que pueda incorporar el código de país de argentina solamente. 
•	e-mail: validación con expresión regular y consumiendo una API de ZeroBounce, para garantizar que sea un e-mail de dominio existente.
•	Mensaje: validación con expresión regular, para que contenga al menos 4 palabras. 


## Estructura del Proyecto:

El proyecto está estructurado en las siguientes carpetas dentro de la carpeta ProyectoMAM:

- `index.html`: Página principal.
- `ifavicon.ico`: imagen favicon del logo
- `.htaccess`: archivo de encabezados de seguridad para servidores (explorado por cuenta propia fuera del curso)
- `-headers`: los mismos encabezados de seguridad anterior adaptados para sitio https://app.netlify.com/
- `sitemap.xml`: mapa del sitio generado con Free Online Sitemap Generator www.xml-sitemaps.com (leyendo dice que es bueno tener un mapa del sitio) Dado que incluye hasta la clase 6 se actualizará al terminar, por ahora es un ejemplo
- `mapasitio.xml`: ídem anterior, archivo creado dentro del proyecto (debo aprender cómo se deben colocar las rutas si relativas o cuando la web se encuentra alojada en el servidor)
- `css/`: Contiene los archivos de estilos CSS.
  - `estilos.css`: Archivo principal de estilos.
- `js/`: Contiene los archivos de scripts JavaScript.
  - `scripts.js`: Archivo principal de scripts.
- `assets/img/`: Contiene las imágenes utilizadas en la página (y algunas no utilizadas que es para adecuar el proyecto).
- `assets/audio/`: Contiene los audios utilizadas en la página.
- `assets/video/`: Contiene los videos utilizadas en la página.
- `assets/fonts/`: Es para practicar utilizar las fuentes descargadas en vez de las del link google.
- `pages/`: Contiene las paginas del proyecto dependientes de index.html
  - `carrito.html`: Es el prototipo del carrito.
  - `productos.html`: Es el prototipo de los productos o servicios.
  - `contacto.html`: Es el prototipo del formulario de contacto (posee muchos campos que son a los efectos de probar su funcionamiento y no son realmente para contacto, ej:clve, edad, etc.) Avanzando el proyecto, estimo se deberían convertir en un formulario de contcto y en un formulario de usuario, para que sea funcional con el carrito.
    - `cokiees.html`: Es referente a lo legal un modelo sencillo generado por IA para recordar colocar uno
    - `politicas.html`: Es el prototipo de las políticas de privacidad del sitio ídem anterior.
    - `terminos.html`: Es el prototipo de los términos y condiciones del sitio ídem anterior.

## Navegación:

Para visualizar la web como se vería en tu navegador preferido accede a alguno de los siguientes link's:
https://effulgent-belekoy-d83565.netlify.app/ (mantengo actualizado y hay pequeñas variaciones con respecto a Git en el despliegue, no entiendo porqué!)
https://gerhardraith.github.io/ProyectoMAM/  (1era versión)
https://gerhardraith.github.io/MAM-Git/  (con actualizaciones de ramas 07/11/2024)

## Instalación:

Para instalar y ejecutar el proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
    ```sh
    git clone https://github.com/GerhardRaith/ProyectoMAM.git (agregado 22/10/24)
    ```
    ```sh
    git clone https://github.com/GerhardRaith/MAM-Git.git (agregado 07/11/24)
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd asociacion-mutual-alberto-magno
    ```
3. Abre el archivo `index.html` en tu navegador preferido.

## Uso:

Explora las diferentes secciones de la página para obtener información sobre los servicios y beneficios ofrecidos por la Asociación MAM de los PdlS. Utiliza el formulario de contacto para ponerte en contacto con nosotros.

## Contribuciones:

Las contribuciones al proyecto son bienvenidas. Por favor, abre un issue o realiza un pull request con tus sugerencias o mejoras.

## Licencia:

Este proyecto está licenciado bajo la Licencia ..... Consulta el archivo [LICENSE](LICENSE) para obtener más información. (es ejemplo para cuando comparte proyectos de dominio público el link no apunta a ningún lado)

## Contacto:

Para cualquier consulta o comentario, puedes ponerte en contacto a través de:
- Email: contacto@amagno.org.ar
- Teléfono: +54 11 1234 5678

---

¡Gracias por visitar mi 1er proyecto!