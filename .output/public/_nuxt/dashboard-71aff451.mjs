import{u as x,a as w,_ as k}from"./useObserver-221ce10d.mjs";import{_ as S,d as j,r as l,a as D,b as M,o as t,c as s,e as n,F as m,f as p,w as R,t as f,g as B}from"./entry-64c14c12.mjs";const C=j({__name:"dashboard",setup(y,{expose:g}){g();const r={image:"https://images.foody.vn/res/g75/747170/prof/s750x400/foody-upload-api-foody-mobile-1-jpg-180606103333.jpg",name:"The Coldest Sunset",description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,tags:["photography","travel","lifestyle"]},a=async b=>{e.value=!0,await new Promise(v=>setTimeout(v,500)),e.value=!1;const h=Date.now();return Array.from({length:b},(v,_)=>({...r,name:`${r.name} ${h+_+1}`,image:(_%2?r.image:"/nem.jpeg")+"?t="+(h+_),tags:r.tags.slice(0,Math.floor(Math.random()*3)+1)}))},c=l([]),d=l(null);x(c),w(d,async()=>{i.value=[...i.value,...await a(20)]});const i=l([]),u=l(0),e=l(!0);D(async()=>{i.value=await a(40)});const o={defaultItem:r,generateItems:a,imageRef:c,intersectionElementRef:d,items:i,total:u,loading:e};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}}),E={class:"container"},O={class:"grid grid-cols-5 gap-2"},V={class:"w-full",alt:"Sunset in the mountains"},$={class:"px-3 py-2"},q={class:"font-bold text-xl mb-2"},z={class:"text-gray-700 text-base"},F={class:"px-3 pt-2 pb-1"},I={key:0,class:"grid grid-cols-5 gap-2"},L={key:1,ref:"intersectionElementRef"};function N(y,g,r,a,c,d){const i=k,u=M("lazy");return t(),s("div",E,[n("div",null,[n("div",O,[(t(!0),s(m,null,p(a.items,e=>(t(),s("div",{key:e.name,class:"card max-w-sm rounded overflow-hidden shadow-lg",ref_for:!0,ref:o=>a.imageRef.push(o)},[R(n("img",V,null,512),[[u,e.image]]),n("div",$,[n("div",q,f(e.name),1),n("p",z,f(e.description),1)]),n("div",F,[(t(!0),s(m,null,p(e.tags,o=>(t(),s("span",{key:o,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," #"+f(o),1))),128))])]))),128))]),a.loading?(t(),s("div",I,[(t(),s(m,null,p(10,e=>B(i,{key:e})),64))])):(t(),s("div",L,null,512))])])}var A=S(C,[["render",N]]);export{A as default};