(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{101:function(e,t,a){e.exports={container:"Chart_container__1fW7N"}},102:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2Mdq1"}},20:function(e,t,a){e.exports={container:"Cards_container__NY4_9",card:"Cards_card__2VdtW",infected:"Cards_infected___QsbE",recovered:"Cards_recovered__fLhQ6",deaths:"Cards_deaths__2K8S7"}},241:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(93),o=a.n(c),s=a(10),i=a.n(s),u=a(16),d=a(3),l=a(4),f=a(7),p=a(6),j=a(20),b=a.n(j),h=a(259),v=a(263),x=a(260),m=a(261),O=a(44),g=a.n(O),y=a(45),C=a.n(y),_=a(2),w=function(e){var t=e.data,a=t.confirmed,r=t.recovered,n=t.deaths,c=t.lastUpdate;return a?Object(_.jsx)("div",{className:b.a.container,children:Object(_.jsxs)(h.a,{container:!0,spacing:3,justify:"center",children:[Object(_.jsx)(h.a,{item:!0,component:v.a,xs:12,md:3,className:C()(b.a.card,b.a.infected),children:Object(_.jsxs)(x.a,{children:[Object(_.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(_.jsx)(m.a,{variant:"h5",children:Object(_.jsx)(g.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(_.jsx)(m.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(m.a,{variant:"body2",children:"Number of Active Cases of Covid-19"})]})}),Object(_.jsx)(h.a,{item:!0,component:v.a,xs:12,md:3,className:C()(b.a.card,b.a.recovered),children:Object(_.jsxs)(x.a,{children:[Object(_.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(_.jsx)(m.a,{variant:"h5",children:Object(_.jsx)(g.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(_.jsx)(m.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(m.a,{variant:"body2",children:"Number of Recovered Cases of Covid-19"})]})}),Object(_.jsx)(h.a,{item:!0,component:v.a,xs:12,md:3,className:C()(b.a.card,b.a.deaths),children:Object(_.jsxs)(x.a,{children:[Object(_.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(_.jsx)(m.a,{variant:"h5",children:Object(_.jsx)(g.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(_.jsx)(m.a,{color:"textSecondary",children:new Date(c).toDateString()}),Object(_.jsx)(m.a,{variant:"body2",children:"Number of Death Cases of Covid-19"})]})})]})}):"Loading...."},k=a(28),S=a(64),D=a(46),N=a.n(D),A="https://covid19.mathdro.id/api",I=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,n,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=A,t&&(a="".concat(A,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,o=n.recovered,s=n.deaths,u=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:u});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(A,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,r=e.reportDate;return{confirmed:t.total,deaths:a.total,date:r}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(A,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),R=a(101),J=a.n(R),L=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=e.country,s=Object(r.useState)({}),d=Object(k.a)(s,2),l=d[0],f=d[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=a?Object(_.jsx)(S.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,n.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null,j=l[0]?Object(_.jsx)(S.b,{data:{labels:l.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0},{data:l.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null;return Object(_.jsx)("div",{className:J.a.container,children:o?p:j})},U=a(264),V=a(262),K=a(102),M=a.n(K),P=function(e){var t=e.handleCountryChange,a=Object(r.useState)([]),n=Object(k.a)(a,2),c=n[0],o=n[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(_.jsx)(U.a,{className:M.a.formControl,children:Object(_.jsxs)(V.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(_.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(_.jsx)("option",{value:e,children:e},t)}))]})})},Q=a(63),W=a.n(Q),q=a.p+"static/media/image.8e7c5714.png",G=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(_.jsxs)("div",{className:W.a.container,children:[Object(_.jsx)("img",{className:W.a.image,src:q,alt:"COVID-19"}),Object(_.jsx)(w,{data:t}),Object(_.jsx)(P,{handleCountryChange:this.handleCountryChange}),Object(_.jsx)(L,{data:t,country:a})]})}}]),a}(n.a.Component);o.a.render(Object(_.jsx)(G,{}),document.getElementById("root"))},63:function(e,t,a){e.exports={container:"App_container__35KAx",image:"App_image__3SJa5"}}},[[241,1,2]]]);
//# sourceMappingURL=main.d3402b45.chunk.js.map