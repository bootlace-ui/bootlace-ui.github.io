import{A as J4,An as hg,At as W,Br as ui,Ct as U0,F as Jo,G as Lr,Gr as vf,Gt as Yn,It as XR,Jt as Zf,L as KC,Ln as jn,Pt as XC,Rn as jo,Rr as ue,Sn as fh,Tn as gf,Un as kg,Ut as YZ,Vt as Y3,Wr as ve,Yn as lt,Zt as _m,_n as ei,_r as q3,ar as nh,et as Ot,f as Cf,ln as cj,mt as So,on as ce,or as nj,qr as vi,un as cn,xt as Tt,yn as f,zn as k$1}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{c as Hn,n as Ba,p as Lt}from"./chunk-DycqepRM.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as N}from"./chunk-DX4JeZih.js";import{t as f$1}from"./chunk-_QnoVoFv.js";var rs=e=>({$implicit:e});function gs(e,o){e&1&&nh(0)}function ms(e,o){if(e&1&&U0(0,gs,1,0,`ng-container`,2),e&2){let a=vf();Ot(`ngTemplateOutlet`,o)(`ngTemplateOutletContext`,nj(2,rs,a.state.context()))}}function us(e,o){if(e&1&&Zf(0),e&2){let a=vf();hg(` `,a.state.content(),` `)}}var ps=new f(`NGS_TOOLTIP_STATE`);function hs(e){let o=[`hover`,`focus`,`click`,`manual`];return new Set(e.split(/[\s,]+/).filter(a=>o.includes(a)))}var I=class e{state=k$1(ps);template=jo(()=>{let o=this.state.content();return o instanceof ei?o:null});align=jo(()=>this.state.placement().split(`-`)[1]??`center`);classes=jo(()=>[`tooltip show`,`bs-tooltip-${this.state.placement().split(`-`)[0]}`,this.state.instant?`tooltip-instant`:``,this.state.styleClass()??``].filter(Boolean).join(` `));static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`ngs-tooltip-window`]],hostAttrs:[`role`,`tooltip`],hostVars:4,hostBindings:function(a,l){a&1&&ui(`mouseenter`,function(){return l.state.hover.enter()})(`mouseleave`,function(){return l.state.hover.leave()}),a&2&&(Lr(`id`,l.state.id)(`data-ngs-align`,l.align()),kg(l.classes()))},decls:4,vars:1,consts:[[1,`tooltip-arrow`],[1,`tooltip-inner`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(a,l){if(a&1&&(ue(0,`div`,0),ce(1,`div`,1),KC(2,ms,1,4,`ng-container`)(3,us,1,1),vi()),a&2){let i;Tt(2),XC((i=l.template())?2:3,i)}},dependencies:[_m],encapsulation:2})};var g=class e{el=k$1(So);overlay=k$1(Hn);injector=k$1(cn);browser=YZ(k$1(lt));animation=k$1(N).animation;ngsTooltip=Yn();placement=Yn(`top`);triggers=Yn(`hover focus`);openDelay=Yn(0);closeDelay=Yn(100);disableTooltip=Yn(!1);tooltipClass=Yn();tooltipContext=Yn();shown=XR();hidden=XR();id=Ba(`ngs-tooltip`);ref=W(null);parsed=jo(()=>hs(this.triggers()));hovering=!1;focused=!1;timer;destroyed=!1;isOpen=jo(()=>this.ref()!==null);constructor(){k$1(jn).onDestroy(()=>{this.destroyed=!0,this.clearTimer(),this.ref()?.close()}),J4(()=>{(this.disableTooltip()||!this.ngsTooltip())&&this.close()})}open(){if(this.clearTimer(),!this.browser||this.ref()||this.disableTooltip()||!this.ngsTooltip())return;let o={id:this.id,content:this.ngsTooltip,context:this.tooltipContext,styleClass:this.tooltipClass,placement:()=>this.ref()?.placement()??this.placement(),instant:!this.animation,hover:{enter:()=>{this.hovering=!0,this.clearTimer()},leave:()=>{this.hovering=!1,this.scheduleClose()}}},a=this.overlay.open(this.el.nativeElement,new Lt(I,null,cn.create({providers:[{provide:ps,useValue:o}],parent:this.injector})),{placement:this.placement(),offset:4,closeOnOutsideClick:!1});this.ref.set(a),a.closed.subscribe(()=>{this.ref.set(null),this.hovering=this.focused=!1,this.destroyed||this.hidden.emit()}),this.shown.emit()}close(){this.clearTimer(),this.ref()?.close()}toggle(){this.isOpen()?this.close():this.open()}onHoverEnter(){this.parsed().has(`hover`)&&(this.hovering=!0,this.scheduleOpen())}onHoverLeave(){this.parsed().has(`hover`)&&(this.hovering=!1,this.scheduleClose())}onFocusIn(){this.parsed().has(`focus`)&&(this.focused=!0,this.scheduleOpen())}onFocusOut(){this.parsed().has(`focus`)&&(this.focused=!1,this.scheduleClose())}onClick(){this.parsed().has(`click`)&&this.toggle()}scheduleOpen(){this.clearTimer(),!this.isOpen()&&(this.timer=setTimeout(()=>this.open(),this.openDelay()))}scheduleClose(){this.clearTimer(),!(!this.isOpen()||this.hovering||this.focused)&&(this.timer=setTimeout(()=>this.close(),this.closeDelay()))}clearTimer(){clearTimeout(this.timer),this.timer=void 0}static ɵfac=function(a){return new(a||e)};static ɵdir=Jo({type:e,selectors:[[``,`ngsTooltip`,``]],hostVars:1,hostBindings:function(a,l){a&1&&ui(`mouseenter`,function(){return l.onHoverEnter()})(`mouseleave`,function(){return l.onHoverLeave()})(`focusin`,function(){return l.onFocusIn()})(`focusout`,function(){return l.onFocusOut()})(`click`,function(){return l.onClick()}),a&2&&Lr(`aria-describedby`,l.isOpen()?l.id:null)},inputs:{ngsTooltip:[1,`ngsTooltip`],placement:[1,`placement`],triggers:[1,`triggers`],openDelay:[1,`openDelay`],closeDelay:[1,`closeDelay`],disableTooltip:[1,`disableTooltip`],tooltipClass:[1,`tooltipClass`],tooltipContext:[1,`tooltipContext`]},outputs:{shown:`shown`,hidden:`hidden`},exportAs:[`ngsTooltip`]})};var C=class e{static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-tooltip-delays`]],decls:10,vars:3,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,`ngsTooltip`,`Opens right away`,3,`openDelay`],[`ngsButton`,``,`variant`,`outline`,`ngsTooltip`,`Opened after 600 ms`,3,`openDelay`],[`ngsButton`,``,`variant`,`outline`,`ngsTooltip`,`Closes 1.5 s after you leave`,3,`closeDelay`]],template:function(a,l){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),Zf(3,` No delay `),vi()(),ce(4,`div`,1)(5,`button`,3),Zf(6,` Open delay 600 ms `),vi()(),ce(7,`div`,1)(8,`button`,4),Zf(9,` Close delay 1.5 s `),vi()()()),a&2&&(Tt(2),Ot(`openDelay`,0),Tt(3),Ot(`openDelay`,600),Tt(3),Ot(`closeDelay`,1500))},dependencies:[f$1,g],encapsulation:2})};var k=class e{static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-tooltip-placements`]],decls:37,vars:0,consts:[[1,`row`,`g-2`],[1,`col-6`,`sm:col-4`,`md:col-3`,`lg:col-2`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed top`,`placement`,`top`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed top-start`,`placement`,`top-start`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed top-end`,`placement`,`top-end`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed bottom`,`placement`,`bottom`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed bottom-start`,`placement`,`bottom-start`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed bottom-end`,`placement`,`bottom-end`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed start`,`placement`,`start`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed start-top`,`placement`,`start-top`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed start-bottom`,`placement`,`start-bottom`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed end`,`placement`,`end`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed end-top`,`placement`,`end-top`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsTooltip`,`Placed end-bottom`,`placement`,`end-bottom`]],template:function(a,l){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),Zf(3,` top `),vi()(),ce(4,`div`,1)(5,`button`,3),Zf(6,` top-start `),vi()(),ce(7,`div`,1)(8,`button`,4),Zf(9,` top-end `),vi()(),ce(10,`div`,1)(11,`button`,5),Zf(12,` bottom `),vi()(),ce(13,`div`,1)(14,`button`,6),Zf(15,` bottom-start `),vi()(),ce(16,`div`,1)(17,`button`,7),Zf(18,` bottom-end `),vi()(),ce(19,`div`,1)(20,`button`,8),Zf(21,` start `),vi()(),ce(22,`div`,1)(23,`button`,9),Zf(24,` start-top `),vi()(),ce(25,`div`,1)(26,`button`,10),Zf(27,` start-bottom `),vi()(),ce(28,`div`,1)(29,`button`,11),Zf(30,` end `),vi()(),ce(31,`div`,1)(32,`button`,12),Zf(33,` end-top `),vi()(),ce(34,`div`,1)(35,`button`,13),Zf(36,` end-bottom `),vi()()())},dependencies:[f$1,g],encapsulation:2})};var D=class e{events=W(`none`);static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-tooltip-programmatic`]],decls:16,vars:1,consts:[[`tip`,`ngsTooltip`],[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,`ngsTooltip`,`Controlled from code`,`triggers`,`manual`,`placement`,`end`,3,`shown`,`hidden`],[`ngsButton`,``,`size`,`sm`,3,`click`],[`ngsButton`,``,`size`,`sm`,`variant`,`subtle`,3,`click`],[`aria-live`,`polite`,1,`col-auto`]],template:function(a,l){if(a&1){let i=gf();ce(0,`div`,1)(1,`div`,2)(2,`button`,3,0),ui(`shown`,function(){return l.events.set(`shown`)})(`hidden`,function(){return l.events.set(`hidden`)}),Zf(4,` Target `),vi()(),ce(5,`div`,2)(6,`button`,4),ui(`click`,function(){q3(i);let v=Cf(3);return Y3(v.open())}),Zf(7,`Open`),vi()(),ce(8,`div`,2)(9,`button`,5),ui(`click`,function(){q3(i);let v=Cf(3);return Y3(v.close())}),Zf(10,`Close`),vi()(),ce(11,`div`,2)(12,`button`,5),ui(`click`,function(){q3(i);let v=Cf(3);return Y3(v.toggle())}),Zf(13,`Toggle`),vi()(),ce(14,`div`,6),Zf(15),vi()()}a&2&&(Tt(15),hg(`Last event: `,l.events()))},dependencies:[f$1,g],encapsulation:2})};function ds(e,o){if(e&1&&(ce(0,`strong`),Zf(1),vi(),ue(2,`br`),Zf(3)),e&2){let a=o.$implicit;Tt(),fh(a.name),Tt(2),hg(` `,a.role,`
`)}}var S=class e{user={name:`Ada Lovelace`,role:`Analyst`};off=W(!1);static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-tooltip-template`]],decls:13,vars:4,consts:[[`rich`,``],[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`ngsTooltip`,`tooltipContext`],[`ngsButton`,``,`variant`,`outline`,`ngsTooltip`,`Disabled while the box is ticked`,3,`disableTooltip`],[`type`,`checkbox`,3,`change`,`checked`]],template:function(a,l){if(a&1&&(U0(0,ds,4,2,`ng-template`,null,0,cj),ce(2,`div`,1)(3,`div`,2)(4,`button`,3),Zf(5,` Template content `),vi()(),ce(6,`div`,2)(7,`button`,4),Zf(8,` Can be disabled `),vi()(),ce(9,`div`,2)(10,`label`)(11,`input`,5),ui(`change`,function(){return l.off.set(!l.off())}),vi(),Zf(12,` Disable the tooltip `),vi()()()),a&2){let i=Cf(1);Tt(4),Ot(`ngsTooltip`,i)(`tooltipContext`,l.user),Tt(3),Ot(`disableTooltip`,l.off()),Tt(4),Ot(`checked`,l.off())}},dependencies:[f$1,g],encapsulation:2})};var P=class e{static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-tooltip-triggers`]],decls:20,vars:0,consts:[[`manual`,`ngsTooltip`],[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,`ngsTooltip`,`Hover or focus (the default)`],[`ngsButton`,``,`variant`,`outline`,`ngsTooltip`,`Hover only`,`triggers`,`hover`],[`ngsButton`,``,`variant`,`outline`,`ngsTooltip`,`Focus only`,`triggers`,`focus`],[`ngsButton`,``,`variant`,`outline`,`ngsTooltip`,`Toggled by clicking`,`triggers`,`click`],[`ngsButton`,``,`variant`,`outline`,`ngsTooltip`,`Opened from code`,`triggers`,`manual`],[`ngsButton`,``,`variant`,`subtle`,3,`click`]],template:function(a,l){if(a&1){let i=gf();ce(0,`div`,1)(1,`div`,2)(2,`button`,3),Zf(3,` Hover and focus `),vi()(),ce(4,`div`,2)(5,`button`,4),Zf(6,`Hover`),vi()(),ce(7,`div`,2)(8,`button`,5),Zf(9,`Focus`),vi()(),ce(10,`div`,2)(11,`button`,6),Zf(12,` Click `),vi()(),ce(13,`div`,2)(14,`button`,7,0),Zf(16,` Manual `),vi()(),ce(17,`div`,2)(18,`button`,8),ui(`click`,function(){q3(i);let v=Cf(15);return Y3(v.toggle())}),Zf(19,`Toggle the manual tooltip`),vi()()()}},dependencies:[f$1,g],encapsulation:2})};var is={delays:{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button ngsButton variant="outline" ngsTooltip="Opens right away" [openDelay]="0">
      No delay
    </button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" ngsTooltip="Opened after 600 ms" [openDelay]="600">
      Open delay 600 ms
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsTooltip="Closes 1.5 s after you leave"
      [closeDelay]="1500"
    >
      Close delay 1.5 s
    </button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Opens right away&quot;</span> [<span class="hljs-attr">openDelay</span>]=<span class="hljs-string">&quot;0&quot;</span>&gt;</span>
      No delay
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Opened after 600 ms&quot;</span> [<span class="hljs-attr">openDelay</span>]=<span class="hljs-string">&quot;600&quot;</span>&gt;</span>
      Open delay 600 ms
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Closes 1.5 s after you leave&quot;</span>
      [<span class="hljs-attr">closeDelay</span>]=<span class="hljs-string">&quot;1500&quot;</span>
    &gt;</span>
      Close delay 1.5 s
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsTooltip } from '@bootlace/core/tooltip';

@Component({
  selector: 'docs-tooltip-delays',
  imports: [NgsButton, NgsTooltip],
  templateUrl: './index.html',
})
export class TooltipDelaysExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTooltip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tooltip&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tooltip-delays&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsTooltip</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TooltipDelaysExample</span> {}`}},placements:{html:{code:`<div class="row g-2">
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button ngsButton variant="outline" size="sm" ngsTooltip="Placed top" placement="top">
      top
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsTooltip="Placed top-start"
      placement="top-start"
    >
      top-start
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button ngsButton variant="outline" size="sm" ngsTooltip="Placed top-end" placement="top-end">
      top-end
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button ngsButton variant="outline" size="sm" ngsTooltip="Placed bottom" placement="bottom">
      bottom
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsTooltip="Placed bottom-start"
      placement="bottom-start"
    >
      bottom-start
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsTooltip="Placed bottom-end"
      placement="bottom-end"
    >
      bottom-end
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button ngsButton variant="outline" size="sm" ngsTooltip="Placed start" placement="start">
      start
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsTooltip="Placed start-top"
      placement="start-top"
    >
      start-top
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsTooltip="Placed start-bottom"
      placement="start-bottom"
    >
      start-bottom
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button ngsButton variant="outline" size="sm" ngsTooltip="Placed end" placement="end">
      end
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button ngsButton variant="outline" size="sm" ngsTooltip="Placed end-top" placement="end-top">
      end-top
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsTooltip="Placed end-bottom"
      placement="end-bottom"
    >
      end-bottom
    </button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed top&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
      top
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed top-start&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top-start&quot;</span>
    &gt;</span>
      top-start
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed top-end&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top-end&quot;</span>&gt;</span>
      top-end
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed bottom&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
      bottom
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed bottom-start&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom-start&quot;</span>
    &gt;</span>
      bottom-start
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed bottom-end&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom-end&quot;</span>
    &gt;</span>
      bottom-end
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed start&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;start&quot;</span>&gt;</span>
      start
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed start-top&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;start-top&quot;</span>
    &gt;</span>
      start-top
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed start-bottom&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;start-bottom&quot;</span>
    &gt;</span>
      start-bottom
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed end&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>
      end
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed end-top&quot;</span> <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;end-top&quot;</span>&gt;</span>
      end-top
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Placed end-bottom&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;end-bottom&quot;</span>
    &gt;</span>
      end-bottom
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsTooltip } from '@bootlace/core/tooltip';

@Component({
  selector: 'docs-tooltip-placements',
  imports: [NgsButton, NgsTooltip],
  templateUrl: './index.html',
})
export class TooltipPlacementsExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTooltip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tooltip&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tooltip-placements&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsTooltip</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TooltipPlacementsExample</span> {}`}},programmatic:{html:{code:`<div class="row g-2 align-items-center">
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsTooltip="Controlled from code"
      triggers="manual"
      placement="end"
      #tip="ngsTooltip"
      (shown)="events.set('shown')"
      (hidden)="events.set('hidden')"
    >
      Target
    </button>
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" (click)="tip.open()">Open</button>
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" variant="subtle" (click)="tip.close()">Close</button>
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" variant="subtle" (click)="tip.toggle()">Toggle</button>
  </div>
  <div class="col-auto" aria-live="polite">Last event: {{ events() }}</div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Controlled from code&quot;</span>
      <span class="hljs-attr">triggers</span>=<span class="hljs-string">&quot;manual&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;end&quot;</span>
      #<span class="hljs-attr">tip</span>=<span class="hljs-string">&quot;ngsTooltip&quot;</span>
      (<span class="hljs-attr">shown</span>)=<span class="hljs-string">&quot;events.set(&#x27;shown&#x27;)&quot;</span>
      (<span class="hljs-attr">hidden</span>)=<span class="hljs-string">&quot;events.set(&#x27;hidden&#x27;)&quot;</span>
    &gt;</span>
      Target
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;tip.open()&quot;</span>&gt;</span>Open<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;tip.close()&quot;</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;tip.toggle()&quot;</span>&gt;</span>Toggle<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Last event: {{ events() }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsTooltip } from '@bootlace/core/tooltip';

@Component({
  selector: 'docs-tooltip-programmatic',
  imports: [NgsButton, NgsTooltip],
  templateUrl: './index.html',
})
export class TooltipProgrammaticExample {
  protected readonly events = signal('none');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTooltip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tooltip&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tooltip-programmatic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsTooltip</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TooltipProgrammaticExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> events = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;none&#x27;</span>);
}`}},template:{html:{code:`<ng-template #rich let-user>
  <strong>{{ user.name }}</strong
  ><br />
  {{ user.role }}
</ng-template>

<div class="row g-2 align-items-center">
  <div class="col-auto">
    <button ngsButton variant="outline" [ngsTooltip]="rich" [tooltipContext]="user">
      Template content
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsTooltip="Disabled while the box is ticked"
      [disableTooltip]="off()"
    >
      Can be disabled
    </button>
  </div>
  <div class="col-auto">
    <label>
      <input type="checkbox" [checked]="off()" (change)="off.set(!off())" />
      Disable the tooltip
    </label>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">rich</span> <span class="hljs-attr">let-user</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ user.name }}&lt;/strong
  &gt;<span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
  {{ user.role }}
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> [<span class="hljs-attr">ngsTooltip</span>]=<span class="hljs-string">&quot;rich&quot;</span> [<span class="hljs-attr">tooltipContext</span>]=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>
      Template content
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Disabled while the box is ticked&quot;</span>
      [<span class="hljs-attr">disableTooltip</span>]=<span class="hljs-string">&quot;off()&quot;</span>
    &gt;</span>
      Can be disabled
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span> [<span class="hljs-attr">checked</span>]=<span class="hljs-string">&quot;off()&quot;</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;off.set(!off())&quot;</span> /&gt;</span>
      Disable the tooltip
    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsTooltip } from '@bootlace/core/tooltip';

@Component({
  selector: 'docs-tooltip-template',
  imports: [NgsButton, NgsTooltip],
  templateUrl: './index.html',
})
export class TooltipTemplateExample {
  protected readonly user = { name: 'Ada Lovelace', role: 'Analyst' };
  protected readonly off = signal(false);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTooltip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tooltip&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tooltip-template&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsTooltip</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TooltipTemplateExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> user = { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Ada Lovelace&#x27;</span>, <span class="hljs-attr">role</span>: <span class="hljs-string">&#x27;Analyst&#x27;</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> off = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
}`}},triggers:{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button ngsButton variant="outline" ngsTooltip="Hover or focus (the default)">
      Hover and focus
    </button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" ngsTooltip="Hover only" triggers="hover">Hover</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" ngsTooltip="Focus only" triggers="focus">Focus</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" ngsTooltip="Toggled by clicking" triggers="click">
      Click
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsTooltip="Opened from code"
      triggers="manual"
      #manual="ngsTooltip"
    >
      Manual
    </button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="subtle" (click)="manual.toggle()">Toggle the manual tooltip</button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Hover or focus (the default)&quot;</span>&gt;</span>
      Hover and focus
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Hover only&quot;</span> <span class="hljs-attr">triggers</span>=<span class="hljs-string">&quot;hover&quot;</span>&gt;</span>Hover<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Focus only&quot;</span> <span class="hljs-attr">triggers</span>=<span class="hljs-string">&quot;focus&quot;</span>&gt;</span>Focus<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Toggled by clicking&quot;</span> <span class="hljs-attr">triggers</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>
      Click
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsTooltip</span>=<span class="hljs-string">&quot;Opened from code&quot;</span>
      <span class="hljs-attr">triggers</span>=<span class="hljs-string">&quot;manual&quot;</span>
      #<span class="hljs-attr">manual</span>=<span class="hljs-string">&quot;ngsTooltip&quot;</span>
    &gt;</span>
      Manual
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;manual.toggle()&quot;</span>&gt;</span>Toggle the manual tooltip<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsTooltip } from '@bootlace/core/tooltip';

@Component({
  selector: 'docs-tooltip-triggers',
  imports: [NgsButton, NgsTooltip],
  templateUrl: './index.html',
})
export class TooltipTriggersExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTooltip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tooltip&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tooltip-triggers&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsTooltip</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TooltipTriggersExample</span> {}`}}};var cs=class e{tab=Yn(`examples`);sources=is;placements=k;triggers=P;template=S;delays=C;programmatic=D;static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-tooltip-page`]],inputs:{tab:[1,`tab`]},decls:102,vars:11,consts:[[`heading`,`Tooltip`,`package`,`@bootlace/core/tooltip`,`path`,`/components/tooltip`,3,`tab`],[1,`docs-page-lead`],[`id`,`placements`,`heading`,`Placements`,3,`component`,`sources`],[`id`,`triggers`,`heading`,`Triggers`,3,`component`,`sources`],[`id`,`template`,`heading`,`Custom content`,3,`component`,`sources`],[`id`,`delays`,`heading`,`Delays`,3,`component`,`sources`],[`id`,`programmatic`,`heading`,`Programmatic open and close`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(a,l){a&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A short description next to any element, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.tooltip`),vi(),Zf(5,`. Add `),ce(6,`code`),Zf(7,`ngsTooltip`),vi(),Zf(8,` with text or a template. It opens on hover and keyboard focus, closes on Escape, and stays open while the pointer is on the tooltip itself. It is rendered in the CDK overlay, so it is never clipped by an `),ce(9,`code`),Zf(10,`overflow`),vi(),Zf(11,` container. `),vi(),ce(12,`docs-example`,2),Zf(13,` Twelve placements: the four sides, each aligned to the start, center or end. A tooltip flips to the opposite side when it would not fit in the viewport. `),vi(),ce(14,`docs-example`,3)(15,`code`),Zf(16,`triggers`),vi(),Zf(17,` takes `),ce(18,`code`),Zf(19,`hover`),vi(),Zf(20,`, `),ce(21,`code`),Zf(22,`focus`),vi(),Zf(23,`, `),ce(24,`code`),Zf(25,`click`),vi(),Zf(26,` or `),ce(27,`code`),Zf(28,`manual`),vi(),Zf(29,`, separated by spaces. The default is `),ce(30,`code`),Zf(31,`hover focus`),vi(),Zf(32,`. With `),ce(33,`code`),Zf(34,`manual`),vi(),Zf(35,` the tooltip opens only through `),ce(36,`code`),Zf(37,`open()`),vi(),Zf(38,`, `),ce(39,`code`),Zf(40,`close()`),vi(),Zf(41,` and `),ce(42,`code`),Zf(43,`toggle()`),vi(),Zf(44,`, which the directive exposes with `),ce(45,`code`),Zf(46,`exportAs`),vi(),Zf(47,`. `),vi(),ce(48,`docs-example`,4),Zf(49,` Pass a `),ce(50,`code`),Zf(51,`TemplateRef`),vi(),Zf(52,` instead of text and give it data with `),ce(53,`code`),Zf(54,`tooltipContext`),vi(),Zf(55,`. `),ce(56,`code`),Zf(57,`disableTooltip`),vi(),Zf(58,` turns a tooltip off without removing the directive. It is not just `),ce(59,`code`),Zf(60,`disabled`),vi(),Zf(61,` because the directive sits on the trigger, often a `),ce(62,`code`),Zf(63,`<button>`),vi(),Zf(64,`, and `),ce(65,`code`),Zf(66,`disabled`),vi(),Zf(67,` would disable that button too. Keep the content short and non-interactive. `),vi(),ce(68,`docs-example`,5)(69,`code`),Zf(70,`openDelay`),vi(),Zf(71,` and `),ce(72,`code`),Zf(73,`closeDelay`),vi(),Zf(74,` are in milliseconds. The default `),ce(75,`code`),Zf(76,`closeDelay`),vi(),Zf(77,` of 100 lets the pointer cross the gap to the tooltip; hovering the tooltip cancels the close. `),vi(),ce(78,`docs-example`,6),Zf(79,` The `),ce(80,`code`),Zf(81,`shown`),vi(),Zf(82,` and `),ce(83,`code`),Zf(84,`hidden`),vi(),Zf(85,` outputs report each change, and `),ce(86,`code`),Zf(87,`isOpen()`),vi(),Zf(88,` is a signal. `),vi(),ce(89,`section`,7)(90,`h2`,8),Zf(91,`Accessibility`),vi(),ce(92,`p`),Zf(93,` While a tooltip is open, its element gets `),ce(94,`code`),Zf(95,`aria-describedby`),vi(),Zf(96,` pointing at the tooltip, which has `),ce(97,`code`),Zf(98,`role="tooltip"`),vi(),Zf(99,`. The tooltip opens on keyboard focus as well as hover, and Escape closes it without moving focus. Following WCAG 1.4.13, it stays visible while the pointer is over it, and for as long as the element has focus. `),vi(),ce(100,`p`),Zf(101,` Put tooltips on elements that are already focusable, such as buttons and links: a tooltip cannot be reached otherwise. Tooltips give extra detail and must not be the only place an important label or instruction appears, because touch screens have no hover. They cannot hold links or buttons; use a popover for that. `),vi()()()),a&2&&(Ot(`tab`,l.tab()),Tt(12),Ot(`component`,l.placements)(`sources`,l.sources.placements),Tt(2),Ot(`component`,l.triggers)(`sources`,l.sources.triggers),Tt(34),Ot(`component`,l.template)(`sources`,l.sources.template),Tt(20),Ot(`component`,l.delays)(`sources`,l.sources.delays),Tt(10),Ot(`component`,l.programmatic)(`sources`,l.sources.programmatic))},dependencies:[ue$1,pe],encapsulation:2})};export{cs as TooltipPage};