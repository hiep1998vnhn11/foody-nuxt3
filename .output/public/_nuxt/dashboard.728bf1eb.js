import{u as x,a as b,_ as w}from"./useObserver.f07b43d3.js";import{e as k,r as n,f as D,b as t,h as e,F as m,i as p,u as _,o as s,w as S,t as g,j,k as C}from"./entry.ad7b1a50.js";const M={class:"container"},N=e("h1",{class:"text-bold text-3xl mb-2"}," Nuxtapp Demo some card items with lazyload and intersection observer ",-1),z=e("h2",null,"This page was using mix CDN and static image",-1),B={class:"grid grid-cols-5 gap-2"},E={class:"w-full",alt:"Sunset in the mountains"},R={class:"px-3 py-2"},T={class:"font-bold text-xl mb-2"},V={class:"text-gray-700 text-base"},q={class:"px-3 pt-2 pb-1"},F={key:0,class:"grid grid-cols-5 gap-2"},$=k({__name:"dashboard",setup(I){const i={image:"https://images.foody.vn/res/g75/747170/prof/s750x400/foody-upload-api-foody-mobile-1-jpg-180606103333.jpg",name:"The Coldest Sunset",description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,tags:["photography","travel","lifestyle"]},f=async y=>{d.value=!0,await new Promise(l=>setTimeout(l,500)),d.value=!1;const u=Date.now();return Array.from({length:y},(l,o)=>({...i,name:`${i.name} ${u+o+1}`,image:(o%2?i.image:"/nem.jpeg")+"?t="+(u+o),tags:i.tags.slice(0,Math.floor(Math.random()*3)+1)}))},h=n([]),v=n(null);x(h),b(v,async()=>{r.value=[...r.value,...await f(20)]});const r=n([]);n(0);const d=n(!0);return D(async()=>{r.value=await f(40)}),(y,u)=>{const l=w,o=C("lazy");return s(),t("div",M,[N,z,e("div",null,[e("div",B,[(s(!0),t(m,null,p(_(r),a=>(s(),t("div",{key:a.name,class:"card max-w-sm rounded overflow-hidden shadow-lg",ref_for:!0,ref:c=>_(h).push(c)},[S(e("img",E,null,512),[[o,a.image]]),e("div",R,[e("div",T,g(a.name),1),e("p",V,g(a.description),1)]),e("div",q,[(s(!0),t(m,null,p(a.tags,c=>(s(),t("span",{key:c,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," #"+g(c),1))),128))])]))),128))]),_(d)?(s(),t("div",F,[(s(),t(m,null,p(10,a=>j(l,{key:a})),64))])):(s(),t("div",{key:1,ref_key:"intersectionElementRef",ref:v},null,512))])])}}});export{$ as default};
