const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DIbk9vDO.js","./CV-PMusy.js","./entry.DO5HXhgt.css","./TM47lf2S.js","./Bqf_PMe1.js","./MazBtn.DFN6YJBR.css","./BzhzodH3.js","./MazCheckbox.2xvyNNo8.css","./xnHhoEvS.js","./MazInput.DF3oLrKh.css","./CXphX6SY.js","./MazLoadingBar.BrZSeUTe.css","./BPGSRnrD.js","./OunyUC6q.js","./BP0O8k21.js","./9WjrTpbw.js","./MazSelect.C94zcw4Q.css","./_LtD2jQT.js","./CMAMszsf.js","./DB_Cvz92.js","./Dowpny5V.js","./MazAnimatedElement.BcyH_d_g.css","./B7d8sKnN.js","./D7FzIyfw.js","./xxFNYzS6.js","./BkIOjOb5.js","./MazCardSpotlight.C4TP0KJ5.css","./jxJDj6pf.js","./B_9MtTwc.js","./CYhIZ21u.js","./Cpj98o6Y.js","./prism-normalize-whitespace.fcu910Ie.css","./MazAccordion.nnvH5ZD6.css","./BN3uMaFd.js","./B0l47e9N.js","./MazSpinner.B9GPzNo6.css","./fullscreen-img.directive.iBJS4ZIO.css","./MazTableTitle.Wnk-8CLL.css","./Dcv9lJpI.js","./MazIcon.DCwuuObN.css"])))=>i.map(i=>d[i]);
import{m as ht,f as ae,g as re,n as D,a0 as tn,a1 as nn,a2 as Te,h as V,a3 as qe,a4 as he,a5 as Fe,r as H,a6 as Ie,y as M,o as d,w as o,b as l,i as r,R as be,s as O,a7 as ln,K as ye,B as te,a8 as on,c as k,C as ne,F as G,I as Ge,a9 as It,W as $t,aa as sn,ab as vt,ac as Se,X as ce,A as Re,p as R,ad as an,ae as rn,af as un,ag as _e,z as ze,ah as yt,v as ct,x as dn,M as Ye,ai as Pt,O as zt,aj as mn,P as Ce,d as t,q as j,S as Xe,a as i,j as X,t as U,e as At,ak as pn,l as Ue,al as fn,T as gn,k as Ke,am as vn,an as yn,ao as cn,ap as bn,D as Ae,E as bt,aq as Oe,Q as Bt,_ as Je,ar as Qe,V as Lt,as as je,G as kn,at as Dt}from"./CV-PMusy.js";import{_ as ke}from"./DB_Cvz92.js";import{M as xn}from"./Dowpny5V.js";import{u as Ze,a as wn,b as Sn,_ as Tn,c as Cn,d as hn,e as In}from"./B7d8sKnN.js";import{M as se}from"./BkIOjOb5.js";import{u as $n}from"./jxJDj6pf.js";import{_ as L,M as Be}from"./B_9MtTwc.js";import{_ as K,M as kt,d as xt}from"./BN3uMaFd.js";import{u as Mt,a as Pn}from"./D7FzIyfw.js";import{M as zn}from"./OunyUC6q.js";import{u as An}from"./9WjrTpbw.js";import{u as Vt}from"./xxFNYzS6.js";import{u as Et}from"./CMAMszsf.js";import"./CYhIZ21u.js";const Bn=ht(ae(()=>re(()=>import("./DIbk9vDO.js"),__vite__mapDeps([0,1,2]),import.meta.url))),wt=ht(ae(()=>re(()=>import("./TM47lf2S.js"),__vite__mapDeps([3,1,2]),import.meta.url)));function Ln(a){return D(()=>{var s;return tn(a)?!!((s=nn(a))!=null&&s.closest("form")):!0})}const Dn="rovingFocusGroup.onEntryFocus",Mn={bubbles:!1,cancelable:!0},_t={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Vn(a,s){return s!=="rtl"?a:a==="ArrowLeft"?"ArrowRight":a==="ArrowRight"?"ArrowLeft":a}function En(a,s,e){const n=Vn(a.key,e);if(!(s==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(s==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return _t[n]}function Ft(a,s=!1){const e=Te();for(const n of a)if(n===e||(n.focus({preventScroll:s}),Te()!==e))return}function _n(a,s){return a.map((e,n)=>a[(s+n)%a.length])}const[Fn,Rn]=qe("RovingFocusGroup"),Qn=V({__name:"RovingFocusGroup",props:{orientation:{default:void 0},dir:{},loop:{type:Boolean,default:!1},currentTabStopId:{},defaultCurrentTabStopId:{},preventScrollOnEntryFocus:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["entryFocus","update:currentTabStopId"],setup(a,{expose:s,emit:e}){const n=a,m=e,{loop:u,orientation:p,dir:f}=he(n),b=Ze(f),v=Fe(n,"currentTabStopId",m,{defaultValue:n.defaultCurrentTabStopId,passive:n.currentTabStopId===void 0}),C=H(!1),x=H(!1),h=H(0),{getItems:B,CollectionSlot:z}=Ie({isProvider:!0});function T(w){const A=!x.value;if(w.currentTarget&&w.target===w.currentTarget&&A&&!C.value){const S=new CustomEvent(Dn,Mn);if(w.currentTarget.dispatchEvent(S),m("entryFocus",S),!S.defaultPrevented){const I=B().map(E=>E.ref).filter(E=>E.dataset.disabled!==""),g=I.find(E=>E.getAttribute("data-active")===""),P=I.find(E=>E.id===v.value),y=[g,P,...I].filter(Boolean);Ft(y,n.preventScrollOnEntryFocus)}}x.value=!1}function c(){setTimeout(()=>{x.value=!1},1)}return s({getItems:B}),Rn({loop:u,dir:b,orientation:p,currentTabStopId:v,onItemFocus:w=>{v.value=w},onItemShiftTab:()=>{C.value=!0},onFocusableItemAdd:()=>{h.value++},onFocusableItemRemove:()=>{h.value--}}),(w,A)=>(d(),M(r(z),null,{default:o(()=>[l(r(be),{tabindex:C.value||h.value===0?-1:0,"data-orientation":r(p),as:w.as,"as-child":w.asChild,dir:r(b),style:{outline:"none"},onMousedown:A[0]||(A[0]=S=>x.value=!0),onMouseup:c,onFocus:T,onBlur:A[1]||(A[1]=S=>C.value=!1)},{default:o(()=>[O(w.$slots,"default")]),_:3},8,["tabindex","data-orientation","as","as-child","dir"])]),_:3}))}}),St=V({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{},value:{},checked:{type:Boolean,default:void 0},required:{type:Boolean},disabled:{type:Boolean},feature:{default:"fully-hidden"}},setup(a){const s=a,{primitiveElement:e,currentElement:n}=ln(),m=D(()=>s.checked??s.value);return ye(m,(u,p)=>{if(!n.value)return;const f=n.value,b=window.HTMLInputElement.prototype,C=Object.getOwnPropertyDescriptor(b,"value").set;if(C&&u!==p){const x=new Event("input",{bubbles:!0}),h=new Event("change",{bubbles:!0});C.call(f,u),f.dispatchEvent(x),f.dispatchEvent(h)}}),(u,p)=>(d(),M(on,te({ref_key:"primitiveElement",ref:e},{...s,...u.$attrs},{as:"input"}),null,16))}}),qn=V({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{},value:{},checked:{type:Boolean,default:void 0},required:{type:Boolean},disabled:{type:Boolean},feature:{default:"fully-hidden"}},setup(a){const s=a,e=D(()=>typeof s.value=="object"&&Array.isArray(s.value)&&s.value.length===0&&s.required),n=D(()=>typeof s.value=="string"||typeof s.value=="number"||typeof s.value=="boolean"?[{name:s.name,value:s.value}]:typeof s.value=="object"&&Array.isArray(s.value)?s.value.flatMap((m,u)=>typeof m=="object"?Object.entries(m).map(([p,f])=>({name:`[${s.name}][${u}][${p}]`,value:f})):{name:`[${s.name}][${u}]`,value:m}):s.value!==null&&typeof s.value=="object"&&!Array.isArray(s.value)?Object.entries(s.value).map(([m,u])=>({name:`[${s.name}][${m}]`,value:u})):[]);return(m,u)=>e.value?(d(),M(St,te({key:m.name},{...s,...m.$attrs},{name:m.name,value:m.value}),null,16,["name","value"])):(d(!0),k(G,{key:1},ne(n.value,p=>(d(),M(St,te({key:p.name,ref_for:!0},{...s,...m.$attrs},{name:p.name,value:p.value}),null,16,["name","value"]))),128))}}),Un=V({__name:"RovingFocusItem",props:{tabStopId:{},focusable:{type:Boolean,default:!0},active:{type:Boolean},allowShiftKey:{type:Boolean},asChild:{type:Boolean},as:{default:"span"}},setup(a){const s=a,e=Fn(),n=wn(),m=D(()=>s.tabStopId||n),u=D(()=>e.currentTabStopId.value===m.value),{getItems:p,CollectionItem:f}=Ie();Ge(()=>{s.focusable&&e.onFocusableItemAdd()}),It(()=>{s.focusable&&e.onFocusableItemRemove()});function b(v){if(v.key==="Tab"&&v.shiftKey){e.onItemShiftTab();return}if(v.target!==v.currentTarget)return;const C=En(v,e.orientation.value,e.dir.value);if(C!==void 0){if(v.metaKey||v.ctrlKey||v.altKey||!s.allowShiftKey&&v.shiftKey)return;v.preventDefault();let x=[...p().map(h=>h.ref).filter(h=>h.dataset.disabled!=="")];if(C==="last")x.reverse();else if(C==="prev"||C==="next"){C==="prev"&&x.reverse();const h=x.indexOf(v.currentTarget);x=e.loop.value?_n(x,h+1):x.slice(h+1)}$t(()=>Ft(x))}}return(v,C)=>(d(),M(r(f),null,{default:o(()=>[l(r(be),{tabindex:u.value?0:-1,"data-orientation":r(e).orientation.value,"data-active":v.active?"":void 0,"data-disabled":v.focusable?void 0:"",as:v.as,"as-child":v.asChild,onMousedown:C[0]||(C[0]=x=>{v.focusable?r(e).onItemFocus(m.value):x.preventDefault()}),onFocus:C[1]||(C[1]=x=>r(e).onItemFocus(m.value)),onKeydown:b},{default:o(()=>[O(v.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}});function Kn(a){const s=sn("",1e3);return{search:s,handleTypeaheadSearch:(m,u)=>{s.value=s.value+m;{const p=Te(),f=u.map(h=>{var B,z;return{...h,textValue:((B=h.value)==null?void 0:B.textValue)??((z=h.ref.textContent)==null?void 0:z.trim())??""}}),b=f.find(h=>h.ref===p),v=f.map(h=>h.textValue),C=On(v,s.value,b==null?void 0:b.textValue),x=f.find(h=>h.textValue===C);return x&&x.ref.focus(),x==null?void 0:x.ref}},resetTypeahead:()=>{s.value=""}}}function Wn(a,s){return a.map((e,n)=>a[(s+n)%a.length])}function On(a,s,e){const m=s.length>1&&Array.from(s).every(v=>v===s[0])?s[0]:s,u=e?a.indexOf(e):-1;let p=Wn(a,Math.max(u,0));m.length===1&&(p=p.filter(v=>v!==e));const b=p.find(v=>v.toLowerCase().startsWith(m.toLowerCase()));return b!==e?b:void 0}function Ne(a,s,e){const n=a.findIndex(f=>vt(f,s)),m=a.findIndex(f=>vt(f,e));if(n===-1||m===-1)return[];const[u,p]=[n,m].sort((f,b)=>f-b);return a.slice(u,p+1)}function Rt(a,s=Number.NEGATIVE_INFINITY,e=Number.POSITIVE_INFINITY){return Math.min(e,Math.max(s,a))}function Nn(a=[],s,e){const n=[...a];return n[e]=s,n.sort((m,u)=>m-u)}function Qt(a,s,e){const u=100/(e-s)*(a-s);return Rt(u,0,100)}function Hn(a,s){return s>2?`Value ${a+1} of ${s}`:s===2?["Minimum","Maximum"][a]:void 0}function jn(a,s){if(a.length===1)return 0;const e=a.map(m=>Math.abs(m-s)),n=Math.min(...e);return e.indexOf(n)}function Gn(a,s,e){const n=a/2,u=et([0,50],[0,n]);return(n-u(s)*e)*e}function Yn(a){return a.slice(0,-1).map((s,e)=>a[e+1]-s)}function Xn(a,s){if(s>0){const e=Yn(a);return Math.min(...e)>=s}return!0}function et(a,s){return e=>{if(a[0]===a[1]||s[0]===s[1])return s[0];const n=(s[1]-s[0])/(a[1]-a[0]);return s[0]+n*(e-a[0])}}function Jn(a){return(String(a).split(".")[1]||"").length}function Zn(a,s){const e=10**s;return Math.round(a*e)/e}const qt=["PageUp","PageDown"],Ut=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Kt={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},[Wt,Ot]=qe(["SliderVertical","SliderHorizontal"]),Nt=V({__name:"SliderImpl",props:{asChild:{type:Boolean},as:{default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(a,{emit:s}){const e=a,n=s,m=$e();return(u,p)=>(d(),M(r(be),te({"data-slider-impl":""},e,{onKeydown:p[0]||(p[0]=f=>{f.key==="Home"?(n("homeKeyDown",f),f.preventDefault()):f.key==="End"?(n("endKeyDown",f),f.preventDefault()):r(qt).concat(r(Ut)).includes(f.key)&&(n("stepKeyDown",f),f.preventDefault())}),onPointerdown:p[1]||(p[1]=f=>{const b=f.target;b.setPointerCapture(f.pointerId),f.preventDefault(),r(m).thumbElements.value.includes(b)?b.focus():n("slideStart",f)}),onPointermove:p[2]||(p[2]=f=>{f.target.hasPointerCapture(f.pointerId)&&n("slideMove",f)}),onPointerup:p[3]||(p[3]=f=>{const b=f.target;b.hasPointerCapture(f.pointerId)&&(b.releasePointerCapture(f.pointerId),n("slideEnd",f))})}),{default:o(()=>[O(u.$slots,"default")]),_:3},16))}}),el=V({__name:"SliderHorizontal",props:{dir:{},min:{},max:{},inverted:{type:Boolean}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(a,{emit:s}){const e=a,n=s,{max:m,min:u,dir:p,inverted:f}=he(e),{forwardRef:b,currentElement:v}=Se(),C=$e(),x=H(),h=H(),B=D(()=>(p==null?void 0:p.value)==="ltr"&&!f.value||(p==null?void 0:p.value)!=="ltr"&&f.value);function z(T,c){const w=h.value||v.value.getBoundingClientRect(),A=[...C.thumbElements.value][C.valueIndexToChangeRef.value],S=C.thumbAlignment.value==="contain"?A.clientWidth:0;!x.value&&!c&&C.thumbAlignment.value==="contain"&&(x.value=T.clientX-A.getBoundingClientRect().left);const I=[0,w.width-S],g=B.value?[u.value,m.value]:[m.value,u.value],P=et(I,g);h.value=w;const y=c?T.clientX-w.left-S/2:T.clientX-w.left-(x.value??0);return P(y)}return Ot({startEdge:B.value?"left":"right",endEdge:B.value?"right":"left",direction:B.value?1:-1,size:"width"}),(T,c)=>(d(),M(Nt,{ref:r(b),dir:r(p),"data-orientation":"horizontal",style:ce({"--reka-slider-thumb-transform":!B.value&&r(C).thumbAlignment.value==="overflow"?"translateX(50%)":"translateX(-50%)"}),onSlideStart:c[0]||(c[0]=w=>{const A=z(w,!0);n("slideStart",A)}),onSlideMove:c[1]||(c[1]=w=>{const A=z(w);n("slideMove",A)}),onSlideEnd:c[2]||(c[2]=()=>{h.value=void 0,x.value=void 0,n("slideEnd")}),onStepKeyDown:c[3]||(c[3]=w=>{const A=B.value?"from-left":"from-right",S=r(Kt)[A].includes(w.key);n("stepKeyDown",w,S?-1:1)}),onEndKeyDown:c[4]||(c[4]=w=>n("endKeyDown",w)),onHomeKeyDown:c[5]||(c[5]=w=>n("homeKeyDown",w))},{default:o(()=>[O(T.$slots,"default")]),_:3},8,["dir","style"]))}}),tl=V({__name:"SliderVertical",props:{min:{},max:{},inverted:{type:Boolean}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(a,{emit:s}){const e=a,n=s,{max:m,min:u,inverted:p}=he(e),f=$e(),{forwardRef:b,currentElement:v}=Se(),C=H(),x=H(),h=D(()=>!p.value);function B(z,T){const c=x.value||v.value.getBoundingClientRect(),w=[...f.thumbElements.value][f.valueIndexToChangeRef.value],A=f.thumbAlignment.value==="contain"?w.clientHeight:0;!C.value&&!T&&f.thumbAlignment.value==="contain"&&(C.value=z.clientY-w.getBoundingClientRect().top);const S=[0,c.height-A],I=h.value?[m.value,u.value]:[u.value,m.value],g=et(S,I),P=T?z.clientY-c.top-A/2:z.clientY-c.top-(C.value??0);return x.value=c,g(P)}return Ot({startEdge:h.value?"bottom":"top",endEdge:h.value?"top":"bottom",size:"height",direction:h.value?1:-1}),(z,T)=>(d(),M(Nt,{ref:r(b),"data-orientation":"vertical",style:ce({"--reka-slider-thumb-transform":!h.value&&r(f).thumbAlignment.value==="overflow"?"translateY(-50%)":"translateY(50%)"}),onSlideStart:T[0]||(T[0]=c=>{const w=B(c,!0);n("slideStart",w)}),onSlideMove:T[1]||(T[1]=c=>{const w=B(c);n("slideMove",w)}),onSlideEnd:T[2]||(T[2]=()=>{x.value=void 0,C.value=void 0,n("slideEnd")}),onStepKeyDown:T[3]||(T[3]=c=>{const w=h.value?"from-bottom":"from-top",A=r(Kt)[w].includes(c.key);n("stepKeyDown",c,A?-1:1)}),onEndKeyDown:T[4]||(T[4]=c=>n("endKeyDown",c)),onHomeKeyDown:T[5]||(T[5]=c=>n("homeKeyDown",c))},{default:o(()=>[O(z.$slots,"default")]),_:3},8,["style"]))}}),[$e,nl]=qe("SliderRoot"),ll=V({inheritAttrs:!1,__name:"SliderRoot",props:{defaultValue:{default:()=>[0]},modelValue:{},disabled:{type:Boolean,default:!1},orientation:{default:"horizontal"},dir:{},inverted:{type:Boolean,default:!1},min:{default:0},max:{default:100},step:{default:1},minStepsBetweenThumbs:{default:0},thumbAlignment:{default:"contain"},asChild:{type:Boolean},as:{default:"span"},name:{},required:{type:Boolean}},emits:["update:modelValue","valueCommit"],setup(a,{emit:s}){const e=a,n=s,{min:m,max:u,step:p,minStepsBetweenThumbs:f,orientation:b,disabled:v,thumbAlignment:C,dir:x}=he(e),h=Ze(x),{forwardRef:B,currentElement:z}=Se(),T=Ln(z),{CollectionSlot:c}=Ie({isProvider:!0}),w=Fe(e,"modelValue",n,{defaultValue:e.defaultValue,passive:e.modelValue===void 0}),A=D(()=>Array.isArray(w.value)?[...w.value]:[]),S=H(0),I=H(A.value);function g(F){const Q=jn(A.value,F);E(F,Q)}function P(F){E(F,S.value)}function y(){const F=I.value[S.value];A.value[S.value]!==F&&n("valueCommit",an(A.value))}function E(F,Q,{commit:Y}={commit:!1}){var me;const le=Jn(p.value),ue=Zn(Math.round((F-m.value)/p.value)*p.value+m.value,le),de=Rt(ue,m.value,u.value),oe=Nn(A.value,de,Q);if(Xn(oe,f.value*p.value)){S.value=oe.indexOf(de);const ie=String(oe)!==String(w.value);ie&&Y&&n("valueCommit",oe),ie&&((me=q.value[S.value])==null||me.focus(),w.value=oe)}}const q=H([]);return nl({modelValue:w,currentModelValue:A,valueIndexToChangeRef:S,thumbElements:q,orientation:b,min:m,max:u,disabled:v,thumbAlignment:C}),(F,Q)=>(d(),M(r(c),null,{default:o(()=>[(d(),M(Re(r(b)==="horizontal"?el:tl),te(F.$attrs,{ref:r(B),"as-child":F.asChild,as:F.as,min:r(m),max:r(u),dir:r(h),inverted:F.inverted,"aria-disabled":r(v),"data-disabled":r(v)?"":void 0,onPointerdown:Q[0]||(Q[0]=()=>{r(v)||(I.value=A.value)}),onSlideStart:Q[1]||(Q[1]=Y=>!r(v)&&g(Y)),onSlideMove:Q[2]||(Q[2]=Y=>!r(v)&&P(Y)),onSlideEnd:Q[3]||(Q[3]=Y=>!r(v)&&y()),onHomeKeyDown:Q[4]||(Q[4]=Y=>!r(v)&&E(r(m),0,{commit:!0})),onEndKeyDown:Q[5]||(Q[5]=Y=>!r(v)&&E(r(u),A.value.length-1,{commit:!0})),onStepKeyDown:Q[6]||(Q[6]=(Y,le)=>{if(!r(v)){const oe=r(qt).includes(Y.key)||Y.shiftKey&&r(Ut).includes(Y.key)?10:1,me=S.value,ie=A.value[me],ee=r(p)*oe*le;E(ie+ee,me,{commit:!0})}})}),{default:o(()=>[O(F.$slots,"default",{modelValue:r(w)}),r(T)&&F.name?(d(),M(r(qn),{key:0,type:"number",value:r(w),name:F.name,required:F.required,disabled:r(v),step:r(p)},null,8,["value","name","required","disabled","step"])):R("",!0)]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}))}}),ol=V({__name:"SliderRange",props:{asChild:{type:Boolean},as:{default:"span"}},setup(a){const s=$e(),e=Wt();Se();const n=D(()=>s.currentModelValue.value.map(p=>Qt(p,s.min.value,s.max.value))),m=D(()=>s.currentModelValue.value.length>1?Math.min(...n.value):0),u=D(()=>100-Math.max(...n.value,0));return(p,f)=>(d(),M(r(be),{"data-disabled":r(s).disabled.value?"":void 0,"data-orientation":r(s).orientation.value,"as-child":p.asChild,as:p.as,style:ce({[r(e).startEdge]:`${m.value}%`,[r(e).endEdge]:`${u.value}%`})},{default:o(()=>[O(p.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}}),il=V({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{},asChild:{type:Boolean},as:{}},setup(a){const s=a,e=$e(),n=Wt(),{forwardRef:m,currentElement:u}=Se(),{CollectionItem:p}=Ie(),f=D(()=>{var z,T;return(T=(z=e.modelValue)==null?void 0:z.value)==null?void 0:T[s.index]}),b=D(()=>f.value===void 0?0:Qt(f.value,e.min.value??0,e.max.value??100)),v=D(()=>{var z,T;return Hn(s.index,((T=(z=e.modelValue)==null?void 0:z.value)==null?void 0:T.length)??0)}),C=Sn(u),x=D(()=>C[n.size].value),h=D(()=>e.thumbAlignment.value==="overflow"||!x.value?0:Gn(x.value,b.value,n.direction)),B=rn();return Ge(()=>{e.thumbElements.value.push(u.value)}),It(()=>{const z=e.thumbElements.value.findIndex(T=>T===u.value)??-1;e.thumbElements.value.splice(z,1)}),(z,T)=>(d(),M(r(p),null,{default:o(()=>[l(r(be),te(z.$attrs,{ref:r(m),role:"slider",tabindex:r(e).disabled.value?void 0:0,"aria-label":z.$attrs["aria-label"]||v.value,"data-disabled":r(e).disabled.value?"":void 0,"data-orientation":r(e).orientation.value,"aria-valuenow":f.value,"aria-valuemin":r(e).min.value,"aria-valuemax":r(e).max.value,"aria-orientation":r(e).orientation.value,"as-child":z.asChild,as:z.as,style:{transform:"var(--reka-slider-thumb-transform)",position:"absolute",[r(n).startEdge]:`calc(${b.value}% + ${h.value}px)`,display:!r(B)&&f.value===void 0?"none":void 0},onFocus:T[0]||(T[0]=()=>{r(e).valueIndexToChangeRef.value=z.index})}),{default:o(()=>[O(z.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),Tt=V({__name:"SliderThumb",props:{asChild:{type:Boolean},as:{default:"span"}},setup(a){const s=a,{getItems:e}=Ie(),{forwardRef:n,currentElement:m}=Se(),u=D(()=>m.value?e(!0).findIndex(p=>p.ref===m.value):-1);return(p,f)=>(d(),M(il,te({ref:r(n)},s,{index:u.value}),{default:o(()=>[O(p.$slots,"default")]),_:3},16,["index"]))}}),sl=V({__name:"SliderTrack",props:{asChild:{type:Boolean},as:{default:"span"}},setup(a){const s=$e();return Se(),(e,n)=>(d(),M(r(be),{"as-child":e.asChild,as:e.as,"data-disabled":r(s).disabled.value?"":void 0,"data-orientation":r(s).orientation.value},{default:o(()=>[O(e.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}});function tt(a){return a.reduce((s,e)=>(s.push(e),e.children&&s.push(...tt(e.children)),s),[])}function al(a,s){const e=H(),n=(u,p)=>{if(s.multiple&&Array.isArray(a.value))if(s.selectionBehavior==="replace")a.value=[u],e.value=u;else{const f=a.value.findIndex(b=>p(b));f!==-1?a.value=a.value.filter((b,v)=>v!==f):a.value=[...a.value,u]}else s.selectionBehavior==="replace"?a.value={...u}:!Array.isArray(a.value)&&p(a.value)?a.value=void 0:a.value={...u};return a.value};function m(u,p,f,b){var h;if(!(e!=null&&e.value)||!s.multiple||!Array.isArray(a.value))return;const C=(h=f().filter(B=>B.ref.dataset.disabled!=="").find(B=>B.ref===p))==null?void 0:h.value;if(!C)return;let x=null;switch(u){case"prev":case"next":{x=Ne(b,e.value,C);break}case"first":{x=Ne(b,e.value,b==null?void 0:b[0]);break}case"last":{x=Ne(b,e.value,b==null?void 0:b[b.length-1]);break}}a.value=x}return{firstValue:e,onSelectItem:n,handleMultipleReplace:m}}const[rl,ul]=qe("TreeRoot"),dl=V({__name:"TreeRoot",props:{modelValue:{},defaultValue:{},items:{},expanded:{},defaultExpanded:{},getKey:{},getChildren:{type:Function,default:a=>a.children},selectionBehavior:{default:"toggle"},multiple:{type:Boolean},dir:{},disabled:{type:Boolean},propagateSelect:{type:Boolean},asChild:{type:Boolean},as:{default:"ul"}},emits:["update:modelValue","update:expanded"],setup(a,{emit:s}){const e=a,n=s,{items:m,multiple:u,disabled:p,propagateSelect:f,dir:b}=he(e),{handleTypeaheadSearch:v}=Kn(),C=Ze(b),x=H(),h=H(!1),B=un(),z=Fe(e,"modelValue",n,{defaultValue:e.defaultValue??(u.value?[]:void 0),passive:e.modelValue===void 0,deep:!0}),T=Fe(e,"expanded",n,{defaultValue:e.defaultExpanded??[],passive:e.expanded===void 0,deep:!0}),{onSelectItem:c,handleMultipleReplace:w}=al(z,e),A=D(()=>u.value&&Array.isArray(z.value)?z.value.map(y=>e.getKey(y)):[e.getKey(z.value??{})]);function S(y,E=1,q){return y.reduce((F,Q,Y)=>{const le=e.getKey(Q),ue=e.getChildren(Q),de=T.value.includes(le),oe={_id:le,value:Q,index:Y,level:E,parentItem:q,hasChildren:!!ue,bind:{value:Q,level:E,"aria-setsize":y.length,"aria-posinset":Y+1}};return F.push(oe),ue&&de&&F.push(...S(ue,E+1,Q)),F},[])}const I=D(()=>{const y=e.items;return T.value.map(E=>E),S(y??[])});function g(y){var E;if(h.value)B.trigger(y);else{const q=((E=x.value)==null?void 0:E.getItems())??[];v(y.key,q)}}function P(y){if(h.value)return;const E=_t[y.key];$t(()=>{var q;w(E,Te(),(q=x.value)==null?void 0:q.getItems,I.value.map(F=>F.value))})}return ul({modelValue:z,selectedKeys:A,onSelect:y=>{var F;const E=Q=>e.getKey(Q??{})===e.getKey(y),q=e.multiple&&Array.isArray(z.value)?((F=z.value)==null?void 0:F.findIndex(E))!==-1:void 0;if(c(y,E),e.propagateSelect&&e.multiple&&Array.isArray(z.value)){const Q=tt(e.getChildren(y)??[]);q?z.value=[...z.value].filter(Y=>!Q.some(le=>e.getKey(Y??{})===e.getKey(le))):z.value=[...z.value,...Q]}},expanded:T,onToggle(y){if(!(y?e.getChildren(y):void 0))return;const q=e.getKey(y)??y;T.value.includes(q)?T.value=T.value.filter(F=>F!==q):T.value.push(q)},getKey:e.getKey,getChildren:e.getChildren,items:m,expandedItems:I,disabled:p,multiple:u,dir:C,propagateSelect:f,isVirtual:h,virtualKeydownHook:B,handleMultipleReplace:w}),(y,E)=>(d(),M(r(Qn),{ref_key:"rovingFocusGroupRef",ref:x,"as-child":"",orientation:"vertical",dir:r(C)},{default:o(()=>[l(r(be),{role:"tree",as:y.as,"as-child":y.asChild,"aria-multiselectable":r(u)?!0:void 0,onKeydown:[g,_e(ze(P,["shift"]),["up","down"])]},{default:o(()=>[O(y.$slots,"default",{flattenItems:I.value,modelValue:r(z),expanded:r(T)})]),_:3},8,["as","as-child","aria-multiselectable","onKeydown"])]),_:3},8,["dir"]))}}),ml="tree.select",pl="tree.toggle",fl=V({inheritAttrs:!1,__name:"TreeItem",props:{value:{},level:{},asChild:{type:Boolean},as:{default:"li"}},emits:["select","toggle"],setup(a,{expose:s,emit:e}){const n=a,m=e,u=rl(),{getItems:p}=Ie(),f=D(()=>!!u.getChildren(n.value)),b=D(()=>{const w=u.getKey(n.value);return u.expanded.value.includes(w)}),v=D(()=>{const w=u.getKey(n.value);return u.selectedKeys.value.includes(w)}),C=D(()=>{if(u.propagateSelect.value&&v.value&&f.value&&Array.isArray(u.modelValue.value))return!tt(u.getChildren(n.value)||[]).every(A=>u.modelValue.value.find(S=>u.getKey(S)===u.getKey(A)))});function x(w){if(f.value)if(b.value){const A=p().map(y=>y.ref),S=Te(),I=A.indexOf(S),P=[...A].slice(I).find(y=>Number(y.getAttribute("data-indent"))===n.level+1);P&&P.focus()}else c(w)}function h(w){if(b.value)c(w);else{const A=p().map(y=>y.ref),S=Te(),I=A.indexOf(S),P=[...A].slice(0,I).reverse().find(y=>Number(y.getAttribute("data-indent"))===n.level-1);P&&P.focus()}}async function B(w){m("select",w),!(w!=null&&w.defaultPrevented)&&u.onSelect(n.value)}async function z(w){m("toggle",w),!(w!=null&&w.defaultPrevented)&&u.onToggle(n.value)}async function T(w){if(!w)return;const A={originalEvent:w,value:n.value,isExpanded:b.value,isSelected:v.value};yt(ml,B,A)}async function c(w){if(!w)return;const A={originalEvent:w,value:n.value,isExpanded:b.value,isSelected:v.value};yt(pl,z,A)}return s({isExpanded:b,isSelected:v,isIndeterminate:C,handleToggle:()=>u.onToggle(n.value),handleSelect:()=>u.onSelect(n.value)}),(w,A)=>(d(),M(r(Un),{"as-child":"",value:w.value,"allow-shift-key":""},{default:o(()=>[l(r(be),te(w.$attrs,{role:"treeitem",as:w.as,"as-child":w.asChild,"aria-selected":v.value,"aria-expanded":f.value?b.value:void 0,"aria-level":w.level,"data-indent":w.level,"data-selected":v.value?"":void 0,"data-expanded":b.value?"":void 0,onKeydown:[_e(ze(T,["self","prevent"]),["enter","space"]),A[0]||(A[0]=_e(ze(S=>r(u).dir.value==="ltr"?x(S):h(S),["prevent"]),["right"])),A[1]||(A[1]=_e(ze(S=>r(u).dir.value==="ltr"?h(S):x(S),["prevent"]),["left"]))],onClick:A[2]||(A[2]=ze(S=>{T(S),c(S)},["stop"]))}),{default:o(()=>[O(w.$slots,"default",{isExpanded:b.value,isSelected:v.value,isIndeterminate:C.value,handleSelect:()=>r(u).onSelect(w.value),handleToggle:()=>r(u).onToggle(w.value)})]),_:3},16,["as","as-child","aria-selected","aria-expanded","aria-level","data-indent","data-selected","data-expanded","onKeydown"])]),_:3},8,["value"]))}}),gl={slots:{root:"relative flex items-center select-none touch-none",track:"relative bg-accented overflow-hidden rounded-full grow",range:"absolute rounded-full",thumb:"rounded-full bg-default ring-2 focus-visible:outline-2 focus-visible:outline-offset-2"},variants:{color:{primary:{range:"bg-primary",thumb:"ring-primary focus-visible:outline-primary/50"},secondary:{range:"bg-secondary",thumb:"ring-secondary focus-visible:outline-secondary/50"},success:{range:"bg-success",thumb:"ring-success focus-visible:outline-success/50"},info:{range:"bg-info",thumb:"ring-info focus-visible:outline-info/50"},warning:{range:"bg-warning",thumb:"ring-warning focus-visible:outline-warning/50"},error:{range:"bg-error",thumb:"ring-error focus-visible:outline-error/50"},neutral:{range:"bg-inverted",thumb:"ring-inverted focus-visible:outline-inverted/50"}},size:{xs:{thumb:"size-3"},sm:{thumb:"size-3.5"},md:{thumb:"size-4"},lg:{thumb:"size-4.5"},xl:{thumb:"size-5"}},orientation:{horizontal:{root:"w-full",range:"h-full"},vertical:{root:"flex-col h-full",range:"w-full"}},disabled:{true:{root:"opacity-75 cursor-not-allowed"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{track:"h-[6px]"}},{orientation:"horizontal",size:"sm",class:{track:"h-[7px]"}},{orientation:"horizontal",size:"md",class:{track:"h-[8px]"}},{orientation:"horizontal",size:"lg",class:{track:"h-[9px]"}},{orientation:"horizontal",size:"xl",class:{track:"h-[10px]"}},{orientation:"vertical",size:"xs",class:{track:"w-[6px]"}},{orientation:"vertical",size:"sm",class:{track:"w-[7px]"}},{orientation:"vertical",size:"md",class:{track:"w-[8px]"}},{orientation:"vertical",size:"lg",class:{track:"w-[9px]"}},{orientation:"vertical",size:"xl",class:{track:"w-[10px]"}}],defaultVariants:{size:"md",color:"primary"}},vl={__name:"Slider",props:ct({as:{type:null,required:!1},size:{type:null,required:!1},color:{type:null,required:!1},orientation:{type:null,required:!1,default:"horizontal"},tooltip:{type:[Boolean,Object],required:!1},defaultValue:{type:[Number,Array],required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},name:{type:String,required:!1},disabled:{type:Boolean,required:!1},inverted:{type:Boolean,required:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},minStepsBetweenThumbs:{type:Number,required:!1}},{modelValue:{type:null},modelModifiers:{}}),emits:ct(["update:modelValue","change"],["update:modelValue"]),setup(a,{emit:s}){const e=a,n=s,m=dn(a,"modelValue"),u=Ye(),p=Pt(zt(e,"as","orientation","min","max","step","minStepsBetweenThumbs","inverted"),n),{id:f,emitFormChange:b,emitFormInput:v,size:C,color:x,name:h,disabled:B,ariaAttrs:z}=mn(e),T=D(()=>typeof e.defaultValue=="number"?[e.defaultValue]:e.defaultValue),c=D({get(){return typeof m.value=="number"?[m.value]:m.value??T.value},set(I){m.value=(I==null?void 0:I.length)!==1?I:I[0]}}),w=D(()=>{var I;return((I=c.value)==null?void 0:I.length)??1}),A=D(()=>{var I;return Ce({extend:Ce(gl),...((I=u.ui)==null?void 0:I.slider)||{}})({disabled:B.value,size:C.value,color:x.value,orientation:e.orientation})});function S(I){const g=new Event("change",{target:{value:I}});n("change",g),b()}return(I,g)=>{var P;return d(),M(r(ll),te({...r(p),...r(z)},{id:r(f),modelValue:c.value,"onUpdate:modelValue":[g[0]||(g[0]=y=>c.value=y),g[1]||(g[1]=y=>r(v)())],name:r(h),disabled:r(B),class:A.value.root({class:[(P=e.ui)==null?void 0:P.root,e.class]}),"default-value":T.value,onValueCommit:S}),{default:o(()=>{var y;return[l(r(sl),{class:j(A.value.track({class:(y=e.ui)==null?void 0:y.track}))},{default:o(()=>{var E;return[l(r(ol),{class:j(A.value.range({class:(E=e.ui)==null?void 0:E.range}))},null,8,["class"])]}),_:1},8,["class"]),g[2]||(g[2]=t()),(d(!0),k(G,null,ne(w.value,E=>{var q,F;return d(),k(G,{key:E},[a.tooltip?(d(),M(Tn,te({key:0,text:w.value>1?String((q=c.value)==null?void 0:q[E-1]):String(c.value),"disable-closing-trigger":"",ref_for:!0},typeof a.tooltip=="object"?a.tooltip:{}),{default:o(()=>{var Q;return[l(r(Tt),{class:j(A.value.thumb({class:(Q=e.ui)==null?void 0:Q.thumb}))},null,8,["class"])]}),_:2},1040,["text"])):(d(),M(r(Tt),{key:1,class:j(A.value.thumb({class:(F=e.ui)==null?void 0:F.thumb}))},null,8,["class"]))],64)}),128))]}),_:1,__:[2]},16,["id","modelValue","name","disabled","class","default-value"])}}},yl=Xe("docsStore",{state:()=>({toc:[{label:"Installation",icon:"i-lucide-loader",section:"installation"},{label:"How to Use",icon:"i-lucide-pointer",section:"general-usage",children:[{label:"General Usage",icon:"i-lucide-mouse-pointer",section:"general-usage"},{label:"Tray task",icon:"i-lucide-panel-bottom",section:"tray-task"},{label:"Plugins",icon:"i-lucide-blocks",section:"plugins"},{label:"Commands",icon:"i-lucide-zap",section:"commands"}]},{label:"Settings",icon:"i-lucide-sliders-vertical",section:"settings"},{label:"Building the app",icon:"i-lucide-drill",section:"build-app"},{label:"Under the Hood",icon:"i-lucide-folder-open-dot",section:"under-hood"},{label:"API Documentation",icon:"i-lucide-code",section:"api-documentation"},{label:"Creating a plugin",icon:"i-lucide-toy-brick",section:"creating-plugin"},{label:"FAQ by Developers",icon:"i-lucide-circle-help",section:"faq"}],links:[[{label:"License",icon:"i-lucide-scale",to:"/license"},{label:"Security Policy",icon:"i-lucide-shield-check",to:"/security"}],[{label:"Kanban",icon:"i-lucide-square-kanban",to:"/kanban"},{label:"Changelog",icon:"i-lucide-file-cog",to:"/changelog"},{label:"Releases",icon:"i-lucide-tags",to:"https://github.com/Faeq-F/Quokka/releases",target:"_blank"}],[{label:"Program Source",icon:"i-lucide-folder-git",to:"https://github.com/Faeq-F/Quokka/tree/main",target:"_blank"},{label:"Website Source",icon:"i-lucide-folder-git-2",to:"https://github.com/Faeq-F/Quokka/tree/site",target:"_blank"}],[{label:"FAQ",icon:"i-lucide-message-circle-question-mark",to:"/#faq"},{label:"Discussions & Feedback",icon:"i-lucide-messages-square",to:"https://github.com/Faeq-F/Quokka/discussions",target:"_blank"},{label:"Contribute",icon:"i-lucide-git-pull-request-arrow",to:"/contributing"}],[{label:"Code of Conduct",icon:"i-lucide-users-round",to:"/conduct"},{label:"Report an Issue",icon:"i-lucide-triangle-alert",to:"/contributing"}]]}),actions:{}}),cl={class:"w-full text-center"},bl={class:"flex sm:flex-row flex-col w-full mt-12"},kl={class:"flex flex-col justify-center items-center h-full"},xl={class:"text-sm text-gray-400"},wl={class:"flex w-full sm:flex-row flex-col"},Sl={class:"flex flex-col justify-center items-center h-full"},Tl={class:"text-sm text-gray-400"},Cl={class:"flex w-full sm:flex-row flex-col sm:gap-6 gap-1"},hl={class:"flex flex-col justify-center items-center h-full"},Il={class:"text-sm text-gray-400"},$l={class:"flex flex-col justify-center items-center h-full"},Pl={class:"text-sm text-gray-400"},zl={__name:"documentation",setup(a){const s=Cn();return(e,n)=>{const m=X,u=se,p=At;return d(),k("div",cl,[n[9]||(n[9]=i("div",{class:"text-3xl mb-2 mt-22"},`
      Welcome to the Quokka documentation!
    `,-1)),n[10]||(n[10]=t()),n[11]||(n[11]=i("div",null,`
      This is a place where you can find all the information you need to get
      started with Quokka
    `,-1)),n[12]||(n[12]=t()),n[13]||(n[13]=i("div",null,`
      If you have any questions or feedback, feel free to reach out
    `,-1)),n[14]||(n[14]=t()),i("div",bl,[(d(!0),k(G,null,ne(r(s).items[0][1].children.slice(0,3),(f,b)=>(d(),M(p,{key:b,to:f.to,class:"sm:w-1/3 m-3 h-36"},{default:o(()=>[l(u,{class:"w-full h-full"},{default:o(()=>[i("div",kl,[l(m,{name:f.icon},null,8,["name"]),n[0]||(n[0]=t()),i("div",null,U(f.label),1),n[1]||(n[1]=t()),i("div",xl,U(f.description),1)])]),_:2},1024)]),_:2},1032,["to"]))),128))]),n[15]||(n[15]=t()),i("div",wl,[(d(!0),k(G,null,ne(r(s).items[0][1].children.slice(3,6),(f,b)=>(d(),M(p,{key:b,to:f.to,class:"sm:w-1/3 m-3 h-36"},{default:o(()=>[l(u,{class:"w-full h-full"},{default:o(()=>[i("div",Sl,[l(m,{name:f.icon},null,8,["name"]),n[2]||(n[2]=t()),i("div",null,U(f.label),1),n[3]||(n[3]=t()),i("div",Tl,U(f.description),1)])]),_:2},1024)]),_:2},1032,["to"]))),128))]),n[16]||(n[16]=t()),i("div",Cl,[l(p,{to:r(s).items[0][1].children[6].to,class:"sm:w-1/2"},{default:o(()=>[l(u,{class:"w-full h-36 mt-3"},{default:o(()=>[i("div",hl,[l(m,{name:r(s).items[0][1].children[6].icon},null,8,["name"]),n[4]||(n[4]=t()),i("div",null,U(r(s).items[0][1].children[6].label),1),n[5]||(n[5]=t()),i("div",Il,U(r(s).items[0][1].children[6].description),1)])]),_:1})]),_:1},8,["to"]),n[8]||(n[8]=t()),l(p,{to:r(s).items[0][1].children[7].to,class:"sm:w-1/2"},{default:o(()=>[l(u,{class:"w-full h-36 mt-3"},{default:o(()=>[i("div",$l,[l(m,{name:r(s).items[0][1].children[7].icon},null,8,["name"]),n[6]||(n[6]=t()),i("div",null,U(r(s).items[0][1].children[7].label),1),n[7]||(n[7]=t()),i("div",Pl,U(r(s).items[0][1].children[7].description),1)])]),_:1})]),_:1},8,["to"])])])}}},Al={class:"w-full h-full !border-0"},Bl=V({__name:"apiDocumentation",setup(a){function s(){m.value.contentDocument.getElementsByTagName("html")[0].dataset.bsTheme=n.value;for(var u of m.value.contentDocument.body.getElementsByTagName("a"))u.href.includes("Quokka")||(u.target="_blank")}function e(u,p){var f=function(){setTimeout(function(){p(u,u.contentWindow.location.href)},0)};function b(){u.contentWindow.removeEventListener("unload",f),u.contentWindow.addEventListener("unload",f)}u.addEventListener("load",b),b()}const{colorMode:n}=$n(),m=H(null);return Ge(()=>{m.value.addEventListener("load",s),ye(n,async(u,p)=>s()),e(m.value,function(u,p){s()})}),(u,p)=>(d(),k("div",Al,[i("iframe",{ref_key:"APIframe",ref:m,src:"/Quokka/APIdocs/api/Quokka.html",class:"w-full h-full"},null,512)]))}}),Ll={class:"flex sm:flex-row flex-col items-center"},Dl={class:"w-full"},W=V({__name:"docNotice",props:{type:String},setup(a){const s=a,e=D(()=>s.type=="warning"?"i-lucide-triangle-alert":s.type=="destructive"?"i-lucide-octagon-alert":s.type=="tip"?"i-lucide-lightbulb":s.type=="success"?"i-lucide-check-check":"i-lucide-info"),n=D(()=>s.type=="warning"?"#f0b100":s.type=="destructive"?"#fb2c36":s.type=="tip"?"#d2afff":s.type=="success"?"hsl(130, 51%, 65%)":"#a7ccff"),m=D(()=>s.type=="tip"?"secondary":s.type),u=Mt();return(p,f)=>{const b=X,v=ke,C=se;return d(),M(C,{class:"m-2",color:m.value},{default:o(()=>[i("div",Ll,[l(b,{name:e.value,class:"!size-5 min-w-5",style:ce(`color: ${n.value};`)},null,8,["name","style"]),f[0]||(f[0]=t()),l(v,{orientation:r(u).isMobile?"horizontal":"vertical",class:"h-7 mx-3 sm:my-0 my-3",ui:{border:"dark:border-gray-600 h-full"}},null,8,["orientation"]),f[1]||(f[1]=t()),i("div",Dl,[O(p.$slots,"default")])])]),_:3},8,["color"])}}}),Ml={class:"flex flex-col mt-22 mb-16 items-center"},Vl={class:"flex items-center Varela text-3xl"},El={class:"flex gap-1"},_l={class:"flex gap-1"},Fl=V({__name:"buildingTheApp",setup(a){return(s,e)=>{const n=X,m=L,u=se;return d(),k("div",null,[i("div",Ml,[i("div",Vl,[l(n,{name:"i-lucide-drill",class:"mr-2"}),e[0]||(e[0]=t(` Building the app
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=i("div",{class:"text-md outfit"},"Steps to produce the published release",-1))]),e[25]||(e[25]=t()),l(W,{type:"info",class:"m-2 w-full"},{default:o(()=>[e[4]||(e[4]=t(`
      Quokka is licensed under the
      `)),l(K,{url:"/Quokka/license"},{default:o(()=>e[3]||(e[3]=[t(`
        GNU General Public License v3.0
      `)])),_:1,__:[3]})]),_:1,__:[4]}),e[26]||(e[26]=t()),l(u,{class:"w-full m-2"},{default:o(()=>[e[21]||(e[21]=t(`
      To build the app:
      `)),i("ol",null,[i("li",null,[e[7]||(e[7]=t(`
          Open
          `)),l(K,{url:"https://visualstudio.microsoft.com/#vs-section",target:"_blank"},{default:o(()=>e[5]||(e[5]=[t(`
            Visual Studio
          `)])),_:1,__:[5]}),e[8]||(e[8]=t(`
           & clone
          `)),l(K,{url:"https://github.com/faeq-f/quokka/",target:"_blank"},{default:o(()=>e[6]||(e[6]=[t(`
            Quokka
          `)])),_:1,__:[6]})]),e[16]||(e[16]=t()),e[17]||(e[17]=i("li",null,`
          Build the solution
        `,-1)),e[18]||(e[18]=t()),i("li",null,[i("span",El,[e[10]||(e[10]=t(`
            Copy the Quokka folder (in the build path - normally
            `)),l(m,{inline:""},{default:o(()=>e[9]||(e[9]=[t(" bin ")])),_:1,__:[9]}),e[11]||(e[11]=t(`
            ) to your desired location (for e.g., to a USB drive)
          `))])]),e[19]||(e[19]=t()),i("li",null,[i("span",_l,[e[13]||(e[13]=t(`
            (Download / Delete) any plugins you (do / do not) wish to use (in
            the
            `)),l(m,{inline:""},{default:o(()=>e[12]||(e[12]=[t(" PlugBoard ")])),_:1,__:[12]}),e[14]||(e[14]=t(`)
          `))]),e[15]||(e[15]=t(`
          (Some of the recognized Plugins may be included with the build)
        `))])]),e[22]||(e[22]=t()),e[23]||(e[23]=i("br",null,null,-1)),e[24]||(e[24]=t()),l(W,{type:"warning",style:{width:"calc(100% - 1rem)"}},{default:o(()=>e[20]||(e[20]=[t(`
        The app comes as portable by design - there are no separate build
        instructions for a non-portable version.
      `)])),_:1,__:[20]})]),_:1,__:[21,22,23,24]})])}}}),Rl={key:0,class:"m-table-header"},Ql={key:0,class:"m-table-spacer"},ql={class:"m-table-header-title"},Ul={key:1,class:"m-table-header-search"},Kl={key:0},Wl={key:1},Ol={key:0,class:"m-table-sort-icon-wrapper"},Nl={class:"maz-text-center maz-text-muted"},Hl={key:1,class:"m-table-footer"},jl={key:0,class:"m-table-footer-pagination"},Gl={class:"m-table-footer-pagination-items-per-page"},Yl={class:"maz-hidden maz-text-sm tab-s:maz-block"},Xl={key:0,class:"maz-whitespace-nowrap maz-text-sm"},Jl={class:"m-table-footer-pagination-buttons"},nt=Symbol("maz-table"),Zl=V({__name:"MazTable",props:{tableClass:{type:[Boolean,null,String,Object,Array]},tableStyle:{type:[Boolean,null,String,Object,Array]},modelValue:{},size:{default:"md"},inputSize:{},title:{},headers:{},sortable:{type:Boolean},headersAlign:{default:"left"},rows:{},hoverable:{type:Boolean},search:{type:Boolean},hideSearchInRow:{type:Boolean},hideSearchBy:{type:Boolean},searchQuery:{},backgroundOdd:{type:Boolean},backgroundEven:{type:Boolean},elevation:{type:Boolean},divider:{type:Boolean,default:!1},caption:{},captionSide:{default:"bottom"},pagination:{type:Boolean},page:{default:1},pageSize:{default:20},totalPages:{},paginateRows:{type:Boolean,default:!0},totalItems:{},loading:{type:Boolean},selectable:{type:Boolean},selectedKey:{},tableLayout:{},color:{default:"primary"},translations:{},roundedSize:{default:"lg"},scrollable:{type:Boolean,default:!1}},emits:["update:model-value","update:search-query","update:page","update:page-size"],setup(a,{emit:s}){pn($=>({v098d59e0:$.tableLayout,fa6d6a56:$.captionSide}));const e=a,n=s,m=ae(()=>re(()=>import("./Bqf_PMe1.js").then($=>$.a),__vite__mapDeps([4,1,2,5]),import.meta.url)),u=ae(()=>re(()=>import("./BzhzodH3.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)),p=ae(()=>re(()=>import("./xnHhoEvS.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)),f=ae(()=>re(()=>import("./CXphX6SY.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)),b=ae(()=>re(()=>import("./BPGSRnrD.js"),__vite__mapDeps([12,1,2,13,14,15,8,9,16]),import.meta.url)),v=ae(()=>re(()=>Promise.resolve().then(()=>Jo),void 0,import.meta.url)),C=ae(()=>re(()=>Promise.resolve().then(()=>ei),void 0,import.meta.url)),x=ae(()=>re(()=>import("./_LtD2jQT.js"),__vite__mapDeps([17,18,1,2,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,13,15,37]),import.meta.url)),{t:h}=An(),B=D(()=>{var $,N,_,J,Z,Me,Ve,Ee,ut,dt,mt,pt,ft,gt;return{noResults:(($=e.translations)==null?void 0:$.noResults)??h("table.noResults"),actionColumnTitle:((N=e.translations)==null?void 0:N.actionColumnTitle)??h("table.actionColumnTitle"),searchByInput:{all:((J=(_=e.translations)==null?void 0:_.searchByInput)==null?void 0:J.all)??h("table.searchByInput.all"),placeholder:((Me=(Z=e.translations)==null?void 0:Z.searchByInput)==null?void 0:Me.placeholder)??h("table.searchByInput.placeholder")},searchInput:{placeholder:((Ee=(Ve=e.translations)==null?void 0:Ve.searchInput)==null?void 0:Ee.placeholder)??h("table.searchInput.placeholder")},pagination:{all:((dt=(ut=e.translations)==null?void 0:ut.pagination)==null?void 0:dt.all)??h("table.pagination.all"),rowsPerPage:((pt=(mt=e.translations)==null?void 0:mt.pagination)==null?void 0:pt.rowsPerPage)??h("table.pagination.rowsPerPage"),of:((gt=(ft=e.translations)==null?void 0:ft.pagination)==null?void 0:gt.of)??h("table.pagination.of")}}}),z=D(()=>e.divider&&!e.backgroundEven&&!e.backgroundOdd),{size:T,hoverable:c,backgroundEven:w,backgroundOdd:A}=he(e);gn(nt,{size:T,hoverable:c,backgroundEven:w,backgroundOdd:A});const S=H(st()),I=D(()=>e.selectable||!!e.selectedKey),g=H(e.page);ye(()=>e.page,$=>{g.value=$});const P=D({get:()=>g.value,set:$=>{g.value=$,n("update:page",$)}}),y=D(()=>[{label:B.value.pagination.all,value:Number.POSITIVE_INFINITY},{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:50,value:50},{label:100,value:100},{label:200,value:200}]),E=H(e.pageSize);ye(()=>e.pageSize,$=>{E.value=$});const q=D({get:()=>E.value,set:$=>{E.value=$,n("update:page-size",$)}}),F=D(()=>e.totalPages?e.totalPages:q.value===Number.POSITIVE_INFINITY||!Q.value?1:Math.ceil(Q.value/q.value)),Q=D(()=>{var $;return e.totalItems??(($=e.rows)==null?void 0:$.length)}),Y=D(()=>{if(!e.pagination||!e.paginateRows||q.value===Number.POSITIVE_INFINITY)return S.value;const $=(g.value-1)*q.value,N=$+q.value;return S.value.slice($,N)}),le=D(()=>({from:(g.value-1)*q.value+1,to:Math.min(g.value*q.value,Q.value??0)}));function ue(){P.value=1}function de(){P.value=F.value}function oe(){P.value--}function me(){P.value++}ye(()=>[e.rows,e.modelValue],()=>{S.value=st()});const ie=H(),ee=H(),pe=D(()=>Xt(e.headers)),fe=H(),xe=D(()=>{const $=pe.value.map(({label:N,key:_})=>({label:N,value:_}));return[{label:B.value.searchByInput.all,value:null},...$]}),ve=H(e.searchQuery);ye(()=>e.searchQuery,$=>{ve.value=$});const ge=D({get:()=>ve.value,set:$=>{ve.value=$,n("update:search-query",$)}});function we($){return[...$].sort((N,_)=>{if(ie.value===void 0||ee.value===void 0)return 0;const J=N[pe.value[ie.value].key],Z=_[pe.value[ie.value].key];return typeof J=="string"&&typeof Z=="string"?ee.value==="ASC"?J.localeCompare(Z):Z.localeCompare(J):ee.value==="ASC"?J-Z:Z-J})}function jt($){if(e.hideSearchInRow||typeof ge.value!="string")return Y.value;const N=ge.value.toLowerCase();return[...$].filter(_=>fe.value?String(_[fe.value]).toLowerCase().includes(N):Object.values(_).some(J=>typeof J=="string"||typeof J=="number"||typeof J=="boolean"?String(J).toLowerCase().includes(N):!1))}const Pe=D(()=>{const $=jt(Y.value);return we($)}),Gt=Ue(),it=D(()=>e.search||!!e.title||!!Gt.title),Yt=D(()=>e.pagination);function Xt($){return($==null?void 0:$.map(N=>typeof N=="string"?{label:N,align:e.headersAlign}:{align:e.headersAlign,thHeaders:N.headers,...N}))??[]}function st(){var $;return(($=e.rows)==null?void 0:$.map(N=>{var _;return{selected:(_=e.modelValue)==null?void 0:_.includes(e.selectedKey?N[e.selectedKey]:N),...N}}))??[]}function Jt($){if($===ie.value){const N=ee.value==="DESC"?"ASC":void 0;ee.value=ee.value===void 0?"DESC":N}else ee.value="DESC";ie.value=ee.value===void 0?void 0:$}const at=D({get:()=>Pe.value.every($=>$.selected)??!1,set:Zt});function Zt($){for(const N of Pe.value)N.selected=$;We()}function en($,N){Pe.value[N].selected=$,We()}function We($){$=$??rt();const N=$!=null&&$.length?$:void 0;n("update:model-value",N)}function rt(){return S.value.filter($=>$.selected).map($=>e.selectedKey?$[e.selectedKey]:$)}return fn(()=>{const $=rt();$!=null&&$.length&&We($)}),($,N)=>(d(),k("div",{class:j(["m-table m-reset-css",{"--has-header":it.value}])},[it.value?(d(),k("div",Rl,[a.title||$.$slots.title?(d(),k("div",Ql,[O($.$slots,"title",{},()=>[i("span",ql,U(a.title),1)],!0)])):R("",!0),a.search?(d(),k("div",Ul,[a.hideSearchBy?R("",!0):(d(),M(r(b),{key:0,modelValue:fe.value,"onUpdate:modelValue":N[0]||(N[0]=_=>fe.value=_),"rounded-size":a.roundedSize,color:a.color,style:{width:"8rem"},placeholder:B.value.searchByInput.placeholder,size:a.inputSize??r(T),options:xe.value},null,8,["modelValue","rounded-size","color","placeholder","size","options"])),l(r(p),{modelValue:ge.value,"onUpdate:modelValue":N[1]||(N[1]=_=>ge.value=_),size:a.inputSize??r(T),"rounded-size":a.roundedSize,color:a.color,debounce:300,placeholder:B.value.searchInput.placeholder,"left-icon":r(zn)},null,8,["modelValue","size","rounded-size","color","placeholder","left-icon"])])):R("",!0)])):R("",!0),i("div",{class:j(["m-table-wrapper",[`--rounded-${a.roundedSize}`,{"--scrollable":a.scrollable}]])},[i("table",{class:j([{"--elevation":a.elevation,"--has-layout":a.tableLayout},a.tableClass]),style:ce(a.tableStyle)},[a.caption||$.$slots.caption?(d(),k("caption",Kl,[O($.$slots,"caption",{},()=>[t(U(a.caption),1)],!0)])):R("",!0),pe.value?(d(),k("thead",Wl,[O($.$slots,"thead",{},()=>[l(r(C),{"is-head":""},{default:o(()=>[I.value?(d(),M(r(x),{key:0,align:"left",class:j([`--${r(T)}`,"m-table-select-column"])},{default:o(()=>[l(r(u),{modelValue:at.value,"onUpdate:modelValue":N[2]||(N[2]=_=>at.value=_),size:"sm"},null,8,["modelValue"])]),_:1},8,["class"])):R("",!0),(d(!0),k(G,null,ne(pe.value,(_,J)=>(d(),M(r(x),{key:J,scope:_.scope,align:_.align,rowspan:_.rowspan,colspan:_.colspan,headers:_.thHeaders,style:ce({width:_.width,textAlign:_.align}),class:j(["maz-group",[{"--hidden":_.hidden,"--sortable":_.sortable??a.sortable},_.classes,`--${r(T)}`]]),onClick:Z=>(_.sortable??a.sortable)&&Jt(J)},{default:o(()=>[i("span",{class:j({"maz-sr-only":_.srOnly})},[O($.$slots,"header",{header:_,label:_.label},()=>[O($.$slots,`header-label-${_.key}`,{header:_,label:_.label},()=>[t(U(_.label),1)],!0),_.sortable??a.sortable?(d(),k("div",Ol,[l(r(Bn),{class:j(["m-table-sort-icon maz-hidden group-hover:maz-block",{"--sorted":J===ie.value,"--up":ee.value==="DESC","--down":ee.value==="ASC"}])},null,8,["class"])])):R("",!0)],!0)],2)]),_:2},1032,["scope","align","rowspan","colspan","headers","style","class","onClick"]))),128)),$.$slots.actions?(d(),M(r(x),{key:1,align:"left",class:j(`--${r(T)}`)},{default:o(()=>[O($.$slots,"actions-header",{},()=>[t(U(B.value.actionColumnTitle),1)],!0)]),_:3},8,["class"])):R("",!0)]),_:3})],!0)])):R("",!0),a.loading?(d(),M(r(f),{key:2,color:a.color,class:"!maz-absolute"},null,8,["color"])):R("",!0),i("tbody",{class:j({"--divider":z.value})},[O($.$slots,"default",{},()=>[Pe.value.length>0?(d(!0),k(G,{key:0},ne(Pe.value,(_,J)=>(d(),M(r(C),{key:J,class:j(_.classes),onClick:Z=>_.action&&_.action(_)},{default:o(()=>[I.value?(d(),M(r(v),{key:0,class:"m-table-select-column"},{default:o(()=>[O($.$slots,"select",{row:_,selected:_.selected},()=>[l(r(u),{size:"sm","model-value":_.selected,"onUpdate:modelValue":Z=>en(Z,J)},null,8,["model-value","onUpdate:modelValue"])],!0)]),_:2},1024)):R("",!0),(d(!0),k(G,null,ne(pe.value,({key:Z,align:Me,classes:Ve},Ee)=>(d(),M(r(v),{key:Ee,align:Me,class:j(Ve)},{default:o(()=>[Z?O($.$slots,"cell",{key:0,row:_,value:_[Z]},()=>[O($.$slots,`cell-${Z}`,{row:_,value:_[Z]},()=>[t(U(_[Z]),1)],!0)],!0):R("",!0)]),_:2},1032,["align","class"]))),128)),$.$slots.actions?(d(),M(r(v),{key:1},{default:o(()=>[O($.$slots,"actions",{row:_},void 0,!0)]),_:2},1024)):R("",!0)]),_:2},1032,["class","onClick"]))),128)):(d(),M(r(C),{key:1},{default:o(()=>[l(r(v),{colspan:pe.value.length+(I.value?1:0)+($.$slots.actions?1:0)},{default:o(()=>[O($.$slots,"no-results",{},()=>[i("p",Nl,[O($.$slots,"no-results-text",{},()=>[t(U(B.value.noResults),1)],!0)])],!0)]),_:3},8,["colspan"])]),_:3}))],!0)],2)],6)],2),Yt.value?(d(),k("div",Hl,[N[4]||(N[4]=i("div",{class:"m-table-spacer"},null,-1)),a.pagination?(d(),k("div",jl,[i("div",Gl,[i("span",Yl,U(B.value.pagination.rowsPerPage),1),l(r(b),{modelValue:q.value,"onUpdate:modelValue":N[3]||(N[3]=_=>q.value=_),options:y.value,"rounded-size":a.roundedSize,size:a.inputSize??r(T),color:a.color,"list-position":"top",style:{width:"5rem"}},null,8,["modelValue","options","rounded-size","size","color"])]),F.value?(d(),k("span",Xl,U(le.value.from)+" - "+U(le.value.to)+" "+U(B.value.pagination.of)+" "+U(Q.value),1)):R("",!0),i("div",Jl,[l(r(m),{disabled:P.value===1,size:a.inputSize??r(T),color:"transparent","rounded-size":a.roundedSize,onClick:ue},{default:o(()=>[l(r(wt),{class:"maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),l(r(m),{disabled:P.value===1,size:a.inputSize??r(T),color:"transparent","rounded-size":a.roundedSize,onClick:oe},{default:o(()=>[l(r(kt),{class:"maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),l(r(m),{disabled:P.value===F.value,size:a.inputSize??r(T),color:"transparent","rounded-size":a.roundedSize,onClick:me},{default:o(()=>[l(r(kt),{class:"maz-rotate-180 maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),l(r(m),{disabled:P.value===F.value,size:a.inputSize??r(T),color:"transparent","rounded-size":a.roundedSize,onClick:de},{default:o(()=>[l(r(wt),{class:"maz-rotate-180 maz-text-base"})]),_:1},8,["disabled","size","rounded-size"])])])):R("",!0)])):R("",!0)],2))}}),Le=Ke(Zl,[["__scopeId","data-v-70f92976"]]);let Ct;function De(){vn(a=>{clearTimeout(Ct),Ct=setTimeout(()=>{requestAnimationFrame(()=>{a.resize()})},300)})}const eo={class:"flex flex-col mt-22 mb-16 items-center"},to={class:"flex items-center Varela text-3xl"},no=V({__name:"commands",setup(a){const s=Vt(),e=s.pluginsList.map(m=>m.specialCommands.map(u=>({...u,plugin:m.name}))).flat(),n=s.pluginsList.map(m=>m.commandSignifiers.map(u=>({...u,plugin:m.name}))).flat();return(m,u)=>{const p=X,f=ke,b=L,v=Le,C=Be;return d(),k("div",null,[i("div",eo,[i("div",to,[l(p,{name:"i-lucide-zap",class:"mr-2"}),u[1]||(u[1]=t(` Commands
      `))]),u[2]||(u[2]=t()),u[3]||(u[3]=i("div",{class:"text-md outfit"},"Special commands & command signifiers",-1))]),u[19]||(u[19]=t()),l(W,{type:"tip",style:{width:"100%"}},{default:o(()=>[u[5]||(u[5]=t(`
      Please check the
      `)),l(K,{url:"/Quokka/documentation?section=api-documentation"},{default:o(()=>u[4]||(u[4]=[t(`
        API Documentation
      `)])),_:1,__:[4]}),u[6]||(u[6]=t(`
       for further details on the content covered on this page
    `))]),_:1,__:[5,6]}),u[20]||(u[20]=t()),l(W,{type:"warning",style:{width:"100%"},class:"outfit"},{default:o(()=>u[7]||(u[7]=[i("span",{class:"font-bold"},`Special commands and command signifiers are
        case-sensitive`,-1),t(` to
      ensure they do not
      interfere with other functions of the app or plugins
    `)])),_:1,__:[7]}),u[21]||(u[21]=t()),l(C,{class:"w-full m-2",contentClass:"!p-0","onUpdate:modelValue":u[0]||(u[0]=()=>r(De)())},{"title-1":o(()=>u[8]||(u[8]=[t(`
        All special commands from recognized plugins
      `)])),"content-1":o(()=>[l(f,{ui:{border:"dark:border-gray-600"}}),u[11]||(u[11]=t()),l(v,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",inputSize:"sm",headers:[{label:"Plugin",key:"plugin",width:"12rem"},{label:"Default Special Command",key:"command",width:"10rem"},{label:"Use",key:"use",width:"18rem"},{label:"Notes",key:"notes"}],rows:r(e)},{"cell-notes":o(({value:x})=>[i("ul",null,[(d(!0),k(G,null,ne(x,(h,B)=>(d(),k("li",{key:B},U(h),1))),128))])]),"cell-plugin":o(({value:x})=>[l(K,{url:"/Quokka/plugin/"+x.replace(" ","~")},{default:o(()=>[t(U(x),1)]),_:2},1032,["url"])]),"cell-command":o(({value:x})=>[l(b,{inline:""},{default:o(()=>[t(" "+U(x)+" ",1)]),_:2},1024)]),_:1,__:[9,10]},8,["rows"])]),"title-2":o(()=>u[12]||(u[12]=[t(`
        All command signifiers from recognized plugins
      `)])),"content-2":o(()=>[l(f,{ui:{border:"dark:border-gray-600"}}),u[15]||(u[15]=t()),l(v,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",inputSize:"sm",headers:[{label:"Plugin",key:"plugin",width:"12rem"},{label:"Default Command Signifier",key:"signifier",width:"12rem"},{label:"Use",key:"use",width:"16rem"},{label:"Notes",key:"notes"}],rows:r(n)},{"cell-notes":o(({value:x})=>[i("ul",null,[(d(!0),k(G,null,ne(x,(h,B)=>(d(),k("li",{key:B},U(h),1))),128))])]),"cell-plugin":o(({value:x})=>[l(K,{url:"/Quokka/plugin/"+x.replace(" ","~")},{default:o(()=>[t(U(x),1)]),_:2},1032,["url"])]),"cell-signifier":o(({value:x})=>[l(b,{inline:""},{default:o(()=>[t(" "+U(x)+" ",1)]),_:2},1024)]),_:1,__:[13,14]},8,["rows"])]),_:1,__:[16,17,18]})])}}}),lo=["id","disabled","onClick"],oo={class:"m-stepper__header__wrapper"},io={class:"m-stepper__header__point__wrapper"},so={class:"m-stepper__count --primary"},ao={class:"m-stepper__count__circle"},ro={class:"m-stepper__header__content"},uo={class:"m-stepper__title"},mo=["innerHTML"],po={key:0,class:"m-stepper__subtitle"},fo=["innerHTML"],go={key:0,class:"m-stepper__right"},vo=["innerHTML"],yo={class:"m-stepper__content__wrapper"},co=["innerHTML"],bo=V({__name:"MazStepper",props:{modelValue:{},steps:{},color:{default:"primary"},disabledNextSteps:{type:Boolean},disabledPreviousSteps:{type:Boolean},autoValidateSteps:{type:Boolean},allStepsOpened:{type:Boolean},allStepsValidated:{type:Boolean},canCloseSteps:{type:Boolean}},emits:["update:model-value"],setup(a,{emit:s}){const e=s,n=ae(()=>re(()=>import("./Dcv9lJpI.js"),__vite__mapDeps([38,18,1,2,39]),import.meta.url)),m=ae(()=>re(()=>import("./B_9MtTwc.js").then(g=>g.a),__vite__mapDeps([28,29,30,31,1,2,25,26,32]),import.meta.url)),u=D(()=>`hsl(var(--maz-${a.color}))`),p=D(()=>`hsl(var(--maz-${a.color}-foreground))`),f=Ue(),b=D(()=>{var g;return Object.keys(f).filter(P=>P.startsWith("content-")).length||((g=a.steps)==null?void 0:g.filter(P=>P.content).length)||0}),v=H(1),C=D({get:()=>a.modelValue??v.value,set:g=>{v.value=g,e("update:model-value",g)}});function x(g){return c(g)?{icon:yn,class:"--success"}:S(g)?{icon:cn,class:"--warning"}:A(g)?{icon:bn,class:"--error"}:{class:"--normal"}}function h(g){var P,y;return(y=(P=a.steps)==null?void 0:P[g-1])==null?void 0:y.icon}function B(g,P){var y,E;return(E=(y=a.steps)==null?void 0:y[P-1])==null?void 0:E[g]}function z(g){C.value===g&&a.canCloseSteps?C.value=0:g<1?C.value=1:g>b.value?C.value=b.value:C.value=g}function T(g,P){var F,Q;const y=g==="titleInfo"?"title-info":g,E=Object.keys(f).filter(Y=>Y.startsWith(`${y}-`)).includes(`${y}-${P}`),q=!!((Q=(F=a.steps)==null?void 0:F[P-1])!=null&&Q[g]);return E||q}function c(g){var q,F;const P=(F=(q=a.steps)==null?void 0:q[g-1])==null?void 0:F.success,y=A(g)||S(g),E=a.autoValidateSteps&&g<C.value&&!y;return P??(E||a.allStepsValidated)}function w(g){var F,Q;const P=(Q=(F=a.steps)==null?void 0:F[g-1])==null?void 0:Q.disabled,y=C.value===g&&!a.canCloseSteps,E=a.disabledNextSteps&&g>C.value,q=a.disabledPreviousSteps&&g<C.value;return P??(y||E||q||a.allStepsOpened)}function A(g){var P,y;return(y=(P=a.steps)==null?void 0:P[g-1])==null?void 0:y.error}function S(g){var P,y;return(y=(P=a.steps)==null?void 0:P[g-1])==null?void 0:y.warning}function I(g){return g===b.value}return(g,P)=>(d(),k("div",{class:"m-stepper m-reset-css",style:ce([{"--round-step-bg-color":u.value,"--round-step-text-color":p.value}])},[(d(!0),k(G,null,ne(b.value,y=>(d(),k(G,{key:y},[T("title",y)?(d(),k("button",{key:0,id:`header-step-${y}`,type:"button",disabled:w(y),class:j(["m-stepper__header",[{"--is-current-step":y===C.value||a.allStepsOpened,"--disabled":y!==C.value&&!a.allStepsOpened&&w(y)},`${x(y).class}`]]),onClick:E=>z(y)},[i("div",oo,[i("div",io,[O(g.$slots,"point",{step:y},()=>[i("span",so,[i("div",ao,[x(y).icon?(d(),M(Re(x(y).icon),{key:0,class:"icon maz-text-xl"})):R("",!0)]),O(g.$slots,`icon-${y}`,{},()=>[h(y)?(d(),k(G,{key:0},[typeof h(y)=="string"?(d(),M(r(n),{key:0,name:h(y)},null,8,["name"])):h(y)?(d(),M(Re(h(y)),{key:1})):R("",!0)],64)):(d(),k(G,{key:1},[t(U(y),1)],64))],!0)])],!0)]),i("div",ro,[i("span",uo,[O(g.$slots,`title-${y}`,{},()=>[B("title",y)?(d(),k("span",{key:0,innerHTML:B("title",y)},null,8,mo)):R("",!0)],!0)]),T("subtitle",y)?(d(),k("span",po,[O(g.$slots,`subtitle-${y}`,{},()=>[B("subtitle",y)?(d(),k("span",{key:0,innerHTML:B("subtitle",y)},null,8,fo)):R("",!0)],!0)])):R("",!0)])]),T("titleInfo",y)?(d(),k("span",go,[O(g.$slots,`title-info-${y}`,{},()=>[B("titleInfo",y)?(d(),k("span",{key:0,innerHTML:B("titleInfo",y)},null,8,vo)):R("",!0)],!0)])):R("",!0)],10,lo)):R("",!0),i("div",{class:j(["m-stepper__content",{"--no-border":I(y)}])},[l(r(m),{"model-value":a.allStepsOpened||C.value===y,"aria-labelledby":`header-step-${y}`},{default:o(()=>[i("div",yo,[O(g.$slots,`content-${y}`,{validated:c(y),error:A(y),warning:S(y),nextStep:()=>z(y+1),previousStep:()=>z(y-1)},()=>[B("content",y)?(d(),k("span",{key:0,innerHTML:B("content",y)},null,8,co)):R("",!0)],!0)])]),_:2},1032,["model-value","aria-labelledby"])],2)],64))),128))],4))}}),ko=Ke(bo,[["__scopeId","data-v-1f5f1962"]]),xo={class:"flex gap-1"},wo={class:"flex gap-1"},So={class:"flex gap-1"},To={class:"flex gap-1"},Co={class:"flex items-center"},ho=V({__name:"creatingPlugin",setup(a){return(s,e)=>{const n=L,m=se,u=X,p=ke,f=Be;return d(),k(G,null,[l(m,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[i("span",xo,[e[2]||(e[2]=t(`
      To create the plugin itself, create a class that inherits from
      `)),l(n,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" Plugin ")])),_:1,__:[1]})]),e[22]||(e[22]=t(`
    (You do not need to implement all methods)
    `)),l(W,{type:"info",class:"m-2",style:{width:"calc(100% - 1rem)"}},{default:o(()=>[i("span",wo,[l(n,{inline:""},{default:o(()=>e[3]||(e[3]=[t(" OnQueryChange ")])),_:1,__:[3]}),e[5]||(e[5]=t(` is the method that is called by
        the
        `)),l(n,{inline:""},{default:o(()=>e[4]||(e[4]=[t(" SearchWindow ")])),_:1,__:[4]}),e[6]||(e[6]=t(` when a user types in a query.
      `))]),e[10]||(e[10]=t(`
      In this method, you should create your list item objects, filter them
      (if needed), and return them in a list.
      `)),e[11]||(e[11]=i("br",null,null,-1)),e[12]||(e[12]=i("br",null,null,-1)),e[13]||(e[13]=t(`
      When returning items for a special command, you will need to sort the
      list yourself.
      `)),i("span",So,[e[8]||(e[8]=t(`
        Normal results (those returned in
        `)),l(n,{inline:""},{default:o(()=>e[7]||(e[7]=[t(" OnQueryChange ")])),_:1,__:[7]}),e[9]||(e[9]=t(` ) do not need to be sorted as
        Quokka
        will sort them
      `))]),e[14]||(e[14]=t(`
      once it has results from all of the plugins the
      program is using during runtime.
    `))]),_:1,__:[10,11,12,13,14]}),e[23]||(e[23]=t()),l(W,{type:"tip",class:"m-2",style:{width:"calc(100% - 1rem)"}},{default:o(()=>[i("span",To,[e[20]||(e[20]=t(`See
        `)),l(K,{url:"https://github.com/Faeq-F/Quokka/blob/main/Quokka/PluginArch/Plugin.cs",target:"_blank",class:"flex"},{default:o(()=>[e[16]||(e[16]=i("span",null,"the  ",-1)),e[17]||(e[17]=t()),l(n,{inline:"",class:"!border-0"},{default:o(()=>e[15]||(e[15]=[t("Plugin")])),_:1,__:[15]}),e[18]||(e[18]=t()),e[19]||(e[19]=i("span",null,"  class",-1))]),_:1,__:[16,17,18,19]}),e[21]||(e[21]=t(`
        for more information
      `))])]),_:1})]),_:1,__:[22,23]}),e[35]||(e[35]=t()),l(f,{class:"m-2","onUpdate:modelValue":e[0]||(e[0]=()=>r(De)()),style:{width:"calc(100% - 0.5rem)","--maz-color-primary-alpha-20":"var(--maz-color-secondary-alpha-20)","--maz-color-primary-alpha":"var(--maz-color-secondary-alpha)"}},{"title-1":o(()=>[i("div",Co,[l(u,{name:"i-lucide-lightbulb",class:"!size-5 min-w-5",style:{color:"#d2afff"}}),e[27]||(e[27]=t()),l(p,{orientation:"vertical",class:"h-7 mx-3",ui:{border:"dark:border-gray-600 h-full"}}),e[28]||(e[28]=t()),i("div",null,[e[25]||(e[25]=t(`
          See an example from the
          `)),l(K,{url:"https://github.com/Faeq-F/Quokka-TypedText-Plugin",target:"_blank"},{default:o(()=>e[24]||(e[24]=[t(`
            TypedText plugin
          `)])),_:1,__:[24]}),e[26]||(e[26]=t(`
           (a demo plugin not made for use)
        `))])])]),"content-1":o(()=>[l(n,{lang:"cs"},{default:o(()=>e[29]||(e[29]=[t(`
        /// <summary>
        /// The TypedText Plugin
        /// </summary>
        public partial class TypedText : Plugin {

          private static PluginSettings pluginSettings = new();
          internal static PluginSettings PluginSettings {
            get => pluginSettings; set => pluginSettings = value;
          }

          /// <summary>
          /// Loads plugin settings
          /// </summary>
          public TypedText() {
            string fileName = Environment.CurrentDirectory +
              "\\\\PlugBoard\\\\Plugin_TypedText\\\\Plugin\\\\settings.json";
            PluginSettings = JsonConvert.DeserializeObject<PluginSettings>(File.ReadAllText(fileName))!;
          }

          /// <summary>
          /// <inheritdoc/>
          /// </summary>
          public override string PluggerName { get; set; } = "TypedText";

          private List<ListItem> ProduceItems(string query, int number) {
            bool differentDesc = false;
            if (query.Contains(PluginSettings.ShowDifferentDescriptionFlag)) {
              query = query.Replace(PluginSettings.ShowDifferentDescriptionFlag, "");
              differentDesc = true;
            }

            List<ListItem> items = new();
            for (int i = 0; i < number; i++) {
              items.Add(new TypedTextItem(query, differentDesc));
            }

            if (
                  "otherTypedTextItem".Contains(query, StringComparison.OrdinalIgnoreCase)
                  || ( FuzzySearch.LD("otherTypedTextItem", query) < PluginSettings.FuzzySearchThreshold )
            ) {
              items.Add(new OtherTypedTextItem(query));
            }
            return items;
          }

          /// <summary>
          /// <inheritdoc/>
          /// </summary>
          /// <param name="query"><inheritdoc/></param>
          /// <returns>
          /// A single TypedText item that shows you the query you typed in
          /// </returns>
          public override List<ListItem> OnQueryChange(string query) {
            return ProduceItems(query, 1);
          }

          /// <summary>
          /// <inheritdoc/><br />
          /// Displays a message-box to the user, telling them that Quokka is about to shutdown
          /// </summary>
          public override void OnAppShutdown() {
            System.Windows.MessageBox.Show(
              "Quokka is about to shutdown",
              "Message from the TypedText plugin",
              MessageBoxButton.OK,
              MessageBoxImage.Information
            );
          }

          /// <summary>
          /// <inheritdoc/><br />
          /// Displays a message-box to the user, telling them that Quokka is initializing
          /// </summary>
          public override void OnAppStartup() {
            System.Windows.MessageBox.Show(
              "Quokka is Initializing",
              "Message from the TypedText plugin",
              MessageBoxButton.OK,
              MessageBoxImage.Information
            );
          }

          /// <summary>
          /// <inheritdoc/><br />
          /// Displays a message-box to the user, telling them that they have launched the Search Window
          /// </summary>
          public override void OnSearchWindowStartup() {
            System.Windows.MessageBox.Show(
              "The Search Window has been launched",
              "Message from the TypedText plugin",
              MessageBoxButton.OK,
              MessageBoxImage.Information
            );
          }

          /// <summary>
          /// Provides the correct number of TypedTextItems for the SpecialCommand given
          /// </summary>
          /// <param name="command"><inheritdoc/></param>
          /// <returns>The respective amount of TypedTextItems</returns>
          public override List<ListItem> OnSpecialCommand(string command) {
            switch (command) {
              case var value when value == PluginSettings.Show2ItemsSpecialCommand: {
                return ProduceItems(command, 2);
              }
              case var value when value == PluginSettings.Show3ItemsSpecialCommand: {
                return ProduceItems(command, 3);
              }
              default: {
                return ProduceItems(command, 4);
              }
            }
          }

          /// <summary>
          /// <inheritdoc/>
          /// </summary>
          /// <returns>All of the SpecialCommands in the plugin settings</returns>
          public override List<string> SpecialCommands() {
            return new List<string>() {
              PluginSettings.Show2ItemsSpecialCommand,
              PluginSettings.Show3ItemsSpecialCommand,
              PluginSettings.Show4ItemsSpecialCommand
            };
          }

          /// <summary>
          /// <inheritdoc/><br />
          /// Provides a single TypedTextItem, like OnQueryChange<br />
          /// The signifier is only used to remove items from other plugins from the results list
          /// </summary>
          /// <param name="command"><inheritdoc/></param>
          /// <returns>A single TypedTextItem, like OnQueryChange</returns>
          public override List<ListItem> OnSignifier(string command) {
            return ProduceItems(command.Substring(PluginSettings.ItemSignifier.Length), 1);
          }

          /// <summary>
          /// <inheritdoc/>
          /// </summary>
          /// <returns>ItemSignifier in the plugin settings</returns>
          public override List<string> CommandSignifiers() {
            return new List<string>() { PluginSettings.ItemSignifier };
          }
        }
    `)])),_:1,__:[29]}),e[33]||(e[33]=t()),i("blockquote",null,[e[31]||(e[31]=t(`
        This is a part of the
        `)),l(K,{url:"https://github.com/Faeq-F/Quokka-TypedText-Plugin",target:"_blank"},{default:o(()=>e[30]||(e[30]=[t(`
          TypedText plugin
        `)])),_:1,__:[30]}),e[32]||(e[32]=t(`
         (a demo plugin not made for use)
      `))])]),_:1,__:[34]})],64)}}}),Io={class:"flex gap-1"},$o={class:"flex gap-1"},Po=V({__name:"creatingProject",setup(a){return(s,e)=>{const n=L,m=se;return d(),k(G,null,[l(m,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[e[24]||(e[24]=t(`
    To start:
    `)),i("ol",null,[i("li",null,[e[2]||(e[2]=t(`
        Open
        `)),l(K,{url:"https://visualstudio.microsoft.com/#vs-section",target:"_blank"},{default:o(()=>e[0]||(e[0]=[t(`
          Visual Studio
        `)])),_:1,__:[0]}),e[3]||(e[3]=t(`
         & clone
        `)),l(K,{url:"https://github.com/faeq-f/quokka/",target:"_blank"},{default:o(()=>e[1]||(e[1]=[t(`
          Quokka
        `)])),_:1,__:[1]})]),e[21]||(e[21]=t()),i("li",null,[i("span",Io,[e[6]||(e[6]=t(`
          In the solution, create a project of type
          `)),l(n,{inline:""},{default:o(()=>e[4]||(e[4]=[t(" WPF class library ")])),_:1,__:[4]}),e[7]||(e[7]=t(`
          , naming it
          `)),l(n,{inline:""},{default:o(()=>e[5]||(e[5]=[t(" Plugin_YourPluginNameHere ")])),_:1,__:[5]})]),e[8]||(e[8]=t(`
        (make sure that it is a part of the Quokka solution
        and that it is not its own)
      `))]),e[22]||(e[22]=t()),i("li",null,[i("span",$o,[e[11]||(e[11]=t(`
          Rename the
          `)),l(n,{inline:""},{default:o(()=>e[9]||(e[9]=[t(" .cs ")])),_:1,__:[9]}),e[12]||(e[12]=t(`
          file to
          `)),l(n,{inline:""},{default:o(()=>e[10]||(e[10]=[t(" Plugin_YourPluginNameHere.cs ")])),_:1,__:[10]})])]),e[23]||(e[23]=t()),i("li",null,[e[17]||(e[17]=t(`
        Edit the project file to look like the following and set the
        build configuration to 'Plugin':
        `)),e[18]||(e[18]=i("br",null,null,-1)),e[19]||(e[19]=t()),l(n,{lang:"markup"},{default:o(()=>e[13]||(e[13]=[t(`
          <Project Sdk="Microsoft.NET.Sdk">

            <PropertyGroup>
              <TargetFramework>net4.8-windows</TargetFramework>
              <RuntimeIdentifier>win-x64</RuntimeIdentifier>
              <PublishReadyToRun>true</PublishReadyToRun>
              <Nullable>enable</Nullable>
              <LangVersion>10.0</LangVersion>
              <UseWPF>true</UseWPF>
              <ImplicitUsings>enable</ImplicitUsings>
              <SelfContained>true</SelfContained>
              <DebugType>embedded</DebugType>
              <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
              <AppendRuntimeIdentifierToOutputPath>false</AppendRuntimeIdentifierToOutputPath>

              <Product>PluginTypedText</Product>
              <BaseOutputPath>G:\\Quokka\\Quokka\\PlugBoard\\PluginTypedText</BaseOutputPath>
              <Configurations>Plugin</Configurations>

              <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
              <PlatformTarget>AnyCPU</PlatformTarget>
              <Optimize>True</Optimize>
              <EnforceCodeStyleInBuild>True</EnforceCodeStyleInBuild>
              <EnableNETAnalyzers>True</EnableNETAnalyzers>
              <AnalysisLevel>latest-all</AnalysisLevel>
            </PropertyGroup>

            <ItemGroup>
              <ProjectReference Include="..\\Quokka\\Quokka.csproj"></ProjectReference>
            </ItemGroup>

          ...

          </Project>
        `)])),_:1,__:[13]}),e[20]||(e[20]=t()),i("blockquote",null,[e[15]||(e[15]=t(`
          This is a part of the
          `)),l(K,{url:"https://github.com/Faeq-F/Quokka-TypedText-Plugin",target:"_blank"},{default:o(()=>e[14]||(e[14]=[t(`
            TypedText plugin
          `)])),_:1,__:[14]}),e[16]||(e[16]=t(`
           (a demo plugin not made for use)
        `))])])])]),_:1,__:[24]}),e[27]||(e[27]=t()),l(W,{type:"tip",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[e[26]||(e[26]=t(`
    To add extra files in the plugin's folder, for e.g., a settings file
    for the plugin, you can add the following to the project file;
    `)),l(n,{lang:"markup"},{default:o(()=>e[25]||(e[25]=[t(`
            <ItemGroup>
              <ContentWithTargetPath Include="settings.json">
                <CopyToOutputDirectory>Always</CopyToOutputDirectory>
                <TargetPath>settings.json</TargetPath>
              </ContentWithTargetPath>
            </ItemGroup>
          `)])),_:1,__:[25]})]),_:1,__:[26]})],64)}}}),zo=Ae("/media/Docs/ListItems.png"),Ao={class:"flex gap-1"},Bo={class:"flex gap-1"},Lo={class:"flex gap-1"},Do={class:"flex gap-1"},Mo={class:"flex gap-1"},Vo={class:"flex gap-1"},Eo={class:"flex gap-1"},_o=V({__name:"creatingNewItemType",setup(a){return(s,e)=>{const n=L,m=se;return d(),k(G,null,[l(m,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[e[15]||(e[15]=t(`
    Most plugins will want to show results to the user in the form of
    an item on the results list in the search window.`)),e[16]||(e[16]=i("br",null,null,-1)),e[17]||(e[17]=t(`
    To do so, first create an item type to define how your
    results are displayed;
    `)),e[18]||(e[18]=i("br",null,null,-1)),e[19]||(e[19]=i("br",null,null,-1)),e[20]||(e[20]=t()),i("ol",null,[i("li",null,[i("span",Ao,[e[1]||(e[1]=t(`
          In the
          `)),l(n,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" .cs ")])),_:1,__:[0]}),e[2]||(e[2]=t(`
          file add
        `))]),e[4]||(e[4]=t()),l(n,{lang:"cs"},{default:o(()=>e[3]||(e[3]=[t(`
          using Quokka;
          using Quokka.PluginArch;
          using Quokka.ListItems;
        `)])),_:1,__:[3]})]),e[14]||(e[14]=t()),i("li",null,[i("span",Bo,[e[6]||(e[6]=t(`
          Create a
          `)),l(n,{inline:""},{default:o(()=>e[5]||(e[5]=[t(" ListItem ")])),_:1,__:[5]}),e[7]||(e[7]=t(`
          class for your item type
        `))]),e[12]||(e[12]=t()),l(n,{lang:"cs"},{default:o(()=>e[8]||(e[8]=[t(`
          class TypedTextItem : ListItem
            {

              readonly string query;

              public TypedTextItem(string query)
              {
                Name = $"You typed \`{query}\`";
                Description = "Hit the enter key to copy the text";
                UiDispatcher.BeginInvoke(() =>
                {
                  Icon = new BitmapImage(new Uri(
                      Environment.CurrentDirectory + "\\\\PlugBoard\\\\PluginTypedText\\\\Plugin\\\\text.png"));
                });
                this.query = query;
              }

              public override void Execute()
              {
                System.Windows.Clipboard.SetText(query);
                App.Current.MainWindow.Close();
              }
            }
        `)])),_:1,__:[8]}),e[13]||(e[13]=t()),i("blockquote",null,[e[10]||(e[10]=t(`
          This is a part of the
          `)),l(K,{url:"https://github.com/Faeq-F/Quokka-TypedText-Plugin",target:"_blank"},{default:o(()=>e[9]||(e[9]=[t(`
            TypedText plugin
          `)])),_:1,__:[9]}),e[11]||(e[11]=t(`
           (a demo plugin not made for use)
        `))])])])]),_:1,__:[15,16,17,18,19,20]}),e[46]||(e[46]=t()),l(W,{type:"warning",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[i("span",Lo,[e[22]||(e[22]=t(`
      A `)),l(n,{inline:""},{default:o(()=>e[21]||(e[21]=[t(" ListItem ")])),_:1,__:[21]}),e[23]||(e[23]=t(`
      must have the following:
    `))]),e[41]||(e[41]=t()),i("ul",null,[i("li",null,[i("span",Do,[e[25]||(e[25]=t("an ")),l(n,{inline:""},{default:o(()=>e[24]||(e[24]=[t(" Icon ")])),_:1,__:[24]})])]),e[38]||(e[38]=t()),i("li",null,[i("span",Mo,[e[27]||(e[27]=t("a ")),l(n,{inline:""},{default:o(()=>e[26]||(e[26]=[t(" Name ")])),_:1,__:[26]})])]),e[39]||(e[39]=t()),i("li",null,[i("span",Vo,[e[29]||(e[29]=t("a ")),l(n,{inline:""},{default:o(()=>e[28]||(e[28]=[t(" Description ")])),_:1,__:[28]})])]),e[40]||(e[40]=t()),i("li",null,[i("span",Eo,[e[32]||(e[32]=t(`
          an `)),l(n,{inline:""},{default:o(()=>e[30]||(e[30]=[t(" Execute ")])),_:1,__:[30]}),e[33]||(e[33]=t(`
          method to define what should happen when the
          `)),l(n,{inline:""},{default:o(()=>e[31]||(e[31]=[t(" ListItem ")])),_:1,__:[31]}),e[34]||(e[34]=t(` is run
        `))]),e[35]||(e[35]=t(`
        (i.e., what happens when the user hits the `)),e[36]||(e[36]=i("kbd",null,"↵",-1)),e[37]||(e[37]=t(` key with
        that item selected)
      `))])]),e[42]||(e[42]=t()),e[43]||(e[43]=i("br",null,null,-1)),e[44]||(e[44]=t()),e[45]||(e[45]=i("img",{src:zo},null,-1))]),_:1,__:[41,42,43,44,45]})],64)}}}),Fo={class:"flex gap-1"},Ro={class:"flex gap-1"},Qo={class:"flex gap-1"},qo={class:"flex gap-1"},Uo={class:"flex gap-1"},Ko={class:"flex items-center"},Wo=V({__name:"creatingContextPane",setup(a){return(s,e)=>{const n=L,m=se,u=X,p=ke,f=Be;return d(),k(G,null,[l(W,{type:"info",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[i("span",Fo,[e[2]||(e[2]=t(`
      A context pane is displayed when the user hits the
      `)),l(n,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" ContextPaneKey ")])),_:1,__:[1]}),e[3]||(e[3]=t(`
      , replacing the item list.
    `))]),e[7]||(e[7]=t()),i("span",Ro,[e[5]||(e[5]=t(`
      If the selected item does not have a context pane defined,
      nothing happens when the
      `)),l(n,{inline:""},{default:o(()=>e[4]||(e[4]=[t(" ContextPaneKey ")])),_:1,__:[4]}),e[6]||(e[6]=t(`
      is hit.
    `))])]),_:1,__:[7]}),e[36]||(e[36]=t()),l(m,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[e[24]||(e[24]=t(`
    To define the context pane for an item type:
    `)),i("ol",null,[i("li",null,[i("span",Qo,[e[10]||(e[10]=t(`
          In the project, add a
          `)),l(n,{inline:""},{default:o(()=>e[8]||(e[8]=[t(" WPF Page ")])),_:1,__:[8]}),e[11]||(e[11]=t(`
          called `)),l(n,{inline:""},{default:o(()=>e[9]||(e[9]=[t(" ContextPane ")])),_:1,__:[9]})])]),e[22]||(e[22]=t()),i("li",null,[i("span",qo,[e[13]||(e[13]=t(`
          Ensure `)),l(n,{inline:"",lang:"cs"},{default:o(()=>e[12]||(e[12]=[t(" ContextPane : ItemContextPane ")])),_:1,__:[12]})]),e[19]||(e[19]=t()),i("span",Uo,[e[16]||(e[16]=t(`
          (inherits `)),l(n,{inline:"",lang:"cs"},{default:o(()=>e[14]||(e[14]=[t(" ItemContextPane ")])),_:1,__:[14]}),e[17]||(e[17]=t(`
          from `)),l(n,{inline:"",lang:"cs"},{default:o(()=>e[15]||(e[15]=[t(" Quokka.ListItems ")])),_:1,__:[15]}),e[18]||(e[18]=t(`)
        `))])]),e[23]||(e[23]=t()),i("li",null,[e[21]||(e[21]=t(`
        Ensure the plugin's project file has:
        `)),l(n,{lang:"markup"},{default:o(()=>e[20]||(e[20]=[t(`
          <ItemGroup>
            <Compile Update="ContextPane.xaml.cs">
              <SubType>Code</SubType>
            </Compile>
          </ItemGroup>

          <ItemGroup>
            <Page Update="ContextPane.xaml">
              <SubType>Designer</SubType>
            </Page>
          </ItemGroup>
        `)])),_:1,__:[20]})])])]),_:1,__:[24]}),e[37]||(e[37]=t()),l(f,{class:"m-2","onUpdate:modelValue":e[0]||(e[0]=()=>r(De)()),style:{width:"calc(100% - 0.5rem)","--maz-color-primary-alpha-20":"var(--maz-color-secondary-alpha-20)","--maz-color-primary-alpha":"var(--maz-color-secondary-alpha)"}},{"title-1":o(()=>[i("div",Ko,[l(u,{name:"i-lucide-lightbulb",class:"!size-5 min-w-5",style:{color:"#d2afff"}}),e[30]||(e[30]=t()),l(p,{orientation:"vertical",class:"h-7 mx-3",ui:{border:"dark:border-gray-600 h-full"}}),e[31]||(e[31]=t()),i("div",null,[e[26]||(e[26]=t(`
          A context pane tends to have extra information or actions.`)),e[27]||(e[27]=i("br",null,null,-1)),e[28]||(e[28]=t(`
          See an example from the
          `)),l(K,{url:"https://github.com/Faeq-F/Quokka-TypedText-Plugin",target:"_blank"},{default:o(()=>e[25]||(e[25]=[t(`
            TypedText plugin
          `)])),_:1,__:[25]}),e[29]||(e[29]=t(`
           (a demo plugin not made for use)
        `))])])]),"content-1":o(()=>[l(n,{lang:"markup"},{default:o(()=>e[32]||(e[32]=[t(`
        <src:ItemContextPane x:Class="Plugin_TypedText.ContextPane"
          xmlns:src="clr-namespace:Quokka.ListItems;assembly=Quokka"
          d:DesignHeight="300" d:DesignWidth="800" ... Title="ContextPane"
          KeyDown="Page_KeyDown">

          <Border ...>

            <Grid Margin="10" VerticalAlignment="Center" HorizontalAlignment="Center">

              ...

              <Grid Grid.Column="0">

                ...

                <Image Grid.Row="0" x:Name="DetailsImage" />
                <TextBlock TextWrapping="Wrap"
                  Text="You typed the text after 'Typed:'" Grid.Row="1"
                  Padding="10" />
                <TextBlock TextWrapping="Wrap" Text="" Grid.Row="2" x:Name="text"
                  Padding="10" />
              </Grid>

              <Grid Grid.Column="1">

                <ListView ScrollViewer.HorizontalScrollBarVisibility="Disabled"
                  HorizontalContentAlignment="Center" x:Name="ButtonsListView">
                  <ui:Button Content="Copy the text" Padding="10" Click="CopyText" />
                  <ui:Button Content="Another 'Copy the text' button" Padding="10"
                    Click="CopyText" />
                  <ui:Button Content="Another 'Copy the text' button" Padding="10"
                    Click="CopyText" />
                </ListView>

              </Grid>
            </Grid>
          </Border>
        </src:ItemContextPane>
      `)])),_:1,__:[32]}),e[34]||(e[34]=t()),l(n,{lang:"cs"},{default:o(()=>e[33]||(e[33]=[t(`
        using Quokka;
        ...

        namespace Plugin_TypedText {

          public partial class ContextPane : ItemContextPane {

            private Quokka.ListItem Item;

            public ContextPane() {
              InitializeComponent();
              this.Item = (Application.Current.MainWindow as
                SearchWindow).SelectedItem;
              DetailsImage.Source = this.Item.icon;
              text.Text = Item.name;
            }

            ...

            protected override void Page_KeyDown(object sender, KeyEventArgs e) {
              ButtonsListView.Focus();
              switch (e.Key) {
                case Key.Enter:

                  if ((ButtonsListView.SelectedIndex == -1))
                    ButtonsListView.SelectedIndex = 0;

                  Wpf.Ui.Controls.Button currentButton =
                    (ButtonsListView.SelectedItem as Wpf.Ui.Controls.Button);

                  currentButton.RaiseEvent(new
                    RoutedEventArgs(Wpf.Ui.Controls.Button.ClickEvent));
                  break;

                case Key.Down:

                  if ((ButtonsListView.SelectedIndex == -1)) {
                    ButtonsListView.SelectedIndex = 1;
                  } else if (ButtonsListView.SelectedIndex == ButtonsListView.Items.Count - 1) {
                    ButtonsListView.SelectedIndex = 0;
                  } else {
                    ButtonsListView.SelectedIndex++;
                  }

                  ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
                  break;

                case Key.Up:

                  if ((ButtonsListView.SelectedIndex == -1) ||
                    (ButtonsListView.SelectedIndex == 0)) {
                    ButtonsListView.SelectedIndex = ButtonsListView.Items.Count - 1;
                  } else {
                    ButtonsListView.SelectedIndex--;
                  }

                  ButtonsListView.ScrollIntoView(ButtonsListView.SelectedItem);
                  break;

                case Key.Apps: //This is the menu key

                  (Application.Current.MainWindow as SearchWindow).contextPane.Visibility =
                     Visibility.Collapsed;
                  (Application.Current.MainWindow as SearchWindow).searchBox.Focus();

                  //makes showing a new pane more reliable
                  (Application.Current.MainWindow as SearchWindow).contextPane.Source = null;
                  break;

                default:
                  return;
              }
              e.Handled = true;
            }
          }
        }
      `)])),_:1,__:[33]})]),_:1,__:[35]})],64)}}}),Oo={class:"flex flex-col mt-22 mb-16 items-center"},No={class:"flex items-center Varela text-3xl"},Ho=V({__name:"creatingPlugin",setup(a){return(s,e)=>{const n=X,m=W,u=ko;return d(),k("div",null,[i("div",Oo,[i("div",No,[l(n,{name:"i-lucide-toy-brick",class:"mr-2"}),e[1]||(e[1]=t(` Creating a Plugin
      `))]),e[2]||(e[2]=t()),e[3]||(e[3]=i("div",{class:"text-md outfit"},`Creating new item types & producing their
        plugin`,-1))]),e[13]||(e[13]=t()),l(m,{type:"info",class:"w-full"},{default:o(()=>[e[5]||(e[5]=t(`
      Quokka is licensed under the
      `)),l(K,{url:"/Quokka/license"},{default:o(()=>e[4]||(e[4]=[t(" GNU General Public License v3.0")])),_:1,__:[4]})]),_:1,__:[5]}),e[14]||(e[14]=t()),e[15]||(e[15]=i("div",{class:"mb-2 mt-4"},"Steps",-1)),e[16]||(e[16]=t()),l(u,{steps:[{title:"Creating the project"},{title:"Creating a new item type"},{title:"Creating a context pane (optional)"},{title:"Creating the plugin"}],"can-close-steps":"",color:"neutral","onUpdate:modelValue":e[0]||(e[0]=()=>r(De)())},{"icon-1":o(()=>[l(n,{name:"i-lucide-folder-kanban"})]),"content-1":o(()=>[l(Po)]),"icon-2":o(()=>[l(n,{name:"i-lucide-list"})]),"content-2":o(()=>[l(_o)]),"icon-3":o(()=>[l(n,{name:"i-lucide-panels-top-left"})]),"content-3":o(()=>[l(Wo)]),"icon-4":o(()=>[l(n,{name:"i-lucide-unplug"})]),"content-4":o(()=>[l(ho)]),_:1,__:[6,7,8,9,10,11,12]})])}}}),jo={class:"flex flex-col mt-22 mb-16 items-center"},Go={class:"flex items-center Varela text-3xl"},Yo=V({__name:"faq",setup(a){return(s,e)=>{const n=X,m=Be;return d(),k("div",null,[i("div",jo,[i("div",Go,[l(n,{name:"i-lucide-circle-help",class:"mr-2"}),e[0]||(e[0]=t(` FAQ by Developers
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=i("div",{class:"text-md outfit"},"Answers to frequently asked questions",-1))]),e[30]||(e[30]=t()),l(m,{class:"w-full m-2"},{"title-1":o(()=>e[3]||(e[3]=[i("p",null,`
          How do I use a 3rd party library in my plugin?
        `,-1)])),"content-1":o(()=>[e[12]||(e[12]=t(`
        You must install the package (likely through `)),l(K,{blank:"",url:"https://www.nuget.org/"},{default:o(()=>e[4]||(e[4]=[t("NuGet")])),_:1,__:[4]}),e[13]||(e[13]=t(` ) for your
        plugin's project. Unfortunately this is not enough since Quokka will
        need the package reference of the library. You will have to use
        `)),l(K,{blank:"",url:"https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection"},{default:o(()=>e[5]||(e[5]=[t(`
          reflection
        `)])),_:1,__:[5]}),e[14]||(e[14]=t(` 
        to load the library at runtime and use the classes it provides.
        You can use
        `)),l(K,{blank:"",url:"https://github.com/NdubuisiJr/TypeExtender"},{default:o(()=>e[6]||(e[6]=[t(`
          TypeExtender`)])),_:1,__:[6]}),e[15]||(e[15]=t(` too (Quokka has a reference to this).
        You can have a look at the following plugins as examples as to how
        to do this:`)),e[16]||(e[16]=i("br",null,null,-1)),e[17]||(e[17]=i("br",null,null,-1)),e[18]||(e[18]=t()),i("ul",null,[i("li",null,[l(K,{url:"/Quokka/plugin/Calculator"},{default:o(()=>e[7]||(e[7]=[t(`
              Plugin_Calculator
            `)])),_:1,__:[7]})]),e[10]||(e[10]=t()),i("li",null,[l(K,{url:"/Quokka/plugin/English~Dictionary"},{default:o(()=>e[8]||(e[8]=[t(`
              Plugin_EnglishDictionary
            `)])),_:1,__:[8]})]),e[11]||(e[11]=t()),i("li",null,[l(K,{url:"/Quokka/plugin/Everything"},{default:o(()=>e[9]||(e[9]=[t(`
              Plugin_Everything
            `)])),_:1,__:[9]})])]),e[19]||(e[19]=i("br",null,null,-1))]),_:1,__:[20]}),e[31]||(e[31]=t()),l(m,{class:"w-full m-2"},{"title-1":o(()=>e[21]||(e[21]=[i("p",null,`
          Q2
        `,-1)])),"content-1":o(()=>e[22]||(e[22]=[t(`
        Q2 ans
      `)])),_:1,__:[23]}),e[32]||(e[32]=t()),l(m,{class:"w-full m-2"},{"title-1":o(()=>e[24]||(e[24]=[i("p",null,`
          Q3
        `,-1)])),"content-1":o(()=>e[25]||(e[25]=[t(`
        Q3 ans
      `)])),_:1,__:[26]}),e[33]||(e[33]=t()),l(m,{class:"w-full m-2"},{"title-1":o(()=>e[27]||(e[27]=[i("p",null,`
          Q4
        `,-1)])),"content-1":o(()=>e[28]||(e[28]=[t(`
        Q4 ans
      `)])),_:1,__:[29]})])}}}),Xo=V({__name:"MazTableCell",setup(a){const{size:s}=Et(nt);return(e,n)=>(d(),k("td",{class:j(["m-table-cell m-reset-css",[`--${r(s)}`]])},[O(e.$slots,"default",{},void 0,!0)],2))}}),lt=Ke(Xo,[["__scopeId","data-v-83698c73"]]),Jo=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),Zo=V({__name:"MazTableRow",props:{hoverable:{type:Boolean,default:!0},isHead:{type:Boolean,default:!1}},setup(a){const{backgroundEven:s,backgroundOdd:e,hoverable:n}=Et(nt);return(m,u)=>(d(),k("tr",{class:j(["m-table-row m-reset-css",{"--hoverable":r(n)&&a.hoverable&&!a.isHead,"--background-odd":r(e),"--background-even":r(s)}])},[O(m.$slots,"default",{},void 0,!0)],2))}}),ot=Ke(Zo,[["__scopeId","data-v-6d32024a"]]),ei=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"})),ti={class:"flex flex-col mt-22 mb-16 items-center"},ni={class:"flex items-center Varela text-3xl"},li={class:"flex gap-1"},oi={class:"flex gap-1"},ii={class:"flex gap-1"},si=V({__name:"generalUsage",setup(a){return(s,e)=>{const n=X,m=se,u=lt,p=ot,f=Le;return d(),k("div",null,[i("div",ti,[i("div",ni,[l(n,{name:"i-lucide-mouse-pointer",class:"mr-2"}),e[0]||(e[0]=t(` General Usage
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=i("div",{class:"text-md outfit"},"Running the app & default keys",-1))]),e[39]||(e[39]=t()),l(m,{class:"w-full m-2"},{default:o(()=>[i("span",li,[e[4]||(e[4]=t(`
        To use the app, run
        `)),l(L,{inline:""},{default:o(()=>e[3]||(e[3]=[t(" Quokka.exe ")])),_:1,__:[3]}),e[5]||(e[5]=t(`
        (in the root folder)
      `))])]),_:1}),e[40]||(e[40]=t()),l(m,{class:"w-full m-2",padding:!1},{default:o(()=>[l(f,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",headers:["Default keys / shortcuts","Use","Notes"]},{default:o(()=>[l(p,null,{default:o(()=>[l(u,{style:{"font-size":"1rem"}},{default:o(()=>e[6]||(e[6]=[i("kbd",null,"Left Alt",-1),t("+"),i("kbd",null,"Space",-1)])),_:1,__:[6]}),e[14]||(e[14]=t()),l(u,null,{default:o(()=>e[7]||(e[7]=[t(`
            Launches the search bar
          `)])),_:1,__:[7]}),e[15]||(e[15]=t()),l(u,{style:{"font-size":"1rem",width:"43%"}},{default:o(()=>[i("span",oi,[e[13]||(e[13]=t(`This shortcut is modifiable; see
              `)),l(K,{url:"/Quokka/documentation?section=settings",class:"flex"},{default:o(()=>[e[9]||(e[9]=i("span",null,"the  ",-1)),e[10]||(e[10]=t()),l(L,{inline:"",class:"!border-0"},{default:o(()=>e[8]||(e[8]=[t("WindowHotKey")])),_:1,__:[8]}),e[11]||(e[11]=t()),e[12]||(e[12]=i("span",null,"  setting",-1))]),_:1,__:[9,10,11,12]})])]),_:1})]),_:1,__:[14,15]}),e[36]||(e[36]=t()),l(p,null,{default:o(()=>[l(u,null,{default:o(()=>e[16]||(e[16]=[i("kbd",null,"🠙",-1),i("span",{class:"text-sm"},"&",-1),i("kbd",null,"🠛",-1)])),_:1,__:[16]}),e[19]||(e[19]=t()),l(u,null,{default:o(()=>e[17]||(e[17]=[t(`
            Select items
          `)])),_:1,__:[17]}),e[20]||(e[20]=t()),l(u,{style:{"font-size":"1rem",width:"43%"}},{default:o(()=>e[18]||(e[18]=[t(`
            The keys used cannot be changed
          `)])),_:1,__:[18]})]),_:1,__:[19,20]}),e[37]||(e[37]=t()),l(p,null,{default:o(()=>[l(u,null,{default:o(()=>e[21]||(e[21]=[i("kbd",null,"↵",-1)])),_:1,__:[21]}),e[24]||(e[24]=t()),l(u,null,{default:o(()=>e[22]||(e[22]=[t(`
            Executes the selected item (the first item if no item is selected)
          `)])),_:1,__:[22]}),e[25]||(e[25]=t()),l(u,{style:{"font-size":"1rem",width:"43%"}},{default:o(()=>e[23]||(e[23]=[t(`
            The key used cannot be changed
          `)])),_:1,__:[23]})]),_:1,__:[24,25]}),e[38]||(e[38]=t()),l(p,null,{default:o(()=>[l(u,null,{default:o(()=>e[26]||(e[26]=[i("kbd",null,"☰",-1)])),_:1,__:[26]}),e[34]||(e[34]=t()),l(u,null,{default:o(()=>e[27]||(e[27]=[t(`
            Shows context pane for item
          `)])),_:1,__:[27]}),e[35]||(e[35]=t()),l(u,{style:{"font-size":"1rem",width:"43%"}},{default:o(()=>[i("span",ii,[e[33]||(e[33]=t(`This shortcut is modifiable; see
              `)),l(K,{url:"/Quokka/documentation?section=settings",class:"flex"},{default:o(()=>[e[29]||(e[29]=i("span",null,"the  ",-1)),e[30]||(e[30]=t()),l(L,{inline:"",class:"!border-0"},{default:o(()=>e[28]||(e[28]=[t("ContextPaneKey")])),_:1,__:[28]}),e[31]||(e[31]=t()),e[32]||(e[32]=i("span",null,"  setting",-1))]),_:1,__:[29,30,31,32]})])]),_:1})]),_:1,__:[34,35]})]),_:1,__:[36,37,38]})]),_:1})])}}}),ai={class:"flex flex-col mt-22 mb-16 items-center"},ri={class:"flex items-center Varela text-3xl"},ui={class:"flex gap-1"},di={class:"flex gap-1"},mi=V({__name:"installation",setup(a){return(s,e)=>{const n=X,m=se,u=L,p=ke;return d(),k("div",null,[i("div",ai,[i("div",ri,[l(n,{name:"i-lucide-loader",class:"mr-2"}),e[0]||(e[0]=t(` Installation
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=i("div",{class:"text-md outfit"},"Requirements, steps & suggestions",-1))]),e[30]||(e[30]=t()),l(m,{class:"w-full m-2"},{default:o(()=>[e[11]||(e[11]=t(`
      Quokka requires the following:
      `)),i("ul",null,[e[8]||(e[8]=i("li",null,`
          A computer running Windows 7 or higher
        `,-1)),e[9]||(e[9]=t()),i("li",null,[l(K,{blank:"",url:"https://learn.microsoft.com/en-us/dotnet/framework/install/versions-and-dependencies#net-framework-48"},{default:o(()=>e[3]||(e[3]=[t(`
            .NET 4.8 Framework (pre-installed on Windows 10 and 11)
          `)])),_:1,__:[3]})]),e[10]||(e[10]=t()),i("li",null,[e[5]||(e[5]=t(`
          Exclusions to any anti-malware software (including Microsoft
          defender) that is installed on your computer, for the location of the
          exe;
          `)),e[6]||(e[6]=i("br",null,null,-1)),e[7]||(e[7]=t()),l(W,{type:"warning",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>e[4]||(e[4]=[t(`
            Due to costs, binaries are not signed (e.g., with a
            Organization Validation (OV) code signing certificate).`),i("br",null,null,-1),t(`
            As a result, the Microsoft Defender SmartScreen will likely try
            to prevent the app from starting.
          `)])),_:1,__:[4]})])])]),_:1,__:[11]}),e[31]||(e[31]=t()),l(m,{class:"w-full m-2"},{default:o(()=>[e[29]||(e[29]=t(`
      To install:
      `)),i("ul",null,[i("li",null,[e[13]||(e[13]=t(`
          Go to the top of this page and click on the
          `)),l(K,{blank:"",url:"https://github.com/Faeq-F/Quokka/releases/download/v2.0/Quokka.zip"},{default:o(()=>e[12]||(e[12]=[t(`
            'Download Latest Release'
          `)])),_:1,__:[12]}),e[14]||(e[14]=t(`
           button
        `))]),e[27]||(e[27]=t()),i("li",null,[i("span",ui,[e[16]||(e[16]=t(`
            Download the
            `)),l(u,{inline:""},{default:o(()=>e[15]||(e[15]=[t(" Quokka.zip ")])),_:1,__:[15]}),e[17]||(e[17]=t(`
            file & extract it's contents
          `))])]),e[28]||(e[28]=t()),i("li",null,[e[25]||(e[25]=t(`
          You will want to extract / move the folder to an appropriate location.
          `)),l(W,{type:"info",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>e[18]||(e[18]=[t(`
            Quokka is a portable program by design. `),i("br",null,null,-1),t(`
            This means that you can place the folder on a external storage
            medium (e.g. a USB drive) and run the program from there.
          `)])),_:1,__:[18]}),e[26]||(e[26]=t()),l(W,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>[i("span",di,[e[20]||(e[20]=t(`
              If you do not wish to use the program in a portable manner, I
              suggest placing the folder in
              `)),l(u,{inline:""},{default:o(()=>e[19]||(e[19]=[t(" C:\\Program Files ")])),_:1,__:[19]}),e[21]||(e[21]=t(`,
            `))]),e[23]||(e[23]=t(`
            and creating a shortcut that is pinned to the taskbar and
            / or start menu.
            `)),l(p,{class:"my-3 w-1/2 mx-auto",ui:{border:"dark:border-gray-600"}}),e[24]||(e[24]=t(`
            You can set up a task to
            `)),l(K,{blank:"",url:"https://www.tenforums.com/tutorials/201678-how-use-task-scheduler-open-program-windows.html"},{default:o(()=>e[22]||(e[22]=[t(`
              run the program on device startup in Task Scheduler, or
              alternatively
              see / lookup other options.
            `)])),_:1,__:[22]})]),_:1,__:[23,24]})])])]),_:1,__:[29]})])}}}),pi={class:"flex flex-col mt-22 mb-16 items-center"},fi={class:"flex items-center Varela text-3xl"},gi={class:"flex gap-1"},vi=V({__name:"plugins",setup(a){const s=Vt(),e=s.pluginsList.map(u=>({developed:"i-lucide-square-check",name:u.name,author:u.author,authorLink:u.authorUrl})),n=s.plannedPlugins.map(u=>({developed:u.inProgress?"In progress":"i-lucide-square",name:u.name,author:"n/a"})),m=[...e,...n];return(u,p)=>{const f=X,b=W,v=L,C=se,x=Le;return d(),k("div",null,[i("div",pi,[i("div",fi,[l(f,{name:"i-lucide-blocks",class:"mr-2"}),p[0]||(p[0]=t(` Plugins
      `))]),p[1]||(p[1]=t()),p[2]||(p[2]=i("div",{class:"text-md outfit"},"Using plugins & the plugins list",-1))]),p[11]||(p[11]=t()),l(b,{type:"warning",style:{width:"100%"}},{default:o(()=>p[3]||(p[3]=[t(`
      Only recognized plugins appear on this site — others may exist.
    `)])),_:1,__:[3]}),p[12]||(p[12]=t()),l(C,{class:"w-full m-2"},{default:o(()=>[i("span",gi,[p[5]||(p[5]=t(`
        To add a plugin, download and extract it to the
        `)),l(v,{inline:""},{default:o(()=>p[4]||(p[4]=[t(" PlugBoard ")])),_:1,__:[4]}),p[6]||(p[6]=t(` folder
      `))]),p[8]||(p[8]=t(`
      If you do not wish to use a plugin, simply delete the appropriate
      folder in the PlugBoard
      `)),l(b,{type:"info",style:{width:"calc(100% - 1rem)"}},{default:o(()=>p[7]||(p[7]=[i("span",{class:"font-bold"},"Plugins may have their own settings",-1),t(`,
        special commands, command signifiers, etc.`),i("br",null,null,-1),t(`
        Please see their folder in the PlugBoard to find their settings
        file (at the root, if there is one) and consult their documentation
        for
        default values, implemented features, etc.
      `)])),_:1,__:[7]})]),_:1,__:[8]}),p[13]||(p[13]=t()),l(C,{class:"w-full m-2",padding:!1},{default:o(()=>[l(x,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",headers:[{label:"Developed?",key:"developed",width:"18rem"},{label:"Planned / developed plugin",key:"name",width:"36rem"},{label:"Author",key:"author"}],rows:m,search:"",inputSize:"sm"},{"cell-name":o(({row:h,value:B})=>[h.authorLink?(d(),M(K,{key:0,url:"/Quokka/plugin/"+h.name.replace(" ","~")},{default:o(()=>[t(U(B),1)]),_:2},1032,["url"])):R("",!0)]),"cell-author":o(({row:h,value:B})=>[h.authorLink?(d(),M(K,{key:0,url:h.authorLink},{default:o(()=>[t(U(B),1)]),_:2},1032,["url"])):R("",!0)]),"cell-developed":o(({value:h})=>[h!="In progress"?(d(),M(f,{key:0,name:h,class:"!size-5"},null,8,["name"])):R("",!0)]),_:1,__:[9,10]})]),_:1})])}}}),yi=Ae("/media/AppScreenshots/LoadingItem.png"),ci=Ae("/media/AppScreenshots/NoResultsItem.png"),bi=Xe("settingsStore",{state:()=>({general:[{name:"AboutCommand",defaultValue:"AboutQuokka",notes:["A special command to view the 'About Quokka' item","The 'About Quokka' item lets you copy various links, check for updates and display licenses for works used in Quokka"]},{name:"CheckForUpdates",defaultValue:"true",notes:["Whether or not Quokka should check for available updates on startup","You can check for updates using the respective item in the context pane for the 'About Quokka' item"]},{name:"WindowHotKey",defaultValue:"Space",notes:[{prevText:"The full list of keys that can be used in the setting can be found",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.keys?view=netframework-4.8",text:"here"},afterText:"(use the first column)"}]},{name:"WindowHotKeyModifier",defaultValue:"Alt",notes:[{prevText:"The full list of keys that can be used in the setting can be found highlighted",link:{url:"https://github.com/Faeq-F/Quokka/blob/main/Quokka/KeyboardHook.cs#L130-L151",text:"here"}}]},{name:"ContextPaneKey",defaultValue:"Apps",notes:[{prevText:"The full list of keys that can be used in the setting can be found",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.input.key?view=netframework-4.8",text:"here"},afterText:"(use the first column)"}]},{name:"Scorer",defaultValue:"partialRatio",notes:["The strategy for sorting list items.",{prevText:"The full list of different scorers available can be found",link:{url:"https://github.com/JakeBayer/FuzzySharp/tree/master?tab=readme-ov-file#using-different-scorers",text:"here"},afterText:"(use the word after 'var')"}]},{name:"Debounce",defaultValue:"300",notes:["The delay between the user typing the first character, and Quokka starting to load list items",{prevText:"(read more",link:{url:"https://developer.mozilla.org/en-US/docs/Glossary/Debounce",text:"here"},afterText:")"}]},{name:"MaxResults",defaultValue:"10",notes:["The maximum number of items shown in the item list"]},{name:"IgnoreMaxResultsFlag",defaultValue:"-ShowAll",notes:["Text you can type after your query to make the item list show all results for your query"]},{name:"LoadingItemName",defaultValue:"Loading...",notes:["Refer to the relevant image below"]},{name:"LoadingItemDesc",defaultValue:"Please wait",notes:["Refer to the relevant image below"]},{name:"NoResultsItemName",defaultValue:"No results found",notes:["Refer to the relevant image below"]},{name:"NoResultsItemDesc",defaultValue:"Try reformatting / rewording your query",notes:["Refer to the relevant image below"]},{name:"FileManager",defaultValue:"explorer.exe",notes:["This is the program that will open the plugboard","Plugins may use this setting to open other folders, for e.g., a file location"]},{name:"TextEditor",defaultValue:"notepad.exe",notes:["This is the program that will open the settings file","Plugins may use this setting to open other files, for e.g., their own settings file"]}],style:[{type:"Animation",notes:["The animation to be used for the items in the results list",{prevText:"Values accepted: ",values:["FadeIn","Unblur","ScaleFromLeft","ScaleFromTop","ScaleFromRight","ScaleFromBottom","ScaleHorizontally","ScaleVertically","SlideFromLeft","SlideFromTop","SlideFromRight","SlideFromBottom"]},{prevText:"",link:{url:"https://github.com/XamlFlair/XamlFlair/blob/master/XamlFlair.WPF/DefaultAnimations.xaml",text:"Reference"},afterText:""},{usedBy:["Animation"]}]},{type:"Corner Radius",notes:["Rounding corners of elements","Value should be formatted as 'TopLeft,TopRight,BottomRight,BottomLeft' or 'AllCorners'",{prevText:"E.g. ",values:["2,2,2,2","2","5,0,0,5"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.cornerradius?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["WindowRounding","TrayTaskContextMenuRounding","TrayTaskContextMenuItemRounding","SearchBarRounding","ListContainerRounding","ScrollBarBgRounding","ScrollThumbBgRounding","ScrollThumbRounding","ListItemRounding","ContextPaneCornerRounding","ContextPaneListItemRounding"]}]},{type:"Double",notes:["A decimal number",{prevText:"E.g. ",values:["2.0","2","5.88"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.double?view=net-10.0",text:"Reference"},afterText:""},{usedBy:["AnimationDuration","AnimationBlurRadius","ListItemIconColumnWidth","DropShadowOpacity","TrayTaskContextMenuDropShadowOpacity","DropShadowDirection","TrayTaskContextMenuDropShadowDirection","TrayTaskContextMenuDropShadowBlurRadius","DropShadowBlurRadius","DropShadowShadowDepth","TrayTaskContextMenuDropShadowShadowDepth","TrayTaskContextMenuItemIconSize","SearchFieldTxtSize","SearchFieldPlaceholderSize","ListItemIconSize","ListItemNameSize","ListItemDescSize","ContextPaneImageSize","NameTextSize","DescTextSize","ExtraDetailsTextSize","ContextPaneListItemIconSize","ContextPaneListItemSize","SearchBarHeight","SearchFieldHeight","ListContainerMinHeight","ContextPaneMinHeight","WindowWidth","SearchIconWidth","SearchFieldWidth","ScrollBarWidth","HorizontalScrollIncrementingWidth","ScrollBarBgWidth","ScrollThumbBgWidth","ScrollThumbWidth","ListItemIconColumnWidth","MaxDetailsWidth"]}]},{type:"Font Family",notes:["The name of the font used","When you wish to change the app font, you will overwrite 'AppFont.ttf' in the resources folder. The name of the font in this file should be this setting's value",{usedBy:["AppFont"]}]},{type:"Horizontal Alignment",notes:["Where an element should be displayed on the horizontal axis (relative to outer element)",{prevText:"Values accepted: ",values:["Left","Center","Right","Stretch"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.horizontalalignment?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["ContextPaneContentHorizontalAlignment","ContextPaneListHorizontalAlignment","ContextPaneListContentHorizontalAlignment"]}]},{type:"Integer",notes:["A whole number",{prevText:"E.g. ",values:["2","-2","0"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.int32?view=net-10.0",text:"Reference"},afterText:""},{usedBy:["AnimationOffset"]}]},{type:"Rendering Bias",notes:["Indicates whether the element renders with emphasis on speed or quality",{prevText:"Values accepted: ",values:["Performance","Quality"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.effects.renderingbias?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["DropShadowRenderingBias","TrayTaskContextMenuDropShadowRenderingBias"]}]},{type:"Screen Dimensions",notes:["Values that can have 'ScreenHeight' and 'ScreenWidth' values in them",{prevText:"E.g. ",values:["PrimaryScreenHeight","PrimaryScreenWidth","PrimaryScreenHeight/3","PrimaryScreenHeight*4","PrimaryScreenHeight-56","PrimaryScreenHeight+20"]},{usedBy:["WindowTopMargin","WindowWidth","ListContainerMaxHeight"]}]},{type:"Solid Color Brush",notes:["A solid color",{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.brushes?view=windowsdesktop-10.0",text:"Predefined colors"},afterText:""},"Value should be formatted as 'PredefinedColor', '#rgb', '#rrggbb', '#argb' or '#aarrggbb'",{prevText:"E.g. ",values:["Red","Cyan","#000","#a97ef4","#5444","#eea97ef4"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.solidcolorbrush?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["WindowColor","WindowBorderColor","TrayTaskContextMenuColor","TrayTaskContextMenuBorderColor","TrayTaskContextMenuSeparatorColor","TrayTaskContextMenuItemTxtColor","TrayTaskContextMenuItemColor","TrayTaskContextMenuItemBorderColor","TrayTaskContextMenuItemHoverColor","TrayTaskContextMenuItemHoverBorderColor","SearchBarColor","SearchBarBorderColor","SearchFieldTxtColor","SearchFieldTxtSelColor","SearchFieldPlaceholderColor","ListContainerBorderColor","ListContainerColor","ScrollBarBgColor","ScrollBarBgBorderColor","ScrollThumbBgColor","ScrollThumbBgBorderColor","ScrollThumbColor","ScrollThumbBorderColor","ListItemHoverBorderColor","ListItemHoverBgColor","ListItemSelectedBorderColor","ListItemSelectedBgColor","ListItemNameColor","ListItemDescColor","ContextPaneBorderColor","ContextPaneBgColor","NameTextColor","DescTextColor","ExtraDetailsTextColor","ContextPaneListItemHoverBorderColor","ContextPaneListItemHoverBgColor","ContextPaneListItemSelectedBorderColor","ContextPaneListItemSelectedBgColor","ContextPaneListItemColor"]}]},{type:"Thickness",notes:["The thickness of a frame around an element","Value should be formatted as 'left', 'left,top', or 'left,top,right,bottom'",{prevText:"E.g. ",values:["10,20,15,5","22","20,13"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.thickness?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["WindowPadding","ContextPaneListItemTextPadding","WindowBorderThickness","TrayTaskContextMenuBorderThickness","TrayTaskContextMenuItemBorderThickness","SearchBarBorderThickness","ListContainerBorderThickness","ScrollBarBgBorderThickness","ScrollThumbBgBorderThickness","ScrollThumbBorderThickness","ListItemBorderThickness","ContextPaneBorderThickness","ContextPaneListItemBorderThickness","TrayTaskContextMenuItemMargin","TrayTaskContextMenuItemIconMargin","SearchIconMargin","SearchFieldMargin","SearchFieldPlaceholderMargin","ListContainerMargin","ListMargin","ScrollBarBgMargin","ScrollThumbBgMargin","ScrollThumbMargin","ListItemMargin","ListItemTextMargin","ContextPaneContentMargin","ContextPaneImageMargin","NameTextMargin","DescTextMargin","ExtraDetailsTextMargin","ContextPaneListMargin","ContextPaneListItemMargin","ContextPaneListItemIconMargin","ContextPaneListItemContentMargin"]}]},{type:"Vertical Alignment",notes:["How an element is vertically positioned (within the outer element)",{prevText:"Values accepted: ",values:["Top","Center","Bottom","Stretch"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.verticalalignment?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["ContextPaneContentVerticalAlignment"]}]},{type:"Visibility",notes:["Whether to display an element and reserve space for it in the layout",{prevText:"Values accepted: ",values:["Visible","Hidden","Collapsed"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.visibility?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["ScrollBarBgVisibility","ScrollThumbBgVisibility","ScrollThumbVisibility"]}]}]}),actions:{}}),ki={class:"flex flex-col mt-22 mb-16 items-center"},xi={class:"flex items-center Varela text-3xl"},wi={class:"flex gap-1"},Si={class:"flex flex-col items-center"},Ti={src:yi},Ci={class:"ml-1",src:ci},hi={class:"m-2"},Ii={key:0},$i={key:0},Pi={key:1},zi={key:0},Ai=V({__name:"settings",setup(a){const s=bi();return(e,n)=>{const m=X,u=L,p=se,f=ke,b=Le,v=Be;return d(),k("div",null,[i("div",ki,[i("div",xi,[l(m,{name:"i-lucide-sliders-vertical",class:"mr-2"}),n[1]||(n[1]=t(` Settings
      `))]),n[2]||(n[2]=t()),n[3]||(n[3]=i("div",{class:"text-md outfit"},"Defaults & extra information",-1))]),n[39]||(n[39]=t()),l(p,{class:"w-full m-2"},{default:o(()=>[i("span",wi,[n[5]||(n[5]=t(`
        The settings file is located in
        `)),l(u,{inline:""},{default:o(()=>n[4]||(n[4]=[t(" '...\\Quokka\\Config\\' ")])),_:1,__:[4]})]),n[11]||(n[11]=t(`
      All settings are loaded when the application starts, meaning that
      you will have to exit and re-start the app to see changes.
      `)),l(W,{type:"info",style:{width:"calc(100% - 1rem)"}},{default:o(()=>[n[7]||(n[7]=t(`
        Plugins may have their own, specific settings files in the root of
        their respective folders, in the PlugBoard.`)),n[8]||(n[8]=i("br",null,null,-1)),n[9]||(n[9]=t(`
        Please consult their documentation (
        `)),l(K,{url:"/Quokka/documentation?section=api-documentation"},{default:o(()=>n[6]||(n[6]=[t(`
          API Documentation
        `)])),_:1,__:[6]}),n[10]||(n[10]=t(`
         included) for default values, etc.
      `))]),_:1,__:[7,8,9,10]})]),_:1,__:[11]}),n[40]||(n[40]=t()),l(v,{class:"w-full m-2",contentClass:"!p-0","onUpdate:modelValue":n[0]||(n[0]=()=>r(De)())},{"title-1":o(()=>n[12]||(n[12]=[t(`
        General Settings
      `)])),"content-1":o(()=>[l(f,{ui:{border:"dark:border-gray-600"}}),n[16]||(n[16]=t()),l(b,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",inputSize:"sm",headers:[{label:"Setting name",key:"name",width:"12rem"},{label:"Default Value",key:"defaultValue",width:"12rem"},{label:"Notes",key:"notes"}],rows:r(s).general},{"cell-notes":o(({value:C})=>[i("ul",null,[(d(!0),k(G,null,ne(C,(x,h)=>(d(),k("li",{key:h},[Object.keys(x)[0]!="0"?(d(),k(G,{key:0},[t(U(x.prevText)+" ",1),l(K,{url:x.link.url,target:"_blank"},{default:o(()=>[t(U(x.link.text),1)]),_:2},1032,["url"]),t(`
                   `+U(x.afterText),1)],64)):(d(),k(G,{key:1},[t(U(x),1)],64))]))),128))])]),"cell-defaultValue":o(({value:C})=>[l(u,{inline:""},{default:o(()=>[t(" "+U(C)+" ",1)]),_:2},1024)]),"cell-name":o(({value:C})=>[l(u,{inline:""},{default:o(()=>[t(" "+U(C)+" ",1)]),_:2},1024)]),_:1,__:[13,14]},8,["rows"]),n[17]||(n[17]=t()),l(f,{ui:{border:"dark:border-gray-600"}}),n[18]||(n[18]=t()),i("div",Si,[bt(i("img",Ti,null,512),[[r(xt)]]),n[15]||(n[15]=t()),bt(i("img",Ci,null,512),[[r(xt)]])])]),"title-2":o(()=>n[19]||(n[19]=[t(`
        Style Settings
      `)])),"content-2":o(()=>[l(f,{ui:{border:"dark:border-gray-600"}}),n[33]||(n[33]=t()),i("div",hi,[n[22]||(n[22]=t(`
          Quokka comes with the
          `)),l(K,{url:"/Quokka/#customizability"},{default:o(()=>n[20]||(n[20]=[t(`
            'Windows light'
          `)])),_:1,__:[20]}),n[23]||(n[23]=t(`
           theme by default.`)),n[24]||(n[24]=i("br",null,null,-1)),n[25]||(n[25]=t(`
          To change it, you can edit the style settings in the settings file
          and / or you can use values in a
          `)),l(K,{url:"/Quokka/#customizability"},{default:o(()=>n[21]||(n[21]=[t(`
            provided configuration
          `)])),_:1,__:[21]}),n[26]||(n[26]=t(`.
        `))]),n[34]||(n[34]=t()),l(f,{ui:{border:"dark:border-gray-600"}}),n[35]||(n[35]=t()),l(b,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",inputSize:"sm",headers:[{label:"Setting type",key:"type",width:"12rem"},{label:"Notes",key:"notes"}],rows:r(s).style},{"cell-notes":o(({value:C})=>[i("ul",null,[(d(!0),k(G,null,ne(C.slice(0,C.length-1),(x,h)=>(d(),k("li",{key:h},[Object.keys(x)[0]!="0"?(d(),k(G,{key:0},[Object.keys(x).length==2?(d(),k("span",Ii,[t(U(x.prevText)+" ",1),(d(!0),k(G,null,ne(x.values,(B,z)=>(d(),k("span",{key:z},[l(u,{inline:""},{default:o(()=>[t(" "+U(B)+" ",1)]),_:2},1024),n[27]||(n[27]=t()),z!=x.values.length-1?(d(),k("span",$i,", ")):R("",!0)]))),128))])):(d(),k("span",Pi,[t(U(x.prevText)+" ",1),l(K,{url:x.link.url,target:"_blank"},{default:o(()=>[t(U(x.link.text),1)]),_:2},1032,["url"]),t(`
                     `+U(x.afterText),1)]))],64)):(d(),k(G,{key:1},[t(U(x),1)],64))]))),128))]),n[29]||(n[29]=t()),l(f,{ui:{border:"dark:border-gray-600"},class:"my-2"}),n[30]||(n[30]=t(`
            Used by:`)),n[31]||(n[31]=i("br",null,null,-1)),n[32]||(n[32]=t()),(d(!0),k(G,null,ne(C[C.length-1].usedBy,(x,h)=>(d(),k("span",{key:h},[l(u,{inline:""},{default:o(()=>[t(" "+U(x)+" ",1)]),_:2},1024),n[28]||(n[28]=t()),h!=C[C.length-1].usedBy.length-1?(d(),k("span",zi,`,
              `)):R("",!0)]))),128))]),_:1},8,["rows"])]),_:1,__:[36,37,38]})])}}}),Bi=Ae("/media/Docs/LoadingQuokkaTray.ico"),Li=Ae("/media/Docs/QuokkaTray.ico"),Di={class:"flex flex-col mt-22 mb-16 items-center"},Mi={class:"flex items-center Varela text-3xl"},Vi={class:"flex gap-1"},Ei={class:"flex gap-1"},_i={class:"mt-4"},Fi={class:"flex gap-1"},Ri={class:"flex gap-1"},Qi=V({__name:"trayTask",setup(a){return(s,e)=>{const n=X,m=lt,u=ot,p=Le,f=L,b=se,v=ke;return d(),k("div",null,[i("div",Di,[i("div",Mi,[l(n,{name:"i-lucide-panel-bottom",class:"mr-2"}),e[0]||(e[0]=t(` Tray Task
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=i("div",{class:"text-md outfit"},"Using the System Tray task",-1))]),e[46]||(e[46]=t()),l(b,{class:"w-full m-2",padding:!1},{default:o(()=>[l(p,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",headers:["Default tray task icon","Notes"]},{default:o(()=>[l(u,null,{default:o(()=>[l(m,null,{default:o(()=>e[3]||(e[3]=[i("img",{src:Bi,class:"size-10"},null,-1)])),_:1,__:[3]}),e[5]||(e[5]=t()),l(m,null,{default:o(()=>e[4]||(e[4]=[t(`
            Displayed while Quokka is starting up / loading (is not ready)
          `)])),_:1,__:[4]})]),_:1,__:[5]}),e[9]||(e[9]=t()),l(u,null,{default:o(()=>[l(m,null,{default:o(()=>e[6]||(e[6]=[i("img",{src:Li,class:"size-10"},null,-1)])),_:1,__:[6]}),e[8]||(e[8]=t()),l(m,null,{default:o(()=>e[7]||(e[7]=[t(`
            Displayed when Quokka is ready for use
          `)])),_:1,__:[7]})]),_:1,__:[8]})]),_:1,__:[9]}),e[18]||(e[18]=t()),l(W,{type:"tip",style:{width:"calc(100% - 1rem)"}},{default:o(()=>[i("span",Vi,[e[12]||(e[12]=t(`
          To change the tray task icon, edit the
          `)),l(f,{inline:""},{default:o(()=>e[10]||(e[10]=[t(" QuokkaTray.ico ")])),_:1,__:[10]}),e[13]||(e[13]=t(` file in
          `)),l(f,{inline:""},{default:o(()=>e[11]||(e[11]=[t(" ...\\Quokka\\Config\\Resources\\ ")])),_:1,__:[11]})]),e[17]||(e[17]=t()),i("span",Ei,[e[15]||(e[15]=t(`
          (or just rename a different
          `)),l(f,{inline:""},{default:o(()=>e[14]||(e[14]=[t(" .ico ")])),_:1,__:[14]}),e[16]||(e[16]=t(`
          file to the same name)
        `))])]),_:1,__:[17]})]),_:1,__:[18]}),e[47]||(e[47]=t()),l(b,{class:"w-full m-2"},{default:o(()=>[e[42]||(e[42]=t(`
      The tray task context menu can be used to:
      `)),i("ul",_i,[i("li",null,[e[20]||(e[20]=t(`
          Launch the search window
          `)),l(W,{type:"info",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>e[19]||(e[19]=[t(`
            You can only have one search window open at a time
          `)])),_:1,__:[19]})]),e[37]||(e[37]=t()),i("li",null,[e[27]||(e[27]=t(`
          Open the settings file
          `)),l(W,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>[i("span",Fi,[e[26]||(e[26]=t(`
              You can change which text editor opens the settings file
              through
              `)),l(K,{url:"/Quokka/documentation?section=settings",class:"flex"},{default:o(()=>[e[22]||(e[22]=i("span",null,"the  ",-1)),e[23]||(e[23]=t()),l(f,{inline:"",class:"!border-0"},{default:o(()=>e[21]||(e[21]=[t("TextEditor")])),_:1,__:[21]}),e[24]||(e[24]=t()),e[25]||(e[25]=i("span",null,"  setting",-1))]),_:1,__:[22,23,24,25]})])]),_:1})]),e[38]||(e[38]=t()),i("li",null,[e[36]||(e[36]=t(`
          Open the PlugBoard
          `)),l(W,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>[i("span",Ri,[e[34]||(e[34]=t(`
              You can change which file manager opens the
              `)),l(f,{inline:""},{default:o(()=>e[28]||(e[28]=[t(" PlugBoard ")])),_:1,__:[28]}),e[35]||(e[35]=t(` folder through
              `)),l(K,{url:"/Quokka/documentation?section=settings",class:"flex"},{default:o(()=>[e[30]||(e[30]=i("span",null,"the  ",-1)),e[31]||(e[31]=t()),l(f,{inline:"",class:"!border-0"},{default:o(()=>e[29]||(e[29]=[t("FileManager")])),_:1,__:[29]}),e[32]||(e[32]=t()),e[33]||(e[33]=i("span",null,"  setting",-1))]),_:1,__:[30,31,32,33]})])]),_:1})]),e[39]||(e[39]=t()),e[40]||(e[40]=i("li",null,"Exit the app",-1))]),e[43]||(e[43]=t()),l(v,{class:"my-3",ui:{border:"dark:border-gray-600"}}),e[44]||(e[44]=t()),l(W,{type:"warning",style:{width:"calc(100% - 1rem)"}},{default:o(()=>e[41]||(e[41]=[t(`
        When the tray task context menu has its
        `),i("span",{class:"font-bold"},"appearance changed",-1),t(` in the
        settings file, you will have to `),i("span",{class:"font-bold"},`exit and
          reload`,-1),t(`
        the application to see the changes.
      `)])),_:1,__:[41]})]),_:1,__:[42,43,44]}),e[48]||(e[48]=t()),l(W,{type:"destructive",style:{width:"100%"}},{default:o(()=>e[45]||(e[45]=[t(`
      Unfortunately system tray tasks for other applications cannot be
      accessed through the Quokka search window yet`),i("br",null,null,-1),t(`
      This functionality may come in future (as a plugin).
    `)])),_:1,__:[45]})])}}}),qi={slots:{root:"relative isolate",item:"",listWithChildren:"ms-4.5 border-s border-default",itemWithChildren:"ps-1.5 -ms-px",link:"relative group w-full flex items-center text-sm before:absolute before:inset-y-px before:inset-x-0 before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",linkLeadingIcon:"shrink-0",linkLabel:"truncate",linkTrailing:"ms-auto inline-flex gap-1.5 items-center",linkTrailingIcon:"shrink-0 transform transition-transform duration-200 group-data-expanded:rotate-180"},variants:{color:{primary:{link:"focus-visible:before:ring-primary"},secondary:{link:"focus-visible:before:ring-secondary"},success:{link:"focus-visible:before:ring-success"},info:{link:"focus-visible:before:ring-info"},warning:{link:"focus-visible:before:ring-warning"},error:{link:"focus-visible:before:ring-error"},neutral:{link:"focus-visible:before:ring-inverted"}},size:{xs:{link:"px-2 py-1 text-xs gap-1",linkLeadingIcon:"size-4",linkTrailingIcon:"size-4"},sm:{link:"px-2.5 py-1.5 text-xs gap-1.5",linkLeadingIcon:"size-4",linkTrailingIcon:"size-4"},md:{link:"px-2.5 py-1.5 text-sm gap-1.5",linkLeadingIcon:"size-5",linkTrailingIcon:"size-5"},lg:{link:"px-3 py-2 text-sm gap-2",linkLeadingIcon:"size-5",linkTrailingIcon:"size-5"},xl:{link:"px-3 py-2 text-base gap-2",linkLeadingIcon:"size-6",linkTrailingIcon:"size-6"}},selected:{true:{link:"before:bg-elevated"},false:{link:["hover:not-disabled:text-highlighted hover:not-disabled:before:bg-elevated/50","transition-colors before:transition-colors"]}},disabled:{true:{link:"cursor-not-allowed opacity-75"}}},compoundVariants:[{color:"primary",selected:!0,class:{link:"text-primary"}},{color:"secondary",selected:!0,class:{link:"text-secondary"}},{color:"success",selected:!0,class:{link:"text-success"}},{color:"info",selected:!0,class:{link:"text-info"}},{color:"warning",selected:!0,class:{link:"text-warning"}},{color:"error",selected:!0,class:{link:"text-error"}},{color:"neutral",selected:!0,class:{link:"text-highlighted"}}],defaultVariants:{color:"primary",size:"md"}},Ui=["disabled"],Ki={__name:"Tree",props:{as:{type:null,required:!1},color:{type:null,required:!1},size:{type:null,required:!1},valueKey:{type:null,required:!1,default:"value"},labelKey:{type:null,required:!1,default:"label"},trailingIcon:{type:String,required:!1},expandedIcon:{type:String,required:!1},collapsedIcon:{type:String,required:!1},items:{type:null,required:!1},modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1},multiple:{type:Boolean,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},expanded:{type:Array,required:!1},defaultExpanded:{type:Array,required:!1},selectionBehavior:{type:String,required:!1},propagateSelect:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1}},emits:["update:expanded","update:modelValue"],setup(a,{emit:s}){const e=a,n=s,m=Ue(),u=Ye(),p=Pt(zt(e,"as","modelValue","defaultValue","items","multiple","expanded","disabled","propagateSelect"),n),[f,b]=Pn(),v=D(()=>{var z;return Ce({extend:Ce(qi),...((z=u.ui)==null?void 0:z.tree)||{}})({color:e.color,size:e.size})});function C(z){return Oe(z,e.labelKey)}function x(z){return Oe(z,e.valueKey)??Oe(z,e.labelKey)}function h(z){var w;const T=z.defaultExpanded?x(z):null,c=((w=z.children)==null?void 0:w.flatMap(A=>h(A)))??[];return[T,...c].filter(Boolean)}const B=D(()=>{var z;return e.defaultExpanded??((z=e.items)==null?void 0:z.flatMap(T=>h(T)))});return(z,T)=>{var c;return d(),k(G,null,[l(r(f),null,{default:o(({items:w,level:A})=>[(d(!0),k(G,null,ne(w,(S,I)=>{var g,P,y,E;return d(),k("li",{key:`${A}-${I}`,class:j(A>0?v.value.itemWithChildren({class:[(g=e.ui)==null?void 0:g.itemWithChildren,(P=S.ui)==null?void 0:P.itemWithChildren]}):v.value.item({class:[(y=e.ui)==null?void 0:y.item,(E=S.ui)==null?void 0:E.item]}))},[l(r(fl),{"as-child":"",level:A,value:S,onToggle:S.onToggle,onSelect:S.onSelect},{default:o(({isExpanded:q,isSelected:F})=>{var Q,Y,le,ue,de;return[i("button",{disabled:S.disabled||a.disabled,class:j(v.value.link({class:[(Q=e.ui)==null?void 0:Q.link,(Y=S.ui)==null?void 0:Y.link,S.class],selected:F,disabled:S.disabled||a.disabled}))},[O(z.$slots,S.slot||"item",te({ref_for:!0},{index:I,level:A,expanded:q,selected:F},{item:S}),()=>{var oe,me,ie,ee,pe;return[O(z.$slots,S.slot?`${S.slot}-leading`:"item-leading",te({ref_for:!0},{index:I,level:A,expanded:q,selected:F},{item:S}),()=>{var fe,xe,ve,ge,we;return[S.icon?(d(),M(X,{key:0,name:S.icon,class:j(v.value.linkLeadingIcon({class:[(fe=e.ui)==null?void 0:fe.linkLeadingIcon,(xe=S.ui)==null?void 0:xe.linkLeadingIcon]}))},null,8,["name","class"])):(ve=S.children)!=null&&ve.length?(d(),M(X,{key:1,name:q?a.expandedIcon??r(u).ui.icons.folderOpen:a.collapsedIcon??r(u).ui.icons.folder,class:j(v.value.linkLeadingIcon({class:[(ge=e.ui)==null?void 0:ge.linkLeadingIcon,(we=S.ui)==null?void 0:we.linkLeadingIcon]}))},null,8,["name","class"])):R("",!0)]}),T[0]||(T[0]=t()),C(S)||m[S.slot?`${S.slot}-label`:"item-label"]?(d(),k("span",{key:0,class:j(v.value.linkLabel({class:[(oe=e.ui)==null?void 0:oe.linkLabel,(me=S.ui)==null?void 0:me.linkLabel]}))},[O(z.$slots,S.slot?`${S.slot}-label`:"item-label",te({ref_for:!0},{item:S,index:I,level:A,expanded:q,selected:F},{item:S}),()=>[t(U(C(S)),1)])],2)):R("",!0),T[1]||(T[1]=t()),S.trailingIcon||(ie=S.children)!=null&&ie.length||m[S.slot?`${S.slot}-trailing`:"item-trailing"]?(d(),k("span",{key:1,class:j(v.value.linkTrailing({class:[(ee=e.ui)==null?void 0:ee.linkTrailing,(pe=S.ui)==null?void 0:pe.linkTrailing]}))},[O(z.$slots,S.slot?`${S.slot}-trailing`:"item-trailing",te({ref_for:!0},{item:S,index:I,level:A,expanded:q,selected:F},{item:S}),()=>{var fe,xe,ve,ge,we;return[S.trailingIcon?(d(),M(X,{key:0,name:S.trailingIcon,class:j(v.value.linkTrailingIcon({class:[(fe=e.ui)==null?void 0:fe.linkTrailingIcon,(xe=S.ui)==null?void 0:xe.linkTrailingIcon]}))},null,8,["name","class"])):(ve=S.children)!=null&&ve.length?(d(),M(X,{key:1,name:a.trailingIcon??r(u).ui.icons.chevronDown,class:j(v.value.linkTrailingIcon({class:[(ge=e.ui)==null?void 0:ge.linkTrailingIcon,(we=S.ui)==null?void 0:we.linkTrailingIcon]}))},null,8,["name","class"])):R("",!0)]})],2)):R("",!0)]})],10,Ui),T[2]||(T[2]=t()),(le=S.children)!=null&&le.length&&q?(d(),k("ul",{key:0,class:j(v.value.listWithChildren({class:[(ue=e.ui)==null?void 0:ue.listWithChildren,(de=S.ui)==null?void 0:de.listWithChildren]}))},[l(r(b),{items:S.children,level:A+1},null,8,["items","level"])],2)):R("",!0)]}),_:2,__:[2]},1032,["level","value","onToggle","onSelect"])],2)}),128))]),_:3}),T[3]||(T[3]=t()),l(r(dl),te(r(p),{class:v.value.root({class:[(c=e.ui)==null?void 0:c.root,e.class]}),"get-key":x,"default-expanded":B.value,"selection-behavior":a.selectionBehavior}),{default:o(()=>[l(r(b),{items:a.items,level:0},null,8,["items"])]),_:1},16,["class","default-expanded","selection-behavior"])],64)}}},Ht=Xe("underTheHoodStore",{state:()=>({fs:[{label:"Faeq-F/Quokka/",defaultExpanded:!0,onSelect:a=>{a.preventDefault()},children:[{label:".vs/",icon:"i-lucide-folder"},{label:".vscode/",icon:"i-lucide-folder"},{label:"Config/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"Resources/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"AppFont.ttf",icon:"i-lucide-case-sensitive"},{label:"** icons **",icon:"i-lucide-file-image"},{label:"** licenses (for the above files) **",icon:"i-lucide-copyleft"}]},{label:"settings.json",icon:"i-lucide-file-sliders"}]},{label:"** Plugin Submodule Repositories **",icon:"i-lucide-folders"},{label:"Quokka/",defaultExpanded:!0,onSelect:a=>{a.preventDefault()},children:[{label:"ListItems/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"ItemContextPane.cs",icon:"i-lucide-panel-top"},{label:"ListItem.cs",icon:"i-lucide-list"},{label:"LoadingListItem.cs",icon:"i-lucide-loader"},{label:"NoListItem.cs",icon:"i-lucide-list-x"}]},{label:"PluginArch/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"AppPlugins.cs",icon:"i-lucide-plug-zap"},{label:"FuzzySearch.cs",icon:"i-lucide-text-search"},{label:"IconCache.cs",icon:"i-lucide-image"},{label:"Plugin.cs",icon:"i-lucide-blocks"},{label:"UiDispatcher.cs",icon:"i-lucide-route"}]},{label:"SearchWindow/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"KeyDown.cs",icon:"i-lucide-square-arrow-down"},{label:"Scrollbar.xaml",icon:"i-lucide-mouse"},{label:"SearchWindow.xaml",icon:"i-lucide-search"},{label:"SearchWindow.xaml.cs",icon:"i-lucide-search"}]},{label:"Settings/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"AppSettings.cs",icon:"i-lucide-cog"},{label:"SettingParsers.cs",icon:"i-lucide-cog"}]},{label:"TheQuokkaPlugin/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"AboutQuokkaItem.cs",icon:"i-lucide-badge-info"},{label:"ContextPane.xaml",icon:"i-lucide-toolbox"},{label:"ContextPane.xaml.cs",icon:"i-lucide-toolbox"},{label:"Licenses.xaml.cs",icon:"i-lucide-scale"},{label:"Licenses.xaml",icon:"i-lucide-scale"},{label:"Plugin_Quokka.cs",icon:"i-lucide-toy-brick"},{label:"SettingsFileWatcher.cs",icon:"i-lucide-scan-eye"},{label:"UpdateChecker.cs",icon:"i-lucide-refresh-cw"}]},{label:"TrayTask/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"NotifyIconResources.xaml",icon:"i-lucide-panel-bottom"},{label:"NotifyIconViewModel.cs",icon:"i-lucide-panel-bottom-open"},{label:"TrayTask.cs",icon:"i-lucide-panel-bottom"}]},{label:"App.config",icon:"i-lucide-file-cog"},{label:"App.xaml",icon:"i-lucide-file-box"},{label:"App.xaml.cs",icon:"i-lucide-file-box"},{label:"AssemblyInfo.cs",icon:"i-lucide-file-cog"},{label:"KeyboardHook.cs",icon:"i-lucide-keyboard"},{label:"Quokka.csproj",icon:"i-lucide-square-kanban"},{label:"Quokka.csproj.user",icon:"i-lucide-file-sliders"},{label:"app.manifest",icon:"i-lucide-file-symlink"}]},{label:"Tests/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"GlobalUsings.cs",icon:"i-lucide-file-plus-corner"},{label:"** Test Files **",icon:"i-lucide-test-tubes"},{label:"Tests.csproj",icon:"i-lucide-square-kanban"}]},{label:".editorconfig",icon:"i-lucide-braces"},{label:".gitignore",icon:"i-lucide-eye-off"},{label:".gitmodules",icon:"i-lucide-component"},{label:"BuildAndServeDocs.ps1",icon:"i-lucide-form"},{label:"BuildSolution.ps1",icon:"i-lucide-hammer"},{label:"Directory.Build.Props",icon:"i-lucide-drill"},{label:"IgnoredWords.txt",icon:"i-lucide-whole-word"},{label:"Version",icon:"i-lucide-tag"},{label:"Quokka.sln",icon:"i-lucide-file-cog"}]}]}),actions:{}}),Wi={slots:{root:"rounded-lg",header:"p-4 sm:px-6",body:"p-4 sm:p-6",footer:"p-4 sm:px-6"},variants:{variant:{solid:{root:"bg-inverted text-inverted"},outline:{root:"bg-default ring ring-default divide-y divide-default"},soft:{root:"bg-elevated/50 divide-y divide-default"},subtle:{root:"bg-elevated/50 ring ring-default divide-y divide-default"}}},defaultVariants:{variant:"outline"}},Oi={__name:"Card",props:{as:{type:null,required:!1},variant:{type:null,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1}},setup(a){const s=a,e=Ue(),n=Ye(),m=D(()=>{var u;return Ce({extend:Ce(Wi),...((u=n.ui)==null?void 0:u.card)||{}})({variant:s.variant})});return(u,p)=>{var f;return d(),M(r(be),{as:a.as,class:j(m.value.root({class:[(f=s.ui)==null?void 0:f.root,s.class]}))},{default:o(()=>{var b,v,C;return[e.header?(d(),k("div",{key:0,class:j(m.value.header({class:(b=s.ui)==null?void 0:b.header}))},[O(u.$slots,"header")],2)):R("",!0),p[0]||(p[0]=t()),e.default?(d(),k("div",{key:1,class:j(m.value.body({class:(v=s.ui)==null?void 0:v.body}))},[O(u.$slots,"default")],2)):R("",!0),p[1]||(p[1]=t()),e.footer?(d(),k("div",{key:2,class:j(m.value.footer({class:(C=s.ui)==null?void 0:C.footer}))},[O(u.$slots,"footer")],2)):R("",!0)]}),_:3,__:[0,1]},8,["as","class"])}}},Ni={class:"flex items-center gap-2"},Hi={class:"flex items-center gap-2"},ji={class:"text-muted text-sm"},Gi={class:"flex items-center gap-2"},Yi={class:"text-muted text-sm"},Xi={class:"flex items-center gap-2"},Ji={class:"flex items-center gap-2"},Zi={class:"flex items-center gap-2"},es={class:"flex items-center gap-2"},ts={class:"flex items-center gap-2"},ns={class:"flex items-center gap-2"},ls={class:"flex items-center gap-2"},os={class:"flex items-center gap-2"},is={class:"flex items-center gap-2"},ss={class:"flex items-center gap-2"},as={class:"flex items-center gap-2"},rs={class:"flex items-center gap-2"},us=V({__name:"home",emits:["select"],setup(a){const s=Ht().fs;return(e,n)=>{const m=Oi,u=Bt,p=X,f=L,b=hn;return d(),k("div",null,[l(m,{class:"bg-transparent mb-8"},{default:o(()=>n[15]||(n[15]=[t(`
      Understanding a new codebase can feel overwhelming. This
      guide can help you find your way around the repository. This overview
      breaks down the directory structure and explains where the core logic
      resides. Use this map to orient yourself before you start
      contributing.
    `)])),_:1,__:[15]}),n[95]||(n[95]=t(`
    You may wish to familiarize yourself with these files:
    `)),l(b,{class:"flex flex-col gap-2 w-11/12 mt-2",defaultOpen:!0},{content:o(()=>[l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[0]||(n[0]=v=>e.$emit("select",r(s)[0].children[4].children[8]))},{default:o(()=>[i("div",Ni,[l(p,{name:r(s)[0].children[4].children[8].icon},null,8,["name"]),n[16]||(n[16]=t()),n[17]||(n[17]=i("div",null,"App.xaml.cs",-1))]),n[18]||(n[18]=t()),n[19]||(n[19]=i("div",{class:"text-muted text-sm"},`
            Contains global exception handling and app initialization logic;
            setting the keyboard hook & tray task and loading plugins.
          `,-1))]),_:1,__:[18,19]}),n[32]||(n[32]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[1]||(n[1]=v=>e.$emit("select",r(s)[0].children[4].children[5].children[2]))},{default:o(()=>[i("div",Hi,[l(p,{name:r(s)[0].children[4].children[5].children[2].icon},null,8,["name"]),n[20]||(n[20]=t()),n[21]||(n[21]=i("div",null,"TrayTask.cs",-1))]),n[25]||(n[25]=t()),i("div",ji,[n[23]||(n[23]=t(`
            Contains actions for the tray task context menu and app exit
            logic; running `)),l(f,{inline:""},{default:o(()=>n[22]||(n[22]=[t(" OnAppShutdown() ")])),_:1,__:[22]}),n[24]||(n[24]=t(` for
            all
            plugins and disposing of the keyboard hook and tray task.
          `))])]),_:1,__:[25]}),n[33]||(n[33]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[2]||(n[2]=v=>e.$emit("select",r(s)[0].children[4].children[3].children[0]))},{default:o(()=>[i("div",Gi,[l(p,{name:r(s)[0].children[4].children[3].children[0].icon},null,8,["name"]),n[26]||(n[26]=t()),n[27]||(n[27]=i("div",null,"AppSettings.cs",-1))]),n[31]||(n[31]=t()),i("div",Yi,[n[29]||(n[29]=t(`
            Parses `)),l(f,{inline:""},{default:o(()=>n[28]||(n[28]=[t(" settings.json ")])),_:1,__:[28]}),n[30]||(n[30]=t(` and loads all
            application configuration values.
          `))])]),_:1,__:[31]})]),default:o(()=>[l(u,{label:"App",color:"neutral",variant:"subtle","trailing-icon":"i-lucide-chevron-down",block:"",class:"group",ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"}}),n[34]||(n[34]=t())]),_:1,__:[34]}),n[96]||(n[96]=t()),l(b,{class:"flex flex-col gap-2 w-11/12 mt-2"},{content:o(()=>[l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[3]||(n[3]=v=>e.$emit("select",r(s)[0].children[4].children[2].children[3]))},{default:o(()=>[i("div",Xi,[l(p,{name:r(s)[0].children[4].children[2].children[3].icon},null,8,["name"]),n[35]||(n[35]=t()),n[36]||(n[36]=i("div",null,"SearchWindow.xaml.cs",-1))]),n[37]||(n[37]=t()),n[38]||(n[38]=i("div",{class:"text-muted text-sm"},`
            Handles query changes, threading, debouncing input, and item
            generation.
          `,-1))]),_:1,__:[37,38]}),n[43]||(n[43]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[4]||(n[4]=v=>e.$emit("select",r(s)[0].children[4].children[2].children[0]))},{default:o(()=>[i("div",Ji,[l(p,{name:r(s)[0].children[4].children[2].children[0].icon},null,8,["name"]),n[39]||(n[39]=t()),n[40]||(n[40]=i("div",null,"KeyDown.cs",-1))]),n[41]||(n[41]=t()),n[42]||(n[42]=i("div",{class:"text-muted text-sm"},`
            Handles key down events in the search window; item list and context
            pane state.
          `,-1))]),_:1,__:[41,42]})]),default:o(()=>[l(u,{label:"Search Window",color:"neutral",variant:"subtle","trailing-icon":"i-lucide-chevron-down",block:"",class:"group",ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"}}),n[44]||(n[44]=t())]),_:1,__:[44]}),n[97]||(n[97]=t()),l(b,{class:"flex flex-col gap-2 w-11/12 mt-2"},{content:o(()=>[l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[5]||(n[5]=v=>e.$emit("select",r(s)[0].children[4].children[1].children[3]))},{default:o(()=>[i("div",Zi,[l(p,{name:r(s)[0].children[4].children[1].children[3].icon},null,8,["name"]),n[45]||(n[45]=t()),n[46]||(n[46]=i("div",null,`Plugin.cs
            `,-1))]),n[47]||(n[47]=t()),n[48]||(n[48]=i("div",{class:"text-muted text-sm"},`
            An abstract class to be implemented by all plugins.
          `,-1))]),_:1,__:[47,48]}),n[73]||(n[73]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[6]||(n[6]=v=>e.$emit("select",r(s)[0].children[4].children[1].children[4]))},{default:o(()=>[i("div",es,[l(p,{name:r(s)[0].children[4].children[1].children[4].icon},null,8,["name"]),n[49]||(n[49]=t()),n[50]||(n[50]=i("div",null,`UiDispatcher.cs
            `,-1))]),n[51]||(n[51]=t()),n[52]||(n[52]=i("div",{class:"text-muted text-sm"},`
            Useful methods for plugins to execute actions on the UI thread.
          `,-1))]),_:1,__:[51,52]}),n[74]||(n[74]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[7]||(n[7]=v=>e.$emit("select",r(s)[0].children[4].children[1].children[2]))},{default:o(()=>[i("div",ts,[l(p,{name:r(s)[0].children[4].children[1].children[2].icon},null,8,["name"]),n[53]||(n[53]=t()),n[54]||(n[54]=i("div",null,`
              IconCache.cs
            `,-1))]),n[55]||(n[55]=t()),n[56]||(n[56]=i("div",{class:"text-muted text-sm"},`
            Useful for plugins to cache images for list item icons.
          `,-1))]),_:1,__:[55,56]}),n[75]||(n[75]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[8]||(n[8]=v=>e.$emit("select",r(s)[0].children[4].children[1].children[1]))},{default:o(()=>[i("div",ns,[l(p,{name:r(s)[0].children[4].children[1].children[1].icon},null,8,["name"]),n[57]||(n[57]=t()),n[58]||(n[58]=i("div",null,`
              FuzzySearch.cs
            `,-1))]),n[59]||(n[59]=t()),n[60]||(n[60]=i("div",{class:"text-muted text-sm"},`
            Useful methods for plugins using Fuzzy Searching.
          `,-1))]),_:1,__:[59,60]}),n[76]||(n[76]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[9]||(n[9]=v=>e.$emit("select",r(s)[0].children[4].children[1].children[0]))},{default:o(()=>[i("div",ls,[l(p,{name:r(s)[0].children[4].children[1].children[0].icon},null,8,["name"]),n[61]||(n[61]=t()),n[62]||(n[62]=i("div",null,"AppPlugins.cs",-1))]),n[63]||(n[63]=t()),n[64]||(n[64]=i("div",{class:"text-muted text-sm"},`
            Handles the discovery and loading of all plugins at application
            startup.
          `,-1))]),_:1,__:[63,64]}),n[77]||(n[77]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[10]||(n[10]=v=>e.$emit("select",r(s)[0].children[4].children[0].children[1]))},{default:o(()=>[i("div",os,[l(p,{name:r(s)[0].children[4].children[0].children[1].icon},null,8,["name"]),n[65]||(n[65]=t()),n[66]||(n[66]=i("div",null,`ListItem.cs
            `,-1))]),n[67]||(n[67]=t()),n[68]||(n[68]=i("div",{class:"text-muted text-sm"},`
            An abstract class to be implemented by all list items.
          `,-1))]),_:1,__:[67,68]}),n[78]||(n[78]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[11]||(n[11]=v=>e.$emit("select",r(s)[0].children[4].children[0].children[0]))},{default:o(()=>[i("div",is,[l(p,{name:r(s)[0].children[4].children[0].children[0].icon},null,8,["name"]),n[69]||(n[69]=t()),n[70]||(n[70]=i("div",null,"ItemContextPane.cs",-1))]),n[71]||(n[71]=t()),n[72]||(n[72]=i("div",{class:"text-muted text-sm"},`
            A basic class to inherit from for a context pane.
          `,-1))]),_:1,__:[71,72]})]),default:o(()=>[l(u,{label:"Plugin Architecture",color:"neutral",variant:"subtle","trailing-icon":"i-lucide-chevron-down",block:"",class:"group",ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"}}),n[79]||(n[79]=t())]),_:1,__:[79]}),n[98]||(n[98]=t()),l(b,{class:"flex flex-col gap-2 w-11/12 mt-2"},{content:o(()=>[l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[12]||(n[12]=v=>e.$emit("select",r(s)[0].children[4].children[4].children[5]))},{default:o(()=>[i("div",ss,[l(p,{name:r(s)[0].children[4].children[4].children[5].icon},null,8,["name"]),n[80]||(n[80]=t()),n[81]||(n[81]=i("div",null,"PluginQuokka.cs",-1))]),n[82]||(n[82]=t()),n[83]||(n[83]=i("div",{class:"text-muted text-sm"},`
            A built-in utility plugin, useful as an example for plugin creators.
          `,-1))]),_:1,__:[82,83]}),n[92]||(n[92]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[13]||(n[13]=v=>e.$emit("select",r(s)[0].children[4].children[4].children[0]))},{default:o(()=>[i("div",as,[l(p,{name:r(s)[0].children[4].children[4].children[0].icon},null,8,["name"]),n[84]||(n[84]=t()),n[85]||(n[85]=i("div",null,"AboutQuokkaItem.cs",-1))]),n[86]||(n[86]=t()),n[87]||(n[87]=i("div",{class:"text-muted text-sm"},`
            A list item for the plugin, used to access different actions.
            Useful as an example for plugin creators.
          `,-1))]),_:1,__:[86,87]}),n[93]||(n[93]=t()),l(m,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[14]||(n[14]=v=>e.$emit("select",r(s)[0].children[4].children[4].children[1]))},{default:o(()=>[i("div",rs,[l(p,{name:r(s)[0].children[4].children[4].children[1].icon},null,8,["name"]),n[88]||(n[88]=t()),n[89]||(n[89]=i("div",null,"ContextPane.xaml.cs & ContextPane.xaml",-1))]),n[90]||(n[90]=t()),n[91]||(n[91]=i("div",{class:"text-muted text-sm"},`
            A context pane for triggering the plugin's different actions. Useful
            as an example for plugin creators.
          `,-1))]),_:1,__:[90,91]})]),default:o(()=>[l(u,{label:"The Quokka Plugin",color:"neutral",variant:"subtle","trailing-icon":"i-lucide-chevron-down",block:"",class:"group",ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"}}),n[94]||(n[94]=t())]),_:1,__:[94]})])}}}),ds=V({__name:"file",props:{link:String,item:Object},setup(a){return(s,e)=>{const n=X,m=At;return d(),M(m,{target:"_blank",to:a.link,class:"!no-underline flex items-center justify-center text-lg !not-italic mt-4"},{default:o(()=>[l(n,{name:a.item.icon,class:"mr-1.5 !size-5"},null,8,["name"]),e[0]||(e[0]=t()),i("code",null,U(a.item.label.replaceAll("*","")),1),e[1]||(e[1]=t()),l(n,{name:"i-lucide-arrow-up-right",class:"!size-3 mb-1"})]),_:1,__:[0,1]},8,["to"])}}}),ms={class:"p-10"},ps={target:"_blank",href:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.controls.page?view=windowsdesktop-10.0"},fs={target:"_blank",href:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.controls.frame?view=windowsdesktop-10.0"},gs={style:{width:"calc(100% - 2.5rem)"}},vs=V({__name:"itemContextPane",setup(a){return(s,e)=>(d(),k("div",ms,[e[17]||(e[17]=t(`
    A basic Context Pane class for a list item, containing
    the basic methods most context panes would need and / or
    should want to override.
    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[4]||(e[4]=t(`
      Context Panes are
      `)),i("a",ps,[l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" Page ")])),_:1,__:[0]}),e[1]||(e[1]=t(`s
      `))]),e[5]||(e[5]=t(`
      hosted by a
      `)),i("a",fs,[l(L,{inline:""},{default:o(()=>e[2]||(e[2]=[t(" Frame ")])),_:1,__:[2]})]),e[6]||(e[6]=t()),e[7]||(e[7]=i("br",null,null,-1)),e[8]||(e[8]=t()),l(L,{inline:"",lang:"cs"},{default:o(()=>e[3]||(e[3]=[t(" YourContextPane : ItemContextPane : Page ")])),_:1,__:[3]})]),_:1,__:[4,5,6,7,8]}),e[18]||(e[18]=t()),l(W,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[14]||(e[14]=t(`
      When handling keyboard input, if the `)),l(L,{inline:""},{default:o(()=>e[9]||(e[9]=[t(" ContextPaneKey ")])),_:1,__:[9]}),e[15]||(e[15]=t(` is
      pressed, you can return the user back to the item list where
      they can continue their search using
      `)),l(L,{inline:""},{default:o(()=>e[10]||(e[10]=[t(" ReturnToSearch() ")])),_:1,__:[10]}),e[16]||(e[16]=t()),i("div",gs,[l(L,{lang:"cs"},{default:o(()=>e[11]||(e[11]=[t(`
          switch (e.Key)
          {
            case var value when value == (System.Windows.Input.Key)App.Current.Resources["ContextPaneKey"]:
              ReturnToSearch();
              break;
        `)])),_:1,__:[11]}),e[13]||(e[13]=t()),l(L,{lang:"cs"},{default:o(()=>e[12]||(e[12]=[t(`
          protected static void ReturnToSearch()
          {
            SearchWindow window = ((SearchWindow)Application.Current.MainWindow);
            window.ContextPaneFrame.Visibility = Visibility.Collapsed;
            window.SearchBox.Focus();
            window.ContextPaneFrame.Source = null; //makes showing a new pane more reliable
          }
        `)])),_:1,__:[12]})])]),_:1,__:[14,15,16]})]))}}),ys={},cs={class:"p-10"},bs={style:{width:"calc(100% - 2.5rem)"}};function ks(a,s){const e=L,n=W;return d(),k("div",cs,[s[5]||(s[5]=t(`
    The entry point for the app. Loads all of the settings in the
    app settings file, plugins available in the
    `)),l(e,{inline:""},{default:o(()=>s[0]||(s[0]=[t(" PlugBoard ")])),_:1,__:[0]}),s[6]||(s[6]=t(`,
    the `)),l(e,{inline:""},{default:o(()=>s[1]||(s[1]=[t(" SearchWindow ")])),_:1,__:[1]}),s[7]||(s[7]=t(` HotKey and
    the tray task.
    Also runs all of the plugins' `)),l(e,{inline:""},{default:o(()=>s[2]||(s[2]=[t(" OnAppStartup() ")])),_:1,__:[2]}),s[8]||(s[8]=t(`
    methods.
    `)),l(n,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[s[4]||(s[4]=t(`
      Includes a method to show error message boxes to
      the user. The message box will include the exception's
      message and stacktrace.
      `)),i("div",bs,[l(e,{lang:"cs"},{default:o(()=>s[3]||(s[3]=[t(`
          static public void ShowErrorMessageBox(Exception exception, String title)
          {
            ...
            MessageBox.Show(
                  $"{exception.Message}\\n\\n{exception.StackTrace}",
                  title,
                  MessageBoxButton.OK,
                  MessageBoxImage.Error
              );
          }
        `)])),_:1,__:[3]})])]),_:1,__:[4]})])}const xs=Je(ys,[["render",ks]]),ws={class:"p-10"},Ss={style:{width:"calc(100% - 2.5rem)"}},Ts={style:{width:"calc(100% - 2.5rem)"}},Cs=V({__name:"quokka",setup(a){return(s,e)=>(d(),k("div",ws,[e[10]||(e[10]=t(`
    The Quokka project file; defines project metadata, target
    frameworks, and NuGet dependencies used by the MSBuild system
    to compile the application.
    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[2]||(e[2]=t(`
      Quokka targets .NET 4.8 for portability. This version comes
      `)),l(K,{url:"https://learn.microsoft.com/en-us/dotnet/framework/install/versions-and-dependencies#net-framework-48",blank:""},{default:o(()=>e[0]||(e[0]=[t(`
        pre-installed on Windows 10 and 11
      `)])),_:1,__:[0]}),e[3]||(e[3]=t(`, allowing users to run the
      application without installing additional frameworks.`)),e[4]||(e[4]=i("br",null,null,-1)),e[5]||(e[5]=t()),i("div",Ss,[l(L,{lang:"markup"},{default:o(()=>e[1]||(e[1]=[t(`
          <TargetFramework>net4.8-windows</TargetFramework>
        `)])),_:1,__:[1]})])]),_:1,__:[2,3,4,5]}),e[11]||(e[11]=t()),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[8]||(e[8]=t(`
      Files in the `)),l(L,{inline:""},{default:o(()=>e[6]||(e[6]=[t(" Config ")])),_:1,__:[6]}),e[9]||(e[9]=t(`
      directory are copied to the output folder. This ensures they
      are available to the application at runtime while remaining
      easily accessible for user customization.
      `)),i("div",Ts,[l(L,{lang:"markup"},{default:o(()=>e[7]||(e[7]=[t(`
          <ContentWithTargetPath Include="..\\Config\\Resources\\QuokkaTray.ico">`),i("br",null,null,-1),t(`
            <CopyToOutputDirectory>Always</CopyToOutputDirectory>`),i("br",null,null,-1),t(`
            <TargetPath>Config\\Resources\\QuokkaTray.ico</TargetPath>`),i("br",null,null,-1),t(`
          </ContentWithTargetPath>
          ...
        `)])),_:1,__:[7]})])]),_:1,__:[8,9]})]))}}),hs={class:"p-10"},Is=V({__name:"listItem",setup(a){return(s,e)=>(d(),k("div",hs,[e[10]||(e[10]=t(`
    Defines the abstract base class that serves as the contract for all list
    items, ensuring every item implements the required properties and
    behaviors.
    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[5]||(e[5]=t(`
      Every item must have a `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" Name ")])),_:1,__:[0]}),e[6]||(e[6]=t(`,
      `)),l(L,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" Description ")])),_:1,__:[1]}),e[7]||(e[7]=t(`,
      `)),l(L,{inline:""},{default:o(()=>e[2]||(e[2]=[t(" Icon ")])),_:1,__:[2]}),e[8]||(e[8]=t(` and an
      `)),l(L,{inline:""},{default:o(()=>e[3]||(e[3]=[t(" Execute ")])),_:1,__:[3]}),e[9]||(e[9]=t(` method. See the second step in
      `)),l(K,{url:"/Quokka/documentation?section=creating-plugin"},{default:o(()=>e[4]||(e[4]=[t(`
        creating a plugin.
      `)])),_:1,__:[4]})]),_:1,__:[5,6,7,8,9]})]))}}),$s={class:"p-10"},Ps=V({__name:"appSettings",setup(a){return(s,e)=>(d(),k("div",$s,[e[9]||(e[9]=t(`
    Contains the function that loads all of the settings in the
    app settings file on startup.
    `)),l(W,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[3]||(e[3]=t(`
      Settings are stored in
      `)),l(L,{inline:"",lang:"cs"},{default:o(()=>e[0]||(e[0]=[t(" Application.Current.Resources ")])),_:1,__:[0]}),e[4]||(e[4]=t(`
      and are accessible with
      `)),l(L,{inline:"",lang:"cs"},{default:o(()=>e[1]||(e[1]=[t(" Application.Current.Resources[entry.Key] ")])),_:1,__:[1]}),e[5]||(e[5]=t(`.
      `)),e[6]||(e[6]=i("br",null,null,-1)),e[7]||(e[7]=t(`For e.g.,
      `)),l(L,{inline:"",lang:"cs"},{default:o(()=>e[2]||(e[2]=[t(' Application.Current.Resources["CheckForUpdates"] ')])),_:1,__:[2]}),e[8]||(e[8]=t(`
      .
    `))]),_:1,__:[3,4,5,6,7,8]})]))}}),zs={class:"p-10"},As=V({__name:"keyDown",setup(a){return(s,e)=>(d(),k("div",zs,[e[13]||(e[13]=t(`
    Contains the handler for the event where a keyboard key is pressed while the search box has focus.
    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[i("ul",null,[e[3]||(e[3]=i("li",null,"If a context pane is open, focus will switch to it.",-1)),e[4]||(e[4]=t()),i("li",null,[e[1]||(e[1]=t("If the key is ")),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" ContextPaneKey ")])),_:1,__:[0]}),e[2]||(e[2]=t(", it will find and open the item's context pane."))]),e[5]||(e[5]=t()),e[6]||(e[6]=i("li",null,"If the key is up or down arrow keys, it will scroll & select the relevant item.",-1)),e[7]||(e[7]=t()),e[8]||(e[8]=i("li",null,"If the key is left or right arrow keys, it will scroll the selected item horizontally.",-1))]),e[10]||(e[10]=t()),e[11]||(e[11]=i("br",null,null,-1)),e[12]||(e[12]=t(`
      See `)),l(K,{url:"/Quokka/documentation?section=general-usage"},{default:o(()=>e[9]||(e[9]=[t("general usage.")])),_:1,__:[9]})]),_:1,__:[10,11,12]})]))}}),Bs={class:"p-10"},Ls=V({__name:"searchWindow",setup(a){return(s,e)=>(d(),k("div",Bs,[e[12]||(e[12]=t(`
    The design and layout of the primary user interface of the application, encompassing the main text input, the results list, and the frame for context panes.
    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[4]||(e[4]=t(`
      The first `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" Border ")])),_:1,__:[0]}),e[5]||(e[5]=t(` is the container for the window contents. With the transparent window, the container seems to be the actual window.
      `)),e[6]||(e[6]=i("br",null,null,-1)),e[7]||(e[7]=i("br",null,null,-1)),e[8]||(e[8]=t(`
      The first nested `)),l(L,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" Border ")])),_:1,__:[1]}),e[9]||(e[9]=t(" is the results area, followed by the ")),l(L,{inline:""},{default:o(()=>e[2]||(e[2]=[t(" Frame ")])),_:1,__:[2]}),e[10]||(e[10]=t(" for context panes and then the nested ")),l(L,{inline:""},{default:o(()=>e[3]||(e[3]=[t(" Border ")])),_:1,__:[3]}),e[11]||(e[11]=t(` containing the search entry field.
    `))]),_:1,__:[4,5,6,7,8,9,10,11]})]))}}),Ds={class:"p-10"},Ms={style:{width:"calc(100% - 2.5rem)"}},Vs={style:{width:"calc(100% - 2.5rem)"}},Es=V({__name:"searchWindowCs",setup(a){return(s,e)=>(d(),k("div",Ds,[e[20]||(e[20]=t(`
    Contains the logic for the main interface, managing the search execution via `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" OnQueryChange ")])),_:1,__:[0]}),e[21]||(e[21]=t(" and ")),l(L,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" ProduceItems ")])),_:1,__:[1]}),e[22]||(e[22]=t(". It also runs ")),l(L,{inline:""},{default:o(()=>e[2]||(e[2]=[t(" OnSearchWindowStartup ")])),_:1,__:[2]}),e[23]||(e[23]=t(` for the plugins and exposes public properties for them.
    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[l(L,{inline:""},{default:o(()=>e[3]||(e[3]=[t(" OnQueryChange ")])),_:1,__:[3]}),e[7]||(e[7]=t(` will display a loading item and cancel previous runs of the handler, using a debounce to avoid running work for every keystroke.
      `)),i("div",Ms,[l(L,{lang:"cs"},{default:o(()=>e[4]||(e[4]=[t(`
            // cancel previous run
            _produceCts?.Cancel();
            _produceCts = new CancellationTokenSource();
            CancellationToken token = _produceCts.Token;
          `)])),_:1,__:[4]}),e[6]||(e[6]=t()),l(L,{lang:"cs"},{default:o(()=>e[5]||(e[5]=[t(`
            // debounce to avoid running work for every keystroke
            try
            {
              await Task.Delay((int)App.Current.Resources["Debounce"], token).ConfigureAwait(true);
            }
            catch (OperationCanceledException)
            {
              return;
            }
          `)])),_:1,__:[5]})])]),_:1,__:[7]}),e[24]||(e[24]=t()),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[l(L,{inline:""},{default:o(()=>e[8]||(e[8]=[t(" ProduceItems ")])),_:1,__:[8]}),e[18]||(e[18]=t(" is called from ")),l(L,{inline:""},{default:o(()=>e[9]||(e[9]=[t(" OnQueryChange ")])),_:1,__:[9]}),e[19]||(e[19]=t(` and runs in a task off the UI thread (prevents the window from freezing).
        `)),i("div",Vs,[l(L,{lang:"cs"},{default:o(()=>e[10]||(e[10]=[t(`
            try
            {
              // run work off the UI thread
              Results = (await Task.Run(() => ProduceItems(query), token).ConfigureAwait(true)).ToList();
            }
            catch (OperationCanceledException)
            {
              return;
            }
          `)])),_:1,__:[10]}),e[13]||(e[13]=t()),e[14]||(e[14]=i("br",null,null,-1)),e[15]||(e[15]=t()),l(L,{inline:""},{default:o(()=>e[11]||(e[11]=[t(" ProduceItems ")])),_:1,__:[11]}),e[16]||(e[16]=t(" will first go through the plugin special commands, then check for command signifiers, before calling each plugins' ")),l(L,{inline:""},{default:o(()=>e[12]||(e[12]=[t(" OnQueryChange ")])),_:1,__:[12]}),e[17]||(e[17]=t(` method.
        `))])]),_:1,__:[18,19]})]))}}),_s={class:"p-10"},Fs=V({__name:"keyboardHook",setup(a){return(s,e)=>(d(),k("div",_s,[e[5]||(e[5]=t(`
    A utility class that listens for key presses system-wide, allowing the
    application to respond to shortcuts when it is in the background.
    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[1]||(e[1]=t(`
      Obtained from `)),l(K,{blank:"",url:"https://web.archive.org/web/20141017230556/http://www.liensberger.it:80/web/blog/?p=207"},{default:o(()=>e[0]||(e[0]=[t(`
        here`)])),_:1,__:[0]}),e[2]||(e[2]=t()),e[3]||(e[3]=i("br",null,null,-1)),e[4]||(e[4]=t(`
      Written by Christian Liensberger
    `))]),_:1,__:[1,2,3,4]})]))}}),Rs={class:"p-10"},Qs=V({__name:"globalUsings",setup(a){return(s,e)=>(d(),k("div",Rs,[e[1]||(e[1]=t(`
    Declares the shared `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" using ")])),_:1,__:[0]}),e[2]||(e[2]=t(` directives once
    for the whole project to keep the files clean.
  `))]))}}),qs={class:"p-10"},Us=V({__name:"buildAndServeDocs",setup(a){return(s,e)=>(d(),k("div",qs,[e[5]||(e[5]=t(`
    A script to build the HTML API documentation pages from the files containing the source code.
    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[2]||(e[2]=t(`
      Uses the `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" QuokkaDocs ")])),_:1,__:[0]}),e[3]||(e[3]=t(" folder from the ")),l(L,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" site ")])),_:1,__:[1]}),e[4]||(e[4]=t(` branch.
    `))]),_:1,__:[2,3,4]})]))}}),Ks={class:"p-10"},Ws=V({__name:"buildSolution",setup(a){return(s,e)=>(d(),k("div",Ks,[e[1]||(e[1]=t(`
    A script used to build the solution, with editors that are not Microsoft Visual Studio. For example, the files in the `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" .vscode/ ")])),_:1,__:[0]}),e[2]||(e[2]=t(` utilize this script for the editor Microsoft Visual Studio Code.
  `))]))}}),Os={class:"p-10"},Ns=V({__name:"quokkaSln",setup(a){return(s,e)=>(d(),k("div",Os,[e[1]||(e[1]=t(`
    A Microsoft Visual Studio Solution File. Contains references to the solution items, like the `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" .editorconfig ")])),_:1,__:[0]}),e[2]||(e[2]=t(`, resources, like the different icons, every plugin project & the tests project.
  `))]))}}),Hs={class:"p-10"},js=V({__name:"appFont",setup(a){return(s,e)=>(d(),k("div",Hs,[e[5]||(e[5]=t(`
    The font for application text.
    `)),l(W,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[2]||(e[2]=t(`
      To customize, replace the file (keeping the name
      `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" AppFont.ttf ")])),_:1,__:[0]}),e[3]||(e[3]=t(`) and
      update the `)),l(L,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" AppFont ")])),_:1,__:[1]}),e[4]||(e[4]=t(`
      setting.
    `))]),_:1,__:[2,3,4]})]))}}),Gs={class:"p-10"},Ys=V({__name:"settingParsers",setup(a){return(s,e)=>(d(),k("div",Gs,[e[3]||(e[3]=t(`
    Contains all of the methods for parsing and evaluating different types of
    app settings.
    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[1]||(e[1]=t(`
      These are used in `)),l(K,{url:"/Quokka/documentation?section=under-hood&file=AppSettings.cs"},{default:o(()=>[l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" AppSettings.cs ")])),_:1,__:[0]})]),_:1}),e[2]||(e[2]=t(` and by some
      plugins.
    `))]),_:1,__:[1,2]})]))}}),Xs={class:"p-10"},Js=V({__name:"appPlugins",setup(a){return(s,e)=>(d(),k("div",Xs,[e[8]||(e[8]=t(`
    Contains the logic for loading plugins on startup.
    `)),l(W,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[2]||(e[2]=t(`
      All plugins are accessible through the
      `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" Plugins ")])),_:1,__:[0]}),e[3]||(e[3]=t(`
      property.
      `)),l(L,{lang:"cs"},{default:o(()=>e[1]||(e[1]=[t("public static Collection<Plugin> Plugins => plugins;")])),_:1,__:[1]})]),_:1,__:[2,3]}),e[9]||(e[9]=t()),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[6]||(e[6]=t(`
      Currently,
      `)),l(K,{blank:"",url:"https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection"},{default:o(()=>e[4]||(e[4]=[t(`
        reflection
      `)])),_:1,__:[4]}),e[7]||(e[7]=t(`
      is used to load plugins.
      `)),l(L,{lang:"cs"},{default:o(()=>e[5]||(e[5]=[t(`
        string dllPath = GetPluggerDll(plugin);
        Assembly _Assembly = Assembly.LoadFile(dllPath);
        var types = _Assembly.GetTypes()?.ToList();
        var type = types?.Find(a => typeof(Plugin).IsAssignableFrom(a));
        plugins.Add((Plugin)Activator.CreateInstance(type!)!);
      `)])),_:1,__:[5]})]),_:1,__:[6,7]})]))}}),Zs={class:"p-10"},ea=V({__name:"fuzzySearch",setup(a){return(s,e)=>(d(),k("div",Zs,[e[5]||(e[5]=t(`
    Contains 4 methods for using Fuzzy Searching; 2 for search (scoring
    similarity with cutoff) and 2 for sort (based off scores).
    `)),e[6]||(e[6]=i("br",null,null,-1)),e[7]||(e[7]=i("br",null,null,-1)),e[8]||(e[8]=t(`
    For each, there is a method that accepts a `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" Collection<string> ")])),_:1,__:[0]}),e[9]||(e[9]=t(` to search /
    sort through and a method that accepts a `)),l(L,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" Collection<ListItem> ")])),_:1,__:[1]}),e[10]||(e[10]=t()),l(W,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[3]||(e[3]=t(`
      The scorer and cutoff value are configurable. Quokka has a
      `)),l(K,{url:"/Quokka/documentation?section=settings"},{default:o(()=>e[2]||(e[2]=[t("general setting")])),_:1,__:[2]}),e[4]||(e[4]=t(`
      for the scorer while plugins may define their own, alongside the cutoff.
    `))]),_:1,__:[3,4]})]))}}),ta={class:"p-10"},na=V({__name:"IconCache",setup(a){return(s,e)=>(d(),k("div",ta,[e[5]||(e[5]=t(`
    A cache for `)),l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" ListItem ")])),_:1,__:[0]}),e[6]||(e[6]=t(" icon ")),l(L,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" ImageSource ")])),_:1,__:[1]}),e[7]||(e[7]=t(` objects.

    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[3]||(e[3]=t(`
      Since plugin methods are run in a `)),l(L,{inline:""},{default:o(()=>e[2]||(e[2]=[t(" Task ")])),_:1,__:[2]}),e[4]||(e[4]=t(`,
      the cache is used to save memory and ensure images are created on the UI
      thread.
    `))]),_:1,__:[3,4]})]))}}),la={class:"p-10"},oa=V({__name:"UiDispatcher",setup(a){return(s,e)=>(d(),k("div",la,[e[6]||(e[6]=t(`
    Provides methods for plugins to execute actions on the UI thread, ensuring
    thread safety.

    `)),l(W,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[4]||(e[4]=t(`
      This would be used, for example, to set an item's icon;
      `)),l(L,{lang:"cs"},{default:o(()=>e[0]||(e[0]=[t(`
        public TypedTextItem(string query, bool differentDesc)
        {
          Name = $"You typed \`{query}\`";
          Description = "Hit the enter key to copy the text";
          UiDispatcher.BeginInvoke(() =>
          {
            Icon = new BitmapImage(new Uri(
                Environment.CurrentDirectory + "\\\\PlugBoard\\\\PluginTypedText\\\\Plugin\\\\text.png"));
          });
      `)])),_:1,__:[0]}),e[5]||(e[5]=t()),i("blockquote",null,[e[2]||(e[2]=t(`
        This is a part of the
        `)),l(K,{url:"https://github.com/Faeq-F/Quokka-TypedText-Plugin",target:"_blank"},{default:o(()=>e[1]||(e[1]=[t(`
          TypedText plugin
        `)])),_:1,__:[1]}),e[3]||(e[3]=t(`
         (a demo plugin not made for use)
      `))])]),_:1,__:[4,5]})]))}}),ia={class:"p-10"},sa=V({__name:"plugin",setup(a){return(s,e)=>(d(),k("div",ia,[e[1]||(e[1]=t(`
    An abstract class all plugins must inherit from.
    `)),l(W,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>e[0]||(e[0]=[t(`
      Includes methods that allow plugins to trigger actions;
      `),i("ul",null,[i("li",null,"on application startup and shutdown"),t(),i("li",null,"on search window startup")],-1),t(),i("br",null,null,-1),t(`
      With methods to provide item list results;
      `),i("ul",null,[i("li",null,"on search query changes"),t(),i("li",null,"on the use of special commands and command signifiers")],-1)])),_:1,__:[0]})]))}}),aa={class:"p-10"},ra=V({__name:"aboutQuokkaItem",setup(a){return(s,e)=>(d(),k("div",aa,[e[1]||(e[1]=t(`
    The list item that appears when the user has entered the
    `)),l(K,{url:"/Quokka/documentation?section=settings"},{default:o(()=>[l(L,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" AboutCommand ")])),_:1,__:[0]})]),_:1}),e[2]||(e[2]=t(`
    special command.
  `))]))}}),ua={class:"p-10"},da=V({__name:"pluginQuokka",setup(a){return(s,e)=>(d(),k("div",ua,[e[1]||(e[1]=t(`
    Quokka's built-in utility plugin.
    `)),l(W,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>e[0]||(e[0]=[t(`
      Contains the following functionality:
      `),i("ul",null,[i("li",null,`
          Checking for updates manually & on startup
        `),t(),i("li",null,`
          Watching the settings file for changes to suggest a restart of the
          application
        `),t(),i("li",null,`
          Provides a view for licenses of software used by Quokka
        `),t(),i("li",null,`
          Provides useful links about Quokka
        `)],-1)])),_:1,__:[0]})]))}}),ma={".vs/":{description:"Stores temporary caches and user-specific workspace settings for Microsoft Visual Studio (settings are set to maintain shared conventions)."},".vscode/":{description:"Stores user-specific workspace settings for Microsoft Visual Studio Code (settings are set to maintain shared conventions)."},"AppFont.ttf":{component:"AppFont"},"** icons **":{description:"Icons used by the application and some plugins."},"** licenses (for the above files) **":{description:"License copies for the content in this folder."},"settings.json":{description:"The primary settings file for personalizing the application."},"** Plugin Submodule Repositories **":{description:"Plugin repositories managed as Git submodules for the Quokka repository."},"ItemContextPane.cs":{component:"ItemContextPane"},"ListItem.cs":{component:"ListItem"},"LoadingListItem.cs":{description:"The list item that appears while waiting for results to load."},"NoListItem.cs":{description:"The list item that appears when there are no results for a query."},"AppPlugins.cs":{component:"AppPlugins"},"FuzzySearch.cs":{component:"FuzzySearch"},"IconCache.cs":{component:"IconCache"},"Plugin.cs":{component:"Plugin"},"UiDispatcher.cs":{component:"UiDispatcher"},"KeyDown.cs":{component:"KeyDown"},"Scrollbar.xaml":{description:"Contains the visual design and control templates for the application scrollbars."},"SearchWindow.xaml":{component:"SearchWindow"},"SearchWindow.xaml.cs":{component:"SearchWindowCs"},"AppSettings.cs":{component:"AppSettings"},"SettingParsers.cs":{component:"SettingParsers"},"AboutQuokkaItem.cs":{component:"AboutQuokkaItem"},"ContextPane.xaml":{description:"The context pane that provides useful links about Quokka and a link to the licenses page."},"ContextPane.xaml.cs":{description:"Contains the methods for handling context pane item actions, including copying links to the clipboard."},"Licenses.xaml.cs":{description:"Contains the methods for handling license page actions, including copying links to the clipboard."},"Licenses.xaml":{description:"The licenses page that displays the licenses for the application and its dependencies."},"Plugin_Quokka.cs":{component:"PluginQuokka"},"SettingsFileWatcher.cs":{description:"Contains the logic for watching the settings file for changes, and displaying a suggestion to restart the application to apply changes."},"UpdateChecker.cs":{description:"Contains the logic for checking if updates are available and notifying the user of their version status."},"NotifyIconResources.xaml":{description:"Defines the UI for the tray task and its context menu."},"NotifyIconViewModel.cs":{description:"Contains the View Model (bindable properties) for the tray task."},"TrayTask.cs":{description:"Contains the methods used for the different actions in the tray task context menu."},"App.config":{description:"Configurations for the runtime."},"App.xaml":{description:"The entry point for the app. Starts the application without opening a window, allowing it to run quietly in the system tray. It defines global configurations for animation styles, error handling and other resources."},"App.xaml.cs":{component:"App"},"AssemblyInfo.cs":{description:"Defines the general information about, and defaults for, the assembly."},"KeyboardHook.cs":{component:"KeyboardHook"},"Quokka.csproj":{component:"Quokka"},"Quokka.csproj.user":{description:"Specifies the build actions and IDE contexts for the project files, ensuring XAML components are correctly compiled as UI pages and opened in the visual designer."},"app.manifest":{description:"Defines how the application interacts with Windows, for e.g. by including the User Account Control (UAC) execution levels, high DPI awareness, and OS compatibility settings."},"GlobalUsings.cs":{component:"GlobalUsings"},"** Test Files **":{description:"Unit tests for the source code."},"Tests.csproj":{description:"The tests project file; defines the project metadata, the target frameworks, and the NuGet dependencies used by the MSBuild system to compile the application."},".editorconfig":{description:"A configuration file enforcing consistent coding styles for everyone that works in the Quokka codebase."},".gitignore":{description:"A Git configuration file containing the files and folders ignored by Git."},".gitmodules":{description:"A Git configuration file containing every plugin as a Git submodule."},"BuildAndServeDocs.ps1":{component:"BuildAndServeDocs"},"BuildSolution.ps1":{component:"BuildSolution"},"Directory.Build.Props":{description:"Build settings for the project."},"IgnoredWords.txt":{description:"Words to ignore when Microsoft Visual Studio is spell checking the solution."},Version:{description:"Contains the latest version number of the application available & its download link. It is used when the app checks for updates."},"Quokka.sln":{component:"QuokkaSln"}},He={ItemContextPane:vs,App:xs,Quokka:Cs,ListItem:Is,AppSettings:Ps,KeyDown:As,SearchWindow:Ls,SearchWindowCs:Es,KeyboardHook:Fs,GlobalUsings:Qs,BuildAndServeDocs:Us,BuildSolution:Ws,QuokkaSln:Ns,AppFont:js,SettingParsers:Ys,AppPlugins:Js,FuzzySearch:ea,IconCache:na,UiDispatcher:oa,Plugin:sa,AboutQuokkaItem:ra,PluginQuokka:da},pa={class:"flex flex-col mt-22 mb-16 items-center"},fa={class:"flex items-center Varela text-3xl"},ga={class:"flex flex-col-reverse sm:flex-row sm:px-0 px-4 gap-2 w-full overflow-hidden"},va={key:1,class:"p-10"},ya=["innerHTML"],ca=V({__name:"underTheHood",setup(a){const s=H(),e=H(),n=H(),m=H(),u=(I,g)=>{let P=String(g.label);if(P.endsWith("/")&&P!=".vs/"&&P!=".vscode/"&&g.children)for(let y of g.children)u(I+P,y);g={...g,link:(I+(P.includes("*")?"":P)).replace("Faeq-F/Quokka/","https://github.com/Faeq-F/Quokka/tree/main/")},delete g.children,delete g.defaultExpanded,delete g.onSelect,delete g.icon,b.push(g)},p=f(Ht().fs);function f(I){return I.map(g=>!g.children||g.children.length===0?{...g,onSelect:y=>{Qe(`/documentation?section=under-hood&file=${g.label}`)}}:g.children?{...g,children:f(g.children)}:g)}const b=[];u("",p[0]);const v=H(),C=Lt();if(C.query.file){const I=p.find(g=>{var P;return((P=g.label)==null?void 0:P.replace(" ","%20"))==C.query.file});I&&(v.value=I)}const x=I=>{console.log("switchSectionTo called with:",I),I?(v.value=h(p,I),console.log("selectedItem set to:",v.value),v.value==null&&(v.value=null)):v.value=null,console.log("Final selectedItem:",v.value)},h=(I,g)=>{for(const P of I){if(P.label===g)return P;if(P.children&&P.children.length>0){const y=h(P.children,g);if(y)return y}}},B=D(()=>{var P;if(!((P=v.value)!=null&&P.label))return console.log("No selectedItem.label",v.value),null;const I=v.value.label;console.log("Looking for label:",I,"in contentMappings");const g=ma[I]||null;return console.log("Found result:",g),g}),z=D(()=>{var I;return((I=v.value)==null?void 0:I.label)||"default"}),T=D(()=>{var g,P;if(!B.value)return!1;const I=((g=B.value)==null?void 0:g.component)||((P=B.value)==null?void 0:P.customComponent);return I&&I in He}),c=D(()=>{var g,P;if(!B.value)return null;const I=((g=B.value)==null?void 0:g.component)||((P=B.value)==null?void 0:P.customComponent);return!I||!(I in He)?null:He[I]}),w=D(()=>{var I;return B.value?(I=B.value)==null?void 0:I.description:!1}),A=D(()=>{var I;return(I=B.value)!=null&&I.description?B.value.description:null}),S=D(()=>{var I,g;return(I=v.value)!=null&&I.label?(g=b.find(P=>P.label===v.value.label))==null?void 0:g.link:null});return ye(()=>C.query.file,x,{immediate:!0}),(I,g)=>{const P=X,y=Ki,E=se;return d(),k("div",null,[i("div",pa,[i("div",fa,[l(P,{name:"i-lucide-folder-open-dot",class:"mr-2"}),g[2]||(g[2]=t(` Under the hood
      `))]),g[3]||(g[3]=t()),g[4]||(g[4]=i("div",{class:"text-md outfit"},"The inner workings of the application",-1))]),g[10]||(g[10]=t()),i("div",ga,[l(E,{class:"w-xl list-none max-h-[85vh] mb-4 resize-x"},{default:o(()=>[i("div",{class:"max-h-full h-full max-w-full w-full overflow-y-scroll",ref_key:"fsLenisWrapper",ref:e},[l(r(je),{root:"",options:{autoRaf:!0,lerp:.1,content:r(s),wrapper:r(e)}},null,8,["options"]),g[5]||(g[5]=t()),i("div",{class:"w-full",ref_key:"fsLenisContent",ref:s},[l(y,{items:r(p),color:"neutral",modelValue:r(v),"onUpdate:modelValue":g[0]||(g[0]=q=>kn(v)?v.value=q:null),class:"!ml-0"},null,8,["items","modelValue"])],512)],512)]),_:1}),g[9]||(g[9]=t()),l(E,{class:"w-full mb-4 max-h-[85vh] h-[85vh]",padding:!1},{default:o(()=>[i("div",{class:"max-h-full h-full max-w-full w-full overflow-y-scroll transition-all ease-out duration-100 delay-200",ref_key:"ContentLenisWrapper",ref:m},[l(r(je),{root:"",options:{autoRaf:!0,lerp:.1,content:r(n),wrapper:r(m)}},null,8,["options"]),g[8]||(g[8]=t()),i("div",{class:"w-full p-4",ref_key:"ContentLenisContent",ref:n},[l(Dt,{name:"fade"},{default:o(()=>[r(v)?(d(),k("div",{key:r(z)},[r(v)?(d(),M(ds,{key:0,link:r(S),item:r(v)},null,8,["link","item"])):R("",!0),g[6]||(g[6]=t()),r(w)?(d(),k("div",va,[r(A)?(d(),k("div",{key:0,innerHTML:r(A)},null,8,ya)):R("",!0)])):R("",!0),g[7]||(g[7]=t()),r(T)?(d(),M(Re(r(c)),{key:2})):R("",!0)])):(d(),M(us,{key:0,onSelect:g[1]||(g[1]=q=>("navigateTo"in I?I.navigateTo:r(Qe))(`/documentation?section=under-hood&file=${q.label}`))}))]),_:1})],512)],512)]),_:1})])])}}}),ba=Je(ca,[["__scopeId","data-v-86f80f19"]]),ka={class:"flex justify-between"},xa={class:"flex"},wa={key:0,class:"flex items-center justify-start p-2 varela sm:text-md text-sm"},Sa={key:0,class:"flex items-center"},Ta={class:"justify-end items-center sm:flex hidden"},Ca={class:"flex"},ha={__name:"index",setup(a){let s=H({section:"documentation",icon:""});const e=Lt();e.query.section&&(s.value=e.query.section);const n=yl(),m=n.toc.map(T=>{var c;return(c=T.children)!=null&&c.length?{...T,children:T.children.map(w=>({...w,onSelect:A=>Qe("/documentation?section="+w.section)}))}:{...T,onSelect:w=>Qe("/documentation?section="+T.section)}});ye(()=>e.query.section,T=>{T?(s.value=m.find(c=>c.section==T.replace("/documentation?section=","")),s.value===void 0&&(s.value=m[1].children.find(c=>c.section==T.replace("/documentation?section=","")))):s.value={section:"documentation",icon:""}},{immediate:!0});const p=H(!1),f=H(!1),b=H(23),v=H("padding-left:23rem;padding-right:23rem;"),C=H("padding-left:17.625rem;padding-right:17.625rem;"),x=T=>{v.value=`padding-left:${T}rem;padding-right:${T}rem;`,C.value=`padding-left:${T-5.375}rem;padding-right:${T-5.375}rem;`};ye(f,async(T,c)=>{f.value?x(b.value):x(7)}),Mt().isMobile&&(f.value=!0,b.value=2);const B=H(),z=H();return(T,c)=>{const w=Bt,A=ke,S=X,I=xn,g=vl,P=In;return d(),k("div",null,[i("div",ka,[i("div",xa,[l(w,{class:"m-2 p-1",color:"neutral",variant:"ghost",icon:"i-lucide-book-text",to:"/documentation"},{default:o(()=>c[5]||(c[5]=[t(`
          Documentation
        `)])),_:1,__:[5]}),c[12]||(c[12]=t()),r(s).section!="documentation"?(d(),k("div",wa,[l(A,{orientation:"vertical",class:"mr-4",ui:{border:"dark:border-gray-600 border-l-[0.5px] h-full"}}),c[11]||(c[11]=t()),l(I,{direction:"right",duration:500,class:"flex items-center pt-0.5"},{default:o(()=>[r(s).section=="tray-task"||r(s).section=="plugins"||r(s).section=="commands"?(d(),k("div",Sa,[l(S,{name:"i-lucide-chevron-right",class:"mr-2"}),c[6]||(c[6]=t()),l(S,{name:"i-lucide-pointer",class:"px-3"}),c[7]||(c[7]=t()),c[8]||(c[8]=i("span",{class:"mr-2"},"How to Use",-1))])):R("",!0),c[9]||(c[9]=t()),l(S,{name:"i-lucide-chevron-right",class:"mr-2"}),c[10]||(c[10]=t()),l(S,{name:r(s).icon,class:"px-3"},null,8,["name"]),t(" "+U(r(s).label+" "),1)]),_:1,__:[9,10]})])):R("",!0)]),c[15]||(c[15]=t()),i("div",Ta,[f.value&&r(s).section!="api-documentation"&&b.value!=23?(d(),M(I,{key:0,direction:"left",duration:500},{default:o(()=>[l(w,{class:"mr-2",color:"neutral",variant:"ghost",icon:"i-lucide-rotate-ccw",onClick:c[0]||(c[0]=y=>{b.value=23,x(23)})})]),_:1})):R("",!0),c[13]||(c[13]=t()),f.value&&r(s).section!="api-documentation"?(d(),M(I,{key:1,direction:"left",duration:500},{default:o(()=>[l(g,{modelValue:b.value,"onUpdate:modelValue":[c[1]||(c[1]=y=>b.value=y),x],min:7,max:40,step:.125,color:"neutral",class:"w-64 mr-2",style:{"--ui-bg-inverted":"var(--ui-bg-accented)"},size:"xs",tooltip:{text:`${b.value} rem`,delayDuration:200}},null,8,["modelValue","tooltip"])]),_:1})):R("",!0),c[14]||(c[14]=t()),l(w,{class:"mr-2",color:"neutral",variant:"ghost",icon:r(s).section=="api-documentation"?"i-lucide-fold-horizontal":f.value?"i-lucide-unfold-horizontal":"i-lucide-fold-horizontal",onClick:c[2]||(c[2]=y=>f.value=!f.value),style:ce(r(s).section=="api-documentation"?"cursor: not-allowed !important;":""),disabled:r(s).section=="api-documentation"},null,8,["icon","style","disabled"])])]),c[20]||(c[20]=t()),l(A,{ui:{border:"dark:border-gray-600 border-l-[0.5px] w-full"}}),c[21]||(c[21]=t()),i("div",Ca,[i("div",{class:"flex flex-col justify-between w-11 hover:w-64 transition-all duration-200 ease-out delay-200",onMouseenter:c[3]||(c[3]=y=>p.value=!0),onMouseleave:c[4]||(c[4]=y=>p.value=!1)},[l(P,{orientation:"vertical",items:r(m),class:"p-1 outfit",ui:{childList:p.value?"sm:ms-5 ms-0 transition-all duration-200 ease-out delay-300":"ms-0 transition-all duration-200 ease-out delay-300",childItem:"ps-0.5",linkLabel:"!font-light",linkTrailingIcon:p.value?"":"!hidden"}},null,8,["items","ui"]),c[16]||(c[16]=t()),l(P,{orientation:"vertical",items:r(n).links,class:"p-1 outfit",ui:{linkLabel:"!font-light"},externalIcon:!1},null,8,["items"])],32),c[18]||(c[18]=t()),l(A,{orientation:" vertical",class:"h-[90vh]",ui:{border:"dark:border-gray-600 border-l-[0.5px] h-full"}}),c[19]||(c[19]=t()),i("div",{style:ce(r(s).section=="api-documentation"?"":p.value?C.value:v.value),class:"docsContent max-h-[90vh] min-h-[90vh] overflow-y-scroll w-full outfit transition-all ease-out duration-100 delay-200",ref_key:"LenisWrapper",ref:B},[l(r(je),{root:"",options:{autoRaf:!0,lerp:.1,anchors:!0,content:z.value,wrapper:B.value}},null,8,["options"]),c[17]||(c[17]=t()),i("div",{ref_key:"LenisContent",ref:z,class:"h-full sm:w-full w-15/17"},[l(Dt,{name:"fade"},{default:o(()=>[r(s).section=="documentation"?(d(),M(zl,{key:0})):r(s).section=="api-documentation"?(d(),M(Bl,{key:1})):r(s).section=="build-app"?(d(),M(Fl,{key:2})):r(s).section=="under-hood"?(d(),M(ba,{key:3})):r(s).section=="commands"?(d(),M(no,{key:4})):r(s).section=="creating-plugin"?(d(),M(Ho,{key:5})):r(s).section=="faq"?(d(),M(Yo,{key:6})):r(s).section=="general-usage"?(d(),M(si,{key:7})):r(s).section=="installation"?(d(),M(mi,{key:8})):r(s).section=="plugins"?(d(),M(vi,{key:9})):r(s).section=="settings"?(d(),M(Ai,{key:10})):r(s).section=="tray-task"?(d(),M(Qi,{key:11})):R("",!0)]),_:1})],512)],4)])])}}},Ia=Je(ha,[["__scopeId","data-v-dcd9a41d"]]),qa=Object.freeze(Object.defineProperty({__proto__:null,default:Ia},Symbol.toStringTag,{value:"Module"}));export{qa as i,nt as m};
