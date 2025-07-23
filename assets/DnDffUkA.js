const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DAo3N5vH.js","./Y_AfuXyw.js","./entry.3Jt1jJxF.css","./DXgEmC9O.js","./DBQuTtFc.js","./BqJTAKye.js","./DvT9dSDY.js","./CVozrkKu.js","./Separator.g9ydD87f.css","./D2Nz3cpj.js","./CFGT6kOv.js","./CQChWiIA.js","./MazCardSpotlight.rJgYKvyQ.css","./BdNWVI8Q.js","./DRWlncVA.js","./MazAccordion.C7SW36J5.css","./DlAUqK2U.js","./MazBtn.D8JyV_rX.css","./CSJeJvQW.js","./CDyslOSV.js","./DuqnaYZL.js","./MazCheckbox.BAcItvEI.css","./BRkmxbXx.js","./MazInput.B5WqqF6b.css","./g0dG2aP-.js","./MazLoadingBar.Cnd5qhUA.css","./BagbO50c.js","./MazSelect.B4izt4-t.css","./Bi5RLCpu.js","./DoAG8HHi.js","./MazTableCell.NE7dxRuQ.css","./OcFKe0aL.js","./MazTableRow.C3ga9Zey.css","./4hD-HkMk.js","./MazTableTitle.D4AEydCy.css","./86h5McFJ.js","./Dq_-cl2N.js","./MazExpandAnimation.DQteHFIz.css","./BmRUl7zM.js","./Cl6qrg0x.js","./CbT3Xkk-.js"])))=>i.map(i=>d[i]);
import{q as R,a1 as Pt,a2 as Tt,e as K,a3 as At,B as we,m as V,o as _,J as ye,a4 as Et,c as F,r as fe,F as ee,a5 as it,w as i,j as U,f as c,P as $e,a6 as Ie,a7 as ke,h as Y,v as he,a8 as Re,a9 as zt,s as Me,i as W,aa as $t,ab as It,z as Oe,ac as Lt,b as s,ad as je,ae as Bt,D as Ft,af as Dt,G as Vt,ag as Mt,H as He,d as t,n as J,K as st,a as o,L as ue,t as N,_ as Rt,$ as Ot,ah as Nt,W as qt,g as at,N as Ut,k as ie,l as se,M as Ne,X as ot,Z as Kt,ai as Qe,T as Wt,I as jt}from"./Y_AfuXyw.js";import{_ as Se,u as ut,b as Ht}from"./CVozrkKu.js";import{u as Qt,a as Gt,_ as Yt,b as Xt,c as Zt}from"./D2Nz3cpj.js";import{L as me}from"./CQChWiIA.js";import{_ as q}from"./BdNWVI8Q.js";import{e as Le}from"./DRWlncVA.js";import{_ as Jt}from"./DlAUqK2U.js";function en(m){return R(()=>{var a;return Pt(m)?!!((a=Tt(m))!=null&&a.closest("form")):!0})}const Ge=K({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{},value:{},checked:{type:Boolean,default:void 0},required:{type:Boolean},disabled:{type:Boolean},feature:{default:"fully-hidden"}},setup(m){const a=m,{primitiveElement:e,currentElement:r}=At(),d=R(()=>a.checked??a.value);return we(d,(u,n)=>{if(!r.value)return;const l=r.value,p=window.HTMLInputElement.prototype,P=Object.getOwnPropertyDescriptor(p,"value").set;if(P&&u!==n){const x=new Event("input",{bubbles:!0}),h=new Event("change",{bubbles:!0});P.call(l,u),l.dispatchEvent(x),l.dispatchEvent(h)}}),(u,n)=>(_(),V(Et,ye({ref_key:"primitiveElement",ref:e},{...a,...u.$attrs},{as:"input"}),null,16))}}),tn=K({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{},value:{},checked:{type:Boolean,default:void 0},required:{type:Boolean},disabled:{type:Boolean},feature:{default:"fully-hidden"}},setup(m){const a=m,e=R(()=>typeof a.value=="object"&&Array.isArray(a.value)&&a.value.length===0&&a.required),r=R(()=>typeof a.value=="string"||typeof a.value=="number"||typeof a.value=="boolean"?[{name:a.name,value:a.value}]:typeof a.value=="object"&&Array.isArray(a.value)?a.value.flatMap((d,u)=>typeof d=="object"?Object.entries(d).map(([n,l])=>({name:`[${a.name}][${u}][${n}]`,value:l})):{name:`[${a.name}][${u}]`,value:d}):a.value!==null&&typeof a.value=="object"&&!Array.isArray(a.value)?Object.entries(a.value).map(([d,u])=>({name:`[${a.name}][${d}]`,value:u})):[]);return(d,u)=>e.value?(_(),V(Ge,ye({key:d.name},{...a,...d.$attrs},{name:d.name,value:d.value}),null,16,["name","value"])):(_(!0),F(ee,{key:1},fe(r.value,n=>(_(),V(Ge,ye({key:n.name,ref_for:!0},{...a,...d.$attrs},{name:n.name,value:n.value}),null,16,["name","value"]))),128))}});function dt(m,a=Number.NEGATIVE_INFINITY,e=Number.POSITIVE_INFINITY){return Math.min(e,Math.max(a,m))}function nn(m=[],a,e){const r=[...m];return r[e]=a,r.sort((d,u)=>d-u)}function pt(m,a,e){const u=100/(e-a)*(m-a);return dt(u,0,100)}function ln(m,a){return a>2?`Value ${m+1} of ${a}`:a===2?["Minimum","Maximum"][m]:void 0}function rn(m,a){if(m.length===1)return 0;const e=m.map(d=>Math.abs(d-a)),r=Math.min(...e);return e.indexOf(r)}function sn(m,a,e){const r=m/2,u=qe([0,50],[0,r]);return(r-u(a)*e)*e}function an(m){return m.slice(0,-1).map((a,e)=>m[e+1]-a)}function on(m,a){if(a>0){const e=an(m);return Math.min(...e)>=a}return!0}function qe(m,a){return e=>{if(m[0]===m[1]||a[0]===a[1])return a[0];const r=(a[1]-a[0])/(m[1]-m[0]);return a[0]+r*(e-m[0])}}function un(m){return(String(m).split(".")[1]||"").length}function dn(m,a){const e=10**a;return Math.round(m*e)/e}const mt=["PageUp","PageDown"],ft=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],gt={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},[ct,vt]=it(["SliderVertical","SliderHorizontal"]),bt=K({__name:"SliderImpl",props:{asChild:{type:Boolean},as:{default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(m,{emit:a}){const e=m,r=a,d=Pe();return(u,n)=>(_(),V(c($e),ye({"data-slider-impl":""},e,{onKeydown:n[0]||(n[0]=l=>{l.key==="Home"?(r("homeKeyDown",l),l.preventDefault()):l.key==="End"?(r("endKeyDown",l),l.preventDefault()):c(mt).concat(c(ft)).includes(l.key)&&(r("stepKeyDown",l),l.preventDefault())}),onPointerdown:n[1]||(n[1]=l=>{const p=l.target;p.setPointerCapture(l.pointerId),l.preventDefault(),c(d).thumbElements.value.includes(p)?p.focus():r("slideStart",l)}),onPointermove:n[2]||(n[2]=l=>{l.target.hasPointerCapture(l.pointerId)&&r("slideMove",l)}),onPointerup:n[3]||(n[3]=l=>{const p=l.target;p.hasPointerCapture(l.pointerId)&&(p.releasePointerCapture(l.pointerId),r("slideEnd",l))})}),{default:i(()=>[U(u.$slots,"default")]),_:3},16))}}),pn=K({__name:"SliderHorizontal",props:{dir:{},min:{},max:{},inverted:{type:Boolean}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(m,{emit:a}){const e=m,r=a,{max:d,min:u,dir:n,inverted:l}=Ie(e),{forwardRef:p,currentElement:w}=ke(),P=Pe(),x=Y(),h=Y(),k=R(()=>(n==null?void 0:n.value)==="ltr"&&!l.value||(n==null?void 0:n.value)!=="ltr"&&l.value);function I(E,A){const z=h.value||w.value.getBoundingClientRect(),f=[...P.thumbElements.value][P.valueIndexToChangeRef.value],g=P.thumbAlignment.value==="contain"?f.clientWidth:0;!x.value&&!A&&P.thumbAlignment.value==="contain"&&(x.value=E.clientX-f.getBoundingClientRect().left);const v=[0,z.width-g],C=k.value?[u.value,d.value]:[d.value,u.value],T=qe(v,C);h.value=z;const L=A?E.clientX-z.left-g/2:E.clientX-z.left-(x.value??0);return T(L)}return vt({startEdge:k.value?"left":"right",endEdge:k.value?"right":"left",direction:k.value?1:-1,size:"width"}),(E,A)=>(_(),V(bt,{ref:c(p),dir:c(n),"data-orientation":"horizontal",style:he({"--reka-slider-thumb-transform":!k.value&&c(P).thumbAlignment.value==="overflow"?"translateX(50%)":"translateX(-50%)"}),onSlideStart:A[0]||(A[0]=z=>{const f=I(z,!0);r("slideStart",f)}),onSlideMove:A[1]||(A[1]=z=>{const f=I(z);r("slideMove",f)}),onSlideEnd:A[2]||(A[2]=()=>{h.value=void 0,x.value=void 0,r("slideEnd")}),onStepKeyDown:A[3]||(A[3]=z=>{const f=k.value?"from-left":"from-right",g=c(gt)[f].includes(z.key);r("stepKeyDown",z,g?-1:1)}),onEndKeyDown:A[4]||(A[4]=z=>r("endKeyDown",z)),onHomeKeyDown:A[5]||(A[5]=z=>r("homeKeyDown",z))},{default:i(()=>[U(E.$slots,"default")]),_:3},8,["dir","style"]))}}),mn=K({__name:"SliderVertical",props:{min:{},max:{},inverted:{type:Boolean}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(m,{emit:a}){const e=m,r=a,{max:d,min:u,inverted:n}=Ie(e),l=Pe(),{forwardRef:p,currentElement:w}=ke(),P=Y(),x=Y(),h=R(()=>!n.value);function k(I,E){const A=x.value||w.value.getBoundingClientRect(),z=[...l.thumbElements.value][l.valueIndexToChangeRef.value],f=l.thumbAlignment.value==="contain"?z.clientHeight:0;!P.value&&!E&&l.thumbAlignment.value==="contain"&&(P.value=I.clientY-z.getBoundingClientRect().top);const g=[0,A.height-f],v=h.value?[d.value,u.value]:[u.value,d.value],C=qe(g,v),T=E?I.clientY-A.top-f/2:I.clientY-A.top-(P.value??0);return x.value=A,C(T)}return vt({startEdge:h.value?"bottom":"top",endEdge:h.value?"top":"bottom",size:"height",direction:h.value?1:-1}),(I,E)=>(_(),V(bt,{ref:c(p),"data-orientation":"vertical",style:he({"--reka-slider-thumb-transform":!h.value&&c(l).thumbAlignment.value==="overflow"?"translateY(-50%)":"translateY(50%)"}),onSlideStart:E[0]||(E[0]=A=>{const z=k(A,!0);r("slideStart",z)}),onSlideMove:E[1]||(E[1]=A=>{const z=k(A);r("slideMove",z)}),onSlideEnd:E[2]||(E[2]=()=>{x.value=void 0,P.value=void 0,r("slideEnd")}),onStepKeyDown:E[3]||(E[3]=A=>{const z=h.value?"from-bottom":"from-top",f=c(gt)[z].includes(A.key);r("stepKeyDown",A,f?-1:1)}),onEndKeyDown:E[4]||(E[4]=A=>r("endKeyDown",A)),onHomeKeyDown:E[5]||(E[5]=A=>r("homeKeyDown",A))},{default:i(()=>[U(I.$slots,"default")]),_:3},8,["style"]))}}),[Pe,fn]=it("SliderRoot"),gn=K({inheritAttrs:!1,__name:"SliderRoot",props:{defaultValue:{default:()=>[0]},modelValue:{},disabled:{type:Boolean,default:!1},orientation:{default:"horizontal"},dir:{},inverted:{type:Boolean,default:!1},min:{default:0},max:{default:100},step:{default:1},minStepsBetweenThumbs:{default:0},thumbAlignment:{default:"contain"},asChild:{type:Boolean},as:{default:"span"},name:{},required:{type:Boolean}},emits:["update:modelValue","valueCommit"],setup(m,{emit:a}){const e=m,r=a,{min:d,max:u,step:n,minStepsBetweenThumbs:l,orientation:p,disabled:w,thumbAlignment:P,dir:x}=Ie(e),h=Qt(x),{forwardRef:k,currentElement:I}=ke(),E=en(I),{CollectionSlot:A}=Re({isProvider:!0}),z=zt(e,"modelValue",r,{defaultValue:e.defaultValue,passive:e.modelValue===void 0}),f=R(()=>Array.isArray(z.value)?[...z.value]:[]),g=Y(0),v=Y(f.value);function C($){const S=rn(f.value,$);B($,S)}function T($){B($,g.value)}function L(){const $=v.value[g.value];f.value[g.value]!==$&&r("valueCommit",$t(f.value))}function B($,S,{commit:M}={commit:!1}){var de;const j=un(n.value),G=dn(Math.round(($-d.value)/n.value)*n.value+d.value,j),oe=dt(G,d.value,u.value),ae=nn(f.value,oe,S);if(on(ae,l.value*n.value)){g.value=ae.indexOf(oe);const Q=String(ae)!==String(z.value);Q&&M&&r("valueCommit",ae),Q&&((de=b.value[g.value])==null||de.focus(),z.value=ae)}}const b=Y([]);return fn({modelValue:z,currentModelValue:f,valueIndexToChangeRef:g,thumbElements:b,orientation:p,min:d,max:u,disabled:w,thumbAlignment:P}),($,S)=>(_(),V(c(A),null,{default:i(()=>[(_(),V(Me(c(p)==="horizontal"?pn:mn),ye($.$attrs,{ref:c(k),"as-child":$.asChild,as:$.as,min:c(d),max:c(u),dir:c(h),inverted:$.inverted,"aria-disabled":c(w),"data-disabled":c(w)?"":void 0,onPointerdown:S[0]||(S[0]=()=>{c(w)||(v.value=f.value)}),onSlideStart:S[1]||(S[1]=M=>!c(w)&&C(M)),onSlideMove:S[2]||(S[2]=M=>!c(w)&&T(M)),onSlideEnd:S[3]||(S[3]=M=>!c(w)&&L()),onHomeKeyDown:S[4]||(S[4]=M=>!c(w)&&B(c(d),0,{commit:!0})),onEndKeyDown:S[5]||(S[5]=M=>!c(w)&&B(c(u),f.value.length-1,{commit:!0})),onStepKeyDown:S[6]||(S[6]=(M,j)=>{if(!c(w)){const ae=c(mt).includes(M.key)||M.shiftKey&&c(ft).includes(M.key)?10:1,de=g.value,Q=f.value[de],H=c(n)*ae*j;B(Q+H,de,{commit:!0})}})}),{default:i(()=>[U($.$slots,"default",{modelValue:c(z)}),c(E)&&$.name?(_(),V(c(tn),{key:0,type:"number",value:c(z),name:$.name,required:$.required,disabled:c(w),step:c(n)},null,8,["value","name","required","disabled","step"])):W("",!0)]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}))}}),cn=K({__name:"SliderRange",props:{asChild:{type:Boolean},as:{default:"span"}},setup(m){const a=Pe(),e=ct();ke();const r=R(()=>a.currentModelValue.value.map(n=>pt(n,a.min.value,a.max.value))),d=R(()=>a.currentModelValue.value.length>1?Math.min(...r.value):0),u=R(()=>100-Math.max(...r.value,0));return(n,l)=>(_(),V(c($e),{"data-disabled":c(a).disabled.value?"":void 0,"data-orientation":c(a).orientation.value,"as-child":n.asChild,as:n.as,style:he({[c(e).startEdge]:`${d.value}%`,[c(e).endEdge]:`${u.value}%`})},{default:i(()=>[U(n.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}}),vn=K({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{},asChild:{type:Boolean},as:{}},setup(m){const a=m,e=Pe(),r=ct(),{forwardRef:d,currentElement:u}=ke(),{CollectionItem:n}=Re(),l=R(()=>{var I,E;return(E=(I=e.modelValue)==null?void 0:I.value)==null?void 0:E[a.index]}),p=R(()=>l.value===void 0?0:pt(l.value,e.min.value??0,e.max.value??100)),w=R(()=>{var I,E;return ln(a.index,((E=(I=e.modelValue)==null?void 0:I.value)==null?void 0:E.length)??0)}),P=Gt(u),x=R(()=>P[r.size].value),h=R(()=>e.thumbAlignment.value==="overflow"||!x.value?0:sn(x.value,p.value,r.direction)),k=It();return Oe(()=>{e.thumbElements.value.push(u.value)}),Lt(()=>{const I=e.thumbElements.value.findIndex(E=>E===u.value)??-1;e.thumbElements.value.splice(I,1)}),(I,E)=>(_(),V(c(n),null,{default:i(()=>[s(c($e),ye(I.$attrs,{ref:c(d),role:"slider",tabindex:c(e).disabled.value?void 0:0,"aria-label":I.$attrs["aria-label"]||w.value,"data-disabled":c(e).disabled.value?"":void 0,"data-orientation":c(e).orientation.value,"aria-valuenow":l.value,"aria-valuemin":c(e).min.value,"aria-valuemax":c(e).max.value,"aria-orientation":c(e).orientation.value,"as-child":I.asChild,as:I.as,style:{transform:"var(--reka-slider-thumb-transform)",position:"absolute",[c(r).startEdge]:`calc(${p.value}% + ${h.value}px)`,display:!c(k)&&l.value===void 0?"none":void 0},onFocus:E[0]||(E[0]=()=>{c(e).valueIndexToChangeRef.value=I.index})}),{default:i(()=>[U(I.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),Ye=K({__name:"SliderThumb",props:{asChild:{type:Boolean},as:{default:"span"}},setup(m){const a=m,{getItems:e}=Re(),{forwardRef:r,currentElement:d}=ke(),u=R(()=>d.value?e(!0).findIndex(n=>n.ref===d.value):-1);return(n,l)=>(_(),V(vn,ye({ref:c(r)},a,{index:u.value}),{default:i(()=>[U(n.$slots,"default")]),_:3},16,["index"]))}}),bn=K({__name:"SliderTrack",props:{asChild:{type:Boolean},as:{default:"span"}},setup(m){const a=Pe();return ke(),(e,r)=>(_(),V(c($e),{"as-child":e.asChild,as:e.as,"data-disabled":c(a).disabled.value?"":void 0,"data-orientation":c(a).orientation.value},{default:i(()=>[U(e.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}}),yn={slots:{root:"relative flex items-center select-none touch-none",track:"relative bg-accented overflow-hidden rounded-full grow",range:"absolute rounded-full",thumb:"rounded-full bg-default ring-2 focus-visible:outline-2 focus-visible:outline-offset-2"},variants:{color:{primary:{range:"bg-primary",thumb:"ring-primary focus-visible:outline-primary/50"},secondary:{range:"bg-secondary",thumb:"ring-secondary focus-visible:outline-secondary/50"},success:{range:"bg-success",thumb:"ring-success focus-visible:outline-success/50"},info:{range:"bg-info",thumb:"ring-info focus-visible:outline-info/50"},warning:{range:"bg-warning",thumb:"ring-warning focus-visible:outline-warning/50"},error:{range:"bg-error",thumb:"ring-error focus-visible:outline-error/50"},neutral:{range:"bg-inverted",thumb:"ring-inverted focus-visible:outline-inverted/50"}},size:{xs:{thumb:"size-3"},sm:{thumb:"size-3.5"},md:{thumb:"size-4"},lg:{thumb:"size-4.5"},xl:{thumb:"size-5"}},orientation:{horizontal:{root:"w-full",range:"h-full"},vertical:{root:"flex-col h-full",range:"w-full"}},disabled:{true:{root:"opacity-75 cursor-not-allowed"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{track:"h-[6px]"}},{orientation:"horizontal",size:"sm",class:{track:"h-[7px]"}},{orientation:"horizontal",size:"md",class:{track:"h-[8px]"}},{orientation:"horizontal",size:"lg",class:{track:"h-[9px]"}},{orientation:"horizontal",size:"xl",class:{track:"h-[10px]"}},{orientation:"vertical",size:"xs",class:{track:"w-[6px]"}},{orientation:"vertical",size:"sm",class:{track:"w-[7px]"}},{orientation:"vertical",size:"md",class:{track:"w-[8px]"}},{orientation:"vertical",size:"lg",class:{track:"w-[9px]"}},{orientation:"vertical",size:"xl",class:{track:"w-[10px]"}}],defaultVariants:{size:"md",color:"primary"}},hn={__name:"Slider",props:je({as:{type:null,required:!1},size:{type:null,required:!1},color:{type:null,required:!1},orientation:{type:null,required:!1,default:"horizontal"},tooltip:{type:[Boolean,Object],required:!1},defaultValue:{type:[Number,Array],required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},name:{type:String,required:!1},disabled:{type:Boolean,required:!1},inverted:{type:Boolean,required:!1},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:100},step:{type:Number,required:!1,default:1},minStepsBetweenThumbs:{type:Number,required:!1}},{modelValue:{type:null},modelModifiers:{}}),emits:je(["update:modelValue","change"],["update:modelValue"]),setup(m,{emit:a}){const e=m,r=a,d=Bt(m,"modelValue"),u=Ft(),n=Dt(Vt(e,"as","orientation","min","max","step","minStepsBetweenThumbs","inverted"),r),{id:l,emitFormChange:p,emitFormInput:w,size:P,color:x,name:h,disabled:k,ariaAttrs:I}=Mt(e),E=R(()=>typeof e.defaultValue=="number"?[e.defaultValue]:e.defaultValue),A=R({get(){return typeof d.value=="number"?[d.value]:d.value??E.value},set(v){d.value=(v==null?void 0:v.length)!==1?v:v[0]}}),z=R(()=>{var v;return((v=A.value)==null?void 0:v.length)??1}),f=R(()=>{var v;return He({extend:He(yn),...((v=u.ui)==null?void 0:v.slider)||{}})({disabled:k.value,size:P.value,color:x.value,orientation:e.orientation})});function g(v){const C=new Event("change",{target:{value:v}});r("change",C),p()}return(v,C)=>{var T;return _(),V(c(gn),ye({...c(n),...c(I)},{id:c(l),modelValue:A.value,"onUpdate:modelValue":[C[0]||(C[0]=L=>A.value=L),C[1]||(C[1]=L=>c(w)())],name:c(h),disabled:c(k),class:f.value.root({class:[(T=e.ui)==null?void 0:T.root,e.class]}),"default-value":E.value,onValueCommit:g}),{default:i(()=>{var L;return[s(c(bn),{class:J(f.value.track({class:(L=e.ui)==null?void 0:L.track}))},{default:i(()=>{var B;return[s(c(cn),{class:J(f.value.range({class:(B=e.ui)==null?void 0:B.range}))},null,8,["class"])]}),_:1},8,["class"]),C[2]||(C[2]=t()),(_(!0),F(ee,null,fe(z.value,B=>{var b,$;return _(),F(ee,{key:B},[m.tooltip?(_(),V(Yt,ye({key:0,text:z.value>1?String((b=A.value)==null?void 0:b[B-1]):String(A.value),"disable-closing-trigger":"",ref_for:!0},typeof m.tooltip=="object"?m.tooltip:{}),{default:i(()=>{var S;return[s(c(Ye),{class:J(f.value.thumb({class:(S=e.ui)==null?void 0:S.thumb}))},null,8,["class"])]}),_:2},1040,["text"])):(_(),V(c(Ye),{key:1,class:J(f.value.thumb({class:($=e.ui)==null?void 0:$.thumb}))},null,8,["class"]))],64)}),128))]}),_:1,__:[2]},16,["id","modelValue","name","disabled","class","default-value"])}}},wn=st("docsStore",{state:()=>({toc:[{label:"Installation",icon:"i-lucide-loader",section:"installation"},{label:"How to Use",icon:"i-lucide-pointer",section:"general-usage",children:[{label:"General Usage",icon:"i-lucide-mouse-pointer",section:"general-usage"},{label:"Tray task",icon:"i-lucide-panel-bottom",section:"tray-task"},{label:"Plugins",icon:"i-lucide-blocks",section:"plugins"},{label:"Commands",icon:"i-lucide-zap",section:"commands"}]},{label:"Settings",icon:"i-lucide-sliders-vertical",section:"settings"},{label:"Building the app",icon:"i-lucide-drill",section:"build-app"},{label:"API Documentation",icon:"i-lucide-code",section:"api-documentation"},{label:"Creating a plugin",icon:"i-lucide-toy-brick",section:"creating-plugin"},{label:"FAQ by Developers",icon:"i-lucide-circle-help",section:"faq"}],links:[[{label:"License",icon:"i-lucide-scale",to:"",target:"_blank"}],[{label:"Changelog",icon:"i-lucide-file-cog",to:"",target:"_blank"},{label:"Releases",icon:"i-lucide-tags",to:"",target:"_blank"}],[{label:"Program Source",icon:"i-lucide-folder-git",to:"",target:"_blank"},{label:"Website Source",icon:"i-lucide-folder-git-2",to:"",target:"_blank"}],[{label:"Discussions",icon:"i-lucide-messages-square",to:"",target:"_blank"},{label:"Feedback",icon:"i-lucide-thumbs-up",to:"",target:"_blank"},{label:"Security Policy",icon:"i-lucide-shield-check",to:"",target:"_blank"},{label:"Report an Issue",icon:"i-lucide-octagon-alert",to:"",target:"_blank"}]]}),actions:{}}),xn={class:"w-full text-center"},kn={class:"flex w-full mt-12"},Sn={class:"flex flex-col justify-center items-center h-full"},_n={class:"text-sm text-gray-400"},Cn={class:"flex w-full"},Pn={class:"flex flex-col justify-center items-center h-full"},Tn={class:"text-sm text-gray-400"},An={class:"pr-6"},En={class:"flex flex-col justify-center items-center h-full"},zn={class:"text-sm text-gray-400"},$n={__name:"documentation",setup(m){const a=Xt();return(e,r)=>{const d=ue,u=me,n=Rt;return _(),F("div",xn,[r[6]||(r[6]=o("div",{class:"text-3xl mb-2 mt-22"},`
      Welcome to the Quokka documentation!
    `,-1)),r[7]||(r[7]=t()),r[8]||(r[8]=o("div",null,`
      This is a place where you can find all the information you need to get
      started with Quokka
    `,-1)),r[9]||(r[9]=t()),r[10]||(r[10]=o("div",null,`
      If you have any questions or feedback, feel free to reach out
    `,-1)),r[11]||(r[11]=t()),o("div",kn,[(_(!0),F(ee,null,fe(c(a).items[0][1].children.slice(0,3),(l,p)=>(_(),V(n,{key:p,to:l.to,class:"w-1/3 m-3 h-36"},{default:i(()=>[s(u,{class:"w-full h-full"},{default:i(()=>[o("div",Sn,[s(d,{name:l.icon},null,8,["name"]),r[0]||(r[0]=t()),o("div",null,N(l.label),1),r[1]||(r[1]=t()),o("div",_n,N(l.description),1)])]),_:2},1024)]),_:2},1032,["to"]))),128))]),r[12]||(r[12]=t()),o("div",Cn,[(_(!0),F(ee,null,fe(c(a).items[0][1].children.slice(3,6),(l,p)=>(_(),V(n,{key:p,to:l.to,class:"w-1/3 m-3 h-36"},{default:i(()=>[s(u,{class:"w-full h-full"},{default:i(()=>[o("div",Pn,[s(d,{name:l.icon},null,8,["name"]),r[2]||(r[2]=t()),o("div",null,N(l.label),1),r[3]||(r[3]=t()),o("div",Tn,N(l.description),1)])]),_:2},1024)]),_:2},1032,["to"]))),128))]),r[13]||(r[13]=t()),o("div",An,[s(n,{to:c(a).items[0][1].children[6].to},{default:i(()=>[s(u,{class:"w-full h-36 m-3"},{default:i(()=>[o("div",En,[s(d,{name:c(a).items[0][1].children[6].icon},null,8,["name"]),r[4]||(r[4]=t()),o("div",null,N(c(a).items[0][1].children[6].label),1),r[5]||(r[5]=t()),o("div",zn,N(c(a).items[0][1].children[6].description),1)])]),_:1})]),_:1},8,["to"])])])}}},In={class:"w-full h-full !border-0"},Ln=K({__name:"apiDocumentation",setup(m){function a(){d.value.contentDocument.getElementsByTagName("html")[0].dataset.bsTheme=r.selectedTheme.value;for(var u of d.value.contentDocument.body.getElementsByTagName("a"))u.href.includes("Quokka")||(u.target="_blank")}function e(u,n){var l=function(){setTimeout(function(){n(u,u.contentWindow.location.href)},0)};function p(){u.contentWindow.removeEventListener("unload",l),u.contentWindow.addEventListener("unload",l)}u.addEventListener("load",p),p()}const r=Ot({watchChanges:!0}),d=Y(null);return Oe(()=>{d.value.addEventListener("load",a),we(r.selectedTheme,async(u,n)=>a()),e(d.value,function(u,n){a()})}),(u,n)=>(_(),F("div",In,[o("iframe",{ref_key:"APIframe",ref:d,src:"/Quokka/APIdocs/api/Quokka.html",class:"w-full h-full"},null,512)]))}});var Xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bn(m){return m&&m.__esModule&&Object.prototype.hasOwnProperty.call(m,"default")?m.default:m}var De={exports:{}},Ze;function Fn(){return Ze||(Ze=1,function(m){var a=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var e=function(r){var d=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,u=0,n={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function f(g){return g instanceof p?new p(g.type,f(g.content),g.alias):Array.isArray(g)?g.map(f):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++u}),f.__id},clone:function f(g,v){v=v||{};var C,T;switch(l.util.type(g)){case"Object":if(T=l.util.objId(g),v[T])return v[T];C={},v[T]=C;for(var L in g)g.hasOwnProperty(L)&&(C[L]=f(g[L],v));return C;case"Array":return T=l.util.objId(g),v[T]?v[T]:(C=[],v[T]=C,g.forEach(function(B,b){C[b]=f(B,v)}),C);default:return g}},getLanguage:function(f){for(;f;){var g=d.exec(f.className);if(g)return g[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,g){f.className=f.className.replace(RegExp(d,"gi"),""),f.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(C){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(f){var g=document.getElementsByTagName("script");for(var v in g)if(g[v].src==f)return g[v]}return null}},isActive:function(f,g,v){for(var C="no-"+g;f;){var T=f.classList;if(T.contains(g))return!0;if(T.contains(C))return!1;f=f.parentElement}return!!v}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(f,g){var v=l.util.clone(l.languages[f]);for(var C in g)v[C]=g[C];return v},insertBefore:function(f,g,v,C){C=C||l.languages;var T=C[f],L={};for(var B in T)if(T.hasOwnProperty(B)){if(B==g)for(var b in v)v.hasOwnProperty(b)&&(L[b]=v[b]);v.hasOwnProperty(B)||(L[B]=T[B])}var $=C[f];return C[f]=L,l.languages.DFS(l.languages,function(S,M){M===$&&S!=f&&(this[S]=L)}),L},DFS:function f(g,v,C,T){T=T||{};var L=l.util.objId;for(var B in g)if(g.hasOwnProperty(B)){v.call(g,B,g[B],C||B);var b=g[B],$=l.util.type(b);$==="Object"&&!T[L(b)]?(T[L(b)]=!0,f(b,v,null,T)):$==="Array"&&!T[L(b)]&&(T[L(b)]=!0,f(b,v,B,T))}}},plugins:{},highlightAll:function(f,g){l.highlightAllUnder(document,f,g)},highlightAllUnder:function(f,g,v){var C={callback:v,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),l.hooks.run("before-all-elements-highlight",C);for(var T=0,L;L=C.elements[T++];)l.highlightElement(L,g===!0,C.callback)},highlightElement:function(f,g,v){var C=l.util.getLanguage(f),T=l.languages[C];l.util.setLanguage(f,C);var L=f.parentElement;L&&L.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(L,C);var B=f.textContent,b={element:f,language:C,grammar:T,code:B};function $(M){b.highlightedCode=M,l.hooks.run("before-insert",b),b.element.innerHTML=b.highlightedCode,l.hooks.run("after-highlight",b),l.hooks.run("complete",b),v&&v.call(b.element)}if(l.hooks.run("before-sanity-check",b),L=b.element.parentElement,L&&L.nodeName.toLowerCase()==="pre"&&!L.hasAttribute("tabindex")&&L.setAttribute("tabindex","0"),!b.code){l.hooks.run("complete",b),v&&v.call(b.element);return}if(l.hooks.run("before-highlight",b),!b.grammar){$(l.util.encode(b.code));return}if(g&&r.Worker){var S=new Worker(l.filename);S.onmessage=function(M){$(M.data)},S.postMessage(JSON.stringify({language:b.language,code:b.code,immediateClose:!0}))}else $(l.highlight(b.code,b.grammar,b.language))},highlight:function(f,g,v){var C={code:f,grammar:g,language:v};if(l.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=l.tokenize(C.code,C.grammar),l.hooks.run("after-tokenize",C),p.stringify(l.util.encode(C.tokens),C.language)},tokenize:function(f,g){var v=g.rest;if(v){for(var C in v)g[C]=v[C];delete g.rest}var T=new x;return h(T,T.head,f),P(f,T,g,T.head,0),I(T)},hooks:{all:{},add:function(f,g){var v=l.hooks.all;v[f]=v[f]||[],v[f].push(g)},run:function(f,g){var v=l.hooks.all[f];if(!(!v||!v.length))for(var C=0,T;T=v[C++];)T(g)}},Token:p};r.Prism=l;function p(f,g,v,C){this.type=f,this.content=g,this.alias=v,this.length=(C||"").length|0}p.stringify=function f(g,v){if(typeof g=="string")return g;if(Array.isArray(g)){var C="";return g.forEach(function($){C+=f($,v)}),C}var T={type:g.type,content:f(g.content,v),tag:"span",classes:["token",g.type],attributes:{},language:v},L=g.alias;L&&(Array.isArray(L)?Array.prototype.push.apply(T.classes,L):T.classes.push(L)),l.hooks.run("wrap",T);var B="";for(var b in T.attributes)B+=" "+b+'="'+(T.attributes[b]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+B+">"+T.content+"</"+T.tag+">"};function w(f,g,v,C){f.lastIndex=g;var T=f.exec(v);if(T&&C&&T[1]){var L=T[1].length;T.index+=L,T[0]=T[0].slice(L)}return T}function P(f,g,v,C,T,L){for(var B in v)if(!(!v.hasOwnProperty(B)||!v[B])){var b=v[B];b=Array.isArray(b)?b:[b];for(var $=0;$<b.length;++$){if(L&&L.cause==B+","+$)return;var S=b[$],M=S.inside,j=!!S.lookbehind,G=!!S.greedy,oe=S.alias;if(G&&!S.pattern.global){var ae=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,ae+"g")}for(var de=S.pattern||S,Q=C.next,H=T;Q!==g.tail&&!(L&&H>=L.reach);H+=Q.value.length,Q=Q.next){var X=Q.value;if(g.length>f.length)return;if(!(X instanceof p)){var te=1,Z;if(G){if(Z=w(de,H,f,j),!Z||Z.index>=f.length)break;var be=Z.index,_e=Z.index+Z[0].length,ge=H;for(ge+=Q.value.length;be>=ge;)Q=Q.next,ge+=Q.value.length;if(ge-=Q.value.length,H=ge,Q.value instanceof p)continue;for(var ve=Q;ve!==g.tail&&(ge<_e||typeof ve.value=="string");ve=ve.next)te++,ge+=ve.value.length;te--,X=f.slice(H,ge),Z.index-=H}else if(Z=w(de,0,X,j),!Z)continue;var be=Z.index,Ce=Z[0],Te=X.slice(0,be),ce=X.slice(be+Ce.length),Ae=H+X.length;L&&Ae>L.reach&&(L.reach=Ae);var xe=Q.prev;Te&&(xe=h(g,xe,Te),H+=Te.length),k(g,xe,te);var Be=new p(B,M?l.tokenize(Ce,M):Ce,oe,Ce);if(Q=h(g,xe,Be),ce&&h(g,Q,ce),te>1){var Ee={cause:B+","+$,reach:Ae};P(f,g,v,Q.prev,H,Ee),L&&Ee.reach>L.reach&&(L.reach=Ee.reach)}}}}}}function x(){var f={value:null,prev:null,next:null},g={value:null,prev:f,next:null};f.next=g,this.head=f,this.tail=g,this.length=0}function h(f,g,v){var C=g.next,T={value:v,prev:g,next:C};return g.next=T,C.prev=T,f.length++,T}function k(f,g,v){for(var C=g.next,T=0;T<v&&C!==f.tail;T++)C=C.next;g.next=C,C.prev=g,f.length-=T}function I(f){for(var g=[],v=f.head.next;v!==f.tail;)g.push(v.value),v=v.next;return g}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(f){var g=JSON.parse(f.data),v=g.language,C=g.code,T=g.immediateClose;r.postMessage(l.highlight(C,l.languages[v],v)),T&&r.close()},!1)),l;var E=l.util.currentScript();E&&(l.filename=E.src,E.hasAttribute("data-manual")&&(l.manual=!0));function A(){l.manual||l.highlightAll()}if(!l.manual){var z=document.readyState;z==="loading"||z==="interactive"&&E&&E.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return l}(a);m.exports&&(m.exports=e),typeof Xe<"u"&&(Xe.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(d,u){var n={};n["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[u]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};l["language-"+u]={pattern:/[\s\S]+/,inside:e.languages[u]};var p={};p[d]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return d}),"i"),lookbehind:!0,greedy:!0,inside:l},e.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(r,d){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[d,"language-"+d],inside:e.languages[d]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(r){var d=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+d.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+d.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+d.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+d.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:d,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var u=r.languages.markup;u&&(u.tag.addInlined("style","css"),u.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(typeof e>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",d=function(E,A){return"✖ Error "+E+" while fetching file: "+A},u="✖ Error: File does not exist or is empty",n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",p="loading",w="loaded",P="failed",x="pre[data-src]:not(["+l+'="'+w+'"]):not(['+l+'="'+p+'"])';function h(E,A,z){var f=new XMLHttpRequest;f.open("GET",E,!0),f.onreadystatechange=function(){f.readyState==4&&(f.status<400&&f.responseText?A(f.responseText):f.status>=400?z(d(f.status,f.statusText)):z(u))},f.send(null)}function k(E){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(E||"");if(A){var z=Number(A[1]),f=A[2],g=A[3];return f?g?[z,Number(g)]:[z,void 0]:[z,z]}}e.hooks.add("before-highlightall",function(E){E.selector+=", "+x}),e.hooks.add("before-sanity-check",function(E){var A=E.element;if(A.matches(x)){E.code="",A.setAttribute(l,p);var z=A.appendChild(document.createElement("CODE"));z.textContent=r;var f=A.getAttribute("data-src"),g=E.language;if(g==="none"){var v=(/\.(\w+)$/.exec(f)||[,"none"])[1];g=n[v]||v}e.util.setLanguage(z,g),e.util.setLanguage(A,g);var C=e.plugins.autoloader;C&&C.loadLanguages(g),h(f,function(T){A.setAttribute(l,w);var L=k(A.getAttribute("data-range"));if(L){var B=T.split(/\r\n?|\n/g),b=L[0],$=L[1]==null?B.length:L[1];b<0&&(b+=B.length),b=Math.max(0,Math.min(b-1,B.length)),$<0&&($+=B.length),$=Math.max(0,Math.min($,B.length)),T=B.slice(b,$).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(b+1))}z.textContent=T,e.highlightElement(z)},function(T){A.setAttribute(l,P),z.textContent=T})}}),e.plugins.fileHighlight={highlight:function(A){for(var z=(A||document).querySelectorAll(x),f=0,g;g=z[f++];)e.highlightElement(g)}};var I=!1;e.fileHighlight=function(){I||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),I=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}()}(De)),De.exports}var Dn=Fn();const Je=Bn(Dn);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};var et={},tt;function Vn(){return tt||(tt=1,function(m){function a(H,X){return H.replace(/<<(\d+)>>/g,function(te,Z){return"(?:"+X[+Z]+")"})}function e(H,X,te){return RegExp(a(H,X),"")}function r(H,X){for(var te=0;te<X;te++)H=H.replace(/<<self>>/g,function(){return"(?:"+H+")"});return H.replace(/<<self>>/g,"[^\\s\\S]")}var d={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function u(H){return"\\b(?:"+H.trim().replace(/ /g,"|")+")\\b"}var n=u(d.typeDeclaration),l=RegExp(u(d.type+" "+d.typeDeclaration+" "+d.contextual+" "+d.other)),p=u(d.typeDeclaration+" "+d.contextual+" "+d.other),w=u(d.type+" "+d.typeDeclaration+" "+d.other),P=r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),x=r(/\((?:[^()]|<<self>>)*\)/.source,2),h=/@?\b[A-Za-z_]\w*\b/.source,k=a(/<<0>>(?:\s*<<1>>)?/.source,[h,P]),I=a(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[p,k]),E=/\[\s*(?:,\s*)*\]/.source,A=a(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[I,E]),z=a(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[P,x,E]),f=a(/\(<<0>>+(?:,<<0>>+)+\)/.source,[z]),g=a(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[f,I,E]),v={keyword:l,punctuation:/[<>()?,.:[\]]/},C=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,T=/"(?:\\.|[^\\"\r\n])*"/.source,L=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;m.languages.csharp=m.languages.extend("clike",{string:[{pattern:e(/(^|[^$\\])<<0>>/.source,[L]),lookbehind:!0,greedy:!0},{pattern:e(/(^|[^@$\\])<<0>>/.source,[T]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[I]),lookbehind:!0,inside:v},{pattern:e(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[h,g]),lookbehind:!0,inside:v},{pattern:e(/(\busing\s+)<<0>>(?=\s*=)/.source,[h]),lookbehind:!0},{pattern:e(/(\b<<0>>\s+)<<1>>/.source,[n,k]),lookbehind:!0,inside:v},{pattern:e(/(\bcatch\s*\(\s*)<<0>>/.source,[I]),lookbehind:!0,inside:v},{pattern:e(/(\bwhere\s+)<<0>>/.source,[h]),lookbehind:!0},{pattern:e(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[A]),lookbehind:!0,inside:v},{pattern:e(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[g,w,h]),inside:v}],keyword:l,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),m.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),m.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e(/([(,]\s*)<<0>>(?=\s*:)/.source,[h]),lookbehind:!0,alias:"punctuation"}}),m.languages.insertBefore("csharp","class-name",{namespace:{pattern:e(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[x]),lookbehind:!0,alias:"class-name",inside:v},"return-type":{pattern:e(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[g,I]),inside:v,alias:"class-name"},"constructor-invocation":{pattern:e(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[g]),lookbehind:!0,inside:v,alias:"class-name"},"generic-method":{pattern:e(/<<0>>\s*<<1>>(?=\s*\()/.source,[h,P]),inside:{function:e(/^<<0>>/.source,[h]),generic:{pattern:RegExp(P),alias:"class-name",inside:v}}},"type-list":{pattern:e(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[n,k,h,g,l.source,x,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:e(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[k,x]),lookbehind:!0,greedy:!0,inside:m.languages.csharp},keyword:l,"class-name":{pattern:RegExp(g),greedy:!0,inside:v},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var B=T+"|"+C,b=a(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[B]),$=r(a(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[b]),2),S=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,M=a(/<<0>>(?:\s*\(<<1>>*\))?/.source,[I,$]);m.languages.insertBefore("csharp","class-name",{attribute:{pattern:e(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[S,M]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e(/^<<0>>(?=\s*:)/.source,[S]),alias:"keyword"},"attribute-arguments":{pattern:e(/\(<<0>>*\)/.source,[$]),inside:m.languages.csharp},"class-name":{pattern:RegExp(I),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var j=/:[^}\r\n]+/.source,G=r(a(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[b]),2),oe=a(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[G,j]),ae=r(a(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[B]),2),de=a(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[ae,j]);function Q(H,X){return{interpolation:{pattern:e(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[H]),lookbehind:!0,inside:{"format-string":{pattern:e(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[X,j]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:m.languages.csharp}}},string:/[\s\S]+/}}m.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[oe]),lookbehind:!0,greedy:!0,inside:Q(oe,G)},{pattern:e(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[de]),lookbehind:!0,greedy:!0,inside:Q(de,ae)}],char:{pattern:RegExp(C),greedy:!0}}),m.languages.dotnet=m.languages.cs=m.languages.csharp}(Prism)),et}Vn();(function(){if(typeof Prism>"u"||typeof document>"u")return;function m(x){var h=Prism.plugins.customClass;return h?h.apply(x,"none"):x}var a={"(":")","[":"]","{":"}"},e={"(":"brace-round","[":"brace-square","{":"brace-curly"},r={"${":"{"},d=12,u=0,n=/^(pair-\d+-)(close|open)$/;function l(x){var h=n.exec(x.id);return document.querySelector("#"+h[1]+(h[2]=="open"?"close":"open"))}function p(){Prism.util.isActive(this,"brace-hover",!0)&&[this,l(this)].forEach(function(x){x.classList.add(m("brace-hover"))})}function w(){[this,l(this)].forEach(function(x){x.classList.remove(m("brace-hover"))})}function P(){Prism.util.isActive(this,"brace-select",!0)&&[this,l(this)].forEach(function(x){x.classList.add(m("brace-selected"))})}Prism.hooks.add("complete",function(x){var h=x.element,k=h.parentElement;if(!(!k||k.tagName!="PRE")){var I=[];if(Prism.util.isActive(h,"match-braces")&&I.push("(","[","{"),I.length!=0){k.__listenerAdded||(k.addEventListener("mousedown",function(){var g=k.querySelector("code"),v=m("brace-selected");Array.prototype.slice.call(g.querySelectorAll("."+v)).forEach(function(C){C.classList.remove(v)})}),Object.defineProperty(k,"__listenerAdded",{value:!0}));var E=Array.prototype.slice.call(h.querySelectorAll("span."+m("token")+"."+m("punctuation"))),A=[];I.forEach(function(f){for(var g=a[f],v=m(e[f]),C=[],T=[],L=0;L<E.length;L++){var B=E[L];if(B.childElementCount==0){var b=B.textContent;b=r[b]||b,b===f?(A.push({index:L,open:!0,element:B}),B.classList.add(v),B.classList.add(m("brace-open")),T.push(L)):b===g&&(A.push({index:L,open:!1,element:B}),B.classList.add(v),B.classList.add(m("brace-close")),T.length&&C.push([L,T.pop()]))}}C.forEach(function($){var S="pair-"+u+++"-",M=E[$[0]],j=E[$[1]];M.id=S+"open",j.id=S+"close",[M,j].forEach(function(G){G.addEventListener("mouseenter",p),G.addEventListener("mouseleave",w),G.addEventListener("click",P)})})});var z=0;A.sort(function(f,g){return f.index-g.index}),A.forEach(function(f){f.open?(f.element.classList.add(m("brace-level-"+(z%d+1))),z++):(z=Math.max(0,z-1),f.element.classList.add(m("brace-level-"+(z%d+1))))})}}})})();(function(){if(typeof Prism>"u"||typeof document>"u")return;var m=[],a={},e=function(){};Prism.plugins.toolbar={};var r=Prism.plugins.toolbar.registerButton=function(n,l){var p;if(typeof l=="function"?p=l:p=function(w){var P;return typeof l.onClick=="function"?(P=document.createElement("button"),P.type="button",P.addEventListener("click",function(){l.onClick.call(this,w)})):typeof l.url=="string"?(P=document.createElement("a"),P.href=l.url):P=document.createElement("span"),l.className&&P.classList.add(l.className),P.textContent=l.text,P},n in a){console.warn('There is a button with the key "'+n+'" registered already.');return}m.push(a[n]=p)};function d(n){for(;n;){var l=n.getAttribute("data-toolbar-order");if(l!=null)return l=l.trim(),l.length?l.split(/\s*,\s*/g):[];n=n.parentElement}}var u=Prism.plugins.toolbar.hook=function(n){var l=n.element.parentNode;if(!(!l||!/pre/i.test(l.nodeName))&&!l.parentNode.classList.contains("code-toolbar")){var p=document.createElement("div");p.classList.add("code-toolbar"),l.parentNode.insertBefore(p,l),p.appendChild(l);var w=document.createElement("div");w.classList.add("toolbar");var P=m,x=d(n.element);x&&(P=x.map(function(h){return a[h]||e})),P.forEach(function(h){var k=h(n);if(k){var I=document.createElement("div");I.classList.add("toolbar-item"),I.appendChild(k),w.appendChild(I)}}),p.appendChild(w)}};r("label",function(n){var l=n.element.parentNode;if(!(!l||!/pre/i.test(l.nodeName))&&l.hasAttribute("data-label")){var p,w,P=l.getAttribute("data-label");try{w=document.querySelector("template#"+P)}catch{}return w?p=w.content:(l.hasAttribute("data-url")?(p=document.createElement("a"),p.href=l.getAttribute("data-url")):p=document.createElement("span"),p.textContent=P),p}}),Prism.hooks.add("complete",u)})();(function(){if(!(typeof Prism>"u")){var m=/\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&!$'()*,;@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/,a=/\b\S+@[\w.]+[a-z]{2}/,e=/\[([^\]]+)\]\(([^)]+)\)/,r=["comment","url","attr-value","string"];Prism.plugins.autolinker={processGrammar:function(d){!d||d["url-link"]||(Prism.languages.DFS(d,function(u,n,l){r.indexOf(l)>-1&&!Array.isArray(n)&&(n.pattern||(n=this[u]={pattern:n}),n.inside=n.inside||{},l=="comment"&&(n.inside["md-link"]=e),l=="attr-value"?Prism.languages.insertBefore("inside","punctuation",{"url-link":m},n):n.inside["url-link"]=m,n.inside["email-link"]=a)}),d["url-link"]=m,d["email-link"]=a)}},Prism.hooks.add("before-highlight",function(d){Prism.plugins.autolinker.processGrammar(d.grammar)}),Prism.hooks.add("wrap",function(d){if(/-link$/.test(d.type)){d.tag="a";var u=d.content;if(d.type=="email-link"&&u.indexOf("mailto:")!=0)u="mailto:"+u;else if(d.type=="md-link"){var n=d.content.match(e);u=n[2],d.content=n[1]}d.attributes.href=u;try{d.content=decodeURIComponent(d.content)}catch{}}})}})();var nt={},lt;function Mn(){return lt||(lt=1,function(){if(typeof Prism>"u"||typeof document>"u")return;var m="line-numbers",a=/\n(?!$)/g,e=Prism.plugins.lineNumbers={getLine:function(n,l){if(!(n.tagName!=="PRE"||!n.classList.contains(m))){var p=n.querySelector(".line-numbers-rows");if(p){var w=parseInt(n.getAttribute("data-start"),10)||1,P=w+(p.children.length-1);l<w&&(l=w),l>P&&(l=P);var x=l-w;return p.children[x]}}},resize:function(n){r([n])},assumeViewportIndependence:!0};function r(n){if(n=n.filter(function(p){var w=d(p),P=w["white-space"];return P==="pre-wrap"||P==="pre-line"}),n.length!=0){var l=n.map(function(p){var w=p.querySelector("code"),P=p.querySelector(".line-numbers-rows");if(!(!w||!P)){var x=p.querySelector(".line-numbers-sizer"),h=w.textContent.split(a);x||(x=document.createElement("span"),x.className="line-numbers-sizer",w.appendChild(x)),x.innerHTML="0",x.style.display="block";var k=x.getBoundingClientRect().height;return x.innerHTML="",{element:p,lines:h,lineHeights:[],oneLinerHeight:k,sizer:x}}}).filter(Boolean);l.forEach(function(p){var w=p.sizer,P=p.lines,x=p.lineHeights,h=p.oneLinerHeight;x[P.length-1]=void 0,P.forEach(function(k,I){if(k&&k.length>1){var E=w.appendChild(document.createElement("span"));E.style.display="block",E.textContent=k}else x[I]=h})}),l.forEach(function(p){for(var w=p.sizer,P=p.lineHeights,x=0,h=0;h<P.length;h++)P[h]===void 0&&(P[h]=w.children[x++].getBoundingClientRect().height)}),l.forEach(function(p){var w=p.sizer,P=p.element.querySelector(".line-numbers-rows");w.style.display="none",w.innerHTML="",p.lineHeights.forEach(function(x,h){P.children[h].style.height=x+"px"})})}}function d(n){return n?window.getComputedStyle?getComputedStyle(n):n.currentStyle||null:null}var u=void 0;window.addEventListener("resize",function(){e.assumeViewportIndependence&&u===window.innerWidth||(u=window.innerWidth,r(Array.prototype.slice.call(document.querySelectorAll("pre."+m))))}),Prism.hooks.add("complete",function(n){if(n.code){var l=n.element,p=l.parentNode;if(!(!p||!/pre/i.test(p.nodeName))&&!l.querySelector(".line-numbers-rows")&&Prism.util.isActive(l,m)){l.classList.remove(m),p.classList.add(m);var w=n.code.match(a),P=w?w.length+1:1,x,h=new Array(P+1).join("<span></span>");x=document.createElement("span"),x.setAttribute("aria-hidden","true"),x.className="line-numbers-rows",x.innerHTML=h,p.hasAttribute("data-start")&&(p.style.counterReset="linenumber "+(parseInt(p.getAttribute("data-start"),10)-1)),n.element.appendChild(x),r([p]),Prism.hooks.run("line-numbers",n)}}}),Prism.hooks.add("line-numbers",function(n){n.plugins=n.plugins||{},n.plugins.lineNumbers=!0})}()),nt}Mn();(function(){if(typeof Prism>"u"||typeof document>"u")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function m(u,n){u.addEventListener("click",function(){e(n)})}function a(u){var n=document.createElement("textarea");n.value=u.getText(),n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{var l=document.execCommand("copy");setTimeout(function(){l?u.success():u.error()},1)}catch(p){setTimeout(function(){u.error(p)},1)}document.body.removeChild(n)}function e(u){navigator.clipboard?navigator.clipboard.writeText(u.getText()).then(u.success,function(){a(u)}):a(u)}function r(u){window.getSelection().selectAllChildren(u)}function d(u){var n={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},l="data-prismjs-";for(var p in n){for(var w=l+p,P=u;P&&!P.hasAttribute(w);)P=P.parentElement;P&&(n[p]=P.getAttribute(w))}return n}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(u){var n=u.element,l=d(n),p=document.createElement("button");p.className="copy-to-clipboard-button",p.setAttribute("type","button");var w=document.createElement("span");return p.appendChild(w),x("copy"),m(p,{getText:function(){return n.textContent},success:function(){x("copy-success"),P()},error:function(){x("copy-error"),setTimeout(function(){r(n)},1),P()}}),p;function P(){setTimeout(function(){x("copy")},l["copy-timeout"])}function x(h){w.textContent=l[h],p.setAttribute("data-copy-state",h)}})})();(function(){typeof Prism>"u"||Prism.hooks.add("wrap",function(m){m.type==="keyword"&&m.classes.push("keyword-"+m.content)})})();var Ve={exports:{}},rt;function Rn(){return rt||(rt=1,function(m){(function(){if(typeof Prism>"u")return;var a=Object.assign||function(n,l){for(var p in l)l.hasOwnProperty(p)&&(n[p]=l[p]);return n};function e(n){this.defaults=a({},n)}function r(n){return n.replace(/-(\w)/g,function(l,p){return p.toUpperCase()})}function d(n){for(var l=0,p=0;p<n.length;++p)n.charCodeAt(p)==9&&(l+=3);return n.length+l}var u={"remove-trailing":"boolean","remove-indent":"boolean","left-trim":"boolean","right-trim":"boolean","break-lines":"number",indent:"number","remove-initial-line-feed":"boolean","tabs-to-spaces":"number","spaces-to-tabs":"number"};e.prototype={setDefaults:function(n){this.defaults=a(this.defaults,n)},normalize:function(n,l){l=a(this.defaults,l);for(var p in l){var w=r(p);p!=="normalize"&&w!=="setDefaults"&&l[p]&&this[w]&&(n=this[w].call(this,n,l[p]))}return n},leftTrim:function(n){return n.replace(/^\s+/,"")},rightTrim:function(n){return n.replace(/\s+$/,"")},tabsToSpaces:function(n,l){return l=l|0||4,n.replace(/\t/g,new Array(++l).join(" "))},spacesToTabs:function(n,l){return l=l|0||4,n.replace(RegExp(" {"+l+"}","g"),"	")},removeTrailing:function(n){return n.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(n){return n.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(n){var l=n.match(/^[^\S\n\r]*(?=\S)/gm);return!l||!l[0].length||(l.sort(function(p,w){return p.length-w.length}),!l[0].length)?n:n.replace(RegExp("^"+l[0],"gm"),"")},indent:function(n,l){return n.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++l).join("	")+"$&")},breakLines:function(n,l){l=l===!0?80:l|0||80;for(var p=n.split(`
`),w=0;w<p.length;++w)if(!(d(p[w])<=l)){for(var P=p[w].split(/(\s+)/g),x=0,h=0;h<P.length;++h){var k=d(P[h]);x+=k,x>l&&(P[h]=`
`+P[h],x=k)}p[w]=P.join("")}return p.join(`
`)}},m.exports&&(m.exports=e),Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(n){var l=Prism.plugins.NormalizeWhitespace;if(!(n.settings&&n.settings["whitespace-normalization"]===!1)&&Prism.util.isActive(n.element,"whitespace-normalization",!0)){if((!n.element||!n.element.parentNode)&&n.code){n.code=l.normalize(n.code,n.settings);return}var p=n.element.parentNode;if(!(!n.code||!p||p.nodeName.toLowerCase()!=="pre")){n.settings==null&&(n.settings={});for(var w in u)if(Object.hasOwnProperty.call(u,w)){var P=u[w];if(p.hasAttribute("data-"+w))try{var x=JSON.parse(p.getAttribute("data-"+w)||"true");typeof x===P&&(n.settings[w]=x)}catch{}}for(var h=p.childNodes,k="",I="",E=!1,A=0;A<h.length;++A){var z=h[A];z==n.element?E=!0:z.nodeName==="#text"&&(E?I+=z.nodeValue:k+=z.nodeValue,p.removeChild(z),--A)}if(!n.element.children.length||!Prism.plugins.KeepMarkup)n.code=k+n.code+I,n.code=l.normalize(n.code,n.settings);else{var f=k+n.element.innerHTML+I;n.element.innerHTML=l.normalize(f,n.settings),n.code=n.element.textContent}}}})})()}(Ve)),Ve.exports}Rn();const On={key:1,class:"line-numbers","data-lenis-prevent":""},pe=K({__name:"code",props:{inline:Boolean,lang:String},setup(m){return Oe(()=>{Je.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0,"break-lines":100}),Je.highlightAll()}),(a,e)=>m.inline?(_(),F("code",{key:0,class:J(`lang-${m.lang} match-braces`)},[U(a.$slots,"default")],2)):(_(),F("pre",On,[e[2]||(e[2]=t("      ")),o("code",{class:J(`lang-${m.lang} match-braces`)},[e[0]||(e[0]=t(`
        `)),U(a.$slots,"default"),e[1]||(e[1]=t(`
    `))],2),e[3]||(e[3]=t(`
  `))]))}}),Nn={class:"flex items-center"},qn={class:"w-full"},le=K({__name:"docNotice",props:{type:String},setup(m){const a=m,e=R(()=>a.type=="warning"?"i-lucide-triangle-alert":a.type=="danger"?"i-lucide-octagon-alert":a.type=="tip"?"i-lucide-lightbulb":a.type=="success"?"i-lucide-check-check":"i-lucide-info"),r=R(()=>a.type=="warning"?"#f0b100":a.type=="danger"?"#fb2c36":a.type=="tip"?"#d2afff":a.type=="success"?"hsl(130, 51%, 65%)":"#a7ccff"),d=R(()=>a.type=="tip"?"secondary":a.type);return(u,n)=>{const l=ue,p=Se,w=me;return _(),V(w,{class:"m-2",color:d.value},{default:i(()=>[o("div",Nn,[s(l,{name:e.value,class:"!size-5 min-w-5",style:he(`color: ${r.value};`)},null,8,["name","style"]),n[0]||(n[0]=t()),s(p,{orientation:"vertical",class:"h-7 mx-3",ui:{border:"dark:border-gray-600 h-full"}}),n[1]||(n[1]=t()),o("div",qn,[U(u.$slots,"default")])])]),_:3},8,["color"])}}}),Un={class:"flex flex-col mt-22 mb-16 items-center"},Kn={class:"flex items-center Varela text-3xl"},Wn={class:"flex gap-1"},jn={class:"flex gap-1"},Hn=K({__name:"buildingTheApp",setup(m){return(a,e)=>{const r=ue,d=pe,u=me;return _(),F("div",null,[o("div",Un,[o("div",Kn,[s(r,{name:"i-lucide-drill",class:"mr-2"}),e[0]||(e[0]=t(` Building the app
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},"Steps to produce the published release",-1))]),e[23]||(e[23]=t()),s(u,{class:"w-full m-2"},{default:i(()=>[e[19]||(e[19]=t(`
      To build the app:
      `)),o("ol",null,[o("li",null,[e[5]||(e[5]=t(`
          Open
          `)),s(q,{url:"https://visualstudio.microsoft.com/#vs-section",target:"_blank"},{default:i(()=>e[3]||(e[3]=[t(`
            Visual Studio
          `)])),_:1,__:[3]}),e[6]||(e[6]=t(`
           & clone
          `)),s(q,{url:"https://github.com/faeq-f/quokka/",target:"_blank"},{default:i(()=>e[4]||(e[4]=[t(`
            Quokka
          `)])),_:1,__:[4]})]),e[14]||(e[14]=t()),e[15]||(e[15]=o("li",null,`
          Build the solution
        `,-1)),e[16]||(e[16]=t()),o("li",null,[o("span",Wn,[e[8]||(e[8]=t(`
            Copy the Quokka folder (in the build path - normally
            `)),s(d,{inline:""},{default:i(()=>e[7]||(e[7]=[t(" bin ")])),_:1,__:[7]}),e[9]||(e[9]=t(`
            ) to your desired location (for e.g., to a USB drive)
          `))])]),e[17]||(e[17]=t()),o("li",null,[o("span",jn,[e[11]||(e[11]=t(`
            (Download / Delete) any plugins you (do / do not) wish to use (in
            the
            `)),s(d,{inline:""},{default:i(()=>e[10]||(e[10]=[t(" PlugBoard ")])),_:1,__:[10]}),e[12]||(e[12]=t(`)
          `))]),e[13]||(e[13]=t(`
          (Some of the recognized Plugins may be included with the build)
        `))])]),e[20]||(e[20]=t()),e[21]||(e[21]=o("br",null,null,-1)),e[22]||(e[22]=t()),s(le,{type:"warning",style:{width:"calc(100% - 1rem)"}},{default:i(()=>e[18]||(e[18]=[t(`
        The app comes as portable by design - there are no separate build
        instructions for a non-portable version.
      `)])),_:1,__:[18]})]),_:1,__:[19,20,21,22]})])}}}),Qn={key:0,class:"m-table-header"},Gn={key:0,class:"m-table-spacer"},Yn={class:"m-table-header-title"},Xn={key:1,class:"m-table-header-search"},Zn={key:0},Jn={key:1},el={key:0,class:"m-table-sort-icon-wrapper"},tl={class:"maz-text-center maz-text-muted"},nl={key:1,class:"m-table-footer"},ll={key:0,class:"m-table-footer-pagination"},rl={class:"m-table-footer-pagination-items-per-page"},il={class:"maz-hidden maz-text-sm tab-s:maz-block"},sl={key:0,class:"maz-whitespace-nowrap maz-text-sm"},al={class:"m-table-footer-pagination-buttons"},ol="maz-table",ul=K({__name:"MazTable",props:{tableClass:{default:void 0},tableStyle:{type:[Boolean,null,String,Object,Array],default:void 0},modelValue:{default:void 0},size:{default:"md"},inputSize:{},title:{default:void 0},headers:{default:void 0},sortable:{type:Boolean},headersAlign:{default:"left"},rows:{default:void 0},hoverable:{type:Boolean},search:{type:Boolean},noSearchInRow:{type:Boolean},searchPlaceholder:{default:"Search"},noSearchBy:{type:Boolean},searchByPlaceholder:{default:"Search by"},searchByAllLabel:{default:"All"},searchQuery:{default:void 0},backgroundOdd:{type:Boolean},backgroundEven:{type:Boolean},elevation:{type:Boolean},divider:{type:Boolean},caption:{default:void 0},captionSide:{default:"bottom"},pagination:{type:Boolean},page:{default:1},pageSize:{default:20},totalPages:{default:void 0},paginationAllLabel:{default:"All"},noPaginateRows:{type:Boolean},totalItems:{default:void 0},loading:{type:Boolean},selectable:{type:Boolean},selectedKey:{default:void 0},tableLayout:{default:void 0},color:{default:"primary"},translations:{},roundedSize:{default:"lg"},scrollable:{type:Boolean,default:!1}},emits:["update:model-value","update:search-query","update:page","update:page-size"],setup(m,{emit:a}){Nt(y=>({"08a80db6":y.tableLayout,df8ff50a:y.captionSide}));const e=m,r=a,d=ie(()=>se(()=>import("./DAo3N5vH.js"),__vite__mapDeps([0,1,2]),import.meta.url)),u=ie(()=>se(()=>import("./DXgEmC9O.js"),__vite__mapDeps([3,1,2]),import.meta.url)),n=ie(()=>se(()=>import("./DBQuTtFc.js"),__vite__mapDeps([4,1,2]),import.meta.url)),l=ie(()=>se(()=>import("./BqJTAKye.js"),__vite__mapDeps([5,1,2]),import.meta.url)),p=ie(()=>se(()=>import("./DvT9dSDY.js"),__vite__mapDeps([6,1,2,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url)),w=ie(()=>se(()=>import("./CSJeJvQW.js"),__vite__mapDeps([18,19,1,2,20,7,8,9,10,11,12,13,14,15,16,21]),import.meta.url)),P=ie(()=>se(()=>import("./BRkmxbXx.js"),__vite__mapDeps([22,1,2,19,7,8,9,10,11,12,13,14,15,16,23]),import.meta.url)),x=ie(()=>se(()=>import("./g0dG2aP-.js"),__vite__mapDeps([24,1,2,7,8,9,10,11,12,13,14,15,16,25]),import.meta.url)),h=ie(()=>se(()=>import("./BagbO50c.js"),__vite__mapDeps([26,1,2,19,22,7,8,9,10,11,12,13,14,15,16,23,27]),import.meta.url)),k=ie(()=>se(()=>import("./Bi5RLCpu.js"),__vite__mapDeps([28,29,1,2,7,8,9,10,11,12,13,14,15,16,30]),import.meta.url)),I=ie(()=>se(()=>import("./OcFKe0aL.js"),__vite__mapDeps([31,29,1,2,7,8,9,10,11,12,13,14,15,16,32]),import.meta.url)),E=ie(()=>se(()=>import("./4hD-HkMk.js"),__vite__mapDeps([33,29,1,2,7,8,9,10,11,12,13,14,15,16,34]),import.meta.url)),A={noResults:"No results",actionHeader:"Actions",searchByAllLabel:"All",searchByPlaceholder:"Search by",searchPlaceholder:"Search",paginationAllLabel:"All",paginationRowsPerPage:"Rows per page",paginationOf:"of"},z=R(()=>{const{translations:y,searchByAllLabel:O,searchByPlaceholder:D,searchPlaceholder:ne,paginationAllLabel:re}=e;return{...A,...y,searchByAllLabel:O,searchByPlaceholder:D,searchPlaceholder:ne,paginationAllLabel:re}}),f=R(()=>e.divider&&!e.backgroundEven&&!e.backgroundOdd),{size:g,hoverable:v,backgroundEven:C,backgroundOdd:T}=Ie(e);qt(ol,{size:g,hoverable:v,backgroundEven:C,backgroundOdd:T});const L=Y(Ue()),B=R(()=>e.selectable||!!e.selectedKey),b=Y(e.page);we(()=>e.page,y=>{b.value=y});const $=R({get:()=>b.value,set:y=>{b.value=y,r("update:page",y)}}),S=R(()=>[{label:z.value.paginationAllLabel,value:Number.POSITIVE_INFINITY},{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:50,value:50},{label:100,value:100},{label:200,value:200}]),M=Y(e.pageSize);we(()=>e.pageSize,y=>{M.value=y});const j=R({get:()=>M.value,set:y=>{M.value=y,r("update:page-size",y)}}),G=R(()=>{var y;return e.totalPages??(j.value===Number.POSITIVE_INFINITY||!((y=e.rows)!=null&&y.length))?1:Math.ceil(e.rows.length/j.value)});function oe(){$.value=1}function ae(){$.value=G.value}function de(){$.value=$.value-1}function Q(){$.value=$.value+1}const H=R(()=>{if(!e.pagination||e.noPaginateRows||j.value===Number.POSITIVE_INFINITY)return L.value;const y=(b.value-1)*j.value,O=y+j.value;return L.value.slice(y,O)});we(()=>[e.rows,e.modelValue],()=>{L.value=Ue()});const X=Y(),te=Y(),Z=Y(Ee()),_e=Y(),ge=R(()=>[{label:e.searchByAllLabel,value:null},...Z.value.map(y=>({label:y.label,value:y.key}))]),ve=Y(e.searchQuery);we(()=>e.searchQuery,y=>{ve.value=y});const be=R({get:()=>ve.value,set:y=>{ve.value=y,r("update:search-query",y)}});function Ce(y){return[...y].sort((O,D)=>{if(X.value===void 0||te.value===void 0)return 0;const ne=O[Z.value[X.value].key],re=D[Z.value[X.value].key];return typeof ne=="string"&&typeof re=="string"?te.value==="ASC"?ne.localeCompare(re):re.localeCompare(ne):te.value==="ASC"?ne-re:re-ne})}function Te(y){if(e.noSearchInRow||typeof be.value!="string")return H.value;const O=be.value.toLowerCase();return[...y].filter(D=>_e.value?String(D[_e.value]).toLowerCase().includes(O):Object.values(D).some(ne=>typeof ne=="string"||typeof ne=="number"||typeof ne=="boolean"?String(ne).toLowerCase().includes(O):!1))}const ce=R(()=>{const y=Te(H.value);return Ce(y)}),Ae=at(),xe=R(()=>e.search||!!e.title||!!Ae.title),Be=R(()=>e.pagination);function Ee(){var y;return((y=e.headers)==null?void 0:y.map(O=>typeof O=="string"?{label:O,align:e.headersAlign}:{align:e.headersAlign,thHeaders:O.headers,...O}))??[]}function Ue(){var y;return((y=e.rows)==null?void 0:y.map(O=>{var D;return{selected:(D=e.modelValue)==null?void 0:D.includes(e.selectedKey?O[e.selectedKey]:O),...O}}))??[]}function wt(y){if(y===X.value){const O=te.value==="DESC"?"ASC":void 0;te.value=te.value===void 0?"DESC":O}else te.value="DESC";X.value=te.value===void 0?void 0:y}const Ke=R({get:()=>ce.value.every(y=>y.selected)??!1,set:xt});function xt(y){for(const O of ce.value)O.selected=y;Fe()}function kt(y,O){ce.value[O].selected=y,Fe()}function Fe(y){y=y??We();const O=y!=null&&y.length?y:void 0;r("update:model-value",O)}function We(){return ce.value.filter(y=>y.selected).map(y=>e.selectedKey?y[e.selectedKey]:y)}return Ut(()=>{const y=We();y!=null&&y.length&&Fe(y)}),(y,O)=>(_(),F("div",{class:J(["m-table m-reset-css",{"--has-header":xe.value}])},[xe.value?(_(),F("div",Qn,[y.title||y.$slots.title?(_(),F("div",Gn,[U(y.$slots,"title",{},()=>[o("span",Yn,N(y.title),1)],!0)])):W("v-if",!0),y.search?(_(),F("div",Xn,[y.noSearchBy?W("v-if",!0):(_(),V(c(h),{key:0,modelValue:_e.value,"onUpdate:modelValue":O[0]||(O[0]=D=>_e.value=D),"rounded-size":y.roundedSize,color:y.color,style:{width:"8rem"},placeholder:z.value.searchByPlaceholder,size:y.inputSize??c(g),options:ge.value},null,8,["modelValue","rounded-size","color","placeholder","size","options"])),s(c(P),{modelValue:be.value,"onUpdate:modelValue":O[1]||(O[1]=D=>be.value=D),size:y.inputSize??c(g),"rounded-size":y.roundedSize,color:y.color,debounce:300,placeholder:z.value.searchPlaceholder,"left-icon":c(l)},null,8,["modelValue","size","rounded-size","color","placeholder","left-icon"])])):W("v-if",!0)])):W("v-if",!0),o("div",{class:J(["m-table-wrapper",[`--rounded-${y.roundedSize}`,{"--scrollable":y.scrollable}]])},[o("table",{class:J([{"--elevation":y.elevation,"--has-layout":y.tableLayout},y.tableClass]),style:he(y.tableStyle)},[y.caption||y.$slots.caption?(_(),F("caption",Zn,[U(y.$slots,"caption",{},()=>[t(N(y.caption),1)],!0)])):W("v-if",!0),Z.value?(_(),F("thead",Jn,[U(y.$slots,"thead",{},()=>[s(c(I),{"no-hoverable":""},{default:i(()=>[B.value?(_(),V(c(E),{key:0,align:"left",class:J([`--${c(g)}`,"m-table-select-column"])},{default:i(()=>[s(c(w),{modelValue:Ke.value,"onUpdate:modelValue":O[2]||(O[2]=D=>Ke.value=D),size:"sm"},null,8,["modelValue"])]),_:1},8,["class"])):W("v-if",!0),(_(!0),F(ee,null,fe(Z.value,(D,ne)=>(_(),V(c(E),{key:ne,scope:D.scope,align:D.align,rowspan:D.rowspan,colspan:D.colspan,headers:D.thHeaders,style:he({width:D.width,textAlign:D.align}),class:J(["maz-group",[{"--hidden":D.hidden,"--sortable":D.sortable??y.sortable},D.classes,`--${c(g)}`]]),onClick:re=>(D.sortable??y.sortable)&&wt(ne)},{default:i(()=>[o("span",{class:J({"maz-sr-only":D.srOnly})},[U(y.$slots,"header",{header:D,label:D.label},()=>[U(y.$slots,`header-label-${D.key}`,{header:D,label:D.label},()=>[t(N(D.label),1)],!0),D.sortable??y.sortable?(_(),F("div",el,[s(c(d),{class:J(["m-table-sort-icon maz-hidden group-hover:maz-block",{"--sorted":ne===X.value,"--up":te.value==="DESC","--down":te.value==="ASC"}])},null,8,["class"])])):W("v-if",!0)],!0)],2)]),_:2},1032,["scope","align","rowspan","colspan","headers","style","class","onClick"]))),128)),y.$slots.actions?(_(),V(c(E),{key:1,align:"left",class:J(`--${c(g)}`)},{default:i(()=>[U(y.$slots,"actions-header",{},()=>[t(N(z.value.actionHeader),1)],!0)]),_:3},8,["class"])):W("v-if",!0)]),_:3})],!0)])):W("v-if",!0),y.loading?(_(),V(c(x),{key:2,color:y.color,class:"!maz-absolute"},null,8,["color"])):W("v-if",!0),o("tbody",{class:J({"--divider":f.value})},[U(y.$slots,"default",{},()=>[ce.value.length>0?(_(!0),F(ee,{key:0},fe(ce.value,(D,ne)=>(_(),V(c(I),{key:ne,class:J(D.classes),onClick:re=>D.action&&D.action(D)},{default:i(()=>[B.value?(_(),V(c(k),{key:0,class:"m-table-select-column"},{default:i(()=>[U(y.$slots,"select",{row:D,selected:D.selected},()=>[s(c(w),{size:"sm","model-value":D.selected,"onUpdate:modelValue":re=>kt(re,ne)},null,8,["model-value","onUpdate:modelValue"])],!0)]),_:2},1024)):W("v-if",!0),(_(!0),F(ee,null,fe(Z.value,({key:re,align:St,classes:_t},Ct)=>(_(),V(c(k),{key:Ct,align:St,class:J(_t)},{default:i(()=>[re?U(y.$slots,"cell",{key:0,row:D,value:D[re]},()=>[U(y.$slots,`cell-${re}`,{row:D,value:D[re]},()=>[t(N(D[re]),1)],!0)],!0):W("v-if",!0)]),_:2},1032,["align","class"]))),128)),y.$slots.actions?(_(),V(c(k),{key:1},{default:i(()=>[U(y.$slots,"actions",{row:D},void 0,!0)]),_:2},1024)):W("v-if",!0)]),_:2},1032,["class","onClick"]))),128)):(_(),V(c(I),{key:1},{default:i(()=>[s(c(k),{colspan:Z.value.length+(B.value?1:0)+(y.$slots.actions?1:0)},{default:i(()=>[U(y.$slots,"no-results",{},()=>[o("p",tl,[U(y.$slots,"no-results-text",{},()=>[t(N(z.value.noResults),1)],!0)])],!0)]),_:3},8,["colspan"])]),_:3}))],!0)],2)],6)],2),Be.value?(_(),F("div",nl,[O[4]||(O[4]=o("div",{class:"m-table-spacer"},null,-1)),y.pagination?(_(),F("div",ll,[o("div",rl,[o("span",il,N(z.value.paginationRowsPerPage),1),s(c(h),{modelValue:j.value,"onUpdate:modelValue":O[3]||(O[3]=D=>j.value=D),options:S.value,"rounded-size":y.roundedSize,size:y.inputSize??c(g),color:y.color,"list-position":"top",style:{width:"5rem"}},null,8,["modelValue","options","rounded-size","size","color"])]),G.value?(_(),F("span",sl,N($.value)+" - "+N(ce.value.length)+" "+N(z.value.paginationOf)+" "+N(G.value),1)):W("v-if",!0),o("div",al,[s(c(p),{disabled:$.value===1,size:y.inputSize??c(g),color:"transparent","rounded-size":y.roundedSize,"no-elevation":"",onClick:oe},{default:i(()=>[s(c(u),{class:"maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),s(c(p),{disabled:$.value===1,size:y.inputSize??c(g),color:"transparent","rounded-size":y.roundedSize,"no-elevation":"",onClick:de},{default:i(()=>[s(c(n),{class:"maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),s(c(p),{disabled:$.value===G.value,size:y.inputSize??c(g),color:"transparent","rounded-size":y.roundedSize,"no-elevation":"",onClick:Q},{default:i(()=>[s(c(n),{class:"maz-rotate-180 maz-text-base"})]),_:1},8,["disabled","size","rounded-size"]),s(c(p),{disabled:$.value===G.value,size:y.inputSize??c(g),color:"transparent","rounded-size":y.roundedSize,"no-elevation":"",onClick:ae},{default:i(()=>[s(c(u),{class:"maz-rotate-180 maz-text-base"})]),_:1},8,["disabled","size","rounded-size"])])])):W("v-if",!0)])):W("v-if",!0)],2))}}),dl=(m,a)=>{const e=m.__vccOpts||m;for(const[r,d]of a)e[r]=d;return e},ze=dl(ul,[["__scopeId","data-v-fc9c2ba6"]]),pl={class:"flex flex-col mt-22 mb-16 items-center"},ml={class:"flex items-center Varela text-3xl"},fl=K({__name:"commands",setup(m){const a=ut(),e=a.pluginsList.map(d=>d.specialCommands.map(u=>({...u,plugin:d.name}))).flat(),r=a.pluginsList.map(d=>d.commandSignifiers.map(u=>({...u,plugin:d.name}))).flat();return(d,u)=>{const n=ue,l=Se,p=pe,w=ze,P=Le;return _(),F("div",null,[o("div",pl,[o("div",ml,[s(n,{name:"i-lucide-zap",class:"mr-2"}),u[0]||(u[0]=t(` Commands
      `))]),u[1]||(u[1]=t()),u[2]||(u[2]=o("div",{class:"text-md outfit"},"Special commands & command signifiers",-1))]),u[17]||(u[17]=t()),s(le,{type:"tip",style:{width:"100%"}},{default:i(()=>[u[4]||(u[4]=t(`
      Please check the
      `)),s(q,{url:"/documentation?section=api-documentation"},{default:i(()=>u[3]||(u[3]=[t(`
        API Documentation
      `)])),_:1,__:[3]}),u[5]||(u[5]=t(`
       for further details on the content covered on this page
    `))]),_:1,__:[4,5]}),u[18]||(u[18]=t()),s(le,{type:"warning",style:{width:"100%"},class:"outfit"},{default:i(()=>u[6]||(u[6]=[o("span",{class:"font-bold"},"Special commands are case-sensitive",-1),t(` to
      ensure they do not
      interfere with other functions of the app or plugins
    `)])),_:1,__:[6]}),u[19]||(u[19]=t()),s(P,{class:"w-full m-2",contentClass:"!p-0"},{"title-1":i(()=>u[7]||(u[7]=[t(`
        All special commands from recognized plugins
      `)])),"content-1":i(()=>[s(l,{ui:{border:"dark:border-gray-600"}}),u[10]||(u[10]=t()),s(w,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",noSearchBy:"",searchPlaceholder:"Search...",inputSize:"sm",headers:[{label:"Plugin",key:"plugin",width:"12rem"},{label:"Default Special Command",key:"command",width:"10rem"},{label:"Use",key:"use",width:"18rem"},{label:"Notes",key:"notes"}],rows:c(e)},{"cell-notes":i(({value:x})=>[o("ul",null,[(_(!0),F(ee,null,fe(x,(h,k)=>(_(),F("li",{key:k},N(h),1))),128))])]),"cell-plugin":i(({value:x})=>[s(q,{url:"/plugin/"+x.replace(" ","~")},{default:i(()=>[t(N(x),1)]),_:2},1032,["url"])]),"cell-command":i(({value:x})=>[s(p,{inline:""},{default:i(()=>[t(" "+N(x)+" ",1)]),_:2},1024)]),_:1,__:[8,9]},8,["rows"])]),"title-2":i(()=>u[11]||(u[11]=[t(`
        All command signifiers from recognized plugins
      `)])),"content-2":i(()=>[s(w,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",noSearchBy:"",searchPlaceholder:"Search...",inputSize:"sm",headers:[{label:"Plugin",key:"plugin",width:"12rem"},{label:"Default Command Signifier",key:"signifier",width:"12rem"},{label:"Use",key:"use",width:"16rem"},{label:"Notes",key:"notes"}],rows:c(r)},{"cell-notes":i(({value:x})=>[o("ul",null,[(_(!0),F(ee,null,fe(x,(h,k)=>(_(),F("li",{key:k},N(h),1))),128))])]),"cell-plugin":i(({value:x})=>[s(q,{url:"/plugin/"+x.replace(" ","~")},{default:i(()=>[t(N(x),1)]),_:2},1032,["url"])]),"cell-signifier":i(({value:x})=>[s(p,{inline:""},{default:i(()=>[t(" "+N(x)+" ",1)]),_:2},1024)]),_:1,__:[12,13]},8,["rows"])]),_:1,__:[14,15,16]})])}}}),gl=["id","disabled","onClick"],cl={class:"m-stepper__header__wrapper"},vl={class:"m-stepper__count --primary"},bl={class:"m-stepper__count__circle"},yl={class:"m-stepper__header__content"},hl={class:"m-stepper__title"},wl={key:0,class:"m-stepper__subtitle"},xl={key:0,class:"m-stepper__right"},kl={class:"m-stepper__content__wrapper"},Sl=K({__name:"MazStepper",props:{modelValue:{default:void 0},steps:{default:void 0},color:{default:"primary"},disabledNextSteps:{type:Boolean},disabledPreviousSteps:{type:Boolean},autoValidateSteps:{type:Boolean},allStepsOpened:{type:Boolean},allStepsValidated:{type:Boolean},canCloseSteps:{type:Boolean}},emits:["update:model-value"],setup(m,{emit:a}){const e=m,r=a,d=ie(()=>se(()=>import("./86h5McFJ.js"),__vite__mapDeps([35,1,2]),import.meta.url)),u=ie(()=>se(()=>import("./Dq_-cl2N.js"),__vite__mapDeps([36,1,2,7,8,9,10,11,12,13,14,15,16,37]),import.meta.url)),n=ie(()=>se(()=>import("./BmRUl7zM.js"),__vite__mapDeps([38,1,2]),import.meta.url)),l=ie(()=>se(()=>import("./Cl6qrg0x.js"),__vite__mapDeps([39,1,2]),import.meta.url)),p=ie(()=>se(()=>import("./CbT3Xkk-.js"),__vite__mapDeps([40,1,2]),import.meta.url)),w=R(()=>`var(--maz-color-${e.color})`),P=R(()=>`var(--maz-color-${e.color}-contrast)`),x=at(),h=R(()=>Object.keys(x).filter(b=>b.startsWith("content-")).length),k=Y(1),I=R({get:()=>e.modelValue??k.value,set:b=>{k.value=b,r("update:model-value",b)}});function E(b){return v(b)?{icon:n,class:"--success"}:L(b)?{icon:p,class:"--warning"}:T(b)?{icon:l,class:"--error"}:{class:"--normal"}}function A(b){var $,S;return(S=($=e.steps)==null?void 0:$[b-1])==null?void 0:S.icon}function z(b,$){var S,M;return(M=(S=e.steps)==null?void 0:S[$-1])==null?void 0:M[b]}function f(b){I.value===b&&e.canCloseSteps?I.value=0:b<1?I.value=1:b>h.value?I.value=h.value:I.value=b}function g(b,$){var S,M;const j=b==="titleInfo"?"title-info":b,G=Object.keys(x).filter(ae=>ae.startsWith(`${j}-`)).includes(`${j}-${$}`),oe=!!((M=(S=e.steps)==null?void 0:S[$-1])!=null&&M[b]);return G||oe}function v(b){var $,S;const M=(S=($=e.steps)==null?void 0:$[b-1])==null?void 0:S.success,j=T(b)||L(b),G=e.autoValidateSteps&&b<I.value&&!j;return M??(G||e.allStepsValidated)}function C(b){var $,S;const M=(S=($=e.steps)==null?void 0:$[b-1])==null?void 0:S.disabled,j=I.value===b&&!e.canCloseSteps,G=e.disabledNextSteps&&b>I.value,oe=e.disabledPreviousSteps&&b<I.value;return M??(j||G||oe||e.allStepsOpened)}function T(b){var $,S;return(S=($=e.steps)==null?void 0:$[b-1])==null?void 0:S.error}function L(b){var $,S;return(S=($=e.steps)==null?void 0:$[b-1])==null?void 0:S.warning}function B(b){return b===h.value}return(b,$)=>(_(),F("div",{class:"m-stepper m-reset-css",style:he([{"--round-step-bg-color":w.value,"--round-step-text-color":P.value}])},[(_(!0),F(ee,null,fe(h.value,S=>(_(),F(ee,{key:S},[g("title",S)?(_(),F("button",{key:0,id:`header-step-${S}`,type:"button",disabled:C(S),class:J(["m-stepper__header",[{"--is-current-step":S===I.value||b.allStepsOpened,"--disabled":S!==I.value&&!b.allStepsOpened&&C(S)},`${E(S).class}`]]),onClick:M=>f(S)},[o("div",cl,[o("span",vl,[o("div",bl,[E(S).icon?(_(),V(Me(E(S).icon),{key:0,class:"icon maz-text-xl"})):W("v-if",!0)]),U(b.$slots,`icon-${S}`,{},()=>[A(S)?(_(),F(ee,{key:0},[typeof A(S)=="string"?(_(),V(c(d),{key:0,name:A(S)},null,8,["name"])):A(S)?(_(),V(Me(A(S)),{key:1})):W("v-if",!0)],64)):(_(),F(ee,{key:1},[t(N(S),1)],64))],!0)]),o("div",yl,[o("span",hl,[U(b.$slots,`title-${S}`,{},()=>[t(N(z("title",S)),1)],!0)]),g("subtitle",S)?(_(),F("span",wl,[U(b.$slots,`subtitle-${S}`,{},()=>[t(N(z("subtitle",S)),1)],!0)])):W("v-if",!0)])]),g("titleInfo",S)?(_(),F("span",xl,[U(b.$slots,`title-info-${S}`,{},()=>[t(N(z("titleInfo",S)),1)],!0)])):W("v-if",!0)],10,gl)):W("v-if",!0),o("div",{class:J(["m-stepper__content",{"--no-border":B(S)}])},[s(c(u),{"model-value":b.allStepsOpened||I.value===S,"aria-labelledby":`header-step-${S}`},{default:i(()=>[o("div",kl,[U(b.$slots,`content-${S}`,{validated:v(S),error:T(S),warning:L(S),nextStep:()=>f(S+1),previousStep:()=>f(S-1)},void 0,!0)])]),_:2},1032,["model-value","aria-labelledby"])],2)],64))),128))],4))}}),_l=(m,a)=>{const e=m.__vccOpts||m;for(const[r,d]of a)e[r]=d;return e},Cl=_l(Sl,[["__scopeId","data-v-4b6c936d"]]),Pl={class:"flex gap-1"},Tl={class:"flex gap-1"},Al={class:"flex gap-1"},El={class:"flex gap-1"},zl={class:"flex items-center"},$l=K({__name:"creatingPlugin",setup(m){return(a,e)=>{const r=pe,d=me,u=ue,n=Se,l=Le;return _(),F(ee,null,[s(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:i(()=>[o("span",Pl,[e[1]||(e[1]=t(`
      To create the plugin itself, create a class that inherits from
      `)),s(r,{inline:""},{default:i(()=>e[0]||(e[0]=[t(" Plugin ")])),_:1,__:[0]})]),e[21]||(e[21]=t(`
    (You do not need to implement all methods)
    `)),s(le,{type:"info",class:"m-2",style:{width:"calc(100% - 1rem)"}},{default:i(()=>[o("span",Tl,[s(r,{inline:""},{default:i(()=>e[2]||(e[2]=[t(" OnQueryChange ")])),_:1,__:[2]}),e[4]||(e[4]=t(` is the method that is called by
        the
        `)),s(r,{inline:""},{default:i(()=>e[3]||(e[3]=[t(" SearchWindow ")])),_:1,__:[3]}),e[5]||(e[5]=t(` when a user types in a query.
      `))]),e[9]||(e[9]=t(`
      In this method, you should create your list item objects, filter them
      (if needed), and return them in a list.
      `)),e[10]||(e[10]=o("br",null,null,-1)),e[11]||(e[11]=o("br",null,null,-1)),e[12]||(e[12]=t(`
      When returning items for a special command, you will need to sort the
      list yourself.
      `)),o("span",Al,[e[7]||(e[7]=t(`
        Normal results (those returned in
        `)),s(r,{inline:""},{default:i(()=>e[6]||(e[6]=[t(" OnQueryChange ")])),_:1,__:[6]}),e[8]||(e[8]=t(` ) do not need to be sorted as
        Quokka
        will sort them
      `))]),e[13]||(e[13]=t(`
      once it has results from all of the plugins the
      program is using during runtime.
    `))]),_:1,__:[9,10,11,12,13]}),e[22]||(e[22]=t()),s(le,{type:"tip",class:"m-2",style:{width:"calc(100% - 1rem)"}},{default:i(()=>[o("span",El,[e[19]||(e[19]=t(`See
        `)),s(q,{url:"https://github.com/Faeq-F/Quokka/blob/main/Quokka/PluginArch/Plugin.cs",target:"_blank",class:"flex"},{default:i(()=>[e[15]||(e[15]=o("span",null,"the  ",-1)),e[16]||(e[16]=t()),s(r,{inline:"",class:"!border-0"},{default:i(()=>e[14]||(e[14]=[t("Plugin")])),_:1,__:[14]}),e[17]||(e[17]=t()),e[18]||(e[18]=o("span",null,"  class",-1))]),_:1,__:[15,16,17,18]}),e[20]||(e[20]=t(`
        for more information
      `))])]),_:1})]),_:1,__:[21,22]}),e[34]||(e[34]=t()),s(l,{class:"m-2",style:{width:"calc(100% - 0.5rem)","--maz-color-primary-alpha-20":"var(--maz-color-secondary-alpha-20)","--maz-color-primary-alpha":"var(--maz-color-secondary-alpha)"}},{"title-1":i(()=>[o("div",zl,[s(u,{name:"i-lucide-lightbulb",class:"!size-5 min-w-5",style:{color:"#d2afff"}}),e[26]||(e[26]=t()),s(n,{orientation:"vertical",class:"h-7 mx-3",ui:{border:"dark:border-gray-600 h-full"}}),e[27]||(e[27]=t()),o("div",null,[e[24]||(e[24]=t(`
          See an example from the
          `)),s(q,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:i(()=>e[23]||(e[23]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[23]}),e[25]||(e[25]=t(`
           (a demo plugin not made for use)
        `))])])]),"content-1":i(()=>[s(r,{lang:"cs"},{default:i(()=>e[28]||(e[28]=[t(`
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
        `)),s(q,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:i(()=>e[29]||(e[29]=[t(`
          ShowTypedText plugin
        `)])),_:1,__:[29]}),e[31]||(e[31]=t(`
         (a demo plugin not made for use)
      `))])]),_:1,__:[33]})],64)}}}),Il={class:"flex gap-1"},Ll={class:"flex gap-1"},Bl=K({__name:"creatingProject",setup(m){return(a,e)=>{const r=pe,d=me;return _(),F(ee,null,[s(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:i(()=>[e[24]||(e[24]=t(`
    To start:
    `)),o("ol",null,[o("li",null,[e[2]||(e[2]=t(`
        Open
        `)),s(q,{url:"https://visualstudio.microsoft.com/#vs-section",target:"_blank"},{default:i(()=>e[0]||(e[0]=[t(`
          Visual Studio
        `)])),_:1,__:[0]}),e[3]||(e[3]=t(`
         & clone
        `)),s(q,{url:"https://github.com/faeq-f/quokka/",target:"_blank"},{default:i(()=>e[1]||(e[1]=[t(`
          Quokka
        `)])),_:1,__:[1]})]),e[21]||(e[21]=t()),o("li",null,[o("span",Il,[e[6]||(e[6]=t(`
          In the solution, create a project of type
          `)),s(r,{inline:""},{default:i(()=>e[4]||(e[4]=[t(" WPF class library ")])),_:1,__:[4]}),e[7]||(e[7]=t(`
          , naming it
          `)),s(r,{inline:""},{default:i(()=>e[5]||(e[5]=[t(" Plugin_YourPluginNameHere ")])),_:1,__:[5]})]),e[8]||(e[8]=t(`
        (make sure that it is a part of the Quokka solution
        and that it is not its own)
      `))]),e[22]||(e[22]=t()),o("li",null,[o("span",Ll,[e[11]||(e[11]=t(`
          Rename the
          `)),s(r,{inline:""},{default:i(()=>e[9]||(e[9]=[t(" .cs ")])),_:1,__:[9]}),e[12]||(e[12]=t(`
          file to
          `)),s(r,{inline:""},{default:i(()=>e[10]||(e[10]=[t(" Plugin_YourPluginNameHere.cs ")])),_:1,__:[10]})])]),e[23]||(e[23]=t()),o("li",null,[e[17]||(e[17]=t(`
        Edit the project file to look like the following and set the
        build configuration to 'Plugin':
        `)),e[18]||(e[18]=o("br",null,null,-1)),e[19]||(e[19]=t()),s(r,{lang:"markup"},{default:i(()=>e[13]||(e[13]=[t(`
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
          `)),s(q,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:i(()=>e[14]||(e[14]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[14]}),e[16]||(e[16]=t(`
           (a demo plugin not made for use)
        `))])])])]),_:1,__:[24]}),e[27]||(e[27]=t()),s(le,{type:"tip",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:i(()=>[e[26]||(e[26]=t(`
    To add extra files in the plugin's folder, for e.g., a settings file
    for the plugin, you can add the following to the project file;
    `)),s(r,{lang:"markup"},{default:i(()=>e[25]||(e[25]=[t(`
            <ItemGroup>
              <ContentWithTargetPath Include="settings.json">
                <CopyToOutputDirectory>Always</CopyToOutputDirectory>
                <TargetPath>settings.json</TargetPath>
              </ContentWithTargetPath>
            </ItemGroup>
          `)])),_:1,__:[25]})]),_:1,__:[26]})],64)}}}),Fl=Ne("/media/Docs/ListItems.png"),Dl={class:"flex gap-1"},Vl={class:"flex gap-1"},Ml={class:"flex gap-1"},Rl={class:"flex gap-1"},Ol={class:"flex gap-1"},Nl={class:"flex gap-1"},ql={class:"flex gap-1"},Ul=K({__name:"creatingNewItemType",setup(m){return(a,e)=>{const r=pe,d=me;return _(),F(ee,null,[s(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:i(()=>[e[15]||(e[15]=t(`
    Most plugins will want to show results to the user in the form of
    an item on the results list in the search window.`)),e[16]||(e[16]=o("br",null,null,-1)),e[17]||(e[17]=t(`
    To do so, first create an item type to define how your
    results are displayed;
    `)),e[18]||(e[18]=o("br",null,null,-1)),e[19]||(e[19]=o("br",null,null,-1)),e[20]||(e[20]=t()),o("ol",null,[o("li",null,[o("span",Dl,[e[1]||(e[1]=t(`
          In the
          `)),s(r,{inline:""},{default:i(()=>e[0]||(e[0]=[t(" .cs ")])),_:1,__:[0]}),e[2]||(e[2]=t(`
          file add
        `))]),e[4]||(e[4]=t()),s(r,{lang:"cs"},{default:i(()=>e[3]||(e[3]=[t(`
          using Quokka.PluginArch;
          using Quokka.ListItems;
        `)])),_:1,__:[3]})]),e[14]||(e[14]=t()),o("li",null,[o("span",Vl,[e[6]||(e[6]=t(`
          Create a
          `)),s(r,{inline:""},{default:i(()=>e[5]||(e[5]=[t(" ListItem ")])),_:1,__:[5]}),e[7]||(e[7]=t(`
          class for your item type
        `))]),e[12]||(e[12]=t()),s(r,{lang:"cs"},{default:i(()=>e[8]||(e[8]=[t(`
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
          `)),s(q,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:i(()=>e[9]||(e[9]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[9]}),e[11]||(e[11]=t(`
           (a demo plugin not made for use)
        `))])])])]),_:1,__:[15,16,17,18,19,20]}),e[46]||(e[46]=t()),s(le,{type:"warning",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:i(()=>[o("span",Ml,[e[22]||(e[22]=t(`
      A `)),s(r,{inline:""},{default:i(()=>e[21]||(e[21]=[t(" ListItem ")])),_:1,__:[21]}),e[23]||(e[23]=t(`
      must have the following:
    `))]),e[41]||(e[41]=t()),o("ul",null,[o("li",null,[o("span",Rl,[e[25]||(e[25]=t("an ")),s(r,{inline:""},{default:i(()=>e[24]||(e[24]=[t(" Icon ")])),_:1,__:[24]})])]),e[38]||(e[38]=t()),o("li",null,[o("span",Ol,[e[27]||(e[27]=t("a ")),s(r,{inline:""},{default:i(()=>e[26]||(e[26]=[t(" Name ")])),_:1,__:[26]})])]),e[39]||(e[39]=t()),o("li",null,[o("span",Nl,[e[29]||(e[29]=t("a ")),s(r,{inline:""},{default:i(()=>e[28]||(e[28]=[t(" Description ")])),_:1,__:[28]})])]),e[40]||(e[40]=t()),o("li",null,[o("span",ql,[e[32]||(e[32]=t(`
          an `)),s(r,{inline:""},{default:i(()=>e[30]||(e[30]=[t(" Execute ")])),_:1,__:[30]}),e[33]||(e[33]=t(`
          method to define what should happen when the
          `)),s(r,{inline:""},{default:i(()=>e[31]||(e[31]=[t(" ListItem ")])),_:1,__:[31]}),e[34]||(e[34]=t(` is run
        `))]),e[35]||(e[35]=t(`
        (i.e., what happens when the user hits the `)),e[36]||(e[36]=o("kbd",null,"↵",-1)),e[37]||(e[37]=t(` key with
        that item selected)
      `))])]),e[42]||(e[42]=t()),e[43]||(e[43]=o("br",null,null,-1)),e[44]||(e[44]=t()),e[45]||(e[45]=o("img",{src:Fl},null,-1))]),_:1,__:[41,42,43,44,45]})],64)}}}),Kl={class:"flex gap-1"},Wl={class:"flex gap-1"},jl={class:"flex gap-1"},Hl={class:"flex gap-1"},Ql={class:"flex gap-1"},Gl={class:"flex items-center"},Yl=K({__name:"creatingContextPane",setup(m){return(a,e)=>{const r=pe,d=me,u=ue,n=Se,l=Le;return _(),F(ee,null,[s(le,{type:"info",class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:i(()=>[o("span",Kl,[e[1]||(e[1]=t(`
      A context pane is displayed when the user hits the
      `)),s(r,{inline:""},{default:i(()=>e[0]||(e[0]=[t(" ContextPaneKey ")])),_:1,__:[0]}),e[2]||(e[2]=t(`
      , replacing the item list.
    `))]),e[6]||(e[6]=t()),o("span",Wl,[e[4]||(e[4]=t(`
      If the selected item does not have a context pane defined,
      nothing happens when the
      `)),s(r,{inline:""},{default:i(()=>e[3]||(e[3]=[t(" ContextPaneKey ")])),_:1,__:[3]}),e[5]||(e[5]=t(`
      is hit.
    `))])]),_:1,__:[6]}),e[35]||(e[35]=t()),s(d,{class:"m-2",style:{width:"calc(100% - 0.5rem)"}},{default:i(()=>[e[23]||(e[23]=t(`
    To define the context pane for an item type:
    `)),o("ol",null,[o("li",null,[o("span",jl,[e[9]||(e[9]=t(`
          In the project, add a
          `)),s(r,{inline:""},{default:i(()=>e[7]||(e[7]=[t(" WPF Page ")])),_:1,__:[7]}),e[10]||(e[10]=t(`
          called `)),s(r,{inline:""},{default:i(()=>e[8]||(e[8]=[t(" ContextPane ")])),_:1,__:[8]})])]),e[21]||(e[21]=t()),o("li",null,[o("span",Hl,[e[12]||(e[12]=t(`
          Ensure `)),s(r,{inline:"",lang:"cs"},{default:i(()=>e[11]||(e[11]=[t(" ContextPane : ItemContextPane ")])),_:1,__:[11]})]),e[18]||(e[18]=t()),o("span",Ql,[e[15]||(e[15]=t(`
          (inherits `)),s(r,{inline:"",lang:"cs"},{default:i(()=>e[13]||(e[13]=[t(" ItemContextPane ")])),_:1,__:[13]}),e[16]||(e[16]=t(`
          from `)),s(r,{inline:"",lang:"cs"},{default:i(()=>e[14]||(e[14]=[t(" Quokka.ListItems ")])),_:1,__:[14]}),e[17]||(e[17]=t(`)
        `))])]),e[22]||(e[22]=t()),o("li",null,[e[20]||(e[20]=t(`
        Ensure the plugin's project file has:
        `)),s(r,{lang:"markup"},{default:i(()=>e[19]||(e[19]=[t(`
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
        `)])),_:1,__:[19]})])])]),_:1,__:[23]}),e[36]||(e[36]=t()),s(l,{class:"m-2",style:{width:"calc(100% - 0.5rem)","--maz-color-primary-alpha-20":"var(--maz-color-secondary-alpha-20)","--maz-color-primary-alpha":"var(--maz-color-secondary-alpha)"}},{"title-1":i(()=>[o("div",Gl,[s(u,{name:"i-lucide-lightbulb",class:"!size-5 min-w-5",style:{color:"#d2afff"}}),e[29]||(e[29]=t()),s(n,{orientation:"vertical",class:"h-7 mx-3",ui:{border:"dark:border-gray-600 h-full"}}),e[30]||(e[30]=t()),o("div",null,[e[25]||(e[25]=t(`
          A context pane tends to have extra information or actions.`)),e[26]||(e[26]=o("br",null,null,-1)),e[27]||(e[27]=t(`
          See an example from the
          `)),s(q,{url:"https://github.com/Faeq-F/TypedText-Plugins",target:"_blank"},{default:i(()=>e[24]||(e[24]=[t(`
            ShowTypedText plugin
          `)])),_:1,__:[24]}),e[28]||(e[28]=t(`
           (a demo plugin not made for use)
        `))])])]),"content-1":i(()=>[s(r,{lang:"markup"},{default:i(()=>e[31]||(e[31]=[t(`
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
      `)])),_:1,__:[31]}),e[33]||(e[33]=t()),s(r,{lang:"cs"},{default:i(()=>e[32]||(e[32]=[t(`
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
      `)])),_:1,__:[32]})]),_:1,__:[34]})],64)}}}),Xl={class:"flex flex-col mt-22 mb-16 items-center"},Zl={class:"flex items-center Varela text-3xl"},Jl=K({__name:"creatingPlugin",setup(m){return(a,e)=>{const r=ue,d=Cl;return _(),F("div",null,[o("div",Xl,[o("div",Zl,[s(r,{name:"i-lucide-toy-brick",class:"mr-2"}),e[0]||(e[0]=t(` Creating a Plugin
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},`Creating new item types & producing their
        plugin`,-1))]),e[10]||(e[10]=t()),e[11]||(e[11]=o("div",{class:"mb-2"},"Steps",-1)),e[12]||(e[12]=t()),s(d,{steps:[{title:"Creating the project"},{title:"Creating a new item type"},{title:"Creating a context pane (optional)"},{title:"Creating the plugin"}],"can-close-steps":"",color:"neutral"},{"icon-1":i(()=>[s(r,{name:"i-lucide-folder-kanban"})]),"content-1":i(()=>[s(Bl)]),"icon-2":i(()=>[s(r,{name:"i-lucide-list"})]),"content-2":i(()=>[s(Ul)]),"icon-3":i(()=>[s(r,{name:"i-lucide-panels-top-left"})]),"content-3":i(()=>[s(Yl)]),"icon-4":i(()=>[s(r,{name:"i-lucide-unplug"})]),"content-4":i(()=>[s($l)]),_:1,__:[3,4,5,6,7,8,9]})])}}}),er={class:"flex flex-col mt-22 mb-16 items-center"},tr={class:"flex items-center Varela text-3xl"},nr=K({__name:"faq",setup(m){return(a,e)=>{const r=ue,d=Le;return _(),F("div",null,[o("div",er,[o("div",tr,[s(r,{name:"i-lucide-circle-help",class:"mr-2"}),e[0]||(e[0]=t(` FAQ by Developers
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},"Answers to frequently asked questions",-1))]),e[30]||(e[30]=t()),s(d,{class:"w-full m-2"},{"title-1":i(()=>e[3]||(e[3]=[o("p",null,`
          How do I use a 3rd party library in my plugin?
        `,-1)])),"content-1":i(()=>[e[12]||(e[12]=t(`
        You must install the package (likely through `)),s(q,{url:"https://www.nuget.org/"},{default:i(()=>e[4]||(e[4]=[t("NuGet")])),_:1,__:[4]}),e[13]||(e[13]=t(` ) for your
        plugin's project. Unfortunately this is not enough since Quokka will
        need the package reference of the library. You will have to use
        `)),s(q,{url:"https://learn.microsoft.com/en-us/dotnet/fundamentals/reflection/reflection"},{default:i(()=>e[5]||(e[5]=[t(`
          reflection
        `)])),_:1,__:[5]}),e[14]||(e[14]=t(` 
        to load the library at runtime and use the classes it provides.
        You can use
        `)),s(q,{url:"https://github.com/NdubuisiJr/TypeExtender"},{default:i(()=>e[6]||(e[6]=[t(`
          TypeExtender`)])),_:1,__:[6]}),e[15]||(e[15]=t(` too (Quokka has a reference to this).
        You can have a look at the following plugins as examples as to how
        to do this:`)),e[16]||(e[16]=o("br",null,null,-1)),e[17]||(e[17]=o("br",null,null,-1)),e[18]||(e[18]=t()),o("ul",null,[o("li",null,[s(q,{url:""},{default:i(()=>e[7]||(e[7]=[t(`
              Plugin_Calculator
            `)])),_:1,__:[7]})]),e[10]||(e[10]=t()),o("li",null,[s(q,{url:""},{default:i(()=>e[8]||(e[8]=[t(`
              Plugin_EnglishDictionary
            `)])),_:1,__:[8]})]),e[11]||(e[11]=t()),o("li",null,[s(q,{url:""},{default:i(()=>e[9]||(e[9]=[t(`
              Plugin_Everything
            `)])),_:1,__:[9]})])]),e[19]||(e[19]=o("br",null,null,-1))]),_:1,__:[20]}),e[31]||(e[31]=t()),s(d,{class:"w-full m-2"},{"title-1":i(()=>e[21]||(e[21]=[o("p",null,`
          Q2
        `,-1)])),"content-1":i(()=>e[22]||(e[22]=[t(`
        Q2 ans
      `)])),_:1,__:[23]}),e[32]||(e[32]=t()),s(d,{class:"w-full m-2"},{"title-1":i(()=>e[24]||(e[24]=[o("p",null,`
          Q3
        `,-1)])),"content-1":i(()=>e[25]||(e[25]=[t(`
        Q3 ans
      `)])),_:1,__:[26]}),e[33]||(e[33]=t()),s(d,{class:"w-full m-2"},{"title-1":i(()=>e[27]||(e[27]=[o("p",null,`
          Q4
        `,-1)])),"content-1":i(()=>e[28]||(e[28]=[t(`
        Q4 ans
      `)])),_:1,__:[29]})])}}});function lr(m,a){const e=ot(m,a);if(!e)throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${m.toString()}`);return e}const rr="maz-table",ir=(m,a)=>{const e=m.__vccOpts||m;for(const[r,d]of a)e[r]=d;return e},sr=K({__name:"MazTableCell",setup(m){const{size:a}=lr(rr);return(e,r)=>(_(),F("td",{class:J(["m-table-cell m-reset-css",[`--${c(a)}`]])},[U(e.$slots,"default",{},void 0,!0)],2))}}),yt=ir(sr,[["__scopeId","data-v-f338a7b0"]]);function ar(m,a){const e=ot(m,a);if(!e)throw new TypeError(`[maz-ui](injectStrict) Could not resolve ${m.toString()}`);return e}const or="maz-table",ur=(m,a)=>{const e=m.__vccOpts||m;for(const[r,d]of a)e[r]=d;return e},dr=K({__name:"MazTableRow",props:{noHoverable:{type:Boolean}},setup(m){const{hoverable:a,backgroundEven:e,backgroundOdd:r}=ar(or);return(d,u)=>(_(),F("tr",{class:J(["m-table-row m-reset-css",{"--hoverable":c(a)&&!d.noHoverable,"--background-odd":c(r),"--background-even":c(e)}])},[U(d.$slots,"default",{},void 0,!0)],2))}}),ht=ur(dr,[["__scopeId","data-v-c9f9a9c5"]]),pr={class:"flex flex-col mt-22 mb-16 items-center"},mr={class:"flex items-center Varela text-3xl"},fr={class:"flex gap-1"},gr={class:"flex gap-1"},cr={class:"flex gap-1"},vr=K({__name:"generalUsage",setup(m){return(a,e)=>{const r=ue,d=me,u=yt,n=ht,l=ze;return _(),F("div",null,[o("div",pr,[o("div",mr,[s(r,{name:"i-lucide-mouse-pointer",class:"mr-2"}),e[0]||(e[0]=t(` General Usage
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},"Running the app & default keys",-1))]),e[39]||(e[39]=t()),s(d,{class:"w-full m-2"},{default:i(()=>[o("span",fr,[e[4]||(e[4]=t(`
        To use the app, run
        `)),s(pe,{inline:""},{default:i(()=>e[3]||(e[3]=[t(" Quokka.exe ")])),_:1,__:[3]}),e[5]||(e[5]=t(`
        (in the root folder)
      `))])]),_:1}),e[40]||(e[40]=t()),s(d,{class:"w-full m-2",padding:!1},{default:i(()=>[s(l,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",headers:["Default keys / shortcuts","Use","Notes"]},{default:i(()=>[s(n,null,{default:i(()=>[s(u,{style:{"font-size":"1rem"}},{default:i(()=>e[6]||(e[6]=[o("kbd",null,"Left Alt",-1),t("+"),o("kbd",null,"Space",-1)])),_:1,__:[6]}),e[14]||(e[14]=t()),s(u,null,{default:i(()=>e[7]||(e[7]=[t(`
            Launches the search bar
          `)])),_:1,__:[7]}),e[15]||(e[15]=t()),s(u,{style:{"font-size":"1rem",width:"43%"}},{default:i(()=>[o("span",gr,[e[13]||(e[13]=t(`This shortcut is modifiable; see
              `)),s(q,{url:"",class:"flex"},{default:i(()=>[e[9]||(e[9]=o("span",null,"the  ",-1)),e[10]||(e[10]=t()),s(pe,{inline:"",class:"!border-0"},{default:i(()=>e[8]||(e[8]=[t("WindowHotKey")])),_:1,__:[8]}),e[11]||(e[11]=t()),e[12]||(e[12]=o("span",null,"  setting",-1))]),_:1,__:[9,10,11,12]})])]),_:1})]),_:1,__:[14,15]}),e[36]||(e[36]=t()),s(n,null,{default:i(()=>[s(u,null,{default:i(()=>e[16]||(e[16]=[o("kbd",null,"🠙",-1),o("span",{class:"text-sm"},"&",-1),o("kbd",null,"🠛",-1)])),_:1,__:[16]}),e[19]||(e[19]=t()),s(u,null,{default:i(()=>e[17]||(e[17]=[t(`
            Select items
          `)])),_:1,__:[17]}),e[20]||(e[20]=t()),s(u,{style:{"font-size":"1rem",width:"43%"}},{default:i(()=>e[18]||(e[18]=[t(`
            The keys used cannot be changed
          `)])),_:1,__:[18]})]),_:1,__:[19,20]}),e[37]||(e[37]=t()),s(n,null,{default:i(()=>[s(u,null,{default:i(()=>e[21]||(e[21]=[o("kbd",null,"↵",-1)])),_:1,__:[21]}),e[24]||(e[24]=t()),s(u,null,{default:i(()=>e[22]||(e[22]=[t(`
            Executes the selected item (the first item if no item is selected)
          `)])),_:1,__:[22]}),e[25]||(e[25]=t()),s(u,{style:{"font-size":"1rem",width:"43%"}},{default:i(()=>e[23]||(e[23]=[t(`
            The key used cannot be changed
          `)])),_:1,__:[23]})]),_:1,__:[24,25]}),e[38]||(e[38]=t()),s(n,null,{default:i(()=>[s(u,null,{default:i(()=>e[26]||(e[26]=[o("kbd",null,"☰",-1)])),_:1,__:[26]}),e[34]||(e[34]=t()),s(u,null,{default:i(()=>e[27]||(e[27]=[t(`
            Shows context pane for item
          `)])),_:1,__:[27]}),e[35]||(e[35]=t()),s(u,{style:{"font-size":"1rem",width:"43%"}},{default:i(()=>[o("span",cr,[e[33]||(e[33]=t(`This shortcut is modifiable; see
              `)),s(q,{url:"",class:"flex"},{default:i(()=>[e[29]||(e[29]=o("span",null,"the  ",-1)),e[30]||(e[30]=t()),s(pe,{inline:"",class:"!border-0"},{default:i(()=>e[28]||(e[28]=[t("ContextPaneKey")])),_:1,__:[28]}),e[31]||(e[31]=t()),e[32]||(e[32]=o("span",null,"  setting",-1))]),_:1,__:[29,30,31,32]})])]),_:1})]),_:1,__:[34,35]})]),_:1,__:[36,37,38]})]),_:1})])}}}),br={class:"flex flex-col mt-22 mb-16 items-center"},yr={class:"flex items-center Varela text-3xl"},hr={class:"flex gap-1"},wr={class:"flex gap-1"},xr=K({__name:"installation",setup(m){return(a,e)=>{const r=ue,d=me,u=pe,n=Se;return _(),F("div",null,[o("div",br,[o("div",yr,[s(r,{name:"i-lucide-loader",class:"mr-2"}),e[0]||(e[0]=t(` Installation
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},"Requirements, steps & suggestions",-1))]),e[31]||(e[31]=t()),s(d,{class:"w-full m-2"},{default:i(()=>[e[11]||(e[11]=t(`
      Quokka requires the following:
      `)),o("ul",null,[e[8]||(e[8]=o("li",null,`
          A computer running Windows 7 or higher
        `,-1)),e[9]||(e[9]=t()),o("li",null,[s(q,{url:""},{default:i(()=>e[3]||(e[3]=[t(`
            .NET 4.8 Framework (pre-installed on Windows 10 and 11)
          `)])),_:1,__:[3]})]),e[10]||(e[10]=t()),o("li",null,[e[5]||(e[5]=t(`
          Exclusions to any anti-malware software (including Microsoft
          defender) that is installed on your computer, for the location of the
          exe;
          `)),e[6]||(e[6]=o("br",null,null,-1)),e[7]||(e[7]=t()),s(le,{type:"warning",style:{width:"calc(100% - 3.5rem)"}},{default:i(()=>e[4]||(e[4]=[t(`
            Due to costs, binaries are not signed (e.g., with a
            Organization Validation (OV) code signing certificate).`),o("br",null,null,-1),t(`
            As a result, the Microsoft Defender SmartScreen will likely try
            to prevent the app from starting.
          `)])),_:1,__:[4]})])])]),_:1,__:[11]}),e[32]||(e[32]=t()),s(d,{class:"w-full m-2"},{default:i(()=>[e[30]||(e[30]=t(`
      To install:
      `)),o("ul",null,[o("li",null,[e[13]||(e[13]=t(`
          Go to the top of this page and click on the
          `)),s(q,{url:""},{default:i(()=>e[12]||(e[12]=[t(`
            'Download Latest Release'
          `)])),_:1,__:[12]}),e[14]||(e[14]=t(`
           button
        `))]),e[28]||(e[28]=t()),o("li",null,[o("span",hr,[e[16]||(e[16]=t(`
            Download the
            `)),s(u,{inline:""},{default:i(()=>e[15]||(e[15]=[t(" Quokka.zip ")])),_:1,__:[15]}),e[17]||(e[17]=t(`
            file & extract it's contents
          `))])]),e[29]||(e[29]=t()),o("li",null,[e[26]||(e[26]=t(`
          You will want to extract / move the folder to an appropriate location.
          `)),s(le,{type:"info",style:{width:"calc(100% - 3.5rem)"}},{default:i(()=>e[18]||(e[18]=[t(`
            Quokka is a portable program by design. `),o("br",null,null,-1),t(`
            This means that you can place the folder on a external storage
            medium (e.g. a USB drive) and run the program from there.
          `)])),_:1,__:[18]}),e[27]||(e[27]=t()),s(le,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:i(()=>[o("span",wr,[e[20]||(e[20]=t(`
              If you do not wish to use the program in a portable manner, I
              suggest placing the folder in
              `)),s(u,{inline:""},{default:i(()=>e[19]||(e[19]=[t(" C:\\Program Files ")])),_:1,__:[19]}),e[21]||(e[21]=t(`,
            `))]),e[23]||(e[23]=t(`
            and creating a shortcut that is pinned to the taskbar and
            / or start menu.
            `)),s(n,{class:"my-3 w-1/2 mx-auto",ui:{border:"dark:border-gray-600"}}),e[24]||(e[24]=t(`
            You can set up a task to run the program at
            startup in Task Scheduler. Alternatively see the
            `)),s(q,{url:""},{default:i(()=>e[22]||(e[22]=[t(`
              FAQ
            `)])),_:1,__:[22]}),e[25]||(e[25]=t(`
             on this.
          `))]),_:1,__:[23,24,25]})])])]),_:1,__:[30]})])}}}),kr={class:"flex flex-col mt-22 mb-16 items-center"},Sr={class:"flex items-center Varela text-3xl"},_r={class:"flex gap-1"},Cr=K({__name:"plugins",setup(m){const a=ut(),e=a.pluginsList.map(u=>({developed:"i-lucide-square-check",name:u.name,author:u.author,authorLink:u.authorUrl})),r=a.plannedPlugins.map(u=>({developed:u.inProgress?"In progress":"i-lucide-square",name:u.name,author:"n/a"})),d=[...e,...r];return(u,n)=>{const l=ue,p=le,w=pe,P=me,x=ze;return _(),F("div",null,[o("div",kr,[o("div",Sr,[s(l,{name:"i-lucide-blocks",class:"mr-2"}),n[0]||(n[0]=t(` Plugins
      `))]),n[1]||(n[1]=t()),n[2]||(n[2]=o("div",{class:"text-md outfit"},"Using plugins & the plugins list",-1))]),n[11]||(n[11]=t()),s(p,{type:"warning",style:{width:"100%"}},{default:i(()=>n[3]||(n[3]=[t(`
      Only recognized plugins appear on this site — others may exist.
    `)])),_:1,__:[3]}),n[12]||(n[12]=t()),s(P,{class:"w-full m-2"},{default:i(()=>[o("span",_r,[n[5]||(n[5]=t(`
        To add a plugin, download and extract it to the
        `)),s(w,{inline:""},{default:i(()=>n[4]||(n[4]=[t(" PlugBoard ")])),_:1,__:[4]}),n[6]||(n[6]=t(` folder
      `))]),n[8]||(n[8]=t(`
      If you do not wish to use a plugin, simply delete the appropriate
      folder in the PlugBoard
      `)),s(p,{type:"info",style:{width:"calc(100% - 1rem)"}},{default:i(()=>n[7]||(n[7]=[o("span",{class:"font-bold"},"Plugins may have their own settings",-1),t(`,
        special commands, command signifiers, etc.`),o("br",null,null,-1),t(`
        Please see their folder in the PlugBoard to find their settings
        file (at the root, if there is one) and consult their documentation
        for
        default values, implemented features, etc.
      `)])),_:1,__:[7]})]),_:1,__:[8]}),n[13]||(n[13]=t()),s(P,{class:"w-full m-2",padding:!1},{default:i(()=>[s(x,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",headers:[{label:"Developed?",key:"developed",width:"18rem"},{label:"Planned / developed plugin",key:"name",width:"36rem"},{label:"Author",key:"author"}],rows:d,search:"",noSearchBy:"",searchPlaceholder:"Search...",inputSize:"sm"},{"cell-name":i(({row:h,value:k})=>[h.authorLink?(_(),V(q,{key:0,url:"/plugin/"+h.name.replace(" ","~")},{default:i(()=>[t(N(k),1)]),_:2},1032,["url"])):W("",!0)]),"cell-author":i(({row:h,value:k})=>[h.authorLink?(_(),V(q,{key:0,url:h.authorLink},{default:i(()=>[t(N(k),1)]),_:2},1032,["url"])):W("",!0)]),"cell-developed":i(({value:h})=>[h!="In progress"?(_(),V(l,{key:0,name:h,class:"!size-5"},null,8,["name"])):W("",!0)]),_:1,__:[9,10]})]),_:1})])}}}),Pr=st("themesStore",{state:()=>({settings:[{name:"AboutCommand",defaultValue:"AboutQuokka",notes:[]},{name:"CheckForUpdates",defaultValue:"true",notes:[]},{name:"WindowHotKey",defaultValue:"Space",notes:[{prevText:"The full list of keys that can be used in the setting can be found",link:{url:"https://learn.microsoft.com/en-us/dotnet/api/system.windows.forms.keys?view=netframework-4.8",text:"here"},afterText:"(use the first column)"}]},{name:"WindowHotKeyModifier",defaultValue:"Alt",notes:[{prevText:"The full list of keys that can be used in the setting can be found highlighted",link:{url:"https://github.com/Faeq-F/Quokka/blob/main/Quokka/KeyboardHook.cs#L130-L151",text:"here"}}]},{name:"ContextPaneKey",defaultValue:"Apps",notes:[]},{name:"MaxResults",defaultValue:"10",notes:[]},{name:"IgnoreMaxResultsFlag",defaultValue:"-ShowAll",notes:[]},{name:"FileManager",defaultValue:"explorer.exe",notes:["This is the program that will open the plugboard","Plugins may use this setting to open other folders, for e.g., a file location"]},{name:"TextEditor",defaultValue:"notepad.exe",notes:["This is the program that will open the settings file","Plugins may use this setting to open other files, for e.g., their own settings file"]}]}),actions:{}}),Tr={class:"flex flex-col mt-22 mb-16 items-center"},Ar={class:"flex items-center Varela text-3xl"},Er={class:"flex gap-1"},zr=K({__name:"settings",setup(m){const a=Pr();return(e,r)=>{const d=ue,u=pe,n=me,l=ze;return _(),F("div",null,[o("div",Tr,[o("div",Ar,[s(d,{name:"i-lucide-sliders-vertical",class:"mr-2"}),r[0]||(r[0]=t(` Settings
      `))]),r[1]||(r[1]=t()),r[2]||(r[2]=o("div",{class:"text-md outfit"},"Defaults & extra information",-1))]),r[20]||(r[20]=t()),s(n,{class:"w-full m-2"},{default:i(()=>[o("span",Er,[r[4]||(r[4]=t(`
        The settings file is located in
        `)),s(u,{inline:""},{default:i(()=>r[3]||(r[3]=[t(" '...\\Quokka\\Config\\' ")])),_:1,__:[3]})]),r[10]||(r[10]=t(`
      All settings are loaded when the application starts, meaning that
      you will have to exit and re-start the app to see changes.
      `)),s(le,{type:"info",style:{width:"calc(100% - 1rem)"}},{default:i(()=>[r[6]||(r[6]=t(`
        Plugins may have their own, specific settings files in the root of
        their respective folders, in the PlugBoard.`)),r[7]||(r[7]=o("br",null,null,-1)),r[8]||(r[8]=t(`
        Please consult their documentation (
        `)),s(q,{url:"/documentation?section=api-documentation"},{default:i(()=>r[5]||(r[5]=[t(`
          API Documentation
        `)])),_:1,__:[5]}),r[9]||(r[9]=t(`
         included) for default values, etc.
      `))]),_:1,__:[6,7,8,9]})]),_:1,__:[10]}),r[21]||(r[21]=t()),s(n,{class:"w-full m-2"},{default:i(()=>[r[13]||(r[13]=t(`
      Quokka comes with the
      `)),s(q,{url:"/#customizability"},{default:i(()=>r[11]||(r[11]=[t(`
        'Windows light'
      `)])),_:1,__:[11]}),r[14]||(r[14]=t(`
       theme by default.`)),r[15]||(r[15]=o("br",null,null,-1)),r[16]||(r[16]=t(`
      To change it, you can edit the style settings in the settings file
      and / or you can use values in a
      `)),s(q,{url:"/#customizability"},{default:i(()=>r[12]||(r[12]=[t(`
        provided configuration
      `)])),_:1,__:[12]}),r[17]||(r[17]=t(`.
    `))]),_:1,__:[13,14,15,16,17]}),r[22]||(r[22]=t()),s(n,{class:"w-full m-2",padding:!1},{default:i(()=>[s(l,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",roundedSize:"none",search:"",noSearchBy:"",searchPlaceholder:"Search...",inputSize:"sm",headers:[{label:"Setting name",key:"name",width:"12rem"},{label:"Default Value",key:"defaultValue",width:"12rem"},{label:"Notes",key:"notes"}],rows:c(a).settings},{"cell-notes":i(({value:p})=>[o("ul",null,[(_(!0),F(ee,null,fe(p,(w,P)=>(_(),F("li",{key:P},[Object.keys(w)[0]!="0"?(_(),F(ee,{key:0},[t(N(w.prevText)+" ",1),s(q,{url:w.link.url,target:"_blank"},{default:i(()=>[t(N(w.link.text),1)]),_:2},1032,["url"]),t(`
                 `+N(w.afterText),1)],64)):(_(),F(ee,{key:1},[t(N(w),1)],64))]))),128))])]),"cell-defaultValue":i(({value:p})=>[s(u,{inline:""},{default:i(()=>[t(" "+N(p)+" ",1)]),_:2},1024)]),"cell-name":i(({value:p})=>[s(u,{inline:""},{default:i(()=>[t(" "+N(p)+" ",1)]),_:2},1024)]),_:1,__:[18,19]},8,["rows"])]),_:1})])}}}),$r=Ne("/media/Docs/LoadingQuokkaTray.ico"),Ir=Ne("/media/Docs/QuokkaTray.ico"),Lr={class:"flex flex-col mt-22 mb-16 items-center"},Br={class:"flex items-center Varela text-3xl"},Fr={class:"flex gap-1"},Dr={class:"flex gap-1"},Vr={class:"mt-4"},Mr={class:"flex gap-1"},Rr={class:"flex gap-1"},Or=K({__name:"trayTask",setup(m){return(a,e)=>{const r=ue,d=yt,u=ht,n=ze,l=pe,p=me,w=Se;return _(),F("div",null,[o("div",Lr,[o("div",Br,[s(r,{name:"i-lucide-panel-bottom",class:"mr-2"}),e[0]||(e[0]=t(` Tray Task
      `))]),e[1]||(e[1]=t()),e[2]||(e[2]=o("div",{class:"text-md outfit"},"Using the System Tray task",-1))]),e[46]||(e[46]=t()),s(p,{class:"w-full m-2",padding:!1},{default:i(()=>[s(n,{hoverable:"",divider:"",size:"md",tableClass:"!bg-transparent",headers:["Default tray task icon","Notes"]},{default:i(()=>[s(u,null,{default:i(()=>[s(d,null,{default:i(()=>e[3]||(e[3]=[o("img",{src:$r,class:"size-10"},null,-1)])),_:1,__:[3]}),e[5]||(e[5]=t()),s(d,null,{default:i(()=>e[4]||(e[4]=[t(`
            Displayed while Quokka is starting up / loading (is not ready)
          `)])),_:1,__:[4]})]),_:1,__:[5]}),e[9]||(e[9]=t()),s(u,null,{default:i(()=>[s(d,null,{default:i(()=>e[6]||(e[6]=[o("img",{src:Ir,class:"size-10"},null,-1)])),_:1,__:[6]}),e[8]||(e[8]=t()),s(d,null,{default:i(()=>e[7]||(e[7]=[t(`
            Displayed when Quokka is ready for use
          `)])),_:1,__:[7]})]),_:1,__:[8]})]),_:1,__:[9]}),e[18]||(e[18]=t()),s(le,{type:"tip",style:{width:"calc(100% - 1rem)"}},{default:i(()=>[o("span",Fr,[e[12]||(e[12]=t(`
          To change the tray task icon, edit the
          `)),s(l,{inline:""},{default:i(()=>e[10]||(e[10]=[t(" QuokkaTray.ico ")])),_:1,__:[10]}),e[13]||(e[13]=t(` file in
          `)),s(l,{inline:""},{default:i(()=>e[11]||(e[11]=[t(" ...\\Quokka\\Config\\Resources\\ ")])),_:1,__:[11]})]),e[17]||(e[17]=t()),o("span",Dr,[e[15]||(e[15]=t(`
          (or just rename a different
          `)),s(l,{inline:""},{default:i(()=>e[14]||(e[14]=[t(" .ico ")])),_:1,__:[14]}),e[16]||(e[16]=t(`
          file to the same name)
        `))])]),_:1,__:[17]})]),_:1,__:[18]}),e[47]||(e[47]=t()),s(p,{class:"w-full m-2"},{default:i(()=>[e[42]||(e[42]=t(`
      The tray task context menu can be used to:
      `)),o("ul",Vr,[o("li",null,[e[20]||(e[20]=t(`
          Launch the search window
          `)),s(le,{type:"info",style:{width:"calc(100% - 3.5rem)"}},{default:i(()=>e[19]||(e[19]=[t(`
            You can only have one search window open at a time
          `)])),_:1,__:[19]})]),e[37]||(e[37]=t()),o("li",null,[e[27]||(e[27]=t(`
          Open the settings file
          `)),s(le,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:i(()=>[o("span",Mr,[e[26]||(e[26]=t(`
              You can change which text editor opens the settings file
              through
              `)),s(q,{url:"",class:"flex"},{default:i(()=>[e[22]||(e[22]=o("span",null,"the  ",-1)),e[23]||(e[23]=t()),s(l,{inline:"",class:"!border-0"},{default:i(()=>e[21]||(e[21]=[t("TextEditor")])),_:1,__:[21]}),e[24]||(e[24]=t()),e[25]||(e[25]=o("span",null,"  setting",-1))]),_:1,__:[22,23,24,25]})])]),_:1})]),e[38]||(e[38]=t()),o("li",null,[e[36]||(e[36]=t(`
          Open the PlugBoard
          `)),s(le,{type:"tip",style:{width:"calc(100% - 3.5rem)"}},{default:i(()=>[o("span",Rr,[e[34]||(e[34]=t(`
              You can change which file manager opens the
              `)),s(l,{inline:""},{default:i(()=>e[28]||(e[28]=[t(" PlugBoard ")])),_:1,__:[28]}),e[35]||(e[35]=t(` folder through
              `)),s(q,{url:"",class:"flex"},{default:i(()=>[e[30]||(e[30]=o("span",null,"the  ",-1)),e[31]||(e[31]=t()),s(l,{inline:"",class:"!border-0"},{default:i(()=>e[29]||(e[29]=[t("FileManager")])),_:1,__:[29]}),e[32]||(e[32]=t()),e[33]||(e[33]=o("span",null,"  setting",-1))]),_:1,__:[30,31,32,33]})])]),_:1})]),e[39]||(e[39]=t()),e[40]||(e[40]=o("li",null,"Exit the app",-1))]),e[43]||(e[43]=t()),s(w,{class:"my-3",ui:{border:"dark:border-gray-600"}}),e[44]||(e[44]=t()),s(le,{type:"warning",style:{width:"calc(100% - 1rem)"}},{default:i(()=>e[41]||(e[41]=[t(`
        When the tray task context menu has its
        `),o("span",{class:"font-bold"},"appearance changed",-1),t(` in the
        settings file, you will have to `),o("span",{class:"font-bold"},`exit and
          reload`,-1),t(`
        the application to see the changes.
      `)])),_:1,__:[41]})]),_:1,__:[42,43,44]}),e[48]||(e[48]=t()),s(le,{type:"danger",style:{width:"100%"}},{default:i(()=>e[45]||(e[45]=[t(`
      Unfortunately system tray tasks for other applications cannot be
      accessed through the Quokka search window yet`),o("br",null,null,-1),t(`
      This functionality may come in future (as a plugin).
    `)])),_:1,__:[45]})])}}}),Nr={class:"flex justify-between"},qr={class:"flex"},Ur={key:0,class:"flex items-center justify-start p-2 varela"},Kr={class:"justify-end flex items-center"},Wr={class:"flex"},jr={__name:"index",setup(m){let a=Y({section:"documentation",icon:""});const e=Kt();e.query.section&&(a.value=e.query.section);const r=wn(),d=r.toc.map(h=>{var k;return(k=h.children)!=null&&k.length?{...h,children:h.children.map(I=>({...I,onSelect:E=>Qe("/documentation?section="+I.section)}))}:{...h,onSelect:I=>Qe("/documentation?section="+h.section)}});we(()=>e.query.section,h=>{h?(a.value=d.find(k=>k.section==h.replace("/documentation?section=","")),a.value===void 0&&(a.value=d[1].children.find(k=>k.section==h.replace("/documentation?section=","")))):a.value={section:"documentation",icon:""}},{immediate:!0});const n=Y(!1),l=Y(!1),p=Y(23),w=Y("padding-left:23rem;padding-right:23rem;"),P=Y("padding-left:17.625rem;padding-right:17.625rem;"),x=h=>{w.value=`padding-left:${h}rem;padding-right:${h}rem;`,P.value=`padding-left:${h-5.375}rem;padding-right:${h-5.375}rem;`};return we(l,async(h,k)=>{l.value?x(p.value):x(7)}),(h,k)=>{const I=jt,E=Se,A=ue,z=Ht,f=hn,g=Zt;return _(),F("div",null,[o("div",Nr,[o("div",qr,[s(I,{class:"m-2 p-1",color:"neutral",variant:"ghost",icon:"i-lucide-book-text",to:"/documentation"},{default:i(()=>k[5]||(k[5]=[t(`
          Documentation
        `)])),_:1,__:[5]}),k[8]||(k[8]=t()),c(a).section!="documentation"?(_(),F("div",Ur,[s(E,{orientation:"vertical",class:"mr-4",ui:{border:"dark:border-gray-600 border-l-[0.5px] h-full"}}),k[7]||(k[7]=t()),s(z,{direction:"right",duration:500,class:"flex items-center pt-0.5"},{default:i(()=>[k[6]||(k[6]=t(`
            Currently reading
            '
            `)),s(A,{name:c(a).icon,class:"px-3"},null,8,["name"]),t(" "+N(c(a).label+" ")+`'
          `,1)]),_:1,__:[6]})])):W("",!0)]),k[11]||(k[11]=t()),o("div",Kr,[l.value&&c(a).section!="api-documentation"&&p.value!=23?(_(),V(z,{key:0,direction:"left",duration:500},{default:i(()=>[s(I,{class:"mr-2",color:"neutral",variant:"ghost",icon:"i-lucide-rotate-ccw",onClick:k[0]||(k[0]=v=>{p.value=23,x(23)})})]),_:1})):W("",!0),k[9]||(k[9]=t()),l.value&&c(a).section!="api-documentation"?(_(),V(z,{key:1,direction:"left",duration:500},{default:i(()=>[s(f,{modelValue:p.value,"onUpdate:modelValue":[k[1]||(k[1]=v=>p.value=v),x],min:7,max:40,step:.125,color:"neutral",class:"w-64 mr-2",style:{"--ui-bg-inverted":"var(--ui-bg-accented)"},size:"xs",tooltip:{text:`${p.value} rem`,delayDuration:200}},null,8,["modelValue","tooltip"])]),_:1})):W("",!0),k[10]||(k[10]=t()),s(I,{class:"mr-2",color:"neutral",variant:"ghost",icon:c(a).section=="api-documentation"?"i-lucide-fold-horizontal":l.value?"i-lucide-unfold-horizontal":"i-lucide-fold-horizontal",onClick:k[2]||(k[2]=v=>l.value=!l.value),style:he(c(a).section=="api-documentation"?"cursor: not-allowed !important;":""),disabled:c(a).section=="api-documentation"},null,8,["icon","style","disabled"])])]),k[15]||(k[15]=t()),s(E,{ui:{border:"dark:border-gray-600 border-l-[0.5px] w-full"}}),k[16]||(k[16]=t()),o("div",Wr,[o("div",{class:"flex flex-col justify-between w-11 hover:w-64 transition-all duration-200 ease-out delay-200",onMouseenter:k[3]||(k[3]=v=>n.value=!0),onMouseleave:k[4]||(k[4]=v=>n.value=!1)},[s(g,{orientation:"vertical",items:c(d),class:"p-1 outfit",ui:{childList:n.value?"transition-all duration-200 ease-out delay-300":"ms-0 transition-all duration-200 ease-out delay-300",childItem:"ps-0.5",linkLabel:"!font-light",linkTrailingIcon:n.value?"":"!hidden"}},null,8,["items","ui"]),k[12]||(k[12]=t()),s(g,{orientation:"vertical",items:c(r).links,class:"p-1 outfit",ui:{linkLabel:"!font-light"},externalIcon:!1},null,8,["items"])],32),k[13]||(k[13]=t()),s(E,{orientation:" vertical",class:"h-[90vh]",ui:{border:"dark:border-gray-600 border-l-[0.5px] h-full"}}),k[14]||(k[14]=t()),o("div",{style:he(c(a).section=="api-documentation"?"":n.value?P.value:w.value),class:"docsContent max-h-[90vh] min-h-[90vh] overflow-y-scroll w-full outfit transition-all ease-out duration-100 delay-200","data-lenis-prevent":""},[s(Wt,{name:"fade"},{default:i(()=>[c(a).section=="documentation"?(_(),V($n,{key:0})):c(a).section=="api-documentation"?(_(),V(Ln,{key:1})):c(a).section=="build-app"?(_(),V(Hn,{key:2})):c(a).section=="commands"?(_(),V(fl,{key:3})):c(a).section=="creating-plugin"?(_(),V(Jl,{key:4})):c(a).section=="faq"?(_(),V(nr,{key:5})):c(a).section=="general-usage"?(_(),V(vr,{key:6})):c(a).section=="installation"?(_(),V(xr,{key:7})):c(a).section=="plugins"?(_(),V(Cr,{key:8})):c(a).section=="settings"?(_(),V(zr,{key:9})):c(a).section=="tray-task"?(_(),V(Or,{key:10})):W("",!0)]),_:1})],4)])])}}},Hr=Jt(jr,[["__scopeId","data-v-372c7592"]]),ti=Object.freeze(Object.defineProperty({__proto__:null,default:Hr},Symbol.toStringTag,{value:"Module"}));export{ol as X,dl as _,ti as i,_l as u};
