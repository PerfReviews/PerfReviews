---
title: Análisis de webs de partidos políticos - Elecciones Generales España 2019
date: "2019-04-15"
description: Analizamos el rendimiento de las webs de partidos políticos ante las elecciones generales de España 2019.
featuredImage: ../../assets/review-escuelait.png
---

![Elecciones España 2019](undraw_candidate_ubwv.svg)

El próximo 28 de abril se celebrarán Elecciones Generales en España y en PerfReviews hemos pensado que es una buena ocasión para auditar el rendimiento de las webs de los principales partidos candidatos. Veremos cuáles son los sitios web más rápidos y los más lentos. Puedes ir directamente a [los resultados](#resultados) o continuar leyendo para saber y por qué es importante medir el rendimiento.

<div style="font-size: 0.9em; color: #0c5460;background-color: #ebf5f7;border: 1px solid #bee5eb;padding: .75rem 1.25rem;margin-bottom:calc(1.75rem - 1px);">
Este post no representa las opiniones políticas de los miembros de PerfReviews y no debería tomarse como apoyo a ningún partido.
</div>

¿Por qué es importante el rendimiento de una web? Piensa cuántas veces has navegado a una página y la has cerrado porque tardaba mucho en cargar. A veces es tu conexión, a veces es un problema en el servidor. Muy a menudo, es debido a que el navegador tiene que descargar muchos recursos innecesarios para poder mostrar el contenido.

## Web performance y exclusión

Como [múltiples estudios han probado](https://wpostats.com/), cuando el rendimiento mejora también lo hace el _engagement_ de los usuarios, aumentando el número de visitas y bajando la tasa de abandono.

Las webs de los partidos políticos deberían tener un buen rendimiento para que la mayor cantidad de ciudadanos pueda consultar información sobre sus iniciativas y programas políticos. Crear webs con mal rendimiento resulta en la exclusión de una gran parte de usuarios, precisamente aquellos con dispositivos menos potentes y peores condiciones de red, con velocidad y cobertura limitadas.

Tim Kadlec lo explica bien en su artículo “[La ética del rendimiento web](https://timkadlec.com/remembers/2019-01-09-the-ethics-of-performance/)”:

> “Cuando creamos sitios y aplicaciones que incluyen una gran cantidad de tareas relacionadas con la CPU (en este caso, procesamiento de JavaScript), en el mejor de los casos, esos sitios y aplicaciones se vuelven extremadamente lentos para las personas que utilizan esos dispositivos más asequibles y más restringidos. En el peor de los casos, sin saberlo, estamos consiguiendo que la web no sea funcional para toda esa gente.”

## Estudios previos de webs de partidos políticos

La idea de analizar webs de partidos políticos antes de unas elecciones no es nueva. [Peter Hedenskog](https://twitter.com/soulislove) analizó el pasado año [los partidos candidatos a las elecciones generales de Suecia](https://www.peterhedenskog.com/blog/2018/09/hur-mar-svenska-partiers-webb-del-1/). En sus propias palabras:

> “La oportunidad más importante para nuestros partidos políticos son las elecciones y por ello deberían asegurarse de que invierten en crear los mejores sitios web, los más accesibles y los más rápidos.”

Otros análisis previos de rendimiento de webs incluyen [las webs de los candidatos a la presidencia de EE.UU. en 2016](https://blog.newrelic.com/technology/president-candidate-website-performance-synthetics/) y [las de los partidos candidatos a las elecciones de Reino Unido en 2015](http://www.netimperative.com/2015/04/uk-election-which-party-website-has-the-best-performance/).

En España, lo más cercano es [un estudio sobre las webs de los partidos españoles entre 2008 y 2011](www.tripodos.com/index.php/Facultat_Comunicacio_Blanquerna/article/viewFile/169/74), centrado principalmente en el contenido y UX.

## Metodología

Hemos utilizado la herramienta [Lighthouse de Google](https://developers.google.com/web/tools/lighthouse/), una de las más establecidas y mejor valoradas en la comunidad web, para obtener una puntuación del rendimiento de la web. La puntuación se basa en [la combinación de varias métricas que miden la carga de la página](https://developers.google.com/web/tools/lighthouse/v3/scoring).

Además de la puntuación de performance incluimos otros datos como número de peticiones y peso en kB de la página. Aunque se considera que estos últimos no tienen una correlación directa con el rendimiento percibido por el usuario, pensamos que es interesante porque son medidas ampliamente usadas.

Por defecto, Lighthouse simula la carga de una web utilizando 4G lento en un Nexus 5X simulado, que es la configuración que hemos decidido usar.

Esta es la lista de las webs de los partidos que hemos analizado:

| Partido           | Web
|-------------------|----------------------|
| Ciudadanos        | https://www.ciudadanos-cs.org/
| Coalición Canaria | http://coalicioncanaria.org/
| Compromís         | https://compromis.net/
| EAJ PNV           | https://www.eaj-pnv.eus/
| En Marea          | https://enmarea.gal/
| EH Bildu          | https://www.ehbildu.eus/
| ERC               | https://www.esquerra.cat/
| Junts per Catalunya (JxC)               | https://juntspercatalunya.cat/
| PACMA             | https://pacma.es/
| Partido Popular   | http://www.pp.es/
| Partit Demòcrata (PDeCat)            | https://www.partitdemocrata.cat/
| PSOE              | https://www.psoe.es/
| Unidas Podemos    | https://lasonrisadeunpais.es/
| VOX               | https://www.voxespana.es/

Los informes fueron generados analizando las webs el 16 de abril de 2019 y se pueden consultar en [esta página](reports/).

## Resultados

### Puntuación de Performance

La siguiente gráfica recoge la puntuación en el apartado de Performance en el informe generado por Lighthouse. La puntuación va de 0 a 100, siendo 100 la mejor.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTGoePExjI_AuoYlJ0cHeE9U0RrYXk4q2j6DL-cJ993kgrQgKBzZs7wL5Ix_zVGY80Xc0tJVIm1dhpp/pubchart?oid=853181035&amp;format=interactive"></iframe>

### Número de peticiones

La siguiente gráfica muestra el número de peticiones a recursos externos y el desglose por tipo.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTGoePExjI_AuoYlJ0cHeE9U0RrYXk4q2j6DL-cJ993kgrQgKBzZs7wL5Ix_zVGY80Xc0tJVIm1dhpp/pubchart?oid=495361311&amp;format=interactive"></iframe>

Como referencia, [la mediana del número de peticiones por página según HTTP Archive](https://httparchive.org/reports/page-weight#reqTotal), que analiza unos 4 millones de páginas,  es 75 en escritorio y 69 en móvil.

### Tamaño de la página (MiB)

El tamaño o peso de la página indica la suma del tamaño de todos los recursos que se solicitan al cargar la página, como estilos CSS, JS, imágenes, vídeos o scripts de terceros.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTGoePExjI_AuoYlJ0cHeE9U0RrYXk4q2j6DL-cJ993kgrQgKBzZs7wL5Ix_zVGY80Xc0tJVIm1dhpp/pubchart?oid=288435421&amp;format=interactive"></iframe>

Como referencia, [la mediana del tamaño de página según HTTP Archive](https://httparchive.org/reports/page-weight), que analiza unos 4 millones de páginas, es 1,785 MiB en escritorio y 1,63 MiB en móvil.

## Detalles por web

### Ciudadanos

[Web](https://www.ciudadanos-cs.org/) | [Informe de Lighthouse](reports/ciudadanos.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 6 / 100    | 137                  | 4.23                |

La web de Ciudadanos es una de las que reciben una peor puntuación de rendimiento. Se sirven demasiados recursos CSS y JS en el critical path que no son necesarios para la carga inicial. Además, tanto el HTML como CSS y JS están sin minificar ni comprimir. Aunque existe versionado en la ruta de la mayoría de los recursos, el tiempo de cacheo podría aumentarse para mejorar el rendimiento en las siguientes cargas de la página.

Las imágenes que se muestran como banners tienen también un tamaño excesivo, tanto en píxeles (2000 y 2568px de ancho) como en kB (459 y 627kB), y hay potenciales mejoras cambiando a otros formatos como JPG y WebP y aplicando la compresión adecuada.

- ❌ HTML, CSS, JS y SVG sin minificar
- ❌ HTML, CSS, JS y SVG sin comprimir
- ❌ Elevado número de recursos que bloquean el renderizado inicial de la página (8 CSS y 33 JS externos en el critical path). Además podrían utilizar http/2 para mejorar su carga.
- ❌ Imágenes con mucho peso optimizables

### Coalición Canaria

[Web](http://coalicioncanaria.org/) | [Informe de Lighthouse](reports/coalicion_canaria.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 2 / 100    | 173                  | 4.9               |

Coalición Canaria tiene una de las webs más lentas de este estudio. Destaca la falta de compresión de los estáticos, que podría hacer que el tiempo de transferencia fuera menor. Los estáticos no definen tiempo de cacheo, lo que hace que en las siguientes visitas se deban volver a descargar los recursos.

- ❌ HTML, CSS y JS y sin comprimir
- ❌ Elevado número de recursos que bloquean el renderizado inicial de la página. Además podrían utilizar http/2 para mejorar su carga.
- ❌ No hay definida una política de cacheo de estáticos

### Compromís

[Web](https://compromis.net/) | [Informe de Lighthouse](reports/compromis.html)

Una de las webs con mejor puntuación es la de Compromís. Se utiliza inline CSS, code splitting, se sirven los recursos con http/2 y las imágenes tienen un tamaño adecuado. Pese a que el hero sea un vídeo, se sirve de forma eficiente definiendo fuentes en formatos webm y mp4.

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 36 / 100   | 65                   | 7.89              |

- ✅ Se sirven de forma óptima los recursos CSS, JS, imágenes y vídeo
- ❌ Se usan fuentes en formato OTF y Woff que podrían servirse en Woff2

### EAJ PNV

[Web](https://www.eaj-pnv.eus/) | [Informe de Lighthouse](reports/pnv.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 23 / 100   | 96                   | 5.54                |

TBD

### En Marea

[Web](https://enmarea.gal/) | [Informe de Lighthouse](reports/en_marea.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 11 / 100   | 205                  | 4.92                |

TBD

### EH Bildu

[Web](https://www.ehbildu.eus/) | [Informe de Lighthouse](reports/ehbildu.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 61 / 100   | 63                   | 1.64              |

- ❌ Elevado número de recursos en el critical path (10 CSS externos en el critical path). Además podrían utilizar http/2 para mejorar su carga.
- ❌ Banner hero muy grande (767kB)

### ERC

[Web](https://www.esquerra.cat/) | [Informe de Lighthouse](reports/erc.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 92 / 100   | 49                   | 3.09              |

Esquerra tiene la web que recibe la mejor puntuación de rendimiento del análisis. Sirven los estáticos usando http/2 y comprimiendo con brotli, y obti

- ❌ Fuentes woff y ttf que podrían convertirse a woff2
- ❌ Potencial optimización dee imágenes. ALgunos PNG se podrían optimizar y otros PNG de gran tamaño en píxeles convertir a JPG

### Junts per Catalunya (JxC)

[Web](https://juntspercatalunya.cat/) | [Informe de Lighthouse](reports/jxc.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 50 / 100   | 197                  | 12.87               |

La web de Junts per Catalynya tiene un TTI elevado. Aunque los recursos se sirven de forma óptima, se podrían obtener mejoras al aplicar lazy-loading para cargar imágenes y los widgets de redes sociales que están situados en el _footer_ y que no son necesarios hasta que el usuario haga scroll.

- ✅ HTML, CSS y JS comprimidos
- ✅ Uso de http/2
- ❌ Vídeo como imagen _hero_ sin un _fallback_ adecuado mientras el vídeo se está descargando
- ❌ Imágenes optimizables, en especial las que se muestran en duotono amarillo-negro, que se pueden comprimir más

### PACMA

[Web](https://pacma.es/) | [Informe de Lighthouse](reports/pacma.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 66 / 100   | 53                   | 1.76                |

La web de PACMA es relativamente ligera y recibe una aceptable puntuación de performance. Se podría beneficiar de pequeñas optimizaciones en imágenes, añadir compresión a un recurso JS, establecer un tiempo de caché más elevado y aplicar lazy-loading para imágenes y el _embed_ de Youtube que quedan por debajo del _fold_.

- ✅ La mayoría de CSS y JS se sirven comprimidos
- ✅ Uso de http/2
- ❌ Recurso icons.svg sin optimizar ni comprimir
- ❌ Tiempo de caché sin establecer para JS propios


### Partido Popular

[Web](http://www.pp.es/) | [Informe de Lighthouse](reports/pp.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 22 / 100   | 552                  | 8.43                |

La web del Partido Popular es la que más peticiones realiza, superando las 550, con casi 300 de ellas siendo imágenes. Obviamente la mayoría no se muestran, así que aplicar lazy-loading ayudaría a descargar sólo el contenido necesario. Además de hacer muchas peticiones, no se usa http/2 que mejoraría la carga de los recursos.

Pese a que los estáticos están versionados, se define un TTL máximo de 8 horas para los recursos servidos desde www.pp.es, con lo que el navegador no puede aprovechar los recursos descargados de sesiones previas.

- ❌ Elevada cantidad de peticiones para recursos innecesarios
- ❌ Imágenes optimizables si se mejora su compresión y se sirven al tamaño en píxeles adecuado. Tres de ellas tienen o superan 1MiB de peso.
- ❌ TTL de caché muy corto para los estáticos
- ❌ TTL de caché muy corto para los estáticos

### Partit Demòcrata (PDeCat)

[Web](https://www.partitdemocrata.cat/) | [Informe de Lighthouse](reports/pdecat.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 18 / 100   | 274                  | 7.28                |

Después de abrir la web de PDeCat, las más de 270 peticiones en la primera carga nos ha lanzado a indagar un poco y una de las primeras cosas que podemos ver es que hay un gran número de recursos JS y CSS. Al analizarlo vemos que varios de esos recursos se están cargando pero no son utilizados en la home como `Fotorama` o `Google Maps`. A eso se le suma que no están cargados de forma asíncrona. Todos esos recursos hacen que aumente el tiempo en el que se puede empezar a interactuar con la página.

- ✅ HTML, CSS y JS comprimidos
- ❌ Imágenes representadas a un tamaño diferente al original
- ❌ Hay varias imágenes que podrían ser en formato SVG
- ❌ Alguna de las imágenes podría ser texto y CSS
- ❌ Los estáticos no tienen caché

### PSOE

[Web](https://www.psoe.es/) | [Informe de Lighthouse](reports/psoe.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 13 / 100   | 457                  | 17             |

Con la web del PSOE nos encontramos frente a la web más pesada del análisis, con 17MB, y una de las que más peticionse realiza. Esta página un candidato ideal para aplicar técnicas de mejora del rendimiento. También podemos mejorar el peso de la imágenes de una forma muy sencilla.

- ✅ Carga asíncrona de librerías Javascript y widgets
- ✅ Versionado de los estáticos
- ✅ HTML, CSS y JS comprimidos
- ❌ Las peticiones de red aumentan a causa de un script de Facebook para actualizar los contenidos del widget
- ❌ HTML, CSS y JS y sin minificar
- ❌ No está bajo protocolo seguro `https`, el cual nos permite utilizar técnicas de performance más avanzadas

### Unidas Podemos

[Web](https://lasonrisadeunpais.es/) | [Informe de Lighthouse](reports/unidos_podemos.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 85 / 100   | 35                   | 1.06           |

En la web de Unidas Podemos vemos unas buenas puntuaciones de performance y las recomendaciones para mejorar son un poco más avanzadas, como la implementación de técnicas como Critical CSS y lazy-loading. Los estáticos Javascript parecen estar divididos por funcionalidades y bien _bundleziados_, y el CSS está todo en un sólo archivo. En las imágenes hay un gran margen de mejora si se optimizan los recursos JPG y PNG, además de usar SVG para algunas imágenes, lo que mejoraría la carga y presentación a diferentes tamaños.

- ✅ Los estáticos se sirven usando http/2
- ✅ HTML, CSS y JS comprimidos y minificados
- ✅ Carga asíncrona de librerías Javascript y widgets
- ❌ Tiempos de caché muy bajos
- ❌ Están cargando dos versiones de Font Awesome (4.4.0 y 4.5.0)

### VOX

[Web](https://www.voxespana.es/) | [Informe de Lighthouse](reports/vox.html)

| Puntuación | Número de peticiones | Tamaño de la página (MiB) |
|------------|----------------------|---------------------|
| 27 / 100   | 287                  | 9.05          |

Lo primero que nos llama la atención de la web de Vox es el gran número de recursos bloqueantes definidos en el `<head>` del documento HTML, 12 peticiones de CSS y 11 de Javascript, entre las que podemos ver los widgets de Facebook y Twitter. Todo esto hace que el TTI (Time To Interactive), es decir el tiempo de espera del usuario para poder interactuar con el sitio web, sea elevado. En cuanto a las imágenes, tienen un gran margen de mejora en la optimización y la mayoría se están representando a un tamaño inferior al de la imagen original. A primera vista, por el nombre la url, parece que los estáticos están versionados, pero no tienen caché, . Definir un tiempo de caché adecuado mejoraría el tiempo de carga en visitas sucesivas, evitando descargar recursos que no han cambiado.

- ✅ Los estáticos están bajo http/2
- ❌ HTML, CSS y JS y sin comprimir
- ❌ HTML, CSS y JS y sin minificar
- ❌ Los estáticos no tienen caché
- ❌ Muchas tipografías, alguna de ellas no se está utilizando en los estilos cargados.

## Conclusiones
