import{_ as w,d as k,r as l,a as S,o as t,c as s,e as a,F as m,f as _,g as y,t as p,k as C}from"./entry-0690abe0.mjs";import{u as D,a as M,_ as N}from"./useObserver-b327d869.mjs";const R=k({__name:"index",setup(v,{expose:g}){g();const r={image:"https://images.foody.vn/res/g75/747170/prof/s750x400/foody-upload-api-foody-mobile-1-jpg-180606103333.jpg",name:"The Coldest Sunset",description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,tags:["photography","travel","lifestyle"]},o=async b=>{e.value=!0,await new Promise(h=>setTimeout(h,500)),e.value=!1;const f=Date.now();return Array.from({length:b},(h,x)=>({...r,name:`${r.name} ${f+x+1}`,image:r.image+"?t="+(f+x),tags:r.tags.slice(0,Math.floor(Math.random()*3)+1)}))},c=l([]),d=l(null);D(c),M(d,async()=>{i.value=[...i.value,...await o(20)]});const i=l([]),u=l(0),e=l(!0);S(async()=>{i.value=await o(40)});const n={defaultItem:r,generateItems:o,imageRef:c,intersectionElementRef:d,items:i,total:u,loading:e};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),j={class:"container"},q=a("h1",{class:"text-bold text-3xl mb-2"}," Nuxtapp Demo some card items with lazyload and intersection observer ",-1),B=a("h2",null,"This page was using CDN image",-1),E={class:"grid md:grid-cols-5 gap-2 grid-cols-2 sm:grid-cols-3"},O={class:"px-3 py-2"},T={class:"font-bold text-xl mb-2"},V={class:"text-gray-700 text-base"},$={class:"px-3 pt-2 pb-1"},F={key:0,class:"grid grid-cols-5 gap-2"},I={key:1,ref:"intersectionElementRef"};function L(v,g,r,o,c,d){const i=C,u=N;return t(),s("div",j,[q,B,a("div",null,[a("div",E,[(t(!0),s(m,null,_(o.items,e=>(t(),s("div",{key:e.name,class:"card max-w-sm rounded overflow-hidden shadow-lg",ref_for:!0,ref:n=>o.imageRef.push(n)},[y(i,{class:"w-full",src:e.image,alt:"Sunset in the mountains",width:"750",height:"400",placeholder:"",quality:"80"},null,8,["src"]),a("div",O,[a("div",T,p(e.name),1),a("p",V,p(e.description),1)]),a("div",$,[(t(!0),s(m,null,_(e.tags,n=>(t(),s("span",{key:n,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," #"+p(n),1))),128))])]))),128))]),o.loading?(t(),s("div",F,[(t(),s(m,null,_(10,e=>y(u,{key:e})),64))])):(t(),s("div",I,null,512))])])}var A=w(R,[["render",L]]);export{A as default};
