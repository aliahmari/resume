(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),r=a.n(i),o=(a(34),a(2)),l=a(3),s=a(5),u=a(4),m=a(6),d=a(7),f=(a(35),a(36),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",{className:"fullpage ".concat(this.props.className||"")},e)}}]),t}(n.Component)),b=a(25),p=a(14),h=a(26),v=a(8),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"-10px",transform:"translateY(-65px)"}},c.a.createElement(v.Link,{activeClass:"active",to:"About",spy:!0,smooth:!0,offset:50,delay:0,duration:500,onSetActive:this.handleSetActive},c.a.createElement(p.a,{style:{fontSize:"40px"},className:"ScrollDown",icon:h.a})),c.a.createElement(v.Element,{name:"About",className:"element"}))}}]),t}(n.Component),k=a(27),y=a.n(k),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f,{className:"first"},c.a.createElement(y.a,{followMouse:!1,snowColor:"#000"}),c.a.createElement("h1",{className:"title"},d.title),c.a.createElement("h2",{className:"subtitle"},d.subtitle),c.a.createElement("div",{className:"socialicons"},Object.keys(d.links).map(function(e){return c.a.createElement("div",{className:"icon"},c.a.createElement(b.SocialIcon,{url:d.links[e]}))}))),c.a.createElement(E,null),c.a.createElement(v.Element,{name:"About",className:"element"}))}}]),t}(n.Component),j=(a(55),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(f,{className:"second"},c.a.createElement("h3",{className:"title"},d.sections[0].title),c.a.createElement("div",{className:"BackgroundBox"},c.a.createElement("p",{className:"aboutcontent"},d.sections[0].items[0].content))),c.a.createElement(v.Element,{name:"Skills",className:"element"}))}}]),t}(n.Component)),O=(a(56),a(28)),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.skill;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"icon-wrapper"},c.a.createElement(p.a,{icon:O.a})),c.a.createElement("div",{className:"skill-title-wrapper"},c.a.createElement("h4",null,e.content.title)),c.a.createElement("div",{className:"contactMe"},c.a.createElement("a",{href:"https://t.me/ali_ahmari",className:"aContactme"},"Contact Me!")))}}]),t}(n.Component),N=(a(57),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(f,{className:"third"},c.a.createElement("h3",{className:"title"},d.sections[1].title),c.a.createElement("div",{className:"cardWrapper"},d.sections[1].items.map(function(e){return c.a.createElement(C,{skill:e})})))}}]),t}(n.Component)),w=(a(58),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={btnColor:"#fff",textColor:"#000",firstSection:"linear-gradient(75deg, #f6f6f6, #fefefe) repeat-x",secondSection:"#fff",tihrdSection:"linear-gradient(75deg, #f6f6f6, #fefefe) repeat-x",btnBorder:"1px solid",btnRadius:"5px",btnBackground:"none",navBackgroundColor:"#2a3e55",innerNavBg:"none"},a.ChangeColor=function(){a.setState({btnColor:"#32b4fd"===a.state.btnColor?"#fff":"#32b4fd",btnBackground:"none"===a.state.btnBackground?"#fff":"none",navBackgroundColor:"#2a3e55"===a.state.navBackgroundColor?"#fff":"#2a3e55",innerNavBg:"none"===a.state.innerNavBg?"#f6f5f4":"none",btnBorder:"1px solid"===a.state.btnBorder?"none":"1px solid"})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{background:this.state.navBackgroundColor},className:"navigation"},c.a.createElement("div",{style:{background:this.state.innerNavBg},className:"innerNav"},c.a.createElement(v.Link,{activeClass:"active",to:"About",spy:!0,smooth:!0,offset:50,delay:0,duration:500,onSetActive:this.handleSetActive},c.a.createElement("a",{style:{color:this.state.btnColor},className:"stickyNav"},"About")),c.a.createElement(v.Link,{activeClass:"active",to:"Skills",spy:!0,smooth:!0,offset:50,delay:0,duration:500,onSetActive:this.handleSetActive},c.a.createElement("a",{style:{color:this.state.btnColor},className:"stickyNav"},"Skills")),c.a.createElement("a",{style:{color:this.state.btnColor,border:this.state.btnBorder},className:"stickyNav ChangeColor",onClick:function(){e.ChangeColor()}},"Click Here!")))}}]),t}(n.Component)),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,null),c.a.createElement(g,null),c.a.createElement(j,null),c.a.createElement(N,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports={title:"Hello, I'm Ali!",subtitle:"Social media expert at NightSky L.L.C",links:{telegram:"https://t.me/ali_ahmari",linkedin:"https://ir.linkedin.com/in/ali-ahmari-87110bbb",twitter:"https://twitter.com/aliahmarix"},sections:[{title:"About",items:[{type:"p",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus purus. Fermentum dui faucibus in ornare quam. Consectetur a erat nam at lectus urna duis convallis convallis. Consequat mauris nunc congue nisi. Lacus viverra vitae congue eu consequat ac felis donec. Quam pellentesque nec nam aliquam sem. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Auctor urna nunc id cursus. Eu lobortis elementum nibh tellus."}]},{title:"skills",items:[{type:"card",content:{image:"faJs",title:"React"}},{type:"card",content:{image:"faJs",title:"Javascript"}},{type:"card",content:{image:"faJs",title:"HTML"}},{type:"card",content:{image:"faJs",title:"CSS"}}]}]}}},[[29,1,2]]]);
//# sourceMappingURL=main.31194b79.chunk.js.map