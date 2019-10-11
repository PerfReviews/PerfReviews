---
title: Where do I start to optimize my images?
date: "2019-10-11"
description: As web development professionals, we care about choosing the best framework, the most current library, applying good practices in Javascript and CSS, being careful of the semantics in HTML to improve SEO, we are improving the accessibility of our content, we package and we divide the files to optimize the load... But what about images?
featuredImage: ./featured-image.png
---

> As web development professionals, we care about choosing the best framework, the most current library, applying good practices in Javascript and CSS, being careful of the semantics in HTML to improve SEO, we are improving the accessibility of our content, we package and we divide the files to optimize the load... But what about images?

## Images on the web

Images are a very important part of the web. Surely with the constant advance of technology and improvemenets in connectivity, in the future the content might be more video-based than image-based. No matter what, our goal of improving user's experience will remain. After all, that's what our work really is about.

According to [HTTP Archive](http://httparchive.org/), 50% of the data transferred to load a web page are images (JPEG, PNG and GIF). In August 2019, images on mobile represented 911KB of the content loaded for the average 1.8MB site, and on desktop there were 1MB of images on an average site weighting 2MB.

[![HTTP Archive: Table](./thumbs/table.png)](https://twitter.com/dougsillars/status/1178955502212063232)

## ~~Image Optimization~~ Image eXperience is everyone's business

A few days ago, in the article [Performance Web in modern times](https://octuweb.com/performance-web-en-tiempos-modernos/), Michelangelo wrote about a situation where he had problems planning an activity for the weekend: _"Where I should see the movie schedules, it renders white on white. I think it is loading, I am not sure ... the train has arrived and my mobile goes to the pocket. I will try later using another cinema's website..."_.

It is very likely that the white text of the schedules is set as an overlay of a fantastic and incredible image of a key scene of the last film premiere, perfectly contrasted, perfectly framed to draw the attention of the viewer and show the schedules to watch that great movie ... **but**, the image has not been loaded.

Let me introduce the term IX, short for Image eXperience. There are several points to consider for a good IX, beyond passing the images through a compressor that promises to optimize our images in the most effective way.

In the development of a website there are several roles, whether in teams, people or someone who exercises more than one of those roles: product, UX, design, development, QA, up to [DevOps](https://en.wikipedia.org/wiki/DevOps) (or what is now known as [SRE](https://landing.google.com/sre/)) in the deployment phase. Each of these roles has the responsibility of offering the best for the **user**, providing the maximum value to the product, taking care of the details.

Let's continue with the example of the cinema schedule page that Michelangelo could not see. Given this situation, these are the questions that I ask myself and that could have been used as a checklist in the process of ideation, design, development and deployment of that page:

- Is an image really necessary to offer that information?
- If white text has been chosen in order to keep a high contrast with the background image, why has a background color not been set in case the image is not displayed?
- Is that image optimized for mobile devices?
- If it is an image in JPEG format, why is it not a progressive JPEG, so IX is improved?
- If it is a critical image to highlight the product _(in this case it makes perfect sense)_, why has the preload of that image not been taken into account?
- Has a [budget](https://addyosmani.com/blog/performance-budgets/) not been defined for the images?
- Has anyone tested using different connection speeds?

As you can see, the optimization of images for the web is not only about choose the percentage of compression when saving an image. There are many things to consider and many people that can intervene and detect a possible failure in a part of the product as critical as the example above.

> Explaining all these points in depth would be enough content for a wholee book... Actually, I am already working on it 🤪

## ~~Optimization~~ Adventure Time

Given that we want to show images on our site, the most common question is "**where do I start to optimize my images?**".

## Optimization from graphic editors

Graphic editors are first in line when talking about optimization. Software like [Photoshop](httpsd://www.adobe.com/Photoshop), [Affinity Photo](https://affinity.serif.com/en-gb/photo/), [Pixelmator](https://www.pixelmator.com/pro/), [PaintShopPro](https://www.paintshoppro.com/), [Paint.net](https://www.getpaint.net/) or [GIMP](https://www.gimp.org/) among others. Let's not forget [Sketch](https://www.sketch.com/), which despite not focused on image editing, it is widely used to create user interfaces<sup>(1)</sup>.

### Photoshop

It is the most used image editor by design teams. Interestingly it is **not** the one that offers more optimization options. In its latest version, CC 2019 features an export dialog window with some improvements to generate images of various densities, as can be seen in the left column, but it does not leave us much choice regarding the image format and configuration parameters.

![Photoshop: Export dialog](./thumbs/Photoshop-Export.png)

We can export to PNG, JPG, GIF and SVG (yes, SVG, generates an SVG file with the image embedded using base64)_. Beyond the quality percentage<sup>(2)</sup> we don't have many configuration parameters to export the images. WebP is not supported.

In previous versions of Photoshop (and in recent ones under the name "Save the Web ... (legacy)"), we can select from some predefined configurations, always according to the criteria of the Adobe team. One of the parameters that I miss in Photoshop is [Chroma Subsampling](https://en.wikipedia.org/wiki/Chroma_subsampling)<sup>(3)</sup> through which we could better optimize the optimization according our criteria. Instead they maintain a subsampling of 4:4:4 (1x1) between the values ​​51% to 100% of the quality percentage and below 51% apply a subsampling of 4:2:0 (2x2). That is why you can see a remarkable change between an image exported at 51% and the same image at 50%.

### Affinity Photo

Affinity Photo is another image editor that is gaining traction among the design community. So let's see what it offers us for exporting images.

![Affinity Photo: Export dialog](./thumbs/Affinity-Export.png)

We can see that in the export dialog they feature more formats to select from<sup>(4)</sup>, but let's not fool ourselves. From those, we have PNG, JPEG, GIF and SVG that are supported on web browsers. Like Photoshop, it keeps a simple setting to choose the compression level with a slide bar to select values ​​between 1% and 100%.

### Pixelmator

Pixelmator is a very interesting and economical alternative for image editing. It has the same setting for choosing the compression level as the previous editors, but we can see that they have added the WebP format as an option to improve the optimization of our images. With WebP we can also select the quality percentage<sup>(5)</sup>.

![Pixelmator: Export dialog](./thumbs/Pixelmator-Export.png)

### GIMP

GIMP might possibly be the least used tool in the world of design. It is an Open Source tool, with a large community behind it, and that can be seen in the many configuration parameters that we have available in the advanced options when exporting an image.

![GIMP: Export dialog](./thumbs/GIMP-subsampling.png)

We can configure more advanced parameters such as smoothing, restart markers, subsampling or DCT method<sup>(6)</sup>. They are configuration parameters that can put us away, and even make us spend a lot of time testing.

### Other editors

There are many editors and we cannot analyze them all. Most follow the same approach of showing a value scale to choose the quality loss, with some editors supporting WebP.

## Optimization from applications

In the previous section we have analyzed the tools that are usually used by design teams for image editing. A way to go beyond in optimization is using a dedicated desktop application for this goal.

Wait, we have said that **IX is everyone's business**. Thus, here we will show tools that all roles involved in the development of a product can use. Let's dig into some of these.

If you are in a Mac environment, the best option (IMHO) is [ImageOptim](https://imageoptim.com/)<sup>(7)</sup> by [Kornel Lesiński](https://twitter.com/kornelski) and it's also free.

![ImageOptim](./thumbs/ImageOptim-app.png)

Like most desktop applications in Mac environments, one of the features that makes it stand out is a simple appearance, yet very powerful and professional.

By simply dragging an image, a group of them or a folder, the application starts working, optimizing all the images. Keep in mind that what you do is replace the original image with the optimized one. That is a topic that I would like to comment on, but we will see it in the next section.

The default setting offers a compression of the images **without loss**, that means we won't see any visual changes, but we will reduce the size. We have the option to check the **Enable loss and minification** checkbox to select quality percentages for optimization with quality loss.

![ImageOptim: Quality](./thumbs/ImageOptim-Quality.png)

One of the things I like most about ImageOptim is that behind its simplicity it hides a list of compressors<sup>(8)</sup> to get the best results in each case. It goes through each of the compressors that we have marked in the list on each of the images and picks the image with the best result. That process takes a while, but I can assure you it is worth it.

![ImageOptim: Compressors](./thumbs/ImageOptim-Compressors.png)

There are alternatives to ImageOptim for Windows and Linux as we can see on their own [web](https://imageoptim.com/versions).

I leave you reference of other applications (for Mac) that you can try. Many of them are not free, but have trial versions for a few days.

![Image Optimization Apps](./thumbs/Image-Optimization-Apps.png)

Of these alternatives, the one I like is [Optimage](https://optimage.app/). On their web they promise it is more effective<sup>(9)</sup> that **ImageOptim**. It is a more complete application, since it allows us to change the image format, change its dimensions, we can configure the output folder and add prefix/suffix to not overwrite the original images. [JPEGmini Pro](https://www.jpegmini.com/) is very focused on the world of photography, and really achieves very impressive results.

## Optimization from CLI tools in local

We also have interesting options for more tech-savvy people who want to control the configuration based on parameters and automate the optimization of images. We can install and configure the native compressors<sup>(10)</sup>, the vast majority in C, as is the case of [MozJPEG](https://github.com/mozilla/mozjpeg/blob/master/BUILDING.md) or [WebP](https://developers.google.com/speed/webp/docs/precompiled)_(here we have it precompiled)_.

![MozJPEG CLI](./thumbs/cjpeg.png)
> Example of CLI command to compress an image with **MozJPEG**

![WebP CLI](./thumbs/cwebp.png)
> Example of CLI command to convert a JPEG image to **WebP**

We also have **npm** packages that offer us a wrapper with a much simpler API and that we can integrate into our Javascript application workflow.

One of these packages is [next-optimized-images](https://github.com/cyrilwanner/next-optimized-images) with options that go far beyond compressing the images, as it contains other packages as a dependency which can generate LQIP<sup>(11)</sup> images with [lqip-loader](https://github.com/zouhir/lqip-loader) or [responsive-loader](https://github.com/herrstucki/responsive-loader) that generates the different sizes of the responsive images that we need on our site. It uses several packages of [imagemin](https://github.com/imagemin/) for image optimization so let's take a look at it.

### imagemin

[Imagemin](https://github.com/imagemin/) is not a GitHub repository, but an organization with all the repositories (37).

It is a very modular system, and its base package **imagemin** has [3 encoders](https://github.com/imagemin/imagemin/blob/master/package.json#L38-L40) (JPEG, SVG and WebP) defined as dependencies, but we can add all we need.

We will see that there are a couple of patterns in the names of the repositories of this organization:

- **image-[compressor]**, such as [image-webp](https://github.com/imagemin/imagemin-webp) that has the module or plugin to work with WebP images.
- **[compressor]-bin**, such as [cwebp-bin](https://github.com/imagemin/cwebp-bin) that [contains](https://github.com/imagemin/cwebp-bin/tree/master/vendor) a compiled version for each of the supported operating systems.

This approach makes it a very versatile solution, since the modules can be maintained, updated and published separately.

It can be used both as CLI _(Command Line Interface)_ with [imagemin-cli](https://github.com/imagemin/imagemin-cli) and from Javascript. [Here](https://github.com/EscuelaIt/Optimizacion-Imagenes) you will find examples of implementation in **mpm**, **Gulp** and **Webpack** from some exercises of a course I taught at Escuela IT. In these examples you can see that I always keep the original image, to be able to compress always from the original image and not **re-compress** an image that has already been compressed, and sometimes by another compressor.

It is not a good idea to do recompress an image. In this video you can see an example of what happens when doing it:

<iframe width="560" height="315" src="https://www.youtube.com/embed/w7vXJbLhTyI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The format with the best results is **FLIF**<sup>(12)</sup>, but it is a format that is not supported by current browsers, so **MozJPEG** could be a viable option. But as I said, I prefer to keep the original image, in PNG if possible, to preserve all the information and generate from it, the compressed image and/or change of format.

**Imagemin** is the most comfortable option if what we want is to automate the compression of the images in the process of production. Both because of the amount of plugins, and for the ease of integrating them into our stack.

Take into account the time to find the correct parameters for the best result, since each imagemin plugin has its own scale of values ​​for optimization _(it might ring a bell, since the same happens in image editors)_.

## Optimization of images with third-party online services

Another option is to use an online service such as [Cloudinary](https://cloudinary.com/), [imgix](https://www.imgix.com/), [Fastly's Image Optimizer](https://www.fastly.com/io), [ImageOptim API](https://imageoptim.com/api) or [Kraken](https://kraken.io/). These services offer us much more than optimize, resize or change their format, like a cache service and [CDN](https://en.wikipedia.org/wiki/Content_delivery_network). This is an option to consider if our product is visited from different parts of the world.

Each of them has its own functionalities, advantages, configurations and integrations, butbeing a [Cloudinary MDE](https://cloudinary.com/partners/media-developers) I will talk about **Cloudinary** 😊

To know more about Cloudinary's features you can check the web. I want to talk about the features that I like, which I think provide value, both for us as demanding developers and for the IX.

Let's start by saying that in the [plans they offer](https://cloudinary.com/pricing) there is a free one that we can use to try the service without many limitations.

### Image Optimization

We can optimize both the images that we upload to the **Media Library** on our account with the `/upload/` method, as well as with remote images, with the `/fetch/` method<sup>(13)</sup>

![Cloudinary: Methods](./thumbs/Cloudinary-methods.png)

For this example we will use the API using the url

![Cloudinary: f_auto](./thumbs/Cloudinary_f_auto.png)

Between the type `/upload/` and the image version `/v1570203279/`, we have the transformation methods, in this case I have put `f_auto`, which refers to **automatic format**<sup>(14)</sup>. This parameter will deliver the image in the best possible format according to the client's request. If our client supports **WebP**, it will deliver WebP. If our client supports **JPEG 2000**, as it is the case of Safari, it will consider it, regardless of the original image format.

Let's look at an example.

![Cloudinary: Chrome vs Firefox vs Safari](./thumbs/Chrome-Firefox-Safari.png)

In the image we see an example of one of the images on the Cloudinary website, in this case `homepage-XX.png `, there are requests for the different Media Query sizes because I have forced it. The original image is in **PNG** format and we can see that although the request made by HTML is `.png`, Cloudinary delivers a **WebP** image for Chrome and Firefox, and in the case of Safari it delivers a **JPEG 2000** format. The JPEG 2000 format is larger than WebP, but Safari currently does not support that image format, instead it receives a JPEG 2000 image that it can render and that is smaller than JPEG and the original PNG.

### Responsive images

The optimization of the images not only has to do with the compression and quality of the image, we must also consider delivering them to the correct dimensions according to the device, pixel density<sup>(15)</sup> and **media queries**. Here, Cloudinary pleasantly surprises us again with [Responsive Breakpoints Results](https://responsivebreakpoints.com/), a tool to generate all the images and the code to create the media queries we need.

![Responsive Breakpoints Results](./thumbs/Responsive-Breakpoints-Results.jpg)

### Implementation, scalability and integration

Another thing I like about Cloudinary is the great support they offer for different [SDKs](https://cloudinary.com/documentation/framework_integration#sdks) for implementation: HTTPS/HTTP, Ruby, PHP, Python, Node.js, Java, JS, jQuery, React, Angular, .Net, Android and iOS. We also have them available [Open Source](https://github.com/cloudinary).

Their [add-ons](https://cloudinary.com/documentation/framework_integration#add_ons) make the solution scalable. We can activate _(these are paid)_ services for Auto-Tagging with Machine Learning, remove the background of the images with [Cloudinary AI Background Removal](https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon.html) or apply style transfer with [Neural Artwork Style Transfer](https://cloudinary.com/documentation/neural_artwork_style_transfer_addon).

As for integration, it is very interesting to see that we can integrate through [CMS-eCommerce integrations](https://cloudinary.com/documentation/framework_integration#cms_ecommerce_integrations) with Salesforce Commerce Cloud, Magento, Wordpress or Zapier.

### This does not end here

There are many features, add-ons, plugins, and tools. If you want to have a simple and visual guide of the highlights of Cloudinary, here is a website where you can play with the API and some of the photos that were taken at the **JS Camp 2019**, [CloudiCam.dev](https://cloudycam.dev/nucliweb)

## One more thing

### Other online services

There are many online services to compress images which usually compress the images one by one, and not by batch as desktop applications do. I just want to comment a couple of them that I find interesting:

- [Squoosh](https://squoosh.app/). What I like about this application is that it runs entirely in the browser. It has been developed by the engineers at Google, it is [open source](https://github.com/GoogleChromeLabs/squoosh/) and uses [WebAssembly](https://webassembly.org/) to run the [codecs] in the browser binaries](https://github.com/GoogleChromeLabs/squoosh/tree/4a01d0d548bf51e75ddb1d9e3d0259b5ab1c87b5/codecs) written in C or C ++.
- [Compress-Or-Die](https://compress-or-die.com/) uses the traditional format of running compression on the server side. What I like is that it offers many customization options, all of them documented, with very good results. It also includes an [image analyzer](https://compress-or-die.com/analyze) with very detailed image information.

### Ooops! Do not forget to optimize any image

It is very easy to make the _(unconsciously)_ mistake of not optimizing our images, but we have an option to integrate one of the following tools.

#### [ImgBot](https://imgbot.net/)
A service to optimize images based on [Magick.NET](https://github.com/dlemstra/Magick.NET) (a .NET library for [ImageMagick](https://imagemagick.org/)) that we can integrate with our GitHub repository. We can configure it to indicate how often it will parse our images, define folders, images or extensions to ignore, as well as the level of compression. The most interesting thing is that it generates a Pull Request with the suggestion of optimized images.

![ImgBot: Pull Request](./thumbs/imgbot-PR.png)

#### [image-actions](https://github.com/marketplace/actions/image-actions)

With the recent release of [Actions from GitHub](https://github.com/features/actions), the people of [Calibre](https://calibreapp.com/blog/compress-images-in-prs/) have worked on a solution similar to that of **ImgBot**. The philosophy is the same, generate a Pull Request with optimized images.

![image-actions: Pull Request](./thumbs/image-actions.png)

### The shoemaker's son...

All the images in this article have been optimized with **ImageOptim**, mostly in format **PNG** as they are screenshots with text. **PNG** is the ideal format to maintain quality and not generate noise around texts.

List of optimized images with ImageOptim<sup>(16)</sup>:

![ImageOptim: list images](./thumbs/ImageOptim.png)

## Resources

- [Essential Image Optimization](https://images.guide/), I think it is the best and most complete image optimization guide, maintained by [Addy Osmani](https://twitter.com/addyosmani).
- [Tools for image optimization](https://addyosmani.com/blog/image-optimization-tools/)
- [ImageOptim-CLI](https://jamiemason.github.io/ImageOptim-CLI/)
- [Benchmarks of Image Optimization Tools](https://foldleft.io/image-tools/)
- [Native image lazy-loading for the web!](https://addyosmani.com/blog/lazy-loading/)
- [Optimization of images](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)
- [5 steps to speed up your image heavy website](https://codeburst.io/5-steps-to-speed-up-your-image-heavy-website-65c874a86966)
- [State of the Web: Top Image Optimization Strategies](https://dougsillars.com/2018/05/21/state- of-the-web-top-image-optimization-strategies/)
- [Converting Images To WebP](https://www.smashingmagazine.com/2018/07/converting-images-to-webp/)
- [How To Create and Serve WebP Images to Speed ​​Up Your Website](https://www.digitalocean.com/community/tutorials/how-to-create-and-serve-webp-images-to-speed-up-your-websi te)
- [Use Imagemin to compress images](https://web.dev/use-imagemin-to-compress-images)
- [Low Quality Image Placeholders (LQIP) Explained](https://cloudinary.com/blog/low_quality_image_placeholders_lqip_explained)
- [JPEG Compression Algorithm](https://medium.com/breaktheloop/jpeg-compression-algorithm-969af03773da)
- [Finally understanding JPG](https://compress-or-die.com/Understanding-JPG )
- [Finally understanding PNG](https://compress-or-die.com/Understanding-PNG)

## Image and Video Optimization Course

Finally, I want to share that I am working on an online **Optimization course Images and Videos**.

[![Image and Video Optimization Course](./thumbs/optimizacion-img-video.jpg)](https://optimizacion-imagenes.github.io/Curso/)

- [Web and course syllabus](https://optimizacion-imagenes.github.io/Curso/)
- [Ask Me Anything, on Image and Video Optimization](https://github.com/optimizacion-imagenes/AMA)

### Notes

- **(1)** I add Sketch as an application to export images since in mobile application environments it is more common to use PNG files for the application interface. In general, in web environments, the interfaces defined in Sketch end up being represented with CSS in a simple way.
- **(2)** Each editing program, compression application or compressor by command line, has its own scale of values ​​to measure the quality of compression. This makes a fair comparison between different programs virtually impossible. Here is an article [How to compare images fairly](https://kornel.ski/en/faircomparison) of [Kornel Lesiński](https://twitter.com/kornelski) where he talks about it.
- **(3)** You can investigate more about the impact of Subsampling (Chroma Subsampling in English) here [Chroma (or Color) Subsampling](https://images.guide/#chroma-subsampling)
- **(4 )** In Photoshop, if instead of exporting we select "Save as ...", it offers a large number of image formats ["Graphic file formats"](https://helpx.adobe.com/photoshop/using/file-formats.html), most not compatible with browsers.
- **(5)** WebP is a lossy image format that sacrifices a lot of quality, so I recommend validating the image quality in low quality percentages
- **(6)** GIMP has very documentation well, in the [Save/export images] section (https://docs.gimp.org/2.10/es/gimp-images-out.html) we will have all the details of the parameters that we can configure in this window.
- **(7)** If you look for ImageOptim in the App Store, you will find an application called **Image optimizer Compression**, which [is not the application](https://twitter.com/nucliweb/status/1175353637117353984) **ImageOptim** we are talking about.
- **(8)** In the list of compressors that ImageOptim uses is [Guetzli](https://github.com/google/guetzli) from Google. It is a very effective compressor quality/weight of the images, but it is extremely slow in the process. If we select that compressor in the configuration, ImageOptim will notify us with a very deterrent message "It can take up to 30 minutes per image. Your system may not respond while Guetzli is running." 
- **(9)** I am [working](https://twitter.com/nucliweb/status/1174964957990928384) in a comparison of those applications, stay tuned to [twitter](https://twitter.com/nucliweb).
- **(10)** I leave you a link to the repository [images-optimization-env](https://github.com/nucliweb/images-optimization-env) where you can do compression tests with native compressors on Mac _(I compiled the source codes on my machine)_. I used **npm** only to manage the [scripts](https://github.com/nucliweb/images-optimization-env/blob/master/package.json#L6-L25), so it doesn't require installation.
- **(11)** My partner and friend [José M. Pérez](https://twitter.com/jmperezperez) tells us about this technique in the article [How Medium does progressive image loading](https://jmperezperez.com/medium-image-progressive-loading-placeholder/) _(October 2015)_
- **(12)** FLIF is the acronym for Free Lossless Image Format, a new lossless image format with a few ratios Very interesting compression, you can find more information on the official website [flif.info](https://flif.info/).
- **(13)** [Cloudinary Delivery Types](https://cloudinary.com/documentation/image_transformations#delivery_types)
- **(14)** [Cloudinary Supported image formats](https://cloudinary.com/documentation/image_transformations # supported_image_formats).
- **(15)** [Pixel density](https://en.wikipedia.org/wiki/Pixel_density)_(Wikipedia)_.
- **(16)** In the column **Best tool** we can see the codec or combination of codecs used for compression. By default this column is not visible, you can add it with the right button _(context menu)_ in the column header.