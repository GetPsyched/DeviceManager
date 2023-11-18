import{s as j,e as ae,i as w,y as k,d as g,I as he,A as V,T as F,U as N,V as B,h as E,j as m,k as K,v as D,l as Q,m as x,n as _e,x as J,z as Ae,W as ce,r as ue,p as qe,f as W,a as me,g as Y,c as de,C as pe,w as Oe,D as $e,S as ge}from"../chunks/scheduler.f5cfe514.js";import{S as H,i as Z,g as Pe,t as O,c as Re,a as A,b as ee,d as te,m as ne,e as oe}from"../chunks/index.c2fc59c9.js";import{h as ye,u as Ke,s as Ne,g as Be,b as Ue}from"../chunks/share.f3896174.js";import{a as Xe,t as Ve}from"../chunks/title.f08fecde.js";import{_ as fe}from"../chunks/preload-helper.a4192956.js";import{e as G}from"../chunks/each.94f093eb.js";import{c as Fe,s as We}from"../chunks/connection.c612f1cc.js";import{A as Ye}from"../chunks/ActionSelector.2ddb6b76.js";import{l as Te,c as Ge,C as je}from"../chunks/undo-redo.bbe346d2.js";import{K as He}from"../chunks/keymap-codes.fc236303.js";import{L as Ze}from"../chunks/i18n-svelte.4af892db.js";import{w as Je}from"../chunks/index.c76aaf45.js";function Qe(t){const e={name:t.name,size:[0,0],keys:[]};let o=0;for(const{row:n,offset:a}of t.col){let r=a?.[0]??0;o+=a?.[1]??0;let l=0;for(const s of n){const[c,i]=s.offset||[0,0],f=s.rotate||0;if("key"in s){const[u,_]=s.size??[1,1];e.keys.push({id:s.key,shape:"square",size:[u,_],pos:[r+c,o+i],cornerRadius:.1,rotate:f}),r+=u+c,l=Math.max(l,_+i)}else if("switch"in s){const u=r+c+1,_=o+i+1;for(const[h,d]of[s.switch.s,s.switch.w,s.switch.n,s.switch.e].entries())e.keys.push({id:d,shape:"quarter-circle",cornerRadius:0,size:[2,.6],pos:[u,_],rotate:90*h+45});e.keys.push({id:s.switch.d,shape:"square",cornerRadius:.5,size:[.8,.8],pos:[r+.6+c,o+.6+i],rotate:0}),r+=2+c,l=Math.max(l,2+i)}}o+=l,e.size[0]=Math.max(e.size[0],r)}return e.size[1]=o,e}function ke(t,e,o){const n=t.slice();n[14]=e[o],n[23]=o;const a=n[6][n[23]][n[0].id]??{action:0,isApplied:!0};n[15]=a.action,n[16]=a.isApplied;const r=He[n[15]]??{code:n[15]};n[17]=r.code,n[18]=r.icon,n[19]=r.id;const l=n[23]===n[7];n[20]=l;const s=[(n[2][0]-n[9]*3)/n[14][0],(n[2][1]-n[9]*3)/n[14][1]];return n[21]=s,n}function ve(t){let e=(t[18]||t[19]||`0x${t[17].toString(16)}`)+"",o;return{c(){o=Q(e)},l(n){o=x(n,e)},m(n,a){w(n,o,a)},p(n,a){a&65&&e!==(e=(n[18]||n[19]||`0x${n[17].toString(16)}`)+"")&&_e(o,e)},d(n){n&&g(o)}}}function be(t){let e,o;return{c(){e=N("tspan"),o=Q("•")},l(n){e=B(n,"tspan",{});var a=E(e);o=x(a,"•"),a.forEach(g)},m(n,a){w(n,e,a),D(e,o)},d(n){n&&g(e)}}}function we(t){let e,o,n,a,r,l,s,c,i,f=`${t[4]}deg`,u=t[17]!==0&&ve(t),_=!t[16]&&be();return{c(){e=N("text"),u&&u.c(),o=ae(),_&&_.c(),this.h()},l(h){e=B(h,"text",{fill:!0,"font-weight":!0,"text-anchor":!0,"alignment-baseline":!0,x:!0,y:!0,"font-size":!0,"font-family":!0,opacity:!0,class:!0});var d=E(e);u&&u.l(d),o=ae(),_&&_.l(d),d.forEach(g),this.h()},h(){m(e,"fill",n=t[16]?"currentcolor":"var(--md-sys-color-primary)"),m(e,"font-weight",a=t[16]?"":"bold"),m(e,"text-anchor","middle"),m(e,"alignment-baseline","central"),m(e,"x",r=t[3][0]+t[2][0]+(t[16]?0:t[8]/3)),m(e,"y",l=t[3][1]+t[2][1]),m(e,"font-size",s=t[1]*(t[18]?t[12]:t[8])),m(e,"font-family",c=t[18]?"Material Symbols Rounded":void 0),m(e,"opacity",i=t[20]?1:t[10]),m(e,"class","svelte-5uyll2"),K(e,"scale",t[20]?1:t[11]),K(e,"translate",t[20]?"0 0 0":`${t[21][0]}px ${t[21][1]}px 0`),K(e,"rotate",f)},m(h,d){w(h,e,d),u&&u.m(e,null),D(e,o),_&&_.m(e,null)},p(h,d){h[17]!==0?u?u.p(h,d):(u=ve(h),u.c(),u.m(e,o)):u&&(u.d(1),u=null),h[16]?_&&(_.d(1),_=null):_||(_=be(),_.c(),_.m(e,null)),d&65&&n!==(n=h[16]?"currentcolor":"var(--md-sys-color-primary)")&&m(e,"fill",n),d&65&&a!==(a=h[16]?"":"bold")&&m(e,"font-weight",a),d&77&&r!==(r=h[3][0]+h[2][0]+(h[16]?0:h[8]/3))&&m(e,"x",r),d&12&&l!==(l=h[3][1]+h[2][1])&&m(e,"y",l),d&67&&s!==(s=h[1]*(h[18]?h[12]:h[8]))&&m(e,"font-size",s),d&65&&c!==(c=h[18]?"Material Symbols Rounded":void 0)&&m(e,"font-family",c),d&128&&i!==(i=h[20]?1:h[10])&&m(e,"opacity",i),d&128&&K(e,"scale",h[20]?1:h[11]),d&164&&K(e,"translate",h[20]?"0 0 0":`${h[21][0]}px ${h[21][1]}px 0`),d&16&&f!==(f=`${h[4]}deg`)&&K(e,"rotate",f)},d(h){h&&g(e),u&&u.d(),_&&_.d()}}}function xe(t){let e,o=G(t[5]),n=[];for(let a=0;a<o.length;a+=1)n[a]=we(ke(t,o,a));return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=ae()},l(a){for(let r=0;r<n.length;r+=1)n[r].l(a);e=ae()},m(a,r){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(a,r);w(a,e,r)},p(a,[r]){if(r&8191){o=G(a[5]);let l;for(l=0;l<o.length;l+=1){const s=ke(a,o,l);n[l]?n[l].p(s,r):(n[l]=we(s),n[l].c(),n[l].m(e.parentNode,e))}for(;l<n.length;l+=1)n[l].d(1);n.length=o.length}},i:k,o:k,d(a){a&&g(e),he(n,a)}}}function et(t,e,o){let n,a;V(t,Te,v=>o(6,n=v));const{fontSize:r,margin:l,inactiveOpacity:s,inactiveScale:c,iconFontSize:i}=F("visual-layout-config"),f=F("active-layer");V(t,f,v=>o(7,a=v));let{key:u}=e,{fontSizeMultiplier:_=1}=e,{middle:h}=e,{pos:d}=e,{rotate:y}=e,{positions:se}=e;return t.$$set=v=>{"key"in v&&o(0,u=v.key),"fontSizeMultiplier"in v&&o(1,_=v.fontSizeMultiplier),"middle"in v&&o(2,h=v.middle),"pos"in v&&o(3,d=v.pos),"rotate"in v&&o(4,y=v.rotate),"positions"in v&&o(5,se=v.positions)},[u,_,h,d,y,se,n,a,r,l,s,c,i,f]}class Ce extends H{constructor(e){super(),Z(this,e,et,xe,j,{key:0,fontSizeMultiplier:1,middle:2,pos:3,rotate:4,positions:5})}}function tt(t){const e=t.slice(),o=e[7]/2;e[12]=o;const n=e[3]/2-e[7];e[13]=n;const a=e[13]-e[12];e[14]=a;const r=e[13]-e[2]+e[12]*2;e[15]=r;const l=e[15]-e[12];e[16]=l;const s=1.25;return e[17]=s,e}function nt(t){let e,o,n,a,r=`rotateZ(${t[1].rotate}deg) translate(${t[12]}px, ${t[12]}px)`,l;return a=new Ce({props:{key:t[1],middle:[t[2]-t[7]*2,t[2]-t[7]*2],pos:[t[5],t[4]],rotate:-t[1].rotate,fontSizeMultiplier:t[17],positions:[[-.5,-.5],[.5,-.5],[-.5,.5]]}}),{c(){e=N("g"),o=N("path"),ee(a.$$.fragment),this.h()},l(s){e=B(s,"g",{class:!0});var c=E(e);o=B(c,"path",{d:!0,class:!0}),E(o).forEach(g),te(a.$$.fragment,c),c.forEach(g),this.h()},h(){m(o,"d",n="M"+(t[5]+t[14])+","+t[4]+" a"+t[13]+","+t[13]+" 0 0,1 "+-t[14]+","+t[14]+" l0,"+-(t[14]-t[16])+" a"+t[15]+","+t[15]+" 0 0,0 "+t[16]+","+-t[16]+"z"),m(o,"class","svelte-pazmop"),m(e,"class","svelte-pazmop"),K(e,"transform",r)},m(s,c){w(s,e,c),D(e,o),ne(a,e,null),l=!0},p(s,c){(!l||c&60&&n!==(n="M"+(s[5]+s[14])+","+s[4]+" a"+s[13]+","+s[13]+" 0 0,1 "+-s[14]+","+s[14]+" l0,"+-(s[14]-s[16])+" a"+s[15]+","+s[15]+" 0 0,0 "+s[16]+","+-s[16]+"z"))&&m(o,"d",n);const i={};c&2&&(i.key=s[1]),c&4&&(i.middle=[s[2]-s[7]*2,s[2]-s[7]*2]),c&48&&(i.pos=[s[5],s[4]]),c&2&&(i.rotate=-s[1].rotate),a.$set(i),c&2&&r!==(r=`rotateZ(${s[1].rotate}deg) translate(${s[12]}px, ${s[12]}px)`)&&K(e,"transform",r)},i(s){l||(A(a.$$.fragment,s),l=!0)},o(s){O(a.$$.fragment,s),l=!1},d(s){s&&g(e),oe(a)}}}function ot(t){let e,o,n,a,r,l,s,c;return s=new Ce({props:{key:t[1],middle:[t[3]/2,t[2]/2],pos:[t[5],t[4]],rotate:-t[1].rotate,positions:[[-1,1],[-1,-1],[1,-1]]}}),{c(){e=N("rect"),ee(s.$$.fragment),this.h()},l(i){e=B(i,"rect",{x:!0,y:!0,rx:!0,width:!0,height:!0,"stroke-width":!0,class:!0}),E(e).forEach(g),te(s.$$.fragment,i),this.h()},h(){m(e,"x",o=t[5]+t[7]),m(e,"y",n=t[4]+t[7]),m(e,"rx",a=t[1].cornerRadius*t[6]),m(e,"width",r=t[3]-t[7]*2),m(e,"height",l=t[2]-t[7]*2),m(e,"stroke-width",t[8]),m(e,"class","svelte-pazmop")},m(i,f){w(i,e,f),ne(s,i,f),c=!0},p(i,f){(!c||f&32&&o!==(o=i[5]+i[7]))&&m(e,"x",o),(!c||f&16&&n!==(n=i[4]+i[7]))&&m(e,"y",n),(!c||f&2&&a!==(a=i[1].cornerRadius*i[6]))&&m(e,"rx",a),(!c||f&8&&r!==(r=i[3]-i[7]*2))&&m(e,"width",r),(!c||f&4&&l!==(l=i[2]-i[7]*2))&&m(e,"height",l);const u={};f&2&&(u.key=i[1]),f&12&&(u.middle=[i[3]/2,i[2]/2]),f&48&&(u.pos=[i[5],i[4]]),f&2&&(u.rotate=-i[1].rotate),s.$set(u)},i(i){c||(A(s.$$.fragment,i),c=!0)},o(i){O(s.$$.fragment,i),c=!1},d(i){i&&g(e),oe(s,i)}}}function st(t){let e,o,n,a,r,l,s;const c=[ot,nt],i=[];function f(_,h){return _[1].shape==="square"?0:_[1].shape==="quarter-circle"?1:-1}function u(_,h){return h===1?tt(_):_}return~(o=f(t))&&(n=i[o]=c[o](u(t,o))),{c(){e=N("g"),n&&n.c(),this.h()},l(_){e=B(_,"g",{class:!0,role:!0,tabindex:!0});var h=E(e);n&&n.l(h),h.forEach(g),this.h()},h(){m(e,"class","key-group svelte-pazmop"),m(e,"role","button"),m(e,"tabindex",a=t[0]+1)},m(_,h){w(_,e,h),~o&&i[o].m(e,null),r=!0,l||(s=[J(e,"click",t[9]),J(e,"keypress",t[10]),J(e,"focusin",t[11])],l=!0)},p(_,[h]){let d=o;o=f(_),o===d?~o&&i[o].p(u(_,o),h):(n&&(Pe(),O(i[d],1,1,()=>{i[d]=null}),Re()),~o?(n=i[o],n?n.p(u(_,o),h):(n=i[o]=c[o](u(_,o)),n.c()),A(n,1),n.m(e,null)):n=null),(!r||h&1&&a!==(a=_[0]+1))&&m(e,"tabindex",a)},i(_){r||(A(n),r=!0)},o(_){O(n),r=!1},d(_){_&&g(e),~o&&i[o].d(),l=!1,Ae(s)}}}function it(t,e,o){let n,a,r,l;const{scale:s,margin:c,strokeWidth:i}=F("visual-layout-config");let{i:f}=e,{key:u}=e;function _(y){ce.call(this,t,y)}function h(y){ce.call(this,t,y)}function d(y){ce.call(this,t,y)}return t.$$set=y=>{"i"in y&&o(0,f=y.i),"key"in y&&o(1,u=y.key)},t.$$.update=()=>{t.$$.dirty&2&&o(5,n=u.pos[0]*s),t.$$.dirty&2&&o(4,a=u.pos[1]*s),t.$$.dirty&2&&o(3,r=u.size[0]*s),t.$$.dirty&2&&o(2,l=u.size[1]*s)},[f,u,l,r,a,n,s,c,i,_,h,d]}class lt extends H{constructor(e){super(),Z(this,e,it,st,j,{i:0,key:1})}}function ze(t,e,o){const n=t.slice();return n[17]=e[o],n[19]=o,n}function Le(t){let e,o;function n(){return t[7](t[17])}function a(){return t[8](t[19])}function r(...l){return t[9](t[19],...l)}return e=new lt({props:{i:t[19],key:t[17]}}),e.$on("focusin",n),e.$on("click",a),e.$on("keypress",r),{c(){ee(e.$$.fragment)},l(l){te(e.$$.fragment,l)},m(l,s){ne(e,l,s),o=!0},p(l,s){t=l;const c={};s&4&&(c.key=t[17]),e.$set(c)},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){O(e.$$.fragment,l),o=!1},d(l){oe(e,l)}}}function at(t){let e,o,n,a,r,l=G(t[2].keys),s=[];for(let i=0;i<l.length;i+=1)s[i]=Le(ze(t,l,i));const c=i=>O(s[i],1,1,()=>{s[i]=null});return{c(){e=N("svg");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=B(i,"svg",{class:!0,viewBox:!0});var f=E(e);for(let u=0;u<s.length;u+=1)s[u].l(f);f.forEach(g),this.h()},h(){m(e,"class","print svelte-1nciqmp"),m(e,"viewBox",o="0 0 "+t[2].size[0]*t[3]+" "+t[2].size[1]*t[3])},m(i,f){w(i,e,f);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);t[10](e),n=!0,a||(r=J(window,"keydown",t[4]),a=!0)},p(i,[f]){if(f&37){l=G(i[2].keys);let u;for(u=0;u<l.length;u+=1){const _=ze(i,l,u);s[u]?(s[u].p(_,f),A(s[u],1)):(s[u]=Le(_),s[u].c(),A(s[u],1),s[u].m(e,null))}for(Pe(),u=l.length;u<s.length;u+=1)c(u);Re()}(!n||f&4&&o!==(o="0 0 "+i[2].size[0]*i[3]+" "+i[2].size[1]*i[3]))&&m(e,"viewBox",o)},i(i){if(!n){for(let f=0;f<l.length;f+=1)A(s[f]);n=!0}},o(i){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)O(s[f]);n=!1},d(i){i&&g(e),he(s,i),t[10](null),a=!1,r()}}}function Ee(t){return[t.pos[0]+t.size[0]/2,t.pos[1]+t.size[1]/2]}function rt(t,e,o){let n;const{scale:a,margin:r,strokeWidth:l,fontSize:s,iconFontSize:c}=F("visual-layout-config"),i=F("active-layer");let{visualLayout:f}=e;function u(p,b){const P=p.pos[0]+r,M=p.pos[1]+r,R=P+p.size[0]-r,T=M+p.size[1]-r,z=b.pos[0]+r,L=b.pos[1]+r,S=z+b.size[0]-r,I=L+b.size[1]-r,C=S<P,U=R<z,q=I<M,$=T<L;return $&&C?Math.sqrt((P-S)**2+(T-L)**2):C&&q?Math.sqrt((P-S)**2+(M-I)**2):q&&U?Math.sqrt((R-z)**2+(M-I)**2):U&&$?Math.sqrt((R-z)**2+(T-L)**2):C?P-S:U?z-R:q?M-I:$?L-T:0}function _(p){if(p.altKey||p.ctrlKey||p.shiftKey||p.metaKey)return;let b;const P=Math.PI;if(p.key==="ArrowUp")b=Math.PI;else if(p.key==="ArrowDown")b=0;else if(p.key==="ArrowRight")b=Math.PI/2;else if(p.key==="ArrowLeft")b=-Math.PI/2;else return;p.preventDefault(),d||y.firstChild.focus();const[M,R]=Ee(d);let T=1/0,z=0,L=!1;for(const[I,C]of n.keys.entries()){if(C===d)continue;const[U,q]=Ee(C),$=U-M,re=q-R,ie=Math.atan2($,re),le=u(C,d),X=Math.abs(b-ie);(L?X>Number.EPSILON:X>=P)||le>T||(T=le,z=I,L=X<=Number.EPSILON)}const S=y.children.item(z);S instanceof SVGGElement&&S.focus()}function h(p){const b=n.keys[p],P=y.children.item(p),M=new Ye({target:document.body,props:{currentAction:ue(Fe)[ue(i)][b.id]}}),R=document.querySelector("dialog > div"),T=document.querySelector("dialog"),z=R.getBoundingClientRect(),L=P.getBoundingClientRect(),S=.5,I=`${1-S*(1-L.width/z.width)} ${1-S*(1-L.height/z.height)}`,C=`${S*(L.x-z.x)}px ${S*(L.y-z.y)}px`,q={duration:150,easing:"ease"},$=R.animate([{scale:I,translate:C},{translate:"0 0",scale:"1"}],q),re=T.animate([{opacity:0},{opacity:1}],q);async function ie(){$.reverse(),re.reverse(),await $.finished,M.$destroy()}M.$on("close",ie),M.$on("select",({detail:le})=>{Ge.update(X=>(X.push({type:je.Layout,id:b.id,layer:ue(i),action:le}),X)),ie()})}let d,y;const se=p=>o(0,d=p),v=p=>h(p),De=(p,{key:b})=>{b==="Enter"&&h(p)};function Ie(p){qe[p?"unshift":"push"](()=>{y=p,o(1,y)})}return t.$$set=p=>{"visualLayout"in p&&o(6,f=p.visualLayout)},t.$$.update=()=>{t.$$.dirty&64&&o(2,n=Qe(f))},[d,y,n,a,_,h,f,se,v,De,Ie]}class ct extends H{constructor(e){super(),Z(this,e,rt,at,j,{visualLayout:6})}}function Se(t,e,o){const n=t.slice();return n[8]=e[o][0],n[9]=e[o][1],n[10]=e[o][2],n}function Me(t){let e,o=t[9]+"",n,a,r,l;function s(){return t[6](t[10])}return{c(){e=W("button"),n=Q(o),a=me(),this.h()},l(c){e=Y(c,"BUTTON",{class:!0});var i=E(e);n=x(i,o),a=de(i),i.forEach(g),this.h()},h(){m(e,"class","icon svelte-11vitej"),pe(e,"active",t[1]===t[10])},m(c,i){w(c,e,i),D(e,n),D(e,a),r||(l=[Oe(Xe.call(null,e,{title:t[8],shortcut:`alt+${t[10]+1}`})),J(e,"click",s)],r=!0)},p(c,i){t=c,i&10&&pe(e,"active",t[1]===t[10])},d(c){c&&g(e),r=!1,Ae(l)}}}function ut(t){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function ft(t){let e,o;return e=new ct({props:{visualLayout:t[7]}}),{c(){ee(e.$$.fragment)},l(n){te(e.$$.fragment,n)},m(n,a){ne(e,n,a),o=!0},p(n,a){const r={};a&1&&(r.visualLayout=n[7]),e.$set(r)},i(n){o||(A(e.$$.fragment,n),o=!0)},o(n){O(e.$$.fragment,n),o=!1},d(n){oe(e,n)}}}function _t(t){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function ht(t){let e,o,n,a,r,l=G(t[3]),s=[];for(let i=0;i<l.length;i+=1)s[i]=Me(Se(t,l,i));let c={ctx:t,current:null,token:null,hasCatch:!1,pending:_t,then:ft,catch:ut,value:7,blocks:[,,,]};return ye(a=t[4][t[0]](),c),{c(){e=W("div"),o=W("fieldset");for(let i=0;i<s.length;i+=1)s[i].c();n=me(),c.block.c(),this.h()},l(i){e=Y(i,"DIV",{class:!0});var f=E(e);o=Y(f,"FIELDSET",{class:!0});var u=E(o);for(let _=0;_<s.length;_+=1)s[_].l(u);u.forEach(g),n=de(f),c.block.l(f),f.forEach(g),this.h()},h(){m(o,"class","svelte-11vitej"),m(e,"class","container svelte-11vitej")},m(i,f){w(i,e,f),D(e,o);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(o,null);D(e,n),c.block.m(e,c.anchor=null),c.mount=()=>e,c.anchor=null,r=!0},p(i,[f]){if(t=i,f&10){l=G(t[3]);let u;for(u=0;u<l.length;u+=1){const _=Se(t,l,u);s[u]?s[u].p(_,f):(s[u]=Me(_),s[u].c(),s[u].m(o,null))}for(;u<s.length;u+=1)s[u].d(1);s.length=l.length}c.ctx=t,f&1&&a!==(a=t[4][t[0]]())&&ye(a,c)||Ke(c,t,f)},i(i){r||(A(c.block),r=!0)},o(i){for(let f=0;f<3;f+=1){const u=c.blocks[f];O(u)}r=!1},d(i){i&&g(e),he(s,i),c.block.d(),c.token=null,c=null}}}function mt(t,e,o){let n,a,r;V(t,We,f=>o(5,a=f));const l=F("active-layer");V(t,l,f=>o(1,r=f));const s=[["Numeric Layer","123",1],["Primary Layer","abc",0],["Function Layer","function",2]],c={ONE:()=>fe(()=>import("../chunks/one.784285a0.js"),[],import.meta.url).then(f=>f.default),LITE:()=>fe(()=>import("../chunks/lite.1a8da75d.js"),[],import.meta.url).then(f=>f.default),X:()=>fe(()=>import("../chunks/103-key.41a6aeb2.js"),[],import.meta.url).then(f=>f.default)},i=f=>$e(l,r=f,r);return t.$$.update=()=>{t.$$.dirty&32&&o(0,n=a?.device??"ONE")},[n,r,l,s,c,a,i]}class dt extends H{constructor(e){super(),Z(this,e,mt,ht,j,{})}}function pt(t){let e,o=t[0].share.URL_COPIED()+"",n,a,r,l=t[0].share.EXTRA_DOWNLOAD()+"",s;return{c(){e=W("h4"),n=Q(o),a=me(),r=W("button"),s=Q(l)},l(c){e=Y(c,"H4",{});var i=E(e);n=x(i,o),i.forEach(g),a=de(c),r=Y(c,"BUTTON",{});var f=E(r);s=x(f,l),f.forEach(g)},m(c,i){w(c,e,i),D(e,n),w(c,a,i),w(c,r,i),D(r,s)},p(c,[i]){i&1&&o!==(o=c[0].share.URL_COPIED()+"")&&_e(n,o),i&1&&l!==(l=c[0].share.EXTRA_DOWNLOAD()+"")&&_e(s,l)},i:k,o:k,d(c){c&&(g(e),g(a),g(r))}}}function gt(t,e,o){let n;return V(t,Ze,a=>o(0,n=a)),[n]}class yt extends H{constructor(e){super(),Z(this,e,gt,pt,j,{})}}const{window:kt}=Be;function vt(t){let e,o,n,a,r;return o=new dt({}),{c(){e=W("section"),ee(o.$$.fragment),this.h()},l(l){e=Y(l,"SECTION",{class:!0});var s=E(e);te(o.$$.fragment,s),s.forEach(g),this.h()},h(){m(e,"class","svelte-160295n")},m(l,s){w(l,e,s),ne(o,e,null),n=!0,a||(r=Oe(Ne.call(null,kt,t[0])),a=!0)},p:k,i(l){n||(A(o.$$.fragment,l),n=!0)},o(l){O(o.$$.fragment,l),n=!1},d(l){l&&g(e),oe(o),a=!1,r()}}}function bt(t,e,o){let n;V(t,Te,r=>o(1,n=r));async function a(r){const l=new URL(window.location.href);l.searchParams.set("import",await Ue({charaVersion:1,type:"layout",device:"one",layout:n.map(c=>c.map(i=>i.action))})),await navigator.clipboard.writeText(l.toString());let s;Ve(r.target,{interactive:!0,onCreate(c){const i=c.popper.querySelector(".tippy-content");s=new yt({target:i})},onHidden(c){c.destroy()},onDestroy(c){s.$destroy()}}).show()}return ge("visual-layout-config",{scale:50,inactiveScale:.5,inactiveOpacity:.4,strokeWidth:1,margin:5,fontSize:9,iconFontSize:14}),ge("active-layer",Je(0)),[a]}class Dt extends H{constructor(e){super(),Z(this,e,bt,vt,j,{})}}export{Dt as component};
