class t{constructor(t){this.canvasSize=t,this.pointsWidth=t.width/5;const i=(t=>{const i=[];let s=0;for(let h=0;h<5;h++){const h=s+t;i.push({start:s,end:h}),s+=t}return i})(this.pointsWidth);this.points=i}}let i;class s{constructor(t){this.isPlaying=!0,this.players=t}update(){this.players.forEach((t=>{t.timberman.facing===t.tree.woodenLogs[0].branchFacing&&(this.isPlaying=!1)}))}}let h;var e,n;(n=e||(e={}))[n.LEFT=0]="LEFT",n[n.RIGHT=1]="RIGHT";var o=class{update(){}draw(t){}handleInputDOWN(t){}};var a=class extends o{constructor(t,s){super(),this.tmSize={width:100,height:100},this.positions=((t,s)=>{let h=i.points[1].start+i.pointsWidth/2;const e={x:h-s.width/2,y:t.height-150};return h=i.points[3].start+i.pointsWidth/2,[e,{x:h-s.width/2,y:t.height-150}]})(t,this.tmSize),this.facing=e.RIGHT,this.keyboardMap=s}draw(t){t.save(),t.fillStyle="red";const i=this.facing===e.LEFT?this.positions[0]:this.positions[1];t.fillRect(i.x,i.y,this.tmSize.width,this.tmSize.height),t.restore()}handleInputDOWN(t){const i=this.keyboardMap[t];i===e.LEFT&&(this.facing=e.LEFT),i===e.RIGHT&&(this.facing=e.RIGHT)}};const r={ArrowLeft:e.LEFT,ArrowRight:e.RIGHT};e.LEFT,e.LEFT,e.RIGHT,e.RIGHT;var c=class{constructor(t,i,s=!1){if(this.position=t,this.wlSize=i,s)this.branchFacing=e.LEFT;else{const t=Math.floor(2*Math.random())+1;this.branchFacing=1===t?e.LEFT:e.RIGHT}this.branchSize={width:100,height:30}}draw(t){t.save(),t.fillStyle="blue",t.fillRect(this.position.x,this.position.y,this.wlSize.width,this.wlSize.height),t.restore(),t.save(),t.fillStyle="green";const i=this.branchFacing===e.LEFT?this.position.x-this.branchSize.width:this.position.x+this.branchSize.width;t.fillRect(i,this.position.y,this.branchSize.width,this.branchSize.height),t.restore()}};var d=class extends o{constructor(t,s,h=10){super(),this.woodenLogs=((t,s=10)=>{const h=[];for(let e=0;e<s;e++){const s={width:100,height:100},n={x:i.points[2].start+i.pointsWidth/2-s.width/2,y:t.height-150-105*e};h.push(new c(n,s,0===e))}return h})(t,h),this.keyboardMap=s}draw(t){this.woodenLogs.forEach((i=>i.draw(t)))}handleInputDOWN(t){const s=this.keyboardMap[t];if(s===e.LEFT||s===e.RIGHT){this.woodenLogs.shift(),this.woodenLogs.forEach((t=>{t.position.y+=t.wlSize.height+5}));const t={width:100,height:100},s={x:i.points[2].start+i.pointsWidth/2-t.width/2,y:i.canvasSize.height-150-945};this.woodenLogs.push(new c(s,t))}}};window.onload=()=>{const e=document.getElementById("canvas-game"),n=e.getContext("2d"),o={width:e.width,height:e.height};((s={width:800,height:900})=>{i=new t(s)})(o);const c=new a(o,r),l=new d(o,r,10),w=[c,l];(t=>{h=new s(t)})([{timberman:c,tree:l,keyboardMap:r}]);let g=0;const p=t=>{g=t,n.clearRect(0,0,e.width,e.height),h.isPlaying?(w.forEach((t=>t.draw(n))),h.update()):(n.font="15px Arial",n.fillStyle="black",n.fillText("Game Over...",o.width/2,o.height/2)),window.requestAnimationFrame(p)};window.requestAnimationFrame(p),document.body.addEventListener("keydown",(t=>{h.isPlaying&&w.forEach((i=>i.handleInputDOWN(t.key)))}))};
//# sourceMappingURL=index.59577d7f.js.map
