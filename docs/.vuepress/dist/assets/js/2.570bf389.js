(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{227:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"j",function(){return a}),n.d(e,"i",function(){return o}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"h",function(){return l}),n.d(e,"b",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"l",function(){return f}),n.d(e,"m",function(){return d}),n.d(e,"c",function(){return g}),n.d(e,"k",function(){return v});const i=/#.*$/,s=/\.(md|html)$/,r=/\/$/,a=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(s,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function h(t){if(u(t))return t;const e=t.match(i),n=e?e[0]:"",s=o(t);return r.test(s)?t:s+".html"+n}function p(t,e){const n=t.hash,s=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!s||n===s)&&o(t.path)===o(e)}function f(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){const{pages:s,themeConfig:r}=n,a=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||r.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(i))return{base:i,config:e[i]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,i,s=1){if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});{s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const r=e.children||[];return 0===r.length?Object.assign(f(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:r.map(e=>t(e,n,i,s+1)),collapsable:!1!==e.collapsable}}})(e,s,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},228:function(t,e,n){"use strict";var i=n(13),s=n(63)(3);i(i.P+i.F*!n(43)([].some,!0),"Array",{some:function(t){return s(this,t,arguments[1])}})},229:function(t,e){e.f={}.propertyIsEnumerable},230:function(t,e,n){"use strict";var i=n(12),s=n(39),r=n(22),a=n(6)("species");t.exports=function(t){var e=i[t];r&&e&&!e[a]&&s.f(e,a,{configurable:!0,get:function(){return this}})}},232:function(t,e,n){},233:function(t,e,n){},234:function(t,e,n){},235:function(t,e,n){var i=n(12),s=n(236),r=n(39).f,a=n(239).f,o=n(133),u=n(135),c=i.RegExp,l=c,h=c.prototype,p=/a/g,f=/a/g,d=new c(p)!==p;if(n(22)&&(!d||n(38)(function(){return f[n(6)("match")]=!1,c(p)!=p||c(f)==f||"/a/i"!=c(p,"i")}))){c=function(t,e){var n=this instanceof c,i=o(t),r=void 0===e;return!n&&i&&t.constructor===c&&r?t:s(d?new l(i&&!r?t.source:t,e):l((i=t instanceof c)?t.source:t,i&&r?u.call(t):e),n?this:h,c)};for(var g=function(t){t in c||r(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},v=a(l),m=0;v.length>m;)g(v[m++]);h.constructor=c,c.prototype=h,n(40)(i,"RegExp",c)}n(230)("RegExp")},236:function(t,e,n){var i=n(21),s=n(237).set;t.exports=function(t,e,n){var r,a=e.constructor;return a!==n&&"function"==typeof a&&(r=a.prototype)!==n.prototype&&i(r)&&s&&s(t,r),t}},237:function(t,e,n){var i=n(21),s=n(20),r=function(t,e){if(s(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{(i=n(91)(Function.call,n(238).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:r}},238:function(t,e,n){var i=n(229),s=n(93),r=n(62),a=n(131),o=n(41),u=n(130),c=Object.getOwnPropertyDescriptor;e.f=n(22)?c:function(t,e){if(t=r(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(o(t,e))return s(!i.f.call(t,e),t[e])}},239:function(t,e,n){var i=n(132),s=n(94).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},240:function(t,e,n){},241:function(t,e,n){},242:function(t,e,n){},243:function(t,e,n){},244:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},248:function(t,e,n){},249:function(t,e,n){},254:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},255:function(t,e,n){"use strict";var i=n(20),s=n(24),r=n(140),a=n(141);n(142)("match",1,function(t,e,n,o){return[function(n){var i=t(this),s=null==n?void 0:n[e];return void 0!==s?s.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var u=i(t),c=String(this);if(!u.global)return a(u,c);var l=u.unicode;u.lastIndex=0;for(var h,p=[],f=0;null!==(h=a(u,c));){var d=String(h[0]);p[f]=d,""===d&&(u.lastIndex=r(c,s(u.lastIndex),l)),f++}return 0===f?null:p}]})},260:function(t,e,n){"use strict";n.r(e);n(228);var i=n(227),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(261).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(260).default},methods:{isActive:i.e}},r=(n(282),n(37)),a=Object(r.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;n(60);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function u(t,e,n,s,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var c=Object(i.e)(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c),u(t,e.children,n,s,r,a+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,s=n.$page,r=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,h=l.item,p=l.sidebarDepth,f=Object(i.e)(r,h.path),d="auto"===h.type?f||h.children.some(function(t){return Object(i.e)(r,h.basePath+"#"+t.slug)}):f,g=o(t,h.path,h.title||h.path,d),v=s.frontmatter.sidebarDepth||p||c.sidebarDepth||a.sidebarDepth,m=null==v?1:v,b=c.displayAllHeaders||a.displayAllHeaders;return"auto"===h.type?[g,u(t,h.children,h.basePath,r,m)]:(d||b)&&h.headers&&!i.d.test(h.path)?[g,u(t,Object(i.c)(h.headers),h.path,r,m)]:g}};n(283);var l={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(r.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var s=e[n];if("group"===s.type&&s.children.some(function(e){return"page"===e.type&&Object(i.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=h.exports},261:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},s=(n(277),n(37)),r=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=r.exports},263:function(t,e,n){"use strict";n(264)("link",function(t){return function(e){return t(this,"a","href",e)}})},264:function(t,e,n){var i=n(13),s=n(38),r=n(23),a=/"/g,o=function(t,e,n,i){var s=String(r(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},265:function(t,e,n){"use strict";var i=n(232);n.n(i).a},266:function(t,e,n){t.exports=n(267)},267:function(t,e,n){n(268),t.exports=n(0).parseInt},268:function(t,e,n){var i=n(1),s=n(269);i(i.G+i.F*(parseInt!=s),{parseInt:s})},269:function(t,e,n){var i=n(2).parseInt,s=n(270).trim,r=n(254),a=/^[-+]?0[xX]/;t.exports=8!==i(r+"08")||22!==i(r+"0x16")?function(t,e){var n=s(String(t),3);return i(n,e>>>0||(a.test(n)?16:10))}:i},270:function(t,e,n){var i=n(1),s=n(65),r=n(14),a=n(254),o="["+a+"]",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(t,e,n){var s={},o=r(function(){return!!a[t]()||"​"!="​"[t]()}),u=s[t]=o?e(h):a[t];n&&(s[n]=u),i(i.P+i.F*o,"String",s)},h=l.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},271:function(t,e,n){"use strict";var i=n(233);n.n(i).a},272:function(t,e,n){"use strict";var i=n(13),s=n(137)(!1),r=[].indexOf,a=!!r&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(a||!n(43)(r)),"Array",{indexOf:function(t){return a?r.apply(this,arguments)||0:s(this,t,arguments[1])}})},273:function(t,e,n){"use strict";n(274)("trim",function(t){return function(){return t(this,3)}})},274:function(t,e,n){var i=n(13),s=n(23),r=n(38),a=n(275),o="["+a+"]",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(t,e,n){var s={},o=r(function(){return!!a[t]()||"​"!="​"[t]()}),u=s[t]=o?e(h):a[t];n&&(s[n]=u),i(i.P+i.F*o,"String",s)},h=l.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},275:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},276:function(t,e,n){"use strict";var i=n(234);n.n(i).a},277:function(t,e,n){"use strict";var i=n(240);n.n(i).a},278:function(t,e,n){"use strict";var i=n(241);n.n(i).a},279:function(t,e,n){"use strict";var i=n(242);n.n(i).a},280:function(t,e,n){"use strict";var i=n(243);n.n(i).a},281:function(t,e,n){"use strict";var i=n(244);n.n(i).a},282:function(t,e,n){"use strict";var i=n(245);n.n(i).a},283:function(t,e,n){"use strict";var i=n(246);n.n(i).a},284:function(t,e,n){"use strict";var i=n(247);n.n(i).a},285:function(t,e,n){"use strict";var i=n(248);n.n(i).a},286:function(t,e,n){"use strict";var i=n(249);n.n(i).a},317:function(t,e,n){"use strict";n.r(e);var i=n(34),s=n.n(i),r=(n(228),n(263),n(227)),a={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?s()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h}},o=n(37),u=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,c={components:{NavLink:u},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(265),Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),h=n(266),p=n.n(h),f=(n(271),Object(o.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),d=(n(255),n(66),n(107)),g=n.n(d),v=n(33),m=n.n(v),b=(n(272),n(273),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],r=0;r<e.length&&!(s.length>=5);r++){var a=e[r];if(this.getPageLocalePath(a)===n&&this.isSearchable(a))if(i(a))s.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(s.length>=5);o++){var u=a.headers[o];i(u)&&s.push(m()({},a,{path:a.path+"#"+u.slug,header:u}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=g()(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),_=(n(276),Object(o.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return"keyCode"in e&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return"keyCode"in e&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return"keyCode"in e&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),k=(n(235),n(56)),x=(n(129),n(60),{components:{NavLink:u,DropdownTransition:n(261).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),$=(n(278),{components:{NavLink:u,DropdownLink:Object(o.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&s()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:s()(e).map(function(s){var a,o=e[s],u=r[s]&&r[s].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,s),i.some(function(t){return t.path===a})||(a=s)),{text:u,link:a}})};return[].concat(Object(k.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return m()(Object(r.k)(t),{items:(t.items||[]).map(r.k)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),C=(n(279),Object(o.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function w(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var y={components:{SidebarButton:f,NavLinks:C,SearchBox:_,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=p()(w(this.$el,"paddingLeft"))+p()(w(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},L=(n(280),Object(o.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function S(t,e,n){var i=[];!function t(e,n){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var r=i[s];if("page"===r.type&&r.path===decodeURIComponent(t.path))return i[s+n]}}var O={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(r.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,S(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(r.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,S(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,a=t.docsBranch,o=void 0===a?"master":a,u=t.docsRepo,c=void 0===u?e:u,l=Object(r.i)(this.$page.path);return r.a.test(l)?l+="README.md":l+=".md",c&&n?this.createEditLink(e,c,s,o,l):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(r.j.test(e)?e:t).replace(r.a,"")+"/src"+"/".concat(i)+(n?"/"+n.replace(r.a,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.j.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit/".concat(i)+(n?"/"+n.replace(r.a,""):"")+s}}},j=(n(281),Object(o.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),I={name:"Sidebar",components:{SidebarLinks:n(260).default,NavLinks:C},props:["items"]},E=(n(284),{components:{Home:l,Page:j,Sidebar:Object(o.a)(I,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:L},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.m)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),T=(n(285),n(286),Object(o.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=T.exports}}]);