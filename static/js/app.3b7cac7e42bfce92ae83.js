webpackJsonp([2,0],[function(t,e,n){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function r(t){return t&&t.__esModule?t:{default:t}}var s=n(47),a=r(s),o=n(22),u=r(o),c=n(89),d=r(c),l=n(41),f=r(l),p=n(39),m=r(p),h=n(99),_=n(38),v=i(_);(0,h.sync)(f.default,m.default),(0,a.default)(v).forEach(function(t){u.default.filter(t,v[t])});var b=new u.default(u.default.util.extend({router:m.default,store:f.default},d.default));b.$mount("#app")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var i,r;n(83),i=n(44);var s=n(94);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e){"use strict";function n(t){var e=t.replace(/^https?:\/\//,"").replace(/\/.*$/,""),n=e.split(".").slice(-3);return"www"===n[0]&&n.shift(),n.join(".")}function i(t){var e=Date.now()/1e3-Number(t);return e<3600?r(~~(e/60)," minute"):e<86400?r(~~(e/3600)," hour"):r(~~(e/86400)," day")}function r(t,e){return 1===t?t+e:t+e+"s"}Object.defineProperty(e,"__esModule",{value:!0}),e.host=n,e.timeAgo=i},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(22),s=i(r),a=n(98),o=i(a),u=n(!function(){var t=new Error('Cannot find module "../views/createListView"');throw t.code="MODULE_NOT_FOUND",t}()),c=n(91),d=i(c),l=n(92),f=i(l);s.default.use(o.default),e.default=new o.default({mode:"history",scrollBehavior:function(){return{y:0}},routes:[{path:"/top/:page(\\d+)?",component:(0,u.createListView)("top")},{path:"/new/:page(\\d+)?",component:(0,u.createListView)("new")},{path:"/show/:page(\\d+)?",component:(0,u.createListView)("show")},{path:"/ask/:page(\\d+)?",component:(0,u.createListView)("ask")},{path:"/job/:page(\\d+)?",component:(0,u.createListView)("job")},{path:"/item/:id(\\d+)",component:d.default},{path:"/user/:id",component:f.default},{path:"/",redirect:"/top"}]})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return new l.default(function(e,n){_.child(t).once("value",function(t){var n=t.val();e(n)},n)})}function s(t){return r(t+"stories")}function a(t){return r("item/"+t)}function o(t){return l.default.all(t.map(function(t){return a(t)}))}function u(t){return r("user/"+t)}function c(t,e){var n=!0,i=function(t){n?n=!1:e(t.val())},r=_.child(t+"stories");return r.on("value",i),function(){r.off("value",i)}}Object.defineProperty(e,"__esModule",{value:!0});var d=n(23),l=i(d);e.fetchIdsByType=s,e.fetchItem=a,e.fetchItems=o,e.fetchUser=u,e.watchList=c;var f=n(36),p=i(f);n(87);var m={databaseURL:"https://hacker-news.firebaseio.com"},h="/v0";p.default.initializeApp(m);var _=p.default.database().ref(h)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(22),s=i(r),a=n(100),o=i(a),u=n(40);s.default.use(o.default);var c=new o.default.Store({state:{activeType:null,itemsPerPage:20,items:{},users:{},lists:{top:[],new:[],show:[],ask:[],job:[]}},actions:{FETCH_LIST:function(t,e){var n=t.commit,i=t.dispatch,r=(t.state,e.type);return n("SET_ACTIVE_TYPE",{type:r}),(0,u.fetchIdsByType)(r).then(function(t){return n("SET_LIST",{type:r,ids:t})}).then(function(){return i("ENSURE_ACTIVE_ITEMS")})},ENSURE_ACTIVE_ITEMS:function(t){var e=t.dispatch,n=t.getters;return e("FETCH_ITEMS",{ids:n.activeIds})},FETCH_ITEMS:function(t,e){var n=t.commit,i=(t.state,e.ids);return(0,u.fetchItems)(i).then(function(t){return n("SET_ITEMS",{items:t})})},FETCH_USER:function(t,e){var n=t.commit,i=(t.state,e.id);return(0,u.fetchUser)(i).then(function(t){return n("SET_USER",{user:t})})}},mutations:{SET_ACTIVE_TYPE:function(t,e){var n=e.type;t.activeType=n},SET_LIST:function(t,e){var n=e.type,i=e.ids;t.lists[n]=i},SET_ITEMS:function(t,e){var n=e.items;n.forEach(function(e){e&&s.default.set(t.items,e.id,e)})},SET_USER:function(t,e){var n=e.user;s.default.set(t.users,n.id,n)}},getters:{activeIds:function(t){var e=t.activeType,n=t.itemsPerPage,i=t.lists,r=Number(t.route.params.page)||1;if(e){var s=(r-1)*n,a=r*n;return i[e].slice(s,a)}return[]},activeItems:function(t,e){return e.activeIds.map(function(e){return t.items[e]}).filter(function(t){return t})}}});e.default=c},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comment",props:["id"],data:function(){return{open:!0}},computed:{comment:function(){return this.$store.state.items[this.id]}},methods:{pluralize:function(t){return t+(1===t?" reply":" replies")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["show"]}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return t.dispatch("FETCH_ITEMS",{ids:[t.state.route.params.id]})}function s(t,e){if(e.kids)return t.dispatch("FETCH_ITEMS",{ids:e.kids}).then(function(){return u.default.all(e.kids.map(function(e){return s(t,t.state.items[e])}))})}function a(t){return r(t).then(function(){var e=t.state,n=e.items,i=e.route;return s(t,n[i.params.id])})}Object.defineProperty(e,"__esModule",{value:!0});var o=n(23),u=i(o),c=n(90),d=i(c),l=n(37),f=i(l);e.default={name:"item-view",components:{Comment:d.default,Spinner:f.default},data:function(){return{loading:!0}},computed:{item:function(){return this.$store.state.items[this.$route.params.id]}},beforeMount:function(){var t=this;a(this.$store).then(function(){t.loading=!1})}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return t.dispatch("FETCH_USER",{id:t.state.route.params.id})}Object.defineProperty(e,"__esModule",{value:!0});var s=n(37),a=i(s);e.default={name:"user-view",components:{Spinner:a.default},computed:{user:function(){return this.$store.state.users[this.$route.params.id]}},beforeMount:function(){r(this.$store)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3RDBBRDcwNDU4NEMxMUU2ODdFNjg5OTYwMjlGNjQ0QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NTU3NUVGQUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NTU3NUVGOUEyRDIxMUU2ODlEMUJBMUE3RTYxMkU1OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NTUwMDE5LTVjNjQtNGRiNy1iNjhjLTQ1ZWIxYzkxM2FiYiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJlZDc4OTczLWViM2ItMTE3OS04YzQyLWNlMTYwYmQ0NTQ1NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv38lU4AAAMkSURBVHja7FnbSxRRGP+N666upqUECWK+mUqbmxbRQ4QmFEFQmtZDEPQcvfQ/9BL1WO920SyCjJCIyC5iXsmVMjVB8pbVqnhBc2dm+84azHzjbszsupPBfA8L8ztnzvzmu/zON2elcDiMrWQp2GK25QilsqvQKmB/BCW408SvkZC8iptVCE7CJdlHhjI4LQNXXyE7bwMhGguOYWba4LXkmgp43VCVGCFzeQRgM6FUj1NlDiGH0L9T6r/YWqRE9aapa7RiXuOIC/CY2gVMEyqrRnqWdqmE8PE55FAUTsQmKxdFRxk4N47RHkFrcwjRFnf4Ig5dYOCNSgy0CT8Z7Bdw4hJqrzOw6TIGe+DdrBwiN7y5bQQP1BmDiEhQKDTlZxm4PIvuJng2MalprZFOTAYYuO8UsjOMnGSgoBSFFQwMtOBH0Ey8rHhoRUHnPQbmFKDoCEJ8Jl2WnUYKz4T3Dear2fREclJvc6Rh0llFPfMQxStdQnktm/NtCEPvTMbLCiF656kxfH7JQN9J5GRpnMg9hT4U+Nmc7kYshyAlQxjViPP1Rl3VnkpNciiB/DWQdGsqa+hphDtJSk1uH2jFwjSvtXotXhku7K9hoyNvMT6cNEI0d34RfY8ZWHocuTlQ1uPlR/5eNtrRINyWxL2MSrfzLkO27URJtWBDnEQ665Jl6ScCT82nc1yEyPmjXRj/wKN2LhKvVPjPMLz/CYJzJuUnXkL0/quq0Uklx7A9E7vLkFfM5edOHM2E9TvISX0PEVrREO8OFFcJCdDb9CeMtFuNV1yEhCB9xeALBlZdQXkdQ7ruY1mGZAOh9Qrv4IJEeZ3v0+1oJD8PLFV7YoQoENQMzU/FnDDchokvNhISgrSEvkcxJ5CgKzb31H8EKVpPuvgdgWdxpHNihIQg9WIiEGWovwWz81blx3pPvVGQZBWt13DwvHHo9a1ETgcSuJW66Y5mtDdHWdIT/zFTYicd7ti64Hy5OoQcQlGrTFVEJ6/a+HzxODkWIUkcJ3gz7T70TM+EpLUpku6/jjAWZqDI+uGkGz2dPpuydyHFtZGQk9T/BaHfAgwAytLfbeiDo+IAAAAASUVORK5CYII="},function(t,e,n){var i,r;n(86),i=n(42);var s=n(97);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;n(82),i=n(43);var s=n(93);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;n(85),i=n(45);var s=n(96);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;n(84),i=n(46);var s=n(95);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this;return t._h("li",{staticClass:"comment"},[t._h("div",{staticClass:"by"},[t._h("router-link",{attrs:{to:"/user/"+t.comment.by}},[t._s(t.comment.by)]),"\n    "+t._s(t._f("timeAgo")(t.comment.time))+" ago\n    ",t.comment.kids&&t.comment.kids.length?t._h("span",["\n      | ",t._h("a",{staticClass:"expand",on:{click:function(e){t.open=!t.open}}},["\n        "+t._s((t.open?"collapase ":"expand ")+t.pluralize(t.comment.kids.length))+"\n      "])]):t._e()])," ",t._h("div",{staticClass:"text",domProps:{innerHTML:t._s(t.comment.text)}})," ",t._h("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"comment-children"},[t._l(t.comment.kids,function(e){return t._h("comment",{attrs:{id:e}})})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("svg",{staticClass:"spinner",class:{show:t.show},attrs:{width:"44px",height:"44px",viewBox:"0 0 44 44"}},[t._h("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this;return t._h("div",{staticClass:"user-view"},[t._h("spinner",{attrs:{show:!t.user}})," ",t.user?[t._h("h1",["User: "+t._s(t.user.id)])," ",t._h("ul",{staticClass:"meta"},[t._h("li",[t._m(0),t._s(t._f("timeAgo")(t.user.created))+" ago"])," ",t._h("li",[t._m(1),t._s(t.user.karma)])," ",t.user.about?t._h("li",{staticClass:"about",domProps:{innerHTML:t._s(t.user.about)}}):t._e()])," ",t._h("p",{staticClass:"links"},[t._h("a",{attrs:{href:"https://news.ycombinator.com/submitted?id="+t.user.id}},["submissions"])," |\n      ",t._h("a",{attrs:{href:"https://news.ycombinator.com/threads?id="+t.user.id}},["comments"])])]:t._e()])},staticRenderFns:[function(){var t=this;return t._h("span",{staticClass:"label"},["Created:"])},function(){var t=this;return t._h("span",{staticClass:"label"},["Karma:"])}]}},function(t,e){t.exports={render:function(){var t=this;return t.item?t._h("div",{staticClass:"item-view"},[t.item?[t._h("div",{staticClass:"item-view-header"},[t._h("a",{attrs:{href:t.item.url,target:"_blank"}},[t._h("h1",[t._s(t.item.title)])])," ",t.item.url?t._h("span",{staticClass:"host"},["\n          ("+t._s(t._f("host")(t.item.url))+")\n        "]):t._e()," ",t._h("p",{staticClass:"meta"},["\n            "+t._s(t.item.score)+" points\n            | by ",t._h("router-link",{attrs:{to:"/user/"+t.item.by}},[t._s(t.item.by)]),"\n            "+t._s(t._f("timeAgo")(t.item.time))+" ago\n        "])])," ",t._h("div",{staticClass:"item-view-comments"},[t._h("p",{staticClass:"item-view-comments-header"},["\n          "+t._s(t.item.kids?t.item.descendants+" comments":"No comments yet.")+"\n          ",t._h("spinner",{attrs:{show:t.loading}})])," ",t.loading?t._e():t._h("ul",{staticClass:"comment-children"},[t._l(t.item.kids,function(e){return t._h("comment",{attrs:{id:e}})})])])]:t._e()]):t._e()},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this;return t._h("div",{attrs:{id:"app"}},[t._h("div",{staticClass:"header"},[t._h("div",{staticClass:"inner"},[t._h("router-link",{attrs:{to:"/",exact:""}},[t._h("img",{staticClass:"logo",attrs:{src:n(88),alt:"logo"}})])," ",t._h("router-link",{attrs:{to:"/top"}},["Top"])," ",t._h("router-link",{attrs:{to:"/new"}},["New"])," ",t._h("router-link",{attrs:{to:"/show"}},["Show"])," ",t._h("router-link",{attrs:{to:"/ask"}},["Ask"])," ",t._h("router-link",{attrs:{to:"/job"}},["Jobs"])," ",t._m(0)])])," ",t._h("transition",{attrs:{name:"fade",mode:"out-in"}},[t._h("router-view",{staticClass:"view"})])])},staticRenderFns:[function(){var t=this;return t._h("a",{staticClass:"github",attrs:{href:"https://github.com/dylanninin/vue-hackernews",target:"_blank"}},["\n            Built with Vue.js\n        "])}]}}]);
//# sourceMappingURL=app.3b7cac7e42bfce92ae83.js.map