---
title: Análisis de webs de partidos políticos - Elecciones Generales España 2019
date: "2019-04-15"
description: Analizamos el rendimiento de las webs de partidos políticos ante las elecciones generales de España 2019.
featuredImage: ../../assets/review-escuelait.png
---

![Elecciones España 2019](undraw_candidate_ubwv.svg)

El próximo 28 de abril se celebrarán elecciones generales en España y en PerfReviews hemos pensado que es una buena ocasión para auditar el rendimiento de las webs de los principales partidos candidatos.

<div style="font-size: 0.9em; color: #0c5460;background-color: #ebf5f7;border: 1px solid #bee5eb;padding: .75rem 1.25rem;margin-bottom:calc(1.75rem - 1px);">
Este post no representa las opiniones políticas de los miembros de PerfReviews y no debería tomarse como apoyo a ningún partido.
</div>

¿Por qué es importante el rendimiento de una web? Piensa cuántas veces has navegado a una página y la has cerrado porque tardaba mucho en cargar. A veces es tu conexión, a veces es un problema en el servidor. Muy a menudo, es debido a que el navegador tiene que descargar muchos recursos innecesarios para poder mostrar el contenido.

## Web performance y exclusión

Las webs de los partidos políticos deberían tener un buen rendimiento para que la mayor cantidad de ciudadanos pueda consultar información sobre sus iniciativas y programas políticos. Crear webs con mal rendimiento resulta en la exclusión de una gran parte de usuarios, precisamente aquellos con dispositivos menos potentes y peores condiciones de red, con velocidad y cobertura limitadas.

Tim Kadlec lo explica bien en su artículo “[La ética del rendimiento web](https://timkadlec.com/remembers/2019-01-09-the-ethics-of-performance/)”:

> “Cuando creamos sitios y aplicaciones que incluyen una gran cantidad de tareas relacionadas con la CPU (en este caso, procesamiento de JavaScript), en el mejor de los casos, esos sitios y aplicaciones se vuelven extremadamente lentos para las personas que utilizan esos dispositivos más asequibles y más restringidos. En el peor de los casos, sin saberlo, estamos consiguiendo que la web no sea funcional para toda esa gente.”

## Estudios previos

La idea de analizar webs de partidos políticos antes de unas elecciones no es nueva. [Peter Hedenskog](https://twitter.com/soulislove) analizó el pasado año [los partidos candidatos a las elecciones generales de Suecia](https://www.peterhedenskog.com/blog/2018/09/hur-mar-svenska-partiers-webb-del-1/). En sus propias palabras:

> “La oportunidad más importante para nuestros partidos políticos son las elecciones y por ello deberían asegurarse de que invierten en crear los mejores sitios web, los más accesibles y los más rápidos.”

Otros análisis previos de rendimiento de webs incluyen [las webs de los candidatos a la presidencia de EE.UU. en 2016](https://blog.newrelic.com/technology/president-candidate-website-performance-synthetics/) y [las de los partidos candidatos a las elecciones de Reino Unido en 2015](http://www.netimperative.com/2015/04/uk-election-which-party-website-has-the-best-performance/).

En España, lo más cercano es [un estudio sobre las webs de los partidos españoles entre 2008 y 2011](www.tripodos.com/index.php/Facultat_Comunicacio_Blanquerna/article/viewFile/169/74), centrado principalmente en el contenido y UX.

## Resultados

### Puntuación de Performance

La siguiente gráfica recoge la puntuación en el apartado de Performance en el informe generado por Lighthouse. La puntuación va de 0 a 100, siendo 100 la mejor.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTGoePExjI_AuoYlJ0cHeE9U0RrYXk4q2j6DL-cJ993kgrQgKBzZs7wL5Ix_zVGY80Xc0tJVIm1dhpp/pubchart?oid=853181035&amp;format=interactive"></iframe>

### Número de peticiones

La siguiente gráfica muestra el número de peticiones a recursos externos y el desglose por tipo.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTGoePExjI_AuoYlJ0cHeE9U0RrYXk4q2j6DL-cJ993kgrQgKBzZs7wL5Ix_zVGY80Xc0tJVIm1dhpp/pubchart?oid=495361311&amp;format=interactive"></iframe>

Como referencia, [la mediana del número de peticiones por página según HTTP Archive](https://httparchive.org/reports/page-weight#reqTotal), que analiza unos 4 millones de páginas,  es 75 en escritorio y 69 en móvil.

### Tamaño de la página (MiB)

El tamaño de la página indica la suma del tamaño de todos los recursos que se solicitan al cargar la página, como estilos CSS, JS, imágenes, vídeos o scripts de terceros.

<iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTGoePExjI_AuoYlJ0cHeE9U0RrYXk4q2j6DL-cJ993kgrQgKBzZs7wL5Ix_zVGY80Xc0tJVIm1dhpp/pubchart?oid=288435421&amp;format=interactive"></iframe>

Como referencia, [la mediana del tamaño de página según HTTP Archive](https://httparchive.org/reports/page-weight), que analiza unos 4 millones de páginas, es 1,785 MiB en escritorio y 1,63 MiB en móvil.

## Detalles por web

### Ciudadanos

[Web](https://www.ciudadanos-cs.org/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| 4 / 100    | 131 (12 CSS, 49 JS)  | 4.35MB              |

- ❌ HTML, CSS y JS sin comprimir
- ❌ HTML, CSS y JS sin minificar
- ❌ Elevado número de recursos que bloquean el renderizado inicial de la página (8 CSS y 33 JS externos en el critical path). Además podrían utilizar http/2 para mejorar su carga.

### Coalición Canaria

[Web](http://coalicioncanaria.org/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| 6 / 100    | 185                  | 5.64MB              |

### Compromís

[Web](https://compromis.net/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| 65 / 100   | 45                   | 7.52MB              |

### EAJ PNV

[Web]( 	https://www.eaj-pnv.eus/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| X / 100    | XX                   | X                   |

### En Marea

[Web](https://enmarea.gal/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| X / 100    | XX                   | X                   |

### EH Bildu

[Web](https://www.ehbildu.eus/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| 52 / 100   | 69                   | 2.08MB              |

- ❌ Elevado número de recursos en el critical path (10 CSS externos en el critical path). Además podrían utilizar http/2 para mejorar su carga.
- ❌ Banner hero muy grande (767kB)

### ERC

[Web](https://www.esquerra.cat/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| 93 / 100   | 49                   | 2.64MB              |

### Junts per Catalunya (JxC)

[Web]( 	https://juntspercatalunya.cat/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| X / 100    | XX                   | X                   |

### PACMA

[Web](https://pacma.es/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| X / 100    | XX                   | X                   |

### Partido Popular

[Web](http://www.pp.es/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| X / 100    | XX                   | X                   |

### Partit Demòcrata (PDeCat)

[Web](https://www.partitdemocrata.cat/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| X / 100    | XX                   | X                   |

### PSOE

[Web](https://www.psoe.es/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| X / 100    | XX                   | X                   |

### Unidas Podemos

[Web](https://lasonrisadeunpais.es/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| X / 100    | XX                   | X                   |

### VOX

[Web]( 	https://www.voxespana.es/) | [Informe de Lighthouse]()

| Puntuación | Número de peticiones | Tamaño de la página |
|------------|----------------------|---------------------|
| X / 100    | XX                   | X                   |



## Metodología

En este artículo presentamos los resultados tras analizar las webs de los principales partidos políticos que se presentan a las elecciones generales.

Hemos utilizado la herramienta [Lighthouse de Google](https://developers.google.com/web/tools/lighthouse/), una de las más establecidas y mejor valoradas en la comunidad web, para obtener una puntuación del rendimiento de la web. La puntuación se basa en [la combinación de varias métricas que miden la carga de la página](https://developers.google.com/web/tools/lighthouse/v3/scoring): Time to Interactive, Speed Index, First Contentful Paint (FCP), First CPU Idle, First Meaningful Paint (FMP) y Estimated Input Latency.

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

Los informes fueron generados analizando las webs el día XXXX y se pueden consultar en XXXXX.
