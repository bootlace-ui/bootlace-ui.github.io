import{A as J4,An as hg,At as W,Br as ui,Ct as U0,F as Jo,G as Lr,Gr as vf,Gt as Yn,It as XR,Jt as Zf,L as KC,Ln as jn,Pt as XC,Rn as jo,Rr as ue,Sn as fh,Tn as gf,Un as kg,Ut as YZ,Vt as Y3,Wr as ve,Yn as lt,Zt as _m,_n as ei,_r as q3,ar as nh,et as Ot,f as Cf,ln as cj,mt as So,on as ce,or as nj,qr as vi,un as cn,xt as Tt,yn as f,zn as k}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{c as Hn,n as Ba,p as Lt}from"./chunk-DycqepRM.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as N}from"./chunk-DX4JeZih.js";import{t as f$1}from"./chunk-_QnoVoFv.js";var ps=o=>({$implicit:o});function us(o,l){o&1&&nh(0)}function ms(o,l){if(o&1&&U0(0,us,1,0,`ng-container`,3),o&2){let a=vf(2);Ot(`ngTemplateOutlet`,l)(`ngTemplateOutletContext`,nj(2,ps,a.state.context()))}}function gs(o,l){if(o&1&&Zf(0),o&2){let a=vf(2);hg(` `,a.state.title(),` `)}}function ds(o,l){if(o&1&&(ce(0,`h3`,1),KC(1,ms,1,4,`ng-container`)(2,gs,1,1),vi()),o&2){let a,e=vf();Ot(`id`,e.state.titleId),Tt(),XC((a=e.titleTemplate())?1:2,a)}}function hs(o,l){o&1&&nh(0)}function vs(o,l){if(o&1&&U0(0,hs,1,0,`ng-container`,3),o&2){let a=vf();Ot(`ngTemplateOutlet`,l)(`ngTemplateOutletContext`,nj(2,ps,a.state.context()))}}function js(o,l){if(o&1&&Zf(0),o&2){let a=vf();hg(` `,a.state.content(),` `)}}var rs=new f(`NGS_POPOVER_STATE`);var bs=`a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`;function fs(o){let l=[`click`,`hover`,`focus`,`manual`];return new Set(o.split(/[\s,]+/).filter(a=>l.includes(a)))}var U=class o{state=k(rs);template=jo(()=>{let l=this.state.content();return l instanceof ei?l:null});titleTemplate=jo(()=>{let l=this.state.title();return l instanceof ei?l:null});align=jo(()=>this.state.placement().split(`-`)[1]??`center`);classes=jo(()=>[`popover show`,`bs-popover-${this.state.placement().split(`-`)[0]}`,this.state.instant?`popover-instant`:``,this.state.styleClass()??``].filter(Boolean).join(` `));static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`ngs-popover-window`]],hostAttrs:[`role`,`dialog`,`tabindex`,`-1`],hostVars:6,hostBindings:function(a,e){a&1&&ui(`mouseenter`,function(){return e.state.hover.enter()})(`mouseleave`,function(){return e.state.hover.leave()})(`keydown`,function(m){return e.state.tab(m)}),a&2&&(Lr(`id`,e.state.id)(`data-ngs-align`,e.align())(`aria-labelledby`,e.state.title()?e.state.titleId:null)(`aria-label`,e.state.title()?null:e.state.label()??null),kg(e.classes()))},decls:5,vars:2,consts:[[1,`popover-arrow`],[1,`popover-header`,3,`id`],[1,`popover-body`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(a,e){if(a&1&&(ue(0,`div`,0),KC(1,ds,3,2,`h3`,1),ce(2,`div`,2),KC(3,vs,1,4,`ng-container`)(4,js,1,1),vi()),a&2){let p;Tt(),XC(e.state.title()?1:-1),Tt(2),XC((p=e.template())?3:4,p)}},dependencies:[_m],encapsulation:2})};var g=class o{el=k(So);overlay=k(Hn);injector=k(cn);browser=YZ(k(lt));animation=k(N).animation;ngsPopover=Yn();popoverTitle=Yn();popoverLabel=Yn();placement=Yn(`bottom`);triggers=Yn(`click`);autoClose=Yn(`outside`);focusOnOpen=Yn(!0);openDelay=Yn(0);closeDelay=Yn(100);disablePopover=Yn(!1);popoverClass=Yn();popoverContext=Yn();shown=XR();hidden=XR();id=Ba(`ngs-popover`);titleId=`${this.id}-title`;ref=W(null);parsed=jo(()=>fs(this.triggers()));hovering=!1;focused=!1;timer;destroyed=!1;isOpen=jo(()=>this.ref()!==null);constructor(){k(jn).onDestroy(()=>{this.destroyed=!0,this.clearTimer(),this.ref()?.close()}),J4(()=>{(this.disablePopover()||!this.ngsPopover())&&this.close(!1)})}open(){this.show(this.focusOnOpen())}close(l=!0){this.clearTimer();let a=this.ref();if(!a)return;let e=a.overlayRef.overlayElement,p=e.contains(e.ownerDocument.activeElement);a.close(),l&&p&&this.el.nativeElement.focus()}toggle(){this.isOpen()?this.close():this.open()}show(l){if(this.clearTimer(),!this.browser||this.ref()||this.disablePopover()||!this.ngsPopover())return;let a={id:this.id,titleId:this.titleId,content:this.ngsPopover,title:this.popoverTitle,label:this.popoverLabel,context:this.popoverContext,styleClass:this.popoverClass,placement:()=>this.ref()?.placement()??this.placement(),instant:!this.animation,hover:{enter:()=>{this.hovering=!0,this.clearTimer()},leave:()=>{this.hovering=!1,this.scheduleClose()}},tab:m=>this.onTab(m)},e=this.autoClose(),p=this.overlay.open(this.el.nativeElement,new Lt(U,null,cn.create({providers:[{provide:rs,useValue:a}],parent:this.injector})),{placement:this.placement(),offset:8,closeOnEscape:!1,closeOnOutsideClick:e===!0||e===`outside`});this.ref.set(p),p.closed.subscribe(()=>{this.ref.set(null),this.hovering=this.focused=!1,this.destroyed||this.hidden.emit()}),p.overlayRef.keydownEvents().subscribe(m=>{m.key===`Escape`&&this.close()}),(e===!0||e===`inside`)&&p.overlayRef.overlayElement.addEventListener(`click`,()=>this.close(!1)),this.shown.emit(),l&&this.windowElement()?.focus()}windowElement(){return this.ref()?.overlayRef.overlayElement.querySelector(`ngs-popover-window`)??null}onTab(l){let a=this.windowElement();if(!a||l.key!==`Tab`)return;let e=Array.from(a.querySelectorAll(bs)),p=a.ownerDocument.activeElement;(l.shiftKey?p===a||p===e[0]:e.length===0||p===e[e.length-1])&&(l.preventDefault(),this.close(),this.el.nativeElement.focus())}onClick(){this.parsed().has(`click`)&&this.toggle()}onHoverEnter(){this.parsed().has(`hover`)&&(this.hovering=!0,this.scheduleOpen())}onHoverLeave(){this.parsed().has(`hover`)&&(this.hovering=!1,this.scheduleClose())}onFocusIn(){this.parsed().has(`focus`)&&(this.focused=!0,this.scheduleOpen())}onFocusOut(){this.parsed().has(`focus`)&&(this.focused=!1,this.scheduleClose())}scheduleOpen(){this.clearTimer(),!this.isOpen()&&(this.timer=setTimeout(()=>this.show(!1),this.openDelay()))}scheduleClose(){this.clearTimer(),!(!this.isOpen()||this.hovering||this.focused)&&(this.timer=setTimeout(()=>this.close(!1),this.closeDelay()))}clearTimer(){clearTimeout(this.timer),this.timer=void 0}static ɵfac=function(a){return new(a||o)};static ɵdir=Jo({type:o,selectors:[[``,`ngsPopover`,``]],hostVars:3,hostBindings:function(a,e){a&1&&ui(`click`,function(){return e.onClick()})(`mouseenter`,function(){return e.onHoverEnter()})(`mouseleave`,function(){return e.onHoverLeave()})(`focusin`,function(){return e.onFocusIn()})(`focusout`,function(){return e.onFocusOut()}),a&2&&Lr(`aria-haspopup`,`dialog`)(`aria-expanded`,e.isOpen())(`aria-controls`,e.isOpen()?e.id:null)},inputs:{ngsPopover:[1,`ngsPopover`],popoverTitle:[1,`popoverTitle`],popoverLabel:[1,`popoverLabel`],placement:[1,`placement`],triggers:[1,`triggers`],autoClose:[1,`autoClose`],focusOnOpen:[1,`focusOnOpen`],openDelay:[1,`openDelay`],closeDelay:[1,`closeDelay`],disablePopover:[1,`disablePopover`],popoverClass:[1,`popoverClass`],popoverContext:[1,`popoverContext`]},outputs:{shown:`shown`,hidden:`hidden`},exportAs:[`ngsPopover`]})};var D=class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-popover-auto-close`]],decls:13,vars:2,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,`ngsPopover`,`Click inside, then outside.`,`popoverTitle`,`outside`,`autoClose`,`outside`],[`ngsButton`,``,`variant`,`outline`,`ngsPopover`,`Closes on any click.`,`popoverTitle`,`true`,3,`autoClose`],[`ngsButton`,``,`variant`,`outline`,`ngsPopover`,`Click here to close it.`,`popoverTitle`,`inside`,`autoClose`,`inside`],[`ngsButton`,``,`variant`,`outline`,`ngsPopover`,`Only the button, Escape or Tab out closes it.`,`popoverTitle`,`false`,3,`autoClose`]],template:function(a,e){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),Zf(3,` outside (default) `),vi()(),ce(4,`div`,1)(5,`button`,3),Zf(6,` true `),vi()(),ce(7,`div`,1)(8,`button`,4),Zf(9,` inside `),vi()(),ce(10,`div`,1)(11,`button`,5),Zf(12,` false `),vi()()()),a&2&&(Tt(5),Ot(`autoClose`,!0),Tt(6),Ot(`autoClose`,!1))},dependencies:[f$1,g],encapsulation:2})};var O=class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-popover-placements`]],decls:37,vars:0,consts:[[1,`row`,`g-2`],[1,`col-6`,`sm:col-4`,`md:col-3`,`lg:col-2`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed top`,`popoverTitle`,`top`,`placement`,`top`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed top-start`,`popoverTitle`,`top-start`,`placement`,`top-start`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed top-end`,`popoverTitle`,`top-end`,`placement`,`top-end`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed bottom`,`popoverTitle`,`bottom`,`placement`,`bottom`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed bottom-start`,`popoverTitle`,`bottom-start`,`placement`,`bottom-start`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed bottom-end`,`popoverTitle`,`bottom-end`,`placement`,`bottom-end`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed start`,`popoverTitle`,`start`,`placement`,`start`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed start-top`,`popoverTitle`,`start-top`,`placement`,`start-top`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed start-bottom`,`popoverTitle`,`start-bottom`,`placement`,`start-bottom`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed end`,`popoverTitle`,`end`,`placement`,`end`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed end-top`,`popoverTitle`,`end-top`,`placement`,`end-top`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`ngsPopover`,`Placed end-bottom`,`popoverTitle`,`end-bottom`,`placement`,`end-bottom`]],template:function(a,e){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),Zf(3,` top `),vi()(),ce(4,`div`,1)(5,`button`,3),Zf(6,` top-start `),vi()(),ce(7,`div`,1)(8,`button`,4),Zf(9,` top-end `),vi()(),ce(10,`div`,1)(11,`button`,5),Zf(12,` bottom `),vi()(),ce(13,`div`,1)(14,`button`,6),Zf(15,` bottom-start `),vi()(),ce(16,`div`,1)(17,`button`,7),Zf(18,` bottom-end `),vi()(),ce(19,`div`,1)(20,`button`,8),Zf(21,` start `),vi()(),ce(22,`div`,1)(23,`button`,9),Zf(24,` start-top `),vi()(),ce(25,`div`,1)(26,`button`,10),Zf(27,` start-bottom `),vi()(),ce(28,`div`,1)(29,`button`,11),Zf(30,` end `),vi()(),ce(31,`div`,1)(32,`button`,12),Zf(33,` end-top `),vi()(),ce(34,`div`,1)(35,`button`,13),Zf(36,` end-bottom `),vi()()())},dependencies:[f$1,g],encapsulation:2})};function ys(o,l){o&1&&(ce(0,`label`,8),Zf(1,`Email`),vi(),ue(2,`input`,9))}var M=class o{events=W(`none`);static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-popover-programmatic`]],decls:15,vars:2,consts:[[`form`,``],[`pop`,`ngsPopover`],[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,`popoverTitle`,`Subscribe`,`triggers`,`manual`,`placement`,`end`,3,`shown`,`hidden`,`ngsPopover`],[`ngsButton`,``,`size`,`sm`,3,`click`],[`ngsButton`,``,`size`,`sm`,`variant`,`subtle`,3,`click`],[`aria-live`,`polite`,1,`col-auto`],[`for`,`popover-email`,1,`form-label`],[`id`,`popover-email`,`type`,`email`,`autocomplete`,`off`,1,`form-control`]],template:function(a,e){if(a&1){let p=gf();U0(0,ys,3,0,`ng-template`,null,0,cj),ce(2,`div`,2)(3,`div`,3)(4,`button`,4,1),ui(`shown`,function(){return e.events.set(`shown`)})(`hidden`,function(){return e.events.set(`hidden`)}),Zf(6,` Subscribe `),vi()(),ce(7,`div`,3)(8,`button`,5),ui(`click`,function(){q3(p);let T=Cf(5);return Y3(T.open())}),Zf(9,`Open`),vi()(),ce(10,`div`,3)(11,`button`,6),ui(`click`,function(){q3(p);let T=Cf(5);return Y3(T.close())}),Zf(12,`Close`),vi()(),ce(13,`div`,7),Zf(14),vi()()}if(a&2){let p=Cf(1);Tt(4),Ot(`ngsPopover`,p),Tt(10),hg(`Last event: `,e.events())}},dependencies:[f$1,g],encapsulation:2})};function qs(o,l){if(o&1&&Zf(0),o&2){let a=l.$implicit;hg(`Hello, `,a.name)}}function Ps(o,l){if(o&1&&(ce(0,`p`),Zf(1),ce(2,`strong`),Zf(3),vi(),Zf(4,`. `),vi(),ce(5,`a`,6),Zf(6,`Open the project`),vi()),o&2){let a=l.$implicit;Tt(),hg(` `,a.name,` is a `),Tt(2),fh(a.role)}}var z=class o{user={name:`Ada Lovelace`,role:`analyst`};static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-popover-template`]],decls:11,vars:3,consts:[[`title`,``],[`body`,``],[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`ngsPopover`,`popoverTitle`,`popoverContext`],[`ngsButton`,``,`variant`,`outline`,`ngsPopover`,`No title: it needs an accessible name.`,`popoverLabel`,`About popovers without a title`],[`href`,`https://github.com/Angular-Bootstrap-Project/angular-bootstrap`]],template:function(a,e){if(a&1&&(U0(0,qs,1,1,`ng-template`,null,0,cj)(2,Ps,7,2,`ng-template`,null,1,cj),ce(4,`div`,2)(5,`div`,3)(6,`button`,4),Zf(7,` Template content `),vi()(),ce(8,`div`,3)(9,`button`,5),Zf(10,` No title `),vi()()()),a&2){let p=Cf(1),m=Cf(3);Tt(6),Ot(`ngsPopover`,m)(`popoverTitle`,p)(`popoverContext`,e.user)}},dependencies:[f$1,g],encapsulation:2})};var A=class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-popover-triggers`]],decls:14,vars:0,consts:[[`manual`,`ngsPopover`],[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,`ngsPopover`,`Opens and closes on click.`,`popoverTitle`,`Click`],[`ngsButton`,``,`variant`,`outline`,`ngsPopover`,`Opens on hover or focus and does not take focus.`,`popoverTitle`,`Hover and focus`,`triggers`,`hover focus`],[`ngsButton`,``,`variant`,`outline`,`ngsPopover`,`Opened from code.`,`popoverTitle`,`Manual`,`triggers`,`manual`],[`ngsButton`,``,`variant`,`subtle`,3,`click`]],template:function(a,e){if(a&1){let p=gf();ce(0,`div`,1)(1,`div`,2)(2,`button`,3),Zf(3,` Click (default) `),vi()(),ce(4,`div`,2)(5,`button`,4),Zf(6,` Hover and focus `),vi()(),ce(7,`div`,2)(8,`button`,5,0),Zf(10,` Manual `),vi()(),ce(11,`div`,2)(12,`button`,6),ui(`click`,function(){q3(p);let T=Cf(9);return Y3(T.toggle())}),Zf(13,`Toggle the manual popover`),vi()()()}},dependencies:[f$1,g],encapsulation:2})};var is={"auto-close":{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsPopover="Click inside, then outside."
      popoverTitle="outside"
      autoClose="outside"
    >
      outside (default)
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsPopover="Closes on any click."
      popoverTitle="true"
      [autoClose]="true"
    >
      true
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsPopover="Click here to close it."
      popoverTitle="inside"
      autoClose="inside"
    >
      inside
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsPopover="Only the button, Escape or Tab out closes it."
      popoverTitle="false"
      [autoClose]="false"
    >
      false
    </button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Click inside, then outside.&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;outside&quot;</span>
      <span class="hljs-attr">autoClose</span>=<span class="hljs-string">&quot;outside&quot;</span>
    &gt;</span>
      outside (default)
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Closes on any click.&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;true&quot;</span>
      [<span class="hljs-attr">autoClose</span>]=<span class="hljs-string">&quot;true&quot;</span>
    &gt;</span>
      true
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Click here to close it.&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;inside&quot;</span>
      <span class="hljs-attr">autoClose</span>=<span class="hljs-string">&quot;inside&quot;</span>
    &gt;</span>
      inside
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Only the button, Escape or Tab out closes it.&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;false&quot;</span>
      [<span class="hljs-attr">autoClose</span>]=<span class="hljs-string">&quot;false&quot;</span>
    &gt;</span>
      false
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsPopover } from '@bootlace/core/popover';

@Component({
  selector: 'docs-popover-auto-close',
  imports: [NgsButton, NgsPopover],
  templateUrl: './index.html',
})
export class PopoverAutoCloseExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPopover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/popover&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-popover-auto-close&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsPopover</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PopoverAutoCloseExample</span> {}`}},placements:{html:{code:`<div class="row g-2">
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsPopover="Placed top"
      popoverTitle="top"
      placement="top"
    >
      top
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsPopover="Placed top-start"
      popoverTitle="top-start"
      placement="top-start"
    >
      top-start
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsPopover="Placed top-end"
      popoverTitle="top-end"
      placement="top-end"
    >
      top-end
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsPopover="Placed bottom"
      popoverTitle="bottom"
      placement="bottom"
    >
      bottom
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsPopover="Placed bottom-start"
      popoverTitle="bottom-start"
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
      ngsPopover="Placed bottom-end"
      popoverTitle="bottom-end"
      placement="bottom-end"
    >
      bottom-end
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsPopover="Placed start"
      popoverTitle="start"
      placement="start"
    >
      start
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsPopover="Placed start-top"
      popoverTitle="start-top"
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
      ngsPopover="Placed start-bottom"
      popoverTitle="start-bottom"
      placement="start-bottom"
    >
      start-bottom
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsPopover="Placed end"
      popoverTitle="end"
      placement="end"
    >
      end
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsPopover="Placed end-top"
      popoverTitle="end-top"
      placement="end-top"
    >
      end-top
    </button>
  </div>
  <div class="col-6 sm:col-4 md:col-3 lg:col-2">
    <button
      ngsButton
      variant="outline"
      size="sm"
      ngsPopover="Placed end-bottom"
      popoverTitle="end-bottom"
      placement="end-bottom"
    >
      end-bottom
    </button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed top&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;top&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top&quot;</span>
    &gt;</span>
      top
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed top-start&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;top-start&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top-start&quot;</span>
    &gt;</span>
      top-start
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed top-end&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;top-end&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;top-end&quot;</span>
    &gt;</span>
      top-end
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed bottom&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;bottom&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom&quot;</span>
    &gt;</span>
      bottom
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed bottom-start&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;bottom-start&quot;</span>
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
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed bottom-end&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;bottom-end&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;bottom-end&quot;</span>
    &gt;</span>
      bottom-end
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed start&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;start&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;start&quot;</span>
    &gt;</span>
      start
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed start-top&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;start-top&quot;</span>
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
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed start-bottom&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;start-bottom&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;start-bottom&quot;</span>
    &gt;</span>
      start-bottom
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed end&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;end&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;end&quot;</span>
    &gt;</span>
      end
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed end-top&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;end-top&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;end-top&quot;</span>
    &gt;</span>
      end-top
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 sm:col-4 md:col-3 lg:col-2&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Placed end-bottom&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;end-bottom&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;end-bottom&quot;</span>
    &gt;</span>
      end-bottom
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsPopover } from '@bootlace/core/popover';

@Component({
  selector: 'docs-popover-placements',
  imports: [NgsButton, NgsPopover],
  templateUrl: './index.html',
})
export class PopoverPlacementsExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPopover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/popover&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-popover-placements&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsPopover</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PopoverPlacementsExample</span> {}`}},programmatic:{html:{code:`<ng-template #form>
  <label class="form-label" for="popover-email">Email</label>
  <input id="popover-email" class="form-control" type="email" autocomplete="off" />
</ng-template>

<div class="row g-2 align-items-center">
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      [ngsPopover]="form"
      popoverTitle="Subscribe"
      triggers="manual"
      placement="end"
      #pop="ngsPopover"
      (shown)="events.set('shown')"
      (hidden)="events.set('hidden')"
    >
      Subscribe
    </button>
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" (click)="pop.open()">Open</button>
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" variant="subtle" (click)="pop.close()">Close</button>
  </div>
  <div class="col-auto" aria-live="polite">Last event: {{ events() }}</div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;popover-email&quot;</span>&gt;</span>Email<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;popover-email&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-control&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;email&quot;</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;off&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      [<span class="hljs-attr">ngsPopover</span>]=<span class="hljs-string">&quot;form&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;Subscribe&quot;</span>
      <span class="hljs-attr">triggers</span>=<span class="hljs-string">&quot;manual&quot;</span>
      <span class="hljs-attr">placement</span>=<span class="hljs-string">&quot;end&quot;</span>
      #<span class="hljs-attr">pop</span>=<span class="hljs-string">&quot;ngsPopover&quot;</span>
      (<span class="hljs-attr">shown</span>)=<span class="hljs-string">&quot;events.set(&#x27;shown&#x27;)&quot;</span>
      (<span class="hljs-attr">hidden</span>)=<span class="hljs-string">&quot;events.set(&#x27;hidden&#x27;)&quot;</span>
    &gt;</span>
      Subscribe
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;pop.open()&quot;</span>&gt;</span>Open<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;pop.close()&quot;</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Last event: {{ events() }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsPopover } from '@bootlace/core/popover';

@Component({
  selector: 'docs-popover-programmatic',
  imports: [NgsButton, NgsPopover],
  templateUrl: './index.html',
})
export class PopoverProgrammaticExample {
  protected readonly events = signal('none');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPopover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/popover&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-popover-programmatic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsPopover</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PopoverProgrammaticExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> events = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;none&#x27;</span>);
}`}},template:{html:{code:`<ng-template #title let-user>Hello, {{ user.name }}</ng-template>
<ng-template #body let-user>
  <p>
    {{ user.name }} is a <strong>{{ user.role }}</strong
    >.
  </p>
  <a href="https://github.com/Angular-Bootstrap-Project/angular-bootstrap">Open the project</a>
</ng-template>

<div class="row g-2">
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      [ngsPopover]="body"
      [popoverTitle]="title"
      [popoverContext]="user"
    >
      Template content
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsPopover="No title: it needs an accessible name."
      popoverLabel="About popovers without a title"
    >
      No title
    </button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">title</span> <span class="hljs-attr">let-user</span>&gt;</span>Hello, {{ user.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">body</span> <span class="hljs-attr">let-user</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    {{ user.name }} is a <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ user.role }}&lt;/strong
    &gt;.
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://github.com/Angular-Bootstrap-Project/angular-bootstrap&quot;</span>&gt;</span>Open the project<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      [<span class="hljs-attr">ngsPopover</span>]=<span class="hljs-string">&quot;body&quot;</span>
      [<span class="hljs-attr">popoverTitle</span>]=<span class="hljs-string">&quot;title&quot;</span>
      [<span class="hljs-attr">popoverContext</span>]=<span class="hljs-string">&quot;user&quot;</span>
    &gt;</span>
      Template content
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;No title: it needs an accessible name.&quot;</span>
      <span class="hljs-attr">popoverLabel</span>=<span class="hljs-string">&quot;About popovers without a title&quot;</span>
    &gt;</span>
      No title
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsPopover } from '@bootlace/core/popover';

@Component({
  selector: 'docs-popover-template',
  imports: [NgsButton, NgsPopover],
  templateUrl: './index.html',
})
export class PopoverTemplateExample {
  protected readonly user = { name: 'Ada Lovelace', role: 'analyst' };
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPopover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/popover&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-popover-template&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsPopover</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PopoverTemplateExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> user = { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Ada Lovelace&#x27;</span>, <span class="hljs-attr">role</span>: <span class="hljs-string">&#x27;analyst&#x27;</span> };
}`}},triggers:{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsPopover="Opens and closes on click."
      popoverTitle="Click"
    >
      Click (default)
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsPopover="Opens on hover or focus and does not take focus."
      popoverTitle="Hover and focus"
      triggers="hover focus"
    >
      Hover and focus
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      ngsPopover="Opened from code."
      popoverTitle="Manual"
      triggers="manual"
      #manual="ngsPopover"
    >
      Manual
    </button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="subtle" (click)="manual.toggle()">Toggle the manual popover</button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Opens and closes on click.&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;Click&quot;</span>
    &gt;</span>
      Click (default)
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Opens on hover or focus and does not take focus.&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;Hover and focus&quot;</span>
      <span class="hljs-attr">triggers</span>=<span class="hljs-string">&quot;hover focus&quot;</span>
    &gt;</span>
      Hover and focus
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">ngsPopover</span>=<span class="hljs-string">&quot;Opened from code.&quot;</span>
      <span class="hljs-attr">popoverTitle</span>=<span class="hljs-string">&quot;Manual&quot;</span>
      <span class="hljs-attr">triggers</span>=<span class="hljs-string">&quot;manual&quot;</span>
      #<span class="hljs-attr">manual</span>=<span class="hljs-string">&quot;ngsPopover&quot;</span>
    &gt;</span>
      Manual
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;manual.toggle()&quot;</span>&gt;</span>Toggle the manual popover<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsPopover } from '@bootlace/core/popover';

@Component({
  selector: 'docs-popover-triggers',
  imports: [NgsButton, NgsPopover],
  templateUrl: './index.html',
})
export class PopoverTriggersExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPopover</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/popover&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-popover-triggers&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsPopover</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PopoverTriggersExample</span> {}`}}};var cs=class o{tab=Yn(`examples`);sources=is;placements=O;triggers=A;template=z;autoClose=D;programmatic=M;static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-popover-page`]],inputs:{tab:[1,`tab`]},decls:96,vars:11,consts:[[`heading`,`Popover`,`package`,`@bootlace/core/popover`,`path`,`/components/popover`,3,`tab`],[1,`docs-page-lead`],[`id`,`placements`,`heading`,`Placements`,3,`component`,`sources`],[`id`,`triggers`,`heading`,`Triggers`,3,`component`,`sources`],[`id`,`template`,`heading`,`Custom content`,3,`component`,`sources`],[`id`,`auto-close`,`heading`,`Auto close`,3,`component`,`sources`],[`id`,`programmatic`,`heading`,`Programmatic open and close`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(a,e){a&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A small non-modal dialog with a title and content, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.popover`),vi(),Zf(5,`. Add `),ce(6,`code`),Zf(7,`ngsPopover`),vi(),Zf(8,` to a button: it opens on click, closes on Escape or an outside click, and puts focus back on the button. Unlike a tooltip, a popover can hold links, forms and other interactive content. `),vi(),ce(9,`docs-example`,2),Zf(10,` The same twelve placements as the tooltip. A popover flips to the opposite side when it would not fit in the viewport. `),vi(),ce(11,`docs-example`,3)(12,`code`),Zf(13,`click`),vi(),Zf(14,` is the default. `),ce(15,`code`),Zf(16,`hover`),vi(),Zf(17,` and `),ce(18,`code`),Zf(19,`focus`),vi(),Zf(20,` show a popover without moving focus, `),ce(21,`code`),Zf(22,`manual`),vi(),Zf(23,` leaves it to `),ce(24,`code`),Zf(25,`open()`),vi(),Zf(26,`, `),ce(27,`code`),Zf(28,`close()`),vi(),Zf(29,` and `),ce(30,`code`),Zf(31,`toggle()`),vi(),Zf(32,`. `),vi(),ce(33,`docs-example`,4),Zf(34,` Both the content and the `),ce(35,`code`),Zf(36,`popoverTitle`),vi(),Zf(37,` accept a `),ce(38,`code`),Zf(39,`TemplateRef`),vi(),Zf(40,`, which receives `),ce(41,`code`),Zf(42,`popoverContext`),vi(),Zf(43,`. Without a title, set `),ce(44,`code`),Zf(45,`popoverLabel`),vi(),Zf(46,` so the dialog still has a name. `),vi(),ce(47,`docs-example`,5)(48,`code`),Zf(49,`autoClose`),vi(),Zf(50,` chooses which clicks close the popover: `),ce(51,`code`),Zf(52,`'outside'`),vi(),Zf(53,` (the default), `),ce(54,`code`),Zf(55,`true`),vi(),Zf(56,` for any click, `),ce(57,`code`),Zf(58,`'inside'`),vi(),Zf(59,` or `),ce(60,`code`),Zf(61,`false`),vi(),Zf(62,`. Escape always closes it. `),vi(),ce(63,`docs-example`,6),Zf(64,` Opening by code moves focus into the popover, ready for typing. Closing returns focus to the button when it was inside the popover. `),vi(),ce(65,`section`,7)(66,`h2`,8),Zf(67,`Accessibility`),vi(),ce(68,`p`),Zf(69,` The trigger must be a button (or a link that acts like one). It gets `),ce(70,`code`),Zf(71,`aria-haspopup="dialog"`),vi(),Zf(72,`, `),ce(73,`code`),Zf(74,`aria-expanded`),vi(),Zf(75,` and, while open, `),ce(76,`code`),Zf(77,`aria-controls`),vi(),Zf(78,`. The popover is a non-modal `),ce(79,`code`),Zf(80,`role="dialog"`),vi(),Zf(81,` named by its title through `),ce(82,`code`),Zf(83,`aria-labelledby`),vi(),Zf(84,`, or by `),ce(85,`code`),Zf(86,`popoverLabel`),vi(),Zf(87,` when it has no title. `),vi(),ce(88,`p`),Zf(89,` Focus: the popover is rendered at the end of the page, so when it is opened by a click or by `),ce(90,`code`),Zf(91,`open()`),vi(),Zf(92,`, focus moves into it (set `),ce(93,`code`),Zf(94,`focusOnOpen`),vi(),Zf(95,` to false to opt out). Escape closes it and returns focus to the button, as does tabbing past its last control or Shift+Tab before its first. Clicking outside closes it without moving focus. A popover opened by hover or focus never takes focus, so its content is not reachable by keyboard; use the click trigger for anything interactive. `),vi()()()),a&2&&(Ot(`tab`,e.tab()),Tt(9),Ot(`component`,e.placements)(`sources`,e.sources.placements),Tt(2),Ot(`component`,e.triggers)(`sources`,e.sources.triggers),Tt(22),Ot(`component`,e.template)(`sources`,e.sources.template),Tt(14),Ot(`component`,e.autoClose)(`sources`,e.sources[`auto-close`]),Tt(16),Ot(`component`,e.programmatic)(`sources`,e.sources.programmatic))},dependencies:[ue$1,pe],encapsulation:2})};export{cs as PopoverPage};