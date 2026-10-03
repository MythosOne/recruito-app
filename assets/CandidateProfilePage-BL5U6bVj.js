import{g as z,a as G,r as p,u as X,j as n,s as E,c as _,b as A,d as D,m as W,e as he,f as ge,h as U,i as Ne,B as Je,k as be,l as Ke,n as Qe,o as H,p as Ye,q as g,t as eo,v as Y,w as oo,x as xe,V as to,y as ro}from"./index-DgEDt_PX.js";import{i as no,u as K,f as $e,c as ao,T as so,F as io,a as lo,S as co,n as uo,P as po,b as fo}from"./CandidateProfilePage.styled-WY_FbtBk.js";function mo(e){return z("MuiTypography",e)}G("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const ho={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},go=no(),bo=e=>{const{align:o,gutterBottom:r,noWrap:t,paragraph:a,variant:c,classes:l}=e,i={root:["root",c,e.align!=="inherit"&&`align${A(o)}`,r&&"gutterBottom",t&&"noWrap",a&&"paragraph"]};return D(i,mo,l)},xo=E("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.variant&&o[r.variant],r.align!=="inherit"&&o[`align${A(r.align)}`],r.noWrap&&o.noWrap,r.gutterBottom&&o.gutterBottom,r.paragraph&&o.paragraph]}})(W(({theme:e})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter(([o,r])=>o!=="inherit"&&r&&typeof r=="object").map(([o,r])=>({props:{variant:o},style:r})),...Object.entries(e.palette).filter(he()).map(([o])=>({props:{color:o},style:{color:(e.vars||e).palette[o].main}})),...Object.entries(e.palette?.text||{}).filter(([,o])=>typeof o=="string").map(([o])=>({props:{color:`text${A(o)}`},style:{color:(e.vars||e).palette.text[o]}})),{props:({ownerState:o})=>o.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:o})=>o.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:o})=>o.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:o})=>o.paragraph,style:{marginBottom:16}}]}))),Se={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},je=p.forwardRef(function(o,r){const{color:t,...a}=X({props:o,name:"MuiTypography"}),c=!ho[t],l=go({...a,...c&&{color:t}}),{align:i="inherit",className:d,component:s,gutterBottom:u=!1,noWrap:f=!1,paragraph:m=!1,variant:y="body1",variantMapping:b=Se,...S}=l,x={...l,align:i,color:t,className:d,component:s,gutterBottom:u,noWrap:f,paragraph:m,variant:y,variantMapping:b},j=s||(m?"p":b[y]||Se[y])||"span",v=bo(x);return n.jsx(xo,{as:j,ref:r,className:_(v.root,d),...S,ownerState:x,style:{...i!=="inherit"&&{"--Typography-textAlign":i},...S.style}})}),vo=ge(n.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));function yo(e){return z("MuiAvatar",e)}G("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const So=e=>{const{classes:o,variant:r,colorDefault:t}=e;return D({root:["root",r,t&&"colorDefault"],img:["img"],fallback:["fallback"]},yo,o)},jo=E("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[r.variant],r.colorDefault&&o.colorDefault]}})(W(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.grey[400],...e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})}}}]}))),Co=E("img",{name:"MuiAvatar",slot:"Img"})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Ro=E(vo,{name:"MuiAvatar",slot:"Fallback"})({width:"75%",height:"75%"});function Po({crossOrigin:e,referrerPolicy:o,src:r,srcSet:t}){const[a,c]=p.useState(!1);return p.useEffect(()=>{if(!r&&!t)return;c(!1);let l=!0;const i=new Image;return i.onload=()=>{l&&c("loaded")},i.onerror=()=>{l&&c("error")},i.crossOrigin=e,i.referrerPolicy=o,i.src=r,t&&(i.srcset=t),()=>{l=!1}},[e,o,r,t]),a}const wo=p.forwardRef(function(o,r){const t=X({props:o,name:"MuiAvatar"}),{alt:a,children:c,className:l,component:i="div",slots:d={},slotProps:s={},imgProps:u,sizes:f,src:m,srcSet:y,variant:b="circular",...S}=t;let x=null;const j={...t,component:i,variant:b},v=Po({...u,...typeof s.img=="function"?s.img(j):s.img,src:m,srcSet:y}),R=m||y,I=R&&v!=="error";j.colorDefault=!I,delete j.ownerState;const P=So(j),[w,q]=U("root",{ref:r,className:_(P.root,l),elementType:jo,externalForwardedProps:{slots:d,slotProps:s,component:i,...S},ownerState:j}),[L,T]=U("img",{className:P.img,elementType:Co,externalForwardedProps:{slots:d,slotProps:{img:{...u,...s.img}}},additionalProps:{alt:a,src:m,srcSet:y,sizes:f},ownerState:j}),[M,N]=U("fallback",{className:P.fallback,elementType:Ro,externalForwardedProps:{slots:d,slotProps:s},shouldForwardComponentProp:!0,ownerState:j});return I?x=n.jsx(L,{...T}):c||c===0?x=c:R&&a?x=a[0]:x=n.jsx(M,{...N}),n.jsx(w,{...q,children:x})});function ko(e){return z("PrivateSwitchBase",e)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Fo=e=>{const{classes:o,checked:r,disabled:t,edge:a}=e,c={root:["root",r&&"checked",t&&"disabled",a&&`edge${A(a)}`],input:["input"]};return D(c,ko,o)},Io=E(Je,{name:"MuiSwitchBase"})({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:o})=>e==="start"&&o.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:o})=>e==="end"&&o.size!=="small",style:{marginRight:-12}}]}),To=E("input",{name:"MuiSwitchBase",shouldForwardProp:be})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Bo=p.forwardRef(function(o,r){const{autoFocus:t,checked:a,checkedIcon:c,defaultChecked:l,disabled:i,disableFocusRipple:d=!1,edge:s=!1,icon:u,id:f,inputProps:m,inputRef:y,name:b,onBlur:S,onChange:x,onFocus:j,readOnly:v,required:R=!1,tabIndex:I,type:P,value:w,slots:q={},slotProps:L={},...T}=o,[M,N]=Ne({controlled:a,default:!!l,name:"SwitchBase",state:"checked"}),k=K(),h=F=>{j&&j(F),k&&k.onFocus&&k.onFocus(F)},C=F=>{S&&S(F),k&&k.onBlur&&k.onBlur(F)},B=F=>{if(F.nativeEvent.defaultPrevented)return;const O=F.target.checked;N(O),x&&x(F,O)};let $=i;k&&typeof $>"u"&&($=k.disabled);const We=P==="checkbox"||P==="radio",Q={...o,checked:M,disabled:$,disableFocusRipple:d,edge:s},ve=Fo(Q),ye={slots:q,slotProps:{input:m,...L}},[Ve,Xe]=U("root",{ref:r,elementType:Io,className:ve.root,shouldForwardComponentProp:!0,externalForwardedProps:{...ye,component:"span",...T},getSlotProps:F=>({...F,onFocus:O=>{F.onFocus?.(O),h(O)},onBlur:O=>{F.onBlur?.(O),C(O)}}),ownerState:Q,additionalProps:{centerRipple:!0,focusRipple:!d,disabled:$,role:void 0,tabIndex:null}}),[He,Ze]=U("input",{ref:y,elementType:To,className:ve.input,externalForwardedProps:ye,getSlotProps:F=>({...F,onChange:O=>{F.onChange?.(O),B(O)}}),ownerState:Q,additionalProps:{autoFocus:t,checked:a,defaultChecked:l,disabled:$,id:We?f:void 0,name:b,readOnly:v,required:R,tabIndex:I,type:P,...P==="checkbox"&&w===void 0?{}:{value:w}}});return n.jsxs(Ve,{...Xe,children:[n.jsx(He,{...Ze}),M?c:u]})});function Mo(e){return z("MuiFormControlLabel",e)}const V=G("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),qo=e=>{const{classes:o,disabled:r,labelPlacement:t,error:a,required:c}=e,l={root:["root",r&&"disabled",`labelPlacement${A(t)}`,a&&"error",c&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",a&&"error"]};return D(l,Mo,o)},Eo=E("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[{[`& .${V.label}`]:o.label},o.root,o[`labelPlacement${A(r.labelPlacement)}`]]}})(W(({theme:e})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${V.disabled}`]:{cursor:"default"},[`& .${V.label}`]:{[`&.${V.disabled}`]:{color:(e.vars||e).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:o})=>o==="start"||o==="top"||o==="bottom",style:{marginLeft:16}}]}))),Lo=E("span",{name:"MuiFormControlLabel",slot:"Asterisk"})(W(({theme:e})=>({[`&.${V.error}`]:{color:(e.vars||e).palette.error.main}}))),Z=p.forwardRef(function(o,r){const t=X({props:o,name:"MuiFormControlLabel"}),{checked:a,className:c,componentsProps:l={},control:i,disabled:d,disableTypography:s,inputRef:u,label:f,labelPlacement:m="end",name:y,onChange:b,required:S,slots:x={},slotProps:j={},value:v,...R}=t,I=K(),P=d??i.props.disabled??I?.disabled,w=S??i.props.required,q={disabled:P,required:w};["checked","name","onChange","value","inputRef"].forEach(B=>{typeof i.props[B]>"u"&&typeof t[B]<"u"&&(q[B]=t[B])});const L=$e({props:t,muiFormControl:I,states:["error"]}),T={...t,disabled:P,labelPlacement:m,required:w,error:L.error},M=qo(T),N={slots:x,slotProps:{...l,...j}},[k,h]=U("typography",{elementType:je,externalForwardedProps:N,ownerState:T});let C=f;return C!=null&&C.type!==je&&!s&&(C=n.jsx(k,{component:"span",...h,className:_(M.label,h?.className),children:C})),n.jsxs(Eo,{className:_(M.root,c),ownerState:T,ref:r,...R,children:[p.cloneElement(i,q),w?n.jsxs("div",{children:[C,n.jsxs(Lo,{ownerState:T,"aria-hidden":!0,className:M.asterisk,children:[" ","*"]})]}):C]})});function Oo(e){return z("MuiFormGroup",e)}G("MuiFormGroup",["root","row","error"]);const Ao=e=>{const{classes:o,row:r,error:t}=e;return D({root:["root",r&&"row",t&&"error"]},Oo,o)},No=E("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.row&&o.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),$o=p.forwardRef(function(o,r){const t=X({props:o,name:"MuiFormGroup"}),{className:a,row:c=!1,...l}=t,i=K(),d=$e({props:t,muiFormControl:i,states:["error"]}),s={...t,row:c,error:d.error},u=Ao(s);return n.jsx(No,{className:_(u.root,a),ownerState:s,ref:r,...l})}),Uo=ge(n.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),_o=ge(n.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})),zo=E("span",{name:"MuiRadioButtonIcon",shouldForwardProp:be})({position:"relative",display:"flex"}),Go=E(Uo,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),Do=E(_o,{name:"MuiRadioButtonIcon"})(W(({theme:e})=>({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}}]})));function Ue(e){const{checked:o=!1,classes:r={},fontSize:t}=e,a={...e,checked:o};return n.jsxs(zo,{className:r.root,ownerState:a,children:[n.jsx(Go,{fontSize:t,className:r.background,ownerState:a}),n.jsx(Do,{fontSize:t,className:r.dot,ownerState:a})]})}const _e=p.createContext(void 0);function Wo(){return p.useContext(_e)}function Vo(e){return z("MuiRadio",e)}const Ce=G("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),Xo=e=>{const{classes:o,color:r,size:t}=e,a={root:["root",`color${A(r)}`,t!=="medium"&&`size${A(t)}`]};return{...o,...D(a,Vo,o)}},Ho=E(Bo,{shouldForwardProp:e=>be(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.size!=="medium"&&o[`size${A(r.size)}`],o[`color${A(r.color)}`]]}})(W(({theme:e})=>({color:(e.vars||e).palette.text.secondary,[`&.${Ce.disabled}`]:{color:(e.vars||e).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(he()).map(([o])=>({props:{color:o,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[o].main,(e.vars||e).palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(he()).map(([o])=>({props:{color:o,disabled:!1},style:{[`&.${Ce.checked}`]:{color:(e.vars||e).palette[o].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function Zo(e,o){return typeof o=="object"&&o!==null?e===o:String(e)===String(o)}const Jo=n.jsx(Ue,{checked:!0}),Ko=n.jsx(Ue,{}),Qo=p.forwardRef(function(o,r){const t=X({props:o,name:"MuiRadio"}),{checked:a,checkedIcon:c=Jo,color:l="primary",icon:i=Ko,name:d,onChange:s,size:u="medium",className:f,disabled:m,disableRipple:y=!1,slots:b={},slotProps:S={},inputProps:x,...j}=t,v=K();let R=m;v&&typeof R>"u"&&(R=v.disabled),R??=!1;const I={...t,disabled:R,disableRipple:y,color:l,size:u},P=Xo(I),w=Wo();let q=a;const L=ao(s,w&&w.onChange);let T=d;w&&(typeof q>"u"&&(q=Zo(w.value,t.value)),typeof T>"u"&&(T=w.name));const M=S.input??x,[N,k]=U("root",{ref:r,elementType:Ho,className:_(P.root,f),shouldForwardComponentProp:!0,externalForwardedProps:{slots:b,slotProps:S,...j},getSlotProps:h=>({...h,onChange:(C,...B)=>{h.onChange?.(C,...B),L(C,...B)}}),ownerState:I,additionalProps:{type:"radio",icon:p.cloneElement(i,{fontSize:i.props.fontSize??u}),checkedIcon:p.cloneElement(c,{fontSize:c.props.fontSize??u}),disabled:R,name:T,checked:q,slots:b,slotProps:{input:typeof M=="function"?M(I):M}}});return n.jsx(N,{...k,classes:P})});function Yo(e){return z("MuiRadioGroup",e)}G("MuiRadioGroup",["root","row","error"]);const et=e=>{const{classes:o,row:r,error:t}=e;return D({root:["root",r&&"row",t&&"error"]},Yo,o)},ot=p.forwardRef(function(o,r){const{actions:t,children:a,className:c,defaultValue:l,name:i,onChange:d,value:s,...u}=o,f=p.useRef(null),m=et(o),[y,b]=Ne({controlled:s,default:l,name:"RadioGroup"});p.useImperativeHandle(t,()=>({focus:()=>{let v=f.current.querySelector("input:not(:disabled):checked");v||(v=f.current.querySelector("input:not(:disabled)")),v&&v.focus()}}),[]);const S=Ke(r,f),x=Qe(i),j=p.useMemo(()=>({name:x,onChange(v){b(v.target.value),d&&d(v,v.target.value)},value:y}),[x,d,b,y]);return n.jsx(_e.Provider,{value:j,children:n.jsx($o,{role:"radiogroup",ref:S,className:_(m.root,c),...u,children:a})})});var ee,Re;function ze(){if(Re)return ee;Re=1;function e(o){var r=typeof o;return o!=null&&(r=="object"||r=="function")}return ee=e,ee}var oe,Pe;function tt(){if(Pe)return oe;Pe=1;var e=typeof H=="object"&&H&&H.Object===Object&&H;return oe=e,oe}var te,we;function Ge(){if(we)return te;we=1;var e=tt(),o=typeof self=="object"&&self&&self.Object===Object&&self,r=e||o||Function("return this")();return te=r,te}var re,ke;function rt(){if(ke)return re;ke=1;var e=Ge(),o=function(){return e.Date.now()};return re=o,re}var ne,Fe;function nt(){if(Fe)return ne;Fe=1;var e=/\s/;function o(r){for(var t=r.length;t--&&e.test(r.charAt(t)););return t}return ne=o,ne}var ae,Ie;function at(){if(Ie)return ae;Ie=1;var e=nt(),o=/^\s+/;function r(t){return t&&t.slice(0,e(t)+1).replace(o,"")}return ae=r,ae}var se,Te;function De(){if(Te)return se;Te=1;var e=Ge(),o=e.Symbol;return se=o,se}var ie,Be;function st(){if(Be)return ie;Be=1;var e=De(),o=Object.prototype,r=o.hasOwnProperty,t=o.toString,a=e?e.toStringTag:void 0;function c(l){var i=r.call(l,a),d=l[a];try{l[a]=void 0;var s=!0}catch{}var u=t.call(l);return s&&(i?l[a]=d:delete l[a]),u}return ie=c,ie}var le,Me;function it(){if(Me)return le;Me=1;var e=Object.prototype,o=e.toString;function r(t){return o.call(t)}return le=r,le}var ce,qe;function lt(){if(qe)return ce;qe=1;var e=De(),o=st(),r=it(),t="[object Null]",a="[object Undefined]",c=e?e.toStringTag:void 0;function l(i){return i==null?i===void 0?a:t:c&&c in Object(i)?o(i):r(i)}return ce=l,ce}var de,Ee;function ct(){if(Ee)return de;Ee=1;function e(o){return o!=null&&typeof o=="object"}return de=e,de}var ue,Le;function dt(){if(Le)return ue;Le=1;var e=lt(),o=ct(),r="[object Symbol]";function t(a){return typeof a=="symbol"||o(a)&&e(a)==r}return ue=t,ue}var pe,Oe;function ut(){if(Oe)return pe;Oe=1;var e=at(),o=ze(),r=dt(),t=NaN,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,i=parseInt;function d(s){if(typeof s=="number")return s;if(r(s))return t;if(o(s)){var u=typeof s.valueOf=="function"?s.valueOf():s;s=o(u)?u+"":u}if(typeof s!="string")return s===0?s:+s;s=e(s);var f=c.test(s);return f||l.test(s)?i(s.slice(2),f?2:8):a.test(s)?t:+s}return pe=d,pe}var fe,Ae;function pt(){if(Ae)return fe;Ae=1;var e=ze(),o=rt(),r=ut(),t="Expected a function",a=Math.max,c=Math.min;function l(i,d,s){var u,f,m,y,b,S,x=0,j=!1,v=!1,R=!0;if(typeof i!="function")throw new TypeError(t);d=r(d)||0,e(s)&&(j=!!s.leading,v="maxWait"in s,m=v?a(r(s.maxWait)||0,d):m,R="trailing"in s?!!s.trailing:R);function I(h){var C=u,B=f;return u=f=void 0,x=h,y=i.apply(B,C),y}function P(h){return x=h,b=setTimeout(L,d),j?I(h):y}function w(h){var C=h-S,B=h-x,$=d-C;return v?c($,m-B):$}function q(h){var C=h-S,B=h-x;return S===void 0||C>=d||C<0||v&&B>=m}function L(){var h=o();if(q(h))return T(h);b=setTimeout(L,w(h))}function T(h){return b=void 0,R&&u?I(h):(u=f=void 0,y)}function M(){b!==void 0&&clearTimeout(b),x=0,u=S=f=b=void 0}function N(){return b===void 0?y:T(o())}function k(){var h=o(),C=q(h);if(u=arguments,f=this,S=h,C){if(b===void 0)return P(S);if(v)return clearTimeout(b),b=setTimeout(L,d),I(S)}return b===void 0&&(b=setTimeout(L,d)),y}return k.cancel=M,k.flush=N,k}return fe=l,fe}var ft=pt();const mt=Ye(ft),ht=g.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,me=g(so)`
  & .MuiInputLabel-root {
    color: #7e7e7e;
  }

  & label.Mui-focused:not(.Mui-error) {
    color: #7e7e7e;
  }

  & label.Mui-focused.Mui-error {
    color: #d32f2f;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused:not(.Mui-error) fieldset {
      border-color: #d0cfcf;
    }

    &.Mui-focused.Mui-error fieldset {
      border-color: #d32f2f;
    }

    &.Mui-error fieldset {
      border-color: #d32f2f;
    }
  }

  & .MuiInputBase-input {
    font-size: 16px;
    color: #000;
    line-height: 26px;
  }
`,gt=({onSubmitData:e,resetForm:o})=>{const r=eo().shape({name:Y().required("Required").matches(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/,"Only letters and spaces are allowed").min(2),email:Y().required("Required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Incorrect email address"),phone:Y().required("Required").matches(/^\+380\s?\(?\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,"Phone number must start with +380 and contain only numbers")}),t=oo({initialValues:{name:"",email:"",phone:""},validationSchema:r,onSubmit:()=>{},validateOnMount:!1,validateOnBlur:!0,validateOnChange:!0}),{values:a,isValid:c,resetForm:l}=t,i=p.useMemo(()=>mt(d=>{e(d)},300),[e]);return p.useEffect(()=>(i.cancel(),c?i(a):e({name:"",email:"",phone:""}),()=>i.cancel()),[a,c,i]),p.useEffect(()=>{l()},[o]),n.jsxs(ht,{onSubmit:t.handleSubmit,children:[n.jsx(me,{name:"name",autoComplete:"name",id:"outlined-name",label:"Your name",value:t.values.name,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.name&&t.values.name!==""&&!!t.errors.name,helperText:t.touched.name&&t.values.name!==""?t.errors.name:""}),n.jsx(me,{name:"email",autoComplete:"email",id:"outlined-email",label:"Email",value:t.values.email,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.email&&t.values.email!==""&&!!t.errors.email,helperText:t.touched.email&&t.values.email!==""?t.errors.email:""}),n.jsx(me,{name:"phone",autoComplete:"phone",id:"outlined-phone",label:"Phone",value:t.values.phone,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.phone&&!!t.values.phone&&!!t.errors.phone,helperText:t.touched.phone&&t.values.phone!==""?t.errors.phone:" +380 (XX) XXX - XX - XX"})]})},bt=g(io)`
  color: #000 !important;
`,J=g(Qo)`
  color: #d0cfcf;

  &:hover,
  &:focus {
    color: #f5cc66;
  }

  &.Mui-checked {
    color: #f5cc66;
  }
`,xt=({onSubmitData:e,resetForm:o})=>{const[r,t]=p.useState("frontendDeveloper"),a=c=>{const{value:l}=c.target;t(l),e(l)};return p.useEffect(()=>{t("")},[o]),n.jsx(n.Fragment,{children:n.jsxs(lo,{children:[n.jsx(bt,{id:"demo-radio-buttons-group-label",children:"Select your position"}),n.jsxs(ot,{"aria-labelledby":"demo-radio-buttons-group-label",name:"radio-buttons-group",value:r,onChange:a,children:[n.jsx(Z,{value:"frontendDeveloper",control:n.jsx(J,{}),label:"Frontend developer"}),n.jsx(Z,{value:"backendDeveloper",control:n.jsx(J,{}),label:"Backend developer"}),n.jsx(Z,{value:"designer",control:n.jsx(J,{}),label:"Designer"}),n.jsx(Z,{value:"qualityAssuranceEngineer",control:n.jsx(J,{}),label:"QA"})]})]})})},vt=g.div``,yt=g.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 54px;
  border: ${({isVisible:e})=>e?"2px solid #CB3D40":"1px solid rgba(63, 63, 63, 0.23)"};
  border-radius: 4px;
  color: #7e7e7e;
`,St=g.button`
  all: unset;

  width: 83px;
  height: 100%;
  font-size: 16px;
  line-height: 26px;
  color: #000;
  text-align: center;

  cursor: pointer;

  border: ${({isVisible:e})=>e?"2px solid #CB3D40":"1px solid #000"};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  background-color: inherit;
  margin-left: -2px;
`,jt=g.span`
  font-size: 16px;
  line-height: 26px;
  color: #000;
  margin-left: 16px;
`,Ct=g.input``,Rt=g.span`
  display: block;
  height: 18px;
  color: red;
  font-size: 14px;

  visibility: ${({isVisible:e})=>e?"visible":"hidden"};
`,Pt=5*1024*1024,wt=["image/jpeg","image/jpg"],kt=({onSubmitData:e,resetForm:o})=>{const[r,t]=p.useState("Upload your photo"),[a,c]=p.useState(""),[l,i]=p.useState(null);p.useEffect(()=>{l!==null&&e(l)},[l,e]);const d=()=>{const u=document.querySelector('input[type="file"]');u&&u.click()},s=u=>{const f=u.target.files?.[0];if(f){if(!wt.includes(f.type)){c("Only JPEG and JPG formats are supported."),t(f.name),i(null);return}if(f.size>Pt){c("File size exceeds the 5MB limit."),t(f.name),i(null);return}else c(""),t(f.name),i(f)}};return p.useEffect(()=>{t("Upload your photo"),c(""),i(null)},[o]),n.jsxs(vt,{children:[n.jsxs(yt,{isVisible:!!a,children:[n.jsx(St,{type:"button",onClick:d,isVisible:!!a,children:"Upload"}),n.jsx(jt,{children:r}),n.jsx(Ct,{type:"file",accept:"image/jpeg, image/jpg",onChange:s,style:{display:"none"}})]}),n.jsx(Rt,{isVisible:!!a,"aria-live":"polite",children:a})]})},{breakpoints:Ft}=xe,It=g.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  width: 328px;

  @media screen and (min-width: ${Ft.tablet}) {
    width: 380px;
  }
`,Tt=()=>{const[e,o]=p.useState({name:"",email:"",phone:""}),[r,t]=p.useState(""),[a,c]=p.useState(null),[l,i]=p.useState(0),[d,s]=p.useState(!0),u=Object.values(e).every(m=>m!=="");p.useEffect(()=>{s(!(u&&r&&a))},[e,r,a,u]);const f=()=>{if(u&&r&&a){const m={id:uo(),...e,position:r,photo:a};s(!0),console.log("Form submitted:",m)}else console.log("Not all forms are filled correctly"),s(!0);i(m=>m+1),o(m=>({...m,name:"",email:"",phone:""})),t(""),c(null)};return n.jsxs(It,{children:[n.jsx(gt,{onSubmitData:o,resetForm:l}),n.jsx(xt,{onSubmitData:t,resetForm:l}),n.jsx(kt,{onSubmitData:c,resetForm:l}),n.jsx(co,{variant:"signUp",onClick:()=>{f()},type:"submit",disabled:d,children:"Sign Up"})]})},{shadows:Bt}=xe,Mt=g.section`
  grid-area: profile-card;
  /* width: 400px; */
  
  border: 2px solid #f5cc66;
  border-radius: 8px;
  box-shadow: ${Bt.hoverShadow};
`,qt=g.h2`
  border-bottom: 2px solid #f5cc66;
  background-color: #f4e041;
  margin: 0;
  padding: 8px;
`,Et=g.ul``,Lt=g.li``,Ot=g.li``,At=g.li``,Nt=g.button``,$t=({user:e})=>{const[o,r]=p.useState(!1),{name:t,email:a,phone:c,avatarUrl:l}=e||{};return n.jsxs(Mt,{children:[n.jsx(qt,{children:"Profile Information"}),n.jsx(wo,{alt:t||"User Avatar",src:l||void 0}),n.jsxs(Et,{children:[n.jsx(Lt,{children:t}),n.jsx(Ot,{children:a}),n.jsx(At,{children:c??"Not provided"})]}),n.jsx(Nt,{onClick:()=>r(!o),children:"Edit Profile"}),o&&n.jsx(Tt,{})]})},Ut=g.article`
  background-color: #fff;
  border: 1px solid #a2a2a2;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;

  width: clamp(320px, 60vw, 680px);
`,_t=g.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
`,zt=g.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`,Gt=g.span`
  font-size: 16px;
  color: #555;
`,Dt=({statusCard:e})=>{const{company:o,logo:r,status:t}=e;return n.jsxs(Ut,{children:[n.jsx(_t,{src:r,alt:"Company Logo"}),n.jsx(zt,{children:o}),n.jsx(Gt,{children:t})]})},{shadows:Wt}=xe,Vt=g.section`
  grid-area: application-status;
  /* overflow: auto; */
  height: 440px;

  border: 2px solid #f5cc66;
  border-radius: 8px;
  box-shadow: ${Wt.hoverShadow};
`,Xt=g.div`
  border-bottom: 2px solid #f5cc66;
  background-color: #f4e041;
`,Ht=g.h2`
  /* border-bottom: 2px solid #f5cc66;
  background-color: #f4e041; */
  margin: 0;
  padding: 8px;
`,Zt=g.ul`
  overflow: scroll;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px;
`,Jt=g.li``,Kt=({applicationStatus:e})=>n.jsxs(Vt,{children:[n.jsx(Xt,{children:n.jsx(Ht,{children:"Application Status List"})}),n.jsx(Zt,{children:e.map(o=>n.jsx(Jt,{children:n.jsx(Dt,{statusCard:o})},o.id))})]}),Qt=[{id:"1",vacancyId:"1",logo:"/src",company:"Tech Solutions Inc.",status:"Pending",color:"#b5c9e9"},{id:"2",vacancyId:"2",logo:"/src",company:"Creative Agency LLC",status:"Approved",color:"#a2da99"},{id:"3",vacancyId:"3",logo:"/src",company:"Innovate Corp.",status:"Rejected",color:"#ec6152"},{id:"4",vacancyId:"4",logo:"/src",company:"Cloud Services Ltd.",status:"Not Applied",color:"#f5f244"},{id:"5",vacancyId:"5",logo:"/src",company:"Project Manager",status:"Approved",color:"#a2da99"},{id:"6",vacancyId:"6",logo:"/src",company:"Quality First LLC",status:"Not Applied",color:"#f5f244"}],Yt={name:"John Doe",email:"john.doe@example.com",phone:"+1234567890",avatarUrl:"/path/to/avatar.jpg"},tr=()=>n.jsxs(po,{children:[n.jsx(fo,{children:"Candidate Profile"}),n.jsx($t,{user:Yt}),n.jsx(to,{vacancies:ro,variant:"profile"}),n.jsx(Kt,{applicationStatus:Qt})]});export{tr as default};
