(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],{132:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"all",(function(){return S})),r.d(n,"noAll",(function(){return w})),r.d(n,"noStops",(function(){return L})),r.d(n,"one",(function(){return q})),r.d(n,"two",(function(){return E})),r.d(n,"three",(function(){return T})),r.d(n,"less",(function(){return R})),r.d(n,"quickly",(function(){return M}));var c=r(1),s=r(0),i=r(16),a=r.n(i),o=(r(81),r(21)),u=r(28),l=r(26),f=r(14),d=r.n(f),m=r(24),p=r(34),h=r(53),j=r(54),b=new(function(){function e(){Object(h.a)(this,e),this._apiBase="https://front-test.beta.aviasales.ru/"}return Object(j.a)(e,[{key:"getResource",value:function(){var e=Object(m.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSearchId",value:function(){var e=Object(m.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("search");case 2:return t=e.sent,r=t.json(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),O=r.p+"static/media/Logo.e2d2505b.svg",g=r.p+"static/media/S7 Logo (1).cafb13c3.svg";function v(e){var t=e.segments,r=t.date,n=new Date(r),s="".concat(t.duration/60|0,"\u0447 ").concat(t.duration%60,"\u043c\u0438\u043d"),i=n.getUTCHours(),a=n.getUTCMinutes(),o=(n.getUTCHours()+(t.duration/60|0))%24,u=(n.getUTCMinutes()+t.duration)%60,l=t.stops.length;return l+=l>1?" \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041a\u0418":1==l?" \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041a\u0410":" \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041e\u041a",a<10&&(a="0".concat(a)),i<10&&(i="0".concat(i)),u<10&&(u="0".concat(u)),o<10&&(o="0".concat(o)),Object(c.jsxs)("div",{className:"segment",children:[Object(c.jsxs)("div",{className:"distance",children:[Object(c.jsxs)("p",{className:"gray",children:[t.origin,"-",t.destination]}),Object(c.jsxs)("p",{className:"black",children:["".concat(i,":").concat(a)," ","-"," ","".concat(o,":").concat(u)," "]})]},Math.random()),Object(c.jsxs)("div",{className:"duration",children:[Object(c.jsx)("p",{className:"gray",children:"\u0412 \u041f\u0423\u0422\u0418"}),Object(c.jsx)("p",{className:"black",children:s})]},Math.random()),Object(c.jsxs)("div",{className:"stops",children:[Object(c.jsx)("p",{className:"gray",children:l}),Object(c.jsx)("p",{className:"black",children:t.stops.join(", ")})]},Math.random())]},Math.random())}function x(e){return e.dataBase.map((function(e){var t="".concat(e.price);return Object(c.jsxs)("li",{className:"card",children:[Object(c.jsxs)("div",{className:"card__header",children:[Object(c.jsx)("div",{className:"price",children:"".concat(t.slice(0,2)," ").concat(t.slice(2,t.length)," \u0420")},Math.random()),Object(c.jsx)("div",{className:"logotip",children:Object(c.jsx)("img",{src:g,alt:"Logotip"})},Math.random())]},Math.random()),Object(c.jsx)(v,{segments:e.segments[0]}),Object(c.jsx)(v,{segments:e.segments[1]})]},Math.random())}))}var k=r(136);function y(e){var t=e.error;return Object(c.jsx)(k.a,{message:t.message,description:"",type:"error"})}var N=r(137);function _(){return Object(c.jsx)("div",{className:"example",children:Object(c.jsx)(N.a,{size:"large"})})}r(131);var S=function(e){return{type:"ALL",checked:e}},w=function(e){return{type:"NO_ALL",checked:e}},L=function(e){return{type:"NO_STOPS",checked:e}},q=function(e){return{type:"ONE",checked:e}},E=function(e){return{type:"TWO",checked:e}},T=function(e){return{type:"THREE",checked:e}},R=function(){return{type:"LESS"}},M=function(){return{type:"QUICK"}};var C=Object(o.b)((function(e){return e}),n)((function(e){var t=e.item,r=e.all,n=e.noAll,s=e.noStops,i=e.one,a=e.two,o=e.three,u=t.fil,l=u.mess,f=u.bool,d="filter__menu";return f&&(d="filter__menu active"),Object(c.jsx)("div",{children:Object(c.jsxs)("label",{className:d,children:[Object(c.jsx)("input",{checked:f,type:"checkbox",onChange:function(e){switch(l){case"\u0412\u0441\u0435":return r(e.target.checked);case"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":return s(e.target.checked),n();case"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":return i(e.target.checked),n();case"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438":return a(e.target.checked),n();case"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438":return o(e.target.checked),n();default:return i()}}}),Object(c.jsx)("span",{children:l})]})})}));var A=Object(o.b)((function(e){return{filter:e.filter,sort:e.sort}}),n)((function(e){var t,r=e.less,n=e.quickly,i=e.filter,a=e.sort,o=Object(s.useState)([]),u=Object(p.a)(o,2),f=u[0],h=u[1],j=Object(s.useState)(!0),g=Object(p.a)(j,2),v=g[0],k=g[1],N=Object(s.useState)(!1),S=Object(p.a)(N,2),w=S[0],L=S[1],q=[],E=w?Object(c.jsx)(y,{error:w}):null;function T(e){document.querySelectorAll(".sort__menu").forEach((function(e){e.className="sort__menu"})),e.target.className="sort__menu select"}return Object(s.useEffect)((function(){b.getSearchId().then((function(e){b.getResource("tickets?searchId=".concat(e.searchId)).then(function(){var e=Object(m.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=3;break}throw k(!1),new Error("Error number ".concat(t.status));case 3:return e.next=5,t.json();case 5:r=e.sent,h(r.tickets.splice(0,5)),k(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){L(e)}))}))}),[]),i[0].fil.bool?q=f:i.map((function(e){if("\u0412\u0441\u0435"!==e.fil.mess)switch(e.fil.mess){case"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":var t;if(e.fil.bool)(t=q).push.apply(t,Object(l.a)(f.filter((function(e){return 0===e.segments[0].stops.length}))));return q;case"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":var r;if(e.fil.bool)(r=q).push.apply(r,Object(l.a)(f.filter((function(e){return 1===e.segments[0].stops.length}))));return q;case"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438":var n;if(e.fil.bool)(n=q).push.apply(n,Object(l.a)(f.filter((function(e){return 2===e.segments[0].stops.length}))));return q;case"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438":var c;if(e.fil.bool)(c=q).push.apply(c,Object(l.a)(f.filter((function(e){return 3===e.segments[0].stops.length}))));return q;default:return f}return q})),a.cheaper?q.sort((function(e,t){return e.price>t.price?1:e.price===t.price?0:-1})):a.quick&&q.sort((function(e,t){return e.segments[0].duration>t.segments[0].duration?1:e.segments[0].duration===t.segments[0].duration?0:-1})),t=v?Object(c.jsx)(_,{}):Object(c.jsx)(x,{dataBase:q}),Object(c.jsxs)("div",{className:"art",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:O,alt:"Logo"})}),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsxs)("div",{className:"filter",children:[Object(c.jsx)("div",{className:"filter__title",children:"\u041a\u041e\u041b\u0418\u0427\u0415\u0421\u0422\u0412\u041e \u041f\u0415\u0420\u0415\u0421\u0410\u0414\u041e\u041a"}),i.map((function(e){return Object(c.jsx)(C,{item:e})}))]}),Object(c.jsxs)("div",{className:"orders",children:[Object(c.jsxs)("div",{className:"sort",children:[Object(c.jsx)("div",{role:"button",className:"sort__menu",style:{borderBottomLeftRadius:"5px",borderTopLeftRadius:"5px"},onClick:function(e){T(e),r()},onKeyPress:function(){},children:"\u0421\u0410\u041c\u042b\u0419 \u0414\u0415\u0428\u0415\u0412\u042b\u0419"}),Object(c.jsx)("div",{role:"button",className:"sort__menu",style:{borderBottomRightRadius:"5px",borderTopRightRadius:"5px"},onClick:function(e){T(e),n()},onKeyPress:function(){},children:"\u0421\u0410\u041c\u042b\u0419 \u0411\u042b\u0421\u0422\u0420\u042b\u0419"})]}),Object(c.jsxs)("ul",{className:"list",children:[E,t]})]})]})]})})),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{filter:[{fil:{mess:"\u0412\u0441\u0435",bool:!0}},{fil:{mess:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",bool:!0}},{fil:{mess:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430",bool:!0}},{fil:{mess:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",bool:!0}},{fil:{mess:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",bool:!0}}],sort:{quick:!1,cheaper:!1}},t=arguments.length>1?arguments[1]:void 0;if("ALL"===t.type)return e.filter[0].bool,{filter:e.filter.map((function(e){return{fil:{bool:t.checked,mess:e.fil.mess}}})),sort:{quick:!1,cheaper:!1}};if("NO_ALL"===t.type){var r=e.filter.filter((function(e){return"\u0412\u0441\u0435"!==e.fil.mess})),n=r.filter((function(e){return e.fil.bool}));return 4===n.length?{filter:e.filter.map((function(e){return"\u0412\u0441\u0435"===e.fil.mess?{fil:{mess:e.fil.mess,bool:!0}}:e})),sort:{quick:!1,cheaper:!1}}:{filter:e.filter.map((function(e){return"\u0412\u0441\u0435"===e.fil.mess?{fil:{mess:e.fil.mess,bool:!1}}:e})),sort:{quick:!1,cheaper:!1}}}return"NO_STOPS"===t.type?{filter:e.filter.map((function(e){return"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"===e.fil.mess?{fil:{mess:e.fil.mess,bool:t.checked}}:e})),sort:{quick:!1,cheaper:!1}}:"ONE"===t.type?{filter:e.filter.map((function(e){return"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"===e.fil.mess?{fil:{mess:e.fil.mess,bool:t.checked}}:e})),sort:{quick:!1,cheaper:!1}}:"TWO"===t.type?{filter:e.filter.map((function(e){return"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"===e.fil.mess?{fil:{mess:e.fil.mess,bool:t.checked}}:e})),sort:{quick:!1,cheaper:!1}}:"THREE"===t.type?{filter:e.filter.map((function(e){return"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"===e.fil.mess?{fil:{mess:e.fil.mess,bool:t.checked}}:e})),sort:{quick:!1,cheaper:!1}}:"LESS"===t.type?{filter:e.filter.map((function(e){return e})),sort:{quick:!1,cheaper:!0}}:"QUICK"===t.type?{filter:e.filter.map((function(e){return e})),sort:{quick:!0,cheaper:!1}}:e},I=Object(u.b)(B);a.a.render(Object(c.jsx)(o.a,{store:I,children:Object(c.jsx)(A,{})}),document.getElementById("root"))},81:function(e,t,r){}},[[132,1,2]]]);
//# sourceMappingURL=main.0b2c3e80.chunk.js.map