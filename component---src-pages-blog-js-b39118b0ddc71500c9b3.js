(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),u=a(152),M=a(159),c=a(156),l=a(157),s=a(153),L=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(l.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement(M.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(s.a)(.25)}},o.a.createElement(u.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(o.a.Component);t.default=L;var g="2785444898"},152:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(32),M=a.n(u);a.d(t,"a",function(){return M.a});a(154);var c=r.a.createContext({}),l=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(e,t,a){"use strict";a.d(t,"a",function(){return M}),a.d(t,"b",function(){return c});var n=a(162),r=a.n(n),i=a(163),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var u=new r.a(o.a);var M=u.rhythm,c=u.scale},154:function(e,t,a){var n;e.exports=(n=a(155))&&n.default||n},155:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),u=a(54),M=a(2),c=function(e){var t=e.location,a=M.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},156:function(e,t,a){"use strict";a(33);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),u=a(152),M=a(153),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(M.b)(1),{marginBottom:Object(M.a)(1.5),marginTop:0})},o.a.createElement(u.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(u.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(M.a)(24),padding:Object(M.a)(1.5)+" "+Object(M.a)(.75)}},o.a.createElement("header",null,e),o.a.createElement("main",null,r),o.a.createElement("footer",{style:{marginTop:Object(M.a)(2.5),paddingTop:Object(M.a)(1)}},o.a.createElement("a",{href:"https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww",target:"_blank",rel:"noopener noreferrer"},"youtube")," ","•"," ",o.a.createElement("a",{href:"https://mobile.twitter.com/PerfReviews_",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",o.a.createElement("a",{href:"https://mailchi.mp/b309deb154c1/perfreviews",target:"_blank",rel:"noopener noreferrer"},"newsletter")," ","•"," ",o.a.createElement("a",{href:"https://www.facebook.com/PerfReviews-221286588787407/",target:"_blank",rel:"noopener noreferrer"},"facebook")," ","•"," ",o.a.createElement("a",{href:"https://github.com/PerfReviews/PerfReviews",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",o.a.createElement("a",{href:"mailto:perfreviews.mail@gmail.com",target:"_blank",rel:"noopener noreferrer"},"mail")," "))},t}(o.a.Component);t.a=c},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),u=a.n(o),M=a(164),c=a.n(M);function l(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,u=e.title,M=n.data.site,l=t||M.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:u,titleTemplate:"%s | "+M.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:u},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:M.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=l},158:function(e){e.exports={data:{site:{siteMetadata:{title:"PerfReviews",description:"Enseñamos web performance analizando sitios webs reales. Compartimos trucos, herramientas y workflows para mejorar el rendimiento de sitios web.",author:"Joan León y José M. Pérez"}}}}},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(152),u=a(161),M=a.n(u),c=a(153);console.log(M.a);var l="2760998521";t.a=function(){return i.a.createElement(o.b,{query:l,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement("img",{src:M.a,alt:"PerfReviews",style:{height:56,marginRight:Object(c.a)(.5),marginBottom:0,width:56,borderRadius:"50%"}}),i.a.createElement("p",null,"Con ",i.a.createElement("strong",null,a),".",i.a.createElement("br",null),"Hablamos sobre web performance en ",i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"Twitter")," y"," ",i.a.createElement("a",{href:"https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww"},"Youtube"),"."))},data:n})}},160:function(e){e.exports={data:{site:{siteMetadata:{author:"Joan León y José M. Pérez",social:{twitter:"PerfReviews_"}}}}}},161:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA3IiBoZWlnaHQ9IjEwNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNzAuMyA0Ny40SDU0LjdjLTEuMiAwLTIuMS0xLTItMi4yTDU0LjYgMjRjMC0xLjMtLjgtMi4zLTIuMS0yLjYtMS4yLS4zLTIuNC4zLTMgMS41TDMzLjIgNThjLS40LjgtLjMgMS44LjIgMi41LjUuOCAxLjMgMS4yIDIuMiAxLjJoMTUuNmMxLjIgMCAyLjEgMSAyIDIuMkw1MS4zIDg1YzAgMS4zLjggMi4zIDIuMSAyLjYuMiAwIC40LjEuNi4xIDEgMCAxLjktLjYgMi40LTEuNWwxNi40LTM1LjFjLjQtLjguMy0xLjgtLjItMi41LS41LS44LTEuNC0xLjItMi4zLTEuMnoiIGZpbGw9IiMyNDI0MjQiLz48cGF0aCBkPSJNMjguOSAxNC45YzIuMyAwIDQuMi0xLjkgNC4yLTQuMiAwLTIuMy0xLjktNC4yLTQuMi00LjItMi4zIDAtNC4yIDEuOS00LjIgNC4yLS4xIDIuMyAxLjggNC4yIDQuMiA0LjJ6TTEwLjYgMjQuNmMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAyLjMgMCA0LjItMS45IDQuMi00LjIuMS0yLjMtMS44LTQuMi00LjItNC4yek00LjIgNTcuN2E0LjIgNC4yIDAgMSAwIDAtOC40IDQuMiA0LjIgMCAwIDAgMCA4LjR6TTEwLjYgNzMuOWMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAyLjMgMCA0LjItMS45IDQuMi00LjIuMS0yLjMtMS44LTQuMi00LjItNC4yek0yOC45IDkyLjFjLTIuMyAwLTQuMiAxLjktNC4yIDQuMiAwIDIuMyAxLjkgNC4yIDQuMiA0LjIgMi4zIDAgNC4yLTEuOSA0LjItNC4yIDAtMi4zLTEuOS00LjItNC4yLTQuMnpNNTMuNSA5OC42Yy0yLjMgMC00LjIgMS45LTQuMiA0LjIgMCAyLjMgMS45IDQuMiA0LjIgNC4yIDIuMyAwIDQuMi0xLjkgNC4yLTQuMiAwLTIuMy0xLjktNC4yLTQuMi00LjJ6TTc4LjEgOTIuMWMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAyLjMgMCA0LjItMS45IDQuMi00LjIuMS0yLjMtMS44LTQuMi00LjItNC4yek05Ni40IDczLjljLTIuMyAwLTQuMiAxLjktNC4yIDQuMiAwIDIuMyAxLjkgNC4yIDQuMiA0LjIgMi4zIDAgNC4yLTEuOSA0LjItNC4yIDAtMi4zLTEuOS00LjItNC4yLTQuMnpNMTAyLjggNTcuN2E0LjIgNC4yIDAgMSAwIDAtOC40IDQuMiA0LjIgMCAwIDAgMCA4LjR6TTk2IDMyLjhjLjcgMCAxLjUtLjIgMi4xLS42IDEtLjYgMS43LTEuNSAxLjktMi42LjMtMS4xLjEtMi4yLS40LTMuMkM5MC4xIDEwLjEgNzIuNCAwIDUzLjUgMGMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAxNS45IDAgMzAuOCA4LjUgMzguOSAyMi4zLjggMS4zIDIuMiAyLjEgMy42IDIuMXoiIGZpbGw9IiMwMEFBNTgiLz48L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-blog-js-b39118b0ddc71500c9b3.js.map