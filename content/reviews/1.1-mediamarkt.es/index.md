---
title: Mediamarkt España
date: "2018-12-28"
description: En nuestro primer análisis revisamos la nueva web de Mediamarkt España. Encontramos problemas con el cacheo, falta de compresión, múltiples versiones de jQuery y más.
image: poster.jpg
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/xD8MbFUZPKQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Informes y herramientas

### PageSpeed Insights

- [Home](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.mediamarkt.es)
- [Product](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.mediamarkt.es%2Fes%2Fproduct%2F_consola-nintendo-switch-6-2-joy-con-azul-y-rojo-ne%25C3%25B3n-1353575.html
)
### Cloudinary (imágenes)

- Informe de Cloudinary de la página de home. [Potential Compressed Weight](https://webspeedtest.cloudinary.com/results/181220_DW_0817ab3a3c86ce6a352222b1946bb95c) `53.1%`
- Informe de Cloudinary de la página de producto. [Potential Compressed Weight](https://webspeedtest.cloudinary.com/results/181220_5Z_2d2491cec6ab46d20fb922681d5afcb6) `52.5%`

### Webpagetest

- [Home](https://www.webpagetest.org/result/181220_8H_72dfccbb0939ab9689666e864bfc0763/) | _Chrome - Cable_ | [📺 **Video**](https://www.webpagetest.org/result/181220_8H_72dfccbb0939ab9689666e864bfc0763/1/screen_shot/)
- [Home](https://www.webpagetest.org/result/181220_6A_ed64940a66a1820907b2a0b7cda4d05e/) | _Chrome - Emulated Samsung Galaxy S8/S8+/Note 8 - 3GFast - Mobile_ | [📺 **Video**](https://www.webpagetest.org/result/181220_6A_ed64940a66a1820907b2a0b7cda4d05e/1/screen_shot/)

### CSS Stats

- [Home](https://cssstats.com/stats?url=https%3A%2F%2Fwww.mediamarkt.es&ua=Browser%20Default) | Size: `1.46 Mb`

```
131 Unique Font Sizes
26 Unique Font Families
67 Media Queries
```

### DevTools Coverage

- [Home Coverage](./reports/Coverage-Home.jpg) `3.0Mb of 4.5Mb are not used (67%)`
- [Product Coverage](./reports/Coverate-Product.jpg) `3.3Mb of 4.9Mb are not used (67%)`

### Enlaces a otros recursos mencionados

- [You might not need jQuery](http://youmightnotneedjquery.com), que muestra el código equivalente para reemplazar jQuery con JS estándar.
- [Google Woff2](https://github.com/google/woff2), una herramienta para generar ficheros de fuentes en formato woff2.

## Recurso del día

- [web.dev/Learn](https://web.dev/learn)
