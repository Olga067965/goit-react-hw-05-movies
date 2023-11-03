"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[929],{9981:function(n,e,r){r.r(e),r.d(e,{default:function(){return j}});var t,a,i,s,u,c,o=r(4165),p=r(5861),f=r(9439),l=r(2791),d=r(7689),h=r(9221),g=r(168),v=r(6444),Z=v.ZP.div(t||(t=(0,g.Z)(["\n  padding-top: 30px; \n  padding-bottom: 30px; \n"]))),x=v.ZP.ul(a||(a=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px; \n"]))),m=v.ZP.li(i||(i=(0,g.Z)(["\n  width: 220px; \n  overflow: hidden;\n\n  p:not(:last-child) {\n    margin-top: 15px; \n  }\n\n  &:hover img {\n    filter: brightness(0.8) sepia(1); \n    transition: 300ms ease-in-out;\n  }\n"]))),b=v.ZP.img(s||(s=(0,g.Z)(["\n  height: 260px; \n  border: 5px solid #fffff; \n  border-radius: 50%; \n  filter: grayscale(1); \n"]))),w=(v.ZP.p(u||(u=(0,g.Z)(["\n  font-family: 'Arial', sans-serif; \n  font-size: 18px; \n  color: #333; \n"]))),v.ZP.button(c||(c=(0,g.Z)(["\n  background-color: #ff5733; \n  color: white; \n  font-family: 'Arial', sans-serif; \n  font-size: 16px; \n  border: none;\n  padding: 10px 20px; \n  border-radius: 5px; \n  cursor: pointer;\n  transition: background-color 0.3s ease; \n\n  &:hover {\n    background-color: #ff8c66; \n  }\n"]))),r(854)),k=r(5667),y=r.p+"static/media/image2.f31fe81ef66454556398.png",_=r(184),j=function(){var n=(0,d.UO)().movieId,e=(0,l.useState)([]),r=(0,f.Z)(e,2),t=r[0],a=r[1],i=(0,l.useState)(!1),s=(0,f.Z)(i,2),u=s[0],c=s[1],g=(0,l.useState)(null),v=(0,f.Z)(g,2),j=v[0],S=v[1];return(0,l.useEffect)((function(){var e=new AbortController,r=function(){var r=(0,p.Z)((0,o.Z)().mark((function r(){var t;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c(!0),S(null),r.next=5,(0,h.g_)(n,{signal:e.signal});case 5:t=r.sent,a(t),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),S(r.t0.message);case 12:return r.prev=12,c(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();return r(n),function(){e.abort()}}),[n]),t&&k.NY.scrollMore(640),(0,_.jsxs)(_.Fragment,{children:[u&&(0,_.jsx)(w.Z,{}),j&&(0,_.jsx)("p",{children:"There is no information yet."}),(0,_.jsx)(Z,{children:(0,_.jsx)(x,{children:t.map((function(n){var e=n.id,r=n.profile_path,t=n.name,a=n.character;return(0,_.jsxs)(m,{children:[(0,_.jsx)(b,{src:r?"https://image.tmdb.org/t/p/w500"+r:y,alt:t,width:200,height:300}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Name: "}),t]}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Character: "}),a]})]},e)}))})})]})}},9221:function(n,e,r){r.d(e,{Ai:function(){return c},Ni:function(){return o},T0:function(){return f},YJ:function(){return u},g_:function(){return p}});var t=r(4165),a=r(5861),i=r(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="5a60377e356cdc0deed96010c1e392d9",u=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var e,r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day",{params:{api_key:s,language:"en-US"}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie",{params:{api_key:s,language:"en-US",query:e,include_adult:!1,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e),{params:{api_key:s,language:"en-US"}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits"),{params:{api_key:s,language:"en-US"}});case 2:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:s,language:"en-US",page:1}});case 2:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=929.9db45673.chunk.js.map