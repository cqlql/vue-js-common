import{_ as d,d as F,e as l,o as u,c as t,A as m,O as p,b as v,F as E,j as B}from"./index.99257a60.js";import{S as f}from"./search.aca0e49a.js";const h={class:"SearchDemo"},D={key:0},b={key:1},y=["innerHTML"],k=F({__name:"SearchDemo",setup(x){const _=new f;let i=[{label:"\u670B\u53CB\u5E26\u6211\u53BB\u770B\u4E00\u4F4D\u6536\u85CF\u5BB6\u7684\u6536\u85CF"},{label:"\u636E\u8BF4\u4ED6\u6536\u85CF\u7684\u90FD\u662F\u9876\u7EA7\u7684\u4E1C\u897F"},{label:"\u968F\u4FBF\u62FF\u4E00\u4EF6\u6765\u90FD\u662F\u4EF7\u903E\u5343\u4E07\u3002"}];const a=l("\u6536"),n=l([]),s=l(!1);function r(){_.to({keyword:a.value,list:i,getItemText:e=>e.label,buildItem({keyWrodText:e}){return{label:e}},noMarkKeyword:!0,cb(e){n.value=e,s.value=e.length===0},time:300})}return r(),(e,c)=>(u(),t("div",h,[m(v("input",{type:"text","onUpdate:modelValue":c[0]||(c[0]=o=>a.value=o),onInput:r},null,544),[[p,a.value]]),s.value?(u(),t("div",D,"\u6682\u65E0\u6570\u636E")):(u(),t("ul",b,[(u(!0),t(E,null,B(n.value,o=>(u(),t("li",{innerHTML:o.label},null,8,y))),256))]))]))}});var w=d(k,[["__scopeId","data-v-574f07c8"]]);export{w as default};
