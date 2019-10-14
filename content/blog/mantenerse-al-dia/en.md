---
title: How to keep up to date on web performance
date: "2019-08-09"
description: Tips and resources to learn about web performance. Tools, websites and developers who write about new techniques and APIs to create sites that load fast and are data conscious.
featuredImage: ./thumbs/portada.jpg
---

How to keep up on web performance? The world of web development changes rapidly and **measuring and optimizing performance is no exception**. We are often presented with new tools, APIs and techniques for building websites that load fast.

We often see that development teams spend little time in an area that we think is very important. Lack of knowledge and low priority is a perfect combo to overlook a site's performance.

![](thumbs/portada.jpg)

Our goal at Perf.Reviews is to show the importance of web performance. Why?

1. **Little knowledge about the developer tools included in the browser**. These tools are very powerful and are usually enough to find and correct most problems, yet most of their features are not known by most developers.

2. **Catching up on best practices in web performance is costly, in time and money**. It requires a lot of reading news on updates and putting them into practice.
What is a good practice today may not be tomorrow. Some examples are [the combination of static assets, domain sharding, and inlining](https://www.youtube.com/watch?v=yURLTwZ3ehk), or [using CDNs to host your own static resources](https://csswizardry.com/2019/05/self-host-your-static-assets/). Last, but not least, take into consideration the balance between feature support, browser market share and the cost of polyfills.

3. **Finding performance problems is difficult** without knowing the details of how the network protocols work, how the browser prioritizes requests and parses its result or what the cost of executing JS or processing an image is.

[Our videos](https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww) and [articles](/) try to answer these problems with practical examples. We show the potential of both browser and third-party tools, and use them to find problems in real sites.

## Blogs and Twitter

One of the best ways to stay up to date is to follow the blogs and Twitter accounts of browsers and developers who advocate for creating fast sites.

We have compiled [a list on Twitter with the main accounts](https://twitter.com/jmperezperez/lists/web-perf), and it is always a good idea to subscribe to the blogs authored by [Addy Osmani](https://addyosmani.com/blog/), [Doug Sillars](https://dougsillars.com/blog/), [Filament Group](https://www.filamentgroup.com/lab/), [Harry Roberts](https://csswizardry.com/) and [Tim Kadlec](https://timkadlec.com/remembers/) amongst others.

![Filament Group's blog is a good resource about CSS loading techniques and sources](thumbs/filament-group.png)

One of the best resources to learn about web performance is [Web.dev](https://web.dev/learn).

![Collections of tutorials and guides on web performance, accessibility, security or PWAs among others on web.dev](thumbs/google-web-dev-learn.png)

This site from Google collects information that was previously dispersed in different sites and is now consolidated through practical guides.

## Tools

To detect performance problems the best approach is to run a web audit. From within the browser [it is possible to perform a quick check](https://perf.reviews/tools/1.2-Interpretando-Lighthouse-Performance/), and there are also websites like [web.dev/measure](https://web.dev/measure) that generate a detailed report of the performance of a particular URL.

![Performance report of perf.reviews using the online version of Lighthouse at https://web.dev/measure. Overview and report view.](thumbs/google-web-lighthouse-perf-reviews.png)

A tool we recommend is [WebPageTest](https://webpagetest.org), which is also useful to find performance problems. It is great for comparing multiple sites, and also to test variations customizing which browser, network speed, device and location to use when running the test.

![Comparing two websites with WebPagetest, filmstrip view](thumbs/webpagetest-filmstrip.png)

Through its advanced options you can also [check the impact of 3rd party scripts](https://andydavies.me/blog/2018/02/19/using-webpagetest-to-measure-the-impact-of-3rd-party-tags/), simulate [single point of failures (SPOF)](http://blog.patrickmeenan.com/2011/10/testing-for-frontend-spof.html) and [much more](https://deanhume.com/ten-things-you-didnt-know-about-webpagetest-org/). It even [has an API](https://css-tricks.com/use-webpagetest-api/) that lets to run all this from a script or integrate it in a build and deployment pipeline.

Other tools analyze periodically a site and can alert us when any of the metrics worsens substantially, below a certain threshold. We recommend [Calibre](https://calibreapp.com), [DebugBear](https://www.debugbear.com), [SiteSpeed](https://www.sitespeed.io/) and [SpeedCurve](https://speedcurve.com/).

![SpeedCurve showing performance budgets for the Guardian's desktop and mobile sites](thumbs/speedcurve-guardian.jpg)

## Books

It may come as a surprise that we include a section for books in a post about "keeping up".
Books, even in digital format, are difficult to update. This makes them outdated pretty soon in comparison with other resources.

![These are some of the most popular web performance books, published between 2008 and 2019](thumbs/books.jpg)

Even so, we want to recommend books that can help you get a good foundation in web performance optimization:

1. **[Web Performance in Action](https://www.manning.com/books/web-performance-in-action)**, written by [Jeremy L. Wagner](https://twitter.com/malchata). It is focused on web performance in general, covering the use of tools, CSS, JS and images optimization, loading of resources in an effective way, improving performance using Service Workers and an overview of the HTTP/2 protocol. A lot of information gathered through many sources that make this a great book..

2. **[High Performance Mobile Web: Best Practices for Optimizing Mobile Web Apps](https://www.amazon.com/High-Performance-Mobile-Web-Optimizing/dp/1491912553)**, written by [Maximiliano Firtman](https://twitter.com/firt). It is focused on web performance on mobile devices. It start by introducing the mobile web, how to measure performance, and how to optimize first and subsequent visits using tools like Service Workers. He also talks about Responsive Web Design and writes a chapter called Extreme Mobile Web Performance dedicated to specific tips to improve the performance of our websites for those devices.

It is a book to keep in mind, since we are at a time where most sites are **Mobile First** and even also some others that are **Mobile Only**.

3. **[High Performance Browser Networking: What every web developer should know about networking and web performance](https://www.amazon.com/High-Performance-Browser-Networking-performance/dp/1449344763/ref=sr_1_1)**, the subtitle that adds [Ilya Grigorik](https://twitter.com/igrigorik) to this book is "What every web developer should know about networks and web performance". Very interesting content that teaches us about bandwidth, latency, TCP and UDP blocks, TSL, and WiFi and mobile data network. It touches on the HTTP/1.X and HTTP/2 protocols and explains how to optimize the delivery of assets on those. The last part of the book covers XMLHttpRequest, CORS, Server-Send Events, WebSockets, and WebRTC.

A must-read book for those who want to learn more about networks and their relation to performance. This book is also available online for free on [hpbn.co](https://hpbn.co).

4. **[Using WebPageTest: Web Performance Testing for Novices and Power Users](https://www.amazon.com/Using-WebPageTest-Performance-Testing-Novices/dp/1491902590)**, this time we recommend a book on a tool, **the tool** for many people. [Rick Viscomi](https://twitter.com/rick_viscomi), [Andy Davies](https://twitter.com/andydavies) and [Marcel Duran](https://twitter.com/marcelduran) presents this 3-part book: Basic, Intermediate and Advanced. It explains how to use WebPageTest to detect what slows down a web, settings for mobile devices, scripting and how to integrate WebPageTest with a continuous integration tool through their API. In the last chapter they show us how to implement WebPageTest in our own private instance.

5. **[High Performance Images: Shrink, Load, and Deliver Images for Speed](https://www.amazon.com/High-Performance-Images-Shrink-Deliver-ebook/dp/B01MG9CFXG)**, this is Joan's favorite. Written by several authors, [Colin Bendell](https://twitter.com/colinbendell), [Tim Kadlec](https://twitter.com/tkadlec), [Yoav Weiss](https://twitter.com/yoavweiss), [Guy Podjarny](https://twitter.com/guypod), [Nick Doyle](https://twitter.com/njdoyle) and Mike McCall offer us in-depth knowledge about images on the web. Starting with the theory of digital images, the different compression formats (lossy and lossless), SVG optimization, lazy loading, image processing at the GPU level, an efficient way to deliver our images to the browser and how to implement our own flow to optimize the images automatically.

There is also [a free version available in PDF](https://content.akamai.com/pg6293-high-performance-images-ebook.html).

## Personalized audits and training

We are aware that it is difficult for development teams to gain expertise on web performance and adopt a performance culture. Through our [customized workshop and audit services](https://perf.reviews/en/services/) we help companies understand the issues on their websites and take the right steps to fix and avoid them in the future.