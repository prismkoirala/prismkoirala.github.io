import{Y as z,a$ as ee,b0 as ae,$ as D,ac as E,ad as G,af as M,b1 as te,aq as le,a0 as _,Q as se,p as a,a4 as ne,Z as k,a6 as ie,a7 as oe,a9 as re,b2 as ce,aa as de,ab as ue,b3 as ve,ag as me,ah as pe,ai as fe,ak as ge,al as he,b4 as be,L as _e,b5 as ke,ae as ye,a1 as N,am as Ce,an as Ve,R as m,A as c,a2 as Ie,G as I,d as O,o as r,b as A,w as n,E as F,z as $,x as y,aZ as w,c as C,F as T,a as Ae,q as xe,m as Be,S as Pe}from"./index.201a1d76.js";import{a as L,V as Se}from"./VBadge.b22f91fc.js";import{V as Ne}from"./VMenu.4be833f0.js";import{V as Fe,a as V}from"./VList.f3896ce6.js";import{a as $e}from"./index.61ef11e8.js";import{V as R}from"./VDivider.4d140746.js";import"./scopeId.53812c90.js";const q=Symbol.for("vuetify:v-chip-group");z({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ee},...ae({selectedClass:"v-chip--selected"}),...D(),...E(),...G({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:i}=s;const{themeClasses:o}=M(e),{isSelected:t,select:p,next:f,prev:g,selected:h}=te(e,q);return le({VChip:{color:_(e,"color"),filter:_(e,"filter"),variant:_(e,"variant")}}),se(()=>{var d;return a(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value]},{default:()=>[(d=i.default)==null?void 0:d.call(i,{isSelected:t,select:p,next:f,prev:g,selected:h.value})]})}),{}}});const we=z({name:"VChip",directives:{Ripple:ne},props:{activeClass:String,appendAvatar:String,appendIcon:k,closable:Boolean,closeIcon:{type:k,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:k,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...ie(),...oe(),...re(),...ce(),...de(),...ue(),...ve(),...D({tag:"span"}),...E(),...G({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0},setup(e,s){let{attrs:i,emit:o,slots:t}=s;const{borderClasses:p}=me(e),{colorClasses:f,colorStyles:g,variantClasses:h}=pe(e),{densityClasses:d}=fe(e),{elevationClasses:Y}=ge(e),{roundedClasses:j}=he(e),{sizeClasses:Z}=be(e),{themeClasses:H}=M(e),x=_e(e,"modelValue"),l=ke(e,q,!1),b=ye(e,i);function Q(u){x.value=!1,o("click:close",u)}return()=>{var u;const U=b.isLink.value?"a":e.tag,W=!!(t.append||e.appendIcon||e.appendAvatar),X=!!(t.close||e.closable),B=!!(t.filter||e.filter)&&l,J=!!(t.prepend||e.prependIcon||e.prependAvatar),P=!l||l.isSelected.value,v=!e.disabled&&(!!l||b.isClickable.value||e.link),K=e.link?e.link:l==null?void 0:l.toggle;return x.value&&N(a(U,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":v,"v-chip--filter":B,"v-chip--pill":e.pill},H.value,p.value,P?f.value:void 0,d.value,Y.value,j.value,Z.value,h.value,l==null?void 0:l.selectedClass.value],style:[P?g.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:b.href.value,onClick:v&&K},{default:()=>{var S;return[Ve(v,"v-chip"),B&&a(m,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[a($e,null,{default:()=>[N(a("div",{class:"v-chip__filter"},[t.filter?t.filter():a(c,null,null)]),[[Ie,l.isSelected.value]])]})]}),J&&a(m,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[t.prepend?a("div",{class:"v-chip__prepend"},[t.prepend()]):e.prependAvatar?a(I,{start:!0},null):e.prependIcon?a(c,{start:!0},null):void 0]}),(S=(u=t.default)==null?void 0:u.call(t,{isSelected:l==null?void 0:l.isSelected.value,selectedClass:l==null?void 0:l.selectedClass.value,select:l==null?void 0:l.select,toggle:l==null?void 0:l.toggle,value:l==null?void 0:l.value.value,disabled:e.disabled}))!=null?S:e.text,W&&a(m,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[t.append?a("div",{class:"v-chip__append"},[t.append()]):e.appendAvatar?a(I,{end:!0},null):e.appendIcon?a(c,{end:!0},null):void 0]}),X&&a(m,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[a("div",{class:"v-chip__close",onClick:Q},[t.close?t.close():a(c,null,null)])]})]}}),[[Ce("ripple"),v&&e.ripple,null]])}}}),Te=e=>e?e.split(" ").map(i=>i.charAt(0).toUpperCase()).join(""):"",Le={key:0},Re={class:"whitespace-no-wrap text-medium-emphasis"},ze=O({__name:"Notifications",props:{notifications:null,badgeProps:{default:void 0},location:{default:"bottom end"}},emits:["click:readAllNotifications"],setup(e){const s=e;return(i,o)=>(r(),A(L,Pe({"model-value":!!s.badgeProps},s.badgeProps),{default:n(()=>[a(F,{icon:"",variant:"text",color:"default",size:"small"},{default:n(()=>[a(L,{"model-value":!!s.notifications.length,color:"error",content:"4"},{default:n(()=>[a(c,{icon:"tabler-bell",size:"24"})]),_:1},8,["model-value"]),a(Ne,{activator:"parent",width:"380px",location:s.location,offset:"14px"},{default:n(()=>[a(Fe,{class:"py-0"},{default:n(()=>[a(V,{title:"Notifications",class:"notification-section",height:"48px"},{append:n(()=>[s.notifications.length?(r(),A(we,{key:0,color:"primary",size:"small"},{default:n(()=>[$(y(s.notifications.length)+" New ",1)]),_:1})):w("",!0)]),_:1}),a(R),(r(!0),C(T,null,Ae(s.notifications,t=>(r(),C(T,{key:t.title},[a(V,{title:t.title,subtitle:t.subtitle,link:"",lines:"one","min-height":"66px"},{prepend:n(()=>[a(Se,{start:""},{default:n(()=>[a(I,{color:t.color||"primary",image:t.img||void 0,icon:t.icon||void 0,size:"40",variant:"tonal"},{default:n(()=>[t.text?(r(),C("span",Le,y(xe(Te)(t.text)),1)):w("",!0)]),_:2},1032,["color","image","icon"])]),_:2},1024)]),append:n(()=>[Be("small",Re,y(t.time),1)]),_:2},1032,["title","subtitle"]),a(R)],64))),128)),a(V,{class:"notification-section"},{default:n(()=>[a(F,{block:"",onClick:o[0]||(o[0]=t=>i.$emit("click:readAllNotifications"))},{default:n(()=>[$(" READ ALL NOTIFICATIONS ")]),_:1})]),_:1})]),_:1})]),_:1},8,["location"])]),_:1})]),_:1},16,["model-value"]))}});const De="/assets/avatar-3.47317f35.png",Ee="/assets/avatar-4.b0163f21.png",Ge="/assets/avatar-5.d340221a.png",Me="/assets/paypal.01b645d1.svg",Ue=O({__name:"NavBarNotifications",setup(e){const s=[{img:Ee,title:"Congratulation Flora! \u{1F389}",subtitle:"Won the monthly best seller badge",time:"Today"},{text:"Tom Holland",title:"New user registered.",subtitle:"5 hours ago",time:"Yesterday"},{img:Ge,title:"New message received \u{1F44B}\u{1F3FB}",subtitle:"You have 10 unread messages",time:"11 Aug"},{img:Me,title:"Paypal",subtitle:"Received Payment",time:"25 May",color:"error"},{img:De,title:"Received Order \u{1F4E6}",subtitle:"New order received from john",time:"19 Mar"}];return(i,o)=>(r(),A(ze,{notifications:s}))}});export{Ue as default};
