import{d as z,a4 as D,r as I,i as F,b as s,c as R,k as T,f as t,w as n,h as i,z as _,u as p,g as f,_ as N}from"./index-aae7791f.js";import{u as g}from"./hooks-580d736a.js";const V={class:"config"},E={class:"text-black dark:text-white"},S={class:"p-2"},B={class:"absolute left-3 flex items-center"},$=z({__name:"config",props:{drawer:{type:Boolean,default:!1},drawTitle:{default:""},direction:{default:"rtl"}},emits:["handleClose"],setup(d,{emit:b}){const{t:x}=D(),r=I({}),e=F({tableData:[{name:"\u7981\u7528",dataval:"0"},{name:"\u542F\u7528",dataval:"1"}],isAllChecked:!1,isIndeterminate:!1,selectRecords:[],tablePage:{total:0,currentPage:1,pageSize:10}});function C(){e.isAllChecked=!1,e.isIndeterminate=!1,b("handleClose")}function J(o){}function U(o){}const h=()=>{setTimeout(()=>{},1e3);const o=r.value;o.setAllCheckboxRow(e.isAllChecked),e.selectRecords=o.getCheckboxRecords()},m=({records:o})=>{const a=r.value;e.isAllChecked=a.isAllCheckboxChecked(),e.isIndeterminate=a.isAllCheckboxIndeterminate(),e.selectRecords=o};return(o,a)=>{const k=s("el-divider"),c=s("vxe-table-column"),u=s("el-button"),v=s("vxe-table"),y=s("vxe-checkbox"),P=s("vxe-pager"),w=s("el-drawer");return R(),T("div",V,[t(w,{"model-value":d.drawer,direction:d.direction,"before-close":C,"destroy-on-close":"",size:"680px"},{header:n(()=>[i("span",E,_(d.drawTitle),1)]),default:n(()=>[t(k),i("div",S,[t(v,{ref_key:"xTable",ref:r,border:"",data:e.tableData,onCheckboxChange:m,onCheckboxAll:m},{default:n(()=>[t(c,{type:"checkbox",width:"60"}),t(c,{field:"name",title:"\u540D\u79F0"}),t(c,{field:"dataval",title:"\u6570\u636E\u503C"}),t(c,{title:"\u64CD\u4F5C",fixed:"right"},{default:n(({row:l})=>[t(u,{link:"",type:"primary",icon:p(g)("edits"),onClick:A=>void 0},{default:n(()=>[f(" \u7F16\u8F91 ")]),_:2},1032,["icon","onClick"]),t(u,{link:"",type:"primary",icon:p(g)("delete"),onClick:A=>void 0},{default:n(()=>[f(" \u5220\u9664 ")]),_:2},1032,["icon","onClick"])]),_:1})]),_:1},8,["data"]),t(P,{perfect:"","current-page":e.tablePage.currentPage,"onUpdate:current-page":a[1]||(a[1]=l=>e.tablePage.currentPage=l),"page-size":e.tablePage.pageSize,"onUpdate:page-size":a[2]||(a[2]=l=>e.tablePage.pageSize=l),total:e.tablePage.total,layouts:["PrevJump","PrevPage","Number","NextPage","NextJump","Sizes","FullJump","Total"]},{left:n(()=>[i("span",B,[t(y,{modelValue:e.isAllChecked,"onUpdate:modelValue":a[0]||(a[0]=l=>e.isAllChecked=l),indeterminate:e.isIndeterminate,onChange:h},null,8,["modelValue","indeterminate"]),i("p",null,"\u5DF2\u9009\u4E2D"+_(e.selectRecords.length)+"\u6761",1),t(u,{link:"",type:"danger",class:"ml-1"},{default:n(()=>[f(_(p(x)("buttons.hsdelete")),1)]),_:1})])]),_:1},8,["current-page","page-size","total"])])]),_:1},8,["model-value","direction"])])}}});const G=N($,[["__scopeId","data-v-e895af0c"]]);export{G as default};
