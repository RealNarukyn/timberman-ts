function t(t,e,i,s){Object.defineProperty(t,e,{get:i,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},s={},n=e.parcelRequirec561;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in s){var e=s[t];delete s[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var h=new Error("Cannot find module '"+t+"'");throw h.code="MODULE_NOT_FOUND",h}).register=function(t,e){s[t]=e},e.parcelRequirec561=n),n.register("bXuNP",(function(e,i){var s,n;t(e.exports,"register",(()=>s),(t=>s=t)),t(e.exports,"resolve",(()=>n),(t=>n=t));var h={};s=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)h[e[i]]=t[e[i]]},n=function(t){var e=h[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),n("bXuNP").register(JSON.parse('{"ct2W2":"index.7a5a5380.js","7FnEd":"background.5a8e4b04.png","6drKZ":"numbers.2a0ad200.png","5QlM5":"man.4068a63d.png","beX4X":"rip.d319d642.png","hTO6R":"branch1.67354f49.png","6gu66":"branch2.15a5c345.png","bNIP3":"trunk1.9b984a50.png","jcPC9":"trunk2.6b30af00.png","eBVmE":"stump.3165b42e.png"}'));var h;n.register("kPq84",(function(e,i){var s;t(e.exports,"getBundleURL",(()=>s),(t=>s=t));var n={};function h(t){return(""+t).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(t){var e=n[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(t)return h(t[2])}return"/"}(),n[t]=e),e}})),h=n("kPq84").getBundleURL("ct2W2")+n("bXuNP").resolve("7FnEd");class r{constructor(t){this.canvasSize=t,this.pointsWidth=t.width/5;const e=(t=>{const e=[];let i=0;for(let s=0;s<5;s++){const s=i+t;e.push({start:i,end:s}),i+=t}return e})(this.pointsWidth);this.points=e,this.backgroundImg=new Image,this.backgroundImg.src=h}draw(t){t.drawImage(this.backgroundImg,0,0,this.canvasSize.width,this.canvasSize.height)}}let a;const o={number0:{x:5,y:5,w:66,h:91},number1:{x:81,y:5,w:50,h:91},number2:{x:141,y:5,w:66,h:91},number3:{x:217,y:5,w:66,h:91},number4:{x:293,y:5,w:66,h:91},number5:{x:369,y:5,w:66,h:91},number6:{x:445,y:5,w:66,h:91},number7:{x:521,y:5,w:66,h:91},number8:{x:597,y:5,w:66,h:91},number9:{x:673,y:5,w:66,h:91}},c={breath0:{x:1059,y:5,w:517,h:403},breath1:{x:1586,y:5,w:517,h:403},chop0:{x:5,y:5,w:517,h:403},chop1:{x:532,y:5,w:517,h:403}};var d;d=n("kPq84").getBundleURL("ct2W2")+n("bXuNP").resolve("6drKZ");class g{constructor(t){this.isPlaying=!0,this.players=t,this.pointsImage=new Image,this.pointsImage.src=d}update(){this.players.forEach((t=>{t.timberman.health<=0&&(t.timberman.health=0),t.timberman.facing===t.tree.woodenLogs[0].branchFacing&&(this.isPlaying=!1)}))}draw(t){this.players.forEach((e=>{t.save(),t.fillStyle="orange",t.fillRect(e.timberman.healthBarPos.x,e.timberman.healthBarPos.y,e.timberman.health,e.timberman.healthBarSize.height),t.restore();e.timberman.points.toString().split("").forEach(((i,s)=>{const n=o[`number${i}`];t.save(),t.drawImage(this.pointsImage,n.x,n.y,n.w,n.h,e.timberman.pointsPosition.x+s*e.timberman.pointsSize.width,e.timberman.pointsPosition.y,e.timberman.pointsSize.width,e.timberman.pointsSize.height),t.restore()}))}))}}let l;var m,u;(u=m||(m={}))[u.LEFT=0]="LEFT",u[u.RIGHT=1]="RIGHT",u[u.NONE=2]="NONE";var p,w,b=class{update(t){}draw(t,e){}handleInputDOWN(t){}handleInputUP(t){}};(w=p||(p={}))[w.IDDLE=0]="IDDLE",w[w.CHOP=1]="CHOP",w[w.DEAD=2]="DEAD";var f;f=n("kPq84").getBundleURL("ct2W2")+n("bXuNP").resolve("5QlM5");var y;y=n("kPq84").getBundleURL("ct2W2")+n("bXuNP").resolve("beX4X");var E=class extends b{constructor(t,e,i,s){super(),this.tmSize={width:250,height:200},this.positions=((t,e)=>{let i=a.points[1].start+a.pointsWidth/2;const s={x:i-e.width/2,y:t.height-150-e.height/2};return i=a.points[3].start+a.pointsWidth/2,[s,{x:i-e.width/2,y:t.height-150-e.height/2}]})(t,this.tmSize),this.facing=m.RIGHT,this.keyboardMap=s,this.health=100,this.points=0,this.healthBarPos=e,this.healthBarSize={width:this.health,height:30},this.pointsPosition=i,this.pointsSize={width:30,height:40},this.timbermanImage=new Image,this.timbermanImage.src=f,this.timbermanDeadImage=new Image,this.timbermanDeadImage.src=y,this.timbermanStatus=p.IDDLE,this.animationCount=0,this.time=0}update(t){this.timbermanStatus===p.IDDLE&&this.animationCount>=2&&(this.animationCount=0),this.health>100&&(this.health=100),this.health<0&&(this.health=0),this.health-=16*t}draw(t,e){const i=this.facing===m.LEFT?this.positions[0]:this.positions[1];if(t.save(),this.timbermanStatus===p.DEAD)t.drawImage(this.timbermanDeadImage,i.x,i.y,this.tmSize.width/2,this.tmSize.height/2);else{const s=(this.timbermanStatus===p.IDDLE?"breath":"chop")+this.animationCount;t.drawImage(this.timbermanImage,c[s].x,c[s].y,c[s].w,c[s].h,i.x,i.y,this.tmSize.width,this.tmSize.height),this.time+=e,this.animationCount=Math.floor(2*this.time*5)%2}t.restore()}handleInputDOWN(t){const e=this.keyboardMap[t];e===m.LEFT&&(this.timbermanStatus=p.CHOP,this.facing=m.LEFT,this.health+=12*.2,this.points++),e===m.RIGHT&&(this.timbermanStatus=p.CHOP,this.facing=m.RIGHT,this.health+=12*.2,this.points++)}handleInputUP(t){const e=this.keyboardMap[t];e===m.LEFT&&(this.timbermanStatus=p.IDDLE),e===m.RIGHT&&(this.timbermanStatus=p.IDDLE)}};const S={ArrowLeft:m.LEFT,ArrowRight:m.RIGHT};m.LEFT,m.LEFT,m.RIGHT,m.RIGHT;var L;L=n("kPq84").getBundleURL("ct2W2")+n("bXuNP").resolve("hTO6R");var I;I=n("kPq84").getBundleURL("ct2W2")+n("bXuNP").resolve("6gu66");var v;v=n("kPq84").getBundleURL("ct2W2")+n("bXuNP").resolve("bNIP3");var x;x=n("kPq84").getBundleURL("ct2W2")+n("bXuNP").resolve("jcPC9");var P,R=class{constructor(t,e,i){if(this.position=t,this.wlSize=e,this.branchFacing=i,this.treeSprite=new Image,this.branchFacing===m.LEFT&&(this.treeSprite.src=L),this.branchFacing===m.RIGHT&&(this.treeSprite.src=I),this.branchFacing===m.NONE){const t=Math.floor(2*Math.random())+1;this.treeSprite.src=1===t?v:x}}draw(t){t.save(),t.drawImage(this.treeSprite,this.position.x,this.position.y,this.wlSize.width,this.wlSize.height),t.restore()}};P=n("kPq84").getBundleURL("ct2W2")+n("bXuNP").resolve("eBVmE");const F=18,H=120,T=20,k=180,N={width:460,height:140},D=t=>{if(t.branchFacing===m.LEFT){const t=Math.floor(3*Math.random())+1;if(1!==t&&2!==t)return m.LEFT}if(t.branchFacing===m.RIGHT){const t=Math.floor(3*Math.random())+1;if(1!==t&&2!==t)return m.RIGHT}if(t.branchFacing===m.NONE){const t=Math.floor(7*Math.random())+1;if(1===t||3===t||5===t)return m.LEFT;if(2===t||4===t||6===t)return m.RIGHT}return m.NONE};var z=class extends b{constructor(t,e,i=10){super(),this.firstLogSize={width:180,height:80};const s=a.points[2].start+a.pointsWidth/2;this.firstLogPos={x:s-F-this.firstLogSize.width/2,y:a.canvasSize.height-H},this.firstLogSprite=new Image,this.firstLogSprite.src=P,this.woodenLogs=((t,e,i=10)=>{const s=[],n=a.points[2].start+a.pointsWidth/2,h={x:n-T-N.width/2,y:t.height-(k+e.height)};s.push(new R(h,N,m.LEFT));for(let h=1;h<i;h++){const i={x:n-T-N.width/2,y:t.height-(k+e.height)-h*N.height},r=D(s[h-1]);s.push(new R(i,N,r))}return s})(t,this.firstLogSize,i),this.keyboardMap=e}draw(t){t.save(),t.drawImage(this.firstLogSprite,this.firstLogPos.x,this.firstLogPos.y,this.firstLogSize.width,this.firstLogSize.height),t.restore(),this.woodenLogs.forEach((e=>e.draw(t)))}handleInputDOWN(t){const e=this.keyboardMap[t];if(e!==m.LEFT&&e!==m.RIGHT)return;this.woodenLogs.shift(),this.woodenLogs.forEach((t=>{t.position.y+=t.wlSize.height}));const i={x:a.points[2].start+a.pointsWidth/2-T-N.width/2,y:a.canvasSize.height-(k+this.firstLogSize.height)-9*N.height},s=D(this.woodenLogs[this.woodenLogs.length-1]);this.woodenLogs.push(new R(i,N,s))}};var O=class extends b{constructor(t){super(),this.position=t}draw(t,e){const i=(1/e).toFixed(2);t.font="15px Arial",t.fillStyle="black",t.fillText(`FPS:${i}`,this.position.x,this.position.y)}};window.onload=()=>{const t=document.getElementById("canvas-game"),e=t.getContext("2d"),i={width:t.width,height:t.height};((t={width:800,height:900})=>{a=new r(t)})(i);const s=new O({x:50,y:50}),n=new E(i,{x:50,y:100},{x:50,y:145},S),h=new z(i,S,10),o=[s,n,h];(t=>{l=new g(t)})([{timberman:n,tree:h,keyboardMap:S}]);let c=0;const d=s=>{const n=(s-c)/1e3;c=s,e.clearRect(0,0,t.width,t.height),a.draw(e),l.isPlaying?(l.draw(e),o.forEach((t=>{t.draw(e,n),t.update(n)})),l.update()):(e.font="15px Arial",e.fillStyle="black",e.fillText("Game Over...",i.width/2-50,i.height/2-25)),window.requestAnimationFrame(d)};window.requestAnimationFrame(d),document.body.addEventListener("keydown",(t=>{l.isPlaying&&o.forEach((e=>e.handleInputDOWN(t.key)))})),document.body.addEventListener("keyup",(t=>{l.isPlaying&&o.forEach((e=>e.handleInputUP(t.key)))}))};
//# sourceMappingURL=index.7a5a5380.js.map
