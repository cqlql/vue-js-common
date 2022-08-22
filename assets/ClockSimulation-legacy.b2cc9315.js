!function(){function t(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function n(n){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?t(Object(r),!0).forEach((function(t){e(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var o=document.createElement("style");o.innerHTML='.ClockSimulation{width:320px;height:320px;position:relative;background:url(assets/ClockDial.c3725888.png) no-repeat;background-size:100% auto}.ClockSimulation:after{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;background-color:#445157;border-radius:100%;box-sizing:border-box;border:8px solid #5f6c72}.ClockSimulation_hand{width:12px;height:80%;margin-left:-6px;position:absolute;left:50%;top:10%;pointer-events:none}.ClockSimulation_hand .hand{width:100%;height:38%;background-color:#000;position:relative;margin-top:30px;border-radius:50px;z-index:1;pointer-events:all}.ClockSimulation_hour{width:16px;margin-left:-8px}.ClockSimulation_hour .hand{background-color:#d66c62;margin-top:60px;height:28%}.ClockSimulation_minute{transform:rotate(45deg)}.ClockSimulation_minute .hand{background-color:#4ab2bf}.ClockSimulation_minute .hand:after{border-color:transparent transparent #4ab2bf transparent}.ClockSimulationDemo[data-v-6abc3370]{margin:10px}\n',document.head.appendChild(o),System.register(["./drag-legacy.57018cf1.js","./index-legacy.0b2629ab.js"],(function(t){"use strict";var e,o,r,i,a,u,c,l,d,s,p,m,f,h,b;return{setters:[function(t){e=t.d},function(t){o=t.d,r=t.z,i=t.w,a=t.o,u=t.c,c=t.b,l=t.A,d=t.C,s=t.u,p=t.D,m=t._,f=t.h,h=t.p,b=t.m}],execute:function(){var g={class:"ClockSimulation"},v={class:"hand"},k={class:"hand"},C=o({name:"ClockSimulation",directives:{drag:{mounted:function(t,n){n.value(t,n.arg)}}}}),S=o(n(n({},C),{},{props:{hour:{default:0},minute:{default:0}},setup:function(t){var n=t,o=r({hour:0,minute:0});function m(t,n){var r=t.parentElement.parentElement,i=0,a=0;e({elem:t,onDown:function(){},onStart:function(t){var n=r.getBoundingClientRect();i=n.width/2+n.left,a=n.height/2+n.top,t.touches&&t.touches[0]},onMove:function(t){t.preventDefault();var e=t.touches?t.touches[0]:t,r=e.pageX,u=e.pageY,c=i-r,l=a-u,d=180*-Math.atan(c/l)/Math.PI;l<0&&(d+=180),o[n]=d},onEnd:function(){}})}return i([function(){return n.hour},function(){return n.minute}],(function(){var t,e;t=n.hour,e=n.minute,o.hour=t%12/12*360,o.minute=e%60/60*360})),function(t,n){var e=p("drag");return a(),u("div",g,[c("div",{class:"ClockSimulation_hand ClockSimulation_hour",style:d({transform:"rotate(".concat(s(o).hour,"deg)")})},[l(c("div",v,null,512),[[e,m,"hour"]])],4),c("div",{class:"ClockSimulation_hand ClockSimulation_minute",style:d({transform:"rotate(".concat(s(o).minute,"deg)")})},[l(c("div",k,null,512),[[e,m,"minute"]])],4)])}}})),x={class:"ClockSimulationDemo"},y=function(t){return h("data-v-6abc3370"),t=t(),b(),t}((function(){return c("h1",null,"可拖动设置时钟",-1)}));t("default",m(o({__name:"ClockSimulation",setup:function(t){return function(t,n){return a(),u("div",x,[y,f(S)])}}}),[["__scopeId","data-v-6abc3370"]]))}}}))}();
