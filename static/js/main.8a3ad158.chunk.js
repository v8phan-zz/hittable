(this.webpackJsonphittable=this.webpackJsonphittable||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(7),s=a.n(i),r=(a(59),a(44)),d=a(45),b=a(46),l=a(24),c=a(49),S=a(48),h=(a(60),a(33)),C=a.n(h),v=a(4),g=[{State:"Alabama",Abbrev:"Ala.",Code:"US-AL"},{State:"Alaska",Abbrev:"Alaska",Code:"US-AK"},{State:"Arizona",Abbrev:"Ariz.",Code:"US-AZ"},{State:"Arkansas",Abbrev:"Ark.",Code:"US-AR"},{State:"California",Abbrev:"Calif.",Code:"US-CA"},{State:"Colorado",Abbrev:"Colo.",Code:"US-CO"},{State:"Connecticut",Abbrev:"Conn.",Code:"US-CT"},{State:"Delaware",Abbrev:"Del.",Code:"US-DE"},{State:"District of Columbia",Abbrev:"D.C.",Code:"US-DC"},{State:"Florida",Abbrev:"Fla.",Code:"US-FL"},{State:"Georgia",Abbrev:"Ga.",Code:"US-GA"},{State:"Hawaii",Abbrev:"Hawaii",Code:"US-HI"},{State:"Idaho",Abbrev:"Idaho",Code:"US-ID"},{State:"Illinois",Abbrev:"Ill.",Code:"US-IL"},{State:"Indiana",Abbrev:"Ind.",Code:"US-IN"},{State:"Iowa",Abbrev:"Iowa",Code:"US-IA"},{State:"Kansas",Abbrev:"Kans.",Code:"US-KS"},{State:"Kentucky",Abbrev:"Ky.",Code:"US-KY"},{State:"Louisiana",Abbrev:"La.",Code:"US-LA"},{State:"Maine",Abbrev:"Maine",Code:"US-ME"},{State:"Maryland",Abbrev:"Md.",Code:"US-MD"},{State:"Massachusetts",Abbrev:"Mass.",Code:"US-MA"},{State:"Michigan",Abbrev:"Mich.",Code:"US-MI"},{State:"Minnesota",Abbrev:"Minn.",Code:"US-MN"},{State:"Mississippi",Abbrev:"Miss.",Code:"US-MS"},{State:"Missouri",Abbrev:"Mo.",Code:"MO"},{State:"Montana",Abbrev:"Mont.",Code:"US-MT"},{State:"Nebraska",Abbrev:"Nebr.",Code:"US-NE"},{State:"Nevada",Abbrev:"Nev.",Code:"US-NV"},{State:"New Hampshire",Abbrev:"N.H.",Code:"US-NH"},{State:"New Jersey",Abbrev:"N.J.",Code:"US-NJ"},{State:"New Mexico",Abbrev:"N.M.",Code:"US-NM"},{State:"New York",Abbrev:"N.Y.",Code:"US-NY"},{State:"North Carolina",Abbrev:"N.C.",Code:"US-NC"},{State:"North Dakota",Abbrev:"N.D.",Code:"US-ND"},{State:"Ohio",Abbrev:"Ohio",Code:"US-OH"},{State:"Oklahoma",Abbrev:"Okla.",Code:"US-OK"},{State:"Oregon",Abbrev:"Ore.",Code:"US-OR"},{State:"Pennsylvania",Abbrev:"Pa.",Code:"US-PA"},{State:"Rhode Island",Abbrev:"R.I.",Code:"US-RI"},{State:"South Carolina",Abbrev:"S.C.",Code:"US-SC"},{State:"South Dakota",Abbrev:"S.D.",Code:"US-SD"},{State:"Tennessee",Abbrev:"Tenn.",Code:"US-TN"},{State:"Texas",Abbrev:"Tex.",Code:"US-TX"},{State:"Utah",Abbrev:"Utah",Code:"US-UT"},{State:"Vermont",Abbrev:"Vt.",Code:"US-VT"},{State:"Virginia",Abbrev:"Va.",Code:"US-VA"},{State:"Washington",Abbrev:"Wash.",Code:"US-WA"},{State:"West Virginia",Abbrev:"W.Va.",Code:"US-WV"},{State:"Wisconsin",Abbrev:"Wis.",Code:"US-WI"},{State:"Wyoming",Abbrev:"Wyo.",Code:"US-WY"}],u=a(116),A=a(117),p=a(10),m=function(e){Object(c.a)(a,e);var t=Object(S.a)(a);function a(e){var o;return Object(d.a)(this,a),(o=t.call(this,e)).state={city:"",stateinput:"",iconState:"",stateDisplayMessage:"Hittable?"},o.handleChange=o.handleChange.bind(Object(l.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(l.a)(o)),o}return Object(b.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){"geolocation"in navigator?(console.log("Available"),navigator.geolocation.getCurrentPosition(function(e){var t=this;console.log("Latitude is :",e.coords.latitude),console.log("Longitude is :",e.coords.longitude),C.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.coords.latitude,"&lon=").concat(e.coords.longitude,"&units=imperial&appid=02d2c0bc0569091f6d80053853dfabd6")).then((function(e){console.log(e),"heavy rain"===e.data.weather[0].description?t.setState({stateDisplayMessage:"Too rainy!"}):e.data.main.temp<55?t.setState({stateDisplayMessage:"Too cold!"}):e.data.wind.speed>10?t.setState({stateDisplayMessage:"Too windy!"}):t.setState({stateDisplayMessage:"It's ".concat(e.data.main.temp," degrees with average winds of ").concat(e.data.wind.speed," mph. Hittable!")}),t.setState({iconState:e.data.weather[0].icon}),console.log(t.state.iconState)})).catch((function(e){console.log(e)}))}.bind(this))):console.log("Not Available")}},{key:"handleSubmit",value:function(e){var t=this;alert("You are in "+this.state.city+", "+this.state.stateinput);var a=g.find((function(e){return e.State===t.state.stateinput}));console.log(a.Code),C.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.city,",").concat(a.Code,"&units=imperial&appid=02d2c0bc0569091f6d80053853dfabd6")).then((function(e){"heavy rain"===e.data.weather[0].description?t.setState({stateDisplayMessage:"Too rainy!"}):e.data.main.temp<60?t.setState({stateDisplayMessage:"Too cold!"}):e.data.wind.speed>10?t.setState({stateDisplayMessage:"Too windy!"}):t.setState({stateDisplayMessage:"It's ".concat(e.data.main.temp," degrees with average winds of ").concat(e.data.wind.speed," mph. Hittable!")}),t.setState({iconState:e.data.weather[0].icon}),console.log(e.data)})).catch((function(e){window.alert("Did you spell out and capitalize the state name?"),console.log(e)})),e.preventDefault()}},{key:"componentDidUpdate",value:function(){console.log(this.state.city+", "+this.state.stateinput)}},{key:"render",value:function(){var e=this.props.classes;return Object(p.jsxs)("div",{className:e.bigDiv,children:[Object(p.jsx)("h1",{children:"Can I play tennis today?"}),Object(p.jsx)("p",{children:"Enter your location:"}),Object(p.jsxs)("form",{onSubmit:this.handleSubmit,className:e.form,children:[Object(p.jsx)(u.a,{variant:"filled",type:"text",name:"city",value:this.state.city,label:"City",onChange:this.handleChange,margin:"normal",fullWidth:"true"}),Object(p.jsx)(u.a,{variant:"filled",type:"text",name:"stateinput",value:this.state.stateinput,label:"State",id:"outlined-basic",onChange:this.handleChange,margin:"normal",fullWidth:"true"}),Object(p.jsx)(A.a,{size:"large",className:e.button,type:"submit",variant:"outlined",children:"Can I hit?"})]}),Object(p.jsx)("p",{className:e.displaymessage,children:this.state.stateDisplayMessage}),Object(p.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(this.state.iconState,"@2x.png"),alt:"weather icon"})]})}}]),a}(n.a.Component),U=Object(v.a)({bigDiv:{display:"flex",flexWrap:"wrap",flexDirection:"column",textAlign:"center",alignItems:"center",margin:50},form:{textAlign:"center"},button:{marginTop:20,backgroundColor:"lightgreen","&:hover":{backgroundColor:"green"}},displaymessage:{textAlign:"center"}})(m),y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,119)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),o(e),n(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("root")),y()}},[[83,1,2]]]);
//# sourceMappingURL=main.8a3ad158.chunk.js.map