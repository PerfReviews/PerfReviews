---
title: Lighthouse Report
date: "2019-01-14"
description: Vamos a crear un script en node.js para obtener informes de Web Performance utilizando Lighthouse, todo ello desde la terminal. Esto nos permitirá poder automatizar el proceso en diversos workflows.
featuredImage: ../../assets/review-renfe.png
---

Una de las herramientas que utilizamos para hacer las PerfReview es [Lighthouse](https://developers.google.com/web/tools/lighthouse/), vamos a ver cómo utilizarlo para crear unos informes de Performance de diferentes sites.

Podréis encontrar todo el código en el repositorio [PerfTools](https://github.com/PerfReviews/PerfTools).

----

## Informes de Performance

El objetivo es generar un html con el listado de los informes de performances de los sites que definamos en el archivo `data.js`.

#### Este será el resultado

![Lighthouse Report](./LighthouseReort.jpg)

## Requisitos

Vamos a necesitar tener instalado Node.js, si no lo tenemos instalado en el sistema, podéis seguis las instrucciones de la [documentación oficial](https://nodejs.org).

## Instalando las dependencias

Lo primero que haremos es inicializar **npm** en nuestra carpeta PerfTools-Lighthouse-Report con `npm init -y` para generar el archivo `package.json` y poder instalar los paquete npm que utilizaremos como dependencias.

Desde la terminal ejecutamos el siguiente comando para instalar las dependencias.

```sh
npm install --save chrome-launcher lighthouse puppeteer request util
```

Package | Descripción
------- | -----------
chrome-launcher | Nos permite lanzar Google Chrome desde Node.js
lighthouse | La herramienta que nos generará el informe
puppeteer | Puppeteer es una librería de Node.je que proporciona una API de alto nivel para controlar Chrome 
request | Nos facilitará las llamadas http
util | Tendremos el módulo util disponible desde el navegador

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

Creamos un archivo `index.js` donde lo primero que hacemos es importar todos los módulos qu enecesitamos.

```js
const chromeLauncher = require('chrome-launcher');
const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const ReportGenerator = require('lighthouse/lighthouse-core/report/report-generator');
const request = require('request');
const util = require('util');
const fs = require('fs');
```

Seguidos de las variables que utilizaremos en la aplicación.

```js
const sites = require('./data');
const package = require('./package.json');
const dir = './reports';
let links = [];
```

En la constante `sites` tendremos los sites para el informe, en `package` tendremos el contenido del fichero `package.json` para tener acceso a su contenido, en `dir` definimos la carpeta de salida para el informe y por último definimos `links` como un array donde añadiremos los enlaces a los informes de cada site.

