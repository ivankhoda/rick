(this.webpackJsonprickandmorty=this.webpackJsonprickandmorty||[]).push([[0],{38:function(n,t,e){},65:function(n,t,e){},66:function(n,t,e){"use strict";e.r(t);var r=e(4),a=e(0),i=e.n(a),o=e(9),c=e.n(o),s=e(46),u=e(36),d=e.n(u),l=e(39),b=e(24),j=e(16),f=e(100),h=e(68),m=e(17),x=e(101);e(38);function p(){var n=Object(j.a)(["\n  margin: 0 ","px;\n  transition: transform 500ms ease;\n  border-radius: 20px;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  transform: scale(1);\n  user-select: none;\n\n  flex: 0 0\n    calc(\n      100% / "," -\n        ","px\n    );\n\n  img {\n    height: 100%;\n    width: 100%;\n    border-radius: 1.5vw;\n    box-sizing: border-box;\n  }\n\n  :hover {\n    transform: scale(",") !important;\n  }\n\n  :hover ~ * {\n    transform: translateX(",") !important;\n  }\n\n  &.left {\n    transform-origin: left;\n\n    :hover ~ * {\n      transform: translateX(",") !important;\n    }\n  }\n\n  &.right {\n    transform-origin: right;\n\n    :hover ~ * {\n      transform: translateX(0%) !important;\n    }\n  }\n"]);return p=function(){return n},n}var g=m.a.div(p(),(function(n){return n.slideMargin}),(function(n){return n.visibleSlides}),(function(n){return 2*n.slideMargin}),(function(n){return n.zoomFactor/100+1}),(function(n){return n.zoomFactor/2+"%"}),(function(n){return n.zoomFactor+"%"})),O=e(102),v=e(95),w=e(98),y=e(97),k=e(93),S=e(99),z=Object(k.a)({root:{width:320},media:{height:250,backgroundSize:"cover"}}),C=function(n){var t=n.character,e=z();return Object(r.jsxs)(v.a,{className:e.root,children:[Object(r.jsx)(y.a,{className:e.media,image:t.image}),Object(r.jsxs)(w.a,{children:[Object(r.jsxs)(S.a,{gutterBottom:!0,variant:"h5",children:["Name: ",t.name]}),Object(r.jsxs)(S.a,{gutterBottom:!0,color:"textSecondary",children:["Status: ",t.status,Object(r.jsx)("br",{}),"Origin: ",t.origin.name,Object(r.jsx)("br",{}),"Location: ",t.location.name,Object(r.jsx)("br",{}),"Status: ",t.status,Object(r.jsx)("br",{}),"Species: ",t.species,Object(r.jsx)("br",{}),"Episodes total ",t.episode.length,Object(r.jsx)("br",{})]}),Object(r.jsx)(S.a,{color:"textSecondary",children:"Episodes:"}),t.episode.map((function(n){return Object(r.jsx)(O.a,{style:{margin:3},size:"small",label:n},n)}))]})]})};function F(){var n=Object(j.a)(["\n  transition: transform 500ms ease;\n  border-radius: 0.5vw;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  transform: scale(1);\n  user-select: none;\n  border: solid;\n  background-color: white;\n  img {\n    height: 100%;\n    width: 100%;\n    border-radius: 0.5vw 0.5vw 0 0;\n    box-sizing: border-box;\n  }\n  h1 {\n  }\n  :hover {\n    transform: scale(",") !important;\n  }\n\n  :hover ~ * {\n    transform: translateX(",") !important;\n  }\n\n  &.left {\n    transform-origin: left;\n\n    :hover ~ * {\n      transform: translateX(",") !important;\n    }\n  }\n\n  &.right {\n    transform-origin: right;\n\n    :hover ~ * {\n      transform: translateX(0%) !important;\n    }\n  }\n"]);return F=function(){return n},n}function B(){var n=Object(j.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 20px;\n  //max-width: 1300px;\n\n  overflow: hidden;\n  position: relative;\n  background: #60cbe6;\n  border-radius: 0.5vw;\n"]);return B=function(){return n},n}var X=m.a.div(B()),L=m.a.div(F(),(function(){return 1.05}),(function(){return"2.5%"}),(function(){return"15%"})),E=function(n){var t=Object(a.useState)(!1),e=Object(b.a)(t,2),i=e[0],o=e[1],c=Object(a.useState)({}),s=Object(b.a)(c,2),u=s[0],d=s[1],l=n.arr;return g?Object(r.jsxs)("div",{children:[Object(r.jsx)(x.a,{onClose:function(){o(!1)},open:i,children:Object(r.jsx)(C,{character:u})}),Object(r.jsx)(X,{children:l.map((function(n){return Object(r.jsxs)(L,{onClick:function(){!function(n){o(!0),d(n)}(n)},children:[Object(r.jsx)("img",{src:n.image,alt:"Card name"}),Object(r.jsx)("h1",{children:n.name})]},n.id)}))})]}):Object(r.jsx)("div",{children:"Loading..."})},N=function(n){var t,e=[];return function(n,r){for(;r>0;)t="".concat(n).concat(r),r--,e.push(t)}("https://rickandmortyapi.com/api/character?page=",n.pages),Object(r.jsxs)("div",{children:[Object(r.jsxs)(S.a,{gutterBottom:!0,variant:"h5",children:["Total characters: ",n.count]}),Object(r.jsxs)(S.a,{gutterBottom:!0,variant:"h5",children:["Total pages: ",n.pages]})]})};function T(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1350px;\n"]);return T=function(){return n},n}function M(){var n=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return M=function(){return n},n}var P=m.a.div(M()),I=m.a.div(T()),J=function(){var n=Object(a.useState)([]),t=Object(b.a)(n,2),e=t[0],i=t[1],o=Object(a.useState)(),c=Object(b.a)(o,2),u=c[0],j=c[1],m=function(){var n=Object(l.a)(d.a.mark((function n(t){var e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t));case 2:return n.next=4,n.sent.json();case 4:e=n.sent,i(e.results),j(e.info);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();if(Object(a.useEffect)((function(){m("https://rickandmortyapi.com/api/character?page=")}),[]),!u)return Object(r.jsx)("div",{children:"Loading..."});var x=Object(s.a)({},u),p=x.count,g=x.next,O=x.pages,v=x.prev;return Object(r.jsxs)(I,{children:[Object(r.jsxs)(P,{children:[Object(r.jsx)(N,{count:p,next:g,pages:O,prev:v}),Object(r.jsxs)(f.a,{size:"large","aria-label":"large outlined primary button group",children:[" ",Object(r.jsx)(h.a,{color:"secondary",disabled:!v,onClick:function(){m(v)},children:"Previous"}),Object(r.jsx)(h.a,{color:"secondary",disabled:!g,onClick:function(){m(g)},children:"Next"})]})]}),Object(r.jsx)(E,{arr:e})]})},D=(e(65),function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,104)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;e(n),r(n),a(n),i(n),o(n)}))});c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root")),D()}},[[66,1,2]]]);
//# sourceMappingURL=main.5a5bedb2.chunk.js.map