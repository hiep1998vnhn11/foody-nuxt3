import{u as b,a as w,_ as k}from"./useObserver-221ce10d.mjs";import{_ as S,d as D,r as l,a as M,b as R,o as t,c as s,e as o,F as _,f as m,w as B,t as p,g as C}from"./entry-64c14c12.mjs";const E=D({__name:"post",setup(y,{expose:f}){f();const r={image:"/nem.jpeg",name:"The Coldest Sunset",description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.`,tags:["photography","travel","lifestyle"]},a=async x=>{e.value=!0,await new Promise(v=>setTimeout(v,500)),e.value=!1;const g=Date.now();return Array.from({length:x},(v,h)=>({...r,name:`${r.name} ${g+h+1}`,image:r.image+"?t="+(g+h),tags:r.tags.slice(0,Math.floor(Math.random()*3)+1)}))},c=l([]),d=l(null);b(c),w(d,async()=>{i.value=[...i.value,...await a(20)]});const i=l([]),u=l(0),e=l(!0);M(async()=>{i.value=await a(40)});const n={defaultItem:r,generateItems:a,imageRef:c,intersectionElementRef:d,items:i,total:u,loading:e};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),O={class:"container"},V={class:"grid grid-cols-5 gap-2"},$={class:"w-full",alt:"Sunset in the mountains"},j={class:"px-3 py-2"},q={class:"font-bold text-xl mb-2"},z={class:"text-gray-700 text-base"},F={class:"px-3 pt-2 pb-1"},I={key:0,class:"grid grid-cols-5 gap-2"},L={key:1,ref:"intersectionElementRef"};function N(y,f,r,a,c,d){const i=k,u=R("lazy");return t(),s("div",O,[o("div",null,[o("div",V,[(t(!0),s(_,null,m(a.items,e=>(t(),s("div",{key:e.name,class:"card max-w-sm rounded overflow-hidden shadow-lg",ref_for:!0,ref:n=>a.imageRef.push(n)},[B(o("img",$,null,512),[[u,e.image]]),o("div",j,[o("div",q,p(e.name),1),o("p",z,p(e.description),1)]),o("div",F,[(t(!0),s(_,null,m(e.tags,n=>(t(),s("span",{key:n,class:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"}," #"+p(n),1))),128))])]))),128))]),a.loading?(t(),s("div",I,[(t(),s(_,null,m(10,e=>C(i,{key:e})),64))])):(t(),s("div",L,null,512))])])}var A=S(E,[["render",N]]);export{A as default};
