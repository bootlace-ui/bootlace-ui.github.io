import{At as W,Br as ui,Gt as Yn,Jt as Zf,Rr as ue,Sn as fh,Wr as ve,et as Ot,on as ce,qr as vi,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{t as l}from"./chunk-B6h8Jb5u.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";var d=class l$1{closed=W(!1);static ɵfac=function(n){return new(n||l$1)};static ɵcmp=ve({type:l$1,selectors:[[`docs-button-x-basic`]],decls:6,vars:1,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[`ngsButtonX`,``,3,`click`],[`aria-live`,`polite`]],template:function(n,e){n&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),ui(`click`,function(){return e.closed.set(!0)}),vi()(),ce(3,`div`,1)(4,`span`,3),Zf(5),vi()()()),n&2&&(Tt(5),fh(e.closed()?`Closed`:`Open`))},dependencies:[l],encapsulation:2})};var u=class l$2{static ɵfac=function(n){return new(n||l$2)};static ɵcmp=ve({type:l$2,selectors:[[`docs-button-x-disabled`]],decls:3,vars:0,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[`ngsButtonX`,``,`disabled`,``]],template:function(n,e){n&1&&(ce(0,`div`,0)(1,`div`,1),ue(2,`button`,2),vi()())},dependencies:[l],encapsulation:2})};var h=class l$3{static ɵfac=function(n){return new(n||l$3)};static ɵcmp=ve({type:l$3,selectors:[[`docs-button-x-label`]],decls:5,vars:0,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[`ngsButtonX`,``,`label`,`Dismiss notification`],[`ngsButtonX`,``,`label`,`Fermer`]],template:function(n,e){n&1&&(ce(0,`div`,0)(1,`div`,1),ue(2,`button`,2),vi(),ce(3,`div`,1),ue(4,`button`,3),vi()())},dependencies:[l],encapsulation:2})};var X={basic:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-auto">
    <button ngsButtonX (click)="closed.set(true)"></button>
  </div>
  <div class="col-auto">
    <span aria-live="polite">{{ closed() ? 'Closed' : 'Open' }}</span>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButtonX</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;closed.set(true)&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>{{ closed() ? &#x27;Closed&#x27; : &#x27;Open&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButtonX } from '@bootlace/core/button';

@Component({
  selector: 'docs-button-x-basic',
  imports: [NgsButtonX],
  templateUrl: './index.html',
})
export class ButtonXBasicExample {
  protected readonly closed = signal(false);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButtonX</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-button-x-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButtonX</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonXBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> closed = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
}`}},disabled:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-auto">
    <button ngsButtonX disabled></button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButtonX</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButtonX } from '@bootlace/core/button';

@Component({
  selector: 'docs-button-x-disabled',
  imports: [NgsButtonX],
  templateUrl: './index.html',
})
export class ButtonXDisabledExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButtonX</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-button-x-disabled&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButtonX</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonXDisabledExample</span> {}`}},label:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-auto">
    <button ngsButtonX label="Dismiss notification"></button>
  </div>
  <div class="col-auto">
    <button ngsButtonX label="Fermer"></button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButtonX</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Dismiss notification&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButtonX</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Fermer&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButtonX } from '@bootlace/core/button';

@Component({
  selector: 'docs-button-x-label',
  imports: [NgsButtonX],
  templateUrl: './index.html',
})
export class ButtonXLabelExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButtonX</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-button-x-label&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButtonX</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonXLabelExample</span> {}`}}};var E=class l{tab=Yn(`examples`);sources=X;basic=d;label=h;disabled=u;static ɵfac=function(n){return new(n||l)};static ɵcmp=ve({type:l,selectors:[[`docs-button-x-page`]],inputs:{tab:[1,`tab`]},decls:41,vars:7,consts:[[`heading`,`Button X`,`package`,`@bootlace/core/button`,`path`,`/components/buttons/button-x`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`label`,`heading`,`Custom label`,3,`component`,`sources`],[`id`,`disabled`,`heading`,`Disabled`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(n,e){n&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` The close button, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.btn-close`),vi(),Zf(5,` and drawn as a plain grey cross, as in Taiga UI, that darkens on hover and focus. Add `),ce(6,`code`),Zf(7,`ngsButtonX`),vi(),Zf(8,` to a `),ce(9,`code`),Zf(10,`<button>`),vi(),Zf(11,`. Alerts, notifications, toasts, modals and drawers all use it. `),vi(),ce(12,`docs-example`,2),Zf(13,` Handle the click like any native button. `),vi(),ce(14,`docs-example`,3),Zf(15,` The accessible name is "Close" by default. Set `),ce(16,`code`),Zf(17,`label`),vi(),Zf(18,` to be more specific. To translate the default for every close button, set `),ce(19,`code`),Zf(20,`close`),vi(),Zf(21,` with `),ce(22,`code`),Zf(23,`provideNgs({ i18n: { close: 'Fermer' } })`),vi(),Zf(24,`. `),vi(),ce(25,`docs-example`,4),Zf(26,` Use the native `),ce(27,`code`),Zf(28,`disabled`),vi(),Zf(29,` attribute. `),vi(),ce(30,`section`,5)(31,`h2`,6),Zf(32,`Accessibility`),vi(),ce(33,`p`),Zf(34,` The button has no text, so its accessible name comes from `),ce(35,`code`),Zf(36,`aria-label`),vi(),Zf(37,` ("Close" by default). Name it after what it closes when several can be on screen, for example "Dismiss notification". It is always `),ce(38,`code`),Zf(39,`type="button"`),vi(),Zf(40,` and receives keyboard focus with a visible focus ring. `),vi()()()),n&2&&(Ot(`tab`,e.tab()),Tt(12),Ot(`component`,e.basic)(`sources`,e.sources.basic),Tt(2),Ot(`component`,e.label)(`sources`,e.sources.label),Tt(11),Ot(`component`,e.disabled)(`sources`,e.sources.disabled))},dependencies:[ue$1,pe],encapsulation:2})};export{E as ButtonXPage};