import"./common.d57d85d0.js";class d{start(e,n=400,i=()=>{}){let t=0,l=n/20,r=0,p=1,s=this;function o(){t++,t<l?(e(s.easing(null,t,r,p,l)),s.stopId=requestAnimationFrame(o)):(e(1),s.stopId=void 0,i())}o()}stop(){cancelAnimationFrame(this.stopId)}easing(e,n,i,t,a){return-t*(n/=a)*(n-2)+i}}export{d as A};
