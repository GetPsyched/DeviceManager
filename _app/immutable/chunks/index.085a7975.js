import{a2 as v,a3 as b,M as S,a4 as k}from"./scheduler.f5cfe514.js";function m(o){const r=o-1;return r*r*r+1}function q(o){return o===0?o:Math.pow(2,10*(o-1))}function B(o){return o===1?o:1-Math.pow(2,-10*o)}function O(o,{delay:r=0,duration:d=400,easing:p=k}={}){const l=+getComputedStyle(o).opacity;return{delay:r,duration:d,easing:p,css:n=>`opacity: ${n*l}`}}function R(o,{delay:r=0,duration:d=400,easing:p=m,x:l=0,y:n=0,opacity:c=0}={}){const s=getComputedStyle(o),u=+s.opacity,e=s.transform==="none"?"":s.transform,t=u*(1-c),[y,i]=v(l),[$,g]=v(n);return{delay:r,duration:d,easing:p,css:(f,h)=>`
			transform: ${e} translate(${(1-f)*y}${i}, ${(1-f)*$}${g});
			opacity: ${u-t*h}`}}function V(o,{delay:r=0,duration:d=400,easing:p=m,axis:l="y"}={}){const n=getComputedStyle(o),c=+n.opacity,s=l==="y"?"height":"width",u=parseFloat(n[s]),e=l==="y"?["top","bottom"]:["left","right"],t=e.map(a=>`${a[0].toUpperCase()}${a.slice(1)}`),y=parseFloat(n[`padding${t[0]}`]),i=parseFloat(n[`padding${t[1]}`]),$=parseFloat(n[`margin${t[0]}`]),g=parseFloat(n[`margin${t[1]}`]),f=parseFloat(n[`border${t[0]}Width`]),h=parseFloat(n[`border${t[1]}Width`]);return{delay:r,duration:d,easing:p,css:a=>`overflow: hidden;opacity: ${Math.min(a*20,1)*c};${s}: ${a*u}px;padding-${e[0]}: ${a*y}px;padding-${e[1]}: ${a*i}px;margin-${e[0]}: ${a*$}px;margin-${e[1]}: ${a*g}px;border-${e[0]}-width: ${a*f}px;border-${e[1]}-width: ${a*h}px;`}}function W(o,{delay:r=0,duration:d=400,easing:p=m,start:l=0,opacity:n=0}={}){const c=getComputedStyle(o),s=+c.opacity,u=c.transform==="none"?"":c.transform,e=1-l,t=s*(1-n);return{delay:r,duration:d,easing:p,css:(y,i)=>`
			transform: ${u} scale(${1-e*i});
			opacity: ${s-t*i}
		`}}function z({fallback:o,...r}){const d=new Map,p=new Map;function l(c,s,u){const{delay:e=0,duration:t=_=>Math.sqrt(_)*30,easing:y=m}=b(b({},r),u),i=c.getBoundingClientRect(),$=s.getBoundingClientRect(),g=i.left-$.left,f=i.top-$.top,h=i.width/$.width,a=i.height/$.height,C=Math.sqrt(g*g+f*f),x=getComputedStyle(s),M=x.transform==="none"?"":x.transform,F=+x.opacity;return{delay:e,duration:S(t)?t(C):t,easing:y,css:(_,w)=>`
				opacity: ${_*F};
				transform-origin: top left;
				transform: ${M} translate(${w*g}px,${w*f}px) scale(${_+(1-_)*h}, ${_+(1-_)*a});
			`}}function n(c,s,u){return(e,t)=>(c.set(t.key,e),()=>{if(s.has(t.key)){const y=s.get(t.key);return s.delete(t.key),l(y,e,t)}return c.delete(t.key),o&&o(e,t,u)})}return[n(p,d,!1),n(d,p,!0)]}export{R as a,q as b,W as c,z as d,B as e,O as f,V as s};
