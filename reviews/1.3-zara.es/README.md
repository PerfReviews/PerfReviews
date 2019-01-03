# Zara

[![PerfReviews 1.3](./poster.jpg)]()

## Estáticos

- ✅ Utilizan http/2 y un CDN para servir estáticos
- ✅ Sirven vídeos en diferentes tamaños dependiendo de la resolución de la pantalla. Basta con cambiar el path en la URL a 600, 1080, etc.
- ❌ Caché muy corta.

## Fuentes

- ✅ Usan woff2
- ✅ Usan una fuente con sólo los caracteres necesarios para Zara SRPLS (ZaraSRPLS_Font-Regular). Quizás se podría reemplazar por un SVG, pero no está mal la idea.

## Imágenes

- ✅ Hacen lazy loading. Bien!
- ❌ En la home piden imágenes que son un SVG con texto con la misma fuente cargada en la página. CUIDADO: Cloudinary dice que se puede pasar a WebP y hacer la imagen pequeña para ahorrar bytes pero sería demasiado pequeña.
- ❌ En mobile parecen pedir las imágenes a un tamaño muy grande.
- ❌ products-category.json referencia a 2 imágenes transparentes con nombre similar. Se usan como placeholder. O bien se quitan o se pueden unificar.

## Scripts

- ✅ Usan require.js para cargar módulos JS en lugar de un bundle enorme.
- ❌ Usan jQuery 1.11.2, con una vulnerabilidad conocida y que fue releaseado en diciembre de 2014. (ver lighthouse) (ver audit performance para versión mobile).
- ❌ Hay mucho script inline sin minificar en el HTML inicial.
- ❌ Usan optimizely en el lado del cliente de forma bloqueante. Sin minificar y con código comentado.. WebPageTest con Optimizely (https://www.webpagetest.org/result/190102_GE_d3cd4fb7d5d473923213570633619256/1/details/#waterfall_view_step1) sin (https://www.webpagetest.org/result/190102_ND_f8cecf71476e6e6844bf84e9ec1bd8be/7/details/#waterfall_view_step1) y comparación (https://www.webpagetest.org/video/compare.php?tests=190102_ND_f8cecf71476e6e6844bf84e9ec1bd8be%2C190102_GE_d3cd4fb7d5d473923213570633619256&thumbSize=200&ival=100&end=visual#)
- ❌ Algún recurso tiene una TTL de caché muy baja (eg launcher-std.js, redesign.css) (ver lighthouse)

## CSS

- ✅ En CSS Stats tenemos buenos resultados.
- ❌ Ficheros CSS sin minificar, y a veces con código comentado (eg spa-hacks en desktop, mobile-hacks en mobile).

## SVG

- ❌ Logo de Zara, carrito, etc pueden ocupar casi la mitad si se pasan por SVGOMG. La idea de SVG + h2 es mejor que Web font para iconos + http/1.1, lo cual es positivo. (ver devtools + svgomg)

## Más cosas

- ✅ Usan boomerang de Akamai, lo que quiere decir que tienen RUM configurado y miden el page load time. Más info en https://www.akamai.com/uk/en/products/web-performance/mpulse-real-user-monitoring.jsp y https://developer.akamai.com/tools/boomerang/#Introduction
- ❌ Responsive? No mucho en desktop. Es fácil que la pantalla se corte. En mobile usan un dominio diferente.

## Performance una vez cargada

- ❌ Hay un problema de performance al hacer scroll y setear el top del menú de la izquierda. 
En app-std > adjustVerticalPos > this.$navigationMenu.css. Además, onScroll() no tiene throttling. Esto da para una buena demo mostrando Rendering > Paint flashing y un performance recording.
- ❌ Hablando de flashing, el loader.gif de las imágenes sigue pintándose. En Spotify tuvimos el mismo problema. Basta con ocultarlo.
- ❌ Hay un raf ejecutándose todo el tiempo. Probablemente sólo usado en la página principal en desktop y mobile.

## Informes y herramientas

### PageSpeed Insights

- [Home](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fzara.com%2Fes)
- [Category](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.zara.com%2Fes%2Fes%2Fmujer-nuevo-l1180.html%3Fv1%3D1074660)

### WebPageTest

- [Home](https://www.webpagetest.org/result/190102_GE_d3cd4fb7d5d473923213570633619256/) La Rioja, Spain - Chrome - Cable
- [Category](https://www.webpagetest.org/result/190102_DJ_c2211970eb499e83e2ec9c308b0254d6/) La Rioja, Spain - Chrome - Cable

### CSS Stats

- [Home](https://cssstats.com/stats?url=https%3A%2F%2Fwww.zara.com%2Fes&ua=Browser%20Default)
- [Category](https://cssstats.com/stats?url=https%3A%2F%2Fwww.zara.com%2Fes%2Fes%2Fmujer-nuevo-l1180.html%3Fv1%3D1074660&ua=Browser%20Default)

### Image Analysis Results

- [Home](https://webspeedtest.cloudinary.com/results/190102_Q7_e67af2ac785cec0bbba6a81da1fefbf7)
- [Category](https://webspeedtest.cloudinary.com/results/190102_AS_05c49e213b0591cf32184ef6fee18252)

## Recurso

- [Performance Calendar](https://calendar.perfplanet.com/)
