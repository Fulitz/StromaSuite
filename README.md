# Portafolio Web & CV Interactivo - Flavio Esteban Bravo Oyola

Este proyecto contiene tu portafolio web interactivo y tu CV digital con un sistema dual de visualización. Está programado en **HTML, CSS3 y JavaScript vanilla**.

## Estructura del Proyecto

*   `index.html`: Contiene el contenido semántico y la estructura de tu perfil, experiencia, educación y certificaciones.
*   `style.css`: Estilos visuales para la versión web (modo claro y oscuro) y estilos de impresión (`@media print`) optimizados al 100% para lectores automáticos de CV (ATS).
*   `script.js`: Gestión interactiva de cambio de tema y llamado a la función de impresión nativa del navegador.

---

## Cómo Exportar tu CV en Formato PDF ATS-Friendly

Para generar el PDF optimizado que enviarás a las convocatorias de empleo, sigue estos sencillos pasos:

1.  Abre el archivo `index.html` en tu navegador web (Google Chrome, Microsoft Edge o Firefox) haciendo doble clic en él.
2.  Haz clic en el botón flotante azul **"Exportar ATS PDF"** en la esquina superior derecha (o presiona las teclas `Ctrl + P`).
3.  En la ventana de diálogo de impresión que aparece, ajusta las siguientes opciones:
    *   **Destino / Impresora:** Elige **"Guardar como PDF"** (Save as PDF).
    *   **Páginas:** Selecciona **Todo** (All).
    *   **Diseño:** Selecciona **Vertical** (Portrait).
    *   **Tamaño del papel:** Elige **A4** o **Carta** (Letter).
    *   **Márgenes:** Selecciona **Predeterminados** (Default).
    *   **Opciones / Gráficos de fondo:** Asegúrate de que esta casilla esté **DESACTIVADA** para asegurar que el fondo se mantenga completamente blanco y el texto en negro puro.
    *   **Encabezados y pies de página:** **DESACTIVADA** (para evitar que se imprima la fecha o la URL del archivo local en los bordes de la página).
4.  Haz clic en el botón **"Guardar"** (Save) y guárdalo con un nombre profesional, por ejemplo: `CV_Flavio_Bravo_Oyola.pdf`.

> **Nota:** Verás que la vista previa del PDF cambia automáticamente a un diseño limpio de una sola columna en blanco y negro, sin tu fotografía ni decoraciones. Esto es exactamente lo que los sistemas ATS necesitan para leer tu perfil de forma óptima.

---

## Cómo Publicar tu Portafolio Web Gratis en GitHub Pages

Para tener tu CV interactivo disponible en internet con una URL pública que puedas añadir a tu CV impreso y a tu LinkedIn (por ejemplo: `https://flavio-bravo.github.io/`):

1.  Crea una cuenta gratuita en [GitHub](https://github.com/) si aún no la tienes.
2.  Crea un nuevo repositorio público llamado `flavio-bravo` (o el nombre que prefieras).
3.  Sube estos archivos (`index.html`, `style.css`, `script.js`) a la rama principal (`main` o `master`).
4.  En la configuración de tu repositorio (tab **Settings**), ve a la sección **Pages** (en el menú lateral izquierdo).
5.  En **Build and deployment**, selecciona la fuente como **Deploy from a branch**.
6.  Elige la rama `main` (o `master`) y la carpeta `/ (root)`. Haz clic en **Save**.
7.  En unos minutos, tu portafolio estará publicado en una dirección web como: `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`.
