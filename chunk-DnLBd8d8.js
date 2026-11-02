import{An as hg,At as W,Br as ui,Cr as rf,G as Lr,Gr as vf,Gt as Yn,Hn as kf,It as XR,Jt as Zf,L as KC,Pt as XC,Rn as jo,Tn as gf,Un as kg,Vt as Y3,Wr as ve,Zr as wf,_r as q3,en as ah,et as Ot,i as $t,ir as nf,kn as hf,mt as So,nr as nA,on as ce,qr as vi,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{t as l}from"./chunk-B6h8Jb5u.js";import"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";var Q=[`*`];function X(t,l){if(t&1){let n=gf();ce(0,`button`,2),ui(`click`,function(){q3(n);let m=vf();return Y3(m.dismiss())}),vi()}if(t&2){let n=vf();Ot(`label`,n.name())}}var d=class t{color=Yn();closable=Yn(!1,{transform:$t});closeLabel=Yn();dismissible=Yn(!1,{transform:$t});dismissLabel=Yn();live=Yn(`polite`);closed=XR();isClosable=jo(()=>this.closable()||this.dismissible());name=jo(()=>this.closeLabel()??this.dismissLabel());role=jo(()=>{let l=this.live();return l===`assertive`?`alert`:l===`polite`?`status`:null});classes=jo(()=>{let l=this.color();return l?`alert theme-${l}`:`alert`});dismiss(){this.closed.emit()}static ɵfac=function(n){return new(n||t)};static ɵcmp=ve({type:t,selectors:[[`ngs-alert`]],hostVars:3,hostBindings:function(n,o){n&2&&(Lr(`role`,o.role()),kg(o.classes()))},inputs:{color:[1,`color`],closable:[1,`closable`],closeLabel:[1,`closeLabel`],dismissible:[1,`dismissible`],dismissLabel:[1,`dismissLabel`],live:[1,`live`]},outputs:{closed:`closed`},ngContentSelectors:Q,decls:3,vars:1,consts:[[1,`flex-grow-1`],[`ngsButtonX`,``,1,`ms-auto`,3,`label`],[`ngsButtonX`,``,1,`ms-auto`,3,`click`,`label`]],template:function(n,o){n&1&&(kf(),ce(0,`div`,0),hf(1),vi(),KC(2,X,1,1,`button`,1)),n&2&&(Tt(2),XC(o.isClosable()?2:-1))},dependencies:[l],encapsulation:2})};function $(t,l){if(t&1&&(ce(0,`div`,1)(1,`ngs-alert`,2),Zf(2),vi()()),t&2){let n=l.$implicit;Tt(),Ot(`color`,n),Tt(),hg(`This alert uses the `,n,` colour.`)}}var w=class t{colors=[`primary`,`accent`,`secondary`,`success`,`danger`,`warning`,`info`,`inverse`];static ɵfac=function(n){return new(n||t)};static ɵcmp=ve({type:t,selectors:[[`docs-alert-colors`]],decls:3,vars:0,consts:[[1,`row`,`g-2`],[1,`col-12`,`md:col-6`],[`live`,`off`,3,`color`]],template:function(n,o){n&1&&(ce(0,`div`,0),of(1,$,3,2,`div`,1,nf),vi()),n&2&&(Tt(),rf(o.colors))},dependencies:[d],encapsulation:2})};var _=class t{static ɵfac=function(n){return new(n||t)};static ɵcmp=ve({type:t,selectors:[[`docs-alert-content`]],decls:16,vars:0,consts:[[1,`row`,`g-2`],[1,`col-12`,`md:col-6`],[`color`,`success`,`live`,`off`],[1,`alert-heading`],[`href`,`#content`,1,`alert-link`],[`live`,`off`]],template:function(n,o){n&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-alert`,2)(3,`h4`,3),Zf(4,`Well done`),vi(),ce(5,`p`),Zf(6,` Your changes were saved. Read the `),ce(7,`a`,4),Zf(8,`release notes`),vi(),Zf(9,`. `),vi()()(),ce(10,`div`,1)(11,`ngs-alert`,5),Zf(12,` A neutral alert without a theme colour, with an `),ce(13,`a`,4),Zf(14,`inline link`),vi(),Zf(15,`. `),vi()()())},dependencies:[d],encapsulation:2})};var G=[`restore`];function J(t,l){if(t&1){let n=gf();ce(0,`div`,2)(1,`ngs-alert`,4),ui(`closed`,function(){q3(n);let m=vf();return Y3(m.dismiss(m.session))}),Zf(2,` Your session expires in five minutes. `),vi()()}}function K(t,l){if(t&1){let n=gf();ce(0,`div`,2)(1,`ngs-alert`,5),ui(`closed`,function(){q3(n);let m=vf();return Y3(m.dismiss(m.payment))}),ce(2,`strong`),Zf(3,`Payment failed.`),vi(),Zf(4,` Check your card details and try again. `),vi()()}}var E=class t{session=W(!0);payment=W(!0);restore=nA.required(`restore`,{read:So});dismiss(l){l.set(!1),this.restore().nativeElement.focus()}showAll(){this.session.set(!0),this.payment.set(!0)}static ɵfac=function(n){return new(n||t)};static ɵcmp=ve({type:t,selectors:[[`docs-alert-closable`]],viewQuery:function(n,o){n&1&&ah(o.restore,G,5,So),n&2&&wf()},decls:7,vars:2,consts:[[`restore`,``],[1,`row`,`g-2`],[1,`col-12`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,3,`click`],[`color`,`warning`,`closable`,``,3,`closed`],[`color`,`danger`,`closable`,``,`live`,`assertive`,3,`closed`]],template:function(n,o){n&1&&(ce(0,`div`,1),KC(1,J,3,0,`div`,2),KC(2,K,5,0,`div`,2),ce(3,`div`,2)(4,`button`,3,0),ui(`click`,function(){return o.showAll()}),Zf(6,` Show alerts again `),vi()()()),n&2&&(Tt(),XC(o.session()?1:-1),Tt(),XC(o.payment()?2:-1))},dependencies:[d,f],encapsulation:2})};var z={closable:{html:{code:`<div class="row g-2">
  @if (session()) {
    <div class="col-12">
      <ngs-alert color="warning" closable (closed)="dismiss(session)">
        Your session expires in five minutes.
      </ngs-alert>
    </div>
  }
  @if (payment()) {
    <div class="col-12">
      <ngs-alert color="danger" closable live="assertive" (closed)="dismiss(payment)">
        <strong>Payment failed.</strong> Check your card details and try again.
      </ngs-alert>
    </div>
  }
  <div class="col-12">
    <button #restore ngsButton variant="outline" size="sm" (click)="showAll()">
      Show alerts again
    </button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @if (session()) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-alert</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">closable</span> (<span class="hljs-attr">closed</span>)=<span class="hljs-string">&quot;dismiss(session)&quot;</span>&gt;</span>
        Your session expires in five minutes.
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-alert</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
  @if (payment()) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-alert</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">closable</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;assertive&quot;</span> (<span class="hljs-attr">closed</span>)=<span class="hljs-string">&quot;dismiss(payment)&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Payment failed.<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> Check your card details and try again.
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-alert</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> #<span class="hljs-attr">restore</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;showAll()&quot;</span>&gt;</span>
      Show alerts again
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, ElementRef, WritableSignal, signal, viewChild } from '@angular/core';
import { NgsAlert } from '@bootlace/core/alert';
import { NgsButton } from '@bootlace/core/button';

@Component({
  selector: 'docs-alert-closable',
  imports: [NgsAlert, NgsButton],
  templateUrl: './index.html',
})
export class AlertClosableExample {
  protected readonly session = signal(true);
  protected readonly payment = signal(true);
  // The template ref sits on an ngsButton host, so read the element, not the component.
  private readonly restore = viewChild.required('restore', { read: ElementRef<HTMLButtonElement> });

  /** Removes the alert, then moves focus off the close button that is about to disappear. */
  protected dismiss(alert: WritableSignal<boolean>): void {
    alert.set(false);
    this.restore().nativeElement.focus();
  }

  protected showAll(): void {
    this.session.set(true);
    this.payment.set(true);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ElementRef</span>, <span class="hljs-title class_">WritableSignal</span>, signal, viewChild } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsAlert</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/alert&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-alert-closable&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsAlert</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AlertClosableExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> session = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> payment = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-comment">// The template ref sits on an ngsButton host, so read the element, not the component.</span>
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> restore = viewChild.<span class="hljs-title function_">required</span>(<span class="hljs-string">&#x27;restore&#x27;</span>, { <span class="hljs-attr">read</span>: <span class="hljs-title class_">ElementRef</span>&lt;<span class="hljs-title class_">HTMLButtonElement</span>&gt; });

  <span class="hljs-comment">/** Removes the alert, then moves focus off the close button that is about to disappear. */</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">dismiss</span>(<span class="hljs-attr">alert</span>: <span class="hljs-title class_">WritableSignal</span>&lt;<span class="hljs-built_in">boolean</span>&gt;): <span class="hljs-built_in">void</span> {
    alert.<span class="hljs-title function_">set</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">restore</span>().<span class="hljs-property">nativeElement</span>.<span class="hljs-title function_">focus</span>();
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">showAll</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">session</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">payment</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
  }
}`}},colors:{html:{code:`<div class="row g-2">
  @for (color of colors; track color) {
    <div class="col-12 md:col-6">
      <ngs-alert [color]="color" live="off">This alert uses the {{ color }} colour.</ngs-alert>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @for (color of colors; track color) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-alert</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>This alert uses the {{ color }} colour.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-alert</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsThemeColor } from '@bootlace/core';
import { NgsAlert } from '@bootlace/core/alert';

@Component({
  selector: 'docs-alert-colors',
  imports: [NgsAlert],
  templateUrl: './index.html',
})
export class AlertColorsExample {
  protected readonly colors: NgsThemeColor[] = [
    'primary',
    'accent',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'inverse',
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsThemeColor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsAlert</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/alert&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-alert-colors&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsAlert</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AlertColorsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">colors</span>: <span class="hljs-title class_">NgsThemeColor</span>[] = [
    <span class="hljs-string">&#x27;primary&#x27;</span>,
    <span class="hljs-string">&#x27;accent&#x27;</span>,
    <span class="hljs-string">&#x27;secondary&#x27;</span>,
    <span class="hljs-string">&#x27;success&#x27;</span>,
    <span class="hljs-string">&#x27;danger&#x27;</span>,
    <span class="hljs-string">&#x27;warning&#x27;</span>,
    <span class="hljs-string">&#x27;info&#x27;</span>,
    <span class="hljs-string">&#x27;inverse&#x27;</span>,
  ];
}`}},content:{html:{code:`<div class="row g-2">
  <div class="col-12 md:col-6">
    <ngs-alert color="success" live="off">
      <h4 class="alert-heading">Well done</h4>
      <p>
        Your changes were saved. Read the <a href="#content" class="alert-link">release notes</a>.
      </p>
    </ngs-alert>
  </div>
  <div class="col-12 md:col-6">
    <ngs-alert live="off">
      A neutral alert without a theme colour, with an
      <a href="#content" class="alert-link">inline link</a>.
    </ngs-alert>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-alert</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;alert-heading&quot;</span>&gt;</span>Well done<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
        Your changes were saved. Read the <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#content&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;alert-link&quot;</span>&gt;</span>release notes<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>.
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-alert</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>
      A neutral alert without a theme colour, with an
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#content&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;alert-link&quot;</span>&gt;</span>inline link<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>.
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsAlert } from '@bootlace/core/alert';

@Component({
  selector: 'docs-alert-content',
  imports: [NgsAlert],
  templateUrl: './index.html',
})
export class AlertContentExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsAlert</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/alert&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-alert-content&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsAlert</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">AlertContentExample</span> {}`}}};var O=class t{tab=Yn(`examples`);sources=z;colors=w;content=_;closable=E;static ɵfac=function(n){return new(n||t)};static ɵcmp=ve({type:t,selectors:[[`docs-alert-page`]],inputs:{tab:[1,`tab`]},decls:78,vars:7,consts:[[`heading`,`Alert`,`package`,`@bootlace/core/alert`,`path`,`/components/alert`,3,`tab`],[1,`docs-page-lead`],[`id`,`colors`,`heading`,`Colors`,3,`component`,`sources`],[`id`,`content`,`heading`,`Heading and links`,3,`component`,`sources`],[`id`,`closable`,`heading`,`Closable`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(n,o){n&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` An inline, optionally closable message, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.alert`),vi(),Zf(5,`. `),vi(),ce(6,`docs-example`,2),Zf(7,` The eight theme colours, applied with `),ce(8,`code`),Zf(9,`.theme-*`),vi(),Zf(10,`. Without `),ce(11,`code`),Zf(12,`color`),vi(),Zf(13,` the alert uses Bootstrap's neutral look. `),vi(),ce(14,`docs-example`,3),Zf(15,` Use Bootstrap's `),ce(16,`code`),Zf(17,`.alert-heading`),vi(),Zf(18,` on a heading and `),ce(19,`code`),Zf(20,`.alert-link`),vi(),Zf(21,` on links inside the alert. `),vi(),ce(22,`docs-example`,4)(23,`code`),Zf(24,`closable`),vi(),Zf(25,` adds a close button that emits `),ce(26,`code`),Zf(27,`closed`),vi(),Zf(28,`. The alert doesn't remove itself: wrap it in `),ce(29,`code`),Zf(30,`@if`),vi(),Zf(31,` and clear the condition on `),ce(32,`code`),Zf(33,`closed`),vi(),Zf(34,`, as here. `),vi(),ce(35,`section`,5)(36,`h2`,6),Zf(37,`Accessibility`),vi(),ce(38,`p`),Zf(39,` The `),ce(40,`code`),Zf(41,`live`),vi(),Zf(42,` input picks the announcement: `),ce(43,`code`),Zf(44,`polite`),vi(),Zf(45,` (default) is `),ce(46,`code`),Zf(47,`role="status"`),vi(),Zf(48,`, `),ce(49,`code`),Zf(50,`assertive`),vi(),Zf(51,` is `),ce(52,`code`),Zf(53,`role="alert"`),vi(),Zf(54,` and `),ce(55,`code`),Zf(56,`off`),vi(),Zf(57,` sets no role. A live region only announces content that changes after the page has loaded, so an alert that is already on the page needs no role: use `),ce(58,`code`),Zf(59,`off`),vi(),Zf(60,` for it. Reserve `),ce(61,`code`),Zf(62,`assertive`),vi(),Zf(63,` for errors that need attention right away, because it interrupts the user. `),vi(),ce(64,`p`),Zf(65,` The close button is a native `),ce(66,`code`),Zf(67,`<button>`),vi(),Zf(68,` named "Close" (from `),ce(69,`code`),Zf(70,`NGS_I18N`),vi(),Zf(71,`, or `),ce(72,`code`),Zf(73,`closeLabel`),vi(),Zf(74,`). Removing the alert removes the focused close button too, so move focus somewhere sensible in the `),ce(75,`code`),Zf(76,`closed`),vi(),Zf(77,` handler, such as the control that comes next or the one that can bring the alert back. Otherwise focus falls back to the page. Colour alone must not convey the meaning: write what happened in the text. `),vi()()()),n&2&&(Ot(`tab`,o.tab()),Tt(6),Ot(`component`,o.colors)(`sources`,o.sources.colors),Tt(8),Ot(`component`,o.content)(`sources`,o.sources.content),Tt(8),Ot(`component`,o.closable)(`sources`,o.sources.closable))},dependencies:[ue,pe],encapsulation:2})};export{O as AlertPage};