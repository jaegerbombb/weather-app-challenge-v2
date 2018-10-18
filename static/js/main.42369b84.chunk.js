(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(53),l=n.n(o),i=(n(71),n(30)),c=n(31),u=n(34),d=n(32),s=n(35),p=n(149),m=n(150),h=n(11),E=n(54),f=n(33),g=n(20),b={UPDATE_DATA:"UPDATE_DATA",LOADING_DATA:"LOADING_DATA",UPDATE_SEARCH:"UPDATE_SEARCH",UPDATE_SEARCH_PRETTY:"UPDATE_SEARCH_PRETTY"},y=Object(h.c)({weatherData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.UPDATE_DATA:return Object(g.a)({},e,{weather:t.data,isLoading:t.isLoading});case b.LOADING_DATA:return Object(g.a)({},e,{isLoading:t.isLoading});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{searchTerm:"London",isRenderPrettyTable:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.UPDATE_SEARCH:return Object(g.a)({},e,{searchTerm:t.searchTerm});case b.UPDATE_SEARCH_PRETTY:return Object(g.a)({},e,{isRenderPrettyTable:t.isRenderPrettyTable});default:return e}}}),w={search:{searchTerm:"London"},weatherData:{isLoading:!1,weather:{list:[{clouds:{all:76},dt:1539313200,dt_txt:"2018-10-12 03:00:00",main:{temp:287.75,temp_min:287.75,temp_max:288.149,pressure:1014.78,sea_level:1022.3},rain:{"3h":.05},sys:{pod:"n"},weather:[{description:"cloudy"}],wind:{speed:6.61,deg:198.501}},{clouds:{all:64},dt:1539324e3,dt_txt:"2018-10-12 06:00:00",main:{temp:288.03,temp_min:288.03,temp_max:288.327,pressure:1014.98,sea_level:1022.56},rain:{},sys:{pod:"n"},weather:[{description:"rainy"}],wind:{speed:7.36,deg:188}},{clouds:{all:100},dt:1539334800,dt_txt:"2018-10-12 09:00:00",main:{temp:288.82,temp_min:288.82,temp_max:289.022,pressure:1015.65,sea_level:1023.1},rain:{"3h":.935},sys:{pod:"d"},weather:[{description:"clear"}],wind:{speed:7.83,deg:188.001}}]}}},T=n(5),v=n(6),D={primaryBgColourLight:"#32afb7",primaryBgColourDark:"#198e9c",primaryFontColour:"#fff",primaryFontColourDark:"#363636",primaryButtonColour:"#2ca6ae",secondaryBgColourLight:"#04a7fc",secondaryBgColourDark:"#0342a6"};function A(){var e=Object(T.a)(["\n  color: ",";\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  :hover {\n    color: ",";\n  }\n"]);return A=function(){return e},e}function _(){var e=Object(T.a)(["\n  display: inline-block;\n  padding: 10px;\n  color: white;\n  border: white 2px solid;\n  border-radius: 2px;\n  font-weight: bold;\n"]);return _=function(){return e},e}function O(){var e=Object(T.a)(["\n  background-color: rgba(255,255,255,.15);\n  box-shadow: 0 4px 7px 0 rgba(0,0,0,0.2);\n  padding: 0 30px 45px;\n  margin-bottom: 30px;\n"]);return O=function(){return e},e}v.a.div(O());var P=v.a.span(_()),j=v.a.button(A(),function(e){return e.selected?D.primaryFontColourDark:D.primaryFontColour},function(e){return e.selected?"white":D.primaryButtonColour},function(e){return e.selected?D.primaryFontColourDark:D.primaryFontColour},D.primaryFontColourDark),C=n(62),x=n.n(C),R=n(64),k=n.n(R),L=n(10),S=n.n(L),U=n(63),W=n.n(U),B=n(43),I=n.n(B),F=n(60),H=n.n(F);function N(){var e=Object(T.a)(["\n  width: 100%;\n  font-weight: lighter;\n"]);return N=function(){return e},e}function M(){var e=Object(T.a)(["\n  text-align: right;\n"]);return M=function(){return e},e}var G=v.a.tbody(M()),Y=v.a.table(N()),z=function(e){return a.a.createElement("span",null,a.a.createElement("li",null,"Time: ",e.dt_txt),a.a.createElement("li",null,"Temperature: ",Math.round(e.main.temp-273.15)),a.a.createElement("li",null,"Description: ",e.weather[0].description),a.a.createElement("li",null,"Wind speed: ",e.wind.speed))},J=function(e){return a.a.createElement(Y,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Time"),a.a.createElement("th",null,"Temperature"),a.a.createElement("th",null,"Description"),a.a.createElement("th",null,"Wind speed"))),a.a.createElement(G,null,e.map(function(e,t){return X(e,t)})))},X=function(e,t){return a.a.createElement("tr",{key:t},a.a.createElement("td",null,e.dt_txt),a.a.createElement("td",null,Math.round(e.main.temp-273.15)),a.a.createElement("td",null,e.weather[0].description),a.a.createElement("td",null,e.wind.speed))},q=function(e){return a.a.createElement(H.a,null,a.a.createElement(x.a,null,a.a.createElement(W.a,null,a.a.createElement(I.a,null,a.a.createElement(S.a,null,"Time"),a.a.createElement(S.a,null,"Temperature"),a.a.createElement(S.a,null,"Description"),a.a.createElement(S.a,null,"Wind speed"))),a.a.createElement(k.a,null,e.map(function(e,t){return a.a.createElement(I.a,{key:t},a.a.createElement(S.a,null,e.dt_txt),a.a.createElement(S.a,{numeric:!0},Math.round(e.main.temp-273.15)),a.a.createElement(S.a,{numeric:!0},e.weather[0].description),a.a.createElement(S.a,{numeric:!0},e.wind.speed))}))))};function V(){var e=Object(T.a)(["\n  text-align: center;\n  font-size: 24px;\n  margin-bottom: 10px;\n"]);return V=function(){return e},e}var $=v.a.div(V()),K=function(e){var t=e.search,n=e.toggleRenderPretty;return console.log(e),a.a.createElement($,null,a.a.createElement("p",null,"A weather app that renders data into a simple table."),"Controls:\xa0",a.a.createElement(j,{displayId:"simpleSwitch",selected:!t.isRenderPrettyTable,onClick:function(){return n(!1)}},"Simple"),a.a.createElement(j,{displayId:"prettySwitch",selected:t.isRenderPrettyTable,onClick:function(){return n(!0)}},"Pretty"))};function Q(){var e=Object(T.a)(["\n  font-weight: bold;\n  font-size: 22px;\n  margin-bottom: 5px;\n"]);return Q=function(){return e},e}function Z(){var e=Object(T.a)(["\n  margin: 5px;\n  text-align: center;\n"]);return Z=function(){return e},e}var ee=v.a.div(Z()),te=v.a.div(Q()),ne=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).toggleDataCall=function(e){},n.toggleRenderPretty=function(e){n.props.updatePrettyPreference(e)},n.generateWeatherDataList=function(e){return n.props.search.isRenderPrettyTable,e.map(function(e,t){return a.a.createElement("p",{key:t},"lolol",z(e))})},n.renderTable=function(e){return n.props.search.isRenderPrettyTable?q(e):J(e)},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchWeatherData()}},{key:"componentWillReceiveProps",value:function(){console.log("componentWillReceiveProps",this.props)}},{key:"render",value:function(){var e=this.props,t=e.isLoading,n=e.dataError,r=e.weather,o=e.search;return t?a.a.createElement("p",null,"Loading..."):n?a.a.createElement("p",null,"Something went wrong, please refresh or try again"):a.a.createElement(ee,null,a.a.createElement(K,{search:o,toggleRenderPretty:this.toggleRenderPretty}),r.list&&a.a.createElement("div",null,a.a.createElement(te,null,"Location: ",o.searchTerm),this.renderTable(r.list),a.a.createElement("ul",null)))}}]),t}(r.Component),re=Object(f.b)(function(e){return{weather:e.weatherData.weather,isLoading:e.weatherData.isLoading,search:e.search}},function(e){return{fetchWeatherData:function(t){return e(function(e){return e({type:b.LOADING_DATA,isLoading:!0}),fetch("".concat("http://api.openweathermap.org/data/2.5/forecast?q=London&mode=json","&APPID=").concat("a7584bd1222aab0562a28d8598854c00")).then(function(e){return e.json()}).then(function(t){e({type:b.UPDATE_DATA,isLoading:!1,data:t})})})},updatePrettyPreference:function(t){return e({type:b.UPDATE_SEARCH_PRETTY,isRenderPrettyTable:t})}}})(ne);function ae(){var e=Object(T.a)(["\n  margin: 10px;\n"]);return ae=function(){return e},e}function oe(){var e=Object(T.a)(["\n  background: linear-gradient(",", ",");\n  background-color: ",";\n  color: ",";\n"]);return oe=function(){return e},e}var le=v.a.div(oe(),D.primaryBgColourDark,D.primaryBgColourLight,D.primaryBgColourLight,D.primaryFontColour),ie=Object(v.a)(P)(ae()),ce=function(){return a.a.createElement(le,null,a.a.createElement(ie,null,"Weather Toggle App"),a.a.createElement(re,null))},ue=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d)(Object(h.a)(E.a)),de=Object(h.e)(y,w,ue),se=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement(f.a,{store:de},a.a.createElement(p.a,null,a.a.createElement(m.a,{path:"/",component:ce})))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,n){e.exports=n(147)},71:function(e,t,n){}},[[66,2,1]]]);
//# sourceMappingURL=main.42369b84.chunk.js.map