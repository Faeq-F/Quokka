const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DJMhiMSy.js","./Bg583gu4.js","./entry.DIzStuzL.css","./DGXw9EZd.js","./BqW3yR4h.js","./MazBtn.DFN6YJBR.css","./DbltGogt.js","./MazCheckbox.2xvyNNo8.css","./DI9Jwsez.js","./MazInput.DF3oLrKh.css","./DF_zngiB.js","./MazLoadingBar.BrZSeUTe.css","./B7M6geOz.js","./BbAPKbSN.js","./CdGA5zwy.js","./dJsIb9ER.js","./MazSelect.C94zcw4Q.css","./T2IkHd0c.js","./D_AxpaR3.js","./Cb5MiNlF.js","./BO-NUMA0.js","./MazAnimatedElement.BcyH_d_g.css","./j8odzbvn.js","./BNnZldJ-.js","./2665XrWT.js","./CEihHZAR.js","./MazCardSpotlight.C4TP0KJ5.css","./Zfhy4p2B.js","./C9ieiDLN.js","./CYhIZ21u.js","./Cpj98o6Y.js","./prism-normalize-whitespace.fcu910Ie.css","./MazAccordion.nnvH5ZD6.css","./BY0viLjf.js","./C0yhTMgp.js","./MazSpinner.B9GPzNo6.css","./fullscreen-img.directive.iBJS4ZIO.css","./MazTableTitle.Wnk-8CLL.css","./C3u73O0y.js","./MazIcon.DCwuuObN.css"])))=>i.map(i=>d[i]);
import{m as It,f as ae,g as re,n as M,a0 as nn,a1 as ln,a2 as Te,h as R,a3 as qe,a4 as he,a5 as Re,r as H,a6 as Ie,y as L,o as p,w as o,b as l,i as r,R as be,s as O,a7 as on,K as ye,B as te,a8 as sn,c as S,C as ne,F as G,I as Ge,a9 as $t,W as Pt,aa as an,ab as vt,ac as Se,X as ce,A as _e,p as _,ad as rn,ae as un,af as dn,ag as Fe,z as ze,ah as yt,v as ct,x as mn,M as Ye,ai as zt,O as Bt,aj as pn,P as Ce,d as t,q as j,S as Xe,a as i,j as X,t as W,e as At,ak as fn,l as We,al as gn,T as vn,k as Oe,am as yn,an as cn,ao as bn,ap as kn,D as Be,E as bt,aq as Qe,Q as Mt,_ as Je,ar as Ke,V as Lt,as as je,G as xn,at as Dt}from"./Bg583gu4.js";import{_ as ke}from"./Cb5MiNlF.js";import{M as wn}from"./BO-NUMA0.js";import{u as Ze,a as Sn,b as Tn,_ as Cn,c as hn,d as In,e as $n}from"./j8odzbvn.js";import{M as se}from"./CEihHZAR.js";import{u as Pn}from"./Zfhy4p2B.js";import{_ as D,M as Ae}from"./C9ieiDLN.js";import{_ as U,M as kt,d as xt}from"./BY0viLjf.js";import{u as Vt,a as zn}from"./BNnZldJ-.js";import{M as Bn}from"./BbAPKbSN.js";import{u as An}from"./dJsIb9ER.js";import{u as Et}from"./2665XrWT.js";import{u as Ft}from"./D_AxpaR3.js";const Mn=It(ae(()=>re(()=>import("./DJMhiMSy.js"),__vite__mapDeps([0,1,2]),import.meta.url))),wt=It(ae(()=>re(()=>import("./DGXw9EZd.js"),__vite__mapDeps([3,1,2]),import.meta.url)));function Ln(a){return M(()=>{var s;return nn(a)?!!((s=ln(a))!=null&&s.closest("form")):!0})}const Dn="rovingFocusGroup.onEntryFocus",Vn={bubbles:!1,cancelable:!0},Rt={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function En(a,s){return s!=="rtl"?a:a==="ArrowLeft"?"ArrowRight":a==="ArrowRight"?"ArrowLeft":a}function Fn(a,s,e){const n=En(a.key,e);if(!(s==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(s==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return Rt[n]}function _t(a,s=!1){const e=Te();for(const n of a)if(n===e||(n.focus({preventScroll:s}),Te()!==e))return}function Rn(a,s){return a.map((e,n)=>a[(s+n)%a.length])}const[_n,Kn]=qe("RovingFocusGroup"),qn=R({__name:"RovingFocusGroup",props:{orientation:{default:void 0},dir:{},loop:{type:Boolean,default:!1},currentTabStopId:{},defaultCurrentTabStopId:{},preventScrollOnEntryFocus:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["entryFocus","update:currentTabStopId"],setup(a,{expose:s,emit:e}){const n=a,d=e,{loop:u,orientation:m,dir:g}=he(n),b=Ze(g),v=Re(n,"currentTabStopId",d,{defaultValue:n.defaultCurrentTabStopId,passive:n.currentTabStopId===void 0}),C=H(!1),k=H(!1),h=H(0),{getItems:A,CollectionSlot:z}=Ie({isProvider:!0});function T(x){const B=!k.value;if(x.currentTarget&&x.target===x.currentTarget&&B&&!C.value){const w=new CustomEvent(Dn,Vn);if(x.currentTarget.dispatchEvent(w),d("entryFocus",w),!w.defaultPrevented){const I=A().map(V=>V.ref).filter(V=>V.dataset.disabled!==""),f=I.find(V=>V.getAttribute("data-active")===""),P=I.find(V=>V.id===v.value),y=[f,P,...I].filter(Boolean);_t(y,n.preventScrollOnEntryFocus)}}k.value=!1}function c(){setTimeout(()=>{k.value=!1},1)}return s({getItems:A}),Kn({loop:u,dir:b,orientation:m,currentTabStopId:v,onItemFocus:x=>{v.value=x},onItemShiftTab:()=>{C.value=!0},onFocusableItemAdd:()=>{h.value++},onFocusableItemRemove:()=>{h.value--}}),(x,B)=>(p(),L(r(z),null,{default:o(()=>[l(r(be),{tabindex:C.value||h.value===0?-1:0,"data-orientation":r(m),as:x.as,"as-child":x.asChild,dir:r(b),style:{outline:"none"},onMousedown:B[0]||(B[0]=w=>k.value=!0),onMouseup:c,onFocus:T,onBlur:B[1]||(B[1]=w=>C.value=!1)},{default:o(()=>[O(x.$slots,"default")]),_:3},8,["tabindex","data-orientation","as","as-child","dir"])]),_:3}))}}),St=R({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{},value:{},checked:{type:Boolean,default:void 0},required:{type:Boolean},disabled:{type:Boolean},feature:{default:"fully-hidden"}},setup(a){const s=a,{primitiveElement:e,currentElement:n}=on(),d=M(()=>s.checked??s.value);return ye(d,(u,m)=>{if(!n.value)return;const g=n.value,b=window.HTMLInputElement.prototype,C=Object.getOwnPropertyDescriptor(b,"value").set;if(C&&u!==m){const k=new Event("input",{bubbles:!0}),h=new Event("change",{bubbles:!0});C.call(g,u),g.dispatchEvent(k),g.dispatchEvent(h)}}),(u,m)=>(p(),L(sn,te({ref_key:"primitiveElement",ref:e},{...s,...u.$attrs},{as:"input"}),null,16))}}),Wn=R({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{},value:{},checked:{type:Boolean,default:void 0},required:{type:Boolean},disabled:{type:Boolean},feature:{default:"fully-hidden"}},setup(a){const s=a,e=M(()=>typeof s.value=="object"&&Array.isArray(s.value)&&s.value.length===0&&s.required),n=M(()=>typeof s.value=="string"||typeof s.value=="number"||typeof s.value=="boolean"?[{name:s.name,value:s.value}]:typeof s.value=="object"&&Array.isArray(s.value)?s.value.flatMap((d,u)=>typeof d=="object"?Object.entries(d).map(([m,g])=>({name:`[${s.name}][${u}][${m}]`,value:g})):{name:`[${s.name}][${u}]`,value:d}):s.value!==null&&typeof s.value=="object"&&!Array.isArray(s.value)?Object.entries(s.value).map(([d,u])=>({name:`[${s.name}][${d}]`,value:u})):[]);return(d,u)=>e.value?(p(),L(St,te({key:d.name},{...s,...d.$attrs},{name:d.name,value:d.value}),null,16,["name","value"])):(p(!0),S(G,{key:1},ne(n.value,m=>(p(),L(St,te({key:m.name,ref_for:!0},{...s,...d.$attrs},{name:m.name,value:m.value}),null,16,["name","value"]))),128))}}),On=R({__name:"RovingFocusItem",props:{tabStopId:{},focusable:{type:Boolean,default:!0},active:{type:Boolean},allowShiftKey:{type:Boolean},asChild:{type:Boolean},as:{default:"span"}},setup(a){const s=a,e=_n(),n=Sn(),d=M(()=>s.tabStopId||n),u=M(()=>e.currentTabStopId.value===d.value),{getItems:m,CollectionItem:g}=Ie();Ge(()=>{s.focusable&&e.onFocusableItemAdd()}),$t(()=>{s.focusable&&e.onFocusableItemRemove()});function b(v){if(v.key==="Tab"&&v.shiftKey){e.onItemShiftTab();return}if(v.target!==v.currentTarget)return;const C=Fn(v,e.orientation.value,e.dir.value);if(C!==void 0){if(v.metaKey||v.ctrlKey||v.altKey||!s.allowShiftKey&&v.shiftKey)return;v.preventDefault();let k=[...m().map(h=>h.ref).filter(h=>h.dataset.disabled!=="")];if(C==="last")k.reverse();else if(C==="prev"||C==="next"){C==="prev"&&k.reverse();const h=k.indexOf(v.currentTarget);k=e.loop.value?Rn(k,h+1):k.slice(h+1)}Pt(()=>_t(k))}}return(v,C)=>(p(),L(r(g),null,{default:o(()=>[l(r(be),{tabindex:u.value?0:-1,"data-orientation":r(e).orientation.value,"data-active":v.active?"":void 0,"data-disabled":v.focusable?void 0:"",as:v.as,"as-child":v.asChild,onMousedown:C[0]||(C[0]=k=>{v.focusable?r(e).onItemFocus(d.value):k.preventDefault()}),onFocus:C[1]||(C[1]=k=>r(e).onItemFocus(d.value)),onKeydown:b},{default:o(()=>[O(v.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}});function Un(a){const s=an("",1e3);return{search:s,handleTypeaheadSearch:(d,u)=>{s.value=s.value+d;{const m=Te(),g=u.map(h=>{var A,z;return{...h,textValue:((A=h.value)==null?void 0:A.textValue)??((z=h.ref.textContent)==null?void 0:z.trim())??""}}),b=g.find(h=>h.ref===m),v=g.map(h=>h.textValue),C=Nn(v,s.value,b==null?void 0:b.textValue),k=g.find(h=>h.textValue===C);return k&&k.ref.focus(),k==null?void 0:k.ref}},resetTypeahead:()=>{s.value=""}}}function Qn(a,s){return a.map((e,n)=>a[(s+n)%a.length])}function Nn(a,s,e){const d=s.length>1&&Array.from(s).every(v=>v===s[0])?s[0]:s,u=e?a.indexOf(e):-1;let m=Qn(a,Math.max(u,0));d.length===1&&(m=m.filter(v=>v!==e));const b=m.find(v=>v.toLowerCase().startsWith(d.toLowerCase()));return b!==e?b:void 0}function Ne(a,s,e){const n=a.findIndex(g=>vt(g,s)),d=a.findIndex(g=>vt(g,e));if(n===-1||d===-1)return[];const[u,m]=[n,d].sort((g,b)=>g-b);return a.slice(u,m+1)}function Kt(a,s=Number.NEGATIVE_INFINITY,e=Number.POSITIVE_INFINITY){return Math.min(e,Math.max(s,a))}function Hn(a=[],s,e){const n=[...a];return n[e]=s,n.sort((d,u)=>d-u)}function qt(a,s,e){const u=100/(e-s)*(a-s);return Kt(u,0,100)}function jn(a,s){return s>2?`Value ${a+1} of ${s}`:s===2?["Minimum","Maximum"][a]:void 0}function Gn(a,s){if(a.length===1)return 0;const e=a.map(d=>Math.abs(d-s)),n=Math.min(...e);return e.indexOf(n)}function Yn(a,s,e){const n=a/2,u=et([0,50],[0,n]);return(n-u(s)*e)*e}function Xn(a){return a.slice(0,-1).map((s,e)=>a[e+1]-s)}function Jn(a,s){if(s>0){const e=Xn(a);return Math.min(...e)>=s}return!0}function et(a,s){return e=>{if(a[0]===a[1]||s[0]===s[1])return s[0];const n=(s[1]-s[0])/(a[1]-a[0]);return s[0]+n*(e-a[0])}}function Zn(a){return(String(a).split(".")[1]||"").length}function el(a,s){const e=10**s;return Math.round(a*e)/e}const Wt=["PageUp","PageDown"],Ot=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Ut={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},[Qt,Nt]=qe(["SliderVertical","SliderHorizontal"]),Ht=R({__name:"SliderImpl",props:{asChild:{type:Boolean},as:{default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(a,{emit:s}){const e=a,n=s,d=$e();return(u,m)=>(p(),L(r(be),te({"data-slider-impl":""},e,{onKeydown:m[0]||(m[0]=g=>{g.key==="Home"?(n("homeKeyDown",g),g.preventDefault()):g.key==="End"?(n("endKeyDown",g),g.preventDefault()):r(Wt).concat(r(Ot)).includes(g.key)&&(n("stepKeyDown",g),g.preventDefault())}),onPointerdown:m[1]||(m[1]=g=>{const b=g.target;b.setPointerCapture(g.pointerId),g.preventDefault(),r(d).thumbElements.value.includes(b)?b.focus():n("slideStart",g)}),onPointermove:m[2]||(m[2]=g=>{g.target.hasPointerCapture(g.pointerId)&&n("slideMove",g)}),onPointerup:m[3]||(m[3]=g=>{const b=g.target;b.hasPointerCapture(g.pointerId)&&(b.releasePointerCapture(g.pointerId),n("slideEnd",g))})}),{default:o(()=>[O(u.$slots,"default")]),_:3},16))}}),tl=R({__name:"SliderHorizontal",props:{dir:{},min:{},max:{},inverted:{type:Boolean}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(a,{emit:s}){const e=a,n=s,{max:d,min:u,dir:m,inverted:g}=he(e),{forwardRef:b,currentElement:v}=Se(),C=$e(),k=H(),h=H(),A=M(()=>(m==null?void 0:m.value)==="ltr"&&!g.value||(m==null?void 0:m.value)!=="ltr"&&g.value);function z(T,c){const x=h.value||v.value.getBoundingClientRect(),B=[...C.thumbElements.value][C.valueIndexToChangeRef.value],w=C.thumbAlignment.value==="contain"?B.clientWidth:0;!k.value&&!c&&C.thumbAlignment.value==="contain"&&(k.value=T.clientX-B.getBoundingClientRect().left);const I=[0,x.width-w],f=A.value?[u.value,d.value]:[d.value,u.value],P=et(I,f);h.value=x;const y=c?T.clientX-x.left-w/2:T.clientX-x.left-(k.value??0);return P(y)}return Nt({startEdge:A.value?"left":"right",endEdge:A.value?"right":"left",direction:A.value?1:-1,size:"width"}),(T,c)=>(p(),L(Ht,{ref:r(b),dir:r(m),"data-orientation":"horizontal",style:ce({"--reka-slider-thumb-transform":!A.value&&r(C).thumbAlignment.value==="overflow"?"translateX(50%)":"translateX(-50%)"}),onSlideStart:c[0]||(c[0]=x=>{const B=z(x,!0);n("slideStart",B)}),onSlideMove:c[1]||(c[1]=x=>{const B=z(x);n("slideMove",B)}),onSlideEnd:c[2]||(c[2]=()=>{h.value=void 0,k.value=void 0,n("slideEnd")}),onStepKeyDown:c[3]||(c[3]=x=>{const B=A.value?"from-left":"from-right",w=r(Ut)[B].includes(x.key);n("stepKeyDown",x,w?-1:1)}),onEndKeyDown:c[4]||(c[4]=x=>n("endKeyDown",x)),onHomeKeyDown:c[5]||(c[5]=x=>n("homeKeyDown",x))},{default:o(()=>[O(T.$slots,"default")]),_:3},8,["dir","style"]))}}),nl=R({__name:"SliderVertical",props:{min:{},max:{},inverted:{type:Boolean}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(a,{emit:s}){const e=a,n=s,{max:d,min:u,inverted:m}=he(e),g=$e(),{forwardRef:b,currentElement:v}=Se(),C=H(),k=H(),h=M(()=>!m.value);function A(z,T){const c=k.value||v.value.getBoundingClientRect(),x=[...g.thumbElements.value][g.valueIndexToChangeRef.value],B=g.thumbAlignment.value==="contain"?x.clientHeight:0;!C.value&&!T&&g.thumbAlignment.value==="contain"&&(C.value=z.clientY-x.getBoundingClientRect().top);const w=[0,c.height-B],I=h.value?[d.value,u.value]:[u.value,d.value],f=et(w,I),P=T?z.clientY-c.top-B/2:z.clientY-c.top-(C.value??0);return k.value=c,f(P)}return Nt({startEdge:h.value?"bottom":"top",endEdge:h.value?"top":"bottom",size:"height",direction:h.value?1:-1}),(z,T)=>(p(),L(Ht,{ref:r(b),"data-orientation":"vertical",style:ce({"--reka-slider-thumb-transform":!h.value&&r(g).thumbAlignment.value==="overflow"?"translateY(-50%)":"translateY(50%)"}),onSlideStart:T[0]||(T[0]=c=>{const x=A(c,!0);n("slideStart",x)}),onSlideMove:T[1]||(T[1]=c=>{const x=A(c);n("slideMove",x)}),onSlideEnd:T[2]||(T[2]=()=>{k.value=void 0,C.value=void 0,n("slideEnd")}),onStepKeyDown:T[3]||(T[3]=c=>{const x=h.value?"from-bottom":"from-top",B=r(Ut)[x].includes(c.key);n("stepKeyDown",c,B?-1:1)}),onEndKeyDown:T[4]||(T[4]=c=>n("endKeyDown",c)),onHomeKeyDown:T[5]||(T[5]=c=>n("homeKeyDown",c))},{default:o(()=>[O(z.$slots,"default")]),_:3},8,["style"]))}}),[$e,ll]=qe("SliderRoot"),ol=R({inheritAttrs:!1,__name:"SliderRoot",props:{defaultValue:{default:()=>[0]},modelValue:{},disabled:{type:Boolean,default:!1},orientation:{default:"horizontal"},dir:{},inverted:{type:Boolean,default:!1},min:{default:0},max:{default:100},step:{default:1},minStepsBetweenThumbs:{default:0},thumbAlignment:{default:"contain"},asChild:{type:Boolean},as:{default:"span"},name:{},required:{type:Boolean}},emits:["update:modelValue","valueCommit"],setup(a,{emit:s}){const e=a,n=s,{min:d,max:u,step:m,minStepsBetweenThumbs:g,orientation:b,disabled:v,thumbAlignment:C,dir:k}=he(e),h=Ze(k),{forwardRef:A,currentElement:z}=Se(),T=Ln(z),{CollectionSlot:c}=Ie({isProvider:!0}),x=Re(e,"modelValue",n,{defaultValue:e.defaultValue,passive:e.modelValue===void 0}),B=M(()=>Array.isArray(x.value)?[...x.value]:[]),w=H(0),I=H(B.value);function f(F){const q=Gn(B.value,F);V(F,q)}function P(F){V(F,w.value)}function y(){const F=I.value[w.value];B.value[w.value]!==F&&n("valueCommit",rn(B.value))}function V(F,q,{commit:Y}={commit:!1}){var me;const le=Zn(m.value),ue=el(Math.round((F-d.value)/m.value)*m.value+d.value,le),de=Kt(ue,d.value,u.value),oe=Hn(B.value,de,q);if(Jn(oe,g.value*m.value)){w.value=oe.indexOf(de);const ie=String(oe)!==String(x.value);ie&&Y&&n("valueCommit",oe),ie&&((me=K.value[w.value])==null||me.focus(),x.value=oe)}}const K=H([]);return ll({modelValue:x,currentModelValue:B,valueIndexToChangeRef:w,thumbElements:K,orientation:b,min:d,max:u,disabled:v,thumbAlignment:C}),(F,q)=>(p(),L(r(c),null,{default:o(()=>[(p(),L(_e(r(b)==="horizontal"?tl:nl),te(F.$attrs,{ref:r(A),"as-child":F.asChild,as:F.as,min:r(d),max:r(u),dir:r(h),inverted:F.inverted,"aria-disabled":r(v),"data-disabled":r(v)?"":void 0,onPointerdown:q[0]||(q[0]=()=>{r(v)||(I.value=B.value)}),onSlideStart:q[1]||(q[1]=Y=>!r(v)&&f(Y)),onSlideMove:q[2]||(q[2]=Y=>!r(v)&&P(Y)),onSlideEnd:q[3]||(q[3]=Y=>!r(v)&&y()),onHomeKeyDown:q[4]||(q[4]=Y=>!r(v)&&V(r(d),0,{commit:!0})),onEndKeyDown:q[5]||(q[5]=Y=>!r(v)&&V(r(u),B.value.length-1,{commit:!0})),onStepKeyDown:q[6]||(q[6]=(Y,le)=>{if(!r(v)){const oe=r(Wt).includes(Y.key)||Y.shiftKey&&r(Ot).includes(Y.key)?10:1,me=w.value,ie=B.value[me],ee=r(m)*oe*le;V(ie+ee,me,{commit:!0})}})}),{default:o(()=>[O(F.$slots,"default",{modelValue:r(x)}),r(T)&&F.name?(p(),L(r(Wn),{key:0,type:"number",value:r(x),name:F.name,required:F.required,disabled:r(v),step:r(m)},null,8,["value","name","required","disabled","step"])):_("",!0)]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}))}}),il=R({__name:"SliderRange",props:{asChild:{type:Boolean},as:{default:"span"}},setup(a){const s=$e(),e=Qt();Se();const n=M(()=>s.currentModelValue.value.map(m=>qt(m,s.min.value,s.max.value))),d=M(()=>s.currentModelValue.value.length>1?Math.min(...n.value):0),u=M(()=>100-Math.max(...n.value,0));return(m,g)=>(p(),L(r(be),{"data-disabled":r(s).disabled.value?"":void 0,"data-orientation":r(s).orientation.value,"as-child":m.asChild,as:m.as,style:ce({[r(e).startEdge]:`${d.value}%`,[r(e).endEdge]:`${u.value}%`})},{default:o(()=>[O(m.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}}),sl=R({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{},asChild:{type:Boolean},as:{}},setup(a){const s=a,e=$e(),n=Qt(),{forwardRef:d,currentElement:u}=Se(),{CollectionItem:m}=Ie(),g=M(()=>{var z,T;return(T=(z=e.modelValue)==null?void 0:z.value)==null?void 0:T[s.index]}),b=M(()=>g.value===void 0?0:qt(g.value,e.min.value??0,e.max.value??100)),v=M(()=>{var z,T;return jn(s.index,((T=(z=e.modelValue)==null?void 0:z.value)==null?void 0:T.length)??0)}),C=Tn(u),k=M(()=>C[n.size].value),h=M(()=>e.thumbAlignment.value==="overflow"||!k.value?0:Yn(k.value,b.value,n.direction)),A=un();return Ge(()=>{e.thumbElements.value.push(u.value)}),$t(()=>{const z=e.thumbElements.value.findIndex(T=>T===u.value)??-1;e.thumbElements.value.splice(z,1)}),(z,T)=>(p(),L(r(m),null,{default:o(()=>[l(r(be),te(z.$attrs,{ref:r(d),role:"slider",tabindex:r(e).disabled.value?void 0:0,"aria-label":z.$attrs["aria-label"]||v.value,"data-disabled":r(e).disabled.value?"":void 0,"data-orientation":r(e).orientation.value,"aria-valuenow":g.value,"aria-valuemin":r(e).min.value,"aria-valuemax":r(e).max.value,"aria-orientation":r(e).orientation.value,"as-child":z.asChild,as:z.as,style:{transform:"var(--reka-slider-thumb-transform)",position:"absolute",[r(n).startEdge]:`calc(${b.value}% + ${h.value}px)`,display:!r(A)&&g.value===void 0?"none":void 0},onFocus:T[0]||(T[0]=()=>{r(e).valueIndexToChangeRef.value=z.index})}),{default:o(()=>[O(z.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),Tt=R({__name:"SliderThumb",props:{asChild:{type:Boolean},as:{default:"span"}},setup(a){const s=a,{getItems:e}=Ie(),{forwardRef:n,currentElement:d}=Se(),u=M(()=>d.value?e(!0).findIndex(m=>m.ref===d.value):-1);return(m,g)=>(p(),L(sl,te({ref:r(n)},s,{index:u.value}),{default:o(()=>[O(m.$slots,"default")]),_:3},16,["index"]))}}),al=R({__name:"SliderTrack",props:{asChild:{type:Boolean},as:{default:"span"}},setup(a){const s=$e();return Se(),(e,n)=>(p(),L(r(be),{"as-child":e.asChild,as:e.as,"data-disabled":r(s).disabled.value?"":void 0,"data-orientation":r(s).orientation.value},{default:o(()=>[O(e.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}});function tt(a){return a.reduce((s,e)=>(s.push(e),e.children&&s.push(...tt(e.children)),s),[])}function rl(a,s){const e=H(),n=(u,m)=>{if(s.multiple&&Array.isArray(a.value))if(s.selectionBehavior==="replace")a.value=[u],e.value=u;else{const g=a.value.findIndex(b=>m(b));g!==-1?a.value=a.value.filter((b,v)=>v!==g):a.value=[...a.value,u]}else s.selectionBehavior==="replace"?a.value={...u}:!Array.isArray(a.value)&&m(a.value)?a.value=void 0:a.value={...u};return a.value};function d(u,m,g,b){var h;if(!(e!=null&&e.value)||!s.multiple||!Array.isArray(a.value))return;const C=(h=g().filter(A=>A.ref.dataset.disabled!=="").find(A=>A.ref===m))==null?void 0:h.value;if(!C)return;let k=null;switch(u){case"prev":case"next":{k=Ne(b,e.value,C);break}case"first":{k=Ne(b,e.value,b==null?void 0:b[0]);break}case"last":{k=Ne(b,e.value,b==null?void 0:b[b.length-1]);break}}a.value=k}return{firstValue:e,onSelectItem:n,handleMultipleReplace:d}}const[ul,dl]=qe("TreeRoot"),ml=R({__name:"TreeRoot",props:{modelValue:{},defaultValue:{},items:{},expanded:{},defaultExpanded:{},getKey:{},getChildren:{type:Function,default:a=>a.children},selectionBehavior:{default:"toggle"},multiple:{type:Boolean},dir:{},disabled:{type:Boolean},propagateSelect:{type:Boolean},asChild:{type:Boolean},as:{default:"ul"}},emits:["update:modelValue","update:expanded"],setup(a,{emit:s}){const e=a,n=s,{items:d,multiple:u,disabled:m,propagateSelect:g,dir:b}=he(e),{handleTypeaheadSearch:v}=Un(),C=Ze(b),k=H(),h=H(!1),A=dn(),z=Re(e,"modelValue",n,{defaultValue:e.defaultValue??(u.value?[]:void 0),passive:e.modelValue===void 0,deep:!0}),T=Re(e,"expanded",n,{defaultValue:e.defaultExpanded??[],passive:e.expanded===void 0,deep:!0}),{onSelectItem:c,handleMultipleReplace:x}=rl(z,e),B=M(()=>u.value&&Array.isArray(z.value)?z.value.map(y=>e.getKey(y)):[e.getKey(z.value??{})]);function w(y,V=1,K){return y.reduce((F,q,Y)=>{const le=e.getKey(q),ue=e.getChildren(q),de=T.value.includes(le),oe={_id:le,value:q,index:Y,level:V,parentItem:K,hasChildren:!!ue,bind:{value:q,level:V,"aria-setsize":y.length,"aria-posinset":Y+1}};return F.push(oe),ue&&de&&F.push(...w(ue,V+1,q)),F},[])}const I=M(()=>{const y=e.items;return T.value.map(V=>V),w(y??[])});function f(y){var V;if(h.value)A.trigger(y);else{const K=((V=k.value)==null?void 0:V.getItems())??[];v(y.key,K)}}function P(y){if(h.value)return;const V=Rt[y.key];Pt(()=>{var K;x(V,Te(),(K=k.value)==null?void 0:K.getItems,I.value.map(F=>F.value))})}return dl({modelValue:z,selectedKeys:B,onSelect:y=>{var F;const V=q=>e.getKey(q??{})===e.getKey(y),K=e.multiple&&Array.isArray(z.value)?((F=z.value)==null?void 0:F.findIndex(V))!==-1:void 0;if(c(y,V),e.propagateSelect&&e.multiple&&Array.isArray(z.value)){const q=tt(e.getChildren(y)??[]);K?z.value=[...z.value].filter(Y=>!q.some(le=>e.getKey(Y??{})===e.getKey(le))):z.value=[...z.value,...q]}},expanded:T,onToggle(y){if(!(y?e.getChildren(y):void 0))return;const K=e.getKey(y)??y;T.value.includes(K)?T.value=T.value.filter(F=>F!==K):T.value.push(K)},getKey:e.getKey,getChildren:e.getChildren,items:d,expandedItems:I,disabled:m,multiple:u,dir:C,propagateSelect:g,isVirtual:h,virtualKeydownHook:A,handleMultipleReplace:x}),(y,V)=>(p(),L(r(qn),{ref_key:"rovingFocusGroupRef",ref:k,"as-child":"",orientation:"vertical",dir:r(C)},{default:o(()=>[l(r(be),{role:"tree",as:y.as,"as-child":y.asChild,"aria-multiselectable":r(u)?!0:void 0,onKeydown:[f,Fe(ze(P,["shift"]),["up","down"])]},{default:o(()=>[O(y.$slots,"default",{flattenItems:I.value,modelValue:r(z),expanded:r(T)})]),_:3},8,["as","as-child","aria-multiselectable","onKeydown"])]),_:3},8,["dir"]))}}),pl="tree.select",fl="tree.toggle",gl=R({inheritAttrs:!1,__name:"TreeItem",props:{value:{},level:{},asChild:{type:Boolean},as:{default:"li"}},emits:["select","toggle"],setup(a,{expose:s,emit:e}){const n=a,d=e,u=ul(),{getItems:m}=Ie(),g=M(()=>!!u.getChildren(n.value)),b=M(()=>{const x=u.getKey(n.value);return u.expanded.value.includes(x)}),v=M(()=>{const x=u.getKey(n.value);return u.selectedKeys.value.includes(x)}),C=M(()=>{if(u.propagateSelect.value&&v.value&&g.value&&Array.isArray(u.modelValue.value))return!tt(u.getChildren(n.value)||[]).every(B=>u.modelValue.value.find(w=>u.getKey(w)===u.getKey(B)))});function k(x){if(g.value)if(b.value){const B=m().map(y=>y.ref),w=Te(),I=B.indexOf(w),P=[...B].slice(I).find(y=>Number(y.getAttribute("data-indent"))===n.level+1);P&&P.focus()}else c(x)}function h(x){if(b.value)c(x);else{const B=m().map(y=>y.ref),w=Te(),I=B.indexOf(w),P=[...B].slice(0,I).reverse().find(y=>Number(y.getAttribute("data-indent"))===n.level-1);P&&P.focus()}}async function A(x){d("select",x),!(x!=null&&x.defaultPrevented)&&u.onSelect(n.value)}async function z(x){d("toggle",x),!(x!=null&&x.defaultPrevented)&&u.onToggle(n.value)}async function T(x){if(!x)return;const B={originalEvent:x,value:n.value,isExpanded:b.value,isSelected:v.value};yt(pl,A,B)}async function c(x){if(!x)return;const B={originalEvent:x,value:n.value,isExpanded:b.value,isSelected:v.value};yt(fl,z,B)}return s({isExpanded:b,isSelected:v,isIndeterminate:C,handleToggle:()=>u.onToggle(n.value),handleSelect:()=>u.onSelect(n.value)}),(x,B)=>(p(),L(r(On),{"as-child":"",value:x.value,"allow-shift-key":""},{default:o(()=>[l(r(be),te(x.$attrs,{role:"treeitem",as:x.as,"as-child":x.asChild,"aria-selected":v.value,"aria-expanded":g.value?b.value:void 0,"aria-level":x.level,"data-indent":x.level,"data-selected":v.value?"":void 0,"data-expanded":b.value?"":void 0,onKeydown:[Fe(ze(T,["self","prevent"]),["enter","space"]),B[0]||(B[0]=Fe(ze(w=>r(u).dir.value==="ltr"?k(w):h(w),["prevent"]),["right"])),B[1]||(B[1]=Fe(ze(w=>r(u).dir.value==="ltr"?h(w):k(w),["prevent"]),["left"]))],onClick:B[2]||(B[2]=ze(w=>{T(w),c(w)},["stop"]))}),{default:o(()=>[O(x.$slots,"default",{isExpanded:b.value,isSelected:v.value,isIndeterminate:C.value,handleSelect:()=>r(u).onSelect(x.value),handleToggle:()=>r(u).onToggle(x.value)})]),_:3},16,["as","as-child","aria-selected","aria-expanded","aria-level","data-indent","data-selected","data-expanded","onKeydown"])]),_:3},8,["value"]))}}),vl={slots:{root:"relative flex items-center select-none touch-none",track:"relative bg-accented overflow-hidden rounded-full grow",range:"absolute rounded-full",thumb:"rounded-full bg-default ring-2 focus-visible:outline-2 focus-visible:outline-offset-2"},variants:{color:{primary:{range:"bg-primary",thumb:"ring-primary focus-visible:outline-primary/50"},secondary:{range:"bg-secondary",thumb:"ring-secondary focus-visible:outline-secondary/50"},success:{range:"bg-success",thumb:"ring-success focus-visible:outline-success/50"},info:{range:"bg-info",thumb:"ring-info focus-visible:outline-info/50"},warning:{range:"bg-warning",thumb:"ring-warning focus-visible:outline-warning/50"},error:{range:"bg-error",thumb:"ring-error focus-visible:outline-error/50"},neutral:{range:"bg-inverted",thumb:"ring-inverted focus-visible:outline-inverted/50"}},size:{xs:{thumb:"size-3"},sm:{thumb:"size-3.5"},md:{thumb:"size-4"},lg:{thumb:"size-4.5"},xl:{thumb:"size-5"}},orientation:{horizontal:{root:"w-full",range:"h-full"},vertical:{root:"flex-col h-full",range:"w-full"}},disabled:{true:{root:"opacity-75 cursor-not-allowed"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{track:"h-[6px]"}},{orientation:"horizontal",size:"sm",class:{track:"h-[7px]"}},{orientation:"horizontal",size:"md",class:{track:"h-[8px]"}},{orientation:"horizontal",size:"lg",class:{track:"h-[9px]"}},{orientation:"horizontal",size:"xl",class:{track:"h-[10px]"}},{orientation:"vertical",size:"xs",class:{track:"w-[6px]"}},{orientation:"vertical",size:"sm",class:{track:"w-[7px]"}},{orientation:"vertical",size:"md",class:{track:"w-[8px]"}},{orientation:"vertical",size:"lg",class:{track:"w-[9px]"}},{orientation:"vertical",size:"xl",class:{track:"w-[10px]"}}],defaultVariants:{size:"md",color:"primary"}},yl={__name:"Slider",props:ct({as:{type:null,required:!1},size:{type:null,required:!1},color:{type:null,required:!1},orientation:{type:null,required:!1,default:"horizontal"},tooltip:{type:[Boolean,Object],required:!1},defaultValue:{type:[Number,Array],required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},name:{type:String,required:!1},disabled:{type:Boolean,required:!1},inverted:{type:Boolean,required:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},minStepsBetweenThumbs:{type:Number,required:!1}},{modelValue:{type:null},modelModifiers:{}}),emits:ct(["update:modelValue","change"],["update:modelValue"]),setup(a,{emit:s}){const e=a,n=s,d=mn(a,"modelValue"),u=Ye(),m=zt(Bt(e,"as","orientation","min","max","step","minStepsBetweenThumbs","inverted"),n),{id:g,emitFormChange:b,emitFormInput:v,size:C,color:k,name:h,disabled:A,ariaAttrs:z}=pn(e),T=M(()=>typeof e.defaultValue=="number"?[e.defaultValue]:e.defaultValue),c=M({get(){return typeof d.value=="number"?[d.value]:d.value??T.value},set(I){d.value=(I==null?void 0:I.length)!==1?I:I[0]}}),x=M(()=>{var I;return((I=c.value)==null?void 0:I.length)??1}),B=M(()=>{var I;return Ce({extend:Ce(vl),...((I=u.ui)==null?void 0:I.slider)||{}})({disabled:A.value,size:C.value,color:k.value,orientation:e.orientation})});function w(I){const f=new Event("change",{target:{value:I}});n("change",f),b()}return(I,f)=>{var P;return p(),L(r(ol),te({...r(m),...r(z)},{id:r(g),modelValue:c.value,"onUpdate:modelValue":[f[0]||(f[0]=y=>c.value=y),f[1]||(f[1]=y=>r(v)())],name:r(h),disabled:r(A),class:B.value.root({class:[(P=e.ui)==null?void 0:P.root,e.class]}),"default-value":T.value,onValueCommit:w}),{default:o(()=>{var y;return[l(r(al),{class:j(B.value.track({class:(y=e.ui)==null?void 0:y.track}))},{default:o(()=>{var V;return[l(r(il),{class:j(B.value.range({class:(V=e.ui)==null?void 0:V.range}))},null,8,["class"])]}),_:1},8,["class"]),f[2]||(f[2]=t()),(p(!0),S(G,null,ne(x.value,V=>{var K,F;return p(),S(G,{key:V},[a.tooltip?(p(),L(Cn,te({key:0,text:x.value>1?String((K=c.value)==null?void 0:K[V-1]):String(c.value),"disable-closing-trigger":"",ref_for:!0},typeof a.tooltip=="object"?a.tooltip:{}),{default:o(()=>{var q;return[l(r(Tt),{class:j(B.value.thumb({class:(q=e.ui)==null?void 0:q.thumb}))},null,8,["class"])]}),_:2},1040,["text"])):(p(),L(r(Tt),{key:1,class:j(B.value.thumb({class:(F=e.ui)==null?void 0:F.thumb}))},null,8,["class"]))],64)}),128))]}),_:1,__:[2]},16,["id","modelValue","name","disabled","class","default-value"])}}},cl=Xe("docsStore",{state:()=>({toc:[{label:"Installation",icon:"i-lucide-loader",section:"installation"},{label:"How to Use",icon:"i-lucide-pointer",section:"general-usage",children:[{label:"General Usage",icon:"i-lucide-mouse-pointer",section:"general-usage"},{label:"Tray task",icon:"i-lucide-panel-bottom",section:"tray-task"},{label:"Plugins",icon:"i-lucide-blocks",section:"plugins"},{label:"Commands",icon:"i-lucide-zap",section:"commands"}]},{label:"Settings",icon:"i-lucide-sliders-vertical",section:"settings"},{label:"Building the app",icon:"i-lucide-drill",section:"build-app"},{label:"Under the Hood",icon:"i-lucide-folder-open-dot",section:"under-hood"},{label:"API Documentation",icon:"i-lucide-code",section:"api-documentation"},{label:"Creating a plugin",icon:"i-lucide-toy-brick",section:"creating-plugin"},{label:"FAQ by Developers",icon:"i-lucide-circle-help",section:"faq"}],links:[[{label:"License",icon:"i-lucide-scale",to:"/license"},{label:"Security Policy",icon:"i-lucide-shield-check",to:"/security"}],[{label:"Kanban",icon:"i-lucide-square-kanban",to:"/kanban"},{label:"Changelog",icon:"i-lucide-file-cog",to:"/changelog"},{label:"Releases",icon:"i-lucide-tags",to:"https://github.com/Faeq-F/Quokka/releases",target:"_blank"}],[{label:"Program Source",icon:"i-lucide-folder-git",to:"https://github.com/Faeq-F/Quokka/tree/main",target:"_blank"},{label:"Website Source",icon:"i-lucide-folder-git-2",to:"https://github.com/Faeq-F/Quokka/tree/site",target:"_blank"}],[{label:"FAQ",icon:"i-lucide-message-circle-question-mark",to:"/#faq"},{label:"Discussions & Feedback",icon:"i-lucide-messages-square",to:"https://github.com/Faeq-F/Quokka/discussions",target:"_blank"},{label:"Contribute",icon:"i-lucide-git-pull-request-arrow",to:"/contributing"}],[{label:"Code of Conduct",icon:"i-lucide-users-round",to:"/conduct"},{label:"Report an Issue",icon:"i-lucide-triangle-alert",to:"/contributing"}]]}),actions:{}}),bl={class:"w-full text-center"},kl={class:"flex sm:flex-row flex-col w-full mt-12"},xl={class:"flex flex-col justify-center items-center h-full"},wl={class:"text-sm text-gray-400"},Sl={class:"flex w-full sm:flex-row flex-col"},Tl={class:"flex flex-col justify-center items-center h-full"},Cl={class:"text-sm text-gray-400"},hl={class:"flex w-full sm:flex-row flex-col sm:gap-6 gap-1"},Il={class:"flex flex-col justify-center items-center h-full"},$l={class:"text-sm text-gray-400"},Pl={class:"flex flex-col justify-center items-center h-full"},zl={class:"text-sm text-gray-400"},Bl={__name:"documentation",setup(a){const s=hn();return(e,n)=>{const d=X,u=se,m=At;return p(),S("div",bl,[n[9]||(n[9]=i("div",{class:"text-3xl mb-2 mt-22"},`
      Welcome to the Quokka documentation!
    `,-1)),n[10]||(n[10]=t()),n[11]||(n[11]=i("div",null,`
      This is a place where you can find all the information you need to get
      started with Quokka
    `,-1)),n[12]||(n[12]=t()),n[13]||(n[13]=i("div",null,`
      If you have any questions or feedback, feel free to reach out
    `,-1)),n[14]||(n[14]=t()),i("div",kl,[(p(!0),S(G,null,ne(r(s).items[0][1].children.slice(0,3),(g,b)=>(p(),L(m,{key:b,to:g.to,class:"sm:w-1/3 m-3 h-36"},{default:o(()=>[l(u,{class:"w-full h-full"},{default:o(()=>[i("div",xl,[l(d,{name:g.icon},null,8,["name"]),n[0]||(n[0]=t()),i("div",null,W(g.label),1),n[1]||(n[1]=t()),i("div",wl,W(g.description),1)])]),_:2},1024)]),_:2},1032,["to"]))),128))]),n[15]||(n[15]=t()),i("div",Sl,[(p(!0),S(G,null,ne(r(s).items[0][1].children.slice(3,6),(g,b)=>(p(),L(m,{key:b,to:g.to,class:"sm:w-1/3 m-3 h-36"},{default:o(()=>[l(u,{class:"w-full h-full"},{default:o(()=>[i("div",Tl,[l(d,{name:g.icon},null,8,["name"]),n[2]||(n[2]=t()),i("div",null,W(g.label),1),n[3]||(n[3]=t()),i("div",Cl,W(g.description),1)])]),_:2},1024)]),_:2},1032,["to"]))),128))]),n[16]||(n[16]=t()),i("div",hl,[l(m,{to:r(s).items[0][1].children[6].to,class:"sm:w-1/2"},{default:o(()=>[l(u,{class:"w-full h-36 mt-3"},{default:o(()=>[i("div",Il,[l(d,{name:r(s).items[0][1].children[6].icon},null,8,["name"]),n[4]||(n[4]=t()),i("div",null,W(r(s).items[0][1].children[6].label),1),n[5]||(n[5]=t()),i("div",$l,W(r(s).items[0][1].children[6].description),1)])]),_:1})]),_:1},8,["to"]),n[8]||(n[8]=t()),l(m,{to:r(s).items[0][1].children[7].to,class:"sm:w-1/2"},{default:o(()=>[l(u,{class:"w-full h-36 mt-3"},{default:o(()=>[i("div",Pl,[l(d,{name:r(s).items[0][1].children[7].icon},null,8,["name"]),n[6]||(n[6]=t()),i("div",null,W(r(s).items[0][1].children[7].label),1),n[7]||(n[7]=t()),i("div",zl,W(r(s).items[0][1].children[7].description),1)])]),_:1})]),_:1},8,["to"])])])}}},Al={class:"w-full h-full !border-0"},Ml=R({__name:"apiDocumentation",setup(a){function s(){d.value.contentDocument.getElementsByTagName("html")[0].dataset.bsTheme=n.value;for(var u of d.value.contentDocument.body.getElementsByTagName("a"))u.href.includes("Quokka")||(u.target="_blank")}function e(u,m){var g=function(){setTimeout(function(){m(u,u.contentWindow.location.href)},0)};function b(){u.contentWindow.removeEventListener("unload",g),u.contentWindow.addEventListener("unload",g)}u.addEventListener("load",b),b()}const{colorMode:n}=Pn(),d=H(null);return Ge(()=>{d.value.addEventListener("load",s),ye(n,async(u,m)=>s()),e(d.value,function(u,m){s()})}),(u,m)=>(p(),S("div",Al,[i("iframe",{ref_key:"APIframe",ref:d,src:"/Quokka/APIdocs/api/Quokka.html",class:"w-full h-full"},null,512)]))}}),Ll={class:"flex sm:flex-row flex-col items-center"},Dl={class:"w-full"},N=R({__name:"docNotice",props:{type:String},setup(a){const s=a,e=M(()=>s.type=="warning"?"i-lucide-triangle-alert":s.type=="destructive"?"i-lucide-octagon-alert":s.type=="tip"?"i-lucide-lightbulb":s.type=="success"?"i-lucide-check-check":"i-lucide-info"),n=M(()=>s.type=="warning"?"#f0b100":s.type=="destructive"?"#fb2c36":s.type=="tip"?"#d2afff":s.type=="success"?"hsl(130, 51%, 65%)":"#a7ccff"),d=M(()=>s.type=="tip"?"secondary":s.type),u=Vt();return(m,g)=>{const b=X,v=ke,C=se;return p(),L(C,{class:"m-2",color:d.value},{default:o(()=>[i("div",Ll,[l(b,{name:e.value,class:"!size-5 min-w-5",style:ce(`color: ${n.value};`)},null,8,["name","style"]),g[0]||(g[0]=t()),l(v,{orientation:r(u).isMobile?"horizontal":"vertical",class:"h-7 mx-3 sm:my-0 my-3",ui:{border:"dark:border-gray-600 h-full"}},null,8,["orientation"]),g[1]||(g[1]=t()),i("div",Dl,[O(m.$slots,"default")])])]),_:3},8,["color"])}}}),Vl={class:"flex flex-col mt-22 mb-16 items-center"},El={class:"flex items-center Varela text-3xl"},Fl={class:"flex gap-1"},Rl={class:"flex gap-1"},_l=R({__name:"buildingTheApp",setup(a){return(s,e)=>{const n=X,d=D,u=se;return p(),S("div",null,[i("div",Vl,[i("div",El,[l(n,{name:"i-lucide-drill",class:"mr-2"}),e[0]||(e[0]=t(` Building the app
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=i("div",{class:"text-md outfit"},"Steps to produce the published release",-1))]),e[25]||(e[25]=t()),l(N,{type:"info",class:"m-2 w-full"},{default:o(()=>[e[4]||(e[4]=t(`
      Quokka is licensed under the
      `)),l(U,{url:"/license"},{default:o(()=>e[3]||(e[3]=[t(`
        GNU General Public License v3.0
      `)])),_:1,__:[3]})]),_:1,__:[4]}),e[26]||(e[26]=t()),l(u,{class:"w-full m-2"},{default:o(()=>[e[21]||(e[21]=t(`
      To build the app:
      `)),i("ol",null,[i("li",null,[e[7]||(e[7]=t(`
          Open
          `)),l(U,{url:"https://visualstudio.microsoft.com/#vs-section",target:"_blank"},{default:o(()=>e[5]||(e[5]=[t(`
            Visual Studio
          `)])),_:1,__:[5]}),e[8]||(e[8]=t(`
           & clone
          `)),l(U,{url:"https://github.com/faeq-f/quokka/",target:"_blank"},{default:o(()=>e[6]||(e[6]=[t(`
            Quokka
          `)])),_:1,__:[6]})]),e[16]||(e[16]=t()),e[17]||(e[17]=i("li",null,`
          Build the solution
        `,-1)),e[18]||(e[18]=t()),i("li",null,[i("span",Fl,[e[10]||(e[10]=t(`
            Copy the Quokka folder (in the build path - normally
            `)),l(d,{inline:""},{default:o(()=>e[9]||(e[9]=[t(" bin ")])),_:1,__:[9]}),e[11]||(e[11]=t(`
            ) to your desired location (for e.g., to a USB drive)
          `))])]),e[19]||(e[19]=t()),i("li",null,[i("span",Rl,[e[13]||(e[13]=t(`
            (Download / Delete) any plugins you (do / do not) wish to use (in
            the
            `)),l(d,{inline:""},{default:o(()=>e[12]||(e[12]=[t(" PlugBoard ")])),_:1,__:[12]}),e[14]||(e[14]=t(`)
          `))]),e[15]||(e[15]=t(`
          (Some of the recognized Plugins may be included with the build)
        `))])]),e[22]||(e[22]=t()),e[23]||(e[23]=i("br",null,null,-1)),e[24]||(e[24]=t()),l(N,{type:"warning",style:{width:"calc(100% - 1rem)"}},{default:o(()=>e[20]||(e[20]=[t(`
        The app comes as portable by design - there are no separate build
        instructions for a non-portable version.
      `)])),_:1,__:[20]})]),_:1,__:[21,22,23,24]})])}}}),Kl={key:0,class:"m-table-header"},ql={key:0,class:"m-table-spacer"},Wl={class:"m-table-header-title"},Ol={key:1,class:"m-table-header-search"},Ul={key:0},Ql={key:1},Nl={key:0,class:"m-table-sort-icon-wrapper"},Hl={class:"maz-text-center maz-text-muted"},jl={key:1,class:"m-table-footer"},Gl={key:0,class:"m-table-footer-pagination"},Yl={class:"m-table-footer-pagination-items-per-page"},Xl={class:"maz-hidden maz-text-sm tab-s:maz-block"},Jl={key:0,class:"maz-whitespace-nowrap maz-text-sm"},Zl={class:"m-table-footer-pagination-buttons"},nt=Symbol("maz-table"),eo=R({__name:"MazTable",props:{tableClass:{type:[Boolean,null,String,Object,Array]},tableStyle:{type:[Boolean,null,String,Object,Array]},modelValue:{},size:{default:"md"},inputSize:{},title:{},headers:{},sortable:{type:Boolean},headersAlign:{default:"left"},rows:{},hoverable:{type:Boolean},search:{type:Boolean},hideSearchInRow:{type:Boolean},hideSearchBy:{type:Boolean},searchQuery:{},backgroundOdd:{type:Boolean},backgroundEven:{type:Boolean},elevation:{type:Boolean},divider:{type:Boolean,default:!1},caption:{},captionSide:{default:"bottom"},pagination:{type:Boolean},page:{default:1},pageSize:{default:20},totalPages:{},paginateRows:{type:Boolean,default:!0},totalItems:{},loading:{type:Boolean},selectable:{type:Boolean},selectedKey:{},tableLayout:{},color:{default:"primary"},translations:{},roundedSize:{default:"lg"},scrollable:{type:Boolean,default:!1}},emits:["update:model-value","update:search-query","update:page","update:page-size"],setup(a,{emit:s}){fn($=>({v098d59e0:$.tableLayout,fa6d6a56:$.captionSide}));const e=a,n=s,d=ae(()=>re(()=>import("./BqW3yR4h.js").then($=>$.a),__vite__mapDeps([4,1,2,5]),import.meta.url)),u=ae(()=>re(()=>import("./DbltGogt.js"),__vite__mapDeps([6,1,2,7]),import.meta.url)),m=ae(()=>re(()=>import("./DI9Jwsez.js"),__vite__mapDeps([8,1,2,9]),import.meta.url)),g=ae(()=>re(()=>import("./DF_zngiB.js"),__vite__mapDeps([10,1,2,11]),import.meta.url)),b=ae(()=>re(()=>import("./B7M6geOz.js"),__vite__mapDeps([12,1,2,13,14,15,8,9,16]),import.meta.url)),v=ae(()=>re(()=>Promise.resolve().then(()=>Zo),void 0,import.meta.url)),C=ae(()=>re(()=>Promise.resolve().then(()=>ti),void 0,import.meta.url)),k=ae(()=>re(()=>import("./T2IkHd0c.js"),__vite__mapDeps([17,18,1,2,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,13,15,37]),import.meta.url)),{t:h}=An(),A=M(()=>{var $,Q,E,J,Z,De,Ve,Ee,ut,dt,mt,pt,ft,gt;return{noResults:(($=e.translations)==null?void 0:$.noResults)??h("table.noResults"),actionColumnTitle:((Q=e.translations)==null?void 0:Q.actionColumnTitle)??h("table.actionColumnTitle"),searchByInput:{all:((J=(E=e.translations)==null?void 0:E.searchByInput)==null?void 0:J.all)??h("table.searchByInput.all"),placeholder:((De=(Z=e.translations)==null?void 0:Z.searchByInput)==null?void 0:De.placeholder)??h("table.searchByInput.placeholder")},searchInput:{placeholder:((Ee=(Ve=e.translations)==null?void 0:Ve.searchInput)==null?void 0:Ee.placeholder)??h("table.searchInput.placeholder")},pagination:{all:((dt=(ut=e.translations)==null?void 0:ut.pagination)==null?void 0:dt.all)??h("table.pagination.all"),rowsPerPage:((pt=(mt=e.translations)==null?void 0:mt.pagination)==null?void 0:pt.rowsPerPage)??h("table.pagination.rowsPerPage"),of:((gt=(ft=e.translations)==null?void 0:ft.pagination)==null?void 0:gt.of)??h("table.pagination.of")}}}),z=M(()=>e.divider&&!e.backgroundEven&&!e.backgroundOdd),{size:T,hoverable:c,backgroundEven:x,backgroundOdd:B}=he(e);vn(nt,{size:T,hoverable:c,backgroundEven:x,backgroundOdd:B});const w=H(st()),I=M(()=>e.selectable||!!e.selectedKey),f=H(e.page);ye(()=>e.page,$=>{f.value=$});const P=M({get:()=>f.value,set:$=>{f.value=$,n("update:page",$)}}),y=M(()=>[{label:A.value.pagination.all,value:Number.POSITIVE_INFINITY},{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:50,value:50},{label:100,value:100},{label:200,value:200}]),V=H(e.pageSize);ye(()=>e.pageSize,$=>{V.value=$});const K=M({get:()=>V.value,set:$=>{V.value=$,n("update:page-size",$)}}),F=M(()=>e.totalPages?e.totalPages:K.value===Number.POSITIVE_INFINITY||!q.value?1:Math.ceil(q.value/K.value)),q=M(()=>{var $;return e.totalItems??(($=e.rows)==null?void 0:$.length)}),Y=M(()=>{if(!e.pagination||!e.paginateRows||K.value===Number.POSITIVE_INFINITY)return w.value;const $=(f.value-1)*K.value,Q=$+K.value;return w.value.slice($,Q)}),le=M(()=>({from:(f.value-1)*K.value+1,to:Math.min(f.value*K.value,q.value??0)}));function ue(){P.value=1}function de(){P.value=F.value}function oe(){P.value--}function me(){P.value++}ye(()=>[e.rows,e.modelValue],()=>{w.value=st()});const ie=H(),ee=H(),pe=M(()=>Jt(e.headers)),fe=H(),xe=M(()=>{const $=pe.value.map(({label:Q,key:E})=>({label:Q,value:E}));return[{label:A.value.searchByInput.all,value:null},...$]}),ve=H(e.searchQuery);ye(()=>e.searchQuery,$=>{ve.value=$});const ge=M({get:()=>ve.value,set:$=>{ve.value=$,n("update:search-query",$)}});function we($){return[...$].sort((Q,E)=>{if(ie.value===void 0||ee.value===void 0)return 0;const J=Q[pe.value[ie.value].key],Z=E[pe.value[ie.value].key];return typeof J=="string"&&typeof Z=="string"?ee.value==="ASC"?J.localeCompare(Z):Z.localeCompare(J):ee.value==="ASC"?J-Z:Z-J})}function Gt($){if(e.hideSearchInRow||typeof ge.value!="string")return Y.value;const Q=ge.value.toLowerCase();return[...$].filter(E=>fe.value?String(E[fe.value]).toLowerCase().includes(Q):Object.values(E).some(J=>typeof J=="string"||typeof J=="number"||typeof J=="boolean"?String(J).toLowerCase().includes(Q):!1))}const Pe=M(()=>{const $=Gt(Y.value);return we($)}),Yt=We(),it=M(()=>e.search||!!e.title||!!Yt.title),Xt=M(()=>e.pagination);function Jt($){return($==null?void 0:$.map(Q=>typeof Q=="string"?{label:Q,align:e.headersAlign}:{align:e.headersAlign,thHeaders:Q.headers,...Q}))??[]}function st(){var $;return(($=e.rows)==null?void 0:$.map(Q=>{var E;return{selected:(E=e.modelValue)==null?void 0:E.includes(e.selectedKey?Q[e.selectedKey]:Q),...Q}}))??[]}function Zt($){if($===ie.value){const Q=ee.value==="DESC"?"ASC":void 0;ee.value=ee.value===void 0?"DESC":Q}else ee.value="DESC";ie.value=ee.value===void 0?void 0:$}const at=M({get:()=>Pe.value.every($=>$.selected)??!1,set:en});function en($){for(const Q of Pe.value)Q.selected=$;Ue()}function tn($,Q){Pe.value[Q].selected=$,Ue()}function Ue($){$=$??rt();const Q=$!=null&&$.length?$:void 0;n("update:model-value",Q)}function rt(){return w.value.filter($=>$.selected).map($=>e.selectedKey?$[e.selectedKey]:$)}return gn(()=>{const $=rt();$!=null&&$.length&&Ue($)}),($,Q)=>(p(),S("div",{class:j(["m-table m-reset-css",{"--has-header":it.value}])},[it.value?(p(),S("div",Kl,[a.title||$.$slots.title?(p(),S("div",ql,[O($.$slots,"title",{},()=>[i("span",Wl,W(a.title),1)],!0)])):_("",!0),a.search?(p(),S("div",Ol,[a.hideSearchBy?_("",!0):(p(),L(r(b),{key:0,modelValue:fe.value,"onUpdate:modelValue":Q[0]||(Q[0]=E=>fe.value=E),"rounded-size":a.roundedSize,color:a.color,style:{width:"8rem"},placeholder:A.value.searchByInput.placeholder,size:a.inputSize??r(T),options:xe.value},null,8,["modelValue","rounded-size","color","placeholder","size","options"])),l(r(m),{modelValue:ge.value,"onUpdate:modelValue":Q[1]||(Q[1]=E=>ge.value=E),size:a.inputSize??r(T),"rounded-size":a.roundedSize,color:a.color,debounce:300,placeholder:A.value.searchInput.placeholder,"left-icon":r(Bn)},null,8,["modelValue","size","rounded-size","color","placeholder","left-icon"])])):_("",!0)])):_("",!0),i("div",{class:j(["m-table-wrapper",[`--rounded-${a.roundedSize}`,{"--scrollable":a.scrollable}]])},[i("table",{class:j([{"--elevation":a.elevation,"--has-layout":a.tableLayout},a.tableClass]),style:ce(a.tableStyle)},[a.caption||$.$slots.caption?(p(),S("caption",Ul,[O($.$slots,"caption",{},()=>[t(W(a.caption),1)],!0)])):_("",!0),pe.value?(p(),S("thead",Ql,[O($.$slots,"thead",{},()=>[l(r(C),{"is-head":""},{default:o(()=>[I.value?(p(),L(r(k),{key:0,align:"left",class:j([`--${r(T)}`,"m-table-select-column"])},{default:o(()=>[l(r(u),{modelValue:at.value,"onUpdate:modelValue":Q[2]||(Q[2]=E=>at.value=E),size:"sm"},null,8,["modelValue"])]),_:1},8,["class"])):_("",!0),(p(!0),S(G,null,ne(pe.value,(E,J)=>(p(),L(r(k),{key:J,scope:E.scope,align:E.align,rowspan:E.rowspan,colspan:E.colspan,headers:E.thHeaders,style:ce({width:E.width,textAlign:E.align}),class:j(["maz-group",[{"--hidden":E.hidden,"--sortable":E.sortable??a.sortable},E.classes,`--${r(T)}`]]),onClick:Z=>(E.sortable??a.sortable)&&Zt(J)},{default:o(()=>[i("span",{class:j({"maz-sr-only":E.srOnly})},[O($.$slots,"header",{header:E,label:E.label},()=>[O($.$slots,`header-label-${E.key}`,{header:E,label:E.label},()=>[t(W(E.label),1)],!0),E.sortable??a.sortable?(p(),S("div",Nl,[l(r(Mn),{class:j(["m-table-sort-icon maz-hidden group-hover:maz-block",{"--sorted":J===ie.value,"--up":ee.value==="DESC","--down":ee.value==="ASC"}])},null,8,["class"])])):_("",!0)],!0)],2)]),_:2},1032,["scope","align","rowspan","colspan","headers","style","class","onClick"]))),128)),$.$slots.actions?(p(),L(r(k),{key:1,align:"left",class:j(`--${r(T)}`)},{default:o(()=>[O($.$slots,"actions-header",{},()=>[t(W(A.value.actionColumnTitle),1)],!0)]),_:3},8,["class"])):_("",!0)]),_:3})],!0)])):_("",!0),a.loading?(p(),L(r(g),{key:2,color:a.color,class:"!maz-absolute"},null,8,["color"])):_("",!0),i("tbody",{class:j({"--divider":z.value})},[O($.$slots,"default",{},()=>[Pe.value.length>0?(p(!0),S(G,{key:0},ne(Pe.value,(E,J)=>(p(),L(r(C),{key:J,class:j(E.classes),onClick:Z=>E.action&&E.action(E)},{default:o(()=>[I.value?(p(),L(r(v),{key:0,class:"m-table-select-column"},{default:o(()=>[O($.$slots,"select",{row:E,selected:E.selected},()=>[l(r(u),{size:"sm","model-value":E.selected,"onUpdate:modelValue":Z=>tn(Z,J)},null,8,["model-value","onUpdate:modelValue"])],!0)]),_:2},1024)):_("",!0),(p(!0),S(G,null,ne(pe.value,({key:Z,align:De,classes:Ve},Ee)=>(p(),L(r(v),{key:Ee,align:De,class:j(Ve)},{default:o(()=>[Z?O($.$slots,"cell",{key:0,row:E,value:E[Z]},()=>[O($.$slots,`cell-${Z}`,{row:E,value:E[Z]},()=>[t(W(E[Z]),1)],!0)],!0):_("",!0)]),_:2},1032,["align","class"]))),128)),$.$slots.actions?(p(),L(r(v),{key:1},{default:o(()=>[O($.$slots,"actions",{row:E},void 0,!0)]),_:2},1024)):_("",!0)]),_:2},1032,["class","onClick"]))),128)):(p(),L(r(C),{key:1},{default:o(()=>[l(r(v),{colspan:pe.value.length+(I.value?1:0)+($.$slots.actions?1:0)},{default:o(()=>[O($.$slots,"no-results",{},()=>[i("p",Hl,[O($.$slots,"no-results-text",{},()=>[t(W(A.value.noResults),1)],!0)])],!0)]),_:3},8,["colspan"])]),_:3}))],!0)],2)],6)],2),Xt.value?(p(),S("div",jl,[Q[4]||(Q[4]=i("div",{class:"m-table-spacer"},null,-1)),a.pagination?(p(),S("div",Gl,[i("div",Yl,[i("span",Xl,W(A.value.pagination.rowsPerPage),1),l(r(b),{modelValue:K.value,"onUpdate:modelValue":Q[3]||(Q[3]=E=>K.value=E),options:y.value,"rounded-size":a.roundedSize,size:a.inputSize??r(T),color:a.color,"list-position":"top",style:{width:"5rem"}},null,8,["modelValue","options","rounded-size","size","color"])]),F.value?(p(),S("span",Jl,W(le.value.from)+" - "+W(le.value.to)+" "+W(A.value.pagination.of)+" "+W(q.value),1)):_("",!0),i("div",Zl,[l(r(d),{disabled:P.value===1,size:a.inputSize??r(T),color:"transparent","rounded-size":a.roundedSize,onClick:ue},{default:o(()=>[l(r(wt),{class:"maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),l(r(d),{disabled:P.value===1,size:a.inputSize??r(T),color:"transparent","rounded-size":a.roundedSize,onClick:oe},{default:o(()=>[l(r(kt),{class:"maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),l(r(d),{disabled:P.value===F.value,size:a.inputSize??r(T),color:"transparent","rounded-size":a.roundedSize,onClick:me},{default:o(()=>[l(r(kt),{class:"maz-rotate-180 maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),l(r(d),{disabled:P.value===F.value,size:a.inputSize??r(T),color:"transparent","rounded-size":a.roundedSize,onClick:de},{default:o(()=>[l(r(wt),{class:"maz-rotate-180 maz-text-base"})]),_:1},8,["disabled","size","rounded-size"])])])):_("",!0)])):_("",!0)],2))}}),Me=Oe(eo,[["__scopeId","data-v-70f92976"]]);let Ct;function Le(){yn(a=>{clearTimeout(Ct),Ct=setTimeout(()=>{requestAnimationFrame(()=>{a.resize()})},300)})}const to={class:"flex flex-col mt-22 mb-16 items-center"},no={class:"flex items-center Varela text-3xl"},lo=R({__name:"commands",setup(a){const s=Et(),e=s.pluginsList.map(d=>d.specialCommands.map(u=>({...u,plugin:d.name}))).flat(),n=s.pluginsList.map(d=>d.commandSignifiers.map(u=>({...u,plugin:d.name}))).flat();return(d,u)=>{const m=X,g=ke,b=D,v=Me,C=Ae;return p(),S("div",null,[i("div",to,[i("div",no,[l(m,{name:"i-lucide-zap",class:"mr-2"}),u[1]||(u[1]=t(` Commands
      `))]),u[2]||(u[2]=t()),u[3]||(u[3]=i("div",{class:"text-md outfit"},"Special commands & command signifiers",-1))]),u[19]||(u[19]=t()),l(N,{type:"tip",style:{width:"100%"}},{default:o(()=>[u[5]||(u[5]=t(`
      Please check the
      `)),l(U,{url:"/documentation?section=api-documentation"},{default:o(()=>u[4]||(u[4]=[t(`
        API Documentation
      `)])),_:1,__:[4]}),u[6]||(u[6]=t(`
       for further details on the content covered on this page
    `))]),_:1,__:[5,6]}),u[20]||(u[20]=t()),l(N,{type:"warning",style:{width:"100%"},class:"outfit"},{default:o(()=>u[7]||(u[7]=[i("span",{class:"font-bold"},`Special commands and command signifiers are
        case-sensitive`,-1),t(` to
      ensure they do not
      interfere with other functions of the app or plugins
    `)])),_:1,__:[7]}),u[21]||(u[21]=t()),l(C,{class:"w-full m-2",contentClass:"!p-0","onUpdate:modelValue":u[0]||(u[0]=()=>r(Le)())},{"title-1":o(()=>u[8]||(u[8]=[t(`
        All special commands from recognized plugins
      `)])),"content-1":o(()=>[l(g,{ui:{border:"dark:border-gray-600"}}),u[11]||(u[11]=t()),l(v,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",inputSize:"sm",headers:[{label:"Plugin",key:"plugin",width:"12rem"},{label:"Default Special Command",key:"command",width:"10rem"},{label:"Use",key:"use",width:"18rem"},{label:"Notes",key:"notes"}],rows:r(e)},{"cell-notes":o(({value:k})=>[i("ul",null,[(p(!0),S(G,null,ne(k,(h,A)=>(p(),S("li",{key:A},W(h),1))),128))])]),"cell-plugin":o(({value:k})=>[l(U,{url:"/plugin/"+k.replace(" ","~")},{default:o(()=>[t(W(k),1)]),_:2},1032,["url"])]),"cell-command":o(({value:k})=>[l(b,{inline:""},{default:o(()=>[t(" "+W(k)+" ",1)]),_:2},1024)]),_:1,__:[9,10]},8,["rows"])]),"title-2":o(()=>u[12]||(u[12]=[t(`
        All command signifiers from recognized plugins
      `)])),"content-2":o(()=>[l(g,{ui:{border:"dark:border-gray-600"}}),u[15]||(u[15]=t()),l(v,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",inputSize:"sm",headers:[{label:"Plugin",key:"plugin",width:"12rem"},{label:"Default Command Signifier",key:"signifier",width:"12rem"},{label:"Use",key:"use",width:"16rem"},{label:"Notes",key:"notes"}],rows:r(n)},{"cell-notes":o(({value:k})=>[i("ul",null,[(p(!0),S(G,null,ne(k,(h,A)=>(p(),S("li",{key:A},W(h),1))),128))])]),"cell-plugin":o(({value:k})=>[l(U,{url:"/plugin/"+k.replace(" ","~")},{default:o(()=>[t(W(k),1)]),_:2},1032,["url"])]),"cell-signifier":o(({value:k})=>[l(b,{inline:""},{default:o(()=>[t(" "+W(k)+" ",1)]),_:2},1024)]),_:1,__:[13,14]},8,["rows"])]),_:1,__:[16,17,18]})])}}}),oo=["id","disabled","onClick"],io={class:"m-stepper__header__wrapper"},so={class:"m-stepper__header__point__wrapper"},ao={class:"m-stepper__count --primary"},ro={class:"m-stepper__count__circle"},uo={class:"m-stepper__header__content"},mo={class:"m-stepper__title"},po=["innerHTML"],fo={key:0,class:"m-stepper__subtitle"},go=["innerHTML"],vo={key:0,class:"m-stepper__right"},yo=["innerHTML"],co={class:"m-stepper__content__wrapper"},bo=["innerHTML"],ko=R({__name:"MazStepper",props:{modelValue:{},steps:{},color:{default:"primary"},disabledNextSteps:{type:Boolean},disabledPreviousSteps:{type:Boolean},autoValidateSteps:{type:Boolean},allStepsOpened:{type:Boolean},allStepsValidated:{type:Boolean},canCloseSteps:{type:Boolean}},emits:["update:model-value"],setup(a,{emit:s}){const e=s,n=ae(()=>re(()=>import("./C3u73O0y.js"),__vite__mapDeps([38,18,1,2,39]),import.meta.url)),d=ae(()=>re(()=>import("./C9ieiDLN.js").then(f=>f.a),__vite__mapDeps([28,29,30,31,1,2,25,26,32]),import.meta.url)),u=M(()=>`hsl(var(--maz-${a.color}))`),m=M(()=>`hsl(var(--maz-${a.color}-foreground))`),g=We(),b=M(()=>{var f;return Object.keys(g).filter(P=>P.startsWith("content-")).length||((f=a.steps)==null?void 0:f.filter(P=>P.content).length)||0}),v=H(1),C=M({get:()=>a.modelValue??v.value,set:f=>{v.value=f,e("update:model-value",f)}});function k(f){return c(f)?{icon:cn,class:"--success"}:w(f)?{icon:bn,class:"--warning"}:B(f)?{icon:kn,class:"--error"}:{class:"--normal"}}function h(f){var P,y;return(y=(P=a.steps)==null?void 0:P[f-1])==null?void 0:y.icon}function A(f,P){var y,V;return(V=(y=a.steps)==null?void 0:y[P-1])==null?void 0:V[f]}function z(f){C.value===f&&a.canCloseSteps?C.value=0:f<1?C.value=1:f>b.value?C.value=b.value:C.value=f}function T(f,P){var F,q;const y=f==="titleInfo"?"title-info":f,V=Object.keys(g).filter(Y=>Y.startsWith(`${y}-`)).includes(`${y}-${P}`),K=!!((q=(F=a.steps)==null?void 0:F[P-1])!=null&&q[f]);return V||K}function c(f){var K,F;const P=(F=(K=a.steps)==null?void 0:K[f-1])==null?void 0:F.success,y=B(f)||w(f),V=a.autoValidateSteps&&f<C.value&&!y;return P??(V||a.allStepsValidated)}function x(f){var F,q;const P=(q=(F=a.steps)==null?void 0:F[f-1])==null?void 0:q.disabled,y=C.value===f&&!a.canCloseSteps,V=a.disabledNextSteps&&f>C.value,K=a.disabledPreviousSteps&&f<C.value;return P??(y||V||K||a.allStepsOpened)}function B(f){var P,y;return(y=(P=a.steps)==null?void 0:P[f-1])==null?void 0:y.error}function w(f){var P,y;return(y=(P=a.steps)==null?void 0:P[f-1])==null?void 0:y.warning}function I(f){return f===b.value}return(f,P)=>(p(),S("div",{class:"m-stepper m-reset-css",style:ce([{"--round-step-bg-color":u.value,"--round-step-text-color":m.value}])},[(p(!0),S(G,null,ne(b.value,y=>(p(),S(G,{key:y},[T("title",y)?(p(),S("button",{key:0,id:`header-step-${y}`,type:"button",disabled:x(y),class:j(["m-stepper__header",[{"--is-current-step":y===C.value||a.allStepsOpened,"--disabled":y!==C.value&&!a.allStepsOpened&&x(y)},`${k(y).class}`]]),onClick:V=>z(y)},[i("div",io,[i("div",so,[O(f.$slots,"point",{step:y},()=>[i("span",ao,[i("div",ro,[k(y).icon?(p(),L(_e(k(y).icon),{key:0,class:"icon maz-text-xl"})):_("",!0)]),O(f.$slots,`icon-${y}`,{},()=>[h(y)?(p(),S(G,{key:0},[typeof h(y)=="string"?(p(),L(r(n),{key:0,name:h(y)},null,8,["name"])):h(y)?(p(),L(_e(h(y)),{key:1})):_("",!0)],64)):(p(),S(G,{key:1},[t(W(y),1)],64))],!0)])],!0)]),i("div",uo,[i("span",mo,[O(f.$slots,`title-${y}`,{},()=>[A("title",y)?(p(),S("span",{key:0,innerHTML:A("title",y)},null,8,po)):_("",!0)],!0)]),T("subtitle",y)?(p(),S("span",fo,[O(f.$slots,`subtitle-${y}`,{},()=>[A("subtitle",y)?(p(),S("span",{key:0,innerHTML:A("subtitle",y)},null,8,go)):_("",!0)],!0)])):_("",!0)])]),T("titleInfo",y)?(p(),S("span",vo,[O(f.$slots,`title-info-${y}`,{},()=>[A("titleInfo",y)?(p(),S("span",{key:0,innerHTML:A("titleInfo",y)},null,8,yo)):_("",!0)],!0)])):_("",!0)],10,oo)):_("",!0),i("div",{class:j(["m-stepper__content",{"--no-border":I(y)}])},[l(r(d),{"model-value":a.allStepsOpened||C.value===y,"aria-labelledby":`header-step-${y}`},{default:o(()=>[i("div",co,[O(f.$slots,`content-${y}`,{validated:c(y),error:B(y),warning:w(y),nextStep:()=>z(y+1),previousStep:()=>z(y-1)},()=>[A("content",y)?(p(),S("span",{key:0,innerHTML:A("content",y)},null,8,bo)):_("",!0)],!0)])]),_:2},1032,["model-value","aria-labelledby"])],2)],64))),128))],4))}}),xo=Oe(ko,[["__scopeId","data-v-1f5f1962"]]),wo={class:"flex gap-1"},So={class:"flex gap-1"},To={class:"flex gap-1"},Co={class:"flex gap-1"},ho={class:"flex items-center"},Io=R({__name:"creatingPlugin",setup(a){return(s,e)=>{const n=D,d=se,u=X,m=ke,g=Ae;return p(),S(G,null,[l(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[i("span",wo,[e[2]||(e[2]=t(`
      To create the plugin itself, create a class that inherits from
      `)),l(n,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" Plugin ")])),_:1,__:[1]})]),e[22]||(e[22]=t(`
    (You do not need to implement all methods)
    `)),l(N,{type:"info",class:"m-2",style:{width:"calc(100% - 1rem)"}},{default:o(()=>[i("span",So,[l(n,{inline:""},{default:o(()=>e[3]||(e[3]=[t(" OnQueryChange ")])),_:1,__:[3]}),e[5]||(e[5]=t(` is the method that is called by
        the
        `)),l(n,{inline:""},{default:o(()=>e[4]||(e[4]=[t(" SearchWindow ")])),_:1,__:[4]}),e[6]||(e[6]=t(` when a user types in a query.
      `))]),e[10]||(e[10]=t(`
      In this method, you should create your list item objects, filter them
      (if needed), and return them in a list.
      `)),e[11]||(e[11]=i("br",null,null,-1)),e[12]||(e[12]=i("br",null,null,-1)),e[13]||(e[13]=t(`
      When returning items for a special command, you will need to sort the
      list yourself.
      `)),i("span",To,[e[8]||(e[8]=t(`
        Normal results (those returned in
        `)),l(n,{inline:""},{default:o(()=>e[7]||(e[7]=[t(" OnQueryChange ")])),_:1,__:[7]}),e[9]||(e[9]=t(` ) do not need to be sorted as
        Quokka
        will sort them
      `))]),e[14]||(e[14]=t(`
      once it has results from all of the plugins the
      program is using during runtime.
    `))]),_:1,__:[10,11,12,13,14]}),e[23]||(e[23]=t()),l(N,{type:"tip",class:"m-2",style:{width:"calc(100% - 1rem)"}},{default:o(()=>[i("span",Co,[e[20]||(e[20]=t(`See
        `)),l(U,{url:"https://github.com/Faeq-F/Quokka/blob/main/Quokka/PluginArch/Plugin.cs",target:"_blank",class:"flex"},{default:o(()=>[e[16]||(e[16]=i("span",null,"the  ",-1)),e[17]||(e[17]=t()),l(n,{inline:"",class:"!border-0"},{default:o(()=>e[15]||(e[15]=[t("Plugin")])),_:1,__:[15]}),e[18]||(e[18]=t()),e[19]||(e[19]=i("span",null,"  class",-1))]),_:1,__:[16,17,18,19]}),e[21]||(e[21]=t(`
        for more information
      `))])]),_:1})]),_:1,__:[22,23]}),e[35]||(e[35]=t()),l(g,{class:"m-2","onUpdate:modelValue":e[0]||(e[0]=()=>r(Le)()),style:{width:"calc(100% - 0.5rem)","--maz-color-primary-alpha-20":"var(--maz-color-secondary-alpha-20)","--maz-color-primary-alpha":"var(--maz-color-secondary-alpha)"}},{"title-1":o(()=>[i("div",ho,[l(u,{name:"i-lucide-lightbulb",class:"!size-5 min-w-5",style:{color:"#d2afff"}}),e[27]||(e[27]=t()),l(m,{orientation:"vertical",class:"h-7 mx-3",ui:{border:"dark:border-gray-600 h-full"}}),e[28]||(e[28]=t()),i("div",null,[e[25]||(e[25]=t(`
          See an example from the
          `)),l(U,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:o(()=>e[24]||(e[24]=[t(`
            ShowTypedText plugin
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
        `)),l(U,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:o(()=>e[30]||(e[30]=[t(`
          ShowTypedText plugin
        `)])),_:1,__:[30]}),e[32]||(e[32]=t(`
         (a demo plugin not made for use)
      `))])]),_:1,__:[34]})],64)}}}),$o={class:"flex gap-1"},Po={class:"flex gap-1"},zo=R({__name:"creatingProject",setup(a){return(s,e)=>{const n=D,d=se;return p(),S(G,null,[l(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[e[24]||(e[24]=t(`
    To start:
    `)),i("ol",null,[i("li",null,[e[2]||(e[2]=t(`
        Open
        `)),l(U,{url:"https://visualstudio.microsoft.com/#vs-section",target:"_blank"},{default:o(()=>e[0]||(e[0]=[t(`
          Visual Studio
        `)])),_:1,__:[0]}),e[3]||(e[3]=t(`
         & clone
        `)),l(U,{url:"https://github.com/faeq-f/quokka/",target:"_blank"},{default:o(()=>e[1]||(e[1]=[t(`
          Quokka
        `)])),_:1,__:[1]})]),e[21]||(e[21]=t()),i("li",null,[i("span",$o,[e[6]||(e[6]=t(`
          In the solution, create a project of type
          `)),l(n,{inline:""},{default:o(()=>e[4]||(e[4]=[t(" WPF class library ")])),_:1,__:[4]}),e[7]||(e[7]=t(`
          , naming it
          `)),l(n,{inline:""},{default:o(()=>e[5]||(e[5]=[t(" Plugin_YourPluginNameHere ")])),_:1,__:[5]})]),e[8]||(e[8]=t(`
        (make sure that it is a part of the Quokka solution
        and that it is not its own)
      `))]),e[22]||(e[22]=t()),i("li",null,[i("span",Po,[e[11]||(e[11]=t(`
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
              <Nullable>enable</Nullable>
              <LangVersion>10.0</LangVersion>
              <UseWPF>true</UseWPF>
              <PublishSingleFile>true</PublishSingleFile>
              <SelfContained>true</SelfContained>
              <DebugType>embedded</DebugType>
              <AppendTargetFrameworkToOutputPath>false</AppendTargetFrameworkToOutputPath>
              <AppendRuntimeIdentifierToOutputPath>false</AppendRuntimeIdentifierToOutputPath>

              <Product>Plugin_ShowTypedText</Product>
              <BaseOutputPath>
                G:\\Quokka\\Quokka\\PlugBoard\\Plugin_ShowTypedText
              </BaseOutputPath>
              <Configurations>Debug;Release;Plugin</Configurations>
            </PropertyGroup>

            <PropertyGroup>
              <GenerateDocumentationFile>true</GenerateDocumentationFile>
              <PlatformTarget>AnyCPU</PlatformTarget>
            </PropertyGroup>

            <ItemGroup>
              <ProjectReference Include="..\\Quokka\\Quokka.csproj" />
            </ItemGroup>

          </Project>
        `)])),_:1,__:[13]}),e[20]||(e[20]=t()),i("blockquote",null,[e[15]||(e[15]=t(`
          This is a part of the
          `)),l(U,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:o(()=>e[14]||(e[14]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[14]}),e[16]||(e[16]=t(`
           (a demo plugin not made for use)
        `))])])])]),_:1,__:[24]}),e[27]||(e[27]=t()),l(N,{type:"tip",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[e[26]||(e[26]=t(`
    To add extra files in the plugin's folder, for e.g., a settings file
    for the plugin, you can add the following to the project file;
    `)),l(n,{lang:"markup"},{default:o(()=>e[25]||(e[25]=[t(`
            <ItemGroup>
              <ContentWithTargetPath Include="settings.json">
                <CopyToOutputDirectory>Always</CopyToOutputDirectory>
                <TargetPath>settings.json</TargetPath>
              </ContentWithTargetPath>
            </ItemGroup>
          `)])),_:1,__:[25]})]),_:1,__:[26]})],64)}}}),Bo=Be("/media/Docs/ListItems.png"),Ao={class:"flex gap-1"},Mo={class:"flex gap-1"},Lo={class:"flex gap-1"},Do={class:"flex gap-1"},Vo={class:"flex gap-1"},Eo={class:"flex gap-1"},Fo={class:"flex gap-1"},Ro=R({__name:"creatingNewItemType",setup(a){return(s,e)=>{const n=D,d=se;return p(),S(G,null,[l(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[e[15]||(e[15]=t(`
    Most plugins will want to show results to the user in the form of
    an item on the results list in the search window.`)),e[16]||(e[16]=i("br",null,null,-1)),e[17]||(e[17]=t(`
    To do so, first create an item type to define how your
    results are displayed;
    `)),e[18]||(e[18]=i("br",null,null,-1)),e[19]||(e[19]=i("br",null,null,-1)),e[20]||(e[20]=t()),i("ol",null,[i("li",null,[i("span",Ao,[e[1]||(e[1]=t(`
          In the
          `)),l(n,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" .cs ")])),_:1,__:[0]}),e[2]||(e[2]=t(`
          file add
        `))]),e[4]||(e[4]=t()),l(n,{lang:"cs"},{default:o(()=>e[3]||(e[3]=[t(`
          using Quokka.PluginArch;
          using Quokka.ListItems;
        `)])),_:1,__:[3]})]),e[14]||(e[14]=t()),i("li",null,[i("span",Mo,[e[6]||(e[6]=t(`
          Create a
          `)),l(n,{inline:""},{default:o(()=>e[5]||(e[5]=[t(" ListItem ")])),_:1,__:[5]}),e[7]||(e[7]=t(`
          class for your item type
        `))]),e[12]||(e[12]=t()),l(n,{lang:"cs"},{default:o(()=>e[8]||(e[8]=[t(`
          class TypedTextItem : ListItem {
            public string query;

            public TypedTextItem(string query) {
              this.Name = "Typed:" + query;
              this.query = query;
              this.Description = "The search field contains the above text";
              this.Icon = new BitmapImage(new Uri(
                Environment.CurrentDirectory +
                "\\\\Config\\\\Resources\\\\information.png"));
            }

            //When item is selected, copy text
            public override void Execute() {
              Clipboard.SetText(query);
              App.Current.MainWindow.Close();
            }
          }
        `)])),_:1,__:[8]}),e[13]||(e[13]=t()),i("blockquote",null,[e[10]||(e[10]=t(`
          This is a part of the
          `)),l(U,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:o(()=>e[9]||(e[9]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[9]}),e[11]||(e[11]=t(`
           (a demo plugin not made for use)
        `))])])])]),_:1,__:[15,16,17,18,19,20]}),e[46]||(e[46]=t()),l(N,{type:"warning",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[i("span",Lo,[e[22]||(e[22]=t(`
      A `)),l(n,{inline:""},{default:o(()=>e[21]||(e[21]=[t(" ListItem ")])),_:1,__:[21]}),e[23]||(e[23]=t(`
      must have the following:
    `))]),e[41]||(e[41]=t()),i("ul",null,[i("li",null,[i("span",Do,[e[25]||(e[25]=t("an ")),l(n,{inline:""},{default:o(()=>e[24]||(e[24]=[t(" Icon ")])),_:1,__:[24]})])]),e[38]||(e[38]=t()),i("li",null,[i("span",Vo,[e[27]||(e[27]=t("a ")),l(n,{inline:""},{default:o(()=>e[26]||(e[26]=[t(" Name ")])),_:1,__:[26]})])]),e[39]||(e[39]=t()),i("li",null,[i("span",Eo,[e[29]||(e[29]=t("a ")),l(n,{inline:""},{default:o(()=>e[28]||(e[28]=[t(" Description ")])),_:1,__:[28]})])]),e[40]||(e[40]=t()),i("li",null,[i("span",Fo,[e[32]||(e[32]=t(`
          an `)),l(n,{inline:""},{default:o(()=>e[30]||(e[30]=[t(" Execute ")])),_:1,__:[30]}),e[33]||(e[33]=t(`
          method to define what should happen when the
          `)),l(n,{inline:""},{default:o(()=>e[31]||(e[31]=[t(" ListItem ")])),_:1,__:[31]}),e[34]||(e[34]=t(` is run
        `))]),e[35]||(e[35]=t(`
        (i.e., what happens when the user hits the `)),e[36]||(e[36]=i("kbd",null,"↵",-1)),e[37]||(e[37]=t(` key with
        that item selected)
      `))])]),e[42]||(e[42]=t()),e[43]||(e[43]=i("br",null,null,-1)),e[44]||(e[44]=t()),e[45]||(e[45]=i("img",{src:Bo},null,-1))]),_:1,__:[41,42,43,44,45]})],64)}}}),_o={class:"flex gap-1"},Ko={class:"flex gap-1"},qo={class:"flex gap-1"},Wo={class:"flex gap-1"},Oo={class:"flex gap-1"},Uo={class:"flex items-center"},Qo=R({__name:"creatingContextPane",setup(a){return(s,e)=>{const n=D,d=se,u=X,m=ke,g=Ae;return p(),S(G,null,[l(N,{type:"info",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[i("span",_o,[e[2]||(e[2]=t(`
      A context pane is displayed when the user hits the
      `)),l(n,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" ContextPaneKey ")])),_:1,__:[1]}),e[3]||(e[3]=t(`
      , replacing the item list.
    `))]),e[7]||(e[7]=t()),i("span",Ko,[e[5]||(e[5]=t(`
      If the selected item does not have a context pane defined,
      nothing happens when the
      `)),l(n,{inline:""},{default:o(()=>e[4]||(e[4]=[t(" ContextPaneKey ")])),_:1,__:[4]}),e[6]||(e[6]=t(`
      is hit.
    `))])]),_:1,__:[7]}),e[36]||(e[36]=t()),l(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:o(()=>[e[24]||(e[24]=t(`
    To define the context pane for an item type:
    `)),i("ol",null,[i("li",null,[i("span",qo,[e[10]||(e[10]=t(`
          In the project, add a
          `)),l(n,{inline:""},{default:o(()=>e[8]||(e[8]=[t(" WPF Page ")])),_:1,__:[8]}),e[11]||(e[11]=t(`
          called `)),l(n,{inline:""},{default:o(()=>e[9]||(e[9]=[t(" ContextPane ")])),_:1,__:[9]})])]),e[22]||(e[22]=t()),i("li",null,[i("span",Wo,[e[13]||(e[13]=t(`
          Ensure `)),l(n,{inline:"",lang:"cs"},{default:o(()=>e[12]||(e[12]=[t(" ContextPane : ItemContextPane ")])),_:1,__:[12]})]),e[19]||(e[19]=t()),i("span",Oo,[e[16]||(e[16]=t(`
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
        `)])),_:1,__:[20]})])])]),_:1,__:[24]}),e[37]||(e[37]=t()),l(g,{class:"m-2","onUpdate:modelValue":e[0]||(e[0]=()=>r(Le)()),style:{width:"calc(100% - 0.5rem)","--maz-color-primary-alpha-20":"var(--maz-color-secondary-alpha-20)","--maz-color-primary-alpha":"var(--maz-color-secondary-alpha)"}},{"title-1":o(()=>[i("div",Uo,[l(u,{name:"i-lucide-lightbulb",class:"!size-5 min-w-5",style:{color:"#d2afff"}}),e[30]||(e[30]=t()),l(m,{orientation:"vertical",class:"h-7 mx-3",ui:{border:"dark:border-gray-600 h-full"}}),e[31]||(e[31]=t()),i("div",null,[e[26]||(e[26]=t(`
          A context pane tends to have extra information or actions.`)),e[27]||(e[27]=i("br",null,null,-1)),e[28]||(e[28]=t(`
          See an example from the
          `)),l(U,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:o(()=>e[25]||(e[25]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[25]}),e[29]||(e[29]=t(`
           (a demo plugin not made for use)
        `))])])]),"content-1":o(()=>[l(n,{lang:"markup"},{default:o(()=>e[32]||(e[32]=[t(`
        <src:ItemContextPane x:Class="Plugin_ShowTypedText.ContextPane"
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

        namespace Plugin_ShowTypedText {

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
      `)])),_:1,__:[33]})]),_:1,__:[35]})],64)}}}),No={class:"flex flex-col mt-22 mb-16 items-center"},Ho={class:"flex items-center Varela text-3xl"},jo=R({__name:"creatingPlugin",setup(a){return(s,e)=>{const n=X,d=N,u=xo;return p(),S("div",null,[i("div",No,[i("div",Ho,[l(n,{name:"i-lucide-toy-brick",class:"mr-2"}),e[1]||(e[1]=t(` Creating a Plugin
      `))]),e[2]||(e[2]=t()),e[3]||(e[3]=i("div",{class:"text-md outfit"},`Creating new item types & producing their
        plugin`,-1))]),e[13]||(e[13]=t()),l(d,{type:"info",class:"w-full"},{default:o(()=>[e[5]||(e[5]=t(`
      Quokka is licensed under the
      `)),l(U,{blank:"",url:"https://github.com/Faeq-F/Quokka/blob/main/LICENCE"},{default:o(()=>e[4]||(e[4]=[t(` GNU
        General Public License v3.0`)])),_:1,__:[4]})]),_:1,__:[5]}),e[14]||(e[14]=t()),e[15]||(e[15]=i("div",{class:"mb-2 mt-4"},"Steps",-1)),e[16]||(e[16]=t()),l(u,{steps:[{title:"Creating the project"},{title:"Creating a new item type"},{title:"Creating a context pane (optional)"},{title:"Creating the plugin"}],"can-close-steps":"",color:"neutral","onUpdate:modelValue":e[0]||(e[0]=()=>r(Le)())},{"icon-1":o(()=>[l(n,{name:"i-lucide-folder-kanban"})]),"content-1":o(()=>[l(zo)]),"icon-2":o(()=>[l(n,{name:"i-lucide-list"})]),"content-2":o(()=>[l(Ro)]),"icon-3":o(()=>[l(n,{name:"i-lucide-panels-top-left"})]),"content-3":o(()=>[l(Qo)]),"icon-4":o(()=>[l(n,{name:"i-lucide-unplug"})]),"content-4":o(()=>[l(Io)]),_:1,__:[6,7,8,9,10,11,12]})])}}}),Go={class:"flex flex-col mt-22 mb-16 items-center"},Yo={class:"flex items-center Varela text-3xl"},Xo=R({__name:"faq",setup(a){return(s,e)=>{const n=X,d=Ae;return p(),S("div",null,[i("div",Go,[i("div",Yo,[l(n,{name:"i-lucide-circle-help",class:"mr-2"}),e[0]||(e[0]=t(` FAQ by Developers
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=i("div",{class:"text-md outfit"},"Answers to frequently asked questions",-1))]),e[30]||(e[30]=t()),l(d,{class:"w-full m-2"},{"title-1":o(()=>e[3]||(e[3]=[i("p",null,`
          How do I use a 3rd party library in my plugin?
        `,-1)])),"content-1":o(()=>[e[12]||(e[12]=t(`
        You must install the package (likely through `)),l(U,{url:"https://www.nuget.org/"},{default:o(()=>e[4]||(e[4]=[t("NuGet")])),_:1,__:[4]}),e[13]||(e[13]=t(` ) for your
        plugin's project. Unfortunately this is not enough since Quokka will
        need the package reference of the library. You will have to use
        `)),l(U,{url:"https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection"},{default:o(()=>e[5]||(e[5]=[t(`
          reflection
        `)])),_:1,__:[5]}),e[14]||(e[14]=t(` 
        to load the library at runtime and use the classes it provides.
        You can use
        `)),l(U,{url:"https://github.com/NdubuisiJr/TypeExtender"},{default:o(()=>e[6]||(e[6]=[t(`
          TypeExtender`)])),_:1,__:[6]}),e[15]||(e[15]=t(` too (Quokka has a reference to this).
        You can have a look at the following plugins as examples as to how
        to do this:`)),e[16]||(e[16]=i("br",null,null,-1)),e[17]||(e[17]=i("br",null,null,-1)),e[18]||(e[18]=t()),i("ul",null,[i("li",null,[l(U,{url:""},{default:o(()=>e[7]||(e[7]=[t(`
              Plugin_Calculator
            `)])),_:1,__:[7]})]),e[10]||(e[10]=t()),i("li",null,[l(U,{url:""},{default:o(()=>e[8]||(e[8]=[t(`
              Plugin_EnglishDictionary
            `)])),_:1,__:[8]})]),e[11]||(e[11]=t()),i("li",null,[l(U,{url:""},{default:o(()=>e[9]||(e[9]=[t(`
              Plugin_Everything
            `)])),_:1,__:[9]})])]),e[19]||(e[19]=i("br",null,null,-1))]),_:1,__:[20]}),e[31]||(e[31]=t()),l(d,{class:"w-full m-2"},{"title-1":o(()=>e[21]||(e[21]=[i("p",null,`
          Q2
        `,-1)])),"content-1":o(()=>e[22]||(e[22]=[t(`
        Q2 ans
      `)])),_:1,__:[23]}),e[32]||(e[32]=t()),l(d,{class:"w-full m-2"},{"title-1":o(()=>e[24]||(e[24]=[i("p",null,`
          Q3
        `,-1)])),"content-1":o(()=>e[25]||(e[25]=[t(`
        Q3 ans
      `)])),_:1,__:[26]}),e[33]||(e[33]=t()),l(d,{class:"w-full m-2"},{"title-1":o(()=>e[27]||(e[27]=[i("p",null,`
          Q4
        `,-1)])),"content-1":o(()=>e[28]||(e[28]=[t(`
        Q4 ans
      `)])),_:1,__:[29]})])}}}),Jo=R({__name:"MazTableCell",setup(a){const{size:s}=Ft(nt);return(e,n)=>(p(),S("td",{class:j(["m-table-cell m-reset-css",[`--${r(s)}`]])},[O(e.$slots,"default",{},void 0,!0)],2))}}),lt=Oe(Jo,[["__scopeId","data-v-83698c73"]]),Zo=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),ei=R({__name:"MazTableRow",props:{hoverable:{type:Boolean,default:!0},isHead:{type:Boolean,default:!1}},setup(a){const{backgroundEven:s,backgroundOdd:e,hoverable:n}=Ft(nt);return(d,u)=>(p(),S("tr",{class:j(["m-table-row m-reset-css",{"--hoverable":r(n)&&a.hoverable&&!a.isHead,"--background-odd":r(e),"--background-even":r(s)}])},[O(d.$slots,"default",{},void 0,!0)],2))}}),ot=Oe(ei,[["__scopeId","data-v-6d32024a"]]),ti=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"})),ni={class:"flex flex-col mt-22 mb-16 items-center"},li={class:"flex items-center Varela text-3xl"},oi={class:"flex gap-1"},ii={class:"flex gap-1"},si={class:"flex gap-1"},ai=R({__name:"generalUsage",setup(a){return(s,e)=>{const n=X,d=se,u=lt,m=ot,g=Me;return p(),S("div",null,[i("div",ni,[i("div",li,[l(n,{name:"i-lucide-mouse-pointer",class:"mr-2"}),e[0]||(e[0]=t(` General Usage
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=i("div",{class:"text-md outfit"},"Running the app & default keys",-1))]),e[39]||(e[39]=t()),l(d,{class:"w-full m-2"},{default:o(()=>[i("span",oi,[e[4]||(e[4]=t(`
        To use the app, run
        `)),l(D,{inline:""},{default:o(()=>e[3]||(e[3]=[t(" Quokka.exe ")])),_:1,__:[3]}),e[5]||(e[5]=t(`
        (in the root folder)
      `))])]),_:1}),e[40]||(e[40]=t()),l(d,{class:"w-full m-2",padding:!1},{default:o(()=>[l(g,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",headers:["Default keys / shortcuts","Use","Notes"]},{default:o(()=>[l(m,null,{default:o(()=>[l(u,{style:{"font-size":"1rem"}},{default:o(()=>e[6]||(e[6]=[i("kbd",null,"Left Alt",-1),t("+"),i("kbd",null,"Space",-1)])),_:1,__:[6]}),e[14]||(e[14]=t()),l(u,null,{default:o(()=>e[7]||(e[7]=[t(`
            Launches the search bar
          `)])),_:1,__:[7]}),e[15]||(e[15]=t()),l(u,{style:{"font-size":"1rem",width:"43%"}},{default:o(()=>[i("span",ii,[e[13]||(e[13]=t(`This shortcut is modifiable; see
              `)),l(U,{url:"",class:"flex"},{default:o(()=>[e[9]||(e[9]=i("span",null,"the  ",-1)),e[10]||(e[10]=t()),l(D,{inline:"",class:"!border-0"},{default:o(()=>e[8]||(e[8]=[t("WindowHotKey")])),_:1,__:[8]}),e[11]||(e[11]=t()),e[12]||(e[12]=i("span",null,"  setting",-1))]),_:1,__:[9,10,11,12]})])]),_:1})]),_:1,__:[14,15]}),e[36]||(e[36]=t()),l(m,null,{default:o(()=>[l(u,null,{default:o(()=>e[16]||(e[16]=[i("kbd",null,"🠙",-1),i("span",{class:"text-sm"},"&",-1),i("kbd",null,"🠛",-1)])),_:1,__:[16]}),e[19]||(e[19]=t()),l(u,null,{default:o(()=>e[17]||(e[17]=[t(`
            Select items
          `)])),_:1,__:[17]}),e[20]||(e[20]=t()),l(u,{style:{"font-size":"1rem",width:"43%"}},{default:o(()=>e[18]||(e[18]=[t(`
            The keys used cannot be changed
          `)])),_:1,__:[18]})]),_:1,__:[19,20]}),e[37]||(e[37]=t()),l(m,null,{default:o(()=>[l(u,null,{default:o(()=>e[21]||(e[21]=[i("kbd",null,"↵",-1)])),_:1,__:[21]}),e[24]||(e[24]=t()),l(u,null,{default:o(()=>e[22]||(e[22]=[t(`
            Executes the selected item (the first item if no item is selected)
          `)])),_:1,__:[22]}),e[25]||(e[25]=t()),l(u,{style:{"font-size":"1rem",width:"43%"}},{default:o(()=>e[23]||(e[23]=[t(`
            The key used cannot be changed
          `)])),_:1,__:[23]})]),_:1,__:[24,25]}),e[38]||(e[38]=t()),l(m,null,{default:o(()=>[l(u,null,{default:o(()=>e[26]||(e[26]=[i("kbd",null,"☰",-1)])),_:1,__:[26]}),e[34]||(e[34]=t()),l(u,null,{default:o(()=>e[27]||(e[27]=[t(`
            Shows context pane for item
          `)])),_:1,__:[27]}),e[35]||(e[35]=t()),l(u,{style:{"font-size":"1rem",width:"43%"}},{default:o(()=>[i("span",si,[e[33]||(e[33]=t(`This shortcut is modifiable; see
              `)),l(U,{url:"",class:"flex"},{default:o(()=>[e[29]||(e[29]=i("span",null,"the  ",-1)),e[30]||(e[30]=t()),l(D,{inline:"",class:"!border-0"},{default:o(()=>e[28]||(e[28]=[t("ContextPaneKey")])),_:1,__:[28]}),e[31]||(e[31]=t()),e[32]||(e[32]=i("span",null,"  setting",-1))]),_:1,__:[29,30,31,32]})])]),_:1})]),_:1,__:[34,35]})]),_:1,__:[36,37,38]})]),_:1})])}}}),ri={class:"flex flex-col mt-22 mb-16 items-center"},ui={class:"flex items-center Varela text-3xl"},di={class:"flex gap-1"},mi={class:"flex gap-1"},pi=R({__name:"installation",setup(a){return(s,e)=>{const n=X,d=se,u=D,m=ke;return p(),S("div",null,[i("div",ri,[i("div",ui,[l(n,{name:"i-lucide-loader",class:"mr-2"}),e[0]||(e[0]=t(` Installation
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=i("div",{class:"text-md outfit"},"Requirements, steps & suggestions",-1))]),e[31]||(e[31]=t()),l(d,{class:"w-full m-2"},{default:o(()=>[e[11]||(e[11]=t(`
      Quokka requires the following:
      `)),i("ul",null,[e[8]||(e[8]=i("li",null,`
          A computer running Windows 7 or higher
        `,-1)),e[9]||(e[9]=t()),i("li",null,[l(U,{url:""},{default:o(()=>e[3]||(e[3]=[t(`
            .NET 4.8 Framework (pre-installed on Windows 10 and 11)
          `)])),_:1,__:[3]})]),e[10]||(e[10]=t()),i("li",null,[e[5]||(e[5]=t(`
          Exclusions to any anti-malware software (including Microsoft
          defender) that is installed on your computer, for the location of the
          exe;
          `)),e[6]||(e[6]=i("br",null,null,-1)),e[7]||(e[7]=t()),l(N,{type:"warning",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>e[4]||(e[4]=[t(`
            Due to costs, binaries are not signed (e.g., with a
            Organization Validation (OV) code signing certificate).`),i("br",null,null,-1),t(`
            As a result, the Microsoft Defender SmartScreen will likely try
            to prevent the app from starting.
          `)])),_:1,__:[4]})])])]),_:1,__:[11]}),e[32]||(e[32]=t()),l(d,{class:"w-full m-2"},{default:o(()=>[e[30]||(e[30]=t(`
      To install:
      `)),i("ul",null,[i("li",null,[e[13]||(e[13]=t(`
          Go to the top of this page and click on the
          `)),l(U,{url:""},{default:o(()=>e[12]||(e[12]=[t(`
            'Download Latest Release'
          `)])),_:1,__:[12]}),e[14]||(e[14]=t(`
           button
        `))]),e[28]||(e[28]=t()),i("li",null,[i("span",di,[e[16]||(e[16]=t(`
            Download the
            `)),l(u,{inline:""},{default:o(()=>e[15]||(e[15]=[t(" Quokka.zip ")])),_:1,__:[15]}),e[17]||(e[17]=t(`
            file & extract it's contents
          `))])]),e[29]||(e[29]=t()),i("li",null,[e[26]||(e[26]=t(`
          You will want to extract / move the folder to an appropriate location.
          `)),l(N,{type:"info",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>e[18]||(e[18]=[t(`
            Quokka is a portable program by design. `),i("br",null,null,-1),t(`
            This means that you can place the folder on a external storage
            medium (e.g. a USB drive) and run the program from there.
          `)])),_:1,__:[18]}),e[27]||(e[27]=t()),l(N,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>[i("span",mi,[e[20]||(e[20]=t(`
              If you do not wish to use the program in a portable manner, I
              suggest placing the folder in
              `)),l(u,{inline:""},{default:o(()=>e[19]||(e[19]=[t(" C:\\Program Files ")])),_:1,__:[19]}),e[21]||(e[21]=t(`,
            `))]),e[23]||(e[23]=t(`
            and creating a shortcut that is pinned to the taskbar and
            / or start menu.
            `)),l(m,{class:"my-3 w-1/2 mx-auto",ui:{border:"dark:border-gray-600"}}),e[24]||(e[24]=t(`
            You can set up a task to run the program at
            startup in Task Scheduler. Alternatively see the
            `)),l(U,{url:""},{default:o(()=>e[22]||(e[22]=[t(`
              FAQ
            `)])),_:1,__:[22]}),e[25]||(e[25]=t(`
             on this.
          `))]),_:1,__:[23,24,25]})])])]),_:1,__:[30]})])}}}),fi={class:"flex flex-col mt-22 mb-16 items-center"},gi={class:"flex items-center Varela text-3xl"},vi={class:"flex gap-1"},yi=R({__name:"plugins",setup(a){const s=Et(),e=s.pluginsList.map(u=>({developed:"i-lucide-square-check",name:u.name,author:u.author,authorLink:u.authorUrl})),n=s.plannedPlugins.map(u=>({developed:u.inProgress?"In progress":"i-lucide-square",name:u.name,author:"n/a"})),d=[...e,...n];return(u,m)=>{const g=X,b=N,v=D,C=se,k=Me;return p(),S("div",null,[i("div",fi,[i("div",gi,[l(g,{name:"i-lucide-blocks",class:"mr-2"}),m[0]||(m[0]=t(` Plugins
      `))]),m[1]||(m[1]=t()),m[2]||(m[2]=i("div",{class:"text-md outfit"},"Using plugins & the plugins list",-1))]),m[11]||(m[11]=t()),l(b,{type:"warning",style:{width:"100%"}},{default:o(()=>m[3]||(m[3]=[t(`
      Only recognized plugins appear on this site — others may exist.
    `)])),_:1,__:[3]}),m[12]||(m[12]=t()),l(C,{class:"w-full m-2"},{default:o(()=>[i("span",vi,[m[5]||(m[5]=t(`
        To add a plugin, download and extract it to the
        `)),l(v,{inline:""},{default:o(()=>m[4]||(m[4]=[t(" PlugBoard ")])),_:1,__:[4]}),m[6]||(m[6]=t(` folder
      `))]),m[8]||(m[8]=t(`
      If you do not wish to use a plugin, simply delete the appropriate
      folder in the PlugBoard
      `)),l(b,{type:"info",style:{width:"calc(100% - 1rem)"}},{default:o(()=>m[7]||(m[7]=[i("span",{class:"font-bold"},"Plugins may have their own settings",-1),t(`,
        special commands, command signifiers, etc.`),i("br",null,null,-1),t(`
        Please see their folder in the PlugBoard to find their settings
        file (at the root, if there is one) and consult their documentation
        for
        default values, implemented features, etc.
      `)])),_:1,__:[7]})]),_:1,__:[8]}),m[13]||(m[13]=t()),l(C,{class:"w-full m-2",padding:!1},{default:o(()=>[l(k,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",headers:[{label:"Developed?",key:"developed",width:"18rem"},{label:"Planned / developed plugin",key:"name",width:"36rem"},{label:"Author",key:"author"}],rows:d,search:"",inputSize:"sm"},{"cell-name":o(({row:h,value:A})=>[h.authorLink?(p(),L(U,{key:0,url:"/plugin/"+h.name.replace(" ","~")},{default:o(()=>[t(W(A),1)]),_:2},1032,["url"])):_("",!0)]),"cell-author":o(({row:h,value:A})=>[h.authorLink?(p(),L(U,{key:0,url:h.authorLink},{default:o(()=>[t(W(A),1)]),_:2},1032,["url"])):_("",!0)]),"cell-developed":o(({value:h})=>[h!="In progress"?(p(),L(g,{key:0,name:h,class:"!size-5"},null,8,["name"])):_("",!0)]),_:1,__:[9,10]})]),_:1})])}}}),ci=Be("/media/AppScreenshots/LoadingItem.png"),bi=Be("/media/AppScreenshots/NoResultsItem.png"),ki=Xe("settingsStore",{state:()=>({general:[{name:"AboutCommand",defaultValue:"AboutQuokka",notes:["A special command to view the 'About Quokka' item","The 'About Quokka' item lets you copy various links, check for updates and display licenses for works used in Quokka"]},{name:"CheckForUpdates",defaultValue:"true",notes:["Whether or not Quokka should check for available updates on startup","You can check for updates using the respective item in the context pane for the 'About Quokka' item"]},{name:"WindowHotKey",defaultValue:"Space",notes:[{prevText:"The full list of keys that can be used in the setting can be found",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.keys?view=netframework-4.8",text:"here"},afterText:"(use the first column)"}]},{name:"WindowHotKeyModifier",defaultValue:"Alt",notes:[{prevText:"The full list of keys that can be used in the setting can be found highlighted",link:{url:"https://github.com/Faeq-F/Quokka/blob/main/Quokka/KeyboardHook.cs#L130-L151",text:"here"}}]},{name:"ContextPaneKey",defaultValue:"Apps",notes:[{prevText:"The full list of keys that can be used in the setting can be found",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.input.key?view=netframework-4.8",text:"here"},afterText:"(use the first column)"}]},{name:"Scorer",defaultValue:"partialRatio",notes:["The strategy for sorting list items.",{prevText:"The full list of different scorers available can be found",link:{url:"https://github.com/JakeBayer/FuzzySharp/tree/master?tab=readme-ov-file#using-different-scorers",text:"here"},afterText:"(use the word after 'var')"}]},{name:"Debounce",defaultValue:"300",notes:["The delay between the user typing the first character, and Quokka starting to load list items",{prevText:"(read more",link:{url:"https://developer.mozilla.org/en-US/docs/Glossary/Debounce",text:"here"},afterText:")"}]},{name:"MaxResults",defaultValue:"10",notes:["The maximum number of items shown in the item list"]},{name:"IgnoreMaxResultsFlag",defaultValue:"-ShowAll",notes:["Text you can type after your query to make the item list show all results for your query"]},{name:"LoadingItemName",defaultValue:"Loading...",notes:["Refer to the relevant image below"]},{name:"LoadingItemDesc",defaultValue:"Please wait",notes:["Refer to the relevant image below"]},{name:"NoResultsItemName",defaultValue:"No results found",notes:["Refer to the relevant image below"]},{name:"NoResultsItemDesc",defaultValue:"Try reformatting / rewording your query",notes:["Refer to the relevant image below"]},{name:"FileManager",defaultValue:"explorer.exe",notes:["This is the program that will open the plugboard","Plugins may use this setting to open other folders, for e.g., a file location"]},{name:"TextEditor",defaultValue:"notepad.exe",notes:["This is the program that will open the settings file","Plugins may use this setting to open other files, for e.g., their own settings file"]}],style:[{type:"Animation",notes:["The animation to be used for the items in the results list",{prevText:"Values accepted: ",values:["FadeIn","Unblur","ScaleFromLeft","ScaleFromTop","ScaleFromRight","ScaleFromBottom","ScaleHorizontally","ScaleVertically","SlideFromLeft","SlideFromTop","SlideFromRight","SlideFromBottom"]},{prevText:"",link:{url:"https://github.com/XamlFlair/XamlFlair/blob/master/XamlFlair.WPF/DefaultAnimations.xaml",text:"Reference"},afterText:""},{usedBy:["Animation"]}]},{type:"Corner Radius",notes:["Rounding corners of elements","Value should be formatted as 'TopLeft,TopRight,BottomRight,BottomLeft' or 'AllCorners'",{prevText:"E.g. ",values:["2,2,2,2","2","5,0,0,5"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.cornerradius?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["WindowRounding","TrayTaskContextMenuRounding","TrayTaskContextMenuItemRounding","SearchBarRounding","ListContainerRounding","ScrollBarBgRounding","ScrollThumbBgRounding","ScrollThumbRounding","ListItemRounding","ContextPaneCornerRounding","ContextPaneListItemRounding"]}]},{type:"Double",notes:["A decimal number",{prevText:"E.g. ",values:["2.0","2","5.88"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.double?view=net-10.0",text:"Reference"},afterText:""},{usedBy:["AnimationDuration","AnimationBlurRadius","ListItemIconColumnWidth","DropShadowOpacity","TrayTaskContextMenuDropShadowOpacity","DropShadowDirection","TrayTaskContextMenuDropShadowDirection","TrayTaskContextMenuDropShadowBlurRadius","DropShadowBlurRadius","DropShadowShadowDepth","TrayTaskContextMenuDropShadowShadowDepth","TrayTaskContextMenuItemIconSize","SearchFieldTxtSize","SearchFieldPlaceholderSize","ListItemIconSize","ListItemNameSize","ListItemDescSize","ContextPaneImageSize","NameTextSize","DescTextSize","ExtraDetailsTextSize","ContextPaneListItemIconSize","ContextPaneListItemSize","SearchBarHeight","SearchFieldHeight","ListContainerMinHeight","ContextPaneMinHeight","WindowWidth","SearchIconWidth","SearchFieldWidth","ScrollBarWidth","HorizontalScrollIncrementingWidth","ScrollBarBgWidth","ScrollThumbBgWidth","ScrollThumbWidth","ListItemIconColumnWidth","MaxDetailsWidth"]}]},{type:"Font Family",notes:["The name of the font used","When you wish to change the app font, you will overwrite 'AppFont.ttf' in the resources folder. The name of the font in this file should be this setting's value",{usedBy:["AppFont"]}]},{type:"Horizontal Alignment",notes:["Where an element should be displayed on the horizontal axis (relative to outer element)",{prevText:"Values accepted: ",values:["Left","Center","Right","Stretch"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.horizontalalignment?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["ContextPaneContentHorizontalAlignment","ContextPaneListHorizontalAlignment","ContextPaneListContentHorizontalAlignment"]}]},{type:"Integer",notes:["A whole number",{prevText:"E.g. ",values:["2","-2","0"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.int32?view=net-10.0",text:"Reference"},afterText:""},{usedBy:["AnimationOffset"]}]},{type:"Rendering Bias",notes:["Indicates whether the element renders with emphasis on speed or quality",{prevText:"Values accepted: ",values:["Performance","Quality"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.effects.renderingbias?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["DropShadowRenderingBias","TrayTaskContextMenuDropShadowRenderingBias"]}]},{type:"Screen Dimensions",notes:["Values that can have 'ScreenHeight' and 'ScreenWidth' values in them",{prevText:"E.g. ",values:["PrimaryScreenHeight","PrimaryScreenWidth","PrimaryScreenHeight/3","PrimaryScreenHeight*4","PrimaryScreenHeight-56","PrimaryScreenHeight+20"]},{usedBy:["WindowTopMargin","WindowWidth","ListContainerMaxHeight"]}]},{type:"Solid Color Brush",notes:["A solid color",{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.brushes?view=windowsdesktop-10.0",text:"Predefined colors"},afterText:""},"Value should be formatted as 'PredefinedColor', '#rgb', '#rrggbb', '#argb' or '#aarrggbb'",{prevText:"E.g. ",values:["Red","Cyan","#000","#a97ef4","#5444","#eea97ef4"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.solidcolorbrush?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["WindowColor","WindowBorderColor","TrayTaskContextMenuColor","TrayTaskContextMenuBorderColor","TrayTaskContextMenuSeparatorColor","TrayTaskContextMenuItemTxtColor","TrayTaskContextMenuItemColor","TrayTaskContextMenuItemBorderColor","TrayTaskContextMenuItemHoverColor","TrayTaskContextMenuItemHoverBorderColor","SearchBarColor","SearchBarBorderColor","SearchFieldTxtColor","SearchFieldTxtSelColor","SearchFieldPlaceholderColor","ListContainerBorderColor","ListContainerColor","ScrollBarBgColor","ScrollBarBgBorderColor","ScrollThumbBgColor","ScrollThumbBgBorderColor","ScrollThumbColor","ScrollThumbBorderColor","ListItemHoverBorderColor","ListItemHoverBgColor","ListItemSelectedBorderColor","ListItemSelectedBgColor","ListItemNameColor","ListItemDescColor","ContextPaneBorderColor","ContextPaneBgColor","NameTextColor","DescTextColor","ExtraDetailsTextColor","ContextPaneListItemHoverBorderColor","ContextPaneListItemHoverBgColor","ContextPaneListItemSelectedBorderColor","ContextPaneListItemSelectedBgColor","ContextPaneListItemColor"]}]},{type:"Thickness",notes:["The thickness of a frame around an element","Value should be formatted as 'left', 'left,top', or 'left,top,right,bottom'",{prevText:"E.g. ",values:["10,20,15,5","22","20,13"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.thickness?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["WindowPadding","ContextPaneListItemTextPadding","WindowBorderThickness","TrayTaskContextMenuBorderThickness","TrayTaskContextMenuItemBorderThickness","SearchBarBorderThickness","ListContainerBorderThickness","ScrollBarBgBorderThickness","ScrollThumbBgBorderThickness","ScrollThumbBorderThickness","ListItemBorderThickness","ContextPaneBorderThickness","ContextPaneListItemBorderThickness","TrayTaskContextMenuItemMargin","TrayTaskContextMenuItemIconMargin","SearchIconMargin","SearchFieldMargin","SearchFieldPlaceholderMargin","ListContainerMargin","ListMargin","ScrollBarBgMargin","ScrollThumbBgMargin","ScrollThumbMargin","ListItemMargin","ListItemTextMargin","ContextPaneContentMargin","ContextPaneImageMargin","NameTextMargin","DescTextMargin","ExtraDetailsTextMargin","ContextPaneListMargin","ContextPaneListItemMargin","ContextPaneListItemIconMargin","ContextPaneListItemContentMargin"]}]},{type:"Vertical Alignment",notes:["How an element is vertically positioned (within the outer element)",{prevText:"Values accepted: ",values:["Top","Center","Bottom","Stretch"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.verticalalignment?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["ContextPaneContentVerticalAlignment"]}]},{type:"Visibility",notes:["Whether to display an element and reserve space for it in the layout",{prevText:"Values accepted: ",values:["Visible","Hidden","Collapsed"]},{prevText:"",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.visibility?view=windowsdesktop-10.0",text:"Reference"},afterText:""},{usedBy:["ScrollBarBgVisibility","ScrollThumbBgVisibility","ScrollThumbVisibility"]}]}]}),actions:{}}),xi={class:"flex flex-col mt-22 mb-16 items-center"},wi={class:"flex items-center Varela text-3xl"},Si={class:"flex gap-1"},Ti={class:"flex flex-col items-center"},Ci={src:ci},hi={class:"ml-1",src:bi},Ii={class:"m-2"},$i={key:0},Pi={key:0},zi={key:1},Bi={key:0},Ai=R({__name:"settings",setup(a){const s=ki();return(e,n)=>{const d=X,u=D,m=se,g=ke,b=Me,v=Ae;return p(),S("div",null,[i("div",xi,[i("div",wi,[l(d,{name:"i-lucide-sliders-vertical",class:"mr-2"}),n[1]||(n[1]=t(` Settings
      `))]),n[2]||(n[2]=t()),n[3]||(n[3]=i("div",{class:"text-md outfit"},"Defaults & extra information",-1))]),n[39]||(n[39]=t()),l(m,{class:"w-full m-2"},{default:o(()=>[i("span",Si,[n[5]||(n[5]=t(`
        The settings file is located in
        `)),l(u,{inline:""},{default:o(()=>n[4]||(n[4]=[t(" '...\\Quokka\\Config\\' ")])),_:1,__:[4]})]),n[11]||(n[11]=t(`
      All settings are loaded when the application starts, meaning that
      you will have to exit and re-start the app to see changes.
      `)),l(N,{type:"info",style:{width:"calc(100% - 1rem)"}},{default:o(()=>[n[7]||(n[7]=t(`
        Plugins may have their own, specific settings files in the root of
        their respective folders, in the PlugBoard.`)),n[8]||(n[8]=i("br",null,null,-1)),n[9]||(n[9]=t(`
        Please consult their documentation (
        `)),l(U,{url:"/documentation?section=api-documentation"},{default:o(()=>n[6]||(n[6]=[t(`
          API Documentation
        `)])),_:1,__:[6]}),n[10]||(n[10]=t(`
         included) for default values, etc.
      `))]),_:1,__:[7,8,9,10]})]),_:1,__:[11]}),n[40]||(n[40]=t()),l(v,{class:"w-full m-2",contentClass:"!p-0","onUpdate:modelValue":n[0]||(n[0]=()=>r(Le)())},{"title-1":o(()=>n[12]||(n[12]=[t(`
        General Settings
      `)])),"content-1":o(()=>[l(g,{ui:{border:"dark:border-gray-600"}}),n[16]||(n[16]=t()),l(b,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",inputSize:"sm",headers:[{label:"Setting name",key:"name",width:"12rem"},{label:"Default Value",key:"defaultValue",width:"12rem"},{label:"Notes",key:"notes"}],rows:r(s).general},{"cell-notes":o(({value:C})=>[i("ul",null,[(p(!0),S(G,null,ne(C,(k,h)=>(p(),S("li",{key:h},[Object.keys(k)[0]!="0"?(p(),S(G,{key:0},[t(W(k.prevText)+" ",1),l(U,{url:k.link.url,target:"_blank"},{default:o(()=>[t(W(k.link.text),1)]),_:2},1032,["url"]),t(`
                   `+W(k.afterText),1)],64)):(p(),S(G,{key:1},[t(W(k),1)],64))]))),128))])]),"cell-defaultValue":o(({value:C})=>[l(u,{inline:""},{default:o(()=>[t(" "+W(C)+" ",1)]),_:2},1024)]),"cell-name":o(({value:C})=>[l(u,{inline:""},{default:o(()=>[t(" "+W(C)+" ",1)]),_:2},1024)]),_:1,__:[13,14]},8,["rows"]),n[17]||(n[17]=t()),l(g,{ui:{border:"dark:border-gray-600"}}),n[18]||(n[18]=t()),i("div",Ti,[bt(i("img",Ci,null,512),[[r(xt)]]),n[15]||(n[15]=t()),bt(i("img",hi,null,512),[[r(xt)]])])]),"title-2":o(()=>n[19]||(n[19]=[t(`
        Style Settings
      `)])),"content-2":o(()=>[l(g,{ui:{border:"dark:border-gray-600"}}),n[33]||(n[33]=t()),i("div",Ii,[n[22]||(n[22]=t(`
          Quokka comes with the
          `)),l(U,{url:"/#customizability"},{default:o(()=>n[20]||(n[20]=[t(`
            'Windows light'
          `)])),_:1,__:[20]}),n[23]||(n[23]=t(`
           theme by default.`)),n[24]||(n[24]=i("br",null,null,-1)),n[25]||(n[25]=t(`
          To change it, you can edit the style settings in the settings file
          and / or you can use values in a
          `)),l(U,{url:"/#customizability"},{default:o(()=>n[21]||(n[21]=[t(`
            provided configuration
          `)])),_:1,__:[21]}),n[26]||(n[26]=t(`.
        `))]),n[34]||(n[34]=t()),l(g,{ui:{border:"dark:border-gray-600"}}),n[35]||(n[35]=t()),l(b,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",inputSize:"sm",headers:[{label:"Setting type",key:"type",width:"12rem"},{label:"Notes",key:"notes"}],rows:r(s).style},{"cell-notes":o(({value:C})=>[i("ul",null,[(p(!0),S(G,null,ne(C.slice(0,C.length-1),(k,h)=>(p(),S("li",{key:h},[Object.keys(k)[0]!="0"?(p(),S(G,{key:0},[Object.keys(k).length==2?(p(),S("span",$i,[t(W(k.prevText)+" ",1),(p(!0),S(G,null,ne(k.values,(A,z)=>(p(),S("span",{key:z},[l(u,{inline:""},{default:o(()=>[t(" "+W(A)+" ",1)]),_:2},1024),n[27]||(n[27]=t()),z!=k.values.length-1?(p(),S("span",Pi,", ")):_("",!0)]))),128))])):(p(),S("span",zi,[t(W(k.prevText)+" ",1),l(U,{url:k.link.url,target:"_blank"},{default:o(()=>[t(W(k.link.text),1)]),_:2},1032,["url"]),t(`
                     `+W(k.afterText),1)]))],64)):(p(),S(G,{key:1},[t(W(k),1)],64))]))),128))]),n[29]||(n[29]=t()),l(g,{ui:{border:"dark:border-gray-600"},class:"my-2"}),n[30]||(n[30]=t(`
            Used by:`)),n[31]||(n[31]=i("br",null,null,-1)),n[32]||(n[32]=t()),(p(!0),S(G,null,ne(C[C.length-1].usedBy,(k,h)=>(p(),S("span",{key:h},[l(u,{inline:""},{default:o(()=>[t(" "+W(k)+" ",1)]),_:2},1024),n[28]||(n[28]=t()),h!=C[C.length-1].usedBy.length-1?(p(),S("span",Bi,`,
              `)):_("",!0)]))),128))]),_:1},8,["rows"])]),_:1,__:[36,37,38]})])}}}),Mi=Be("/media/Docs/LoadingQuokkaTray.ico"),Li=Be("/media/Docs/QuokkaTray.ico"),Di={class:"flex flex-col mt-22 mb-16 items-center"},Vi={class:"flex items-center Varela text-3xl"},Ei={class:"flex gap-1"},Fi={class:"flex gap-1"},Ri={class:"mt-4"},_i={class:"flex gap-1"},Ki={class:"flex gap-1"},qi=R({__name:"trayTask",setup(a){return(s,e)=>{const n=X,d=lt,u=ot,m=Me,g=D,b=se,v=ke;return p(),S("div",null,[i("div",Di,[i("div",Vi,[l(n,{name:"i-lucide-panel-bottom",class:"mr-2"}),e[0]||(e[0]=t(` Tray Task
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=i("div",{class:"text-md outfit"},"Using the System Tray task",-1))]),e[46]||(e[46]=t()),l(b,{class:"w-full m-2",padding:!1},{default:o(()=>[l(m,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",headers:["Default tray task icon","Notes"]},{default:o(()=>[l(u,null,{default:o(()=>[l(d,null,{default:o(()=>e[3]||(e[3]=[i("img",{src:Mi,class:"size-10"},null,-1)])),_:1,__:[3]}),e[5]||(e[5]=t()),l(d,null,{default:o(()=>e[4]||(e[4]=[t(`
            Displayed while Quokka is starting up / loading (is not ready)
          `)])),_:1,__:[4]})]),_:1,__:[5]}),e[9]||(e[9]=t()),l(u,null,{default:o(()=>[l(d,null,{default:o(()=>e[6]||(e[6]=[i("img",{src:Li,class:"size-10"},null,-1)])),_:1,__:[6]}),e[8]||(e[8]=t()),l(d,null,{default:o(()=>e[7]||(e[7]=[t(`
            Displayed when Quokka is ready for use
          `)])),_:1,__:[7]})]),_:1,__:[8]})]),_:1,__:[9]}),e[18]||(e[18]=t()),l(N,{type:"tip",style:{width:"calc(100% - 1rem)"}},{default:o(()=>[i("span",Ei,[e[12]||(e[12]=t(`
          To change the tray task icon, edit the
          `)),l(g,{inline:""},{default:o(()=>e[10]||(e[10]=[t(" QuokkaTray.ico ")])),_:1,__:[10]}),e[13]||(e[13]=t(` file in
          `)),l(g,{inline:""},{default:o(()=>e[11]||(e[11]=[t(" ...\\Quokka\\Config\\Resources\\ ")])),_:1,__:[11]})]),e[17]||(e[17]=t()),i("span",Fi,[e[15]||(e[15]=t(`
          (or just rename a different
          `)),l(g,{inline:""},{default:o(()=>e[14]||(e[14]=[t(" .ico ")])),_:1,__:[14]}),e[16]||(e[16]=t(`
          file to the same name)
        `))])]),_:1,__:[17]})]),_:1,__:[18]}),e[47]||(e[47]=t()),l(b,{class:"w-full m-2"},{default:o(()=>[e[42]||(e[42]=t(`
      The tray task context menu can be used to:
      `)),i("ul",Ri,[i("li",null,[e[20]||(e[20]=t(`
          Launch the search window
          `)),l(N,{type:"info",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>e[19]||(e[19]=[t(`
            You can only have one search window open at a time
          `)])),_:1,__:[19]})]),e[37]||(e[37]=t()),i("li",null,[e[27]||(e[27]=t(`
          Open the settings file
          `)),l(N,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>[i("span",_i,[e[26]||(e[26]=t(`
              You can change which text editor opens the settings file
              through
              `)),l(U,{url:"",class:"flex"},{default:o(()=>[e[22]||(e[22]=i("span",null,"the  ",-1)),e[23]||(e[23]=t()),l(g,{inline:"",class:"!border-0"},{default:o(()=>e[21]||(e[21]=[t("TextEditor")])),_:1,__:[21]}),e[24]||(e[24]=t()),e[25]||(e[25]=i("span",null,"  setting",-1))]),_:1,__:[22,23,24,25]})])]),_:1})]),e[38]||(e[38]=t()),i("li",null,[e[36]||(e[36]=t(`
          Open the PlugBoard
          `)),l(N,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:o(()=>[i("span",Ki,[e[34]||(e[34]=t(`
              You can change which file manager opens the
              `)),l(g,{inline:""},{default:o(()=>e[28]||(e[28]=[t(" PlugBoard ")])),_:1,__:[28]}),e[35]||(e[35]=t(` folder through
              `)),l(U,{url:"",class:"flex"},{default:o(()=>[e[30]||(e[30]=i("span",null,"the  ",-1)),e[31]||(e[31]=t()),l(g,{inline:"",class:"!border-0"},{default:o(()=>e[29]||(e[29]=[t("FileManager")])),_:1,__:[29]}),e[32]||(e[32]=t()),e[33]||(e[33]=i("span",null,"  setting",-1))]),_:1,__:[30,31,32,33]})])]),_:1})]),e[39]||(e[39]=t()),e[40]||(e[40]=i("li",null,"Exit the app",-1))]),e[43]||(e[43]=t()),l(v,{class:"my-3",ui:{border:"dark:border-gray-600"}}),e[44]||(e[44]=t()),l(N,{type:"warning",style:{width:"calc(100% - 1rem)"}},{default:o(()=>e[41]||(e[41]=[t(`
        When the tray task context menu has its
        `),i("span",{class:"font-bold"},"appearance changed",-1),t(` in the
        settings file, you will have to `),i("span",{class:"font-bold"},`exit and
          reload`,-1),t(`
        the application to see the changes.
      `)])),_:1,__:[41]})]),_:1,__:[42,43,44]}),e[48]||(e[48]=t()),l(N,{type:"destructive",style:{width:"100%"}},{default:o(()=>e[45]||(e[45]=[t(`
      Unfortunately system tray tasks for other applications cannot be
      accessed through the Quokka search window yet`),i("br",null,null,-1),t(`
      This functionality may come in future (as a plugin).
    `)])),_:1,__:[45]})])}}}),Wi={slots:{root:"relative isolate",item:"",listWithChildren:"ms-4.5 border-s border-default",itemWithChildren:"ps-1.5 -ms-px",link:"relative group w-full flex items-center text-sm before:absolute before:inset-y-px before:inset-x-0 before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2",linkLeadingIcon:"shrink-0",linkLabel:"truncate",linkTrailing:"ms-auto inline-flex gap-1.5 items-center",linkTrailingIcon:"shrink-0 transform transition-transform duration-200 group-data-expanded:rotate-180"},variants:{color:{primary:{link:"focus-visible:before:ring-primary"},secondary:{link:"focus-visible:before:ring-secondary"},success:{link:"focus-visible:before:ring-success"},info:{link:"focus-visible:before:ring-info"},warning:{link:"focus-visible:before:ring-warning"},error:{link:"focus-visible:before:ring-error"},neutral:{link:"focus-visible:before:ring-inverted"}},size:{xs:{link:"px-2 py-1 text-xs gap-1",linkLeadingIcon:"size-4",linkTrailingIcon:"size-4"},sm:{link:"px-2.5 py-1.5 text-xs gap-1.5",linkLeadingIcon:"size-4",linkTrailingIcon:"size-4"},md:{link:"px-2.5 py-1.5 text-sm gap-1.5",linkLeadingIcon:"size-5",linkTrailingIcon:"size-5"},lg:{link:"px-3 py-2 text-sm gap-2",linkLeadingIcon:"size-5",linkTrailingIcon:"size-5"},xl:{link:"px-3 py-2 text-base gap-2",linkLeadingIcon:"size-6",linkTrailingIcon:"size-6"}},selected:{true:{link:"before:bg-elevated"},false:{link:["hover:not-disabled:text-highlighted hover:not-disabled:before:bg-elevated/50","transition-colors before:transition-colors"]}},disabled:{true:{link:"cursor-not-allowed opacity-75"}}},compoundVariants:[{color:"primary",selected:!0,class:{link:"text-primary"}},{color:"secondary",selected:!0,class:{link:"text-secondary"}},{color:"success",selected:!0,class:{link:"text-success"}},{color:"info",selected:!0,class:{link:"text-info"}},{color:"warning",selected:!0,class:{link:"text-warning"}},{color:"error",selected:!0,class:{link:"text-error"}},{color:"neutral",selected:!0,class:{link:"text-highlighted"}}],defaultVariants:{color:"primary",size:"md"}},Oi=["disabled"],Ui={__name:"Tree",props:{as:{type:null,required:!1},color:{type:null,required:!1},size:{type:null,required:!1},valueKey:{type:null,required:!1,default:"value"},labelKey:{type:null,required:!1,default:"label"},trailingIcon:{type:String,required:!1},expandedIcon:{type:String,required:!1},collapsedIcon:{type:String,required:!1},items:{type:null,required:!1},modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1},multiple:{type:Boolean,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},expanded:{type:Array,required:!1},defaultExpanded:{type:Array,required:!1},selectionBehavior:{type:String,required:!1},propagateSelect:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1}},emits:["update:expanded","update:modelValue"],setup(a,{emit:s}){const e=a,n=s,d=We(),u=Ye(),m=zt(Bt(e,"as","modelValue","defaultValue","items","multiple","expanded","disabled","propagateSelect"),n),[g,b]=zn(),v=M(()=>{var z;return Ce({extend:Ce(Wi),...((z=u.ui)==null?void 0:z.tree)||{}})({color:e.color,size:e.size})});function C(z){return Qe(z,e.labelKey)}function k(z){return Qe(z,e.valueKey)??Qe(z,e.labelKey)}function h(z){var x;const T=z.defaultExpanded?k(z):null,c=((x=z.children)==null?void 0:x.flatMap(B=>h(B)))??[];return[T,...c].filter(Boolean)}const A=M(()=>{var z;return e.defaultExpanded??((z=e.items)==null?void 0:z.flatMap(T=>h(T)))});return(z,T)=>{var c;return p(),S(G,null,[l(r(g),null,{default:o(({items:x,level:B})=>[(p(!0),S(G,null,ne(x,(w,I)=>{var f,P,y,V;return p(),S("li",{key:`${B}-${I}`,class:j(B>0?v.value.itemWithChildren({class:[(f=e.ui)==null?void 0:f.itemWithChildren,(P=w.ui)==null?void 0:P.itemWithChildren]}):v.value.item({class:[(y=e.ui)==null?void 0:y.item,(V=w.ui)==null?void 0:V.item]}))},[l(r(gl),{"as-child":"",level:B,value:w,onToggle:w.onToggle,onSelect:w.onSelect},{default:o(({isExpanded:K,isSelected:F})=>{var q,Y,le,ue,de;return[i("button",{disabled:w.disabled||a.disabled,class:j(v.value.link({class:[(q=e.ui)==null?void 0:q.link,(Y=w.ui)==null?void 0:Y.link,w.class],selected:F,disabled:w.disabled||a.disabled}))},[O(z.$slots,w.slot||"item",te({ref_for:!0},{index:I,level:B,expanded:K,selected:F},{item:w}),()=>{var oe,me,ie,ee,pe;return[O(z.$slots,w.slot?`${w.slot}-leading`:"item-leading",te({ref_for:!0},{index:I,level:B,expanded:K,selected:F},{item:w}),()=>{var fe,xe,ve,ge,we;return[w.icon?(p(),L(X,{key:0,name:w.icon,class:j(v.value.linkLeadingIcon({class:[(fe=e.ui)==null?void 0:fe.linkLeadingIcon,(xe=w.ui)==null?void 0:xe.linkLeadingIcon]}))},null,8,["name","class"])):(ve=w.children)!=null&&ve.length?(p(),L(X,{key:1,name:K?a.expandedIcon??r(u).ui.icons.folderOpen:a.collapsedIcon??r(u).ui.icons.folder,class:j(v.value.linkLeadingIcon({class:[(ge=e.ui)==null?void 0:ge.linkLeadingIcon,(we=w.ui)==null?void 0:we.linkLeadingIcon]}))},null,8,["name","class"])):_("",!0)]}),T[0]||(T[0]=t()),C(w)||d[w.slot?`${w.slot}-label`:"item-label"]?(p(),S("span",{key:0,class:j(v.value.linkLabel({class:[(oe=e.ui)==null?void 0:oe.linkLabel,(me=w.ui)==null?void 0:me.linkLabel]}))},[O(z.$slots,w.slot?`${w.slot}-label`:"item-label",te({ref_for:!0},{item:w,index:I,level:B,expanded:K,selected:F},{item:w}),()=>[t(W(C(w)),1)])],2)):_("",!0),T[1]||(T[1]=t()),w.trailingIcon||(ie=w.children)!=null&&ie.length||d[w.slot?`${w.slot}-trailing`:"item-trailing"]?(p(),S("span",{key:1,class:j(v.value.linkTrailing({class:[(ee=e.ui)==null?void 0:ee.linkTrailing,(pe=w.ui)==null?void 0:pe.linkTrailing]}))},[O(z.$slots,w.slot?`${w.slot}-trailing`:"item-trailing",te({ref_for:!0},{item:w,index:I,level:B,expanded:K,selected:F},{item:w}),()=>{var fe,xe,ve,ge,we;return[w.trailingIcon?(p(),L(X,{key:0,name:w.trailingIcon,class:j(v.value.linkTrailingIcon({class:[(fe=e.ui)==null?void 0:fe.linkTrailingIcon,(xe=w.ui)==null?void 0:xe.linkTrailingIcon]}))},null,8,["name","class"])):(ve=w.children)!=null&&ve.length?(p(),L(X,{key:1,name:a.trailingIcon??r(u).ui.icons.chevronDown,class:j(v.value.linkTrailingIcon({class:[(ge=e.ui)==null?void 0:ge.linkTrailingIcon,(we=w.ui)==null?void 0:we.linkTrailingIcon]}))},null,8,["name","class"])):_("",!0)]})],2)):_("",!0)]})],10,Oi),T[2]||(T[2]=t()),(le=w.children)!=null&&le.length&&K?(p(),S("ul",{key:0,class:j(v.value.listWithChildren({class:[(ue=e.ui)==null?void 0:ue.listWithChildren,(de=w.ui)==null?void 0:de.listWithChildren]}))},[l(r(b),{items:w.children,level:B+1},null,8,["items","level"])],2)):_("",!0)]}),_:2,__:[2]},1032,["level","value","onToggle","onSelect"])],2)}),128))]),_:3}),T[3]||(T[3]=t()),l(r(ml),te(r(m),{class:v.value.root({class:[(c=e.ui)==null?void 0:c.root,e.class]}),"get-key":k,"default-expanded":A.value,"selection-behavior":a.selectionBehavior}),{default:o(()=>[l(r(b),{items:a.items,level:0},null,8,["items"])]),_:1},16,["class","default-expanded","selection-behavior"])],64)}}},jt=Xe("underTheHoodStore",{state:()=>({fs:[{label:"Faeq-F/Quokka/",defaultExpanded:!0,onSelect:a=>{a.preventDefault()},children:[{label:".vs/",icon:"i-lucide-folder"},{label:".vscode/",icon:"i-lucide-folder"},{label:"Config/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"Resources/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"AppFont.ttf",icon:"i-lucide-case-sensitive"},{label:"** icons **",icon:"i-lucide-file-image"},{label:"** licenses (for the above files) **",icon:"i-lucide-copyleft"}]},{label:"settings.json",icon:"i-lucide-file-sliders"}]},{label:"** Plugin Submodule Repositories **",icon:"i-lucide-folders"},{label:"Quokka/",defaultExpanded:!0,onSelect:a=>{a.preventDefault()},children:[{label:"ListItems/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"ItemContextPane.cs",icon:"i-lucide-panel-top"},{label:"ListItem.cs",icon:"i-lucide-list"},{label:"LoadingListItem.cs",icon:"i-lucide-loader"},{label:"NoListItem.cs",icon:"i-lucide-list-x"}]},{label:"PluginArch/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"AppPlugins.cs",icon:"i-lucide-plug-zap"},{label:"FuzzySearch.cs",icon:"i-lucide-text-search"},{label:"IconCache.cs",icon:"i-lucide-image"},{label:"Plugin.cs",icon:"i-lucide-blocks"},{label:"UiDispatcher.cs",icon:"i-lucide-route"}]},{label:"SearchWindow/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"KeyDown.cs",icon:"i-lucide-square-arrow-down"},{label:"Scrollbar.xaml",icon:"i-lucide-mouse"},{label:"SearchWindow.xaml",icon:"i-lucide-search"},{label:"SearchWindow.xaml.cs",icon:"i-lucide-search"}]},{label:"Settings/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"AppSettings.cs",icon:"i-lucide-cog"},{label:"SettingParsers.cs",icon:"i-lucide-cog"}]},{label:"TheQuokkaPlugin/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"AboutQuokkaItem.cs",icon:"i-lucide-badge-info"},{label:"ContextPane.xaml",icon:"i-lucide-toolbox"},{label:"ContextPane.xaml.cs",icon:"i-lucide-toolbox"},{label:"Licences.xaml.cs",icon:"i-lucide-scale"},{label:"Licenses.xaml",icon:"i-lucide-scale"},{label:"Plugin_Quokka.cs",icon:"i-lucide-toy-brick"},{label:"SettingsFileWatcher.cs",icon:"i-lucide-scan-eye"},{label:"UpdateChecker.cs",icon:"i-lucide-refresh-cw"}]},{label:"TrayTask/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"NotifyIconResources.xaml",icon:"i-lucide-panel-bottom"},{label:"NotifyIconViewModel.cs",icon:"i-lucide-panel-bottom-open"},{label:"TrayTask.cs",icon:"i-lucide-panel-bottom"}]},{label:"App.config",icon:"i-lucide-file-cog"},{label:"App.xaml",icon:"i-lucide-file-box"},{label:"App.xaml.cs",icon:"i-lucide-file-box"},{label:"AssemblyInfo.cs",icon:"i-lucide-file-cog"},{label:"KeyboardHook.cs",icon:"i-lucide-keyboard"},{label:"Quokka.csproj",icon:"i-lucide-square-kanban"},{label:"Quokka.csproj.user",icon:"i-lucide-file-sliders"},{label:"app.manifest",icon:"i-lucide-file-symlink"}]},{label:"Tests/",defaultExpanded:!1,onSelect:a=>{a.preventDefault()},children:[{label:"GlobalUsings.cs",icon:"i-lucide-file-plus-corner"},{label:"** Test Files **",icon:"i-lucide-test-tubes"},{label:"Tests.csproj",icon:"i-lucide-square-kanban"}]},{label:".editorconfig",icon:"i-lucide-braces"},{label:".gitignore",icon:"i-lucide-eye-off"},{label:".gitmodules",icon:"i-lucide-component"},{label:"BuildAndServeDocs.ps1",icon:"i-lucide-form"},{label:"BuildSolution.ps1",icon:"i-lucide-hammer"},{label:"Directory.Build.Props",icon:"i-lucide-drill"},{label:"IgnoredWords.txt",icon:"i-lucide-whole-word"},{label:"Version",icon:"i-lucide-tag"},{label:"Quokka.sln",icon:"i-lucide-file-cog"}]}]}),actions:{}}),Qi={slots:{root:"rounded-lg",header:"p-4 sm:px-6",body:"p-4 sm:p-6",footer:"p-4 sm:px-6"},variants:{variant:{solid:{root:"bg-inverted text-inverted"},outline:{root:"bg-default ring ring-default divide-y divide-default"},soft:{root:"bg-elevated/50 divide-y divide-default"},subtle:{root:"bg-elevated/50 ring ring-default divide-y divide-default"}}},defaultVariants:{variant:"outline"}},Ni={__name:"Card",props:{as:{type:null,required:!1},variant:{type:null,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1}},setup(a){const s=a,e=We(),n=Ye(),d=M(()=>{var u;return Ce({extend:Ce(Qi),...((u=n.ui)==null?void 0:u.card)||{}})({variant:s.variant})});return(u,m)=>{var g;return p(),L(r(be),{as:a.as,class:j(d.value.root({class:[(g=s.ui)==null?void 0:g.root,s.class]}))},{default:o(()=>{var b,v,C;return[e.header?(p(),S("div",{key:0,class:j(d.value.header({class:(b=s.ui)==null?void 0:b.header}))},[O(u.$slots,"header")],2)):_("",!0),m[0]||(m[0]=t()),e.default?(p(),S("div",{key:1,class:j(d.value.body({class:(v=s.ui)==null?void 0:v.body}))},[O(u.$slots,"default")],2)):_("",!0),m[1]||(m[1]=t()),e.footer?(p(),S("div",{key:2,class:j(d.value.footer({class:(C=s.ui)==null?void 0:C.footer}))},[O(u.$slots,"footer")],2)):_("",!0)]}),_:3,__:[0,1]},8,["as","class"])}}},Hi={class:"flex items-center gap-2"},ji={class:"flex items-center gap-2"},Gi={class:"text-muted text-sm"},Yi={class:"flex items-center gap-2"},Xi={class:"text-muted text-sm"},Ji={class:"flex items-center gap-2"},Zi={class:"flex items-center gap-2"},es={class:"flex items-center gap-2"},ts={class:"flex items-center gap-2"},ns={class:"flex items-center gap-2"},ls={class:"flex items-center gap-2"},os={class:"flex items-center gap-2"},is={class:"flex items-center gap-2"},ss={class:"flex items-center gap-2"},as={class:"flex items-center gap-2"},rs={class:"flex items-center gap-2"},us={class:"flex items-center gap-2"},ds=R({__name:"home",emits:["select"],setup(a){const s=jt().fs;return(e,n)=>{const d=Ni,u=Mt,m=X,g=D,b=In;return p(),S("div",null,[l(d,{class:"bg-transparent mb-8"},{default:o(()=>n[15]||(n[15]=[t(`
      Understanding a new codebase can feel overwhelming. This
      guide can help you find your way around the repository. This overview
      breaks down the directory structure and explains where the core logic
      resides. Use this map to orient yourself before you start
      contributing.
    `)])),_:1,__:[15]}),n[95]||(n[95]=t(`
    You may wish to familiarize yourself with these files:
    `)),l(b,{class:"flex flex-col gap-2 w-11/12 mt-2",defaultOpen:!0},{content:o(()=>[l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[0]||(n[0]=v=>e.$emit("select",r(s)[0].children[4].children[8]))},{default:o(()=>[i("div",Hi,[l(m,{name:r(s)[0].children[4].children[8].icon},null,8,["name"]),n[16]||(n[16]=t()),n[17]||(n[17]=i("div",null,"App.xaml.cs",-1))]),n[18]||(n[18]=t()),n[19]||(n[19]=i("div",{class:"text-muted text-sm"},`
            Contains global exception handling and app initialization logic;
            setting the keyboard hook & tray task and loading plugins.
          `,-1))]),_:1,__:[18,19]}),n[32]||(n[32]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[1]||(n[1]=v=>e.$emit("select",r(s)[0].children[4].children[5].children[2]))},{default:o(()=>[i("div",ji,[l(m,{name:r(s)[0].children[4].children[5].children[2].icon},null,8,["name"]),n[20]||(n[20]=t()),n[21]||(n[21]=i("div",null,"TrayTask.cs",-1))]),n[25]||(n[25]=t()),i("div",Gi,[n[23]||(n[23]=t(`
            Contains actions for the tray task context menu and app exit
            logic; running `)),l(g,{inline:""},{default:o(()=>n[22]||(n[22]=[t(" OnAppShutdown() ")])),_:1,__:[22]}),n[24]||(n[24]=t(` for
            all
            plugins and disposing of the keyboard hook and tray task.
          `))])]),_:1,__:[25]}),n[33]||(n[33]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[2]||(n[2]=v=>e.$emit("select",r(s)[0].children[4].children[3].children[0]))},{default:o(()=>[i("div",Yi,[l(m,{name:r(s)[0].children[4].children[3].children[0].icon},null,8,["name"]),n[26]||(n[26]=t()),n[27]||(n[27]=i("div",null,"AppSettings.cs",-1))]),n[31]||(n[31]=t()),i("div",Xi,[n[29]||(n[29]=t(`
            Parses `)),l(g,{inline:""},{default:o(()=>n[28]||(n[28]=[t(" settings.json ")])),_:1,__:[28]}),n[30]||(n[30]=t(` and loads all
            application configuration values.
          `))])]),_:1,__:[31]})]),default:o(()=>[l(u,{label:"App",color:"neutral",variant:"subtle","trailing-icon":"i-lucide-chevron-down",block:"",class:"group",ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"}}),n[34]||(n[34]=t())]),_:1,__:[34]}),n[96]||(n[96]=t()),l(b,{class:"flex flex-col gap-2 w-11/12 mt-2"},{content:o(()=>[l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[3]||(n[3]=v=>e.$emit("select",r(s)[0].children[4].children[2].children[3]))},{default:o(()=>[i("div",Ji,[l(m,{name:r(s)[0].children[4].children[2].children[3].icon},null,8,["name"]),n[35]||(n[35]=t()),n[36]||(n[36]=i("div",null,"SearchWindow.xaml.cs",-1))]),n[37]||(n[37]=t()),n[38]||(n[38]=i("div",{class:"text-muted text-sm"},`
            Handles query changes, threading, debouncing input, and item
            generation.
          `,-1))]),_:1,__:[37,38]}),n[43]||(n[43]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[4]||(n[4]=v=>e.$emit("select",r(s)[0].children[4].children[2].children[0]))},{default:o(()=>[i("div",Zi,[l(m,{name:r(s)[0].children[4].children[2].children[0].icon},null,8,["name"]),n[39]||(n[39]=t()),n[40]||(n[40]=i("div",null,"KeyDown.cs",-1))]),n[41]||(n[41]=t()),n[42]||(n[42]=i("div",{class:"text-muted text-sm"},`
            Handles key down events in the search window; item list and context
            pane state.
          `,-1))]),_:1,__:[41,42]})]),default:o(()=>[l(u,{label:"Search Window",color:"neutral",variant:"subtle","trailing-icon":"i-lucide-chevron-down",block:"",class:"group",ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"}}),n[44]||(n[44]=t())]),_:1,__:[44]}),n[97]||(n[97]=t()),l(b,{class:"flex flex-col gap-2 w-11/12 mt-2"},{content:o(()=>[l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[5]||(n[5]=v=>e.$emit("select",r(s)[0].children[4].children[1].children[3]))},{default:o(()=>[i("div",es,[l(m,{name:r(s)[0].children[4].children[1].children[3].icon},null,8,["name"]),n[45]||(n[45]=t()),n[46]||(n[46]=i("div",null,`Plugin.cs
            `,-1))]),n[47]||(n[47]=t()),n[48]||(n[48]=i("div",{class:"text-muted text-sm"},`
            An abstract class to be implemented by all plugins.
          `,-1))]),_:1,__:[47,48]}),n[73]||(n[73]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[6]||(n[6]=v=>e.$emit("select",r(s)[0].children[4].children[1].children[4]))},{default:o(()=>[i("div",ts,[l(m,{name:r(s)[0].children[4].children[1].children[4].icon},null,8,["name"]),n[49]||(n[49]=t()),n[50]||(n[50]=i("div",null,`UiDispatcher.cs
            `,-1))]),n[51]||(n[51]=t()),n[52]||(n[52]=i("div",{class:"text-muted text-sm"},`
            Useful methods for plugins to execute actions on the UI thread.
          `,-1))]),_:1,__:[51,52]}),n[74]||(n[74]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[7]||(n[7]=v=>e.$emit("select",r(s)[0].children[4].children[1].children[2]))},{default:o(()=>[i("div",ns,[l(m,{name:r(s)[0].children[4].children[1].children[2].icon},null,8,["name"]),n[53]||(n[53]=t()),n[54]||(n[54]=i("div",null,`
              IconCache.cs
            `,-1))]),n[55]||(n[55]=t()),n[56]||(n[56]=i("div",{class:"text-muted text-sm"},`
            Useful for plugins to cache images for list item icons.
          `,-1))]),_:1,__:[55,56]}),n[75]||(n[75]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[8]||(n[8]=v=>e.$emit("select",r(s)[0].children[4].children[1].children[1]))},{default:o(()=>[i("div",ls,[l(m,{name:r(s)[0].children[4].children[1].children[1].icon},null,8,["name"]),n[57]||(n[57]=t()),n[58]||(n[58]=i("div",null,`
              FuzzySearch.cs
            `,-1))]),n[59]||(n[59]=t()),n[60]||(n[60]=i("div",{class:"text-muted text-sm"},`
            Useful methods for plugins using Fuzzy Searching.
          `,-1))]),_:1,__:[59,60]}),n[76]||(n[76]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[9]||(n[9]=v=>e.$emit("select",r(s)[0].children[4].children[1].children[0]))},{default:o(()=>[i("div",os,[l(m,{name:r(s)[0].children[4].children[1].children[0].icon},null,8,["name"]),n[61]||(n[61]=t()),n[62]||(n[62]=i("div",null,"AppPlugins.cs",-1))]),n[63]||(n[63]=t()),n[64]||(n[64]=i("div",{class:"text-muted text-sm"},`
            Handles the discovery and loading of all plugins at application
            startup.
          `,-1))]),_:1,__:[63,64]}),n[77]||(n[77]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[10]||(n[10]=v=>e.$emit("select",r(s)[0].children[4].children[0].children[1]))},{default:o(()=>[i("div",is,[l(m,{name:r(s)[0].children[4].children[0].children[1].icon},null,8,["name"]),n[65]||(n[65]=t()),n[66]||(n[66]=i("div",null,`ListItem.cs
            `,-1))]),n[67]||(n[67]=t()),n[68]||(n[68]=i("div",{class:"text-muted text-sm"},`
            An abstract class to be implemented by all list items.
          `,-1))]),_:1,__:[67,68]}),n[78]||(n[78]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[11]||(n[11]=v=>e.$emit("select",r(s)[0].children[4].children[0].children[0]))},{default:o(()=>[i("div",ss,[l(m,{name:r(s)[0].children[4].children[0].children[0].icon},null,8,["name"]),n[69]||(n[69]=t()),n[70]||(n[70]=i("div",null,"ItemContextPane.cs",-1))]),n[71]||(n[71]=t()),n[72]||(n[72]=i("div",{class:"text-muted text-sm"},`
            A basic class to inherit from for a context pane.
          `,-1))]),_:1,__:[71,72]})]),default:o(()=>[l(u,{label:"Plugin Architecture",color:"neutral",variant:"subtle","trailing-icon":"i-lucide-chevron-down",block:"",class:"group",ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"}}),n[79]||(n[79]=t())]),_:1,__:[79]}),n[98]||(n[98]=t()),l(b,{class:"flex flex-col gap-2 w-11/12 mt-2"},{content:o(()=>[l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[12]||(n[12]=v=>e.$emit("select",r(s)[0].children[4].children[4].children[5]))},{default:o(()=>[i("div",as,[l(m,{name:r(s)[0].children[4].children[4].children[5].icon},null,8,["name"]),n[80]||(n[80]=t()),n[81]||(n[81]=i("div",null,"PluginQuokka.cs",-1))]),n[82]||(n[82]=t()),n[83]||(n[83]=i("div",{class:"text-muted text-sm"},`
            A built-in utility plugin, useful as an example for plugin creators.
          `,-1))]),_:1,__:[82,83]}),n[92]||(n[92]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[13]||(n[13]=v=>e.$emit("select",r(s)[0].children[4].children[4].children[0]))},{default:o(()=>[i("div",rs,[l(m,{name:r(s)[0].children[4].children[4].children[0].icon},null,8,["name"]),n[84]||(n[84]=t()),n[85]||(n[85]=i("div",null,"AboutQuokkaItem.cs",-1))]),n[86]||(n[86]=t()),n[87]||(n[87]=i("div",{class:"text-muted text-sm"},`
            A list item for the plugin, used to access different actions.
            Useful as an example for plugin creators.
          `,-1))]),_:1,__:[86,87]}),n[93]||(n[93]=t()),l(d,{variant:"subtle",class:"w-11/12 m-2 clickable",onClick:n[14]||(n[14]=v=>e.$emit("select",r(s)[0].children[4].children[4].children[1]))},{default:o(()=>[i("div",us,[l(m,{name:r(s)[0].children[4].children[4].children[1].icon},null,8,["name"]),n[88]||(n[88]=t()),n[89]||(n[89]=i("div",null,"ContextPane.xaml.cs & ContextPane.xaml",-1))]),n[90]||(n[90]=t()),n[91]||(n[91]=i("div",{class:"text-muted text-sm"},`
            A context pane for triggering the plugin's different actions. Useful
            as an example for plugin creators.
          `,-1))]),_:1,__:[90,91]})]),default:o(()=>[l(u,{label:"The Quokka Plugin",color:"neutral",variant:"subtle","trailing-icon":"i-lucide-chevron-down",block:"",class:"group",ui:{trailingIcon:"group-data-[state=open]:rotate-180 transition-transform duration-200"}}),n[94]||(n[94]=t())]),_:1,__:[94]})])}}}),ms=R({__name:"file",props:{link:String,item:Object},setup(a){return(s,e)=>{const n=X,d=At;return p(),L(d,{target:"_blank",to:a.link,class:"!no-underline flex items-center justify-center text-lg !not-italic mt-4"},{default:o(()=>[l(n,{name:a.item.icon,class:"mr-1.5 !size-5"},null,8,["name"]),e[0]||(e[0]=t()),i("code",null,W(a.item.label.replaceAll("*","")),1),e[1]||(e[1]=t()),l(n,{name:"i-lucide-arrow-up-right",class:"!size-3 mb-1"})]),_:1,__:[0,1]},8,["to"])}}}),ps={class:"p-10"},fs={target:"_blank",href:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.controls.page?view=windowsdesktop-10.0"},gs={target:"_blank",href:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.controls.frame?view=windowsdesktop-10.0"},vs={style:{width:"calc(100% - 2.5rem)"}},ys=R({__name:"itemContextPane",setup(a){return(s,e)=>(p(),S("div",ps,[e[17]||(e[17]=t(`
    A basic Context Pane class for a list item, containing
    the basic methods most context panes would need and / or
    should want to override.
    `)),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[4]||(e[4]=t(`
      Context Panes are
      `)),i("a",fs,[l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" Page ")])),_:1,__:[0]}),e[1]||(e[1]=t(`s
      `))]),e[5]||(e[5]=t(`
      hosted by a
      `)),i("a",gs,[l(D,{inline:""},{default:o(()=>e[2]||(e[2]=[t(" Frame ")])),_:1,__:[2]})]),e[6]||(e[6]=t()),e[7]||(e[7]=i("br",null,null,-1)),e[8]||(e[8]=t()),l(D,{inline:"",lang:"cs"},{default:o(()=>e[3]||(e[3]=[t(" YourContextPane : ItemContextPane : Page ")])),_:1,__:[3]})]),_:1,__:[4,5,6,7,8]}),e[18]||(e[18]=t()),l(N,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[14]||(e[14]=t(`
      When handling keyboard input, if the `)),l(D,{inline:""},{default:o(()=>e[9]||(e[9]=[t(" ContextPaneKey ")])),_:1,__:[9]}),e[15]||(e[15]=t(` is
      pressed, you can return the user back to the item list where
      they can continue their search using
      `)),l(D,{inline:""},{default:o(()=>e[10]||(e[10]=[t(" ReturnToSearch() ")])),_:1,__:[10]}),e[16]||(e[16]=t()),i("div",vs,[l(D,{lang:"cs"},{default:o(()=>e[11]||(e[11]=[t(`
          switch (e.Key)
          {
            case var value when value == (System.Windows.Input.Key)App.Current.Resources["ContextPaneKey"]:
              ReturnToSearch();
              break;
        `)])),_:1,__:[11]}),e[13]||(e[13]=t()),l(D,{lang:"cs"},{default:o(()=>e[12]||(e[12]=[t(`
          protected static void ReturnToSearch()
          {
            SearchWindow window = ((SearchWindow)Application.Current.MainWindow);
            window.ContextPaneFrame.Visibility = Visibility.Collapsed;
            window.SearchBox.Focus();
            window.ContextPaneFrame.Source = null; //makes showing a new pane more reliable
          }
        `)])),_:1,__:[12]})])]),_:1,__:[14,15,16]})]))}}),cs={},bs={class:"p-10"},ks={style:{width:"calc(100% - 2.5rem)"}};function xs(a,s){const e=D,n=N;return p(),S("div",bs,[s[5]||(s[5]=t(`
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
      `)),i("div",ks,[l(e,{lang:"cs"},{default:o(()=>s[3]||(s[3]=[t(`
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
        `)])),_:1,__:[3]})])]),_:1,__:[4]})])}const ws=Je(cs,[["render",xs]]),Ss={class:"p-10"},Ts={style:{width:"calc(100% - 2.5rem)"}},Cs={style:{width:"calc(100% - 2.5rem)"}},hs=R({__name:"quokka",setup(a){return(s,e)=>(p(),S("div",Ss,[e[10]||(e[10]=t(`
    The Quokka project file; defines project metadata, target
    frameworks, and NuGet dependencies used by the MSBuild system
    to compile the application.
    `)),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[2]||(e[2]=t(`
      Quokka targets .NET 4.8 for portability. This version comes
      `)),l(U,{url:""},{default:o(()=>e[0]||(e[0]=[t(`
        pre-installed on Windows 10 and 11
      `)])),_:1,__:[0]}),e[3]||(e[3]=t(`, allowing users to run the
      application without installing additional frameworks.`)),e[4]||(e[4]=i("br",null,null,-1)),e[5]||(e[5]=t()),i("div",Ts,[l(D,{lang:"markup"},{default:o(()=>e[1]||(e[1]=[t(`
          <TargetFramework>net4.8-windows</TargetFramework>
        `)])),_:1,__:[1]})])]),_:1,__:[2,3,4,5]}),e[11]||(e[11]=t()),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[8]||(e[8]=t(`
      Files in the `)),l(D,{inline:""},{default:o(()=>e[6]||(e[6]=[t(" Config ")])),_:1,__:[6]}),e[9]||(e[9]=t(`
      directory are copied to the output folder. This ensures they
      are available to the application at runtime while remaining
      easily accessible for user customization.
      `)),i("div",Cs,[l(D,{lang:"markup"},{default:o(()=>e[7]||(e[7]=[t(`
          <ContentWithTargetPath Include="..\\Config\\Resources\\QuokkaTray.ico">`),i("br",null,null,-1),t(`
            <CopyToOutputDirectory>Always</CopyToOutputDirectory>`),i("br",null,null,-1),t(`
            <TargetPath>Config\\Resources\\QuokkaTray.ico</TargetPath>`),i("br",null,null,-1),t(`
          </ContentWithTargetPath>
          ...
        `)])),_:1,__:[7]})])]),_:1,__:[8,9]})]))}}),Is={class:"p-10"},$s=R({__name:"listItem",setup(a){return(s,e)=>(p(),S("div",Is,[e[10]||(e[10]=t(`
    Defines the abstract base class that serves as the contract for all list
    items, ensuring every item implements the required properties and
    behaviors.
    `)),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[5]||(e[5]=t(`
      Every item must have a `)),l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" Name ")])),_:1,__:[0]}),e[6]||(e[6]=t(`,
      `)),l(D,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" Description ")])),_:1,__:[1]}),e[7]||(e[7]=t(`,
      `)),l(D,{inline:""},{default:o(()=>e[2]||(e[2]=[t(" Icon ")])),_:1,__:[2]}),e[8]||(e[8]=t(` and an
      `)),l(D,{inline:""},{default:o(()=>e[3]||(e[3]=[t(" Execute ")])),_:1,__:[3]}),e[9]||(e[9]=t(` method. See the second step in
      `)),l(U,{url:"/Quokka/documentation?section=creating-plugin"},{default:o(()=>e[4]||(e[4]=[t(`
        creating a plugin.
      `)])),_:1,__:[4]})]),_:1,__:[5,6,7,8,9]})]))}}),Ps={class:"p-10"},zs=R({__name:"appSettings",setup(a){return(s,e)=>(p(),S("div",Ps,[e[9]||(e[9]=t(`
    Contains the function that loads all of the settings in the
    app settings file on startup.
    `)),l(N,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[3]||(e[3]=t(`
      Settings are stored in
      `)),l(D,{inline:"",lang:"cs"},{default:o(()=>e[0]||(e[0]=[t(" Application.Current.Resources ")])),_:1,__:[0]}),e[4]||(e[4]=t(`
      and are accessible with
      `)),l(D,{inline:"",lang:"cs"},{default:o(()=>e[1]||(e[1]=[t(" Application.Current.Resources[entry.Key] ")])),_:1,__:[1]}),e[5]||(e[5]=t(`.
      `)),e[6]||(e[6]=i("br",null,null,-1)),e[7]||(e[7]=t(`For e.g.,
      `)),l(D,{inline:"",lang:"cs"},{default:o(()=>e[2]||(e[2]=[t(' Application.Current.Resources["CheckForUpdates"] ')])),_:1,__:[2]}),e[8]||(e[8]=t(`
      .
    `))]),_:1,__:[3,4,5,6,7,8]})]))}}),Bs={class:"p-10"},As=R({__name:"keyDown",setup(a){return(s,e)=>(p(),S("div",Bs,[e[13]||(e[13]=t(`
    Contains the handler for the event where a keyboard key is pressed while the search box has focus.
    `)),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[i("ul",null,[e[3]||(e[3]=i("li",null,"If a context pane is open, focus will switch to it.",-1)),e[4]||(e[4]=t()),i("li",null,[e[1]||(e[1]=t("If the key is ")),l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" ContextPaneKey ")])),_:1,__:[0]}),e[2]||(e[2]=t(", it will find and open the item's context pane."))]),e[5]||(e[5]=t()),e[6]||(e[6]=i("li",null,"If the key is up or down arrow keys, it will scroll & select the relevant item.",-1)),e[7]||(e[7]=t()),e[8]||(e[8]=i("li",null,"If the key is left or right arrow keys, it will scroll the selected item horizontally.",-1))]),e[10]||(e[10]=t()),e[11]||(e[11]=i("br",null,null,-1)),e[12]||(e[12]=t(`
      See `)),l(U,{url:"/Quokka/documentation?section=general-usage"},{default:o(()=>e[9]||(e[9]=[t("general usage.")])),_:1,__:[9]})]),_:1,__:[10,11,12]})]))}}),Ms={class:"p-10"},Ls=R({__name:"searchWindow",setup(a){return(s,e)=>(p(),S("div",Ms,[e[12]||(e[12]=t(`
    The design and layout of the primary user interface of the application, encompassing the main text input, the results list, and the frame for context panes.
    `)),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[4]||(e[4]=t(`
      The first `)),l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" Border ")])),_:1,__:[0]}),e[5]||(e[5]=t(` is the container for the window contents. With the transparent window, the container seems to be the actual window.
      `)),e[6]||(e[6]=i("br",null,null,-1)),e[7]||(e[7]=i("br",null,null,-1)),e[8]||(e[8]=t(`
      The first nested `)),l(D,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" Border ")])),_:1,__:[1]}),e[9]||(e[9]=t(" is the results area, followed by the ")),l(D,{inline:""},{default:o(()=>e[2]||(e[2]=[t(" Frame ")])),_:1,__:[2]}),e[10]||(e[10]=t(" for context panes and then the nested ")),l(D,{inline:""},{default:o(()=>e[3]||(e[3]=[t(" Border ")])),_:1,__:[3]}),e[11]||(e[11]=t(` containing the search entry field.
    `))]),_:1,__:[4,5,6,7,8,9,10,11]})]))}}),Ds={class:"p-10"},Vs={style:{width:"calc(100% - 2.5rem)"}},Es={style:{width:"calc(100% - 2.5rem)"}},Fs=R({__name:"searchWindowCs",setup(a){return(s,e)=>(p(),S("div",Ds,[e[20]||(e[20]=t(`
    Contains the logic for the main interface, managing the search execution via `)),l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" OnQueryChange ")])),_:1,__:[0]}),e[21]||(e[21]=t(" and ")),l(D,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" ProduceItems ")])),_:1,__:[1]}),e[22]||(e[22]=t(". It also runs ")),l(D,{inline:""},{default:o(()=>e[2]||(e[2]=[t(" OnSearchWindowStartup ")])),_:1,__:[2]}),e[23]||(e[23]=t(` for the plugins and exposes public properties for them.
    `)),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[l(D,{inline:""},{default:o(()=>e[3]||(e[3]=[t(" OnQueryChange ")])),_:1,__:[3]}),e[7]||(e[7]=t(` will display a loading item and cancel previous runs of the handler, using a debounce to avoid running work for every keystroke.
      `)),i("div",Vs,[l(D,{lang:"cs"},{default:o(()=>e[4]||(e[4]=[t(`
            // cancel previous run
            _produceCts?.Cancel();
            _produceCts = new CancellationTokenSource();
            CancellationToken token = _produceCts.Token;
          `)])),_:1,__:[4]}),e[6]||(e[6]=t()),l(D,{lang:"cs"},{default:o(()=>e[5]||(e[5]=[t(`
            // debounce to avoid running work for every keystroke
            try
            {
              await Task.Delay((int)App.Current.Resources["Debounce"], token).ConfigureAwait(true);
            }
            catch (OperationCanceledException)
            {
              return;
            }
          `)])),_:1,__:[5]})])]),_:1,__:[7]}),e[24]||(e[24]=t()),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[l(D,{inline:""},{default:o(()=>e[8]||(e[8]=[t(" ProduceItems ")])),_:1,__:[8]}),e[18]||(e[18]=t(" is called from ")),l(D,{inline:""},{default:o(()=>e[9]||(e[9]=[t(" OnQueryChange ")])),_:1,__:[9]}),e[19]||(e[19]=t(` and runs in a task off the UI thread (prevents the window from freezing).
        `)),i("div",Es,[l(D,{lang:"cs"},{default:o(()=>e[10]||(e[10]=[t(`
            try
            {
              // run work off the UI thread
              Results = (await Task.Run(() => ProduceItems(query), token).ConfigureAwait(true)).ToList();
            }
            catch (OperationCanceledException)
            {
              return;
            }
          `)])),_:1,__:[10]}),e[13]||(e[13]=t()),e[14]||(e[14]=i("br",null,null,-1)),e[15]||(e[15]=t()),l(D,{inline:""},{default:o(()=>e[11]||(e[11]=[t(" ProduceItems ")])),_:1,__:[11]}),e[16]||(e[16]=t(" will first go through the plugin special commands, then check for command signifiers, before calling each plugins' ")),l(D,{inline:""},{default:o(()=>e[12]||(e[12]=[t(" OnQueryChange ")])),_:1,__:[12]}),e[17]||(e[17]=t(` method.
        `))])]),_:1,__:[18,19]})]))}}),Rs={class:"p-10"},_s=R({__name:"keyboardHook",setup(a){return(s,e)=>(p(),S("div",Rs,[e[5]||(e[5]=t(`
    A utility class that listens for key presses system-wide, allowing the application to respond to shortcuts when it is in the background.
    `)),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[1]||(e[1]=t(`
      Obtained from `)),l(U,{url:"https://web.archive.org/web/20141017230556/http://www.liensberger.it:80/web/blog/?p=207"},{default:o(()=>e[0]||(e[0]=[t("here")])),_:1,__:[0]}),e[2]||(e[2]=t()),e[3]||(e[3]=i("br",null,null,-1)),e[4]||(e[4]=t(`
      Written by Christian Liensberger
    `))]),_:1,__:[1,2,3,4]})]))}}),Ks={class:"p-10"},qs=R({__name:"globalUsings",setup(a){return(s,e)=>(p(),S("div",Ks,[e[1]||(e[1]=t(`
    Declares the shared `)),l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" using ")])),_:1,__:[0]}),e[2]||(e[2]=t(` directives once
    for the whole project to keep the files clean.
  `))]))}}),Ws={class:"p-10"},Os=R({__name:"buildAndServeDocs",setup(a){return(s,e)=>(p(),S("div",Ws,[e[5]||(e[5]=t(`
    A script to build the HTML API documentation pages from the files containing the source code.
    `)),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[2]||(e[2]=t(`
      Uses the `)),l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" QuokkaDocs ")])),_:1,__:[0]}),e[3]||(e[3]=t(" folder from the ")),l(D,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" site ")])),_:1,__:[1]}),e[4]||(e[4]=t(` branch.
    `))]),_:1,__:[2,3,4]})]))}}),Us={class:"p-10"},Qs=R({__name:"buildSolution",setup(a){return(s,e)=>(p(),S("div",Us,[e[1]||(e[1]=t(`
    A script used to build the solution, with editors that are not Microsoft Visual Studio. For example, the files in the `)),l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" .vscode/ ")])),_:1,__:[0]}),e[2]||(e[2]=t(` utilize this script for the editor Microsoft Visual Studio Code.
  `))]))}}),Ns={class:"p-10"},Hs=R({__name:"quokkaSln",setup(a){return(s,e)=>(p(),S("div",Ns,[e[1]||(e[1]=t(`
    A Microsoft Visual Studio Solution File. Contains references to the solution items, like the `)),l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" .editorconfig ")])),_:1,__:[0]}),e[2]||(e[2]=t(`, resources, like the different icons, every plugin project & the tests project.
  `))]))}}),js={class:"p-10"},Gs=R({__name:"appFont",setup(a){return(s,e)=>(p(),S("div",js,[e[5]||(e[5]=t(`
    The font for application text.
    `)),l(N,{type:"tip",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[2]||(e[2]=t(`
      To customize, replace the file (keeping the name
      `)),l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" AppFont.ttf ")])),_:1,__:[0]}),e[3]||(e[3]=t(`) and
      update the `)),l(D,{inline:""},{default:o(()=>e[1]||(e[1]=[t(" AppFont ")])),_:1,__:[1]}),e[4]||(e[4]=t(`
      setting.
    `))]),_:1,__:[2,3,4]})]))}}),Ys={class:"p-10"},Xs=R({__name:"settingParsers",setup(a){return(s,e)=>(p(),S("div",Ys,[e[3]||(e[3]=t(`
    Contains all of the methods for parsing and evaluating different types of
    app settings.
    `)),l(N,{type:"info",class:"mt-4",style:{width:"calc(100% - 1.5rem)"}},{default:o(()=>[e[1]||(e[1]=t(`
      These are used in `)),l(U,{url:"/Quokka/documentation?section=under-hood&file=AppSettings.cs"},{default:o(()=>[l(D,{inline:""},{default:o(()=>e[0]||(e[0]=[t(" AppSettings.cs ")])),_:1,__:[0]})]),_:1}),e[2]||(e[2]=t(` and by some
      plugins.
    `))]),_:1,__:[1,2]})]))}}),Js={".vs/":{description:"Stores temporary caches and user-specific workspace settings for Microsoft Visual Studio (settings are set to maintain shared conventions)."},".vscode/":{description:"Stores user-specific workspace settings for Microsoft Visual Studio Code (settings are set to maintain shared conventions)."},"AppFont.ttf":{component:"AppFont"},"** icons **":{description:"Icons used by the application and some plugins."},"** licenses (for the above files) **":{description:"License copies for the content in this folder."},"settings.json":{description:"The primary settings file for personalizing the application."},"** Plugin Submodule Repositories **":{description:"Plugin repositories managed as Git submodules for the Quokka repository."},"ItemContextPane.cs":{component:"ItemContextPane"},"ListItem.cs":{component:"ListItem"},"LoadingListItem.cs":{description:"The list item that appears while waiting for results to load."},"NoListItem.cs":{description:"The list item that appears when there are no results for a query."},"KeyDown.cs":{component:"KeyDown"},"Scrollbar.xaml":{description:"Contains the visual design and control templates for the application scrollbars."},"SearchWindow.xaml":{component:"SearchWindow"},"SearchWindow.xaml.cs":{component:"SearchWindowCs"},"AppSettings.cs":{component:"AppSettings"},"SettingParsers.cs":{component:"SettingParsers"},"NotifyIconResources.xaml":{description:"Defines the UI for the tray task and its context menu."},"NotifyIconViewModel.cs":{description:"Contains the View Model (bindable properties) for the tray task."},"TrayTask.cs":{description:"Contains the methods used for the different actions in the tray task context menu."},"App.config":{description:"Configurations for the runtime."},"App.xaml":{description:"The entry point for the app. Starts the application without opening a window, allowing it to run quietly in the system tray. It defines global configurations for animation styles, error handling and other resources."},"App.xaml.cs":{component:"App"},"AssemblyInfo.cs":{description:"Defines the general information about, and defaults for, the assembly."},"KeyboardHook.cs":{component:"KeyboardHook"},"Quokka.csproj":{component:"Quokka"},"Quokka.csproj.user":{description:"Specifies the build actions and IDE contexts for the project files, ensuring XAML components are correctly compiled as UI pages and opened in the visual designer."},"app.manifest":{description:"Defines how the application interacts with Windows, for e.g. by including the User Account Control (UAC) execution levels, high DPI awareness, and OS compatibility settings."},"GlobalUsings.cs":{component:"GlobalUsings"},"** Test Files **":{description:"Unit tests for the source code."},"Tests.csproj":{description:"The tests project file; defines the project metadata, the target frameworks, and the NuGet dependencies used by the MSBuild system to compile the application."},".editorconfig":{description:"A configuration file enforcing consistent coding styles for everyone that works in the Quokka codebase."},".gitignore":{description:"A Git configuration file containing the files and folders ignored by Git."},".gitmodules":{description:"A Git configuration file containing every plugin as a Git submodule."},"BuildAndServeDocs.ps1":{component:"BuildAndServeDocs"},"BuildSolution.ps1":{component:"BuildSolution"},"Directory.Build.Props":{description:"Build settings for the project."},"IgnoredWords.txt":{description:"Words to ignore when Microsoft Visual Studio is spell checking the solution."},Version:{description:"Contains the latest version number of the application available & its download link. It is used when the app checks for updates."},"Quokka.sln":{component:"QuokkaSln"}},ht=["AppPlugins.cs","FuzzySearch.cs","IconCache.cs","Plugin.cs","UiDispatcher.cs","AboutQuokkaItem.cs","ContextPane.xaml","ContextPane.xaml.cs","Licences.xaml.cs","Licenses.xaml","Plugin_Quokka.cs","SettingsFileWatcher.cs","UpdateChecker.cs"],He={ItemContextPane:ys,App:ws,Quokka:hs,ListItem:$s,AppSettings:zs,KeyDown:As,SearchWindow:Ls,SearchWindowCs:Fs,KeyboardHook:_s,GlobalUsings:qs,BuildAndServeDocs:Os,BuildSolution:Qs,QuokkaSln:Hs,AppFont:Gs,SettingParsers:Xs},Zs={class:"flex flex-col mt-22 mb-16 items-center"},ea={class:"flex items-center Varela text-3xl"},ta={class:"flex gap-2 w-full overflow-hidden"},na={key:1,class:"p-10"},la=["innerHTML"],oa=["innerHTML"],ia=R({__name:"underTheHood",setup(a){const s=H(),e=H(),n=H(),d=H(),u=(I,f)=>{let P=String(f.label);if(P.endsWith("/")&&P!=".vs/"&&P!=".vscode/"&&f.children)for(let y of f.children)u(I+P,y);f={...f,link:(I+(P.includes("*")?"":P)).replace("Faeq-F/Quokka/","https://github.com/Faeq-F/Quokka/tree/main/")},delete f.children,delete f.defaultExpanded,delete f.onSelect,delete f.icon,b.push(f)},m=g(jt().fs);function g(I){return I.map(f=>!f.children||f.children.length===0?{...f,onSelect:y=>{Ke(`/documentation?section=under-hood&file=${f.label}`)}}:f.children?{...f,children:g(f.children)}:f)}const b=[];u("",m[0]);const v=H(),C=Lt();if(C.query.file){const I=m.find(f=>{var P;return((P=f.label)==null?void 0:P.replace(" ","%20"))==C.query.file});I&&(v.value=I)}const k=I=>{console.log("switchSectionTo called with:",I),I?(v.value=h(m,I),console.log("selectedItem set to:",v.value),v.value==null&&(v.value=null)):v.value=null,console.log("Final selectedItem:",v.value)},h=(I,f)=>{for(const P of I){if(P.label===f)return P;if(P.children&&P.children.length>0){const y=h(P.children,f);if(y)return y}}},A=M(()=>{var P;if(!((P=v.value)!=null&&P.label))return console.log("No selectedItem.label",v.value),null;const I=v.value.label;console.log("Looking for label:",I,"in contentMappings");const f=Js[I]||null;return console.log("Found result:",f),f}),z=M(()=>{var I;return((I=v.value)==null?void 0:I.label)||"default"}),T=M(()=>{var f,P;if(!A.value)return!1;const I=((f=A.value)==null?void 0:f.component)||((P=A.value)==null?void 0:P.customComponent);return I&&I in He}),c=M(()=>{var f,P;if(!A.value)return null;const I=((f=A.value)==null?void 0:f.component)||((P=A.value)==null?void 0:P.customComponent);return!I||!(I in He)?null:He[I]}),x=M(()=>{var I,f;return A.value?((I=A.value)==null?void 0:I.description)||ht.includes((f=v.value)==null?void 0:f.label):!1}),B=M(()=>{var I,f;return(I=A.value)!=null&&I.description?A.value.description:ht.includes((f=v.value)==null?void 0:f.label)?"":null}),w=M(()=>{var I,f;return(I=v.value)!=null&&I.label?(f=b.find(P=>P.label===v.value.label))==null?void 0:f.link:null});return ye(()=>C.query.file,k,{immediate:!0}),(I,f)=>{const P=X,y=Ui,V=se;return p(),S("div",null,[i("div",Zs,[i("div",ea,[l(P,{name:"i-lucide-folder-open-dot",class:"mr-2"}),f[2]||(f[2]=t(` Under the hood
      `))]),f[3]||(f[3]=t()),f[4]||(f[4]=i("div",{class:"text-md outfit"},"The inner workings of the application",-1))]),f[11]||(f[11]=t()),i("div",ta,[l(V,{class:"w-xl list-none max-h-[85vh] mb-4 resize-x"},{default:o(()=>[i("div",{class:"max-h-full h-full max-w-full w-full overflow-y-scroll",ref_key:"fsLenisWrapper",ref:e},[l(r(je),{root:"",options:{autoRaf:!0,lerp:.1,content:r(s),wrapper:r(e)}},null,8,["options"]),f[5]||(f[5]=t()),i("div",{class:"w-full",ref_key:"fsLenisContent",ref:s},[l(y,{items:r(m),color:"neutral",modelValue:r(v),"onUpdate:modelValue":f[0]||(f[0]=K=>xn(v)?v.value=K:null),class:"!ml-0"},null,8,["items","modelValue"])],512)],512)]),_:1}),f[10]||(f[10]=t()),l(V,{class:"w-full mb-4 max-h-[85vh] h-[85vh]",padding:!1},{default:o(()=>[i("div",{class:"max-h-full h-full max-w-full w-full overflow-y-scroll transition-all ease-out duration-100 delay-200",ref_key:"ContentLenisWrapper",ref:d},[l(r(je),{root:"",options:{autoRaf:!0,lerp:.1,content:r(n),wrapper:r(d)}},null,8,["options"]),f[9]||(f[9]=t()),i("div",{class:"w-full p-4",ref_key:"ContentLenisContent",ref:n},[l(Dt,{name:"fade"},{default:o(()=>{var K;return[r(v)?(p(),S("div",{key:r(z)},[r(v)?(p(),L(ms,{key:0,link:r(w),item:r(v)},null,8,["link","item"])):_("",!0),f[7]||(f[7]=t()),r(x)?(p(),S("div",na,[r(B)?(p(),S("div",{key:0,innerHTML:r(B)},null,8,la)):_("",!0),f[6]||(f[6]=t()),(K=r(A))!=null&&K.customContent?(p(),S("div",{key:1,innerHTML:r(A).customContent},null,8,oa)):_("",!0)])):_("",!0),f[8]||(f[8]=t()),r(T)?(p(),L(_e(r(c)),{key:2})):_("",!0)])):(p(),L(ds,{key:0,onSelect:f[1]||(f[1]=F=>("navigateTo"in I?I.navigateTo:r(Ke))(`/documentation?section=under-hood&file=${F.label}`))}))]}),_:1})],512)],512)]),_:1})])])}}}),sa=Je(ia,[["__scopeId","data-v-6e86e6e8"]]),aa={class:"flex justify-between"},ra={class:"flex"},ua={key:0,class:"flex items-center justify-start p-2 varela sm:text-md text-sm"},da={key:0,class:"flex items-center"},ma={class:"justify-end items-center sm:flex hidden"},pa={class:"flex"},fa={__name:"index",setup(a){let s=H({section:"documentation",icon:""});const e=Lt();e.query.section&&(s.value=e.query.section);const n=cl(),d=n.toc.map(T=>{var c;return(c=T.children)!=null&&c.length?{...T,children:T.children.map(x=>({...x,onSelect:B=>Ke("/documentation?section="+x.section)}))}:{...T,onSelect:x=>Ke("/documentation?section="+T.section)}});ye(()=>e.query.section,T=>{T?(s.value=d.find(c=>c.section==T.replace("/documentation?section=","")),s.value===void 0&&(s.value=d[1].children.find(c=>c.section==T.replace("/documentation?section=","")))):s.value={section:"documentation",icon:""}},{immediate:!0});const m=H(!1),g=H(!1),b=H(23),v=H("padding-left:23rem;padding-right:23rem;"),C=H("padding-left:17.625rem;padding-right:17.625rem;"),k=T=>{v.value=`padding-left:${T}rem;padding-right:${T}rem;`,C.value=`padding-left:${T-5.375}rem;padding-right:${T-5.375}rem;`};ye(g,async(T,c)=>{g.value?k(b.value):k(7)}),Vt().isMobile&&(g.value=!0,b.value=2);const A=H(),z=H();return(T,c)=>{const x=Mt,B=ke,w=X,I=wn,f=yl,P=$n;return p(),S("div",null,[i("div",aa,[i("div",ra,[l(x,{class:"m-2 p-1",color:"neutral",variant:"ghost",icon:"i-lucide-book-text",to:"/documentation"},{default:o(()=>c[5]||(c[5]=[t(`
          Documentation
        `)])),_:1,__:[5]}),c[12]||(c[12]=t()),r(s).section!="documentation"?(p(),S("div",ua,[l(B,{orientation:"vertical",class:"mr-4",ui:{border:"dark:border-gray-600 border-l-[0.5px] h-full"}}),c[11]||(c[11]=t()),l(I,{direction:"right",duration:500,class:"flex items-center pt-0.5"},{default:o(()=>[r(s).section=="tray-task"||r(s).section=="plugins"||r(s).section=="commands"?(p(),S("div",da,[l(w,{name:"i-lucide-chevron-right",class:"mr-2"}),c[6]||(c[6]=t()),l(w,{name:"i-lucide-pointer",class:"px-3"}),c[7]||(c[7]=t()),c[8]||(c[8]=i("span",{class:"mr-2"},"How to Use",-1))])):_("",!0),c[9]||(c[9]=t()),l(w,{name:"i-lucide-chevron-right",class:"mr-2"}),c[10]||(c[10]=t()),l(w,{name:r(s).icon,class:"px-3"},null,8,["name"]),t(" "+W(r(s).label+" "),1)]),_:1,__:[9,10]})])):_("",!0)]),c[15]||(c[15]=t()),i("div",ma,[g.value&&r(s).section!="api-documentation"&&b.value!=23?(p(),L(I,{key:0,direction:"left",duration:500},{default:o(()=>[l(x,{class:"mr-2",color:"neutral",variant:"ghost",icon:"i-lucide-rotate-ccw",onClick:c[0]||(c[0]=y=>{b.value=23,k(23)})})]),_:1})):_("",!0),c[13]||(c[13]=t()),g.value&&r(s).section!="api-documentation"?(p(),L(I,{key:1,direction:"left",duration:500},{default:o(()=>[l(f,{modelValue:b.value,"onUpdate:modelValue":[c[1]||(c[1]=y=>b.value=y),k],min:7,max:40,step:.125,color:"neutral",class:"w-64 mr-2",style:{"--ui-bg-inverted":"var(--ui-bg-accented)"},size:"xs",tooltip:{text:`${b.value} rem`,delayDuration:200}},null,8,["modelValue","tooltip"])]),_:1})):_("",!0),c[14]||(c[14]=t()),l(x,{class:"mr-2",color:"neutral",variant:"ghost",icon:r(s).section=="api-documentation"?"i-lucide-fold-horizontal":g.value?"i-lucide-unfold-horizontal":"i-lucide-fold-horizontal",onClick:c[2]||(c[2]=y=>g.value=!g.value),style:ce(r(s).section=="api-documentation"?"cursor: not-allowed !important;":""),disabled:r(s).section=="api-documentation"},null,8,["icon","style","disabled"])])]),c[20]||(c[20]=t()),l(B,{ui:{border:"dark:border-gray-600 border-l-[0.5px] w-full"}}),c[21]||(c[21]=t()),i("div",pa,[i("div",{class:"flex flex-col justify-between w-11 hover:w-64 transition-all duration-200 ease-out delay-200",onMouseenter:c[3]||(c[3]=y=>m.value=!0),onMouseleave:c[4]||(c[4]=y=>m.value=!1)},[l(P,{orientation:"vertical",items:r(d),class:"p-1 outfit",ui:{childList:m.value?"sm:ms-5 ms-0 transition-all duration-200 ease-out delay-300":"ms-0 transition-all duration-200 ease-out delay-300",childItem:"ps-0.5",linkLabel:"!font-light",linkTrailingIcon:m.value?"":"!hidden"}},null,8,["items","ui"]),c[16]||(c[16]=t()),l(P,{orientation:"vertical",items:r(n).links,class:"p-1 outfit",ui:{linkLabel:"!font-light"},externalIcon:!1},null,8,["items"])],32),c[18]||(c[18]=t()),l(B,{orientation:" vertical",class:"h-[90vh]",ui:{border:"dark:border-gray-600 border-l-[0.5px] h-full"}}),c[19]||(c[19]=t()),i("div",{style:ce(r(s).section=="api-documentation"?"":m.value?C.value:v.value),class:"docsContent max-h-[90vh] min-h-[90vh] overflow-y-scroll w-full outfit transition-all ease-out duration-100 delay-200",ref_key:"LenisWrapper",ref:A},[l(r(je),{root:"",options:{autoRaf:!0,lerp:.1,anchors:!0,content:z.value,wrapper:A.value}},null,8,["options"]),c[17]||(c[17]=t()),i("div",{ref_key:"LenisContent",ref:z,class:"h-full sm:w-full w-15/17"},[l(Dt,{name:"fade"},{default:o(()=>[r(s).section=="documentation"?(p(),L(Bl,{key:0})):r(s).section=="api-documentation"?(p(),L(Ml,{key:1})):r(s).section=="build-app"?(p(),L(_l,{key:2})):r(s).section=="under-hood"?(p(),L(sa,{key:3})):r(s).section=="commands"?(p(),L(lo,{key:4})):r(s).section=="creating-plugin"?(p(),L(jo,{key:5})):r(s).section=="faq"?(p(),L(Xo,{key:6})):r(s).section=="general-usage"?(p(),L(ai,{key:7})):r(s).section=="installation"?(p(),L(pi,{key:8})):r(s).section=="plugins"?(p(),L(yi,{key:9})):r(s).section=="settings"?(p(),L(Ai,{key:10})):r(s).section=="tray-task"?(p(),L(qi,{key:11})):_("",!0)]),_:1})],512)],4)])])}}},ga=Je(fa,[["__scopeId","data-v-dcd9a41d"]]),Pa=Object.freeze(Object.defineProperty({__proto__:null,default:ga},Symbol.toStringTag,{value:"Module"}));export{Pa as i,nt as m};
