import{A as l}from"./animation.9d5c139f.js";import{d as i,e as a,o as c,c as _,b as t,C as n}from"./index.4f744734.js";import"./common.d57d85d0.js";const v={class:"PieChartCss"},u=t("div",{class:"PieChartCss_cover1"},null,-1),P=i({__name:"PieChartCss",setup(m){const s=a(0),o=a(0),r=a(1);return new l().start(e=>{e>.5?(s.value=180,r.value=0,o.value=360*e-180):s.value=360*e},1e3),(e,C)=>(c(),_("div",v,[u,t("div",{style:n({transform:`rotate(${s.value}deg)`,zIndex:r.value}),class:"PieChartCss_cover2"},null,4),t("div",{style:n({transform:`rotate(${o.value}deg)`}),class:"PieChartCss_cover3"},null,4)]))}});export{P as default};
