import{d as F,r as d,V as O,o as $,bH as j,b as a,c as A,k as M,h as x,f as t,w as n,m as T,ab as q,u as h,g as p,az as H,ar as L,z as P,p as U,q as G,a3 as J,_ as K}from"./index-ab9e3548.js";import{g as Q}from"./system-a958aca1.js";import{u as g}from"./hooks-746a29a9.js";const W=c=>(U("data-v-a4e19cee"),c=c(),G(),c),X={class:"max-w-[260px] h-full min-h-[780px] bg-bg_color"},Y={class:"flex items-center h-[34px]"},Z=W(()=>x("p",{class:"flex-1 ml-2 font-bold text-base truncate",title:"\u90E8\u95E8\u5217\u8868"}," \u90E8\u95E8\u5217\u8868 ",-1)),ee=F({__name:"tree",setup(c){const E={children:"children",label:"name"},v=d([]),i=d(""),{proxy:C}=J(),y=d(),r=d({}),I=(o,e)=>o?e.name.includes(o):!0;function V(o){var l;const e=o.$treeNodeId;r.value[e]=(l=r.value[e])!=null&&l.highlight?Object.assign({id:e},r.value[e],{highlight:!1}):Object.assign({id:e},r.value[e],{highlight:!0}),Object.values(r.value).forEach(u=>{u.id!==e&&(u.highlight=!1)})}function _(o){const e=C.$refs.treeRef.store._getAllNodes();for(let l=0;l<e.length;l++)e[l].expanded=o}function N(){r.value={},i.value="",_(!0)}return O(i,o=>{y.value.filter(o)}),$(async()=>{const{data:o}=await Q();v.value=j(o)}),(o,e)=>{const l=a("IconifyIconOffline"),u=a("el-icon"),z=a("el-input"),f=a("el-button"),m=a("el-dropdown-item"),D=a("el-dropdown-menu"),R=a("el-dropdown"),S=a("el-divider"),B=a("el-tree");return A(),M("div",X,[x("div",Y,[Z,t(z,{style:{flex:"2"},size:"small",modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=s=>i.value=s),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",clearable:""},{suffix:n(()=>[t(u,{class:"el-input__icon"},{default:n(()=>[T(t(l,{icon:"search"},null,512),[[q,i.value.length===0]])]),_:1})]),_:1},8,["modelValue"]),t(R,null,{dropdown:n(()=>[t(D,null,{default:n(()=>[t(m,null,{default:n(()=>[t(f,{class:"reset-margin !h-[20px] !text-gray-500 dark:!text-white dark:hover:!text-primary",link:"",type:"primary",icon:h(g)("expand"),onClick:e[1]||(e[1]=s=>_(!0))},{default:n(()=>[p(" \u5C55\u5F00\u5168\u90E8 ")]),_:1},8,["icon"])]),_:1}),t(m,null,{default:n(()=>[t(f,{class:"reset-margin !h-[20px] !text-gray-500 dark:!text-white dark:hover:!text-primary",link:"",type:"primary",icon:h(g)("unExpand"),onClick:e[2]||(e[2]=s=>_(!1))},{default:n(()=>[p(" \u6298\u53E0\u5168\u90E8 ")]),_:1},8,["icon"])]),_:1}),t(m,null,{default:n(()=>[t(f,{class:"reset-margin !h-[20px] !text-gray-500 dark:!text-white dark:hover:!text-primary",link:"",type:"primary",icon:h(g)("reset"),onClick:N},{default:n(()=>[p(" \u91CD\u7F6E\u72B6\u6001 ")]),_:1},8,["icon"])]),_:1})]),_:1})]),default:n(()=>[t(l,{class:"w-[28px] cursor-pointer",width:"18px",icon:"more-vertical"})]),_:1})]),t(S),t(B,{ref_key:"treeRef",ref:y,data:v.value,"node-key":"id",size:"small",props:E,"default-expand-all":"","expand-on-click-node":!1,"filter-node-method":I,onNodeClick:V},{default:n(({node:s,data:k})=>{var w,b;return[x("span",{class:H(["pl-1","pr-1","rounded","flex","items-center","select-none",i.value.trim().length>0&&s.label.includes(i.value)&&"text-red-500",(w=r.value[s.id])!=null&&w.highlight?"dark:text-primary":""]),style:L({background:(b=r.value[s.id])!=null&&b.highlight?"var(--el-color-primary-light-7)":"transparent"})},[t(l,{icon:k.type===1?"office-building":k.type===2?"location-company":"dept"},null,8,["icon"]),p(" "+P(s.label),1)],6)]}),_:1},8,["data"])])}}});const le=K(ee,[["__scopeId","data-v-a4e19cee"]]);export{le as default};