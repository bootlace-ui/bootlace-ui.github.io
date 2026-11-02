import{An as hg,At as W,Cr as rf,Gt as Yn,Jt as Zf,Sn as fh,Tn as gf,Vt as Y3,Wr as ve,Zn as m7,_r as q3,bn as f7,ei as xh,et as Ot,f as Cf,ir as nf,on as ce,q as Mh,qr as vi,r as $f,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{O as gs,T as ds,h as Pr,j as ln,k as hs,u as Hr,w as cs}from"./chunk-DycqepRM.js";import"./main-M33NX4WO.js";import{n as f,t as S$1}from"./chunk-D1C4nud_.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";var y=class e{plan=W(`pro`);static ɵfac=function(l){return new(l||e)};static ɵcmp=ve({type:e,selectors:[[`docs-radio-basic`]],decls:12,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`label`,`Plan`,3,`valueChange`,`value`],[`value`,`free`,`hint`,`For hobby projects.`],[`value`,`pro`,`hint`,`Unlimited projects.`],[`value`,`team`],[1,`mb-0`]],template:function(l,t){l&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-radio-group`,2),xh(`valueChange`,function(r){return $f(t.plan,r)||(t.plan=r),r}),ce(3,`ngs-radio`,3),Zf(4,`Free`),vi(),ce(5,`ngs-radio`,4),Zf(6,`Pro`),vi(),ce(7,`ngs-radio`,5),Zf(8,`Team`),vi()()(),ce(9,`div`,1)(10,`p`,6),Zf(11),vi()()()),l&2&&(Tt(2),Mh(`value`,t.plan),Tt(9),hg(`Selected: `,t.plan()))},dependencies:[S$1,f],encapsulation:2})};function J(e,o){if(e&1&&(ce(0,`ngs-radio`,3),Zf(1),vi()),e&2){let l=o.$implicit;Ot(`value`,l),Tt(),fh(l)}}var q=class e{sizes=[`S`,`M`,`L`,`XL`];size=W(`M`);static ɵfac=function(l){return new(l||e)};static ɵcmp=ve({type:e,selectors:[[`docs-radio-horizontal`]],decls:11,vars:1,consts:[[1,`row`,`g-3`],[1,`col-12`],[`label`,`Size`,`orientation`,`horizontal`,3,`valueChange`,`value`],[3,`value`],[`label`,`Colour`,`orientation`,`horizontal`,`color`,`success`,`size`,`lg`,`value`,`b`],[`value`,`a`],[`value`,`b`]],template:function(l,t){l&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-radio-group`,2),xh(`valueChange`,function(r){return $f(t.size,r)||(t.size=r),r}),of(3,J,2,2,`ngs-radio`,3,nf),vi()(),ce(5,`div`,1)(6,`ngs-radio-group`,4)(7,`ngs-radio`,5),Zf(8,`Option A`),vi(),ce(9,`ngs-radio`,6),Zf(10,`Option B`),vi()()()()),l&2&&(Tt(2),Mh(`value`,t.size),Tt(),rf(t.sizes))},dependencies:[S$1,f],encapsulation:2})};var E=class e{static ɵfac=function(l){return new(l||e)};static ɵcmp=ve({type:e,selectors:[[`docs-radio-states`]],decls:19,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-4`],[`label`,`One option disabled`,`value`,`a`],[`value`,`a`],[`value`,`b`,`disabled`,``],[`label`,`Whole group disabled`,`value`,`a`,`disabled`,``],[`value`,`b`],[`label`,`Invalid group`,`invalid`,``]],template:function(l,t){l&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-radio-group`,2)(3,`ngs-radio`,3),Zf(4,`Available`),vi(),ce(5,`ngs-radio`,4),Zf(6,`Unavailable`),vi()()(),ce(7,`div`,1)(8,`ngs-radio-group`,5)(9,`ngs-radio`,3),Zf(10,`Selected`),vi(),ce(11,`ngs-radio`,6),Zf(12,`Other`),vi()()(),ce(13,`div`,1)(14,`ngs-radio-group`,7)(15,`ngs-radio`,3),Zf(16,`Option A`),vi(),ce(17,`ngs-radio`,6),Zf(18,`Option B`),vi()()()())},dependencies:[S$1,f],encapsulation:2})};var S=class e{delivery=`standard`;static ɵfac=function(l){return new(l||e)};static ɵcmp=ve({type:e,selectors:[[`docs-radio-template-driven`]],decls:13,vars:3,consts:[[`form`,`ngForm`],[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`label`,`Delivery`,`name`,`delivery`,`required`,``,3,`ngModelChange`,`ngModel`],[`value`,`standard`],[`value`,`express`],[1,`mb-0`]],template:function(l,t){if(l&1){let u=gf();ce(0,`form`,1,0)(2,`div`,2)(3,`ngs-radio-group`,3),f7(),xh(`ngModelChange`,function(R){return q3(u),$f(t.delivery,R)||(t.delivery=R),Y3(R)}),ce(4,`ngs-radio`,4),Zf(5,`Standard`),vi(),ce(6,`ngs-radio`,5),Zf(7,`Express`),vi()()(),ce(8,`div`,2)(9,`p`,6),Zf(10),vi(),ce(11,`p`,6),Zf(12),vi()()()}if(l&2){let u=Cf(1);Tt(3),Mh(`ngModel`,t.delivery),m7(),Tt(7),hg(`ngModel: `,t.delivery),Tt(2),hg(`Form valid: `,u.valid?`yes`:`no`)}},dependencies:[S$1,f,gs,hs,cs,ds,ln,Hr,Pr],encapsulation:2})};var V={basic:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-radio-group label="Plan" [(value)]="plan">
      <ngs-radio value="free" hint="For hobby projects.">Free</ngs-radio>
      <ngs-radio value="pro" hint="Unlimited projects.">Pro</ngs-radio>
      <ngs-radio value="team">Team</ngs-radio>
    </ngs-radio-group>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0">Selected: {{ plan() }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Plan&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;plan&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;free&quot;</span> <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;For hobby projects.&quot;</span>&gt;</span>Free<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;pro&quot;</span> <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;Unlimited projects.&quot;</span>&gt;</span>Pro<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;team&quot;</span>&gt;</span>Team<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Selected: {{ plan() }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsRadio, NgsRadioGroup } from '@bootlace/core/radio';

@Component({
  selector: 'docs-radio-basic',
  imports: [NgsRadio, NgsRadioGroup],
  templateUrl: './index.html',
})
export class RadioBasicExample {
  protected readonly plan = signal<string | null>('pro');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsRadio</span>, <span class="hljs-title class_">NgsRadioGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/radio&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-radio-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsRadio</span>, <span class="hljs-title class_">NgsRadioGroup</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">RadioBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> plan = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;pro&#x27;</span>);
}`}},horizontal:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <ngs-radio-group label="Size" orientation="horizontal" [(value)]="size">
      @for (option of sizes; track option) {
        <ngs-radio [value]="option">{{ option }}</ngs-radio>
      }
    </ngs-radio-group>
  </div>
  <div class="col-12">
    <ngs-radio-group label="Colour" orientation="horizontal" color="success" size="lg" value="b">
      <ngs-radio value="a">Option A</ngs-radio>
      <ngs-radio value="b">Option B</ngs-radio>
    </ngs-radio-group>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Size&quot;</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;horizontal&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;size&quot;</span>&gt;</span>
      @for (option of sizes; track option) {
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Colour&quot;</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Option A<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Option B<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsRadio, NgsRadioGroup } from '@bootlace/core/radio';

@Component({
  selector: 'docs-radio-horizontal',
  imports: [NgsRadio, NgsRadioGroup],
  templateUrl: './index.html',
})
export class RadioHorizontalExample {
  protected readonly sizes = ['S', 'M', 'L', 'XL'];
  protected readonly size = signal<string | null>('M');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsRadio</span>, <span class="hljs-title class_">NgsRadioGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/radio&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-radio-horizontal&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsRadio</span>, <span class="hljs-title class_">NgsRadioGroup</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">RadioHorizontalExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sizes = [<span class="hljs-string">&#x27;S&#x27;</span>, <span class="hljs-string">&#x27;M&#x27;</span>, <span class="hljs-string">&#x27;L&#x27;</span>, <span class="hljs-string">&#x27;XL&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> size = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;M&#x27;</span>);
}`}},states:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-4">
    <ngs-radio-group label="One option disabled" value="a">
      <ngs-radio value="a">Available</ngs-radio>
      <ngs-radio value="b" disabled>Unavailable</ngs-radio>
    </ngs-radio-group>
  </div>
  <div class="col-12 md:col-4">
    <ngs-radio-group label="Whole group disabled" value="a" disabled>
      <ngs-radio value="a">Selected</ngs-radio>
      <ngs-radio value="b">Other</ngs-radio>
    </ngs-radio-group>
  </div>
  <div class="col-12 md:col-4">
    <ngs-radio-group label="Invalid group" invalid>
      <ngs-radio value="a">Option A</ngs-radio>
      <ngs-radio value="b">Option B</ngs-radio>
    </ngs-radio-group>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;One option disabled&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Available<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;b&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Unavailable<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Whole group disabled&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Selected<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Other<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Invalid group&quot;</span> <span class="hljs-attr">invalid</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Option A<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Option B<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsRadio, NgsRadioGroup } from '@bootlace/core/radio';

@Component({
  selector: 'docs-radio-states',
  imports: [NgsRadio, NgsRadioGroup],
  templateUrl: './index.html',
})
export class RadioStatesExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsRadio</span>, <span class="hljs-title class_">NgsRadioGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/radio&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-radio-states&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsRadio</span>, <span class="hljs-title class_">NgsRadioGroup</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">RadioStatesExample</span> {}`}},"template-driven":{html:{code:`<form class="row g-3" #form="ngForm">
  <div class="col-12 md:col-6">
    <ngs-radio-group label="Delivery" name="delivery" [(ngModel)]="delivery" required>
      <ngs-radio value="standard">Standard</ngs-radio>
      <ngs-radio value="express">Express</ngs-radio>
    </ngs-radio-group>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0">ngModel: {{ delivery }}</p>
    <p class="mb-0">Form valid: {{ form.valid ? 'yes' : 'no' }}</p>
  </div>
</form>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span> #<span class="hljs-attr">form</span>=<span class="hljs-string">&quot;ngForm&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Delivery&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;delivery&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;delivery&quot;</span> <span class="hljs-attr">required</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;standard&quot;</span>&gt;</span>Standard<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;express&quot;</span>&gt;</span>Express<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>ngModel: {{ delivery }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Form valid: {{ form.valid ? &#x27;yes&#x27; : &#x27;no&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgsRadio, NgsRadioGroup } from '@bootlace/core/radio';

@Component({
  selector: 'docs-radio-template-driven',
  imports: [NgsRadio, NgsRadioGroup, FormsModule],
  templateUrl: './index.html',
})
export class RadioTemplateDrivenExample {
  protected delivery = 'standard';
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormsModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsRadio</span>, <span class="hljs-title class_">NgsRadioGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/radio&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-radio-template-driven&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsRadio</span>, <span class="hljs-title class_">NgsRadioGroup</span>, <span class="hljs-title class_">FormsModule</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">RadioTemplateDrivenExample</span> {
  <span class="hljs-keyword">protected</span> delivery = <span class="hljs-string">&#x27;standard&#x27;</span>;
}`}}};var X=class e{tab=Yn(`examples`);sources=V;basic=y;horizontal=q;templateDriven=S;states=E;static ɵfac=function(l){return new(l||e)};static ɵcmp=ve({type:e,selectors:[[`docs-radio-page`]],inputs:{tab:[1,`tab`]},decls:78,vars:9,consts:[[`heading`,`Radio`,`package`,`@bootlace/core/radio`,`path`,`/form/radio`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`horizontal`,`heading`,`Horizontal, size and color`,3,`component`,`sources`],[`id`,`template-driven`,`heading`,`Template-driven forms`,3,`component`,`sources`],[`id`,`states`,`heading`,`States`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(l,t){l&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A radio group built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.radio`),vi(),Zf(5,` over native `),ce(6,`code`),Zf(7,`<input type="radio">`),vi(),Zf(8,`. `),ce(9,`code`),Zf(10,`<ngs-radio-group>`),vi(),Zf(11,` owns the value; bind it with `),ce(12,`code`),Zf(13,`[(value)]`),vi(),Zf(14,`, `),ce(15,`code`),Zf(16,`[(ngModel)]`),vi(),Zf(17,` or `),ce(18,`code`),Zf(19,`formControlName`),vi(),Zf(20,`. `),vi(),ce(21,`docs-example`,2),Zf(22,` Each `),ce(23,`code`),Zf(24,`<ngs-radio>`),vi(),Zf(25,` has a `),ce(26,`code`),Zf(27,`value`),vi(),Zf(28,`, which can be any type. `),vi(),ce(29,`docs-example`,3)(30,`code`),Zf(31,`orientation="horizontal"`),vi(),Zf(32,` lays the options in a row; `),ce(33,`code`),Zf(34,`size`),vi(),Zf(35,` and `),ce(36,`code`),Zf(37,`color`),vi(),Zf(38,` on the group apply to every radio. `),vi(),ce(39,`docs-example`,4),Zf(40,` Works with `),ce(41,`code`),Zf(42,`ngModel`),vi(),Zf(43,`. The group's `),ce(44,`code`),Zf(45,`name`),vi(),Zf(46,` doubles as the radios' shared `),ce(47,`code`),Zf(48,`name`),vi(),Zf(49,`. `),vi(),ce(50,`docs-example`,5),Zf(51,` Disable one radio or the whole group, or mark the group invalid. `),vi(),ce(52,`section`,6)(53,`h2`,7),Zf(54,`Accessibility`),vi(),ce(55,`p`),Zf(56,` The radios are native, share one `),ce(57,`code`),Zf(58,`name`),vi(),Zf(59,` and sit in a `),ce(60,`code`),Zf(61,`role="radiogroup"`),vi(),Zf(62,`, so the browser gives the group a single tab stop and the arrow keys move and select within it, skipping disabled options. Give the group an accessible name with `),ce(63,`code`),Zf(64,`label`),vi(),Zf(65,` or a visible heading with `),ce(66,`code`),Zf(67,`aria-labelledby`),vi(),Zf(68,`. Each label is a `),ce(69,`code`),Zf(70,`<label for>`),vi(),Zf(71,`, and `),ce(72,`code`),Zf(73,`hint`),vi(),Zf(74,` text is linked with `),ce(75,`code`),Zf(76,`aria-describedby`),vi(),Zf(77,`. `),vi()()()),l&2&&(Ot(`tab`,t.tab()),Tt(21),Ot(`component`,t.basic)(`sources`,t.sources.basic),Tt(8),Ot(`component`,t.horizontal)(`sources`,t.sources.horizontal),Tt(10),Ot(`component`,t.templateDriven)(`sources`,t.sources[`template-driven`]),Tt(11),Ot(`component`,t.states)(`sources`,t.sources.states))},dependencies:[ue,pe],encapsulation:2})};export{X as RadioPage};