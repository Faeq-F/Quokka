const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Brp0mZq4.js","./DUdjzr7z.js","./entry.B2T6sAEO.css","./C1MAMRzb.js","./B1dRcyM0.js","./ceCF_a_I.js","./e_Bd090k.js","./uCr_muyN.js","./Separator.g9ydD87f.css","./DHzgfKbL.js","./C1_-m_yU.js","./C4t4HCiZ.js","./MazCardSpotlight.rJgYKvyQ.css","./UPphfaQ_.js","./Dy6dDjlv.js","./MazAccordion.C7SW36J5.css","./DlAUqK2U.js","./MazBtn.D8JyV_rX.css","./CB6On7QK.js","./CsDyxO9B.js","./CpabHQpx.js","./MazCheckbox.BAcItvEI.css","./DPr9kBM7.js","./MazInput.B5WqqF6b.css","./dnW2lCGf.js","./MazLoadingBar.Cnd5qhUA.css","./CO7JcISs.js","./MazSelect.B4izt4-t.css","./BZll_PD5.js","./VpulcRv8.js","./MazTableCell.NE7dxRuQ.css","./UGXXA3j3.js","./MazTableRow.C3ga9Zey.css","./PCov-VCz.js","./MazTableTitle.D4AEydCy.css","./gJI32LSs.js","./B47fr0Pc.js","./MazExpandAnimation.DQteHFIz.css","./CzosCfRh.js","./DbhVxPuh.js","./Cm8gVAmu.js"])))=>i.map(i=>d[i]);
import{q as R,a1 as Tt,a2 as At,e as K,a3 as Et,B as we,m as V,o as _,J as ye,a4 as $t,c as F,r as fe,F as ee,a5 as rt,w as s,j as q,f as c,P as ze,a6 as Ie,a7 as xe,h as Y,v as he,a8 as Me,a9 as zt,s as Ve,i as U,aa as It,ab as Lt,z as Re,ac as Bt,b as a,ad as je,ae as Ft,D as Dt,af as Vt,G as Mt,ag as Rt,H as He,d as t,n as J,K as at,a as o,L as ue,t as N,$ as Ot,ah as Nt,W as qt,g as st,N as Ut,k as re,l as ae,M as Oe,X as ot,Z as Kt,ai as Qe,x as Wt,T as jt,I as Ht}from"./DUdjzr7z.js";import{_ as Se,u as ut,b as Qt}from"./uCr_muyN.js";import{u as Gt,a as Yt,_ as Xt,b as Zt,c as Jt}from"./DHzgfKbL.js";import{L as me}from"./C4t4HCiZ.js";import{_ as Q}from"./UPphfaQ_.js";import{e as Ne}from"./Dy6dDjlv.js";import{_ as dt}from"./DlAUqK2U.js";function en(m){return R(()=>{var r;return Tt(m)?!!((r=At(m))!=null&&r.closest("form")):!0})}const Ge=K({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{},value:{},checked:{type:Boolean,default:void 0},required:{type:Boolean},disabled:{type:Boolean},feature:{default:"fully-hidden"}},setup(m){const r=m,{primitiveElement:e,currentElement:l}=Et(),d=R(()=>r.checked??r.value);return we(d,(u,n)=>{if(!l.value)return;const i=l.value,p=window.HTMLInputElement.prototype,P=Object.getOwnPropertyDescriptor(p,"value").set;if(P&&u!==n){const x=new Event("input",{bubbles:!0}),h=new Event("change",{bubbles:!0});P.call(i,u),i.dispatchEvent(x),i.dispatchEvent(h)}}),(u,n)=>(_(),V($t,ye({ref_key:"primitiveElement",ref:e},{...r,...u.$attrs},{as:"input"}),null,16))}}),tn=K({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{},value:{},checked:{type:Boolean,default:void 0},required:{type:Boolean},disabled:{type:Boolean},feature:{default:"fully-hidden"}},setup(m){const r=m,e=R(()=>typeof r.value=="object"&&Array.isArray(r.value)&&r.value.length===0&&r.required),l=R(()=>typeof r.value=="string"||typeof r.value=="number"||typeof r.value=="boolean"?[{name:r.name,value:r.value}]:typeof r.value=="object"&&Array.isArray(r.value)?r.value.flatMap((d,u)=>typeof d=="object"?Object.entries(d).map(([n,i])=>({name:`[${r.name}][${u}][${n}]`,value:i})):{name:`[${r.name}][${u}]`,value:d}):r.value!==null&&typeof r.value=="object"&&!Array.isArray(r.value)?Object.entries(r.value).map(([d,u])=>({name:`[${r.name}][${d}]`,value:u})):[]);return(d,u)=>e.value?(_(),V(Ge,ye({key:d.name},{...r,...d.$attrs},{name:d.name,value:d.value}),null,16,["name","value"])):(_(!0),F(ee,{key:1},fe(l.value,n=>(_(),V(Ge,ye({key:n.name,ref_for:!0},{...r,...d.$attrs},{name:n.name,value:n.value}),null,16,["name","value"]))),128))}});function pt(m,r=Number.NEGATIVE_INFINITY,e=Number.POSITIVE_INFINITY){return Math.min(e,Math.max(r,m))}function nn(m=[],r,e){const l=[...m];return l[e]=r,l.sort((d,u)=>d-u)}function mt(m,r,e){const u=100/(e-r)*(m-r);return pt(u,0,100)}function ln(m,r){return r>2?`Value ${m+1} of ${r}`:r===2?["Minimum","Maximum"][m]:void 0}function rn(m,r){if(m.length===1)return 0;const e=m.map(d=>Math.abs(d-r)),l=Math.min(...e);return e.indexOf(l)}function an(m,r,e){const l=m/2,u=qe([0,50],[0,l]);return(l-u(r)*e)*e}function sn(m){return m.slice(0,-1).map((r,e)=>m[e+1]-r)}function on(m,r){if(r>0){const e=sn(m);return Math.min(...e)>=r}return!0}function qe(m,r){return e=>{if(m[0]===m[1]||r[0]===r[1])return r[0];const l=(r[1]-r[0])/(m[1]-m[0]);return r[0]+l*(e-m[0])}}function un(m){return(String(m).split(".")[1]||"").length}function dn(m,r){const e=10**r;return Math.round(m*e)/e}const ft=["PageUp","PageDown"],gt=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ct={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},[vt,bt]=rt(["SliderVertical","SliderHorizontal"]),yt=K({__name:"SliderImpl",props:{asChild:{type:Boolean},as:{default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(m,{emit:r}){const e=m,l=r,d=Pe();return(u,n)=>(_(),V(c(ze),ye({"data-slider-impl":""},e,{onKeydown:n[0]||(n[0]=i=>{i.key==="Home"?(l("homeKeyDown",i),i.preventDefault()):i.key==="End"?(l("endKeyDown",i),i.preventDefault()):c(ft).concat(c(gt)).includes(i.key)&&(l("stepKeyDown",i),i.preventDefault())}),onPointerdown:n[1]||(n[1]=i=>{const p=i.target;p.setPointerCapture(i.pointerId),i.preventDefault(),c(d).thumbElements.value.includes(p)?p.focus():l("slideStart",i)}),onPointermove:n[2]||(n[2]=i=>{i.target.hasPointerCapture(i.pointerId)&&l("slideMove",i)}),onPointerup:n[3]||(n[3]=i=>{const p=i.target;p.hasPointerCapture(i.pointerId)&&(p.releasePointerCapture(i.pointerId),l("slideEnd",i))})}),{default:s(()=>[q(u.$slots,"default")]),_:3},16))}}),pn=K({__name:"SliderHorizontal",props:{dir:{},min:{},max:{},inverted:{type:Boolean}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(m,{emit:r}){const e=m,l=r,{max:d,min:u,dir:n,inverted:i}=Ie(e),{forwardRef:p,currentElement:k}=xe(),P=Pe(),x=Y(),h=Y(),w=R(()=>(n==null?void 0:n.value)==="ltr"&&!i.value||(n==null?void 0:n.value)!=="ltr"&&i.value);function I(E,A){const $=h.value||k.value.getBoundingClientRect(),f=[...P.thumbElements.value][P.valueIndexToChangeRef.value],g=P.thumbAlignment.value==="contain"?f.clientWidth:0;!x.value&&!A&&P.thumbAlignment.value==="contain"&&(x.value=E.clientX-f.getBoundingClientRect().left);const v=[0,$.width-g],C=w.value?[u.value,d.value]:[d.value,u.value],T=qe(v,C);h.value=$;const L=A?E.clientX-$.left-g/2:E.clientX-$.left-(x.value??0);return T(L)}return bt({startEdge:w.value?"left":"right",endEdge:w.value?"right":"left",direction:w.value?1:-1,size:"width"}),(E,A)=>(_(),V(yt,{ref:c(p),dir:c(n),"data-orientation":"horizontal",style:he({"--reka-slider-thumb-transform":!w.value&&c(P).thumbAlignment.value==="overflow"?"translateX(50%)":"translateX(-50%)"}),onSlideStart:A[0]||(A[0]=$=>{const f=I($,!0);l("slideStart",f)}),onSlideMove:A[1]||(A[1]=$=>{const f=I($);l("slideMove",f)}),onSlideEnd:A[2]||(A[2]=()=>{h.value=void 0,x.value=void 0,l("slideEnd")}),onStepKeyDown:A[3]||(A[3]=$=>{const f=w.value?"from-left":"from-right",g=c(ct)[f].includes($.key);l("stepKeyDown",$,g?-1:1)}),onEndKeyDown:A[4]||(A[4]=$=>l("endKeyDown",$)),onHomeKeyDown:A[5]||(A[5]=$=>l("homeKeyDown",$))},{default:s(()=>[q(E.$slots,"default")]),_:3},8,["dir","style"]))}}),mn=K({__name:"SliderVertical",props:{min:{},max:{},inverted:{type:Boolean}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(m,{emit:r}){const e=m,l=r,{max:d,min:u,inverted:n}=Ie(e),i=Pe(),{forwardRef:p,currentElement:k}=xe(),P=Y(),x=Y(),h=R(()=>!n.value);function w(I,E){const A=x.value||k.value.getBoundingClientRect(),$=[...i.thumbElements.value][i.valueIndexToChangeRef.value],f=i.thumbAlignment.value==="contain"?$.clientHeight:0;!P.value&&!E&&i.thumbAlignment.value==="contain"&&(P.value=I.clientY-$.getBoundingClientRect().top);const g=[0,A.height-f],v=h.value?[d.value,u.value]:[u.value,d.value],C=qe(g,v),T=E?I.clientY-A.top-f/2:I.clientY-A.top-(P.value??0);return x.value=A,C(T)}return bt({startEdge:h.value?"bottom":"top",endEdge:h.value?"top":"bottom",size:"height",direction:h.value?1:-1}),(I,E)=>(_(),V(yt,{ref:c(p),"data-orientation":"vertical",style:he({"--reka-slider-thumb-transform":!h.value&&c(i).thumbAlignment.value==="overflow"?"translateY(-50%)":"translateY(50%)"}),onSlideStart:E[0]||(E[0]=A=>{const $=w(A,!0);l("slideStart",$)}),onSlideMove:E[1]||(E[1]=A=>{const $=w(A);l("slideMove",$)}),onSlideEnd:E[2]||(E[2]=()=>{x.value=void 0,P.value=void 0,l("slideEnd")}),onStepKeyDown:E[3]||(E[3]=A=>{const $=h.value?"from-bottom":"from-top",f=c(ct)[$].includes(A.key);l("stepKeyDown",A,f?-1:1)}),onEndKeyDown:E[4]||(E[4]=A=>l("endKeyDown",A)),onHomeKeyDown:E[5]||(E[5]=A=>l("homeKeyDown",A))},{default:s(()=>[q(I.$slots,"default")]),_:3},8,["style"]))}}),[Pe,fn]=rt("SliderRoot"),gn=K({inheritAttrs:!1,__name:"SliderRoot",props:{defaultValue:{default:()=>[0]},modelValue:{},disabled:{type:Boolean,default:!1},orientation:{default:"horizontal"},dir:{},inverted:{type:Boolean,default:!1},min:{default:0},max:{default:100},step:{default:1},minStepsBetweenThumbs:{default:0},thumbAlignment:{default:"contain"},asChild:{type:Boolean},as:{default:"span"},name:{},required:{type:Boolean}},emits:["update:modelValue","valueCommit"],setup(m,{emit:r}){const e=m,l=r,{min:d,max:u,step:n,minStepsBetweenThumbs:i,orientation:p,disabled:k,thumbAlignment:P,dir:x}=Ie(e),h=Gt(x),{forwardRef:w,currentElement:I}=xe(),E=en(I),{CollectionSlot:A}=Me({isProvider:!0}),$=zt(e,"modelValue",l,{defaultValue:e.defaultValue,passive:e.modelValue===void 0}),f=R(()=>Array.isArray($.value)?[...$.value]:[]),g=Y(0),v=Y(f.value);function C(z){const S=rn(f.value,z);B(z,S)}function T(z){B(z,g.value)}function L(){const z=v.value[g.value];f.value[g.value]!==z&&l("valueCommit",It(f.value))}function B(z,S,{commit:M}={commit:!1}){var de;const W=un(n.value),G=dn(Math.round((z-d.value)/n.value)*n.value+d.value,W),oe=pt(G,d.value,u.value),se=nn(f.value,oe,S);if(on(se,i.value*n.value)){g.value=se.indexOf(oe);const H=String(se)!==String($.value);H&&M&&l("valueCommit",se),H&&((de=b.value[g.value])==null||de.focus(),$.value=se)}}const b=Y([]);return fn({modelValue:$,currentModelValue:f,valueIndexToChangeRef:g,thumbElements:b,orientation:p,min:d,max:u,disabled:k,thumbAlignment:P}),(z,S)=>(_(),V(c(A),null,{default:s(()=>[(_(),V(Ve(c(p)==="horizontal"?pn:mn),ye(z.$attrs,{ref:c(w),"as-child":z.asChild,as:z.as,min:c(d),max:c(u),dir:c(h),inverted:z.inverted,"aria-disabled":c(k),"data-disabled":c(k)?"":void 0,onPointerdown:S[0]||(S[0]=()=>{c(k)||(v.value=f.value)}),onSlideStart:S[1]||(S[1]=M=>!c(k)&&C(M)),onSlideMove:S[2]||(S[2]=M=>!c(k)&&T(M)),onSlideEnd:S[3]||(S[3]=M=>!c(k)&&L()),onHomeKeyDown:S[4]||(S[4]=M=>!c(k)&&B(c(d),0,{commit:!0})),onEndKeyDown:S[5]||(S[5]=M=>!c(k)&&B(c(u),f.value.length-1,{commit:!0})),onStepKeyDown:S[6]||(S[6]=(M,W)=>{if(!c(k)){const se=c(ft).includes(M.key)||M.shiftKey&&c(gt).includes(M.key)?10:1,de=g.value,H=f.value[de],j=c(n)*se*W;B(H+j,de,{commit:!0})}})}),{default:s(()=>[q(z.$slots,"default",{modelValue:c($)}),c(E)&&z.name?(_(),V(c(tn),{key:0,type:"number",value:c($),name:z.name,required:z.required,disabled:c(k),step:c(n)},null,8,["value","name","required","disabled","step"])):U("",!0)]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}))}}),cn=K({__name:"SliderRange",props:{asChild:{type:Boolean},as:{default:"span"}},setup(m){const r=Pe(),e=vt();xe();const l=R(()=>r.currentModelValue.value.map(n=>mt(n,r.min.value,r.max.value))),d=R(()=>r.currentModelValue.value.length>1?Math.min(...l.value):0),u=R(()=>100-Math.max(...l.value,0));return(n,i)=>(_(),V(c(ze),{"data-disabled":c(r).disabled.value?"":void 0,"data-orientation":c(r).orientation.value,"as-child":n.asChild,as:n.as,style:he({[c(e).startEdge]:`${d.value}%`,[c(e).endEdge]:`${u.value}%`})},{default:s(()=>[q(n.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}}),vn=K({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{},asChild:{type:Boolean},as:{}},setup(m){const r=m,e=Pe(),l=vt(),{forwardRef:d,currentElement:u}=xe(),{CollectionItem:n}=Me(),i=R(()=>{var I,E;return(E=(I=e.modelValue)==null?void 0:I.value)==null?void 0:E[r.index]}),p=R(()=>i.value===void 0?0:mt(i.value,e.min.value??0,e.max.value??100)),k=R(()=>{var I,E;return ln(r.index,((E=(I=e.modelValue)==null?void 0:I.value)==null?void 0:E.length)??0)}),P=Yt(u),x=R(()=>P[l.size].value),h=R(()=>e.thumbAlignment.value==="overflow"||!x.value?0:an(x.value,p.value,l.direction)),w=Lt();return Re(()=>{e.thumbElements.value.push(u.value)}),Bt(()=>{const I=e.thumbElements.value.findIndex(E=>E===u.value)??-1;e.thumbElements.value.splice(I,1)}),(I,E)=>(_(),V(c(n),null,{default:s(()=>[a(c(ze),ye(I.$attrs,{ref:c(d),role:"slider",tabindex:c(e).disabled.value?void 0:0,"aria-label":I.$attrs["aria-label"]||k.value,"data-disabled":c(e).disabled.value?"":void 0,"data-orientation":c(e).orientation.value,"aria-valuenow":i.value,"aria-valuemin":c(e).min.value,"aria-valuemax":c(e).max.value,"aria-orientation":c(e).orientation.value,"as-child":I.asChild,as:I.as,style:{transform:"var(--reka-slider-thumb-transform)",position:"absolute",[c(l).startEdge]:`calc(${p.value}% + ${h.value}px)`,display:!c(w)&&i.value===void 0?"none":void 0},onFocus:E[0]||(E[0]=()=>{c(e).valueIndexToChangeRef.value=I.index})}),{default:s(()=>[q(I.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),Ye=K({__name:"SliderThumb",props:{asChild:{type:Boolean},as:{default:"span"}},setup(m){const r=m,{getItems:e}=Me(),{forwardRef:l,currentElement:d}=xe(),u=R(()=>d.value?e(!0).findIndex(n=>n.ref===d.value):-1);return(n,i)=>(_(),V(vn,ye({ref:c(l)},r,{index:u.value}),{default:s(()=>[q(n.$slots,"default")]),_:3},16,["index"]))}}),bn=K({__name:"SliderTrack",props:{asChild:{type:Boolean},as:{default:"span"}},setup(m){const r=Pe();return xe(),(e,l)=>(_(),V(c(ze),{"as-child":e.asChild,as:e.as,"data-disabled":c(r).disabled.value?"":void 0,"data-orientation":c(r).orientation.value},{default:s(()=>[q(e.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}}),yn={slots:{root:"relative flex items-center select-none touch-none",track:"relative bg-accented overflow-hidden rounded-full grow",range:"absolute rounded-full",thumb:"rounded-full bg-default ring-2 focus-visible:outline-2 focus-visible:outline-offset-2"},variants:{color:{primary:{range:"bg-primary",thumb:"ring-primary focus-visible:outline-primary/50"},secondary:{range:"bg-secondary",thumb:"ring-secondary focus-visible:outline-secondary/50"},success:{range:"bg-success",thumb:"ring-success focus-visible:outline-success/50"},info:{range:"bg-info",thumb:"ring-info focus-visible:outline-info/50"},warning:{range:"bg-warning",thumb:"ring-warning focus-visible:outline-warning/50"},error:{range:"bg-error",thumb:"ring-error focus-visible:outline-error/50"},neutral:{range:"bg-inverted",thumb:"ring-inverted focus-visible:outline-inverted/50"}},size:{xs:{thumb:"size-3"},sm:{thumb:"size-3.5"},md:{thumb:"size-4"},lg:{thumb:"size-4.5"},xl:{thumb:"size-5"}},orientation:{horizontal:{root:"w-full",range:"h-full"},vertical:{root:"flex-col h-full",range:"w-full"}},disabled:{true:{root:"opacity-75 cursor-not-allowed"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{track:"h-[6px]"}},{orientation:"horizontal",size:"sm",class:{track:"h-[7px]"}},{orientation:"horizontal",size:"md",class:{track:"h-[8px]"}},{orientation:"horizontal",size:"lg",class:{track:"h-[9px]"}},{orientation:"horizontal",size:"xl",class:{track:"h-[10px]"}},{orientation:"vertical",size:"xs",class:{track:"w-[6px]"}},{orientation:"vertical",size:"sm",class:{track:"w-[7px]"}},{orientation:"vertical",size:"md",class:{track:"w-[8px]"}},{orientation:"vertical",size:"lg",class:{track:"w-[9px]"}},{orientation:"vertical",size:"xl",class:{track:"w-[10px]"}}],defaultVariants:{size:"md",color:"primary"}},hn={__name:"Slider",props:je({as:{type:null,required:!1},size:{type:null,required:!1},color:{type:null,required:!1},orientation:{type:null,required:!1,default:"horizontal"},tooltip:{type:[Boolean,Object],required:!1},defaultValue:{type:[Number,Array],required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},name:{type:String,required:!1},disabled:{type:Boolean,required:!1},inverted:{type:Boolean,required:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},minStepsBetweenThumbs:{type:Number,required:!1}},{modelValue:{type:null},modelModifiers:{}}),emits:je(["update:modelValue","change"],["update:modelValue"]),setup(m,{emit:r}){const e=m,l=r,d=Ft(m,"modelValue"),u=Dt(),n=Vt(Mt(e,"as","orientation","min","max","step","minStepsBetweenThumbs","inverted"),l),{id:i,emitFormChange:p,emitFormInput:k,size:P,color:x,name:h,disabled:w,ariaAttrs:I}=Rt(e),E=R(()=>typeof e.defaultValue=="number"?[e.defaultValue]:e.defaultValue),A=R({get(){return typeof d.value=="number"?[d.value]:d.value??E.value},set(v){d.value=(v==null?void 0:v.length)!==1?v:v[0]}}),$=R(()=>{var v;return((v=A.value)==null?void 0:v.length)??1}),f=R(()=>{var v;return He({extend:He(yn),...((v=u.ui)==null?void 0:v.slider)||{}})({disabled:w.value,size:P.value,color:x.value,orientation:e.orientation})});function g(v){const C=new Event("change",{target:{value:v}});l("change",C),p()}return(v,C)=>{var T;return _(),V(c(gn),ye({...c(n),...c(I)},{id:c(i),modelValue:A.value,"onUpdate:modelValue":[C[0]||(C[0]=L=>A.value=L),C[1]||(C[1]=L=>c(k)())],name:c(h),disabled:c(w),class:f.value.root({class:[(T=e.ui)==null?void 0:T.root,e.class]}),"default-value":E.value,onValueCommit:g}),{default:s(()=>{var L;return[a(c(bn),{class:J(f.value.track({class:(L=e.ui)==null?void 0:L.track}))},{default:s(()=>{var B;return[a(c(cn),{class:J(f.value.range({class:(B=e.ui)==null?void 0:B.range}))},null,8,["class"])]}),_:1},8,["class"]),C[2]||(C[2]=t()),(_(!0),F(ee,null,fe($.value,B=>{var b,z;return _(),F(ee,{key:B},[m.tooltip?(_(),V(Xt,ye({key:0,text:$.value>1?String((b=A.value)==null?void 0:b[B-1]):String(A.value),"disable-closing-trigger":"",ref_for:!0},typeof m.tooltip=="object"?m.tooltip:{}),{default:s(()=>{var S;return[a(c(Ye),{class:J(f.value.thumb({class:(S=e.ui)==null?void 0:S.thumb}))},null,8,["class"])]}),_:2},1040,["text"])):(_(),V(c(Ye),{key:1,class:J(f.value.thumb({class:(z=e.ui)==null?void 0:z.thumb}))},null,8,["class"]))],64)}),128))]}),_:1,__:[2]},16,["id","modelValue","name","disabled","class","default-value"])}}},wn=at("docsStore",{state:()=>({toc:[{label:"Installation",icon:"i-lucide-loader",section:"installation"},{label:"How to Use",icon:"i-lucide-pointer",section:"general-usage",children:[{label:"General Usage",icon:"i-lucide-mouse-pointer",section:"general-usage"},{label:"Tray task",icon:"i-lucide-panel-bottom",section:"tray-task"},{label:"Plugins",icon:"i-lucide-blocks",section:"plugins"},{label:"Commands",icon:"i-lucide-zap",section:"commands"}]},{label:"Settings",icon:"i-lucide-sliders-vertical",section:"settings"},{label:"Building the app",icon:"i-lucide-drill",section:"build-app"},{label:"API Documentation",icon:"i-lucide-code",section:"api-documentation"},{label:"Creating a plugin",icon:"i-lucide-toy-brick",section:"creating-plugin"},{label:"FAQ by Developers",icon:"i-lucide-circle-help",section:"faq"}],links:[[{label:"License",icon:"i-lucide-scale",to:"",target:"_blank"}],[{label:"Changelog",icon:"i-lucide-file-cog",to:"",target:"_blank"},{label:"Releases",icon:"i-lucide-tags",to:"",target:"_blank"}],[{label:"Program Source",icon:"i-lucide-folder-git",to:"",target:"_blank"},{label:"Website Source",icon:"i-lucide-folder-git-2",to:"",target:"_blank"}],[{label:"Discussions",icon:"i-lucide-messages-square",to:"",target:"_blank"},{label:"Feedback",icon:"i-lucide-thumbs-up",to:"",target:"_blank"},{label:"Security Policy",icon:"i-lucide-shield-check",to:"",target:"_blank"},{label:"Report an Issue",icon:"i-lucide-octagon-alert",to:"",target:"_blank"}]]}),actions:{}}),kn={class:"w-full text-center"},xn={class:"flex w-full mt-12"},Sn={class:"flex flex-col justify-center items-center h-full"},_n={class:"text-sm text-gray-400"},Cn={class:"flex w-full"},Pn={class:"flex flex-col justify-center items-center h-full"},Tn={class:"text-sm text-gray-400"},An={class:"pr-6"},En={class:"flex flex-col justify-center items-center h-full"},$n={class:"text-sm text-gray-400"},zn={__name:"documentation",setup(m){const r=Zt();return(e,l)=>{const d=ue,u=me;return _(),F("div",kn,[l[7]||(l[7]=o("div",{class:"text-3xl mb-2 mt-22"},`
      Welcome to the Quokka documentation!
    `,-1)),l[8]||(l[8]=t()),l[9]||(l[9]=o("div",null,`
      This is a place where you can find all the information you need to get
      started with Quokka
    `,-1)),l[10]||(l[10]=t()),l[11]||(l[11]=o("div",null,`
      If you have any questions or feedback, feel free to reach out
    `,-1)),l[12]||(l[12]=t()),o("div",xn,[(_(!0),F(ee,null,fe(c(r).items[0][1].children.slice(0,3),(n,i)=>(_(),V(u,{class:"w-1/3 m-3 h-36 clickable",key:i,onClick:p=>e.$emit("switchSection",n.to)},{default:s(()=>[o("div",Sn,[a(d,{name:n.icon},null,8,["name"]),l[1]||(l[1]=t()),o("div",null,N(n.label),1),l[2]||(l[2]=t()),o("div",_n,N(n.description),1)])]),_:2},1032,["onClick"]))),128))]),l[13]||(l[13]=t()),o("div",Cn,[(_(!0),F(ee,null,fe(c(r).items[0][1].children.slice(3,6),(n,i)=>(_(),V(u,{class:"w-1/3 m-3 h-36 clickable",key:i,onClick:p=>e.$emit("switchSection",n.to)},{default:s(()=>[o("div",Pn,[a(d,{name:n.icon},null,8,["name"]),l[3]||(l[3]=t()),o("div",null,N(n.label),1),l[4]||(l[4]=t()),o("div",Tn,N(n.description),1)])]),_:2},1032,["onClick"]))),128))]),l[14]||(l[14]=t()),o("div",An,[a(u,{class:"w-full m-3 h-36 clickable",onClick:l[0]||(l[0]=n=>e.$emit("switchSection",c(r).items[0][1].children[6].to))},{default:s(()=>[o("div",En,[a(d,{name:c(r).items[0][1].children[6].icon},null,8,["name"]),l[5]||(l[5]=t()),o("div",null,N(c(r).items[0][1].children[6].label),1),l[6]||(l[6]=t()),o("div",$n,N(c(r).items[0][1].children[6].description),1)])]),_:1})])])}}},In={class:"w-full h-full !border-0"},Ln=K({__name:"apiDocumentation",setup(m){function r(){d.value.contentDocument.getElementsByTagName("html")[0].dataset.bsTheme=l.selectedTheme.value;let u=`
    a:-webkit-any-link{
      cursor: url(https://faeq-f.github.io/Quokka/cursors/${l.selectedTheme.value}-Click.cur),auto;
    }
  `,n=d.value.contentDocument.createElement("style");n.type="text/css",n.appendChild(d.value.contentDocument.createTextNode(u)),d.value.contentDocument.body.appendChild(n),d.value.contentDocument.body.style.cursor="url(https://faeq-f.github.io/Quokka/cursors/"+l.selectedTheme.value+"-Point.cur),auto";for(var i of d.value.contentDocument.body.getElementsByTagName("a"))i.style.cursor="url(https://faeq-f.github.io/Quokka/cursors/"+l.selectedTheme.value+"-Click.cur),auto"}function e(u,n){var i=function(){setTimeout(function(){n(u,u.contentWindow.location.href)},0)};function p(){u.contentWindow.removeEventListener("unload",i),u.contentWindow.addEventListener("unload",i)}u.addEventListener("load",p),p()}const l=Ot({watchChanges:!0}),d=Y(null);return Re(()=>{d.value.addEventListener("load",r),we(l.selectedTheme,async(u,n)=>r()),e(d.value,function(u,n){r()})}),(u,n)=>(_(),F("div",In,[o("iframe",{ref_key:"APIframe",ref:d,src:"/Quokka/APIdocs/api/Quokka.html",class:"w-full h-full"},null,512)]))}});var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bn(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var Fe={exports:{}},Ze;function Fn(){return Ze||(Ze=1,function(m){var r=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var e=function(l){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,u=0,n={},i={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function f(g){return g instanceof p?new p(g.type,f(g.content),g.alias):Array.isArray(g)?g.map(f):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++u}),f.__id},clone:function f(g,v){v=v||{};var C,T;switch(i.util.type(g)){case"Object":if(T=i.util.objId(g),v[T])return v[T];C={},v[T]=C;for(var L in g)g.hasOwnProperty(L)&&(C[L]=f(g[L],v));return C;case"Array":return T=i.util.objId(g),v[T]?v[T]:(C=[],v[T]=C,g.forEach(function(B,b){C[b]=f(B,v)}),C);default:return g}},getLanguage:function(f){for(;f;){var g=d.exec(f.className);if(g)return g[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,g){f.className=f.className.replace(RegExp(d,"gi"),""),f.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(C){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(f){var g=document.getElementsByTagName("script");for(var v in g)if(g[v].src==f)return g[v]}return null}},isActive:function(f,g,v){for(var C="no-"+g;f;){var T=f.classList;if(T.contains(g))return!0;if(T.contains(C))return!1;f=f.parentElement}return!!v}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(f,g){var v=i.util.clone(i.languages[f]);for(var C in g)v[C]=g[C];return v},insertBefore:function(f,g,v,C){C=C||i.languages;var T=C[f],L={};for(var B in T)if(T.hasOwnProperty(B)){if(B==g)for(var b in v)v.hasOwnProperty(b)&&(L[b]=v[b]);v.hasOwnProperty(B)||(L[B]=T[B])}var z=C[f];return C[f]=L,i.languages.DFS(i.languages,function(S,M){M===z&&S!=f&&(this[S]=L)}),L},DFS:function f(g,v,C,T){T=T||{};var L=i.util.objId;for(var B in g)if(g.hasOwnProperty(B)){v.call(g,B,g[B],C||B);var b=g[B],z=i.util.type(b);z==="Object"&&!T[L(b)]?(T[L(b)]=!0,f(b,v,null,T)):z==="Array"&&!T[L(b)]&&(T[L(b)]=!0,f(b,v,B,T))}}},plugins:{},highlightAll:function(f,g){i.highlightAllUnder(document,f,g)},highlightAllUnder:function(f,g,v){var C={callback:v,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var T=0,L;L=C.elements[T++];)i.highlightElement(L,g===!0,C.callback)},highlightElement:function(f,g,v){var C=i.util.getLanguage(f),T=i.languages[C];i.util.setLanguage(f,C);var L=f.parentElement;L&&L.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(L,C);var B=f.textContent,b={element:f,language:C,grammar:T,code:B};function z(M){b.highlightedCode=M,i.hooks.run("before-insert",b),b.element.innerHTML=b.highlightedCode,i.hooks.run("after-highlight",b),i.hooks.run("complete",b),v&&v.call(b.element)}if(i.hooks.run("before-sanity-check",b),L=b.element.parentElement,L&&L.nodeName.toLowerCase()==="pre"&&!L.hasAttribute("tabindex")&&L.setAttribute("tabindex","0"),!b.code){i.hooks.run("complete",b),v&&v.call(b.element);return}if(i.hooks.run("before-highlight",b),!b.grammar){z(i.util.encode(b.code));return}if(g&&l.Worker){var S=new Worker(i.filename);S.onmessage=function(M){z(M.data)},S.postMessage(JSON.stringify({language:b.language,code:b.code,immediateClose:!0}))}else z(i.highlight(b.code,b.grammar,b.language))},highlight:function(f,g,v){var C={code:f,grammar:g,language:v};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),p.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(f,g){var v=g.rest;if(v){for(var C in v)g[C]=v[C];delete g.rest}var T=new x;return h(T,T.head,f),P(f,T,g,T.head,0),I(T)},hooks:{all:{},add:function(f,g){var v=i.hooks.all;v[f]=v[f]||[],v[f].push(g)},run:function(f,g){var v=i.hooks.all[f];if(!(!v||!v.length))for(var C=0,T;T=v[C++];)T(g)}},Token:p};l.Prism=i;function p(f,g,v,C){this.type=f,this.content=g,this.alias=v,this.length=(C||"").length|0}p.stringify=function f(g,v){if(typeof g=="string")return g;if(Array.isArray(g)){var C="";return g.forEach(function(z){C+=f(z,v)}),C}var T={type:g.type,content:f(g.content,v),tag:"span",classes:["token",g.type],attributes:{},language:v},L=g.alias;L&&(Array.isArray(L)?Array.prototype.push.apply(T.classes,L):T.classes.push(L)),i.hooks.run("wrap",T);var B="";for(var b in T.attributes)B+=" "+b+'="'+(T.attributes[b]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+B+">"+T.content+"</"+T.tag+">"};function k(f,g,v,C){f.lastIndex=g;var T=f.exec(v);if(T&&C&&T[1]){var L=T[1].length;T.index+=L,T[0]=T[0].slice(L)}return T}function P(f,g,v,C,T,L){for(var B in v)if(!(!v.hasOwnProperty(B)||!v[B])){var b=v[B];b=Array.isArray(b)?b:[b];for(var z=0;z<b.length;++z){if(L&&L.cause==B+","+z)return;var S=b[z],M=S.inside,W=!!S.lookbehind,G=!!S.greedy,oe=S.alias;if(G&&!S.pattern.global){var se=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,se+"g")}for(var de=S.pattern||S,H=C.next,j=T;H!==g.tail&&!(L&&j>=L.reach);j+=H.value.length,H=H.next){var X=H.value;if(g.length>f.length)return;if(!(X instanceof p)){var te=1,Z;if(G){if(Z=k(de,j,f,W),!Z||Z.index>=f.length)break;var be=Z.index,_e=Z.index+Z[0].length,ge=j;for(ge+=H.value.length;be>=ge;)H=H.next,ge+=H.value.length;if(ge-=H.value.length,j=ge,H.value instanceof p)continue;for(var ve=H;ve!==g.tail&&(ge<_e||typeof ve.value=="string");ve=ve.next)te++,ge+=ve.value.length;te--,X=f.slice(j,ge),Z.index-=j}else if(Z=k(de,0,X,W),!Z)continue;var be=Z.index,Ce=Z[0],Te=X.slice(0,be),ce=X.slice(be+Ce.length),Ae=j+X.length;L&&Ae>L.reach&&(L.reach=Ae);var ke=H.prev;Te&&(ke=h(g,ke,Te),j+=Te.length),w(g,ke,te);var Le=new p(B,M?i.tokenize(Ce,M):Ce,oe,Ce);if(H=h(g,ke,Le),ce&&h(g,H,ce),te>1){var Ee={cause:B+","+z,reach:Ae};P(f,g,v,H.prev,j,Ee),L&&Ee.reach>L.reach&&(L.reach=Ee.reach)}}}}}}function x(){var f={value:null,prev:null,next:null},g={value:null,prev:f,next:null};f.next=g,this.head=f,this.tail=g,this.length=0}function h(f,g,v){var C=g.next,T={value:v,prev:g,next:C};return g.next=T,C.prev=T,f.length++,T}function w(f,g,v){for(var C=g.next,T=0;T<v&&C!==f.tail;T++)C=C.next;g.next=C,C.prev=g,f.length-=T}function I(f){for(var g=[],v=f.head.next;v!==f.tail;)g.push(v.value),v=v.next;return g}if(!l.document)return l.addEventListener&&(i.disableWorkerMessageHandler||l.addEventListener("message",function(f){var g=JSON.parse(f.data),v=g.language,C=g.code,T=g.immediateClose;l.postMessage(i.highlight(C,i.languages[v],v)),T&&l.close()},!1)),i;var E=i.util.currentScript();E&&(i.filename=E.src,E.hasAttribute("data-manual")&&(i.manual=!0));function A(){i.manual||i.highlightAll()}if(!i.manual){var $=document.readyState;$==="loading"||$==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return i}(r);m.exports&&(m.exports=e),typeof Xe<"u"&&(Xe.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(l){l.type==="entity"&&(l.attributes.title=l.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(d,u){var n={};n["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[u]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+u]={pattern:/[\s\S]+/,inside:e.languages[u]};var p={};p[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:i},e.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(l,d){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+l+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:e.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(l){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;l.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+d.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},l.languages.css.atrule.inside.rest=l.languages.css;var u=l.languages.markup;u&&(u.tag.addInlined("style","css"),u.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(typeof e>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var l="Loading…",d=function(E,A){return"✖ Error "+E+" while fetching file: "+A},u="✖ Error: File does not exist or is empty",n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",p="loading",k="loaded",P="failed",x="pre[data-src]:not(["+i+'="'+k+'"]):not(['+i+'="'+p+'"])';function h(E,A,$){var f=new XMLHttpRequest;f.open("GET",E,!0),f.onreadystatechange=function(){f.readyState==4&&(f.status<400&&f.responseText?A(f.responseText):f.status>=400?$(d(f.status,f.statusText)):$(u))},f.send(null)}function w(E){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(E||"");if(A){var $=Number(A[1]),f=A[2],g=A[3];return f?g?[$,Number(g)]:[$,void 0]:[$,$]}}e.hooks.add("before-highlightall",function(E){E.selector+=", "+x}),e.hooks.add("before-sanity-check",function(E){var A=E.element;if(A.matches(x)){E.code="",A.setAttribute(i,p);var $=A.appendChild(document.createElement("CODE"));$.textContent=l;var f=A.getAttribute("data-src"),g=E.language;if(g==="none"){var v=(/\.(\w+)$/.exec(f)||[,"none"])[1];g=n[v]||v}e.util.setLanguage($,g),e.util.setLanguage(A,g);var C=e.plugins.autoloader;C&&C.loadLanguages(g),h(f,function(T){A.setAttribute(i,k);var L=w(A.getAttribute("data-range"));if(L){var B=T.split(/\r\n?|\n/g),b=L[0],z=L[1]==null?B.length:L[1];b<0&&(b+=B.length),b=Math.max(0,Math.min(b-1,B.length)),z<0&&(z+=B.length),z=Math.max(0,Math.min(z,B.length)),T=B.slice(b,z).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(b+1))}$.textContent=T,e.highlightElement($)},function(T){A.setAttribute(i,P),$.textContent=T})}}),e.plugins.fileHighlight={highlight:function(A){for(var $=(A||document).querySelectorAll(x),f=0,g;g=$[f++];)e.highlightElement(g)}};var I=!1;e.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}()}(Fe)),Fe.exports}var Dn=Fn();const Je=Bn(Dn);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};var et={},tt;function Vn(){return tt||(tt=1,function(m){function r(j,X){return j.replace(/<<(\d+)>>/g,function(te,Z){return"(?:"+X[+Z]+")"})}function e(j,X,te){return RegExp(r(j,X),"")}function l(j,X){for(var te=0;te<X;te++)j=j.replace(/<<self>>/g,function(){return"(?:"+j+")"});return j.replace(/<<self>>/g,"[^\\s\\S]")}var d={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function u(j){return"\\b(?:"+j.trim().replace(/ /g,"|")+")\\b"}var n=u(d.typeDeclaration),i=RegExp(u(d.type+" "+d.typeDeclaration+" "+d.contextual+" "+d.other)),p=u(d.typeDeclaration+" "+d.contextual+" "+d.other),k=u(d.type+" "+d.typeDeclaration+" "+d.other),P=l(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),x=l(/\((?:[^()]|<<self>>)*\)/.source,2),h=/@?\b[A-Za-z_]\w*\b/.source,w=r(/<<0>>(?:\s*<<1>>)?/.source,[h,P]),I=r(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[p,w]),E=/\[\s*(?:,\s*)*\]/.source,A=r(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[I,E]),$=r(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[P,x,E]),f=r(/\(<<0>>+(?:,<<0>>+)+\)/.source,[$]),g=r(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[f,I,E]),v={keyword:i,punctuation:/[<>()?,.:[\]]/},C=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,T=/"(?:\\.|[^\\"\r\n])*"/.source,L=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;m.languages.csharp=m.languages.extend("clike",{string:[{pattern:e(/(^|[^$\\])<<0>>/.source,[L]),lookbehind:!0,greedy:!0},{pattern:e(/(^|[^@$\\])<<0>>/.source,[T]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[I]),lookbehind:!0,inside:v},{pattern:e(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[h,g]),lookbehind:!0,inside:v},{pattern:e(/(\busing\s+)<<0>>(?=\s*=)/.source,[h]),lookbehind:!0},{pattern:e(/(\b<<0>>\s+)<<1>>/.source,[n,w]),lookbehind:!0,inside:v},{pattern:e(/(\bcatch\s*\(\s*)<<0>>/.source,[I]),lookbehind:!0,inside:v},{pattern:e(/(\bwhere\s+)<<0>>/.source,[h]),lookbehind:!0},{pattern:e(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[A]),lookbehind:!0,inside:v},{pattern:e(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[g,k,h]),inside:v}],keyword:i,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),m.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),m.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e(/([(,]\s*)<<0>>(?=\s*:)/.source,[h]),lookbehind:!0,alias:"punctuation"}}),m.languages.insertBefore("csharp","class-name",{namespace:{pattern:e(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[x]),lookbehind:!0,alias:"class-name",inside:v},"return-type":{pattern:e(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[g,I]),inside:v,alias:"class-name"},"constructor-invocation":{pattern:e(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[g]),lookbehind:!0,inside:v,alias:"class-name"},"generic-method":{pattern:e(/<<0>>\s*<<1>>(?=\s*\()/.source,[h,P]),inside:{function:e(/^<<0>>/.source,[h]),generic:{pattern:RegExp(P),alias:"class-name",inside:v}}},"type-list":{pattern:e(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[n,w,h,g,i.source,x,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:e(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[w,x]),lookbehind:!0,greedy:!0,inside:m.languages.csharp},keyword:i,"class-name":{pattern:RegExp(g),greedy:!0,inside:v},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var B=T+"|"+C,b=r(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[B]),z=l(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[b]),2),S=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,M=r(/<<0>>(?:\s*\(<<1>>*\))?/.source,[I,z]);m.languages.insertBefore("csharp","class-name",{attribute:{pattern:e(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[S,M]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e(/^<<0>>(?=\s*:)/.source,[S]),alias:"keyword"},"attribute-arguments":{pattern:e(/\(<<0>>*\)/.source,[z]),inside:m.languages.csharp},"class-name":{pattern:RegExp(I),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var W=/:[^}\r\n]+/.source,G=l(r(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[b]),2),oe=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[G,W]),se=l(r(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[B]),2),de=r(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[se,W]);function H(j,X){return{interpolation:{pattern:e(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[j]),lookbehind:!0,inside:{"format-string":{pattern:e(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[X,W]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:m.languages.csharp}}},string:/[\s\S]+/}}m.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[oe]),lookbehind:!0,greedy:!0,inside:H(oe,G)},{pattern:e(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[de]),lookbehind:!0,greedy:!0,inside:H(de,se)}],char:{pattern:RegExp(C),greedy:!0}}),m.languages.dotnet=m.languages.cs=m.languages.csharp}(Prism)),et}Vn();(function(){if(typeof Prism>"u"||typeof document>"u")return;function m(x){var h=Prism.plugins.customClass;return h?h.apply(x,"none"):x}var r={"(":")","[":"]","{":"}"},e={"(":"brace-round","[":"brace-square","{":"brace-curly"},l={"${":"{"},d=12,u=0,n=/^(pair-\d+-)(close|open)$/;function i(x){var h=n.exec(x.id);return document.querySelector("#"+h[1]+(h[2]=="open"?"close":"open"))}function p(){Prism.util.isActive(this,"brace-hover",!0)&&[this,i(this)].forEach(function(x){x.classList.add(m("brace-hover"))})}function k(){[this,i(this)].forEach(function(x){x.classList.remove(m("brace-hover"))})}function P(){Prism.util.isActive(this,"brace-select",!0)&&[this,i(this)].forEach(function(x){x.classList.add(m("brace-selected"))})}Prism.hooks.add("complete",function(x){var h=x.element,w=h.parentElement;if(!(!w||w.tagName!="PRE")){var I=[];if(Prism.util.isActive(h,"match-braces")&&I.push("(","[","{"),I.length!=0){w.__listenerAdded||(w.addEventListener("mousedown",function(){var g=w.querySelector("code"),v=m("brace-selected");Array.prototype.slice.call(g.querySelectorAll("."+v)).forEach(function(C){C.classList.remove(v)})}),Object.defineProperty(w,"__listenerAdded",{value:!0}));var E=Array.prototype.slice.call(h.querySelectorAll("span."+m("token")+"."+m("punctuation"))),A=[];I.forEach(function(f){for(var g=r[f],v=m(e[f]),C=[],T=[],L=0;L<E.length;L++){var B=E[L];if(B.childElementCount==0){var b=B.textContent;b=l[b]||b,b===f?(A.push({index:L,open:!0,element:B}),B.classList.add(v),B.classList.add(m("brace-open")),T.push(L)):b===g&&(A.push({index:L,open:!1,element:B}),B.classList.add(v),B.classList.add(m("brace-close")),T.length&&C.push([L,T.pop()]))}}C.forEach(function(z){var S="pair-"+u+++"-",M=E[z[0]],W=E[z[1]];M.id=S+"open",W.id=S+"close",[M,W].forEach(function(G){G.addEventListener("mouseenter",p),G.addEventListener("mouseleave",k),G.addEventListener("click",P)})})});var $=0;A.sort(function(f,g){return f.index-g.index}),A.forEach(function(f){f.open?(f.element.classList.add(m("brace-level-"+($%d+1))),$++):($=Math.max(0,$-1),f.element.classList.add(m("brace-level-"+($%d+1))))})}}})})();(function(){if(typeof Prism>"u"||typeof document>"u")return;var m=[],r={},e=function(){};Prism.plugins.toolbar={};var l=Prism.plugins.toolbar.registerButton=function(n,i){var p;if(typeof i=="function"?p=i:p=function(k){var P;return typeof i.onClick=="function"?(P=document.createElement("button"),P.type="button",P.addEventListener("click",function(){i.onClick.call(this,k)})):typeof i.url=="string"?(P=document.createElement("a"),P.href=i.url):P=document.createElement("span"),i.className&&P.classList.add(i.className),P.textContent=i.text,P},n in r){console.warn('There is a button with the key "'+n+'" registered already.');return}m.push(r[n]=p)};function d(n){for(;n;){var i=n.getAttribute("data-toolbar-order");if(i!=null)return i=i.trim(),i.length?i.split(/\s*,\s*/g):[];n=n.parentElement}}var u=Prism.plugins.toolbar.hook=function(n){var i=n.element.parentNode;if(!(!i||!/pre/i.test(i.nodeName))&&!i.parentNode.classList.contains("code-toolbar")){var p=document.createElement("div");p.classList.add("code-toolbar"),i.parentNode.insertBefore(p,i),p.appendChild(i);var k=document.createElement("div");k.classList.add("toolbar");var P=m,x=d(n.element);x&&(P=x.map(function(h){return r[h]||e})),P.forEach(function(h){var w=h(n);if(w){var I=document.createElement("div");I.classList.add("toolbar-item"),I.appendChild(w),k.appendChild(I)}}),p.appendChild(k)}};l("label",function(n){var i=n.element.parentNode;if(!(!i||!/pre/i.test(i.nodeName))&&i.hasAttribute("data-label")){var p,k,P=i.getAttribute("data-label");try{k=document.querySelector("template#"+P)}catch{}return k?p=k.content:(i.hasAttribute("data-url")?(p=document.createElement("a"),p.href=i.getAttribute("data-url")):p=document.createElement("span"),p.textContent=P),p}}),Prism.hooks.add("complete",u)})();(function(){if(!(typeof Prism>"u")){var m=/\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&!$'()*,;@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/,r=/\b\S+@[\w.]+[a-z]{2}/,e=/\[([^\]]+)\]\(([^)]+)\)/,l=["comment","url","attr-value","string"];Prism.plugins.autolinker={processGrammar:function(d){!d||d["url-link"]||(Prism.languages.DFS(d,function(u,n,i){l.indexOf(i)>-1&&!Array.isArray(n)&&(n.pattern||(n=this[u]={pattern:n}),n.inside=n.inside||{},i=="comment"&&(n.inside["md-link"]=e),i=="attr-value"?Prism.languages.insertBefore("inside","punctuation",{"url-link":m},n):n.inside["url-link"]=m,n.inside["email-link"]=r)}),d["url-link"]=m,d["email-link"]=r)}},Prism.hooks.add("before-highlight",function(d){Prism.plugins.autolinker.processGrammar(d.grammar)}),Prism.hooks.add("wrap",function(d){if(/-link$/.test(d.type)){d.tag="a";var u=d.content;if(d.type=="email-link"&&u.indexOf("mailto:")!=0)u="mailto:"+u;else if(d.type=="md-link"){var n=d.content.match(e);u=n[2],d.content=n[1]}d.attributes.href=u;try{d.content=decodeURIComponent(d.content)}catch{}}})}})();var nt={},lt;function Mn(){return lt||(lt=1,function(){if(typeof Prism>"u"||typeof document>"u")return;var m="line-numbers",r=/\n(?!$)/g,e=Prism.plugins.lineNumbers={getLine:function(n,i){if(!(n.tagName!=="PRE"||!n.classList.contains(m))){var p=n.querySelector(".line-numbers-rows");if(p){var k=parseInt(n.getAttribute("data-start"),10)||1,P=k+(p.children.length-1);i<k&&(i=k),i>P&&(i=P);var x=i-k;return p.children[x]}}},resize:function(n){l([n])},assumeViewportIndependence:!0};function l(n){if(n=n.filter(function(p){var k=d(p),P=k["white-space"];return P==="pre-wrap"||P==="pre-line"}),n.length!=0){var i=n.map(function(p){var k=p.querySelector("code"),P=p.querySelector(".line-numbers-rows");if(!(!k||!P)){var x=p.querySelector(".line-numbers-sizer"),h=k.textContent.split(r);x||(x=document.createElement("span"),x.className="line-numbers-sizer",k.appendChild(x)),x.innerHTML="0",x.style.display="block";var w=x.getBoundingClientRect().height;return x.innerHTML="",{element:p,lines:h,lineHeights:[],oneLinerHeight:w,sizer:x}}}).filter(Boolean);i.forEach(function(p){var k=p.sizer,P=p.lines,x=p.lineHeights,h=p.oneLinerHeight;x[P.length-1]=void 0,P.forEach(function(w,I){if(w&&w.length>1){var E=k.appendChild(document.createElement("span"));E.style.display="block",E.textContent=w}else x[I]=h})}),i.forEach(function(p){for(var k=p.sizer,P=p.lineHeights,x=0,h=0;h<P.length;h++)P[h]===void 0&&(P[h]=k.children[x++].getBoundingClientRect().height)}),i.forEach(function(p){var k=p.sizer,P=p.element.querySelector(".line-numbers-rows");k.style.display="none",k.innerHTML="",p.lineHeights.forEach(function(x,h){P.children[h].style.height=x+"px"})})}}function d(n){return n?window.getComputedStyle?getComputedStyle(n):n.currentStyle||null:null}var u=void 0;window.addEventListener("resize",function(){e.assumeViewportIndependence&&u===window.innerWidth||(u=window.innerWidth,l(Array.prototype.slice.call(document.querySelectorAll("pre."+m))))}),Prism.hooks.add("complete",function(n){if(n.code){var i=n.element,p=i.parentNode;if(!(!p||!/pre/i.test(p.nodeName))&&!i.querySelector(".line-numbers-rows")&&Prism.util.isActive(i,m)){i.classList.remove(m),p.classList.add(m);var k=n.code.match(r),P=k?k.length+1:1,x,h=new Array(P+1).join("<span></span>");x=document.createElement("span"),x.setAttribute("aria-hidden","true"),x.className="line-numbers-rows",x.innerHTML=h,p.hasAttribute("data-start")&&(p.style.counterReset="linenumber "+(parseInt(p.getAttribute("data-start"),10)-1)),n.element.appendChild(x),l([p]),Prism.hooks.run("line-numbers",n)}}}),Prism.hooks.add("line-numbers",function(n){n.plugins=n.plugins||{},n.plugins.lineNumbers=!0})}()),nt}Mn();(function(){if(typeof Prism>"u"||typeof document>"u")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function m(u,n){u.addEventListener("click",function(){e(n)})}function r(u){var n=document.createElement("textarea");n.value=u.getText(),n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{var i=document.execCommand("copy");setTimeout(function(){i?u.success():u.error()},1)}catch(p){setTimeout(function(){u.error(p)},1)}document.body.removeChild(n)}function e(u){navigator.clipboard?navigator.clipboard.writeText(u.getText()).then(u.success,function(){r(u)}):r(u)}function l(u){window.getSelection().selectAllChildren(u)}function d(u){var n={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},i="data-prismjs-";for(var p in n){for(var k=i+p,P=u;P&&!P.hasAttribute(k);)P=P.parentElement;P&&(n[p]=P.getAttribute(k))}return n}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(u){var n=u.element,i=d(n),p=document.createElement("button");p.className="copy-to-clipboard-button",p.setAttribute("type","button");var k=document.createElement("span");return p.appendChild(k),x("copy"),m(p,{getText:function(){return n.textContent},success:function(){x("copy-success"),P()},error:function(){x("copy-error"),setTimeout(function(){l(n)},1),P()}}),p;function P(){setTimeout(function(){x("copy")},i["copy-timeout"])}function x(h){k.textContent=i[h],p.setAttribute("data-copy-state",h)}})})();(function(){typeof Prism>"u"||Prism.hooks.add("wrap",function(m){m.type==="keyword"&&m.classes.push("keyword-"+m.content)})})();var De={exports:{}},it;function Rn(){return it||(it=1,function(m){(function(){if(typeof Prism>"u")return;var r=Object.assign||function(n,i){for(var p in i)i.hasOwnProperty(p)&&(n[p]=i[p]);return n};function e(n){this.defaults=r({},n)}function l(n){return n.replace(/-(\w)/g,function(i,p){return p.toUpperCase()})}function d(n){for(var i=0,p=0;p<n.length;++p)n.charCodeAt(p)==9&&(i+=3);return n.length+i}var u={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};e.prototype={setDefaults:function(n){this.defaults=r(this.defaults,n)},normalize:function(n,i){i=r(this.defaults,i);for(var p in i){var k=l(p);p!=="normalize"&&k!=="setDefaults"&&i[p]&&this[k]&&(n=this[k].call(this,n,i[p]))}return n},leftTrim:function(n){return n.replace(/^\s+/,"")},rightTrim:function(n){return n.replace(/\s+$/,"")},tabsToSpaces:function(n,i){return i=i|0||4,n.replace(/\t/g,new Array(++i).join(" "))},spacesToTabs:function(n,i){return i=i|0||4,n.replace(RegExp(" {"+i+"}","g"),"	")},removeTrailing:function(n){return n.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(n){return n.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(n){var i=n.match(/^[^\S\n\r]*(?=\S)/gm);return!i||!i[0].length||(i.sort(function(p,k){return p.length-k.length}),!i[0].length)?n:n.replace(RegExp("^"+i[0],"gm"),"")},indent:function(n,i){return n.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++i).join("	")+"$&")},breakLines:function(n,i){i=i===!0?80:i|0||80;for(var p=n.split(`
`),k=0;k<p.length;++k)if(!(d(p[k])<=i)){for(var P=p[k].split(/(\s+)/g),x=0,h=0;h<P.length;++h){var w=d(P[h]);x+=w,x>i&&(P[h]=`
`+P[h],x=w)}p[k]=P.join("")}return p.join(`
`)}},m.exports&&(m.exports=e),Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(n){var i=Prism.plugins.NormalizeWhitespace;if(!(n.settings&&n.settings["whitespace-normalization"]===!1)&&Prism.util.isActive(n.element,"whitespace-normalization",!0)){if((!n.element||!n.element.parentNode)&&n.code){n.code=i.normalize(n.code,n.settings);return}var p=n.element.parentNode;if(!(!n.code||!p||p.nodeName.toLowerCase()!=="pre")){n.settings==null&&(n.settings={});for(var k in u)if(Object.hasOwnProperty.call(u,k)){var P=u[k];if(p.hasAttribute("data-"+k))try{var x=JSON.parse(p.getAttribute("data-"+k)||"true");typeof x===P&&(n.settings[k]=x)}catch{}}for(var h=p.childNodes,w="",I="",E=!1,A=0;A<h.length;++A){var $=h[A];$==n.element?E=!0:$.nodeName==="#text"&&(E?I+=$.nodeValue:w+=$.nodeValue,p.removeChild($),--A)}if(!n.element.children.length||!Prism.plugins.KeepMarkup)n.code=w+n.code+I,n.code=i.normalize(n.code,n.settings);else{var f=w+n.element.innerHTML+I;n.element.innerHTML=i.normalize(f,n.settings),n.code=n.element.textContent}}}})})()}(De)),De.exports}Rn();const On={key:1,class:"line-numbers","data-lenis-prevent":""},pe=K({__name:"code",props:{inline:Boolean,lang:String},setup(m){return Re(()=>{Je.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0,"break-lines":100}),Je.highlightAll()}),(r,e)=>m.inline?(_(),F("code",{key:0,class:J(`lang-${m.lang} match-braces`)},[q(r.$slots,"default")],2)):(_(),F("pre",On,[e[2]||(e[2]=t("      ")),o("code",{class:J(`lang-${m.lang} match-braces`)},[e[0]||(e[0]=t(`
        `)),q(r.$slots,"default"),e[1]||(e[1]=t(`
    `))],2),e[3]||(e[3]=t(`
  `))]))}}),Nn={class:"flex items-center"},qn={class:"w-full"},le=K({__name:"docNotice",props:{type:String},setup(m){const r=m,e=R(()=>r.type=="warning"?"i-lucide-triangle-alert":r.type=="danger"?"i-lucide-octagon-alert":r.type=="tip"?"i-lucide-lightbulb":r.type=="success"?"i-lucide-check-check":"i-lucide-info"),l=R(()=>r.type=="warning"?"#f0b100":r.type=="danger"?"#fb2c36":r.type=="tip"?"#d2afff":r.type=="success"?"hsl(130, 51%, 65%)":"#a7ccff"),d=R(()=>r.type=="tip"?"secondary":r.type);return(u,n)=>{const i=ue,p=Se,k=me;return _(),V(k,{class:"m-2",color:d.value},{default:s(()=>[o("div",Nn,[a(i,{name:e.value,class:"!size-5 min-w-5",style:he(`color: ${l.value};`)},null,8,["name","style"]),n[0]||(n[0]=t()),a(p,{orientation:"vertical",class:"h-7 mx-3",ui:{border:"dark:border-gray-600 h-full"}}),n[1]||(n[1]=t()),o("div",qn,[q(u.$slots,"default")])])]),_:3},8,["color"])}}}),Un={class:"flex flex-col mt-22 mb-16 items-center"},Kn={class:"flex items-center Varela text-3xl"},Wn={class:"flex gap-1"},jn={class:"flex gap-1"},Hn=K({__name:"buildingTheApp",setup(m){return(r,e)=>{const l=ue,d=pe,u=me;return _(),F("div",null,[o("div",Un,[o("div",Kn,[a(l,{name:"i-lucide-drill",class:"mr-2"}),e[0]||(e[0]=t(` Building the app
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},"Steps to produce the published release",-1))]),e[23]||(e[23]=t()),a(u,{class:"w-full m-2"},{default:s(()=>[e[19]||(e[19]=t(`
      To build the app:
      `)),o("ol",null,[o("li",null,[e[5]||(e[5]=t(`
          Open
          `)),a(Q,{url:"https://visualstudio.microsoft.com/#vs-section",target:"_blank"},{default:s(()=>e[3]||(e[3]=[t(`
            Visual Studio
          `)])),_:1,__:[3]}),e[6]||(e[6]=t(`
           & clone
          `)),a(Q,{url:"https://github.com/faeq-f/quokka/",target:"_blank"},{default:s(()=>e[4]||(e[4]=[t(`
            Quokka
          `)])),_:1,__:[4]})]),e[14]||(e[14]=t()),e[15]||(e[15]=o("li",null,`
          Build the solution
        `,-1)),e[16]||(e[16]=t()),o("li",null,[o("span",Wn,[e[8]||(e[8]=t(`
            Copy the Quokka folder (in the build path - normally
            `)),a(d,{inline:""},{default:s(()=>e[7]||(e[7]=[t(" bin ")])),_:1,__:[7]}),e[9]||(e[9]=t(`
            ) to your desired location (for e.g., to a USB drive)
          `))])]),e[17]||(e[17]=t()),o("li",null,[o("span",jn,[e[11]||(e[11]=t(`
            (Download / Delete) any plugins you (do / do not) wish to use (in
            the
            `)),a(d,{inline:""},{default:s(()=>e[10]||(e[10]=[t(" PlugBoard ")])),_:1,__:[10]}),e[12]||(e[12]=t(`)
          `))]),e[13]||(e[13]=t(`
          (Some of the recognized Plugins may be included with the build)
        `))])]),e[20]||(e[20]=t()),e[21]||(e[21]=o("br",null,null,-1)),e[22]||(e[22]=t()),a(le,{type:"warning",style:{width:"calc(100% - 1rem)"}},{default:s(()=>e[18]||(e[18]=[t(`
        The app comes as portable by design - there are no separate build
        instructions for a non-portable version.
      `)])),_:1,__:[18]})]),_:1,__:[19,20,21,22]})])}}}),Qn={key:0,class:"m-table-header"},Gn={key:0,class:"m-table-spacer"},Yn={class:"m-table-header-title"},Xn={key:1,class:"m-table-header-search"},Zn={key:0},Jn={key:1},el={key:0,class:"m-table-sort-icon-wrapper"},tl={class:"maz-text-center maz-text-muted"},nl={key:1,class:"m-table-footer"},ll={key:0,class:"m-table-footer-pagination"},il={class:"m-table-footer-pagination-items-per-page"},rl={class:"maz-hidden maz-text-sm tab-s:maz-block"},al={key:0,class:"maz-whitespace-nowrap maz-text-sm"},sl={class:"m-table-footer-pagination-buttons"},ol="maz-table",ul=K({__name:"MazTable",props:{tableClass:{default:void 0},tableStyle:{type:[Boolean,null,String,Object,Array],default:void 0},modelValue:{default:void 0},size:{default:"md"},inputSize:{},title:{default:void 0},headers:{default:void 0},sortable:{type:Boolean},headersAlign:{default:"left"},rows:{default:void 0},hoverable:{type:Boolean},search:{type:Boolean},noSearchInRow:{type:Boolean},searchPlaceholder:{default:"Search"},noSearchBy:{type:Boolean},searchByPlaceholder:{default:"Search by"},searchByAllLabel:{default:"All"},searchQuery:{default:void 0},backgroundOdd:{type:Boolean},backgroundEven:{type:Boolean},elevation:{type:Boolean},divider:{type:Boolean},caption:{default:void 0},captionSide:{default:"bottom"},pagination:{type:Boolean},page:{default:1},pageSize:{default:20},totalPages:{default:void 0},paginationAllLabel:{default:"All"},noPaginateRows:{type:Boolean},totalItems:{default:void 0},loading:{type:Boolean},selectable:{type:Boolean},selectedKey:{default:void 0},tableLayout:{default:void 0},color:{default:"primary"},translations:{},roundedSize:{default:"lg"},scrollable:{type:Boolean,default:!1}},emits:["update:model-value","update:search-query","update:page","update:page-size"],setup(m,{emit:r}){Nt(y=>({"08a80db6":y.tableLayout,df8ff50a:y.captionSide}));const e=m,l=r,d=re(()=>ae(()=>import("./Brp0mZq4.js"),__vite__mapDeps([0,1,2]),import.meta.url)),u=re(()=>ae(()=>import("./C1MAMRzb.js"),__vite__mapDeps([3,1,2]),import.meta.url)),n=re(()=>ae(()=>import("./B1dRcyM0.js"),__vite__mapDeps([4,1,2]),import.meta.url)),i=re(()=>ae(()=>import("./ceCF_a_I.js"),__vite__mapDeps([5,1,2]),import.meta.url)),p=re(()=>ae(()=>import("./e_Bd090k.js"),__vite__mapDeps([6,1,2,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url)),k=re(()=>ae(()=>import("./CB6On7QK.js"),__vite__mapDeps([18,19,1,2,20,7,8,9,10,11,12,13,14,15,16,21]),import.meta.url)),P=re(()=>ae(()=>import("./DPr9kBM7.js"),__vite__mapDeps([22,1,2,19,7,8,9,10,11,12,13,14,15,16,23]),import.meta.url)),x=re(()=>ae(()=>import("./dnW2lCGf.js"),__vite__mapDeps([24,1,2,7,8,9,10,11,12,13,14,15,16,25]),import.meta.url)),h=re(()=>ae(()=>import("./CO7JcISs.js"),__vite__mapDeps([26,1,2,19,22,7,8,9,10,11,12,13,14,15,16,23,27]),import.meta.url)),w=re(()=>ae(()=>import("./BZll_PD5.js"),__vite__mapDeps([28,29,1,2,7,8,9,10,11,12,13,14,15,16,30]),import.meta.url)),I=re(()=>ae(()=>import("./UGXXA3j3.js"),__vite__mapDeps([31,29,1,2,7,8,9,10,11,12,13,14,15,16,32]),import.meta.url)),E=re(()=>ae(()=>import("./PCov-VCz.js"),__vite__mapDeps([33,29,1,2,7,8,9,10,11,12,13,14,15,16,34]),import.meta.url)),A={noResults:"No results",actionHeader:"Actions",searchByAllLabel:"All",searchByPlaceholder:"Search by",searchPlaceholder:"Search",paginationAllLabel:"All",paginationRowsPerPage:"Rows per page",paginationOf:"of"},$=R(()=>{const{translations:y,searchByAllLabel:O,searchByPlaceholder:D,searchPlaceholder:ne,paginationAllLabel:ie}=e;return{...A,...y,searchByAllLabel:O,searchByPlaceholder:D,searchPlaceholder:ne,paginationAllLabel:ie}}),f=R(()=>e.divider&&!e.backgroundEven&&!e.backgroundOdd),{size:g,hoverable:v,backgroundEven:C,backgroundOdd:T}=Ie(e);qt(ol,{size:g,hoverable:v,backgroundEven:C,backgroundOdd:T});const L=Y(Ue()),B=R(()=>e.selectable||!!e.selectedKey),b=Y(e.page);we(()=>e.page,y=>{b.value=y});const z=R({get:()=>b.value,set:y=>{b.value=y,l("update:page",y)}}),S=R(()=>[{label:$.value.paginationAllLabel,value:Number.POSITIVE_INFINITY},{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:50,value:50},{label:100,value:100},{label:200,value:200}]),M=Y(e.pageSize);we(()=>e.pageSize,y=>{M.value=y});const W=R({get:()=>M.value,set:y=>{M.value=y,l("update:page-size",y)}}),G=R(()=>{var y;return e.totalPages??(W.value===Number.POSITIVE_INFINITY||!((y=e.rows)!=null&&y.length))?1:Math.ceil(e.rows.length/W.value)});function oe(){z.value=1}function se(){z.value=G.value}function de(){z.value=z.value-1}function H(){z.value=z.value+1}const j=R(()=>{if(!e.pagination||e.noPaginateRows||W.value===Number.POSITIVE_INFINITY)return L.value;const y=(b.value-1)*W.value,O=y+W.value;return L.value.slice(y,O)});we(()=>[e.rows,e.modelValue],()=>{L.value=Ue()});const X=Y(),te=Y(),Z=Y(Ee()),_e=Y(),ge=R(()=>[{label:e.searchByAllLabel,value:null},...Z.value.map(y=>({label:y.label,value:y.key}))]),ve=Y(e.searchQuery);we(()=>e.searchQuery,y=>{ve.value=y});const be=R({get:()=>ve.value,set:y=>{ve.value=y,l("update:search-query",y)}});function Ce(y){return[...y].sort((O,D)=>{if(X.value===void 0||te.value===void 0)return 0;const ne=O[Z.value[X.value].key],ie=D[Z.value[X.value].key];return typeof ne=="string"&&typeof ie=="string"?te.value==="ASC"?ne.localeCompare(ie):ie.localeCompare(ne):te.value==="ASC"?ne-ie:ie-ne})}function Te(y){if(e.noSearchInRow||typeof be.value!="string")return j.value;const O=be.value.toLowerCase();return[...y].filter(D=>_e.value?String(D[_e.value]).toLowerCase().includes(O):Object.values(D).some(ne=>typeof ne=="string"||typeof ne=="number"||typeof ne=="boolean"?String(ne).toLowerCase().includes(O):!1))}const ce=R(()=>{const y=Te(j.value);return Ce(y)}),Ae=st(),ke=R(()=>e.search||!!e.title||!!Ae.title),Le=R(()=>e.pagination);function Ee(){var y;return((y=e.headers)==null?void 0:y.map(O=>typeof O=="string"?{label:O,align:e.headersAlign}:{align:e.headersAlign,thHeaders:O.headers,...O}))??[]}function Ue(){var y;return((y=e.rows)==null?void 0:y.map(O=>{var D;return{selected:(D=e.modelValue)==null?void 0:D.includes(e.selectedKey?O[e.selectedKey]:O),...O}}))??[]}function kt(y){if(y===X.value){const O=te.value==="DESC"?"ASC":void 0;te.value=te.value===void 0?"DESC":O}else te.value="DESC";X.value=te.value===void 0?void 0:y}const Ke=R({get:()=>ce.value.every(y=>y.selected)??!1,set:xt});function xt(y){for(const O of ce.value)O.selected=y;Be()}function St(y,O){ce.value[O].selected=y,Be()}function Be(y){y=y??We();const O=y!=null&&y.length?y:void 0;l("update:model-value",O)}function We(){return ce.value.filter(y=>y.selected).map(y=>e.selectedKey?y[e.selectedKey]:y)}return Ut(()=>{const y=We();y!=null&&y.length&&Be(y)}),(y,O)=>(_(),F("div",{class:J(["m-table m-reset-css",{"--has-header":ke.value}])},[ke.value?(_(),F("div",Qn,[y.title||y.$slots.title?(_(),F("div",Gn,[q(y.$slots,"title",{},()=>[o("span",Yn,N(y.title),1)],!0)])):U("v-if",!0),y.search?(_(),F("div",Xn,[y.noSearchBy?U("v-if",!0):(_(),V(c(h),{key:0,modelValue:_e.value,"onUpdate:modelValue":O[0]||(O[0]=D=>_e.value=D),"rounded-size":y.roundedSize,color:y.color,style:{width:"8rem"},placeholder:$.value.searchByPlaceholder,size:y.inputSize??c(g),options:ge.value},null,8,["modelValue","rounded-size","color","placeholder","size","options"])),a(c(P),{modelValue:be.value,"onUpdate:modelValue":O[1]||(O[1]=D=>be.value=D),size:y.inputSize??c(g),"rounded-size":y.roundedSize,color:y.color,debounce:300,placeholder:$.value.searchPlaceholder,"left-icon":c(i)},null,8,["modelValue","size","rounded-size","color","placeholder","left-icon"])])):U("v-if",!0)])):U("v-if",!0),o("div",{class:J(["m-table-wrapper",[`--rounded-${y.roundedSize}`,{"--scrollable":y.scrollable}]])},[o("table",{class:J([{"--elevation":y.elevation,"--has-layout":y.tableLayout},y.tableClass]),style:he(y.tableStyle)},[y.caption||y.$slots.caption?(_(),F("caption",Zn,[q(y.$slots,"caption",{},()=>[t(N(y.caption),1)],!0)])):U("v-if",!0),Z.value?(_(),F("thead",Jn,[q(y.$slots,"thead",{},()=>[a(c(I),{"no-hoverable":""},{default:s(()=>[B.value?(_(),V(c(E),{key:0,align:"left",class:J([`--${c(g)}`,"m-table-select-column"])},{default:s(()=>[a(c(k),{modelValue:Ke.value,"onUpdate:modelValue":O[2]||(O[2]=D=>Ke.value=D),size:"sm"},null,8,["modelValue"])]),_:1},8,["class"])):U("v-if",!0),(_(!0),F(ee,null,fe(Z.value,(D,ne)=>(_(),V(c(E),{key:ne,scope:D.scope,align:D.align,rowspan:D.rowspan,colspan:D.colspan,headers:D.thHeaders,style:he({width:D.width,textAlign:D.align}),class:J(["maz-group",[{"--hidden":D.hidden,"--sortable":D.sortable??y.sortable},D.classes,`--${c(g)}`]]),onClick:ie=>(D.sortable??y.sortable)&&kt(ne)},{default:s(()=>[o("span",{class:J({"maz-sr-only":D.srOnly})},[q(y.$slots,"header",{header:D,label:D.label},()=>[q(y.$slots,`header-label-${D.key}`,{header:D,label:D.label},()=>[t(N(D.label),1)],!0),D.sortable??y.sortable?(_(),F("div",el,[a(c(d),{class:J(["m-table-sort-icon maz-hidden group-hover:maz-block",{"--sorted":ne===X.value,"--up":te.value==="DESC","--down":te.value==="ASC"}])},null,8,["class"])])):U("v-if",!0)],!0)],2)]),_:2},1032,["scope","align","rowspan","colspan","headers","style","class","onClick"]))),128)),y.$slots.actions?(_(),V(c(E),{key:1,align:"left",class:J(`--${c(g)}`)},{default:s(()=>[q(y.$slots,"actions-header",{},()=>[t(N($.value.actionHeader),1)],!0)]),_:3},8,["class"])):U("v-if",!0)]),_:3})],!0)])):U("v-if",!0),y.loading?(_(),V(c(x),{key:2,color:y.color,class:"!maz-absolute"},null,8,["color"])):U("v-if",!0),o("tbody",{class:J({"--divider":f.value})},[q(y.$slots,"default",{},()=>[ce.value.length>0?(_(!0),F(ee,{key:0},fe(ce.value,(D,ne)=>(_(),V(c(I),{key:ne,class:J(D.classes),onClick:ie=>D.action&&D.action(D)},{default:s(()=>[B.value?(_(),V(c(w),{key:0,class:"m-table-select-column"},{default:s(()=>[q(y.$slots,"select",{row:D,selected:D.selected},()=>[a(c(k),{size:"sm","model-value":D.selected,"onUpdate:modelValue":ie=>St(ie,ne)},null,8,["model-value","onUpdate:modelValue"])],!0)]),_:2},1024)):U("v-if",!0),(_(!0),F(ee,null,fe(Z.value,({key:ie,align:_t,classes:Ct},Pt)=>(_(),V(c(w),{key:Pt,align:_t,class:J(Ct)},{default:s(()=>[ie?q(y.$slots,"cell",{key:0,row:D,value:D[ie]},()=>[q(y.$slots,`cell-${ie}`,{row:D,value:D[ie]},()=>[t(N(D[ie]),1)],!0)],!0):U("v-if",!0)]),_:2},1032,["align","class"]))),128)),y.$slots.actions?(_(),V(c(w),{key:1},{default:s(()=>[q(y.$slots,"actions",{row:D},void 0,!0)]),_:2},1024)):U("v-if",!0)]),_:2},1032,["class","onClick"]))),128)):(_(),V(c(I),{key:1},{default:s(()=>[a(c(w),{colspan:Z.value.length+(B.value?1:0)+(y.$slots.actions?1:0)},{default:s(()=>[q(y.$slots,"no-results",{},()=>[o("p",tl,[q(y.$slots,"no-results-text",{},()=>[t(N($.value.noResults),1)],!0)])],!0)]),_:3},8,["colspan"])]),_:3}))],!0)],2)],6)],2),Le.value?(_(),F("div",nl,[O[4]||(O[4]=o("div",{class:"m-table-spacer"},null,-1)),y.pagination?(_(),F("div",ll,[o("div",il,[o("span",rl,N($.value.paginationRowsPerPage),1),a(c(h),{modelValue:W.value,"onUpdate:modelValue":O[3]||(O[3]=D=>W.value=D),options:S.value,"rounded-size":y.roundedSize,size:y.inputSize??c(g),color:y.color,"list-position":"top",style:{width:"5rem"}},null,8,["modelValue","options","rounded-size","size","color"])]),G.value?(_(),F("span",al,N(z.value)+" - "+N(ce.value.length)+" "+N($.value.paginationOf)+" "+N(G.value),1)):U("v-if",!0),o("div",sl,[a(c(p),{disabled:z.value===1,size:y.inputSize??c(g),color:"transparent","rounded-size":y.roundedSize,"no-elevation":"",onClick:oe},{default:s(()=>[a(c(u),{class:"maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),a(c(p),{disabled:z.value===1,size:y.inputSize??c(g),color:"transparent","rounded-size":y.roundedSize,"no-elevation":"",onClick:de},{default:s(()=>[a(c(n),{class:"maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),a(c(p),{disabled:z.value===G.value,size:y.inputSize??c(g),color:"transparent","rounded-size":y.roundedSize,"no-elevation":"",onClick:H},{default:s(()=>[a(c(n),{class:"maz-rotate-180 maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),a(c(p),{disabled:z.value===G.value,size:y.inputSize??c(g),color:"transparent","rounded-size":y.roundedSize,"no-elevation":"",onClick:se},{default:s(()=>[a(c(u),{class:"maz-rotate-180 maz-text-base"})]),_:1},8,["disabled","size","rounded-size"])])])):U("v-if",!0)])):U("v-if",!0)],2))}}),dl=(m,r)=>{const e=m.__vccOpts||m;for(const[l,d]of r)e[l]=d;return e},$e=dl(ul,[["__scopeId","data-v-fc9c2ba6"]]),pl={class:"flex flex-col mt-22 mb-16 items-center"},ml={class:"flex items-center Varela text-3xl"},fl=K({__name:"commands",setup(m){const r=ut(),e=r.pluginsList.map(d=>d.specialCommands.map(u=>({...u,plugin:d.name}))).flat(),l=r.pluginsList.map(d=>d.commandSignifiers.map(u=>({...u,plugin:d.name}))).flat();return(d,u)=>{const n=ue,i=Se,p=pe,k=$e,P=Ne;return _(),F("div",null,[o("div",pl,[o("div",ml,[a(n,{name:"i-lucide-zap",class:"mr-2"}),u[0]||(u[0]=t(` Commands
      `))]),u[1]||(u[1]=t()),u[2]||(u[2]=o("div",{class:"text-md outfit"},"Special commands & command signifiers",-1))]),u[17]||(u[17]=t()),a(le,{type:"tip",style:{width:"100%"}},{default:s(()=>[u[4]||(u[4]=t(`
      Please check the
      `)),a(Q,{url:"/documentation?section=api-documentation"},{default:s(()=>u[3]||(u[3]=[t(`
        API Documentation
      `)])),_:1,__:[3]}),u[5]||(u[5]=t(`
       for further details on the content covered on this page
    `))]),_:1,__:[4,5]}),u[18]||(u[18]=t()),a(le,{type:"warning",style:{width:"100%"},class:"outfit"},{default:s(()=>u[6]||(u[6]=[o("span",{class:"font-bold"},"Special commands are case-sensitive",-1),t(` to
      ensure they do not
      interfere with other functions of the app or plugins
    `)])),_:1,__:[6]}),u[19]||(u[19]=t()),a(P,{class:"w-full m-2",contentClass:"!p-0"},{"title-1":s(()=>u[7]||(u[7]=[t(`
        All special commands from recognized plugins
      `)])),"content-1":s(()=>[a(i,{ui:{border:"dark:border-gray-600"}}),u[10]||(u[10]=t()),a(k,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",noSearchBy:"",searchPlaceholder:"Search...",inputSize:"sm",headers:[{label:"Plugin",key:"plugin",width:"12rem"},{label:"Default Special Command",key:"command",width:"10rem"},{label:"Use",key:"use",width:"18rem"},{label:"Notes",key:"notes"}],rows:c(e)},{"cell-notes":s(({value:x})=>[o("ul",null,[(_(!0),F(ee,null,fe(x,(h,w)=>(_(),F("li",{key:w},N(h),1))),128))])]),"cell-plugin":s(({value:x})=>[a(Q,{url:"/plugin/"+x.replace(" ","~")},{default:s(()=>[t(N(x),1)]),_:2},1032,["url"])]),"cell-command":s(({value:x})=>[a(p,{inline:""},{default:s(()=>[t(" "+N(x)+" ",1)]),_:2},1024)]),_:1,__:[8,9]},8,["rows"])]),"title-2":s(()=>u[11]||(u[11]=[t(`
        All command signifiers from recognized plugins
      `)])),"content-2":s(()=>[a(k,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",noSearchBy:"",searchPlaceholder:"Search...",inputSize:"sm",headers:[{label:"Plugin",key:"plugin",width:"12rem"},{label:"Default Command Signifier",key:"signifier",width:"12rem"},{label:"Use",key:"use",width:"16rem"},{label:"Notes",key:"notes"}],rows:c(l)},{"cell-notes":s(({value:x})=>[o("ul",null,[(_(!0),F(ee,null,fe(x,(h,w)=>(_(),F("li",{key:w},N(h),1))),128))])]),"cell-plugin":s(({value:x})=>[a(Q,{url:"/plugin/"+x.replace(" ","~")},{default:s(()=>[t(N(x),1)]),_:2},1032,["url"])]),"cell-signifier":s(({value:x})=>[a(p,{inline:""},{default:s(()=>[t(" "+N(x)+" ",1)]),_:2},1024)]),_:1,__:[12,13]},8,["rows"])]),_:1,__:[14,15,16]})])}}}),gl=["id","disabled","onClick"],cl={class:"m-stepper__header__wrapper"},vl={class:"m-stepper__count --primary"},bl={class:"m-stepper__count__circle"},yl={class:"m-stepper__header__content"},hl={class:"m-stepper__title"},wl={key:0,class:"m-stepper__subtitle"},kl={key:0,class:"m-stepper__right"},xl={class:"m-stepper__content__wrapper"},Sl=K({__name:"MazStepper",props:{modelValue:{default:void 0},steps:{default:void 0},color:{default:"primary"},disabledNextSteps:{type:Boolean},disabledPreviousSteps:{type:Boolean},autoValidateSteps:{type:Boolean},allStepsOpened:{type:Boolean},allStepsValidated:{type:Boolean},canCloseSteps:{type:Boolean}},emits:["update:model-value"],setup(m,{emit:r}){const e=m,l=r,d=re(()=>ae(()=>import("./gJI32LSs.js"),__vite__mapDeps([35,1,2]),import.meta.url)),u=re(()=>ae(()=>import("./B47fr0Pc.js"),__vite__mapDeps([36,1,2,7,8,9,10,11,12,13,14,15,16,37]),import.meta.url)),n=re(()=>ae(()=>import("./CzosCfRh.js"),__vite__mapDeps([38,1,2]),import.meta.url)),i=re(()=>ae(()=>import("./DbhVxPuh.js"),__vite__mapDeps([39,1,2]),import.meta.url)),p=re(()=>ae(()=>import("./Cm8gVAmu.js"),__vite__mapDeps([40,1,2]),import.meta.url)),k=R(()=>`var(--maz-color-${e.color})`),P=R(()=>`var(--maz-color-${e.color}-contrast)`),x=st(),h=R(()=>Object.keys(x).filter(b=>b.startsWith("content-")).length),w=Y(1),I=R({get:()=>e.modelValue??w.value,set:b=>{w.value=b,l("update:model-value",b)}});function E(b){return v(b)?{icon:n,class:"--success"}:L(b)?{icon:p,class:"--warning"}:T(b)?{icon:i,class:"--error"}:{class:"--normal"}}function A(b){var z,S;return(S=(z=e.steps)==null?void 0:z[b-1])==null?void 0:S.icon}function $(b,z){var S,M;return(M=(S=e.steps)==null?void 0:S[z-1])==null?void 0:M[b]}function f(b){I.value===b&&e.canCloseSteps?I.value=0:b<1?I.value=1:b>h.value?I.value=h.value:I.value=b}function g(b,z){var S,M;const W=b==="titleInfo"?"title-info":b,G=Object.keys(x).filter(se=>se.startsWith(`${W}-`)).includes(`${W}-${z}`),oe=!!((M=(S=e.steps)==null?void 0:S[z-1])!=null&&M[b]);return G||oe}function v(b){var z,S;const M=(S=(z=e.steps)==null?void 0:z[b-1])==null?void 0:S.success,W=T(b)||L(b),G=e.autoValidateSteps&&b<I.value&&!W;return M??(G||e.allStepsValidated)}function C(b){var z,S;const M=(S=(z=e.steps)==null?void 0:z[b-1])==null?void 0:S.disabled,W=I.value===b&&!e.canCloseSteps,G=e.disabledNextSteps&&b>I.value,oe=e.disabledPreviousSteps&&b<I.value;return M??(W||G||oe||e.allStepsOpened)}function T(b){var z,S;return(S=(z=e.steps)==null?void 0:z[b-1])==null?void 0:S.error}function L(b){var z,S;return(S=(z=e.steps)==null?void 0:z[b-1])==null?void 0:S.warning}function B(b){return b===h.value}return(b,z)=>(_(),F("div",{class:"m-stepper m-reset-css",style:he([{"--round-step-bg-color":k.value,"--round-step-text-color":P.value}])},[(_(!0),F(ee,null,fe(h.value,S=>(_(),F(ee,{key:S},[g("title",S)?(_(),F("button",{key:0,id:`header-step-${S}`,type:"button",disabled:C(S),class:J(["m-stepper__header",[{"--is-current-step":S===I.value||b.allStepsOpened,"--disabled":S!==I.value&&!b.allStepsOpened&&C(S)},`${E(S).class}`]]),onClick:M=>f(S)},[o("div",cl,[o("span",vl,[o("div",bl,[E(S).icon?(_(),V(Ve(E(S).icon),{key:0,class:"icon maz-text-xl"})):U("v-if",!0)]),q(b.$slots,`icon-${S}`,{},()=>[A(S)?(_(),F(ee,{key:0},[typeof A(S)=="string"?(_(),V(c(d),{key:0,name:A(S)},null,8,["name"])):A(S)?(_(),V(Ve(A(S)),{key:1})):U("v-if",!0)],64)):(_(),F(ee,{key:1},[t(N(S),1)],64))],!0)]),o("div",yl,[o("span",hl,[q(b.$slots,`title-${S}`,{},()=>[t(N($("title",S)),1)],!0)]),g("subtitle",S)?(_(),F("span",wl,[q(b.$slots,`subtitle-${S}`,{},()=>[t(N($("subtitle",S)),1)],!0)])):U("v-if",!0)])]),g("titleInfo",S)?(_(),F("span",kl,[q(b.$slots,`title-info-${S}`,{},()=>[t(N($("titleInfo",S)),1)],!0)])):U("v-if",!0)],10,gl)):U("v-if",!0),o("div",{class:J(["m-stepper__content",{"--no-border":B(S)}])},[a(c(u),{"model-value":b.allStepsOpened||I.value===S,"aria-labelledby":`header-step-${S}`},{default:s(()=>[o("div",xl,[q(b.$slots,`content-${S}`,{validated:v(S),error:T(S),warning:L(S),nextStep:()=>f(S+1),previousStep:()=>f(S-1)},void 0,!0)])]),_:2},1032,["model-value","aria-labelledby"])],2)],64))),128))],4))}}),_l=(m,r)=>{const e=m.__vccOpts||m;for(const[l,d]of r)e[l]=d;return e},Cl=_l(Sl,[["__scopeId","data-v-4b6c936d"]]),Pl={class:"flex gap-1"},Tl={class:"flex gap-1"},Al={class:"flex gap-1"},El={class:"flex gap-1"},$l={class:"flex items-center"},zl=K({__name:"creatingPlugin",setup(m){return(r,e)=>{const l=pe,d=me,u=ue,n=Se,i=Ne;return _(),F(ee,null,[a(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:s(()=>[o("span",Pl,[e[1]||(e[1]=t(`
      To create the plugin itself, create a class that inherits from
      `)),a(l,{inline:""},{default:s(()=>e[0]||(e[0]=[t(" Plugin ")])),_:1,__:[0]})]),e[21]||(e[21]=t(`
    (You do not need to implement all methods)
    `)),a(le,{type:"info",class:"m-2",style:{width:"calc(100% - 1rem)"}},{default:s(()=>[o("span",Tl,[a(l,{inline:""},{default:s(()=>e[2]||(e[2]=[t(" OnQueryChange ")])),_:1,__:[2]}),e[4]||(e[4]=t(` is the method that is called by
        the
        `)),a(l,{inline:""},{default:s(()=>e[3]||(e[3]=[t(" SearchWindow ")])),_:1,__:[3]}),e[5]||(e[5]=t(` when a user types in a query.
      `))]),e[9]||(e[9]=t(`
      In this method, you should create your list item objects, filter them
      (if needed), and return them in a list.
      `)),e[10]||(e[10]=o("br",null,null,-1)),e[11]||(e[11]=o("br",null,null,-1)),e[12]||(e[12]=t(`
      When returning items for a special command, you will need to sort the
      list yourself.
      `)),o("span",Al,[e[7]||(e[7]=t(`
        Normal results (those returned in
        `)),a(l,{inline:""},{default:s(()=>e[6]||(e[6]=[t(" OnQueryChange ")])),_:1,__:[6]}),e[8]||(e[8]=t(` ) do not need to be sorted as
        Quokka
        will sort them
      `))]),e[13]||(e[13]=t(`
      once it has results from all of the plugins the
      program is using during runtime.
    `))]),_:1,__:[9,10,11,12,13]}),e[22]||(e[22]=t()),a(le,{type:"tip",class:"m-2",style:{width:"calc(100% - 1rem)"}},{default:s(()=>[o("span",El,[e[19]||(e[19]=t(`See
        `)),a(Q,{url:"https://github.com/Faeq-F/Quokka/blob/main/Quokka/PluginArch/Plugin.cs",target:"_blank",class:"flex"},{default:s(()=>[e[15]||(e[15]=o("span",null,"the  ",-1)),e[16]||(e[16]=t()),a(l,{inline:"",class:"!border-0"},{default:s(()=>e[14]||(e[14]=[t("Plugin")])),_:1,__:[14]}),e[17]||(e[17]=t()),e[18]||(e[18]=o("span",null,"  class",-1))]),_:1,__:[15,16,17,18]}),e[20]||(e[20]=t(`
        for more information
      `))])]),_:1})]),_:1,__:[21,22]}),e[34]||(e[34]=t()),a(i,{class:"m-2",style:{width:"calc(100% - 0.5rem)","--maz-color-primary-alpha-20":"var(--maz-color-secondary-alpha-20)","--maz-color-primary-alpha":"var(--maz-color-secondary-alpha)"}},{"title-1":s(()=>[o("div",$l,[a(u,{name:"i-lucide-lightbulb",class:"!size-5 min-w-5",style:{color:"#d2afff"}}),e[26]||(e[26]=t()),a(n,{orientation:"vertical",class:"h-7 mx-3",ui:{border:"dark:border-gray-600 h-full"}}),e[27]||(e[27]=t()),o("div",null,[e[24]||(e[24]=t(`
          See an example from the
          `)),a(Q,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:s(()=>e[23]||(e[23]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[23]}),e[25]||(e[25]=t(`
           (a demo plugin not made for use)
        `))])])]),"content-1":s(()=>[a(l,{lang:"cs"},{default:s(()=>e[28]||(e[28]=[t(`
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
    `)])),_:1,__:[28]}),e[32]||(e[32]=t()),o("blockquote",null,[e[30]||(e[30]=t(`
        This is a part of the
        `)),a(Q,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:s(()=>e[29]||(e[29]=[t(`
          ShowTypedText plugin
        `)])),_:1,__:[29]}),e[31]||(e[31]=t(`
         (a demo plugin not made for use)
      `))])]),_:1,__:[33]})],64)}}}),Il={class:"flex gap-1"},Ll={class:"flex gap-1"},Bl=K({__name:"creatingProject",setup(m){return(r,e)=>{const l=pe,d=me;return _(),F(ee,null,[a(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:s(()=>[e[24]||(e[24]=t(`
    To start:
    `)),o("ol",null,[o("li",null,[e[2]||(e[2]=t(`
        Open
        `)),a(Q,{url:"https://visualstudio.microsoft.com/#vs-section",target:"_blank"},{default:s(()=>e[0]||(e[0]=[t(`
          Visual Studio
        `)])),_:1,__:[0]}),e[3]||(e[3]=t(`
         & clone
        `)),a(Q,{url:"https://github.com/faeq-f/quokka/",target:"_blank"},{default:s(()=>e[1]||(e[1]=[t(`
          Quokka
        `)])),_:1,__:[1]})]),e[21]||(e[21]=t()),o("li",null,[o("span",Il,[e[6]||(e[6]=t(`
          In the solution, create a project of type
          `)),a(l,{inline:""},{default:s(()=>e[4]||(e[4]=[t(" WPF class library ")])),_:1,__:[4]}),e[7]||(e[7]=t(`
          , naming it
          `)),a(l,{inline:""},{default:s(()=>e[5]||(e[5]=[t(" Plugin_YourPluginNameHere ")])),_:1,__:[5]})]),e[8]||(e[8]=t(`
        (make sure that it is a part of the Quokka solution
        and that it is not its own)
      `))]),e[22]||(e[22]=t()),o("li",null,[o("span",Ll,[e[11]||(e[11]=t(`
          Rename the
          `)),a(l,{inline:""},{default:s(()=>e[9]||(e[9]=[t(" .cs ")])),_:1,__:[9]}),e[12]||(e[12]=t(`
          file to
          `)),a(l,{inline:""},{default:s(()=>e[10]||(e[10]=[t(" Plugin_YourPluginNameHere.cs ")])),_:1,__:[10]})])]),e[23]||(e[23]=t()),o("li",null,[e[17]||(e[17]=t(`
        Edit the project file to look like the following and set the
        build configuration to 'Plugin':
        `)),e[18]||(e[18]=o("br",null,null,-1)),e[19]||(e[19]=t()),a(l,{lang:"markup"},{default:s(()=>e[13]||(e[13]=[t(`
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
        `)])),_:1,__:[13]}),e[20]||(e[20]=t()),o("blockquote",null,[e[15]||(e[15]=t(`
          This is a part of the
          `)),a(Q,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:s(()=>e[14]||(e[14]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[14]}),e[16]||(e[16]=t(`
           (a demo plugin not made for use)
        `))])])])]),_:1,__:[24]}),e[27]||(e[27]=t()),a(le,{type:"tip",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:s(()=>[e[26]||(e[26]=t(`
    To add extra files in the plugin's folder, for e.g., a settings file
    for the plugin, you can add the following to the project file;
    `)),a(l,{lang:"markup"},{default:s(()=>e[25]||(e[25]=[t(`
            <ItemGroup>
              <ContentWithTargetPath Include="settings.json">
                <CopyToOutputDirectory>Always</CopyToOutputDirectory>
                <TargetPath>settings.json</TargetPath>
              </ContentWithTargetPath>
            </ItemGroup>
          `)])),_:1,__:[25]})]),_:1,__:[26]})],64)}}}),Fl=Oe("/media/Docs/ListItems.png"),Dl={class:"flex gap-1"},Vl={class:"flex gap-1"},Ml={class:"flex gap-1"},Rl={class:"flex gap-1"},Ol={class:"flex gap-1"},Nl={class:"flex gap-1"},ql={class:"flex gap-1"},Ul=K({__name:"creatingNewItemType",setup(m){return(r,e)=>{const l=pe,d=me;return _(),F(ee,null,[a(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:s(()=>[e[15]||(e[15]=t(`
    Most plugins will want to show results to the user in the form of
    an item on the results list in the search window.`)),e[16]||(e[16]=o("br",null,null,-1)),e[17]||(e[17]=t(`
    To do so, first create an item type to define how your
    results are displayed;
    `)),e[18]||(e[18]=o("br",null,null,-1)),e[19]||(e[19]=o("br",null,null,-1)),e[20]||(e[20]=t()),o("ol",null,[o("li",null,[o("span",Dl,[e[1]||(e[1]=t(`
          In the
          `)),a(l,{inline:""},{default:s(()=>e[0]||(e[0]=[t(" .cs ")])),_:1,__:[0]}),e[2]||(e[2]=t(`
          file add
        `))]),e[4]||(e[4]=t()),a(l,{lang:"cs"},{default:s(()=>e[3]||(e[3]=[t(`
          using Quokka.PluginArch;
          using Quokka.ListItems;
        `)])),_:1,__:[3]})]),e[14]||(e[14]=t()),o("li",null,[o("span",Vl,[e[6]||(e[6]=t(`
          Create a
          `)),a(l,{inline:""},{default:s(()=>e[5]||(e[5]=[t(" ListItem ")])),_:1,__:[5]}),e[7]||(e[7]=t(`
          class for your item type
        `))]),e[12]||(e[12]=t()),a(l,{lang:"cs"},{default:s(()=>e[8]||(e[8]=[t(`
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
        `)])),_:1,__:[8]}),e[13]||(e[13]=t()),o("blockquote",null,[e[10]||(e[10]=t(`
          This is a part of the
          `)),a(Q,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:s(()=>e[9]||(e[9]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[9]}),e[11]||(e[11]=t(`
           (a demo plugin not made for use)
        `))])])])]),_:1,__:[15,16,17,18,19,20]}),e[46]||(e[46]=t()),a(le,{type:"warning",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:s(()=>[o("span",Ml,[e[22]||(e[22]=t(`
      A `)),a(l,{inline:""},{default:s(()=>e[21]||(e[21]=[t(" ListItem ")])),_:1,__:[21]}),e[23]||(e[23]=t(`
      must have the following:
    `))]),e[41]||(e[41]=t()),o("ul",null,[o("li",null,[o("span",Rl,[e[25]||(e[25]=t("an ")),a(l,{inline:""},{default:s(()=>e[24]||(e[24]=[t(" Icon ")])),_:1,__:[24]})])]),e[38]||(e[38]=t()),o("li",null,[o("span",Ol,[e[27]||(e[27]=t("a ")),a(l,{inline:""},{default:s(()=>e[26]||(e[26]=[t(" Name ")])),_:1,__:[26]})])]),e[39]||(e[39]=t()),o("li",null,[o("span",Nl,[e[29]||(e[29]=t("a ")),a(l,{inline:""},{default:s(()=>e[28]||(e[28]=[t(" Description ")])),_:1,__:[28]})])]),e[40]||(e[40]=t()),o("li",null,[o("span",ql,[e[32]||(e[32]=t(`
          an `)),a(l,{inline:""},{default:s(()=>e[30]||(e[30]=[t(" Execute ")])),_:1,__:[30]}),e[33]||(e[33]=t(`
          method to define what should happen when the
          `)),a(l,{inline:""},{default:s(()=>e[31]||(e[31]=[t(" ListItem ")])),_:1,__:[31]}),e[34]||(e[34]=t(` is run
        `))]),e[35]||(e[35]=t(`
        (i.e., what happens when the user hits the `)),e[36]||(e[36]=o("kbd",null,"↵",-1)),e[37]||(e[37]=t(` key with
        that item selected)
      `))])]),e[42]||(e[42]=t()),e[43]||(e[43]=o("br",null,null,-1)),e[44]||(e[44]=t()),e[45]||(e[45]=o("img",{src:Fl},null,-1))]),_:1,__:[41,42,43,44,45]})],64)}}}),Kl={class:"flex gap-1"},Wl={class:"flex gap-1"},jl={class:"flex gap-1"},Hl={class:"flex gap-1"},Ql={class:"flex gap-1"},Gl={class:"flex items-center"},Yl=K({__name:"creatingContextPane",setup(m){return(r,e)=>{const l=pe,d=me,u=ue,n=Se,i=Ne;return _(),F(ee,null,[a(le,{type:"info",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:s(()=>[o("span",Kl,[e[1]||(e[1]=t(`
      A context pane is displayed when the user hits the
      `)),a(l,{inline:""},{default:s(()=>e[0]||(e[0]=[t(" ContextPaneKey ")])),_:1,__:[0]}),e[2]||(e[2]=t(`
      , replacing the item list.
    `))]),e[6]||(e[6]=t()),o("span",Wl,[e[4]||(e[4]=t(`
      If the selected item does not have a context pane defined,
      nothing happens when the
      `)),a(l,{inline:""},{default:s(()=>e[3]||(e[3]=[t(" ContextPaneKey ")])),_:1,__:[3]}),e[5]||(e[5]=t(`
      is hit.
    `))])]),_:1,__:[6]}),e[35]||(e[35]=t()),a(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:s(()=>[e[23]||(e[23]=t(`
    To define the context pane for an item type:
    `)),o("ol",null,[o("li",null,[o("span",jl,[e[9]||(e[9]=t(`
          In the project, add a
          `)),a(l,{inline:""},{default:s(()=>e[7]||(e[7]=[t(" WPF Page ")])),_:1,__:[7]}),e[10]||(e[10]=t(`
          called `)),a(l,{inline:""},{default:s(()=>e[8]||(e[8]=[t(" ContextPane ")])),_:1,__:[8]})])]),e[21]||(e[21]=t()),o("li",null,[o("span",Hl,[e[12]||(e[12]=t(`
          Ensure `)),a(l,{inline:"",lang:"cs"},{default:s(()=>e[11]||(e[11]=[t(" ContextPane : ItemContextPane ")])),_:1,__:[11]})]),e[18]||(e[18]=t()),o("span",Ql,[e[15]||(e[15]=t(`
          (inherits `)),a(l,{inline:"",lang:"cs"},{default:s(()=>e[13]||(e[13]=[t(" ItemContextPane ")])),_:1,__:[13]}),e[16]||(e[16]=t(`
          from `)),a(l,{inline:"",lang:"cs"},{default:s(()=>e[14]||(e[14]=[t(" Quokka.ListItems ")])),_:1,__:[14]}),e[17]||(e[17]=t(`)
        `))])]),e[22]||(e[22]=t()),o("li",null,[e[20]||(e[20]=t(`
        Ensure the plugin's project file has:
        `)),a(l,{lang:"markup"},{default:s(()=>e[19]||(e[19]=[t(`
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
        `)])),_:1,__:[19]})])])]),_:1,__:[23]}),e[36]||(e[36]=t()),a(i,{class:"m-2",style:{width:"calc(100% - 0.5rem)","--maz-color-primary-alpha-20":"var(--maz-color-secondary-alpha-20)","--maz-color-primary-alpha":"var(--maz-color-secondary-alpha)"}},{"title-1":s(()=>[o("div",Gl,[a(u,{name:"i-lucide-lightbulb",class:"!size-5 min-w-5",style:{color:"#d2afff"}}),e[29]||(e[29]=t()),a(n,{orientation:"vertical",class:"h-7 mx-3",ui:{border:"dark:border-gray-600 h-full"}}),e[30]||(e[30]=t()),o("div",null,[e[25]||(e[25]=t(`
          A context pane tends to have extra information or actions.`)),e[26]||(e[26]=o("br",null,null,-1)),e[27]||(e[27]=t(`
          See an example from the
          `)),a(Q,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:s(()=>e[24]||(e[24]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[24]}),e[28]||(e[28]=t(`
           (a demo plugin not made for use)
        `))])])]),"content-1":s(()=>[a(l,{lang:"markup"},{default:s(()=>e[31]||(e[31]=[t(`
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
      `)])),_:1,__:[31]}),e[33]||(e[33]=t()),a(l,{lang:"cs"},{default:s(()=>e[32]||(e[32]=[t(`
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
      `)])),_:1,__:[32]})]),_:1,__:[34]})],64)}}}),Xl={class:"flex flex-col mt-22 mb-16 items-center"},Zl={class:"flex items-center Varela text-3xl"},Jl=K({__name:"creatingPlugin",setup(m){return(r,e)=>{const l=ue,d=Cl;return _(),F("div",null,[o("div",Xl,[o("div",Zl,[a(l,{name:"i-lucide-toy-brick",class:"mr-2"}),e[0]||(e[0]=t(` Creating a Plugin
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},`Creating new item types & producing their
        plugin`,-1))]),e[10]||(e[10]=t()),e[11]||(e[11]=o("div",{class:"mb-2"},"Steps",-1)),e[12]||(e[12]=t()),a(d,{steps:[{title:"Creating the project"},{title:"Creating a new item type"},{title:"Creating a context pane (optional)"},{title:"Creating the plugin"}],"can-close-steps":"",color:"neutral"},{"icon-1":s(()=>[a(l,{name:"i-lucide-folder-kanban"})]),"content-1":s(()=>[a(Bl)]),"icon-2":s(()=>[a(l,{name:"i-lucide-list"})]),"content-2":s(()=>[a(Ul)]),"icon-3":s(()=>[a(l,{name:"i-lucide-panels-top-left"})]),"content-3":s(()=>[a(Yl)]),"icon-4":s(()=>[a(l,{name:"i-lucide-unplug"})]),"content-4":s(()=>[a(zl)]),_:1,__:[3,4,5,6,7,8,9]})])}}}),ei={};function ti(m,r){const e=ue;return _(),F("div",null,[o("h1",null,[a(e,{name:"i-lucide-circle-help"}),r[0]||(r[0]=t(` FAQ by Developers
    `))]),r[1]||(r[1]=t()),r[2]||(r[2]=o("div",null,[t(`
      How do I use a 3rd party library in my plugin?

      You must install the package (likely through nuget) for your
      plugin's
      project. Unfortunately this is not enough since Quokka will need the
      package
      reference of the library. You will have to use `),o("a",{href:"https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection"},"reflection"),t(`
      to
      load the
      library at runtime and use the classes it provides. You can have a
      look
      at
      the following plugins as examples as to how to do this:
      `),o("ul",null,[o("li",null,[o("a",{href:""},"Plugin_Calculator")]),t(),o("li",null,[o("a",{href:""},"Plugin_EnglishDictionary")]),t(),o("li",null,[o("a",{href:""},"Plugin_Everything")])])],-1))])}const ni=dt(ei,[["render",ti]]);function li(m,r){const e=ot(m,r);if(!e)throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${m.toString()}`);return e}const ii="maz-table",ri=(m,r)=>{const e=m.__vccOpts||m;for(const[l,d]of r)e[l]=d;return e},ai=K({__name:"MazTableCell",setup(m){const{size:r}=li(ii);return(e,l)=>(_(),F("td",{class:J(["m-table-cell m-reset-css",[`--${c(r)}`]])},[q(e.$slots,"default",{},void 0,!0)],2))}}),ht=ri(ai,[["__scopeId","data-v-f338a7b0"]]);function si(m,r){const e=ot(m,r);if(!e)throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${m.toString()}`);return e}const oi="maz-table",ui=(m,r)=>{const e=m.__vccOpts||m;for(const[l,d]of r)e[l]=d;return e},di=K({__name:"MazTableRow",props:{noHoverable:{type:Boolean}},setup(m){const{hoverable:r,backgroundEven:e,backgroundOdd:l}=si(oi);return(d,u)=>(_(),F("tr",{class:J(["m-table-row m-reset-css",{"--hoverable":c(r)&&!d.noHoverable,"--background-odd":c(l),"--background-even":c(e)}])},[q(d.$slots,"default",{},void 0,!0)],2))}}),wt=ui(di,[["__scopeId","data-v-c9f9a9c5"]]),pi={class:"flex flex-col mt-22 mb-16 items-center"},mi={class:"flex items-center Varela text-3xl"},fi={class:"flex gap-1"},gi={class:"flex gap-1"},ci={class:"flex gap-1"},vi=K({__name:"generalUsage",setup(m){return(r,e)=>{const l=ue,d=me,u=ht,n=wt,i=$e;return _(),F("div",null,[o("div",pi,[o("div",mi,[a(l,{name:"i-lucide-mouse-pointer",class:"mr-2"}),e[0]||(e[0]=t(` General Usage
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},"Running the app & default keys",-1))]),e[39]||(e[39]=t()),a(d,{class:"w-full m-2"},{default:s(()=>[o("span",fi,[e[4]||(e[4]=t(`
        To use the app, run
        `)),a(pe,{inline:""},{default:s(()=>e[3]||(e[3]=[t(" Quokka.exe ")])),_:1,__:[3]}),e[5]||(e[5]=t(`
        (in the root folder)
      `))])]),_:1}),e[40]||(e[40]=t()),a(d,{class:"w-full m-2",padding:!1},{default:s(()=>[a(i,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",headers:["Default keys / shortcuts","Use","Notes"]},{default:s(()=>[a(n,null,{default:s(()=>[a(u,{style:{"font-size":"1rem"}},{default:s(()=>e[6]||(e[6]=[o("kbd",null,"Left Alt",-1),t("+"),o("kbd",null,"Space",-1)])),_:1,__:[6]}),e[14]||(e[14]=t()),a(u,null,{default:s(()=>e[7]||(e[7]=[t(`
            Launches the search bar
          `)])),_:1,__:[7]}),e[15]||(e[15]=t()),a(u,{style:{"font-size":"1rem",width:"43%"}},{default:s(()=>[o("span",gi,[e[13]||(e[13]=t(`This shortcut is modifiable; see
              `)),a(Q,{url:"",class:"flex"},{default:s(()=>[e[9]||(e[9]=o("span",null,"the  ",-1)),e[10]||(e[10]=t()),a(pe,{inline:"",class:"!border-0"},{default:s(()=>e[8]||(e[8]=[t("WindowHotKey")])),_:1,__:[8]}),e[11]||(e[11]=t()),e[12]||(e[12]=o("span",null,"  setting",-1))]),_:1,__:[9,10,11,12]})])]),_:1})]),_:1,__:[14,15]}),e[36]||(e[36]=t()),a(n,null,{default:s(()=>[a(u,null,{default:s(()=>e[16]||(e[16]=[o("kbd",null,"🠙",-1),o("span",{class:"text-sm"},"&",-1),o("kbd",null,"🠛",-1)])),_:1,__:[16]}),e[19]||(e[19]=t()),a(u,null,{default:s(()=>e[17]||(e[17]=[t(`
            Select items
          `)])),_:1,__:[17]}),e[20]||(e[20]=t()),a(u,{style:{"font-size":"1rem",width:"43%"}},{default:s(()=>e[18]||(e[18]=[t(`
            The keys used cannot be changed
          `)])),_:1,__:[18]})]),_:1,__:[19,20]}),e[37]||(e[37]=t()),a(n,null,{default:s(()=>[a(u,null,{default:s(()=>e[21]||(e[21]=[o("kbd",null,"↵",-1)])),_:1,__:[21]}),e[24]||(e[24]=t()),a(u,null,{default:s(()=>e[22]||(e[22]=[t(`
            Executes the selected item (the first item if no item is selected)
          `)])),_:1,__:[22]}),e[25]||(e[25]=t()),a(u,{style:{"font-size":"1rem",width:"43%"}},{default:s(()=>e[23]||(e[23]=[t(`
            The key used cannot be changed
          `)])),_:1,__:[23]})]),_:1,__:[24,25]}),e[38]||(e[38]=t()),a(n,null,{default:s(()=>[a(u,null,{default:s(()=>e[26]||(e[26]=[o("kbd",null,"☰",-1)])),_:1,__:[26]}),e[34]||(e[34]=t()),a(u,null,{default:s(()=>e[27]||(e[27]=[t(`
            Shows context pane for item
          `)])),_:1,__:[27]}),e[35]||(e[35]=t()),a(u,{style:{"font-size":"1rem",width:"43%"}},{default:s(()=>[o("span",ci,[e[33]||(e[33]=t(`This shortcut is modifiable; see
              `)),a(Q,{url:"",class:"flex"},{default:s(()=>[e[29]||(e[29]=o("span",null,"the  ",-1)),e[30]||(e[30]=t()),a(pe,{inline:"",class:"!border-0"},{default:s(()=>e[28]||(e[28]=[t("ContextPaneKey")])),_:1,__:[28]}),e[31]||(e[31]=t()),e[32]||(e[32]=o("span",null,"  setting",-1))]),_:1,__:[29,30,31,32]})])]),_:1})]),_:1,__:[34,35]})]),_:1,__:[36,37,38]})]),_:1})])}}}),bi={class:"flex flex-col mt-22 mb-16 items-center"},yi={class:"flex items-center Varela text-3xl"},hi={class:"flex gap-1"},wi={class:"flex gap-1"},ki=K({__name:"installation",setup(m){return(r,e)=>{const l=ue,d=me,u=pe,n=Se;return _(),F("div",null,[o("div",bi,[o("div",yi,[a(l,{name:"i-lucide-loader",class:"mr-2"}),e[0]||(e[0]=t(` Installation
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},"Requirements, steps & suggestions",-1))]),e[31]||(e[31]=t()),a(d,{class:"w-full m-2"},{default:s(()=>[e[11]||(e[11]=t(`
      Quokka requires the following:
      `)),o("ul",null,[e[8]||(e[8]=o("li",null,`
          A computer running Windows 7 or higher
        `,-1)),e[9]||(e[9]=t()),o("li",null,[a(Q,{url:""},{default:s(()=>e[3]||(e[3]=[t(`
            .NET 4.8 Framework (pre-installed on Windows 10 and 11)
          `)])),_:1,__:[3]})]),e[10]||(e[10]=t()),o("li",null,[e[5]||(e[5]=t(`
          Exclusions to any anti-malware software (including Microsoft
          defender) that is installed on your computer, for the location of the
          exe;
          `)),e[6]||(e[6]=o("br",null,null,-1)),e[7]||(e[7]=t()),a(le,{type:"warning",style:{width:"calc(100% - 3.5rem)"}},{default:s(()=>e[4]||(e[4]=[t(`
            Due to costs, binaries are not signed (e.g., with a
            Organization Validation (OV) code signing certificate).`),o("br",null,null,-1),t(`
            As a result, the Microsoft Defender SmartScreen will likely try
            to prevent the app from starting.
          `)])),_:1,__:[4]})])])]),_:1,__:[11]}),e[32]||(e[32]=t()),a(d,{class:"w-full m-2"},{default:s(()=>[e[30]||(e[30]=t(`
      To install:
      `)),o("ul",null,[o("li",null,[e[13]||(e[13]=t(`
          Go to the top of this page and click on the
          `)),a(Q,{url:""},{default:s(()=>e[12]||(e[12]=[t(`
            'Download Latest Release'
          `)])),_:1,__:[12]}),e[14]||(e[14]=t(`
           button
        `))]),e[28]||(e[28]=t()),o("li",null,[o("span",hi,[e[16]||(e[16]=t(`
            Download the
            `)),a(u,{inline:""},{default:s(()=>e[15]||(e[15]=[t(" Quokka.zip ")])),_:1,__:[15]}),e[17]||(e[17]=t(`
            file & extract it's contents
          `))])]),e[29]||(e[29]=t()),o("li",null,[e[26]||(e[26]=t(`
          You will want to extract / move the folder to an appropriate location.
          `)),a(le,{type:"info",style:{width:"calc(100% - 3.5rem)"}},{default:s(()=>e[18]||(e[18]=[t(`
            Quokka is a portable program by design. `),o("br",null,null,-1),t(`
            This means that you can place the folder on a external storage
            medium (e.g. a USB drive) and run the program from there.
          `)])),_:1,__:[18]}),e[27]||(e[27]=t()),a(le,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:s(()=>[o("span",wi,[e[20]||(e[20]=t(`
              If you do not wish to use the program in a portable manner, I
              suggest placing the folder in
              `)),a(u,{inline:""},{default:s(()=>e[19]||(e[19]=[t(" C:\\Program Files ")])),_:1,__:[19]}),e[21]||(e[21]=t(`,
            `))]),e[23]||(e[23]=t(`
            and creating a shortcut that is pinned to the taskbar and
            / or start menu.
            `)),a(n,{class:"my-3 w-1/2 mx-auto",ui:{border:"dark:border-gray-600"}}),e[24]||(e[24]=t(`
            You can set up a task to run the program at
            startup in Task Scheduler. Alternatively see the
            `)),a(Q,{url:""},{default:s(()=>e[22]||(e[22]=[t(`
              FAQ
            `)])),_:1,__:[22]}),e[25]||(e[25]=t(`
             on this.
          `))]),_:1,__:[23,24,25]})])])]),_:1,__:[30]})])}}}),xi={class:"flex flex-col mt-22 mb-16 items-center"},Si={class:"flex items-center Varela text-3xl"},_i={class:"flex gap-1"},Ci=K({__name:"plugins",setup(m){const r=ut(),e=r.pluginsList.map(u=>({developed:"i-lucide-square-check",name:u.name,author:u.author,authorLink:u.authorUrl})),l=r.plannedPlugins.map(u=>({developed:u.inProgress?"In progress":"i-lucide-square",name:u.name,author:"n/a"})),d=[...e,...l];return(u,n)=>{const i=ue,p=le,k=pe,P=me,x=$e;return _(),F("div",null,[o("div",xi,[o("div",Si,[a(i,{name:"i-lucide-blocks",class:"mr-2"}),n[0]||(n[0]=t(` Plugins
      `))]),n[1]||(n[1]=t()),n[2]||(n[2]=o("div",{class:"text-md outfit"},"Using plugins & the plugins list",-1))]),n[11]||(n[11]=t()),a(p,{type:"warning",style:{width:"100%"}},{default:s(()=>n[3]||(n[3]=[t(`
      Only recognized plugins appear on this site — others may exist.
    `)])),_:1,__:[3]}),n[12]||(n[12]=t()),a(P,{class:"w-full m-2"},{default:s(()=>[o("span",_i,[n[5]||(n[5]=t(`
        To add a plugin, download and extract it to the
        `)),a(k,{inline:""},{default:s(()=>n[4]||(n[4]=[t(" PlugBoard ")])),_:1,__:[4]}),n[6]||(n[6]=t(` folder
      `))]),n[8]||(n[8]=t(`
      If you do not wish to use a plugin, simply delete the appropriate
      folder in the PlugBoard
      `)),a(p,{type:"info",style:{width:"calc(100% - 1rem)"}},{default:s(()=>n[7]||(n[7]=[o("span",{class:"font-bold"},"Plugins may have their own settings",-1),t(`,
        special commands, command signifiers, etc.`),o("br",null,null,-1),t(`
        Please see their folder in the PlugBoard to find their settings
        file (at the root, if there is one) and consult their documentation
        for
        default values, implemented features, etc.
      `)])),_:1,__:[7]})]),_:1,__:[8]}),n[13]||(n[13]=t()),a(P,{class:"w-full m-2",padding:!1},{default:s(()=>[a(x,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",headers:[{label:"Developed?",key:"developed",width:"18rem"},{label:"Planned / developed plugin",key:"name",width:"36rem"},{label:"Author",key:"author"}],rows:d,search:"",noSearchBy:"",searchPlaceholder:"Search...",inputSize:"sm"},{"cell-name":s(({row:h,value:w})=>[h.authorLink?(_(),V(Q,{key:0,url:"/plugin/"+h.name.replace(" ","~")},{default:s(()=>[t(N(w),1)]),_:2},1032,["url"])):U("",!0)]),"cell-author":s(({row:h,value:w})=>[h.authorLink?(_(),V(Q,{key:0,url:h.authorLink},{default:s(()=>[t(N(w),1)]),_:2},1032,["url"])):U("",!0)]),"cell-developed":s(({value:h})=>[h!="In progress"?(_(),V(i,{key:0,name:h,class:"!size-5"},null,8,["name"])):U("",!0)]),_:1,__:[9,10]})]),_:1})])}}}),Pi=at("themesStore",{state:()=>({settings:[{name:"AboutCommand",defaultValue:"AboutQuokka",notes:[]},{name:"CheckForUpdates",defaultValue:"true",notes:[]},{name:"WindowHotKey",defaultValue:"Space",notes:[{prevText:"The full list of keys that can be used in the setting can be found",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.keys?view=netframework-4.8",text:"here"},afterText:"(use the first column)"}]},{name:"WindowHotKeyModifier",defaultValue:"Alt",notes:[{prevText:"The full list of keys that can be used in the setting can be found highlighted",link:{url:"https://github.com/Faeq-F/Quokka/blob/main/Quokka/KeyboardHook.cs#L130-L151",text:"here"}}]},{name:"ContextPaneKey",defaultValue:"Apps",notes:[]},{name:"MaxResults",defaultValue:"10",notes:[]},{name:"IgnoreMaxResultsFlag",defaultValue:"-ShowAll",notes:[]},{name:"FileManager",defaultValue:"explorer.exe",notes:["This is the program that will open the plugboard","Plugins may use this setting to open other folders, for e.g., a file location"]},{name:"TextEditor",defaultValue:"notepad.exe",notes:["This is the program that will open the settings file","Plugins may use this setting to open other files, for e.g., their own settings file"]}]}),actions:{}}),Ti={class:"flex flex-col mt-22 mb-16 items-center"},Ai={class:"flex items-center Varela text-3xl"},Ei={class:"flex gap-1"},$i=K({__name:"settings",setup(m){const r=Pi();return(e,l)=>{const d=ue,u=pe,n=me,i=$e;return _(),F("div",null,[o("div",Ti,[o("div",Ai,[a(d,{name:"i-lucide-sliders-vertical",class:"mr-2"}),l[0]||(l[0]=t(` Settings
      `))]),l[1]||(l[1]=t()),l[2]||(l[2]=o("div",{class:"text-md outfit"},"Defaults & extra information",-1))]),l[20]||(l[20]=t()),a(n,{class:"w-full m-2"},{default:s(()=>[o("span",Ei,[l[4]||(l[4]=t(`
        The settings file is located in
        `)),a(u,{inline:""},{default:s(()=>l[3]||(l[3]=[t(" '...\\Quokka\\Config\\' ")])),_:1,__:[3]})]),l[10]||(l[10]=t(`
      All settings are loaded when the application starts, meaning that
      you will have to exit and re-start the app to see changes.
      `)),a(le,{type:"info",style:{width:"calc(100% - 1rem)"}},{default:s(()=>[l[6]||(l[6]=t(`
        Plugins may have their own, specific settings files in the root of
        their respective folders, in the PlugBoard.`)),l[7]||(l[7]=o("br",null,null,-1)),l[8]||(l[8]=t(`
        Please consult their documentation (
        `)),a(Q,{url:"/documentation?section=api-documentation"},{default:s(()=>l[5]||(l[5]=[t(`
          API Documentation
        `)])),_:1,__:[5]}),l[9]||(l[9]=t(`
         included) for default values, etc.
      `))]),_:1,__:[6,7,8,9]})]),_:1,__:[10]}),l[21]||(l[21]=t()),a(n,{class:"w-full m-2"},{default:s(()=>[l[13]||(l[13]=t(`
      Quokka comes with the
      `)),a(Q,{url:"/#customizability"},{default:s(()=>l[11]||(l[11]=[t(`
        'Windows light'
      `)])),_:1,__:[11]}),l[14]||(l[14]=t(`
       theme by default.`)),l[15]||(l[15]=o("br",null,null,-1)),l[16]||(l[16]=t(`
      To change it, you can edit the style settings in the settings file
      and / or you can use values in a
      `)),a(Q,{url:"/#customizability"},{default:s(()=>l[12]||(l[12]=[t(`
        provided configuration
      `)])),_:1,__:[12]}),l[17]||(l[17]=t(`.
    `))]),_:1,__:[13,14,15,16,17]}),l[22]||(l[22]=t()),a(n,{class:"w-full m-2",padding:!1},{default:s(()=>[a(i,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",noSearchBy:"",searchPlaceholder:"Search...",inputSize:"sm",headers:[{label:"Setting name",key:"name",width:"12rem"},{label:"Default Value",key:"defaultValue",width:"12rem"},{label:"Notes",key:"notes"}],rows:c(r).settings},{"cell-notes":s(({value:p})=>[o("ul",null,[(_(!0),F(ee,null,fe(p,(k,P)=>(_(),F("li",{key:P},[Object.keys(k)[0]!="0"?(_(),F(ee,{key:0},[t(N(k.prevText)+" ",1),a(Q,{url:k.link.url,target:"_blank"},{default:s(()=>[t(N(k.link.text),1)]),_:2},1032,["url"]),t(`
                 `+N(k.afterText),1)],64)):(_(),F(ee,{key:1},[t(N(k),1)],64))]))),128))])]),"cell-defaultValue":s(({value:p})=>[a(u,{inline:""},{default:s(()=>[t(" "+N(p)+" ",1)]),_:2},1024)]),"cell-name":s(({value:p})=>[a(u,{inline:""},{default:s(()=>[t(" "+N(p)+" ",1)]),_:2},1024)]),_:1,__:[18,19]},8,["rows"])]),_:1})])}}}),zi=Oe("/media/Docs/LoadingQuokkaTray.ico"),Ii=Oe("/media/Docs/QuokkaTray.ico"),Li={class:"flex flex-col mt-22 mb-16 items-center"},Bi={class:"flex items-center Varela text-3xl"},Fi={class:"flex gap-1"},Di={class:"flex gap-1"},Vi={class:"mt-4"},Mi={class:"flex gap-1"},Ri={class:"flex gap-1"},Oi=K({__name:"trayTask",setup(m){return(r,e)=>{const l=ue,d=ht,u=wt,n=$e,i=pe,p=me,k=Se;return _(),F("div",null,[o("div",Li,[o("div",Bi,[a(l,{name:"i-lucide-panel-bottom",class:"mr-2"}),e[0]||(e[0]=t(` Tray Task
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},"Using the System Tray task",-1))]),e[46]||(e[46]=t()),a(p,{class:"w-full m-2",padding:!1},{default:s(()=>[a(n,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",headers:["Default tray task icon","Notes"]},{default:s(()=>[a(u,null,{default:s(()=>[a(d,null,{default:s(()=>e[3]||(e[3]=[o("img",{src:zi,class:"size-10"},null,-1)])),_:1,__:[3]}),e[5]||(e[5]=t()),a(d,null,{default:s(()=>e[4]||(e[4]=[t(`
            Displayed while Quokka is starting up / loading (is not ready)
          `)])),_:1,__:[4]})]),_:1,__:[5]}),e[9]||(e[9]=t()),a(u,null,{default:s(()=>[a(d,null,{default:s(()=>e[6]||(e[6]=[o("img",{src:Ii,class:"size-10"},null,-1)])),_:1,__:[6]}),e[8]||(e[8]=t()),a(d,null,{default:s(()=>e[7]||(e[7]=[t(`
            Displayed when Quokka is ready for use
          `)])),_:1,__:[7]})]),_:1,__:[8]})]),_:1,__:[9]}),e[18]||(e[18]=t()),a(le,{type:"tip",style:{width:"calc(100% - 1rem)"}},{default:s(()=>[o("span",Fi,[e[12]||(e[12]=t(`
          To change the tray task icon, edit the
          `)),a(i,{inline:""},{default:s(()=>e[10]||(e[10]=[t(" QuokkaTray.ico ")])),_:1,__:[10]}),e[13]||(e[13]=t(` file in
          `)),a(i,{inline:""},{default:s(()=>e[11]||(e[11]=[t(" ...\\Quokka\\Config\\Resources\\ ")])),_:1,__:[11]})]),e[17]||(e[17]=t()),o("span",Di,[e[15]||(e[15]=t(`
          (or just rename a different
          `)),a(i,{inline:""},{default:s(()=>e[14]||(e[14]=[t(" .ico ")])),_:1,__:[14]}),e[16]||(e[16]=t(`
          file to the same name)
        `))])]),_:1,__:[17]})]),_:1,__:[18]}),e[47]||(e[47]=t()),a(p,{class:"w-full m-2"},{default:s(()=>[e[42]||(e[42]=t(`
      The tray task context menu can be used to:
      `)),o("ul",Vi,[o("li",null,[e[20]||(e[20]=t(`
          Launch the search window
          `)),a(le,{type:"info",style:{width:"calc(100% - 3.5rem)"}},{default:s(()=>e[19]||(e[19]=[t(`
            You can only have one search window open at a time
          `)])),_:1,__:[19]})]),e[37]||(e[37]=t()),o("li",null,[e[27]||(e[27]=t(`
          Open the settings file
          `)),a(le,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:s(()=>[o("span",Mi,[e[26]||(e[26]=t(`
              You can change which text editor opens the settings file
              through
              `)),a(Q,{url:"",class:"flex"},{default:s(()=>[e[22]||(e[22]=o("span",null,"the  ",-1)),e[23]||(e[23]=t()),a(i,{inline:"",class:"!border-0"},{default:s(()=>e[21]||(e[21]=[t("TextEditor")])),_:1,__:[21]}),e[24]||(e[24]=t()),e[25]||(e[25]=o("span",null,"  setting",-1))]),_:1,__:[22,23,24,25]})])]),_:1})]),e[38]||(e[38]=t()),o("li",null,[e[36]||(e[36]=t(`
          Open the PlugBoard
          `)),a(le,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:s(()=>[o("span",Ri,[e[34]||(e[34]=t(`
              You can change which file manager opens the
              `)),a(i,{inline:""},{default:s(()=>e[28]||(e[28]=[t(" PlugBoard ")])),_:1,__:[28]}),e[35]||(e[35]=t(` folder through
              `)),a(Q,{url:"",class:"flex"},{default:s(()=>[e[30]||(e[30]=o("span",null,"the  ",-1)),e[31]||(e[31]=t()),a(i,{inline:"",class:"!border-0"},{default:s(()=>e[29]||(e[29]=[t("FileManager")])),_:1,__:[29]}),e[32]||(e[32]=t()),e[33]||(e[33]=o("span",null,"  setting",-1))]),_:1,__:[30,31,32,33]})])]),_:1})]),e[39]||(e[39]=t()),e[40]||(e[40]=o("li",null,"Exit the app",-1))]),e[43]||(e[43]=t()),a(k,{class:"my-3",ui:{border:"dark:border-gray-600"}}),e[44]||(e[44]=t()),a(le,{type:"warning",style:{width:"calc(100% - 1rem)"}},{default:s(()=>e[41]||(e[41]=[t(`
        When the tray task context menu has its
        `),o("span",{class:"font-bold"},"appearance changed",-1),t(` in the
        settings file, you will have to `),o("span",{class:"font-bold"},`exit and
          reload`,-1),t(`
        the application to see the changes.
      `)])),_:1,__:[41]})]),_:1,__:[42,43,44]}),e[48]||(e[48]=t()),a(le,{type:"danger",style:{width:"100%"}},{default:s(()=>e[45]||(e[45]=[t(`
      Unfortunately system tray tasks for other applications cannot be
      accessed through the Quokka search window yet`),o("br",null,null,-1),t(`
      This functionality may come in future (as a plugin).
    `)])),_:1,__:[45]})])}}}),Ni={class:"flex justify-between"},qi={class:"flex"},Ui={key:0,class:"flex items-center justify-start p-2 varela"},Ki={class:"justify-end flex items-center"},Wi={class:"flex"},ji={__name:"index",setup(m){let r=Y({section:"documentation",icon:""});const e=Kt();e.query.section&&(r.value=e.query.section);const l=wn(),d=l.toc.map(h=>{var w;return(w=h.children)!=null&&w.length?{...h,children:h.children.map(I=>({...I,onSelect:E=>Qe("/documentation?section="+I.section)}))}:{...h,onSelect:I=>Qe("/documentation?section="+h.section)}}),u=h=>{h?(r.value=d.find(w=>w.section==h.replace("/documentation?section=","")),r.value===void 0&&(r.value=d[1].children.find(w=>w.section==h.replace("/documentation?section=","")))):r.value={section:"documentation",icon:""}};we(()=>e.query.section,u,{immediate:!0});const n=Y(!1),i=Y(!1),p=Y(23),k=Y("padding-left:23rem;padding-right:23rem;"),P=Y("padding-left:17.625rem;padding-right:17.625rem;"),x=h=>{k.value=`padding-left:${h}rem;padding-right:${h}rem;`,P.value=`padding-left:${h-5.375}rem;padding-right:${h-5.375}rem;`};return we(i,async(h,w)=>{i.value?x(p.value):x(7)}),(h,w)=>{const I=Ht,E=Se,A=ue,$=Qt,f=hn,g=Jt;return _(),F("div",null,[o("div",Ni,[o("div",qi,[a(I,{class:"m-2 p-1",color:"neutral",variant:"ghost",icon:"i-lucide-book-text",onClick:w[0]||(w[0]=v=>Wt(r)?r.value={section:"documentation",icon:""}:r={section:"documentation",icon:""})},{default:s(()=>w[7]||(w[7]=[t(`
          Documentation
        `)])),_:1,__:[7]}),w[10]||(w[10]=t()),c(r).section!="documentation"?(_(),F("div",Ui,[a(E,{orientation:"vertical",class:"mr-4",ui:{border:"dark:border-gray-600 border-l-[0.5px] h-full"}}),w[9]||(w[9]=t()),a($,{direction:"right",duration:500,class:"flex items-center pt-0.5"},{default:s(()=>[w[8]||(w[8]=t(`
            Currently reading
            '
            `)),a(A,{name:c(r).icon,class:"px-3"},null,8,["name"]),t(" "+N(c(r).label+" ")+`'
          `,1)]),_:1,__:[8]})])):U("",!0)]),w[13]||(w[13]=t()),o("div",Ki,[i.value&&c(r).section!="api-documentation"&&p.value!=23?(_(),V($,{key:0,direction:"left",duration:500},{default:s(()=>[a(I,{class:"mr-2",color:"neutral",variant:"ghost",icon:"i-lucide-rotate-ccw",onClick:w[1]||(w[1]=v=>{p.value=23,x(23)})})]),_:1})):U("",!0),w[11]||(w[11]=t()),i.value&&c(r).section!="api-documentation"?(_(),V($,{key:1,direction:"left",duration:500},{default:s(()=>[a(f,{modelValue:p.value,"onUpdate:modelValue":[w[2]||(w[2]=v=>p.value=v),x],min:7,max:40,step:.125,color:"neutral",class:"w-64 mr-2",style:{"--ui-bg-inverted":"var(--ui-bg-accented)"},size:"xs",tooltip:{text:`${p.value} rem`,delayDuration:200}},null,8,["modelValue","tooltip"])]),_:1})):U("",!0),w[12]||(w[12]=t()),a(I,{class:"mr-2",color:"neutral",variant:"ghost",icon:c(r).section=="api-documentation"?"i-lucide-fold-horizontal":i.value?"i-lucide-unfold-horizontal":"i-lucide-fold-horizontal",onClick:w[3]||(w[3]=v=>i.value=!i.value),style:he(c(r).section=="api-documentation"?"cursor: not-allowed !important;":""),disabled:c(r).section=="api-documentation"},null,8,["icon","style","disabled"])])]),w[17]||(w[17]=t()),a(E,{ui:{border:"dark:border-gray-600 border-l-[0.5px] w-full"}}),w[18]||(w[18]=t()),o("div",Wi,[o("div",{class:"flex flex-col justify-between w-11 hover:w-64 transition-all duration-200 ease-out delay-200",onMouseenter:w[4]||(w[4]=v=>n.value=!0),onMouseleave:w[5]||(w[5]=v=>n.value=!1)},[a(g,{orientation:"vertical",items:c(d),class:"p-1 outfit",ui:{childList:n.value?"transition-all duration-200 ease-out delay-300":"ms-0 transition-all duration-200 ease-out delay-300",childItem:"ps-0.5",linkLabel:"!font-light",linkTrailingIcon:n.value?"":"!hidden"}},null,8,["items","ui"]),w[14]||(w[14]=t()),a(g,{orientation:"vertical",items:c(l).links,class:"p-1 outfit",ui:{linkLabel:"!font-light"},externalIcon:!1},null,8,["items"])],32),w[15]||(w[15]=t()),a(E,{orientation:" vertical",class:"h-[90vh]",ui:{border:"dark:border-gray-600 border-l-[0.5px] h-full"}}),w[16]||(w[16]=t()),o("div",{style:he(c(r).section=="api-documentation"?"":n.value?P.value:k.value),class:"docsContent max-h-[90vh] min-h-[90vh] overflow-y-scroll w-full outfit transition-all ease-out duration-100 delay-200","data-lenis-prevent":""},[a(jt,{name:"fade"},{default:s(()=>[c(r).section=="documentation"?(_(),V(zn,{key:0,onSwitchSection:w[6]||(w[6]=v=>u(v))})):c(r).section=="api-documentation"?(_(),V(Ln,{key:1})):c(r).section=="build-app"?(_(),V(Hn,{key:2})):c(r).section=="commands"?(_(),V(fl,{key:3})):c(r).section=="creating-plugin"?(_(),V(Jl,{key:4})):c(r).section=="faq"?(_(),V(ni,{key:5})):c(r).section=="general-usage"?(_(),V(vi,{key:6})):c(r).section=="installation"?(_(),V(ki,{key:7})):c(r).section=="plugins"?(_(),V(Ci,{key:8})):c(r).section=="settings"?(_(),V($i,{key:9})):c(r).section=="tray-task"?(_(),V(Oi,{key:10})):U("",!0)]),_:1})],4)])])}}},Hi=dt(ji,[["__scopeId","data-v-a5d21381"]]),tr=Object.freeze(Object.defineProperty({__proto__:null,default:Hi},Symbol.toStringTag,{value:"Module"}));export{ol as X,dl as _,tr as i,_l as u};
