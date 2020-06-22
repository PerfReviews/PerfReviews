---
title: Entrevista a Nico Bistolfi, CEO y cofundador de Piio
date: "2020-06-22"
description: Hablamos con Nico sobre el servicio de optimización de imágenes Piio, cómo ve el estado actual del rendimiento web y cómo Piio facilita el trabajo del desarrollador.
featuredImage: ./featured-image.png
---

**[Piio](https://piio.co/?utm_source=Blog&utm_medium=referral&utm_campaign=PerfReviews)** es un servicio de transformación de imágenes que permite servir imágenes con el tamaño y formato adecuado con una simple integración. Recientemente lanzaron [Image Speed Test](https://imagespeedtest.piio.co/?utm_source=Blog&utm_medium=referral&utm_campaign=PerfReviews), que genera informes sobre potenciales mejoras en imágenes para cualquier web.

![Captura de la web de Piio](./thumbs/piio.jpg)

Hablamos con [Nico Bistolfi](https://www.linkedin.com/in/nicolasbistolfi/) sobre la filosofía detrás de Piio, qué lo hace especial, y por qué es necesario automatizar las tareas relacionadas con web performance. Tenéis disponible [el vídeo en Youtube](https://youtu.be/SLzhWFU52WQ) y [el audio en MP3](./entrevista.mp3).

<iframe width="560" height="315" src="https://www.youtube.com/embed/SLzhWFU52WQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Transcripción de la entrevista

**Jose**: ¡Hola! En Perf.Reviews nos gusta compartir consejos para mejorar el rendimiento web y hablamos sobre diferentes técnicas, diferentes APIs de navegadores y también diferentes servicios. Uno de los temas que vamos a tratar hoy es imágenes y cómo podemos utilizar servicios para corregir problemas con las imágenes que suelen ser bastante tediosos.

Mi nombre es José Pérez y me acompaña como siempre Joan León

**Joan**: Muy buenas, ¿qué tal?

**Jose**: ¡Muy bien! Y tenemos el enorme placer de poder hablar hoy con Nico Bistolfi que es CEO y cofundador de Piio. ¡Hola Nico!

**Nico**: ¿Qué tal, cómo andan? Muchas gracias por la invitación.

**Jose**: Muy bien, gracias a ti por estar hoy con nosotros. Yo creo que lo primero es hablar sobre Piio. ¿Qué es Piio?

**Nico**: Nuestro producto principal es un servicio de optimización de imágenes con una muy simple instalación. Sirve principalmente para sitios webs, y hoy en día no estamos enfocados en aplicaciones. Lo que vamos a lograr, y lo que va a lograr nuestro servicio, es aplicar todas las técnicas y mejores prácticas para optimización de imágenes en tu sitio web [a través de una librería JavaScript](https://docs.piio.co/?utm_source=Blog&utm_medium=referral&utm_campaign=PerfReviews).

**Jose**: Muy bien, y entiendo que en móvil también hay un problema similar, que hay que servir imágenes adaptadas a móvil, pero de momento estáis enfocados en web.

> En la web estamos más avanzados que las apps nativas a nivel de transferencia de datos. Creo que las apps tienen un camino importante por recorrer. — Nico

**Nico**: Sí, correcto. Lo que se ve, y lo ve uno como usuario, es que en móvil a veces tal vez la performance no es tan medida o no lo ven como tan importante. Lo vemos en aplicaciones como Instagram por ejemplo, que tiene un consumo de megas totalmente desproporcionado a cualquier otra aplicación, y sin embargo no ha habido una mejora en los últimos años. Creo que a nivel de web estamos un poco más avanzados en el proceso de performance y de optimizar la experiencia para el usuario a nivel de velocidad. Las aplicaciones móviles tienen otras ventajas, como que tienen mejores animaciones, tal vez necesitan cargar los estilos una ver que está instalada. Pero a nivel de transferencia creo que tienen un camino importante por recorrer.

**Joan**: La verdad es que es curioso que en web haya más sensibilidad en ese aspecto que en móvil.

**Nico**: Creo que se puede dar también del tipo de dispositivos del que estamos hablando o el tipo de dispositivos que usan los usuarios. Alo mejor en móvil no se preocupan tanto por dispositivos de baja gama y el usuario ya de por sí entiende que hay un montón de aplicaciones que no va a poder usar y a las que no va a poder acceder. En web creo que en los últimos 10-15 años se ha trabajado muchísimo en la accesibilidad y eso que la web tenga que funcionar para cualquier dispositivo. Una aplicación nativa que en tu celular no te va a cargar, entras al mismo servicio por la web y va a funcionar mejor.

### El origen de Piio

**Jose**: ¿Y cómo empezasteis el proyecto? Porque entiendo que igual hay equipos de desarrollo internamente en algunas empresas que intentan crear algún tipo de servicio interno para poder transformar imágenes. ¿Es algo que empezasteis a desarrollar estando dentro de otra empresa o directamente pensasteis “esto es algo que queremos hacer” y lo empezasteis ya de forma externa?

> Piio crea un estándar para abstraer al desarrollador de los problemas de imágenes y solucionarlos de una vez por todas — Nico

**Nico**: En realidad el proceso viene de mi carrera profesional como desarrollador. Empecé dentro de uno de esos equipos y yo trabajaba para una red social hace unos 15 años. Estaba basado en Europa y ahí fue que empecé a hacer mis primeras armas con lo que era la optimización de contenido multimedia. Siempre me llamó mucho la atención. Entremedio hice algunas librerías open source para poder conectar servicios de AWS como es S3 o Elastic Transcoder de videos.

En 2018 empecé a pensar sobre Piio como una herramienta muy simple para poder optimizar las imágenes y que resuelva realmente todos los problemas que tienen los desarrolladores. La optimización tiene que ser continua. Muchas veces lo que pasa es que generas una nueva versión del sitio web, se realizan los test apropiados, se empiezan a ver cuáles son los assets donde puede hablar problemas… Se soluciona eso y 3 semanas después, 3 releases después, está todo mal de vuelta. Tenemos que lograr tener un estándar y, si bien en la web hemos avanzado muchísimo, todavía hay cosas que quedan por pulir. Lo que buscamos desde la tecnología de Piio es justamente poder crear ese estándar que abstraiga al desarrollador de ese tipo de problemas y que lo solucionen de una vez por todas.

### Qué funcionalidad soporta Piio

**Joan**: Has comentado que te llamó la atención la optimización de todos los contenidos de media. De momento Piio está centrado en optimización de imágenes. ¿En algún futuro tenéis pensado soportar también la optimización de vídeo?

**Nico**: Está dentro del backlog. Nosotros estamos basados en las necesidades del usuario. Si vos te sentás como ingeniero frente a la computadora y empezás a pensar cuáles son las cosas que debería necesitar un servicio de optimización de imágenes, pensarías que el _crop_ es algo fundamental. O de repente querés hacer transformaciones cambiando el centro.

Sin embargo lo que vemos cuando hablamos con el usuario final es que estas cosas ni siquiera se terminan usando. En el proceso de llevar una imagen desde el fotógrafo, a la parte de producción, edición, diseñadores y llega a la plataforma, ya ocurrió un proceso que no es necesario volver a realizarlo.

Tenemos una funcionalidad de _crop_ que la lanzamos no hace mucho tiempo. Gran parte de la vida de la empresa estuvimos vendiendo el servicio sin la funcionalidad del _crop_ específicamente porque no está dentro de los problemas que significan optimizar las imágenes para un sitio web. Forma parte del problema del tratamiento de imágenes.

Volviendo a si queremos hacer vídeos o no, estamos identificando otras cosas en optimización de sitios web u optimización de cloud, donde estamos empezando a posicionarnos y enfocarnos. Pueden ser tal vez más necesarias que la parte de vídeos, que hoy es un segmento bastante reducido.

**Joan**: Es interesante.

### Diferencias con otros servicios de optimización de imágenes

> Nosotros ofrecemos un servicio completo y no requiere apenas acción de parte del desarrollador — Nico

**Jose**: Si alguien ha utilizado otros servicios similares de imágenes puede preguntarse cuál esla diferencia entre Piio y un servicio donde yo pueda utilizar una url y pasarle a ciertos parámetros para, por ejemplo, hacer un escalado. Piio funciona instalando un pequeño JavaScript y haciendo un pequeño cambio en el en el marcado de las imágenes. ¿Cuál es la principal diferencia o cuál es vuestro _approach_?

**Nico**: Una de las cosas que decimos es que nosotros sí somos un servicio porque es un servicio completo y no requiere mucha más acción de tu parte. Por otro lado cuando utilizas una API de optimización de imágenes el trabajo de optimización es manual en el lado del desarrollador. Si vos querés optimizar para el iPhone X vas a tener que correr un test específico para el iPhone X, vas a tener que ver cómo se están generando las imágenes y agregar líneas de código por cada dispositivo diferente al cual vos querés optimizar de forma ideal. Eso te lleva a no poder cubrir todos los casos ni que tampoco puedas pensar a futuro qué es lo que va a pasar con los dispositivos.

Un ejemplo es el [device pixel ratio](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio). Hasta hace unos años teníamos 1 a 1 (ratio de píxel físico a píxel CSS) y no teníamos que pensar ello. Después cuando salieron las pantallas retina los diseñadores empezaron a generar imágenes en dos tamaños: uno para retina y otro para los dispositivos normales. Y hoy en día tenés device pixel ratio que son de 2.75, 3.5, y va variando de acuerdo al dispositivo que el usuario está utilizando. Es súper difícil planificarlo y llevarlo de forma manual.

Nuestra instalación es súper sencilla, incluyendo el code snippet de la integración de Piio, y cambiando el HTML, que es simplemente el mismo cambio que harías si estuvieras integrando una librería de lazy loading. Y se terminó ahí. La librería va a entender en tiempo de renderizado del browser cómo se están interpretando tus estilos y cuál va a ser el tamaño exacto de ese contenedor. La librería va a llamar a nuestras APIs y va a hacer la optimización en tiempo real.

### Optimizando CSS background images

**Jose**: Algo que Joan y yo hemos visto analizando webs es que cuando alguien está utilizando una etiqueta img es relativamente fácil transformarlo en un picture o srcset para convertirlo en responsive image. Pero siempre quedaba pendiente la asignatura de las imágenes que se añadían utilizando CSS, con un background-image. Si veíamos que ahí había un problema de rendimiento, la solución no era tan fácil porque para adoptar una solución similar a responsive images había que estar sobreescribiendo reglas de CSS o había que convertirlo a una etiqueta img. Es algo que vosotros sí que podéis gestionar.

**Nico**: Sí. Lo que recomendamos en este caso es [mover la asignación del asset de CSS hacia el div o el elemento donde vos querés que ese background aparezca](https://blog.piio.co/image-optimization/how-to-use-optimized-responsive-images/?utm_source=Blog&utm_medium=referral&utm_campaign=PerfReviews). Se hace con una simple directiva y desde ahí se optimiza para los diferentes tamaños con los que se va a renderizar ese elemento en el browser.

### Incrementos de latencia y CPU al usar este tipo de soluciones

**Jose**: Durante un tiempo había un poco de dudas con utilizar JavaScript para servir imágenes porque podían introducir un poco de latencia. Dejaba de sacar provecho del parseo inicial que puede hacer peticiones de imágenes un poco antes. Hoy en día estamos yendo todos hacia lazy loading que, o necesita JavaScript, o está muy limitado a ciertos navegadores que lo implementan de forma nativa. Lo que a priori podría ser un problema al añadir esa latencia inicial, en realidad es una ventaja bastante pronto cuando en lugar de cargar 40 imágenes puedes cargar solo las dos o tres que están dentro del viewport. Vosotros también hacéis lazy loading en la librería, ¿verdad?

> Se ha sacado la conclusión de que “más JavaScript es peor”. Lo que hay que preguntarse es “¿qué tipo de JavaScript estoy incorporando en mi página?”— Nico

**Nico**: Sí, correcto, ya está incorporado por defecto y tenemos también diferentes configuraciones. Estamos encontrando que hay una contradicción entre lo que podría ser la mejor experiencia para el usuario y lo que Google marca como más positivo para el usuario. Google principalmente se preocupa por el [First Contentful Paint](https://web.dev/first-contentful-paint/) o por el tiempo de carga de la página. Sin embargo, cuando vos trabajás de forma más agresiva con lazy-loading para mejorar estas métricas, el usuario va a tener una experiencia un poco peor, porque a veces scrolleando ves que las imágenes empiezan a aparecer de repente y te gustaría que eso ya estuviera ahí.

Nuestro servicio tiene la opción de que puedas configurar cómo querés que eso funcione: si querés que sea más agresivo o menos agresivo. Lo que una persona tiene que medir es qué va a ser más importante, si posicionar mejor el SEO o la experiencia de usuario sea mejor.

Nosotros hemos medido el footprint de tiempo de CPU y es prácticamente inexistente. En una Macbook el tiempo de procesamiento es de 0.4 milisegundos. También hemos hecho muchos benchmark entre aquellos utilizando la API directamente y aquellos utilizando la librería, y no hay una diferencia de los tiempos de carga.

Algunas personas tienen miedo de incorporar librerías JavaScript porque sí hay muchas librerías que no están optimizadas o trabajando en forma apropiada. Pasa con los templates en Shopify o Wordpress, o trillones de librerías simplemente para hacer que tengan animaciones más lindas y sea más fácil venderlo. Después esto termina afectando a la experiencia de usuario y se hace la redacción de “más JavaScript es peor”. Lo que hay que preguntarse es “¿qué tipo de JavaScript estoy incorporando en mi página?”

### Lazy Loading y SEO

> “Es muy difícil aislar a una sola variable el impacto en el SEO de tu página o en la experiencia de tus usuarios” — Nico

**Joan**: ¿Veis algún patrón o tendencia sobre ser más o menos agresivos en el lazy loading? Por ejemplo hacer una transición desde más agresividad a hacer que la experiencia de usuario sea más suave.

**Nico**: El problema es que ahí caemos en la escuela del SEO. Sabemos que dentro del SEO hay muchas cosas que son subjetivas y no necesariamente están probadas de forma estricta. Es muy difícil aislar a una sola variable el comportamiento o el impacto que va a tener en el SEO de tu página, o inclusive también el impacto que puede tener en la experiencia de tus usuarios. Lo que te puedo responder es que no tenemos ninguna ninguna evidencia de que una cosa sea más positiva que la otra.

**Jose**: Yo creo que a veces también se intenta optimizar mucho SEO y hacer “lo que a Google les gusta” Yo creo que es mejor ofrecer una buena experiencia de usuario porque eso quiere decir que luego al usuario le va a gustar más la página, quizás la va a compartir más y va a generar más tráfico de alguna forma. Optimizar para Google es algo que puedes hacer en un momento determinado con las directrices que dan, que tampoco son muy obvias, pero es algo que siempre va cambiando. Yo creo que al final lo que hacen ellos es intentar evaluar la página de tal forma que simulen lo que el usuario va a sentir. Poniendo keywords en una etiqueta meta, o sirviendo una versión diferente para Google es peor solución que hacer una versión que funcione bien para todo el mundo, y que Google sólo sea un usuario más.

En ese sentido, si se hace un cambio en el marcado de las imágenes, igual Google no las descubre en la primera pasada. Hay que esperar a una segunda pasada donde ejecute JavaScript para poder ver esas imágenes. Aún así, seguramente el beneficio de tener una carga más rápida para el usuario va a mejorar la cantidad de enlaces que existen hacia esa página o quizás otras variables dentro del algoritmo tan grande de Google. Quizás sea una mejor opción a tener que cargar 10 megas de imágenes.

**Nico**: Muchos utilizamos PageSpeed Insights para medir, y nosotros la utilizamos internamente. Ahí te hablan sobre lazy loading y dicen “identificamos determinadas imágenes que deberían estar utilizando lazy loading” y ahí es donde la persona “tengo que ser un poco más estricto con el lazy loading”. Depende de si la persona prefiere enfocarse en SEO y enfocarse 100% en lo que PageSpeed Insights le está diciendo, o prefiere priorizar la experiencia de usuario y que sea un poco más orgánica.

### Cuál es el usuario típico de Piio

> “El que marca la prioridad sobre la optimización del sitio web y sobre qué tan importante es el SEO o las métricas es principalmente el área de marketing” — Nico

**Jose**: ¿Cuál dirías que es el principal tipo de usuarios de Piio? E-commerce, blogs, sitios de noticias…

**Nico**: Inicialmente uno podría pensar de que el equipo de ingeniería sería el equipo que tendría que estar preocupado por la optimización. Pero como desarrolladores sabemos que ingeniería es un área de muchísimo soporte y que responde a las necesidades de otras áreas. El que marca la prioridad sobre la optimización del sitio web y sobre qué tan importante es el SEO o las métricas es principalmente el área de marketing. Lo que vemos muchas veces es que las primeras personas con las que hablamos son del área de marketing y luego incluimos al equipo de tecnología, si es que tienen uno para seguir avanzando en la solución.

**Jose**: ¿Crees que debería haber más ingeniería en los equipos de marketing?

**Nico**: Siempre que hablo con alguien que trabaja en el área de marketing pregunto cuánto saben de código. Y están aprendiendo, están empezando a entender mucho más de lo que significa un sitio web o un proceso de ingeniería. Son áreas que trabajan muy juntas y hoy en día hay herramientas que están empoderando al marketer para que puedan ser más independientes sobre el área de ingeniería.

**Joan**: Creo que has utilizado la palabra clave que es ser más independientes. Cuando tienen dependencias de otros equipos e intentan ser más independientes entonces esa autonomía la buscan intentando tener más conocimiento y buscando ellos mismos las herramientas. Está claro que cuanto más sepan de la parte técnica mejor podrán valorar esas herramientas, mejor las podrán configurar, y al fin y al cabo mejorar la experiencia de usuario que es lo que realmente importa.

**Jose**: Yo veo mucho equipo de marketing añadiendo scripts sin saber cuál es el impacto que tienen. Agradecería más de una vez tener a alguien de ingeniería más cerca de esos equipos que entienda cuál es la implicación de darle tantas facilidades a un equipo de marketing para que no tenga dependencia de ingeniería. Con esa autonomía también viene una responsabilidad. Pueden estar añadiendo mucha latencia y otros problemas a la web y quizás no se están dando cuenta.

**Nico**: Sí, correcto.

### Informes de ahorro potencial en imágenes usando Image Speed Test

![Extracto de un test de Image Speed Test de perf.reviews](./thumbs/image-speed-test.png)

> “En los tests de Image Speed es importante poder darle al usuario determinados parámetros y hablar en un lenguaje natural para que no se frustre en el camino” — Nico

**Jose**: Recientemente lanzasteis un servicio que hace informes de cuál es la ganancia que puedes obtener mejorando las imágenes que se llama [Image Speed Test](https://imagespeedtest.piio.co/?utm_source=Blog&utm_medium=referral&utm_campaign=PerfReviews).

**Nico**: El objetivo principal del servicio era enfocarnos en la optimización de imágenes, que puedan ver cuál es el norte y que puedan tener una brújula hacia dónde ir y saber cuál es el potencial. A medida que uno trabaja en la optimización se pregunta hasta dónde puedo ir. Hay limitaciones de las propias plataformas que no te van a permitir bajar de repente a un tiempo ideal de 1,5 o menos de 3 segundos de carga. Es importante poder darle determinados parámetros y hablar en un lenguaje un poco más natural a la persona que está haciendo esos tests para que no se frustre en el camino.

Nosotros lo que buscamos fue hacer un test sobre el sitio web y ver cuáles son las cosas principales en las que tienen que trabajar sobre la optimización de imágenes. Sobre eso intentamos calcular cuál sería el resultado final si la persona utilizara todas las prácticas que existen hoy en día. Damos un performance score inicial y damos un potential performance score que es el que resultaría si estuvieran optimizando las imágenes. Sobre cada una de esas imágenes le decimos si podría estar en determinado formato, tener determinado tamaño, o utilizando lazy-loading podría llegar a ahorrar x cantidad de requests en tu página. Eso le permite a la persona tener una guía de cómo seguir.

> “Si no tenés un estándar que te permite hacer una automatización de la optimización vas a quedarte por detrás al tiempo, o depender de un trabajo manual” — Nico

**Jose**: Me gusta mucho que habéis incluido una sección con algunas grandes marcas y cuál es el potencial ahorro. Uno podría pensar que esas marcas tendrían todo ya optimizado porque tienen recursos para ello. Es bastante bastante curioso ver los porcentajes de ahorro de grandes empresas. De alguna forma te quedas más tanquilo cuando ves que tu pequeña página tiene problemas de rendimiento y ves que sitios grandes también lo tienen. Es algo que pasa en todos los sitios.

**Nico**: Está relacionado con lo que mencionábamos al principio. Si no tenés un estándar que te permite hacer una automatización de la optimización entonces vas a quedarte por detrás al tiempo luego de haber hecho esa optimización, o dependiendo de un trabajo manual. Siempre va a salir algo que va a estar funcionando mejor.

Hay muchos sitios, de los grandes, que todavía no utilizan WebP para los browsers que son compatibles. Y eso es increíble porque ha estado ya por bastante tiempo y son empresas grandes que uno supondría que tienen la capacidad. Pero también depende de si tienen el tiempo para enfocarse en ese problema, de que realmente alguien lo esté identificando y _pusheando_ para que se haga el cambio. Creo que todos los sitios sufren el mismo problema. A veces lo vemos en mayor magnitud y en menor magnitud. quizás los sistemas

> “Simplificamos el proceso y le sacamos tareas al desarrollador para que la optimización de imágenes se mantenga por mayor tiempo” — Nico

**Jose**: Los grandes tienen problemas más organizativos o es más difícil hacer este tipo de cambios quen en una empresa más pequeña en la que se pueden hacer sin necesidad de pedir autorización a seis personas de distintos equipos.

**Nico**: Eso puede ser y puede ser también la parte de gestión del conocimiento. Que un ingeniero hace seis meses fue que estuvo haciendo la tarea de optimización y ese ingeniero tal vez se fue a otro lugar o está trabajando en otra cosa. Luego lo agarra otra persona y hace cambios o no está de acuerdo con lo que se venía haciendo.

Si nosotros simplificamos el proceso y le sacamos tareas al desarrollador que tenga que hacer para la optimización, vamos a estar logrando que se mantenga por mayor tiempo. En nuestro servicio damos la posibilidad de validar cada una de tus páginas. Una vez que agregás tu dominio puedes agregar las páginas que vos querés estar trackeando y validar, y nosotros vamos a correr una simulación y te vamos a decir, inclusive utilizando en nuestra librería, cuáles son las cosas que podrías mejora dentro de tu página.

Cosas como [una imagen que está oculta y que no se debería estar pidiendo](https://blog.piio.co/website-speed/how-css-display-none-affects-images-on-page-load/?utm_source=Blog&utm_medium=referral&utm_campaign=PerfReviews), o una imagen que se está mostrando de un tamaño que no debería ser porque tal vez los estilos de CSS es tan mal o no están. Esas recomendaciones también las damos dentro del servicio para que la gente pueda seguir trabajando.

### Image Speed Test, una herramienta gratuita

> “Image Speed Test es gratuito y el plan de Piio gratuito va a ser más que suficiente para que funcione y optimice la página” — Nico

**Joan**: Una cosa que no hemos comentado ese que Image Speed Test es gratuito.

**Nico**: Sí. Además, para un sitio personal o una pequeña empresa [el servicio de Piio gratuito](https://piio.co/pricing/?utm_source=Blog&utm_medium=referral&utm_campaign=PerfReviews) va a ser más que suficiente para que funcione y optimice la página.

**Joan**: Eso ayudará también a expandir la cultura de performance. Herramientas como ésta, y lo que estamos haciendo nosotros también este canal, tiene como objetivo expandir la sensibilidad sobre la performance. Para finalizar queríamos preguntarte sobre el futuro de Piio. ¿Hacia dónde vais?

> “Queremos generar una mejor experiencia de Internet y que sea una herramienta accesible para todos sin importar el dispositivo que tengas” — Nico

**Nico**: Estamos haciendo la transición de ser una startup a tener un producto de cabecera como es el de la optimización de imágenes, a establecer una suite de productos. Y eso es en lo que estamos trabajando hoy en día. Nuestro foco principal va a ser el cloud performance. Los productos que vamos a lanzar va a ser posible utilizarlos en cualquier sitio web existente y seguramente ayude a mejorar la performance de cualquier sitio web que esté público. Esperamos poder lanzarlo este año o principios del año que viene. No puedo hacer mucho disclosure de lo que va a ser el producto porque es parte del trabajo pero si esperamos ir colaborando con la optimización, poder construir un mejor internet y que las personas tengan una mejor experiencia.

No sólo el hecho de generar una mejor experiencia de internet de por sí, sino también hacer que internet sea una herramienta accesible para todos sin importar el dispositivo que tengas. Ya sea el último iPhone o un Android de 2010, es importante que puedas acceder a esa información, que es parte del patrimonio de la humanidad.

**Joan**: Perfecto. Estaremos muy atentos a las nuevas features que lancéis.

**Jose**: Muy bien. Nico, muchísimas gracias por haber asistido a esta entrevista y esperamos lo mejor para Piio.

**Nico**: Muchas gracias a ustedes por la invitación.

**Joan**: ¡Un saludo!
