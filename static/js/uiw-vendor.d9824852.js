/*! For license information please see uiw-vendor.d9824852.js.LICENSE.txt */
(self.webpackChunkui_color=self.webpackChunkui_color||[]).push([[315],{535:(e,r,t)=>{"use strict";t.d(r,{D9:()=>b,RV:()=>h,SX:()=>l,dR:()=>i,db:()=>f,ss:()=>g,yW:()=>x});var a=t(168),o=t(658),s=255,n=100,l=e=>{var{r:r,g:t,b:a,a:o}=e,l=Math.max(r,t,a),i=l-Math.min(r,t,a),c=i?l===r?(t-a)/i:l===t?2+(a-r)/i:4+(r-t)/i:0;return{h:60*(c<0?c+6:c),s:l?i/l*n:0,v:l/s*n,a:o}},i=e=>{var{h:r,s:t,l:a,a:o}=c(e);return"hsla("+r+", "+t+"%, "+a+"%, "+o+")"},c=e=>{var{h:r,s:t,v:a,a:o}=e,s=(200-t)*a/n;return{h:r,s:s>0&&s<200?t*a/n/(s<=n?s:200-s)*n:0,l:s/2,a:o}},d=(Math.PI,e=>{var r,{r:t,g:a,b:o}=e;return"#"+(r=(t<<16|a<<8|o).toString(16),new Array(7-r.length).join("0")+r)}),p=e=>{var{r:r,g:t,b:a,a:o}=e,s="number"===typeof o&&(255*o|256).toString(16).slice(1);return""+d({r:r,g:t,b:a,a:o})+(s||"")},h=e=>l(u(e)),u=e=>{var r=e.replace("#","");/^#?/.test(e)&&3===r.length&&(e="#"+r.charAt(0)+r.charAt(0)+r.charAt(1)+r.charAt(1)+r.charAt(2)+r.charAt(2));var t=new RegExp("[A-Za-z0-9]{2}","g"),[a,o,n=0,l]=e.match(t).map((e=>parseInt(e,16)));return{r:a,g:o,b:n,a:(null!=l?l:255)/s}},g=e=>{var{h:r,s:t,v:o,a:l}=e,i=r/60,c=t/n,d=o/n,p=Math.floor(i)%6,h=i-Math.floor(i),u=s*d*(1-c),g=s*d*(1-c*h),f=s*d*(1-c*(1-h));d*=s;var b={};switch(p){case 0:b.r=d,b.g=f,b.b=u;break;case 1:b.r=g,b.g=d,b.b=u;break;case 2:b.r=u,b.g=d,b.b=f;break;case 3:b.r=u,b.g=g,b.b=d;break;case 4:b.r=f,b.g=u,b.b=d;break;case 5:b.r=d,b.g=u,b.b=g}return b.r=Math.round(b.r),b.g=Math.round(b.g),b.b=Math.round(b.b),(0,a.A)({},b,{a:l})},f=e=>{var{r:r,g:t,b:a,a:o}=g(e);return"rgba("+r+", "+t+", "+a+", "+o+")"},b=e=>d(g(e)),x=e=>{var r,t,a,s,n,l,i,d;return"string"===typeof e&&(0,o.Am)(e)?(l=h(e),i=e):"string"!==typeof e&&(l=e),l&&(a=(e=>{var{h:r,s:t,v:a}=e;return{h:r,s:t,v:a}})(l),n=c(l),s=g(l),d=p(s),i=b(l),t=(e=>{var{h:r,s:t,l:a}=e;return{h:r,s:t,l:a}})(n),r=(e=>{var{r:r,g:t,b:a}=e;return{r:r,g:t,b:a}})(s)),{rgb:r,hsl:t,hsv:a,rgba:s,hsla:n,hsva:l,hex:i,hexa:d}}},658:(e,r,t)=>{"use strict";t.d(r,{Am:()=>a});var a=e=>/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(e)},923:function(e){e.exports=function(){"use strict";function e(e,r){if("undefined"===typeof document)return;const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-9999px"},document.body.appendChild(t);const a=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select();let o=!1;try{o=!!document.execCommand("copy")}catch(s){o=!1}document.body.removeChild(t),a&&document.getSelection&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a)),r&&r(o)}return e}()},648:(e,r,t)=>{"use strict";t.d(r,{Ay:()=>u});var a=t(168),o=t(587),s=t(937),n=t(535),l=t(220),i=t(629),c=["className","prefixCls","left","top","style","fillProps"],d=e=>{var{className:r,prefixCls:t,left:s,top:n,style:l,fillProps:d}=e,p=(0,o.A)(e,c),h=(0,a.A)({},l,{position:"absolute",left:s,top:n}),u=(0,a.A)({width:18,height:18,boxShadow:"var(--alpha-pointer-box-shadow)",borderRadius:"50%",backgroundColor:"var(--alpha-pointer-background-color)"},null==d?void 0:d.style,{transform:s?"translate(-9px, -1px)":"translate(-1px, -9px)"});return(0,i.jsx)("div",(0,a.A)({className:t+"-pointer "+(r||""),style:h},p,{children:(0,i.jsx)("div",(0,a.A)({className:t+"-fill"},d,{style:u}))}))},p=["prefixCls","className","hsva","background","bgProps","innerProps","pointerProps","radius","width","height","direction","style","onChange","pointer"],h=s.forwardRef(((e,r)=>{var{prefixCls:t="w-color-alpha",className:s,hsva:c,background:h,bgProps:u={},innerProps:g={},pointerProps:f={},radius:b=0,width:x,height:v=16,direction:m="horizontal",style:A,onChange:y,pointer:w}=e,C=(0,o.A)(e,p),k=e=>{y&&y((0,a.A)({},c,{a:"horizontal"===m?e.left:e.top}),e)},R=(0,n.dR)(Object.assign({},c,{a:1})),j="linear-gradient(to "+("horizontal"===m?"right":"bottom")+", rgba(244, 67, 54, 0) 0%, "+R+" 100%)",N={};"horizontal"===m?N.left=100*c.a+"%":N.top=100*c.a+"%";var S=(0,a.A)({"--alpha-background-color":"#fff","--alpha-pointer-background-color":"rgb(248, 248, 248)","--alpha-pointer-box-shadow":"rgb(0 0 0 / 37%) 0px 1px 4px 0px",borderRadius:b,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center",backgroundColor:"var(--alpha-background-color)"},A,{position:"relative"},{width:x,height:v}),B=w&&"function"===typeof w?w((0,a.A)({prefixCls:t},f,N)):(0,i.jsx)(d,(0,a.A)({},f,{prefixCls:t},N));return(0,i.jsxs)("div",(0,a.A)({},C,{className:[t,t+"-"+m,s||""].filter(Boolean).join(" "),style:S,ref:r,children:[(0,i.jsx)("div",(0,a.A)({},u,{style:(0,a.A)({inset:0,position:"absolute",background:h||j,borderRadius:b},u.style)})),(0,i.jsx)(l.Ay,(0,a.A)({},g,{style:(0,a.A)({},g.style,{inset:0,zIndex:1,position:"absolute"}),onMove:k,onDown:k,children:B}))]}))}));h.displayName="Alpha";const u=h},205:(e,r,t)=>{"use strict";t.d(r,{A:()=>g});var a=t(454),o=t(168),s=t(587),n=t(937),l=t(658),i=t(535),c=t(150),d=t(629);function p(e){var{style:r,title:t,checked:a,color:s,onClick:l,rectProps:i}=e,c=(0,n.useRef)(null),p=(0,n.useCallback)((()=>{c.current.style.transform="scale(1.2)"}),[]),h=(0,n.useCallback)((()=>{c.current.style.transform="scale(1)"}),[]),u=(0,o.A)({"--circle-point-background-color":"#fff",height:a?"100%":0,width:a?"100%":0,borderRadius:"50%",backgroundColor:"var(--circle-point-background-color)",boxSizing:"border-box",transition:"height 100ms ease 0s, width 100ms ease 0s"},i.style);return(0,d.jsx)("div",{ref:c,onClick:l,onMouseEnter:p,onMouseLeave:h,title:t,style:(0,o.A)({},r,{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:3,borderRadius:"50%",marginRight:12,marginBottom:12,boxSizing:"border-box",transform:"scale(1)",boxShadow:s+" 0px 0px "+(a?5:0)+"px",transition:"transform 100ms ease 0s, box-shadow 100ms ease 0s"}),children:(0,d.jsx)("div",(0,o.A)({},i,{style:u}))})}var h=["prefixCls","className","color","colors","rectProps","onChange"],u=n.forwardRef(((e,r)=>{var{prefixCls:t="w-color-circle",className:n,color:u,colors:g=[],rectProps:f={},onChange:b}=e,x=(0,s.A)(e,h),v="string"===typeof u&&(0,l.Am)(u)?(0,i.RV)(u):u||{},m=u?(0,i.D9)(v):"";return(0,d.jsx)(c.A,(0,o.A)({ref:r,colors:g,color:m},x,{className:[t,n].filter(Boolean).join(" "),rectRender:e=>{var r=(0,o.A)({},((0,a.A)(e),e));return(0,d.jsx)(p,(0,o.A)({},r,{rectProps:f}))},onChange:e=>{b&&b((0,i.yW)(e))}}))}));u.displayName="Circle";const g=u},691:(e,r,t)=>{"use strict";t.d(r,{A:()=>p});var a=t(168),o=t(587),s=t(937),n=t(535),l=t(648),i=t(629),c=["prefixCls","className","onChange","direction","hsva"],d=s.forwardRef(((e,r)=>{var{prefixCls:t="w-color-saturation",className:s,onChange:d,direction:p="horizontal",hsva:h}=e,u=(0,o.A)(e,c),g=(0,n.dR)((0,a.A)({},h,{a:1,v:100}));return(0,i.jsx)(l.Ay,(0,a.A)({ref:r},u,{className:t+" "+(s||""),hsva:{h:h.h,s:h.s,v:h.v,a:1-h.v/100},direction:p,background:"linear-gradient(to "+("horizontal"===p?"right":"bottom")+", "+g+", rgb(0, 0, 0))",onChange:(e,r)=>{d&&d({v:"horizontal"===p?100-100*r.left:100-100*r.top})}}))}));d.displayName="ShadeSlider";const p=d},267:(e,r,t)=>{"use strict";t.d(r,{A:()=>B});var a=t(168),o=t(587),s=t(937),n=t(535),l=t(220),i=t(629),c=e=>{var{className:r,color:t,left:a,top:o,prefixCls:n}=e,l={position:"absolute",top:o,left:a},c={"--saturation-pointer-box-shadow":"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"var(--saturation-pointer-box-shadow)",borderRadius:"50%",backgroundColor:t};return(0,s.useMemo)((()=>(0,i.jsx)("div",{className:n+"-pointer "+(r||""),style:l,children:(0,i.jsx)("div",{className:n+"-fill",style:c})})),[o,a,t,r,n])},d=["prefixCls","radius","pointer","className","hue","style","hsva","onChange"],p=s.forwardRef(((e,r)=>{var t,{prefixCls:p="w-color-saturation",radius:h=0,pointer:u,className:g,hue:f=0,style:b,hsva:x,onChange:v}=e,m=(0,o.A)(e,d),A=(0,a.A)({width:200,height:200,borderRadius:h},b,{position:"relative"}),y=(e,r)=>{v&&x&&v({h:x.h,s:100*e.left,v:100*(1-e.top),a:x.a})},w=(0,s.useMemo)((()=>{if(!x)return null;var e={top:100-x.v+"%",left:x.s+"%",color:(0,n.dR)(x)};return u&&"function"===typeof u?u((0,a.A)({prefixCls:p},e)):(0,i.jsx)(c,(0,a.A)({prefixCls:p},e))}),[x,u,p]);return(0,i.jsx)(l.Ay,(0,a.A)({className:[p,g||""].filter(Boolean).join(" ")},m,{style:(0,a.A)({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+(null!=(t=null==x?void 0:x.h)?t:f)+", 100%, 50%))"},A),ref:r,onMove:y,onDown:y,children:w}))}));p.displayName="Saturation";const h=p;var u=t(648),g=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],f=s.forwardRef(((e,r)=>{var{prefixCls:t="w-color-editable-input",placement:n="bottom",label:l,value:c,className:d,style:p,labelStyle:h,inputStyle:u,onChange:f,onBlur:b}=e,x=(0,o.A)(e,g),[v,m]=(0,s.useState)(c),A=(0,s.useRef)(!1);(0,s.useEffect)((()=>{e.value!==v&&(A.current||m(e.value))}),[e.value]);var y={};"bottom"===n&&(y.flexDirection="column"),"top"===n&&(y.flexDirection="column-reverse"),"left"===n&&(y.flexDirection="row-reverse");var w=(0,a.A)({"--editable-input-label-color":"rgb(153, 153, 153)","--editable-input-box-shadow":"rgb(204 204 204) 0px 0px 0px 1px inset","--editable-input-color":"#666",position:"relative",alignItems:"center",display:"flex",fontSize:11},y,p),C=(0,a.A)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,background:"transparent",boxSizing:"border-box",border:"none",color:"var(--editable-input-color)",boxShadow:"var(--editable-input-box-shadow)"},u);return(0,i.jsxs)("div",{className:[t,d||""].filter(Boolean).join(" "),style:w,children:[(0,i.jsx)("input",(0,a.A)({ref:r,value:v,onChange:function(e,r){var t=(r||e.target.value).trim().replace(/^#/,"");/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(t)&&f&&f(e,t);var a=(e=>Number(String(e).replace(/%/g,"")))(t);isNaN(a)||f&&f(e,a),m(t)},onBlur:function(r){A.current=!1,m(e.value),b&&b(r)},autoComplete:"off",onFocus:()=>A.current=!0},x,{style:C})),l&&(0,i.jsx)("span",{style:(0,a.A)({color:"var(--editable-input-label-color)",textTransform:"capitalize"},h),children:l})]})}));f.displayName="EditableInput";const b=f;var x=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],v=s.forwardRef(((e,r)=>{var{prefixCls:t="w-color-editable-input-rgba",hsva:s,placement:l="bottom",rProps:c={},gProps:d={},bProps:p={},aProps:h={},className:u,style:g,onChange:f}=e,v=(0,o.A)(e,x),m=s?(0,n.ss)(s):{};function A(e){var r=Number(e.target.value);r&&r>255&&(e.target.value="255"),r&&r<0&&(e.target.value="0")}var y=(e,r,t)=>{"number"===typeof e&&("a"===r&&(e<0&&(e=0),e>100&&(e=100),f&&f((0,n.yW)((0,n.SX)((0,a.A)({},m,{a:e/100}))))),e>255&&(e=255,t.target.value="255"),e<0&&(e=0,t.target.value="0"),"r"===r&&f&&f((0,n.yW)((0,n.SX)((0,a.A)({},m,{r:e})))),"g"===r&&f&&f((0,n.yW)((0,n.SX)((0,a.A)({},m,{g:e})))),"b"===r&&f&&f((0,n.yW)((0,n.SX)((0,a.A)({},m,{b:e})))))};return(0,i.jsxs)("div",(0,a.A)({ref:r,className:[t,u||""].filter(Boolean).join(" ")},v,{style:(0,a.A)({fontSize:11,display:"flex"},g),children:[(0,i.jsx)(b,(0,a.A)({label:"R",value:m.r||0,onBlur:A,placement:l,onChange:(e,r)=>y(r,"r",e)},c,{style:(0,a.A)({},c.style)})),(0,i.jsx)(b,(0,a.A)({label:"G",value:m.g||0,onBlur:A,placement:l,onChange:(e,r)=>y(r,"g",e)},d,{style:(0,a.A)({marginLeft:5},c.style)})),(0,i.jsx)(b,(0,a.A)({label:"B",value:m.b||0,onBlur:A,placement:l,onChange:(e,r)=>y(r,"b",e)},p,{style:(0,a.A)({marginLeft:5},p.style)})),h&&(0,i.jsx)(b,(0,a.A)({label:"A",value:m.a?parseInt(String(100*m.a),10):0,onBlur:A,placement:l,onChange:(e,r)=>y(r,"a",e)},h,{style:(0,a.A)({marginLeft:5},h.style)}))]}))}));v.displayName="EditableInputRGBA";const m=v;var A=["prefixCls","className","hue","onChange","direction"],y=s.forwardRef(((e,r)=>{var{prefixCls:t="w-color-hue",className:s,hue:n=0,onChange:l,direction:c="horizontal"}=e,d=(0,o.A)(e,A);return(0,i.jsx)(u.Ay,(0,a.A)({ref:r,className:t+" "+(s||"")},d,{direction:c,background:"linear-gradient(to "+("horizontal"===c?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:n,s:100,v:100,a:n/360},onChange:(e,r)=>{l&&l({h:"horizontal"===c?360*r.left:360*r.top})}}))}));y.displayName="Hue";const w=y;var C=t(658),k=t(150),R=["prefixCls","className","onChange","width","presetColors","color","editableDisable","disableAlpha","style"],j=["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],N=e=>(0,i.jsx)("div",{style:{boxShadow:"rgb(0 0 0 / 60%) 0px 0px 2px",width:4,top:1,bottom:1,left:e.left,borderRadius:1,position:"absolute",backgroundColor:"#fff"}}),S=s.forwardRef(((e,r)=>{var{prefixCls:t="w-color-sketch",className:l,onChange:c,width:d=218,presetColors:p=j,color:g,editableDisable:f=!0,disableAlpha:x=!1,style:v}=e,A=(0,o.A)(e,R),[y,S]=(0,s.useState)({h:209,s:36,v:90,a:1});(0,s.useEffect)((()=>{"string"===typeof g&&(0,C.Am)(g)&&S((0,n.RV)(g)),"object"===typeof g&&S(g)}),[g]);var B=e=>{S(e),c&&c((0,n.yW)(e))},P=(0,a.A)({"--sketch-background":"rgb(255, 255, 255)","--sketch-box-shadow":"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px","--sketch-swatch-box-shadow":"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset","--sketch-alpha-box-shadow":"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset","--sketch-swatch-border-top":"1px solid rgb(238, 238, 238)",background:"var(--sketch-background)",borderRadius:4,boxShadow:"var(--sketch-box-shadow)",width:d},v),E={borderRadius:2,background:(0,n.db)(y),boxShadow:"var(--sketch-alpha-box-shadow)"};return(0,i.jsxs)("div",(0,a.A)({},A,{className:t+" "+(l||""),ref:r,style:P,children:[(0,i.jsxs)("div",{style:{padding:"10px 10px 8px"},children:[(0,i.jsx)(h,{hsva:y,style:{width:"auto",height:150},onChange:e=>B((0,a.A)({},y,e,{a:y.a}))}),(0,i.jsxs)("div",{style:{display:"flex",marginTop:4},children:[(0,i.jsxs)("div",{style:{flex:1},children:[(0,i.jsx)(w,{width:"auto",height:10,hue:y.h,pointer:N,innerProps:{style:{marginLeft:1,marginRight:5}},onChange:e=>B((0,a.A)({},y,e))}),!x&&(0,i.jsx)(u.Ay,{width:"auto",height:10,hsva:y,pointer:N,style:{marginTop:4},innerProps:{style:{marginLeft:1,marginRight:5}},onChange:e=>B((0,a.A)({},y,{a:e.a}))})]}),!x&&(0,i.jsx)(u.Ay,{width:24,height:24,hsva:y,radius:2,style:{marginLeft:4},bgProps:{style:{background:"transparent"}},innerProps:{style:E},pointer:()=>(0,i.jsx)(s.Fragment,{})})]})]}),f&&(0,i.jsxs)("div",{style:{display:"flex",margin:"0 10px 3px 10px"},children:[(0,i.jsx)(b,{label:"Hex",value:(0,n.D9)(y).replace(/^#/,"").toLocaleUpperCase(),onChange:(e,r)=>{var t;"string"===typeof(t=r)&&(0,C.Am)(t)&&/(3|6)/.test(String(t.length))&&B((0,n.RV)(t))},style:{minWidth:58}}),(0,i.jsx)(m,{hsva:y,style:{marginLeft:6},aProps:!x&&{},onChange:e=>B(e.hsva)})]}),p&&p.length>0&&(0,i.jsx)(k.A,{style:{borderTop:"var(--sketch-swatch-border-top)",paddingTop:10,paddingLeft:10},colors:p,color:(0,n.D9)(y),onChange:e=>B(e),rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:3,boxShadow:"var(--sketch-swatch-box-shadow)"}}})]}))}));S.displayName="Sketch";const B=S},150:(e,r,t)=>{"use strict";t.d(r,{A:()=>d});var a=t(168),o=t(587),s=t(937),n=t(535),l=t(629),i=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],c=s.forwardRef(((e,r)=>{var{prefixCls:t="w-color-swatch",className:c,color:d,colors:p=[],style:h,rectProps:u={},onChange:g,addonAfter:f,addonBefore:b,rectRender:x}=e,v=(0,o.A)(e,i),m=(0,a.A)({"--swatch-background-color":"rgb(144, 19, 254)",background:"var(--swatch-background-color)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},u.style),A=(e,r)=>{g&&g((0,n.RV)(e),(0,n.yW)((0,n.RV)(e)),r)};return(0,l.jsxs)("div",(0,a.A)({ref:r},v,{className:[t,c||""].filter(Boolean).join(" "),style:(0,a.A)({display:"flex",flexWrap:"wrap",position:"relative"},h),children:[b&&s.isValidElement(b)&&b,p&&Array.isArray(p)&&p.map(((e,r)=>{var t="",o="";"string"===typeof e&&(t=e,o=e),"object"===typeof e&&e.color&&(t=e.title||e.color,o=e.color);var n=d&&d.toLocaleLowerCase()===o.toLocaleLowerCase();if(x)return x({key:r,title:t,color:o,checked:!!n,style:(0,a.A)({},m,{background:o}),onClick:e=>A(o,e)});var i=u.children&&s.isValidElement(u.children)?s.cloneElement(u.children,{color:o,checked:n}):null;return(0,l.jsx)("div",(0,a.A)({tabIndex:0,title:t,onClick:e=>A(o,e)},u,{children:i,style:(0,a.A)({},m,{background:o})}),r)})),f&&s.isValidElement(f)&&f]}))}));c.displayName="Swatch";const d=c},479:(e,r,t)=>{"use strict";t.d(r,{A:()=>m});var a=t(168),o=t(587),s=t(937),n=t(658),l=t(535),i=t(220),c=t(629),d=e=>{var{className:r,color:t,left:o,top:s,style:n,prefixCls:l}=e,i=(0,a.A)({},n,{position:"absolute",top:s,left:o}),d=l+"-pointer "+(r||"");return(0,c.jsx)("div",{className:d,style:i,children:(0,c.jsx)("div",{className:l+"-fill",style:{width:10,height:10,transform:"translate(-5px, -5px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:"#fff"},children:(0,c.jsx)("div",{style:{inset:0,borderRadius:"50%",position:"absolute",backgroundColor:t}})})})},p=2*Math.PI,h=(e,r)=>(e%r+r)%r,u=(e,r)=>Math.sqrt(e*e+r*r);function g(e){var{width:r=0}=e,t=r/2;return{width:r,radius:t,cx:t,cy:t}}function f(e){var{width:r=0}=e;return r/2}function b(e,r,t){var a=e.angle||0,o=e.direction;return t&&"clockwise"===o?r=a+r:"clockwise"===o?r=360-a+r:t&&"anticlockwise"===o?r=a+180-r:"anticlockwise"===o&&(r=a-r),h(r,360)}var x=["prefixCls","radius","pointer","className","style","width","height","oval","direction","angle","color","onChange"],v=s.forwardRef(((e,r)=>{var{prefixCls:t="w-color-wheel",radius:s=0,pointer:h,className:v,style:m,width:A=200,height:y=200,oval:w,direction:C="anticlockwise",angle:k=180,color:R,onChange:j}=e,N=(0,o.A)(e,x),S="string"===typeof R&&(0,n.Am)(R)?(0,l.RV)(R):R||{},B=R?(0,l.D9)(S):"",P=function(e,r){var{cx:t,cy:a}=g(e),o=f(e),s=(180+b(e,r.h,!0))*(p/360),n=r.s/100*o,l="clockwise"===e.direction?-1:1;return{x:t+n*Math.cos(s)*l,y:a+n*Math.sin(s)*l}}({width:A},S),E={top:"0",left:"0",color:B},M=(e,r)=>{var t=function(e,r,t){var{cx:a,cy:o}=g(e),s=f(e);r=a-r,t=o-t;var n=b(e,Math.atan2(-t,-r)*(360/p)),l=Math.min(u(r,t),s);return{h:Math.round(n),s:Math.round(100/s*l)}}({width:A},A-e.x,y-e.y),a={h:t.h,s:t.s,v:S.v,a:S.a};j&&j((0,l.yW)(a))},D={zIndex:1,transform:"translate("+P.x+"px, "+P.y+"px) "+("x"===w||"X"===w?"scaleY(2)":"y"===w||"Y"===w?"scaleX(2)":"")},z=h&&"function"===typeof h?h((0,a.A)({prefixCls:t,style:D},E)):(0,c.jsx)(d,(0,a.A)({prefixCls:t,style:D},E));return(0,c.jsxs)(i.Ay,(0,a.A)({className:[t,v||""].filter(Boolean).join(" ")},N,{style:(0,a.A)({position:"relative",width:A,transform:"x"===w||"X"===w?"scaleY(0.5)":"y"===w||"Y"===w?"scaleX(0.5)":"",height:y},m),ref:r,onMove:M,onDown:M,children:[z,(0,c.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"anticlockwise"===C?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)",transform:"rotateZ("+(k+90)+"deg)",inset:0}}),(0,c.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle closest-side, #fff, transparent)",inset:0}}),(0,c.jsx)("div",{style:{backgroundColor:"#000",borderRadius:"50%",position:"absolute",inset:0,opacity:"number"===typeof S.v?1-S.v/100:0}})]}))}));v.displayName="Wheel";const m=v},220:(e,r,t)=>{"use strict";t.d(r,{Ay:()=>g});var a=t(168),o=t(587),s=t(937);function n(e){var r=(0,s.useRef)(e);return(0,s.useEffect)((()=>{r.current=e})),(0,s.useCallback)(((e,t)=>r.current&&r.current(e,t)),[])}var l=e=>"touches"in e,i=e=>{!l(e)&&e.preventDefault&&e.preventDefault()},c=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},d=(e,r)=>{var t=e.getBoundingClientRect(),a=l(r)?r.touches[0]:r;return{left:c((a.pageX-(t.left+window.pageXOffset))/t.width),top:c((a.pageY-(t.top+window.pageYOffset))/t.height),width:t.width,height:t.height,x:a.pageX-(t.left+window.pageXOffset),y:a.pageY-(t.top+window.pageYOffset)}},p=t(629),h=["prefixCls","className","onMove","onDown"],u=s.forwardRef(((e,r)=>{var{prefixCls:t="w-color-interactive",className:c,onMove:u,onDown:g}=e,f=(0,o.A)(e,h),b=(0,s.useRef)(null),x=(0,s.useRef)(!1),[v,m]=(0,s.useState)(!1),A=n(u),y=n(g),w=(0,s.useCallback)((e=>{i(e),(l(e)?e.touches.length>0:e.buttons>0)&&b.current?A&&A(d(b.current,e),e):m(!1)}),[A]),C=(0,s.useCallback)((()=>m(!1)),[]),k=(0,s.useCallback)((e=>{var r=e?window.addEventListener:window.removeEventListener;r(x.current?"touchmove":"mousemove",w),r(x.current?"touchend":"mouseup",C)}),[]);(0,s.useEffect)((()=>(k(v),()=>{v&&k(!1)})),[v,k]);var R=(0,s.useCallback)((e=>{i(e.nativeEvent),(e=>!(x.current&&!l(e))&&(x.current=l(e),!0))(e.nativeEvent)&&(y&&y(d(b.current,e.nativeEvent),e.nativeEvent),m(!0))}),[y]);return(0,p.jsx)("div",(0,a.A)({},f,{className:[t,c||""].filter(Boolean).join(" "),style:(0,a.A)({},f.style,{touchAction:"none"}),ref:b,tabIndex:0,onMouseDown:R,onTouchStart:R}))}));u.displayName="Interactive";const g=u}}]);
//# sourceMappingURL=uiw-vendor.d9824852.js.map