import{$t as ag,A as J4,An as hg,At as W,Br as ui,Cr as rf,Ct as U0,Et as Va,F as Jo,G as Lr,Gt as Yn,Hn as kf,I as K,In as jh,Jt as Zf,L as KC,N as JR,Or as sc,Pt as XC,Rn as jo,Rr as ue,Sn as fh,Un as kg,W as Ll,Wr as ve,Zr as wf,Zt as _m,_n as ei,ar as nh,cn as ch,ei as xh,et as Ot,hn as eA,i as $t,ir as nf,kn as hf,mn as dh,on as ce,q as Mh,qr as vi,r as $f,sn as cg,ur as of,vr as qF,xt as Tt,yr as rA,zn as k}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as N$1}from"./chunk-DX4JeZih.js";import{t as f$1}from"./chunk-_QnoVoFv.js";var ys=[[[``,`ngsAccordionHeader`,``]],`*`];var fs=[`[ngsAccordionHeader]`,`*`];function xs(o,l){o&1&&nh(0,4),o&2&&Ot(`ngTemplateOutlet`,l.template)}var vs=[`*`];var f=class o{template=k(ei);static ɵfac=function(a){return new(a||o)};static ɵdir=Jo({type:o,selectors:[[`ng-template`,`ngsAccordionContent`,``]]})};var r=class o{group=k(sc(()=>d),{optional:!0});chevron=qF;lazy=rA(f);rendered=W(!1);heading=Yn();open=JR(!1);disabled=Yn(!1,{transform:$t});constructor(){J4(()=>{this.open()&&(this.rendered.set(!0),K(()=>this.group?.itemOpened(this)))})}onSummaryClick(l){this.disabled()&&l.preventDefault()}onToggle(l){this.open.set(l.target.open)}static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`details`,`ngsAccordionItem`,``]],contentQueries:function(a,t,m){a&1&&ch(m,t.lazy,f,5),a&2&&wf()},hostAttrs:[1,`accordion-item`],hostVars:3,hostBindings:function(a,t){a&1&&ui(`toggle`,function(g){return t.onToggle(g)}),a&2&&(Va(`open`,t.open()),dh(`ngs-accordion-disabled`,t.disabled()))},inputs:{heading:[1,`heading`],open:[1,`open`],disabled:[1,`disabled`]},outputs:{open:`openChange`},ngContentSelectors:fs,decls:8,vars:5,consts:[[1,`accordion-header`,3,`click`],[1,`ngs-accordion-title`],[1,`accordion-icon`,3,`icon`],[1,`accordion-body`],[3,`ngTemplateOutlet`]],template:function(a,t){if(a&1&&(kf(ys),ce(0,`summary`,0),ui(`click`,function(g){return t.onSummaryClick(g)}),ce(1,`span`,1),Zf(2),hf(3),vi(),ue(4,`ngs-icon`,2),vi(),ce(5,`div`,3),hf(6,1),KC(7,xs,1,1,`ng-container`,4),vi()),a&2){let m;Lr(`aria-disabled`,t.disabled()?`true`:null)(`tabindex`,t.disabled()?-1:null),Tt(2),fh(t.heading()),Tt(2),Ot(`icon`,t.chevron),Tt(3),XC((m=t.rendered()&&t.lazy())?7:-1,m)}},dependencies:[Ll,_m],encapsulation:2})};var d=class o{animation=k(N$1).animation;items=eA(r,{descendants:!1});closeOthers=Yn(!1,{transform:$t});size=Yn(`md`);variant=Yn(`bordered`);classes=jo(()=>{let l=[`accordion`,`ngs-accordion`];return this.size()===`sm`&&l.push(`accordion-sm`),this.variant()===`gap`&&l.push(`accordion-gap`),this.variant()===`flush`&&l.push(`accordion-flush`),this.animation||l.push(`ngs-accordion-static`),l.join(` `)});itemOpened(l){if(this.closeOthers())for(let a of this.items())a!==l&&a.open()&&a.open.set(!1)}static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`ngs-accordion`]],contentQueries:function(a,t,m){a&1&&ch(m,t.items,r,4),a&2&&wf()},hostVars:2,hostBindings:function(a,t){a&2&&kg(t.classes())},inputs:{closeOthers:[1,`closeOthers`],size:[1,`size`],variant:[1,`variant`]},ngContentSelectors:vs,decls:1,vars:0,template:function(a,t){a&1&&(kf(),hf(0))},encapsulation:2})};var N=class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-accordion-basic`]],decls:9,vars:1,consts:[[1,`row`],[1,`col-12`,`lg:col-8`],[`ngsAccordionItem`,``,`heading`,`Account details`],[`ngsAccordionItem`,``,`heading`,`Payment methods`,3,`open`],[`ngsAccordionItem`,``,`heading`,`Notifications`]],template:function(a,t){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-accordion`)(3,`details`,2),Zf(4,` Change your name, email address and password, or close your account. `),vi(),ce(5,`details`,3),Zf(6,` Pay by card, bank transfer or invoice. Saved cards are never shown in full. `),vi(),ce(7,`details`,4),Zf(8,` Choose which updates you get by email and which appear in the app. `),vi()()()()),a&2&&(Tt(5),Ot(`open`,!0))},dependencies:[d,r],encapsulation:2})};var E=class o{first=W(!0);second=W(!1);static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-accordion-controlled`]],decls:20,vars:4,consts:[[1,`row`,`g-3`],[1,`col-12`,`lg:col-8`],[`ngsAccordionItem`,``,`heading`,`First`,3,`openChange`,`open`],[`ngsAccordionItem`,``,`heading`,`Second`,3,`openChange`,`open`],[1,`col-12`],[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[1,`col-auto`,`align-self-center`,`fg-2`]],template:function(a,t){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-accordion`)(3,`details`,2),xh(`openChange`,function(g){return $f(t.first,g)||(t.first=g),g}),Zf(4,` Bound with `),ce(5,`code`),Zf(6,`[(open)]`),vi(),Zf(7,`. `),vi(),ce(8,`details`,3),xh(`openChange`,function(g){return $f(t.second,g)||(t.second=g),g}),Zf(9,` The buttons and the headers drive the same state. `),vi()()(),ce(10,`div`,4)(11,`div`,5)(12,`div`,6)(13,`button`,7),ui(`click`,function(){return t.first.set(!t.first())}),Zf(14,`Toggle first`),vi()(),ce(15,`div`,6)(16,`button`,7),ui(`click`,function(){return t.second.set(!t.second())}),Zf(17,`Toggle second`),vi()(),ce(18,`div`,8),Zf(19),vi()()()()),a&2&&(Tt(3),Mh(`open`,t.first),Tt(5),Mh(`open`,t.second),Tt(11),jh(` First: `,t.first()?`open`:`closed`,`, second: `,t.second()?`open`:`closed`,` `))},dependencies:[d,r,f$1],encapsulation:2})};var C=class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-accordion-disabled`]],decls:9,vars:0,consts:[[1,`row`],[1,`col-12`,`lg:col-8`],[`ngsAccordionItem`,``,`heading`,`Available`],[`ngsAccordionItem`,``,`heading`,`Not available yet`,`disabled`,``],[`ngsAccordionItem`,``,`heading`,`Also available`]],template:function(a,t){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-accordion`)(3,`details`,2),Zf(4,`This section opens as usual.`),vi(),ce(5,`details`,3),Zf(6,` This content cannot be reached. `),vi(),ce(7,`details`,4),Zf(8,`So does this one.`),vi()()()())},dependencies:[d,r],encapsulation:2})};function As(o,l){o&1&&ue(0,`docs-accordion-lazy-content`)}var bs=0;var P=class o{id=++bs;static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-accordion-lazy-content`]],decls:2,vars:1,consts:[[1,`mb-0`]],template:function(a,t){a&1&&(cg(0,`p`,0),Zf(1),ag()),a&2&&(Tt(),hg(`Created on first open (instance `,t.id,`).`))},encapsulation:2})};var I=class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-accordion-lazy`]],decls:7,vars:0,consts:[[1,`row`],[1,`col-12`,`lg:col-8`],[`ngsAccordionItem`,``,`heading`,`Eager content`],[`ngsAccordionItem`,``,`heading`,`Lazy content`],[`ngsAccordionContent`,``]],template:function(a,t){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-accordion`)(3,`details`,2),ue(4,`docs-accordion-lazy-content`),vi(),ce(5,`details`,3),U0(6,As,1,0,`ng-template`,4),vi()()()())},dependencies:[d,r,f,P],encapsulation:2})};var S=class o{static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-accordion-single`]],decls:9,vars:1,consts:[[1,`row`],[1,`col-12`,`lg:col-8`],[`closeOthers`,``],[`ngsAccordionItem`,``,`heading`,`Shipping`,3,`open`],[`ngsAccordionItem`,``,`heading`,`Returns`],[`ngsAccordionItem`,``,`heading`,`Warranty`]],template:function(a,t){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-accordion`,2)(3,`details`,3),Zf(4,` Orders ship within two working days. Opening another section closes this one. `),vi(),ce(5,`details`,4),Zf(6,` Return any unused item within 30 days for a full refund. `),vi(),ce(7,`details`,5),Zf(8,`Every product has a two year warranty.`),vi()()()()),a&2&&(Tt(3),Ot(`open`,!0))},dependencies:[d,r],encapsulation:2})};function ws(o,l){if(o&1&&(ce(0,`div`,1)(1,`ngs-accordion`,5)(2,`details`,6),Zf(3),vi(),ce(4,`details`,7),Zf(5,`More content.`),vi()()()),o&2){let a=l.$implicit;Tt(),Ot(`variant`,a),Tt(),Ot(`heading`,`Variant: `+a)(`open`,!0),Tt(),hg(` Content of the `,a,` accordion. `)}}var q=class o{variants=[`bordered`,`gap`,`flush`];static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-accordion-sizes`]],decls:9,vars:1,consts:[[1,`row`,`g-4`],[1,`col-12`,`lg:col-6`],[`size`,`sm`],[`ngsAccordionItem`,``,`heading`,`Small`,3,`open`],[`ngsAccordionItem`,``,`heading`,`Another small item`],[3,`variant`],[`ngsAccordionItem`,``,3,`heading`,`open`],[`ngsAccordionItem`,``,`heading`,`Second item`]],template:function(a,t){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-accordion`,2)(3,`details`,3),Zf(4,` Tighter padding and smaller text. `),vi(),ce(5,`details`,4),Zf(6,`More content.`),vi()()(),of(7,ws,6,4,`div`,1,nf),vi()),a&2&&(Tt(3),Ot(`open`,!0),Tt(4),rf(t.variants))},dependencies:[d,r],encapsulation:2})};var js={basic:{html:{code:`<div class="row">
  <div class="col-12 lg:col-8">
    <ngs-accordion>
      <details ngsAccordionItem heading="Account details">
        Change your name, email address and password, or close your account.
      </details>
      <details ngsAccordionItem heading="Payment methods" [open]="true">
        Pay by card, bank transfer or invoice. Saved cards are never shown in full.
      </details>
      <details ngsAccordionItem heading="Notifications">
        Choose which updates you get by email and which appear in the app.
      </details>
    </ngs-accordion>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-accordion</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Account details&quot;</span>&gt;</span>
        Change your name, email address and password, or close your account.
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Payment methods&quot;</span> [<span class="hljs-attr">open</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
        Pay by card, bank transfer or invoice. Saved cards are never shown in full.
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Notifications&quot;</span>&gt;</span>
        Choose which updates you get by email and which appear in the app.
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsAccordion, NgsAccordionItem } from '@bootlace/core/accordion';

@Component({
  selector: 'docs-accordion-basic',
  imports: [NgsAccordion, NgsAccordionItem],
  templateUrl: './index.html',
})
export class AccordionBasicExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/accordion&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-accordion-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AccordionBasicExample</span> {}`}},controlled:{html:{code:`<div class="row g-3">
  <div class="col-12 lg:col-8">
    <ngs-accordion>
      <details ngsAccordionItem heading="First" [(open)]="first">
        Bound with <code>[(open)]</code>.
      </details>
      <details ngsAccordionItem heading="Second" [(open)]="second">
        The buttons and the headers drive the same state.
      </details>
    </ngs-accordion>
  </div>
  <div class="col-12">
    <div class="row g-2">
      <div class="col-auto">
        <button ngsButton variant="outline" (click)="first.set(!first())">Toggle first</button>
      </div>
      <div class="col-auto">
        <button ngsButton variant="outline" (click)="second.set(!second())">Toggle second</button>
      </div>
      <div class="col-auto align-self-center fg-2">
        First: {{ first() ? 'open' : 'closed' }}, second: {{ second() ? 'open' : 'closed' }}
      </div>
    </div>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-accordion</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;First&quot;</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;first&quot;</span>&gt;</span>
        Bound with <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>[(open)]<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>.
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Second&quot;</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;second&quot;</span>&gt;</span>
        The buttons and the headers drive the same state.
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;first.set(!first())&quot;</span>&gt;</span>Toggle first<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;second.set(!second())&quot;</span>&gt;</span>Toggle second<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto align-self-center fg-2&quot;</span>&gt;</span>
        First: {{ first() ? &#x27;open&#x27; : &#x27;closed&#x27; }}, second: {{ second() ? &#x27;open&#x27; : &#x27;closed&#x27; }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsAccordion, NgsAccordionItem } from '@bootlace/core/accordion';
import { NgsButton } from '@bootlace/core/button';

@Component({
  selector: 'docs-accordion-controlled',
  imports: [NgsAccordion, NgsAccordionItem, NgsButton],
  templateUrl: './index.html',
})
export class AccordionControlledExample {
  protected readonly first = signal(true);
  protected readonly second = signal(false);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/accordion&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-accordion-controlled&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AccordionControlledExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> first = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> second = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
}`}},disabled:{html:{code:`<div class="row">
  <div class="col-12 lg:col-8">
    <ngs-accordion>
      <details ngsAccordionItem heading="Available">This section opens as usual.</details>
      <details ngsAccordionItem heading="Not available yet" disabled>
        This content cannot be reached.
      </details>
      <details ngsAccordionItem heading="Also available">So does this one.</details>
    </ngs-accordion>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-accordion</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Available&quot;</span>&gt;</span>This section opens as usual.<span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Not available yet&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
        This content cannot be reached.
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Also available&quot;</span>&gt;</span>So does this one.<span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsAccordion, NgsAccordionItem } from '@bootlace/core/accordion';

@Component({
  selector: 'docs-accordion-disabled',
  imports: [NgsAccordion, NgsAccordionItem],
  templateUrl: './index.html',
})
export class AccordionDisabledExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/accordion&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-accordion-disabled&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AccordionDisabledExample</span> {}`}},lazy:{html:{code:`<div class="row">
  <div class="col-12 lg:col-8">
    <ngs-accordion>
      <details ngsAccordionItem heading="Eager content">
        <docs-accordion-lazy-content />
      </details>
      <details ngsAccordionItem heading="Lazy content">
        <ng-template ngsAccordionContent><docs-accordion-lazy-content /></ng-template>
      </details>
    </ngs-accordion>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-accordion</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Eager content&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">docs-accordion-lazy-content</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Lazy content&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">ngsAccordionContent</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">docs-accordion-lazy-content</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsAccordion, NgsAccordionContent, NgsAccordionItem } from '@bootlace/core/accordion';

let instances = 0;

@Component({
  selector: 'docs-accordion-lazy-content',
  template: '<p class="mb-0">Created on first open (instance {{ id }}).</p>',
})
export class AccordionLazyContent {
  protected readonly id = ++instances;
}

@Component({
  selector: 'docs-accordion-lazy',
  imports: [NgsAccordion, NgsAccordionItem, NgsAccordionContent, AccordionLazyContent],
  templateUrl: './index.html',
})
export class AccordionLazyExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionContent</span>, <span class="hljs-title class_">NgsAccordionItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/accordion&#x27;</span>;

<span class="hljs-keyword">let</span> instances = <span class="hljs-number">0</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-accordion-lazy-content&#x27;</span>,
  <span class="hljs-attr">template</span>: <span class="hljs-string">&#x27;&lt;p class=&quot;mb-0&quot;&gt;Created on first open (instance {{ id }}).&lt;/p&gt;&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AccordionLazyContent</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> id = ++instances;
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-accordion-lazy&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span>, <span class="hljs-title class_">NgsAccordionContent</span>, <span class="hljs-title class_">AccordionLazyContent</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AccordionLazyExample</span> {}`}},single:{html:{code:`<div class="row">
  <div class="col-12 lg:col-8">
    <ngs-accordion closeOthers>
      <details ngsAccordionItem heading="Shipping" [open]="true">
        Orders ship within two working days. Opening another section closes this one.
      </details>
      <details ngsAccordionItem heading="Returns">
        Return any unused item within 30 days for a full refund.
      </details>
      <details ngsAccordionItem heading="Warranty">Every product has a two year warranty.</details>
    </ngs-accordion>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-accordion</span> <span class="hljs-attr">closeOthers</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Shipping&quot;</span> [<span class="hljs-attr">open</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
        Orders ship within two working days. Opening another section closes this one.
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Returns&quot;</span>&gt;</span>
        Return any unused item within 30 days for a full refund.
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Warranty&quot;</span>&gt;</span>Every product has a two year warranty.<span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsAccordion, NgsAccordionItem } from '@bootlace/core/accordion';

@Component({
  selector: 'docs-accordion-single',
  imports: [NgsAccordion, NgsAccordionItem],
  templateUrl: './index.html',
})
export class AccordionSingleExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/accordion&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-accordion-single&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AccordionSingleExample</span> {}`}},sizes:{html:{code:`<div class="row g-4">
  <div class="col-12 lg:col-6">
    <ngs-accordion size="sm">
      <details ngsAccordionItem heading="Small" [open]="true">
        Tighter padding and smaller text.
      </details>
      <details ngsAccordionItem heading="Another small item">More content.</details>
    </ngs-accordion>
  </div>
  @for (variant of variants; track variant) {
    <div class="col-12 lg:col-6">
      <ngs-accordion [variant]="variant">
        <details ngsAccordionItem [heading]="'Variant: ' + variant" [open]="true">
          Content of the {{ variant }} accordion.
        </details>
        <details ngsAccordionItem heading="Second item">More content.</details>
      </ngs-accordion>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-accordion</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Small&quot;</span> [<span class="hljs-attr">open</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
        Tighter padding and smaller text.
      <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Another small item&quot;</span>&gt;</span>More content.<span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  @for (variant of variants; track variant) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-accordion</span> [<span class="hljs-attr">variant</span>]=<span class="hljs-string">&quot;variant&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> [<span class="hljs-attr">heading</span>]=<span class="hljs-string">&quot;&#x27;Variant: &#x27; + variant&quot;</span> [<span class="hljs-attr">open</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>
          Content of the {{ variant }} accordion.
        <span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">details</span> <span class="hljs-attr">ngsAccordionItem</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Second item&quot;</span>&gt;</span>More content.<span class="hljs-tag">&lt;/<span class="hljs-name">details</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-accordion</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsAccordion, NgsAccordionItem } from '@bootlace/core/accordion';

@Component({
  selector: 'docs-accordion-sizes',
  imports: [NgsAccordion, NgsAccordionItem],
  templateUrl: './index.html',
})
export class AccordionSizesExample {
  protected readonly variants = ['bordered', 'gap', 'flush'] as const;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/accordion&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-accordion-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsAccordion</span>, <span class="hljs-title class_">NgsAccordionItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AccordionSizesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> variants = [<span class="hljs-string">&#x27;bordered&#x27;</span>, <span class="hljs-string">&#x27;gap&#x27;</span>, <span class="hljs-string">&#x27;flush&#x27;</span>] <span class="hljs-keyword">as</span> <span class="hljs-keyword">const</span>;
}`}}};var us=class o{tab=Yn(`examples`);sources=js;basic=N;single=S;controlled=E;disabled=C;lazy=I;sizes=q;static ɵfac=function(a){return new(a||o)};static ɵcmp=ve({type:o,selectors:[[`docs-accordion-page`]],inputs:{tab:[1,`tab`]},decls:94,vars:13,consts:[[`heading`,`Accordion`,`package`,`@bootlace/core/accordion`,`path`,`/components/accordion`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`single`,`heading`,`Single open`,3,`component`,`sources`],[`id`,`controlled`,`heading`,`Controlled`,3,`component`,`sources`],[`id`,`disabled`,`heading`,`Disabled`,3,`component`,`sources`],[`id`,`lazy`,`heading`,`Lazy content`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes and variants`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(a,t){a&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A stack of sections that expand and collapse, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.accordion`),vi(),Zf(5,` and the native `),ce(6,`code`),Zf(7,`<details>`),vi(),Zf(8,` element. The browser handles the keyboard and the expanded state; the component adds two-way `),ce(9,`code`),Zf(10,`[(open)]`),vi(),Zf(11,`, `),ce(12,`code`),Zf(13,`closeOthers`),vi(),Zf(14,`, disabled items and lazy content. `),vi(),ce(15,`docs-example`,2),Zf(16,` Put `),ce(17,`code`),Zf(18,`ngsAccordionItem`),vi(),Zf(19,` on each `),ce(20,`code`),Zf(21,`<details>`),vi(),Zf(22,` inside `),ce(23,`code`),Zf(24,`ngs-accordion`),vi(),Zf(25,`. Items open independently. Use `),ce(26,`code`),Zf(27,`heading`),vi(),Zf(28,` for the title, or an `),ce(29,`code`),Zf(30,`ngsAccordionHeader`),vi(),Zf(31,` element for richer header content. `),vi(),ce(32,`docs-example`,3)(33,`code`),Zf(34,`closeOthers`),vi(),Zf(35,` keeps one item open at a time. `),vi(),ce(36,`docs-example`,4)(37,`code`),Zf(38,`[(open)]`),vi(),Zf(39,` on an item reads and sets its state. `),vi(),ce(40,`docs-example`,5),Zf(41,` A `),ce(42,`code`),Zf(43,`disabled`),vi(),Zf(44,` item ignores clicks and Enter or Space and leaves the tab order. `),vi(),ce(45,`docs-example`,6),Zf(46,` Wrap the content in `),ce(47,`code`),Zf(48,`<ng-template ngsAccordionContent>`),vi(),Zf(49,` to create it only when the item first opens. It then stays, so reopening is instant. `),vi(),ce(50,`docs-example`,7)(51,`code`),Zf(52,`size="sm"`),vi(),Zf(53,` tightens the padding. `),ce(54,`code`),Zf(55,`variant`),vi(),Zf(56,` is `),ce(57,`code`),Zf(58,`bordered`),vi(),Zf(59,` (default), `),ce(60,`code`),Zf(61,`gap`),vi(),Zf(62,` (separate cards) or `),ce(63,`code`),Zf(64,`flush`),vi(),Zf(65,` (no outer border). `),vi(),ce(66,`section`,8)(67,`h2`,9),Zf(68,`Accessibility`),vi(),ce(69,`p`),Zf(70,` Each item is a native `),ce(71,`code`),Zf(72,`<details>`),vi(),Zf(73,` with a `),ce(74,`code`),Zf(75,`<summary>`),vi(),Zf(76,` header, so the header is focusable, toggles with Enter or Space and exposes its expanded state to assistive technology without ARIA. Collapsed content is not rendered by the browser, so it cannot take focus. The animated height is switched off with `),ce(77,`code`),Zf(78,`prefers-reduced-motion`),vi(),Zf(79,` and `),ce(80,`code`),Zf(81,`provideNgs({ animation: false })`),vi(),Zf(82,`. `),vi(),ce(83,`p`),Zf(84,` A disabled item sets `),ce(85,`code`),Zf(86,`aria-disabled="true"`),vi(),Zf(87,` on the header and removes it from the tab order. Keep header content to text and inline elements; buttons and links cannot nest in a `),ce(88,`code`),Zf(89,`<summary>`),vi(),Zf(90,`. Without `),ce(91,`code`),Zf(92,`ngsAccordionContent`),vi(),Zf(93,`, content is always in the DOM, so search and screen reader find-in-page can reach it. Lazy content is only present after the first open. `),vi()()()),a&2&&(Ot(`tab`,t.tab()),Tt(15),Ot(`component`,t.basic)(`sources`,t.sources.basic),Tt(17),Ot(`component`,t.single)(`sources`,t.sources.single),Tt(4),Ot(`component`,t.controlled)(`sources`,t.sources.controlled),Tt(4),Ot(`component`,t.disabled)(`sources`,t.sources.disabled),Tt(5),Ot(`component`,t.lazy)(`sources`,t.sources.lazy),Tt(5),Ot(`component`,t.sizes)(`sources`,t.sources.sizes))},dependencies:[ue$1,pe],encapsulation:2})};export{us as AccordionPage};