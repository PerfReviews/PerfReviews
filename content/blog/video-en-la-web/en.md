---
title: The video format on the web
date: "2019-08-28"
description: After founding the heaviest image on the web (according to HTTP Archive), we have not resisted the temptation to dig further and figure out what went wrong and alternatives to serve a lighter alternative.
featuredImage: ./featured-image.png
slug: video-on-the-web
---

We came across this tweet by [Yoav Weiss](https://twitter.com/yoavweiss) in which [Addy Osmani](https://twitter.com/addyosmani) asks about the "best" image on the web:

![Tweet Yoav & Addy](./thumbs/Yoav.png)

[Rick Viscomi](https://twitter.com/rick_viscomi) is an Engineer at Google who is currently working on an interesting project called "The State of the Web". For this initiative, Rick is running hundreds of queries [BigQuery](https://cloud.google.com/bigquery/) against the dataset [HTTP Archive](https://httparchive.org), and replies to Addy with the following tweet:

![Tweet Rick](./thumbs/Rick.png)

Rick shows the SQL query he has run against the HTTP Archive dataset for the month of July.

The "best" image of the web is currently a file in GIF format, video.gif. As the name implies, it is a video of 11 seconds and with a size of more than **65Mb**.

Yes, we were curious 😊

So we started doing what we like to do: research to find the problem and its possible solution.


## Problem

Based on the URL of the image, the first thing we can see is that it is a [Moodle](https://moodle.org), an online learning platform used by many schools around the world.

When entering the address [moodle.e-formalia.es](https://moodle.e-formalia.es) we get a login page to the platform, and that is where we find the heavy GIF.

![Home e-Formalia](./thumbs/home.png)

The server is serving us two images: logos.png and video.gif. The loading time of that background video on the access screen, from a fiber optic connection of **600Mb** is only **2.67 seconds**.

![Developer Tools: Network Panel](./thumbs/network-1.png)

Let's see what happens if we use the functionality of the Developer Tools network panel to simulate a slower connection. We select the fast 3G preset, which is closer to a mobile experience.

![Developer Tools: Network Panel](./thumbs/network-2.png)

We had to wait **6.1 minutes** to fully download the video.

## Solution

It is not a novelty that the best format for loading a video on the web is a video format like **MP4**, instead of an image with support for animations like the **GIF** format. 

There are other image formats that support animation, such as **WebM**. There is also the format **APNG**. This format, which is not new but is very unknown, is a PNG version with support for animations. Recently Joan mentioned it in  [this tweet](https://twitter.com/nucliweb/status/1163537269007032320).

To learn about using Video instead of GIF, we can use one of the best resources for good practices in web performance, **Web Fundamentals**. On this website we find a specific article on this topic [Replace Animated GIFs with Video](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/).

The article recommends using a video compression tool, [FFmpeg](https://ffmpeg.org). It is a very powerful and versatile tool, with many features, plugins and endless possibilities to customize. To make it easy we will focus on the suggestions Google makes in that article.

### MPEG-4

We install ffmpeg (in our case as easy as running `brew install ffmpeg` on Mac), and we run `ffmpeg -i video.gif video.mp4`. After a few seconds we can see that the file **video.gif** of **65Mb** has become video.mp4 of only **6.6Mb**. In the article they show some parameters of FFmpeg that give us the option to optimize the conversion from the point of view of weight and quality.

We can adjust the parameter [CRF](https://trac.ffmpeg.org/wiki/Encode/H.264) that allows us to define the level of quality loss. After some tests, we decide to set the CRT at 22, one point below the default value, with the intention of being as faithful as possible to the quality of the original file.

```sh
ffmpeg -i video.gif -b:v 0 -crf 22 video.mp4
```

This leaves us a file of **8.5Mb**, reducing its weight 13% in comparison to the original GIF.

### WebM

Another video format is **WebM**, the video version of **WebP**, a lossy image format recommended by Google. The WebM format has great browser support as we can see on [Can I Use](https://caniuse.com/#search=webm).

After doing some tests by adjusting the value of CRF, we set it to the value suggested by Google, 41:

```sh
ffmpeg -i video.gif -c vp9 -b:v 0 -crf 41 video.webm
```

Surprisingly, we get a video of a very acceptable quality with a size of only **2.4Mb**.

### &lt;video&gt;

When implementing these formats, and to support all browsers, we will add multiple sources to a video tag:

```html
<video autoplay loop muted playsinline>
  <source src="video.webm" type="video/webm">
  <source src="video.mp4" type="video/mp4">
</video>
```

This will render **video.webm** on those browsers supporting WebM, and **video.mp4** on the rest.

## Result

![](./thumbs/terminal-files.png)

We leave you a link to the files so you can evaluate the quality results, as well as their sizes.

- [video.gif (65Mb)](./assets/video.gif)
- [video.mp4 (8,5Mb)](./assets/video.mp4)
- [video.webm (2,4Mb)](./assets/video.webm)

## Conclusion

We have seen how we can improve the performance of a page with a few simple steps. More importantly, this represents an improvement in user experience, since this video is shown on the login page, a critical functionality.

As a further improvement, when a user accesses the site from mobile or on a slow connection, we could render an image instead of a video.

We are aware that most users will navigate to another page before they have downloaded the whole GIF. Still, we should strive for not serving more data than needed, reducing costs of CDN and resources for both users and servers.
