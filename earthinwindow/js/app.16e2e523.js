(function(e){function t(t){for(var o,s,r=t[0],c=t[1],p=t[2],d=0,h=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&h.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(h.length)h.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/earthinwindow/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3336:function(e,t,n){"use strict";n("531a")},"531a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={id:"app"};function i(e,t,n,i,s,r){var c=Object(o["k"])("Renderer");return Object(o["h"])(),Object(o["c"])("div",a,[Object(o["e"])(c)])}n("b0c0");var s={id:"renderer",class:"position-relative m-auto"},r={class:"frame position-absolute w-100 h-100 top-0"},c=["value"];function p(e,t,n,a,i,p){var u=Object(o["k"])("Scene");return Object(o["h"])(),Object(o["c"])("div",s,[Object(o["e"])(u,{class:"w-100 h-100 rounded-circle m-auto"}),Object(o["d"])("div",r,[(Object(o["h"])(!0),Object(o["c"])(o["a"],null,Object(o["j"])(e.planets,(function(e){return Object(o["h"])(),Object(o["c"])("button",{key:"planet.name",value:e.name,style:Object(o["g"])({"background-color":e.color}),class:"planet-button",onClick:t[0]||(t[0]=function(){return p.clickButton&&p.clickButton.apply(p,arguments)})},null,12,c)})),128))])])}var u=n("5530"),d={id:"scene"};function h(e,t,n,a,i,s){return Object(o["h"])(),Object(o["c"])("div",d)}n("d3b7"),n("159b");var l=n("5a89"),m=n("d4ec"),b=n("bee2"),g=(n("ac1f"),n("1276"),n("fb6a"),n("a15b"),l["n"],l["g"]),v=l["s"],f=l["p"],w=(l["c"],function(){function e(t,n){Object(m["a"])(this,e),this.scene=t,this.camera=n,this.renderer=new v,this.renderer.setPixelRatio(devicePixelRatio),this.textureLoader=new f,this.controls=null,this.objects={scene:t,camera:n}}return Object(b["a"])(e,[{key:"canvas",get:function(){return this.renderer.domElement}},{key:"texture",value:function(e){return this.textureLoader.load(e)}},{key:"setSize",value:function(e){var t=e.width,n=e.height;this.renderer.setSize(t,n);var o=this.camera;o.hasOwnProperty("aspect")&&(o.aspect=t/n,o.updateProjectionMatrix())}},{key:"switch",value:function(e,t){return this.objects[e].visible=void 0!==t?t:!this.objects[e].visible,this.objects[e].visible}},{key:"add",value:function(e,t){var n=e.split("/"),o=n.slice(-1)[0],a=n.slice(0,-1).join();return t.name=o,this.group(a).add(t),this.objects[e]=t,t}},{key:"group",value:function(e){return e?this.objects[e]?this.objects[e]:this.add(e,new g):this.scene}},{key:"render",value:function(){this.controls.update(),this.renderer.render(this.scene,this.camera)}}]),e}()),y=(n("ddb0"),n("4c53"),function(e,t){this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.center=new l["r"],this.userZoom=!0,this.userZoomSpeed=1,this.userRotate=!0,this.userRotateSpeed=1,this.userPan=!0,this.userPanSpeed=2,this.autoRotate=!1,this.autoRotateSpeed=2,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minDistance=0,this.maxDistance=1/0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40,ROTATE:65,ZOOM:83,PAN:68};var n=this,o=1e-6,a=1800,i=new l["q"],s=new l["q"],r=new l["q"],c=new l["q"],p=new l["q"],u=new l["q"],d=0,h=0,m=1,b=new l["r"],g={NONE:-1,ROTATE:0,ZOOM:1,PAN:2},v=g.NONE,f={type:"change"};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.userZoomSpeed)}function O(e){!1!==n.enabled&&!1!==n.userRotate&&(e.preventDefault(),v===g.NONE&&(0===e.button&&(v=g.ROTATE),1===e.button&&(v=g.ZOOM),2===e.button&&(v=g.PAN)),v===g.ROTATE?i.set(e.clientX,e.clientY):v===g.ZOOM?c.set(e.clientX,e.clientY):g.PAN,document.addEventListener("mousemove",j,!1),document.addEventListener("mouseup",k,!1))}function j(e){if(!1!==n.enabled)if(e.preventDefault(),v===g.ROTATE)s.set(e.clientX,e.clientY),r.subVectors(s,i),n.rotateLeft(2*Math.PI*r.x/a*n.userRotateSpeed),n.rotateUp(2*Math.PI*r.y/a*n.userRotateSpeed),i.copy(s);else if(v===g.ZOOM)p.set(e.clientX,e.clientY),u.subVectors(p,c),u.y>0?n.zoomIn():n.zoomOut(),c.copy(p);else if(v===g.PAN){var t=e.movementX||e.mozMovementX||e.webkitMovementX||0,o=e.movementY||e.mozMovementY||e.webkitMovementY||0;n.pan(new l["r"](-t,o,0))}}function k(e){!1!==n.enabled&&!1!==n.userRotate&&(document.removeEventListener("mousemove",j,!1),document.removeEventListener("mouseup",k,!1),v=g.NONE)}function E(e){if(!1!==n.enabled&&!1!==n.userZoom){var t=0;e.wheelDelta?t=e.wheelDelta:e.detail&&(t=-e.detail),t>0?n.zoomOut():n.zoomIn()}}function x(e){if(!1!==n.enabled&&!1!==n.userPan)switch(e.keyCode){case n.keys.ROTATE:v=g.ROTATE;break;case n.keys.ZOOM:v=g.ZOOM;break;case n.keys.PAN:v=g.PAN;break}}function S(e){switch(e.keyCode){case n.keys.ROTATE:case n.keys.ZOOM:case n.keys.PAN:v=g.NONE;break}}this.rotateLeft=function(e){void 0===e&&(e=w()),h-=e},this.rotateRight=function(e){void 0===e&&(e=w()),h+=e},this.rotateUp=function(e){void 0===e&&(e=w()),d-=e},this.rotateDown=function(e){void 0===e&&(e=w()),d+=e},this.zoomIn=function(e){void 0===e&&(e=y()),m/=e},this.zoomOut=function(e){void 0===e&&(e=y()),m*=e},this.pan=function(e){e.transformDirection(this.object.matrix),e.multiplyScalar(n.userPanSpeed),this.object.position.add(e),this.center.add(e)},this.update=function(){var e=this.object.position,t=e.clone().sub(this.center),n=Math.atan2(t.x,t.z),a=Math.atan2(Math.sqrt(t.x*t.x+t.z*t.z),t.y);this.autoRotate&&this.rotateLeft(w()),n+=h,a+=d,a=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,a)),a=Math.max(o,Math.min(Math.PI-o,a));var i=t.length()*m;i=Math.max(this.minDistance,Math.min(this.maxDistance,i)),t.x=i*Math.sin(a)*Math.sin(n),t.y=i*Math.cos(a),t.z=i*Math.sin(a)*Math.cos(n),e.copy(this.center).add(t),this.object.lookAt(this.center),h=0,d=0,m=1,b.distanceTo(this.object.position)>0&&(this.dispatchEvent(f),b.copy(this.object.position))},this.domElement.addEventListener("contextmenu",(function(e){e.preventDefault()}),!1),this.domElement.addEventListener("mousedown",O,!1),this.domElement.addEventListener("mousewheel",E,!1),this.domElement.addEventListener("DOMMouseScroll",E,!1),window.addEventListener("keydown",x,!1),window.addEventListener("keyup",S,!1)});y.prototype=Object.create(l["f"].prototype);var O=function(e,t){var n=this,o={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=void 0!==t?t:document,this.rotationZFactor=0,this.RVMovingFactor=0,this.autoRotate=!1,this.autoRotateSpeed=.001,this.allSpeedsFactor=1,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[null,null,null],this.target=new l["r"];var a=1e-6,i=new l["r"],s=o.NONE,r=o.NONE,c=new l["r"],p=new l["q"],u=new l["q"],d=new l["r"],h=0,m=new l["q"],b=new l["q"],g=0,v=0,f=new l["q"],w=new l["q"];this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var y={type:"change"},O={type:"start"},j={type:"end"};this.handleResize=function(){if(this.domElement===document)this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight;else{var e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}};var k=function(){var e=new l["q"];return function(t,o){return e.set((t-n.screen.left)/n.screen.width,(o-n.screen.top)/n.screen.height),e}}(),E=function(){var e=new l["q"];return function(t,o){return e.set((t-.5*n.screen.width-n.screen.left)/(.5*n.screen.width),(n.screen.height+2*(n.screen.top-o))/n.screen.width),e}}();function x(e){if(!1!==n.enabled)switch(r=s,e.keyCode){case 87:n.RVMovingFactor=-.002*n.allSpeedsFactor;break;case 83:n.RVMovingFactor=.002*n.allSpeedsFactor;break;case 65:p.copy(u),u.x-=.01*n.allSpeedsFactor;break;case 68:p.copy(u),u.x+=.01*n.allSpeedsFactor;break;case 90:p.copy(u),u.y-=.01*n.allSpeedsFactor;break;case 88:p.copy(u),u.y+=.01*n.allSpeedsFactor;break;case 81:n.rotationZFactor=-.01*n.allSpeedsFactor;break;case 69:n.rotationZFactor=.01*n.allSpeedsFactor;break;case 107:m.y+=.02*n.allSpeedsFactor;break;case 109:m.y-=.02*n.allSpeedsFactor;break;case 38:w.y-=.01*n.allSpeedsFactor;break;case 40:w.y+=.01*n.allSpeedsFactor;break;case 37:w.x-=.01*n.allSpeedsFactor;break;case 39:w.x+=.01*n.allSpeedsFactor;break;case 82:n.allSpeedsFactor=.33;break;case 16:n.allSpeedsFactor=.05;break}}function S(e){if(!1!==n.enabled){switch(e.keyCode){case 87:n.RVMovingFactor=0;break;case 83:n.RVMovingFactor=0;break;case 81:n.rotationZFactor=0;break;case 69:n.rotationZFactor=0;break;case 82:n.allSpeedsFactor=1;break;case 16:n.allSpeedsFactor=1;break}s=r}}function M(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),s===o.NONE&&(s=e.button),s!==o.ROTATE||n.noRotate?s!==o.ZOOM||n.noZoom?s!==o.PAN||n.noPan||(f.copy(k(e.pageX,e.pageY)),w.copy(f)):(m.copy(k(e.pageX,e.pageY)),b.copy(m)):(u.copy(E(e.pageX,e.pageY)),p.copy(u)),document.addEventListener("mousemove",P,!1),document.addEventListener("mouseup",F,!1),n.dispatchEvent(O))}function P(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),s!==o.ROTATE||n.noRotate?s!==o.ZOOM||n.noZoom?s!==o.PAN||n.noPan||w.copy(k(e.pageX,e.pageY)):b.copy(k(e.pageX,e.pageY)):(p.copy(u),u.copy(E(e.pageX,e.pageY))))}function F(e){!1!==n.enabled&&(e.preventDefault(),e.stopPropagation(),s=o.NONE,document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",F),n.dispatchEvent(j))}function R(e){if(!1!==n.enabled&&!0!==n.noZoom){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:m.y-=.025*e.deltaY*n.allSpeedsFactor;break;case 1:m.y-=.01*e.deltaY*n.allSpeedsFactor;break;default:m.y-=25e-5*e.deltaY*n.allSpeedsFactor;break}n.dispatchEvent(O),n.dispatchEvent(j)}}function L(e){if(!1!==n.enabled){switch(e.touches.length){case 1:s=o.TOUCH_ROTATE,u.copy(E(e.touches[0].pageX,e.touches[0].pageY)),p.copy(u);break;default:s=o.TOUCH_ZOOM_PAN;var t=e.touches[0].pageX-e.touches[1].pageX,a=e.touches[0].pageY-e.touches[1].pageY;v=g=Math.sqrt(t*t+a*a);var i=(e.touches[0].pageX+e.touches[1].pageX)/2,r=(e.touches[0].pageY+e.touches[1].pageY)/2;f.copy(k(i,r)),w.copy(f);break}n.dispatchEvent(O)}}function T(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:p.copy(u),u.copy(E(e.touches[0].pageX,e.touches[0].pageY));break;default:var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY;v=Math.sqrt(t*t+o*o);var a=(e.touches[0].pageX+e.touches[1].pageX)/2,i=(e.touches[0].pageY+e.touches[1].pageY)/2;w.copy(k(a,i));break}}function _(e){if(!1!==n.enabled){switch(e.touches.length){case 0:s=o.NONE;break;case 1:s=o.TOUCH_ROTATE,u.copy(E(e.touches[0].pageX,e.touches[0].pageY)),p.copy(u);break}n.dispatchEvent(j)}}function A(e){!1!==n.enabled&&e.preventDefault()}this.rotateCamera=function(){var e,t=new l["r"],o=new l["m"],a=new l["r"],i=new l["r"],s=new l["r"],r=new l["r"],m=new l["m"];return function(){n.autoRotate&&(u.x+=n.autoRotateSpeed),r.set(u.x-p.x,u.y-p.y,0),r.setLength(r.length()*n.allSpeedsFactor),e=r.length(),e||n.rotationZFactor?(c.copy(n.object.position).sub(n.target),a.copy(c).normalize(),i.copy(n.object.up).normalize(),s.crossVectors(i,a).normalize(),i.setLength(u.y-p.y),s.setLength(u.x-p.x),r.copy(i.add(s)),t.crossVectors(r,c).normalize(),e*=n.rotateSpeed,o.setFromAxisAngle(t,e),m.setFromAxisAngle(a,n.rotationZFactor),o.multiply(m),c.applyQuaternion(o),n.object.up.applyQuaternion(o),d.copy(t),h=e):!n.staticMoving&&h&&(h*=Math.sqrt(1-n.dynamicDampingFactor*n.allSpeedsFactor),c.copy(n.object.position).sub(n.target),o.setFromAxisAngle(d,h),c.applyQuaternion(o),n.object.up.applyQuaternion(o)),p.copy(u)}}(),this.zoomCamera=function(){var e;s===o.TOUCH_ZOOM_PAN?(e=n.allSpeedsFactor*g/v,g=v,c.multiplyScalar(e)):(e=1+(b.y-m.y)*n.zoomSpeed*n.allSpeedsFactor,1!==e&&e>0&&c.multiplyScalar(e),n.staticMoving?m.copy(b):m.y+=(b.y-m.y)*this.dynamicDampingFactor*n.allSpeedsFactor)},this.panCamera=function(){var e=new l["q"],t=new l["r"],o=new l["r"],a=new l["r"];return function(){e.copy(w).sub(f),e.setLength(e.length()*n.allSpeedsFactor),(e.lengthSq()||n.RVMovingFactor)&&(e.multiplyScalar(c.length()*n.panSpeed),a.copy(c).cross(n.object.up).setLength(e.x),a.add(t.copy(n.object.up).setLength(e.y)),a.add(o.copy(c).setLength(n.RVMovingFactor*c.length())),n.object.position.add(a),n.target.add(a),n.staticMoving?f.copy(w):f.add(e.subVectors(w,f).multiplyScalar(n.dynamicDampingFactor*n.allSpeedsFactor)))}}(),this.checkDistances=function(){n.noZoom&&n.noPan||(c.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,c.setLength(n.maxDistance)),m.copy(b)),c.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,c.setLength(n.minDistance)),m.copy(b)))},this.update=function(){c.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,c),n.checkDistances(),n.object.lookAt(n.target),i.distanceToSquared(n.object.position)>a&&(n.dispatchEvent(y),i.copy(n.object.position)),n.RVMovingFactor=0,n.rotationZFactor=0},this.reset=function(){s=o.NONE,r=o.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),c.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(y),i.copy(n.object.position)},this.dispose=function(){this.domElement.removeEventListener("contextmenu",A,!1),this.domElement.removeEventListener("mousedown",M,!1),this.domElement.removeEventListener("wheel",R,!1),this.domElement.removeEventListener("touchstart",L,!1),this.domElement.removeEventListener("touchend",_,!1),this.domElement.removeEventListener("touchmove",T,!1),document.removeEventListener("mousemove",P,!1),document.removeEventListener("mouseup",F,!1),window.removeEventListener("keydown",x,!1),window.removeEventListener("keyup",S,!1)},this.domElement.addEventListener("contextmenu",A,!1),this.domElement.addEventListener("mousedown",M,!1),this.domElement.addEventListener("wheel",R,!1),this.domElement.addEventListener("touchstart",L,!1),this.domElement.addEventListener("touchend",_,!1),this.domElement.addEventListener("touchmove",T,!1),window.addEventListener("keydown",x,!1),window.addEventListener("keyup",S,!1),this.handleResize(),this.update()};O.prototype=Object.create(l["f"].prototype);var j=O,k=n("2ef0"),E=n("5502"),x={mounted:function(){var e=new l["l"](75,1,.1,1e3);e.position.z=2.5;var t=new l["n"];this.plot=new w(t,e),this.$el.appendChild(this.plot.canvas),window.addEventListener("resize",this.windowResize),this.windowResize(),this.plot.controls=new j(e,this.$parent.$el),Object(k["assign"])(this.controls,{rotateSpeed:1,zoomSpeed:1,panSpeed:1,noPan:!0,dynamicDampingFactor:.1}),this.addSpace(),this.addSun(),this.addMercury(),this.addVenus(),this.addEarth(),this.addMoon(),this.addMars(),this.switch(this.currentPlanet),this.animate()},watch:{currentPlanet:function(e){this.switch(e)}},computed:Object(u["a"])({},Object(E["b"])(["planets","currentPlanet"])),methods:Object(u["a"])(Object(u["a"])({},Object(E["c"])(["addPlanet"])),{},{windowResize:function(){this.plot.setSize({width:this.$el.clientWidth,height:this.$el.clientHeight})},animate:function(){for(var e in this.plot.objects)this.plot.objects[e].animate&&this.plot.objects[e].animate();this.plot.render(),requestAnimationFrame(this.animate)},switch:function(e){var t=this;this.planets.forEach((function(n){t.plot.switch(n.name,n.name===e)}))},addSpace:function(){var e=new l["e"](16777215,1.25);e.position.set(5,0,0),this.plot.add("sunlight",e),this.plot.add("stars",new l["i"](new l["o"](10,64,32),new l["j"]({side:l["b"],map:this.plot.texture("/img/textures/8k_stars_milky_way.jpg")})))},addSun:function(){this.plot.add("sun/body",new l["i"](new l["o"](1.01,128,64),new l["j"]({map:this.plot.texture("/img/textures/8k_sun.jpg")}))),this.plot.add("sun/crone",new l["i"](new l["o"](1.02,64,32),new l["j"]({map:this.plot.texture("/img/textures/8k_sun.jpg"),blending:l["d"],blendEquation:l["h"],transparent:!0,opacity:.5}))),this.addPlanet({name:"sun",color:"#FDA824"})},addMercury:function(){this.plot.add("mercury/ground",new l["i"](new l["o"](1,128,64),new l["k"]({map:this.plot.texture("/img/textures/8k_mercury.jpg"),bumpMap:this.plot.texture("/img/textures/8k_mercury.jpg"),bumpScale:.01,shininess:.5}))),this.addPlanet({name:"mercury",color:"#999899"})},addVenus:function(){this.plot.add("venus/ground",new l["i"](new l["o"](1,128,64),new l["k"]({map:this.plot.texture("/img/textures/8k_venus_surface.jpg"),bumpMap:this.plot.texture("/img/textures/8k_venus_surface.jpg"),bumpScale:.01,shininess:.5}))),this.plot.add("venus/cloud",new l["i"](new l["o"](1.02,64,32),new l["k"]({map:this.plot.texture("/img/textures/8k_venus_atmosphere.jpg"),shininess:.8,transparent:!0,opacity:.9})));var e=this.plot.group("venus");e.animate=function(){return e.rotation.y+=.001},this.addPlanet({name:"venus",color:"#ECBC76"})},addEarth:function(){this.plot.add("earth/day",new l["i"](new l["o"](1,128,64),new l["k"]({map:this.plot.texture("/img/textures/8k_earth_daymap.jpg"),bumpMap:this.plot.texture("/img/textures/8k_earth_daymap.jpg"),bumpScale:.005,shininess:.5}))),this.plot.add("earth/night",new l["i"](new l["o"](1.005,128,64),new l["j"]({map:this.plot.texture("/img/textures/8k_earth_nightmap.jpg"),blending:l["d"],blendEquation:l["h"]}))),this.plot.add("earth/cloud",new l["i"](new l["o"](1.01,64,32),new l["k"]({map:this.plot.texture("/img/textures/8k_earth_clouds.jpg"),blending:l["a"],shininess:.5}))),this.plot.add("earth/galo",new l["i"](new l["o"](1.02,64,32),new l["k"]({map:this.plot.texture("/img/textures/8k_earth_daymap.jpg"),side:l["b"],blending:l["a"],shininess:.5,transparent:!0,opacity:.5})));var e=this.plot.group("earth");e.animate=function(){return e.rotation.y+=.001},e.rotation.x+=.3,this.addPlanet({name:"earth",color:"#4063FF"})},addMoon:function(){this.plot.add("moon",new l["i"](new l["o"](1,128,64),new l["k"]({map:this.plot.texture("/img/textures/8k_moon.jpg"),bumpMap:this.plot.texture("/img/textures/8k_moon.jpg"),bumpScale:.01,shininess:.5}))),this.addPlanet({name:"moon",color:"gray"})},addMars:function(){this.plot.add("mars/ground",new l["i"](new l["o"](1,128,64),new l["k"]({map:this.plot.texture("/img/textures/8k_mars.jpg"),bumpMap:this.plot.texture("/img/textures/8k_mars.jpg"),bumpScale:.01,shininess:.5})));var e=this.plot.group("mars");e.animate=function(){return e.rotation.y+=.001},this.addPlanet({name:"mars",color:"red"})}})},S=n("6b0d"),M=n.n(S);const P=M()(x,[["render",h]]);var F=P,R={components:{Scene:F},computed:Object(u["a"])({},Object(E["b"])(["planets"])),methods:Object(u["a"])(Object(u["a"])({},Object(E["c"])(["switchToPlanet"])),{},{clickButton:function(e){this.switchToPlanet(e.target.value)}})};n("76fd");const L=M()(R,[["render",p]]);var T=L,_=(n("ab8b"),{name:"Hyperspace",components:{Renderer:T}});n("3336");const A=M()(_,[["render",i]]);var N=A,D=Object(E["a"])({state:{current_planet:"earth",planets:[]},getters:{currentPlanet:function(e){return e.current_planet},planets:function(e){return e.planets}},mutations:{addPlanet:function(e,t){var n=t.name,o=t.color;e.planets.push({name:n,color:o})},switchToPlanet:function(e,t){e.current_planet=t}}});Object(o["b"])(N).use(D).mount("main")},"5e8b":function(e,t,n){},"76fd":function(e,t,n){"use strict";n("5e8b")}});
//# sourceMappingURL=app.16e2e523.js.map