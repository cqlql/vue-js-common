!function(){var e=document.createElement("style");e.innerHTML=".UseSearchDemo[data-v-ec134286] b{background-color:#ff0}\n",document.head.appendChild(e),System.register(["./index-legacy.75ae5663.js","./search-legacy.61a7a43a.js"],(function(e){"use strict";var t,l,n,a,u,c,s,r,i,o,d,m,b;return{setters:[function(e){t=e.e,l=e._,n=e.d,a=e.o,u=e.c,c=e.A,s=e.O,r=e.u,i=e.b,o=e.k,d=e.F,m=e.j},function(e){b=e.S}],execute:function(){const y={class:"UseSearchDemo"},f={key:0},p={key:1},v=["innerHTML"];e("default",l(n({__name:"UseSearchDemo",setup(e){const{keyword:l,search:n,resultList:h,isEmpty:g}=function({list:e,getItemText:l,buildItem:n}){const a=new b,u=t(""),c=t([]),s=t(!1);return{keyword:u,resultList:c,search:function(){a.to({keyword:u.value,list:e,getItemText:l,buildItem:n,cb(e){c.value=e,s.value=0===e.length},time:300})},isEmpty:s}}({list:[{label:"朋友带我去看一位收藏家的收藏"},{label:"据说他收藏的都是顶级的东西"},{label:"随便拿一件来都是价逾千万。"}],getItemText:e=>e.label,buildItem:({keyWrodText:e})=>({label:e})});return n(),(e,t)=>(a(),u("div",y,[c(i("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o(l)?l.value=e:null),onInput:t[1]||(t[1]=(...e)=>r(n)&&r(n)(...e))},null,544),[[s,r(l)]]),r(g)?(a(),u("div",f,"暂无数据")):(a(),u("ul",p,[(a(!0),u(d,null,m(r(h),(e=>(a(),u("li",{innerHTML:e.label},null,8,v)))),256))]))]))}}),[["__scopeId","data-v-ec134286"]]))}}}))}();
