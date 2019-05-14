---
title: Web Performance en Google I/O 2019
date: "2019-05-13"
description: Novedades en web performance presentadas en Google I/O 2019
featuredImage: ../../assets/perfreviews-icon.png
---

Ya hemos dejado atrás Google I/O 2019. Un evento repleto de novedades relacionadas con web performance que listamos a continuación.

## Lighthouse

Lighthouse sigue recibiendo muchas mejoras de funcionalidad para hacerlo aún más útil. Nuevo diseño, consejos específicos para plataformas e integración de performance budgets son algunas de ellas.

### LightWallet

_Presentado en [Speed at Scale: Web Performance Tips and Tricks from the Trenches](https://youtu.be/YJGCZCaIZkQ?t=262). Mencionado también en [Demystifying Speed Tooling](https://www.youtube.com/watch?v=mLjxXPHuIJo?t=73)._

LightWallet añade soporte para _performance budgets_ en Lighthouse y está disponible en la versión de línea de comando de Lighthouse.

![](thumbs/demystifying_speed_tooling_google_io_19_252.jpg)

Esto lo hace ideal para CI. Para configurarlo basta con añadir un archivo `budget.json` que define los budgets de performance.

![](thumbs/demystifying_speed_tooling_google_io_19_259.jpg)

### Lighthouse Stack Packs

_Presentado en [Demystifying Speed Tooling](https://www.youtube.com/watch?v=mLjxXPHuIJo?t=330)._

Lighthouse puede detectar qué plataforma usa una web y ofrecer consejos específicos para mejorar el rendimiento.

![](thumbs/demystifying_speed_tooling_google_io_19_073.jpg)

Un ejemplo es utilizar un determinado plugin para mejorar el rendimiento de un sitio que usa Wordpress.

### Lighthouse Plugins

_Presentado en [Demystifying Speed Tooling](https://www.youtube.com/watch?v=mLjxXPHuIJo?t=2000)._

Los plugins de Lighthouse permiten extender la funcionalidad de Lighthouse para necesidades específicas.

![](thumbs/demystifying_speed_tooling_google_io_19_405.jpg)

Los plugins son módulos NPM que implementan una serie de chequeos que son ejecutados por Lighthouse y añadidos como una sección adicional. Un ejemplo es el plugin AdSpeed que Google ha desarrollado para mejorar la integración de su plataforma de anuncios.

Pronto será posible escoger qué plugins ejecutar desde las DevTools.

![](thumbs/demystifying_speed_tooling_google_io_19_411.jpg)

### Nuevo diseño de Lighthouse

_Presentado en [Demystifying Speed Tooling](https://www.youtube.com/watch?v=mLjxXPHuIJo?t=391)._

El diseño del informe de Lighthouse ha cambiado ligeramente y también incluye ahora soporte para _dark mode_.

![](thumbs/demystifying_speed_tooling_google_io_19_081.jpg)

## Googlebot

### Evergreen Googlebot

_Presentado en [Google Search and JavaScript Sites](https://www.youtube.com/watch?v=Ey0N1Ry0BPM)._

El bot que Google usa para indexar sitios seguía corriendo Chrome 41, una versión que se había lanzado en marzo de 2015. A partir de ahora, se actualizará para ejecutar la última versión de Chrome. Esto significa que Googlebot ahora soporta funciones como [IntersectionObserver or ES6](https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html), que no estaban disponibles en Chrome 41.

Un aspecto positivo de Googlebot al ejecutar Chrome 41 era que los desarrolladores tenían que añadir soporte para navegadores más antiguos. La actualización de Googlebotno significa que ya no tengamos que preocuparnos por estos navegadores, ya que siempre debemos esforzarnos por dar al usuario una buena experiencia con independencia del navegador.

Dos cosas a tener en cuenta es que las herramientas de test como [Google Search Console](https://search.google.com/search-console) aún ejecutan Chrome 41 y se actualizarán en el futuro. Además, aunque Googlebot no ejecutará Chrome 41, seguirá anunciando esa versión en su user agenttemporalmente. Esto dará tiempo a los desarrolladores web para hacer cambios en su código en caso de que estuvieran haciendo _user agent sniffing_ asumiendo que el bot se anunciaba como Chrome 41.

Servir ES6 y usar IntersectionObserver ayudará a reducir el tráfico de datos, y probablemente acortará los tiempos de carga. Esto es excelente para la experiencia del usuario, pero también para SEO, ya que Google usa el tiempo de carga como una de las métricas para hacer ranking de los sitios.

## Google Search Console

### Nuevo informe de velocidad en Google Search Console

_Presentado en [Demystifying Speed Tooling](https://www.youtube.com/watch?v=mLjxXPHuIJo?t=943)._

Google Search Console (antiguo Webmaster Tools) incluye un nuevo informe llamado Speed Report. Está basado en FCP y FID de _field metrics_.

![](thumbs/demystifying_speed_tooling_google_io_19_204.jpg)

El informe sirve para monitorizar el progreso de estas métricas y su distribución (rápido, medio, lento) con el paso del tiempo. Recuerda al dashboard de CrUX pero con un reporte de métricas diario en lugar de mensual.

Además el informe ayuda a priorizar qué mejoras llevar a cabo. Para ello agrupan todas las URLs afectadas por el mismo problema, indicando el potencial ahorro en tiempo.

![](thumbs/demystifying_speed_tooling_google_io_19_215.jpg)

## Chrome

_Presentado en Demystifying Speed Tooling._

![](thumbs/demystifying_speed_tooling_google_io_19_277.jpg)

Correlacionando peticiones de red con "paints" y determinando la actividad en el hilo principal

Novedad?

## Más

## Element Timing for Images

_Presentado en Demystifying Speed Tooling._

![](thumbs/demystifying_speed_tooling_google_io_19_388.jpg)

## Nuevas métricas de rendimiento

_Presentado en [Demystifying Speed Tooling](https://www.youtube.com/watch?v=mLjxXPHuIJo?t=575)._

A las ya conocidas métricas FP, FCP, FID y TTI se le añaden 2 más:

- “[Layout stability](https://bit.ly/layout-stability)", que mide los cambios en el layout al cargar contenido que _empuja_ otros elementos y fuerza al navegador a recalcular la posición de los elementos.
![](thumbs/demystifying_speed_tooling_google_io_19_121.jpg)

- “[Largest Contentful Paint]()" mide cuándo se renderiza el elemento más grande, que sirve como aproximación al contenido principal de la página. Es una generalización de métricas usadas en el pasado para medir la carga de la Hero Image.
![](thumbs/demystifying_speed_tooling_google_io_19_132.jpg)

### Firebase web performance monitoring

_Mencionado en [Demystifying Speed Tooling](https://www.youtube.com/watch?v=mLjxXPHuIJo?t=1630)._

Proporciona agregaciones de métricas de performance de usuarios reales (RUM) para páginas individuales. La gran ventaja es que muestra distribuciones de las métricas, no sólo la media como ocurre con Google Analytics.

![](thumbs/demystifying_speed_tooling_google_io_19_328.jpg)

Las métricas incluyen First Paint, First Contentful Paint y First Input Delay. Es posible filtrar por país y por tipo de conexión entre otros.

Para integrar el proyecto, echa un vistazo a [esta guía de iniciación](https://firebase.google.com/docs/perf-mon/get-started-web).

## Fundamentos de Performance

_Presentado en [Demystifying Speed Tooling](https://www.youtube.com/watch?v=mLjxXPHuIJo)._

En esta presentación se listan 15 puntos de acción para ayudarnos a entender cuál es el rendimiento de una web y cómo mejorarlo. Esta repleto de consejos para llevas a cabo mejoras de rendimiento desde el punto de vista técnico pero también financiero.

## Otros

- [Images & iframes Lazy Load](https://www.youtube.com/watch?v=WJAda7f1CeY)
- Portals (perception)
- [speed at scale examples](https://www.youtube.com/watch?v=WJAda7f1CeY)
- font-display on Google Fonts
- [web assembly by Surma](https://www.youtube.com/watch?v=njt-Qzw0mVY)
- https://twitter.com/zeithq/status/1126196251102519297?s=21
- https://twitter.com/igrigorik/status/1126362259553316864?s=21 and rest of tweets in thread
-
