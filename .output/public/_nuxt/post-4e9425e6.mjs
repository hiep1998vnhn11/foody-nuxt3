import{u as b,a as w,_ as k}from"./useObserver-8114fa5d.mjs";import{_ as S,d as D,r as l,a as M,b as R,o as s,c as a,e as t,F as _,f as m,w as z,t as p,g as B}from"./entry-6770546c.mjs";const C=D({__name:"post",setup(y,{expose:g}){g();const r={image:"/nem.jpeg",name:"The Coldest Sunset",description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,tags:["photography","travel","lifestyle"]},n=async x=>{e.value=!0,await new Promise(h=>setTimeout(h,500)),e.value=!1;const f=Date.now();return Array.from({length:x},(h,v)=>({...r,name:`${r.name} ${f+v+1}`,image:r.image+"?t="+(f+v),tags:r.tags.slice(0,Math.floor(Math.random()*3)+1)}))},c=l([]),d=l(null);b(c),w(d,async()=>{i.value=[...i.value,...await n(20)]});const i=l([]),u=l(0),e=l(!0);M(async()=>{i.value=await n(40)});const o={defaultItem:r,generateItems:n,imageRef:c,intersectionElementRef:d,items:i,total:u,loading:e};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),E={class:"container"},N=t("h1",{class:"text-bold text-3xl mb-2"}," Nuxtapp Demo some card items with lazyload and intersection observer ",-1),O=t("h2",null,"This page was using Static server image",-1),T={class:"grid grid-cols-5 gap-2"},V={class:"w-full",alt:"Sunset in the mountains"},$={class:"px-3 py-2"},j={class:"font-bold text-xl mb-2"},q={class:"text-gray-700 text-base"},F={class:"px-3 pt-2 pb-1"},I={key:0,class:"grid grid-cols-5 gap-2"},L={key:1,ref:"intersectionElementRef"};function P(y,g,r,n,c,d){const i=k,u=R("lazy");return s(),a("div",E,[N,O,t("div",null,[t("div",T,[(s(!0),a(_,null,m(n.items,e=>(s(),a("div",{key:e.name,class:"card max-w-sm rounded overflow-hidden shadow-lg",ref_for:!0,ref:o=>n.imageRef.push(o)},[z(t("img",V,null,512),[[u,e.image]]),t("div",$,[t("div",j,p(e.name),1),t("p",q,p(e.description),1)]),t("div",F,[(s(!0),a(_,null,m(e.tags,o=>(s(),a("span",{key:o,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," #"+p(o),1))),128))])]))),128))]),n.loading?(s(),a("div",I,[(s(),a(_,null,m(10,e=>B(i,{key:e})),64))])):(s(),a("div",L,null,512))])])}var H=S(C,[["render",P]]);export{H as default};
