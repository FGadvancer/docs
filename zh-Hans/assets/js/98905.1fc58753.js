"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[98905,61196],{98905:(e,t,o)=>{o.r(t),o.d(t,{dyte_more_toggle:()=>i});var r=o(65733),s=o(96633),a=o(20336),n=o(46503);const i=class{constructor(e){(0,r.r)(this,e),this.stateUpdate=(0,r.c)(this,"dyteStateUpdate",7),this.handleKeyDown=({key:e})=>{"Escape"===e&&this.states.activeMoreMenu&&(this.stateUpdate.emit({activeMoreMenu:!1}),n.s.activeMoreMenu=!n.s.activeMoreMenu)},this.handleOnClick=e=>{e.composedPath().includes(this.host)||(this.stateUpdate.emit({activeMoreMenu:!1}),n.s.activeMoreMenu=!n.s.activeMoreMenu)},this.toggleMoreMenu=()=>{this.stateUpdate.emit({activeMoreMenu:!n.s.activeMoreMenu}),n.s.activeMoreMenu=!n.s.activeMoreMenu},this.states=void 0,this.size=void 0,this.iconPack=s.d,this.t=(0,a.u)()}connectedCallback(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("click",this.handleOnClick)}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("click",this.handleOnClick)}render(){const e=this.t("more");return(0,r.h)(r.H,{title:e},this.states.activeMoreMenu&&(0,r.h)("div",{class:"more-menu"},(0,r.h)("slot",{name:"more-elements"})),(0,r.h)("dyte-controlbar-button",{size:this.size,iconPack:this.iconPack,t:this.t,onClick:()=>this.toggleMoreMenu(),icon:this.iconPack.horizontal_dots,label:e,part:"controlbar-button"}),(0,r.h)("slot",{name:"expanded"}))}get host(){return(0,r.g)(this)}};i.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:flex;flex-direction:column;overflow:visible}.more-menu{position:absolute;top:calc(var(--dyte-space-2, 8px) * -1);z-index:50;margin-bottom:var(--dyte-space-3, 12px);box-sizing:border-box;max-height:60vh;width:var(--dyte-space-64, 256px);overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));outline:2px solid transparent;outline-offset:2px;transform:translateY(-100%)}:host([size='md']) .more-menu,:host([size='sm']) .more-menu{transform:translate(-175px, -100%);position:absolute;top:calc(var(--dyte-space-2, 8px) * -1);z-index:50;margin-bottom:var(--dyte-space-3, 12px);box-sizing:border-box;max-height:72vh;overflow:auto;border-radius:var(--dyte-border-radius-md, 8px);border-width:var(--dyte-border-width-sm, 1px);border-style:solid;--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));padding:var(--dyte-space-0, 0px)}:host([size='sm']) .more-menu{transform:translate(-200px, -100%)}.more-menu::-webkit-scrollbar{height:var(--dyte-space-0, 0px);width:var(--dyte-space-1\\.5, 6px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-900, 26 26 26) / var(--tw-bg-opacity))}.more-menu::-webkit-scrollbar-thumb{border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-600, 60 60 60) / var(--tw-bg-opacity))}"},46503:(e,t,o)=>{o.d(t,{o:()=>d,s:()=>c});var r=o(65733);const s=e=>!("isConnected"in e)||e.isConnected,a=((e,t)=>{let o;return(...r)=>{o&&clearTimeout(o),o=setTimeout((()=>{o=0,e(...r)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(s))}),2e3),n=e=>"function"==typeof e?e():e,i=(e,t)=>{const o=e.indexOf(t);o>=0&&(e[o]=e[e.length-1],e.length--)},{state:c,onChange:d}=((e,t)=>{const o=((e,t=((e,t)=>e!==t))=>{const o=n(e);let r=new Map(Object.entries(null!=o?o:{}));const s={dispose:[],get:[],set:[],reset:[]},a=()=>{var t;r=new Map(Object.entries(null!==(t=n(e))&&void 0!==t?t:{})),s.reset.forEach((e=>e()))},c=e=>(s.get.forEach((t=>t(e))),r.get(e)),d=(e,o)=>{const a=r.get(e);t(o,a,e)&&(r.set(e,o),s.set.forEach((t=>t(e,o,a))))},l="undefined"==typeof Proxy?{}:new Proxy(o,{get:(e,t)=>c(t),ownKeys:e=>Array.from(r.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>r.has(t),set:(e,t,o)=>(d(t,o),!0)}),h=(e,t)=>(s[e].push(t),()=>{i(s[e],t)});return{state:l,get:c,set:d,on:h,onChange:(t,o)=>{const r=h("set",((e,r)=>{e===t&&o(r)})),s=h("reset",(()=>o(n(e)[t])));return()=>{r(),s()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(h("set",t.set)),t.get&&e.push(h("get",t.get)),t.reset&&e.push(h("reset",t.reset)),t.dispose&&e.push(h("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{s.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=r.get(e);s.set.forEach((o=>o(e,t,t)))}}})(e,t);return o.use((()=>{if("function"!=typeof r.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const o=(0,r.a)();o&&((e,t,o)=>{const r=e.get(t);r?r.includes(o)||r.push(o):e.set(t,[o])})(e,t,o)},set:t=>{const o=e.get(t);o&&e.set(t,o.filter(r.f)),a(e)},reset:()=>{e.forEach((e=>e.forEach(r.f))),a(e)}}})()),o})({})}}]);