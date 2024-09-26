"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[75703,70573],{70573:(t,e,s)=>{s.r(e),s.d(e,{dyte_chat_toggle:()=>h});var a=s(65733),i=s(96633),n=s(20336),o=s(46503),r=s(27637),c=s(64734);s(24555);const h=class{constructor(t){(0,a.r)(this,t),this.stateUpdate=(0,a.c)(this,"dyteStateUpdate",7),this.onChatUpdate=({action:t,message:e})=>{var s;this.chatActive||"add"===t&&e.userId!==(null===(s=this.meeting)||void 0===s?void 0:s.self.userId)&&(this.hasNewMessages=!0,this.unreadMessageCount+=1)},this.toggleChat=()=>{const t=this.states||o.s;this.chatActive=!((null==t?void 0:t.activeSidebar)&&"chat"===(null==t?void 0:t.sidebar)),this.chatActive&&(this.unreadMessageCount=0,this.hasNewMessages=!1),o.s.activeSidebar=this.chatActive,o.s.activeMoreMenu=!1,o.s.sidebar=this.chatActive?"chat":"none",this.stateUpdate.emit({activeSidebar:this.chatActive,sidebar:this.chatActive?"chat":"none",activeMoreMenu:!1,activeAI:!1})},this.updateCanView=()=>{this.canViewChat=(0,c.c)(this.meeting)},this.unreadMessageCount=0,this.variant="button",this.meeting=void 0,this.states=void 0,this.size=void 0,this.iconPack=i.d,this.t=(0,n.u)(),this.chatActive=!1,this.canViewChat=!1,this.hasNewMessages=!1}connectedCallback(){this.meetingChanged(this.meeting),this.statesChanged(this.states),(0,o.o)("sidebar",(()=>this.statesChanged()))}disconnectedCallback(){var t,e,s,a;null===(e=null===(t=this.meeting)||void 0===t?void 0:t.chat)||void 0===e||e.removeListener("chatUpdate",this.onChatUpdate),null===(a=null===(s=this.meeting)||void 0===s?void 0:s.stage)||void 0===a||a.removeListener("stageStatusUpdate",this.updateCanView)}meetingChanged(t){var e,s,a,i;null!=t&&((0,r.u)(t)&&(null===(e=t.chat)||void 0===e||e.getMessages((new Date).getTime(),1,!0).then((t=>{var e;(null===(e=null==t?void 0:t.messages)||void 0===e?void 0:e.length)&&(this.hasNewMessages=!0)}))),this.unreadMessageCount=(null===(s=t.chat)||void 0===s?void 0:s.messages.length)||0,null===(a=t.chat)||void 0===a||a.addListener("chatUpdate",this.onChatUpdate),this.canViewChat=(0,c.c)(t),null===(i=null==t?void 0:t.stage)||void 0===i||i.on("stageStatusUpdate",this.updateCanView))}statesChanged(t){const e=t||o.s;null!=e&&(this.chatActive=!0===e.activeSidebar&&"chat"===e.sidebar)}render(){if(this.canViewChat)return(0,a.h)(a.H,{title:this.t("chat")},(0,r.u)(this.meeting)?this.hasNewMessages&&(0,a.h)("div",{class:"unread-count-dot",part:"unread-count-dot"}):0!==this.unreadMessageCount&&!this.chatActive&&(0,a.h)("div",{class:"unread-count",part:"unread-count"},(0,a.h)("span",null,this.unreadMessageCount<=100?this.unreadMessageCount:"99+")),(0,a.h)("dyte-controlbar-button",{part:"controlbar-button",size:this.size,iconPack:this.iconPack,t:this.t,class:{active:this.chatActive},onClick:this.toggleChat,icon:this.iconPack.chat,label:this.t("chat"),variant:this.variant}))}static get watchers(){return{meeting:["meetingChanged"],states:["statesChanged"]}}};h.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block}.unread-count{position:absolute;right:var(--dyte-space-3, 12px);box-sizing:border-box;padding:var(--dyte-space-0\\.5, 2px);-webkit-user-select:none;-moz-user-select:none;user-select:none;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));font-size:12px;color:rgb(var(--dyte-colors-text-on-brand-1000, var(--dyte-colors-text-1000, 255 255 255)));display:flex;height:var(--dyte-space-5, 20px);min-width:var(--dyte-space-5, 20px);align-items:center;justify-content:center;border-radius:9999px;z-index:1}.unread-count-dot{position:absolute;right:var(--dyte-space-3, 12px);z-index:10;--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-bg-opacity));border-radius:50%;display:flex;height:var(--dyte-space-4, 16px);width:var(--dyte-space-4, 16px);align-items:center;justify-content:center}:host([variant='horizontal']){display:flex;flex-direction:row-reverse;align-items:center}:host([variant='horizontal']) .unread-count{right:var(--dyte-space-4, 16px);top:auto}"},64734:(t,e,s)=>{s.d(e,{a:()=>o,b:()=>r,c:()=>i,d:()=>n});var a=s(24555);const i=t=>{if(t&&!t.chat)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.chat)return!1;const{chatPublic:s,chatPrivate:a}=t.self.permissions;return s.canSend||s.text||s.files||a.canSend||a.canReceive||a.files||a.text},n=t=>{if(t&&!t.polls)return!1;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.polls)return!1;const{polls:s}=t.self.permissions;return s.canCreate||s.canView||s.canVote},o=t=>{var e,s;if((0,a.s)(t)&&!(null===(e=t.self.permissions)||void 0===e?void 0:e.acceptPresentRequests))return!1;if(t&&!t.participants)return!1;if("LIVESTREAM"===t.meta.viewType)return t.self.permissions.acceptPresentRequests||"ON_STAGE"===(null===(s=null==t?void 0:t.stage)||void 0===s?void 0:s.status);const i=null==t?void 0:t.self.config;return!(i&&!i.controlBar.elements.participants)},r=t=>{if((0,a.a)(t))return!1;if(t&&!t.plugins)return!1;if("LIVESTREAM"===t.meta.viewType)return"ON_STAGE"===t.stage.status;const e=null==t?void 0:t.self.config;if(e&&!e.controlBar.elements.plugins)return!1;const{plugins:s}=t.self.permissions;return s.canClose||s.canStart}},46503:(t,e,s)=>{s.d(e,{o:()=>h,s:()=>c});var a=s(65733);const i=t=>!("isConnected"in t)||t.isConnected,n=((t,e)=>{let s;return(...a)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,t(...a)}),e)}})((t=>{for(let e of t.keys())t.set(e,t.get(e).filter(i))}),2e3),o=t=>"function"==typeof t?t():t,r=(t,e)=>{const s=t.indexOf(e);s>=0&&(t[s]=t[t.length-1],t.length--)},{state:c,onChange:h}=((t,e)=>{const s=((t,e=((t,e)=>t!==e))=>{const s=o(t);let a=new Map(Object.entries(null!=s?s:{}));const i={dispose:[],get:[],set:[],reset:[]},n=()=>{var e;a=new Map(Object.entries(null!==(e=o(t))&&void 0!==e?e:{})),i.reset.forEach((t=>t()))},c=t=>(i.get.forEach((e=>e(t))),a.get(t)),h=(t,s)=>{const n=a.get(t);e(s,n,t)&&(a.set(t,s),i.set.forEach((e=>e(t,s,n))))},d="undefined"==typeof Proxy?{}:new Proxy(s,{get:(t,e)=>c(e),ownKeys:t=>Array.from(a.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(t,e)=>a.has(e),set:(t,e,s)=>(h(e,s),!0)}),l=(t,e)=>(i[t].push(e),()=>{r(i[t],e)});return{state:d,get:c,set:h,on:l,onChange:(e,s)=>{const a=l("set",((t,a)=>{t===e&&s(a)})),i=l("reset",(()=>s(o(t)[e])));return()=>{a(),i()}},use:(...t)=>{const e=t.reduce(((t,e)=>(e.set&&t.push(l("set",e.set)),e.get&&t.push(l("get",e.get)),e.reset&&t.push(l("reset",e.reset)),e.dispose&&t.push(l("dispose",e.dispose)),t)),[]);return()=>e.forEach((t=>t()))},dispose:()=>{i.dispose.forEach((t=>t())),n()},reset:n,forceUpdate:t=>{const e=a.get(t);i.set.forEach((s=>s(t,e,e)))}}})(t,e);return s.use((()=>{if("function"!=typeof a.a)return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const s=(0,a.a)();s&&((t,e,s)=>{const a=t.get(e);a?a.includes(s)||a.push(s):t.set(e,[s])})(t,e,s)},set:e=>{const s=t.get(e);s&&t.set(e,s.filter(a.f)),n(t)},reset:()=>{t.forEach((t=>t.forEach(a.f))),n(t)}}})()),s})({})}}]);