var T=Object.defineProperty,V=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var g=(s,e,t)=>e in s?T(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,d=(s,e)=>{for(var t in e||(e={}))y.call(e,t)&&g(s,t,e[t]);if(f)for(var t of f(e))R.call(e,t)&&g(s,t,e[t]);return s},w=(s,e)=>V(s,k(e));var b=(s,e,t)=>new Promise((i,n)=>{var a=r=>{try{o(t.next(r))}catch(u){n(u)}},l=r=>{try{o(t.throw(r))}catch(u){n(u)}},o=r=>r.done?i(r.value):Promise.resolve(r.value).then(a,l);o((t=t.apply(s,e)).next())});import"./common.d57d85d0.js";import{a as P}from"./autoprefix.3c5bbd3f.js";import{d as c,e as A,w as B,o as v,c as D,b as h,h as C}from"./index.4f744734.js";function F(s=1){return new Promise(e=>{setTimeout(()=>{e(null)},s)})}var E="assets/plate.7a52c3b8.svg";class I{start(e,t,i=400,n=()=>{}){let a=0,l=20,o=i/l,r=0,u=100,x=u-r,_=this;function m(){a++,a>=o&&(a=o);let p=!0;switch(e(_.easing(null,a,r,x,o)/u)){case 1:a=0,e=t;break;case 2:p=!1,n();break}p&&(_.stopId=requestAnimationFrame(m,l))}m()}stop(){cancelAnimationFrame(this.stopId)}easing(e,t,i,n,a){return n*((t=t/a-1)*t*t+1)+i}}let N=P("transform");class S{init({el:e,complete:t,count:i=6,offsetDeg:n=0}){this.animation=new I,this.deg=0,this.targetDeg=0,this.result=0,this.isRun=!1,this.count=i,this.pieDeg=360/this.count,this.maxDeg=360,this.maxSpeed=16,this.time=1600,this.offsetDeg=n,this.rotate=function(a){e.style[N]="rotate3d(0,0,1,"+a+"deg)"},this.complete=t}start(){if(this.isRun)return;this.isRun=!0,this.result=0;let e;this.animation.start(t=>{if(this.deg=(this.deg+this.maxSpeed*t)%this.maxDeg,this.rotate(this.deg),this.result&&t===1)return e=this.deg/this.targetDeg,1},t=>{if(this.deg=(e+(1-e)*t)*this.targetDeg,this.rotate(this.deg),t===1)return 2},this.time,()=>{this.isRun=!1,this.complete()})}stop(e){this.result=1,this.targetDeg=e*this.pieDeg+this.offsetDeg+this.maxDeg*2}rotate(){}complete(){}}const $={class:"TurntableView"},q=h("img",{src:E},null,-1),j=[q],z=c({name:"VTurntable"}),G=c(w(d({},z),{props:{wait:null},setup(s){const e=s,t=A(null);let i=new S;B(t,()=>{t.value&&i.init({el:t.value,complete(){console.log("\u7ED3\u675F")}})});function n(){i.start(),e.wait().then(l=>{i.stop(l)})}function a(){i.stop(1)}return(l,o)=>(v(),D("div",$,[h("p",null,[h("button",{onClick:n},"start"),h("button",{onClick:a},"stop")]),h("div",{ref_key:"ePlate",ref:t,class:"TurntableView_turntable"},j,512)]))}}));const H={class:"TurntableView"},O=c({__name:"TurntableView",setup(s){function e(){return b(this,null,function*(){return yield F(1e3),0})}return(t,i)=>(v(),D("div",H,[C(G,{wait:e})]))}});export{O as default};
