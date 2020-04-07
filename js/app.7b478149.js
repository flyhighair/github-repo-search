(function(t){function e(e){for(var r,a,o=e[0],u=e[1],c=e[2],d=0,p=[];d<o.length;d++)a=o[d],s[a]&&p.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2d9d":function(t,e,n){"use strict";var r=n("d67e"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=n("8a03"),i=n.n(s),a=(n("5abe"),n("d847")),o=n.n(a),u=n("795b"),c=n.n(u),l=n("bc3a"),d=n.n(l),p={},f=d.a.create(p);f.interceptors.request.use(function(t){return t},function(t){return c.a.reject(t)}),f.interceptors.response.use(function(t){return t},function(t){return c.a.reject(t)}),Plugin.install=function(t,e){t.axios=f,window.axios=f,o()(t.prototype,{axios:{get:function(){return f}},$axios:{get:function(){return f}}})},r["default"].use(Plugin);Plugin;var h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Search")],1)},v=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"bottom-gap"},[n("h2",{staticClass:"title is-2"},[t._v("GitHub Repository Search")]),n("b-field",{attrs:{grouped:""}},[n("b-input",{attrs:{placeholder:"Search...",type:"search",expanded:""},model:{value:t.searchStr,callback:function(e){t.searchStr=e},expression:"searchStr"}}),n("p",{staticClass:"control"},[n("button",{staticClass:"button is-info",class:{"is-loading":t.isLoading},attrs:{type:"submit",disabled:!t.searchStr||t.isLoading},on:{click:t.searchRepo}},[t._v("Search")])])],1)],1),n("main",[t.results.length?n("h1",{staticClass:"title is-2"},[t._v("Results")]):t._e(),t.isNotFound?n("b-notification",{},[t._v("Not Found.")]):t._e(),t._l(t.results,function(e,r){return n("article",{key:r,staticClass:"media bottom-gap"},[n("p",{staticClass:"media-left image is-64x64"},[e.owner.avatar_url?n("img",{attrs:{src:e.owner.avatar_url}}):t._e()]),n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[e?n("p",[n("a",{staticClass:"title is-3",attrs:{href:e.html_url,target:"_blank"}},[t._v(t._s(e.full_name))])]):t._e(),e?n("span",[t._v(t._s(e.description))]):t._e()])])])}),n("nav",{staticClass:"level-item has-text-centered"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.results.length&&t.isResultsMore,expression:"results.length && isResultsMore"}],staticClass:"button is-text is-large more-button bottom-gap",class:{"is-loading":t.isLoading},attrs:{type:"button",disabled:t.isLoading},on:{click:t.showMoreResults}},[t._v("More...")])]),t.error?n("section",[n("b-notification",{attrs:{type:"is-danger"}},[t._v(t._s(t.error))])],1):t._e()],2)])},g=[],m=(n("a481"),n("ac6a"),n("28a5"),n("75fc")),_=(n("b54a"),"https://api.github.com/search/repositories"),x="An error occurred during communication. Please reload the page or check the communication environment",y={data:function(){return{searchStr:"",results:[],totalCount:0,linkStr:"",urls:{},isLoading:!1,isNotFound:!1,error:null}},watch:{results:function(){var t=this;this.$nextTick(function(){t.isLoading=!1,t.totalCount&&(t.isNotFound=!1)})}},computed:{isResultsMore:function(){return this.results.length!==this.totalCount}},methods:{initState:function(){this.isLoading=!0,this.error=null,this.isNotFound=!1},searchRepo:function(){var t=this;this.initState(),this.$axios.get("".concat(_,"?q=").concat(this.searchStr)).then(function(e){t.results=e.data.items,t.totalCount=e.data.total_count,t.totalCount?e.headers.link&&(t.linkStr=e.headers.link,t.parseLinks()):t.isNotFound=!0}).catch(function(e){console.error(e),t.error=x,t.isLoading=!1})},showMoreResults:function(){this.fetchNextResults(this.urls.next)},fetchNextResults:function(t){var e=this;this.initState(),this.$axios.get(t).then(function(t){var n;(n=e.results).push.apply(n,Object(m["a"])(t.data.items)),e.linkStr=t.headers.link,e.parseLinks()}).catch(function(t){console.error(t),e.error=x,e.isLoading=!1})},parseLinks:function(){var t=this.linkStr.split(","),e={};t.forEach(function(t){var n=t.split(";"),r=n[0].replace(/<(.*)>/,"$1").trim(),s=n[1].replace(/rel="(.*)"/,"$1").trim();e[s]=r}),this.urls=e}}},S=y,k=(n("2d9d"),n("2877")),w=Object(k["a"])(S,b,g,!1,null,"3a6700ce",null),C=w.exports,j={name:"app",components:{Search:C}},L=j,O=(n("5c0b"),Object(k["a"])(L,h,v,!1,null,null,null)),R=O.exports;r["default"].config.productionTip=!1,r["default"].use(i.a),new r["default"]({render:function(t){return t(R)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(t,e,n){},d67e:function(t,e,n){}});
//# sourceMappingURL=app.7b478149.js.map