function t(t,i,e,n){Object.defineProperty(t,i,{get:e,set:n,enumerable:!0,configurable:!0})}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},s=i.parcelRequirec561;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var s={id:t,exports:{}};return e[t]=s,i.call(s.exports,s,s.exports),s.exports}var h=new Error("Cannot find module '"+t+"'");throw h.code="MODULE_NOT_FOUND",h}).register=function(t,i){n[t]=i},i.parcelRequirec561=s),s.register("bXuNP",(function(i,e){var n,s;t(i.exports,"register",(()=>n),(t=>n=t)),t(i.exports,"resolve",(()=>s),(t=>s=t));var h={};n=function(t){for(var i=Object.keys(t),e=0;e<i.length;e++)h[i[e]]=t[i[e]]},s=function(t){var i=h[t];if(null==i)throw new Error("Could not resolve bundle with id "+t);return i}})),s("bXuNP").register(JSON.parse('{"ct2W2":"index.8ca92d4f.js","7FnEd":"background.5a8e4b04.png","6drKZ":"numbers.2a0ad200.png"}'));var h;s.register("kPq84",(function(i,e){var n;t(i.exports,"getBundleURL",(()=>n),(t=>n=t));var s={};function h(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(t){var i=s[t];return i||(i=function(){try{throw new Error}catch(i){var t=(""+i.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return h(t[2])}return"/"}(),s[t]=i),i}})),h=s("kPq84").getBundleURL("ct2W2")+s("bXuNP").resolve("7FnEd");class r{constructor(t){this.canvasSize=t,this.pointsWidth=t.width/5;const i=(t=>{const i=[];let e=0;for(let n=0;n<5;n++){const n=e+t;i.push({start:e,end:n}),e+=t}return i})(this.pointsWidth);this.points=i,this.backgroundImg=new Image,this.backgroundImg.src=h}draw(t){t.drawImage(this.backgroundImg,0,0,this.canvasSize.width,this.canvasSize.height)}}let o;var a,l={number00:{x:5,y:5,w:66,h:91},number01:{x:81,y:5,w:50,h:91},number02:{x:141,y:5,w:66,h:91},number03:{x:217,y:5,w:66,h:91},number04:{x:293,y:5,w:66,h:91},number05:{x:369,y:5,w:66,h:91},number06:{x:445,y:5,w:66,h:91},number07:{x:521,y:5,w:66,h:91},number08:{x:597,y:5,w:66,h:91},number09:{x:673,y:5,w:66,h:91}};a=s("kPq84").getBundleURL("ct2W2")+s("bXuNP").resolve("6drKZ");class c{constructor(t){this.isPlaying=!0,this.players=t,this.pointsImage=new Image,this.pointsImage.src=a}update(){this.players.forEach((t=>{t.timberman.health<=0&&(this.isPlaying=!1,t.timberman.health=0),t.timberman.facing===t.tree.woodenLogs[0].branchFacing&&(this.isPlaying=!1)}))}draw(t){this.players.forEach((i=>{t.save(),t.fillStyle="orange",t.fillRect(i.timberman.healthBarPos.x,i.timberman.healthBarPos.y,i.timberman.health,i.timberman.healthBarSize.height),t.restore();const e=i.timberman.points.toString().split("");if(1===e.length){const e=l[`number0${i.timberman.points.toString()}`];t.drawImage(this.pointsImage,e.x,e.y,e.w,e.h,i.timberman.pointsPosition.x,i.timberman.pointsPosition.y,i.timberman.pointsSize.width,i.timberman.pointsSize.height)}else e.forEach(((e,n)=>{const s=l[`number0${e}`];t.drawImage(this.pointsImage,s.x,s.y,s.w,s.h,i.timberman.pointsPosition.x+n*i.timberman.pointsSize.width,i.timberman.pointsPosition.y,i.timberman.pointsSize.width,i.timberman.pointsSize.height)}))}))}}let d;var p,w;(w=p||(p={}))[w.LEFT=0]="LEFT",w[w.RIGHT=1]="RIGHT",w[w.NONE=2]="NONE";var g=class{update(t){}draw(t,i){}handleInputDOWN(t){}};var u=class extends g{constructor(t,i,e,n){super(),this.tmSize={width:100,height:100},this.positions=((t,i)=>{let e=o.points[1].start+o.pointsWidth/2;const n={x:e-i.width/2,y:t.height-150};return e=o.points[3].start+o.pointsWidth/2,[n,{x:e-i.width/2,y:t.height-150}]})(t,this.tmSize),this.facing=p.RIGHT,this.keyboardMap=n,this.health=100,this.points=0,this.healthBarPos=i,this.healthBarSize={width:this.health,height:30},this.pointsPosition=e,this.pointsSize={width:30,height:40}}update(t){this.health>100&&(this.health=100),this.health<0&&(this.health=0),this.health-=16*t}draw(t){const i=this.facing===p.LEFT?this.positions[0]:this.positions[1];t.save(),t.fillStyle="red",t.fillRect(i.x,i.y,this.tmSize.width,this.tmSize.height),t.restore()}handleInputDOWN(t){const i=this.keyboardMap[t];i===p.LEFT&&(this.facing=p.LEFT,this.health+=12*.2,this.points++),i===p.RIGHT&&(this.facing=p.RIGHT,this.health+=12*.2,this.points++)}};const m={ArrowLeft:p.LEFT,ArrowRight:p.RIGHT};p.LEFT,p.LEFT,p.RIGHT,p.RIGHT;var b=class{constructor(t,i,e=!1){if(this.position=t,this.wlSize=i,e)this.branchFacing=p.LEFT;else{const t=Math.floor(3*Math.random())+1;this.branchFacing=1===t?p.LEFT:2===t?p.RIGHT:p.NONE}this.branchSize={width:100,height:30}}draw(t){if(t.save(),t.fillStyle="blue",t.fillRect(this.position.x,this.position.y,this.wlSize.width,this.wlSize.height),t.restore(),this.branchFacing!==p.NONE){t.save(),t.fillStyle="green";const i=this.branchFacing===p.LEFT?this.position.x-this.branchSize.width:this.position.x+this.branchSize.width;t.fillRect(i,this.position.y,this.branchSize.width,this.branchSize.height),t.restore()}}};var f=class extends g{constructor(t,i,e=10){super(),this.woodenLogs=((t,i=10)=>{const e=[];for(let n=0;n<i;n++){const i={width:100,height:100},s={x:o.points[2].start+o.pointsWidth/2-i.width/2,y:t.height-150-105*n};e.push(new b(s,i,0===n))}return e})(t,e),this.keyboardMap=i}draw(t){this.woodenLogs.forEach((i=>i.draw(t)))}handleInputDOWN(t){const i=this.keyboardMap[t];if(i===p.LEFT||i===p.RIGHT){this.woodenLogs.shift(),this.woodenLogs.forEach((t=>{t.position.y+=t.wlSize.height+5}));const t={width:100,height:100},i={x:o.points[2].start+o.pointsWidth/2-t.width/2,y:o.canvasSize.height-150-945};this.woodenLogs.push(new b(i,t))}}};var y=class extends g{constructor(t){super(),this.position=t}draw(t,i){const e=(1/i).toFixed(2);t.font="15px Arial",t.fillStyle="black",t.fillText(`FPS:${e}`,this.position.x,this.position.y)}};window.onload=()=>{const t=document.getElementById("canvas-game"),i=t.getContext("2d"),e={width:t.width,height:t.height};((t={width:800,height:900})=>{o=new r(t)})(e);const n=new y({x:50,y:50}),s=new u(e,{x:50,y:100},{x:50,y:145},m),h=new f(e,m,10),a=[n,s,h];(t=>{d=new c(t)})([{timberman:s,tree:h,keyboardMap:m}]);let l=0;const p=n=>{const s=(n-l)/1e3;l=n,i.clearRect(0,0,t.width,t.height),o.draw(i),d.isPlaying?(d.draw(i),a.forEach((t=>{t.draw(i,s),t.update(s)})),d.update()):(i.font="15px Arial",i.fillStyle="black",i.fillText("Game Over...",e.width/2-50,e.height/2-25)),window.requestAnimationFrame(p)};window.requestAnimationFrame(p),document.body.addEventListener("keydown",(t=>{d.isPlaying&&a.forEach((i=>i.handleInputDOWN(t.key)))}))};
//# sourceMappingURL=index.8ca92d4f.js.map
