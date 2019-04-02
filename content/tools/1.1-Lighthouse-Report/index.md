---
title: Lighthouse Report
date: "2019-01-14"
description: Vamos a crear un script en node.js para obtener informes de Web Performance utilizando Lighthouse, todo ello desde la terminal. Esto nos permitirá poder automatizar el proceso en diversos workflows.
featuredImage: ../../assets/logo.svg
---

Una de las herramientas que utilizamos para hacer las PerfReview es [Lighthouse](https://developers.google.com/web/tools/lighthouse/), vamos a ver cómo utilizarlo para crear unos informes de Performance de diferentes sites.

Podréis encontrar todo el código en el repositorio [PerfTools](https://github.com/PerfReviews/PerfTools).

----

## Optimizando el script

En el vídeo del canal generamos un script con la previsión de extender algunas de las funcionalidades, en esta ocasión vamos a generar un scriot más óptimo.

> Encontraréis el vídeo al final del artículo.

## Informes de Performance

El objetivo es generar un html con el listado de los informes de performances de los sites que definamos en el archivo `data.js`.

#### Este será el resultado

![Lighthouse Report](./LighthouseReort.jpg)

## Requisitos

Vamos a necesitar tener instalado Node.js, si no lo tenemos instalado en el sistema, podemos seguis las instrucciones de la [documentación oficial](https://nodejs.org).

## Instalando las dependencias

Lo primero que haremos es inicializar **npm** en nuestra carpeta PerfTools-Lighthouse-Report con `npm init -y` para generar el archivo `package.json` y poder instalar los paquetes npm que utilizaremos como dependencias.

Desde la terminal ejecutamos el siguiente comando para instalar las dependencias.

```sh
npm install --save chrome-launcher lighthouse
```

> En el vídeo también incluimos `puppeteer request util`, ya que la idea era trabajar más a fondo con Puppeteer, pero en esta ocasión lo vamos a obviar para tener un código más limpio y legible.

Package | Descripción
------- | -----------
chrome-launcher | Nos permite lanzar Google Chrome desde Node.js.
lighthouse | La herramienta que nos generará el informe.

Ahora que hemos instalado las dependencias, vamo a crear el archivo `data.js` que nos servirá para definir las urls de las que queremos conseguis los informes de Web Performance.

```js
module.exports = {
  mediamarkt: 'https://www.mediamarkt.es/',
  elcorteingles: 'https://www.elcorteingles.es/',
  zara: 'https://www.zara.com/es/',
  smashingmagazine: 'https://www.smashingmagazine.com/',
  renfe: 'http://www.renfe.com/'
}
```

## Creando el script

Creamos un archivo `report.js` donde lo primero que hacemos es importar todos los módulos que necesitamos.

```js
const chromeLauncher = require('chrome-launcher');
const lighthouse = require('lighthouse');
const ReportGenerator = require('lighthouse/lighthouse-core/report/report-generator');
const fs = require('fs');
```

Seguidos de las variables que utilizaremos en la aplicación.

```js
const sites = require('./data');
const package = require('./package.json');
const dir = './reports';

let links = [];
```

En la constante `sites` tendremos los sites de los que queremos generar los informes, en `package` el contenido del fichero `package.json` para tener acceso a su contenido, en `dir` definimos la carpeta de salida para los informes y por último, definimos `links` como un array donde añadiremos los enlaces a los informes de cada site.

Con la siguiente condicional, simplemente nos aseguramos que el directorio `reports` existe, sino, lo creamo.

```js
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
```

Hemos llegado a la parte core del script, la comentaremos por bloques.

En primer lugar podemos ver que todo el código lo tenemos en una función anónima auto ejecutada.

```js
(async () => {
  for (const id of Object.keys(sites)) {
    const URL = sites[id];
    console.log(`Testing ${id} on ${URL}`);

    //...
  }
})();
```

El primer bloque es un `for` para ejecutar nuestro códifo a cada uno de los sites que hemos definido en `data.js`. En su interior lo primero que tenemos es una constante con la url del site, seguido de in `console.log` para informarnos del proceso.

Seguimos con otra función anónima autoejecutada, esta función es asíncrona, y con `await` indicamos que queremos que el proceso espere hasta que tenga una respuesta, ya que no tenemos ningún control sobre los tiempos de carga de los sites.

```js
await (async () => {
  const opts = {
    chromeFlags: ['--headless'],
    logLevel: 'info',
    onlyCategories: ['performance']
  };

  // Launch chrome using chrome-launcher.
  const chrome = await chromeLauncher.launch(opts);
  opts.port = chrome.port;

  // ...
})();
```

Lo primero que haremos es utilizar `chromeLauncher` para abrir cada uno de los sites en el navegador. Hemos creado la constante `opts` para definir las opciones de configuración

Opción | Descripción
------ | -----------
`chromeFlags: ['--headless']` | Con este flag, Chrome no abrirá una ventana del navegador.
`logLevel: 'info'` | Por defecto no se muestra el proceso en la terminal, con `info` veremos información del proceso.
`onlyCategories: ['performance']` | Esta valor lo utilizaremos en Lighthouse, para indicar que sólo queremos el informe de Performance.

Llegó la hora de ejecutar Lighthouse.

```js
// Run Lighthouse.
const lhr = await lighthouse(URL, opts, null);
const html = ReportGenerator.generateReport(lhr.lhr, 'html');
fs.writeFile(`${dir}/${id}.html`, html, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log(`The html file for ${id} was saved!`);
  links.push(`<li><a href="${id}.html" target="_blank">${id}</a></li>`)
});

await chrome.kill();
```

En la primera línea ejecutamos lighthouse, donde le pasamos 3 argumentos: la url del site a analizar, las opciones, en este caso `onlyCategories: ['performance']` y por último con el parámetro `null` le indicamos que no pasamos una configuración, así que utilizaremos la [configuración por defecto](https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/config/default-config.js).

En este punto ya tenemos el resultado de lighthouse en la variable `lhr`, así que en la siguiente línea utilizamos `ReportGenerator.generateReport(lhr.lhr, 'html')` para generar el html que nos permita interpretar mejor todos los datos.

En el siguiente código utilizamos la API de Node.je `fs` para guardar en un archivo html el resultado. Le pasamos como primer argumento la ruta, como segundo argumento el informe y por último una función callback donde mostramos un mensaje de que se ha guardado el informe y añadimos al array `sites` un elemento `<li>` con un enlace al archivo que acavamos de guardar. En el caso de que lo hubier, se mostraría un error en la terminal.

Por último, con `await chrome.kill();` cerramos el proceso de chrome, ya que lo inicializaremos en la seguiente iteración.

```js
let ToC = `<html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
      </head>
      <body style="padding: 2em">
        <h1 class="title">${package.name}</h1>
        <h2 class="subtitle">${package.description}</h2>
        <aside class="menu">
          <p class="menu-label">PerfReviews</p>
          <ul class="menu-list">${links.join('')}</ul>
        </aside>
      </body>
</html>`;

fs.writeFile(`${dir}/index.html`, ToC, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('-----------------------------');
  console.log(' ToC for sites was saved! 😊 ');
  console.log('-----------------------------');
});
```

Cómo último paso, generamos un ToC (Table of Content) o índice, con los enlaces a los informes. Por la simplicidad del html, no hemos utilizado una librería de plantillas, pero sí hemos importado [Bulma](https://bulma.io/) para añadir estilos 😊.

Y como en el paso anterior, utilizamos `fs` para guardar el archivo `index.html` con los enlaces a todos los informes.

## Código

En el [repositorio](https://github.com/PerfReviews/PerfTools/tree/master/Lighthouse-Report) encontrarás todo el código, tanto la versión de este artículo en `report.js` como la versión que comentamos en el vídeo `index.js`.

## Vídeo

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=1x2A2wZKJPU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
