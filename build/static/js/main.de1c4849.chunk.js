(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n,c,o,r,l,i,s,d=t(0),k=t.n(d),m=t(2),u=t.n(m),b=(t(15),t(3)),h=t(4),E=t(7),f=t(5),C=t(8),p=t(6),v=t.n(p),M=(t(16),[0,1,2,3,4,5,6,7,8,9,10,11]),g=[0,4,7,11],w=[-1,0,1],y=-1,B=-1;function N(){n=Math.floor(17*Math.random()),c=Math.floor(4*Math.random()),o=Math.floor(3*Math.random()),function(){var e;switch(n=Math.floor(17*Math.random()),c=Math.floor(4*Math.random()),o=Math.floor(3*Math.random()),n){case 12:e=1;break;case 13:e=3;break;case 14:e=6;break;case 15:e=8;break;case 16:e=10;break;default:e=n}r=(M[e]+g[c]+w[o])%12}(),function(){switch(n){case 0:l="C";break;case 1:l="C#";break;case 2:l="D";break;case 3:l="D#";break;case 4:l="E";break;case 5:l="F";break;case 6:l="F#";break;case 7:l="G";break;case 8:l="G#";break;case 9:l="A";break;case 10:l="A#";break;case 11:l="B";break;case 12:l="Db";break;case 13:l="Eb";break;case 14:l="Gb";break;case 15:l="Ab";break;case 16:l="Bb"}switch(c){case 0:i="I";break;case 1:i="III";break;case 2:i="V";break;case 3:i="VII"}switch(o){case 0:s="b";break;case 1:s="";break;case 2:s="#"}}()}var I=function(e){function a(e){var t;return Object(b.a)(this,a),t=Object(E.a)(this,Object(f.a)(a).call(this,e)),N(),t}return Object(C.a)(a,e),Object(h.a)(a,[{key:"noteClicked",value:function(e,a){!function(e){var a;switch(e){case"C":a=0;break;case"D":a=2;break;case"E":a=4;break;case"F":a=5;break;case"G":a=7;break;case"A":a=9;break;case"B":a=11}y=a}(a)}},{key:"accidentalClicked",value:function(e,a){!function(e){var a;switch(e){case"flat":a=-1;break;case"sharp":a=1;break;default:a=0}y+=a}(a)}},{key:"checkClicked",value:function(e,a){!function(e){B=(y%=12)===r?1:0;1===B?(console.log("s\xed, correcto"),document.getElementById("si").innerHTML="s\xed, correcto",document.getElementById("no").innerHTML="",N(),document.getElementById("givenRoot").innerHTML=l,document.getElementById("givenNote").innerHTML=i+s):0===B&&(console.log("no, incorrecto"),document.getElementById("si").innerHTML="",document.getElementById("no").innerHTML="no, incorrecto");document.getElementById("br").innerHTML=""}()}},{key:"render",value:function(){var e=this;return k.a.createElement("div",{className:"App"},k.a.createElement("header",{className:"App-header"},k.a.createElement("h1",null,"The Music Theory App"),k.a.createElement("img",{src:v.a,className:"kelpy",alt:"it's kelpy"})),k.a.createElement("div",null,k.a.createElement("h3",{id:"givenNote"},i,s),k.a.createElement("h2",{id:"givenRoot"},l),k.a.createElement("h4",null,k.a.createElement("button",{className:"note",id:"C",onClick:function(a){e.noteClicked(a,"C")}},"C"),k.a.createElement("button",{className:"note",id:"D",onClick:function(a){e.noteClicked(a,"D")}},"D"),k.a.createElement("button",{className:"note",id:"E",onClick:function(a){e.noteClicked(a,"E")}},"E"),k.a.createElement("button",{className:"note",id:"F",onClick:function(a){e.noteClicked(a,"F")}},"F"),k.a.createElement("button",{className:"note",id:"G",onClick:function(a){e.noteClicked(a,"G")}},"G"),k.a.createElement("button",{className:"note",id:"A",onClick:function(a){e.noteClicked(a,"A")}},"A"),k.a.createElement("button",{className:"note",id:"B",onClick:function(a){e.noteClicked(a,"B")}},"B"),k.a.createElement("br",null),k.a.createElement("br",null),k.a.createElement("button",{className:"accidental",id:"flat",onClick:function(a){e.accidentalClicked(a,"flat")}},"b"),k.a.createElement("button",{className:"accidental",id:"sharp",onClick:function(a){e.accidentalClicked(a,"sharp")}},"#")),k.a.createElement("h4",null,k.a.createElement("button",{className:"check",id:"check",onClick:this.checkClicked},"check")),k.a.createElement("h5",{id:"si"}),k.a.createElement("h5",{id:"no"}),k.a.createElement("h5",{id:"br"},k.a.createElement("br",null)),k.a.createElement("h6",null,k.a.createElement("br",null),k.a.createElement("br",null))))}}]),a}(d.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(k.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,a,t){e.exports=t.p+"static/media/kelpy.c3df38dd.png"},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.de1c4849.chunk.js.map