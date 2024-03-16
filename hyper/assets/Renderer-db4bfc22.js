import{g as UM,m as NM,f as FM,h as OM,i as ao,e as zM,o as br,c as wr,j as tr,u as Dn,t as ss,F as gf,k as vf,l as BM,a as GM}from"./index-e7f56d08.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xc="161",HM=0,xf=1,VM=2,np=1,WM=2,Gi=3,hr=0,An=1,Hi=2,lr=0,bs=1,Mf=2,Sf=3,Ef=4,kM=5,Pr=100,XM=101,qM=102,yf=103,Tf=104,YM=200,ZM=201,KM=202,$M=203,Nc=204,Fc=205,JM=206,jM=207,QM=208,tS=209,eS=210,nS=211,iS=212,rS=213,sS=214,aS=0,oS=1,lS=2,Uo=3,cS=4,uS=5,hS=6,fS=7,qc=0,dS=1,pS=2,cr=0,mS=1,_S=2,gS=3,vS=4,xS=5,MS=6,ip=300,Cs=301,Ps=302,Oc=303,zc=304,Vo=306,Bc=1e3,pi=1001,Gc=1002,yn=1003,Af=1004,na=1005,In=1006,rc=1007,Dr=1008,ur=1009,SS=1010,ES=1011,Yc=1012,rp=1013,or=1014,Vi=1015,ha=1016,sp=1017,ap=1018,Ir=1020,yS=1021,mi=1023,TS=1024,AS=1025,Ur=1026,Ls=1027,bS=1028,op=1029,wS=1030,lp=1031,cp=1033,sc=33776,ac=33777,oc=33778,lc=33779,bf=35840,wf=35841,Rf=35842,Cf=35843,up=36196,Pf=37492,Lf=37496,Df=37808,If=37809,Uf=37810,Nf=37811,Ff=37812,Of=37813,zf=37814,Bf=37815,Gf=37816,Hf=37817,Vf=37818,Wf=37819,kf=37820,Xf=37821,cc=36492,qf=36494,Yf=36495,RS=36283,Zf=36284,Kf=36285,$f=36286,hp=3e3,Nr=3001,CS=3200,PS=3201,fp=0,LS=1,ii="",un="srgb",ki="srgb-linear",Zc="display-p3",Wo="display-p3-linear",No="linear",Be="srgb",Fo="rec709",Oo="p3",as=7680,Jf=519,DS=512,IS=513,US=514,dp=515,NS=516,FS=517,OS=518,zS=519,jf=35044,Qf="300 es",Hc=1035,Wi=2e3,zo=2001;class zr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const a=this._listeners[t];if(a!==void 0){const o=a.indexOf(e);o!==-1&&a.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let td=1234567;const ca=Math.PI/180,fa=180/Math.PI;function Is(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]).toLowerCase()}function hn(s,t,e){return Math.max(t,Math.min(e,s))}function Kc(s,t){return(s%t+t)%t}function BS(s,t,e,i,a){return i+(s-t)*(a-i)/(e-t)}function GS(s,t,e){return s!==t?(e-s)/(t-s):0}function ua(s,t,e){return(1-e)*s+e*t}function HS(s,t,e,i){return ua(s,t,1-Math.exp(-e*i))}function VS(s,t=1){return t-Math.abs(Kc(s,t*2)-t)}function WS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function kS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function XS(s,t){return s+Math.floor(Math.random()*(t-s+1))}function qS(s,t){return s+Math.random()*(t-s)}function YS(s){return s*(.5-Math.random())}function ZS(s){s!==void 0&&(td=s);let t=td+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function KS(s){return s*ca}function $S(s){return s*fa}function Vc(s){return(s&s-1)===0&&s!==0}function JS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bo(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function jS(s,t,e,i,a){const o=Math.cos,u=Math.sin,c=o(e/2),h=u(e/2),d=o((t+i)/2),p=u((t+i)/2),g=o((t-i)/2),v=u((t-i)/2),x=o((i-t)/2),S=u((i-t)/2);switch(a){case"XYX":s.set(c*p,h*g,h*v,c*d);break;case"YZY":s.set(h*v,c*p,h*g,c*d);break;case"ZXZ":s.set(h*g,h*v,c*p,c*d);break;case"XZX":s.set(c*p,h*S,h*x,c*d);break;case"YXY":s.set(h*x,c*p,h*S,c*d);break;case"ZYZ":s.set(h*S,h*x,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Es(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ke={DEG2RAD:ca,RAD2DEG:fa,generateUUID:Is,clamp:hn,euclideanModulo:Kc,mapLinear:BS,inverseLerp:GS,lerp:ua,damp:HS,pingpong:VS,smoothstep:WS,smootherstep:kS,randInt:XS,randFloat:qS,randFloatSpread:YS,seededRandom:ZS,degToRad:KS,radToDeg:$S,isPowerOfTwo:Vc,ceilPowerOfTwo:JS,floorPowerOfTwo:Bo,setQuaternionFromProperEuler:jS,normalize:Sn,denormalize:Es};class ge{constructor(t=0,e=0){ge.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(hn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),o=this.x-t.x,u=this.y-t.y;return this.x=o*i-u*a+t.x,this.y=o*a+u*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t,e,i,a,o,u,c,h,d){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,u,c,h,d)}set(t,e,i,a,o,u,c,h,d){const p=this.elements;return p[0]=t,p[1]=a,p[2]=c,p[3]=e,p[4]=o,p[5]=h,p[6]=i,p[7]=u,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,o=this.elements,u=i[0],c=i[3],h=i[6],d=i[1],p=i[4],g=i[7],v=i[2],x=i[5],S=i[8],b=a[0],m=a[3],_=a[6],L=a[1],T=a[4],N=a[7],H=a[2],O=a[5],U=a[8];return o[0]=u*b+c*L+h*H,o[3]=u*m+c*T+h*O,o[6]=u*_+c*N+h*U,o[1]=d*b+p*L+g*H,o[4]=d*m+p*T+g*O,o[7]=d*_+p*N+g*U,o[2]=v*b+x*L+S*H,o[5]=v*m+x*T+S*O,o[8]=v*_+x*N+S*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],u=t[4],c=t[5],h=t[6],d=t[7],p=t[8];return e*u*p-e*c*d-i*o*p+i*c*h+a*o*d-a*u*h}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],u=t[4],c=t[5],h=t[6],d=t[7],p=t[8],g=p*u-c*d,v=c*h-p*o,x=d*o-u*h,S=e*g+i*v+a*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return t[0]=g*b,t[1]=(a*d-p*i)*b,t[2]=(c*i-a*u)*b,t[3]=v*b,t[4]=(p*e-a*h)*b,t[5]=(a*o-c*e)*b,t[6]=x*b,t[7]=(i*h-d*e)*b,t[8]=(u*e-i*o)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,o,u,c){const h=Math.cos(o),d=Math.sin(o);return this.set(i*h,i*d,-i*(h*u+d*c)+u+t,-a*d,a*h,-a*(-d*u+h*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(uc.makeScale(t,e)),this}rotate(t){return this.premultiply(uc.makeRotation(-t)),this}translate(t,e){return this.premultiply(uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uc=new de;function pp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Go(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function QS(){const s=Go("canvas");return s.style.display="block",s}const ed={};function ws(s){s in ed||(ed[s]=!0,console.warn(s))}const nd=new de().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),id=new de().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[ki]:{transfer:No,primaries:Fo,toReference:s=>s,fromReference:s=>s},[un]:{transfer:Be,primaries:Fo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Wo]:{transfer:No,primaries:Oo,toReference:s=>s.applyMatrix3(id),fromReference:s=>s.applyMatrix3(nd)},[Zc]:{transfer:Be,primaries:Oo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(id),fromReference:s=>s.applyMatrix3(nd).convertLinearToSRGB()}},tE=new Set([ki,Wo]),Le={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!tE.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const i=oo[t].toReference,a=oo[e].fromReference;return a(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return oo[s].primaries},getTransfer:function(s){return s===ii?No:oo[s].transfer}};function Rs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class mp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Go("canvas")),os.width=t.width,os.height=t.height;const i=os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Go("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=Rs(o[u]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Rs(e[i]/255)*255):e[i]=Rs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eE=0;class _p{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=Is(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,c=a.length;u<c;u++)a[u].isDataTexture?o.push(fc(a[u].image)):o.push(fc(a[u]))}else o=fc(a);i.url=o}return e||(t.images[this.uuid]=i),i}}function fc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nE=0;class Un extends zr{constructor(t=Un.DEFAULT_IMAGE,e=Un.DEFAULT_MAPPING,i=pi,a=pi,o=In,u=Dr,c=mi,h=ur,d=Un.DEFAULT_ANISOTROPY,p=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=Is(),this.name="",this.source=new _p(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof p=="string"?this.colorSpace=p:(ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=p===Nr?un:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ip)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bc:t.x=t.x-Math.floor(t.x);break;case pi:t.x=t.x<0?0:1;break;case Gc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bc:t.y=t.y-Math.floor(t.y);break;case pi:t.y=t.y<0?0:1;break;case Gc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===un?Nr:hp}set encoding(t){ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Nr?un:ii}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=ip;Un.DEFAULT_ANISOTROPY=1;class Ze{constructor(t=0,e=0,i=0,a=1){Ze.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,o=this.w,u=t.elements;return this.x=u[0]*e+u[4]*i+u[8]*a+u[12]*o,this.y=u[1]*e+u[5]*i+u[9]*a+u[13]*o,this.z=u[2]*e+u[6]*i+u[10]*a+u[14]*o,this.w=u[3]*e+u[7]*i+u[11]*a+u[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,o;const h=t.elements,d=h[0],p=h[4],g=h[8],v=h[1],x=h[5],S=h[9],b=h[2],m=h[6],_=h[10];if(Math.abs(p-v)<.01&&Math.abs(g-b)<.01&&Math.abs(S-m)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+b)<.1&&Math.abs(S+m)<.1&&Math.abs(d+x+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(d+1)/2,N=(x+1)/2,H=(_+1)/2,O=(p+v)/4,U=(g+b)/4,tt=(S+m)/4;return T>N&&T>H?T<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(T),a=O/i,o=U/i):N>H?N<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(N),i=O/a,o=tt/a):H<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(H),i=U/o,a=tt/o),this.set(i,a,o,e),this}let L=Math.sqrt((m-S)*(m-S)+(g-b)*(g-b)+(v-p)*(v-p));return Math.abs(L)<.001&&(L=1),this.x=(m-S)/L,this.y=(g-b)/L,this.z=(v-p)/L,this.w=Math.acos((d+x+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iE extends zr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ze(0,0,t,e),this.scissorTest=!1,this.viewport=new Ze(0,0,t,e);const a={width:t,height:e,depth:1};i.encoding!==void 0&&(ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Nr?un:ii),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Un(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new _p(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends iE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class gp extends Un{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rE extends Un{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=yn,this.minFilter=yn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,o,u,c){let h=i[a+0],d=i[a+1],p=i[a+2],g=i[a+3];const v=o[u+0],x=o[u+1],S=o[u+2],b=o[u+3];if(c===0){t[e+0]=h,t[e+1]=d,t[e+2]=p,t[e+3]=g;return}if(c===1){t[e+0]=v,t[e+1]=x,t[e+2]=S,t[e+3]=b;return}if(g!==b||h!==v||d!==x||p!==S){let m=1-c;const _=h*v+d*x+p*S+g*b,L=_>=0?1:-1,T=1-_*_;if(T>Number.EPSILON){const H=Math.sqrt(T),O=Math.atan2(H,_*L);m=Math.sin(m*O)/H,c=Math.sin(c*O)/H}const N=c*L;if(h=h*m+v*N,d=d*m+x*N,p=p*m+S*N,g=g*m+b*N,m===1-c){const H=1/Math.sqrt(h*h+d*d+p*p+g*g);h*=H,d*=H,p*=H,g*=H}}t[e]=h,t[e+1]=d,t[e+2]=p,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,a,o,u){const c=i[a],h=i[a+1],d=i[a+2],p=i[a+3],g=o[u],v=o[u+1],x=o[u+2],S=o[u+3];return t[e]=c*S+p*g+h*x-d*v,t[e+1]=h*S+p*v+d*g-c*x,t[e+2]=d*S+p*x+c*v-h*g,t[e+3]=p*S-c*g-h*v-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,o=t._z,u=t._order,c=Math.cos,h=Math.sin,d=c(i/2),p=c(a/2),g=c(o/2),v=h(i/2),x=h(a/2),S=h(o/2);switch(u){case"XYZ":this._x=v*p*g+d*x*S,this._y=d*x*g-v*p*S,this._z=d*p*S+v*x*g,this._w=d*p*g-v*x*S;break;case"YXZ":this._x=v*p*g+d*x*S,this._y=d*x*g-v*p*S,this._z=d*p*S-v*x*g,this._w=d*p*g+v*x*S;break;case"ZXY":this._x=v*p*g-d*x*S,this._y=d*x*g+v*p*S,this._z=d*p*S+v*x*g,this._w=d*p*g-v*x*S;break;case"ZYX":this._x=v*p*g-d*x*S,this._y=d*x*g+v*p*S,this._z=d*p*S-v*x*g,this._w=d*p*g+v*x*S;break;case"YZX":this._x=v*p*g+d*x*S,this._y=d*x*g+v*p*S,this._z=d*p*S-v*x*g,this._w=d*p*g-v*x*S;break;case"XZY":this._x=v*p*g-d*x*S,this._y=d*x*g-v*p*S,this._z=d*p*S+v*x*g,this._w=d*p*g+v*x*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],o=e[8],u=e[1],c=e[5],h=e[9],d=e[2],p=e[6],g=e[10],v=i+c+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(p-h)*x,this._y=(o-d)*x,this._z=(u-a)*x}else if(i>c&&i>g){const x=2*Math.sqrt(1+i-c-g);this._w=(p-h)/x,this._x=.25*x,this._y=(a+u)/x,this._z=(o+d)/x}else if(c>g){const x=2*Math.sqrt(1+c-i-g);this._w=(o-d)/x,this._x=(a+u)/x,this._y=.25*x,this._z=(h+p)/x}else{const x=2*Math.sqrt(1+g-i-c);this._w=(u-a)/x,this._x=(o+d)/x,this._y=(h+p)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(hn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,o=t._z,u=t._w,c=e._x,h=e._y,d=e._z,p=e._w;return this._x=i*p+u*c+a*d-o*h,this._y=a*p+u*h+o*c-i*d,this._z=o*p+u*d+i*h-a*c,this._w=u*p-i*c-a*h-o*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,a=this._y,o=this._z,u=this._w;let c=u*t._w+i*t._x+a*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=u,this._x=i,this._y=a,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-e;return this._w=x*u+e*this._w,this._x=x*i+e*this._x,this._y=x*a+e*this._y,this._z=x*o+e*this._z,this.normalize(),this}const d=Math.sqrt(h),p=Math.atan2(d,c),g=Math.sin((1-e)*p)/d,v=Math.sin(e*p)/d;return this._w=u*g+this._w*v,this._x=i*g+this._x*v,this._y=a*g+this._y*v,this._z=o*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),a=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(a),i*Math.sin(o),i*Math.cos(o),e*Math.sin(a))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*a,this.y=o[1]*e+o[4]*i+o[7]*a,this.z=o[2]*e+o[5]*i+o[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,o=t.elements,u=1/(o[3]*e+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*a+o[12])*u,this.y=(o[1]*e+o[5]*i+o[9]*a+o[13])*u,this.z=(o[2]*e+o[6]*i+o[10]*a+o[14])*u,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,o=t.x,u=t.y,c=t.z,h=t.w,d=2*(u*a-c*i),p=2*(c*e-o*a),g=2*(o*i-u*e);return this.x=e+h*d+u*g-c*p,this.y=i+h*p+c*d-o*g,this.z=a+h*g+o*p-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*a,this.y=o[1]*e+o[5]*i+o[9]*a,this.z=o[2]*e+o[6]*i+o[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,o=t.z,u=e.x,c=e.y,h=e.z;return this.x=a*h-o*c,this.y=o*u-i*h,this.z=i*c-a*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dc.copy(this).projectOnVector(t),this.sub(dc)}reflect(t){return this.sub(dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(hn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dc=new V,rd=new Us;class Ns{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)t.isMesh===!0?t.getVertexPosition(u,ci):ci.fromBufferAttribute(o,u),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const a=t.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ia),co.subVectors(this.max,ia),ls.subVectors(t.a,ia),cs.subVectors(t.b,ia),us.subVectors(t.c,ia),er.subVectors(cs,ls),nr.subVectors(us,cs),Er.subVectors(ls,us);let e=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Er.z,Er.y,er.z,0,-er.x,nr.z,0,-nr.x,Er.z,0,-Er.x,-er.y,er.x,0,-nr.y,nr.x,0,-Er.y,Er.x,0];return!pc(e,ls,cs,us,co)||(e=[1,0,0,0,1,0,0,0,1],!pc(e,ls,cs,us,co))?!1:(uo.crossVectors(er,nr),e=[uo.x,uo.y,uo.z],pc(e,ls,cs,us,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ni=[new V,new V,new V,new V,new V,new V,new V,new V],ci=new V,lo=new Ns,ls=new V,cs=new V,us=new V,er=new V,nr=new V,Er=new V,ia=new V,co=new V,uo=new V,yr=new V;function pc(s,t,e,i,a){for(let o=0,u=s.length-3;o<=u;o+=3){yr.fromArray(s,o);const c=a.x*Math.abs(yr.x)+a.y*Math.abs(yr.y)+a.z*Math.abs(yr.z),h=t.dot(yr),d=e.dot(yr),p=i.dot(yr);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}const sE=new Ns,ra=new V,mc=new V;class da{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):sE.setFromPoints(t).getCenter(i);let a=0;for(let o=0,u=t.length;o<u;o++)a=Math.max(a,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ra.subVectors(t,this.center);const e=ra.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(ra,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ra.copy(t.center).add(mc)),this.expandByPoint(ra.copy(t.center).sub(mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new V,_c=new V,ho=new V,ir=new V,gc=new V,fo=new V,vc=new V;class $c{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){_c.copy(t).add(e).multiplyScalar(.5),ho.copy(e).sub(t).normalize(),ir.copy(this.origin).sub(_c);const o=t.distanceTo(e)*.5,u=-this.direction.dot(ho),c=ir.dot(this.direction),h=-ir.dot(ho),d=ir.lengthSq(),p=Math.abs(1-u*u);let g,v,x,S;if(p>0)if(g=u*h-c,v=u*c-h,S=o*p,g>=0)if(v>=-S)if(v<=S){const b=1/p;g*=b,v*=b,x=g*(g+u*v+2*c)+v*(u*g+v+2*h)+d}else v=o,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+d;else v=-o,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+d;else v<=-S?(g=Math.max(0,-(-u*o+c)),v=g>0?-o:Math.min(Math.max(-o,-h),o),x=-g*g+v*(v+2*h)+d):v<=S?(g=0,v=Math.min(Math.max(-o,-h),o),x=v*(v+2*h)+d):(g=Math.max(0,-(u*o+c)),v=g>0?o:Math.min(Math.max(-o,-h),o),x=-g*g+v*(v+2*h)+d);else v=u>0?-o:o,g=Math.max(0,-(u*v+c)),x=-g*g+v*(v+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(_c).addScaledVector(ho,v),x}intersectSphere(t,e){Fi.subVectors(t.center,this.origin);const i=Fi.dot(this.direction),a=Fi.dot(Fi)-i*i,o=t.radius*t.radius;if(a>o)return null;const u=Math.sqrt(o-a),c=i-u,h=i+u;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,o,u,c,h;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(i=(t.min.x-v.x)*d,a=(t.max.x-v.x)*d):(i=(t.max.x-v.x)*d,a=(t.min.x-v.x)*d),p>=0?(o=(t.min.y-v.y)*p,u=(t.max.y-v.y)*p):(o=(t.max.y-v.y)*p,u=(t.min.y-v.y)*p),i>u||o>a||((o>i||isNaN(i))&&(i=o),(u<a||isNaN(a))&&(a=u),g>=0?(c=(t.min.z-v.z)*g,h=(t.max.z-v.z)*g):(c=(t.max.z-v.z)*g,h=(t.min.z-v.z)*g),i>h||c>a)||((c>i||i!==i)&&(i=c),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,i,a,o){gc.subVectors(e,t),fo.subVectors(i,t),vc.crossVectors(gc,fo);let u=this.direction.dot(vc),c;if(u>0){if(a)return null;c=1}else if(u<0)c=-1,u=-u;else return null;ir.subVectors(this.origin,t);const h=c*this.direction.dot(fo.crossVectors(ir,fo));if(h<0)return null;const d=c*this.direction.dot(gc.cross(ir));if(d<0||h+d>u)return null;const p=-c*ir.dot(vc);return p<0?null:this.at(p/u,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,i,a,o,u,c,h,d,p,g,v,x,S,b,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,o,u,c,h,d,p,g,v,x,S,b,m)}set(t,e,i,a,o,u,c,h,d,p,g,v,x,S,b,m){const _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=a,_[1]=o,_[5]=u,_[9]=c,_[13]=h,_[2]=d,_[6]=p,_[10]=g,_[14]=v,_[3]=x,_[7]=S,_[11]=b,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,a=1/hs.setFromMatrixColumn(t,0).length(),o=1/hs.setFromMatrixColumn(t,1).length(),u=1/hs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*u,e[9]=i[9]*u,e[10]=i[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,o=t.z,u=Math.cos(i),c=Math.sin(i),h=Math.cos(a),d=Math.sin(a),p=Math.cos(o),g=Math.sin(o);if(t.order==="XYZ"){const v=u*p,x=u*g,S=c*p,b=c*g;e[0]=h*p,e[4]=-h*g,e[8]=d,e[1]=x+S*d,e[5]=v-b*d,e[9]=-c*h,e[2]=b-v*d,e[6]=S+x*d,e[10]=u*h}else if(t.order==="YXZ"){const v=h*p,x=h*g,S=d*p,b=d*g;e[0]=v+b*c,e[4]=S*c-x,e[8]=u*d,e[1]=u*g,e[5]=u*p,e[9]=-c,e[2]=x*c-S,e[6]=b+v*c,e[10]=u*h}else if(t.order==="ZXY"){const v=h*p,x=h*g,S=d*p,b=d*g;e[0]=v-b*c,e[4]=-u*g,e[8]=S+x*c,e[1]=x+S*c,e[5]=u*p,e[9]=b-v*c,e[2]=-u*d,e[6]=c,e[10]=u*h}else if(t.order==="ZYX"){const v=u*p,x=u*g,S=c*p,b=c*g;e[0]=h*p,e[4]=S*d-x,e[8]=v*d+b,e[1]=h*g,e[5]=b*d+v,e[9]=x*d-S,e[2]=-d,e[6]=c*h,e[10]=u*h}else if(t.order==="YZX"){const v=u*h,x=u*d,S=c*h,b=c*d;e[0]=h*p,e[4]=b-v*g,e[8]=S*g+x,e[1]=g,e[5]=u*p,e[9]=-c*p,e[2]=-d*p,e[6]=x*g+S,e[10]=v-b*g}else if(t.order==="XZY"){const v=u*h,x=u*d,S=c*h,b=c*d;e[0]=h*p,e[4]=-g,e[8]=d*p,e[1]=v*g+b,e[5]=u*p,e[9]=x*g-S,e[2]=S*g-x,e[6]=c*p,e[10]=b*g+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(aE,t,oE)}lookAt(t,e,i){const a=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),rr.crossVectors(i,Hn),rr.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),rr.crossVectors(i,Hn)),rr.normalize(),po.crossVectors(Hn,rr),a[0]=rr.x,a[4]=po.x,a[8]=Hn.x,a[1]=rr.y,a[5]=po.y,a[9]=Hn.y,a[2]=rr.z,a[6]=po.z,a[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,o=this.elements,u=i[0],c=i[4],h=i[8],d=i[12],p=i[1],g=i[5],v=i[9],x=i[13],S=i[2],b=i[6],m=i[10],_=i[14],L=i[3],T=i[7],N=i[11],H=i[15],O=a[0],U=a[4],tt=a[8],vt=a[12],A=a[1],I=a[5],ct=a[9],mt=a[13],B=a[2],J=a[6],j=a[10],st=a[14],et=a[3],rt=a[7],ft=a[11],ot=a[15];return o[0]=u*O+c*A+h*B+d*et,o[4]=u*U+c*I+h*J+d*rt,o[8]=u*tt+c*ct+h*j+d*ft,o[12]=u*vt+c*mt+h*st+d*ot,o[1]=p*O+g*A+v*B+x*et,o[5]=p*U+g*I+v*J+x*rt,o[9]=p*tt+g*ct+v*j+x*ft,o[13]=p*vt+g*mt+v*st+x*ot,o[2]=S*O+b*A+m*B+_*et,o[6]=S*U+b*I+m*J+_*rt,o[10]=S*tt+b*ct+m*j+_*ft,o[14]=S*vt+b*mt+m*st+_*ot,o[3]=L*O+T*A+N*B+H*et,o[7]=L*U+T*I+N*J+H*rt,o[11]=L*tt+T*ct+N*j+H*ft,o[15]=L*vt+T*mt+N*st+H*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],o=t[12],u=t[1],c=t[5],h=t[9],d=t[13],p=t[2],g=t[6],v=t[10],x=t[14],S=t[3],b=t[7],m=t[11],_=t[15];return S*(+o*h*g-a*d*g-o*c*v+i*d*v+a*c*x-i*h*x)+b*(+e*h*x-e*d*v+o*u*v-a*u*x+a*d*p-o*h*p)+m*(+e*d*g-e*c*x-o*u*g+i*u*x+o*c*p-i*d*p)+_*(-a*c*p-e*h*g+e*c*v+a*u*g-i*u*v+i*h*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],o=t[3],u=t[4],c=t[5],h=t[6],d=t[7],p=t[8],g=t[9],v=t[10],x=t[11],S=t[12],b=t[13],m=t[14],_=t[15],L=g*m*d-b*v*d+b*h*x-c*m*x-g*h*_+c*v*_,T=S*v*d-p*m*d-S*h*x+u*m*x+p*h*_-u*v*_,N=p*b*d-S*g*d+S*c*x-u*b*x-p*c*_+u*g*_,H=S*g*h-p*b*h-S*c*v+u*b*v+p*c*m-u*g*m,O=e*L+i*T+a*N+o*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return t[0]=L*U,t[1]=(b*v*o-g*m*o-b*a*x+i*m*x+g*a*_-i*v*_)*U,t[2]=(c*m*o-b*h*o+b*a*d-i*m*d-c*a*_+i*h*_)*U,t[3]=(g*h*o-c*v*o-g*a*d+i*v*d+c*a*x-i*h*x)*U,t[4]=T*U,t[5]=(p*m*o-S*v*o+S*a*x-e*m*x-p*a*_+e*v*_)*U,t[6]=(S*h*o-u*m*o-S*a*d+e*m*d+u*a*_-e*h*_)*U,t[7]=(u*v*o-p*h*o+p*a*d-e*v*d-u*a*x+e*h*x)*U,t[8]=N*U,t[9]=(S*g*o-p*b*o-S*i*x+e*b*x+p*i*_-e*g*_)*U,t[10]=(u*b*o-S*c*o+S*i*d-e*b*d-u*i*_+e*c*_)*U,t[11]=(p*c*o-u*g*o-p*i*d+e*g*d+u*i*x-e*c*x)*U,t[12]=H*U,t[13]=(p*b*a-S*g*a+S*i*v-e*b*v-p*i*m+e*g*m)*U,t[14]=(S*c*a-u*b*a-S*i*h+e*b*h+u*i*m-e*c*m)*U,t[15]=(u*g*a-p*c*a+p*i*h-e*g*h-u*i*v+e*c*v)*U,this}scale(t){const e=this.elements,i=t.x,a=t.y,o=t.z;return e[0]*=i,e[4]*=a,e[8]*=o,e[1]*=i,e[5]*=a,e[9]*=o,e[2]*=i,e[6]*=a,e[10]*=o,e[3]*=i,e[7]*=a,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),o=1-i,u=t.x,c=t.y,h=t.z,d=o*u,p=o*c;return this.set(d*u+i,d*c-a*h,d*h+a*c,0,d*c+a*h,p*c+i,p*h-a*u,0,d*h-a*c,p*h+a*u,o*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,o,u){return this.set(1,i,o,0,t,1,u,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,o=e._x,u=e._y,c=e._z,h=e._w,d=o+o,p=u+u,g=c+c,v=o*d,x=o*p,S=o*g,b=u*p,m=u*g,_=c*g,L=h*d,T=h*p,N=h*g,H=i.x,O=i.y,U=i.z;return a[0]=(1-(b+_))*H,a[1]=(x+N)*H,a[2]=(S-T)*H,a[3]=0,a[4]=(x-N)*O,a[5]=(1-(v+_))*O,a[6]=(m+L)*O,a[7]=0,a[8]=(S+T)*U,a[9]=(m-L)*U,a[10]=(1-(v+b))*U,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;let o=hs.set(a[0],a[1],a[2]).length();const u=hs.set(a[4],a[5],a[6]).length(),c=hs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),t.x=a[12],t.y=a[13],t.z=a[14],ui.copy(this);const d=1/o,p=1/u,g=1/c;return ui.elements[0]*=d,ui.elements[1]*=d,ui.elements[2]*=d,ui.elements[4]*=p,ui.elements[5]*=p,ui.elements[6]*=p,ui.elements[8]*=g,ui.elements[9]*=g,ui.elements[10]*=g,e.setFromRotationMatrix(ui),i.x=o,i.y=u,i.z=c,this}makePerspective(t,e,i,a,o,u,c=Wi){const h=this.elements,d=2*o/(e-t),p=2*o/(i-a),g=(e+t)/(e-t),v=(i+a)/(i-a);let x,S;if(c===Wi)x=-(u+o)/(u-o),S=-2*u*o/(u-o);else if(c===zo)x=-u/(u-o),S=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=p,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,a,o,u,c=Wi){const h=this.elements,d=1/(e-t),p=1/(i-a),g=1/(u-o),v=(e+t)*d,x=(i+a)*p;let S,b;if(c===Wi)S=(u+o)*g,b=-2*g;else if(c===zo)S=o*g,b=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=b,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hs=new V,ui=new $t,aE=new V(0,0,0),oE=new V(1,1,1),rr=new V,po=new V,Hn=new V,sd=new $t,ad=new Us;class ko{constructor(t=0,e=0,i=0,a=ko.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,o=a[0],u=a[4],c=a[8],h=a[1],d=a[5],p=a[9],g=a[2],v=a[6],x=a[10];switch(e){case"XYZ":this._y=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,x),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(hn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-hn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(hn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return sd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ad.setFromEuler(this),this.setFromQuaternion(ad,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ko.DEFAULT_ORDER="XYZ";class Jc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lE=0;const od=new V,fs=new Us,Oi=new $t,mo=new V,sa=new V,cE=new V,uE=new Us,ld=new V(1,0,0),cd=new V(0,1,0),ud=new V(0,0,1),hE={type:"added"},fE={type:"removed"};class fn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const t=new V,e=new ko,i=new Us,a=new V(1,1,1);function o(){i.setFromEuler(e,!1)}function u(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new de}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(ld,t)}rotateY(t){return this.rotateOnAxis(cd,t)}rotateZ(t){return this.rotateOnAxis(ud,t)}translateOnAxis(t,e){return od.copy(t).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ld,t)}translateY(t){return this.translateOnAxis(cd,t)}translateZ(t){return this.translateOnAxis(ud,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?mo.copy(t):mo.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(sa,mo,this.up):Oi.lookAt(mo,sa,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),fs.setFromRotationMatrix(Oi),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(hE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fE)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const u=this.children[i].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,t,cE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,uE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++){const o=e[i];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++){const c=a[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const g=h[d];o(t.shapes,g)}else o(t.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(o(t.materials,this.material[h]));a.material=c}else a.material=o(t.materials,this.material);if(this.children.length>0){a.children=[];for(let c=0;c<this.children.length;c++)a.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];a.animations.push(o(t.animations,h))}}if(e){const c=u(t.geometries),h=u(t.materials),d=u(t.textures),p=u(t.images),g=u(t.shapes),v=u(t.skeletons),x=u(t.animations),S=u(t.nodes);c.length>0&&(i.geometries=c),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),x.length>0&&(i.animations=x),S.length>0&&(i.nodes=S)}return i.object=a,i;function u(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}fn.DEFAULT_UP=new V(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new V,zi=new V,xc=new V,Bi=new V,ds=new V,ps=new V,hd=new V,Mc=new V,Sc=new V,Ec=new V;class yi{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),hi.subVectors(t,e),a.cross(hi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(t,e,i,a,o){hi.subVectors(a,e),zi.subVectors(i,e),xc.subVectors(t,e);const u=hi.dot(hi),c=hi.dot(zi),h=hi.dot(xc),d=zi.dot(zi),p=zi.dot(xc),g=u*d-c*c;if(g===0)return o.set(0,0,0),null;const v=1/g,x=(d*h-c*p)*v,S=(u*p-c*h)*v;return o.set(1-x-S,S,x)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(t,e,i,a,o,u,c,h){return this.getBarycoord(t,e,i,a,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Bi.x),h.addScaledVector(u,Bi.y),h.addScaledVector(c,Bi.z),h)}static isFrontFacing(t,e,i,a){return hi.subVectors(i,e),zi.subVectors(t,e),hi.cross(zi).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),hi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,o){return yi.getInterpolation(t,this.a,this.b,this.c,e,i,a,o)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,o=this.c;let u,c;ds.subVectors(a,i),ps.subVectors(o,i),Mc.subVectors(t,i);const h=ds.dot(Mc),d=ps.dot(Mc);if(h<=0&&d<=0)return e.copy(i);Sc.subVectors(t,a);const p=ds.dot(Sc),g=ps.dot(Sc);if(p>=0&&g<=p)return e.copy(a);const v=h*g-p*d;if(v<=0&&h>=0&&p<=0)return u=h/(h-p),e.copy(i).addScaledVector(ds,u);Ec.subVectors(t,o);const x=ds.dot(Ec),S=ps.dot(Ec);if(S>=0&&x<=S)return e.copy(o);const b=x*d-h*S;if(b<=0&&d>=0&&S<=0)return c=d/(d-S),e.copy(i).addScaledVector(ps,c);const m=p*S-x*g;if(m<=0&&g-p>=0&&x-S>=0)return hd.subVectors(o,a),c=(g-p)/(g-p+(x-S)),e.copy(a).addScaledVector(hd,c);const _=1/(m+b+v);return u=b*_,c=v*_,e.copy(i).addScaledVector(ds,u).addScaledVector(ps,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const vp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},_o={h:0,s:0,l:0};function yc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class me{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,i,a=Le.workingColorSpace){return this.r=t,this.g=e,this.b=i,Le.toWorkingColorSpace(this,a),this}setHSL(t,e,i,a=Le.workingColorSpace){if(t=Kc(t,1),e=hn(e,0,1),i=hn(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,u=2*i-o;this.r=yc(u,o,t+1/3),this.g=yc(u,o,t),this.b=yc(u,o,t-1/3)}return Le.toWorkingColorSpace(this,a),this}setStyle(t,e=un){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const u=a[1],c=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=un){const i=vp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=hc(t.r),this.g=hc(t.g),this.b=hc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Le.fromWorkingColorSpace(gn.copy(this),t),Math.round(hn(gn.r*255,0,255))*65536+Math.round(hn(gn.g*255,0,255))*256+Math.round(hn(gn.b*255,0,255))}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(gn.copy(this),e);const i=gn.r,a=gn.g,o=gn.b,u=Math.max(i,a,o),c=Math.min(i,a,o);let h,d;const p=(c+u)/2;if(c===u)h=0,d=0;else{const g=u-c;switch(d=p<=.5?g/(u+c):g/(2-u-c),u){case i:h=(a-o)/g+(a<o?6:0);break;case a:h=(o-i)/g+2;break;case o:h=(i-a)/g+4;break}h/=6}return t.h=h,t.s=d,t.l=p,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=un){Le.fromWorkingColorSpace(gn.copy(this),t);const e=gn.r,i=gn.g,a=gn.b;return t!==un?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(sr),this.setHSL(sr.h+t,sr.s+e,sr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(sr),t.getHSL(_o);const i=ua(sr.h,_o.h,e),a=ua(sr.s,_o.s,e),o=ua(sr.l,_o.l,e);return this.setHSL(i,a,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*a,this.g=o[1]*e+o[4]*i+o[7]*a,this.b=o[2]*e+o[5]*i+o[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new me;me.NAMES=vp;let dE=0;class Fs extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=bs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Fc,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nc&&(i.blendSrc=this.blendSrc),this.blendDst!==Fc&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const u=[];for(const c in o){const h=o[c];delete h.metadata,u.push(h)}return u}if(e){const o=a(t.textures),u=a(t.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xp extends Fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new V,go=new ge;class _i{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=jf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return ws("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)go.fromBufferAttribute(this,e),go.applyMatrix3(t),this.setXY(e,go.x,go.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Es(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array),a=Sn(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,o){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),i=Sn(i,this.array),a=Sn(a,this.array),o=Sn(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jf&&(t.usage=this.usage),t}}class Mp extends _i{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Sp extends _i{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class gi extends _i{constructor(t,e,i){super(new Float32Array(t),e,i)}}let pE=0;const ti=new $t,Tc=new fn,ms=new V,Vn=new Ns,aa=new Ns,on=new V;class Tn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pp(t)?Sp:Mp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new de().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ti.makeRotationFromQuaternion(t),this.applyMatrix4(ti),this}rotateX(t){return ti.makeRotationX(t),this.applyMatrix4(ti),this}rotateY(t){return ti.makeRotationY(t),this.applyMatrix4(ti),this}rotateZ(t){return ti.makeRotationZ(t),this.applyMatrix4(ti),this}translate(t,e,i){return ti.makeTranslation(t,e,i),this.applyMatrix4(ti),this}scale(t,e,i){return ti.makeScale(t,e,i),this.applyMatrix4(ti),this}lookAt(t){return Tc.lookAt(t),Tc.updateMatrix(),this.applyMatrix4(Tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=[];for(let i=0,a=t.length;i<a;i++){const o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new gi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const o=e[i];Vn.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let o=0,u=e.length;o<u;o++){const c=e[o];aa.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(Vn.min,aa.min),Vn.expandByPoint(on),on.addVectors(Vn.max,aa.max),Vn.expandByPoint(on)):(Vn.expandByPoint(aa.min),Vn.expandByPoint(aa.max))}Vn.getCenter(i);let a=0;for(let o=0,u=t.count;o<u;o++)on.fromBufferAttribute(t,o),a=Math.max(a,i.distanceToSquared(on));if(e)for(let o=0,u=e.length;o<u;o++){const c=e[o],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)on.fromBufferAttribute(c,d),h&&(ms.fromBufferAttribute(t,d),on.add(ms)),a=Math.max(a,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,a=e.position.array,o=e.normal.array,u=e.uv.array,c=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,d=[],p=[];for(let A=0;A<c;A++)d[A]=new V,p[A]=new V;const g=new V,v=new V,x=new V,S=new ge,b=new ge,m=new ge,_=new V,L=new V;function T(A,I,ct){g.fromArray(a,A*3),v.fromArray(a,I*3),x.fromArray(a,ct*3),S.fromArray(u,A*2),b.fromArray(u,I*2),m.fromArray(u,ct*2),v.sub(g),x.sub(g),b.sub(S),m.sub(S);const mt=1/(b.x*m.y-m.x*b.y);isFinite(mt)&&(_.copy(v).multiplyScalar(m.y).addScaledVector(x,-b.y).multiplyScalar(mt),L.copy(x).multiplyScalar(b.x).addScaledVector(v,-m.x).multiplyScalar(mt),d[A].add(_),d[I].add(_),d[ct].add(_),p[A].add(L),p[I].add(L),p[ct].add(L))}let N=this.groups;N.length===0&&(N=[{start:0,count:i.length}]);for(let A=0,I=N.length;A<I;++A){const ct=N[A],mt=ct.start,B=ct.count;for(let J=mt,j=mt+B;J<j;J+=3)T(i[J+0],i[J+1],i[J+2])}const H=new V,O=new V,U=new V,tt=new V;function vt(A){U.fromArray(o,A*3),tt.copy(U);const I=d[A];H.copy(I),H.sub(U.multiplyScalar(U.dot(I))).normalize(),O.crossVectors(tt,I);const mt=O.dot(p[A])<0?-1:1;h[A*4]=H.x,h[A*4+1]=H.y,h[A*4+2]=H.z,h[A*4+3]=mt}for(let A=0,I=N.length;A<I;++A){const ct=N[A],mt=ct.start,B=ct.count;for(let J=mt,j=mt+B;J<j;J+=3)vt(i[J+0]),vt(i[J+1]),vt(i[J+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,x=i.count;v<x;v++)i.setXYZ(v,0,0,0);const a=new V,o=new V,u=new V,c=new V,h=new V,d=new V,p=new V,g=new V;if(t)for(let v=0,x=t.count;v<x;v+=3){const S=t.getX(v+0),b=t.getX(v+1),m=t.getX(v+2);a.fromBufferAttribute(e,S),o.fromBufferAttribute(e,b),u.fromBufferAttribute(e,m),p.subVectors(u,o),g.subVectors(a,o),p.cross(g),c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,m),c.add(p),h.add(p),d.add(p),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(m,d.x,d.y,d.z)}else for(let v=0,x=e.count;v<x;v+=3)a.fromBufferAttribute(e,v+0),o.fromBufferAttribute(e,v+1),u.fromBufferAttribute(e,v+2),p.subVectors(u,o),g.subVectors(a,o),p.cross(g),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(c,h){const d=c.array,p=c.itemSize,g=c.normalized,v=new d.constructor(h.length*p);let x=0,S=0;for(let b=0,m=h.length;b<m;b++){c.isInterleavedBufferAttribute?x=h[b]*c.data.stride+c.offset:x=h[b]*p;for(let _=0;_<p;_++)v[S++]=d[x++]}return new _i(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Tn,i=this.index.array,a=this.attributes;for(const c in a){const h=a[c],d=t(h,i);e.setAttribute(c,d)}const o=this.morphAttributes;for(const c in o){const h=[],d=o[c];for(let p=0,g=d.length;p<g;p++){const v=d[p],x=t(v,i);h.push(x)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,h=u.length;c<h;c++){const d=u[c];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const d=i[h];t.data.attributes[h]=d.toJSON(t.data)}const a={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let g=0,v=d.length;g<v;g++){const x=d[g];p.push(x.toJSON(t.data))}p.length>0&&(a[h]=p,o=!0)}o&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const a=t.attributes;for(const d in a){const p=a[d];this.setAttribute(d,p.clone(e))}const o=t.morphAttributes;for(const d in o){const p=[],g=o[d];for(let v=0,x=g.length;v<x;v++)p.push(g[v].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,p=u.length;d<p;d++){const g=u[d];this.addGroup(g.start,g.count,g.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fd=new $t,Tr=new $c,vo=new da,dd=new V,_s=new V,gs=new V,vs=new V,Ac=new V,xo=new V,Mo=new ge,So=new ge,Eo=new ge,pd=new V,md=new V,_d=new V,yo=new V,To=new V;class Ti extends fn{constructor(t=new Tn,e=new xp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const c=this.morphTargetInfluences;if(o&&c){xo.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=c[h],g=o[h];p!==0&&(Ac.fromBufferAttribute(g,t),u?xo.addScaledVector(Ac,p):xo.addScaledVector(Ac.sub(e),p))}e.add(xo)}return e}raycast(t,e){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(o),Tr.copy(t.ray).recast(t.near),!(vo.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(vo,dd)===null||Tr.origin.distanceToSquared(dd)>(t.far-t.near)**2))&&(fd.copy(o).invert(),Tr.copy(t.ray).applyMatrix4(fd),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Tr)))}_computeIntersections(t,e,i){let a;const o=this.geometry,u=this.material,c=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,v=o.groups,x=o.drawRange;if(c!==null)if(Array.isArray(u))for(let S=0,b=v.length;S<b;S++){const m=v[S],_=u[m.materialIndex],L=Math.max(m.start,x.start),T=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let N=L,H=T;N<H;N+=3){const O=c.getX(N),U=c.getX(N+1),tt=c.getX(N+2);a=Ao(this,_,t,i,d,p,g,O,U,tt),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const S=Math.max(0,x.start),b=Math.min(c.count,x.start+x.count);for(let m=S,_=b;m<_;m+=3){const L=c.getX(m),T=c.getX(m+1),N=c.getX(m+2);a=Ao(this,u,t,i,d,p,g,L,T,N),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let S=0,b=v.length;S<b;S++){const m=v[S],_=u[m.materialIndex],L=Math.max(m.start,x.start),T=Math.min(h.count,Math.min(m.start+m.count,x.start+x.count));for(let N=L,H=T;N<H;N+=3){const O=N,U=N+1,tt=N+2;a=Ao(this,_,t,i,d,p,g,O,U,tt),a&&(a.faceIndex=Math.floor(N/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const S=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let m=S,_=b;m<_;m+=3){const L=m,T=m+1,N=m+2;a=Ao(this,u,t,i,d,p,g,L,T,N),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function mE(s,t,e,i,a,o,u,c){let h;if(t.side===An?h=i.intersectTriangle(u,o,a,!0,c):h=i.intersectTriangle(a,o,u,t.side===hr,c),h===null)return null;To.copy(c),To.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(To);return d<e.near||d>e.far?null:{distance:d,point:To.clone(),object:s}}function Ao(s,t,e,i,a,o,u,c,h,d){s.getVertexPosition(c,_s),s.getVertexPosition(h,gs),s.getVertexPosition(d,vs);const p=mE(s,t,e,i,_s,gs,vs,yo);if(p){a&&(Mo.fromBufferAttribute(a,c),So.fromBufferAttribute(a,h),Eo.fromBufferAttribute(a,d),p.uv=yi.getInterpolation(yo,_s,gs,vs,Mo,So,Eo,new ge)),o&&(Mo.fromBufferAttribute(o,c),So.fromBufferAttribute(o,h),Eo.fromBufferAttribute(o,d),p.uv1=yi.getInterpolation(yo,_s,gs,vs,Mo,So,Eo,new ge),p.uv2=p.uv1),u&&(pd.fromBufferAttribute(u,c),md.fromBufferAttribute(u,h),_d.fromBufferAttribute(u,d),p.normal=yi.getInterpolation(yo,_s,gs,vs,pd,md,_d,new V),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:h,c:d,normal:new V,materialIndex:0};yi.getNormal(_s,gs,vs,g.normal),p.face=g}return p}class pa extends Tn{constructor(t=1,e=1,i=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:o,depthSegments:u};const c=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const h=[],d=[],p=[],g=[];let v=0,x=0;S("z","y","x",-1,-1,i,e,t,u,o,0),S("z","y","x",1,-1,i,e,-t,u,o,1),S("x","z","y",1,1,t,i,e,a,u,2),S("x","z","y",1,-1,t,i,-e,a,u,3),S("x","y","z",1,-1,t,e,i,a,o,4),S("x","y","z",-1,-1,t,e,-i,a,o,5),this.setIndex(h),this.setAttribute("position",new gi(d,3)),this.setAttribute("normal",new gi(p,3)),this.setAttribute("uv",new gi(g,2));function S(b,m,_,L,T,N,H,O,U,tt,vt){const A=N/U,I=H/tt,ct=N/2,mt=H/2,B=O/2,J=U+1,j=tt+1;let st=0,et=0;const rt=new V;for(let ft=0;ft<j;ft++){const ot=ft*I-mt;for(let Ct=0;Ct<J;Ct++){const Zt=Ct*A-ct;rt[b]=Zt*L,rt[m]=ot*T,rt[_]=B,d.push(rt.x,rt.y,rt.z),rt[b]=0,rt[m]=0,rt[_]=O>0?1:-1,p.push(rt.x,rt.y,rt.z),g.push(Ct/U),g.push(1-ft/tt),st+=1}}for(let ft=0;ft<tt;ft++)for(let ot=0;ot<U;ot++){const Ct=v+ot+J*ft,Zt=v+ot+J*(ft+1),$=v+(ot+1)+J*(ft+1),ut=v+(ot+1)+J*ft;h.push(Ct,Zt,ut),h.push(Zt,$,ut),et+=6}c.addGroup(x,et,vt),x+=et,v+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const a=s[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function En(s){const t={};for(let e=0;e<s.length;e++){const i=Ds(s[e]);for(const a in i)t[a]=i[a]}return t}function _E(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ep(s){return s.getRenderTarget()===null?s.outputColorSpace:Le.workingColorSpace}const gE={clone:Ds,merge:En};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends Fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=xE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=_E(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?e.uniforms[a]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[a]={type:"m4",value:u.toArray()}:e.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class yp extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new V,gd=new ge,vd=new ge;class ni extends yp{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ar.x,ar.y).multiplyScalar(-t/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-t/ar.z)}getViewSize(t,e){return this.getViewBounds(t,gd,vd),e.subVectors(vd,gd)}setViewOffset(t,e,i,a,o,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ca*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,d=u.fullHeight;o+=u.offsetX*a/h,e-=u.offsetY*i/d,a*=u.width/h,i*=u.height/d}const c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,Ms=1;class ME extends fn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ni(xs,Ms,t,e);a.layers=this.layers,this.add(a);const o=new ni(xs,Ms,t,e);o.layers=this.layers,this.add(o);const u=new ni(xs,Ms,t,e);u.layers=this.layers,this.add(u);const c=new ni(xs,Ms,t,e);c.layers=this.layers,this.add(c);const h=new ni(xs,Ms,t,e);h.layers=this.layers,this.add(h);const d=new ni(xs,Ms,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,o,u,c,h]=e;for(const d of e)this.remove(d);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,h,d,p]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,o),t.setRenderTarget(i,1,a),t.render(e,u),t.setRenderTarget(i,2,a),t.render(e,c),t.setRenderTarget(i,3,a),t.render(e,h),t.setRenderTarget(i,4,a),t.render(e,d),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,a),t.render(e,p),t.setRenderTarget(g,v,x),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class Tp extends Un{constructor(t,e,i,a,o,u,c,h,d,p){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,i,a,o,u,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class SE extends Or{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];e.encoding!==void 0&&(ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Nr?un:ii),this.texture=new Tp(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new pa(5,5,5),o=new fr({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:lr});o.uniforms.tEquirect.value=e;const u=new Ti(a,o),c=e.minFilter;return e.minFilter===Dr&&(e.minFilter=In),new ME(1,10,this).update(t,u),e.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(t,e,i,a){const o=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,i,a);t.setRenderTarget(o)}}const bc=new V,EE=new V,yE=new de;class Rr{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=bc.subVectors(i,e).cross(EE.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(bc),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||yE.getNormalMatrix(t),a=this.coplanarPoint(bc).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new da,bo=new V;class jc{constructor(t=new Rr,e=new Rr,i=new Rr,a=new Rr,o=new Rr,u=new Rr){this.planes=[t,e,i,a,o,u]}set(t,e,i,a,o,u){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(a),c[4].copy(o),c[5].copy(u),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi){const i=this.planes,a=t.elements,o=a[0],u=a[1],c=a[2],h=a[3],d=a[4],p=a[5],g=a[6],v=a[7],x=a[8],S=a[9],b=a[10],m=a[11],_=a[12],L=a[13],T=a[14],N=a[15];if(i[0].setComponents(h-o,v-d,m-x,N-_).normalize(),i[1].setComponents(h+o,v+d,m+x,N+_).normalize(),i[2].setComponents(h+u,v+p,m+S,N+L).normalize(),i[3].setComponents(h-u,v-p,m-S,N-L).normalize(),i[4].setComponents(h-c,v-g,m-b,N-T).normalize(),e===Wi)i[5].setComponents(h+c,v+g,m+b,N+T).normalize();else if(e===zo)i[5].setComponents(c,g,b,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(bo.x=a.normal.x>0?t.max.x:t.min.x,bo.y=a.normal.y>0?t.max.y:t.min.y,bo.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ap(){let s=null,t=!1,e=null,i=null;function a(o,u){e(o,u),i=s.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(a),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function TE(s,t){const e=t.isWebGL2,i=new WeakMap;function a(d,p){const g=d.array,v=d.usage,x=g.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,g,v),d.onUploadCallback();let b;if(g instanceof Float32Array)b=s.FLOAT;else if(g instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)b=s.SHORT;else if(g instanceof Uint32Array)b=s.UNSIGNED_INT;else if(g instanceof Int32Array)b=s.INT;else if(g instanceof Int8Array)b=s.BYTE;else if(g instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:S,type:b,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:x}}function o(d,p,g){const v=p.array,x=p._updateRange,S=p.updateRanges;if(s.bindBuffer(g,d),x.count===-1&&S.length===0&&s.bufferSubData(g,0,v),S.length!==0){for(let b=0,m=S.length;b<m;b++){const _=S[b];e?s.bufferSubData(g,_.start*v.BYTES_PER_ELEMENT,v,_.start,_.count):s.bufferSubData(g,_.start*v.BYTES_PER_ELEMENT,v.subarray(_.start,_.start+_.count))}p.clearUpdateRanges()}x.count!==-1&&(e?s.bufferSubData(g,x.offset*v.BYTES_PER_ELEMENT,v,x.offset,x.count):s.bufferSubData(g,x.offset*v.BYTES_PER_ELEMENT,v.subarray(x.offset,x.offset+x.count)),x.count=-1),p.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=i.get(d);p&&(s.deleteBuffer(p.buffer),i.delete(d))}function h(d,p){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const g=i.get(d);if(g===void 0)i.set(d,a(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(g.buffer,d,p),g.version=d.version}}return{get:u,remove:c,update:h}}class Xo extends Tn{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const o=t/2,u=e/2,c=Math.floor(i),h=Math.floor(a),d=c+1,p=h+1,g=t/c,v=e/h,x=[],S=[],b=[],m=[];for(let _=0;_<p;_++){const L=_*v-u;for(let T=0;T<d;T++){const N=T*g-o;S.push(N,-L,0),b.push(0,0,1),m.push(T/c),m.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<c;L++){const T=L+d*_,N=L+d*(_+1),H=L+1+d*(_+1),O=L+1+d*_;x.push(T,N,O),x.push(N,H,O)}this.setIndex(x),this.setAttribute("position",new gi(S,3)),this.setAttribute("normal",new gi(b,3)),this.setAttribute("uv",new gi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.width,t.height,t.widthSegments,t.heightSegments)}}var AE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,NE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,YE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ZE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$E=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ty=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ny=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ly=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,my=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,My=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ty=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ay=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,by=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ry=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Py=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ly=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ny=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Oy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,By=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,oT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ET=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,DT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:AE,alphahash_pars_fragment:bE,alphamap_fragment:wE,alphamap_pars_fragment:RE,alphatest_fragment:CE,alphatest_pars_fragment:PE,aomap_fragment:LE,aomap_pars_fragment:DE,batching_pars_vertex:IE,batching_vertex:UE,begin_vertex:NE,beginnormal_vertex:FE,bsdfs:OE,iridescence_fragment:zE,bumpmap_pars_fragment:BE,clipping_planes_fragment:GE,clipping_planes_pars_fragment:HE,clipping_planes_pars_vertex:VE,clipping_planes_vertex:WE,color_fragment:kE,color_pars_fragment:XE,color_pars_vertex:qE,color_vertex:YE,common:ZE,cube_uv_reflection_fragment:KE,defaultnormal_vertex:$E,displacementmap_pars_vertex:JE,displacementmap_vertex:jE,emissivemap_fragment:QE,emissivemap_pars_fragment:ty,colorspace_fragment:ey,colorspace_pars_fragment:ny,envmap_fragment:iy,envmap_common_pars_fragment:ry,envmap_pars_fragment:sy,envmap_pars_vertex:ay,envmap_physical_pars_fragment:vy,envmap_vertex:oy,fog_vertex:ly,fog_pars_vertex:cy,fog_fragment:uy,fog_pars_fragment:hy,gradientmap_pars_fragment:fy,lightmap_fragment:dy,lightmap_pars_fragment:py,lights_lambert_fragment:my,lights_lambert_pars_fragment:_y,lights_pars_begin:gy,lights_toon_fragment:xy,lights_toon_pars_fragment:My,lights_phong_fragment:Sy,lights_phong_pars_fragment:Ey,lights_physical_fragment:yy,lights_physical_pars_fragment:Ty,lights_fragment_begin:Ay,lights_fragment_maps:by,lights_fragment_end:wy,logdepthbuf_fragment:Ry,logdepthbuf_pars_fragment:Cy,logdepthbuf_pars_vertex:Py,logdepthbuf_vertex:Ly,map_fragment:Dy,map_pars_fragment:Iy,map_particle_fragment:Uy,map_particle_pars_fragment:Ny,metalnessmap_fragment:Fy,metalnessmap_pars_fragment:Oy,morphcolor_vertex:zy,morphnormal_vertex:By,morphtarget_pars_vertex:Gy,morphtarget_vertex:Hy,normal_fragment_begin:Vy,normal_fragment_maps:Wy,normal_pars_fragment:ky,normal_pars_vertex:Xy,normal_vertex:qy,normalmap_pars_fragment:Yy,clearcoat_normal_fragment_begin:Zy,clearcoat_normal_fragment_maps:Ky,clearcoat_pars_fragment:$y,iridescence_pars_fragment:Jy,opaque_fragment:jy,packing:Qy,premultiplied_alpha_fragment:tT,project_vertex:eT,dithering_fragment:nT,dithering_pars_fragment:iT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:sT,shadowmap_pars_fragment:aT,shadowmap_pars_vertex:oT,shadowmap_vertex:lT,shadowmask_pars_fragment:cT,skinbase_vertex:uT,skinning_pars_vertex:hT,skinning_vertex:fT,skinnormal_vertex:dT,specularmap_fragment:pT,specularmap_pars_fragment:mT,tonemapping_fragment:_T,tonemapping_pars_fragment:gT,transmission_fragment:vT,transmission_pars_fragment:xT,uv_pars_fragment:MT,uv_pars_vertex:ST,uv_vertex:ET,worldpos_vertex:yT,background_vert:TT,background_frag:AT,backgroundCube_vert:bT,backgroundCube_frag:wT,cube_vert:RT,cube_frag:CT,depth_vert:PT,depth_frag:LT,distanceRGBA_vert:DT,distanceRGBA_frag:IT,equirect_vert:UT,equirect_frag:NT,linedashed_vert:FT,linedashed_frag:OT,meshbasic_vert:zT,meshbasic_frag:BT,meshlambert_vert:GT,meshlambert_frag:HT,meshmatcap_vert:VT,meshmatcap_frag:WT,meshnormal_vert:kT,meshnormal_frag:XT,meshphong_vert:qT,meshphong_frag:YT,meshphysical_vert:ZT,meshphysical_frag:KT,meshtoon_vert:$T,meshtoon_frag:JT,points_vert:jT,points_frag:QT,shadow_vert:tA,shadow_frag:eA,sprite_vert:nA,sprite_frag:iA},xt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ei={basic:{uniforms:En([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:En([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new me(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:En([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:En([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:En([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new me(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:En([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:En([xt.points,xt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:En([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:En([xt.common,xt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:En([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:En([xt.sprite,xt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:En([xt.common,xt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:En([xt.lights,xt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ei.physical={uniforms:En([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const wo={r:0,b:0,g:0};function rA(s,t,e,i,a,o,u){const c=new me(0);let h=o===!0?0:1,d,p,g=null,v=0,x=null;function S(m,_){let L=!1,T=_.isScene===!0?_.background:null;T&&T.isTexture&&(T=(_.backgroundBlurriness>0?e:t).get(T)),T===null?b(c,h):T&&T.isColor&&(b(T,1),L=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||L)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Vo)?(p===void 0&&(p=new Ti(new pa(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:Ds(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=T,p.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=Le.getTransfer(T.colorSpace)!==Be,(g!==T||v!==T.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,g=T,v=T.version,x=s.toneMapping),p.layers.enableAll(),m.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new Ti(new Xo(2,2),new fr({name:"BackgroundMaterial",uniforms:Ds(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=Le.getTransfer(T.colorSpace)!==Be,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(g!==T||v!==T.version||x!==s.toneMapping)&&(d.material.needsUpdate=!0,g=T,v=T.version,x=s.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null))}function b(m,_){m.getRGB(wo,Ep(s)),i.buffers.color.setClear(wo.r,wo.g,wo.b,_,u)}return{getClearColor:function(){return c},setClearColor:function(m,_=1){c.set(m),h=_,b(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,b(c,h)},render:S}}function sA(s,t,e,i){const a=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:t.get("OES_vertex_array_object"),u=i.isWebGL2||o!==null,c={},h=m(null);let d=h,p=!1;function g(B,J,j,st,et){let rt=!1;if(u){const ft=b(st,j,J);d!==ft&&(d=ft,x(d.object)),rt=_(B,st,j,et),rt&&L(B,st,j,et)}else{const ft=J.wireframe===!0;(d.geometry!==st.id||d.program!==j.id||d.wireframe!==ft)&&(d.geometry=st.id,d.program=j.id,d.wireframe=ft,rt=!0)}et!==null&&e.update(et,s.ELEMENT_ARRAY_BUFFER),(rt||p)&&(p=!1,tt(B,J,j,st),et!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(et).buffer))}function v(){return i.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function x(B){return i.isWebGL2?s.bindVertexArray(B):o.bindVertexArrayOES(B)}function S(B){return i.isWebGL2?s.deleteVertexArray(B):o.deleteVertexArrayOES(B)}function b(B,J,j){const st=j.wireframe===!0;let et=c[B.id];et===void 0&&(et={},c[B.id]=et);let rt=et[J.id];rt===void 0&&(rt={},et[J.id]=rt);let ft=rt[st];return ft===void 0&&(ft=m(v()),rt[st]=ft),ft}function m(B){const J=[],j=[],st=[];for(let et=0;et<a;et++)J[et]=0,j[et]=0,st[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:j,attributeDivisors:st,object:B,attributes:{},index:null}}function _(B,J,j,st){const et=d.attributes,rt=J.attributes;let ft=0;const ot=j.getAttributes();for(const Ct in ot)if(ot[Ct].location>=0){const $=et[Ct];let ut=rt[Ct];if(ut===void 0&&(Ct==="instanceMatrix"&&B.instanceMatrix&&(ut=B.instanceMatrix),Ct==="instanceColor"&&B.instanceColor&&(ut=B.instanceColor)),$===void 0||$.attribute!==ut||ut&&$.data!==ut.data)return!0;ft++}return d.attributesNum!==ft||d.index!==st}function L(B,J,j,st){const et={},rt=J.attributes;let ft=0;const ot=j.getAttributes();for(const Ct in ot)if(ot[Ct].location>=0){let $=rt[Ct];$===void 0&&(Ct==="instanceMatrix"&&B.instanceMatrix&&($=B.instanceMatrix),Ct==="instanceColor"&&B.instanceColor&&($=B.instanceColor));const ut={};ut.attribute=$,$&&$.data&&(ut.data=$.data),et[Ct]=ut,ft++}d.attributes=et,d.attributesNum=ft,d.index=st}function T(){const B=d.newAttributes;for(let J=0,j=B.length;J<j;J++)B[J]=0}function N(B){H(B,0)}function H(B,J){const j=d.newAttributes,st=d.enabledAttributes,et=d.attributeDivisors;j[B]=1,st[B]===0&&(s.enableVertexAttribArray(B),st[B]=1),et[B]!==J&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,J),et[B]=J)}function O(){const B=d.newAttributes,J=d.enabledAttributes;for(let j=0,st=J.length;j<st;j++)J[j]!==B[j]&&(s.disableVertexAttribArray(j),J[j]=0)}function U(B,J,j,st,et,rt,ft){ft===!0?s.vertexAttribIPointer(B,J,j,et,rt):s.vertexAttribPointer(B,J,j,st,et,rt)}function tt(B,J,j,st){if(i.isWebGL2===!1&&(B.isInstancedMesh||st.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;T();const et=st.attributes,rt=j.getAttributes(),ft=J.defaultAttributeValues;for(const ot in rt){const Ct=rt[ot];if(Ct.location>=0){let Zt=et[ot];if(Zt===void 0&&(ot==="instanceMatrix"&&B.instanceMatrix&&(Zt=B.instanceMatrix),ot==="instanceColor"&&B.instanceColor&&(Zt=B.instanceColor)),Zt!==void 0){const $=Zt.normalized,ut=Zt.itemSize,yt=e.get(Zt);if(yt===void 0)continue;const Gt=yt.buffer,Ot=yt.type,wt=yt.bytesPerElement,xe=i.isWebGL2===!0&&(Ot===s.INT||Ot===s.UNSIGNED_INT||Zt.gpuType===rp);if(Zt.isInterleavedBufferAttribute){const Kt=Zt.data,k=Kt.stride,Ke=Zt.offset;if(Kt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Ct.locationSize;Pt++)H(Ct.location+Pt,Kt.meshPerAttribute);B.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Kt.meshPerAttribute*Kt.count)}else for(let Pt=0;Pt<Ct.locationSize;Pt++)N(Ct.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let Pt=0;Pt<Ct.locationSize;Pt++)U(Ct.location+Pt,ut/Ct.locationSize,Ot,$,k*wt,(Ke+ut/Ct.locationSize*Pt)*wt,xe)}else{if(Zt.isInstancedBufferAttribute){for(let Kt=0;Kt<Ct.locationSize;Kt++)H(Ct.location+Kt,Zt.meshPerAttribute);B.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Zt.meshPerAttribute*Zt.count)}else for(let Kt=0;Kt<Ct.locationSize;Kt++)N(Ct.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let Kt=0;Kt<Ct.locationSize;Kt++)U(Ct.location+Kt,ut/Ct.locationSize,Ot,$,ut*wt,ut/Ct.locationSize*Kt*wt,xe)}}else if(ft!==void 0){const $=ft[ot];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(Ct.location,$);break;case 3:s.vertexAttrib3fv(Ct.location,$);break;case 4:s.vertexAttrib4fv(Ct.location,$);break;default:s.vertexAttrib1fv(Ct.location,$)}}}}O()}function vt(){ct();for(const B in c){const J=c[B];for(const j in J){const st=J[j];for(const et in st)S(st[et].object),delete st[et];delete J[j]}delete c[B]}}function A(B){if(c[B.id]===void 0)return;const J=c[B.id];for(const j in J){const st=J[j];for(const et in st)S(st[et].object),delete st[et];delete J[j]}delete c[B.id]}function I(B){for(const J in c){const j=c[J];if(j[B.id]===void 0)continue;const st=j[B.id];for(const et in st)S(st[et].object),delete st[et];delete j[B.id]}}function ct(){mt(),p=!0,d!==h&&(d=h,x(d.object))}function mt(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:g,reset:ct,resetDefaultState:mt,dispose:vt,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:N,disableUnusedAttributes:O}}function aA(s,t,e,i){const a=i.isWebGL2;let o;function u(p){o=p}function c(p,g){s.drawArrays(o,p,g),e.update(g,o,1)}function h(p,g,v){if(v===0)return;let x,S;if(a)x=s,S="drawArraysInstanced";else if(x=t.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[S](o,p,g,v),e.update(g,o,v)}function d(p,g,v){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<v;S++)this.render(p[S],g[S]);else{x.multiDrawArraysWEBGL(o,p,0,g,0,v);let S=0;for(let b=0;b<v;b++)S+=g[b];e.update(S,o,1)}}this.setMode=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function oA(s,t,e){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const u=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=e.precision!==void 0?e.precision:"highp";const h=o(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=u||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,g=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,N=u||t.has("OES_texture_float"),H=T&&N,O=u?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:u,drawBuffers:d,getMaxAnisotropy:a,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:L,vertexTextures:T,floatFragmentTextures:N,floatVertexTextures:H,maxSamples:O}}function lA(s){const t=this;let e=null,i=0,a=!1,o=!1;const u=new Rr,c=new de,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||i!==0||a;return a=v,i=g.length,x},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,v){e=p(g,v,0)},this.setState=function(g,v,x){const S=g.clippingPlanes,b=g.clipIntersection,m=g.clipShadows,_=s.get(g);if(!a||S===null||S.length===0||o&&!m)o?p(null):d();else{const L=o?0:i,T=L*4;let N=_.clippingState||null;h.value=N,N=p(S,v,T,x);for(let H=0;H!==T;++H)N[H]=e[H];_.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(g,v,x,S){const b=g!==null?g.length:0;let m=null;if(b!==0){if(m=h.value,S!==!0||m===null){const _=x+b*4,L=v.matrixWorldInverse;c.getNormalMatrix(L),(m===null||m.length<_)&&(m=new Float32Array(_));for(let T=0,N=x;T!==b;++T,N+=4)u.copy(g[T]).applyMatrix4(L,c),u.normal.toArray(m,N),m[N+3]=u.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function cA(s){let t=new WeakMap;function e(u,c){return c===Oc?u.mapping=Cs:c===zc&&(u.mapping=Ps),u}function i(u){if(u&&u.isTexture){const c=u.mapping;if(c===Oc||c===zc)if(t.has(u)){const h=t.get(u).texture;return e(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const d=new SE(h.height);return d.fromEquirectangularTexture(s,u),t.set(u,d),u.addEventListener("dispose",a),e(d.texture,u.mapping)}else return null}}return u}function a(u){const c=u.target;c.removeEventListener("dispose",a);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Qc extends yp{constructor(t=-1,e=1,i=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-t,u=i+t,c=a+e,h=a-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,u=o+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ys=4,xd=[.125,.215,.35,.446,.526,.582],Lr=20,wc=new Qc,Md=new me;let Rc=null,Cc=0,Pc=0;const Cr=(1+Math.sqrt(5))/2,Ss=1/Cr,Sd=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Cr,Ss),new V(0,Cr,-Ss),new V(Ss,0,Cr),new V(-Ss,0,Cr),new V(Cr,Ss,0),new V(-Cr,Ss,0)];class Ed{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,a=100){Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,a,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rc,Cc,Pc),t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rc=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Pc=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:ha,format:mi,colorSpace:ki,depthBuffer:!1},a=yd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yd(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uA(o)),this._blurMaterial=hA(o,t,e)}return a}_compileMaterial(t){const e=new Ti(this._lodPlanes[0],t);this._renderer.compile(e,wc)}_sceneToCubeUV(t,e,i,a){const c=new ni(90,1,e,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(Md),p.toneMapping=cr,p.autoClear=!1;const x=new xp({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),S=new Ti(new pa,x);let b=!1;const m=t.background;m?m.isColor&&(x.color.copy(m),t.background=null,b=!0):(x.color.copy(Md),b=!0);for(let _=0;_<6;_++){const L=_%3;L===0?(c.up.set(0,h[_],0),c.lookAt(d[_],0,0)):L===1?(c.up.set(0,0,h[_]),c.lookAt(0,d[_],0)):(c.up.set(0,h[_],0),c.lookAt(0,0,d[_]));const T=this._cubeSize;Ro(a,L*T,_>2?T:0,T,T),p.setRenderTarget(a),b&&p.render(S,c),p.render(t,c)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=v,p.autoClear=g,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Cs||t.mapping===Ps;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Td());const o=a?this._cubemapMaterial:this._equirectMaterial,u=new Ti(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=t;const h=this._cubeSize;Ro(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(u,wc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Sd[(a-1)%Sd.length];this._blur(t,a-1,a,o,u)}e.autoClear=i}_blur(t,e,i,a,o){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,i,a,"latitudinal",o),this._halfBlur(u,t,i,i,a,"longitudinal",o)}_halfBlur(t,e,i,a,o,u,c){const h=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new Ti(this._lodPlanes[a],d),v=d.uniforms,x=this._sizeLods[i]-1,S=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Lr-1),b=o/S,m=isFinite(o)?1+Math.floor(p*b):Lr;m>Lr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Lr}`);const _=[];let L=0;for(let U=0;U<Lr;++U){const tt=U/b,vt=Math.exp(-tt*tt/2);_.push(vt),U===0?L+=vt:U<m&&(L+=2*vt)}for(let U=0;U<_.length;U++)_[U]=_[U]/L;v.envMap.value=t.texture,v.samples.value=m,v.weights.value=_,v.latitudinal.value=u==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:T}=this;v.dTheta.value=S,v.mipInt.value=T-i;const N=this._sizeLods[a],H=3*N*(a>T-ys?a-T+ys:0),O=4*(this._cubeSize-N);Ro(e,H,O,3*N,2*N),h.setRenderTarget(e),h.render(g,wc)}}function uA(s){const t=[],e=[],i=[];let a=s;const o=s-ys+1+xd.length;for(let u=0;u<o;u++){const c=Math.pow(2,a);e.push(c);let h=1/c;u>s-ys?h=xd[u-s+ys-1]:u===0&&(h=0),i.push(h);const d=1/(c-2),p=-d,g=1+d,v=[p,p,g,p,g,g,p,p,g,g,p,g],x=6,S=6,b=3,m=2,_=1,L=new Float32Array(b*S*x),T=new Float32Array(m*S*x),N=new Float32Array(_*S*x);for(let O=0;O<x;O++){const U=O%3*2/3-1,tt=O>2?0:-1,vt=[U,tt,0,U+2/3,tt,0,U+2/3,tt+1,0,U,tt,0,U+2/3,tt+1,0,U,tt+1,0];L.set(vt,b*S*O),T.set(v,m*S*O);const A=[O,O,O,O,O,O];N.set(A,_*S*O)}const H=new Tn;H.setAttribute("position",new _i(L,b)),H.setAttribute("uv",new _i(T,m)),H.setAttribute("faceIndex",new _i(N,_)),t.push(H),a>ys&&a--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function yd(s,t,e){const i=new Or(s,t,e);return i.texture.mapping=Vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(s,t,e,i,a){s.viewport.set(t,e,i,a),s.scissor.set(t,e,i,a)}function hA(s,t,e){const i=new Float32Array(Lr),a=new V(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Td(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Ad(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fA(s){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){const h=c.mapping,d=h===Oc||h===zc,p=h===Cs||h===Ps;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let g=t.get(c);return e===null&&(e=new Ed(s)),g=d?e.fromEquirectangular(c,g):e.fromCubemap(c,g),t.set(c,g),g.texture}else{if(t.has(c))return t.get(c).texture;{const g=c.image;if(d&&g&&g.height>0||p&&g&&a(g)){e===null&&(e=new Ed(s));const v=d?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,v),c.addEventListener("dispose",o),v.texture}else return null}}}return c}function a(c){let h=0;const d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function o(c){const h=c.target;h.removeEventListener("dispose",o);const d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function u(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:u}}function dA(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const a=e(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function pA(s,t,e,i){const a={},o=new WeakMap;function u(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const S in v.attributes)t.remove(v.attributes[S]);for(const S in v.morphAttributes){const b=v.morphAttributes[S];for(let m=0,_=b.length;m<_;m++)t.remove(b[m])}v.removeEventListener("dispose",u),delete a[v.id];const x=o.get(v);x&&(t.remove(x),o.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function c(g,v){return a[v.id]===!0||(v.addEventListener("dispose",u),a[v.id]=!0,e.memory.geometries++),v}function h(g){const v=g.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER);const x=g.morphAttributes;for(const S in x){const b=x[S];for(let m=0,_=b.length;m<_;m++)t.update(b[m],s.ARRAY_BUFFER)}}function d(g){const v=[],x=g.index,S=g.attributes.position;let b=0;if(x!==null){const L=x.array;b=x.version;for(let T=0,N=L.length;T<N;T+=3){const H=L[T+0],O=L[T+1],U=L[T+2];v.push(H,O,O,U,U,H)}}else if(S!==void 0){const L=S.array;b=S.version;for(let T=0,N=L.length/3-1;T<N;T+=3){const H=T+0,O=T+1,U=T+2;v.push(H,O,O,U,U,H)}}else return;const m=new(pp(v)?Sp:Mp)(v,1);m.version=b;const _=o.get(g);_&&t.remove(_),o.set(g,m)}function p(g){const v=o.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&d(g)}else d(g);return o.get(g)}return{get:c,update:h,getWireframeAttribute:p}}function mA(s,t,e,i){const a=i.isWebGL2;let o;function u(x){o=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,S){s.drawElements(o,S,c,x*h),e.update(S,o,1)}function g(x,S,b){if(b===0)return;let m,_;if(a)m=s,_="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](o,S,c,x*h,b),e.update(S,o,b)}function v(x,S,b){if(b===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<b;_++)this.render(x[_]/h,S[_]);else{m.multiDrawElementsWEBGL(o,S,0,c,x,0,b);let _=0;for(let L=0;L<b;L++)_+=S[L];e.update(_,o,1)}}this.setMode=u,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=v}function _A(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(e.calls++,u){case s.TRIANGLES:e.triangles+=c*(o/3);break;case s.LINES:e.lines+=c*(o/2);break;case s.LINE_STRIP:e.lines+=c*(o-1);break;case s.LINE_LOOP:e.lines+=c*o;break;case s.POINTS:e.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function gA(s,t){return s[0]-t[0]}function vA(s,t){return Math.abs(t[1])-Math.abs(s[1])}function xA(s,t,e){const i={},a=new Float32Array(8),o=new WeakMap,u=new Ze,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function h(d,p,g){const v=d.morphTargetInfluences;if(t.isWebGL2===!0){const x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=x!==void 0?x.length:0;let b=o.get(p);if(b===void 0||b.count!==S){let B=function(){ct.dispose(),o.delete(p),p.removeEventListener("dispose",B)};b!==void 0&&b.texture.dispose();const L=p.morphAttributes.position!==void 0,T=p.morphAttributes.normal!==void 0,N=p.morphAttributes.color!==void 0,H=p.morphAttributes.position||[],O=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let tt=0;L===!0&&(tt=1),T===!0&&(tt=2),N===!0&&(tt=3);let vt=p.attributes.position.count*tt,A=1;vt>t.maxTextureSize&&(A=Math.ceil(vt/t.maxTextureSize),vt=t.maxTextureSize);const I=new Float32Array(vt*A*4*S),ct=new gp(I,vt,A,S);ct.type=Vi,ct.needsUpdate=!0;const mt=tt*4;for(let J=0;J<S;J++){const j=H[J],st=O[J],et=U[J],rt=vt*A*4*J;for(let ft=0;ft<j.count;ft++){const ot=ft*mt;L===!0&&(u.fromBufferAttribute(j,ft),I[rt+ot+0]=u.x,I[rt+ot+1]=u.y,I[rt+ot+2]=u.z,I[rt+ot+3]=0),T===!0&&(u.fromBufferAttribute(st,ft),I[rt+ot+4]=u.x,I[rt+ot+5]=u.y,I[rt+ot+6]=u.z,I[rt+ot+7]=0),N===!0&&(u.fromBufferAttribute(et,ft),I[rt+ot+8]=u.x,I[rt+ot+9]=u.y,I[rt+ot+10]=u.z,I[rt+ot+11]=et.itemSize===4?u.w:1)}}b={count:S,texture:ct,size:new ge(vt,A)},o.set(p,b),p.addEventListener("dispose",B)}let m=0;for(let L=0;L<v.length;L++)m+=v[L];const _=p.morphTargetsRelative?1:1-m;g.getUniforms().setValue(s,"morphTargetBaseInfluence",_),g.getUniforms().setValue(s,"morphTargetInfluences",v),g.getUniforms().setValue(s,"morphTargetsTexture",b.texture,e),g.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{const x=v===void 0?0:v.length;let S=i[p.id];if(S===void 0||S.length!==x){S=[];for(let T=0;T<x;T++)S[T]=[T,0];i[p.id]=S}for(let T=0;T<x;T++){const N=S[T];N[0]=T,N[1]=v[T]}S.sort(vA);for(let T=0;T<8;T++)T<x&&S[T][1]?(c[T][0]=S[T][0],c[T][1]=S[T][1]):(c[T][0]=Number.MAX_SAFE_INTEGER,c[T][1]=0);c.sort(gA);const b=p.morphAttributes.position,m=p.morphAttributes.normal;let _=0;for(let T=0;T<8;T++){const N=c[T],H=N[0],O=N[1];H!==Number.MAX_SAFE_INTEGER&&O?(b&&p.getAttribute("morphTarget"+T)!==b[H]&&p.setAttribute("morphTarget"+T,b[H]),m&&p.getAttribute("morphNormal"+T)!==m[H]&&p.setAttribute("morphNormal"+T,m[H]),a[T]=O,_+=O):(b&&p.hasAttribute("morphTarget"+T)===!0&&p.deleteAttribute("morphTarget"+T),m&&p.hasAttribute("morphNormal"+T)===!0&&p.deleteAttribute("morphNormal"+T),a[T]=0)}const L=p.morphTargetsRelative?1:1-_;g.getUniforms().setValue(s,"morphTargetBaseInfluence",L),g.getUniforms().setValue(s,"morphTargetInfluences",a)}}return{update:h}}function MA(s,t,e,i){let a=new WeakMap;function o(h){const d=i.render.frame,p=h.geometry,g=t.get(h,p);if(a.get(g)!==d&&(t.update(g),a.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),a.get(h)!==d&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,d))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==d&&(v.update(),a.set(v,d))}return g}function u(){a=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:u}}class bp extends Un{constructor(t,e,i,a,o,u,c,h,d,p){if(p=p!==void 0?p:Ur,p!==Ur&&p!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Ur&&(i=or),i===void 0&&p===Ls&&(i=Ir),super(null,a,o,u,c,h,p,i,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:yn,this.minFilter=h!==void 0?h:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wp=new Un,Rp=new bp(1,1);Rp.compareFunction=dp;const Cp=new gp,Pp=new rE,Lp=new Tp,bd=[],wd=[],Rd=new Float32Array(16),Cd=new Float32Array(9),Pd=new Float32Array(4);function Os(s,t,e){const i=s[0];if(i<=0||i>0)return s;const a=t*e;let o=bd[a];if(o===void 0&&(o=new Float32Array(a),bd[a]=o),t!==0){i.toArray(o,0);for(let u=1,c=0;u!==t;++u)c+=e,s[u].toArray(o,c)}return o}function rn(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function sn(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function qo(s,t){let e=wd[t];e===void 0&&(e=new Int32Array(t),wd[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function SA(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function EA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2fv(this.addr,t),sn(e,t)}}function yA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;s.uniform3fv(this.addr,t),sn(e,t)}}function TA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4fv(this.addr,t),sn(e,t)}}function AA(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;Pd.set(i),s.uniformMatrix2fv(this.addr,!1,Pd),sn(e,i)}}function bA(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;Cd.set(i),s.uniformMatrix3fv(this.addr,!1,Cd),sn(e,i)}}function wA(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(rn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,i))return;Rd.set(i),s.uniformMatrix4fv(this.addr,!1,Rd),sn(e,i)}}function RA(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function CA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2iv(this.addr,t),sn(e,t)}}function PA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;s.uniform3iv(this.addr,t),sn(e,t)}}function LA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4iv(this.addr,t),sn(e,t)}}function DA(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function IA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;s.uniform2uiv(this.addr,t),sn(e,t)}}function UA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;s.uniform3uiv(this.addr,t),sn(e,t)}}function NA(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;s.uniform4uiv(this.addr,t),sn(e,t)}}function FA(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);const o=this.type===s.SAMPLER_2D_SHADOW?Rp:wp;e.setTexture2D(t||o,a)}function OA(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||Pp,a)}function zA(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||Lp,a)}function BA(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||Cp,a)}function GA(s){switch(s){case 5126:return SA;case 35664:return EA;case 35665:return yA;case 35666:return TA;case 35674:return AA;case 35675:return bA;case 35676:return wA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return PA;case 35669:case 35673:return LA;case 5125:return DA;case 36294:return IA;case 36295:return UA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return BA}}function HA(s,t){s.uniform1fv(this.addr,t)}function VA(s,t){const e=Os(t,this.size,2);s.uniform2fv(this.addr,e)}function WA(s,t){const e=Os(t,this.size,3);s.uniform3fv(this.addr,e)}function kA(s,t){const e=Os(t,this.size,4);s.uniform4fv(this.addr,e)}function XA(s,t){const e=Os(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function qA(s,t){const e=Os(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function YA(s,t){const e=Os(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ZA(s,t){s.uniform1iv(this.addr,t)}function KA(s,t){s.uniform2iv(this.addr,t)}function $A(s,t){s.uniform3iv(this.addr,t)}function JA(s,t){s.uniform4iv(this.addr,t)}function jA(s,t){s.uniform1uiv(this.addr,t)}function QA(s,t){s.uniform2uiv(this.addr,t)}function tb(s,t){s.uniform3uiv(this.addr,t)}function eb(s,t){s.uniform4uiv(this.addr,t)}function nb(s,t,e){const i=this.cache,a=t.length,o=qo(e,a);rn(i,o)||(s.uniform1iv(this.addr,o),sn(i,o));for(let u=0;u!==a;++u)e.setTexture2D(t[u]||wp,o[u])}function ib(s,t,e){const i=this.cache,a=t.length,o=qo(e,a);rn(i,o)||(s.uniform1iv(this.addr,o),sn(i,o));for(let u=0;u!==a;++u)e.setTexture3D(t[u]||Pp,o[u])}function rb(s,t,e){const i=this.cache,a=t.length,o=qo(e,a);rn(i,o)||(s.uniform1iv(this.addr,o),sn(i,o));for(let u=0;u!==a;++u)e.setTextureCube(t[u]||Lp,o[u])}function sb(s,t,e){const i=this.cache,a=t.length,o=qo(e,a);rn(i,o)||(s.uniform1iv(this.addr,o),sn(i,o));for(let u=0;u!==a;++u)e.setTexture2DArray(t[u]||Cp,o[u])}function ab(s){switch(s){case 5126:return HA;case 35664:return VA;case 35665:return WA;case 35666:return kA;case 35674:return XA;case 35675:return qA;case 35676:return YA;case 5124:case 35670:return ZA;case 35667:case 35671:return KA;case 35668:case 35672:return $A;case 35669:case 35673:return JA;case 5125:return jA;case 36294:return QA;case 36295:return tb;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return sb}}class ob{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=GA(e.type)}}class lb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ab(e.type)}}class cb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const c=a[o];c.setValue(t,e[c.id],i)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function Ld(s,t){s.seq.push(t),s.map[t.id]=t}function ub(s,t,e){const i=s.name,a=i.length;for(Lc.lastIndex=0;;){const o=Lc.exec(i),u=Lc.lastIndex;let c=o[1];const h=o[2]==="]",d=o[3];if(h&&(c=c|0),d===void 0||d==="["&&u+2===a){Ld(e,d===void 0?new ob(c,s,t):new lb(c,s,t));break}else{let g=e.map[c];g===void 0&&(g=new cb(c),Ld(e,g)),e=g}}}class Do{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),u=t.getUniformLocation(e,o.name);ub(o,u,this)}}setValue(t,e,i,a){const o=this.map[e];o!==void 0&&o.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let o=0,u=e.length;o!==u;++o){const c=e[o],h=i[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,o=t.length;a!==o;++a){const u=t[a];u.id in e&&i.push(u)}return i}}function Dd(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const hb=37297;let fb=0;function db(s,t){const e=s.split(`
`),i=[],a=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let u=a;u<o;u++){const c=u+1;i.push(`${c===t?">":" "} ${c}: ${e[u]}`)}return i.join(`
`)}function pb(s){const t=Le.getPrimaries(Le.workingColorSpace),e=Le.getPrimaries(s);let i;switch(t===e?i="":t===Oo&&e===Fo?i="LinearDisplayP3ToLinearSRGB":t===Fo&&e===Oo&&(i="LinearSRGBToLinearDisplayP3"),s){case ki:case Wo:return[i,"LinearTransferOETF"];case un:case Zc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Id(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),a=s.getShaderInfoLog(t).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const u=parseInt(o[1]);return e.toUpperCase()+`

`+a+`

`+db(s.getShaderSource(t),u)}else return a}function mb(s,t){const e=pb(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _b(s,t){let e;switch(t){case mS:e="Linear";break;case _S:e="Reinhard";break;case gS:e="OptimizedCineon";break;case vS:e="ACESFilmic";break;case MS:e="AgX";break;case xS:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function gb(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function vb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function xb(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Mb(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(t,a),u=o.name;let c=1;o.type===s.FLOAT_MAT2&&(c=2),o.type===s.FLOAT_MAT3&&(c=3),o.type===s.FLOAT_MAT4&&(c=4),e[u]={type:o.type,location:s.getAttribLocation(t,u),locationSize:c}}return e}function Ts(s){return s!==""}function Ud(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(s){return s.replace(Sb,yb)}const Eb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yb(s,t){let e=ue[t];if(e===void 0){const i=Eb.get(t);if(i!==void 0)e=ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wc(e)}const Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(s){return s.replace(Tb,Ab)}function Ab(s,t,e,i){let a="";for(let o=parseInt(t);o<parseInt(e);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Od(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(t+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bb(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===np?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===WM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function wb(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case Ps:t="ENVMAP_TYPE_CUBE";break;case Vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rb(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function Cb(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qc:t="ENVMAP_BLENDING_MULTIPLY";break;case dS:t="ENVMAP_BLENDING_MIX";break;case pS:t="ENVMAP_BLENDING_ADD";break}return t}function Pb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Lb(s,t,e,i){const a=s.getContext(),o=e.defines;let u=e.vertexShader,c=e.fragmentShader;const h=bb(e),d=wb(e),p=Rb(e),g=Cb(e),v=Pb(e),x=e.isWebGL2?"":gb(e),S=vb(e),b=xb(o),m=a.createProgram();let _,L,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Ts).join(`
`),_.length>0&&(_+=`
`),L=[x,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Ts).join(`
`),L.length>0&&(L+=`
`)):(_=[Od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),L=[x,Od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cr?"#define TONE_MAPPING":"",e.toneMapping!==cr?ue.tonemapping_pars_fragment:"",e.toneMapping!==cr?_b("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,mb("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),u=Wc(u),u=Ud(u,e),u=Nd(u,e),c=Wc(c),c=Ud(c,e),c=Nd(c,e),u=Fd(u),c=Fd(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,L=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);const N=T+_+u,H=T+L+c,O=Dd(a,a.VERTEX_SHADER,N),U=Dd(a,a.FRAGMENT_SHADER,H);a.attachShader(m,O),a.attachShader(m,U),e.index0AttributeName!==void 0?a.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function tt(ct){if(s.debug.checkShaderErrors){const mt=a.getProgramInfoLog(m).trim(),B=a.getShaderInfoLog(O).trim(),J=a.getShaderInfoLog(U).trim();let j=!0,st=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,m,O,U);else{const et=Id(a,O,"vertex"),rt=Id(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Material Name: `+ct.name+`
Material Type: `+ct.type+`

Program Info Log: `+mt+`
`+et+`
`+rt)}else mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",mt):(B===""||J==="")&&(st=!1);st&&(ct.diagnostics={runnable:j,programLog:mt,vertexShader:{log:B,prefix:_},fragmentShader:{log:J,prefix:L}})}a.deleteShader(O),a.deleteShader(U),vt=new Do(a,m),A=Mb(a,m)}let vt;this.getUniforms=function(){return vt===void 0&&tt(this),vt};let A;this.getAttributes=function(){return A===void 0&&tt(this),A};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=a.getProgramParameter(m,hb)),I},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fb++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=O,this.fragmentShader=U,this}let Db=0;class Ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(t);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ub(t),e.set(t,i)),i}}class Ub{constructor(t){this.id=Db++,this.code=t,this.usedTimes=0}}function Nb(s,t,e,i,a,o,u){const c=new Jc,h=new Ib,d=new Set,p=[],g=a.isWebGL2,v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(A){return d.add(A),A===0?"uv":`uv${A}`}function _(A,I,ct,mt,B){const J=mt.fog,j=B.geometry,st=A.isMeshStandardMaterial?mt.environment:null,et=(A.isMeshStandardMaterial?e:t).get(A.envMap||st),rt=et&&et.mapping===Vo?et.image.height:null,ft=b[A.type];A.precision!==null&&(S=a.getMaxPrecision(A.precision),S!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const ot=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ct=ot!==void 0?ot.length:0;let Zt=0;j.morphAttributes.position!==void 0&&(Zt=1),j.morphAttributes.normal!==void 0&&(Zt=2),j.morphAttributes.color!==void 0&&(Zt=3);let $,ut,yt,Gt;if(ft){const we=Ei[ft];$=we.vertexShader,ut=we.fragmentShader}else $=A.vertexShader,ut=A.fragmentShader,h.update(A),yt=h.getVertexShaderID(A),Gt=h.getFragmentShaderID(A);const Ot=s.getRenderTarget(),wt=B.isInstancedMesh===!0,xe=B.isBatchedMesh===!0,Kt=!!A.map,k=!!A.matcap,Ke=!!et,Pt=!!A.aoMap,qt=!!A.lightMap,Ut=!!A.bumpMap,Me=!!A.normalMap,te=!!A.displacementMap,C=!!A.emissiveMap,y=!!A.metalnessMap,X=!!A.roughnessMap,dt=A.anisotropy>0,lt=A.clearcoat>0,pt=A.iridescence>0,Rt=A.sheen>0,St=A.transmission>0,Tt=dt&&!!A.anisotropyMap,zt=lt&&!!A.clearcoatMap,ee=lt&&!!A.clearcoatNormalMap,ht=lt&&!!A.clearcoatRoughnessMap,Ee=pt&&!!A.iridescenceMap,se=pt&&!!A.iridescenceThicknessMap,Yt=Rt&&!!A.sheenColorMap,Nt=Rt&&!!A.sheenRoughnessMap,bt=!!A.specularMap,Jt=!!A.specularColorMap,Se=!!A.specularIntensityMap,De=St&&!!A.transmissionMap,fe=St&&!!A.thicknessMap,be=!!A.gradientMap,P=!!A.alphaMap,_t=A.alphaTest>0,gt=!!A.alphaHash,Lt=!!A.extensions;let Bt=cr;A.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(Bt=s.toneMapping);const ye={isWebGL2:g,shaderID:ft,shaderType:A.type,shaderName:A.name,vertexShader:$,fragmentShader:ut,defines:A.defines,customVertexShaderID:yt,customFragmentShaderID:Gt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:xe,instancing:wt,instancingColor:wt&&B.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:Ot===null?s.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:ki,alphaToCoverage:!!A.alphaToCoverage,map:Kt,matcap:k,envMap:Ke,envMapMode:Ke&&et.mapping,envMapCubeUVHeight:rt,aoMap:Pt,lightMap:qt,bumpMap:Ut,normalMap:Me,displacementMap:x&&te,emissiveMap:C,normalMapObjectSpace:Me&&A.normalMapType===LS,normalMapTangentSpace:Me&&A.normalMapType===fp,metalnessMap:y,roughnessMap:X,anisotropy:dt,anisotropyMap:Tt,clearcoat:lt,clearcoatMap:zt,clearcoatNormalMap:ee,clearcoatRoughnessMap:ht,iridescence:pt,iridescenceMap:Ee,iridescenceThicknessMap:se,sheen:Rt,sheenColorMap:Yt,sheenRoughnessMap:Nt,specularMap:bt,specularColorMap:Jt,specularIntensityMap:Se,transmission:St,transmissionMap:De,thicknessMap:fe,gradientMap:be,opaque:A.transparent===!1&&A.blending===bs&&A.alphaToCoverage===!1,alphaMap:P,alphaTest:_t,alphaHash:gt,combine:A.combine,mapUv:Kt&&m(A.map.channel),aoMapUv:Pt&&m(A.aoMap.channel),lightMapUv:qt&&m(A.lightMap.channel),bumpMapUv:Ut&&m(A.bumpMap.channel),normalMapUv:Me&&m(A.normalMap.channel),displacementMapUv:te&&m(A.displacementMap.channel),emissiveMapUv:C&&m(A.emissiveMap.channel),metalnessMapUv:y&&m(A.metalnessMap.channel),roughnessMapUv:X&&m(A.roughnessMap.channel),anisotropyMapUv:Tt&&m(A.anisotropyMap.channel),clearcoatMapUv:zt&&m(A.clearcoatMap.channel),clearcoatNormalMapUv:ee&&m(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&m(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&m(A.iridescenceMap.channel),iridescenceThicknessMapUv:se&&m(A.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&m(A.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&m(A.sheenRoughnessMap.channel),specularMapUv:bt&&m(A.specularMap.channel),specularColorMapUv:Jt&&m(A.specularColorMap.channel),specularIntensityMapUv:Se&&m(A.specularIntensityMap.channel),transmissionMapUv:De&&m(A.transmissionMap.channel),thicknessMapUv:fe&&m(A.thicknessMap.channel),alphaMapUv:P&&m(A.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Me||dt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(Kt||P),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Zt,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&ct.length>0,shadowMapType:s.shadowMap.type,toneMapping:Bt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Kt&&A.map.isVideoTexture===!0&&Le.getTransfer(A.map.colorSpace)===Be,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Hi,flipSided:A.side===An,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:Lt&&A.extensions.derivatives===!0,extensionFragDepth:Lt&&A.extensions.fragDepth===!0,extensionDrawBuffers:Lt&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:Lt&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Lt&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Lt&&A.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:g||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ye.vertexUv1s=d.has(1),ye.vertexUv2s=d.has(2),ye.vertexUv3s=d.has(3),d.clear(),ye}function L(A){const I=[];if(A.shaderID?I.push(A.shaderID):(I.push(A.customVertexShaderID),I.push(A.customFragmentShaderID)),A.defines!==void 0)for(const ct in A.defines)I.push(ct),I.push(A.defines[ct]);return A.isRawShaderMaterial===!1&&(T(I,A),N(I,A),I.push(s.outputColorSpace)),I.push(A.customProgramCacheKey),I.join()}function T(A,I){A.push(I.precision),A.push(I.outputColorSpace),A.push(I.envMapMode),A.push(I.envMapCubeUVHeight),A.push(I.mapUv),A.push(I.alphaMapUv),A.push(I.lightMapUv),A.push(I.aoMapUv),A.push(I.bumpMapUv),A.push(I.normalMapUv),A.push(I.displacementMapUv),A.push(I.emissiveMapUv),A.push(I.metalnessMapUv),A.push(I.roughnessMapUv),A.push(I.anisotropyMapUv),A.push(I.clearcoatMapUv),A.push(I.clearcoatNormalMapUv),A.push(I.clearcoatRoughnessMapUv),A.push(I.iridescenceMapUv),A.push(I.iridescenceThicknessMapUv),A.push(I.sheenColorMapUv),A.push(I.sheenRoughnessMapUv),A.push(I.specularMapUv),A.push(I.specularColorMapUv),A.push(I.specularIntensityMapUv),A.push(I.transmissionMapUv),A.push(I.thicknessMapUv),A.push(I.combine),A.push(I.fogExp2),A.push(I.sizeAttenuation),A.push(I.morphTargetsCount),A.push(I.morphAttributeCount),A.push(I.numDirLights),A.push(I.numPointLights),A.push(I.numSpotLights),A.push(I.numSpotLightMaps),A.push(I.numHemiLights),A.push(I.numRectAreaLights),A.push(I.numDirLightShadows),A.push(I.numPointLightShadows),A.push(I.numSpotLightShadows),A.push(I.numSpotLightShadowsWithMaps),A.push(I.numLightProbes),A.push(I.shadowMapType),A.push(I.toneMapping),A.push(I.numClippingPlanes),A.push(I.numClipIntersection),A.push(I.depthPacking)}function N(A,I){c.disableAll(),I.isWebGL2&&c.enable(0),I.supportsVertexTextures&&c.enable(1),I.instancing&&c.enable(2),I.instancingColor&&c.enable(3),I.matcap&&c.enable(4),I.envMap&&c.enable(5),I.normalMapObjectSpace&&c.enable(6),I.normalMapTangentSpace&&c.enable(7),I.clearcoat&&c.enable(8),I.iridescence&&c.enable(9),I.alphaTest&&c.enable(10),I.vertexColors&&c.enable(11),I.vertexAlphas&&c.enable(12),I.vertexUv1s&&c.enable(13),I.vertexUv2s&&c.enable(14),I.vertexUv3s&&c.enable(15),I.vertexTangents&&c.enable(16),I.anisotropy&&c.enable(17),I.alphaHash&&c.enable(18),I.batching&&c.enable(19),A.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.skinning&&c.enable(4),I.morphTargets&&c.enable(5),I.morphNormals&&c.enable(6),I.morphColors&&c.enable(7),I.premultipliedAlpha&&c.enable(8),I.shadowMapEnabled&&c.enable(9),I.useLegacyLights&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.alphaToCoverage&&c.enable(20),A.push(c.mask)}function H(A){const I=b[A.type];let ct;if(I){const mt=Ei[I];ct=gE.clone(mt.uniforms)}else ct=A.uniforms;return ct}function O(A,I){let ct;for(let mt=0,B=p.length;mt<B;mt++){const J=p[mt];if(J.cacheKey===I){ct=J,++ct.usedTimes;break}}return ct===void 0&&(ct=new Lb(s,I,A,o),p.push(ct)),ct}function U(A){if(--A.usedTimes===0){const I=p.indexOf(A);p[I]=p[p.length-1],p.pop(),A.destroy()}}function tt(A){h.remove(A)}function vt(){h.dispose()}return{getParameters:_,getProgramCacheKey:L,getUniforms:H,acquireProgram:O,releaseProgram:U,releaseShaderCache:tt,programs:p,dispose:vt}}function Fb(){let s=new WeakMap;function t(o){let u=s.get(o);return u===void 0&&(u={},s.set(o,u)),u}function e(o){s.delete(o)}function i(o,u,c){s.get(o)[u]=c}function a(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:a}}function Ob(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function zd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Bd(){const s=[];let t=0;const e=[],i=[],a=[];function o(){t=0,e.length=0,i.length=0,a.length=0}function u(g,v,x,S,b,m){let _=s[t];return _===void 0?(_={id:g.id,object:g,geometry:v,material:x,groupOrder:S,renderOrder:g.renderOrder,z:b,group:m},s[t]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=x,_.groupOrder=S,_.renderOrder=g.renderOrder,_.z=b,_.group=m),t++,_}function c(g,v,x,S,b,m){const _=u(g,v,x,S,b,m);x.transmission>0?i.push(_):x.transparent===!0?a.push(_):e.push(_)}function h(g,v,x,S,b,m){const _=u(g,v,x,S,b,m);x.transmission>0?i.unshift(_):x.transparent===!0?a.unshift(_):e.unshift(_)}function d(g,v){e.length>1&&e.sort(g||Ob),i.length>1&&i.sort(v||zd),a.length>1&&a.sort(v||zd)}function p(){for(let g=t,v=s.length;g<v;g++){const x=s[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:a,init:o,push:c,unshift:h,finish:p,sort:d}}function zb(){let s=new WeakMap;function t(i,a){const o=s.get(i);let u;return o===void 0?(u=new Bd,s.set(i,[u])):a>=o.length?(u=new Bd,o.push(u)):u=o[a],u}function e(){s=new WeakMap}return{get:t,dispose:e}}function Bb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new me};break;case"SpotLight":e={position:new V,direction:new V,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=e,e}}}function Gb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Hb=0;function Vb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Wb(s,t){const e=new Bb,i=Gb(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new V);const o=new V,u=new $t,c=new $t;function h(p,g){let v=0,x=0,S=0;for(let ct=0;ct<9;ct++)a.probe[ct].set(0,0,0);let b=0,m=0,_=0,L=0,T=0,N=0,H=0,O=0,U=0,tt=0,vt=0;p.sort(Vb);const A=g===!0?Math.PI:1;for(let ct=0,mt=p.length;ct<mt;ct++){const B=p[ct],J=B.color,j=B.intensity,st=B.distance,et=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=J.r*j*A,x+=J.g*j*A,S+=J.b*j*A;else if(B.isLightProbe){for(let rt=0;rt<9;rt++)a.probe[rt].addScaledVector(B.sh.coefficients[rt],j);vt++}else if(B.isDirectionalLight){const rt=e.get(B);if(rt.color.copy(B.color).multiplyScalar(B.intensity*A),B.castShadow){const ft=B.shadow,ot=i.get(B);ot.shadowBias=ft.bias,ot.shadowNormalBias=ft.normalBias,ot.shadowRadius=ft.radius,ot.shadowMapSize=ft.mapSize,a.directionalShadow[b]=ot,a.directionalShadowMap[b]=et,a.directionalShadowMatrix[b]=B.shadow.matrix,N++}a.directional[b]=rt,b++}else if(B.isSpotLight){const rt=e.get(B);rt.position.setFromMatrixPosition(B.matrixWorld),rt.color.copy(J).multiplyScalar(j*A),rt.distance=st,rt.coneCos=Math.cos(B.angle),rt.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),rt.decay=B.decay,a.spot[_]=rt;const ft=B.shadow;if(B.map&&(a.spotLightMap[U]=B.map,U++,ft.updateMatrices(B),B.castShadow&&tt++),a.spotLightMatrix[_]=ft.matrix,B.castShadow){const ot=i.get(B);ot.shadowBias=ft.bias,ot.shadowNormalBias=ft.normalBias,ot.shadowRadius=ft.radius,ot.shadowMapSize=ft.mapSize,a.spotShadow[_]=ot,a.spotShadowMap[_]=et,O++}_++}else if(B.isRectAreaLight){const rt=e.get(B);rt.color.copy(J).multiplyScalar(j),rt.halfWidth.set(B.width*.5,0,0),rt.halfHeight.set(0,B.height*.5,0),a.rectArea[L]=rt,L++}else if(B.isPointLight){const rt=e.get(B);if(rt.color.copy(B.color).multiplyScalar(B.intensity*A),rt.distance=B.distance,rt.decay=B.decay,B.castShadow){const ft=B.shadow,ot=i.get(B);ot.shadowBias=ft.bias,ot.shadowNormalBias=ft.normalBias,ot.shadowRadius=ft.radius,ot.shadowMapSize=ft.mapSize,ot.shadowCameraNear=ft.camera.near,ot.shadowCameraFar=ft.camera.far,a.pointShadow[m]=ot,a.pointShadowMap[m]=et,a.pointShadowMatrix[m]=B.shadow.matrix,H++}a.point[m]=rt,m++}else if(B.isHemisphereLight){const rt=e.get(B);rt.skyColor.copy(B.color).multiplyScalar(j*A),rt.groundColor.copy(B.groundColor).multiplyScalar(j*A),a.hemi[T]=rt,T++}}L>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=xt.LTC_FLOAT_1,a.rectAreaLTC2=xt.LTC_FLOAT_2):(a.rectAreaLTC1=xt.LTC_HALF_1,a.rectAreaLTC2=xt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=xt.LTC_FLOAT_1,a.rectAreaLTC2=xt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=xt.LTC_HALF_1,a.rectAreaLTC2=xt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=v,a.ambient[1]=x,a.ambient[2]=S;const I=a.hash;(I.directionalLength!==b||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==L||I.hemiLength!==T||I.numDirectionalShadows!==N||I.numPointShadows!==H||I.numSpotShadows!==O||I.numSpotMaps!==U||I.numLightProbes!==vt)&&(a.directional.length=b,a.spot.length=_,a.rectArea.length=L,a.point.length=m,a.hemi.length=T,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=H,a.pointShadowMap.length=H,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=H,a.spotLightMatrix.length=O+U-tt,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=tt,a.numLightProbes=vt,I.directionalLength=b,I.pointLength=m,I.spotLength=_,I.rectAreaLength=L,I.hemiLength=T,I.numDirectionalShadows=N,I.numPointShadows=H,I.numSpotShadows=O,I.numSpotMaps=U,I.numLightProbes=vt,a.version=Hb++)}function d(p,g){let v=0,x=0,S=0,b=0,m=0;const _=g.matrixWorldInverse;for(let L=0,T=p.length;L<T;L++){const N=p[L];if(N.isDirectionalLight){const H=a.directional[v];H.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),H.direction.sub(o),H.direction.transformDirection(_),v++}else if(N.isSpotLight){const H=a.spot[S];H.position.setFromMatrixPosition(N.matrixWorld),H.position.applyMatrix4(_),H.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),H.direction.sub(o),H.direction.transformDirection(_),S++}else if(N.isRectAreaLight){const H=a.rectArea[b];H.position.setFromMatrixPosition(N.matrixWorld),H.position.applyMatrix4(_),c.identity(),u.copy(N.matrixWorld),u.premultiply(_),c.extractRotation(u),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),H.halfWidth.applyMatrix4(c),H.halfHeight.applyMatrix4(c),b++}else if(N.isPointLight){const H=a.point[x];H.position.setFromMatrixPosition(N.matrixWorld),H.position.applyMatrix4(_),x++}else if(N.isHemisphereLight){const H=a.hemi[m];H.direction.setFromMatrixPosition(N.matrixWorld),H.direction.transformDirection(_),m++}}}return{setup:h,setupView:d,state:a}}function Gd(s,t){const e=new Wb(s,t),i=[],a=[];function o(){i.length=0,a.length=0}function u(g){i.push(g)}function c(g){a.push(g)}function h(g){e.setup(i,g)}function d(g){e.setupView(i,g)}return{init:o,state:{lightsArray:i,shadowsArray:a,lights:e},setupLights:h,setupLightsView:d,pushLight:u,pushShadow:c}}function kb(s,t){let e=new WeakMap;function i(o,u=0){const c=e.get(o);let h;return c===void 0?(h=new Gd(s,t),e.set(o,[h])):u>=c.length?(h=new Gd(s,t),c.push(h)):h=c[u],h}function a(){e=new WeakMap}return{get:i,dispose:a}}class Xb extends Fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qb extends Fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kb(s,t,e){let i=new jc;const a=new ge,o=new ge,u=new Ze,c=new Xb({depthPacking:PS}),h=new qb,d={},p=e.maxTextureSize,g={[hr]:An,[An]:hr,[Hi]:Hi},v=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Yb,fragmentShader:Zb}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const S=new Tn;S.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ti(S,v),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=np;let _=this.type;this.render=function(O,U,tt){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||O.length===0)return;const vt=s.getRenderTarget(),A=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),ct=s.state;ct.setBlending(lr),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const mt=_!==Gi&&this.type===Gi,B=_===Gi&&this.type!==Gi;for(let J=0,j=O.length;J<j;J++){const st=O[J],et=st.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;a.copy(et.mapSize);const rt=et.getFrameExtents();if(a.multiply(rt),o.copy(et.mapSize),(a.x>p||a.y>p)&&(a.x>p&&(o.x=Math.floor(p/rt.x),a.x=o.x*rt.x,et.mapSize.x=o.x),a.y>p&&(o.y=Math.floor(p/rt.y),a.y=o.y*rt.y,et.mapSize.y=o.y)),et.map===null||mt===!0||B===!0){const ot=this.type!==Gi?{minFilter:yn,magFilter:yn}:{};et.map!==null&&et.map.dispose(),et.map=new Or(a.x,a.y,ot),et.map.texture.name=st.name+".shadowMap",et.camera.updateProjectionMatrix()}s.setRenderTarget(et.map),s.clear();const ft=et.getViewportCount();for(let ot=0;ot<ft;ot++){const Ct=et.getViewport(ot);u.set(o.x*Ct.x,o.y*Ct.y,o.x*Ct.z,o.y*Ct.w),ct.viewport(u),et.updateMatrices(st,ot),i=et.getFrustum(),N(U,tt,et.camera,st,this.type)}et.isPointLightShadow!==!0&&this.type===Gi&&L(et,tt),et.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(vt,A,I)};function L(O,U){const tt=t.update(b);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Or(a.x,a.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(U,null,tt,v,b,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(U,null,tt,x,b,null)}function T(O,U,tt,vt){let A=null;const I=tt.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(I!==void 0)A=I;else if(A=tt.isPointLight===!0?h:c,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ct=A.uuid,mt=U.uuid;let B=d[ct];B===void 0&&(B={},d[ct]=B);let J=B[mt];J===void 0&&(J=A.clone(),B[mt]=J,U.addEventListener("dispose",H)),A=J}if(A.visible=U.visible,A.wireframe=U.wireframe,vt===Gi?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:g[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,tt.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ct=s.properties.get(A);ct.light=tt}return A}function N(O,U,tt,vt,A){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===Gi)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,O.matrixWorld);const mt=t.update(O),B=O.material;if(Array.isArray(B)){const J=mt.groups;for(let j=0,st=J.length;j<st;j++){const et=J[j],rt=B[et.materialIndex];if(rt&&rt.visible){const ft=T(O,rt,vt,A);O.onBeforeShadow(s,O,U,tt,mt,ft,et),s.renderBufferDirect(tt,null,mt,ft,O,et),O.onAfterShadow(s,O,U,tt,mt,ft,et)}}}else if(B.visible){const J=T(O,B,vt,A);O.onBeforeShadow(s,O,U,tt,mt,J,null),s.renderBufferDirect(tt,null,mt,J,O,null),O.onAfterShadow(s,O,U,tt,mt,J,null)}}const ct=O.children;for(let mt=0,B=ct.length;mt<B;mt++)N(ct[mt],U,tt,vt,A)}function H(O){O.target.removeEventListener("dispose",H);for(const tt in d){const vt=d[tt],A=O.target.uuid;A in vt&&(vt[A].dispose(),delete vt[A])}}}function $b(s,t,e){const i=e.isWebGL2;function a(){let P=!1;const _t=new Ze;let gt=null;const Lt=new Ze(0,0,0,0);return{setMask:function(Bt){gt!==Bt&&!P&&(s.colorMask(Bt,Bt,Bt,Bt),gt=Bt)},setLocked:function(Bt){P=Bt},setClear:function(Bt,ye,we,je,bn){bn===!0&&(Bt*=je,ye*=je,we*=je),_t.set(Bt,ye,we,je),Lt.equals(_t)===!1&&(s.clearColor(Bt,ye,we,je),Lt.copy(_t))},reset:function(){P=!1,gt=null,Lt.set(-1,0,0,0)}}}function o(){let P=!1,_t=null,gt=null,Lt=null;return{setTest:function(Bt){Bt?wt(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(Bt){_t!==Bt&&!P&&(s.depthMask(Bt),_t=Bt)},setFunc:function(Bt){if(gt!==Bt){switch(Bt){case aS:s.depthFunc(s.NEVER);break;case oS:s.depthFunc(s.ALWAYS);break;case lS:s.depthFunc(s.LESS);break;case Uo:s.depthFunc(s.LEQUAL);break;case cS:s.depthFunc(s.EQUAL);break;case uS:s.depthFunc(s.GEQUAL);break;case hS:s.depthFunc(s.GREATER);break;case fS:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Bt}},setLocked:function(Bt){P=Bt},setClear:function(Bt){Lt!==Bt&&(s.clearDepth(Bt),Lt=Bt)},reset:function(){P=!1,_t=null,gt=null,Lt=null}}}function u(){let P=!1,_t=null,gt=null,Lt=null,Bt=null,ye=null,we=null,je=null,bn=null;return{setTest:function(Pe){P||(Pe?wt(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(Pe){_t!==Pe&&!P&&(s.stencilMask(Pe),_t=Pe)},setFunc:function(Pe,Qe,kn){(gt!==Pe||Lt!==Qe||Bt!==kn)&&(s.stencilFunc(Pe,Qe,kn),gt=Pe,Lt=Qe,Bt=kn)},setOp:function(Pe,Qe,kn){(ye!==Pe||we!==Qe||je!==kn)&&(s.stencilOp(Pe,Qe,kn),ye=Pe,we=Qe,je=kn)},setLocked:function(Pe){P=Pe},setClear:function(Pe){bn!==Pe&&(s.clearStencil(Pe),bn=Pe)},reset:function(){P=!1,_t=null,gt=null,Lt=null,Bt=null,ye=null,we=null,je=null,bn=null}}}const c=new a,h=new o,d=new u,p=new WeakMap,g=new WeakMap;let v={},x={},S=new WeakMap,b=[],m=null,_=!1,L=null,T=null,N=null,H=null,O=null,U=null,tt=null,vt=new me(0,0,0),A=0,I=!1,ct=null,mt=null,B=null,J=null,j=null;const st=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,rt=0;const ft=s.getParameter(s.VERSION);ft.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(ft)[1]),et=rt>=1):ft.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(ft)[1]),et=rt>=2);let ot=null,Ct={};const Zt=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ut=new Ze().fromArray(Zt),yt=new Ze().fromArray($);function Gt(P,_t,gt,Lt){const Bt=new Uint8Array(4),ye=s.createTexture();s.bindTexture(P,ye),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let we=0;we<gt;we++)i&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(_t,0,s.RGBA,1,1,Lt,0,s.RGBA,s.UNSIGNED_BYTE,Bt):s.texImage2D(_t+we,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Bt);return ye}const Ot={};Ot[s.TEXTURE_2D]=Gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ot[s.TEXTURE_CUBE_MAP]=Gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ot[s.TEXTURE_2D_ARRAY]=Gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ot[s.TEXTURE_3D]=Gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),wt(s.DEPTH_TEST),h.setFunc(Uo),te(!1),C(xf),wt(s.CULL_FACE),Ut(lr);function wt(P){v[P]!==!0&&(s.enable(P),v[P]=!0)}function xe(P){v[P]!==!1&&(s.disable(P),v[P]=!1)}function Kt(P,_t){return x[P]!==_t?(s.bindFramebuffer(P,_t),x[P]=_t,i&&(P===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=_t),P===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=_t)),!0):!1}function k(P,_t){let gt=b,Lt=!1;if(P)if(gt=S.get(_t),gt===void 0&&(gt=[],S.set(_t,gt)),P.isWebGLMultipleRenderTargets){const Bt=P.texture;if(gt.length!==Bt.length||gt[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,we=Bt.length;ye<we;ye++)gt[ye]=s.COLOR_ATTACHMENT0+ye;gt.length=Bt.length,Lt=!0}}else gt[0]!==s.COLOR_ATTACHMENT0&&(gt[0]=s.COLOR_ATTACHMENT0,Lt=!0);else gt[0]!==s.BACK&&(gt[0]=s.BACK,Lt=!0);Lt&&(e.isWebGL2?s.drawBuffers(gt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(gt))}function Ke(P){return m!==P?(s.useProgram(P),m=P,!0):!1}const Pt={[Pr]:s.FUNC_ADD,[XM]:s.FUNC_SUBTRACT,[qM]:s.FUNC_REVERSE_SUBTRACT};if(i)Pt[yf]=s.MIN,Pt[Tf]=s.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(Pt[yf]=P.MIN_EXT,Pt[Tf]=P.MAX_EXT)}const qt={[YM]:s.ZERO,[ZM]:s.ONE,[KM]:s.SRC_COLOR,[Nc]:s.SRC_ALPHA,[eS]:s.SRC_ALPHA_SATURATE,[QM]:s.DST_COLOR,[JM]:s.DST_ALPHA,[$M]:s.ONE_MINUS_SRC_COLOR,[Fc]:s.ONE_MINUS_SRC_ALPHA,[tS]:s.ONE_MINUS_DST_COLOR,[jM]:s.ONE_MINUS_DST_ALPHA,[nS]:s.CONSTANT_COLOR,[iS]:s.ONE_MINUS_CONSTANT_COLOR,[rS]:s.CONSTANT_ALPHA,[sS]:s.ONE_MINUS_CONSTANT_ALPHA};function Ut(P,_t,gt,Lt,Bt,ye,we,je,bn,Pe){if(P===lr){_===!0&&(xe(s.BLEND),_=!1);return}if(_===!1&&(wt(s.BLEND),_=!0),P!==kM){if(P!==L||Pe!==I){if((T!==Pr||O!==Pr)&&(s.blendEquation(s.FUNC_ADD),T=Pr,O=Pr),Pe)switch(P){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mf:s.blendFunc(s.ONE,s.ONE);break;case Sf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ef:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ef:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}N=null,H=null,U=null,tt=null,vt.set(0,0,0),A=0,L=P,I=Pe}return}Bt=Bt||_t,ye=ye||gt,we=we||Lt,(_t!==T||Bt!==O)&&(s.blendEquationSeparate(Pt[_t],Pt[Bt]),T=_t,O=Bt),(gt!==N||Lt!==H||ye!==U||we!==tt)&&(s.blendFuncSeparate(qt[gt],qt[Lt],qt[ye],qt[we]),N=gt,H=Lt,U=ye,tt=we),(je.equals(vt)===!1||bn!==A)&&(s.blendColor(je.r,je.g,je.b,bn),vt.copy(je),A=bn),L=P,I=!1}function Me(P,_t){P.side===Hi?xe(s.CULL_FACE):wt(s.CULL_FACE);let gt=P.side===An;_t&&(gt=!gt),te(gt),P.blending===bs&&P.transparent===!1?Ut(lr):Ut(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),h.setFunc(P.depthFunc),h.setTest(P.depthTest),h.setMask(P.depthWrite),c.setMask(P.colorWrite);const Lt=P.stencilWrite;d.setTest(Lt),Lt&&(d.setMask(P.stencilWriteMask),d.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),d.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),X(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?wt(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function te(P){ct!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),ct=P)}function C(P){P!==HM?(wt(s.CULL_FACE),P!==mt&&(P===xf?s.cullFace(s.BACK):P===VM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),mt=P}function y(P){P!==B&&(et&&s.lineWidth(P),B=P)}function X(P,_t,gt){P?(wt(s.POLYGON_OFFSET_FILL),(J!==_t||j!==gt)&&(s.polygonOffset(_t,gt),J=_t,j=gt)):xe(s.POLYGON_OFFSET_FILL)}function dt(P){P?wt(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function lt(P){P===void 0&&(P=s.TEXTURE0+st-1),ot!==P&&(s.activeTexture(P),ot=P)}function pt(P,_t,gt){gt===void 0&&(ot===null?gt=s.TEXTURE0+st-1:gt=ot);let Lt=Ct[gt];Lt===void 0&&(Lt={type:void 0,texture:void 0},Ct[gt]=Lt),(Lt.type!==P||Lt.texture!==_t)&&(ot!==gt&&(s.activeTexture(gt),ot=gt),s.bindTexture(P,_t||Ot[P]),Lt.type=P,Lt.texture=_t)}function Rt(){const P=Ct[ot];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function St(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function zt(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Yt(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Nt(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Jt(P){ut.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ut.copy(P))}function Se(P){yt.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),yt.copy(P))}function De(P,_t){let gt=g.get(_t);gt===void 0&&(gt=new WeakMap,g.set(_t,gt));let Lt=gt.get(P);Lt===void 0&&(Lt=s.getUniformBlockIndex(_t,P.name),gt.set(P,Lt))}function fe(P,_t){const Lt=g.get(_t).get(P);p.get(_t)!==Lt&&(s.uniformBlockBinding(_t,Lt,P.__bindingPointIndex),p.set(_t,Lt))}function be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ot=null,Ct={},x={},S=new WeakMap,b=[],m=null,_=!1,L=null,T=null,N=null,H=null,O=null,U=null,tt=null,vt=new me(0,0,0),A=0,I=!1,ct=null,mt=null,B=null,J=null,j=null,ut.set(0,0,s.canvas.width,s.canvas.height),yt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:wt,disable:xe,bindFramebuffer:Kt,drawBuffers:k,useProgram:Ke,setBlending:Ut,setMaterial:Me,setFlipSided:te,setCullFace:C,setLineWidth:y,setPolygonOffset:X,setScissorTest:dt,activeTexture:lt,bindTexture:pt,unbindTexture:Rt,compressedTexImage2D:St,compressedTexImage3D:Tt,texImage2D:Nt,texImage3D:bt,updateUBOMapping:De,uniformBlockBinding:fe,texStorage2D:se,texStorage3D:Yt,texSubImage2D:zt,texSubImage3D:ee,compressedTexSubImage2D:ht,compressedTexSubImage3D:Ee,scissor:Jt,viewport:Se,reset:be}}function Jb(s,t,e,i,a,o,u){const c=a.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,y){return x?new OffscreenCanvas(C,y):Go("canvas")}function b(C,y,X,dt){let lt=1;if((C.width>dt||C.height>dt)&&(lt=dt/Math.max(C.width,C.height)),lt<1||y===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const pt=y?Bo:Math.floor,Rt=pt(lt*C.width),St=pt(lt*C.height);g===void 0&&(g=S(Rt,St));const Tt=X?S(Rt,St):g;return Tt.width=Rt,Tt.height=St,Tt.getContext("2d").drawImage(C,0,0,Rt,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Rt+"x"+St+")."),Tt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Vc(C.width)&&Vc(C.height)}function _(C){return c?!1:C.wrapS!==pi||C.wrapT!==pi||C.minFilter!==yn&&C.minFilter!==In}function L(C,y){return C.generateMipmaps&&y&&C.minFilter!==yn&&C.minFilter!==In}function T(C){s.generateMipmap(C)}function N(C,y,X,dt,lt=!1){if(c===!1)return y;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pt=y;if(y===s.RED&&(X===s.FLOAT&&(pt=s.R32F),X===s.HALF_FLOAT&&(pt=s.R16F),X===s.UNSIGNED_BYTE&&(pt=s.R8)),y===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(pt=s.R8UI),X===s.UNSIGNED_SHORT&&(pt=s.R16UI),X===s.UNSIGNED_INT&&(pt=s.R32UI),X===s.BYTE&&(pt=s.R8I),X===s.SHORT&&(pt=s.R16I),X===s.INT&&(pt=s.R32I)),y===s.RG&&(X===s.FLOAT&&(pt=s.RG32F),X===s.HALF_FLOAT&&(pt=s.RG16F),X===s.UNSIGNED_BYTE&&(pt=s.RG8)),y===s.RGBA){const Rt=lt?No:Le.getTransfer(dt);X===s.FLOAT&&(pt=s.RGBA32F),X===s.HALF_FLOAT&&(pt=s.RGBA16F),X===s.UNSIGNED_BYTE&&(pt=Rt===Be?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function H(C,y,X){return L(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==yn&&C.minFilter!==In?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function O(C){return C===yn||C===Af||C===na?s.NEAREST:s.LINEAR}function U(C){const y=C.target;y.removeEventListener("dispose",U),vt(y),y.isVideoTexture&&p.delete(y)}function tt(C){const y=C.target;y.removeEventListener("dispose",tt),I(y)}function vt(C){const y=i.get(C);if(y.__webglInit===void 0)return;const X=C.source,dt=v.get(X);if(dt){const lt=dt[y.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&A(C),Object.keys(dt).length===0&&v.delete(X)}i.remove(C)}function A(C){const y=i.get(C);s.deleteTexture(y.__webglTexture);const X=C.source,dt=v.get(X);delete dt[y.__cacheKey],u.memory.textures--}function I(C){const y=C.texture,X=i.get(C),dt=i.get(y);if(dt.__webglTexture!==void 0&&(s.deleteTexture(dt.__webglTexture),u.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(X.__webglFramebuffer[lt]))for(let pt=0;pt<X.__webglFramebuffer[lt].length;pt++)s.deleteFramebuffer(X.__webglFramebuffer[lt][pt]);else s.deleteFramebuffer(X.__webglFramebuffer[lt]);X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[lt])}else{if(Array.isArray(X.__webglFramebuffer))for(let lt=0;lt<X.__webglFramebuffer.length;lt++)s.deleteFramebuffer(X.__webglFramebuffer[lt]);else s.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let lt=0;lt<X.__webglColorRenderbuffer.length;lt++)X.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[lt]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let lt=0,pt=y.length;lt<pt;lt++){const Rt=i.get(y[lt]);Rt.__webglTexture&&(s.deleteTexture(Rt.__webglTexture),u.memory.textures--),i.remove(y[lt])}i.remove(y),i.remove(C)}let ct=0;function mt(){ct=0}function B(){const C=ct;return C>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),ct+=1,C}function J(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function j(C,y){const X=i.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const dt=C.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(X,C,y);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+y)}function st(C,y){const X=i.get(C);if(C.version>0&&X.__version!==C.version){ut(X,C,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+y)}function et(C,y){const X=i.get(C);if(C.version>0&&X.__version!==C.version){ut(X,C,y);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+y)}function rt(C,y){const X=i.get(C);if(C.version>0&&X.__version!==C.version){yt(X,C,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+y)}const ft={[Bc]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[Gc]:s.MIRRORED_REPEAT},ot={[yn]:s.NEAREST,[Af]:s.NEAREST_MIPMAP_NEAREST,[na]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[rc]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},Ct={[DS]:s.NEVER,[zS]:s.ALWAYS,[IS]:s.LESS,[dp]:s.LEQUAL,[US]:s.EQUAL,[OS]:s.GEQUAL,[NS]:s.GREATER,[FS]:s.NOTEQUAL};function Zt(C,y,X){if(y.type===Vi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===In||y.magFilter===rc||y.magFilter===na||y.magFilter===Dr||y.minFilter===In||y.minFilter===rc||y.minFilter===na||y.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(s.texParameteri(C,s.TEXTURE_WRAP_S,ft[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ft[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ft[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ot[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ot[y.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(y.wrapS!==pi||y.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,O(y.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,O(y.minFilter)),y.minFilter!==yn&&y.minFilter!==In&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const dt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===yn||y.minFilter!==na&&y.minFilter!==Dr||y.type===Vi&&t.has("OES_texture_float_linear")===!1||c===!1&&y.type===ha&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(s.texParameterf(C,dt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function $(C,y){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",U));const dt=y.source;let lt=v.get(dt);lt===void 0&&(lt={},v.set(dt,lt));const pt=J(y);if(pt!==C.__cacheKey){lt[pt]===void 0&&(lt[pt]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,X=!0),lt[pt].usedTimes++;const Rt=lt[C.__cacheKey];Rt!==void 0&&(lt[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&A(y)),C.__cacheKey=pt,C.__webglTexture=lt[pt].texture}return X}function ut(C,y,X){let dt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(dt=s.TEXTURE_3D);const lt=$(C,y),pt=y.source;e.bindTexture(dt,C.__webglTexture,s.TEXTURE0+X);const Rt=i.get(pt);if(pt.version!==Rt.__version||lt===!0){e.activeTexture(s.TEXTURE0+X);const St=Le.getPrimaries(Le.workingColorSpace),Tt=y.colorSpace===ii?null:Le.getPrimaries(y.colorSpace),zt=y.colorSpace===ii||St===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const ee=_(y)&&m(y.image)===!1;let ht=b(y.image,ee,!1,a.maxTextureSize);ht=te(y,ht);const Ee=m(ht)||c,se=o.convert(y.format,y.colorSpace);let Yt=o.convert(y.type),Nt=N(y.internalFormat,se,Yt,y.colorSpace,y.isVideoTexture);Zt(dt,y,Ee);let bt;const Jt=y.mipmaps,Se=c&&y.isVideoTexture!==!0&&Nt!==up,De=Rt.__version===void 0||lt===!0,fe=pt.dataReady,be=H(y,ht,Ee);if(y.isDepthTexture)Nt=s.DEPTH_COMPONENT,c?y.type===Vi?Nt=s.DEPTH_COMPONENT32F:y.type===or?Nt=s.DEPTH_COMPONENT24:y.type===Ir?Nt=s.DEPTH24_STENCIL8:Nt=s.DEPTH_COMPONENT16:y.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ur&&Nt===s.DEPTH_COMPONENT&&y.type!==Yc&&y.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=or,Yt=o.convert(y.type)),y.format===Ls&&Nt===s.DEPTH_COMPONENT&&(Nt=s.DEPTH_STENCIL,y.type!==Ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ir,Yt=o.convert(y.type))),De&&(Se?e.texStorage2D(s.TEXTURE_2D,1,Nt,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,Nt,ht.width,ht.height,0,se,Yt,null));else if(y.isDataTexture)if(Jt.length>0&&Ee){Se&&De&&e.texStorage2D(s.TEXTURE_2D,be,Nt,Jt[0].width,Jt[0].height);for(let P=0,_t=Jt.length;P<_t;P++)bt=Jt[P],Se?fe&&e.texSubImage2D(s.TEXTURE_2D,P,0,0,bt.width,bt.height,se,Yt,bt.data):e.texImage2D(s.TEXTURE_2D,P,Nt,bt.width,bt.height,0,se,Yt,bt.data);y.generateMipmaps=!1}else Se?(De&&e.texStorage2D(s.TEXTURE_2D,be,Nt,ht.width,ht.height),fe&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,se,Yt,ht.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,ht.width,ht.height,0,se,Yt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Se&&De&&e.texStorage3D(s.TEXTURE_2D_ARRAY,be,Nt,Jt[0].width,Jt[0].height,ht.depth);for(let P=0,_t=Jt.length;P<_t;P++)bt=Jt[P],y.format!==mi?se!==null?Se?fe&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,P,0,0,0,bt.width,bt.height,ht.depth,se,bt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,P,Nt,bt.width,bt.height,ht.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?fe&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,P,0,0,0,bt.width,bt.height,ht.depth,se,Yt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,P,Nt,bt.width,bt.height,ht.depth,0,se,Yt,bt.data)}else{Se&&De&&e.texStorage2D(s.TEXTURE_2D,be,Nt,Jt[0].width,Jt[0].height);for(let P=0,_t=Jt.length;P<_t;P++)bt=Jt[P],y.format!==mi?se!==null?Se?fe&&e.compressedTexSubImage2D(s.TEXTURE_2D,P,0,0,bt.width,bt.height,se,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,P,Nt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?fe&&e.texSubImage2D(s.TEXTURE_2D,P,0,0,bt.width,bt.height,se,Yt,bt.data):e.texImage2D(s.TEXTURE_2D,P,Nt,bt.width,bt.height,0,se,Yt,bt.data)}else if(y.isDataArrayTexture)Se?(De&&e.texStorage3D(s.TEXTURE_2D_ARRAY,be,Nt,ht.width,ht.height,ht.depth),fe&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,se,Yt,ht.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,ht.width,ht.height,ht.depth,0,se,Yt,ht.data);else if(y.isData3DTexture)Se?(De&&e.texStorage3D(s.TEXTURE_3D,be,Nt,ht.width,ht.height,ht.depth),fe&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,se,Yt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,ht.width,ht.height,ht.depth,0,se,Yt,ht.data);else if(y.isFramebufferTexture){if(De)if(Se)e.texStorage2D(s.TEXTURE_2D,be,Nt,ht.width,ht.height);else{let P=ht.width,_t=ht.height;for(let gt=0;gt<be;gt++)e.texImage2D(s.TEXTURE_2D,gt,Nt,P,_t,0,se,Yt,null),P>>=1,_t>>=1}}else if(Jt.length>0&&Ee){Se&&De&&e.texStorage2D(s.TEXTURE_2D,be,Nt,Jt[0].width,Jt[0].height);for(let P=0,_t=Jt.length;P<_t;P++)bt=Jt[P],Se?fe&&e.texSubImage2D(s.TEXTURE_2D,P,0,0,se,Yt,bt):e.texImage2D(s.TEXTURE_2D,P,Nt,se,Yt,bt);y.generateMipmaps=!1}else Se?(De&&e.texStorage2D(s.TEXTURE_2D,be,Nt,ht.width,ht.height),fe&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,se,Yt,ht)):e.texImage2D(s.TEXTURE_2D,0,Nt,se,Yt,ht);L(y,Ee)&&T(dt),Rt.__version=pt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function yt(C,y,X){if(y.image.length!==6)return;const dt=$(C,y),lt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+X);const pt=i.get(lt);if(lt.version!==pt.__version||dt===!0){e.activeTexture(s.TEXTURE0+X);const Rt=Le.getPrimaries(Le.workingColorSpace),St=y.colorSpace===ii?null:Le.getPrimaries(y.colorSpace),Tt=y.colorSpace===ii||Rt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const zt=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,ht=[];for(let P=0;P<6;P++)!zt&&!ee?ht[P]=b(y.image[P],!1,!0,a.maxCubemapSize):ht[P]=ee?y.image[P].image:y.image[P],ht[P]=te(y,ht[P]);const Ee=ht[0],se=m(Ee)||c,Yt=o.convert(y.format,y.colorSpace),Nt=o.convert(y.type),bt=N(y.internalFormat,Yt,Nt,y.colorSpace),Jt=c&&y.isVideoTexture!==!0,Se=pt.__version===void 0||dt===!0,De=lt.dataReady;let fe=H(y,Ee,se);Zt(s.TEXTURE_CUBE_MAP,y,se);let be;if(zt){Jt&&Se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,fe,bt,Ee.width,Ee.height);for(let P=0;P<6;P++){be=ht[P].mipmaps;for(let _t=0;_t<be.length;_t++){const gt=be[_t];y.format!==mi?Yt!==null?Jt?De&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,_t,0,0,gt.width,gt.height,Yt,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,_t,bt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?De&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,_t,0,0,gt.width,gt.height,Yt,Nt,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,_t,bt,gt.width,gt.height,0,Yt,Nt,gt.data)}}}else{be=y.mipmaps,Jt&&Se&&(be.length>0&&fe++,e.texStorage2D(s.TEXTURE_CUBE_MAP,fe,bt,ht[0].width,ht[0].height));for(let P=0;P<6;P++)if(ee){Jt?De&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,ht[P].width,ht[P].height,Yt,Nt,ht[P].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,bt,ht[P].width,ht[P].height,0,Yt,Nt,ht[P].data);for(let _t=0;_t<be.length;_t++){const Lt=be[_t].image[P].image;Jt?De&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,_t+1,0,0,Lt.width,Lt.height,Yt,Nt,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,_t+1,bt,Lt.width,Lt.height,0,Yt,Nt,Lt.data)}}else{Jt?De&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Yt,Nt,ht[P]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,bt,Yt,Nt,ht[P]);for(let _t=0;_t<be.length;_t++){const gt=be[_t];Jt?De&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,_t+1,0,0,Yt,Nt,gt.image[P]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+P,_t+1,bt,Yt,Nt,gt.image[P])}}}L(y,se)&&T(s.TEXTURE_CUBE_MAP),pt.__version=lt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Gt(C,y,X,dt,lt,pt){const Rt=o.convert(X.format,X.colorSpace),St=o.convert(X.type),Tt=N(X.internalFormat,Rt,St,X.colorSpace);if(!i.get(y).__hasExternalTextures){const ee=Math.max(1,y.width>>pt),ht=Math.max(1,y.height>>pt);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,pt,Tt,ee,ht,y.depth,0,Rt,St,null):e.texImage2D(lt,pt,Tt,ee,ht,0,Rt,St,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Ut(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,lt,i.get(X).__webglTexture,0,qt(y)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,lt,i.get(X).__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(C,y,X){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer&&!y.stencilBuffer){let dt=c===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(X||Ut(y)){const lt=y.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Vi?dt=s.DEPTH_COMPONENT32F:lt.type===or&&(dt=s.DEPTH_COMPONENT24));const pt=qt(y);Ut(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,dt,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,dt,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,dt,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(y.depthBuffer&&y.stencilBuffer){const dt=qt(y);X&&Ut(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,s.DEPTH24_STENCIL8,y.width,y.height):Ut(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const dt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let lt=0;lt<dt.length;lt++){const pt=dt[lt],Rt=o.convert(pt.format,pt.colorSpace),St=o.convert(pt.type),Tt=N(pt.internalFormat,Rt,St,pt.colorSpace),zt=qt(y);X&&Ut(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,Tt,y.width,y.height):Ut(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt,Tt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const dt=i.get(y.depthTexture).__webglTexture,lt=qt(y);if(y.depthTexture.format===Ur)Ut(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(y.depthTexture.format===Ls)Ut(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function xe(C){const y=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");wt(y.__webglFramebuffer,C)}else if(X){y.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[dt]),y.__webglDepthbuffer[dt]=s.createRenderbuffer(),Ot(y.__webglDepthbuffer[dt],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),Ot(y.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(C,y,X){const dt=i.get(C);y!==void 0&&Gt(dt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&xe(C)}function k(C){const y=C.texture,X=i.get(C),dt=i.get(y);C.addEventListener("dispose",tt),C.isWebGLMultipleRenderTargets!==!0&&(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=y.version,u.memory.textures++);const lt=C.isWebGLCubeRenderTarget===!0,pt=C.isWebGLMultipleRenderTargets===!0,Rt=m(C)||c;if(lt){X.__webglFramebuffer=[];for(let St=0;St<6;St++)if(c&&y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[St]=[];for(let Tt=0;Tt<y.mipmaps.length;Tt++)X.__webglFramebuffer[St][Tt]=s.createFramebuffer()}else X.__webglFramebuffer[St]=s.createFramebuffer()}else{if(c&&y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let St=0;St<y.mipmaps.length;St++)X.__webglFramebuffer[St]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(pt)if(a.drawBuffers){const St=C.texture;for(let Tt=0,zt=St.length;Tt<zt;Tt++){const ee=i.get(St[Tt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),u.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&Ut(C)===!1){const St=pt?y:[y];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Tt=0;Tt<St.length;Tt++){const zt=St[Tt];X.__webglColorRenderbuffer[Tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Tt]);const ee=o.convert(zt.format,zt.colorSpace),ht=o.convert(zt.type),Ee=N(zt.internalFormat,ee,ht,zt.colorSpace,C.isXRRenderTarget===!0),se=qt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,se,Ee,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,X.__webglColorRenderbuffer[Tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){e.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),Zt(s.TEXTURE_CUBE_MAP,y,Rt);for(let St=0;St<6;St++)if(c&&y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)Gt(X.__webglFramebuffer[St][Tt],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,Tt);else Gt(X.__webglFramebuffer[St],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);L(y,Rt)&&T(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){const St=C.texture;for(let Tt=0,zt=St.length;Tt<zt;Tt++){const ee=St[Tt],ht=i.get(ee);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),Zt(s.TEXTURE_2D,ee,Rt),Gt(X.__webglFramebuffer,C,ee,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,0),L(ee,Rt)&&T(s.TEXTURE_2D)}e.unbindTexture()}else{let St=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?St=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(St,dt.__webglTexture),Zt(St,y,Rt),c&&y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)Gt(X.__webglFramebuffer[Tt],C,y,s.COLOR_ATTACHMENT0,St,Tt);else Gt(X.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,St,0);L(y,Rt)&&T(St),e.unbindTexture()}C.depthBuffer&&xe(C)}function Ke(C){const y=m(C)||c,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let dt=0,lt=X.length;dt<lt;dt++){const pt=X[dt];if(L(pt,y)){const Rt=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,St=i.get(pt).__webglTexture;e.bindTexture(Rt,St),T(Rt),e.unbindTexture()}}}function Pt(C){if(c&&C.samples>0&&Ut(C)===!1){const y=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,dt=C.height;let lt=s.COLOR_BUFFER_BIT;const pt=[],Rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=i.get(C),Tt=C.isWebGLMultipleRenderTargets===!0;if(Tt)for(let zt=0;zt<y.length;zt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let zt=0;zt<y.length;zt++){pt.push(s.COLOR_ATTACHMENT0+zt),C.depthBuffer&&pt.push(Rt);const ee=St.__ignoreDepthValues!==void 0?St.__ignoreDepthValues:!1;if(ee===!1&&(C.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),Tt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[zt]),ee===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Rt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Rt])),Tt){const ht=i.get(y[zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,X,dt,0,0,X,dt,lt,s.NEAREST),d&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Tt)for(let zt=0;zt<y.length;zt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,St.__webglColorRenderbuffer[zt]);const ee=i.get(y[zt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}}function qt(C){return Math.min(a.maxSamples,C.samples)}function Ut(C){const y=i.get(C);return c&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Me(C){const y=u.render.frame;p.get(C)!==y&&(p.set(C,y),C.update())}function te(C,y){const X=C.colorSpace,dt=C.format,lt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Hc||X!==ki&&X!==ii&&(Le.getTransfer(X)===Be?c===!1?t.has("EXT_sRGB")===!0&&dt===mi?(C.format=Hc,C.minFilter=In,C.generateMipmaps=!1):y=mp.sRGBToLinear(y):(dt!==mi||lt!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}this.allocateTextureUnit=B,this.resetTextureUnits=mt,this.setTexture2D=j,this.setTexture2DArray=st,this.setTexture3D=et,this.setTextureCube=rt,this.rebindTextures=Kt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=Ut}function jb(s,t,e){const i=e.isWebGL2;function a(o,u=ii){let c;const h=Le.getTransfer(u);if(o===ur)return s.UNSIGNED_BYTE;if(o===sp)return s.UNSIGNED_SHORT_4_4_4_4;if(o===ap)return s.UNSIGNED_SHORT_5_5_5_1;if(o===SS)return s.BYTE;if(o===ES)return s.SHORT;if(o===Yc)return s.UNSIGNED_SHORT;if(o===rp)return s.INT;if(o===or)return s.UNSIGNED_INT;if(o===Vi)return s.FLOAT;if(o===ha)return i?s.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===yS)return s.ALPHA;if(o===mi)return s.RGBA;if(o===TS)return s.LUMINANCE;if(o===AS)return s.LUMINANCE_ALPHA;if(o===Ur)return s.DEPTH_COMPONENT;if(o===Ls)return s.DEPTH_STENCIL;if(o===Hc)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===bS)return s.RED;if(o===op)return s.RED_INTEGER;if(o===wS)return s.RG;if(o===lp)return s.RG_INTEGER;if(o===cp)return s.RGBA_INTEGER;if(o===sc||o===ac||o===oc||o===lc)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===sc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ac)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===sc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ac)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===lc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===bf||o===wf||o===Rf||o===Cf)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===bf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===wf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Rf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Cf)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===up)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Pf||o===Lf)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(o===Pf)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===Lf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Df||o===If||o===Uf||o===Nf||o===Ff||o===Of||o===zf||o===Bf||o===Gf||o===Hf||o===Vf||o===Wf||o===kf||o===Xf)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(o===Df)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===If)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Uf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Nf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Ff)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Of)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===zf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Bf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Gf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Hf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Vf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Wf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===kf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Xf)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===cc||o===qf||o===Yf)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(o===cc)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===qf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Yf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===RS||o===Zf||o===Kf||o===$f)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(o===cc)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Zf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Kf)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===$f)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ir?i?s.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:a}}class Qb extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class As extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tw={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,o=null,u=null;const c=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const b of t.hand.values()){const m=e.getJointPose(b,i),_=this._getHandJoint(d,b);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=p.position.distanceTo(g.position),x=.02,S=.005;d.inputState.pinching&&v>x+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=x-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(tw)))}return c!==null&&(c.visible=a!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new As;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const a=new Un,o=t.properties.get(a);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}render(t,e){if(this.texture!==null){if(this.mesh===null){const i=e.cameras[0].viewport,a=new fr({extensions:{fragDepth:!0},vertexShader:ew,fragmentShader:nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ti(new Xo(20,20),a)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class rw extends zr{constructor(t,e){super();const i=this;let a=null,o=1,u=null,c="local-floor",h=1,d=null,p=null,g=null,v=null,x=null,S=null;const b=new iw,m=e.getContextAttributes();let _=null,L=null;const T=[],N=[],H=new ge;let O=null;const U=new ni;U.layers.enable(1),U.viewport=new Ze;const tt=new ni;tt.layers.enable(2),tt.viewport=new Ze;const vt=[U,tt],A=new Qb;A.layers.enable(1),A.layers.enable(2);let I=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ut=T[$];return ut===void 0&&(ut=new Dc,T[$]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function($){let ut=T[$];return ut===void 0&&(ut=new Dc,T[$]=ut),ut.getGripSpace()},this.getHand=function($){let ut=T[$];return ut===void 0&&(ut=new Dc,T[$]=ut),ut.getHandSpace()};function mt($){const ut=N.indexOf($.inputSource);if(ut===-1)return;const yt=T[ut];yt!==void 0&&(yt.update($.inputSource,$.frame,d||u),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){a.removeEventListener("select",mt),a.removeEventListener("selectstart",mt),a.removeEventListener("selectend",mt),a.removeEventListener("squeeze",mt),a.removeEventListener("squeezestart",mt),a.removeEventListener("squeezeend",mt),a.removeEventListener("end",B),a.removeEventListener("inputsourceschange",J);for(let $=0;$<T.length;$++){const ut=N[$];ut!==null&&(N[$]=null,T[$].disconnect(ut))}I=null,ct=null,b.reset(),t.setRenderTarget(_),x=null,v=null,g=null,a=null,L=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function($){d=$},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(_=t.getRenderTarget(),a.addEventListener("select",mt),a.addEventListener("selectstart",mt),a.addEventListener("selectend",mt),a.addEventListener("squeeze",mt),a.addEventListener("squeezestart",mt),a.addEventListener("squeezeend",mt),a.addEventListener("end",B),a.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(H),a.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ut={antialias:a.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,e,ut),a.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Or(x.framebufferWidth,x.framebufferHeight,{format:mi,type:ur,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,yt=null,Gt=null;m.depth&&(Gt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?Ls:Ur,yt=m.stencil?Ir:or);const Ot={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:o};g=new XRWebGLBinding(a,e),v=g.createProjectionLayer(Ot),a.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),L=new Or(v.textureWidth,v.textureHeight,{format:mi,type:ur,depthTexture:new bp(v.textureWidth,v.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});const wt=t.properties.get(L);wt.__ignoreDepthValues=v.ignoreDepthValues}L.isXRRenderTarget=!0,this.setFoveation(h),d=null,u=await a.requestReferenceSpace(c),Zt.setContext(a),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function J($){for(let ut=0;ut<$.removed.length;ut++){const yt=$.removed[ut],Gt=N.indexOf(yt);Gt>=0&&(N[Gt]=null,T[Gt].disconnect(yt))}for(let ut=0;ut<$.added.length;ut++){const yt=$.added[ut];let Gt=N.indexOf(yt);if(Gt===-1){for(let wt=0;wt<T.length;wt++)if(wt>=N.length){N.push(yt),Gt=wt;break}else if(N[wt]===null){N[wt]=yt,Gt=wt;break}if(Gt===-1)break}const Ot=T[Gt];Ot&&Ot.connect(yt)}}const j=new V,st=new V;function et($,ut,yt){j.setFromMatrixPosition(ut.matrixWorld),st.setFromMatrixPosition(yt.matrixWorld);const Gt=j.distanceTo(st),Ot=ut.projectionMatrix.elements,wt=yt.projectionMatrix.elements,xe=Ot[14]/(Ot[10]-1),Kt=Ot[14]/(Ot[10]+1),k=(Ot[9]+1)/Ot[5],Ke=(Ot[9]-1)/Ot[5],Pt=(Ot[8]-1)/Ot[0],qt=(wt[8]+1)/wt[0],Ut=xe*Pt,Me=xe*qt,te=Gt/(-Pt+qt),C=te*-Pt;ut.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(C),$.translateZ(te),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const y=xe+te,X=Kt+te,dt=Ut-C,lt=Me+(Gt-C),pt=k*Kt/X*y,Rt=Ke*Kt/X*y;$.projectionMatrix.makePerspective(dt,lt,pt,Rt,y,X),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function rt($,ut){ut===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ut.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;b.texture!==null&&($.near=b.depthNear,$.far=b.depthFar),A.near=tt.near=U.near=$.near,A.far=tt.far=U.far=$.far,(I!==A.near||ct!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,ct=A.far,U.near=I,U.far=ct,tt.near=I,tt.far=ct,U.updateProjectionMatrix(),tt.updateProjectionMatrix(),$.updateProjectionMatrix());const ut=$.parent,yt=A.cameras;rt(A,ut);for(let Gt=0;Gt<yt.length;Gt++)rt(yt[Gt],ut);yt.length===2?et(A,U,tt):A.projectionMatrix.copy(U.projectionMatrix),ft($,A,ut)};function ft($,ut,yt){yt===null?$.matrix.copy(ut.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ut.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ut.projectionMatrix),$.projectionMatrixInverse.copy(ut.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=fa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&x===null))return h},this.setFoveation=function($){h=$,v!==null&&(v.fixedFoveation=$),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=$)},this.hasDepthSensing=function(){return b.texture!==null};let ot=null;function Ct($,ut){if(p=ut.getViewerPose(d||u),S=ut,p!==null){const yt=p.views;x!==null&&(t.setRenderTargetFramebuffer(L,x.framebuffer),t.setRenderTarget(L));let Gt=!1;yt.length!==A.cameras.length&&(A.cameras.length=0,Gt=!0);for(let wt=0;wt<yt.length;wt++){const xe=yt[wt];let Kt=null;if(x!==null)Kt=x.getViewport(xe);else{const Ke=g.getViewSubImage(v,xe);Kt=Ke.viewport,wt===0&&(t.setRenderTargetTextures(L,Ke.colorTexture,v.ignoreDepthValues?void 0:Ke.depthStencilTexture),t.setRenderTarget(L))}let k=vt[wt];k===void 0&&(k=new ni,k.layers.enable(wt),k.viewport=new Ze,vt[wt]=k),k.matrix.fromArray(xe.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(xe.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),wt===0&&(A.matrix.copy(k.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Gt===!0&&A.cameras.push(k)}const Ot=a.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const wt=g.getDepthInformation(yt[0]);wt&&wt.isValid&&wt.texture&&b.init(t,wt,a.renderState)}}for(let yt=0;yt<T.length;yt++){const Gt=N[yt],Ot=T[yt];Gt!==null&&Ot!==void 0&&Ot.update(Gt,ut,d||u)}b.render(t,A),ot&&ot($,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),S=null}const Zt=new Ap;Zt.setAnimationLoop(Ct),this.setAnimationLoop=function($){ot=$},this.dispose=function(){}}}function sw(s,t){function e(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function i(m,_){_.color.getRGB(m.fogColor.value,Ep(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function a(m,_,L,T,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(m,_):_.isMeshToonMaterial?(o(m,_),g(m,_)):_.isMeshPhongMaterial?(o(m,_),p(m,_)):_.isMeshStandardMaterial?(o(m,_),v(m,_),_.isMeshPhysicalMaterial&&x(m,_,N)):_.isMeshMatcapMaterial?(o(m,_),S(m,_)):_.isMeshDepthMaterial?o(m,_):_.isMeshDistanceMaterial?(o(m,_),b(m,_)):_.isMeshNormalMaterial?o(m,_):_.isLineBasicMaterial?(u(m,_),_.isLineDashedMaterial&&c(m,_)):_.isPointsMaterial?h(m,_,L,T):_.isSpriteMaterial?d(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,e(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===An&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,e(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===An&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,e(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,e(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const L=t.get(_).envMap;if(L&&(m.envMap.value=L,m.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap){m.lightMap.value=_.lightMap;const T=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=_.lightMapIntensity*T,e(_.lightMap,m.lightMapTransform)}_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,m.aoMapTransform))}function u(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform))}function c(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function h(m,_,L,T){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*L,m.scale.value=T*.5,_.map&&(m.map.value=_.map,e(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function d(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function p(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function g(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function v(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,m.roughnessMapTransform)),t.get(_).envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function x(m,_,L){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===An&&m.clearcoatNormalScale.value.negate())),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=L.texture,m.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,_){_.matcap&&(m.matcap.value=_.matcap)}function b(m,_){const L=t.get(_).light;m.referencePosition.value.setFromMatrixPosition(L.matrixWorld),m.nearDistance.value=L.shadow.camera.near,m.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function aw(s,t,e,i){let a={},o={},u=[];const c=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(L,T){const N=T.program;i.uniformBlockBinding(L,N)}function d(L,T){let N=a[L.id];N===void 0&&(S(L),N=p(L),a[L.id]=N,L.addEventListener("dispose",m));const H=T.program;i.updateUBOMapping(L,H);const O=t.render.frame;o[L.id]!==O&&(v(L),o[L.id]=O)}function p(L){const T=g();L.__bindingPointIndex=T;const N=s.createBuffer(),H=L.__size,O=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,H,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,N),N}function g(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const T=a[L.id],N=L.uniforms,H=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let O=0,U=N.length;O<U;O++){const tt=Array.isArray(N[O])?N[O]:[N[O]];for(let vt=0,A=tt.length;vt<A;vt++){const I=tt[vt];if(x(I,O,vt,H)===!0){const ct=I.__offset,mt=Array.isArray(I.value)?I.value:[I.value];let B=0;for(let J=0;J<mt.length;J++){const j=mt[J],st=b(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,s.bufferSubData(s.UNIFORM_BUFFER,ct+B,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,B),B+=st.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ct,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(L,T,N,H){const O=L.value,U=T+"_"+N;if(H[U]===void 0)return typeof O=="number"||typeof O=="boolean"?H[U]=O:H[U]=O.clone(),!0;{const tt=H[U];if(typeof O=="number"||typeof O=="boolean"){if(tt!==O)return H[U]=O,!0}else if(tt.equals(O)===!1)return tt.copy(O),!0}return!1}function S(L){const T=L.uniforms;let N=0;const H=16;for(let U=0,tt=T.length;U<tt;U++){const vt=Array.isArray(T[U])?T[U]:[T[U]];for(let A=0,I=vt.length;A<I;A++){const ct=vt[A],mt=Array.isArray(ct.value)?ct.value:[ct.value];for(let B=0,J=mt.length;B<J;B++){const j=mt[B],st=b(j),et=N%H;et!==0&&H-et<st.boundary&&(N+=H-et),ct.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=N,N+=st.storage}}}const O=N%H;return O>0&&(N+=H-O),L.__size=N,L.__cache={},this}function b(L){const T={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(T.boundary=4,T.storage=4):L.isVector2?(T.boundary=8,T.storage=8):L.isVector3||L.isColor?(T.boundary=16,T.storage=12):L.isVector4?(T.boundary=16,T.storage=16):L.isMatrix3?(T.boundary=48,T.storage=48):L.isMatrix4?(T.boundary=64,T.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),T}function m(L){const T=L.target;T.removeEventListener("dispose",m);const N=u.indexOf(T.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(a[T.id]),delete a[T.id],delete o[T.id]}function _(){for(const L in a)s.deleteBuffer(a[L]);u=[],a={},o={}}return{bind:h,update:d,dispose:_}}class Dp{constructor(t={}){const{canvas:e=QS(),context:i=null,depth:a=!0,stencil:o=!0,alpha:u=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1}=t;this.isWebGLRenderer=!0;let v;i!==null?v=i.getContextAttributes().alpha:v=u;const x=new Uint32Array(4),S=new Int32Array(4);let b=null,m=null;const _=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const T=this;let N=!1,H=0,O=0,U=null,tt=-1,vt=null;const A=new Ze,I=new Ze;let ct=null;const mt=new me(0);let B=0,J=e.width,j=e.height,st=1,et=null,rt=null;const ft=new Ze(0,0,J,j),ot=new Ze(0,0,J,j);let Ct=!1;const Zt=new jc;let $=!1,ut=!1,yt=null;const Gt=new $t,Ot=new ge,wt=new V,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Kt(){return U===null?st:1}let k=i;function Ke(R,W){for(let Y=0;Y<R.length;Y++){const K=R[Y],q=e.getContext(K,W);if(q!==null)return q}return null}try{const R={alpha:!0,depth:a,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xc}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",_t,!1),k===null){const W=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&W.shift(),k=Ke(W,R),k===null)throw Ke(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Pt,qt,Ut,Me,te,C,y,X,dt,lt,pt,Rt,St,Tt,zt,ee,ht,Ee,se,Yt,Nt,bt,Jt,Se;function De(){Pt=new dA(k),qt=new oA(k,Pt,t),Pt.init(qt),bt=new jb(k,Pt,qt),Ut=new $b(k,Pt,qt),Me=new _A(k),te=new Fb,C=new Jb(k,Pt,Ut,te,qt,bt,Me),y=new cA(T),X=new fA(T),dt=new TE(k,qt),Jt=new sA(k,Pt,dt,qt),lt=new pA(k,dt,Me,Jt),pt=new MA(k,lt,dt,Me),se=new xA(k,qt,C),ee=new lA(te),Rt=new Nb(T,y,X,Pt,qt,Jt,ee),St=new sw(T,te),Tt=new zb,zt=new kb(Pt,qt),Ee=new rA(T,y,X,Ut,pt,v,h),ht=new Kb(T,pt,qt),Se=new aw(k,Me,qt,Ut),Yt=new aA(k,Pt,Me,qt),Nt=new mA(k,Pt,Me,qt),Me.programs=Rt.programs,T.capabilities=qt,T.extensions=Pt,T.properties=te,T.renderLists=Tt,T.shadowMap=ht,T.state=Ut,T.info=Me}De();const fe=new rw(T,k);this.xr=fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=Pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(R){R!==void 0&&(st=R,this.setSize(J,j,!1))},this.getSize=function(R){return R.set(J,j)},this.setSize=function(R,W,Y=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=R,j=W,e.width=Math.floor(R*st),e.height=Math.floor(W*st),Y===!0&&(e.style.width=R+"px",e.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(J*st,j*st).floor()},this.setDrawingBufferSize=function(R,W,Y){J=R,j=W,st=Y,e.width=Math.floor(R*Y),e.height=Math.floor(W*Y),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(ft)},this.setViewport=function(R,W,Y,K){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,W,Y,K),Ut.viewport(A.copy(ft).multiplyScalar(st).floor())},this.getScissor=function(R){return R.copy(ot)},this.setScissor=function(R,W,Y,K){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,W,Y,K),Ut.scissor(I.copy(ot).multiplyScalar(st).floor())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(R){Ut.setScissorTest(Ct=R)},this.setOpaqueSort=function(R){et=R},this.setTransparentSort=function(R){rt=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(R=!0,W=!0,Y=!0){let K=0;if(R){let q=!1;if(U!==null){const Et=U.texture.format;q=Et===cp||Et===lp||Et===op}if(q){const Et=U.texture.type,Dt=Et===ur||Et===or||Et===Yc||Et===Ir||Et===sp||Et===ap,Vt=Ee.getClearColor(),Wt=Ee.getClearAlpha(),ae=Vt.r,jt=Vt.g,ne=Vt.b;Dt?(x[0]=ae,x[1]=jt,x[2]=ne,x[3]=Wt,k.clearBufferuiv(k.COLOR,0,x)):(S[0]=ae,S[1]=jt,S[2]=ne,S[3]=Wt,k.clearBufferiv(k.COLOR,0,S))}else K|=k.COLOR_BUFFER_BIT}W&&(K|=k.DEPTH_BUFFER_BIT),Y&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Tt.dispose(),zt.dispose(),te.dispose(),y.dispose(),X.dispose(),pt.dispose(),Jt.dispose(),Se.dispose(),Rt.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",bn),fe.removeEventListener("sessionend",Pe),yt&&(yt.dispose(),yt=null),Qe.stop()};function be(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const R=Me.autoReset,W=ht.enabled,Y=ht.autoUpdate,K=ht.needsUpdate,q=ht.type;De(),Me.autoReset=R,ht.enabled=W,ht.autoUpdate=Y,ht.needsUpdate=K,ht.type=q}function _t(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gt(R){const W=R.target;W.removeEventListener("dispose",gt),Lt(W)}function Lt(R){Bt(R),te.remove(R)}function Bt(R){const W=te.get(R).programs;W!==void 0&&(W.forEach(function(Y){Rt.releaseProgram(Y)}),R.isShaderMaterial&&Rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Y,K,q,Et){W===null&&(W=xe);const Dt=q.isMesh&&q.matrixWorld.determinant()<0,Vt=Zo(R,W,Y,K,q);Ut.setMaterial(K,Dt);let Wt=Y.index,ae=1;if(K.wireframe===!0){if(Wt=lt.getWireframeAttribute(Y),Wt===void 0)return;ae=2}const jt=Y.drawRange,ne=Y.attributes.position;let Ge=jt.start*ae,dn=(jt.start+jt.count)*ae;Et!==null&&(Ge=Math.max(Ge,Et.start*ae),dn=Math.min(dn,(Et.start+Et.count)*ae)),Wt!==null?(Ge=Math.max(Ge,0),dn=Math.min(dn,Wt.count)):ne!=null&&(Ge=Math.max(Ge,0),dn=Math.min(dn,ne.count));const Xe=dn-Ge;if(Xe<0||Xe===1/0)return;Jt.setup(q,K,Vt,Y,Wt);let ri,Fe=Yt;if(Wt!==null&&(ri=dt.get(Wt),Fe=Nt,Fe.setIndex(ri)),q.isMesh)K.wireframe===!0?(Ut.setLineWidth(K.wireframeLinewidth*Kt()),Fe.setMode(k.LINES)):Fe.setMode(k.TRIANGLES);else if(q.isLine){let le=K.linewidth;le===void 0&&(le=1),Ut.setLineWidth(le*Kt()),q.isLineSegments?Fe.setMode(k.LINES):q.isLineLoop?Fe.setMode(k.LINE_LOOP):Fe.setMode(k.LINE_STRIP)}else q.isPoints?Fe.setMode(k.POINTS):q.isSprite&&Fe.setMode(k.TRIANGLES);if(q.isBatchedMesh)Fe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)Fe.renderInstances(Ge,Xe,q.count);else if(Y.isInstancedBufferGeometry){const le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,zs=Math.min(Y.instanceCount,le);Fe.renderInstances(Ge,Xe,zs)}else Fe.render(Ge,Xe)};function ye(R,W,Y){R.transparent===!0&&R.side===Hi&&R.forceSinglePass===!1?(R.side=An,R.needsUpdate=!0,Hr(R,W,Y),R.side=hr,R.needsUpdate=!0,Hr(R,W,Y),R.side=Hi):Hr(R,W,Y)}this.compile=function(R,W,Y=null){Y===null&&(Y=R),m=zt.get(Y),m.init(),L.push(m),Y.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),R!==Y&&R.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights(T._useLegacyLights);const K=new Set;return R.traverse(function(q){const Et=q.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){const Vt=Et[Dt];ye(Vt,Y,q),K.add(Vt)}else ye(Et,Y,q),K.add(Et)}),L.pop(),m=null,K},this.compileAsync=function(R,W,Y=null){const K=this.compile(R,W,Y);return new Promise(q=>{function Et(){if(K.forEach(function(Dt){te.get(Dt).currentProgram.isReady()&&K.delete(Dt)}),K.size===0){q(R);return}setTimeout(Et,10)}Pt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let we=null;function je(R){we&&we(R)}function bn(){Qe.stop()}function Pe(){Qe.start()}const Qe=new Ap;Qe.setAnimationLoop(je),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(R){we=R,fe.setAnimationLoop(R),R===null?Qe.stop():Qe.start()},fe.addEventListener("sessionstart",bn),fe.addEventListener("sessionend",Pe),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(W),W=fe.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,W,U),m=zt.get(R,L.length),m.init(),L.push(m),Gt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Zt.setFromProjectionMatrix(Gt),ut=this.localClippingEnabled,$=ee.init(this.clippingPlanes,ut),b=Tt.get(R,_.length),b.init(),_.push(b),kn(R,W,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(et,rt),this.info.render.frame++,$===!0&&ee.beginShadows();const Y=m.state.shadowsArray;if(ht.render(Y,R,W),$===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1)&&Ee.render(b,R),m.setupLights(T._useLegacyLights),W.isArrayCamera){const K=W.cameras;for(let q=0,Et=K.length;q<Et;q++){const Dt=K[q];Br(b,R,Dt,Dt.viewport)}}else Br(b,R,W);U!==null&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(T,R,W),Jt.resetDefaultState(),tt=-1,vt=null,L.pop(),L.length>0?m=L[L.length-1]:m=null,_.pop(),_.length>0?b=_[_.length-1]:b=null};function kn(R,W,Y,K){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Zt.intersectsSprite(R)){K&&wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Gt);const Dt=pt.update(R),Vt=R.material;Vt.visible&&b.push(R,Dt,Vt,Y,wt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Zt.intersectsObject(R))){const Dt=pt.update(R),Vt=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),wt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),wt.copy(Dt.boundingSphere.center)),wt.applyMatrix4(R.matrixWorld).applyMatrix4(Gt)),Array.isArray(Vt)){const Wt=Dt.groups;for(let ae=0,jt=Wt.length;ae<jt;ae++){const ne=Wt[ae],Ge=Vt[ne.materialIndex];Ge&&Ge.visible&&b.push(R,Dt,Ge,Y,wt.z,ne)}}else Vt.visible&&b.push(R,Dt,Vt,Y,wt.z,null)}}const Et=R.children;for(let Dt=0,Vt=Et.length;Dt<Vt;Dt++)kn(Et[Dt],W,Y,K)}function Br(R,W,Y,K){const q=R.opaque,Et=R.transmissive,Dt=R.transparent;m.setupLightsView(Y),$===!0&&ee.setGlobalState(T.clippingPlanes,Y),Et.length>0&&Yo(q,Et,W,Y),K&&Ut.viewport(A.copy(K)),q.length>0&&Gr(q,W,Y),Et.length>0&&Gr(Et,W,Y),Dt.length>0&&Gr(Dt,W,Y),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Yo(R,W,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const Et=qt.isWebGL2;yt===null&&(yt=new Or(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")?ha:ur,minFilter:Dr,samples:Et?4:0})),T.getDrawingBufferSize(Ot),Et?yt.setSize(Ot.x,Ot.y):yt.setSize(Bo(Ot.x),Bo(Ot.y));const Dt=T.getRenderTarget();T.setRenderTarget(yt),T.getClearColor(mt),B=T.getClearAlpha(),B<1&&T.setClearColor(16777215,.5),T.clear();const Vt=T.toneMapping;T.toneMapping=cr,Gr(R,Y,K),C.updateMultisampleRenderTarget(yt),C.updateRenderTargetMipmap(yt);let Wt=!1;for(let ae=0,jt=W.length;ae<jt;ae++){const ne=W[ae],Ge=ne.object,dn=ne.geometry,Xe=ne.material,ri=ne.group;if(Xe.side===Hi&&Ge.layers.test(K.layers)){const Fe=Xe.side;Xe.side=An,Xe.needsUpdate=!0,_a(Ge,Y,K,dn,Xe,ri),Xe.side=Fe,Xe.needsUpdate=!0,Wt=!0}}Wt===!0&&(C.updateMultisampleRenderTarget(yt),C.updateRenderTargetMipmap(yt)),T.setRenderTarget(Dt),T.setClearColor(mt,B),T.toneMapping=Vt}function Gr(R,W,Y){const K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,Et=R.length;q<Et;q++){const Dt=R[q],Vt=Dt.object,Wt=Dt.geometry,ae=K===null?Dt.material:K,jt=Dt.group;Vt.layers.test(Y.layers)&&_a(Vt,W,Y,Wt,ae,jt)}}function _a(R,W,Y,K,q,Et){R.onBeforeRender(T,W,Y,K,q,Et),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(T,W,Y,K,R,Et),q.transparent===!0&&q.side===Hi&&q.forceSinglePass===!1?(q.side=An,q.needsUpdate=!0,T.renderBufferDirect(Y,W,K,q,R,Et),q.side=hr,q.needsUpdate=!0,T.renderBufferDirect(Y,W,K,q,R,Et),q.side=Hi):T.renderBufferDirect(Y,W,K,q,R,Et),R.onAfterRender(T,W,Y,K,q,Et)}function Hr(R,W,Y){W.isScene!==!0&&(W=xe);const K=te.get(R),q=m.state.lights,Et=m.state.shadowsArray,Dt=q.state.version,Vt=Rt.getParameters(R,q.state,Et,W,Y),Wt=Rt.getProgramCacheKey(Vt);let ae=K.programs;K.environment=R.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(R.isMeshStandardMaterial?X:y).get(R.envMap||K.environment),ae===void 0&&(R.addEventListener("dispose",gt),ae=new Map,K.programs=ae);let jt=ae.get(Wt);if(jt!==void 0){if(K.currentProgram===jt&&K.lightsStateVersion===Dt)return va(R,Vt),jt}else Vt.uniforms=Rt.getUniforms(R),R.onBuild(Y,Vt,T),R.onBeforeCompile(Vt,T),jt=Rt.acquireProgram(Vt,Wt),ae.set(Wt,jt),K.uniforms=Vt.uniforms;const ne=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ne.clippingPlanes=ee.uniform),va(R,Vt),K.needsLights=xa(R),K.lightsStateVersion=Dt,K.needsLights&&(ne.ambientLightColor.value=q.state.ambient,ne.lightProbe.value=q.state.probe,ne.directionalLights.value=q.state.directional,ne.directionalLightShadows.value=q.state.directionalShadow,ne.spotLights.value=q.state.spot,ne.spotLightShadows.value=q.state.spotShadow,ne.rectAreaLights.value=q.state.rectArea,ne.ltc_1.value=q.state.rectAreaLTC1,ne.ltc_2.value=q.state.rectAreaLTC2,ne.pointLights.value=q.state.point,ne.pointLightShadows.value=q.state.pointShadow,ne.hemisphereLights.value=q.state.hemi,ne.directionalShadowMap.value=q.state.directionalShadowMap,ne.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ne.spotShadowMap.value=q.state.spotShadowMap,ne.spotLightMatrix.value=q.state.spotLightMatrix,ne.spotLightMap.value=q.state.spotLightMap,ne.pointShadowMap.value=q.state.pointShadowMap,ne.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=jt,K.uniformsList=null,jt}function ga(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Do.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function va(R,W){const Y=te.get(R);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function Zo(R,W,Y,K,q){W.isScene!==!0&&(W=xe),C.resetTextureUnits();const Et=W.fog,Dt=K.isMeshStandardMaterial?W.environment:null,Vt=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ki,Wt=(K.isMeshStandardMaterial?X:y).get(K.envMap||Dt),ae=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,jt=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ne=!!Y.morphAttributes.position,Ge=!!Y.morphAttributes.normal,dn=!!Y.morphAttributes.color;let Xe=cr;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Xe=T.toneMapping);const ri=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Fe=ri!==void 0?ri.length:0,le=te.get(K),zs=m.state.lights;if($===!0&&(ut===!0||R!==vt)){const wn=R===vt&&K.id===tt;ee.setState(K,R,wn)}let Oe=!1;K.version===le.__version?(le.needsLights&&le.lightsStateVersion!==zs.state.version||le.outputColorSpace!==Vt||q.isBatchedMesh&&le.batching===!1||!q.isBatchedMesh&&le.batching===!0||q.isInstancedMesh&&le.instancing===!1||!q.isInstancedMesh&&le.instancing===!0||q.isSkinnedMesh&&le.skinning===!1||!q.isSkinnedMesh&&le.skinning===!0||q.isInstancedMesh&&le.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&le.instancingColor===!1&&q.instanceColor!==null||le.envMap!==Wt||K.fog===!0&&le.fog!==Et||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==ee.numPlanes||le.numIntersection!==ee.numIntersection)||le.vertexAlphas!==ae||le.vertexTangents!==jt||le.morphTargets!==ne||le.morphNormals!==Ge||le.morphColors!==dn||le.toneMapping!==Xe||qt.isWebGL2===!0&&le.morphTargetsCount!==Fe)&&(Oe=!0):(Oe=!0,le.__version=K.version);let vi=le.currentProgram;Oe===!0&&(vi=Hr(K,W,q));let Bs=!1,Ai=!1,Gs=!1;const tn=vi.getUniforms(),Xn=le.uniforms;if(Ut.useProgram(vi.program)&&(Bs=!0,Ai=!0,Gs=!0),K.id!==tt&&(tt=K.id,Ai=!0),Bs||vt!==R){tn.setValue(k,"projectionMatrix",R.projectionMatrix),tn.setValue(k,"viewMatrix",R.matrixWorldInverse);const wn=tn.map.cameraPosition;wn!==void 0&&wn.setValue(k,wt.setFromMatrixPosition(R.matrixWorld)),qt.logarithmicDepthBuffer&&tn.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&tn.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),vt!==R&&(vt=R,Ai=!0,Gs=!0)}if(q.isSkinnedMesh){tn.setOptional(k,q,"bindMatrix"),tn.setOptional(k,q,"bindMatrixInverse");const wn=q.skeleton;wn&&(qt.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),tn.setValue(k,"boneTexture",wn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(tn.setOptional(k,q,"batchingTexture"),tn.setValue(k,"batchingTexture",q._matricesTexture,C));const Vr=Y.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0&&qt.isWebGL2===!0)&&se.update(q,Y,vi),(Ai||le.receiveShadow!==q.receiveShadow)&&(le.receiveShadow=q.receiveShadow,tn.setValue(k,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Xn.envMap.value=Wt,Xn.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),Ai&&(tn.setValue(k,"toneMappingExposure",T.toneMappingExposure),le.needsLights&&Ko(Xn,Gs),Et&&K.fog===!0&&St.refreshFogUniforms(Xn,Et),St.refreshMaterialUniforms(Xn,K,st,j,yt),Do.upload(k,ga(le),Xn,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Do.upload(k,ga(le),Xn,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&tn.setValue(k,"center",q.center),tn.setValue(k,"modelViewMatrix",q.modelViewMatrix),tn.setValue(k,"normalMatrix",q.normalMatrix),tn.setValue(k,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const wn=K.uniformsGroups;for(let Wr=0,Ma=wn.length;Wr<Ma;Wr++)if(qt.isWebGL2){const kr=wn[Wr];Se.update(kr,vi),Se.bind(kr,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function Ko(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function xa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,W,Y){te.get(R.texture).__webglTexture=W,te.get(R.depthTexture).__webglTexture=Y;const K=te.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,W){const Y=te.get(R);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,Y=0){U=R,H=W,O=Y;let K=!0,q=null,Et=!1,Dt=!1;if(R){const Wt=te.get(R);Wt.__useDefaultFramebuffer!==void 0?(Ut.bindFramebuffer(k.FRAMEBUFFER,null),K=!1):Wt.__webglFramebuffer===void 0?C.setupRenderTarget(R):Wt.__hasExternalTextures&&C.rebindTextures(R,te.get(R.texture).__webglTexture,te.get(R.depthTexture).__webglTexture);const ae=R.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(Dt=!0);const jt=te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?q=jt[W][Y]:q=jt[W],Et=!0):qt.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?q=te.get(R).__webglMultisampledFramebuffer:Array.isArray(jt)?q=jt[Y]:q=jt,A.copy(R.viewport),I.copy(R.scissor),ct=R.scissorTest}else A.copy(ft).multiplyScalar(st).floor(),I.copy(ot).multiplyScalar(st).floor(),ct=Ct;if(Ut.bindFramebuffer(k.FRAMEBUFFER,q)&&qt.drawBuffers&&K&&Ut.drawBuffers(R,q),Ut.viewport(A),Ut.scissor(I),Ut.setScissorTest(ct),Et){const Wt=te.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Wt.__webglTexture,Y)}else if(Dt){const Wt=te.get(R.texture),ae=W||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wt.__webglTexture,Y||0,ae)}tt=-1},this.readRenderTargetPixels=function(R,W,Y,K,q,Et,Dt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Vt=Vt[Dt]),Vt){Ut.bindFramebuffer(k.FRAMEBUFFER,Vt);try{const Wt=R.texture,ae=Wt.format,jt=Wt.type;if(ae!==mi&&bt.convert(ae)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ne=jt===ha&&(Pt.has("EXT_color_buffer_half_float")||qt.isWebGL2&&Pt.has("EXT_color_buffer_float"));if(jt!==ur&&bt.convert(jt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(jt===Vi&&(qt.isWebGL2||Pt.has("OES_texture_float")||Pt.has("WEBGL_color_buffer_float")))&&!ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-K&&Y>=0&&Y<=R.height-q&&k.readPixels(W,Y,K,q,bt.convert(ae),bt.convert(jt),Et)}finally{const Wt=U!==null?te.get(U).__webglFramebuffer:null;Ut.bindFramebuffer(k.FRAMEBUFFER,Wt)}}},this.copyFramebufferToTexture=function(R,W,Y=0){const K=Math.pow(2,-Y),q=Math.floor(W.image.width*K),Et=Math.floor(W.image.height*K);C.setTexture2D(W,0),k.copyTexSubImage2D(k.TEXTURE_2D,Y,0,0,R.x,R.y,q,Et),Ut.unbindTexture()},this.copyTextureToTexture=function(R,W,Y,K=0){const q=W.image.width,Et=W.image.height,Dt=bt.convert(Y.format),Vt=bt.convert(Y.type);C.setTexture2D(Y,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment),W.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,K,R.x,R.y,q,Et,Dt,Vt,W.image.data):W.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,K,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,Dt,W.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,K,R.x,R.y,Dt,Vt,W.image),K===0&&Y.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ut.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Y,K,q=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=R.max.x-R.min.x+1,Dt=R.max.y-R.min.y+1,Vt=R.max.z-R.min.z+1,Wt=bt.convert(K.format),ae=bt.convert(K.type);let jt;if(K.isData3DTexture)C.setTexture3D(K,0),jt=k.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)C.setTexture2DArray(K,0),jt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);const ne=k.getParameter(k.UNPACK_ROW_LENGTH),Ge=k.getParameter(k.UNPACK_IMAGE_HEIGHT),dn=k.getParameter(k.UNPACK_SKIP_PIXELS),Xe=k.getParameter(k.UNPACK_SKIP_ROWS),ri=k.getParameter(k.UNPACK_SKIP_IMAGES),Fe=Y.isCompressedTexture?Y.mipmaps[q]:Y.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Fe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Fe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,R.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,R.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,R.min.z),Y.isDataTexture||Y.isData3DTexture?k.texSubImage3D(jt,q,W.x,W.y,W.z,Et,Dt,Vt,Wt,ae,Fe.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(jt,q,W.x,W.y,W.z,Et,Dt,Vt,Wt,Fe.data)):k.texSubImage3D(jt,q,W.x,W.y,W.z,Et,Dt,Vt,Wt,ae,Fe),k.pixelStorei(k.UNPACK_ROW_LENGTH,ne),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ge),k.pixelStorei(k.UNPACK_SKIP_PIXELS,dn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Xe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ri),q===0&&K.generateMipmaps&&k.generateMipmap(jt),Ut.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),Ut.unbindTexture()},this.resetState=function(){H=0,O=0,U=null,Ut.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Zc?"display-p3":"srgb",e.unpackColorSpace=Le.workingColorSpace===Wo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===un?Nr:hp}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Nr?un:ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class ow extends Dp{}ow.prototype.isWebGL1Renderer=!0;class lw extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Fr extends Fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hd=new V,Vd=new V,Wd=new $t,Ic=new $c,Co=new da;let Io=class extends fn{constructor(t=new Tn,e=new Fr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let a=1,o=e.count;a<o;a++)Hd.fromBufferAttribute(e,a-1),Vd.fromBufferAttribute(e,a),i[a]=i[a-1],i[a]+=Hd.distanceTo(Vd);t.setAttribute("lineDistance",new gi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,o=t.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(a),Co.radius+=o,t.ray.intersectsSphere(Co)===!1)return;Wd.copy(a).invert(),Ic.copy(t.ray).applyMatrix4(Wd);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=new V,p=new V,g=new V,v=new V,x=this.isLineSegments?2:1,S=i.index,m=i.attributes.position;if(S!==null){const _=Math.max(0,u.start),L=Math.min(S.count,u.start+u.count);for(let T=_,N=L-1;T<N;T+=x){const H=S.getX(T),O=S.getX(T+1);if(d.fromBufferAttribute(m,H),p.fromBufferAttribute(m,O),Ic.distanceSqToSegment(d,p,v,g)>h)continue;v.applyMatrix4(this.matrixWorld);const tt=t.ray.origin.distanceTo(v);tt<t.near||tt>t.far||e.push({distance:tt,point:g.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,u.start),L=Math.min(m.count,u.start+u.count);for(let T=_,N=L-1;T<N;T+=x){if(d.fromBufferAttribute(m,T),p.fromBufferAttribute(m,T+1),Ic.distanceSqToSegment(d,p,v,g)>h)continue;v.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(v);O<t.near||O>t.far||e.push({distance:O,point:g.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const c=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}};const kd=new V,Xd=new V;class Ip extends Io{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let a=0,o=e.count;a<o;a+=2)kd.fromBufferAttribute(e,a),Xd.fromBufferAttribute(e,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+kd.distanceTo(Xd);t.setAttribute("lineDistance",new gi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cw{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,a=this.getPoint(0),o=0;e.push(0);for(let u=1;u<=t;u++)i=this.getPoint(u/t),o+=i.distanceTo(a),e.push(o),a=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let a=0;const o=i.length;let u;e?u=e:u=t*i[o-1];let c=0,h=o-1,d;for(;c<=h;)if(a=Math.floor(c+(h-c)/2),d=i[a]-u,d<0)c=a+1;else if(d>0)h=a-1;else{h=a;break}if(a=h,i[a]===u)return a/(o-1);const p=i[a],v=i[a+1]-p,x=(u-p)/v;return(a+x)/(o-1)}getTangent(t,e){let a=t-1e-4,o=t+1e-4;a<0&&(a=0),o>1&&(o=1);const u=this.getPoint(a),c=this.getPoint(o),h=e||(u.isVector2?new ge:new V);return h.copy(c).sub(u).normalize(),h}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new V,a=[],o=[],u=[],c=new V,h=new $t;for(let x=0;x<=t;x++){const S=x/t;a[x]=this.getTangentAt(S,new V)}o[0]=new V,u[0]=new V;let d=Number.MAX_VALUE;const p=Math.abs(a[0].x),g=Math.abs(a[0].y),v=Math.abs(a[0].z);p<=d&&(d=p,i.set(1,0,0)),g<=d&&(d=g,i.set(0,1,0)),v<=d&&i.set(0,0,1),c.crossVectors(a[0],i).normalize(),o[0].crossVectors(a[0],c),u[0].crossVectors(a[0],o[0]);for(let x=1;x<=t;x++){if(o[x]=o[x-1].clone(),u[x]=u[x-1].clone(),c.crossVectors(a[x-1],a[x]),c.length()>Number.EPSILON){c.normalize();const S=Math.acos(hn(a[x-1].dot(a[x]),-1,1));o[x].applyMatrix4(h.makeRotationAxis(c,S))}u[x].crossVectors(a[x],o[x])}if(e===!0){let x=Math.acos(hn(o[0].dot(o[t]),-1,1));x/=t,a[0].dot(c.crossVectors(o[0],o[t]))>0&&(x=-x);for(let S=1;S<=t;S++)o[S].applyMatrix4(h.makeRotationAxis(a[S],x*S)),u[S].crossVectors(a[S],o[S])}return{tangents:a,normals:o,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Po extends cw{constructor(t=0,e=0,i=1,a=1,o=0,u=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=a,this.aStartAngle=o,this.aEndAngle=u,this.aClockwise=c,this.aRotation=h}getPoint(t,e){const i=e||new ge,a=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const u=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=a;for(;o>a;)o-=a;o<Number.EPSILON&&(u?o=0:o=a),this.aClockwise===!0&&!u&&(o===a?o=-a:o=o-a);const c=this.aStartAngle+t*o;let h=this.aX+this.xRadius*Math.cos(c),d=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){const p=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=h-this.aX,x=d-this.aY;h=v*p-x*g+this.aX,d=v*g+x*p+this.aY}return i.set(h,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qd extends Fs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fp,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Up extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Uc=new $t,Yd=new V,Zd=new V;class uw{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jc,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Yd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yd),Zd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zd),e.updateMatrixWorld(),Uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hw extends uw{constructor(){super(new Qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kd extends Up{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new hw}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fw extends Up{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class dw{constructor(t,e,i=0,a=1/0){this.ray=new $c(t,e),this.near=i,this.far=a,this.camera=null,this.layers=new Jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return kc(t,this,i,e),i.sort($d),i}intersectObjects(t,e=!0,i=[]){for(let a=0,o=t.length;a<o;a++)kc(t[a],this,i,e);return i.sort($d),i}}function $d(s,t){return s.distance-t.distance}function kc(s,t,e,i){if(s.layers.test(t.layers)&&s.raycast(t,e),i===!0){const a=s.children;for(let o=0,u=a.length;o<u;o++)kc(a[o],t,e,!0)}}class pw extends Ip{constructor(t=10,e=10,i=4473924,a=8947848){i=new me(i),a=new me(a);const o=e/2,u=t/e,c=t/2,h=[],d=[];for(let v=0,x=0,S=-c;v<=e;v++,S+=u){h.push(-c,0,S,c,0,S),h.push(S,0,-c,S,0,c);const b=v===o?i:a;b.toArray(d,x),x+=3,b.toArray(d,x),x+=3,b.toArray(d,x),x+=3,b.toArray(d,x),x+=3}const p=new Tn;p.setAttribute("position",new gi(h,3)),p.setAttribute("color",new gi(d,3));const g=new Fr({vertexColors:!0,toneMapped:!1});super(p,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xc);const Ft={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),TOUCH_MULTI:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},Ce={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},re={x:0,y:0},Wn={camera:new $t,gizmos:new $t},Ne={type:"change"},fi={type:"start"},ei={type:"end"},mw=new dw,Je=new V,Jd=new $t,jd=new $t,di=new V;class Qd extends zr{constructor(t,e,i=()=>{},a=null){super(),this.camera=null,this.domElement=e,this.scene=a,this.target=new V,this.handler=i,this._currentTarget=new V,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new ge,this._v3_1=new V,this._v3_2=new V,this._m4_1=new $t,this._m4_2=new $t,this._quat=new Us,this._translationMatrix=new $t,this._rotationMatrix=new $t,this._scaleMatrix=new $t,this._rotationAxis=new V,this._cameraMatrixState=new $t,this._cameraProjectionState=new $t,this._fovState=1,this._upState=new V,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new $t,this._up0=new V,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new $t,this._gizmoMatrixState0=new $t,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=Ce.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new V,this._startCursorPosition=new V,this._grid=null,this._gridPosition=new V,this._gizmos=new As,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new V,this._cursorPosCurr=new V,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!0,this.minFov=5,this.maxFov=90,this.rotateSpeed=1,this.enabled=!0,this.enablePan=!1,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!1,this.minDistance=0,this.maxDistance=1/0,this.minZoom=.01,this.maxZoom=100,this._tbRadius=1,this._state=Ft.IDLE,this.setCamera(t),this.scene!=null&&this.scene.add(this._gizmos),this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.initializeMouseActions(),this._onContextMenu=this._onContextMenu.bind(this),this._onWheel=this._onWheel.bind(this),this._onPointerUp=this._onPointerUp.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerCancel=this._onPointerCancel.bind(this),this._onWindowResize=this._onWindowResize.bind(this),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onWheel),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),window.addEventListener("resize",this._onWindowResize)}onSinglePanStart(t,e){if(this.enabled)switch(this.dispatchEvent(fi),this.setCenter(t.clientX,t.clientY),e){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Ne)),this.updateTbState(Ft.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,re.x,re.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(Ne));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(Ft.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,re.x,re.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(Ne);break;case"FOV":if(!("isPerspectiveCamera"in this.camera)||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Ne)),this.updateTbState(Ft.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(re.x,re.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Ne)),this.updateTbState(Ft.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(re.x,re.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}}onSinglePanMove(t,e){if(this.enabled){const i=e!=this._state;switch(this.setCenter(t.clientX,t.clientY),e){case Ft.PAN:this.enablePan&&(i?(this.dispatchEvent(ei),this.dispatchEvent(fi),this.updateTbState(e,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,re.x,re.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,re.x,re.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case Ft.ROTATE:if(this.enableRotate)if(i)this.dispatchEvent(ei),this.dispatchEvent(fi),this.updateTbState(e,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.camera,re.x,re.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.camera,re.x,re.y,this.domElement,this._tbRadius));const a=this._startCursorPosition.distanceTo(this._currentCursorPosition),o=this._startCursorPosition.angleTo(this._currentCursorPosition),u=Math.max(a/this._tbRadius,o)*this.rotateSpeed;this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),u)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=u,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case Ft.SCALE:if(this.enableZoom)if(i)this.dispatchEvent(ei),this.dispatchEvent(fi),this.updateTbState(e,!0),this._startCursorPosition.setY(this.getCursorNDC(re.x,re.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(re.x,re.y,this.domElement).y*.5);const o=this._currentCursorPosition.y-this._startCursorPosition.y;let u=1;o<0?u=1/Math.pow(this.scaleFactor,-o*8):o>0&&(u=Math.pow(this.scaleFactor,o*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(u,this._v3_1))}break;case Ft.FOV:if(this.enableZoom&&"isPerspectiveCamera"in this.camera)if(i)this.dispatchEvent(ei),this.dispatchEvent(fi),this.updateTbState(e,!0),this._startCursorPosition.setY(this.getCursorNDC(re.x,re.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(re.x,re.y,this.domElement).y*.5);const o=this._currentCursorPosition.y-this._startCursorPosition.y;let u=1;o<0?u=1/Math.pow(this.scaleFactor,-o*8):o>0&&(u=Math.pow(this.scaleFactor,o*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const c=this._v3_1.distanceTo(this._gizmos.position);let h=c/u;h=ke.clamp(h,this.minDistance,this.maxDistance);const d=c*Math.tan(ke.DEG2RAD*this._fovState*.5);let p=ke.RAD2DEG*(Math.atan(d/h)*2);p=ke.clamp(p,this.minFov,this.maxFov);const g=d/Math.tan(ke.DEG2RAD*(p/2));u=c/g,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(p),this.applyTransformMatrix(this.scale(u,this._v3_2,!1)),Je.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(g/c),this._m4_1.makeTranslation(Je.x,Je.y,Je.z)}break}this.dispatchEvent(Ne)}}onSinglePanEnd(){if(this._state==Ft.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){const e=Math.abs((this._wPrev+this._wCurr)/2),i=this;this._animationId=window.requestAnimationFrame(function(a){i.updateTbState(Ft.ANIMATION_ROTATE,!0);const o=i.calculateRotationAxis(i._cursorPosPrev,i._cursorPosCurr);i.onRotationAnim(a,o,Math.min(e,i.wMax))})}else this.updateTbState(Ft.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Ne);else this.updateTbState(Ft.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Ne)}else(this._state==Ft.PAN||this._state==Ft.IDLE)&&(this.updateTbState(Ft.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(Ne));this.dispatchEvent(ei)}onDoubleTap(t){if(this.enabled&&this.enablePan&&this.scene!=null){this.dispatchEvent(fi),this.setCenter(t.clientX,t.clientY);const e=this.unprojectOnObj(this.getCursorNDC(re.x,re.y,this.domElement),this.camera);if(e!=null&&this.enableAnimations){const i=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(a){i.updateTbState(Ft.ANIMATION_FOCUS,!0),i.onFocusAnim(a,e,i._cameraMatrixState,i._gizmoMatrixState)})}else e!=null&&!this.enableAnimations&&(this.updateTbState(Ft.FOCUS,!0),this.focus(e,this.scaleFactor),this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(Ne))}this.dispatchEvent(ei)}onDoublePanStart(){this.enabled&&this.enablePan&&(this.dispatchEvent(fi),this.updateTbState(Ft.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.camera,re.x,re.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))}onDoublePanMove(){this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=Ft.PAN&&(this.updateTbState(Ft.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.camera,re.x,re.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(Ne))}onDoublePanEnd(){this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(ei)}onRotateStart(){this.enabled&&this.enableRotate&&(this.dispatchEvent(fi),this.updateTbState(Ft.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.camera.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))}onRotateMove(){if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let t;this._state!=Ft.ZROTATE&&(this.updateTbState(Ft.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),t=this.unprojectOnTbPlane(this.camera,re.x,re.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._v3_2)):t=new V().setFromMatrixPosition(this._gizmoMatrixState);const e=ke.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(t,e)),this.dispatchEvent(Ne)}}onRotateEnd(){this.updateTbState(Ft.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(ei)}onPinchStart(){this.enabled&&this.enableZoom&&(this.dispatchEvent(fi),this.updateTbState(Ft.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))}onPinchMove(){if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);const t=12;this._state!=Ft.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(Ft.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),t*this._devPxRatio);const e=this._currentFingerDistance/this._startFingerDistance;let i;this.enablePan?"isOrthographicCamera"in this.camera?i=this.unprojectOnTbPlane(this.camera,re.x,re.y,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):"isPerspectiveCamera"in this.camera&&(i=this.unprojectOnTbPlane(this.camera,re.x,re.y,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)):i=this._gizmos.position,this.applyTransformMatrix(this.scale(e,i)),this.dispatchEvent(Ne)}}onPinchEnd(){this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(ei)}onTriplePanStart(){if(this.enabled&&this.enableZoom){this.dispatchEvent(fi),this.updateTbState(Ft.SCALE,!0);let t=0,e=0;const i=this._touchCurrent.length;for(let a=0;a<i;a++)t+=this._touchCurrent[a].clientX,e+=this._touchCurrent[a].clientY;this.setCenter(t/i,e/i),this._startCursorPosition.setY(this.getCursorNDC(re.x,re.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}}onTriplePanMove(t){if(this.enabled&&this.enableZoom){let e=0,i=0;const a=this._touchCurrent.length;for(let x=0;x<a;x++)e+=this._touchCurrent[x].clientX,i+=this._touchCurrent[x].clientY;this.setCenter(e/a,i/a);const o=8;this._currentCursorPosition.setY(this.getCursorNDC(re.x,re.y,this.domElement).y*.5);const u=this._currentCursorPosition.y-this._startCursorPosition.y;let c=1;u<0?c=1/Math.pow(this.scaleFactor,-u*o):u>0&&(c=Math.pow(this.scaleFactor,u*o)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const h=this._v3_1.distanceTo(this._gizmos.position);let d=h/c;d=ke.clamp(d,this.minDistance,this.maxDistance);const p=h*Math.tan(ke.DEG2RAD*this._fovState*.5);let g=ke.RAD2DEG*(Math.atan(p/d)*2);g=ke.clamp(g,this.minFov,this.maxFov);const v=p/Math.tan(ke.DEG2RAD*(g/2));c=h/v,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(g),this.applyTransformMatrix(this.scale(c,this._v3_2,!1)),Je.copy(this._gizmos.position).sub(this.camera.position).normalize().multiplyScalar(v/h),this._m4_1.makeTranslation(Je.x,Je.y,Je.z),this.dispatchEvent(Ne)}}onTriplePanEnd(){this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(ei)}setCenter(t,e){re.x=t,re.y=e}initializeMouseActions(){this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")}setMouseAction(t,e,i=null){const a=["PAN","ROTATE","ZOOM","FOV"],o=[0,1,2,"WHEEL"],u=["CTRL","SHIFT",null];let c;if(!a.includes(t)||!o.includes(e)||!u.includes(i)||e=="WHEEL"&&t!="ZOOM"&&t!="FOV")return!1;switch(t){case"PAN":c=Ft.PAN;break;case"ROTATE":c=Ft.ROTATE;break;case"ZOOM":c=Ft.SCALE;break;case"FOV":c=Ft.FOV;break}const h={operation:t,mouse:e,key:i,state:c};for(let d=0;d<this.mouseActions.length;d++)if(this.mouseActions[d].mouse==h.mouse&&this.mouseActions[d].key==h.key)return this.mouseActions.splice(d,1,h),!0;return this.mouseActions.push(h),!0}unsetMouseAction(t,e=null){for(let i=0;i<this.mouseActions.length;i++)if(this.mouseActions[i].mouse==t&&this.mouseActions[i].key==e)return this.mouseActions.splice(i,1),!0;return!1}getOpFromAction(t,e){let i;for(let a=0;a<this.mouseActions.length;a++)if(i=this.mouseActions[a],i.mouse==t&&i.key==e)return i.operation;if(e!=null){for(let a=0;a<this.mouseActions.length;a++)if(i=this.mouseActions[a],i.mouse==t&&i.key==null)return i.operation}return null}getOpStateFromAction(t,e){let i;for(let a=0;a<this.mouseActions.length;a++)if(i=this.mouseActions[a],i.mouse==t&&i.key==e)return i.state;if(e!=null){for(let a=0;a<this.mouseActions.length;a++)if(i=this.mouseActions[a],i.mouse==t&&i.key==null)return i.state}return null}getAngle(t,e){return Math.atan2(e.clientY-t.clientY,e.clientX-t.clientX)*180/Math.PI}updateTouchEvent(t){for(let e=0;e<this._touchCurrent.length;e++)if(this._touchCurrent[e].pointerId==t.pointerId){this._touchCurrent.splice(e,1,t);break}}applyTransformMatrix(t){if(t.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(t.camera),this._m4_1.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.updateMatrix(),(this._state==Ft.ROTATE||this._state==Ft.ZROTATE||this._state==Ft.ANIMATION_ROTATE)&&this.camera.up.copy(this._upState).applyQuaternion(this.camera.quaternion)),t.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(t.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==Ft.SCALE||this._state==Ft.FOCUS||this._state==Ft.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.camera),this.adjustNearFar){const e=this.camera.position.distanceTo(this._gizmos.position),i=new Ns;i.setFromObject(this._gizmos);const a=new da;i.getBoundingSphere(a);const o=Math.max(this._nearPos0,a.radius+a.center.length()),u=e-this._initialNear,c=Math.min(o,u);this.camera.near=e-c;const h=Math.min(this._farPos0,-a.radius+a.center.length()),d=e-this._initialFar,p=Math.min(h,d);this.camera.far=e-p,this.camera.updateProjectionMatrix()}else{let e=!1;this.camera.near!=this._initialNear&&(this.camera.near=this._initialNear,e=!0),this.camera.far!=this._initialFar&&(this.camera.far=this._initialFar,e=!0),e&&this.camera.updateProjectionMatrix()}this.handler()}calculateAngularSpeed(t,e,i,a){const o=e-t,u=(a-i)/1e3;return u==0?0:o/u}calculatePointersDistance(t,e){return Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2))}calculateRotationAxis(t,e){return this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(t,e).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()}calculateTbRadius(t){const e=t.position.distanceTo(this._gizmos.position);if(t.type=="PerspectiveCamera"){const i=ke.DEG2RAD*t.fov*.5,a=Math.atan(t.aspect*Math.tan(i));return Math.tan(Math.min(i,a))*e*this.radiusFactor}else if(t.type=="OrthographicCamera")return Math.min(t.top,t.right)*this.radiusFactor}focus(t,e,i=1){Je.copy(t).sub(this._gizmos.position).multiplyScalar(i),this._translationMatrix.makeTranslation(Je.x,Je.y,Je.z),Jd.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),jd.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(e,this._gizmos.position)),this._gizmoMatrixState.copy(Jd),this._cameraMatrixState.copy(jd)}drawGrid(){if(this.scene!=null){let i,a,o,u;if("isOrthographicCamera"in this.camera){const c=this.camera.right-this.camera.left,h=this.camera.bottom-this.camera.top;o=Math.max(c,h),u=o/20,i=o/this.camera.zoom*3,a=i/u*this.camera.zoom}else if("isPerspectiveCamera"in this.camera){const c=this.camera.position.distanceTo(this._gizmos.position),h=ke.DEG2RAD*this.camera.fov*.5,d=Math.atan(this.camera.aspect*Math.tan(h));o=Math.tan(Math.max(h,d))*c*2,u=o/20,i=o*3,a=i/u}this._grid==null&&(this._grid=new pw(i,a,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.camera.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}}dispose(){this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("resize",this._onWindowResize),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()}disposeGrid(){this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)}easeOutCubic(t){return 1-Math.pow(1-t,3)}activateGizmos(t){const e=this._gizmos.children[0],i=this._gizmos.children[1],a=this._gizmos.children[2];t?(e.material.setValues({opacity:1}),i.material.setValues({opacity:1}),a.material.setValues({opacity:1})):(e.material.setValues({opacity:.6}),i.material.setValues({opacity:.6}),a.material.setValues({opacity:.6}))}getCursorNDC(t,e,i){const a=i.getBoundingClientRect();return this._v2_1.setX((t-a.left)/a.width*2-1),this._v2_1.setY((a.bottom-e)/a.height*2-1),this._v2_1.clone()}getCursorPosition(t,e,i){return"isOrthographicCamera"in this.camera&&(this._v2_1.copy(this.getCursorNDC(t,e,i)),this._v2_1.x*=(this.camera.right-this.camera.left)*.5,this._v2_1.y*=(this.camera.top-this.camera.bottom)*.5),this._v2_1.clone()}setCamera(t){t.lookAt(this.target),t.updateMatrix(),t.type=="PerspectiveCamera"&&(this._fov0=t.fov,this._fovState=t.fov),this._cameraMatrixState0.copy(t.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(t.projectionMatrix),this._zoom0=t.zoom,this._zoomState=this._zoom0,this._initialNear=t.near,this._nearPos0=t.position.distanceTo(this.target)-t.near,this._nearPos=this._initialNear,this._initialFar=t.far,this._farPos0=t.position.distanceTo(this.target)-t.far,this._farPos=this._initialFar,this._up0.copy(t.up),this._upState.copy(t.up),this.camera=t,this.camera.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(t),this.makeGizmos(this.target,this._tbRadius)}setGizmosVisible(t){this._gizmos.visible=t,this.dispatchEvent(Ne)}setTbRadius(t){this.radiusFactor=t,this._tbRadius=this.calculateTbRadius(this.camera);const i=new Po(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),a=new Tn().setFromPoints(i);for(const o in this._gizmos.children)this._gizmos.children[o].geometry=a;this.dispatchEvent(Ne)}makeGizmos(t,e){const a=new Po(0,0,e,e,0,2*Math.PI,!1,0).getPoints(this._curvePts),o=new Tn().setFromPoints(a),u=new Fr({color:16744576,fog:!1,transparent:!0,opacity:.6}),c=new Fr({color:8454016,fog:!1,transparent:!0,opacity:.6}),h=new Fr({color:8421631,fog:!1,transparent:!0,opacity:.6}),d=new Io(o,u),p=new Io(o,c),g=new Io(o,h),v=Math.PI*.5;if(d.rotation.x=v,p.rotation.y=v,this._gizmoMatrixState0.identity().setPosition(t),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.camera.zoom!==1){const x=1/this.camera.zoom;this._scaleMatrix.makeScale(x,x,x),this._translationMatrix.makeTranslation(-t.x,-t.y,-t.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(t.x,t.y,t.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(x){x.isLine&&(x.geometry.dispose(),x.material.dispose())}),this._gizmos.clear(),this._gizmos.add(d),this._gizmos.add(p),this._gizmos.add(g)}onFocusAnim(t,e,i,a){if(this._timeStart==-1&&(this._timeStart=t),this._state==Ft.ANIMATION_FOCUS){const u=(t-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(a),u>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(e,this.scaleFactor),this._timeStart=-1,this.updateTbState(Ft.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Ne);else{const c=this.easeOutCubic(u),h=1-c+this.scaleFactor*c;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(e,h,c),this.dispatchEvent(Ne);const d=this;this._animationId=window.requestAnimationFrame(function(p){d.onFocusAnim(p,e,i,a.clone())})}}else this._animationId=-1,this._timeStart=-1}onRotationAnim(t,e,i){if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=t),this._state==Ft.ANIMATION_ROTATE){const a=(t-this._timeStart)/1e3;if(i+-this.dampingFactor*a>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(a,2)+i*a+0,this.applyTransformMatrix(this.rotate(e,this._angleCurrent)),this.dispatchEvent(Ne);const u=this;this._animationId=window.requestAnimationFrame(function(c){u.onRotationAnim(c,e,i)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(Ft.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Ne)}else this._animationId=-1,this._timeStart=-1,this._state!=Ft.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(Ne))}pan(t,e,i=!1){const a=t.clone().sub(e);if("isOrthographicCamera"in this.camera)a.multiplyScalar(1/this.camera.zoom);else if("isPerspectiveCamera"in this.camera&&i){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);const o=this._v3_1.distanceTo(this._v3_2)/this.camera.position.distanceTo(this._gizmos.position);a.multiplyScalar(1/o)}return this._v3_1.set(a.x,a.y,0).applyQuaternion(this.camera.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),Wn}reset(){this.camera.zoom=this._zoom0,"isPerspectiveCamera"in this.camera&&(this.camera.fov=this._fov0),this.camera.near=this._nearPos,this.camera.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(this._up0),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera),this.camera.lookAt(this._gizmos.position),this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(Ne)}rotate(t,e){const i=this._gizmos.position;return this._translationMatrix.makeTranslation(-i.x,-i.y,-i.z),this._rotationMatrix.makeRotationAxis(t,-e),this._m4_1.makeTranslation(i.x,i.y,i.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),Wn}copyState(){let t;"isOrthographicCamera"in this.camera?t=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}}):"isPerspectiveCamera"in this.camera&&(t=JSON.stringify({arcballState:{cameraFar:this.camera.far,cameraFov:this.camera.fov,cameraMatrix:this.camera.matrix,cameraNear:this.camera.near,cameraUp:this.camera.up,cameraZoom:this.camera.zoom,gizmoMatrix:this._gizmos.matrix}})),navigator.clipboard.writeText(t)}pasteState(){const t=this;navigator.clipboard.readText().then(function(i){t.setStateFromJSON(i)})}saveState(){this._cameraMatrixState0.copy(this.camera.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.camera.near,this._farPos=this.camera.far,this._zoom0=this.camera.zoom,this._up0.copy(this.camera.up),"isPerspectiveCamera"in this.camera&&(this._fov0=this.camera.fov)}scale(t,e,i=!0){di.copy(e);let a=1/t;if("isOrthographicCamera"in this.camera){this.camera.zoom=this._zoomState,this.camera.zoom*=t,this.camera.zoom>this.maxZoom?(this.camera.zoom=this.maxZoom,a=this._zoomState/this.maxZoom):this.camera.zoom<this.minZoom&&(this.camera.zoom=this.minZoom,a=this._zoomState/this.minZoom),this.camera.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(a,a,a),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),di.sub(this._v3_1);const o=di.clone().multiplyScalar(a);return di.sub(o),this._m4_1.makeTranslation(di.x,di.y,di.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),Wn}else if("isPerspectiveCamera"in this.camera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let o=this._v3_1.distanceTo(di),u=o-o*a;const c=o-u;if(c<this.minDistance?(a=this.minDistance/o,u=o-o*a):c>this.maxDistance&&(a=this.maxDistance/o,u=o-o*a),Je.copy(di).sub(this._v3_1).normalize().multiplyScalar(u),this._m4_1.makeTranslation(Je.x,Je.y,Je.z),i){const h=this._v3_2;o=h.distanceTo(di),u=o-o*a,Je.copy(di).sub(this._v3_2).normalize().multiplyScalar(u),this._translationMatrix.makeTranslation(h.x,h.y,h.z),this._scaleMatrix.makeScale(a,a,a),this._m4_2.makeTranslation(Je.x,Je.y,Je.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-h.x,-h.y,-h.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return Wn}}setFov(t){"isPerspectiveCamera"in this.camera&&(this.camera.fov=ke.clamp(t,this.minFov,this.maxFov),this.camera.updateProjectionMatrix())}setTransformationMatrices(t=null,e=null){t!=null?Wn.camera!=null?Wn.camera.copy(t):Wn.camera=t.clone():Wn.camera=null,e!=null?Wn.gizmos!=null?Wn.gizmos.copy(e):Wn.gizmos=e.clone():Wn.gizmos=null}zRotate(t,e){return this._rotationMatrix.makeRotationAxis(this._rotationAxis,e),this._translationMatrix.makeTranslation(-t.x,-t.y,-t.z),this._m4_1.makeTranslation(t.x,t.y,t.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(t),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,e),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),Wn}getRaycaster(){return mw}unprojectOnObj(t,e){const i=this.getRaycaster();i.near=e.near,i.far=e.far,i.setFromCamera(t,e);const a=i.intersectObjects(this.scene.children,!0);for(let o=0;o<a.length;o++)if(a[o].object.uuid!=this._gizmos.uuid&&a[o].face!=null)return a[o].point.clone();return null}unprojectOnTbSurface(t,e,i,a,o){if(t.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(e,i,a)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);const u=Math.pow(this._v2_1.x,2),c=Math.pow(this._v2_1.y,2),h=Math.pow(this._tbRadius,2);return u+c<=h*.5?this._v3_1.setZ(Math.sqrt(h-(u+c))):this._v3_1.setZ(h*.5/Math.sqrt(u+c)),this._v3_1}else if(t.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(e,i,a)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(t.projectionMatrixInverse);const u=this._v3_1.clone().normalize(),c=t.position.distanceTo(this._gizmos.position),h=Math.pow(o,2),d=this._v3_1.z,p=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(p==0)return u.set(this._v3_1.x,this._v3_1.y,o),u;const g=d/p,v=c;let x=Math.pow(g,2)+1,S=2*g*v,b=Math.pow(v,2)-h,m=Math.pow(S,2)-4*x*b;if(m>=0&&(this._v2_1.setX((-S-Math.sqrt(m))/(2*x)),this._v2_1.setY(g*this._v2_1.x+v),ke.RAD2DEG*this._v2_1.angle()>=45)){const T=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(c-this._v2_1.y,2));return u.multiplyScalar(T),u.z+=c,u}x=g,S=v,b=-h*.5,m=Math.pow(S,2)-4*x*b,this._v2_1.setX((-S-Math.sqrt(m))/(2*x)),this._v2_1.setY(g*this._v2_1.x+v);const _=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(c-this._v2_1.y,2));return u.multiplyScalar(_),u.z+=c,u}}unprojectOnTbPlane(t,e,i,a,o=!1){if(t.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(e,i,a)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(t.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(e,i,a)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(t.projectionMatrixInverse);const u=this._v3_1.clone().normalize(),c=this._v3_1.z,h=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));let d;if(o?d=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):d=t.position.distanceTo(this._gizmos.position),h==0)return u.set(0,0,0),u;const p=c/h,g=d,v=-g/p,x=Math.sqrt(Math.pow(g,2)+Math.pow(v,2));return u.multiplyScalar(x),u.z=0,u}}updateMatrixState(){this._cameraMatrixState.copy(this.camera.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),"isOrthographicCamera"in this.camera?(this._cameraProjectionState.copy(this.camera.projectionMatrix),this.camera.updateProjectionMatrix(),this._zoomState=this.camera.zoom):"isPerspectiveCamera"in this.camera&&(this._fovState=this.camera.fov)}updateTbState(t,e){this._state=t,e&&this.updateMatrixState()}update(){if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.camera),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),"isOrthographicCamera"in this.camera){if(this.camera.zoom>this.maxZoom||this.camera.zoom<this.minZoom){const e=ke.clamp(this.camera.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(e/this.camera.zoom,this._gizmos.position,!0))}}else if("isPerspectiveCamera"in this.camera){const e=this.camera.position.distanceTo(this._gizmos.position);if(e>this.maxDistance+1e-6||e<this.minDistance-1e-6){const a=ke.clamp(e,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(a/e,this._gizmos.position)),this.updateMatrixState()}(this.camera.fov<this.minFov||this.camera.fov>this.maxFov)&&(this.camera.fov=ke.clamp(this.camera.fov,this.minFov,this.maxFov),this.camera.updateProjectionMatrix());const i=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.camera),i<this._tbRadius-1e-6||i>this._tbRadius+1e-6){const a=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,o=this._tbRadius/a,c=new Po(0,0,o,o,0,2*Math.PI,!1,0).getPoints(this._curvePts),h=new Tn().setFromPoints(c);for(const d in this._gizmos.children)this._gizmos.children[d].geometry=h}}this.camera.lookAt(this._gizmos.position)}setStateFromJSON(t){const e=JSON.parse(t);if(e.arcballState!=null){this._cameraMatrixState.fromArray(e.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.camera.position,this.camera.quaternion,this.camera.scale),this.camera.up.copy(e.arcballState.cameraUp),this.camera.near=e.arcballState.cameraNear,this.camera.far=e.arcballState.cameraFar,this.camera.zoom=e.arcballState.cameraZoom,"isPerspectiveCamera"in this.camera&&(this.camera.fov=e.arcballState.cameraFov),this._gizmoMatrixState.fromArray(e.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.camera.updateMatrix(),this.camera.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.camera);const i=new $t().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(i),this.camera.lookAt(this._gizmos.position),this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(Ne)}}_onWindowResize(){const t=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.camera);const e=this._tbRadius/t,a=new Po(0,0,e,e,0,2*Math.PI,!1,0).getPoints(this._curvePts),o=new Tn().setFromPoints(a);for(const u in this._gizmos.children)this._gizmos.children[u].geometry=o;this.dispatchEvent(Ne)}_onContextMenu(t){if(this.enabled){for(let e=0;e<this.mouseActions.length;e++)if(this.mouseActions[e].mouse==2){t.preventDefault();break}}}_onPointerCancel(){this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=Ce.NONE}_onPointerDown(t){if(t.button==0&&t.isPrimary?(this._downValid=!0,this._downEvents.push(t),this._downStart=performance.now()):this._downValid=!1,t.pointerType=="touch"&&this._input!=Ce.CURSOR)switch(this._touchStart.push(t),this._touchCurrent.push(t),this._input){case Ce.NONE:this._input=Ce.ONE_FINGER,this.onSinglePanStart(t,"ROTATE"),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp);break;case Ce.ONE_FINGER:case Ce.ONE_FINGER_SWITCHED:this._input=Ce.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case Ce.TWO_FINGER:this._input=Ce.MULT_FINGER,this.onTriplePanStart();break}else if(t.pointerType!="touch"&&this._input==Ce.NONE){let e=null;t.ctrlKey||t.metaKey?e="CTRL":t.shiftKey&&(e="SHIFT"),this._mouseOp=this.getOpFromAction(t.button,e),this._mouseOp!=null&&(window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),this._input=Ce.CURSOR,this._button=t.button,this.onSinglePanStart(t,this._mouseOp))}}_onPointerMove(t){if(t.pointerType=="touch"&&this._input!=Ce.CURSOR){let e=0;switch(this._input){case Ce.ONE_FINGER:this.updateTouchEvent(t),this.onSinglePanMove(t,Ft.ROTATE);break;case Ce.ONE_FINGER_SWITCHED:if(e=this.calculatePointersDistance(this._touchCurrent[0],t)*this._devPxRatio,e>=this._switchSensibility){this._input=Ce.ONE_FINGER,this.updateTouchEvent(t),this.onSinglePanStart(t,"ROTATE");break}break;case Ce.TWO_FINGER:this.updateTouchEvent(t),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case Ce.MULT_FINGER:this.updateTouchEvent(t),this.onTriplePanMove(t);break}}else if(t.pointerType!="touch"&&this._input==Ce.CURSOR){let e=null;t.ctrlKey||t.metaKey?e="CTRL":t.shiftKey&&(e="SHIFT");const i=this.getOpStateFromAction(this._button,e);i!=null&&this.onSinglePanMove(t,i)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],t)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)}_onPointerUp(t){if(t.pointerType=="touch"&&this._input!=Ce.CURSOR){const e=this._touchCurrent.length;for(let i=0;i<e;i++)if(this._touchCurrent[i].pointerId==t.pointerId){this._touchCurrent.splice(i,1),this._touchStart.splice(i,1);break}switch(this._input){case Ce.ONE_FINGER:case Ce.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Ce.NONE,this.onSinglePanEnd();break;case Ce.TWO_FINGER:this.onDoublePanEnd(),this.onPinchEnd(),this.onRotateEnd(),this._input=Ce.ONE_FINGER_SWITCHED;break;case Ce.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Ce.NONE,this.onTriplePanEnd());break}}else t.pointerType!="touch"&&this._input==Ce.CURSOR&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Ce.NONE,this.onSinglePanEnd(),this._button=-1);if(t.isPrimary)if(this._downValid)if(t.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{const i=t.timeStamp-this._clickStart,a=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;i<=this._maxInterval&&a<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(t)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)}_onWheel(t){if(this.enabled&&this.enableZoom){let e=null;t.ctrlKey||t.metaKey?e="CTRL":t.shiftKey&&(e="SHIFT");const i=this.getOpFromAction("WHEEL",e);if(i!=null){t.preventDefault(),this.dispatchEvent(fi);const a=125;let o=t.deltaY/a,u=1;switch(o>0?u=1/this.scaleFactor:o<0&&(u=this.scaleFactor),i){case"ZOOM":if(this.updateTbState(Ft.SCALE,!0),o>0?u=1/Math.pow(this.scaleFactor,o):o<0&&(u=Math.pow(this.scaleFactor,-o)),this.cursorZoom&&this.enablePan){let c;"isOrthographicCamera"in this.camera?c=this.unprojectOnTbPlane(this.camera,t.clientX,t.clientY,this.domElement).applyQuaternion(this.camera.quaternion).multiplyScalar(1/this.camera.zoom).add(this._gizmos.position):"isPerspectiveCamera"in this.camera&&(c=this.unprojectOnTbPlane(this.camera,t.clientX,t.clientY,this.domElement).applyQuaternion(this.camera.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(u,c))}else this.applyTransformMatrix(this.scale(u,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(Ne),this.dispatchEvent(ei);break;case"FOV":if("isPerspectiveCamera"in this.camera){this.updateTbState(Ft.FOV,!0),t.deltaX!=0&&(o=t.deltaX/a,u=1,o>0?u=1/Math.pow(this.scaleFactor,o):o<0&&(u=Math.pow(this.scaleFactor,-o))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const c=this._v3_1.distanceTo(this._gizmos.position);let h=c/u;h=ke.clamp(h,this.minDistance,this.maxDistance);const d=c*Math.tan(ke.DEG2RAD*this.camera.fov*.5);let p=ke.RAD2DEG*(Math.atan(d/h)*2);p>this.maxFov?p=this.maxFov:p<this.minFov&&(p=this.minFov);const g=d/Math.tan(ke.DEG2RAD*(p/2));u=c/g,this.setFov(p),this.applyTransformMatrix(this.scale(u,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(Ft.IDLE,!1),this.dispatchEvent(Ne),this.dispatchEvent(ei);break}}}}}let tp=0;class _w{constructor(){this.scene=new lw,this.renderer=new Dp({alpha:!0}),this.renderer.setPixelRatio(devicePixelRatio),this.controls={},this.camera=null,this.objects={scene:this.scene}}addCamera(t,e,i){e.name=t,this.add("camera/"+t,e),this.controls[t]=i}setCamera(t){let e=this.group("camera"),i=null;e.children.map(a=>{a.visible=!1,a.name==t&&(i=a)}),t in this.controls&&(this.control=this.controls[t]),i.visible=!0,this.camera=i}get canvas(){return this.renderer.domElement}setSize(t,e){this.renderer.setSize(t,e),this.width=t,this.height=e,this.group("camera").children.map(a=>{a.isPerspectiveCamera&&(a.aspect=t/e,a.updateProjectionMatrix()),a.isOrthographicCamera&&(a.right=a.top*t/e,a.left=a.bottom*t/e,a.updateProjectionMatrix())})}switch(t,e){return e!==void 0?this.objects[t].visible=e:this.objects[t].visible=!this.objects[t].visible,this.objects[t].visible}add(t,e){const i=t.split("/"),a=i.slice(-1)[0];let o=i.slice(0,-1).join("/");return e.name=a,this.group(o).add(e),this.objects[t]=e,e}group(t){return t?this.objects[t]?this.objects[t]:this.add(t,new As):this.scene}render(){for(let t in this.controls)this.controls[t].update();this.renderer.render(this.scene,this.camera)}addHyperFigure(t,e,i=!0){const a=[];e.points.forEach(h=>a.push(h.x,h.y,h.z,h.w));const o=new _i(new Float32Array(a),4);this.positionsAttrs.push(o);function u(){const h=`hsl(${~~Math.floor(360*tp*.618033989)}, 100%,  50%)`;return tp++,h}let c=new me(u());e.hyper.forEach(h=>{i&&(c=new me(u()));const d=new Ti;d.geometry=new Tn,d.geometry.setAttribute("position",o),d.geometry.setIndex(h.trangles),d.geometry.computeVertexNormals(),i?d.material=new qd({flatShading:!0,side:An,color:c,bumpScale:.01,shininess:.5,opacity:.4,transparent:!0}):d.material=new qd({flatShading:!0,color:c});const p=new Ip;p.geometry=new Tn,p.geometry.setAttribute("position",o),p.geometry.setIndex(h.edges),h.trangles.length>0?p.material=new Fr({color:"#ffffff"}):p.material=new Fr({color:c,linewidth:2}),this.add(t+"/volume"+Math.random(),d),this.add(t+"/edges"+Math.random(),p)})}}class oa{constructor(t){this._value=!1,this._value=t}get value(){return this._value}set value(t){this._value=t}switch(){this._value=!this._value}}const Np=UM({id:"main",state:()=>({cameraMode:new oa(!0),axisView:new oa(!1),alphaView:new oa(!1),wRotationMode:new oa(!1),rotateMatrixView:new oa(!1),rotateMatrix:new $t,plot:NM(new _w)})});function gw(s){let[t,e]=s;return[[t,e]]}function vw(s){let[t,e,i]=s;return[[t,e,i]]}function xw(s){let[t,e,i,a]=s;return[[t,e,i],[t,i,a],[i,e,a],[e,t,a]]}function Mw(s){let[t,e,i,a,o,u]=s;return[[t,o,i],[t,a,o],[t,u,a],[t,i,u],[e,i,o],[e,o,a],[e,a,u],[e,u,i]]}function Sw(s){let[t,e,i,a,o,u,c,h]=s;return[[t,i,a,e],[o,u,h,c],[t,o,c,i],[u,e,a,h],[o,t,e,u],[h,a,i,c]]}class ma{constructor(t,e,i,a){this.points=[],this.hyper=[];function o(u){return u.length==2?gw(u):u.length==3?vw(u):u.length==4?xw(u):u.length==6?Mw(u):u.length==8?Sw(u):[]}t.forEach(u=>{this.points.push(new Ze(...u).multiplyScalar(a).add(i))}),e.map(o).forEach(u=>{const c=[],h=[];this.hyper.push({trangles:c,edges:h}),u.forEach(d=>{c.push(...Ew(d)),h.push(...yw(d))})})}}function Pw(s,t){return new ma([[1,0,0,0],[-1,0,0,0],[0,1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,-1,0],[0,0,0,1],[0,0,0,-1]],[[0,2,4,6],[6,1,2,4],[6,0,3,4],[1,3,4,6],[6,0,2,5],[1,2,5,6],[0,3,5,6],[6,1,3,5],[7,0,2,4],[1,2,4,7],[0,3,4,7],[7,1,3,4],[0,2,5,7],[7,1,2,5],[7,0,3,5],[1,3,5,7]],s,t)}function Lw(s,t){const e=Math.sqrt(5)/4;return new ma([[e,e,e,.25],[e,-e,-e,.25],[-e,e,-e,.25],[-e,-e,e,.25],[0,0,0,-1]],[[0,1,2,3],[1,2,3,4],[2,3,4,0],[3,4,0,1],[4,0,1,2]],s,t)}function Dw(s,t){const e=.707106781;return new ma([[0,0,e,e],[0,0,-e,-e],[0,0,-e,e],[0,0,e,-e],[e,e,0,0],[-e,-e,0,0],[-e,e,0,0],[e,-e,0,0],[0,e,0,e],[0,-e,0,-e],[0,-e,0,e],[0,e,0,-e],[e,0,e,0],[-e,0,-e,0],[-e,0,e,0],[e,0,-e,0],[e,0,0,e],[-e,0,0,-e],[-e,0,0,e],[e,0,0,-e],[0,e,e,0],[0,-e,-e,0],[0,-e,e,0],[0,e,-e,0]],[[0,1,2,3,4,5],[0,1,2,3,6,7],[4,5,0,1,6,7],[4,5,2,3,6,7],[8,9,12,13,10,11],[8,9,14,15,10,11],[12,13,8,9,14,15],[12,13,10,11,14,15],[16,17,20,21,18,19],[16,17,22,23,18,19],[20,21,16,17,22,23],[20,21,18,19,22,23]],s,t)}function Iw(s,t){return new ma([[.5,.5,.5,.5],[-.5,.5,.5,.5],[.5,-.5,.5,.5],[-.5,-.5,.5,.5],[.5,.5,-.5,.5],[-.5,.5,-.5,.5],[.5,-.5,-.5,.5],[-.5,-.5,-.5,.5],[.5,.5,.5,-.5],[-.5,.5,.5,-.5],[.5,-.5,.5,-.5],[-.5,-.5,.5,-.5],[.5,.5,-.5,-.5],[-.5,.5,-.5,-.5],[.5,-.5,-.5,-.5],[-.5,-.5,-.5,-.5]],[[0,1,2,3,4,5,6,7],[12,13,14,15,8,9,10,11],[8,9,10,11,0,1,2,3],[4,5,6,7,12,13,14,15],[4,5,12,13,0,1,8,9],[14,15,6,7,10,11,2,3],[4,12,6,14,0,8,2,10],[13,5,15,7,9,1,11,3]],s,t)}function Lo(s,t){return new ma([s,t],[[0,1]],new Ze().setW(0),1)}function Ew(s){const t=[];for(let e=1;e<s.length-1;e++)t.push(s[0],s[e],s[e+1]);return t}function yw(s){const t=[];for(let e=0;e<s.length-1;e++)t.push(s[e],s[e+1]);return s.length>1&&t.push(s[s.length-1],s[0]),t}const Tw=FM({__name:"Scene",setup(s){const t=Np(),e=OM();t.plot.positionsAttrs=[];let i,a,o;const u=b=>{let{x:m,y:_}=c(b);if(t.wRotationMode.value&&o){let L=m-o.x,T=_-o.y,N=Math.cos(L),H=Math.sin(L),O=Math.cos(T),U=Math.sin(T),tt=new $t().set(N,0,0,-H,0,1,0,0,0,0,1,0,H,0,0,N),vt=new $t().set(1,0,0,0,0,1,0,0,0,0,O,-U,0,0,U,O),A=new $t().multiplyMatrices(tt,vt),I=v(A);x(I)}o={x:m,y:_}};function c(b){let m,_;return"touches"in b?(m=b.touches[0].pageX,_=b.touches[0].pageY):(m=b.pageX,_=b.pageY),{x:2*m/t.plot.height-t.plot.width/t.plot.height,y:1-2*_/t.plot.height}}const h=b=>{o=c(b),e.value.addEventListener("pointermove",u),e.value.addEventListener("pointerup",d)},d=b=>{o=null,e.value.removeEventListener("pointermove",u)},p=b=>{o=null,e.value.removeEventListener("pointermove",u)},g=b=>{if(t.wRotationMode.value){let{deltaX:m,deltaY:_,deltaZ:L}=b;const T=50;let N=Math.cos(Math.PI*(m/T)/180),H=Math.sin(Math.PI*(m/T)/180),O=Math.cos(Math.PI*(_/T)/180),U=Math.sin(Math.PI*(_/T)/180),tt=Math.cos(Math.PI*(L/T)/180),vt=Math.sin(Math.PI*(L/T)/180),A=new $t().set(N,0,0,-H,0,1,0,0,0,0,1,0,H,0,0,N),I=new $t().set(1,0,0,0,0,O,0,-U,0,0,1,0,0,U,0,O),ct=new $t().set(1,0,0,0,0,1,0,0,0,0,tt,-H,0,0,vt,tt),mt=new $t().multiply(A).multiply(I).multiply(ct),B=v(mt);x(B)}};ao(t.wRotationMode,({value:b})=>{b?(i.enabled=!1,a.enabled=!1):(i.enabled=!0,a.enabled=!0)}),ao(t.axisView,({value:b})=>{t.plot.switch("axis",b)}),ao(t.alphaView,({value:b})=>{t.plot.switch("alpha",b),t.plot.switch("beta",!b)}),ao(t.cameraMode,({value:b})=>{let m={up:t.plot.camera.up,rotation:t.plot.camera.rotation,position:t.plot.camera.position};t.plot.setCamera(t.cameraMode.value?"orthographic":"perspective"),t.plot.camera.up.copy(m.up),t.plot.camera.rotation.copy(m.rotation),t.plot.camera.position.copy(m.position)});function v(b){if(!t.plot.camera)return;let m=t.plot.camera.up.clone().normalize(),_=t.plot.camera.position.clone().normalize(),L=new V().crossVectors(m,_).normalize();const T=new $t().set(L.x,L.y,L.z,0,_.x,_.y,_.z,0,m.x,m.y,m.z,0,0,0,0,1);return T.clone().invert().multiply(b).multiply(T)}function x(b){t.rotateMatrix.multiply(b),t.plot.positionsAttrs.forEach(m=>{for(let _=0;_<m.count;_++){let L=m.getX(_),T=m.getY(_),N=m.getZ(_),H=m.getW(_),O=new Ze(L,T,N,H).applyMatrix4(b);m.setXYZW(_,O.x,O.y,O.z,O.w)}m.needsUpdate=!0})}function S(){for(let b in t.plot.objects)t.plot.objects[b].animate&&t.plot.objects[b].animate();t.plot.render(),requestAnimationFrame(S)}return zM(()=>{const b=new V(0,0,2.5),m=new ni(50,1,.1,1e3);m.position.copy(b);const _=new Kd(16777215,5);m.add(_),i=new Qd(m,e.value),t.plot.addCamera("perspective",m,i);const L=new Qc(-1,1,1,-1,.1,1e3);L.position.copy(b);const T=new Kd(16777215,5);L.add(T);const N=new fw(16777215);L.add(N),a=new Qd(L,e.value),t.plot.addCamera("orthographic",L,a),t.plot.setCamera(t.cameraMode.value?"orthographic":"perspective"),t.plot.addHyperFigure("axis/X",Lo([-2,0,0,0],[2,0,0,0])),t.plot.addHyperFigure("axis/Y",Lo([0,-2,0,0],[0,2,0,0])),t.plot.addHyperFigure("axis/Z",Lo([0,0,-2,0],[0,0,2,0])),t.plot.addHyperFigure("axis/W",Lo([0,0,0,-2],[0,0,0,2])),t.plot.switch("axis",!1),e.value.appendChild(t.plot.canvas);const H=()=>{t.plot.setSize(e.value.clientWidth,e.value.clientHeight)};window.addEventListener("resize",H),H(),S();function O(tt){(tt.code=="ShiftLeft"||tt.code=="ShiftRight")&&(t.wRotationMode.value=!0),tt.code=="Space"&&(t.cameraMode.value=!t.cameraMode.value)}function U(tt){(tt.code=="ShiftLeft"||tt.code=="ShiftRight")&&(t.wRotationMode.value=!1)}document.addEventListener("keydown",O),document.addEventListener("keyup",U),e.value.addEventListener("pointerdown",h),e.value.addEventListener("pointercancel",p),e.value.addEventListener("wheel",g)}),(b,m)=>(br(),wr("div",{id:"scene",ref_key:"scene_container",ref:e},null,512))}});var la=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ho={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ho.exports;(function(s,t){(function(){var e,i="4.17.21",a=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",c="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",g=1,v=2,x=4,S=1,b=2,m=1,_=2,L=4,T=8,N=16,H=32,O=64,U=128,tt=256,vt=512,A=30,I="...",ct=800,mt=16,B=1,J=2,j=3,st=1/0,et=9007199254740991,rt=17976931348623157e292,ft=0/0,ot=4294967295,Ct=ot-1,Zt=ot>>>1,$=[["ary",U],["bind",m],["bindKey",_],["curry",T],["curryRight",N],["flip",vt],["partial",H],["partialRight",O],["rearg",tt]],ut="[object Arguments]",yt="[object Array]",Gt="[object AsyncFunction]",Ot="[object Boolean]",wt="[object Date]",xe="[object DOMException]",Kt="[object Error]",k="[object Function]",Ke="[object GeneratorFunction]",Pt="[object Map]",qt="[object Number]",Ut="[object Null]",Me="[object Object]",te="[object Promise]",C="[object Proxy]",y="[object RegExp]",X="[object Set]",dt="[object String]",lt="[object Symbol]",pt="[object Undefined]",Rt="[object WeakMap]",St="[object WeakSet]",Tt="[object ArrayBuffer]",zt="[object DataView]",ee="[object Float32Array]",ht="[object Float64Array]",Ee="[object Int8Array]",se="[object Int16Array]",Yt="[object Int32Array]",Nt="[object Uint8Array]",bt="[object Uint8ClampedArray]",Jt="[object Uint16Array]",Se="[object Uint32Array]",De=/\b__p \+= '';/g,fe=/\b(__p \+=) '' \+/g,be=/(__e\(.*?\)|\b__t\)) \+\n'';/g,P=/&(?:amp|lt|gt|quot|#39);/g,_t=/[&<>"']/g,gt=RegExp(P.source),Lt=RegExp(_t.source),Bt=/<%-([\s\S]+?)%>/g,ye=/<%([\s\S]+?)%>/g,we=/<%=([\s\S]+?)%>/g,je=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,bn=/^\w*$/,Pe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Qe=/[\\^$.*+?()[\]{}|]/g,kn=RegExp(Qe.source),Br=/^\s+/,Yo=/\s/,Gr=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,_a=/\{\n\/\* \[wrapped with (.+)\] \*/,Hr=/,? & /,ga=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,va=/[()=,{}\[\]\/\s]/,Zo=/\\(\\)?/g,Ko=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,xa=/\w*$/,R=/^[-+]0x[0-9a-f]+$/i,W=/^0b[01]+$/i,Y=/^\[object .+?Constructor\]$/,K=/^0o[0-7]+$/i,q=/^(?:0|[1-9]\d*)$/,Et=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Dt=/($^)/,Vt=/['\n\r\u2028\u2029\\]/g,Wt="\\ud800-\\udfff",ae="\\u0300-\\u036f",jt="\\ufe20-\\ufe2f",ne="\\u20d0-\\u20ff",Ge=ae+jt+ne,dn="\\u2700-\\u27bf",Xe="a-z\\xdf-\\xf6\\xf8-\\xff",ri="\\xac\\xb1\\xd7\\xf7",Fe="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",le="\\u2000-\\u206f",zs=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Oe="A-Z\\xc0-\\xd6\\xd8-\\xde",vi="\\ufe0e\\ufe0f",Bs=ri+Fe+le+zs,Ai="['’]",Gs="["+Wt+"]",tn="["+Bs+"]",Xn="["+Ge+"]",Vr="\\d+",wn="["+dn+"]",Wr="["+Xe+"]",Ma="[^"+Wt+Bs+Vr+dn+Xe+Oe+"]",kr="\\ud83c[\\udffb-\\udfff]",Fp="(?:"+Xn+"|"+kr+")",eu="[^"+Wt+"]",$o="(?:\\ud83c[\\udde6-\\uddff]){2}",Jo="[\\ud800-\\udbff][\\udc00-\\udfff]",Xr="["+Oe+"]",nu="\\u200d",iu="(?:"+Wr+"|"+Ma+")",Op="(?:"+Xr+"|"+Ma+")",ru="(?:"+Ai+"(?:d|ll|m|re|s|t|ve))?",su="(?:"+Ai+"(?:D|LL|M|RE|S|T|VE))?",au=Fp+"?",ou="["+vi+"]?",zp="(?:"+nu+"(?:"+[eu,$o,Jo].join("|")+")"+ou+au+")*",Bp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Gp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",lu=ou+au+zp,Hp="(?:"+[wn,$o,Jo].join("|")+")"+lu,Vp="(?:"+[eu+Xn+"?",Xn,$o,Jo,Gs].join("|")+")",Wp=RegExp(Ai,"g"),kp=RegExp(Xn,"g"),jo=RegExp(kr+"(?="+kr+")|"+Vp+lu,"g"),Xp=RegExp([Xr+"?"+Wr+"+"+ru+"(?="+[tn,Xr,"$"].join("|")+")",Op+"+"+su+"(?="+[tn,Xr+iu,"$"].join("|")+")",Xr+"?"+iu+"+"+ru,Xr+"+"+su,Gp,Bp,Vr,Hp].join("|"),"g"),qp=RegExp("["+nu+Wt+Ge+vi+"]"),Yp=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Zp=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Kp=-1,ze={};ze[ee]=ze[ht]=ze[Ee]=ze[se]=ze[Yt]=ze[Nt]=ze[bt]=ze[Jt]=ze[Se]=!0,ze[ut]=ze[yt]=ze[Tt]=ze[Ot]=ze[zt]=ze[wt]=ze[Kt]=ze[k]=ze[Pt]=ze[qt]=ze[Me]=ze[y]=ze[X]=ze[dt]=ze[Rt]=!1;var Ue={};Ue[ut]=Ue[yt]=Ue[Tt]=Ue[zt]=Ue[Ot]=Ue[wt]=Ue[ee]=Ue[ht]=Ue[Ee]=Ue[se]=Ue[Yt]=Ue[Pt]=Ue[qt]=Ue[Me]=Ue[y]=Ue[X]=Ue[dt]=Ue[lt]=Ue[Nt]=Ue[bt]=Ue[Jt]=Ue[Se]=!0,Ue[Kt]=Ue[k]=Ue[Rt]=!1;var $p={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Jp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},jp={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Qp={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},tm=parseFloat,em=parseInt,cu=typeof la=="object"&&la&&la.Object===Object&&la,nm=typeof self=="object"&&self&&self.Object===Object&&self,ln=cu||nm||Function("return this")(),Qo=t&&!t.nodeType&&t,dr=Qo&&!0&&s&&!s.nodeType&&s,uu=dr&&dr.exports===Qo,tl=uu&&cu.process,qn=function(){try{var z=dr&&dr.require&&dr.require("util").types;return z||tl&&tl.binding&&tl.binding("util")}catch{}}(),hu=qn&&qn.isArrayBuffer,fu=qn&&qn.isDate,du=qn&&qn.isMap,pu=qn&&qn.isRegExp,mu=qn&&qn.isSet,_u=qn&&qn.isTypedArray;function Nn(z,Q,Z){switch(Z.length){case 0:return z.call(Q);case 1:return z.call(Q,Z[0]);case 2:return z.call(Q,Z[0],Z[1]);case 3:return z.call(Q,Z[0],Z[1],Z[2])}return z.apply(Q,Z)}function im(z,Q,Z,At){for(var Qt=-1,Te=z==null?0:z.length;++Qt<Te;){var en=z[Qt];Q(At,en,Z(en),z)}return At}function Yn(z,Q){for(var Z=-1,At=z==null?0:z.length;++Z<At&&Q(z[Z],Z,z)!==!1;);return z}function rm(z,Q){for(var Z=z==null?0:z.length;Z--&&Q(z[Z],Z,z)!==!1;);return z}function gu(z,Q){for(var Z=-1,At=z==null?0:z.length;++Z<At;)if(!Q(z[Z],Z,z))return!1;return!0}function Xi(z,Q){for(var Z=-1,At=z==null?0:z.length,Qt=0,Te=[];++Z<At;){var en=z[Z];Q(en,Z,z)&&(Te[Qt++]=en)}return Te}function Sa(z,Q){var Z=z==null?0:z.length;return!!Z&&qr(z,Q,0)>-1}function el(z,Q,Z){for(var At=-1,Qt=z==null?0:z.length;++At<Qt;)if(Z(Q,z[At]))return!0;return!1}function He(z,Q){for(var Z=-1,At=z==null?0:z.length,Qt=Array(At);++Z<At;)Qt[Z]=Q(z[Z],Z,z);return Qt}function qi(z,Q){for(var Z=-1,At=Q.length,Qt=z.length;++Z<At;)z[Qt+Z]=Q[Z];return z}function nl(z,Q,Z,At){var Qt=-1,Te=z==null?0:z.length;for(At&&Te&&(Z=z[++Qt]);++Qt<Te;)Z=Q(Z,z[Qt],Qt,z);return Z}function sm(z,Q,Z,At){var Qt=z==null?0:z.length;for(At&&Qt&&(Z=z[--Qt]);Qt--;)Z=Q(Z,z[Qt],Qt,z);return Z}function il(z,Q){for(var Z=-1,At=z==null?0:z.length;++Z<At;)if(Q(z[Z],Z,z))return!0;return!1}var am=rl("length");function om(z){return z.split("")}function lm(z){return z.match(ga)||[]}function vu(z,Q,Z){var At;return Z(z,function(Qt,Te,en){if(Q(Qt,Te,en))return At=Te,!1}),At}function Ea(z,Q,Z,At){for(var Qt=z.length,Te=Z+(At?1:-1);At?Te--:++Te<Qt;)if(Q(z[Te],Te,z))return Te;return-1}function qr(z,Q,Z){return Q===Q?Mm(z,Q,Z):Ea(z,xu,Z)}function cm(z,Q,Z,At){for(var Qt=Z-1,Te=z.length;++Qt<Te;)if(At(z[Qt],Q))return Qt;return-1}function xu(z){return z!==z}function Mu(z,Q){var Z=z==null?0:z.length;return Z?al(z,Q)/Z:ft}function rl(z){return function(Q){return Q==null?e:Q[z]}}function sl(z){return function(Q){return z==null?e:z[Q]}}function Su(z,Q,Z,At,Qt){return Qt(z,function(Te,en,Ie){Z=At?(At=!1,Te):Q(Z,Te,en,Ie)}),Z}function um(z,Q){var Z=z.length;for(z.sort(Q);Z--;)z[Z]=z[Z].value;return z}function al(z,Q){for(var Z,At=-1,Qt=z.length;++At<Qt;){var Te=Q(z[At]);Te!==e&&(Z=Z===e?Te:Z+Te)}return Z}function ol(z,Q){for(var Z=-1,At=Array(z);++Z<z;)At[Z]=Q(Z);return At}function hm(z,Q){return He(Q,function(Z){return[Z,z[Z]]})}function Eu(z){return z&&z.slice(0,bu(z)+1).replace(Br,"")}function Fn(z){return function(Q){return z(Q)}}function ll(z,Q){return He(Q,function(Z){return z[Z]})}function Hs(z,Q){return z.has(Q)}function yu(z,Q){for(var Z=-1,At=z.length;++Z<At&&qr(Q,z[Z],0)>-1;);return Z}function Tu(z,Q){for(var Z=z.length;Z--&&qr(Q,z[Z],0)>-1;);return Z}function fm(z,Q){for(var Z=z.length,At=0;Z--;)z[Z]===Q&&++At;return At}var dm=sl($p),pm=sl(Jp);function mm(z){return"\\"+Qp[z]}function _m(z,Q){return z==null?e:z[Q]}function Yr(z){return qp.test(z)}function gm(z){return Yp.test(z)}function vm(z){for(var Q,Z=[];!(Q=z.next()).done;)Z.push(Q.value);return Z}function cl(z){var Q=-1,Z=Array(z.size);return z.forEach(function(At,Qt){Z[++Q]=[Qt,At]}),Z}function Au(z,Q){return function(Z){return z(Q(Z))}}function Yi(z,Q){for(var Z=-1,At=z.length,Qt=0,Te=[];++Z<At;){var en=z[Z];(en===Q||en===p)&&(z[Z]=p,Te[Qt++]=Z)}return Te}function ya(z){var Q=-1,Z=Array(z.size);return z.forEach(function(At){Z[++Q]=At}),Z}function xm(z){var Q=-1,Z=Array(z.size);return z.forEach(function(At){Z[++Q]=[At,At]}),Z}function Mm(z,Q,Z){for(var At=Z-1,Qt=z.length;++At<Qt;)if(z[At]===Q)return At;return-1}function Sm(z,Q,Z){for(var At=Z+1;At--;)if(z[At]===Q)return At;return At}function Zr(z){return Yr(z)?ym(z):am(z)}function si(z){return Yr(z)?Tm(z):om(z)}function bu(z){for(var Q=z.length;Q--&&Yo.test(z.charAt(Q)););return Q}var Em=sl(jp);function ym(z){for(var Q=jo.lastIndex=0;jo.test(z);)++Q;return Q}function Tm(z){return z.match(jo)||[]}function Am(z){return z.match(Xp)||[]}var bm=function z(Q){Q=Q==null?ln:Kr.defaults(ln.Object(),Q,Kr.pick(ln,Zp));var Z=Q.Array,At=Q.Date,Qt=Q.Error,Te=Q.Function,en=Q.Math,Ie=Q.Object,ul=Q.RegExp,wm=Q.String,Zn=Q.TypeError,Ta=Z.prototype,Rm=Te.prototype,$r=Ie.prototype,Aa=Q["__core-js_shared__"],ba=Rm.toString,Re=$r.hasOwnProperty,Cm=0,wu=function(){var n=/[^.]+$/.exec(Aa&&Aa.keys&&Aa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),wa=$r.toString,Pm=ba.call(Ie),Lm=ln._,Dm=ul("^"+ba.call(Re).replace(Qe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ra=uu?Q.Buffer:e,Zi=Q.Symbol,Ca=Q.Uint8Array,Ru=Ra?Ra.allocUnsafe:e,Pa=Au(Ie.getPrototypeOf,Ie),Cu=Ie.create,Pu=$r.propertyIsEnumerable,La=Ta.splice,Lu=Zi?Zi.isConcatSpreadable:e,Vs=Zi?Zi.iterator:e,pr=Zi?Zi.toStringTag:e,Da=function(){try{var n=xr(Ie,"defineProperty");return n({},"",{}),n}catch{}}(),Im=Q.clearTimeout!==ln.clearTimeout&&Q.clearTimeout,Um=At&&At.now!==ln.Date.now&&At.now,Nm=Q.setTimeout!==ln.setTimeout&&Q.setTimeout,Ia=en.ceil,Ua=en.floor,hl=Ie.getOwnPropertySymbols,Fm=Ra?Ra.isBuffer:e,Du=Q.isFinite,Om=Ta.join,zm=Au(Ie.keys,Ie),nn=en.max,pn=en.min,Bm=At.now,Gm=Q.parseInt,Iu=en.random,Hm=Ta.reverse,fl=xr(Q,"DataView"),Ws=xr(Q,"Map"),dl=xr(Q,"Promise"),Jr=xr(Q,"Set"),ks=xr(Q,"WeakMap"),Xs=xr(Ie,"create"),Na=ks&&new ks,jr={},Vm=Mr(fl),Wm=Mr(Ws),km=Mr(dl),Xm=Mr(Jr),qm=Mr(ks),Fa=Zi?Zi.prototype:e,qs=Fa?Fa.valueOf:e,Uu=Fa?Fa.toString:e;function E(n){if(We(n)&&!ie(n)&&!(n instanceof _e)){if(n instanceof Kn)return n;if(Re.call(n,"__wrapped__"))return Nh(n)}return new Kn(n)}var Qr=function(){function n(){}return function(r){if(!Ve(r))return{};if(Cu)return Cu(r);n.prototype=r;var l=new n;return n.prototype=e,l}}();function Oa(){}function Kn(n,r){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=e}E.templateSettings={escape:Bt,evaluate:ye,interpolate:we,variable:"",imports:{_:E}},E.prototype=Oa.prototype,E.prototype.constructor=E,Kn.prototype=Qr(Oa.prototype),Kn.prototype.constructor=Kn;function _e(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ot,this.__views__=[]}function Ym(){var n=new _e(this.__wrapped__);return n.__actions__=Rn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Rn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Rn(this.__views__),n}function Zm(){if(this.__filtered__){var n=new _e(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Km(){var n=this.__wrapped__.value(),r=this.__dir__,l=ie(n),f=r<0,M=l?n.length:0,w=og(0,M,this.__views__),D=w.start,F=w.end,G=F-D,nt=f?F:D-1,it=this.__iteratees__,at=it.length,Mt=0,It=pn(G,this.__takeCount__);if(!l||!f&&M==G&&It==G)return rh(n,this.__actions__);var kt=[];t:for(;G--&&Mt<It;){nt+=r;for(var ce=-1,Xt=n[nt];++ce<at;){var pe=it[ce],ve=pe.iteratee,Bn=pe.type,Mn=ve(Xt);if(Bn==J)Xt=Mn;else if(!Mn){if(Bn==B)continue t;break t}}kt[Mt++]=Xt}return kt}_e.prototype=Qr(Oa.prototype),_e.prototype.constructor=_e;function mr(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function $m(){this.__data__=Xs?Xs(null):{},this.size=0}function Jm(n){var r=this.has(n)&&delete this.__data__[n];return this.size-=r?1:0,r}function jm(n){var r=this.__data__;if(Xs){var l=r[n];return l===h?e:l}return Re.call(r,n)?r[n]:e}function Qm(n){var r=this.__data__;return Xs?r[n]!==e:Re.call(r,n)}function t_(n,r){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Xs&&r===e?h:r,this}mr.prototype.clear=$m,mr.prototype.delete=Jm,mr.prototype.get=jm,mr.prototype.has=Qm,mr.prototype.set=t_;function bi(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function e_(){this.__data__=[],this.size=0}function n_(n){var r=this.__data__,l=za(r,n);if(l<0)return!1;var f=r.length-1;return l==f?r.pop():La.call(r,l,1),--this.size,!0}function i_(n){var r=this.__data__,l=za(r,n);return l<0?e:r[l][1]}function r_(n){return za(this.__data__,n)>-1}function s_(n,r){var l=this.__data__,f=za(l,n);return f<0?(++this.size,l.push([n,r])):l[f][1]=r,this}bi.prototype.clear=e_,bi.prototype.delete=n_,bi.prototype.get=i_,bi.prototype.has=r_,bi.prototype.set=s_;function wi(n){var r=-1,l=n==null?0:n.length;for(this.clear();++r<l;){var f=n[r];this.set(f[0],f[1])}}function a_(){this.size=0,this.__data__={hash:new mr,map:new(Ws||bi),string:new mr}}function o_(n){var r=$a(this,n).delete(n);return this.size-=r?1:0,r}function l_(n){return $a(this,n).get(n)}function c_(n){return $a(this,n).has(n)}function u_(n,r){var l=$a(this,n),f=l.size;return l.set(n,r),this.size+=l.size==f?0:1,this}wi.prototype.clear=a_,wi.prototype.delete=o_,wi.prototype.get=l_,wi.prototype.has=c_,wi.prototype.set=u_;function _r(n){var r=-1,l=n==null?0:n.length;for(this.__data__=new wi;++r<l;)this.add(n[r])}function h_(n){return this.__data__.set(n,h),this}function f_(n){return this.__data__.has(n)}_r.prototype.add=_r.prototype.push=h_,_r.prototype.has=f_;function ai(n){var r=this.__data__=new bi(n);this.size=r.size}function d_(){this.__data__=new bi,this.size=0}function p_(n){var r=this.__data__,l=r.delete(n);return this.size=r.size,l}function m_(n){return this.__data__.get(n)}function __(n){return this.__data__.has(n)}function g_(n,r){var l=this.__data__;if(l instanceof bi){var f=l.__data__;if(!Ws||f.length<a-1)return f.push([n,r]),this.size=++l.size,this;l=this.__data__=new wi(f)}return l.set(n,r),this.size=l.size,this}ai.prototype.clear=d_,ai.prototype.delete=p_,ai.prototype.get=m_,ai.prototype.has=__,ai.prototype.set=g_;function Nu(n,r){var l=ie(n),f=!l&&Sr(n),M=!l&&!f&&Qi(n),w=!l&&!f&&!M&&is(n),D=l||f||M||w,F=D?ol(n.length,wm):[],G=F.length;for(var nt in n)(r||Re.call(n,nt))&&!(D&&(nt=="length"||M&&(nt=="offset"||nt=="parent")||w&&(nt=="buffer"||nt=="byteLength"||nt=="byteOffset")||Li(nt,G)))&&F.push(nt);return F}function Fu(n){var r=n.length;return r?n[Tl(0,r-1)]:e}function v_(n,r){return Ja(Rn(n),gr(r,0,n.length))}function x_(n){return Ja(Rn(n))}function pl(n,r,l){(l!==e&&!oi(n[r],l)||l===e&&!(r in n))&&Ri(n,r,l)}function Ys(n,r,l){var f=n[r];(!(Re.call(n,r)&&oi(f,l))||l===e&&!(r in n))&&Ri(n,r,l)}function za(n,r){for(var l=n.length;l--;)if(oi(n[l][0],r))return l;return-1}function M_(n,r,l,f){return Ki(n,function(M,w,D){r(f,M,l(M),D)}),f}function Ou(n,r){return n&&Mi(r,an(r),n)}function S_(n,r){return n&&Mi(r,Pn(r),n)}function Ri(n,r,l){r=="__proto__"&&Da?Da(n,r,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[r]=l}function ml(n,r){for(var l=-1,f=r.length,M=Z(f),w=n==null;++l<f;)M[l]=w?e:Kl(n,r[l]);return M}function gr(n,r,l){return n===n&&(l!==e&&(n=n<=l?n:l),r!==e&&(n=n>=r?n:r)),n}function $n(n,r,l,f,M,w){var D,F=r&g,G=r&v,nt=r&x;if(l&&(D=M?l(n,f,M,w):l(n)),D!==e)return D;if(!Ve(n))return n;var it=ie(n);if(it){if(D=cg(n),!F)return Rn(n,D)}else{var at=mn(n),Mt=at==k||at==Ke;if(Qi(n))return oh(n,F);if(at==Me||at==ut||Mt&&!M){if(D=G||Mt?{}:bh(n),!F)return G?j_(n,S_(D,n)):J_(n,Ou(D,n))}else{if(!Ue[at])return M?n:{};D=ug(n,at,F)}}w||(w=new ai);var It=w.get(n);if(It)return It;w.set(n,D),ef(n)?n.forEach(function(Xt){D.add($n(Xt,r,l,Xt,n,w))}):Qh(n)&&n.forEach(function(Xt,pe){D.set(pe,$n(Xt,r,l,pe,n,w))});var kt=nt?G?Nl:Ul:G?Pn:an,ce=it?e:kt(n);return Yn(ce||n,function(Xt,pe){ce&&(pe=Xt,Xt=n[pe]),Ys(D,pe,$n(Xt,r,l,pe,n,w))}),D}function E_(n){var r=an(n);return function(l){return zu(l,n,r)}}function zu(n,r,l){var f=l.length;if(n==null)return!f;for(n=Ie(n);f--;){var M=l[f],w=r[M],D=n[M];if(D===e&&!(M in n)||!w(D))return!1}return!0}function Bu(n,r,l){if(typeof n!="function")throw new Zn(u);return ta(function(){n.apply(e,l)},r)}function Zs(n,r,l,f){var M=-1,w=Sa,D=!0,F=n.length,G=[],nt=r.length;if(!F)return G;l&&(r=He(r,Fn(l))),f?(w=el,D=!1):r.length>=a&&(w=Hs,D=!1,r=new _r(r));t:for(;++M<F;){var it=n[M],at=l==null?it:l(it);if(it=f||it!==0?it:0,D&&at===at){for(var Mt=nt;Mt--;)if(r[Mt]===at)continue t;G.push(it)}else w(r,at,f)||G.push(it)}return G}var Ki=fh(xi),Gu=fh(gl,!0);function y_(n,r){var l=!0;return Ki(n,function(f,M,w){return l=!!r(f,M,w),l}),l}function Ba(n,r,l){for(var f=-1,M=n.length;++f<M;){var w=n[f],D=r(w);if(D!=null&&(F===e?D===D&&!zn(D):l(D,F)))var F=D,G=w}return G}function T_(n,r,l,f){var M=n.length;for(l=oe(l),l<0&&(l=-l>M?0:M+l),f=f===e||f>M?M:oe(f),f<0&&(f+=M),f=l>f?0:rf(f);l<f;)n[l++]=r;return n}function Hu(n,r){var l=[];return Ki(n,function(f,M,w){r(f,M,w)&&l.push(f)}),l}function cn(n,r,l,f,M){var w=-1,D=n.length;for(l||(l=fg),M||(M=[]);++w<D;){var F=n[w];r>0&&l(F)?r>1?cn(F,r-1,l,f,M):qi(M,F):f||(M[M.length]=F)}return M}var _l=dh(),Vu=dh(!0);function xi(n,r){return n&&_l(n,r,an)}function gl(n,r){return n&&Vu(n,r,an)}function Ga(n,r){return Xi(r,function(l){return Di(n[l])})}function vr(n,r){r=Ji(r,n);for(var l=0,f=r.length;n!=null&&l<f;)n=n[Si(r[l++])];return l&&l==f?n:e}function Wu(n,r,l){var f=r(n);return ie(n)?f:qi(f,l(n))}function vn(n){return n==null?n===e?pt:Ut:pr&&pr in Ie(n)?ag(n):xg(n)}function vl(n,r){return n>r}function A_(n,r){return n!=null&&Re.call(n,r)}function b_(n,r){return n!=null&&r in Ie(n)}function w_(n,r,l){return n>=pn(r,l)&&n<nn(r,l)}function xl(n,r,l){for(var f=l?el:Sa,M=n[0].length,w=n.length,D=w,F=Z(w),G=1/0,nt=[];D--;){var it=n[D];D&&r&&(it=He(it,Fn(r))),G=pn(it.length,G),F[D]=!l&&(r||M>=120&&it.length>=120)?new _r(D&&it):e}it=n[0];var at=-1,Mt=F[0];t:for(;++at<M&&nt.length<G;){var It=it[at],kt=r?r(It):It;if(It=l||It!==0?It:0,!(Mt?Hs(Mt,kt):f(nt,kt,l))){for(D=w;--D;){var ce=F[D];if(!(ce?Hs(ce,kt):f(n[D],kt,l)))continue t}Mt&&Mt.push(kt),nt.push(It)}}return nt}function R_(n,r,l,f){return xi(n,function(M,w,D){r(f,l(M),w,D)}),f}function Ks(n,r,l){r=Ji(r,n),n=Ph(n,r);var f=n==null?n:n[Si(jn(r))];return f==null?e:Nn(f,n,l)}function ku(n){return We(n)&&vn(n)==ut}function C_(n){return We(n)&&vn(n)==Tt}function P_(n){return We(n)&&vn(n)==wt}function $s(n,r,l,f,M){return n===r?!0:n==null||r==null||!We(n)&&!We(r)?n!==n&&r!==r:L_(n,r,l,f,$s,M)}function L_(n,r,l,f,M,w){var D=ie(n),F=ie(r),G=D?yt:mn(n),nt=F?yt:mn(r);G=G==ut?Me:G,nt=nt==ut?Me:nt;var it=G==Me,at=nt==Me,Mt=G==nt;if(Mt&&Qi(n)){if(!Qi(r))return!1;D=!0,it=!1}if(Mt&&!it)return w||(w=new ai),D||is(n)?yh(n,r,l,f,M,w):rg(n,r,G,l,f,M,w);if(!(l&S)){var It=it&&Re.call(n,"__wrapped__"),kt=at&&Re.call(r,"__wrapped__");if(It||kt){var ce=It?n.value():n,Xt=kt?r.value():r;return w||(w=new ai),M(ce,Xt,l,f,w)}}return Mt?(w||(w=new ai),sg(n,r,l,f,M,w)):!1}function D_(n){return We(n)&&mn(n)==Pt}function Ml(n,r,l,f){var M=l.length,w=M,D=!f;if(n==null)return!w;for(n=Ie(n);M--;){var F=l[M];if(D&&F[2]?F[1]!==n[F[0]]:!(F[0]in n))return!1}for(;++M<w;){F=l[M];var G=F[0],nt=n[G],it=F[1];if(D&&F[2]){if(nt===e&&!(G in n))return!1}else{var at=new ai;if(f)var Mt=f(nt,it,G,n,r,at);if(!(Mt===e?$s(it,nt,S|b,f,at):Mt))return!1}}return!0}function Xu(n){if(!Ve(n)||pg(n))return!1;var r=Di(n)?Dm:Y;return r.test(Mr(n))}function I_(n){return We(n)&&vn(n)==y}function U_(n){return We(n)&&mn(n)==X}function N_(n){return We(n)&&io(n.length)&&!!ze[vn(n)]}function qu(n){return typeof n=="function"?n:n==null?Ln:typeof n=="object"?ie(n)?Ku(n[0],n[1]):Zu(n):mf(n)}function Sl(n){if(!Qs(n))return zm(n);var r=[];for(var l in Ie(n))Re.call(n,l)&&l!="constructor"&&r.push(l);return r}function F_(n){if(!Ve(n))return vg(n);var r=Qs(n),l=[];for(var f in n)f=="constructor"&&(r||!Re.call(n,f))||l.push(f);return l}function El(n,r){return n<r}function Yu(n,r){var l=-1,f=Cn(n)?Z(n.length):[];return Ki(n,function(M,w,D){f[++l]=r(M,w,D)}),f}function Zu(n){var r=Ol(n);return r.length==1&&r[0][2]?Rh(r[0][0],r[0][1]):function(l){return l===n||Ml(l,n,r)}}function Ku(n,r){return Bl(n)&&wh(r)?Rh(Si(n),r):function(l){var f=Kl(l,n);return f===e&&f===r?$l(l,n):$s(r,f,S|b)}}function Ha(n,r,l,f,M){n!==r&&_l(r,function(w,D){if(M||(M=new ai),Ve(w))O_(n,r,D,l,Ha,f,M);else{var F=f?f(Hl(n,D),w,D+"",n,r,M):e;F===e&&(F=w),pl(n,D,F)}},Pn)}function O_(n,r,l,f,M,w,D){var F=Hl(n,l),G=Hl(r,l),nt=D.get(G);if(nt){pl(n,l,nt);return}var it=w?w(F,G,l+"",n,r,D):e,at=it===e;if(at){var Mt=ie(G),It=!Mt&&Qi(G),kt=!Mt&&!It&&is(G);it=G,Mt||It||kt?ie(F)?it=F:qe(F)?it=Rn(F):It?(at=!1,it=oh(G,!0)):kt?(at=!1,it=lh(G,!0)):it=[]:ea(G)||Sr(G)?(it=F,Sr(F)?it=sf(F):(!Ve(F)||Di(F))&&(it=bh(G))):at=!1}at&&(D.set(G,it),M(it,G,f,w,D),D.delete(G)),pl(n,l,it)}function $u(n,r){var l=n.length;if(l)return r+=r<0?l:0,Li(r,l)?n[r]:e}function Ju(n,r,l){r.length?r=He(r,function(w){return ie(w)?function(D){return vr(D,w.length===1?w[0]:w)}:w}):r=[Ln];var f=-1;r=He(r,Fn(Ht()));var M=Yu(n,function(w,D,F){var G=He(r,function(nt){return nt(w)});return{criteria:G,index:++f,value:w}});return um(M,function(w,D){return $_(w,D,l)})}function z_(n,r){return ju(n,r,function(l,f){return $l(n,f)})}function ju(n,r,l){for(var f=-1,M=r.length,w={};++f<M;){var D=r[f],F=vr(n,D);l(F,D)&&Js(w,Ji(D,n),F)}return w}function B_(n){return function(r){return vr(r,n)}}function yl(n,r,l,f){var M=f?cm:qr,w=-1,D=r.length,F=n;for(n===r&&(r=Rn(r)),l&&(F=He(n,Fn(l)));++w<D;)for(var G=0,nt=r[w],it=l?l(nt):nt;(G=M(F,it,G,f))>-1;)F!==n&&La.call(F,G,1),La.call(n,G,1);return n}function Qu(n,r){for(var l=n?r.length:0,f=l-1;l--;){var M=r[l];if(l==f||M!==w){var w=M;Li(M)?La.call(n,M,1):wl(n,M)}}return n}function Tl(n,r){return n+Ua(Iu()*(r-n+1))}function G_(n,r,l,f){for(var M=-1,w=nn(Ia((r-n)/(l||1)),0),D=Z(w);w--;)D[f?w:++M]=n,n+=l;return D}function Al(n,r){var l="";if(!n||r<1||r>et)return l;do r%2&&(l+=n),r=Ua(r/2),r&&(n+=n);while(r);return l}function he(n,r){return Vl(Ch(n,r,Ln),n+"")}function H_(n){return Fu(rs(n))}function V_(n,r){var l=rs(n);return Ja(l,gr(r,0,l.length))}function Js(n,r,l,f){if(!Ve(n))return n;r=Ji(r,n);for(var M=-1,w=r.length,D=w-1,F=n;F!=null&&++M<w;){var G=Si(r[M]),nt=l;if(G==="__proto__"||G==="constructor"||G==="prototype")return n;if(M!=D){var it=F[G];nt=f?f(it,G,F):e,nt===e&&(nt=Ve(it)?it:Li(r[M+1])?[]:{})}Ys(F,G,nt),F=F[G]}return n}var th=Na?function(n,r){return Na.set(n,r),n}:Ln,W_=Da?function(n,r){return Da(n,"toString",{configurable:!0,enumerable:!1,value:jl(r),writable:!0})}:Ln;function k_(n){return Ja(rs(n))}function Jn(n,r,l){var f=-1,M=n.length;r<0&&(r=-r>M?0:M+r),l=l>M?M:l,l<0&&(l+=M),M=r>l?0:l-r>>>0,r>>>=0;for(var w=Z(M);++f<M;)w[f]=n[f+r];return w}function X_(n,r){var l;return Ki(n,function(f,M,w){return l=r(f,M,w),!l}),!!l}function Va(n,r,l){var f=0,M=n==null?f:n.length;if(typeof r=="number"&&r===r&&M<=Zt){for(;f<M;){var w=f+M>>>1,D=n[w];D!==null&&!zn(D)&&(l?D<=r:D<r)?f=w+1:M=w}return M}return bl(n,r,Ln,l)}function bl(n,r,l,f){var M=0,w=n==null?0:n.length;if(w===0)return 0;r=l(r);for(var D=r!==r,F=r===null,G=zn(r),nt=r===e;M<w;){var it=Ua((M+w)/2),at=l(n[it]),Mt=at!==e,It=at===null,kt=at===at,ce=zn(at);if(D)var Xt=f||kt;else nt?Xt=kt&&(f||Mt):F?Xt=kt&&Mt&&(f||!It):G?Xt=kt&&Mt&&!It&&(f||!ce):It||ce?Xt=!1:Xt=f?at<=r:at<r;Xt?M=it+1:w=it}return pn(w,Ct)}function eh(n,r){for(var l=-1,f=n.length,M=0,w=[];++l<f;){var D=n[l],F=r?r(D):D;if(!l||!oi(F,G)){var G=F;w[M++]=D===0?0:D}}return w}function nh(n){return typeof n=="number"?n:zn(n)?ft:+n}function On(n){if(typeof n=="string")return n;if(ie(n))return He(n,On)+"";if(zn(n))return Uu?Uu.call(n):"";var r=n+"";return r=="0"&&1/n==-st?"-0":r}function $i(n,r,l){var f=-1,M=Sa,w=n.length,D=!0,F=[],G=F;if(l)D=!1,M=el;else if(w>=a){var nt=r?null:ng(n);if(nt)return ya(nt);D=!1,M=Hs,G=new _r}else G=r?[]:F;t:for(;++f<w;){var it=n[f],at=r?r(it):it;if(it=l||it!==0?it:0,D&&at===at){for(var Mt=G.length;Mt--;)if(G[Mt]===at)continue t;r&&G.push(at),F.push(it)}else M(G,at,l)||(G!==F&&G.push(at),F.push(it))}return F}function wl(n,r){return r=Ji(r,n),n=Ph(n,r),n==null||delete n[Si(jn(r))]}function ih(n,r,l,f){return Js(n,r,l(vr(n,r)),f)}function Wa(n,r,l,f){for(var M=n.length,w=f?M:-1;(f?w--:++w<M)&&r(n[w],w,n););return l?Jn(n,f?0:w,f?w+1:M):Jn(n,f?w+1:0,f?M:w)}function rh(n,r){var l=n;return l instanceof _e&&(l=l.value()),nl(r,function(f,M){return M.func.apply(M.thisArg,qi([f],M.args))},l)}function Rl(n,r,l){var f=n.length;if(f<2)return f?$i(n[0]):[];for(var M=-1,w=Z(f);++M<f;)for(var D=n[M],F=-1;++F<f;)F!=M&&(w[M]=Zs(w[M]||D,n[F],r,l));return $i(cn(w,1),r,l)}function sh(n,r,l){for(var f=-1,M=n.length,w=r.length,D={};++f<M;){var F=f<w?r[f]:e;l(D,n[f],F)}return D}function Cl(n){return qe(n)?n:[]}function Pl(n){return typeof n=="function"?n:Ln}function Ji(n,r){return ie(n)?n:Bl(n,r)?[n]:Uh(Ae(n))}var q_=he;function ji(n,r,l){var f=n.length;return l=l===e?f:l,!r&&l>=f?n:Jn(n,r,l)}var ah=Im||function(n){return ln.clearTimeout(n)};function oh(n,r){if(r)return n.slice();var l=n.length,f=Ru?Ru(l):new n.constructor(l);return n.copy(f),f}function Ll(n){var r=new n.constructor(n.byteLength);return new Ca(r).set(new Ca(n)),r}function Y_(n,r){var l=r?Ll(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Z_(n){var r=new n.constructor(n.source,xa.exec(n));return r.lastIndex=n.lastIndex,r}function K_(n){return qs?Ie(qs.call(n)):{}}function lh(n,r){var l=r?Ll(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function ch(n,r){if(n!==r){var l=n!==e,f=n===null,M=n===n,w=zn(n),D=r!==e,F=r===null,G=r===r,nt=zn(r);if(!F&&!nt&&!w&&n>r||w&&D&&G&&!F&&!nt||f&&D&&G||!l&&G||!M)return 1;if(!f&&!w&&!nt&&n<r||nt&&l&&M&&!f&&!w||F&&l&&M||!D&&M||!G)return-1}return 0}function $_(n,r,l){for(var f=-1,M=n.criteria,w=r.criteria,D=M.length,F=l.length;++f<D;){var G=ch(M[f],w[f]);if(G){if(f>=F)return G;var nt=l[f];return G*(nt=="desc"?-1:1)}}return n.index-r.index}function uh(n,r,l,f){for(var M=-1,w=n.length,D=l.length,F=-1,G=r.length,nt=nn(w-D,0),it=Z(G+nt),at=!f;++F<G;)it[F]=r[F];for(;++M<D;)(at||M<w)&&(it[l[M]]=n[M]);for(;nt--;)it[F++]=n[M++];return it}function hh(n,r,l,f){for(var M=-1,w=n.length,D=-1,F=l.length,G=-1,nt=r.length,it=nn(w-F,0),at=Z(it+nt),Mt=!f;++M<it;)at[M]=n[M];for(var It=M;++G<nt;)at[It+G]=r[G];for(;++D<F;)(Mt||M<w)&&(at[It+l[D]]=n[M++]);return at}function Rn(n,r){var l=-1,f=n.length;for(r||(r=Z(f));++l<f;)r[l]=n[l];return r}function Mi(n,r,l,f){var M=!l;l||(l={});for(var w=-1,D=r.length;++w<D;){var F=r[w],G=f?f(l[F],n[F],F,l,n):e;G===e&&(G=n[F]),M?Ri(l,F,G):Ys(l,F,G)}return l}function J_(n,r){return Mi(n,zl(n),r)}function j_(n,r){return Mi(n,Th(n),r)}function ka(n,r){return function(l,f){var M=ie(l)?im:M_,w=r?r():{};return M(l,n,Ht(f,2),w)}}function ts(n){return he(function(r,l){var f=-1,M=l.length,w=M>1?l[M-1]:e,D=M>2?l[2]:e;for(w=n.length>3&&typeof w=="function"?(M--,w):e,D&&xn(l[0],l[1],D)&&(w=M<3?e:w,M=1),r=Ie(r);++f<M;){var F=l[f];F&&n(r,F,f,w)}return r})}function fh(n,r){return function(l,f){if(l==null)return l;if(!Cn(l))return n(l,f);for(var M=l.length,w=r?M:-1,D=Ie(l);(r?w--:++w<M)&&f(D[w],w,D)!==!1;);return l}}function dh(n){return function(r,l,f){for(var M=-1,w=Ie(r),D=f(r),F=D.length;F--;){var G=D[n?F:++M];if(l(w[G],G,w)===!1)break}return r}}function Q_(n,r,l){var f=r&m,M=js(n);function w(){var D=this&&this!==ln&&this instanceof w?M:n;return D.apply(f?l:this,arguments)}return w}function ph(n){return function(r){r=Ae(r);var l=Yr(r)?si(r):e,f=l?l[0]:r.charAt(0),M=l?ji(l,1).join(""):r.slice(1);return f[n]()+M}}function es(n){return function(r){return nl(df(ff(r).replace(Wp,"")),n,"")}}function js(n){return function(){var r=arguments;switch(r.length){case 0:return new n;case 1:return new n(r[0]);case 2:return new n(r[0],r[1]);case 3:return new n(r[0],r[1],r[2]);case 4:return new n(r[0],r[1],r[2],r[3]);case 5:return new n(r[0],r[1],r[2],r[3],r[4]);case 6:return new n(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new n(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var l=Qr(n.prototype),f=n.apply(l,r);return Ve(f)?f:l}}function tg(n,r,l){var f=js(n);function M(){for(var w=arguments.length,D=Z(w),F=w,G=ns(M);F--;)D[F]=arguments[F];var nt=w<3&&D[0]!==G&&D[w-1]!==G?[]:Yi(D,G);if(w-=nt.length,w<l)return xh(n,r,Xa,M.placeholder,e,D,nt,e,e,l-w);var it=this&&this!==ln&&this instanceof M?f:n;return Nn(it,this,D)}return M}function mh(n){return function(r,l,f){var M=Ie(r);if(!Cn(r)){var w=Ht(l,3);r=an(r),l=function(F){return w(M[F],F,M)}}var D=n(r,l,f);return D>-1?M[w?r[D]:D]:e}}function _h(n){return Pi(function(r){var l=r.length,f=l,M=Kn.prototype.thru;for(n&&r.reverse();f--;){var w=r[f];if(typeof w!="function")throw new Zn(u);if(M&&!D&&Ka(w)=="wrapper")var D=new Kn([],!0)}for(f=D?f:l;++f<l;){w=r[f];var F=Ka(w),G=F=="wrapper"?Fl(w):e;G&&Gl(G[0])&&G[1]==(U|T|H|tt)&&!G[4].length&&G[9]==1?D=D[Ka(G[0])].apply(D,G[3]):D=w.length==1&&Gl(w)?D[F]():D.thru(w)}return function(){var nt=arguments,it=nt[0];if(D&&nt.length==1&&ie(it))return D.plant(it).value();for(var at=0,Mt=l?r[at].apply(this,nt):it;++at<l;)Mt=r[at].call(this,Mt);return Mt}})}function Xa(n,r,l,f,M,w,D,F,G,nt){var it=r&U,at=r&m,Mt=r&_,It=r&(T|N),kt=r&vt,ce=Mt?e:js(n);function Xt(){for(var pe=arguments.length,ve=Z(pe),Bn=pe;Bn--;)ve[Bn]=arguments[Bn];if(It)var Mn=ns(Xt),Gn=fm(ve,Mn);if(f&&(ve=uh(ve,f,M,It)),w&&(ve=hh(ve,w,D,It)),pe-=Gn,It&&pe<nt){var Ye=Yi(ve,Mn);return xh(n,r,Xa,Xt.placeholder,l,ve,Ye,F,G,nt-pe)}var li=at?l:this,Ui=Mt?li[n]:n;return pe=ve.length,F?ve=Mg(ve,F):kt&&pe>1&&ve.reverse(),it&&G<pe&&(ve.length=G),this&&this!==ln&&this instanceof Xt&&(Ui=ce||js(Ui)),Ui.apply(li,ve)}return Xt}function gh(n,r){return function(l,f){return R_(l,n,r(f),{})}}function qa(n,r){return function(l,f){var M;if(l===e&&f===e)return r;if(l!==e&&(M=l),f!==e){if(M===e)return f;typeof l=="string"||typeof f=="string"?(l=On(l),f=On(f)):(l=nh(l),f=nh(f)),M=n(l,f)}return M}}function Dl(n){return Pi(function(r){return r=He(r,Fn(Ht())),he(function(l){var f=this;return n(r,function(M){return Nn(M,f,l)})})})}function Ya(n,r){r=r===e?" ":On(r);var l=r.length;if(l<2)return l?Al(r,n):r;var f=Al(r,Ia(n/Zr(r)));return Yr(r)?ji(si(f),0,n).join(""):f.slice(0,n)}function eg(n,r,l,f){var M=r&m,w=js(n);function D(){for(var F=-1,G=arguments.length,nt=-1,it=f.length,at=Z(it+G),Mt=this&&this!==ln&&this instanceof D?w:n;++nt<it;)at[nt]=f[nt];for(;G--;)at[nt++]=arguments[++F];return Nn(Mt,M?l:this,at)}return D}function vh(n){return function(r,l,f){return f&&typeof f!="number"&&xn(r,l,f)&&(l=f=e),r=Ii(r),l===e?(l=r,r=0):l=Ii(l),f=f===e?r<l?1:-1:Ii(f),G_(r,l,f,n)}}function Za(n){return function(r,l){return typeof r=="string"&&typeof l=="string"||(r=Qn(r),l=Qn(l)),n(r,l)}}function xh(n,r,l,f,M,w,D,F,G,nt){var it=r&T,at=it?D:e,Mt=it?e:D,It=it?w:e,kt=it?e:w;r|=it?H:O,r&=~(it?O:H),r&L||(r&=~(m|_));var ce=[n,r,M,It,at,kt,Mt,F,G,nt],Xt=l.apply(e,ce);return Gl(n)&&Lh(Xt,ce),Xt.placeholder=f,Dh(Xt,n,r)}function Il(n){var r=en[n];return function(l,f){if(l=Qn(l),f=f==null?0:pn(oe(f),292),f&&Du(l)){var M=(Ae(l)+"e").split("e"),w=r(M[0]+"e"+(+M[1]+f));return M=(Ae(w)+"e").split("e"),+(M[0]+"e"+(+M[1]-f))}return r(l)}}var ng=Jr&&1/ya(new Jr([,-0]))[1]==st?function(n){return new Jr(n)}:ec;function Mh(n){return function(r){var l=mn(r);return l==Pt?cl(r):l==X?xm(r):hm(r,n(r))}}function Ci(n,r,l,f,M,w,D,F){var G=r&_;if(!G&&typeof n!="function")throw new Zn(u);var nt=f?f.length:0;if(nt||(r&=~(H|O),f=M=e),D=D===e?D:nn(oe(D),0),F=F===e?F:oe(F),nt-=M?M.length:0,r&O){var it=f,at=M;f=M=e}var Mt=G?e:Fl(n),It=[n,r,l,f,M,it,at,w,D,F];if(Mt&&gg(It,Mt),n=It[0],r=It[1],l=It[2],f=It[3],M=It[4],F=It[9]=It[9]===e?G?0:n.length:nn(It[9]-nt,0),!F&&r&(T|N)&&(r&=~(T|N)),!r||r==m)var kt=Q_(n,r,l);else r==T||r==N?kt=tg(n,r,F):(r==H||r==(m|H))&&!M.length?kt=eg(n,r,l,f):kt=Xa.apply(e,It);var ce=Mt?th:Lh;return Dh(ce(kt,It),n,r)}function Sh(n,r,l,f){return n===e||oi(n,$r[l])&&!Re.call(f,l)?r:n}function Eh(n,r,l,f,M,w){return Ve(n)&&Ve(r)&&(w.set(r,n),Ha(n,r,e,Eh,w),w.delete(r)),n}function ig(n){return ea(n)?e:n}function yh(n,r,l,f,M,w){var D=l&S,F=n.length,G=r.length;if(F!=G&&!(D&&G>F))return!1;var nt=w.get(n),it=w.get(r);if(nt&&it)return nt==r&&it==n;var at=-1,Mt=!0,It=l&b?new _r:e;for(w.set(n,r),w.set(r,n);++at<F;){var kt=n[at],ce=r[at];if(f)var Xt=D?f(ce,kt,at,r,n,w):f(kt,ce,at,n,r,w);if(Xt!==e){if(Xt)continue;Mt=!1;break}if(It){if(!il(r,function(pe,ve){if(!Hs(It,ve)&&(kt===pe||M(kt,pe,l,f,w)))return It.push(ve)})){Mt=!1;break}}else if(!(kt===ce||M(kt,ce,l,f,w))){Mt=!1;break}}return w.delete(n),w.delete(r),Mt}function rg(n,r,l,f,M,w,D){switch(l){case zt:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case Tt:return!(n.byteLength!=r.byteLength||!w(new Ca(n),new Ca(r)));case Ot:case wt:case qt:return oi(+n,+r);case Kt:return n.name==r.name&&n.message==r.message;case y:case dt:return n==r+"";case Pt:var F=cl;case X:var G=f&S;if(F||(F=ya),n.size!=r.size&&!G)return!1;var nt=D.get(n);if(nt)return nt==r;f|=b,D.set(n,r);var it=yh(F(n),F(r),f,M,w,D);return D.delete(n),it;case lt:if(qs)return qs.call(n)==qs.call(r)}return!1}function sg(n,r,l,f,M,w){var D=l&S,F=Ul(n),G=F.length,nt=Ul(r),it=nt.length;if(G!=it&&!D)return!1;for(var at=G;at--;){var Mt=F[at];if(!(D?Mt in r:Re.call(r,Mt)))return!1}var It=w.get(n),kt=w.get(r);if(It&&kt)return It==r&&kt==n;var ce=!0;w.set(n,r),w.set(r,n);for(var Xt=D;++at<G;){Mt=F[at];var pe=n[Mt],ve=r[Mt];if(f)var Bn=D?f(ve,pe,Mt,r,n,w):f(pe,ve,Mt,n,r,w);if(!(Bn===e?pe===ve||M(pe,ve,l,f,w):Bn)){ce=!1;break}Xt||(Xt=Mt=="constructor")}if(ce&&!Xt){var Mn=n.constructor,Gn=r.constructor;Mn!=Gn&&"constructor"in n&&"constructor"in r&&!(typeof Mn=="function"&&Mn instanceof Mn&&typeof Gn=="function"&&Gn instanceof Gn)&&(ce=!1)}return w.delete(n),w.delete(r),ce}function Pi(n){return Vl(Ch(n,e,zh),n+"")}function Ul(n){return Wu(n,an,zl)}function Nl(n){return Wu(n,Pn,Th)}var Fl=Na?function(n){return Na.get(n)}:ec;function Ka(n){for(var r=n.name+"",l=jr[r],f=Re.call(jr,r)?l.length:0;f--;){var M=l[f],w=M.func;if(w==null||w==n)return M.name}return r}function ns(n){var r=Re.call(E,"placeholder")?E:n;return r.placeholder}function Ht(){var n=E.iteratee||Ql;return n=n===Ql?qu:n,arguments.length?n(arguments[0],arguments[1]):n}function $a(n,r){var l=n.__data__;return dg(r)?l[typeof r=="string"?"string":"hash"]:l.map}function Ol(n){for(var r=an(n),l=r.length;l--;){var f=r[l],M=n[f];r[l]=[f,M,wh(M)]}return r}function xr(n,r){var l=_m(n,r);return Xu(l)?l:e}function ag(n){var r=Re.call(n,pr),l=n[pr];try{n[pr]=e;var f=!0}catch{}var M=wa.call(n);return f&&(r?n[pr]=l:delete n[pr]),M}var zl=hl?function(n){return n==null?[]:(n=Ie(n),Xi(hl(n),function(r){return Pu.call(n,r)}))}:nc,Th=hl?function(n){for(var r=[];n;)qi(r,zl(n)),n=Pa(n);return r}:nc,mn=vn;(fl&&mn(new fl(new ArrayBuffer(1)))!=zt||Ws&&mn(new Ws)!=Pt||dl&&mn(dl.resolve())!=te||Jr&&mn(new Jr)!=X||ks&&mn(new ks)!=Rt)&&(mn=function(n){var r=vn(n),l=r==Me?n.constructor:e,f=l?Mr(l):"";if(f)switch(f){case Vm:return zt;case Wm:return Pt;case km:return te;case Xm:return X;case qm:return Rt}return r});function og(n,r,l){for(var f=-1,M=l.length;++f<M;){var w=l[f],D=w.size;switch(w.type){case"drop":n+=D;break;case"dropRight":r-=D;break;case"take":r=pn(r,n+D);break;case"takeRight":n=nn(n,r-D);break}}return{start:n,end:r}}function lg(n){var r=n.match(_a);return r?r[1].split(Hr):[]}function Ah(n,r,l){r=Ji(r,n);for(var f=-1,M=r.length,w=!1;++f<M;){var D=Si(r[f]);if(!(w=n!=null&&l(n,D)))break;n=n[D]}return w||++f!=M?w:(M=n==null?0:n.length,!!M&&io(M)&&Li(D,M)&&(ie(n)||Sr(n)))}function cg(n){var r=n.length,l=new n.constructor(r);return r&&typeof n[0]=="string"&&Re.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function bh(n){return typeof n.constructor=="function"&&!Qs(n)?Qr(Pa(n)):{}}function ug(n,r,l){var f=n.constructor;switch(r){case Tt:return Ll(n);case Ot:case wt:return new f(+n);case zt:return Y_(n,l);case ee:case ht:case Ee:case se:case Yt:case Nt:case bt:case Jt:case Se:return lh(n,l);case Pt:return new f;case qt:case dt:return new f(n);case y:return Z_(n);case X:return new f;case lt:return K_(n)}}function hg(n,r){var l=r.length;if(!l)return n;var f=l-1;return r[f]=(l>1?"& ":"")+r[f],r=r.join(l>2?", ":" "),n.replace(Gr,`{
/* [wrapped with `+r+`] */
`)}function fg(n){return ie(n)||Sr(n)||!!(Lu&&n&&n[Lu])}function Li(n,r){var l=typeof n;return r=r??et,!!r&&(l=="number"||l!="symbol"&&q.test(n))&&n>-1&&n%1==0&&n<r}function xn(n,r,l){if(!Ve(l))return!1;var f=typeof r;return(f=="number"?Cn(l)&&Li(r,l.length):f=="string"&&r in l)?oi(l[r],n):!1}function Bl(n,r){if(ie(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||zn(n)?!0:bn.test(n)||!je.test(n)||r!=null&&n in Ie(r)}function dg(n){var r=typeof n;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?n!=="__proto__":n===null}function Gl(n){var r=Ka(n),l=E[r];if(typeof l!="function"||!(r in _e.prototype))return!1;if(n===l)return!0;var f=Fl(l);return!!f&&n===f[0]}function pg(n){return!!wu&&wu in n}var mg=Aa?Di:ic;function Qs(n){var r=n&&n.constructor,l=typeof r=="function"&&r.prototype||$r;return n===l}function wh(n){return n===n&&!Ve(n)}function Rh(n,r){return function(l){return l==null?!1:l[n]===r&&(r!==e||n in Ie(l))}}function _g(n){var r=eo(n,function(f){return l.size===d&&l.clear(),f}),l=r.cache;return r}function gg(n,r){var l=n[1],f=r[1],M=l|f,w=M<(m|_|U),D=f==U&&l==T||f==U&&l==tt&&n[7].length<=r[8]||f==(U|tt)&&r[7].length<=r[8]&&l==T;if(!(w||D))return n;f&m&&(n[2]=r[2],M|=l&m?0:L);var F=r[3];if(F){var G=n[3];n[3]=G?uh(G,F,r[4]):F,n[4]=G?Yi(n[3],p):r[4]}return F=r[5],F&&(G=n[5],n[5]=G?hh(G,F,r[6]):F,n[6]=G?Yi(n[5],p):r[6]),F=r[7],F&&(n[7]=F),f&U&&(n[8]=n[8]==null?r[8]:pn(n[8],r[8])),n[9]==null&&(n[9]=r[9]),n[0]=r[0],n[1]=M,n}function vg(n){var r=[];if(n!=null)for(var l in Ie(n))r.push(l);return r}function xg(n){return wa.call(n)}function Ch(n,r,l){return r=nn(r===e?n.length-1:r,0),function(){for(var f=arguments,M=-1,w=nn(f.length-r,0),D=Z(w);++M<w;)D[M]=f[r+M];M=-1;for(var F=Z(r+1);++M<r;)F[M]=f[M];return F[r]=l(D),Nn(n,this,F)}}function Ph(n,r){return r.length<2?n:vr(n,Jn(r,0,-1))}function Mg(n,r){for(var l=n.length,f=pn(r.length,l),M=Rn(n);f--;){var w=r[f];n[f]=Li(w,l)?M[w]:e}return n}function Hl(n,r){if(!(r==="constructor"&&typeof n[r]=="function")&&r!="__proto__")return n[r]}var Lh=Ih(th),ta=Nm||function(n,r){return ln.setTimeout(n,r)},Vl=Ih(W_);function Dh(n,r,l){var f=r+"";return Vl(n,hg(f,Sg(lg(f),l)))}function Ih(n){var r=0,l=0;return function(){var f=Bm(),M=mt-(f-l);if(l=f,M>0){if(++r>=ct)return arguments[0]}else r=0;return n.apply(e,arguments)}}function Ja(n,r){var l=-1,f=n.length,M=f-1;for(r=r===e?f:r;++l<r;){var w=Tl(l,M),D=n[w];n[w]=n[l],n[l]=D}return n.length=r,n}var Uh=_g(function(n){var r=[];return n.charCodeAt(0)===46&&r.push(""),n.replace(Pe,function(l,f,M,w){r.push(M?w.replace(Zo,"$1"):f||l)}),r});function Si(n){if(typeof n=="string"||zn(n))return n;var r=n+"";return r=="0"&&1/n==-st?"-0":r}function Mr(n){if(n!=null){try{return ba.call(n)}catch{}try{return n+""}catch{}}return""}function Sg(n,r){return Yn($,function(l){var f="_."+l[0];r&l[1]&&!Sa(n,f)&&n.push(f)}),n.sort()}function Nh(n){if(n instanceof _e)return n.clone();var r=new Kn(n.__wrapped__,n.__chain__);return r.__actions__=Rn(n.__actions__),r.__index__=n.__index__,r.__values__=n.__values__,r}function Eg(n,r,l){(l?xn(n,r,l):r===e)?r=1:r=nn(oe(r),0);var f=n==null?0:n.length;if(!f||r<1)return[];for(var M=0,w=0,D=Z(Ia(f/r));M<f;)D[w++]=Jn(n,M,M+=r);return D}function yg(n){for(var r=-1,l=n==null?0:n.length,f=0,M=[];++r<l;){var w=n[r];w&&(M[f++]=w)}return M}function Tg(){var n=arguments.length;if(!n)return[];for(var r=Z(n-1),l=arguments[0],f=n;f--;)r[f-1]=arguments[f];return qi(ie(l)?Rn(l):[l],cn(r,1))}var Ag=he(function(n,r){return qe(n)?Zs(n,cn(r,1,qe,!0)):[]}),bg=he(function(n,r){var l=jn(r);return qe(l)&&(l=e),qe(n)?Zs(n,cn(r,1,qe,!0),Ht(l,2)):[]}),wg=he(function(n,r){var l=jn(r);return qe(l)&&(l=e),qe(n)?Zs(n,cn(r,1,qe,!0),e,l):[]});function Rg(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===e?1:oe(r),Jn(n,r<0?0:r,f)):[]}function Cg(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===e?1:oe(r),r=f-r,Jn(n,0,r<0?0:r)):[]}function Pg(n,r){return n&&n.length?Wa(n,Ht(r,3),!0,!0):[]}function Lg(n,r){return n&&n.length?Wa(n,Ht(r,3),!0):[]}function Dg(n,r,l,f){var M=n==null?0:n.length;return M?(l&&typeof l!="number"&&xn(n,r,l)&&(l=0,f=M),T_(n,r,l,f)):[]}function Fh(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var M=l==null?0:oe(l);return M<0&&(M=nn(f+M,0)),Ea(n,Ht(r,3),M)}function Oh(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var M=f-1;return l!==e&&(M=oe(l),M=l<0?nn(f+M,0):pn(M,f-1)),Ea(n,Ht(r,3),M,!0)}function zh(n){var r=n==null?0:n.length;return r?cn(n,1):[]}function Ig(n){var r=n==null?0:n.length;return r?cn(n,st):[]}function Ug(n,r){var l=n==null?0:n.length;return l?(r=r===e?1:oe(r),cn(n,r)):[]}function Ng(n){for(var r=-1,l=n==null?0:n.length,f={};++r<l;){var M=n[r];f[M[0]]=M[1]}return f}function Bh(n){return n&&n.length?n[0]:e}function Fg(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var M=l==null?0:oe(l);return M<0&&(M=nn(f+M,0)),qr(n,r,M)}function Og(n){var r=n==null?0:n.length;return r?Jn(n,0,-1):[]}var zg=he(function(n){var r=He(n,Cl);return r.length&&r[0]===n[0]?xl(r):[]}),Bg=he(function(n){var r=jn(n),l=He(n,Cl);return r===jn(l)?r=e:l.pop(),l.length&&l[0]===n[0]?xl(l,Ht(r,2)):[]}),Gg=he(function(n){var r=jn(n),l=He(n,Cl);return r=typeof r=="function"?r:e,r&&l.pop(),l.length&&l[0]===n[0]?xl(l,e,r):[]});function Hg(n,r){return n==null?"":Om.call(n,r)}function jn(n){var r=n==null?0:n.length;return r?n[r-1]:e}function Vg(n,r,l){var f=n==null?0:n.length;if(!f)return-1;var M=f;return l!==e&&(M=oe(l),M=M<0?nn(f+M,0):pn(M,f-1)),r===r?Sm(n,r,M):Ea(n,xu,M,!0)}function Wg(n,r){return n&&n.length?$u(n,oe(r)):e}var kg=he(Gh);function Gh(n,r){return n&&n.length&&r&&r.length?yl(n,r):n}function Xg(n,r,l){return n&&n.length&&r&&r.length?yl(n,r,Ht(l,2)):n}function qg(n,r,l){return n&&n.length&&r&&r.length?yl(n,r,e,l):n}var Yg=Pi(function(n,r){var l=n==null?0:n.length,f=ml(n,r);return Qu(n,He(r,function(M){return Li(M,l)?+M:M}).sort(ch)),f});function Zg(n,r){var l=[];if(!(n&&n.length))return l;var f=-1,M=[],w=n.length;for(r=Ht(r,3);++f<w;){var D=n[f];r(D,f,n)&&(l.push(D),M.push(f))}return Qu(n,M),l}function Wl(n){return n==null?n:Hm.call(n)}function Kg(n,r,l){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&xn(n,r,l)?(r=0,l=f):(r=r==null?0:oe(r),l=l===e?f:oe(l)),Jn(n,r,l)):[]}function $g(n,r){return Va(n,r)}function Jg(n,r,l){return bl(n,r,Ht(l,2))}function jg(n,r){var l=n==null?0:n.length;if(l){var f=Va(n,r);if(f<l&&oi(n[f],r))return f}return-1}function Qg(n,r){return Va(n,r,!0)}function tv(n,r,l){return bl(n,r,Ht(l,2),!0)}function ev(n,r){var l=n==null?0:n.length;if(l){var f=Va(n,r,!0)-1;if(oi(n[f],r))return f}return-1}function nv(n){return n&&n.length?eh(n):[]}function iv(n,r){return n&&n.length?eh(n,Ht(r,2)):[]}function rv(n){var r=n==null?0:n.length;return r?Jn(n,1,r):[]}function sv(n,r,l){return n&&n.length?(r=l||r===e?1:oe(r),Jn(n,0,r<0?0:r)):[]}function av(n,r,l){var f=n==null?0:n.length;return f?(r=l||r===e?1:oe(r),r=f-r,Jn(n,r<0?0:r,f)):[]}function ov(n,r){return n&&n.length?Wa(n,Ht(r,3),!1,!0):[]}function lv(n,r){return n&&n.length?Wa(n,Ht(r,3)):[]}var cv=he(function(n){return $i(cn(n,1,qe,!0))}),uv=he(function(n){var r=jn(n);return qe(r)&&(r=e),$i(cn(n,1,qe,!0),Ht(r,2))}),hv=he(function(n){var r=jn(n);return r=typeof r=="function"?r:e,$i(cn(n,1,qe,!0),e,r)});function fv(n){return n&&n.length?$i(n):[]}function dv(n,r){return n&&n.length?$i(n,Ht(r,2)):[]}function pv(n,r){return r=typeof r=="function"?r:e,n&&n.length?$i(n,e,r):[]}function kl(n){if(!(n&&n.length))return[];var r=0;return n=Xi(n,function(l){if(qe(l))return r=nn(l.length,r),!0}),ol(r,function(l){return He(n,rl(l))})}function Hh(n,r){if(!(n&&n.length))return[];var l=kl(n);return r==null?l:He(l,function(f){return Nn(r,e,f)})}var mv=he(function(n,r){return qe(n)?Zs(n,r):[]}),_v=he(function(n){return Rl(Xi(n,qe))}),gv=he(function(n){var r=jn(n);return qe(r)&&(r=e),Rl(Xi(n,qe),Ht(r,2))}),vv=he(function(n){var r=jn(n);return r=typeof r=="function"?r:e,Rl(Xi(n,qe),e,r)}),xv=he(kl);function Mv(n,r){return sh(n||[],r||[],Ys)}function Sv(n,r){return sh(n||[],r||[],Js)}var Ev=he(function(n){var r=n.length,l=r>1?n[r-1]:e;return l=typeof l=="function"?(n.pop(),l):e,Hh(n,l)});function Vh(n){var r=E(n);return r.__chain__=!0,r}function yv(n,r){return r(n),n}function ja(n,r){return r(n)}var Tv=Pi(function(n){var r=n.length,l=r?n[0]:0,f=this.__wrapped__,M=function(w){return ml(w,n)};return r>1||this.__actions__.length||!(f instanceof _e)||!Li(l)?this.thru(M):(f=f.slice(l,+l+(r?1:0)),f.__actions__.push({func:ja,args:[M],thisArg:e}),new Kn(f,this.__chain__).thru(function(w){return r&&!w.length&&w.push(e),w}))});function Av(){return Vh(this)}function bv(){return new Kn(this.value(),this.__chain__)}function wv(){this.__values__===e&&(this.__values__=nf(this.value()));var n=this.__index__>=this.__values__.length,r=n?e:this.__values__[this.__index__++];return{done:n,value:r}}function Rv(){return this}function Cv(n){for(var r,l=this;l instanceof Oa;){var f=Nh(l);f.__index__=0,f.__values__=e,r?M.__wrapped__=f:r=f;var M=f;l=l.__wrapped__}return M.__wrapped__=n,r}function Pv(){var n=this.__wrapped__;if(n instanceof _e){var r=n;return this.__actions__.length&&(r=new _e(this)),r=r.reverse(),r.__actions__.push({func:ja,args:[Wl],thisArg:e}),new Kn(r,this.__chain__)}return this.thru(Wl)}function Lv(){return rh(this.__wrapped__,this.__actions__)}var Dv=ka(function(n,r,l){Re.call(n,l)?++n[l]:Ri(n,l,1)});function Iv(n,r,l){var f=ie(n)?gu:y_;return l&&xn(n,r,l)&&(r=e),f(n,Ht(r,3))}function Uv(n,r){var l=ie(n)?Xi:Hu;return l(n,Ht(r,3))}var Nv=mh(Fh),Fv=mh(Oh);function Ov(n,r){return cn(Qa(n,r),1)}function zv(n,r){return cn(Qa(n,r),st)}function Bv(n,r,l){return l=l===e?1:oe(l),cn(Qa(n,r),l)}function Wh(n,r){var l=ie(n)?Yn:Ki;return l(n,Ht(r,3))}function kh(n,r){var l=ie(n)?rm:Gu;return l(n,Ht(r,3))}var Gv=ka(function(n,r,l){Re.call(n,l)?n[l].push(r):Ri(n,l,[r])});function Hv(n,r,l,f){n=Cn(n)?n:rs(n),l=l&&!f?oe(l):0;var M=n.length;return l<0&&(l=nn(M+l,0)),ro(n)?l<=M&&n.indexOf(r,l)>-1:!!M&&qr(n,r,l)>-1}var Vv=he(function(n,r,l){var f=-1,M=typeof r=="function",w=Cn(n)?Z(n.length):[];return Ki(n,function(D){w[++f]=M?Nn(r,D,l):Ks(D,r,l)}),w}),Wv=ka(function(n,r,l){Ri(n,l,r)});function Qa(n,r){var l=ie(n)?He:Yu;return l(n,Ht(r,3))}function kv(n,r,l,f){return n==null?[]:(ie(r)||(r=r==null?[]:[r]),l=f?e:l,ie(l)||(l=l==null?[]:[l]),Ju(n,r,l))}var Xv=ka(function(n,r,l){n[l?0:1].push(r)},function(){return[[],[]]});function qv(n,r,l){var f=ie(n)?nl:Su,M=arguments.length<3;return f(n,Ht(r,4),l,M,Ki)}function Yv(n,r,l){var f=ie(n)?sm:Su,M=arguments.length<3;return f(n,Ht(r,4),l,M,Gu)}function Zv(n,r){var l=ie(n)?Xi:Hu;return l(n,no(Ht(r,3)))}function Kv(n){var r=ie(n)?Fu:H_;return r(n)}function $v(n,r,l){(l?xn(n,r,l):r===e)?r=1:r=oe(r);var f=ie(n)?v_:V_;return f(n,r)}function Jv(n){var r=ie(n)?x_:k_;return r(n)}function jv(n){if(n==null)return 0;if(Cn(n))return ro(n)?Zr(n):n.length;var r=mn(n);return r==Pt||r==X?n.size:Sl(n).length}function Qv(n,r,l){var f=ie(n)?il:X_;return l&&xn(n,r,l)&&(r=e),f(n,Ht(r,3))}var t0=he(function(n,r){if(n==null)return[];var l=r.length;return l>1&&xn(n,r[0],r[1])?r=[]:l>2&&xn(r[0],r[1],r[2])&&(r=[r[0]]),Ju(n,cn(r,1),[])}),to=Um||function(){return ln.Date.now()};function e0(n,r){if(typeof r!="function")throw new Zn(u);return n=oe(n),function(){if(--n<1)return r.apply(this,arguments)}}function Xh(n,r,l){return r=l?e:r,r=n&&r==null?n.length:r,Ci(n,U,e,e,e,e,r)}function qh(n,r){var l;if(typeof r!="function")throw new Zn(u);return n=oe(n),function(){return--n>0&&(l=r.apply(this,arguments)),n<=1&&(r=e),l}}var Xl=he(function(n,r,l){var f=m;if(l.length){var M=Yi(l,ns(Xl));f|=H}return Ci(n,f,r,l,M)}),Yh=he(function(n,r,l){var f=m|_;if(l.length){var M=Yi(l,ns(Yh));f|=H}return Ci(r,f,n,l,M)});function Zh(n,r,l){r=l?e:r;var f=Ci(n,T,e,e,e,e,e,r);return f.placeholder=Zh.placeholder,f}function Kh(n,r,l){r=l?e:r;var f=Ci(n,N,e,e,e,e,e,r);return f.placeholder=Kh.placeholder,f}function $h(n,r,l){var f,M,w,D,F,G,nt=0,it=!1,at=!1,Mt=!0;if(typeof n!="function")throw new Zn(u);r=Qn(r)||0,Ve(l)&&(it=!!l.leading,at="maxWait"in l,w=at?nn(Qn(l.maxWait)||0,r):w,Mt="trailing"in l?!!l.trailing:Mt);function It(Ye){var li=f,Ui=M;return f=M=e,nt=Ye,D=n.apply(Ui,li),D}function kt(Ye){return nt=Ye,F=ta(pe,r),it?It(Ye):D}function ce(Ye){var li=Ye-G,Ui=Ye-nt,_f=r-li;return at?pn(_f,w-Ui):_f}function Xt(Ye){var li=Ye-G,Ui=Ye-nt;return G===e||li>=r||li<0||at&&Ui>=w}function pe(){var Ye=to();if(Xt(Ye))return ve(Ye);F=ta(pe,ce(Ye))}function ve(Ye){return F=e,Mt&&f?It(Ye):(f=M=e,D)}function Bn(){F!==e&&ah(F),nt=0,f=G=M=F=e}function Mn(){return F===e?D:ve(to())}function Gn(){var Ye=to(),li=Xt(Ye);if(f=arguments,M=this,G=Ye,li){if(F===e)return kt(G);if(at)return ah(F),F=ta(pe,r),It(G)}return F===e&&(F=ta(pe,r)),D}return Gn.cancel=Bn,Gn.flush=Mn,Gn}var n0=he(function(n,r){return Bu(n,1,r)}),i0=he(function(n,r,l){return Bu(n,Qn(r)||0,l)});function r0(n){return Ci(n,vt)}function eo(n,r){if(typeof n!="function"||r!=null&&typeof r!="function")throw new Zn(u);var l=function(){var f=arguments,M=r?r.apply(this,f):f[0],w=l.cache;if(w.has(M))return w.get(M);var D=n.apply(this,f);return l.cache=w.set(M,D)||w,D};return l.cache=new(eo.Cache||wi),l}eo.Cache=wi;function no(n){if(typeof n!="function")throw new Zn(u);return function(){var r=arguments;switch(r.length){case 0:return!n.call(this);case 1:return!n.call(this,r[0]);case 2:return!n.call(this,r[0],r[1]);case 3:return!n.call(this,r[0],r[1],r[2])}return!n.apply(this,r)}}function s0(n){return qh(2,n)}var a0=q_(function(n,r){r=r.length==1&&ie(r[0])?He(r[0],Fn(Ht())):He(cn(r,1),Fn(Ht()));var l=r.length;return he(function(f){for(var M=-1,w=pn(f.length,l);++M<w;)f[M]=r[M].call(this,f[M]);return Nn(n,this,f)})}),ql=he(function(n,r){var l=Yi(r,ns(ql));return Ci(n,H,e,r,l)}),Jh=he(function(n,r){var l=Yi(r,ns(Jh));return Ci(n,O,e,r,l)}),o0=Pi(function(n,r){return Ci(n,tt,e,e,e,r)});function l0(n,r){if(typeof n!="function")throw new Zn(u);return r=r===e?r:oe(r),he(n,r)}function c0(n,r){if(typeof n!="function")throw new Zn(u);return r=r==null?0:nn(oe(r),0),he(function(l){var f=l[r],M=ji(l,0,r);return f&&qi(M,f),Nn(n,this,M)})}function u0(n,r,l){var f=!0,M=!0;if(typeof n!="function")throw new Zn(u);return Ve(l)&&(f="leading"in l?!!l.leading:f,M="trailing"in l?!!l.trailing:M),$h(n,r,{leading:f,maxWait:r,trailing:M})}function h0(n){return Xh(n,1)}function f0(n,r){return ql(Pl(r),n)}function d0(){if(!arguments.length)return[];var n=arguments[0];return ie(n)?n:[n]}function p0(n){return $n(n,x)}function m0(n,r){return r=typeof r=="function"?r:e,$n(n,x,r)}function _0(n){return $n(n,g|x)}function g0(n,r){return r=typeof r=="function"?r:e,$n(n,g|x,r)}function v0(n,r){return r==null||zu(n,r,an(r))}function oi(n,r){return n===r||n!==n&&r!==r}var x0=Za(vl),M0=Za(function(n,r){return n>=r}),Sr=ku(function(){return arguments}())?ku:function(n){return We(n)&&Re.call(n,"callee")&&!Pu.call(n,"callee")},ie=Z.isArray,S0=hu?Fn(hu):C_;function Cn(n){return n!=null&&io(n.length)&&!Di(n)}function qe(n){return We(n)&&Cn(n)}function E0(n){return n===!0||n===!1||We(n)&&vn(n)==Ot}var Qi=Fm||ic,y0=fu?Fn(fu):P_;function T0(n){return We(n)&&n.nodeType===1&&!ea(n)}function A0(n){if(n==null)return!0;if(Cn(n)&&(ie(n)||typeof n=="string"||typeof n.splice=="function"||Qi(n)||is(n)||Sr(n)))return!n.length;var r=mn(n);if(r==Pt||r==X)return!n.size;if(Qs(n))return!Sl(n).length;for(var l in n)if(Re.call(n,l))return!1;return!0}function b0(n,r){return $s(n,r)}function w0(n,r,l){l=typeof l=="function"?l:e;var f=l?l(n,r):e;return f===e?$s(n,r,e,l):!!f}function Yl(n){if(!We(n))return!1;var r=vn(n);return r==Kt||r==xe||typeof n.message=="string"&&typeof n.name=="string"&&!ea(n)}function R0(n){return typeof n=="number"&&Du(n)}function Di(n){if(!Ve(n))return!1;var r=vn(n);return r==k||r==Ke||r==Gt||r==C}function jh(n){return typeof n=="number"&&n==oe(n)}function io(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=et}function Ve(n){var r=typeof n;return n!=null&&(r=="object"||r=="function")}function We(n){return n!=null&&typeof n=="object"}var Qh=du?Fn(du):D_;function C0(n,r){return n===r||Ml(n,r,Ol(r))}function P0(n,r,l){return l=typeof l=="function"?l:e,Ml(n,r,Ol(r),l)}function L0(n){return tf(n)&&n!=+n}function D0(n){if(mg(n))throw new Qt(o);return Xu(n)}function I0(n){return n===null}function U0(n){return n==null}function tf(n){return typeof n=="number"||We(n)&&vn(n)==qt}function ea(n){if(!We(n)||vn(n)!=Me)return!1;var r=Pa(n);if(r===null)return!0;var l=Re.call(r,"constructor")&&r.constructor;return typeof l=="function"&&l instanceof l&&ba.call(l)==Pm}var Zl=pu?Fn(pu):I_;function N0(n){return jh(n)&&n>=-et&&n<=et}var ef=mu?Fn(mu):U_;function ro(n){return typeof n=="string"||!ie(n)&&We(n)&&vn(n)==dt}function zn(n){return typeof n=="symbol"||We(n)&&vn(n)==lt}var is=_u?Fn(_u):N_;function F0(n){return n===e}function O0(n){return We(n)&&mn(n)==Rt}function z0(n){return We(n)&&vn(n)==St}var B0=Za(El),G0=Za(function(n,r){return n<=r});function nf(n){if(!n)return[];if(Cn(n))return ro(n)?si(n):Rn(n);if(Vs&&n[Vs])return vm(n[Vs]());var r=mn(n),l=r==Pt?cl:r==X?ya:rs;return l(n)}function Ii(n){if(!n)return n===0?n:0;if(n=Qn(n),n===st||n===-st){var r=n<0?-1:1;return r*rt}return n===n?n:0}function oe(n){var r=Ii(n),l=r%1;return r===r?l?r-l:r:0}function rf(n){return n?gr(oe(n),0,ot):0}function Qn(n){if(typeof n=="number")return n;if(zn(n))return ft;if(Ve(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=Ve(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=Eu(n);var l=W.test(n);return l||K.test(n)?em(n.slice(2),l?2:8):R.test(n)?ft:+n}function sf(n){return Mi(n,Pn(n))}function H0(n){return n?gr(oe(n),-et,et):n===0?n:0}function Ae(n){return n==null?"":On(n)}var V0=ts(function(n,r){if(Qs(r)||Cn(r)){Mi(r,an(r),n);return}for(var l in r)Re.call(r,l)&&Ys(n,l,r[l])}),af=ts(function(n,r){Mi(r,Pn(r),n)}),so=ts(function(n,r,l,f){Mi(r,Pn(r),n,f)}),W0=ts(function(n,r,l,f){Mi(r,an(r),n,f)}),k0=Pi(ml);function X0(n,r){var l=Qr(n);return r==null?l:Ou(l,r)}var q0=he(function(n,r){n=Ie(n);var l=-1,f=r.length,M=f>2?r[2]:e;for(M&&xn(r[0],r[1],M)&&(f=1);++l<f;)for(var w=r[l],D=Pn(w),F=-1,G=D.length;++F<G;){var nt=D[F],it=n[nt];(it===e||oi(it,$r[nt])&&!Re.call(n,nt))&&(n[nt]=w[nt])}return n}),Y0=he(function(n){return n.push(e,Eh),Nn(of,e,n)});function Z0(n,r){return vu(n,Ht(r,3),xi)}function K0(n,r){return vu(n,Ht(r,3),gl)}function $0(n,r){return n==null?n:_l(n,Ht(r,3),Pn)}function J0(n,r){return n==null?n:Vu(n,Ht(r,3),Pn)}function j0(n,r){return n&&xi(n,Ht(r,3))}function Q0(n,r){return n&&gl(n,Ht(r,3))}function tx(n){return n==null?[]:Ga(n,an(n))}function ex(n){return n==null?[]:Ga(n,Pn(n))}function Kl(n,r,l){var f=n==null?e:vr(n,r);return f===e?l:f}function nx(n,r){return n!=null&&Ah(n,r,A_)}function $l(n,r){return n!=null&&Ah(n,r,b_)}var ix=gh(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=wa.call(r)),n[r]=l},jl(Ln)),rx=gh(function(n,r,l){r!=null&&typeof r.toString!="function"&&(r=wa.call(r)),Re.call(n,r)?n[r].push(l):n[r]=[l]},Ht),sx=he(Ks);function an(n){return Cn(n)?Nu(n):Sl(n)}function Pn(n){return Cn(n)?Nu(n,!0):F_(n)}function ax(n,r){var l={};return r=Ht(r,3),xi(n,function(f,M,w){Ri(l,r(f,M,w),f)}),l}function ox(n,r){var l={};return r=Ht(r,3),xi(n,function(f,M,w){Ri(l,M,r(f,M,w))}),l}var lx=ts(function(n,r,l){Ha(n,r,l)}),of=ts(function(n,r,l,f){Ha(n,r,l,f)}),cx=Pi(function(n,r){var l={};if(n==null)return l;var f=!1;r=He(r,function(w){return w=Ji(w,n),f||(f=w.length>1),w}),Mi(n,Nl(n),l),f&&(l=$n(l,g|v|x,ig));for(var M=r.length;M--;)wl(l,r[M]);return l});function ux(n,r){return lf(n,no(Ht(r)))}var hx=Pi(function(n,r){return n==null?{}:z_(n,r)});function lf(n,r){if(n==null)return{};var l=He(Nl(n),function(f){return[f]});return r=Ht(r),ju(n,l,function(f,M){return r(f,M[0])})}function fx(n,r,l){r=Ji(r,n);var f=-1,M=r.length;for(M||(M=1,n=e);++f<M;){var w=n==null?e:n[Si(r[f])];w===e&&(f=M,w=l),n=Di(w)?w.call(n):w}return n}function dx(n,r,l){return n==null?n:Js(n,r,l)}function px(n,r,l,f){return f=typeof f=="function"?f:e,n==null?n:Js(n,r,l,f)}var cf=Mh(an),uf=Mh(Pn);function mx(n,r,l){var f=ie(n),M=f||Qi(n)||is(n);if(r=Ht(r,4),l==null){var w=n&&n.constructor;M?l=f?new w:[]:Ve(n)?l=Di(w)?Qr(Pa(n)):{}:l={}}return(M?Yn:xi)(n,function(D,F,G){return r(l,D,F,G)}),l}function _x(n,r){return n==null?!0:wl(n,r)}function gx(n,r,l){return n==null?n:ih(n,r,Pl(l))}function vx(n,r,l,f){return f=typeof f=="function"?f:e,n==null?n:ih(n,r,Pl(l),f)}function rs(n){return n==null?[]:ll(n,an(n))}function xx(n){return n==null?[]:ll(n,Pn(n))}function Mx(n,r,l){return l===e&&(l=r,r=e),l!==e&&(l=Qn(l),l=l===l?l:0),r!==e&&(r=Qn(r),r=r===r?r:0),gr(Qn(n),r,l)}function Sx(n,r,l){return r=Ii(r),l===e?(l=r,r=0):l=Ii(l),n=Qn(n),w_(n,r,l)}function Ex(n,r,l){if(l&&typeof l!="boolean"&&xn(n,r,l)&&(r=l=e),l===e&&(typeof r=="boolean"?(l=r,r=e):typeof n=="boolean"&&(l=n,n=e)),n===e&&r===e?(n=0,r=1):(n=Ii(n),r===e?(r=n,n=0):r=Ii(r)),n>r){var f=n;n=r,r=f}if(l||n%1||r%1){var M=Iu();return pn(n+M*(r-n+tm("1e-"+((M+"").length-1))),r)}return Tl(n,r)}var yx=es(function(n,r,l){return r=r.toLowerCase(),n+(l?hf(r):r)});function hf(n){return Jl(Ae(n).toLowerCase())}function ff(n){return n=Ae(n),n&&n.replace(Et,dm).replace(kp,"")}function Tx(n,r,l){n=Ae(n),r=On(r);var f=n.length;l=l===e?f:gr(oe(l),0,f);var M=l;return l-=r.length,l>=0&&n.slice(l,M)==r}function Ax(n){return n=Ae(n),n&&Lt.test(n)?n.replace(_t,pm):n}function bx(n){return n=Ae(n),n&&kn.test(n)?n.replace(Qe,"\\$&"):n}var wx=es(function(n,r,l){return n+(l?"-":"")+r.toLowerCase()}),Rx=es(function(n,r,l){return n+(l?" ":"")+r.toLowerCase()}),Cx=ph("toLowerCase");function Px(n,r,l){n=Ae(n),r=oe(r);var f=r?Zr(n):0;if(!r||f>=r)return n;var M=(r-f)/2;return Ya(Ua(M),l)+n+Ya(Ia(M),l)}function Lx(n,r,l){n=Ae(n),r=oe(r);var f=r?Zr(n):0;return r&&f<r?n+Ya(r-f,l):n}function Dx(n,r,l){n=Ae(n),r=oe(r);var f=r?Zr(n):0;return r&&f<r?Ya(r-f,l)+n:n}function Ix(n,r,l){return l||r==null?r=0:r&&(r=+r),Gm(Ae(n).replace(Br,""),r||0)}function Ux(n,r,l){return(l?xn(n,r,l):r===e)?r=1:r=oe(r),Al(Ae(n),r)}function Nx(){var n=arguments,r=Ae(n[0]);return n.length<3?r:r.replace(n[1],n[2])}var Fx=es(function(n,r,l){return n+(l?"_":"")+r.toLowerCase()});function Ox(n,r,l){return l&&typeof l!="number"&&xn(n,r,l)&&(r=l=e),l=l===e?ot:l>>>0,l?(n=Ae(n),n&&(typeof r=="string"||r!=null&&!Zl(r))&&(r=On(r),!r&&Yr(n))?ji(si(n),0,l):n.split(r,l)):[]}var zx=es(function(n,r,l){return n+(l?" ":"")+Jl(r)});function Bx(n,r,l){return n=Ae(n),l=l==null?0:gr(oe(l),0,n.length),r=On(r),n.slice(l,l+r.length)==r}function Gx(n,r,l){var f=E.templateSettings;l&&xn(n,r,l)&&(r=e),n=Ae(n),r=so({},r,f,Sh);var M=so({},r.imports,f.imports,Sh),w=an(M),D=ll(M,w),F,G,nt=0,it=r.interpolate||Dt,at="__p += '",Mt=ul((r.escape||Dt).source+"|"+it.source+"|"+(it===we?Ko:Dt).source+"|"+(r.evaluate||Dt).source+"|$","g"),It="//# sourceURL="+(Re.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Kp+"]")+`
`;n.replace(Mt,function(Xt,pe,ve,Bn,Mn,Gn){return ve||(ve=Bn),at+=n.slice(nt,Gn).replace(Vt,mm),pe&&(F=!0,at+=`' +
__e(`+pe+`) +
'`),Mn&&(G=!0,at+=`';
`+Mn+`;
__p += '`),ve&&(at+=`' +
((__t = (`+ve+`)) == null ? '' : __t) +
'`),nt=Gn+Xt.length,Xt}),at+=`';
`;var kt=Re.call(r,"variable")&&r.variable;if(!kt)at=`with (obj) {
`+at+`
}
`;else if(va.test(kt))throw new Qt(c);at=(G?at.replace(De,""):at).replace(fe,"$1").replace(be,"$1;"),at="function("+(kt||"obj")+`) {
`+(kt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(F?", __e = _.escape":"")+(G?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+at+`return __p
}`;var ce=pf(function(){return Te(w,It+"return "+at).apply(e,D)});if(ce.source=at,Yl(ce))throw ce;return ce}function Hx(n){return Ae(n).toLowerCase()}function Vx(n){return Ae(n).toUpperCase()}function Wx(n,r,l){if(n=Ae(n),n&&(l||r===e))return Eu(n);if(!n||!(r=On(r)))return n;var f=si(n),M=si(r),w=yu(f,M),D=Tu(f,M)+1;return ji(f,w,D).join("")}function kx(n,r,l){if(n=Ae(n),n&&(l||r===e))return n.slice(0,bu(n)+1);if(!n||!(r=On(r)))return n;var f=si(n),M=Tu(f,si(r))+1;return ji(f,0,M).join("")}function Xx(n,r,l){if(n=Ae(n),n&&(l||r===e))return n.replace(Br,"");if(!n||!(r=On(r)))return n;var f=si(n),M=yu(f,si(r));return ji(f,M).join("")}function qx(n,r){var l=A,f=I;if(Ve(r)){var M="separator"in r?r.separator:M;l="length"in r?oe(r.length):l,f="omission"in r?On(r.omission):f}n=Ae(n);var w=n.length;if(Yr(n)){var D=si(n);w=D.length}if(l>=w)return n;var F=l-Zr(f);if(F<1)return f;var G=D?ji(D,0,F).join(""):n.slice(0,F);if(M===e)return G+f;if(D&&(F+=G.length-F),Zl(M)){if(n.slice(F).search(M)){var nt,it=G;for(M.global||(M=ul(M.source,Ae(xa.exec(M))+"g")),M.lastIndex=0;nt=M.exec(it);)var at=nt.index;G=G.slice(0,at===e?F:at)}}else if(n.indexOf(On(M),F)!=F){var Mt=G.lastIndexOf(M);Mt>-1&&(G=G.slice(0,Mt))}return G+f}function Yx(n){return n=Ae(n),n&&gt.test(n)?n.replace(P,Em):n}var Zx=es(function(n,r,l){return n+(l?" ":"")+r.toUpperCase()}),Jl=ph("toUpperCase");function df(n,r,l){return n=Ae(n),r=l?e:r,r===e?gm(n)?Am(n):lm(n):n.match(r)||[]}var pf=he(function(n,r){try{return Nn(n,e,r)}catch(l){return Yl(l)?l:new Qt(l)}}),Kx=Pi(function(n,r){return Yn(r,function(l){l=Si(l),Ri(n,l,Xl(n[l],n))}),n});function $x(n){var r=n==null?0:n.length,l=Ht();return n=r?He(n,function(f){if(typeof f[1]!="function")throw new Zn(u);return[l(f[0]),f[1]]}):[],he(function(f){for(var M=-1;++M<r;){var w=n[M];if(Nn(w[0],this,f))return Nn(w[1],this,f)}})}function Jx(n){return E_($n(n,g))}function jl(n){return function(){return n}}function jx(n,r){return n==null||n!==n?r:n}var Qx=_h(),tM=_h(!0);function Ln(n){return n}function Ql(n){return qu(typeof n=="function"?n:$n(n,g))}function eM(n){return Zu($n(n,g))}function nM(n,r){return Ku(n,$n(r,g))}var iM=he(function(n,r){return function(l){return Ks(l,n,r)}}),rM=he(function(n,r){return function(l){return Ks(n,l,r)}});function tc(n,r,l){var f=an(r),M=Ga(r,f);l==null&&!(Ve(r)&&(M.length||!f.length))&&(l=r,r=n,n=this,M=Ga(r,an(r)));var w=!(Ve(l)&&"chain"in l)||!!l.chain,D=Di(n);return Yn(M,function(F){var G=r[F];n[F]=G,D&&(n.prototype[F]=function(){var nt=this.__chain__;if(w||nt){var it=n(this.__wrapped__),at=it.__actions__=Rn(this.__actions__);return at.push({func:G,args:arguments,thisArg:n}),it.__chain__=nt,it}return G.apply(n,qi([this.value()],arguments))})}),n}function sM(){return ln._===this&&(ln._=Lm),this}function ec(){}function aM(n){return n=oe(n),he(function(r){return $u(r,n)})}var oM=Dl(He),lM=Dl(gu),cM=Dl(il);function mf(n){return Bl(n)?rl(Si(n)):B_(n)}function uM(n){return function(r){return n==null?e:vr(n,r)}}var hM=vh(),fM=vh(!0);function nc(){return[]}function ic(){return!1}function dM(){return{}}function pM(){return""}function mM(){return!0}function _M(n,r){if(n=oe(n),n<1||n>et)return[];var l=ot,f=pn(n,ot);r=Ht(r),n-=ot;for(var M=ol(f,r);++l<n;)r(l);return M}function gM(n){return ie(n)?He(n,Si):zn(n)?[n]:Rn(Uh(Ae(n)))}function vM(n){var r=++Cm;return Ae(n)+r}var xM=qa(function(n,r){return n+r},0),MM=Il("ceil"),SM=qa(function(n,r){return n/r},1),EM=Il("floor");function yM(n){return n&&n.length?Ba(n,Ln,vl):e}function TM(n,r){return n&&n.length?Ba(n,Ht(r,2),vl):e}function AM(n){return Mu(n,Ln)}function bM(n,r){return Mu(n,Ht(r,2))}function wM(n){return n&&n.length?Ba(n,Ln,El):e}function RM(n,r){return n&&n.length?Ba(n,Ht(r,2),El):e}var CM=qa(function(n,r){return n*r},1),PM=Il("round"),LM=qa(function(n,r){return n-r},0);function DM(n){return n&&n.length?al(n,Ln):0}function IM(n,r){return n&&n.length?al(n,Ht(r,2)):0}return E.after=e0,E.ary=Xh,E.assign=V0,E.assignIn=af,E.assignInWith=so,E.assignWith=W0,E.at=k0,E.before=qh,E.bind=Xl,E.bindAll=Kx,E.bindKey=Yh,E.castArray=d0,E.chain=Vh,E.chunk=Eg,E.compact=yg,E.concat=Tg,E.cond=$x,E.conforms=Jx,E.constant=jl,E.countBy=Dv,E.create=X0,E.curry=Zh,E.curryRight=Kh,E.debounce=$h,E.defaults=q0,E.defaultsDeep=Y0,E.defer=n0,E.delay=i0,E.difference=Ag,E.differenceBy=bg,E.differenceWith=wg,E.drop=Rg,E.dropRight=Cg,E.dropRightWhile=Pg,E.dropWhile=Lg,E.fill=Dg,E.filter=Uv,E.flatMap=Ov,E.flatMapDeep=zv,E.flatMapDepth=Bv,E.flatten=zh,E.flattenDeep=Ig,E.flattenDepth=Ug,E.flip=r0,E.flow=Qx,E.flowRight=tM,E.fromPairs=Ng,E.functions=tx,E.functionsIn=ex,E.groupBy=Gv,E.initial=Og,E.intersection=zg,E.intersectionBy=Bg,E.intersectionWith=Gg,E.invert=ix,E.invertBy=rx,E.invokeMap=Vv,E.iteratee=Ql,E.keyBy=Wv,E.keys=an,E.keysIn=Pn,E.map=Qa,E.mapKeys=ax,E.mapValues=ox,E.matches=eM,E.matchesProperty=nM,E.memoize=eo,E.merge=lx,E.mergeWith=of,E.method=iM,E.methodOf=rM,E.mixin=tc,E.negate=no,E.nthArg=aM,E.omit=cx,E.omitBy=ux,E.once=s0,E.orderBy=kv,E.over=oM,E.overArgs=a0,E.overEvery=lM,E.overSome=cM,E.partial=ql,E.partialRight=Jh,E.partition=Xv,E.pick=hx,E.pickBy=lf,E.property=mf,E.propertyOf=uM,E.pull=kg,E.pullAll=Gh,E.pullAllBy=Xg,E.pullAllWith=qg,E.pullAt=Yg,E.range=hM,E.rangeRight=fM,E.rearg=o0,E.reject=Zv,E.remove=Zg,E.rest=l0,E.reverse=Wl,E.sampleSize=$v,E.set=dx,E.setWith=px,E.shuffle=Jv,E.slice=Kg,E.sortBy=t0,E.sortedUniq=nv,E.sortedUniqBy=iv,E.split=Ox,E.spread=c0,E.tail=rv,E.take=sv,E.takeRight=av,E.takeRightWhile=ov,E.takeWhile=lv,E.tap=yv,E.throttle=u0,E.thru=ja,E.toArray=nf,E.toPairs=cf,E.toPairsIn=uf,E.toPath=gM,E.toPlainObject=sf,E.transform=mx,E.unary=h0,E.union=cv,E.unionBy=uv,E.unionWith=hv,E.uniq=fv,E.uniqBy=dv,E.uniqWith=pv,E.unset=_x,E.unzip=kl,E.unzipWith=Hh,E.update=gx,E.updateWith=vx,E.values=rs,E.valuesIn=xx,E.without=mv,E.words=df,E.wrap=f0,E.xor=_v,E.xorBy=gv,E.xorWith=vv,E.zip=xv,E.zipObject=Mv,E.zipObjectDeep=Sv,E.zipWith=Ev,E.entries=cf,E.entriesIn=uf,E.extend=af,E.extendWith=so,tc(E,E),E.add=xM,E.attempt=pf,E.camelCase=yx,E.capitalize=hf,E.ceil=MM,E.clamp=Mx,E.clone=p0,E.cloneDeep=_0,E.cloneDeepWith=g0,E.cloneWith=m0,E.conformsTo=v0,E.deburr=ff,E.defaultTo=jx,E.divide=SM,E.endsWith=Tx,E.eq=oi,E.escape=Ax,E.escapeRegExp=bx,E.every=Iv,E.find=Nv,E.findIndex=Fh,E.findKey=Z0,E.findLast=Fv,E.findLastIndex=Oh,E.findLastKey=K0,E.floor=EM,E.forEach=Wh,E.forEachRight=kh,E.forIn=$0,E.forInRight=J0,E.forOwn=j0,E.forOwnRight=Q0,E.get=Kl,E.gt=x0,E.gte=M0,E.has=nx,E.hasIn=$l,E.head=Bh,E.identity=Ln,E.includes=Hv,E.indexOf=Fg,E.inRange=Sx,E.invoke=sx,E.isArguments=Sr,E.isArray=ie,E.isArrayBuffer=S0,E.isArrayLike=Cn,E.isArrayLikeObject=qe,E.isBoolean=E0,E.isBuffer=Qi,E.isDate=y0,E.isElement=T0,E.isEmpty=A0,E.isEqual=b0,E.isEqualWith=w0,E.isError=Yl,E.isFinite=R0,E.isFunction=Di,E.isInteger=jh,E.isLength=io,E.isMap=Qh,E.isMatch=C0,E.isMatchWith=P0,E.isNaN=L0,E.isNative=D0,E.isNil=U0,E.isNull=I0,E.isNumber=tf,E.isObject=Ve,E.isObjectLike=We,E.isPlainObject=ea,E.isRegExp=Zl,E.isSafeInteger=N0,E.isSet=ef,E.isString=ro,E.isSymbol=zn,E.isTypedArray=is,E.isUndefined=F0,E.isWeakMap=O0,E.isWeakSet=z0,E.join=Hg,E.kebabCase=wx,E.last=jn,E.lastIndexOf=Vg,E.lowerCase=Rx,E.lowerFirst=Cx,E.lt=B0,E.lte=G0,E.max=yM,E.maxBy=TM,E.mean=AM,E.meanBy=bM,E.min=wM,E.minBy=RM,E.stubArray=nc,E.stubFalse=ic,E.stubObject=dM,E.stubString=pM,E.stubTrue=mM,E.multiply=CM,E.nth=Wg,E.noConflict=sM,E.noop=ec,E.now=to,E.pad=Px,E.padEnd=Lx,E.padStart=Dx,E.parseInt=Ix,E.random=Ex,E.reduce=qv,E.reduceRight=Yv,E.repeat=Ux,E.replace=Nx,E.result=fx,E.round=PM,E.runInContext=z,E.sample=Kv,E.size=jv,E.snakeCase=Fx,E.some=Qv,E.sortedIndex=$g,E.sortedIndexBy=Jg,E.sortedIndexOf=jg,E.sortedLastIndex=Qg,E.sortedLastIndexBy=tv,E.sortedLastIndexOf=ev,E.startCase=zx,E.startsWith=Bx,E.subtract=LM,E.sum=DM,E.sumBy=IM,E.template=Gx,E.times=_M,E.toFinite=Ii,E.toInteger=oe,E.toLength=rf,E.toLower=Hx,E.toNumber=Qn,E.toSafeInteger=H0,E.toString=Ae,E.toUpper=Vx,E.trim=Wx,E.trimEnd=kx,E.trimStart=Xx,E.truncate=qx,E.unescape=Yx,E.uniqueId=vM,E.upperCase=Zx,E.upperFirst=Jl,E.each=Wh,E.eachRight=kh,E.first=Bh,tc(E,function(){var n={};return xi(E,function(r,l){Re.call(E.prototype,l)||(n[l]=r)}),n}(),{chain:!1}),E.VERSION=i,Yn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){E[n].placeholder=E}),Yn(["drop","take"],function(n,r){_e.prototype[n]=function(l){l=l===e?1:nn(oe(l),0);var f=this.__filtered__&&!r?new _e(this):this.clone();return f.__filtered__?f.__takeCount__=pn(l,f.__takeCount__):f.__views__.push({size:pn(l,ot),type:n+(f.__dir__<0?"Right":"")}),f},_e.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),Yn(["filter","map","takeWhile"],function(n,r){var l=r+1,f=l==B||l==j;_e.prototype[n]=function(M){var w=this.clone();return w.__iteratees__.push({iteratee:Ht(M,3),type:l}),w.__filtered__=w.__filtered__||f,w}}),Yn(["head","last"],function(n,r){var l="take"+(r?"Right":"");_e.prototype[n]=function(){return this[l](1).value()[0]}}),Yn(["initial","tail"],function(n,r){var l="drop"+(r?"":"Right");_e.prototype[n]=function(){return this.__filtered__?new _e(this):this[l](1)}}),_e.prototype.compact=function(){return this.filter(Ln)},_e.prototype.find=function(n){return this.filter(n).head()},_e.prototype.findLast=function(n){return this.reverse().find(n)},_e.prototype.invokeMap=he(function(n,r){return typeof n=="function"?new _e(this):this.map(function(l){return Ks(l,n,r)})}),_e.prototype.reject=function(n){return this.filter(no(Ht(n)))},_e.prototype.slice=function(n,r){n=oe(n);var l=this;return l.__filtered__&&(n>0||r<0)?new _e(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),r!==e&&(r=oe(r),l=r<0?l.dropRight(-r):l.take(r-n)),l)},_e.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},_e.prototype.toArray=function(){return this.take(ot)},xi(_e.prototype,function(n,r){var l=/^(?:filter|find|map|reject)|While$/.test(r),f=/^(?:head|last)$/.test(r),M=E[f?"take"+(r=="last"?"Right":""):r],w=f||/^find/.test(r);M&&(E.prototype[r]=function(){var D=this.__wrapped__,F=f?[1]:arguments,G=D instanceof _e,nt=F[0],it=G||ie(D),at=function(pe){var ve=M.apply(E,qi([pe],F));return f&&Mt?ve[0]:ve};it&&l&&typeof nt=="function"&&nt.length!=1&&(G=it=!1);var Mt=this.__chain__,It=!!this.__actions__.length,kt=w&&!Mt,ce=G&&!It;if(!w&&it){D=ce?D:new _e(this);var Xt=n.apply(D,F);return Xt.__actions__.push({func:ja,args:[at],thisArg:e}),new Kn(Xt,Mt)}return kt&&ce?n.apply(this,F):(Xt=this.thru(at),kt?f?Xt.value()[0]:Xt.value():Xt)})}),Yn(["pop","push","shift","sort","splice","unshift"],function(n){var r=Ta[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);E.prototype[n]=function(){var M=arguments;if(f&&!this.__chain__){var w=this.value();return r.apply(ie(w)?w:[],M)}return this[l](function(D){return r.apply(ie(D)?D:[],M)})}}),xi(_e.prototype,function(n,r){var l=E[r];if(l){var f=l.name+"";Re.call(jr,f)||(jr[f]=[]),jr[f].push({name:r,func:l})}}),jr[Xa(e,_).name]=[{name:"wrapper",func:e}],_e.prototype.clone=Ym,_e.prototype.reverse=Zm,_e.prototype.value=Km,E.prototype.at=Tv,E.prototype.chain=Av,E.prototype.commit=bv,E.prototype.next=wv,E.prototype.plant=Cv,E.prototype.reverse=Pv,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=Lv,E.prototype.first=E.prototype.head,Vs&&(E.prototype[Vs]=Rv),E},Kr=bm();dr?((dr.exports=Kr)._=Kr,Qo._=Kr):ln._=Kr}).call(la)})(Ho,Ho.exports);var ep=Ho.exports;const Aw={id:"renderer",class:"relative text-white"},bw={class:"absolute flex flex-col"},ww={key:0},Uw={__name:"Renderer",setup(s){const{cameraMode:t,rotateMatrix:e,rotateMatrixView:i,wRotationMode:a,axisView:o,alphaView:u}=Np();return(c,h)=>(br(),wr("div",Aw,[tr("div",bw,[tr("div",null,[tr("button",{onClick:h[0]||(h[0]=d=>Dn(t).switch()),class:"border rounded p-1 m-1"}," Camera: "+ss(Dn(t).value?"ortho":"persp"),1),tr("button",{onClick:h[1]||(h[1]=d=>Dn(a).switch()),class:"border rounded p-1 m-1"}," W-Rotate: "+ss(Dn(a).value?"on":"off"),1),tr("button",{onClick:h[2]||(h[2]=d=>Dn(i).switch()),class:"border rounded p-1 m-1"}," Matrix: "+ss(Dn(i).value?"on":"off"),1),tr("button",{onClick:h[3]||(h[3]=d=>Dn(o).switch()),class:"border rounded p-1 m-1"}," Axis: "+ss(Dn(o).value?"on":"off"),1),tr("button",{onClick:h[4]||(h[4]=d=>Dn(u).switch()),class:"border rounded p-1 m-1"}," Alpha: "+ss(Dn(u).value?"on":"off"),1)]),Dn(i).value?(br(),wr("div",ww,[tr("table",null,[(br(!0),wr(gf,null,vf(Dn(ep.range)(4),d=>(br(),wr("tr",null,[(br(!0),wr(gf,null,vf(Dn(ep.range)(4),p=>(br(),wr("td",null,ss(Dn(e).elements[4*d+p].toFixed(2))+"  ",1))),256))]))),256))])])):BM("",!0)]),GM(Tw,{class:"h-full w-full m-auto bg-stone-800"})]))}};export{Pw as H,Lo as L,Np as S,Iw as T,Ze as V,Uw as _,Lw as a,Dw as b};
