"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{4672:function(n,e,r){r.d(e,{Z:function(){return d}});var t,a,u,c=r(7689),i=r(168),s=r(6444),o=r(1087),p=s.ZP.ul(t||(t=(0,i.Z)(["\n  margin-top: 20px;\n  margin-left: 40px;\n"]))),f=s.ZP.li(a||(a=(0,i.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n"]))),l=(0,s.ZP)(o.rU)(u||(u=(0,i.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  color: #0077b6;\n  transition: color 600ms linear;\n"]))),v=r(184),d=function(n){var e=n.movies,r=(0,c.TH)();return(0,v.jsx)(p,{children:e.map((function(n){var e=n.id,t=n.title,a=n.name;return(0,v.jsx)(f,{children:(0,v.jsx)(l,{to:"/movies/".concat(e),state:{from:r},children:t||a})},e)}))})}},9221:function(n,e,r){r.d(e,{Ai:function(){return s},Ni:function(){return o},T0:function(){return f},YJ:function(){return i},g_:function(){return p}});var t=r(4165),a=r(5861),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="5a60377e356cdc0deed96010c1e392d9",i=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var e,r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day",{params:{api_key:c,language:"en-US"}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie",{params:{api_key:c,language:"en-US",query:e,include_adult:!1,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e),{params:{api_key:c,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits"),{params:{api_key:c,language:"en-US"}});case 2:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:c,language:"en-US",page:1}});case 2:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3485:function(n,e,r){r.r(e),r.d(e,{default:function(){return d}});var t,a=r(4165),u=r(5861),c=r(9439),i=r(2791),s=r(9221),o=r(4672),p=r(168),f=r(6444).ZP.h1(t||(t=(0,p.Z)(["\n  margin: 30px 0 0 20px;\n  color: #0077b6;\n  display: block;\n  }\n"]))),l=r(854),v=r(184),d=function(){var n=(0,i.useState)([]),e=(0,c.Z)(n,2),r=e[0],t=e[1],p=(0,i.useState)(!1),d=(0,c.Z)(p,2),Z=d[0],g=d[1],m=(0,i.useState)(null),h=(0,c.Z)(m,2),x=h[0],w=h[1];return(0,i.useEffect)((function(){var n=new AbortController,e=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),w(null),e.next=5,(0,s.YJ)({signal:n.signal});case 5:r=e.sent,t(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w(e.t0.message);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){n.abort()}}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f,{children:"Trending today"}),Z&&(0,v.jsx)(l.Z,{}),x&&(0,v.jsx)("p",{children:"Error loading movies. Please try again later."}),!Z&&r.length>0&&(0,v.jsx)(o.Z,{movies:r})]})}}}]);
//# sourceMappingURL=485.342ab736.chunk.js.map