(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});var r=a(7),n=a.n(r),i=a(0),o=a.n(i),u=a(160),s=a(167),M=a(163),c=a(164),l=a(159),L=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(M.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"Todos nuestros posts",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement(s.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},o.a.createElement(u.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(o.a.Component);t.default=L;var g="2785444898"},159:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return M});var r=a(169),n=a.n(r),i=a(170),o=a.n(i);a(148);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},a:{color:"var(--textColorLink)"},".date":{color:"var(--textColorDate)"}}},delete o.a.googleFonts;var u=new n.a(o.a);var s=u.rhythm,M=u.scale},160:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),u=a(32),s=a.n(u);a.d(t,"a",function(){return s.a});a(161);var M=n.a.createContext({}),c=function(e){return n.a.createElement(M.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,a){var r;e.exports=(r=a(162))&&r.default||r},162:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),u=a(54),s=a(2),M=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(u.a,Object.assign({location:t,pageResources:a},a.json))};M.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=M},163:function(e,t,a){"use strict";a(33);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),u=a(160),s=a(159),M=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(s.b)(1),{marginBottom:Object(s.a)(1.5),marginTop:0})},o.a.createElement(u.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(u.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},o.a.createElement("header",null,e),o.a.createElement("main",null,n),o.a.createElement("footer",{style:{marginTop:Object(s.a)(2.5),paddingTop:Object(s.a)(1)}},o.a.createElement(u.a,{to:"/servicios/"},"Servicios")," ","•"," ",o.a.createElement("a",{href:"https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww",target:"_blank",rel:"noopener noreferrer"},"Youtube")," ","•"," ",o.a.createElement("a",{href:"https://mobile.twitter.com/PerfReviews_",target:"_blank",rel:"noopener noreferrer"},"Twitter")," ","•"," ",o.a.createElement("a",{href:"https://www.facebook.com/PerfReviews-221286588787407/",target:"_blank",rel:"noopener noreferrer"},"Facebook")," ","•"," ",o.a.createElement("a",{href:"https://github.com/PerfReviews/PerfReviews",target:"_blank",rel:"noopener noreferrer"},"Github")," ","•"," ",o.a.createElement("a",{href:"mailto:perfreviews.mail@gmail.com",target:"_blank",rel:"noopener noreferrer"},"Email")," "))},t}(o.a.Component);t.a=M},164:function(e,t,a){"use strict";var r=a(165),n=a(0),i=a.n(n),o=a(4),u=a.n(o),s=a(171),M=a.n(s);function c(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,u=e.title,s=e.image,c=r.data.site,l=t||c.siteMetadata.description;return i.a.createElement(M.a,{htmlAttributes:{lang:a},title:u,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:u},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:image",content:s?""+c.siteMetadata.siteUrl+s:c.siteMetadata.siteUrl+"/icons/icon-512x512.png"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}c.defaultProps={lang:"es",meta:[],keywords:[]},c.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=c},165:function(e){e.exports={data:{site:{siteMetadata:{title:"PerfReviews",description:"Enseñamos web performance analizando sitios webs reales. Compartimos trucos, herramientas y workflows para mejorar el rendimiento de sitios web.",author:"Joan León y José M. Pérez",siteUrl:"https://perf.reviews"}}}}},166:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA3IiBoZWlnaHQ9IjEwNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNzAuMyA0Ny40SDU0LjdjLTEuMiAwLTIuMS0xLTItMi4yTDU0LjYgMjRjMC0xLjMtLjgtMi4zLTIuMS0yLjYtMS4yLS4zLTIuNC4zLTMgMS41TDMzLjIgNThjLS40LjgtLjMgMS44LjIgMi41LjUuOCAxLjMgMS4yIDIuMiAxLjJoMTUuNmMxLjIgMCAyLjEgMSAyIDIuMkw1MS4zIDg1YzAgMS4zLjggMi4zIDIuMSAyLjYuMiAwIC40LjEuNi4xIDEgMCAxLjktLjYgMi40LTEuNWwxNi40LTM1LjFjLjQtLjguMy0xLjgtLjItMi41LS41LS44LTEuNC0xLjItMi4zLTEuMnoiIGZpbGw9IiMyNDI0MjQiLz48cGF0aCBkPSJNMjguOSAxNC45YzIuMyAwIDQuMi0xLjkgNC4yLTQuMiAwLTIuMy0xLjktNC4yLTQuMi00LjItMi4zIDAtNC4yIDEuOS00LjIgNC4yLS4xIDIuMyAxLjggNC4yIDQuMiA0LjJ6TTEwLjYgMjQuNmMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAyLjMgMCA0LjItMS45IDQuMi00LjIuMS0yLjMtMS44LTQuMi00LjItNC4yek00LjIgNTcuN2E0LjIgNC4yIDAgMSAwIDAtOC40IDQuMiA0LjIgMCAwIDAgMCA4LjR6TTEwLjYgNzMuOWMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAyLjMgMCA0LjItMS45IDQuMi00LjIuMS0yLjMtMS44LTQuMi00LjItNC4yek0yOC45IDkyLjFjLTIuMyAwLTQuMiAxLjktNC4yIDQuMiAwIDIuMyAxLjkgNC4yIDQuMiA0LjIgMi4zIDAgNC4yLTEuOSA0LjItNC4yIDAtMi4zLTEuOS00LjItNC4yLTQuMnpNNTMuNSA5OC42Yy0yLjMgMC00LjIgMS45LTQuMiA0LjIgMCAyLjMgMS45IDQuMiA0LjIgNC4yIDIuMyAwIDQuMi0xLjkgNC4yLTQuMiAwLTIuMy0xLjktNC4yLTQuMi00LjJ6TTc4LjEgOTIuMWMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAyLjMgMCA0LjItMS45IDQuMi00LjIuMS0yLjMtMS44LTQuMi00LjItNC4yek05Ni40IDczLjljLTIuMyAwLTQuMiAxLjktNC4yIDQuMiAwIDIuMyAxLjkgNC4yIDQuMiA0LjIgMi4zIDAgNC4yLTEuOSA0LjItNC4yIDAtMi4zLTEuOS00LjItNC4yLTQuMnpNMTAyLjggNTcuN2E0LjIgNC4yIDAgMSAwIDAtOC40IDQuMiA0LjIgMCAwIDAgMCA4LjR6TTk2IDMyLjhjLjcgMCAxLjUtLjIgMi4xLS42IDEtLjYgMS43LTEuNSAxLjktMi42LjMtMS4xLjEtMi4yLS40LTMuMkM5MC4xIDEwLjEgNzIuNCAwIDUzLjUgMGMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAxNS45IDAgMzAuOCA4LjUgMzguOSAyMi4zLjggMS4zIDIuMiAyLjEgMy42IDIuMXoiIGZpbGw9IiMwMEFBNTgiLz48L3N2Zz4="},167:function(e,t,a){"use strict";var r=a(168),n=a(0),i=a.n(n),o=a(160),u=a(166),s=a.n(u),M=a(159);var c="2053320353";t.a=function(){return i.a.createElement(o.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(M.a)(2.5)}},i.a.createElement("img",{src:s.a,alt:"PerfReviews",style:{height:56,marginRight:Object(M.a)(.5),marginBottom:0,width:56,borderRadius:"50%"}}),i.a.createElement("p",null,"PerfReviews es un proyecto de ",i.a.createElement(o.a,{to:"/nosotros/"},i.a.createElement("strong",null,a)),".",i.a.createElement("br",null),"Hablamos sobre web performance en ",i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"Twitter")," y"," ",i.a.createElement("a",{href:"https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww"},"Youtube"),"."))},data:r})}},168:function(e){e.exports={data:{site:{siteMetadata:{author:"Joan León y José M. Pérez",social:{twitter:"PerfReviews_"}}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-979fe9cc9fd1bcad9948.js.map