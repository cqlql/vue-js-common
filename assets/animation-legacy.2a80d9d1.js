System.register(["./common-legacy.65ac4849.js"],(function(t){"use strict";return{setters:[function(){}],execute:function(){t("A",class{start(t,e=400,n=(()=>{})){let s=0,i=e/20,o=this;!function e(){s++,s<i?(t(o.easing(null,s,0,1,i)),o.stopId=requestAnimationFrame(e)):(t(1),o.stopId=void 0,n())}()}stop(){cancelAnimationFrame(this.stopId)}easing(t,e,n,s,i){return-s*(e/=i)*(e-2)+n}})}}}));
