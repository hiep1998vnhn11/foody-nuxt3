import{u as b,a as w,_ as k}from"./useObserver-8114fa5d.mjs";import{_ as S,d as D,r as l,a as C,b as M,o as s,c as a,e as t,F as m,f as _,w as N,t as p,g as R}from"./entry-6770546c.mjs";const j=D({__name:"index",setup(y,{expose:g}){g();const i={image:"https://images.foody.vn/res/g75/747170/prof/s750x400/foody-upload-api-foody-mobile-1-jpg-180606103333.jpg",name:"The Coldest Sunset",description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,tags:["photography","travel","lifestyle"]},o=async x=>{e.value=!0,await new Promise(h=>setTimeout(h,500)),e.value=!1;const f=Date.now();return Array.from({length:x},(h,v)=>({...i,name:`${i.name} ${f+v+1}`,image:i.image+"?t="+(f+v),tags:i.tags.slice(0,Math.floor(Math.random()*3)+1)}))},c=l([]),d=l(null);b(c),w(d,async()=>{r.value=[...r.value,...await o(20)]});const r=l([]),u=l(0),e=l(!0);C(async()=>{r.value=await o(40)});const n={defaultItem:i,generateItems:o,imageRef:c,intersectionElementRef:d,items:r,total:u,loading:e};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),z={class:"container"},B=t("h1",{class:"text-bold text-3xl mb-2"}," Nuxtapp Demo some card items with lazyload and intersection observer ",-1),E=t("h2",null,"This page was using CDN image",-1),O={class:"grid md:grid-cols-5 gap-2 grid-cols-2 sm:grid-cols-3"},T={class:"w-full",alt:"Sunset in the mountains"},V={class:"px-3 py-2"},$={class:"font-bold text-xl mb-2"},q={class:"text-gray-700 text-base"},F={class:"px-3 pt-2 pb-1"},I={key:0,class:"grid grid-cols-5 gap-2"},L={key:1,ref:"intersectionElementRef"};function P(y,g,i,o,c,d){const r=k,u=M("lazy");return s(),a("div",z,[B,E,t("div",null,[t("div",O,[(s(!0),a(m,null,_(o.items,e=>(s(),a("div",{key:e.name,class:"card max-w-sm rounded overflow-hidden shadow-lg",ref_for:!0,ref:n=>o.imageRef.push(n)},[N(t("img",T,null,512),[[u,e.image]]),t("div",V,[t("div",$,p(e.name),1),t("p",q,p(e.description),1)]),t("div",F,[(s(!0),a(m,null,_(e.tags,n=>(s(),a("span",{key:n,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," #"+p(n),1))),128))])]))),128))]),o.loading?(s(),a("div",I,[(s(),a(m,null,_(10,e=>R(r,{key:e})),64))])):(s(),a("div",L,null,512))])])}var H=S(j,[["render",P]]);export{H as default};