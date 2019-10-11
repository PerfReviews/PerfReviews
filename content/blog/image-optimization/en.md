---
title: Where do I start to optimize my images?
date: "2019-10-11"
description: As web development professionals, we care about choosing the best framework, the most current library, applying good practices in Javascript and CSS, being careful of the semantics in HTML to improve SEO, we are improving the accessibility of our content, we package and we divide the files to optimize the load, but what about the images?
featuredImage: ./featured-image.png
---

> As web development professionals, we care about choosing the best framework, the most current library, applying good practices in Javascript and CSS, being careful of the semantics in HTML to improve SEO, we are improving the accessibility of our content, we package and we divide the files to optimize the load, but what about the images?

## Images on the web

Images are a very important part of the web. Surely with the constant advance of technology, where we see a continuous improvement in connectivity, possibly in the future the content will have more videos than images. But the base will remain the same, to improve the experience of users, which is what our work really is about.

According to the [HTTP Archive](http://httparchive.org/), 50% of the data transferred to search a web page are images (JPEG, PNG and GIF). In August 2019, on mobile the images represented 911KB of the content loaded for the average 1.8MB site, and on desktop there are 1MB images at an average of 2MB.

[![HTTP Archive: Table](./thumbs/table.png)](https://twitter.com/dougsillars/status/1178955502212063232)

## ~~Image Optimization~~ Image eXperience is everyone's business

ago a few days, in the article [Performance Web in modern times](https://octuweb.com/performance-web-en-tiempos-modernos/), Michelangelo told us about a situation where he had problems planning an activity for the Weekend: _"Where I would have to see the schedules, it appears white on white. I think it is loading, I am not sure ... the train has arrived and my mobile goes to the pocket. "Then I try the website of the other cinema"..."_.

It is very likely that the white text of the schedules is about a fantastic and incredible image of a key scene of the last film premiere, perfectly contrasted, perfectly framed to draw the attention of the viewer and inform the schedules to watch that great movie ... **but**, the image has not been loaded.

That's where I allow myself to use the term IX (Image eXperience), there are several points to consider for a good IX, and not only to pass the images through the compressor that promises to optimize our images in the most effective way.

In the development of a website there are several profiles, whether in teams, people or someone who exercises more than one of those roles: product, UX, design, development, QA, up to [DevOps](https://en.wikipedia.org/wiki/DevOps) (or what is now known as [SRE](https://landing.google.com/sre/)) in the process of production. Each of these roles has the responsibility of offering the best for the **user** or **user**, providing maximum value to the product, looking at the details.

Let's continue with the example of the cinema schedule page that Michelangelo could not see. Given this situation, these are the questions that I ask myself and that could have been used with a checklist in the process of ideation, design, development and deployment of that page:

- Is an image really necessary to offer that information?
- If a white text has been taken into account, in order to maintain a high contrast with the background image, why has a background color not been defined in case the image is not displayed?
- Is that image optimized for mobile devices?
- If it is an image in JPEG format, why is it not a progressive JPEG? That would have improved IX.
- If it is a critical image to highlight the product _(in this case it makes perfect sense)_, why has the preload of that image not been taken into account?
- Has a [budget](https://addyosmani.com/blog/performance-budgets/) not been defined for the images?
- Have not tests been done at different connection speeds?

As you can see, the optimization of images for the web is not only to choose at what percentage of compression the image is saved. There are many things to consider and many profiles that can intervene and detect a possible failure in a part of the product as critical as the example.

> Treat all these points in depth for a book... eps!, that I am already in it as well 🤪

## ~~Optimize~~ Adventure Time

In the scenario we are in, we have already made the previous analysis of the need for The images, as the article title indicates, the most common question is **Where do I start to optimize my images?**.

## Optimization from graphic editors

In the first line of action in image optimization we have image editors, such as [Photoshop](httpsd://www.adobe.com/Photoshop), [Affinity Photo](https://affinity.serif.com/en-gb/photo/), [Pixelmator](https://www.pixelmator.com/pro/), [PaintShopPro](https://www.paintshoppro.com/), [Paint.net](https://www.getpaint.net/) or [GIMP](https://www.gimp.org/) among others. Let's not forget [Sketch](https://www.sketch.com/), which is not yet a program for image editing, it is widely used in the editing of interfaces<sup>(1)</sup>.

### Photoshop

It is the most used image editor by design teams. Interestingly **no** is the one that offers us more optimization options. In its latest version, CC 2019 offers an export dialog window with some improvements to generate images of various densities, as can be seen in the left column, but it does not leave us much choice regarding the image format and configuration parameters .

![Photoshop: Export](./thumbs/Photoshop-Export.png)

We can export to PNG, JPG, GIF and SVG _ formats (yes, SVG, generates an SVG file with the image embedded in base64)_, beyond of the percentage<sup>(2)</sup> of quality we don't have many configuration parameters to export the images. What attracts a lot of attention is that we cannot count on the WebP format for export

In previous versions of Photoshop, and in this as under the name "Save the Web ... (legacy)", it offers us some predefined configurations, always according to the criteria of the Adobe team. One of the parameters that I miss in Photoshop is that of [Chrominance Subsampling](https://es.wikipedia.org/wiki/Crominance_Submuestreo)<sup>(3)</sup> where we could better optimize the optimization according our criteria Instead they maintain a subsampling of 4: 4: 4 (1x1) between the values ​​51% to 100% of the quality percentage and below 51% apply a subsampling of 4: 2: 0 (2x2). That is why you can see a remarkable change between an image exported at 51% and the same image at 50%.

### Affinity Photo

It is another image editor that is gaining traction among the design community. So let's see what it offers us for exporting images.

![Affinity Photo: Export](./thumbs/Affinity-Export.png)

We can see that in the export they offer us more formats to select<sup>(4)</sup>, but let's not fool ourselves, compatible for the web We still have PNG, JPEG, GIF and SVG available. But like Photoshop, it maintains simplicity in compression parameters with a slide bar to select values ​​between 1% and 100%.

### Pixelmator

A very interesting and economical alternative for image editing. It does not improve the option of selecting the compression quality of the previous editors, but we can see that they have added the WebP format as an option to improve the optimization of our images. Even with WebP, we can select the quality percentage<sup>(5)</sup>.

![Pixelmator: Export](./thumbs/Pixelmator-Export.png)

### GIMP

It is possibly the least used tool in the world of design. It is an Open Source tool, with a large community behind it, and that can be seen in the many configuration parameters that we have available in the advanced options when exporting an image.

![GIMP: Export](./thumbs/GIMP-subsampling.png)

Where we see that we can configure more advanced parameters such as Smoothing, Reset markers, Subsampling or DCT Method<sup>(6)</sup>. They are configuration parameters that can scare, and even make us spend a lot of time testing.

### Other editors

There are many editors, we cannot analyze them all. Most coincide with the functionality of defining a value scale for the optimization of images with quality loss, such as JPG and some with the option to also do it with WebP.

## Optimization from applications

In the previous section we have analyzed the tools that are usually used from design teams for image editing. This team can extend the optimization frontier using tools in a desktop application format, specific for this.

Wait, we have said that **IX is everyone's business**. So here we have the opportunity to know tools that we can use all the roles involved in the development of a product ... let's know some of these applications.

If you are in a Mac environment, the best option (IMHO) is [ImageOptim](https://imageoptim.com/)<sup>(7)</sup> of [Kornel Lesiński](https://twitter.com/kornelski) and it's also free.

![ImageOptim](./thumbs/ImageOptim-app.png)

Like most desktop applications in Mac environments, one of the features that makes it stand out is a simple appearance, but don't be fooled, this is a verytool. Powerful and professional

By simply dragging an image, a group of them or a folder, the application starts working, optimizing all the images. Keep in mind that what you do is replace the original image with the optimized one. That is a topic that I would like to comment on, but we will see it in the next section.

The default setting offers a compression of the images **without loss**, that means we do not appreciate visual changes, but we will reduce the size. We have the option to check the checkbox of **Enable loss and minification** to select quality percentages for optimization with quality loss.

![ImageOptim: Quality](./thumbs/ImageOptim-Quality.png)

One of the things I like most about ImageOptim is that after that simplicity hides a list of compressors<sup>(8)</sup> to get the Better results in each case. Pass each of the compressors that we have marked in the list in each of the images and select the image with the best result. That process takes a while, but I can assure you it is worth it.

![ImageOptim: Compressors](./thumbs/ImageOptim-Compressors.png)

There are ImageOptim alternatives for Windows and Linux as we can see on their own [web](https://imageoptim.com/versions).

I leave you reference of other applications (for Mac) that you can try, many of them paid with trial versions for a few days.

![Image Optimization Apps](./thumbs/Image-Optimization-Apps.png)

Of these alternatives, the one I liked is [Optimage](https://optimage.app/), on the web they promise it is more effective<sup>(9)</sup> that **ImageOptim**. It is a more complete application, since it allows us to change the image format, change its dimensions, we can configure output folder or add prefix/suffix to not overwrite the original images. [JPEGmini Pro](https://www.jpegmini.com/) is very focused on the world of photography, and really achieves very impressive results.

## Optimization from CLI tools in local

For people with more technical concerns, wanting to control the configuration based on parameters and to automate the optimization of images, we also have interesting options. We can install and configure the<sup>(10)</sup> native compressors, the vast majority in C, as is the case of [MozJPEG](https://github.com/mozilla/mozjpeg/blob/master/BUILDING.md) or [WebP](https://developers.google.com/speed/webp/docs/precompiled)_(here we have it precompiled)_.

![MozJPEG CLI](./thumbs/cjpeg.png)
> Example of CLI command to compress an image with **MozJPEG**

![WebP CLI](./thumbs/cwebp.png)
> Example of CLI command to convert a JPEG image to **WebP**


We also have **npm** packages that offer us a wrapper with a much simpler API and that we can integrate into our Javascript application workflow.

There are several, one very interesting is [next-optimized-images](https://github.com/cyrilwanner/next-optimized-images) with options that go far beyond compressing the images, as it contains other packages as a dependency which offer us the possibility of generating LQIP<sup>(11)</sup> images with [lqip-loader](https://github.com/zouhir/lqip-loader) or [responsive-loader](https://github.com/herrstucki/responsive-loader) that generates the different sizes of the responsive images that we need on our site. For image optimization use several packages of [imagemin](https://github.com/imagemin/), so let's take a look.

### imagemin

When entering [imagemin](https://github.com/imagemin/) what we can see is that it is not a GitHub repository, but an organization with all the repositories (37) related to This ecosystem

It is a very modular system, the base package **imagemin** has defined as dependencies [3 encoders](https://github.com/imagemin/imagemin/blob/master/package.json#L38-L40) (JPEG, SVG and WebP), but we can add all we need.

We will see that there are a couple of patterns in the names of the repositories of this organization:

- **image-[compressor]**, such as [image-webp](https://github.com/imagemin/imagemin-webp) that Do you have the module or plugin to work with WebP images
- **[compressor]-bin**, such as [cwebp-bin](https://github.com/imagemin/cwebp-bin) that [contains](https://github.com/imagemin/cwebp-bin/tree/master/vendor) a compiled version for each of the supported operating systems.

This approach makes it a very versatile solution, since the modules can be maintained, updated and updated separately.

It can be used both as CLI _(Command Line Interface)_ with [imagemin-cli](https://github.com/imagemin/imagemin-cli) and from Javascript. [Here](https://github.com/EscuelaIt/Optimizacion-Imagenes) you will find examples of implementation in **mpm**, **Gulp** and **Webpack** of some exercises of a course I taught at School ITEM. In these examples you can see that I always keep the original image, to be able to compress sow from the original image and not **re-compress** an image that has already been compressed, and sometimes by another compressor.

It is not a good idea to do that, in this video you can see an example of what happens when you compress the same image:

<iframe width="560" height="315" src="https://www.youtube.com/embed/w7vXJbLhTyI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> The format with the best results is **FLIF**<sup>(12)</sup>, but it is a format that is not supported by current browsers, so **MozJPEG** could be a viable option. But as I said, I prefer to keep the original image, in PNG if possible, to preserve all the information and generate from it, the compressed image and/or change of format.

**Imagemin** is the most comfortable option if what we want is to automate the compression of the images in the process of production. Both for the amount of plugins, and for the ease of integrating them into our stack.

> One thing to keep in mind is the time it can take us to find the correct parameters to get the best result, since each imagemin plugin has its own scale of values ​​for optimization _(it sounds like something to you, the same thing happens in the image editors)_.

## Optimization of images with third-party online services

Another option we have available to optimize our images is to use an online service such as [Cloudinary](https://cloudinary.com/), [imgix](https://www.imgix.com/), [Fastly's Image Optimizer](https://www.fastly.com/io), [ImageOptim API](https://imageoptim.com/api) or [Kraken](https://kraken.io/). These services offer us much more than optimize, change the size of the images or their format, they also offer us a cache service and [CDN](https://es.wikipedia.org/wiki/Red_de_distribuci%C3%B3n_de_conteidos), thing That will benefit us if our product is visited from different parts of the world.

Each of them has its own functionalities, advantages, configurations and integrations, but I eat good [MDE](https://cloudinary.com/partners/media-developers) I will talk about **Cloudinary** 😊

To know the Cloudinary features you can check the web, I want to talk about the features that I like, which I think provide value, both for us as demanding developers as for the IX.

Let's start by saying that in the [plans](https://cloudinary.com/pricing) it offers you have a free one with which we can try the tool without many limitations.

### Image

optimization We can optimize both the images that we upload to **Media Library** of our account with the `/upload/` method, as with remote images, with the `/fetch/` method, documentation<sup>(13)</sup>

![Cloudinary: methots](./thumbs/Cloudinary-methods.png)

For the example we will use the API using the url

![Cloudinary: f_auto](./thumbs/Cloudinary_f_auto.png)

Between the type `/upload/` and the image version `/v1570203279/`, we have the transformation methods, in this case I have put `f_auto`, which refers to **automatic format**<sup>(14)</sup>. This parameter will deliver the image in the best possible format according to the client's request. If our client supports **WebP** will deliver WebP, if our client supports **JPEG 2000** as is the case of Safari, regardless of the original image format.

Let's look at an example of this.

![Cloudinary: Chrome vs Firefox vs Safari](./thumbs/Chrome-Firefox-Safari.png)

> In the image we see an example of one of the images on the Cloudinary website, in this case `homepage-XX.png `, there are requests for the different Media Query sizes because I have forced it. The original image is in **PNG** format and we can see that although the request made by HTML is `.png`, Cloudinary delivers a **WebP** image for Chrome and Firefox, and in the case of Safari it delivers a **JPEG 2000** format. The JPEG 2000 format is larger than WebP, but Safari currently does not support that image format, instead it receives a JPEG 2000 image that it can render on the one hand and that is more compressed than in JPEG and the original PNG.

### Responsive images

The optimization of the images not only has to do with the compression and quality of the image, we must also consider delivering them to the correct measurement, depending on the device, pixel density<sup>(15)</sup> and **half queries**. Here Cloudinary pleasantly surprises us again with [Responsive Breakpoints Results](https://responsivebreakpoints.com/), a tool to generate all the images and code we need to cover the media queries we need.

![Responsive Breakpoints Results](./thumbs/Responsive-Breakpoints-Results.jpg)

### Implementation, scalability and integration

Another thing I like about Cloudinary is the great support they offer for different [SDKs](https://cloudinary.com/documentation/framework_integration#sdks) for implementation: HTTPS/HTTP, Ruby, PHP, Python, Node.js, Java, JS, jQuery, React, Angular, .Net, Android and iOS. We also have them available [Open Source](https://github.com/cloudinary).

I refer to the scalability by the philosophy of [Add-ons](https://cloudinary.com/documentation/framework_integration#add_ons) that they have. We can activate _(these are paid)_ services for Auto-Tagging with Machine Learning, remove the background of the images with [Cloudinary AI Background Removal](https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon.html) or apply style transfer with [Neural Artwork Style Transfer](https://cloudinary.com/documentation/neural_artwork_style_transfer_addon).

As for integration, it is very interesting to see that we can integrate with [CMS-eCommerce integrations](https://cloudinary.com/documentation/framework_integration#cms_ecommerce_integrations) Salesforce Commerce Cloud, Magento, Wordpress or Zapier.


### This does not end here

There are many features, add-ons, plugins, tools, so that you can have a simple and visual guide of the highlights of Cloudinary, here is a website where you can play with the API and some of the photos that were taken at the **JS Camp 2019**, [CloudiCam.dev](https://cloudycam.dev/nucliweb)


## One more think

### Other online services

There are many online services to compress images , usually compresses the images one by one, and not by batch as desktop applications do. I just want to comment a couple of them that I find interesting:

- [Squoosh](https://squoosh.app/), what I like about this application is that it runs entirely in the browser. It has been developed by the people of Google, it is [Open Source](https://github.com/GoogleChromeLabs/squoosh/) and uses [WebAssembly](https://webassembly.org/) to run the [codecs] in the browser binaries](https://github.com/GoogleChromeLabs/squoosh/tree/4a01d0d548bf51e75ddb1d9e3d0259b5ab1c87b5/codecs) written in C or C ++.
- [Compress-Or-Die](https://compress-or-die.com/) uses the traditional format of running compression on the server side, what I like is that it offers many customization options, all of them documented and very good results. It also includes an [image analyzer](https://compress-or-die.com/analyze) with very detailed image information

### Eps! do not forget to optimize any image

It is very easy for everyday to make us fall _(unconsciously)_ in the error of not optimizing our images, but we have the option of integrating one of the following tools.

#### [ImgBot](https://imgbot.net/)
A service to optimize images based on [Magick.NET](https://github.com/dlemstra/Magick.NET) (a .NET library for [ImageMagick](https://imagemagick.org/)) that we can integrate with our GitHub repository, we can configure it to indicate how often it will parse our images, define folders, images or extensions to ignore, as well as the level of compression. The most interesting thing is that it generates a Pull Request with the suggestion of optimized images.

![ImgBot: Pull Request](./thumbs/imgbot-PR.png)

#### [image-actions](https://github.com/marketplace/actions/image-actions)

With newcomers [Actions from GitHub](https://github.com/features/actions), the people of [Caliber](https://calibreapp.com/blog/compress-images-in-prs/) have worked on a solution similar to that of **ImgBot**. The philosophy is the same, generate a Pull Request with optimized images.

![image-actions: Pull Request](./thumbs/image-actions.png)

### At the blacksmith's house...

All the images in this article have been optimized with **ImageOptim**, mostly in format **PNG** as they are screenshots with text. **PNG** is the ideal format to maintain quality and not generate noise around texts.

![ImageOptim: list images](./thumbs/ImageOptim.png)

> List of optimized images with ImageOptim<sup>(16)</sup>

## Resources

- [Essential Image Optimization](https://images.guide/), I think it is the best and most complete image optimization guide, maintained by [ Addy Osmani](https://twitter.com/addyosmani).
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

- [Web and course syllabus](https ://optimizacion-imagenes.github.io/Curso/)
- [Ask Me Anything, on Image and Video Optimization](https://github.com/optimizacion-imagenes/AMA)

### Notes

- **(1)** I add Sketch as an application to export images since in mobile application environments it is more common to use PNG files for the application interface. In general, in web environments, the interfaces defined in Sketch end up being represented with CSS in a simple way.
- **(2)** Each editing program, compression application or compressor by command line, has its own scale of values ​​to measure the quality of compression. This makes a fair comparison between different programs virtually impossible. Here is an article [How to compare images fairly](https://kornel.ski/en/faircomparison) of [Kornel Lesiński](https://twitter.com/kornelski) where he talks about it.
- **(3)** You can investigate more about the impact of Subsampling (Chroma Subsampling in English) here [Chroma (or Color) Subsampling](https://images.guide/#chroma-subsampling)
- **(4 )** In Photoshop, if instead of exporting, we select "Save as ...", it offers a large number of image formats ["Graphic file formats"](https://helpx.adobe.com/photoshop/using/file-formats.html), most not compatible with browsers.
- **(5)** WebP is a lossy image format that sacrifices a lot of quality, so I recommend validating the image quality in low quality percentages
- **(6)** GIMP has very documentation well, in the [Save/export images] section (https://docs.gimp.org/2.10/es/gimp-images-out.html) we will have all the details of the parameters that we can configure in this window.
- **(7)** If you look for ImageOptim in the App Store, you will find an application called **Image optimizer Compression**, which [is not the application (https://twitter.com/nucliweb/status/1175353637117353984) **ImageOptim** we are talking about.
- **(8)** In the list of compressors that ImageOptim uses is [Guetzli](https://github.com/google/guetzli) from Google. It is a very effective compressor quality/weight of the images, but it is extremely slow in the process. If we select that compressor in the configuration, ImageOptim will notify us with a very deterrent message "It can take up to 30 minutes per image. Your system may not respond while Guetzli is running." 
- **(9)** I am [working](https://twitter.com/nucliweb/status/1174964957990928384) in a comparison of those applications, stay tuned to [twitter](https://twitter.com/nucliweb).
- **(10)** I leave you a link to the repository [images-optimization-env](https://github.com/nucliweb/images-optimization-env) where you can do compression tests with native compressors on Mac _(I compiled the source codes on my machine)_. I used **npm** only to manage the [scripts](https://github.com/nucliweb/images-optimization-env/blob/master/package.json#L6-L25), so it doesn't require installation.
- **(11)** My partner and friend [José M. Pérez](https://twitter.com/jmperezperez) tells us about this technique in the article [How Medium does progressive image loading](https://jmperezperez.com/medium-image-progressive-loading-placeholder/) _(October 2015)_
- **(12)** FLIF is the acronym for Free Lossless Image Format, a new lossless image format with a few ratios Very interesting compression, you can find more information on the official website [flif.info](https://flif.info/).
- **(13)** 😉 [Wink, wink](https://giphy.com/gifs/reaction-wrBURfbZmqqXu/fullscreen).
- **(14)** [Cloudinary Delivery Types](https://cloudinary.com/documentation/image_transformations#delivery_types)
- **(15)** [Cloudinary Supported image formats](https://cloudinary.com/documentation/image_transformations # supported_image_formats).
- **(16)** [Pixel density](https://en.wikipedia.org/wiki/Pixel_density)_(Wikipedia)_.
- **(17)** In the column **Best tool** we can see the codec or combination of codecs used for compression. By default this column is not visible, you can add it with the right button _(context menu)_ in the column header.

