import{S as m}from"./sortable.esm-fa38c9a5.js";import{t as i}from"./data-838e3f89.js";import{r as o,o as b,n as l}from"./index-7e650895.js";function f(){const t=o(i),e=o([{label:"ID",prop:"id"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"}]),p=o([{label:"ID",prop:a=>e.value[a].prop},{label:"\u65E5\u671F",prop:a=>e.value[a].prop},{label:"\u59D3\u540D",prop:a=>e.value[a].prop}]),n=a=>{a.preventDefault(),l(()=>{const s=document.querySelector(".el-table__header-wrapper tr");m.create(s,{animation:300,delay:0,onEnd:({newIndex:u,oldIndex:r})=>{const c=e.value[r];e.value.splice(r,1),e.value.splice(u,0,c)}})})};return b(()=>{l(()=>{n(event)})}),{columns:p,dataList:t,columnsDrag:e}}export{f as useColumns};
