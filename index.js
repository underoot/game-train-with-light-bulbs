const ql=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}};ql();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qr="141",Xl=0,da=1,jl=2,$o=1,Yl=2,Wi=3,xi=0,Rt=1,Gn=2,Kl=1,Mn=0,gi=1,fa=2,pa=3,ma=4,Zl=5,pi=100,$l=101,Jl=102,ga=103,_a=104,Ql=200,ec=201,tc=202,nc=203,Jo=204,Qo=205,ic=206,sc=207,rc=208,ac=209,oc=210,lc=0,cc=1,uc=2,Cr=3,hc=4,dc=5,fc=6,pc=7,Us=0,mc=1,gc=2,on=0,_c=1,xc=2,vc=3,yc=4,Mc=5,el=300,vi=301,yi=302,Rr=303,Dr=304,zs=306,Mi=1e3,Mt=1001,Ns=1002,Qe=1003,Pr=1004,Ir=1005,ft=1006,tl=1007,Ai=1008,Hn=1009,Sc=1010,bc=1011,nl=1012,wc=1013,On=1014,yn=1015,Yi=1016,Tc=1017,Ec=1018,_i=1020,Ac=1021,Lc=1022,St=1023,Cc=1024,Rc=1025,kn=1026,Si=1027,Dc=1028,Pc=1029,Ic=1030,Fc=1031,Nc=1033,Xs=33776,js=33777,Ys=33778,Ks=33779,xa=35840,va=35841,ya=35842,Ma=35843,Oc=36196,Sa=37492,ba=37496,wa=37808,Ta=37809,Ea=37810,Aa=37811,La=37812,Ca=37813,Ra=37814,Da=37815,Pa=37816,Ia=37817,Fa=37818,Na=37819,Oa=37820,Ua=37821,za=36492,Ki=2300,bi=2301,Zs=2302,ka=2400,Ba=2401,Va=2402,Uc=2500,zc=2501,kc=1,il=2,Wn=3e3,Ie=3001,Bc=3200,Vc=3201,jn=0,Gc=1,rn="srgb",Un="srgb-linear",$s=7680,Hc=519,Fr=35044,Ga="300 es",Nr=1035;class Yn{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=[];for(let a=0;a<256;a++)Je[a]=(a<16?"0":"")+a.toString(16);let Ha=1234567;const Xi=Math.PI/180,Zi=180/Math.PI;function Dt(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[a&255]+Je[a>>8&255]+Je[a>>16&255]+Je[a>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[n&63|128]+Je[n>>8&255]+"-"+Je[n>>16&255]+Je[n>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function ot(a,t,n){return Math.max(t,Math.min(n,a))}function Xr(a,t){return(a%t+t)%t}function Wc(a,t,n,i,s){return i+(a-t)*(s-i)/(n-t)}function qc(a,t,n){return a!==t?(n-a)/(t-a):0}function ji(a,t,n){return(1-n)*a+n*t}function Xc(a,t,n,i){return ji(a,t,1-Math.exp(-n*i))}function jc(a,t=1){return t-Math.abs(Xr(a,t*2)-t)}function Yc(a,t,n){return a<=t?0:a>=n?1:(a=(a-t)/(n-t),a*a*(3-2*a))}function Kc(a,t,n){return a<=t?0:a>=n?1:(a=(a-t)/(n-t),a*a*a*(a*(a*6-15)+10))}function Zc(a,t){return a+Math.floor(Math.random()*(t-a+1))}function $c(a,t){return a+Math.random()*(t-a)}function Jc(a){return a*(.5-Math.random())}function Qc(a){a!==void 0&&(Ha=a);let t=Ha+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eu(a){return a*Xi}function tu(a){return a*Zi}function Or(a){return(a&a-1)===0&&a!==0}function sl(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Os(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function nu(a,t,n,i,s){const r=Math.cos,o=Math.sin,l=r(n/2),c=o(n/2),u=r((t+i)/2),d=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),g=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":a.set(l*d,c*h,c*f,l*u);break;case"YZY":a.set(c*f,l*d,c*h,l*u);break;case"ZXZ":a.set(c*h,c*f,l*d,l*u);break;case"XZX":a.set(l*d,c*_,c*g,l*u);break;case"YXY":a.set(c*g,l*d,c*_,l*u);break;case"ZYZ":a.set(c*_,c*g,l*d,l*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function iu(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function su(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var ru=Object.freeze({__proto__:null,DEG2RAD:Xi,RAD2DEG:Zi,generateUUID:Dt,clamp:ot,euclideanModulo:Xr,mapLinear:Wc,inverseLerp:qc,lerp:ji,damp:Xc,pingpong:jc,smoothstep:Yc,smootherstep:Kc,randInt:Zc,randFloat:$c,randFloatSpread:Jc,seededRandom:Qc,degToRad:eu,radToDeg:tu,isPowerOfTwo:Or,ceilPowerOfTwo:sl,floorPowerOfTwo:Os,setQuaternionFromProperEuler:nu,normalize:su,denormalize:iu});class Ae{constructor(t=0,n=0){this.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,n){return n!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t,n){return n!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,n,i,s,r,o,l,c,u){const d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=n,d[4]=r,d[5]=c,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],l=i[3],c=i[6],u=i[1],d=i[4],h=i[7],f=i[2],g=i[5],_=i[8],m=s[0],p=s[3],x=s[6],S=s[1],E=s[4],T=s[7],b=s[2],C=s[5],P=s[8];return r[0]=o*m+l*S+c*b,r[3]=o*p+l*E+c*C,r[6]=o*x+l*T+c*P,r[1]=u*m+d*S+h*b,r[4]=u*p+d*E+h*C,r[7]=u*x+d*T+h*P,r[2]=f*m+g*S+_*b,r[5]=f*p+g*E+_*C,r[8]=f*x+g*T+_*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],u=t[7],d=t[8];return n*o*d-n*l*u-i*r*d+i*l*c+s*r*u-s*o*c}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],u=t[7],d=t[8],h=d*o-l*u,f=l*c-d*r,g=u*r-o*c,_=n*h+i*f+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return t[0]=h*m,t[1]=(s*u-d*i)*m,t[2]=(l*i-s*o)*m,t[3]=f*m,t[4]=(d*n-s*c)*m,t[5]=(s*r-l*n)*m,t[6]=g*m,t[7]=(i*c-u*n)*m,t[8]=(o*n-i*r)*m,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,l){const c=Math.cos(r),u=Math.sin(r);return this.set(i*c,i*u,-i*(c*o+u*l)+o+t,-s*u,s*c,-s*(-u*o+c*l)+l+n,0,0,1),this}scale(t,n){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(t){const n=Math.cos(t),i=Math.sin(t),s=this.elements,r=s[0],o=s[3],l=s[6],c=s[1],u=s[4],d=s[7];return s[0]=n*r+i*c,s[3]=n*o+i*u,s[6]=n*l+i*d,s[1]=-i*r+n*c,s[4]=-i*o+n*u,s[7]=-i*l+n*d,this}translate(t,n){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function rl(a){for(let t=a.length-1;t>=0;--t)if(a[t]>65535)return!0;return!1}function $i(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Bn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ds(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Js={[rn]:{[Un]:Bn},[Un]:{[rn]:Ds}},Tt={legacyMode:!0,get workingColorSpace(){return Un},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,n){if(this.legacyMode||t===n||!t||!n)return a;if(Js[t]&&Js[t][n]!==void 0){const i=Js[t][n];return a.r=i(a.r),a.g=i(a.g),a.b=i(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}},al={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ke={r:0,g:0,b:0},Et={h:0,s:0,l:0},os={h:0,s:0,l:0};function Qs(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}function ls(a,t){return t.r=a.r,t.g=a.g,t.b=a.b,t}class he{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(t):this.setRGB(t,n,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=Un){return this.r=t,this.g=n,this.b=i,Tt.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=Un){if(t=Xr(t,1),n=ot(n,0,1),i=ot(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Qs(o,r,t+1/3),this.g=Qs(o,r,t),this.b=Qs(o,r,t-1/3)}return Tt.toWorkingColorSpace(this,s),this}setStyle(t,n=rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Tt.toWorkingColorSpace(this,n),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Tt.toWorkingColorSpace(this,n),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const c=parseFloat(r[1])/360,u=parseInt(r[2],10)/100,d=parseInt(r[3],10)/100;return i(r[4]),this.setHSL(c,u,d,n)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Tt.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Tt.toWorkingColorSpace(this,n),this}return t&&t.length>0?this.setColorName(t,n):this}setColorName(t,n=rn){const i=al[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return Tt.fromWorkingColorSpace(ls(this,Ke),t),ot(Ke.r*255,0,255)<<16^ot(Ke.g*255,0,255)<<8^ot(Ke.b*255,0,255)<<0}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Un){Tt.fromWorkingColorSpace(ls(this,Ke),n);const i=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(i,s,r),l=Math.min(i,s,r);let c,u;const d=(l+o)/2;if(l===o)c=0,u=0;else{const h=o-l;switch(u=d<=.5?h/(o+l):h/(2-o-l),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=u,t.l=d,t}getRGB(t,n=Un){return Tt.fromWorkingColorSpace(ls(this,Ke),n),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=rn){return Tt.fromWorkingColorSpace(ls(this,Ke),t),t!==rn?`color(${t} ${Ke.r} ${Ke.g} ${Ke.b})`:`rgb(${Ke.r*255|0},${Ke.g*255|0},${Ke.b*255|0})`}offsetHSL(t,n,i){return this.getHSL(Et),Et.h+=t,Et.s+=n,Et.l+=i,this.setHSL(Et.h,Et.s,Et.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Et),t.getHSL(os);const i=ji(Et.h,os.h,n),s=ji(Et.s,os.s,n),r=ji(Et.l,os.l,n);return this.setHSL(i,s,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}he.NAMES=al;let Jn;class ol{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Jn===void 0&&(Jn=$i("canvas")),Jn.width=t.width,Jn.height=t.height;const i=Jn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Jn}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const n=$i("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bn(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bn(n[i]/255)*255):n[i]=Bn(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class ll{constructor(t=null){this.isSource=!0,this.uuid=Dt(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(er(s[o].image)):r.push(er(s[o]))}else r=er(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function er(a){return typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&a instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&a instanceof ImageBitmap?ol.getDataURL(a):a.data?{data:Array.prototype.slice.call(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let au=0;class ct extends Yn{constructor(t=ct.DEFAULT_IMAGE,n=ct.DEFAULT_MAPPING,i=Mt,s=Mt,r=ft,o=Ai,l=St,c=Hn,u=1,d=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Dt(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==el)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case Mt:t.x=t.x<0?0:1;break;case Ns:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case Mt:t.y=t.y<0?0:1;break;case Ns:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ct.DEFAULT_IMAGE=null;ct.DEFAULT_MAPPING=el;class Ve{constructor(t=0,n=0,i=0,s=1){this.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,n){return n!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t,n){return n!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const c=t.elements,u=c[0],d=c[4],h=c[8],f=c[1],g=c[5],_=c[9],m=c[2],p=c[6],x=c[10];if(Math.abs(d-f)<.01&&Math.abs(h-m)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+m)<.1&&Math.abs(_+p)<.1&&Math.abs(u+g+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(u+1)/2,T=(g+1)/2,b=(x+1)/2,C=(d+f)/4,P=(h+m)/4,y=(_+p)/4;return E>T&&E>b?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=C/i,r=P/i):T>b?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=C/s,r=y/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=P/r,s=y/r),this.set(i,s,r,n),this}let S=Math.sqrt((p-_)*(p-_)+(h-m)*(h-m)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-m)/S,this.z=(f-d)/S,this.w=Math.acos((u+g+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sn extends Yn{constructor(t,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Ve(0,0,t,n),this.scissorTest=!1,this.viewport=new Ve(0,0,t,n);const s={width:t,height:n,depth:1};this.texture=new ct(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ft,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,n,i=1){(this.width!==t||this.height!==n||this.depth!==i)&&(this.width=t,this.height=n,this.depth=i,this.texture.image.width=t,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new ll(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cl extends ct{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ou extends ct{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pt{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerp(t,n,i,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(t,n,s)}static slerpFlat(t,n,i,s,r,o,l){let c=i[s+0],u=i[s+1],d=i[s+2],h=i[s+3];const f=r[o+0],g=r[o+1],_=r[o+2],m=r[o+3];if(l===0){t[n+0]=c,t[n+1]=u,t[n+2]=d,t[n+3]=h;return}if(l===1){t[n+0]=f,t[n+1]=g,t[n+2]=_,t[n+3]=m;return}if(h!==m||c!==f||u!==g||d!==_){let p=1-l;const x=c*f+u*g+d*_+h*m,S=x>=0?1:-1,E=1-x*x;if(E>Number.EPSILON){const b=Math.sqrt(E),C=Math.atan2(b,x*S);p=Math.sin(p*C)/b,l=Math.sin(l*C)/b}const T=l*S;if(c=c*p+f*T,u=u*p+g*T,d=d*p+_*T,h=h*p+m*T,p===1-l){const b=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=b,u*=b,d*=b,h*=b}}t[n]=c,t[n+1]=u,t[n+2]=d,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,s,r,o){const l=i[s],c=i[s+1],u=i[s+2],d=i[s+3],h=r[o],f=r[o+1],g=r[o+2],_=r[o+3];return t[n]=l*_+d*h+c*g-u*f,t[n+1]=c*_+d*f+u*h-l*g,t[n+2]=u*_+d*g+l*f-c*h,t[n+3]=d*_-l*h-c*f-u*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=t._x,s=t._y,r=t._z,o=t._order,l=Math.cos,c=Math.sin,u=l(i/2),d=l(s/2),h=l(r/2),f=c(i/2),g=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*d*h+u*g*_,this._y=u*g*h-f*d*_,this._z=u*d*_+f*g*h,this._w=u*d*h-f*g*_;break;case"YXZ":this._x=f*d*h+u*g*_,this._y=u*g*h-f*d*_,this._z=u*d*_-f*g*h,this._w=u*d*h+f*g*_;break;case"ZXY":this._x=f*d*h-u*g*_,this._y=u*g*h+f*d*_,this._z=u*d*_+f*g*h,this._w=u*d*h-f*g*_;break;case"ZYX":this._x=f*d*h-u*g*_,this._y=u*g*h+f*d*_,this._z=u*d*_-f*g*h,this._w=u*d*h+f*g*_;break;case"YZX":this._x=f*d*h+u*g*_,this._y=u*g*h+f*d*_,this._z=u*d*_-f*g*h,this._w=u*d*h-f*g*_;break;case"XZY":this._x=f*d*h-u*g*_,this._y=u*g*h-f*d*_,this._z=u*d*_+f*g*h,this._w=u*d*h+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],l=n[5],c=n[9],u=n[2],d=n[6],h=n[10],f=i+l+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-c)*g,this._y=(r-u)*g,this._z=(o-s)*g}else if(i>l&&i>h){const g=2*Math.sqrt(1+i-l-h);this._w=(d-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+u)/g}else if(l>h){const g=2*Math.sqrt(1+l-i-h);this._w=(r-u)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+d)/g}else{const g=2*Math.sqrt(1+h-i-l);this._w=(o-s)/g,this._x=(r+u)/g,this._y=(c+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ot(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,n){return n!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,n)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,o=t._w,l=n._x,c=n._y,u=n._z,d=n._w;return this._x=i*d+o*l+s*u-r*c,this._y=s*d+o*c+r*l-i*u,this._z=r*d+o*u+i*c-s*l,this._w=o*d-i*l-s*c-r*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let l=o*t._w+i*t._x+s*t._y+r*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-l*l;if(c<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*s+n*this._y,this._z=g*r+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),d=Math.atan2(u,l),h=Math.sin((1-n)*d)/u,f=Math.sin(n*d)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=Math.random(),n=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(n*Math.cos(s),i*Math.sin(r),i*Math.cos(r),n*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,n=0,i=0){this.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,n){return n!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,n)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t,n){return n!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,n)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t,n){return n!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,n)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Wa.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Wa.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,l=t.z,c=t.w,u=c*n+o*s-l*i,d=c*i+l*n-r*s,h=c*s+r*i-o*n,f=-r*n-o*i-l*s;return this.x=u*c+f*-r+d*-l-h*-o,this.y=d*c+f*-o+h*-r-u*-l,this.z=h*c+f*-l+u*-o-d*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t,n){return n!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,n)):this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,o=n.x,l=n.y,c=n.z;return this.x=s*c-r*l,this.y=r*o-i*c,this.z=i*l-s*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return tr.copy(this).projectOnVector(t),this.sub(tr)}reflect(t){return this.sub(tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(ot(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tr=new R,Wa=new Pt;class Li{constructor(t=new R(1/0,1/0,1/0),n=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){let n=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,l=-1/0;for(let c=0,u=t.length;c<u;c+=3){const d=t[c],h=t[c+1],f=t[c+2];d<n&&(n=d),h<i&&(i=h),f<s&&(s=f),d>r&&(r=d),h>o&&(o=h),f>l&&(l=f)}return this.min.set(n,i,s),this.max.set(r,o,l),this}setFromBufferAttribute(t){let n=1/0,i=1/0,s=1/0,r=-1/0,o=-1/0,l=-1/0;for(let c=0,u=t.count;c<u;c++){const d=t.getX(c),h=t.getY(c),f=t.getZ(c);d<n&&(n=d),h<i&&(i=h),f<s&&(s=f),d>r&&(r=d),h>o&&(o=h),f>l&&(l=f)}return this.min.set(n,i,s),this.max.set(r,o,l),this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,l=r.count;o<l;o++)Tn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Tn)}else i.boundingBox===null&&i.computeBoundingBox(),nr.copy(i.boundingBox),nr.applyMatrix4(t.matrixWorld),this.union(nr);const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),cs.subVectors(this.max,Ui),Qn.subVectors(t.a,Ui),ei.subVectors(t.b,Ui),ti.subVectors(t.c,Ui),un.subVectors(ei,Qn),hn.subVectors(ti,ei),En.subVectors(Qn,ti);let n=[0,-un.z,un.y,0,-hn.z,hn.y,0,-En.z,En.y,un.z,0,-un.x,hn.z,0,-hn.x,En.z,0,-En.x,-un.y,un.x,0,-hn.y,hn.x,0,-En.y,En.x,0];return!ir(n,Qn,ei,ti,cs)||(n=[1,0,0,0,1,0,0,0,1],!ir(n,Qn,ei,ti,cs))?!1:(us.crossVectors(un,hn),n=[us.x,us.y,us.z],ir(n,Qn,ei,ti,cs))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Tn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zt),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zt=[new R,new R,new R,new R,new R,new R,new R,new R],Tn=new R,nr=new Li,Qn=new R,ei=new R,ti=new R,un=new R,hn=new R,En=new R,Ui=new R,cs=new R,us=new R,An=new R;function ir(a,t,n,i,s){for(let r=0,o=a.length-3;r<=o;r+=3){An.fromArray(a,r);const l=s.x*Math.abs(An.x)+s.y*Math.abs(An.y)+s.z*Math.abs(An.z),c=t.dot(An),u=n.dot(An),d=i.dot(An);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>l)return!1}return!0}const lu=new Li,qa=new R,hs=new R,sr=new R;class Ci{constructor(t=new R,n=-1){this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):lu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){sr.subVectors(t,this.center);const n=sr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.add(sr.multiplyScalar(s/i)),this.radius+=s}return this}union(t){return this.center.equals(t.center)===!0?hs.set(0,0,1).multiplyScalar(t.radius):hs.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(qa.copy(t.center).add(hs)),this.expandByPoint(qa.copy(t.center).sub(hs)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new R,rr=new R,ds=new R,dn=new R,ar=new R,fs=new R,or=new R;class jr{constructor(t=new R,n=new R(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$t)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=$t.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):($t.copy(this.direction).multiplyScalar(n).add(this.origin),$t.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){rr.copy(t).add(n).multiplyScalar(.5),ds.copy(n).sub(t).normalize(),dn.copy(this.origin).sub(rr);const r=t.distanceTo(n)*.5,o=-this.direction.dot(ds),l=dn.dot(this.direction),c=-dn.dot(ds),u=dn.lengthSq(),d=Math.abs(1-o*o);let h,f,g,_;if(d>0)if(h=o*c-l,f=o*l-c,_=r*d,h>=0)if(f>=-_)if(f<=_){const m=1/d;h*=m,f*=m,g=h*(h+o*f+2*l)+f*(o*h+f+2*c)+u}else f=r,h=Math.max(0,-(o*f+l)),g=-h*h+f*(f+2*c)+u;else f=-r,h=Math.max(0,-(o*f+l)),g=-h*h+f*(f+2*c)+u;else f<=-_?(h=Math.max(0,-(-o*r+l)),f=h>0?-r:Math.min(Math.max(-r,-c),r),g=-h*h+f*(f+2*c)+u):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),g=f*(f+2*c)+u):(h=Math.max(0,-(o*r+l)),f=h>0?r:Math.min(Math.max(-r,-c),r),g=-h*h+f*(f+2*c)+u);else f=o>0?-r:r,h=Math.max(0,-(o*f+l)),g=-h*h+f*(f+2*c)+u;return i&&i.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(ds).multiplyScalar(f).add(rr),g}intersectSphere(t,n){$t.subVectors(t.center,this.origin);const i=$t.dot(this.direction),s=$t.dot($t)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),l=i-o,c=i+o;return l<0&&c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,l,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),d>=0?(r=(t.min.y-f.y)*d,o=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,o=(t.min.y-f.y)*d),i>o||r>s||((r>i||i!==i)&&(i=r),(o<s||s!==s)&&(s=o),h>=0?(l=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(l=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,$t)!==null}intersectTriangle(t,n,i,s,r){ar.subVectors(n,t),fs.subVectors(i,t),or.crossVectors(ar,fs);let o=this.direction.dot(or),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;dn.subVectors(this.origin,t);const c=l*this.direction.dot(fs.crossVectors(dn,fs));if(c<0)return null;const u=l*this.direction.dot(ar.cross(dn));if(u<0||c+u>o)return null;const d=-l*dn.dot(or);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,n,i,s,r,o,l,c,u,d,h,f,g,_,m,p){const x=this.elements;return x[0]=t,x[4]=n,x[8]=i,x[12]=s,x[1]=r,x[5]=o,x[9]=l,x[13]=c,x[2]=u,x[6]=d,x[10]=h,x[14]=f,x[3]=g,x[7]=_,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,s=1/ni.setFromMatrixColumn(t,0).length(),r=1/ni.setFromMatrixColumn(t,1).length(),o=1/ni.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*d,g=o*h,_=l*d,m=l*h;n[0]=c*d,n[4]=-c*h,n[8]=u,n[1]=g+_*u,n[5]=f-m*u,n[9]=-l*c,n[2]=m-f*u,n[6]=_+g*u,n[10]=o*c}else if(t.order==="YXZ"){const f=c*d,g=c*h,_=u*d,m=u*h;n[0]=f+m*l,n[4]=_*l-g,n[8]=o*u,n[1]=o*h,n[5]=o*d,n[9]=-l,n[2]=g*l-_,n[6]=m+f*l,n[10]=o*c}else if(t.order==="ZXY"){const f=c*d,g=c*h,_=u*d,m=u*h;n[0]=f-m*l,n[4]=-o*h,n[8]=_+g*l,n[1]=g+_*l,n[5]=o*d,n[9]=m-f*l,n[2]=-o*u,n[6]=l,n[10]=o*c}else if(t.order==="ZYX"){const f=o*d,g=o*h,_=l*d,m=l*h;n[0]=c*d,n[4]=_*u-g,n[8]=f*u+m,n[1]=c*h,n[5]=m*u+f,n[9]=g*u-_,n[2]=-u,n[6]=l*c,n[10]=o*c}else if(t.order==="YZX"){const f=o*c,g=o*u,_=l*c,m=l*u;n[0]=c*d,n[4]=m-f*h,n[8]=_*h+g,n[1]=h,n[5]=o*d,n[9]=-l*d,n[2]=-u*d,n[6]=g*h+_,n[10]=f-m*h}else if(t.order==="XZY"){const f=o*c,g=o*u,_=l*c,m=l*u;n[0]=c*d,n[4]=-h,n[8]=u*d,n[1]=f*h+m,n[5]=o*d,n[9]=g*h-_,n[2]=_*h-g,n[6]=l*d,n[10]=m*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cu,t,uu)}lookAt(t,n,i){const s=this.elements;return mt.subVectors(t,n),mt.lengthSq()===0&&(mt.z=1),mt.normalize(),fn.crossVectors(i,mt),fn.lengthSq()===0&&(Math.abs(i.z)===1?mt.x+=1e-4:mt.z+=1e-4,mt.normalize(),fn.crossVectors(i,mt)),fn.normalize(),ps.crossVectors(mt,fn),s[0]=fn.x,s[4]=ps.x,s[8]=mt.x,s[1]=fn.y,s[5]=ps.y,s[9]=mt.y,s[2]=fn.z,s[6]=ps.z,s[10]=mt.z,this}multiply(t,n){return n!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,n)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],l=i[4],c=i[8],u=i[12],d=i[1],h=i[5],f=i[9],g=i[13],_=i[2],m=i[6],p=i[10],x=i[14],S=i[3],E=i[7],T=i[11],b=i[15],C=s[0],P=s[4],y=s[8],A=s[12],U=s[1],F=s[5],ne=s[9],Y=s[13],D=s[2],V=s[6],k=s[10],q=s[14],X=s[3],B=s[7],j=s[11],Q=s[15];return r[0]=o*C+l*U+c*D+u*X,r[4]=o*P+l*F+c*V+u*B,r[8]=o*y+l*ne+c*k+u*j,r[12]=o*A+l*Y+c*q+u*Q,r[1]=d*C+h*U+f*D+g*X,r[5]=d*P+h*F+f*V+g*B,r[9]=d*y+h*ne+f*k+g*j,r[13]=d*A+h*Y+f*q+g*Q,r[2]=_*C+m*U+p*D+x*X,r[6]=_*P+m*F+p*V+x*B,r[10]=_*y+m*ne+p*k+x*j,r[14]=_*A+m*Y+p*q+x*Q,r[3]=S*C+E*U+T*D+b*X,r[7]=S*P+E*F+T*V+b*B,r[11]=S*y+E*ne+T*k+b*j,r[15]=S*A+E*Y+T*q+b*Q,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],l=t[5],c=t[9],u=t[13],d=t[2],h=t[6],f=t[10],g=t[14],_=t[3],m=t[7],p=t[11],x=t[15];return _*(+r*c*h-s*u*h-r*l*f+i*u*f+s*l*g-i*c*g)+m*(+n*c*g-n*u*f+r*o*f-s*o*g+s*u*d-r*c*d)+p*(+n*u*h-n*l*g-r*o*h+i*o*g+r*l*d-i*u*d)+x*(-s*l*d-n*c*h+n*l*f+s*o*h-i*o*f+i*c*d)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],l=t[5],c=t[6],u=t[7],d=t[8],h=t[9],f=t[10],g=t[11],_=t[12],m=t[13],p=t[14],x=t[15],S=h*p*u-m*f*u+m*c*g-l*p*g-h*c*x+l*f*x,E=_*f*u-d*p*u-_*c*g+o*p*g+d*c*x-o*f*x,T=d*m*u-_*h*u+_*l*g-o*m*g-d*l*x+o*h*x,b=_*h*c-d*m*c-_*l*f+o*m*f+d*l*p-o*h*p,C=n*S+i*E+s*T+r*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=S*P,t[1]=(m*f*r-h*p*r-m*s*g+i*p*g+h*s*x-i*f*x)*P,t[2]=(l*p*r-m*c*r+m*s*u-i*p*u-l*s*x+i*c*x)*P,t[3]=(h*c*r-l*f*r-h*s*u+i*f*u+l*s*g-i*c*g)*P,t[4]=E*P,t[5]=(d*p*r-_*f*r+_*s*g-n*p*g-d*s*x+n*f*x)*P,t[6]=(_*c*r-o*p*r-_*s*u+n*p*u+o*s*x-n*c*x)*P,t[7]=(o*f*r-d*c*r+d*s*u-n*f*u-o*s*g+n*c*g)*P,t[8]=T*P,t[9]=(_*h*r-d*m*r-_*i*g+n*m*g+d*i*x-n*h*x)*P,t[10]=(o*m*r-_*l*r+_*i*u-n*m*u-o*i*x+n*l*x)*P,t[11]=(d*l*r-o*h*r-d*i*u+n*h*u+o*i*g-n*l*g)*P,t[12]=b*P,t[13]=(d*m*s-_*h*s+_*i*f-n*m*f-d*i*p+n*h*p)*P,t[14]=(_*l*s-o*m*s-_*i*c+n*m*c+o*i*p-n*l*p)*P,t[15]=(o*h*s-d*l*s+d*i*c-n*h*c-o*i*f+n*l*f)*P,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,l=t.y,c=t.z,u=r*o,d=r*l;return this.set(u*o+i,u*l-s*c,u*c+s*l,0,u*l+s*c,d*l+i,d*c-s*o,0,u*c-s*l,d*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,o=n._y,l=n._z,c=n._w,u=r+r,d=o+o,h=l+l,f=r*u,g=r*d,_=r*h,m=o*d,p=o*h,x=l*h,S=c*u,E=c*d,T=c*h,b=i.x,C=i.y,P=i.z;return s[0]=(1-(m+x))*b,s[1]=(g+T)*b,s[2]=(_-E)*b,s[3]=0,s[4]=(g-T)*C,s[5]=(1-(f+x))*C,s[6]=(p+S)*C,s[7]=0,s[8]=(_+E)*P,s[9]=(p-S)*P,s[10]=(1-(f+m))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;let r=ni.set(s[0],s[1],s[2]).length();const o=ni.set(s[4],s[5],s[6]).length(),l=ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],At.copy(this);const u=1/r,d=1/o,h=1/l;return At.elements[0]*=u,At.elements[1]*=u,At.elements[2]*=u,At.elements[4]*=d,At.elements[5]*=d,At.elements[6]*=d,At.elements[8]*=h,At.elements[9]*=h,At.elements[10]*=h,n.setFromRotationMatrix(At),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const l=this.elements,c=2*r/(n-t),u=2*r/(i-s),d=(n+t)/(n-t),h=(i+s)/(i-s),f=-(o+r)/(o-r),g=-2*o*r/(o-r);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,r,o){const l=this.elements,c=1/(n-t),u=1/(i-s),d=1/(o-r),h=(n+t)*c,f=(i+s)*u,g=(o+r)*d;return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=-2*d,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const ni=new R,At=new De,cu=new R(0,0,0),uu=new R(1,1,1),fn=new R,ps=new R,mt=new R,Xa=new De,ja=new Pt;class Ri{constructor(t=0,n=0,i=0,s=Ri.DefaultOrder){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],l=s[8],c=s[1],u=s[5],d=s[9],h=s[2],f=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Xa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xa,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ja.setFromEuler(this),this.setFromQuaternion(ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ri.DefaultOrder="XYZ";Ri.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ul{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hu=0;const Ya=new R,ii=new Pt,Jt=new De,ms=new R,zi=new R,du=new R,fu=new Pt,Ka=new R(1,0,0),Za=new R(0,1,0),$a=new R(0,0,1),pu={type:"added"},Ja={type:"removed"};class We extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Dt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DefaultUp.clone();const t=new R,n=new Ri,i=new Pt,s=new R(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new qt}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=We.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ii.setFromAxisAngle(t,n),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,n){return ii.setFromAxisAngle(t,n),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(Ka,t)}rotateY(t){return this.rotateOnAxis(Za,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,n){return Ya.copy(t).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ka,t)}translateY(t){return this.translateOnAxis(Za,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?ms.copy(t):ms.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(zi,ms,this.up):Jt.lookAt(ms,zi,this.up),this.quaternion.setFromRotationMatrix(Jt),s&&(Jt.extractRotation(s.matrixWorld),ii.setFromRotationMatrix(Jt),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(pu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Ja)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const n=this.children[t];n.parent=null,n.dispatchEvent(Ja)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jt.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jt),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];s.animations.push(r(t.animations,c))}}if(n){const l=o(t.geometries),c=o(t.materials),u=o(t.textures),d=o(t.images),h=o(t.shapes),f=o(t.skeletons),g=o(t.animations),_=o(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(l){const c=[];for(const u in l){const d=l[u];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}We.DefaultUp=new R(0,1,0);We.DefaultMatrixAutoUpdate=!0;const Lt=new R,Qt=new R,lr=new R,en=new R,si=new R,ri=new R,Qa=new R,cr=new R,ur=new R,hr=new R;class Wt{constructor(t=new R,n=new R,i=new R){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Lt.subVectors(t,n),s.cross(Lt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Lt.subVectors(s,n),Qt.subVectors(i,n),lr.subVectors(t,n);const o=Lt.dot(Lt),l=Lt.dot(Qt),c=Lt.dot(lr),u=Qt.dot(Qt),d=Qt.dot(lr),h=o*u-l*l;if(h===0)return r.set(-2,-1,-1);const f=1/h,g=(u*c-l*d)*f,_=(o*d-l*c)*f;return r.set(1-g-_,_,g)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(t,n,i,s,r,o,l,c){return this.getBarycoord(t,n,i,s,en),c.set(0,0),c.addScaledVector(r,en.x),c.addScaledVector(o,en.y),c.addScaledVector(l,en.z),c}static isFrontFacing(t,n,i,s){return Lt.subVectors(i,n),Qt.subVectors(t,n),Lt.cross(Qt).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Lt.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Lt.cross(Qt).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wt.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Wt.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,i,s,r){return Wt.getUV(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return Wt.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wt.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let o,l;si.subVectors(s,i),ri.subVectors(r,i),cr.subVectors(t,i);const c=si.dot(cr),u=ri.dot(cr);if(c<=0&&u<=0)return n.copy(i);ur.subVectors(t,s);const d=si.dot(ur),h=ri.dot(ur);if(d>=0&&h<=d)return n.copy(s);const f=c*h-d*u;if(f<=0&&c>=0&&d<=0)return o=c/(c-d),n.copy(i).addScaledVector(si,o);hr.subVectors(t,r);const g=si.dot(hr),_=ri.dot(hr);if(_>=0&&g<=_)return n.copy(r);const m=g*u-c*_;if(m<=0&&u>=0&&_<=0)return l=u/(u-_),n.copy(i).addScaledVector(ri,l);const p=d*_-g*h;if(p<=0&&h-d>=0&&g-_>=0)return Qa.subVectors(r,s),l=(h-d)/(h-d+(g-_)),n.copy(s).addScaledVector(Qa,l);const x=1/(p+m+f);return o=m*x,l=f*x,n.copy(i).addScaledVector(si,o).addScaledVector(ri,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let mu=0;class Ye extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Dt(),this.name="",this.type="Material",this.blending=gi,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}if(n==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Kl;continue}const s=this[n];if(s===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(r){const o=[];for(const l in r){const c=r[l];delete c.metadata,o.push(c)}return o}if(n){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(t){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}Ye.fromType=function(){return null};class an extends Ye{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const je=new R,gs=new Ae;class xt{constructor(t,n,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i===!0,this.usage=Fr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const n=this.array;let i=0;for(let s=0,r=t.length;s<r;s++){let o=t[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),o=new he),n[i++]=o.r,n[i++]=o.g,n[i++]=o.b}return this}copyVector2sArray(t){const n=this.array;let i=0;for(let s=0,r=t.length;s<r;s++){let o=t[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),o=new Ae),n[i++]=o.x,n[i++]=o.y}return this}copyVector3sArray(t){const n=this.array;let i=0;for(let s=0,r=t.length;s<r;s++){let o=t[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),o=new R),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z}return this}copyVector4sArray(t){const n=this.array;let i=0;for(let s=0,r=t.length;s<r;s++){let o=t[s];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),o=new Ve),n[i++]=o.x,n[i++]=o.y,n[i++]=o.z,n[i++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)gs.fromBufferAttribute(this,n),gs.applyMatrix3(t),this.setXY(n,gs.x,gs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)je.fromBufferAttribute(this,n),je.applyMatrix3(t),this.setXYZ(n,je.x,je.y,je.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)je.fromBufferAttribute(this,n),je.applyMatrix4(t),this.setXYZ(n,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)je.fromBufferAttribute(this,n),je.applyNormalMatrix(t),this.setXYZ(n,je.x,je.y,je.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)je.fromBufferAttribute(this,n),je.transformDirection(t),this.setXYZ(n,je.x,je.y,je.z);return this}set(t,n=0){return this.array.set(t,n),this}getX(t){return this.array[t*this.itemSize]}setX(t,n){return this.array[t*this.itemSize]=n,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,n){return this.array[t*this.itemSize+1]=n,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,n){return this.array[t*this.itemSize+2]=n,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,n){return this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class hl extends xt{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class dl extends xt{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class bt extends xt{constructor(t,n,i){super(new Float32Array(t),n,i)}}let gu=0;const vt=new De,dr=new We,ai=new R,gt=new Li,ki=new Li,Ze=new R;class It extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Dt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rl(t)?dl:hl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vt.makeRotationFromQuaternion(t),this.applyMatrix4(vt),this}rotateX(t){return vt.makeRotationX(t),this.applyMatrix4(vt),this}rotateY(t){return vt.makeRotationY(t),this.applyMatrix4(vt),this}rotateZ(t){return vt.makeRotationZ(t),this.applyMatrix4(vt),this}translate(t,n,i){return vt.makeTranslation(t,n,i),this.applyMatrix4(vt),this}scale(t,n,i){return vt.makeScale(t,n,i),this.applyMatrix4(vt),this}lookAt(t){return dr.lookAt(t),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const n=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new bt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Li);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];gt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,gt.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,gt.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(gt.min),this.boundingBox.expandByPoint(gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const i=this.boundingSphere.center;if(gt.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];ki.setFromBufferAttribute(l),this.morphTargetsRelative?(Ze.addVectors(gt.min,ki.min),gt.expandByPoint(Ze),Ze.addVectors(gt.max,ki.max),gt.expandByPoint(Ze)):(gt.expandByPoint(ki.min),gt.expandByPoint(ki.max))}gt.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ze));if(n)for(let r=0,o=n.length;r<o;r++){const l=n[r],c=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)Ze.fromBufferAttribute(l,u),c&&(ai.fromBufferAttribute(t,u),Ze.add(ai)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=n.position.array,r=n.normal.array,o=n.uv.array,l=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*l),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let U=0;U<l;U++)u[U]=new R,d[U]=new R;const h=new R,f=new R,g=new R,_=new Ae,m=new Ae,p=new Ae,x=new R,S=new R;function E(U,F,ne){h.fromArray(s,U*3),f.fromArray(s,F*3),g.fromArray(s,ne*3),_.fromArray(o,U*2),m.fromArray(o,F*2),p.fromArray(o,ne*2),f.sub(h),g.sub(h),m.sub(_),p.sub(_);const Y=1/(m.x*p.y-p.x*m.y);!isFinite(Y)||(x.copy(f).multiplyScalar(p.y).addScaledVector(g,-m.y).multiplyScalar(Y),S.copy(g).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(Y),u[U].add(x),u[F].add(x),u[ne].add(x),d[U].add(S),d[F].add(S),d[ne].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let U=0,F=T.length;U<F;++U){const ne=T[U],Y=ne.start,D=ne.count;for(let V=Y,k=Y+D;V<k;V+=3)E(i[V+0],i[V+1],i[V+2])}const b=new R,C=new R,P=new R,y=new R;function A(U){P.fromArray(r,U*3),y.copy(P);const F=u[U];b.copy(F),b.sub(P.multiplyScalar(P.dot(F))).normalize(),C.crossVectors(y,F);const Y=C.dot(d[U])<0?-1:1;c[U*4]=b.x,c[U*4+1]=b.y,c[U*4+2]=b.z,c[U*4+3]=Y}for(let U=0,F=T.length;U<F;++U){const ne=T[U],Y=ne.start,D=ne.count;for(let V=Y,k=Y+D;V<k;V+=3)A(i[V+0]),A(i[V+1]),A(i[V+2])}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,l=new R,c=new R,u=new R,d=new R,h=new R;if(t)for(let f=0,g=t.count;f<g;f+=3){const _=t.getX(f+0),m=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,m),o.fromBufferAttribute(n,p),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),u.fromBufferAttribute(i,p),l.add(d),c.add(d),u.add(d),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,g=n.count;f<g;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(t,n){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}n===void 0&&(n=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const s in i){if(t.attributes[s]===void 0)continue;const o=i[s].array,l=t.attributes[s],c=l.array,u=l.itemSize*n,d=Math.min(c.length,o.length-u);for(let h=0,f=u;h<d;h++,f++)o[f]=c[h]}return this}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ze.fromBufferAttribute(t,n),Ze.normalize(),t.setXYZ(n,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(l,c){const u=l.array,d=l.itemSize,h=l.normalized,f=new u.constructor(c.length*d);let g=0,_=0;for(let m=0,p=c.length;m<p;m++){l.isInterleavedBufferAttribute?g=c[m]*l.data.stride+l.offset:g=c[m]*d;for(let x=0;x<d;x++)f[_++]=u[g++]}return new xt(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new It,i=this.index.array,s=this.attributes;for(const l in s){const c=s[l],u=t(c,i);n.setAttribute(l,u)}const r=this.morphAttributes;for(const l in r){const c=[],u=r[l];for(let d=0,h=u.length;d<h;d++){const f=u[d],g=t(f,i);c.push(g)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,f=u.length;h<f;h++){const g=u[h];d.push(g.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const s=t.attributes;for(const u in s){const d=s[u];this.setAttribute(u,d.clone(n))}const r=t.morphAttributes;for(const u in r){const d=[],h=r[u];for(let f=0,g=h.length;f<g;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const eo=new De,oi=new jr,fr=new Ci,pn=new R,mn=new R,gn=new R,pr=new R,mr=new R,gr=new R,_s=new R,xs=new R,vs=new R,ys=new Ae,Ms=new Ae,Ss=new Ae,_r=new R,bs=new R;class Ct extends We{constructor(t=new It,n=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere),fr.applyMatrix4(r),t.ray.intersectsSphere(fr)===!1)||(eo.copy(r).invert(),oi.copy(t.ray).applyMatrix4(eo),i.boundingBox!==null&&oi.intersectsBox(i.boundingBox)===!1))return;let o;const l=i.index,c=i.attributes.position,u=i.morphAttributes.position,d=i.morphTargetsRelative,h=i.attributes.uv,f=i.attributes.uv2,g=i.groups,_=i.drawRange;if(l!==null)if(Array.isArray(s))for(let m=0,p=g.length;m<p;m++){const x=g[m],S=s[x.materialIndex],E=Math.max(x.start,_.start),T=Math.min(l.count,Math.min(x.start+x.count,_.start+_.count));for(let b=E,C=T;b<C;b+=3){const P=l.getX(b),y=l.getX(b+1),A=l.getX(b+2);o=ws(this,S,t,oi,c,u,d,h,f,P,y,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const m=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let x=m,S=p;x<S;x+=3){const E=l.getX(x),T=l.getX(x+1),b=l.getX(x+2);o=ws(this,s,t,oi,c,u,d,h,f,E,T,b),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,p=g.length;m<p;m++){const x=g[m],S=s[x.materialIndex],E=Math.max(x.start,_.start),T=Math.min(c.count,Math.min(x.start+x.count,_.start+_.count));for(let b=E,C=T;b<C;b+=3){const P=b,y=b+1,A=b+2;o=ws(this,S,t,oi,c,u,d,h,f,P,y,A),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=x.materialIndex,n.push(o))}}else{const m=Math.max(0,_.start),p=Math.min(c.count,_.start+_.count);for(let x=m,S=p;x<S;x+=3){const E=x,T=x+1,b=x+2;o=ws(this,s,t,oi,c,u,d,h,f,E,T,b),o&&(o.faceIndex=Math.floor(x/3),n.push(o))}}}}function _u(a,t,n,i,s,r,o,l){let c;if(t.side===Rt?c=i.intersectTriangle(o,r,s,!0,l):c=i.intersectTriangle(s,r,o,t.side!==Gn,l),c===null)return null;bs.copy(l),bs.applyMatrix4(a.matrixWorld);const u=n.ray.origin.distanceTo(bs);return u<n.near||u>n.far?null:{distance:u,point:bs.clone(),object:a}}function ws(a,t,n,i,s,r,o,l,c,u,d,h){pn.fromBufferAttribute(s,u),mn.fromBufferAttribute(s,d),gn.fromBufferAttribute(s,h);const f=a.morphTargetInfluences;if(r&&f){_s.set(0,0,0),xs.set(0,0,0),vs.set(0,0,0);for(let _=0,m=r.length;_<m;_++){const p=f[_],x=r[_];p!==0&&(pr.fromBufferAttribute(x,u),mr.fromBufferAttribute(x,d),gr.fromBufferAttribute(x,h),o?(_s.addScaledVector(pr,p),xs.addScaledVector(mr,p),vs.addScaledVector(gr,p)):(_s.addScaledVector(pr.sub(pn),p),xs.addScaledVector(mr.sub(mn),p),vs.addScaledVector(gr.sub(gn),p)))}pn.add(_s),mn.add(xs),gn.add(vs)}a.isSkinnedMesh&&(a.boneTransform(u,pn),a.boneTransform(d,mn),a.boneTransform(h,gn));const g=_u(a,t,n,i,pn,mn,gn,_r);if(g){l&&(ys.fromBufferAttribute(l,u),Ms.fromBufferAttribute(l,d),Ss.fromBufferAttribute(l,h),g.uv=Wt.getUV(_r,pn,mn,gn,ys,Ms,Ss,new Ae)),c&&(ys.fromBufferAttribute(c,u),Ms.fromBufferAttribute(c,d),Ss.fromBufferAttribute(c,h),g.uv2=Wt.getUV(_r,pn,mn,gn,ys,Ms,Ss,new Ae));const _={a:u,b:d,c:h,normal:new R,materialIndex:0};Wt.getNormal(pn,mn,gn,_.normal),g.face=_}return g}class ts extends It{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],d=[],h=[];let f=0,g=0;_("z","y","x",-1,-1,i,n,t,o,r,0),_("z","y","x",1,-1,i,n,-t,o,r,1),_("x","z","y",1,1,t,i,n,s,o,2),_("x","z","y",1,-1,t,i,-n,s,o,3),_("x","y","z",1,-1,t,n,i,s,r,4),_("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new bt(u,3)),this.setAttribute("normal",new bt(d,3)),this.setAttribute("uv",new bt(h,2));function _(m,p,x,S,E,T,b,C,P,y,A){const U=T/P,F=b/y,ne=T/2,Y=b/2,D=C/2,V=P+1,k=y+1;let q=0,X=0;const B=new R;for(let j=0;j<k;j++){const Q=j*F-Y;for(let K=0;K<V;K++){const $=K*U-ne;B[m]=$*S,B[p]=Q*E,B[x]=D,u.push(B.x,B.y,B.z),B[m]=0,B[p]=0,B[x]=C>0?1:-1,d.push(B.x,B.y,B.z),h.push(K/P),h.push(1-j/y),q+=1}}for(let j=0;j<y;j++)for(let Q=0;Q<P;Q++){const K=f+Q+V*j,$=f+Q+V*(j+1),ue=f+(Q+1)+V*(j+1),fe=f+(Q+1)+V*j;c.push(K,$,fe),c.push($,ue,fe),X+=6}l.addGroup(g,X,A),g+=X,f+=q}}static fromJSON(t){return new ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wi(a){const t={};for(const n in a){t[n]={};for(const i in a[n]){const s=a[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function tt(a){const t={};for(let n=0;n<a.length;n++){const i=wi(a[n]);for(const s in i)t[s]=i[s]}return t}const xu={clone:wi,merge:tt};var vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Ye{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=vu,this.fragmentShader=yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class fl extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class lt extends fl{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Zi*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Xi*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/u,s*=o.width/c,i*=o.height/u}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const li=90,ci=1;class Mu extends We{constructor(t,n,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const s=new lt(li,ci,t,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(1,0,0)),this.add(s);const r=new lt(li,ci,t,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(-1,0,0)),this.add(r);const o=new lt(li,ci,t,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const l=new lt(li,ci,t,n);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new R(0,-1,0)),this.add(l);const c=new lt(li,ci,t,n);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,1)),this.add(c);const u=new lt(li,ci,t,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new R(0,0,-1)),this.add(u)}update(t,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=on,t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(n,s),t.setRenderTarget(i,1),t.render(n,r),t.setRenderTarget(i,2),t.render(n,o),t.setRenderTarget(i,3),t.render(n,l),t.setRenderTarget(i,4),t.render(n,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5),t.render(n,u),t.setRenderTarget(d),t.toneMapping=h,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class pl extends ct{constructor(t,n,i,s,r,o,l,c,u,d){t=t!==void 0?t:[],n=n!==void 0?n:vi,super(t,n,i,s,r,o,l,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Su extends Sn{constructor(t,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new pl(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ft}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ts(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Mn});r.uniforms.tEquirect.value=n;const o=new Ct(s,r),l=n.minFilter;return n.minFilter===Ai&&(n.minFilter=ft),new Mu(1,10,this).update(t,o),n.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}}const xr=new R,bu=new R,wu=new qt;class Pn{constructor(t=new R(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=xr.subVectors(i,n).cross(bu.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,n){const i=t.delta(xr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(i).multiplyScalar(r).add(t.start)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||wu.getNormalMatrix(t),s=this.coplanarPoint(xr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Ci,Ts=new R;class Yr{constructor(t=new Pn,n=new Pn,i=new Pn,s=new Pn,r=new Pn,o=new Pn){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){const l=this.planes;return l[0].copy(t),l[1].copy(n),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const n=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],S=i[14],E=i[15];return n[0].setComponents(l-s,h-c,m-f,E-p).normalize(),n[1].setComponents(l+s,h+c,m+f,E+p).normalize(),n[2].setComponents(l+r,h+u,m+g,E+x).normalize(),n[3].setComponents(l-r,h-u,m-g,E-x).normalize(),n[4].setComponents(l-o,h-d,m-_,E-S).normalize(),n[5].setComponents(l+o,h+d,m+_,E+S).normalize(),this}intersectsObject(t){const n=t.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),ui.copy(n.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Ts.x=s.normal.x>0?t.max.x:t.min.x,Ts.y=s.normal.y>0?t.max.y:t.min.y,Ts.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ml(){let a=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=a.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=a.requestAnimationFrame(s),t=!0)},stop:function(){a.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){a=r}}}function Tu(a,t){const n=t.isWebGL2,i=new WeakMap;function s(u,d){const h=u.array,f=u.usage,g=a.createBuffer();a.bindBuffer(d,g),a.bufferData(d,h,f),u.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function r(u,d,h){const f=d.array,g=d.updateRange;a.bindBuffer(h,u),g.count===-1?a.bufferSubData(h,0,f):(n?a.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):a.bufferSubData(h,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(a.deleteBuffer(d.buffer),i.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,s(u,d)):h.version<u.version&&(r(h.buffer,u,d),h.version=u.version)}return{get:o,remove:l,update:c}}class Kr extends It{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,o=n/2,l=Math.floor(i),c=Math.floor(s),u=l+1,d=c+1,h=t/l,f=n/c,g=[],_=[],m=[],p=[];for(let x=0;x<d;x++){const S=x*f-o;for(let E=0;E<u;E++){const T=E*h-r;_.push(T,-S,0),m.push(0,0,1),p.push(E/l),p.push(1-x/c)}}for(let x=0;x<c;x++)for(let S=0;S<l;S++){const E=S+u*x,T=S+u*(x+1),b=S+1+u*(x+1),C=S+1+u*x;g.push(E,T,C),g.push(T,b,C)}this.setIndex(g),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(m,3)),this.setAttribute("uv",new bt(p,2))}static fromJSON(t){return new Kr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pu="vec3 transformed = vec3( position );",Iu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Nu=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Ou=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qu=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Xu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ju="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eh=`#ifdef USE_ENVMAP
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
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,th=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sh=`#ifdef USE_ENVMAP
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
#endif`,rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ah=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,uh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dh=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,fh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,ph=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,_h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,vh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,yh=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Mh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Th=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ah=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Lh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ph=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ih=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nh=`#ifdef USE_MORPHNORMALS
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
#endif`,Oh=`#ifdef USE_MORPHTARGETS
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
#endif`,Uh=`#ifdef USE_MORPHTARGETS
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
#endif`,zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,kh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Zh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$h=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nd=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,id=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,sd=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,rd=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,od=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cd=`#ifdef USE_SKINNING
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
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pd=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,md=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,gd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_d=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,xd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,yd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Md=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ed=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ad=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Ld=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,Rd=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Id=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zd=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,Bd=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Wd=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Xd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Yd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
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
}`,Zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$d=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qd=`uniform float rotation;
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
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:Eu,alphamap_pars_fragment:Au,alphatest_fragment:Lu,alphatest_pars_fragment:Cu,aomap_fragment:Ru,aomap_pars_fragment:Du,begin_vertex:Pu,beginnormal_vertex:Iu,bsdfs:Fu,iridescence_fragment:Nu,bumpmap_pars_fragment:Ou,clipping_planes_fragment:Uu,clipping_planes_pars_fragment:zu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Bu,color_fragment:Vu,color_pars_fragment:Gu,color_pars_vertex:Hu,color_vertex:Wu,common:qu,cube_uv_reflection_fragment:Xu,defaultnormal_vertex:ju,displacementmap_pars_vertex:Yu,displacementmap_vertex:Ku,emissivemap_fragment:Zu,emissivemap_pars_fragment:$u,encodings_fragment:Ju,encodings_pars_fragment:Qu,envmap_fragment:eh,envmap_common_pars_fragment:th,envmap_pars_fragment:nh,envmap_pars_vertex:ih,envmap_physical_pars_fragment:ph,envmap_vertex:sh,fog_vertex:rh,fog_pars_vertex:ah,fog_fragment:oh,fog_pars_fragment:lh,gradientmap_pars_fragment:ch,lightmap_fragment:uh,lightmap_pars_fragment:hh,lights_lambert_vertex:dh,lights_pars_begin:fh,lights_toon_fragment:mh,lights_toon_pars_fragment:gh,lights_phong_fragment:_h,lights_phong_pars_fragment:xh,lights_physical_fragment:vh,lights_physical_pars_fragment:yh,lights_fragment_begin:Mh,lights_fragment_maps:Sh,lights_fragment_end:bh,logdepthbuf_fragment:wh,logdepthbuf_pars_fragment:Th,logdepthbuf_pars_vertex:Eh,logdepthbuf_vertex:Ah,map_fragment:Lh,map_pars_fragment:Ch,map_particle_fragment:Rh,map_particle_pars_fragment:Dh,metalnessmap_fragment:Ph,metalnessmap_pars_fragment:Ih,morphcolor_vertex:Fh,morphnormal_vertex:Nh,morphtarget_pars_vertex:Oh,morphtarget_vertex:Uh,normal_fragment_begin:zh,normal_fragment_maps:kh,normal_pars_fragment:Bh,normal_pars_vertex:Vh,normal_vertex:Gh,normalmap_pars_fragment:Hh,clearcoat_normal_fragment_begin:Wh,clearcoat_normal_fragment_maps:qh,clearcoat_pars_fragment:Xh,iridescence_pars_fragment:jh,output_fragment:Yh,packing:Kh,premultiplied_alpha_fragment:Zh,project_vertex:$h,dithering_fragment:Jh,dithering_pars_fragment:Qh,roughnessmap_fragment:ed,roughnessmap_pars_fragment:td,shadowmap_pars_fragment:nd,shadowmap_pars_vertex:id,shadowmap_vertex:sd,shadowmask_pars_fragment:rd,skinbase_vertex:ad,skinning_pars_vertex:od,skinning_vertex:ld,skinnormal_vertex:cd,specularmap_fragment:ud,specularmap_pars_fragment:hd,tonemapping_fragment:dd,tonemapping_pars_fragment:fd,transmission_fragment:pd,transmission_pars_fragment:md,uv_pars_fragment:gd,uv_pars_vertex:_d,uv_vertex:xd,uv2_pars_fragment:vd,uv2_pars_vertex:yd,uv2_vertex:Md,worldpos_vertex:Sd,background_vert:bd,background_frag:wd,cube_vert:Td,cube_frag:Ed,depth_vert:Ad,depth_frag:Ld,distanceRGBA_vert:Cd,distanceRGBA_frag:Rd,equirect_vert:Dd,equirect_frag:Pd,linedashed_vert:Id,linedashed_frag:Fd,meshbasic_vert:Nd,meshbasic_frag:Od,meshlambert_vert:Ud,meshlambert_frag:zd,meshmatcap_vert:kd,meshmatcap_frag:Bd,meshnormal_vert:Vd,meshnormal_frag:Gd,meshphong_vert:Hd,meshphong_frag:Wd,meshphysical_vert:qd,meshphysical_frag:Xd,meshtoon_vert:jd,meshtoon_frag:Yd,points_vert:Kd,points_frag:Zd,shadow_vert:$d,shadow_frag:Jd,sprite_vert:Qd,sprite_frag:ef},se={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new qt},uv2Transform:{value:new qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qt}}},Ht={basic:{uniforms:tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new he(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:tt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:tt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new he(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:tt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:tt([se.points,se.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:tt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:tt([se.common,se.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:tt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:tt([se.sprite,se.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:tt([se.envmap,{opacity:{value:1}}]),vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:tt([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:tt([se.lights,se.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Ht.physical={uniforms:tt([Ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function tf(a,t,n,i,s,r){const o=new he(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(m,p){let x=!1,S=p.isScene===!0?p.background:null;S&&S.isTexture&&(S=t.get(S));const E=a.xr,T=E.getSession&&E.getSession();T&&T.environmentBlendMode==="additive"&&(S=null),S===null?_(o,l):S&&S.isColor&&(_(S,1),x=!0),(a.autoClear||x)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),S&&(S.isCubeTexture||S.mapping===zs)?(u===void 0&&(u=new Ct(new ts(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:wi(Ht.cube.uniforms),vertexShader:Ht.cube.vertexShader,fragmentShader:Ht.cube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(d!==S||h!==S.version||f!==a.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,f=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ct(new Kr(2,2),new ln({name:"BackgroundMaterial",uniforms:wi(Ht.background.uniforms),vertexShader:Ht.background.vertexShader,fragmentShader:Ht.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,f=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){n.buffers.color.setClear(m.r,m.g,m.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function nf(a,t,n,i){const s=a.getParameter(34921),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,l={},c=p(null);let u=c,d=!1;function h(D,V,k,q,X){let B=!1;if(o){const j=m(q,k,V);u!==j&&(u=j,g(u.object)),B=x(D,q,k,X),B&&S(D,q,k,X)}else{const j=V.wireframe===!0;(u.geometry!==q.id||u.program!==k.id||u.wireframe!==j)&&(u.geometry=q.id,u.program=k.id,u.wireframe=j,B=!0)}X!==null&&n.update(X,34963),(B||d)&&(d=!1,y(D,V,k,q),X!==null&&a.bindBuffer(34963,n.get(X).buffer))}function f(){return i.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function g(D){return i.isWebGL2?a.bindVertexArray(D):r.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?a.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function m(D,V,k){const q=k.wireframe===!0;let X=l[D.id];X===void 0&&(X={},l[D.id]=X);let B=X[V.id];B===void 0&&(B={},X[V.id]=B);let j=B[q];return j===void 0&&(j=p(f()),B[q]=j),j}function p(D){const V=[],k=[],q=[];for(let X=0;X<s;X++)V[X]=0,k[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:k,attributeDivisors:q,object:D,attributes:{},index:null}}function x(D,V,k,q){const X=u.attributes,B=V.attributes;let j=0;const Q=k.getAttributes();for(const K in Q)if(Q[K].location>=0){const ue=X[K];let fe=B[K];if(fe===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),ue===void 0||ue.attribute!==fe||fe&&ue.data!==fe.data)return!0;j++}return u.attributesNum!==j||u.index!==q}function S(D,V,k,q){const X={},B=V.attributes;let j=0;const Q=k.getAttributes();for(const K in Q)if(Q[K].location>=0){let ue=B[K];ue===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ue=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ue=D.instanceColor));const fe={};fe.attribute=ue,ue&&ue.data&&(fe.data=ue.data),X[K]=fe,j++}u.attributes=X,u.attributesNum=j,u.index=q}function E(){const D=u.newAttributes;for(let V=0,k=D.length;V<k;V++)D[V]=0}function T(D){b(D,0)}function b(D,V){const k=u.newAttributes,q=u.enabledAttributes,X=u.attributeDivisors;k[D]=1,q[D]===0&&(a.enableVertexAttribArray(D),q[D]=1),X[D]!==V&&((i.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,V),X[D]=V)}function C(){const D=u.newAttributes,V=u.enabledAttributes;for(let k=0,q=V.length;k<q;k++)V[k]!==D[k]&&(a.disableVertexAttribArray(k),V[k]=0)}function P(D,V,k,q,X,B){i.isWebGL2===!0&&(k===5124||k===5125)?a.vertexAttribIPointer(D,V,k,X,B):a.vertexAttribPointer(D,V,k,q,X,B)}function y(D,V,k,q){if(i.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();const X=q.attributes,B=k.getAttributes(),j=V.defaultAttributeValues;for(const Q in B){const K=B[Q];if(K.location>=0){let $=X[Q];if($===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const ue=$.normalized,fe=$.itemSize,H=n.get($);if(H===void 0)continue;const Ge=H.buffer,Me=H.type,Se=H.bytesPerElement;if($.isInterleavedBufferAttribute){const ae=$.data,ze=ae.stride,Le=$.offset;if(ae.isInstancedInterleavedBuffer){for(let xe=0;xe<K.locationSize;xe++)b(K.location+xe,ae.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let xe=0;xe<K.locationSize;xe++)T(K.location+xe);a.bindBuffer(34962,Ge);for(let xe=0;xe<K.locationSize;xe++)P(K.location+xe,fe/K.locationSize,Me,ue,ze*Se,(Le+fe/K.locationSize*xe)*Se)}else{if($.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)b(K.location+ae,$.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ae=0;ae<K.locationSize;ae++)T(K.location+ae);a.bindBuffer(34962,Ge);for(let ae=0;ae<K.locationSize;ae++)P(K.location+ae,fe/K.locationSize,Me,ue,fe*Se,fe/K.locationSize*ae*Se)}}else if(j!==void 0){const ue=j[Q];if(ue!==void 0)switch(ue.length){case 2:a.vertexAttrib2fv(K.location,ue);break;case 3:a.vertexAttrib3fv(K.location,ue);break;case 4:a.vertexAttrib4fv(K.location,ue);break;default:a.vertexAttrib1fv(K.location,ue)}}}}C()}function A(){ne();for(const D in l){const V=l[D];for(const k in V){const q=V[k];for(const X in q)_(q[X].object),delete q[X];delete V[k]}delete l[D]}}function U(D){if(l[D.id]===void 0)return;const V=l[D.id];for(const k in V){const q=V[k];for(const X in q)_(q[X].object),delete q[X];delete V[k]}delete l[D.id]}function F(D){for(const V in l){const k=l[V];if(k[D.id]===void 0)continue;const q=k[D.id];for(const X in q)_(q[X].object),delete q[X];delete k[D.id]}}function ne(){Y(),d=!0,u!==c&&(u=c,g(u.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:Y,dispose:A,releaseStatesOfGeometry:U,releaseStatesOfProgram:F,initAttributes:E,enableAttribute:T,disableUnusedAttributes:C}}function sf(a,t,n,i){const s=i.isWebGL2;let r;function o(u){r=u}function l(u,d){a.drawArrays(r,u,d),n.update(d,r,1)}function c(u,d,h){if(h===0)return;let f,g;if(s)f=a,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,d,h),n.update(d,r,h)}this.setMode=o,this.render=l,this.renderInstances=c}function rf(a,t,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){if(P==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&a instanceof WebGL2ComputeRenderingContext;let l=n.precision!==void 0?n.precision:"highp";const c=r(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=o||t.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),g=a.getParameter(3379),_=a.getParameter(34076),m=a.getParameter(34921),p=a.getParameter(36347),x=a.getParameter(36348),S=a.getParameter(36349),E=f>0,T=o||t.has("OES_texture_float"),b=E&&T,C=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:s,getMaxPrecision:r,precision:l,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:E,floatFragmentTextures:T,floatVertexTextures:b,maxSamples:C}}function af(a){const t=this;let n=null,i=0,s=!1,r=!1;const o=new Pn,l=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,g){const _=h.length!==0||f||i!==0||s;return s=f,n=d(h,g,0),i=h.length,_},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1,u()},this.setState=function(h,f,g){const _=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,x=a.get(h);if(!s||_===null||_.length===0||r&&!p)r?d(null):u();else{const S=r?0:i,E=S*4;let T=x.clippingState||null;c.value=T,T=d(_,f,E,g);for(let b=0;b!==E;++b)T[b]=n[b];x.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=S}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function d(h,f,g,_){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=c.value,_!==!0||p===null){const x=g+m*4,S=f.matrixWorldInverse;l.getNormalMatrix(S),(p===null||p.length<x)&&(p=new Float32Array(x));for(let E=0,T=g;E!==m;++E,T+=4)o.copy(h[E]).applyMatrix4(S,l),o.normal.toArray(p,T),p[T+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function of(a){let t=new WeakMap;function n(o,l){return l===Rr?o.mapping=vi:l===Dr&&(o.mapping=yi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping;if(l===Rr||l===Dr)if(t.has(o)){const c=t.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Su(c.height/2);return u.fromEquirectangularTexture(a,o),t.set(o,u),o.addEventListener("dispose",s),n(u.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Zr extends fl{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,l=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const mi=4,to=[.125,.215,.35,.446,.526,.582],Nn=20,vr=new Zr,no=new he;let yr=null;const In=(1+Math.sqrt(5))/2,hi=1/In,io=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,In,hi),new R(0,In,-hi),new R(hi,0,In),new R(-hi,0,In),new R(In,hi,0),new R(-In,hi,0)];class so{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){yr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yr),t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===vi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yr=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:Yi,format:St,encoding:Wn,depthBuffer:!1},s=ro(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lf(r)),this._blurMaterial=cf(r,t,n)}return s}_compileMaterial(t){const n=new Ct(this._lodPlanes[0],t);this._renderer.compile(n,vr)}_sceneToCubeUV(t,n,i,s){const l=new lt(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(no),d.toneMapping=on,d.autoClear=!1;const g=new an({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),_=new Ct(new ts,g);let m=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,m=!0):(g.color.copy(no),m=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,c[x],0),l.lookAt(u[x],0,0)):S===1?(l.up.set(0,0,c[x]),l.lookAt(0,u[x],0)):(l.up.set(0,c[x],0),l.lookAt(0,0,u[x]));const E=this._cubeSize;Es(s,S*E,x>2?E:0,E,E),d.setRenderTarget(s),m&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,t.background=p}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===vi||t.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ao());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=t;const c=this._cubeSize;Es(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,vr)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=io[(s-1)%io.length];this._blur(t,s-1,s,r,o)}n.autoClear=i}_blur(t,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,l){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Ct(this._lodPlanes[s],u),f=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Nn-1),m=r/_,p=isFinite(r)?1+Math.floor(d*m):Nn;p>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nn}`);const x=[];let S=0;for(let P=0;P<Nn;++P){const y=P/m,A=Math.exp(-y*y/2);x.push(A),P===0?S+=A:P<p&&(S+=2*A)}for(let P=0;P<x.length;P++)x[P]=x[P]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=o==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const T=this._sizeLods[s],b=3*T*(s>E-mi?s-E+mi:0),C=4*(this._cubeSize-T);Es(n,b,C,3*T,2*T),c.setRenderTarget(n),c.render(h,vr)}}function lf(a){const t=[],n=[],i=[];let s=a;const r=a-mi+1+to.length;for(let o=0;o<r;o++){const l=Math.pow(2,s);n.push(l);let c=1/l;o>a-mi?c=to[o-a+mi-1]:o===0&&(c=0),i.push(c);const u=1/(l-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,_=6,m=3,p=2,x=1,S=new Float32Array(m*_*g),E=new Float32Array(p*_*g),T=new Float32Array(x*_*g);for(let C=0;C<g;C++){const P=C%3*2/3-1,y=C>2?0:-1,A=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];S.set(A,m*_*C),E.set(f,p*_*C);const U=[C,C,C,C,C,C];T.set(U,x*_*C)}const b=new It;b.setAttribute("position",new xt(S,m)),b.setAttribute("uv",new xt(E,p)),b.setAttribute("faceIndex",new xt(T,x)),t.push(b),s>mi&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function ro(a,t,n){const i=new Sn(a,t,n);return i.texture.mapping=zs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(a,t,n,i,s){a.viewport.set(t,n,i,s),a.scissor.set(t,n,i,s)}function cf(a,t,n){const i=new Float32Array(Nn),s=new R(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$r(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ao(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function oo(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function $r(){return`

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
	`}function uf(a){let t=new WeakMap,n=null;function i(l){if(l&&l.isTexture){const c=l.mapping,u=c===Rr||c===Dr,d=c===vi||c===yi;if(u||d)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let h=t.get(l);return n===null&&(n=new so(a)),h=u?n.fromEquirectangular(l,h):n.fromCubemap(l,h),t.set(l,h),h.texture}else{if(t.has(l))return t.get(l).texture;{const h=l.image;if(u&&h&&h.height>0||d&&h&&s(h)){n===null&&(n=new so(a));const f=u?n.fromEquirectangular(l):n.fromCubemap(l);return t.set(l,f),l.addEventListener("dispose",r),f.texture}else return null}}}return l}function s(l){let c=0;const u=6;for(let d=0;d<u;d++)l[d]!==void 0&&c++;return c===u}function r(l){const c=l.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hf(a){const t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=a.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const s=n(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function df(a,t,n,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const g=r.get(f);g&&(t.remove(g),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)t.update(f[_],34962);const g=h.morphAttributes;for(const _ in g){const m=g[_];for(let p=0,x=m.length;p<x;p++)t.update(m[p],34962)}}function u(h){const f=[],g=h.index,_=h.attributes.position;let m=0;if(g!==null){const S=g.array;m=g.version;for(let E=0,T=S.length;E<T;E+=3){const b=S[E+0],C=S[E+1],P=S[E+2];f.push(b,C,C,P,P,b)}}else{const S=_.array;m=_.version;for(let E=0,T=S.length/3-1;E<T;E+=3){const b=E+0,C=E+1,P=E+2;f.push(b,C,C,P,P,b)}}const p=new(rl(f)?dl:hl)(f,1);p.version=m;const x=r.get(h);x&&t.remove(x),r.set(h,p)}function d(h){const f=r.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&u(h)}else u(h);return r.get(h)}return{get:l,update:c,getWireframeAttribute:d}}function ff(a,t,n,i){const s=i.isWebGL2;let r;function o(f){r=f}let l,c;function u(f){l=f.type,c=f.bytesPerElement}function d(f,g){a.drawElements(r,g,l,f*c),n.update(g,r,1)}function h(f,g,_){if(_===0)return;let m,p;if(s)m=a,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,l,f*c,_),n.update(g,r,_)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h}function pf(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,l){switch(n.calls++,o){case 4:n.triangles+=l*(r/3);break;case 1:n.lines+=l*(r/2);break;case 3:n.lines+=l*(r-1);break;case 2:n.lines+=l*r;break;case 0:n.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function mf(a,t){return a[0]-t[0]}function gf(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Mr(a,t){let n=1;const i=t.isInterleavedBufferAttribute?t.data.array:t.array;i instanceof Int8Array?n=127:i instanceof Int16Array?n=32767:i instanceof Int32Array?n=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),a.divideScalar(n)}function _f(a,t,n){const i={},s=new Float32Array(8),r=new WeakMap,o=new Ve,l=[];for(let u=0;u<8;u++)l[u]=[u,0];function c(u,d,h,f){const g=u.morphTargetInfluences;if(t.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=m!==void 0?m.length:0;let x=r.get(d);if(x===void 0||x.count!==p){let k=function(){D.dispose(),r.delete(d),d.removeEventListener("dispose",k)};var _=k;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,P=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),b===!0&&(U=2),C===!0&&(U=3);let F=d.attributes.position.count*U,ne=1;F>t.maxTextureSize&&(ne=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const Y=new Float32Array(F*ne*4*p),D=new cl(Y,F,ne,p);D.type=yn,D.needsUpdate=!0;const V=U*4;for(let q=0;q<p;q++){const X=P[q],B=y[q],j=A[q],Q=F*ne*4*q;for(let K=0;K<X.count;K++){const $=K*V;T===!0&&(o.fromBufferAttribute(X,K),X.normalized===!0&&Mr(o,X),Y[Q+$+0]=o.x,Y[Q+$+1]=o.y,Y[Q+$+2]=o.z,Y[Q+$+3]=0),b===!0&&(o.fromBufferAttribute(B,K),B.normalized===!0&&Mr(o,B),Y[Q+$+4]=o.x,Y[Q+$+5]=o.y,Y[Q+$+6]=o.z,Y[Q+$+7]=0),C===!0&&(o.fromBufferAttribute(j,K),j.normalized===!0&&Mr(o,j),Y[Q+$+8]=o.x,Y[Q+$+9]=o.y,Y[Q+$+10]=o.z,Y[Q+$+11]=j.itemSize===4?o.w:1)}}x={count:p,texture:D,size:new Ae(F,ne)},r.set(d,x),d.addEventListener("dispose",k)}let S=0;for(let T=0;T<g.length;T++)S+=g[T];const E=d.morphTargetsRelative?1:1-S;f.getUniforms().setValue(a,"morphTargetBaseInfluence",E),f.getUniforms().setValue(a,"morphTargetInfluences",g),f.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),f.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}else{const m=g===void 0?0:g.length;let p=i[d.id];if(p===void 0||p.length!==m){p=[];for(let b=0;b<m;b++)p[b]=[b,0];i[d.id]=p}for(let b=0;b<m;b++){const C=p[b];C[0]=b,C[1]=g[b]}p.sort(gf);for(let b=0;b<8;b++)b<m&&p[b][1]?(l[b][0]=p[b][0],l[b][1]=p[b][1]):(l[b][0]=Number.MAX_SAFE_INTEGER,l[b][1]=0);l.sort(mf);const x=d.morphAttributes.position,S=d.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const C=l[b],P=C[0],y=C[1];P!==Number.MAX_SAFE_INTEGER&&y?(x&&d.getAttribute("morphTarget"+b)!==x[P]&&d.setAttribute("morphTarget"+b,x[P]),S&&d.getAttribute("morphNormal"+b)!==S[P]&&d.setAttribute("morphNormal"+b,S[P]),s[b]=y,E+=y):(x&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),S&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),s[b]=0)}const T=d.morphTargetsRelative?1:1-E;f.getUniforms().setValue(a,"morphTargetBaseInfluence",T),f.getUniforms().setValue(a,"morphTargetInfluences",s)}}return{update:c}}function xf(a,t,n,i){let s=new WeakMap;function r(c){const u=i.render.frame,d=c.geometry,h=t.get(c,d);return s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.update(c.instanceMatrix,34962),c.instanceColor!==null&&n.update(c.instanceColor,34962)),h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:o}}const gl=new ct,_l=new cl,xl=new ou,vl=new pl,lo=[],co=[],uo=new Float32Array(16),ho=new Float32Array(9),fo=new Float32Array(4);function Di(a,t,n){const i=a[0];if(i<=0||i>0)return a;const s=t*n;let r=lo[s];if(r===void 0&&(r=new Float32Array(s),lo[s]=r),t!==0){i.toArray(r,0);for(let o=1,l=0;o!==t;++o)l+=n,a[o].toArray(r,l)}return r}function ut(a,t){if(a.length!==t.length)return!1;for(let n=0,i=a.length;n<i;n++)if(a[n]!==t[n])return!1;return!0}function ht(a,t){for(let n=0,i=t.length;n<i;n++)a[n]=t[n]}function ks(a,t){let n=co[t];n===void 0&&(n=new Int32Array(t),co[t]=n);for(let i=0;i!==t;++i)n[i]=a.allocateTextureUnit();return n}function vf(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function yf(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ut(n,t))return;a.uniform2fv(this.addr,t),ht(n,t)}}function Mf(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ut(n,t))return;a.uniform3fv(this.addr,t),ht(n,t)}}function Sf(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ut(n,t))return;a.uniform4fv(this.addr,t),ht(n,t)}}function bf(a,t){const n=this.cache,i=t.elements;if(i===void 0){if(ut(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),ht(n,t)}else{if(ut(n,i))return;fo.set(i),a.uniformMatrix2fv(this.addr,!1,fo),ht(n,i)}}function wf(a,t){const n=this.cache,i=t.elements;if(i===void 0){if(ut(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),ht(n,t)}else{if(ut(n,i))return;ho.set(i),a.uniformMatrix3fv(this.addr,!1,ho),ht(n,i)}}function Tf(a,t){const n=this.cache,i=t.elements;if(i===void 0){if(ut(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),ht(n,t)}else{if(ut(n,i))return;uo.set(i),a.uniformMatrix4fv(this.addr,!1,uo),ht(n,i)}}function Ef(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function Af(a,t){const n=this.cache;ut(n,t)||(a.uniform2iv(this.addr,t),ht(n,t))}function Lf(a,t){const n=this.cache;ut(n,t)||(a.uniform3iv(this.addr,t),ht(n,t))}function Cf(a,t){const n=this.cache;ut(n,t)||(a.uniform4iv(this.addr,t),ht(n,t))}function Rf(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function Df(a,t){const n=this.cache;ut(n,t)||(a.uniform2uiv(this.addr,t),ht(n,t))}function Pf(a,t){const n=this.cache;ut(n,t)||(a.uniform3uiv(this.addr,t),ht(n,t))}function If(a,t){const n=this.cache;ut(n,t)||(a.uniform4uiv(this.addr,t),ht(n,t))}function Ff(a,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTexture2D(t||gl,s)}function Nf(a,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||xl,s)}function Of(a,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||vl,s)}function Uf(a,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||_l,s)}function zf(a){switch(a){case 5126:return vf;case 35664:return yf;case 35665:return Mf;case 35666:return Sf;case 35674:return bf;case 35675:return wf;case 35676:return Tf;case 5124:case 35670:return Ef;case 35667:case 35671:return Af;case 35668:case 35672:return Lf;case 35669:case 35673:return Cf;case 5125:return Rf;case 36294:return Df;case 36295:return Pf;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Uf}}function kf(a,t){a.uniform1fv(this.addr,t)}function Bf(a,t){const n=Di(t,this.size,2);a.uniform2fv(this.addr,n)}function Vf(a,t){const n=Di(t,this.size,3);a.uniform3fv(this.addr,n)}function Gf(a,t){const n=Di(t,this.size,4);a.uniform4fv(this.addr,n)}function Hf(a,t){const n=Di(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function Wf(a,t){const n=Di(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function qf(a,t){const n=Di(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function Xf(a,t){a.uniform1iv(this.addr,t)}function jf(a,t){a.uniform2iv(this.addr,t)}function Yf(a,t){a.uniform3iv(this.addr,t)}function Kf(a,t){a.uniform4iv(this.addr,t)}function Zf(a,t){a.uniform1uiv(this.addr,t)}function $f(a,t){a.uniform2uiv(this.addr,t)}function Jf(a,t){a.uniform3uiv(this.addr,t)}function Qf(a,t){a.uniform4uiv(this.addr,t)}function ep(a,t,n){const i=t.length,s=ks(n,i);a.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)n.setTexture2D(t[r]||gl,s[r])}function tp(a,t,n){const i=t.length,s=ks(n,i);a.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)n.setTexture3D(t[r]||xl,s[r])}function np(a,t,n){const i=t.length,s=ks(n,i);a.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)n.setTextureCube(t[r]||vl,s[r])}function ip(a,t,n){const i=t.length,s=ks(n,i);a.uniform1iv(this.addr,s);for(let r=0;r!==i;++r)n.setTexture2DArray(t[r]||_l,s[r])}function sp(a){switch(a){case 5126:return kf;case 35664:return Bf;case 35665:return Vf;case 35666:return Gf;case 35674:return Hf;case 35675:return Wf;case 35676:return qf;case 5124:case 35670:return Xf;case 35667:case 35671:return jf;case 35668:case 35672:return Yf;case 35669:case 35673:return Kf;case 5125:return Zf;case 36294:return $f;case 36295:return Jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return tp;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class rp{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.setValue=zf(n.type)}}class ap{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.size=n.size,this.setValue=sp(n.type)}}class op{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const l=s[r];l.setValue(t,n[l.id],i)}}}const Sr=/(\w+)(\])?(\[|\.)?/g;function po(a,t){a.seq.push(t),a.map[t.id]=t}function lp(a,t,n){const i=a.name,s=i.length;for(Sr.lastIndex=0;;){const r=Sr.exec(i),o=Sr.lastIndex;let l=r[1];const c=r[2]==="]",u=r[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===s){po(n,u===void 0?new rp(l,a,t):new ap(l,a,t));break}else{let h=n.map[l];h===void 0&&(h=new op(l),po(n,h)),n=h}}}class Ps{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,35718);for(let s=0;s<i;++s){const r=t.getActiveUniform(n,s),o=t.getUniformLocation(n,r.name);lp(r,o,this)}}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){const l=n[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in n&&i.push(o)}return i}}function mo(a,t,n){const i=a.createShader(t);return a.shaderSource(i,n),a.compileShader(i),i}let cp=0;function up(a,t){const n=a.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){const l=o+1;i.push(`${l===t?">":" "} ${l}: ${n[o]}`)}return i.join(`
`)}function hp(a){switch(a){case Wn:return["Linear","( value )"];case Ie:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function go(a,t,n){const i=a.getShaderParameter(t,35713),s=a.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+up(a.getShaderSource(t),o)}else return s}function dp(a,t){const n=hp(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function fp(a,t){let n;switch(t){case _c:n="Linear";break;case xc:n="Reinhard";break;case vc:n="OptimizedCineon";break;case yc:n="ACESFilmic";break;case Mc:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function pp(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qi).join(`
`)}function mp(a){const t=[];for(const n in a){const i=a[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function gp(a,t){const n={},i=a.getProgramParameter(t,35721);for(let s=0;s<i;s++){const r=a.getActiveAttrib(t,s),o=r.name;let l=1;r.type===35674&&(l=2),r.type===35675&&(l=3),r.type===35676&&(l=4),n[o]={type:r.type,location:a.getAttribLocation(t,o),locationSize:l}}return n}function qi(a){return a!==""}function _o(a,t){return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xo(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _p=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ur(a){return a.replace(_p,xp)}function xp(a,t){const n=Te[t];if(n===void 0)throw new Error("Can not resolve #include <"+t+">");return Ur(n)}const vp=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vo(a){return a.replace(yp,yl).replace(vp,Mp)}function Mp(a,t,n,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),yl(a,t,n,i)}function yl(a,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yo(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sp(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Wi&&(t="SHADOWMAP_TYPE_VSM"),t}function bp(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case vi:case yi:t="ENVMAP_TYPE_CUBE";break;case zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function wp(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Tp(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Us:t="ENVMAP_BLENDING_MULTIPLY";break;case mc:t="ENVMAP_BLENDING_MIX";break;case gc:t="ENVMAP_BLENDING_ADD";break}return t}function Ep(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ap(a,t,n,i){const s=a.getContext(),r=n.defines;let o=n.vertexShader,l=n.fragmentShader;const c=Sp(n),u=bp(n),d=wp(n),h=Tp(n),f=Ep(n),g=n.isWebGL2?"":pp(n),_=mp(r),m=s.createProgram();let p,x,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=[_].filter(qi).join(`
`),p.length>0&&(p+=`
`),x=[g,_].filter(qi).join(`
`),x.length>0&&(x+=`
`)):(p=[yo(n),"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),x=[g,yo(n),"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==on?"#define TONE_MAPPING":"",n.toneMapping!==on?Te.tonemapping_pars_fragment:"",n.toneMapping!==on?fp("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,dp("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qi).join(`
`)),o=Ur(o),o=_o(o,n),o=xo(o,n),l=Ur(l),l=_o(l,n),l=xo(l,n),o=vo(o),l=vo(l),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",n.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=S+p+o,T=S+x+l,b=mo(s,35633,E),C=mo(s,35632,T);if(s.attachShader(m,b),s.attachShader(m,C),n.index0AttributeName!==void 0?s.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),a.debug.checkShaderErrors){const A=s.getProgramInfoLog(m).trim(),U=s.getShaderInfoLog(b).trim(),F=s.getShaderInfoLog(C).trim();let ne=!0,Y=!0;if(s.getProgramParameter(m,35714)===!1){ne=!1;const D=go(s,b,"vertex"),V=go(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+D+`
`+V)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(U===""||F==="")&&(Y=!1);Y&&(this.diagnostics={runnable:ne,programLog:A,vertexShader:{log:U,prefix:p},fragmentShader:{log:F,prefix:x}})}s.deleteShader(b),s.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new Ps(s,m)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=gp(s,m)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=n.shaderName,this.id=cp++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=C,this}let Lp=0;class Cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;return n.has(t)===!1&&n.set(t,new Set),n.get(t)}_getShaderStage(t){const n=this.shaderCache;if(n.has(t)===!1){const i=new Rp(t);n.set(t,i)}return n.get(t)}}class Rp{constructor(t){this.id=Lp++,this.code=t,this.usedTimes=0}}function Dp(a,t,n,i,s,r,o){const l=new ul,c=new Cp,u=[],d=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,A,U,F,ne){const Y=F.fog,D=ne.geometry,V=y.isMeshStandardMaterial?F.environment:null,k=(y.isMeshStandardMaterial?n:t).get(y.envMap||V),q=!!k&&k.mapping===zs?k.image.height:null,X=_[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const B=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,j=B!==void 0?B.length:0;let Q=0;D.morphAttributes.position!==void 0&&(Q=1),D.morphAttributes.normal!==void 0&&(Q=2),D.morphAttributes.color!==void 0&&(Q=3);let K,$,ue,fe;if(X){const ze=Ht[X];K=ze.vertexShader,$=ze.fragmentShader}else K=y.vertexShader,$=y.fragmentShader,c.update(y),ue=c.getVertexShaderID(y),fe=c.getFragmentShaderID(y);const H=a.getRenderTarget(),Ge=y.alphaTest>0,Me=y.clearcoat>0,Se=y.iridescence>0;return{isWebGL2:d,shaderID:X,shaderName:y.type,vertexShader:K,fragmentShader:$,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?a.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:Wn,map:!!y.map,matcap:!!y.matcap,envMap:!!k,envMapMode:k&&k.mapping,envMapCubeUVHeight:q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Gc,tangentSpaceNormalMap:y.normalMapType===jn,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ie,clearcoat:Me,clearcoatMap:Me&&!!y.clearcoatMap,clearcoatRoughnessMap:Me&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Me&&!!y.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!y.iridescenceMap,iridescenceThicknessMap:Se&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===gi,alphaMap:!!y.alphaMap,alphaTest:Ge,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!Y,useFog:y.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ne.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&U.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:on,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Gn,flipSided:y.side===Rt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)A.push(U),A.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(x(A,y),S(A,y),A.push(a.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function x(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function S(y,A){l.disableAll(),A.isWebGL2&&l.enable(0),A.supportsVertexTextures&&l.enable(1),A.instancing&&l.enable(2),A.instancingColor&&l.enable(3),A.map&&l.enable(4),A.matcap&&l.enable(5),A.envMap&&l.enable(6),A.lightMap&&l.enable(7),A.aoMap&&l.enable(8),A.emissiveMap&&l.enable(9),A.bumpMap&&l.enable(10),A.normalMap&&l.enable(11),A.objectSpaceNormalMap&&l.enable(12),A.tangentSpaceNormalMap&&l.enable(13),A.clearcoat&&l.enable(14),A.clearcoatMap&&l.enable(15),A.clearcoatRoughnessMap&&l.enable(16),A.clearcoatNormalMap&&l.enable(17),A.iridescence&&l.enable(18),A.iridescenceMap&&l.enable(19),A.iridescenceThicknessMap&&l.enable(20),A.displacementMap&&l.enable(21),A.specularMap&&l.enable(22),A.roughnessMap&&l.enable(23),A.metalnessMap&&l.enable(24),A.gradientMap&&l.enable(25),A.alphaMap&&l.enable(26),A.alphaTest&&l.enable(27),A.vertexColors&&l.enable(28),A.vertexAlphas&&l.enable(29),A.vertexUvs&&l.enable(30),A.vertexTangents&&l.enable(31),A.uvsVertexOnly&&l.enable(32),A.fog&&l.enable(33),y.push(l.mask),l.disableAll(),A.useFog&&l.enable(0),A.flatShading&&l.enable(1),A.logarithmicDepthBuffer&&l.enable(2),A.skinning&&l.enable(3),A.morphTargets&&l.enable(4),A.morphNormals&&l.enable(5),A.morphColors&&l.enable(6),A.premultipliedAlpha&&l.enable(7),A.shadowMapEnabled&&l.enable(8),A.physicallyCorrectLights&&l.enable(9),A.doubleSided&&l.enable(10),A.flipSided&&l.enable(11),A.useDepthPacking&&l.enable(12),A.dithering&&l.enable(13),A.specularIntensityMap&&l.enable(14),A.specularColorMap&&l.enable(15),A.transmission&&l.enable(16),A.transmissionMap&&l.enable(17),A.thicknessMap&&l.enable(18),A.sheen&&l.enable(19),A.sheenColorMap&&l.enable(20),A.sheenRoughnessMap&&l.enable(21),A.decodeVideoTexture&&l.enable(22),A.opaque&&l.enable(23),y.push(l.mask)}function E(y){const A=_[y.type];let U;if(A){const F=Ht[A];U=xu.clone(F.uniforms)}else U=y.uniforms;return U}function T(y,A){let U;for(let F=0,ne=u.length;F<ne;F++){const Y=u[F];if(Y.cacheKey===A){U=Y,++U.usedTimes;break}}return U===void 0&&(U=new Ap(a,A,y,r),u.push(U)),U}function b(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function C(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:T,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:P}}function Pp(){let a=new WeakMap;function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,l){a.get(r)[o]=l}function s(){a=new WeakMap}return{get:t,remove:n,update:i,dispose:s}}function Ip(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function Mo(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function So(){const a=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(h,f,g,_,m,p){let x=a[t];return x===void 0?(x={id:h.id,object:h,geometry:f,material:g,groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},a[t]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=g,x.groupOrder=_,x.renderOrder=h.renderOrder,x.z=m,x.group=p),t++,x}function l(h,f,g,_,m,p){const x=o(h,f,g,_,m,p);g.transmission>0?i.push(x):g.transparent===!0?s.push(x):n.push(x)}function c(h,f,g,_,m,p){const x=o(h,f,g,_,m,p);g.transmission>0?i.unshift(x):g.transparent===!0?s.unshift(x):n.unshift(x)}function u(h,f){n.length>1&&n.sort(h||Ip),i.length>1&&i.sort(f||Mo),s.length>1&&s.sort(f||Mo)}function d(){for(let h=t,f=a.length;h<f;h++){const g=a[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Fp(){let a=new WeakMap;function t(i,s){let r;return a.has(i)===!1?(r=new So,a.set(i,[r])):s>=a.get(i).length?(r=new So,a.get(i).push(r)):r=a.get(i)[s],r}function n(){a=new WeakMap}return{get:t,dispose:n}}function Np(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new R,color:new he};break;case"SpotLight":n={position:new R,direction:new R,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new R,color:new he,distance:0,decay:0};break;case"HemisphereLight":n={direction:new R,skyColor:new he,groundColor:new he};break;case"RectAreaLight":n={color:new he,position:new R,halfWidth:new R,halfHeight:new R};break}return a[t.id]=n,n}}}function Op(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let Up=0;function zp(a,t){return(t.castShadow?1:0)-(a.castShadow?1:0)}function kp(a,t){const n=new Np,i=Op(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)s.probe.push(new R);const r=new R,o=new De,l=new De;function c(d,h){let f=0,g=0,_=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let m=0,p=0,x=0,S=0,E=0,T=0,b=0,C=0;d.sort(zp);const P=h!==!0?Math.PI:1;for(let A=0,U=d.length;A<U;A++){const F=d[A],ne=F.color,Y=F.intensity,D=F.distance,V=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=ne.r*Y*P,g+=ne.g*Y*P,_+=ne.b*Y*P;else if(F.isLightProbe)for(let k=0;k<9;k++)s.probe[k].addScaledVector(F.sh.coefficients[k],Y);else if(F.isDirectionalLight){const k=n.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*P),F.castShadow){const q=F.shadow,X=i.get(F);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.directionalShadow[m]=X,s.directionalShadowMap[m]=V,s.directionalShadowMatrix[m]=F.shadow.matrix,T++}s.directional[m]=k,m++}else if(F.isSpotLight){const k=n.get(F);if(k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(ne).multiplyScalar(Y*P),k.distance=D,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,F.castShadow){const q=F.shadow,X=i.get(F);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.spotShadow[x]=X,s.spotShadowMap[x]=V,s.spotShadowMatrix[x]=F.shadow.matrix,C++}s.spot[x]=k,x++}else if(F.isRectAreaLight){const k=n.get(F);k.color.copy(ne).multiplyScalar(Y),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),s.rectArea[S]=k,S++}else if(F.isPointLight){const k=n.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity*P),k.distance=F.distance,k.decay=F.decay,F.castShadow){const q=F.shadow,X=i.get(F);X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,s.pointShadow[p]=X,s.pointShadowMap[p]=V,s.pointShadowMatrix[p]=F.shadow.matrix,b++}s.point[p]=k,p++}else if(F.isHemisphereLight){const k=n.get(F);k.skyColor.copy(F.color).multiplyScalar(Y*P),k.groundColor.copy(F.groundColor).multiplyScalar(Y*P),s.hemi[E]=k,E++}}S>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=se.LTC_FLOAT_1,s.rectAreaLTC2=se.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=se.LTC_HALF_1,s.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=g,s.ambient[2]=_;const y=s.hash;(y.directionalLength!==m||y.pointLength!==p||y.spotLength!==x||y.rectAreaLength!==S||y.hemiLength!==E||y.numDirectionalShadows!==T||y.numPointShadows!==b||y.numSpotShadows!==C)&&(s.directional.length=m,s.spot.length=x,s.rectArea.length=S,s.point.length=p,s.hemi.length=E,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=b,s.pointShadowMap.length=b,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=b,s.spotShadowMatrix.length=C,y.directionalLength=m,y.pointLength=p,y.spotLength=x,y.rectAreaLength=S,y.hemiLength=E,y.numDirectionalShadows=T,y.numPointShadows=b,y.numSpotShadows=C,s.version=Up++)}function u(d,h){let f=0,g=0,_=0,m=0,p=0;const x=h.matrixWorldInverse;for(let S=0,E=d.length;S<E;S++){const T=d[S];if(T.isDirectionalLight){const b=s.directional[f];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(x),f++}else if(T.isSpotLight){const b=s.spot[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(x),_++}else if(T.isRectAreaLight){const b=s.rectArea[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(x),l.identity(),o.copy(T.matrixWorld),o.premultiply(x),l.extractRotation(o),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(l),b.halfHeight.applyMatrix4(l),m++}else if(T.isPointLight){const b=s.point[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(x),g++}else if(T.isHemisphereLight){const b=s.hemi[p];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(x),p++}}}return{setup:c,setupView:u,state:s}}function bo(a,t){const n=new kp(a,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function l(h){s.push(h)}function c(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:n},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:l}}function Bp(a,t){let n=new WeakMap;function i(r,o=0){let l;return n.has(r)===!1?(l=new bo(a,t),n.set(r,[l])):o>=n.get(r).length?(l=new bo(a,t),n.get(r).push(l)):l=n.get(r)[o],l}function s(){n=new WeakMap}return{get:i,dispose:s}}class Ml extends Ye{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sl extends Ye{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
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
}`;function Hp(a,t,n){let i=new Yr;const s=new Ae,r=new Ae,o=new Ve,l=new Ml({depthPacking:Vc}),c=new Sl,u={},d=n.maxTextureSize,h={0:Rt,1:xi,2:Gn},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Vp,fragmentShader:Gp}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new It;_.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ct(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$o,this.render=function(T,b,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const P=a.getRenderTarget(),y=a.getActiveCubeFace(),A=a.getActiveMipmapLevel(),U=a.state;U.setBlending(Mn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let F=0,ne=T.length;F<ne;F++){const Y=T[F],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const V=D.getFrameExtents();if(s.multiply(V),r.copy(D.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/V.x),s.x=r.x*V.x,D.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/V.y),s.y=r.y*V.y,D.mapSize.y=r.y)),D.map===null&&!D.isPointLightShadow&&this.type===Wi&&(D.map=new Sn(s.x,s.y),D.map.texture.name=Y.name+".shadowMap",D.mapPass=new Sn(s.x,s.y),D.camera.updateProjectionMatrix()),D.map===null){const q={minFilter:Qe,magFilter:Qe,format:St};D.map=new Sn(s.x,s.y,q),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const k=D.getViewportCount();for(let q=0;q<k;q++){const X=D.getViewport(q);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),U.viewport(o),D.updateMatrices(Y,q),i=D.getFrustum(),E(b,C,D.camera,Y,this.type)}!D.isPointLightShadow&&this.type===Wi&&x(D,C),D.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(P,y,A)};function x(T,b){const C=t.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,a.setRenderTarget(T.mapPass),a.clear(),a.renderBufferDirect(b,null,C,f,m,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,a.setRenderTarget(T.map),a.clear(),a.renderBufferDirect(b,null,C,g,m,null)}function S(T,b,C,P,y,A){let U=null;const F=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0?U=F:U=C.isPointLight===!0?c:l,a.localClippingEnabled&&b.clipShadows===!0&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const ne=U.uuid,Y=b.uuid;let D=u[ne];D===void 0&&(D={},u[ne]=D);let V=D[Y];V===void 0&&(V=U.clone(),D[Y]=V),U=V}return U.visible=b.visible,U.wireframe=b.wireframe,A===Wi?U.side=b.shadowSide!==null?b.shadowSide:b.side:U.side=b.shadowSide!==null?b.shadowSide:h[b.side],U.alphaMap=b.alphaMap,U.alphaTest=b.alphaTest,U.clipShadows=b.clipShadows,U.clippingPlanes=b.clippingPlanes,U.clipIntersection=b.clipIntersection,U.displacementMap=b.displacementMap,U.displacementScale=b.displacementScale,U.displacementBias=b.displacementBias,U.wireframeLinewidth=b.wireframeLinewidth,U.linewidth=b.linewidth,C.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(C.matrixWorld),U.nearDistance=P,U.farDistance=y),U}function E(T,b,C,P,y){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Wi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const F=t.update(T),ne=T.material;if(Array.isArray(ne)){const Y=F.groups;for(let D=0,V=Y.length;D<V;D++){const k=Y[D],q=ne[k.materialIndex];if(q&&q.visible){const X=S(T,q,P,C.near,C.far,y);a.renderBufferDirect(C,null,F,X,T,k)}}}else if(ne.visible){const Y=S(T,ne,P,C.near,C.far,y);a.renderBufferDirect(C,null,F,Y,T,null)}}const U=T.children;for(let F=0,ne=U.length;F<ne;F++)E(U[F],b,C,P,y)}}function Wp(a,t,n){const i=n.isWebGL2;function s(){let L=!1;const ie=new Ve;let te=null;const pe=new Ve(0,0,0,0);return{setMask:function(le){te!==le&&!L&&(a.colorMask(le,le,le,le),te=le)},setLocked:function(le){L=le},setClear:function(le,ge,J,_e,Fe){Fe===!0&&(le*=_e,ge*=_e,J*=_e),ie.set(le,ge,J,_e),pe.equals(ie)===!1&&(a.clearColor(le,ge,J,_e),pe.copy(ie))},reset:function(){L=!1,te=null,pe.set(-1,0,0,0)}}}function r(){let L=!1,ie=null,te=null,pe=null;return{setTest:function(le){le?fe(2929):H(2929)},setMask:function(le){ie!==le&&!L&&(a.depthMask(le),ie=le)},setFunc:function(le){if(te!==le){if(le)switch(le){case lc:a.depthFunc(512);break;case cc:a.depthFunc(519);break;case uc:a.depthFunc(513);break;case Cr:a.depthFunc(515);break;case hc:a.depthFunc(514);break;case dc:a.depthFunc(518);break;case fc:a.depthFunc(516);break;case pc:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);te=le}},setLocked:function(le){L=le},setClear:function(le){pe!==le&&(a.clearDepth(le),pe=le)},reset:function(){L=!1,ie=null,te=null,pe=null}}}function o(){let L=!1,ie=null,te=null,pe=null,le=null,ge=null,J=null,_e=null,Fe=null;return{setTest:function(Ne){L||(Ne?fe(2960):H(2960))},setMask:function(Ne){ie!==Ne&&!L&&(a.stencilMask(Ne),ie=Ne)},setFunc:function(Ne,it,Nt){(te!==Ne||pe!==it||le!==Nt)&&(a.stencilFunc(Ne,it,Nt),te=Ne,pe=it,le=Nt)},setOp:function(Ne,it,Nt){(ge!==Ne||J!==it||_e!==Nt)&&(a.stencilOp(Ne,it,Nt),ge=Ne,J=it,_e=Nt)},setLocked:function(Ne){L=Ne},setClear:function(Ne){Fe!==Ne&&(a.clearStencil(Ne),Fe=Ne)},reset:function(){L=!1,ie=null,te=null,pe=null,le=null,ge=null,J=null,_e=null,Fe=null}}}const l=new s,c=new r,u=new o;let d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,x=null,S=null,E=null,T=null,b=null,C=null,P=!1,y=null,A=null,U=null,F=null,ne=null;const Y=a.getParameter(35661);let D=!1,V=0;const k=a.getParameter(7938);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),D=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),D=V>=2);let q=null,X={};const B=a.getParameter(3088),j=a.getParameter(2978),Q=new Ve().fromArray(B),K=new Ve().fromArray(j);function $(L,ie,te){const pe=new Uint8Array(4),le=a.createTexture();a.bindTexture(L,le),a.texParameteri(L,10241,9728),a.texParameteri(L,10240,9728);for(let ge=0;ge<te;ge++)a.texImage2D(ie+ge,0,6408,1,1,0,6408,5121,pe);return le}const ue={};ue[3553]=$(3553,3553,1),ue[34067]=$(34067,34069,6),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),fe(2929),c.setFunc(Cr),et(!1),dt(da),fe(2884),Le(Mn);function fe(L){d[L]!==!0&&(a.enable(L),d[L]=!0)}function H(L){d[L]!==!1&&(a.disable(L),d[L]=!1)}function Ge(L,ie){return h[L]!==ie?(a.bindFramebuffer(L,ie),h[L]=ie,i&&(L===36009&&(h[36160]=ie),L===36160&&(h[36009]=ie)),!0):!1}function Me(L,ie){let te=g,pe=!1;if(L)if(te=f.get(ie),te===void 0&&(te=[],f.set(ie,te)),L.isWebGLMultipleRenderTargets){const le=L.texture;if(te.length!==le.length||te[0]!==36064){for(let ge=0,J=le.length;ge<J;ge++)te[ge]=36064+ge;te.length=le.length,pe=!0}}else te[0]!==36064&&(te[0]=36064,pe=!0);else te[0]!==1029&&(te[0]=1029,pe=!0);pe&&(n.isWebGL2?a.drawBuffers(te):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Se(L){return _!==L?(a.useProgram(L),_=L,!0):!1}const ae={[pi]:32774,[$l]:32778,[Jl]:32779};if(i)ae[ga]=32775,ae[_a]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(ae[ga]=L.MIN_EXT,ae[_a]=L.MAX_EXT)}const ze={[Ql]:0,[ec]:1,[tc]:768,[Jo]:770,[oc]:776,[rc]:774,[ic]:772,[nc]:769,[Qo]:771,[ac]:775,[sc]:773};function Le(L,ie,te,pe,le,ge,J,_e){if(L===Mn){m===!0&&(H(3042),m=!1);return}if(m===!1&&(fe(3042),m=!0),L!==Zl){if(L!==p||_e!==P){if((x!==pi||T!==pi)&&(a.blendEquation(32774),x=pi,T=pi),_e)switch(L){case gi:a.blendFuncSeparate(1,771,1,771);break;case fa:a.blendFunc(1,1);break;case pa:a.blendFuncSeparate(0,769,0,1);break;case ma:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case gi:a.blendFuncSeparate(770,771,1,771);break;case fa:a.blendFunc(770,1);break;case pa:a.blendFuncSeparate(0,769,0,1);break;case ma:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,E=null,b=null,C=null,p=L,P=_e}return}le=le||ie,ge=ge||te,J=J||pe,(ie!==x||le!==T)&&(a.blendEquationSeparate(ae[ie],ae[le]),x=ie,T=le),(te!==S||pe!==E||ge!==b||J!==C)&&(a.blendFuncSeparate(ze[te],ze[pe],ze[ge],ze[J]),S=te,E=pe,b=ge,C=J),p=L,P=null}function xe(L,ie){L.side===Gn?H(2884):fe(2884);let te=L.side===Rt;ie&&(te=!te),et(te),L.blending===gi&&L.transparent===!1?Le(Mn):Le(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),l.setMask(L.colorWrite);const pe=L.stencilWrite;u.setTest(pe),pe&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(32926):H(32926)}function et(L){y!==L&&(L?a.frontFace(2304):a.frontFace(2305),y=L)}function dt(L){L!==Xl?(fe(2884),L!==A&&(L===da?a.cullFace(1029):L===jl?a.cullFace(1028):a.cullFace(1032))):H(2884),A=L}function pt(L){L!==U&&(D&&a.lineWidth(L),U=L)}function Ft(L,ie,te){L?(fe(32823),(F!==ie||ne!==te)&&(a.polygonOffset(ie,te),F=ie,ne=te)):H(32823)}function $e(L){L?fe(3089):H(3089)}function ke(L){L===void 0&&(L=33984+Y-1),q!==L&&(a.activeTexture(L),q=L)}function Yt(L,ie){q===null&&ke();let te=X[q];te===void 0&&(te={type:void 0,texture:void 0},X[q]=te),(te.type!==L||te.texture!==ie)&&(a.bindTexture(L,ie||ue[L]),te.type=L,te.texture=ie)}function Kt(){const L=X[q];L!==void 0&&L.type!==void 0&&(a.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function w(){try{a.compressedTexImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function v(){try{a.texSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{a.texSubImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{a.texStorage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{a.texStorage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{a.texImage2D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{a.texImage3D.apply(a,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){Q.equals(L)===!1&&(a.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function ce(L){K.equals(L)===!1&&(a.viewport(L.x,L.y,L.z,L.w),K.copy(L))}function oe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),d={},q=null,X={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,x=null,S=null,E=null,T=null,b=null,C=null,P=!1,y=null,A=null,U=null,F=null,ne=null,Q.set(0,0,a.canvas.width,a.canvas.height),K.set(0,0,a.canvas.width,a.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:fe,disable:H,bindFramebuffer:Ge,drawBuffers:Me,useProgram:Se,setBlending:Le,setMaterial:xe,setFlipSided:et,setCullFace:dt,setLineWidth:pt,setPolygonOffset:Ft,setScissorTest:$e,activeTexture:ke,bindTexture:Yt,unbindTexture:Kt,compressedTexImage2D:w,texImage2D:ve,texImage3D:z,texStorage2D:ee,texStorage3D:re,texSubImage2D:v,texSubImage3D:G,compressedTexSubImage2D:Z,scissor:de,viewport:ce,reset:oe}}function qp(a,t,n,i,s,r,o){const l=s.isWebGL2,c=s.maxTextures,u=s.maxCubemapSize,d=s.maxTextureSize,h=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,v){return x?new OffscreenCanvas(w,v):$i("canvas")}function E(w,v,G,Z){let ee=1;if((w.width>Z||w.height>Z)&&(ee=Z/Math.max(w.width,w.height)),ee<1||v===!0)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap){const re=v?Os:Math.floor,ve=re(ee*w.width),z=re(ee*w.height);m===void 0&&(m=S(ve,z));const de=G?S(ve,z):m;return de.width=ve,de.height=z,de.getContext("2d").drawImage(w,0,0,ve,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ve+"x"+z+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function T(w){return Or(w.width)&&Or(w.height)}function b(w){return l?!1:w.wrapS!==Mt||w.wrapT!==Mt||w.minFilter!==Qe&&w.minFilter!==ft}function C(w,v){return w.generateMipmaps&&v&&w.minFilter!==Qe&&w.minFilter!==ft}function P(w){a.generateMipmap(w)}function y(w,v,G,Z,ee=!1){if(l===!1)return v;if(w!==null){if(a[w]!==void 0)return a[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let re=v;return v===6403&&(G===5126&&(re=33326),G===5131&&(re=33325),G===5121&&(re=33321)),v===33319&&(G===5126&&(re=33328),G===5131&&(re=33327),G===5121&&(re=33323)),v===6408&&(G===5126&&(re=34836),G===5131&&(re=34842),G===5121&&(re=Z===Ie&&ee===!1?35907:32856),G===32819&&(re=32854),G===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&t.get("EXT_color_buffer_float"),re}function A(w,v,G){return C(w,G)===!0||w.isFramebufferTexture&&w.minFilter!==Qe&&w.minFilter!==ft?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function U(w){return w===Qe||w===Pr||w===Ir?9728:9729}function F(w){const v=w.target;v.removeEventListener("dispose",F),Y(v),v.isVideoTexture&&_.delete(v)}function ne(w){const v=w.target;v.removeEventListener("dispose",ne),V(v)}function Y(w){const v=i.get(w);if(v.__webglInit===void 0)return;const G=w.source,Z=p.get(G);if(Z){const ee=Z[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&D(w),Object.keys(Z).length===0&&p.delete(G)}i.remove(w)}function D(w){const v=i.get(w);a.deleteTexture(v.__webglTexture);const G=w.source,Z=p.get(G);delete Z[v.__cacheKey],o.memory.textures--}function V(w){const v=w.texture,G=i.get(w),Z=i.get(v);if(Z.__webglTexture!==void 0&&(a.deleteTexture(Z.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)a.deleteFramebuffer(G.__webglFramebuffer[ee]),G.__webglDepthbuffer&&a.deleteRenderbuffer(G.__webglDepthbuffer[ee]);else{if(a.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&a.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&a.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ee=0;ee<G.__webglColorRenderbuffer.length;ee++)G.__webglColorRenderbuffer[ee]&&a.deleteRenderbuffer(G.__webglColorRenderbuffer[ee]);G.__webglDepthRenderbuffer&&a.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,re=v.length;ee<re;ee++){const ve=i.get(v[ee]);ve.__webglTexture&&(a.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(v[ee])}i.remove(v),i.remove(w)}let k=0;function q(){k=0}function X(){const w=k;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),k+=1,w}function B(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.encoding),v.join()}function j(w,v){const G=i.get(w);if(w.isVideoTexture&&Yt(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(G,w,v);return}}n.activeTexture(33984+v),n.bindTexture(3553,G.__webglTexture)}function Q(w,v){const G=i.get(w);if(w.version>0&&G.__version!==w.version){Me(G,w,v);return}n.activeTexture(33984+v),n.bindTexture(35866,G.__webglTexture)}function K(w,v){const G=i.get(w);if(w.version>0&&G.__version!==w.version){Me(G,w,v);return}n.activeTexture(33984+v),n.bindTexture(32879,G.__webglTexture)}function $(w,v){const G=i.get(w);if(w.version>0&&G.__version!==w.version){Se(G,w,v);return}n.activeTexture(33984+v),n.bindTexture(34067,G.__webglTexture)}const ue={[Mi]:10497,[Mt]:33071,[Ns]:33648},fe={[Qe]:9728,[Pr]:9984,[Ir]:9986,[ft]:9729,[tl]:9985,[Ai]:9987};function H(w,v,G){if(G?(a.texParameteri(w,10242,ue[v.wrapS]),a.texParameteri(w,10243,ue[v.wrapT]),(w===32879||w===35866)&&a.texParameteri(w,32882,ue[v.wrapR]),a.texParameteri(w,10240,fe[v.magFilter]),a.texParameteri(w,10241,fe[v.minFilter])):(a.texParameteri(w,10242,33071),a.texParameteri(w,10243,33071),(w===32879||w===35866)&&a.texParameteri(w,32882,33071),(v.wrapS!==Mt||v.wrapT!==Mt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(w,10240,U(v.magFilter)),a.texParameteri(w,10241,U(v.minFilter)),v.minFilter!==Qe&&v.minFilter!==ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(v.type===yn&&t.has("OES_texture_float_linear")===!1||l===!1&&v.type===Yi&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(a.texParameterf(w,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Ge(w,v){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",F));const Z=v.source;let ee=p.get(Z);ee===void 0&&(ee={},p.set(Z,ee));const re=B(v);if(re!==w.__cacheKey){ee[re]===void 0&&(ee[re]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[re].usedTimes++;const ve=ee[w.__cacheKey];ve!==void 0&&(ee[w.__cacheKey].usedTimes--,ve.usedTimes===0&&D(v)),w.__cacheKey=re,w.__webglTexture=ee[re].texture}return G}function Me(w,v,G){let Z=3553;v.isDataArrayTexture&&(Z=35866),v.isData3DTexture&&(Z=32879);const ee=Ge(w,v),re=v.source;if(n.activeTexture(33984+G),n.bindTexture(Z,w.__webglTexture),re.version!==re.__currentVersion||ee===!0){a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);const ve=b(v)&&T(v.image)===!1;let z=E(v.image,ve,!1,d);z=Kt(v,z);const de=T(z)||l,ce=r.convert(v.format,v.encoding);let oe=r.convert(v.type),L=y(v.internalFormat,ce,oe,v.encoding,v.isVideoTexture);H(Z,v,de);let ie;const te=v.mipmaps,pe=l&&v.isVideoTexture!==!0,le=re.__currentVersion===void 0||ee===!0,ge=A(v,z,de);if(v.isDepthTexture)L=6402,l?v.type===yn?L=36012:v.type===On?L=33190:v.type===_i?L=35056:L=33189:v.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===kn&&L===6402&&v.type!==nl&&v.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=On,oe=r.convert(v.type)),v.format===Si&&L===6402&&(L=34041,v.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=_i,oe=r.convert(v.type))),le&&(pe?n.texStorage2D(3553,1,L,z.width,z.height):n.texImage2D(3553,0,L,z.width,z.height,0,ce,oe,null));else if(v.isDataTexture)if(te.length>0&&de){pe&&le&&n.texStorage2D(3553,ge,L,te[0].width,te[0].height);for(let J=0,_e=te.length;J<_e;J++)ie=te[J],pe?n.texSubImage2D(3553,J,0,0,ie.width,ie.height,ce,oe,ie.data):n.texImage2D(3553,J,L,ie.width,ie.height,0,ce,oe,ie.data);v.generateMipmaps=!1}else pe?(le&&n.texStorage2D(3553,ge,L,z.width,z.height),n.texSubImage2D(3553,0,0,0,z.width,z.height,ce,oe,z.data)):n.texImage2D(3553,0,L,z.width,z.height,0,ce,oe,z.data);else if(v.isCompressedTexture){pe&&le&&n.texStorage2D(3553,ge,L,te[0].width,te[0].height);for(let J=0,_e=te.length;J<_e;J++)ie=te[J],v.format!==St?ce!==null?pe?n.compressedTexSubImage2D(3553,J,0,0,ie.width,ie.height,ce,ie.data):n.compressedTexImage2D(3553,J,L,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?n.texSubImage2D(3553,J,0,0,ie.width,ie.height,ce,oe,ie.data):n.texImage2D(3553,J,L,ie.width,ie.height,0,ce,oe,ie.data)}else if(v.isDataArrayTexture)pe?(le&&n.texStorage3D(35866,ge,L,z.width,z.height,z.depth),n.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,ce,oe,z.data)):n.texImage3D(35866,0,L,z.width,z.height,z.depth,0,ce,oe,z.data);else if(v.isData3DTexture)pe?(le&&n.texStorage3D(32879,ge,L,z.width,z.height,z.depth),n.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,ce,oe,z.data)):n.texImage3D(32879,0,L,z.width,z.height,z.depth,0,ce,oe,z.data);else if(v.isFramebufferTexture){if(le)if(pe)n.texStorage2D(3553,ge,L,z.width,z.height);else{let J=z.width,_e=z.height;for(let Fe=0;Fe<ge;Fe++)n.texImage2D(3553,Fe,L,J,_e,0,ce,oe,null),J>>=1,_e>>=1}}else if(te.length>0&&de){pe&&le&&n.texStorage2D(3553,ge,L,te[0].width,te[0].height);for(let J=0,_e=te.length;J<_e;J++)ie=te[J],pe?n.texSubImage2D(3553,J,0,0,ce,oe,ie):n.texImage2D(3553,J,L,ce,oe,ie);v.generateMipmaps=!1}else pe?(le&&n.texStorage2D(3553,ge,L,z.width,z.height),n.texSubImage2D(3553,0,0,0,ce,oe,z)):n.texImage2D(3553,0,L,ce,oe,z);C(v,de)&&P(Z),re.__currentVersion=re.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Se(w,v,G){if(v.image.length!==6)return;const Z=Ge(w,v),ee=v.source;if(n.activeTexture(33984+G),n.bindTexture(34067,w.__webglTexture),ee.version!==ee.__currentVersion||Z===!0){a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);const re=v.isCompressedTexture||v.image[0].isCompressedTexture,ve=v.image[0]&&v.image[0].isDataTexture,z=[];for(let J=0;J<6;J++)!re&&!ve?z[J]=E(v.image[J],!1,!0,u):z[J]=ve?v.image[J].image:v.image[J],z[J]=Kt(v,z[J]);const de=z[0],ce=T(de)||l,oe=r.convert(v.format,v.encoding),L=r.convert(v.type),ie=y(v.internalFormat,oe,L,v.encoding),te=l&&v.isVideoTexture!==!0,pe=ee.__currentVersion===void 0||Z===!0;let le=A(v,de,ce);H(34067,v,ce);let ge;if(re){te&&pe&&n.texStorage2D(34067,le,ie,de.width,de.height);for(let J=0;J<6;J++){ge=z[J].mipmaps;for(let _e=0;_e<ge.length;_e++){const Fe=ge[_e];v.format!==St?oe!==null?te?n.compressedTexSubImage2D(34069+J,_e,0,0,Fe.width,Fe.height,oe,Fe.data):n.compressedTexImage2D(34069+J,_e,ie,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?n.texSubImage2D(34069+J,_e,0,0,Fe.width,Fe.height,oe,L,Fe.data):n.texImage2D(34069+J,_e,ie,Fe.width,Fe.height,0,oe,L,Fe.data)}}}else{ge=v.mipmaps,te&&pe&&(ge.length>0&&le++,n.texStorage2D(34067,le,ie,z[0].width,z[0].height));for(let J=0;J<6;J++)if(ve){te?n.texSubImage2D(34069+J,0,0,0,z[J].width,z[J].height,oe,L,z[J].data):n.texImage2D(34069+J,0,ie,z[J].width,z[J].height,0,oe,L,z[J].data);for(let _e=0;_e<ge.length;_e++){const Ne=ge[_e].image[J].image;te?n.texSubImage2D(34069+J,_e+1,0,0,Ne.width,Ne.height,oe,L,Ne.data):n.texImage2D(34069+J,_e+1,ie,Ne.width,Ne.height,0,oe,L,Ne.data)}}else{te?n.texSubImage2D(34069+J,0,0,0,oe,L,z[J]):n.texImage2D(34069+J,0,ie,oe,L,z[J]);for(let _e=0;_e<ge.length;_e++){const Fe=ge[_e];te?n.texSubImage2D(34069+J,_e+1,0,0,oe,L,Fe.image[J]):n.texImage2D(34069+J,_e+1,ie,oe,L,Fe.image[J])}}}C(v,ce)&&P(34067),ee.__currentVersion=ee.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ae(w,v,G,Z,ee){const re=r.convert(G.format,G.encoding),ve=r.convert(G.type),z=y(G.internalFormat,re,ve,G.encoding);i.get(v).__hasExternalTextures||(ee===32879||ee===35866?n.texImage3D(ee,0,z,v.width,v.height,v.depth,0,re,ve,null):n.texImage2D(ee,0,z,v.width,v.height,0,re,ve,null)),n.bindFramebuffer(36160,w),ke(v)?f.framebufferTexture2DMultisampleEXT(36160,Z,ee,i.get(G).__webglTexture,0,$e(v)):a.framebufferTexture2D(36160,Z,ee,i.get(G).__webglTexture,0),n.bindFramebuffer(36160,null)}function ze(w,v,G){if(a.bindRenderbuffer(36161,w),v.depthBuffer&&!v.stencilBuffer){let Z=33189;if(G||ke(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===yn?Z=36012:ee.type===On&&(Z=33190));const re=$e(v);ke(v)?f.renderbufferStorageMultisampleEXT(36161,re,Z,v.width,v.height):a.renderbufferStorageMultisample(36161,re,Z,v.width,v.height)}else a.renderbufferStorage(36161,Z,v.width,v.height);a.framebufferRenderbuffer(36160,36096,36161,w)}else if(v.depthBuffer&&v.stencilBuffer){const Z=$e(v);G&&ke(v)===!1?a.renderbufferStorageMultisample(36161,Z,35056,v.width,v.height):ke(v)?f.renderbufferStorageMultisampleEXT(36161,Z,35056,v.width,v.height):a.renderbufferStorage(36161,34041,v.width,v.height),a.framebufferRenderbuffer(36160,33306,36161,w)}else{const Z=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ee=0;ee<Z.length;ee++){const re=Z[ee],ve=r.convert(re.format,re.encoding),z=r.convert(re.type),de=y(re.internalFormat,ve,z,re.encoding),ce=$e(v);G&&ke(v)===!1?a.renderbufferStorageMultisample(36161,ce,de,v.width,v.height):ke(v)?f.renderbufferStorageMultisampleEXT(36161,ce,de,v.width,v.height):a.renderbufferStorage(36161,de,v.width,v.height)}}a.bindRenderbuffer(36161,null)}function Le(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const Z=i.get(v.depthTexture).__webglTexture,ee=$e(v);if(v.depthTexture.format===kn)ke(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,ee):a.framebufferTexture2D(36160,36096,3553,Z,0);else if(v.depthTexture.format===Si)ke(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,ee):a.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function xe(w){const v=i.get(w),G=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Le(v.__webglFramebuffer,w)}else if(G){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(36160,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]=a.createRenderbuffer(),ze(v.__webglDepthbuffer[Z],w,!1)}else n.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=a.createRenderbuffer(),ze(v.__webglDepthbuffer,w,!1);n.bindFramebuffer(36160,null)}function et(w,v,G){const Z=i.get(w);v!==void 0&&ae(Z.__webglFramebuffer,w,w.texture,36064,3553),G!==void 0&&xe(w)}function dt(w){const v=w.texture,G=i.get(w),Z=i.get(v);w.addEventListener("dispose",ne),w.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=a.createTexture()),Z.__version=v.version,o.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,re=w.isWebGLMultipleRenderTargets===!0,ve=T(w)||l;if(ee){G.__webglFramebuffer=[];for(let z=0;z<6;z++)G.__webglFramebuffer[z]=a.createFramebuffer()}else{if(G.__webglFramebuffer=a.createFramebuffer(),re)if(s.drawBuffers){const z=w.texture;for(let de=0,ce=z.length;de<ce;de++){const oe=i.get(z[de]);oe.__webglTexture===void 0&&(oe.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&w.samples>0&&ke(w)===!1){const z=re?v:[v];G.__webglMultisampledFramebuffer=a.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let de=0;de<z.length;de++){const ce=z[de];G.__webglColorRenderbuffer[de]=a.createRenderbuffer(),a.bindRenderbuffer(36161,G.__webglColorRenderbuffer[de]);const oe=r.convert(ce.format,ce.encoding),L=r.convert(ce.type),ie=y(ce.internalFormat,oe,L,ce.encoding),te=$e(w);a.renderbufferStorageMultisample(36161,te,ie,w.width,w.height),a.framebufferRenderbuffer(36160,36064+de,36161,G.__webglColorRenderbuffer[de])}a.bindRenderbuffer(36161,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=a.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(36160,null)}}if(ee){n.bindTexture(34067,Z.__webglTexture),H(34067,v,ve);for(let z=0;z<6;z++)ae(G.__webglFramebuffer[z],w,v,36064,34069+z);C(v,ve)&&P(34067),n.unbindTexture()}else if(re){const z=w.texture;for(let de=0,ce=z.length;de<ce;de++){const oe=z[de],L=i.get(oe);n.bindTexture(3553,L.__webglTexture),H(3553,oe,ve),ae(G.__webglFramebuffer,w,oe,36064+de,3553),C(oe,ve)&&P(3553)}n.unbindTexture()}else{let z=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(l?z=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(z,Z.__webglTexture),H(z,v,ve),ae(G.__webglFramebuffer,w,v,36064,z),C(v,ve)&&P(z),n.unbindTexture()}w.depthBuffer&&xe(w)}function pt(w){const v=T(w)||l,G=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Z=0,ee=G.length;Z<ee;Z++){const re=G[Z];if(C(re,v)){const ve=w.isWebGLCubeRenderTarget?34067:3553,z=i.get(re).__webglTexture;n.bindTexture(ve,z),P(ve),n.unbindTexture()}}}function Ft(w){if(l&&w.samples>0&&ke(w)===!1){const v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],G=w.width,Z=w.height;let ee=16384;const re=[],ve=w.stencilBuffer?33306:36096,z=i.get(w),de=w.isWebGLMultipleRenderTargets===!0;if(de)for(let ce=0;ce<v.length;ce++)n.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ce,36161,null),n.bindFramebuffer(36160,z.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ce,3553,null,0);n.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,z.__webglFramebuffer);for(let ce=0;ce<v.length;ce++){re.push(36064+ce),w.depthBuffer&&re.push(ve);const oe=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(oe===!1&&(w.depthBuffer&&(ee|=256),w.stencilBuffer&&(ee|=1024)),de&&a.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[ce]),oe===!0&&(a.invalidateFramebuffer(36008,[ve]),a.invalidateFramebuffer(36009,[ve])),de){const L=i.get(v[ce]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,L,0)}a.blitFramebuffer(0,0,G,Z,0,0,G,Z,ee,9728),g&&a.invalidateFramebuffer(36008,re)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),de)for(let ce=0;ce<v.length;ce++){n.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ce,36161,z.__webglColorRenderbuffer[ce]);const oe=i.get(v[ce]).__webglTexture;n.bindFramebuffer(36160,z.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ce,3553,oe,0)}n.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function $e(w){return Math.min(h,w.samples)}function ke(w){const v=i.get(w);return l&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Yt(w){const v=o.render.frame;_.get(w)!==v&&(_.set(w,v),w.update())}function Kt(w,v){const G=w.encoding,Z=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Nr||G!==Wn&&(G===Ie?l===!1?t.has("EXT_sRGB")===!0&&Z===St?(w.format=Nr,w.minFilter=ft,w.generateMipmaps=!1):v=ol.sRGBToLinear(v):(Z!==St||ee!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),v}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=et,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ke}function Xp(a,t,n){const i=n.isWebGL2;function s(r,o=null){let l;if(r===Hn)return 5121;if(r===Tc)return 32819;if(r===Ec)return 32820;if(r===Sc)return 5120;if(r===bc)return 5122;if(r===nl)return 5123;if(r===wc)return 5124;if(r===On)return 5125;if(r===yn)return 5126;if(r===Yi)return i?5131:(l=t.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(r===Ac)return 6406;if(r===St)return 6408;if(r===Cc)return 6409;if(r===Rc)return 6410;if(r===kn)return 6402;if(r===Si)return 34041;if(r===Dc)return 6403;if(r===Lc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Nr)return l=t.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(r===Pc)return 36244;if(r===Ic)return 33319;if(r===Fc)return 33320;if(r===Nc)return 36249;if(r===Xs||r===js||r===Ys||r===Ks)if(o===Ie)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Xs)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===js)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ys)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ks)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Xs)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===js)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ys)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ks)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xa||r===va||r===ya||r===Ma)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===xa)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===va)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ya)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ma)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oc)return l=t.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Sa||r===ba)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Sa)return o===Ie?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ba)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wa||r===Ta||r===Ea||r===Aa||r===La||r===Ca||r===Ra||r===Da||r===Pa||r===Ia||r===Fa||r===Na||r===Oa||r===Ua)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(r===wa)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ta)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ea)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Aa)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===La)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ca)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ra)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Da)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pa)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ia)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fa)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Na)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Oa)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ua)return o===Ie?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===za)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(r===za)return o===Ie?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===_i?i?34042:(l=t.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:s}}class jp extends lt{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zn extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yp={type:"move"};class br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null;const l=this._targetRay,c=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred")if(l!==null&&(s=n.getPose(t.targetRaySpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Yp))),u&&t.hand){o=!0;for(const m of t.hand.values()){const p=n.getJointPose(m,i);if(u.joints[m.jointName]===void 0){const S=new zn;S.matrixAutoUpdate=!1,S.visible=!1,u.joints[m.jointName]=S,u.add(S)}const x=u.joints[m.jointName];p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),g=.02,_=.005;u.inputState.pinching&&f>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}}class Kp extends ct{constructor(t,n,i,s,r,o,l,c,u,d){if(d=d!==void 0?d:kn,d!==kn&&d!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===kn&&(i=On),i===void 0&&d===Si&&(i=_i),super(null,s,r,o,l,c,d,i,u),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=l!==void 0?l:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1}}class Zp extends Yn{constructor(t,n){super();const i=this;let s=null,r=1,o=null,l="local-floor",c=null,u=null,d=null,h=null,f=null,g=null;const _=n.getContextAttributes();let m=null,p=null;const x=[],S=new Map,E=new lt;E.layers.enable(1),E.viewport=new Ve;const T=new lt;T.layers.enable(2),T.viewport=new Ve;const b=[E,T],C=new jp;C.layers.enable(1),C.layers.enable(2);let P=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=x[B];return j===void 0&&(j=new br,x[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=x[B];return j===void 0&&(j=new br,x[B]=j),j.getGripSpace()},this.getHand=function(B){let j=x[B];return j===void 0&&(j=new br,x[B]=j),j.getHandSpace()};function A(B){const j=S.get(B.inputSource);j!==void 0&&j.dispatchEvent({type:B.type,data:B.inputSource})}function U(){s.removeEventListener("select",A),s.removeEventListener("selectstart",A),s.removeEventListener("selectend",A),s.removeEventListener("squeeze",A),s.removeEventListener("squeezestart",A),s.removeEventListener("squeezeend",A),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",F),S.forEach(function(B,j){B!==void 0&&B.disconnect(j)}),S.clear(),P=null,y=null,t.setRenderTarget(m),f=null,h=null,d=null,s=null,p=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){l=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",A),s.addEventListener("selectstart",A),s.addEventListener("selectend",A),s.addEventListener("squeeze",A),s.addEventListener("squeezestart",A),s.addEventListener("squeezeend",A),s.addEventListener("end",U),s.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await n.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,j),s.updateRenderState({baseLayer:f}),p=new Sn(f.framebufferWidth,f.framebufferHeight,{format:St,type:Hn,encoding:t.outputEncoding})}else{let j=null,Q=null,K=null;_.depth&&(K=_.stencil?35056:33190,j=_.stencil?Si:kn,Q=_.stencil?_i:On);const $={colorFormat:t.outputEncoding===Ie?35907:32856,depthFormat:K,scaleFactor:r};d=new XRWebGLBinding(s,n),h=d.createProjectionLayer($),s.updateRenderState({layers:[h]}),p=new Sn(h.textureWidth,h.textureHeight,{format:St,type:Hn,depthTexture:new Kp(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,encoding:t.outputEncoding,samples:_.antialias?4:0});const ue=t.properties.get(p);ue.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await s.requestReferenceSpace(l),X.setContext(s),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(B){const j=s.inputSources;for(let Q=0;Q<j.length;Q++){const K=j[Q].handedness==="right"?1:0;S.set(j[Q],x[K])}for(let Q=0;Q<B.removed.length;Q++){const K=B.removed[Q],$=S.get(K);$&&($.dispatchEvent({type:"disconnected",data:K}),S.delete(K))}for(let Q=0;Q<B.added.length;Q++){const K=B.added[Q],$=S.get(K);$&&$.dispatchEvent({type:"connected",data:K})}}const ne=new R,Y=new R;function D(B,j,Q){ne.setFromMatrixPosition(j.matrixWorld),Y.setFromMatrixPosition(Q.matrixWorld);const K=ne.distanceTo(Y),$=j.projectionMatrix.elements,ue=Q.projectionMatrix.elements,fe=$[14]/($[10]-1),H=$[14]/($[10]+1),Ge=($[9]+1)/$[5],Me=($[9]-1)/$[5],Se=($[8]-1)/$[0],ae=(ue[8]+1)/ue[0],ze=fe*Se,Le=fe*ae,xe=K/(-Se+ae),et=xe*-Se;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(et),B.translateZ(xe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const dt=fe+xe,pt=H+xe,Ft=ze-et,$e=Le+(K-et),ke=Ge*H/pt*dt,Yt=Me*H/pt*dt;B.projectionMatrix.makePerspective(Ft,$e,ke,Yt,dt,pt)}function V(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;C.near=T.near=E.near=B.near,C.far=T.far=E.far=B.far,(P!==C.near||y!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,y=C.far);const j=B.parent,Q=C.cameras;V(C,j);for(let $=0;$<Q.length;$++)V(Q[$],j);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),B.position.copy(C.position),B.quaternion.copy(C.quaternion),B.scale.copy(C.scale),B.matrix.copy(C.matrix),B.matrixWorld.copy(C.matrixWorld);const K=B.children;for(let $=0,ue=K.length;$<ue;$++)K[$].updateMatrixWorld(!0);Q.length===2?D(C,E,T):C.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(B){h!==null&&(h.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)};let k=null;function q(B,j){if(u=j.getViewerPose(c||o),g=j,u!==null){const K=u.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let $=!1;K.length!==C.cameras.length&&(C.cameras.length=0,$=!0);for(let ue=0;ue<K.length;ue++){const fe=K[ue];let H=null;if(f!==null)H=f.getViewport(fe);else{const Me=d.getViewSubImage(h,fe);H=Me.viewport,ue===0&&(t.setRenderTargetTextures(p,Me.colorTexture,h.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(p))}let Ge=b[ue];Ge===void 0&&(Ge=new lt,Ge.layers.enable(ue),Ge.viewport=new Ve,b[ue]=Ge),Ge.matrix.fromArray(fe.transform.matrix),Ge.projectionMatrix.fromArray(fe.projectionMatrix),Ge.viewport.set(H.x,H.y,H.width,H.height),ue===0&&C.matrix.copy(Ge.matrix),$===!0&&C.cameras.push(Ge)}}const Q=s.inputSources;for(let K=0;K<x.length;K++){const $=Q[K],ue=S.get($);ue!==void 0&&ue.update($,j,c||o)}k&&k(B,j),g=null}const X=new ml;X.setAnimationLoop(q),this.setAnimationLoop=function(B){k=B},this.dispose=function(){}}}function $p(a,t){function n(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=a.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),m.uvTransform.value.copy(S.matrix));let E;p.aoMap?E=p.aoMap:p.lightMap&&(E=p.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uv2Transform.value.copy(E.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=S*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jp(){const a=$i("canvas");return a.style.display="block",a}function bl(a={}){this.isWebGLRenderer=!0;const t=a.canvas!==void 0?a.canvas:Jp(),n=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,s=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,l=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",u=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let d;n!==null?d=n.getContextAttributes().alpha:d=a.alpha!==void 0?a.alpha:!1;let h=null,f=null;const g=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wn,this.physicallyCorrectLights=!1,this.toneMapping=on,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,x=0,S=0,E=null,T=-1,b=null;const C=new Ve,P=new Ve;let y=null,A=t.width,U=t.height,F=1,ne=null,Y=null;const D=new Ve(0,0,A,U),V=new Ve(0,0,A,U);let k=!1;const q=new Yr;let X=!1,B=!1,j=null;const Q=new De,K=new Ae,$=new R,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return E===null?F:1}let H=n;function Ge(M,I){for(let O=0;O<M.length;O++){const N=M[O],W=t.getContext(N,I);if(W!==null)return W}return null}try{const M={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qr}`),t.addEventListener("webglcontextlost",L,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",te,!1),H===null){const I=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&I.shift(),H=Ge(I,M),H===null)throw Ge(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Me,Se,ae,ze,Le,xe,et,dt,pt,Ft,$e,ke,Yt,Kt,w,v,G,Z,ee,re,ve,z,de;function ce(){Me=new hf(H),Se=new rf(H,Me,a),Me.init(Se),z=new Xp(H,Me,Se),ae=new Wp(H,Me,Se),ze=new pf(H),Le=new Pp,xe=new qp(H,Me,ae,Le,Se,z,ze),et=new of(m),dt=new uf(m),pt=new Tu(H,Se),de=new nf(H,Me,pt,Se),Ft=new df(H,pt,ze,de),$e=new xf(H,Ft,pt,ze),ee=new _f(H,Se,xe),v=new af(Le),ke=new Dp(m,et,dt,Me,Se,de,v),Yt=new $p(m,Le),Kt=new Fp,w=new Bp(Me,Se),Z=new tf(m,et,ae,$e,d,o),G=new Hp(m,$e,Se),re=new sf(H,Me,ze,Se),ve=new ff(H,Me,ze,Se),ze.programs=ke.programs,m.capabilities=Se,m.extensions=Me,m.properties=Le,m.renderLists=Kt,m.shadowMap=G,m.state=ae,m.info=ze}ce();const oe=new Zp(m,H);this.xr=oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const M=Me.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Me.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(M){M!==void 0&&(F=M,this.setSize(A,U,!1))},this.getSize=function(M){return M.set(A,U)},this.setSize=function(M,I,O){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=M,U=I,t.width=Math.floor(M*F),t.height=Math.floor(I*F),O!==!1&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(A*F,U*F).floor()},this.setDrawingBufferSize=function(M,I,O){A=M,U=I,F=O,t.width=Math.floor(M*O),t.height=Math.floor(I*O),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(D)},this.setViewport=function(M,I,O,N){M.isVector4?D.set(M.x,M.y,M.z,M.w):D.set(M,I,O,N),ae.viewport(C.copy(D).multiplyScalar(F).floor())},this.getScissor=function(M){return M.copy(V)},this.setScissor=function(M,I,O,N){M.isVector4?V.set(M.x,M.y,M.z,M.w):V.set(M,I,O,N),ae.scissor(P.copy(V).multiplyScalar(F).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(M){ae.setScissorTest(k=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){Y=M},this.getClearColor=function(M){return M.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(M=!0,I=!0,O=!0){let N=0;M&&(N|=16384),I&&(N|=256),O&&(N|=1024),H.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",L,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Kt.dispose(),w.dispose(),Le.dispose(),et.dispose(),dt.dispose(),$e.dispose(),de.dispose(),ke.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Fe),oe.removeEventListener("sessionend",Ne),j&&(j.dispose(),j=null),it.stop()};function L(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const M=ze.autoReset,I=G.enabled,O=G.autoUpdate,N=G.needsUpdate,W=G.type;ce(),ze.autoReset=M,G.enabled=I,G.autoUpdate=O,G.needsUpdate=N,G.type=W}function te(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function pe(M){const I=M.target;I.removeEventListener("dispose",pe),le(I)}function le(M){ge(M),Le.remove(M)}function ge(M){const I=Le.get(M).programs;I!==void 0&&(I.forEach(function(O){ke.releaseProgram(O)}),M.isShaderMaterial&&ke.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,O,N,W,me){I===null&&(I=ue);const ye=W.isMesh&&W.matrixWorld.determinant()<0,we=Gl(M,I,O,N,W);ae.setMaterial(N,ye);let be=O.index;const Oe=O.attributes.position;if(be===null){if(Oe===void 0||Oe.count===0)return}else if(be.count===0)return;let Ce=1;N.wireframe===!0&&(be=Ft.getWireframeAttribute(O),Ce=2),de.setup(W,N,we,O,be);let Re,qe=re;be!==null&&(Re=pt.get(be),qe=ve,qe.setIndex(Re));const wn=be!==null?be.count:Oe.count,Kn=O.drawRange.start*Ce,Zn=O.drawRange.count*Ce,Ot=me!==null?me.start*Ce:0,Pe=me!==null?me.count*Ce:1/0,$n=Math.max(Kn,Ot),Xe=Math.min(wn,Kn+Zn,Ot+Pe)-1,Ut=Math.max(0,Xe-$n+1);if(Ut!==0){if(W.isMesh)N.wireframe===!0?(ae.setLineWidth(N.wireframeLinewidth*fe()),qe.setMode(1)):qe.setMode(4);else if(W.isLine){let cn=N.linewidth;cn===void 0&&(cn=1),ae.setLineWidth(cn*fe()),W.isLineSegments?qe.setMode(1):W.isLineLoop?qe.setMode(2):qe.setMode(3)}else W.isPoints?qe.setMode(0):W.isSprite&&qe.setMode(4);if(W.isInstancedMesh)qe.renderInstances($n,Ut,W.count);else if(O.isInstancedBufferGeometry){const cn=Math.min(O.instanceCount,O._maxInstanceCount);qe.renderInstances($n,Ut,cn)}else qe.render($n,Ut)}},this.compile=function(M,I){f=w.get(M),f.init(),_.push(f),M.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(m.physicallyCorrectLights),M.traverse(function(O){const N=O.material;if(N)if(Array.isArray(N))for(let W=0;W<N.length;W++){const me=N[W];Hs(me,M,O)}else Hs(N,M,O)}),_.pop(),f=null};let J=null;function _e(M){J&&J(M)}function Fe(){it.stop()}function Ne(){it.start()}const it=new ml;it.setAnimationLoop(_e),typeof self!="undefined"&&it.setContext(self),this.setAnimationLoop=function(M){J=M,oe.setAnimationLoop(M),M===null?it.stop():it.start()},oe.addEventListener("sessionstart",Fe),oe.addEventListener("sessionend",Ne),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(I),I=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(m,M,I,E),f=w.get(M,_.length),f.init(),_.push(f),Q.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Q),B=this.localClippingEnabled,X=v.init(this.clippingPlanes,B,I),h=Kt.get(M,g.length),h.init(),g.push(h),Nt(M,I,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(ne,Y),X===!0&&v.beginShadows();const O=f.state.shadowsArray;if(G.render(O,M,I),X===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(h,M),f.setupLights(m.physicallyCorrectLights),I.isArrayCamera){const N=I.cameras;for(let W=0,me=N.length;W<me;W++){const ye=N[W];ua(h,M,ye,ye.viewport)}}else ua(h,M,I);E!==null&&(xe.updateMultisampleRenderTarget(E),xe.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(m,M,I),de.resetDefaultState(),T=-1,b=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,g.pop(),g.length>0?h=g[g.length-1]:h=null};function Nt(M,I,O,N){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){N&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);const ye=$e.update(M),we=M.material;we.visible&&h.push(M,ye,we,O,$.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==ze.render.frame&&(M.skeleton.update(),M.skeleton.frame=ze.render.frame),!M.frustumCulled||q.intersectsObject(M))){N&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);const ye=$e.update(M),we=M.material;if(Array.isArray(we)){const be=ye.groups;for(let Oe=0,Ce=be.length;Oe<Ce;Oe++){const Re=be[Oe],qe=we[Re.materialIndex];qe&&qe.visible&&h.push(M,ye,qe,O,$.z,Re)}}else we.visible&&h.push(M,ye,we,O,$.z,null)}}const me=M.children;for(let ye=0,we=me.length;ye<we;ye++)Nt(me[ye],I,O,N)}function ua(M,I,O,N){const W=M.opaque,me=M.transmissive,ye=M.transparent;f.setupLightsView(O),me.length>0&&Bl(W,I,O),N&&ae.viewport(C.copy(N)),W.length>0&&as(W,I,O),me.length>0&&as(me,I,O),ye.length>0&&as(ye,I,O),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Bl(M,I,O){const N=Se.isWebGL2;j===null&&(j=new Sn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Yi:Hn,minFilter:Ai,samples:N&&r===!0?4:0})),m.getDrawingBufferSize(K),N?j.setSize(K.x,K.y):j.setSize(Os(K.x),Os(K.y));const W=m.getRenderTarget();m.setRenderTarget(j),m.clear();const me=m.toneMapping;m.toneMapping=on,as(M,I,O),m.toneMapping=me,xe.updateMultisampleRenderTarget(j),xe.updateRenderTargetMipmap(j),m.setRenderTarget(W)}function as(M,I,O){const N=I.isScene===!0?I.overrideMaterial:null;for(let W=0,me=M.length;W<me;W++){const ye=M[W],we=ye.object,be=ye.geometry,Oe=N===null?ye.material:N,Ce=ye.group;we.layers.test(O.layers)&&Vl(we,I,O,be,Oe,Ce)}}function Vl(M,I,O,N,W,me){M.onBeforeRender(m,I,O,N,W,me),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(m,I,O,N,M,me),W.transparent===!0&&W.side===Gn?(W.side=Rt,W.needsUpdate=!0,m.renderBufferDirect(O,I,N,W,M,me),W.side=xi,W.needsUpdate=!0,m.renderBufferDirect(O,I,N,W,M,me),W.side=Gn):m.renderBufferDirect(O,I,N,W,M,me),M.onAfterRender(m,I,O,N,W,me)}function Hs(M,I,O){I.isScene!==!0&&(I=ue);const N=Le.get(M),W=f.state.lights,me=f.state.shadowsArray,ye=W.state.version,we=ke.getParameters(M,W.state,me,I,O),be=ke.getProgramCacheKey(we);let Oe=N.programs;N.environment=M.isMeshStandardMaterial?I.environment:null,N.fog=I.fog,N.envMap=(M.isMeshStandardMaterial?dt:et).get(M.envMap||N.environment),Oe===void 0&&(M.addEventListener("dispose",pe),Oe=new Map,N.programs=Oe);let Ce=Oe.get(be);if(Ce!==void 0){if(N.currentProgram===Ce&&N.lightsStateVersion===ye)return ha(M,we),Ce}else we.uniforms=ke.getUniforms(M),M.onBuild(O,we,m),M.onBeforeCompile(we,m),Ce=ke.acquireProgram(we,be),Oe.set(be,Ce),N.uniforms=we.uniforms;const Re=N.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=v.uniform),ha(M,we),N.needsLights=Wl(M),N.lightsStateVersion=ye,N.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMap.value=W.state.directionalShadowMap,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotShadowMap.value=W.state.spotShadowMap,Re.spotShadowMatrix.value=W.state.spotShadowMatrix,Re.pointShadowMap.value=W.state.pointShadowMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix);const qe=Ce.getUniforms(),wn=Ps.seqWithValue(qe.seq,Re);return N.currentProgram=Ce,N.uniformsList=wn,Ce}function ha(M,I){const O=Le.get(M);O.outputEncoding=I.outputEncoding,O.instancing=I.instancing,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Gl(M,I,O,N,W){I.isScene!==!0&&(I=ue),xe.resetTextureUnits();const me=I.fog,ye=N.isMeshStandardMaterial?I.environment:null,we=E===null?m.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Wn,be=(N.isMeshStandardMaterial?dt:et).get(N.envMap||ye),Oe=N.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ce=!!N.normalMap&&!!O.attributes.tangent,Re=!!O.morphAttributes.position,qe=!!O.morphAttributes.normal,wn=!!O.morphAttributes.color,Kn=N.toneMapped?m.toneMapping:on,Zn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ot=Zn!==void 0?Zn.length:0,Pe=Le.get(N),$n=f.state.lights;if(X===!0&&(B===!0||M!==b)){const zt=M===b&&N.id===T;v.setState(N,M,zt)}let Xe=!1;N.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==$n.state.version||Pe.outputEncoding!==we||W.isInstancedMesh&&Pe.instancing===!1||!W.isInstancedMesh&&Pe.instancing===!0||W.isSkinnedMesh&&Pe.skinning===!1||!W.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==be||N.fog===!0&&Pe.fog!==me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==v.numPlanes||Pe.numIntersection!==v.numIntersection)||Pe.vertexAlphas!==Oe||Pe.vertexTangents!==Ce||Pe.morphTargets!==Re||Pe.morphNormals!==qe||Pe.morphColors!==wn||Pe.toneMapping!==Kn||Se.isWebGL2===!0&&Pe.morphTargetsCount!==Ot)&&(Xe=!0):(Xe=!0,Pe.__version=N.version);let Ut=Pe.currentProgram;Xe===!0&&(Ut=Hs(N,I,W));let cn=!1,Ni=!1,Ws=!1;const st=Ut.getUniforms(),Oi=Pe.uniforms;if(ae.useProgram(Ut.program)&&(cn=!0,Ni=!0,Ws=!0),N.id!==T&&(T=N.id,Ni=!0),cn||b!==M){if(st.setValue(H,"projectionMatrix",M.projectionMatrix),Se.logarithmicDepthBuffer&&st.setValue(H,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),b!==M&&(b=M,Ni=!0,Ws=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const zt=st.map.cameraPosition;zt!==void 0&&zt.setValue(H,$.setFromMatrixPosition(M.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&st.setValue(H,"isOrthographic",M.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||W.isSkinnedMesh)&&st.setValue(H,"viewMatrix",M.matrixWorldInverse)}if(W.isSkinnedMesh){st.setOptional(H,W,"bindMatrix"),st.setOptional(H,W,"bindMatrixInverse");const zt=W.skeleton;zt&&(Se.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),st.setValue(H,"boneTexture",zt.boneTexture,xe),st.setValue(H,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qs=O.morphAttributes;return(qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0&&Se.isWebGL2===!0)&&ee.update(W,O,N,Ut),(Ni||Pe.receiveShadow!==W.receiveShadow)&&(Pe.receiveShadow=W.receiveShadow,st.setValue(H,"receiveShadow",W.receiveShadow)),Ni&&(st.setValue(H,"toneMappingExposure",m.toneMappingExposure),Pe.needsLights&&Hl(Oi,Ws),me&&N.fog===!0&&Yt.refreshFogUniforms(Oi,me),Yt.refreshMaterialUniforms(Oi,N,F,U,j),Ps.upload(H,Pe.uniformsList,Oi,xe)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ps.upload(H,Pe.uniformsList,Oi,xe),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&st.setValue(H,"center",W.center),st.setValue(H,"modelViewMatrix",W.modelViewMatrix),st.setValue(H,"normalMatrix",W.normalMatrix),st.setValue(H,"modelMatrix",W.matrixWorld),Ut}function Hl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Wl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,I,O){Le.get(M.texture).__webglTexture=I,Le.get(M.depthTexture).__webglTexture=O;const N=Le.get(M);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=O===void 0,N.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){const O=Le.get(M);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,O=0){E=M,x=I,S=O;let N=!0;if(M){const be=Le.get(M);be.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(36160,null),N=!1):be.__webglFramebuffer===void 0?xe.setupRenderTarget(M):be.__hasExternalTextures&&xe.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture)}let W=null,me=!1,ye=!1;if(M){const be=M.texture;(be.isData3DTexture||be.isDataArrayTexture)&&(ye=!0);const Oe=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(W=Oe[I],me=!0):Se.isWebGL2&&M.samples>0&&xe.useMultisampledRTT(M)===!1?W=Le.get(M).__webglMultisampledFramebuffer:W=Oe,C.copy(M.viewport),P.copy(M.scissor),y=M.scissorTest}else C.copy(D).multiplyScalar(F).floor(),P.copy(V).multiplyScalar(F).floor(),y=k;if(ae.bindFramebuffer(36160,W)&&Se.drawBuffers&&N&&ae.drawBuffers(M,W),ae.viewport(C),ae.scissor(P),ae.setScissorTest(y),me){const be=Le.get(M.texture);H.framebufferTexture2D(36160,36064,34069+I,be.__webglTexture,O)}else if(ye){const be=Le.get(M.texture),Oe=I||0;H.framebufferTextureLayer(36160,36064,be.__webglTexture,O||0,Oe)}T=-1},this.readRenderTargetPixels=function(M,I,O,N,W,me,ye){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){ae.bindFramebuffer(36160,we);try{const be=M.texture,Oe=be.format,Ce=be.type;if(Oe!==St&&z.convert(Oe)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Ce===Yi&&(Me.has("EXT_color_buffer_half_float")||Se.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ce!==Hn&&z.convert(Ce)!==H.getParameter(35738)&&!(Ce===yn&&(Se.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-N&&O>=0&&O<=M.height-W&&H.readPixels(I,O,N,W,z.convert(Oe),z.convert(Ce),me)}finally{const be=E!==null?Le.get(E).__webglFramebuffer:null;ae.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(M,I,O=0){const N=Math.pow(2,-O),W=Math.floor(I.image.width*N),me=Math.floor(I.image.height*N);xe.setTexture2D(I,0),H.copyTexSubImage2D(3553,O,0,0,M.x,M.y,W,me),ae.unbindTexture()},this.copyTextureToTexture=function(M,I,O,N=0){const W=I.image.width,me=I.image.height,ye=z.convert(O.format),we=z.convert(O.type);xe.setTexture2D(O,0),H.pixelStorei(37440,O.flipY),H.pixelStorei(37441,O.premultiplyAlpha),H.pixelStorei(3317,O.unpackAlignment),I.isDataTexture?H.texSubImage2D(3553,N,M.x,M.y,W,me,ye,we,I.image.data):I.isCompressedTexture?H.compressedTexSubImage2D(3553,N,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,ye,I.mipmaps[0].data):H.texSubImage2D(3553,N,M.x,M.y,ye,we,I.image),N===0&&O.generateMipmaps&&H.generateMipmap(3553),ae.unbindTexture()},this.copyTextureToTexture3D=function(M,I,O,N,W=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=M.max.x-M.min.x+1,ye=M.max.y-M.min.y+1,we=M.max.z-M.min.z+1,be=z.convert(N.format),Oe=z.convert(N.type);let Ce;if(N.isData3DTexture)xe.setTexture3D(N,0),Ce=32879;else if(N.isDataArrayTexture)xe.setTexture2DArray(N,0),Ce=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,N.flipY),H.pixelStorei(37441,N.premultiplyAlpha),H.pixelStorei(3317,N.unpackAlignment);const Re=H.getParameter(3314),qe=H.getParameter(32878),wn=H.getParameter(3316),Kn=H.getParameter(3315),Zn=H.getParameter(32877),Ot=O.isCompressedTexture?O.mipmaps[0]:O.image;H.pixelStorei(3314,Ot.width),H.pixelStorei(32878,Ot.height),H.pixelStorei(3316,M.min.x),H.pixelStorei(3315,M.min.y),H.pixelStorei(32877,M.min.z),O.isDataTexture||O.isData3DTexture?H.texSubImage3D(Ce,W,I.x,I.y,I.z,me,ye,we,be,Oe,Ot.data):O.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ce,W,I.x,I.y,I.z,me,ye,we,be,Ot.data)):H.texSubImage3D(Ce,W,I.x,I.y,I.z,me,ye,we,be,Oe,Ot),H.pixelStorei(3314,Re),H.pixelStorei(32878,qe),H.pixelStorei(3316,wn),H.pixelStorei(3315,Kn),H.pixelStorei(32877,Zn),W===0&&N.generateMipmaps&&H.generateMipmap(Ce),ae.unbindTexture()},this.initTexture=function(M){xe.setTexture2D(M,0),ae.unbindTexture()},this.resetState=function(){x=0,S=0,E=null,ae.reset(),de.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Qp extends bl{}Qp.prototype.isWebGL1Renderer=!0;class em extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}}class tm{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Fr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Dt()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dt()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dt()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rt=new R;class Jr{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.applyMatrix4(t),this.setXYZ(n,rt.x,rt.y,rt.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.applyNormalMatrix(t),this.setXYZ(n,rt.x,rt.y,rt.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)rt.fromBufferAttribute(this,n),rt.transformDirection(t),this.setXYZ(n,rt.x,rt.y,rt.z);return this}setX(t,n){return this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new xt(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nm extends Ye{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wo=new R,To=new Ve,Eo=new Ve,im=new R,Ao=new De;class sm extends Ct{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new De,this.bindMatrixInverse=new De}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ve,n=this.geometry.attributes.skinWeight;for(let i=0,s=n.count;i<s;i++){t.fromBufferAttribute(n,i);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),n.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,n){const i=this.skeleton,s=this.geometry;To.fromBufferAttribute(s.attributes.skinIndex,t),Eo.fromBufferAttribute(s.attributes.skinWeight,t),wo.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let r=0;r<4;r++){const o=Eo.getComponent(r);if(o!==0){const l=To.getComponent(r);Ao.multiplyMatrices(i.bones[l].matrixWorld,i.boneInverses[l]),n.addScaledVector(im.copy(wo).applyMatrix4(Ao),o)}}return n.applyMatrix4(this.bindMatrixInverse)}}class wl extends We{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rm extends ct{constructor(t=null,n=1,i=1,s,r,o,l,c,u=Qe,d=Qe,h,f){super(null,o,l,c,u,d,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lo=new De,am=new De;class Qr{constructor(t=[],n=[]){this.uuid=Dt(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const i=new De;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,n=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const l=t[r]?t[r].matrixWorld:am;Lo.multiplyMatrices(l,n[r]),Lo.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Qr(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=sl(t),t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const i=new rm(n,t,t,St,yn);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this.boneTextureSize=t,this}getBoneByName(t){for(let n=0,i=this.bones.length;n<i;n++){const s=this.bones[n];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){const r=t.bones[i];let o=n[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new wl),this.bones.push(o),this.boneInverses.push(new De().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let s=0,r=n.length;s<r;s++){const o=n[s];t.bones.push(o.uuid);const l=i[s];t.boneInverses.push(l.toArray())}return t}}class Bs extends Ye{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Co=new R,Ro=new R,Do=new De,wr=new jr,As=new Ci;class ea extends We{constructor(t=new It,n=new Bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Co.fromBufferAttribute(n,s-1),Ro.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Co.distanceTo(Ro);t.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),As.copy(i.boundingSphere),As.applyMatrix4(s),As.radius+=r,t.ray.intersectsSphere(As)===!1)return;Do.copy(s).invert(),wr.copy(t.ray).applyMatrix4(Do);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=new R,d=new R,h=new R,f=new R,g=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const x=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let E=x,T=S-1;E<T;E+=g){const b=_.getX(E),C=_.getX(E+1);if(u.fromBufferAttribute(p,b),d.fromBufferAttribute(p,C),wr.distanceSqToSegment(u,d,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const y=t.ray.origin.distanceTo(f);y<t.near||y>t.far||n.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let E=x,T=S-1;E<T;E+=g){if(u.fromBufferAttribute(p,E),d.fromBufferAttribute(p,E+1),wr.distanceSqToSegment(u,d,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||n.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}const Po=new R,Io=new R;class om extends ea{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)Po.fromBufferAttribute(n,s),Io.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Po.distanceTo(Io);t.setAttribute("lineDistance",new bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lm extends ea{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}}class ta extends Ye{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fo=new De,zr=new jr,Ls=new Ci,Cs=new R;class cm extends We{constructor(t=new It,n=new ta){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=r,t.ray.intersectsSphere(Ls)===!1)return;Fo.copy(s).invert(),zr.copy(t.ray).applyMatrix4(Fo);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g;_<m;_++){const p=u.getX(_);Cs.fromBufferAttribute(h,p),No(Cs,p,c,s,t,n,this)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g;_<m;_++)Cs.fromBufferAttribute(h,_),No(Cs,_,c,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function No(a,t,n,i,s,r,o){const l=zr.distanceSqToPoint(a);if(l<n){const c=new R;zr.closestPointToPoint(a,c),c.applyMatrix4(i);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,object:o})}}new R;new R;new R;new R;new Wt;class na extends It{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+l,Math.PI);let u=0;const d=[],h=new R,f=new R,g=[],_=[],m=[],p=[];for(let x=0;x<=i;x++){const S=[],E=x/i;let T=0;x==0&&o==0?T=.5/n:x==i&&c==Math.PI&&(T=-.5/n);for(let b=0;b<=n;b++){const C=b/n;h.x=-t*Math.cos(s+C*r)*Math.sin(o+E*l),h.y=t*Math.cos(o+E*l),h.z=t*Math.sin(s+C*r)*Math.sin(o+E*l),_.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),p.push(C+T,1-E),S.push(u++)}d.push(S)}for(let x=0;x<i;x++)for(let S=0;S<n;S++){const E=d[x][S+1],T=d[x][S],b=d[x+1][S],C=d[x+1][S+1];(x!==0||o>0)&&g.push(E,T,C),(x!==i-1||c<Math.PI)&&g.push(T,b,C)}this.setIndex(g),this.setAttribute("position",new bt(_,3)),this.setAttribute("normal",new bt(m,3)),this.setAttribute("uv",new bt(p,2))}static fromJSON(t){return new na(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class um extends Ye{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new he(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class hm extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ns extends Ye{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bn extends ns{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class dm extends Ye{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new he(16777215),this.specular=new he(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fm extends Ye{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new he(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class pm extends Ye{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class mm extends Ye{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Us,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class gm extends Ye{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new he(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jn,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _m extends Bs{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const xm={ShadowMaterial:um,SpriteMaterial:nm,RawShaderMaterial:hm,ShaderMaterial:ln,PointsMaterial:ta,MeshPhysicalMaterial:bn,MeshStandardMaterial:ns,MeshPhongMaterial:dm,MeshToonMaterial:fm,MeshNormalMaterial:pm,MeshLambertMaterial:mm,MeshDepthMaterial:Ml,MeshDistanceMaterial:Sl,MeshBasicMaterial:an,MeshMatcapMaterial:gm,LineDashedMaterial:_m,LineBasicMaterial:Bs,Material:Ye};Ye.fromType=function(a){return new xm[a]};const He={arraySlice:function(a,t,n){return He.isTypedArray(a)?new a.constructor(a.subarray(t,n!==void 0?n:a.length)):a.slice(t,n)},convertArray:function(a,t,n){return!a||!n&&a.constructor===t?a:typeof t.BYTES_PER_ELEMENT=="number"?new t(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){function t(s,r){return a[s]-a[r]}const n=a.length,i=new Array(n);for(let s=0;s!==n;++s)i[s]=s;return i.sort(t),i},sortedArray:function(a,t,n){const i=a.length,s=new a.constructor(i);for(let r=0,o=0;o!==i;++r){const l=n[r]*t;for(let c=0;c!==t;++c)s[o++]=a[l+c]}return s},flattenJSON:function(a,t,n,i){let s=1,r=a[0];for(;r!==void 0&&r[i]===void 0;)r=a[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(t.push(r.time),n.push.apply(n,o)),r=a[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(t.push(r.time),o.toArray(n,n.length)),r=a[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(t.push(r.time),n.push(o)),r=a[s++];while(r!==void 0)},subclip:function(a,t,n,i,s=30){const r=a.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const u=r.tracks[c],d=u.getValueSize(),h=[],f=[];for(let g=0;g<u.times.length;++g){const _=u.times[g]*s;if(!(_<n||_>=i)){h.push(u.times[g]);for(let m=0;m<d;++m)f.push(u.values[g*d+m])}}h.length!==0&&(u.times=He.convertArray(h,u.times.constructor),u.values=He.convertArray(f,u.values.constructor),o.push(u))}r.tracks=o;let l=1/0;for(let c=0;c<r.tracks.length;++c)l>r.tracks[c].times[0]&&(l=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*l);return r.resetDuration(),r},makeClipAdditive:function(a,t=0,n=a,i=30){i<=0&&(i=30);const s=n.tracks.length,r=t/i;for(let o=0;o<s;++o){const l=n.tracks[o],c=l.ValueTypeName;if(c==="bool"||c==="string")continue;const u=a.tracks.find(function(x){return x.name===l.name&&x.ValueTypeName===c});if(u===void 0)continue;let d=0;const h=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=h/3);let f=0;const g=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=g/3);const _=l.times.length-1;let m;if(r<=l.times[0]){const x=d,S=h-d;m=He.arraySlice(l.values,x,S)}else if(r>=l.times[_]){const x=_*h+d,S=x+h-d;m=He.arraySlice(l.values,x,S)}else{const x=l.createInterpolant(),S=d,E=h-d;x.evaluate(r),m=He.arraySlice(x.resultBuffer,S,E)}c==="quaternion"&&new Pt().fromArray(m).normalize().conjugate().toArray(m);const p=u.times.length;for(let x=0;x<p;++x){const S=x*g+f;if(c==="quaternion")Pt.multiplyQuaternionsFlat(u.values,S,m,0,u.values,S);else{const E=g-f*2;for(let T=0;T<E;++T)u.values[S+T]-=m[T]}}}return a.blendMode=zc,a}};class is{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const n=this.parameterPositions;let i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let o;t:{i:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=n[++i],t<s)break e}o=n.length;break t}if(!(t>=r)){const l=n[1];t<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=n[--i-1],t>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const l=i+o>>>1;t<n[l]?o=l:i=l+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vm extends is{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ka,endingEnd:ka}}intervalChanged_(t,n,i){const s=this.parameterPositions;let r=t-2,o=t+1,l=s[r],c=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case Ba:r=t,l=2*n-i;break;case Va:r=s.length-2,l=n+s[r]-s[r+1];break;default:r=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ba:o=t,c=2*i-n;break;case Va:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=n}const u=(i-n)*.5,d=this.valueSize;this._weightPrev=u/(n-l),this._weightNext=u/(c-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,n,i,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,u=c-l,d=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,g=this._weightNext,_=(i-n)/(s-n),m=_*_,p=m*_,x=-f*p+2*f*m-f*_,S=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*_+1,E=(-1-g)*p+(1.5+g)*m+.5*_,T=g*p-g*m;for(let b=0;b!==l;++b)r[b]=x*o[d+b]+S*o[u+b]+E*o[c+b]+T*o[h+b];return r}}class ym extends is{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=t*l,u=c-l,d=(i-n)/(s-n),h=1-d;for(let f=0;f!==l;++f)r[f]=o[u+f]*h+o[c+f]*d;return r}}class Mm extends is{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class jt{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=He.convertArray(n,this.TimeBufferType),this.values=He.convertArray(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const n=t.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:He.convertArray(t.times,Array),values:He.convertArray(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Mm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ym(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Ki:n=this.InterpolantFactoryMethodDiscrete;break;case bi:n=this.InterpolantFactoryMethodLinear;break;case Zs:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ki;case this.InterpolantFactoryMethodLinear:return bi;case this.InterpolantFactoryMethodSmooth:return Zs}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){const n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const l=this.getValueSize();this.times=He.arraySlice(i,r,o),this.values=He.arraySlice(this.values,r*l,o*l)}return this}validate(){let t=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==r;l++){const c=i[l];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,c,o),t=!1;break}o=c}if(s!==void 0&&He.isTypedArray(s))for(let l=0,c=s.length;l!==c;++l){const u=s[l];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,u),t=!1;break}}return t}optimize(){const t=He.arraySlice(this.times),n=He.arraySlice(this.values),i=this.getValueSize(),s=this.getInterpolation()===Zs,r=t.length-1;let o=1;for(let l=1;l<r;++l){let c=!1;const u=t[l],d=t[l+1];if(u!==d&&(l!==1||u!==t[0]))if(s)c=!0;else{const h=l*i,f=h-i,g=h+i;for(let _=0;_!==i;++_){const m=n[h+_];if(m!==n[f+_]||m!==n[g+_]){c=!0;break}}}if(c){if(l!==o){t[o]=t[l];const h=l*i,f=o*i;for(let g=0;g!==i;++g)n[f+g]=n[h+g]}++o}}if(r>0){t[o]=t[r];for(let l=r*i,c=o*i,u=0;u!==i;++u)n[c+u]=n[l+u];++o}return o!==t.length?(this.times=He.arraySlice(t,0,o),this.values=He.arraySlice(n,0,o*i)):(this.times=t,this.values=n),this}clone(){const t=He.arraySlice(this.times,0),n=He.arraySlice(this.values,0),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}}jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=bi;class Pi extends jt{}Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Ki;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;class Tl extends jt{}Tl.prototype.ValueTypeName="color";class Ji extends jt{}Ji.prototype.ValueTypeName="number";class Sm extends is{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){const r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,c=(i-n)/(s-n);let u=t*l;for(let d=u+l;u!==d;u+=4)Pt.slerpFlat(r,0,o,u-l,o,u,c);return r}}class qn extends jt{InterpolantFactoryMethodLinear(t){return new Sm(this.times,this.values,this.getValueSize(),t)}}qn.prototype.ValueTypeName="quaternion";qn.prototype.DefaultInterpolation=bi;qn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ii extends jt{}Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Ki;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;class Qi extends jt{}Qi.prototype.ValueTypeName="vector";class bm{constructor(t,n=-1,i,s=Uc){this.name=t,this.tracks=i,this.duration=n,this.blendMode=s,this.uuid=Dt(),this.duration<0&&this.resetDuration()}static parse(t){const n=[],i=t.tracks,s=1/(t.fps||1);for(let o=0,l=i.length;o!==l;++o)n.push(Tm(i[o]).scale(s));const r=new this(t.name,t.duration,n,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const n=[],i=t.tracks,s={name:t.name,duration:t.duration,tracks:n,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=i.length;r!==o;++r)n.push(jt.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(t,n,i,s){const r=n.length,o=[];for(let l=0;l<r;l++){let c=[],u=[];c.push((l+r-1)%r,l,(l+1)%r),u.push(0,1,0);const d=He.getKeyframeOrder(c);c=He.sortedArray(c,1,d),u=He.sortedArray(u,1,d),!s&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new Ji(".morphTargetInfluences["+n[l].name+"]",c,u).scale(1/i))}return new this(t,-1,o)}static findByName(t,n){let i=t;if(!Array.isArray(t)){const s=t;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===n)return i[s];return null}static CreateClipsFromMorphTargetSequences(t,n,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let l=0,c=t.length;l<c;l++){const u=t[l],d=u.name.match(r);if(d&&d.length>1){const h=d[1];let f=s[h];f||(s[h]=f=[]),f.push(u)}}const o=[];for(const l in s)o.push(this.CreateFromMorphTargetSequence(l,s[l],n,i));return o}static parseAnimation(t,n){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,g,_,m){if(g.length!==0){const p=[],x=[];He.flattenJSON(g,p,x,_),p.length!==0&&m.push(new h(f,p,x))}},s=[],r=t.name||"default",o=t.fps||30,l=t.blendMode;let c=t.length||-1;const u=t.hierarchy||[];for(let h=0;h<u.length;h++){const f=u[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const g={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let m=0;m<f[_].morphTargets.length;m++)g[f[_].morphTargets[m]]=-1;for(const m in g){const p=[],x=[];for(let S=0;S!==f[_].morphTargets.length;++S){const E=f[_];p.push(E.time),x.push(E.morphTarget===m?1:0)}s.push(new Ji(".morphTargetInfluence["+m+"]",p,x))}c=g.length*o}else{const g=".bones["+n[h].name+"]";i(Qi,g+".position",f,"pos",s),i(qn,g+".quaternion",f,"rot",s),i(Qi,g+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,l)}resetDuration(){const t=this.tracks;let n=0;for(let i=0,s=t.length;i!==s;++i){const r=this.tracks[i];n=Math.max(n,r.times[r.times.length-1])}return this.duration=n,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let n=0;n<this.tracks.length;n++)t=t&&this.tracks[n].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function wm(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ji;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return Tl;case"quaternion":return qn;case"bool":case"boolean":return Pi;case"string":return Ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Tm(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=wm(a.type);if(a.times===void 0){const n=[],i=[];He.flattenJSON(a.keys,n,i,"value"),a.times=n,a.values=i}return t.parse!==void 0?t.parse(a):new t(a.name,a.times,a.values,a.interpolation)}const Ti={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Em{constructor(t,n,i){const s=this;let r=!1,o=0,l=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,l),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,h){return u.push(d,h),this},this.removeHandler=function(d){const h=u.indexOf(d);return h!==-1&&u.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=u.length;h<f;h+=2){const g=u[h],_=u[h+1];if(g.global&&(g.lastIndex=0),g.test(d))return _}return null}}}const Am=new Em;class Fi{constructor(t){this.manager=t!==void 0?t:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const tn={};class ia extends Fi{constructor(t){super(t)}load(t,n,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ti.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(r),this.manager.itemEnd(t)},0),r;if(tn[t]!==void 0){tn[t].push({onLoad:n,onProgress:i,onError:s});return}tn[t]=[],tn[t].push({onLoad:n,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||u.body===void 0||u.body.getReader===void 0)return u;const d=tn[t],h=u.body.getReader(),f=u.headers.get("Content-Length"),g=f?parseInt(f):0,_=g!==0;let m=0;const p=new ReadableStream({start(x){S();function S(){h.read().then(({done:E,value:T})=>{if(E)x.close();else{m+=T.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:m,total:g});for(let C=0,P=d.length;C<P;C++){const y=d[C];y.onProgress&&y.onProgress(b)}x.enqueue(T),S()}})}}});return new Response(p)}else throw Error(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return u.json();default:if(l===void 0)return u.text();{const h=/charset="?([^;"\s]*)"?/i.exec(l),f=h&&h[1]?h[1].toLowerCase():void 0,g=new TextDecoder(f);return u.arrayBuffer().then(_=>g.decode(_))}}}).then(u=>{Ti.add(t,u);const d=tn[t];delete tn[t];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onLoad&&g.onLoad(u)}}).catch(u=>{const d=tn[t];if(d===void 0)throw this.manager.itemError(t),u;delete tn[t];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onError&&g.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Lm extends Fi{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ti.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){n&&n(o),r.manager.itemEnd(t)},0),o;const l=$i("img");function c(){d(),Ti.add(t,this),n&&n(this),r.manager.itemEnd(t)}function u(h){d(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function d(){l.removeEventListener("load",c,!1),l.removeEventListener("error",u,!1)}return l.addEventListener("load",c,!1),l.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),r.manager.itemStart(t),l.src=t,l}}class Cm extends Fi{constructor(t){super(t)}load(t,n,i,s){const r=new ct,o=new Lm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(l){r.image=l,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Vs extends We{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Oo=new De,Uo=new R,zo=new R;class sa{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Uo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Uo),zo.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(zo),n.updateMatrixWorld(),Oo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(n.projectionMatrix),i.multiply(n.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Rm extends sa{constructor(){super(new lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const n=this.camera,i=Zi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Dm extends Vs{constructor(t,n,i=0,s=Math.PI/3,r=0,o=1){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.shadow=new Rm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ko=new De,Bi=new R,Tr=new R;class Pm extends sa{constructor(){super(new lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Bi.setFromMatrixPosition(t.matrixWorld),i.position.copy(Bi),Tr.copy(i.position),Tr.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Tr),i.updateMatrixWorld(),s.makeTranslation(-Bi.x,-Bi.y,-Bi.z),ko.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko)}}class El extends Vs{constructor(t,n,i=0,s=1){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Pm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Im extends sa{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fm extends Vs{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DefaultUp),this.updateMatrix(),this.target=new We,this.shadow=new Im}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nm extends Vs{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vn{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let n="";for(let i=0,s=t.length;i<s;i++)n+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(t){const n=t.lastIndexOf("/");return n===-1?"./":t.slice(0,n+1)}static resolveURL(t,n){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(t)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:n+t)}}class Om extends Fi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,n,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ti.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){n&&n(o),r.manager.itemEnd(t)},0),o;const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader,fetch(t,l).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Ti.add(t,c),n&&n(c),r.manager.itemEnd(t)}).catch(function(c){s&&s(c),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}}let Rs;const Al={getContext:function(){return Rs===void 0&&(Rs=new(window.AudioContext||window.webkitAudioContext)),Rs},setContext:function(a){Rs=a}};class Um extends Fi{constructor(t){super(t)}load(t,n,i,s){const r=this,o=new ia(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0);Al.getContext().decodeAudioData(c,function(d){n(d)})}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},i,s)}}class zm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Bo();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Bo(){return(typeof performance=="undefined"?Date:performance).now()}const Ln=new R,Vo=new Pt,km=new R,Cn=new R;class Bm extends We{constructor(){super(),this.type="AudioListener",this.context=Al.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new zm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const n=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ln,Vo,km),Cn.set(0,0,-1).applyQuaternion(Vo),n.positionX){const s=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(Ln.x,s),n.positionY.linearRampToValueAtTime(Ln.y,s),n.positionZ.linearRampToValueAtTime(Ln.z,s),n.forwardX.linearRampToValueAtTime(Cn.x,s),n.forwardY.linearRampToValueAtTime(Cn.y,s),n.forwardZ.linearRampToValueAtTime(Cn.z,s),n.upX.linearRampToValueAtTime(i.x,s),n.upY.linearRampToValueAtTime(i.y,s),n.upZ.linearRampToValueAtTime(i.z,s)}else n.setPosition(Ln.x,Ln.y,Ln.z),n.setOrientation(Cn.x,Cn.y,Cn.z,i.x,i.y,i.z)}}class Ll extends We{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,n=this.filters.length;t<n;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,n=this.filters.length;t<n;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Rn=new R,Go=new Pt,Vm=new R,Dn=new R;class ra extends Ll{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,n,i){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=n,this.panner.coneOuterGain=i,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Rn,Go,Vm),Dn.set(0,0,1).applyQuaternion(Go);const n=this.panner;if(n.positionX){const i=this.context.currentTime+this.listener.timeDelta;n.positionX.linearRampToValueAtTime(Rn.x,i),n.positionY.linearRampToValueAtTime(Rn.y,i),n.positionZ.linearRampToValueAtTime(Rn.z,i),n.orientationX.linearRampToValueAtTime(Dn.x,i),n.orientationY.linearRampToValueAtTime(Dn.y,i),n.orientationZ.linearRampToValueAtTime(Dn.z,i)}else n.setPosition(Rn.x,Rn.y,Rn.z),n.setOrientation(Dn.x,Dn.y,Dn.z)}}const aa="\\[\\]\\.:\\/",Gm=new RegExp("["+aa+"]","g"),oa="[^"+aa+"]",Hm="[^"+aa.replace("\\.","")+"]",Wm=/((?:WC+[\/:])*)/.source.replace("WC",oa),qm=/(WCOD+)?/.source.replace("WCOD",Hm),Xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oa),jm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oa),Ym=new RegExp("^"+Wm+qm+Xm+jm+"$"),Km=["material","materials","bones"];class Zm{constructor(t,n,i){const s=i||Ue.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}}class Ue{constructor(t,n,i){this.path=n,this.parsedPath=i||Ue.parseTrackName(n),this.node=Ue.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new Ue.Composite(t,n,i):new Ue(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gm,"")}static parseTrackName(t){const n=Ym.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Km.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){const i=function(r){for(let o=0;o<r.length;o++){const l=r[o];if(l.name===n||l.uuid===n)return l;const c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,i=n.objectName,s=n.propertyName;let r=n.propertyIndex;if(t||(t=Ue.findNode(this.rootNode,n.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const o=t[s];if(o===void 0){const u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ue.Composite=Zm;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const kt=new Uint32Array(512),Bt=new Uint32Array(512);for(let a=0;a<256;++a){const t=a-127;t<-27?(kt[a]=0,kt[a|256]=32768,Bt[a]=24,Bt[a|256]=24):t<-14?(kt[a]=1024>>-t-14,kt[a|256]=1024>>-t-14|32768,Bt[a]=-t-1,Bt[a|256]=-t-1):t<=15?(kt[a]=t+15<<10,kt[a|256]=t+15<<10|32768,Bt[a]=13,Bt[a|256]=13):t<128?(kt[a]=31744,kt[a|256]=64512,Bt[a]=24,Bt[a|256]=24):(kt[a]=31744,kt[a|256]=64512,Bt[a]=13,Bt[a|256]=13)}const Cl=new Uint32Array(2048),ss=new Uint32Array(64),$m=new Uint32Array(64);for(let a=1;a<1024;++a){let t=a<<13,n=0;for(;(t&8388608)===0;)t<<=1,n-=8388608;t&=-8388609,n+=947912704,Cl[a]=t|n}for(let a=1024;a<2048;++a)Cl[a]=939524096+(a-1024<<13);for(let a=1;a<31;++a)ss[a]=a<<23;ss[31]=1199570944;ss[32]=2147483648;for(let a=33;a<63;++a)ss[a]=2147483648+(a-32<<23);ss[63]=3347054592;for(let a=1;a<64;++a)a!==32&&($m[a]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qr}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qr);class Jm extends Fi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new ig(n)}),this.register(function(n){return new ug(n)}),this.register(function(n){return new hg(n)}),this.register(function(n){return new rg(n)}),this.register(function(n){return new ag(n)}),this.register(function(n){return new og(n)}),this.register(function(n){return new lg(n)}),this.register(function(n){return new ng(n)}),this.register(function(n){return new cg(n)}),this.register(function(n){return new sg(n)}),this.register(function(n){return new eg(n)}),this.register(function(n){return new dg(n)})}load(t,n,i,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Vn.extractUrlBase(t),this.manager.itemStart(t);const l=function(u){s?s(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},c=new ia(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(u){try{r.parse(u,o,function(d){n(d),r.manager.itemEnd(t)},l)}catch(d){l(d)}},i,l)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,n,i,s){let r;const o={},l={};if(typeof t=="string")r=t;else if(Vn.decodeText(new Uint8Array(t,0,4))===Rl){try{o[Ee.KHR_BINARY_GLTF]=new fg(t)}catch(h){s&&s(h);return}r=o[Ee.KHR_BINARY_GLTF].content}else r=Vn.decodeText(new Uint8Array(t));const c=JSON.parse(r);if(c.asset===void 0||c.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Eg(c,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](u);l[h.name]=h,o[h.name]=!0}if(c.extensionsUsed)for(let d=0;d<c.extensionsUsed.length;++d){const h=c.extensionsUsed[d],f=c.extensionsRequired||[];switch(h){case Ee.KHR_MATERIALS_UNLIT:o[h]=new tg;break;case Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[h]=new gg;break;case Ee.KHR_DRACO_MESH_COMPRESSION:o[h]=new pg(c,this.dracoLoader);break;case Ee.KHR_TEXTURE_TRANSFORM:o[h]=new mg;break;case Ee.KHR_MESH_QUANTIZATION:o[h]=new _g;break;default:f.indexOf(h)>=0&&l[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}u.setExtensions(o),u.setPlugins(l),u.parse(i,s)}parseAsync(t,n){const i=this;return new Promise(function(s,r){i.parse(t,n,s,r)})}}function Qm(){let a={};return{get:function(t){return a[t]},add:function(t,n){a[t]=n},remove:function(t){delete a[t]},removeAll:function(){a={}}}}const Ee={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class eg{constructor(t){this.parser=t,this.name=Ee.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,n=this.parser.json.nodes||[];for(let i=0,s=n.length;i<s;i++){const r=n[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const n=this.parser,i="light:"+t;let s=n.cache.get(i);if(s)return s;const r=n.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let u;const d=new he(16777215);c.color!==void 0&&d.fromArray(c.color);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Fm(d),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new El(d),u.distance=h;break;case"spot":u=new Dm(d),u.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,c.intensity!==void 0&&(u.intensity=c.intensity),u.name=n.createUniqueName(c.name||"light_"+t),s=Promise.resolve(u),n.cache.add(i,s),s}createNodeAttachment(t){const n=this,i=this.parser,r=i.json.nodes[t],l=(r.extensions&&r.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(c){return i._getNodeRef(n.cache,l,c)})}}class tg{constructor(){this.name=Ee.KHR_MATERIALS_UNLIT}getMaterialType(){return an}extendParams(t,n,i){const s=[];t.color=new he(1,1,1),t.opacity=1;const r=n.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.fromArray(o),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(t,"map",r.baseColorTexture,Ie))}return Promise.all(s)}}class ng{constructor(t){this.parser=t,this.name=Ee.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,n){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(n.emissiveIntensity=r),Promise.resolve()}}class ig{constructor(t){this.parser=t,this.name=Ee.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(n.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(n,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(n,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(n,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Ae(l,l)}return Promise.all(r)}}class sg{constructor(t){this.parser=t,this.name=Ee.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(n.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(n,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(n.iridescenceIOR=o.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(n,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class rg{constructor(t){this.parser=t,this.name=Ee.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];n.sheenColor=new he(0,0,0),n.sheenRoughness=0,n.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&n.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(n,"sheenColorMap",o.sheenColorTexture,Ie)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(n,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ag{constructor(t){this.parser=t,this.name=Ee.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(n.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(n,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class og{constructor(t){this.parser=t,this.name=Ee.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];n.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(n,"thicknessMap",o.thicknessTexture)),n.attenuationDistance=o.attenuationDistance||0;const l=o.attenuationColor||[1,1,1];return n.attenuationColor=new he(l[0],l[1],l[2]),Promise.all(r)}}class lg{constructor(t){this.parser=t,this.name=Ee.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(t,n){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return n.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class cg{constructor(t){this.parser=t,this.name=Ee.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(t,n){const i=this.parser,s=i.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];n.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(n,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return n.specularColor=new he(l[0],l[1],l[2]),o.specularColorTexture!==void 0&&r.push(i.assignTexture(n,"specularColorMap",o.specularColorTexture,Ie)),Promise.all(r)}}class ug{constructor(t){this.parser=t,this.name=Ee.KHR_TEXTURE_BASISU}loadTexture(t){const n=this.parser,i=n.json,s=i.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=n.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(t,r.source,o)}}class hg{constructor(t){this.parser=t,this.name=Ee.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const n=this.name,i=this.parser,s=i.json,r=s.textures[t];if(!r.extensions||!r.extensions[n])return null;const o=r.extensions[n],l=s.images[o.source];let c=i.textureLoader;if(l.uri){const u=i.options.manager.getHandler(l.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){t(n.height===1)}})),this.isSupported}}class dg{constructor(t){this.name=Ee.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const n=this.parser.json,i=n.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,o.ready]).then(function(l){const c=s.byteOffset||0,u=s.byteLength||0,d=s.count,h=s.byteStride,f=new ArrayBuffer(d*h),g=new Uint8Array(l[0],c,u);return o.decodeGltfBuffer(new Uint8Array(f),d,h,g,s.mode,s.filter),f})}else return null}}const Rl="glTF",Vi=12,Ho={JSON:1313821514,BIN:5130562};class fg{constructor(t){this.name=Ee.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(t,0,Vi);if(this.header={magic:Vn.decodeText(new Uint8Array(t.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Rl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vi,s=new DataView(t,Vi);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Ho.JSON){const c=new Uint8Array(t,Vi+r,o);this.content=Vn.decodeText(c)}else if(l===Ho.BIN){const c=Vi+r;this.body=t.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pg{constructor(t,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ee.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(t,n){const i=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,l={},c={},u={};for(const d in o){const h=Br[d]||d.toLowerCase();l[h]=o[d]}for(const d in t.attributes){const h=Br[d]||d.toLowerCase();if(o[d]!==void 0){const f=i.accessors[t.attributes[d]],g=es[f.componentType];u[h]=g,c[h]=f.normalized===!0}}return n.getDependency("bufferView",r).then(function(d){return new Promise(function(h){s.decodeDracoFile(d,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},l,u)})})}}class mg{constructor(){this.name=Ee.KHR_TEXTURE_TRANSFORM}extendTexture(t,n){return n.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(t=t.clone(),n.offset!==void 0&&t.offset.fromArray(n.offset),n.rotation!==void 0&&(t.rotation=n.rotation),n.scale!==void 0&&t.repeat.fromArray(n.scale),t.needsUpdate=!0),t}}class kr extends ns{constructor(t){super(),this.isGLTFSpecularGlossinessMaterial=!0;const n=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),i=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),s=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),l={specular:{value:new he().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=l,this.onBeforeCompile=function(c){for(const u in l)c.uniforms[u]=l[u];c.fragmentShader=c.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",n).replace("#include <metalnessmap_pars_fragment>",i).replace("#include <roughnessmap_fragment>",s).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return l.specular.value},set:function(c){l.specular.value=c}},specularMap:{get:function(){return l.specularMap.value},set:function(c){l.specularMap.value=c,c?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return l.glossiness.value},set:function(c){l.glossiness.value=c}},glossinessMap:{get:function(){return l.glossinessMap.value},set:function(c){l.glossinessMap.value=c,c?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(t)}copy(t){return super.copy(t),this.specularMap=t.specularMap,this.specular.copy(t.specular),this.glossinessMap=t.glossinessMap,this.glossiness=t.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class gg{constructor(){this.name=Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return kr}extendParams(t,n,i){const s=n.extensions[this.name];t.color=new he(1,1,1),t.opacity=1;const r=[];if(Array.isArray(s.diffuseFactor)){const o=s.diffuseFactor;t.color.fromArray(o),t.opacity=o[3]}if(s.diffuseTexture!==void 0&&r.push(i.assignTexture(t,"map",s.diffuseTexture,Ie)),t.emissive=new he(0,0,0),t.glossiness=s.glossinessFactor!==void 0?s.glossinessFactor:1,t.specular=new he(1,1,1),Array.isArray(s.specularFactor)&&t.specular.fromArray(s.specularFactor),s.specularGlossinessTexture!==void 0){const o=s.specularGlossinessTexture;r.push(i.assignTexture(t,"glossinessMap",o)),r.push(i.assignTexture(t,"specularMap",o,Ie))}return Promise.all(r)}createMaterial(t){const n=new kr(t);return n.fog=!0,n.color=t.color,n.map=t.map===void 0?null:t.map,n.lightMap=null,n.lightMapIntensity=1,n.aoMap=t.aoMap===void 0?null:t.aoMap,n.aoMapIntensity=1,n.emissive=t.emissive,n.emissiveIntensity=t.emissiveIntensity===void 0?1:t.emissiveIntensity,n.emissiveMap=t.emissiveMap===void 0?null:t.emissiveMap,n.bumpMap=t.bumpMap===void 0?null:t.bumpMap,n.bumpScale=1,n.normalMap=t.normalMap===void 0?null:t.normalMap,n.normalMapType=jn,t.normalScale&&(n.normalScale=t.normalScale),n.displacementMap=null,n.displacementScale=1,n.displacementBias=0,n.specularMap=t.specularMap===void 0?null:t.specularMap,n.specular=t.specular,n.glossinessMap=t.glossinessMap===void 0?null:t.glossinessMap,n.glossiness=t.glossiness,n.alphaMap=null,n.envMap=t.envMap===void 0?null:t.envMap,n.envMapIntensity=1,n}}class _g{constructor(){this.name=Ee.KHR_MESH_QUANTIZATION}}class la extends is{constructor(t,n,i,s){super(t,n,i,s)}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)n[o]=i[r+o];return n}}la.prototype.interpolate_=function(a,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,g=a*c,_=g-c,m=-2*f+3*h,p=f-h,x=1-m,S=p-h+d;for(let E=0;E!==o;E++){const T=r[_+E+o],b=r[_+E+l]*u,C=r[g+E+o],P=r[g+E]*u;s[E]=x*T+S*b+m*C+p*P}return s};const xg=new Pt;class vg extends la{interpolate_(t,n,i,s){const r=super.interpolate_(t,n,i,s);return xg.fromArray(r).normalize().toArray(r),r}}const nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wo={9728:Qe,9729:ft,9984:Pr,9985:tl,9986:Ir,9987:Ai},qo={33071:Mt,33648:Ns,10497:Mi},Xo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Br={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yg={CUBICSPLINE:void 0,LINEAR:bi,STEP:Ki},Er={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Mg(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new ns({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xi})),a.DefaultMaterial}function Gi(a,t,n){for(const i in n.extensions)a[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=n.extensions[i])}function Fn(a,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(a.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Sg(a,t,n){let i=!1,s=!1,r=!1;for(let u=0,d=t.length;u<d;u++){const h=t[u];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(a);const o=[],l=[],c=[];for(let u=0,d=t.length;u<d;u++){const h=t[u];if(i){const f=h.POSITION!==void 0?n.getDependency("accessor",h.POSITION):a.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?n.getDependency("accessor",h.NORMAL):a.attributes.normal;l.push(f)}if(r){const f=h.COLOR_0!==void 0?n.getDependency("accessor",h.COLOR_0):a.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const d=u[0],h=u[1],f=u[2];return i&&(a.morphAttributes.position=d),s&&(a.morphAttributes.normal=h),r&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function bg(a,t){if(a.updateMorphTargets(),t.weights!==void 0)for(let n=0,i=t.weights.length;n<i;n++)a.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(a.morphTargetInfluences.length===n.length){a.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++)a.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wg(a){const t=a.extensions&&a.extensions[Ee.KHR_DRACO_MESH_COMPRESSION];let n;return t?n="draco:"+t.bufferView+":"+t.indices+":"+jo(t.attributes):n=a.indices+":"+jo(a.attributes)+":"+a.mode,n}function jo(a){let t="";const n=Object.keys(a).sort();for(let i=0,s=n.length;i<s;i++)t+=n[i]+":"+a[n[i]]+";";return t}function Vr(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tg(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class Eg{constructor(t={},n={}){this.json=t,this.extensions={},this.plugins={},this.options=n,this.cache=new Qm,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap=="undefined"||i||s&&r<98?this.textureLoader=new Cm(this.options.manager):this.textureLoader=new Om(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ia(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,n){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const l={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};Gi(r,l,s),Fn(l,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(l)})).then(function(){t(l)})}).catch(n)}_markDefs(){const t=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=n.length;s<r;s++){const o=n[s].joints;for(let l=0,c=o.length;l<c;l++)t[o[l]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,n){n!==void 0&&(t.refs[n]===void 0&&(t.refs[n]=t.uses[n]=0),t.refs[n]++)}_getNodeRef(t,n,i){if(t.refs[n]<=1)return i;const s=i.clone(),r=(o,l)=>{const c=this.associations.get(o);c!=null&&this.associations.set(l,c);for(const[u,d]of o.children.entries())r(d,l.children[u])};return r(i,s),s.name+="_instance_"+t.uses[n]++,s}_invokeOne(t){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const s=t(n[i]);if(s)return s}return null}_invokeAll(t){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let s=0;s<n.length;s++){const r=t(n[s]);r&&i.push(r)}return i}getDependency(t,n){const i=t+":"+n;let s=this.cache.get(i);if(!s){switch(t){case"scene":s=this.loadScene(n);break;case"node":s=this.loadNode(n);break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(n)});break;case"accessor":s=this.loadAccessor(n);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(n)});break;case"buffer":s=this.loadBuffer(n);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(n)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(n)});break;case"skin":s=this.loadSkin(n);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(n)});break;case"camera":s=this.loadCamera(n);break;default:throw new Error("Unknown type: "+t)}this.cache.add(i,s)}return s}getDependencies(t){let n=this.cache.get(t);if(!n){const i=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];n=Promise.all(s.map(function(r,o){return i.getDependency(t,o)})),this.cache.add(t,n)}return n}loadBuffer(t){const n=this.json.buffers[t],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ee.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Vn.resolveURL(n.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(t){const n=this.json.bufferViews[t];return this.getDependency("buffer",n.buffer).then(function(i){const s=n.byteLength||0,r=n.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(t){const n=this,i=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0)return Promise.resolve(null);const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const l=o[0],c=Xo[s.type],u=es[s.componentType],d=u.BYTES_PER_ELEMENT,h=d*c,f=s.byteOffset||0,g=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let m,p;if(g&&g!==h){const x=Math.floor(f/g),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let E=n.cache.get(S);E||(m=new u(l,x*g,s.count*g/d),E=new tm(m,g/d),n.cache.add(S,E)),p=new Jr(E,c,f%g/d,_)}else l===null?m=new u(s.count*c):m=new u(l,f,s.count*c),p=new xt(m,c,_);if(s.sparse!==void 0){const x=Xo.SCALAR,S=es[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,T=s.sparse.values.byteOffset||0,b=new S(o[1],E,s.sparse.count*x),C=new u(o[2],T,s.sparse.count*c);l!==null&&(p=new xt(p.array.slice(),p.itemSize,p.normalized));for(let P=0,y=b.length;P<y;P++){const A=b[P];if(p.setX(A,C[P*c]),c>=2&&p.setY(A,C[P*c+1]),c>=3&&p.setZ(A,C[P*c+2]),c>=4&&p.setW(A,C[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(t){const n=this.json,i=this.options,r=n.textures[t].source,o=n.images[r];let l=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(l=c)}return this.loadTextureImage(t,r,l)}loadTextureImage(t,n,i){const s=this,r=this.json,o=r.textures[t],l=r.images[n],c=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(n,i).then(function(d){d.flipY=!1,o.name&&(d.name=o.name);const f=(r.samplers||{})[o.sampler]||{};return d.magFilter=Wo[f.magFilter]||ft,d.minFilter=Wo[f.minFilter]||Ai,d.wrapS=qo[f.wrapS]||Mi,d.wrapT=qo[f.wrapT]||Mi,s.associations.set(d,{textures:t}),d}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(t,n){const i=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const o=s.images[t],l=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(h){u=!0;const f=new Blob([h],{type:o.mimeType});return c=l.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(h){return new Promise(function(f,g){let _=f;n.isImageBitmapLoader===!0&&(_=function(m){const p=new ct(m);p.needsUpdate=!0,f(p)}),n.load(Vn.resolveURL(h,r.path),_,void 0,g)})}).then(function(h){return u===!0&&l.revokeObjectURL(c),h.userData.mimeType=o.mimeType||Tg(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[t]=d,d}assignTexture(t,n,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(i.texCoord!==void 0&&i.texCoord!=0&&!(n==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+n+" not yet supported."),r.extensions[Ee.KHR_TEXTURE_TRANSFORM]){const l=i.extensions!==void 0?i.extensions[Ee.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const c=r.associations.get(o);o=r.extensions[Ee.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),r.associations.set(o,c)}}return s!==void 0&&(o.encoding=s),t[n]=o,o})}assignFinalMaterial(t){const n=t.geometry;let i=t.material;const s=n.attributes.tangent===void 0,r=n.attributes.color!==void 0,o=n.attributes.normal===void 0;if(t.isPoints){const l="PointsMaterial:"+i.uuid;let c=this.cache.get(l);c||(c=new ta,Ye.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(l,c)),i=c}else if(t.isLine){const l="LineBasicMaterial:"+i.uuid;let c=this.cache.get(l);c||(c=new Bs,Ye.prototype.copy.call(c,i),c.color.copy(i.color),this.cache.add(l,c)),i=c}if(s||r||o){let l="ClonedMaterial:"+i.uuid+":";i.isGLTFSpecularGlossinessMaterial&&(l+="specular-glossiness:"),s&&(l+="derivative-tangents:"),r&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let c=this.cache.get(l);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(l,c),this.associations.set(c,this.associations.get(i))),i=c}i.aoMap&&n.attributes.uv2===void 0&&n.attributes.uv!==void 0&&n.setAttribute("uv2",n.attributes.uv),t.material=i}getMaterialType(){return ns}loadMaterial(t){const n=this,i=this.json,s=this.extensions,r=i.materials[t];let o;const l={},c=r.extensions||{},u=[];if(c[Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=s[Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=h.getMaterialType(),u.push(h.extendParams(l,r,n))}else if(c[Ee.KHR_MATERIALS_UNLIT]){const h=s[Ee.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),u.push(h.extendParams(l,r,n))}else{const h=r.pbrMetallicRoughness||{};if(l.color=new he(1,1,1),l.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;l.color.fromArray(f),l.opacity=f[3]}h.baseColorTexture!==void 0&&u.push(n.assignTexture(l,"map",h.baseColorTexture,Ie)),l.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,l.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(u.push(n.assignTexture(l,"metalnessMap",h.metallicRoughnessTexture)),u.push(n.assignTexture(l,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,l)})))}r.doubleSided===!0&&(l.side=Gn);const d=r.alphaMode||Er.OPAQUE;if(d===Er.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,d===Er.MASK&&(l.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==an&&(u.push(n.assignTexture(l,"normalMap",r.normalTexture)),l.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;l.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==an&&(u.push(n.assignTexture(l,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==an&&(l.emissive=new he().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==an&&u.push(n.assignTexture(l,"emissiveMap",r.emissiveTexture,Ie)),Promise.all(u).then(function(){let h;return o===kr?h=s[Ee.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(l):h=new o(l),r.name&&(h.name=r.name),Fn(h,r),n.associations.set(h,{materials:t}),r.extensions&&Gi(s,h,r),h})}createUniqueName(t){const n=Ue.sanitizeNodeName(t||"");let i=n;for(let s=1;this.nodeNamesUsed[i];++s)i=n+"_"+s;return this.nodeNamesUsed[i]=!0,i}loadGeometries(t){const n=this,i=this.extensions,s=this.primitiveCache;function r(l){return i[Ee.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,n).then(function(c){return Yo(c,l,n)})}const o=[];for(let l=0,c=t.length;l<c;l++){const u=t[l],d=wg(u),h=s[d];if(h)o.push(h.promise);else{let f;u.extensions&&u.extensions[Ee.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=Yo(new It,u,n),s[d]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const n=this,i=this.json,s=this.extensions,r=i.meshes[t],o=r.primitives,l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c].material===void 0?Mg(this.cache):this.getDependency("material",o[c].material);l.push(d)}return l.push(n.loadGeometries(o)),Promise.all(l).then(function(c){const u=c.slice(0,c.length-1),d=c[c.length-1],h=[];for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[g];let x;const S=u[g];if(p.mode===nn.TRIANGLES||p.mode===nn.TRIANGLE_STRIP||p.mode===nn.TRIANGLE_FAN||p.mode===void 0)x=r.isSkinnedMesh===!0?new sm(m,S):new Ct(m,S),x.isSkinnedMesh===!0&&!x.geometry.attributes.skinWeight.normalized&&x.normalizeSkinWeights(),p.mode===nn.TRIANGLE_STRIP?x.geometry=Ko(x.geometry,kc):p.mode===nn.TRIANGLE_FAN&&(x.geometry=Ko(x.geometry,il));else if(p.mode===nn.LINES)x=new om(m,S);else if(p.mode===nn.LINE_STRIP)x=new ea(m,S);else if(p.mode===nn.LINE_LOOP)x=new lm(m,S);else if(p.mode===nn.POINTS)x=new cm(m,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(x.geometry.morphAttributes).length>0&&bg(x,r),x.name=n.createUniqueName(r.name||"mesh_"+t),Fn(x,r),p.extensions&&Gi(s,x,p),n.assignFinalMaterial(x),h.push(x)}for(let g=0,_=h.length;g<_;g++)n.associations.set(h[g],{meshes:t,primitives:g});if(h.length===1)return h[0];const f=new zn;n.associations.set(f,{meshes:t});for(let g=0,_=h.length;g<_;g++)f.add(h[g]);return f})}loadCamera(t){let n;const i=this.json.cameras[t],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new lt(ru.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(n=new Zr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),Fn(n,i),Promise.resolve(n)}loadSkin(t){const n=this.json.skins[t],i={joints:n.joints};return n.inverseBindMatrices===void 0?Promise.resolve(i):this.getDependency("accessor",n.inverseBindMatrices).then(function(s){return i.inverseBindMatrices=s,i})}loadAnimation(t){const i=this.json.animations[t],s=[],r=[],o=[],l=[],c=[];for(let u=0,d=i.channels.length;u<d;u++){const h=i.channels[u],f=i.samplers[h.sampler],g=h.target,_=g.node!==void 0?g.node:g.id,m=i.parameters!==void 0?i.parameters[f.input]:f.input,p=i.parameters!==void 0?i.parameters[f.output]:f.output;s.push(this.getDependency("node",_)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),l.push(f),c.push(g)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c)]).then(function(u){const d=u[0],h=u[1],f=u[2],g=u[3],_=u[4],m=[];for(let x=0,S=d.length;x<S;x++){const E=d[x],T=h[x],b=f[x],C=g[x],P=_[x];if(E===void 0)continue;E.updateMatrix(),E.matrixAutoUpdate=!0;let y;switch(_n[P.path]){case _n.weights:y=Ji;break;case _n.rotation:y=qn;break;case _n.position:case _n.scale:default:y=Qi;break}const A=E.name?E.name:E.uuid,U=C.interpolation!==void 0?yg[C.interpolation]:bi,F=[];_n[P.path]===_n.weights?E.traverse(function(Y){Y.morphTargetInfluences&&F.push(Y.name?Y.name:Y.uuid)}):F.push(A);let ne=b.array;if(b.normalized){const Y=Vr(ne.constructor),D=new Float32Array(ne.length);for(let V=0,k=ne.length;V<k;V++)D[V]=ne[V]*Y;ne=D}for(let Y=0,D=F.length;Y<D;Y++){const V=new y(F[Y]+"."+_n[P.path],T.array,ne,U);C.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(q){const X=this instanceof qn?vg:la;return new X(this.times,this.values,this.getValueSize()/3,q)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(V)}}const p=i.name?i.name:"animation_"+t;return new bm(p,void 0,m)})}createNodeMesh(t){const n=this.json,i=this,s=n.nodes[t];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(l){if(!!l.isMesh)for(let c=0,u=s.weights.length;c<u;c++)l.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const n=this.json,i=this.extensions,s=this,r=n.nodes[t],o=r.name?s.createUniqueName(r.name):"";return function(){const l=[],c=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return c&&l.push(c),r.camera!==void 0&&l.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){l.push(u)}),Promise.all(l)}().then(function(l){let c;if(r.isBone===!0?c=new wl:l.length>1?c=new zn:l.length===1?c=l[0]:c=new We,c!==l[0])for(let u=0,d=l.length;u<d;u++)c.add(l[u]);if(r.name&&(c.userData.name=r.name,c.name=o),Fn(c,r),r.extensions&&Gi(i,c,r),r.matrix!==void 0){const u=new De;u.fromArray(r.matrix),c.applyMatrix4(u)}else r.translation!==void 0&&c.position.fromArray(r.translation),r.rotation!==void 0&&c.quaternion.fromArray(r.rotation),r.scale!==void 0&&c.scale.fromArray(r.scale);return s.associations.has(c)||s.associations.set(c,{}),s.associations.get(c).nodes=t,c})}loadScene(t){const n=this.json,i=this.extensions,s=this.json.scenes[t],r=this,o=new zn;s.name&&(o.name=r.createUniqueName(s.name)),Fn(o,s),s.extensions&&Gi(i,o,s);const l=s.nodes||[],c=[];for(let u=0,d=l.length;u<d;u++)c.push(Dl(l[u],o,n,r));return Promise.all(c).then(function(){const u=d=>{const h=new Map;for(const[f,g]of r.associations)(f instanceof Ye||f instanceof ct)&&h.set(f,g);return d.traverse(f=>{const g=r.associations.get(f);g!=null&&h.set(f,g)}),h};return r.associations=u(o),o})}}function Dl(a,t,n,i){const s=n.nodes[a];return i.getDependency("node",a).then(function(r){if(s.skin===void 0)return r;let o;return i.getDependency("skin",s.skin).then(function(l){o=l;const c=[];for(let u=0,d=o.joints.length;u<d;u++)c.push(i.getDependency("node",o.joints[u]));return Promise.all(c)}).then(function(l){return r.traverse(function(c){if(!c.isMesh)return;const u=[],d=[];for(let h=0,f=l.length;h<f;h++){const g=l[h];if(g){u.push(g);const _=new De;o.inverseBindMatrices!==void 0&&_.fromArray(o.inverseBindMatrices.array,h*16),d.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[h])}c.bind(new Qr(u,d),c.matrixWorld)}),r})}).then(function(r){t.add(r);const o=[];if(s.children){const l=s.children;for(let c=0,u=l.length;c<u;c++){const d=l[c];o.push(Dl(d,r,n,i))}}return Promise.all(o)})}function Ag(a,t,n){const i=t.attributes,s=new Li;if(i.POSITION!==void 0){const l=n.json.accessors[i.POSITION],c=l.min,u=l.max;if(c!==void 0&&u!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(u[0],u[1],u[2])),l.normalized){const d=Vr(es[l.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const l=new R,c=new R;for(let u=0,d=r.length;u<d;u++){const h=r[u];if(h.POSITION!==void 0){const f=n.json.accessors[h.POSITION],g=f.min,_=f.max;if(g!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(_[2]))),f.normalized){const m=Vr(es[f.componentType]);c.multiplyScalar(m)}l.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}a.boundingBox=s;const o=new Ci;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,a.boundingSphere=o}function Yo(a,t,n){const i=t.attributes,s=[];function r(o,l){return n.getDependency("accessor",o).then(function(c){a.setAttribute(l,c)})}for(const o in i){const l=Br[o]||o.toLowerCase();l in a.attributes||s.push(r(i[o],l))}if(t.indices!==void 0&&!a.index){const o=n.getDependency("accessor",t.indices).then(function(l){a.setIndex(l)});s.push(o)}return Fn(a,t),Ag(a,t,n),Promise.all(s).then(function(){return t.targets!==void 0?Sg(a,t.targets,n):a})}function Ko(a,t){let n=a.getIndex();if(n===null){const o=[],l=a.getAttribute("position");if(l!==void 0){for(let c=0;c<l.count;c++)o.push(c);a.setIndex(o),n=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const i=n.count-2,s=[];if(t===il)for(let o=1;o<=i;o++)s.push(n.getX(0)),s.push(n.getX(o)),s.push(n.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(n.getX(o)),s.push(n.getX(o+1)),s.push(n.getX(o+2))):(s.push(n.getX(o+2)),s.push(n.getX(o+1)),s.push(n.getX(o)));s.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=a.clone();return r.setIndex(s),r}const di=new Ri(0,0,0,"YXZ"),fi=new R,Lg={type:"change"},Cg={type:"lock"},Rg={type:"unlock"},Zo=Math.PI/2;class Dg extends Yn{constructor(t,n){super(),n===void 0&&(console.warn('THREE.PointerLockControls: The second parameter "domElement" is now mandatory.'),n=document.body),this.domElement=n,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1;const i=this;function s(l){if(i.isLocked===!1)return;const c=l.movementX||l.mozMovementX||l.webkitMovementX||0,u=l.movementY||l.mozMovementY||l.webkitMovementY||0;di.setFromQuaternion(t.quaternion),di.y-=c*.002*i.pointerSpeed,di.x-=u*.002*i.pointerSpeed,di.x=Math.max(Zo-i.maxPolarAngle,Math.min(Zo-i.minPolarAngle,di.x)),t.quaternion.setFromEuler(di),i.dispatchEvent(Lg)}function r(){i.domElement.ownerDocument.pointerLockElement===i.domElement?(i.dispatchEvent(Cg),i.isLocked=!0):(i.dispatchEvent(Rg),i.isLocked=!1)}function o(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}this.connect=function(){i.domElement.ownerDocument.addEventListener("mousemove",s),i.domElement.ownerDocument.addEventListener("pointerlockchange",r),i.domElement.ownerDocument.addEventListener("pointerlockerror",o)},this.disconnect=function(){i.domElement.ownerDocument.removeEventListener("mousemove",s),i.domElement.ownerDocument.removeEventListener("pointerlockchange",r),i.domElement.ownerDocument.removeEventListener("pointerlockerror",o)},this.dispose=function(){this.disconnect()},this.getObject=function(){return t},this.getDirection=function(){const l=new R(0,0,-1);return function(c){return c.copy(l).applyQuaternion(t.quaternion)}}(),this.moveForward=function(l){fi.setFromMatrixColumn(t.matrix,0),fi.crossVectors(t.up,fi),t.position.addScaledVector(fi,l)},this.moveRight=function(l){fi.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(fi,l)},this.lock=function(){this.domElement.requestPointerLock()},this.unlock=function(){i.domElement.ownerDocument.exitPointerLock()},this.connect()}}const Pl=3,Il=15,Gs=250;let nt=0;function Fl(){return Math.floor(Math.random()*Il+Pl)}let Gr=Fl();function Nl(){return new Array(Gr).fill(null).map(()=>Math.random()>.5)}let wt=Nl();const Gt=new em,Be=new lt(75,1,.1,2100);Be.position.set(0,Gs);const vn=new bl,rs=new Bm;Be.add(rs);const at=new ra(rs),Is=new ra(rs),Fs=new ra(rs),Ar=new Ll(rs);let Ei=1,Lr=!1,Xt=wt[nt]?1:0;const Hr=new We,Wr=new We;Hr.position.set(25,0,900);Wr.position.set(25,0,-800);const Xn=new Ct(new na(12,250,250),new an({color:16776960}));Xn.position.set(-5,415,0);Xn.visible=wt[nt];Gt.add(Xn);const Ol=new Nm(16777215,Ei);Gt.add(Ol);const ca=new El(16776960,Xt);ca.position.set(0,220,0);Gt.add(ca);function Pg(){yt.enabled=!0;let a=0;Xn.visible=wt[nt];let t=window.requestAnimationFrame(function n(i){if(Ei>=1){window.cancelAnimationFrame(t);return}i-a>16&&(a=i,Ei+=.03,wt[nt]?Xt+=.03:Xt=0),t=window.requestAnimationFrame(n)})}function Ul(a){yt.enabled=!1;let t=0;Xn.visible=!1,at.isPlaying&&at.stop();let n=window.requestAnimationFrame(function i(s){if(Ei<=0&&Xt<=0){window.cancelAnimationFrame(n),a==null||a(),Pg();return}s-t>16&&(t=s,Ei-=.03,Xt>0&&(Xt-=.03)),n=window.requestAnimationFrame(i)})}function Ig(){Xt<=0?(Xt=1,at.play()):(Xt=0,at.stop()),Xn.visible=!Xn.visible,wt[nt]=!wt[nt]}function Fg(){Be.position.set(0,Gs,-900),Be.lookAt(0,200,0),wt[nt]?at.play():at.stop()}function Ng(){Be.position.set(0,Gs,900),Be.lookAt(0,200,0),wt[nt]?at.play():at.stop()}function Og(){nt===wt.length-1?nt=0:nt++,Ul(()=>{Ng()})}function zl(){nt===0?nt=wt.length-1:nt--,Ul(()=>{Fg()})}function kl(){const{x:a,z:t}=Be.position;if(a<=-25&&t<=-800){Ig();return}if(a<=50&&a>=-25&&t>900){Fs.play(),zl();return}if(a<=50&&a>=-50&&t<-800){Is.play(),Og();return}}window.addEventListener("keydown",a=>{a.keyCode===13&&kl()});const yt=new Dg(Be,vn.domElement);let Vt=new Set,xn="",Ug=[87,68,83,65];const zg=function(a){!Ug.includes(a.keyCode)||Vt.add(a.keyCode)},kg=function(a){Vt.delete(a.keyCode)};document.addEventListener("keydown",zg,!1);document.addEventListener("keyup",kg,!1);function _t(a,t){for(let[n,i]of Object.entries(t)){if(!Object.getOwnPropertyNames(t).includes(n))return;a.style.setProperty(n,i)}}function sn(a){_t(a,{"background-color":"transparent",padding:"12px 10px",border:"2px solid white",color:"white"})}function Hi(a){a.classList.add("controllable"),addEventListener("selectionchange",t=>{t.preventDefault()}),_t(a,{position:"absolute","border-radius":"50%",width:"20px",height:"20px","justify-content":"center","align-items":"center","user-select":"none"})}function Bg(a){_t(a,{"background-color":"rgba(255, 255, 255, 0.6)",padding:"12px 10px",border:"2px solid white"})}async function Vg(a){const t=document.createElement("style");a.classList.add("game-loading"),_t(a,{display:"flex","background-color":"black",color:"white","justify-content":"center","align-items":"center","font-size":"18px","font-weight":"600",position:"relative","user-select":"none"}),a.innerHTML="Loading...";const n=new Jm,i=new Um,[s,r,o,l,c,u]=await Promise.all([n.loadAsync("/game-train-with-light-bulbs/wagon/scene.gltf"),n.loadAsync("/game-train-with-light-bulbs/light_bulb/scene.gltf"),n.loadAsync("/game-train-with-light-bulbs/light_switch/scene.gltf"),i.loadAsync("/game-train-with-light-bulbs/light_bulb/sound.wav"),i.loadAsync("/game-train-with-light-bulbs/wagon/door.wav"),i.loadAsync("/game-train-with-light-bulbs/wagon/footsteps.wav")]);a.innerHTML="",t.textContent=`
    .controllable { display: flex; }
    @media (min-width: 720px) { .controllable { display: none; } }
  `,a.appendChild(t),at.autoplay=!1,at.setVolume(10),at.setBuffer(l),at.setLoop(!0),at.setRefDistance(20),Is.setVolume(20),Is.setBuffer(c),Wr.add(Is),Fs.setVolume(20),Fs.setBuffer(c),Hr.add(Fs),Ar.setVolume(.2),Ar.setBuffer(u);function d(){Be.position.y=Gs,vn.render(Gt,Be),Be.position.z<-900&&(Be.position.z=-900),Be.position.z>1e3&&(Be.position.z=1e3),Be.position.x>150&&(Be.position.x=150),Be.position.x<-150&&(Be.position.x=-150);for(const S of Vt.values())switch(Lr||(setTimeout(()=>{Lr=!1},200),Lr=!0,Ar.play()),S){case 87:yt.moveForward(10);break;case 68:yt.moveRight(10);break;case 83:yt.moveForward(-10);break;case 65:yt.moveRight(-10);break}xn==="R"?Be.rotateY(-.02):xn==="L"&&Be.rotateY(.02),ca.intensity=Xt,Ol.intensity=Ei,requestAnimationFrame(d)}r.scene.position.set(0,430,0),r.scene.rotateX(Math.PI),s.scene.position.set(0,0,0),o.scene.position.set(-150,255,-1e3),Gt.add(r.scene),Gt.add(o.scene),Gt.add(s.scene),Gt.add(Wr),Gt.add(Hr),r.scene.add(at),Gt.add(yt.getObject()),a.classList.remove("game-loading"),a.appendChild(vn.domElement);const{width:h,height:f}=a.getBoundingClientRect();vn.setSize(h,f),Be.aspect=h/f,Be.updateProjectionMatrix();let g=()=>{const{width:S,height:E}=a.getBoundingClientRect();vn.setSize(S,E),Be.aspect=S/E,Be.updateProjectionMatrix()};window.addEventListener("resize",g),d();const _=document.createElement("div");_t(_,{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center",padding:"24px","text-align":"center",color:"white"});const m=document.createElement("p");m.innerHTML=`
Find the number of wagons<br /><br />
<p style="font-weight: 300">
To move use WASD keys<br />
To switch light/open door go to object and press "Enter".<br />
To make a guess press "Space"<br />
To enter full screen press "Meta/Alt + Enter"
</p>
`;const p=document.createElement("button");p.textContent="Start!",sn(p);let x=()=>{try{yt.lock()}catch{}};p.addEventListener("click",()=>{_.innerHTML="",wt[nt]&&at.play();function S(){a.removeEventListener("click",x),_.style.setProperty("background-color","rgba(0, 0, 0, 0.7");try{yt.unlock()}catch{}const T=document.createElement("p");T.innerHTML=`
        So, what is the number of wagons in train?
      `;const b=document.createElement("input");b.type="number",b.min=Pl,b.max=Il,Bg(b);const C=document.createElement("button");C.textContent="Answer!",sn(C),C.addEventListener("click",()=>{if(_.innerHTML="",Number.parseInt(b.value)===Gr){const P=document.createElement("p");P.innerHTML="Correct!",sn(P);const y=document.createElement("button");y.textContent="Restart!",y.addEventListener("click",()=>{Gr=Fl(),wt=Nl(),nt=0,zl(),_.innerHTML="",yt.lock(),a.addEventListener("click",x),_.style.setProperty("background-color","transparent")},{once:!0}),_.appendChild(P),_.appendChild(y)}else{const P=document.createElement("p");P.innerHTML="Wrong!";const y=document.createElement("button");y.textContent="Try again!",sn(y),y.addEventListener("click",()=>{_.innerHTML="",yt.lock(),a.addEventListener("click",x),_.style.setProperty("background-color","transparent")},{once:!0}),_.appendChild(P),_.appendChild(y)}},{once:!0}),_.appendChild(T),_.appendChild(b),_.appendChild(document.createElement("p")),_.append(C)}function E(){const[T,b,C,P]=new Array(4).fill(null).map((ne,Y)=>{const D=document.createElement("button");let V=0;switch(sn(D),Hi(D),Y){case 0:D.textContent="W",_t(D,{left:"40px",bottom:"45px"}),V=87;break;case 1:D.textContent="D",_t(D,{left:"70px",bottom:"10px"}),V=68;break;case 2:D.textContent="S",_t(D,{left:"40px",bottom:"10px"}),V=83;break;case 3:D.textContent="A",_t(D,{left:"10px",bottom:"10px"}),V=65;break}return D.addEventListener("pointerdown",()=>{a.removeEventListener("click",x),Vt.add(V)}),D.addEventListener("pointerup",()=>{a.addEventListener("click",x),Vt.delete(V)}),D.addEventListener("pointerleave",()=>{a.addEventListener("click",x),Vt.delete(V)}),D}),y=document.createElement("button");sn(y),Hi(y),_t(y,{right:"130px",bottom:"10px"}),y.textContent="L",y.addEventListener("pointerdown",()=>{a.removeEventListener("click",x),xn="L"}),y.addEventListener("pointerup",()=>{a.addEventListener("click",x),xn="",Vt.delete(key)}),y.addEventListener("pointerleave",()=>{a.addEventListener("click",x),xn="",Vt.delete(key)});const A=document.createElement("button");sn(A),Hi(A),_t(A,{right:"100px",bottom:"10px"}),A.textContent="R",A.addEventListener("pointerdown",()=>{a.removeEventListener("click",x),xn="R"}),A.addEventListener("pointerup",()=>{e.preventDefault(),a.addEventListener("click",x),xn="",Vt.delete(key)}),A.addEventListener("pointerleave",()=>{a.addEventListener("click",x),xn="",Vt.delete(key)});const U=document.createElement("button");sn(U),Hi(U),U.textContent="A",_t(U,{right:"200px",bottom:"10px"}),U.addEventListener("pointerdown",()=>{S()});const F=document.createElement("button");return sn(F),Hi(F),F.textContent="E",_t(F,{right:"40px",bottom:"10px"}),F.addEventListener("pointerdown",()=>{kl()}),[T,b,C,P,y,A,U,F]}E().forEach(T=>{a.appendChild(T)}),a.addEventListener("click",x),document.addEventListener("keydown",T=>{if((T.altKey||T.metaKey)&&T.keyCode===13){const b=window.screen.width,C=window.screen.height;vn.domElement.width=b,vn.domElement.height=C,vn.setSize(b,C),Be.aspect=b/C,Be.updateProjectionMatrix(),a.requestFullscreen().then(()=>{yt.lock()})}T.keyCode===32&&S()})}),_.appendChild(m),_.appendChild(p),a.appendChild(_)}Vg(document.querySelector("#game"));
