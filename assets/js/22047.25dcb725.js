"use strict";(self.webpackChunkopenim_docs=self.webpackChunkopenim_docs||[]).push([[22047,89955],{22047:(t,e,a)=>{a.r(e),a.d(e,{dyte_network_indicator:()=>r});var i=a(65733),s=(a(21237),a(24555),a(96633)),o=a(20336);a(60804);const r=class{constructor(t){(0,i.r)(this,t),this.onMediaScoreUpdate=({kind:t,isScreenshare:e,score:a})=>{("video"===t||this.isScreenShare&&e)&&(this.score=a)},this.participant=void 0,this.meeting=void 0,this.iconPack=s.d,this.t=(0,o.u)(),this.isScreenShare=!1,this.score=10}connectedCallback(){this.participantChanged(this.participant)}participantChanged(t){t&&t.addListener("mediaScoreUpdate",this.onMediaScoreUpdate)}disconnectedCallback(){var t;null===(t=this.participant)||void 0===t||t.removeListener("mediaScoreUpdate",this.onMediaScoreUpdate)}render(){if(this.meeting&&this.meeting.self.userId===this.participant.userId)return null;let t=Math.round(this.score/2),e="good";if(t>3)return null;switch(t<1&&(t=1),t){case 3:case 2:e="poor";break;case 1:e="poorest"}return(0,i.h)(i.H,null,(0,i.h)("dyte-icon",{icon:this.iconPack[`signal_${t}`],class:e}),(0,i.h)("dyte-icon",{icon:this.iconPack.signal_5,class:"bg-signal"}))}static get watchers(){return{participant:["participantChanged"]}}};r.style=":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{position:relative;display:block;height:var(--dyte-space-7, 28px);width:var(--dyte-space-7, 28px)}dyte-icon{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:10;height:100%;width:100%;--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}dyte-icon.good{--tw-text-opacity:1;color:rgba(var(--dyte-colors-success, 98 165 4) / var(--tw-text-opacity))}dyte-icon.poor{--tw-text-opacity:1;color:rgba(var(--dyte-colors-warning, 255 205 7) / var(--tw-text-opacity))}dyte-icon.poorest{--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}:host([size='md']){height:var(--dyte-space-6, 24px);width:var(--dyte-space-6, 24px)}:host([size='sm']){height:var(--dyte-space-5, 20px);width:var(--dyte-space-5, 20px)}.bg-signal{position:absolute;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);z-index:0;color:rgb(var(--dyte-colors-text-600, 255 255 255 / 0.52))}"}}]);