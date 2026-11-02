import{An as hg,At as W,Br as ui,Gt as Yn,Jt as Zf,Pr as tj,Sn as fh,Wr as ve,Zn as m7,bn as f7,ei as xh,et as Ot,lt as Rm,on as ce,q as Mh,qr as vi,r as $f,vn as ej,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{I as rt,M as ms,N as pn,T as ds,k as hs,r as Br,w as cs,z as zr}from"./chunk-DycqepRM.js";import"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";import{t as z}from"./chunk-y4SNPthP.js";var m=class c{notifications=W(!0);static ɵfac=function(t){return new(t||c)};static ɵcmp=ve({type:c,selectors:[[`docs-switch-basic`]],decls:7,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`hint`,`Sent by email.`,3,`valueChange`,`value`],[1,`mb-0`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-switch`,2),xh(`valueChange`,function(f){return $f(e.notifications,f)||(e.notifications=f),f}),Zf(3,`Notifications`),vi()(),ce(4,`div`,1)(5,`p`,3),Zf(6),vi()()()),t&2&&(Tt(2),Mh(`value`,e.notifications),Tt(4),hg(`Notifications are `,e.notifications()?`on`:`off`))},dependencies:[z],encapsulation:2})};var j=class c{form=new rt({darkMode:new pn(!1),locked:new pn({value:!0,disabled:!0})});toggleDisabled(){let p=this.form.controls.darkMode;p.disabled?p.enable():p.disable()}static ɵfac=function(t){return new(t||c)};static ɵcmp=ve({type:c,selectors:[[`docs-switch-reactive-forms`]],decls:13,vars:5,consts:[[1,`row`,`g-3`,3,`formGroup`],[1,`col-12`,`md:col-6`],[`formControlName`,`darkMode`],[`formControlName`,`locked`],[1,`mb-1`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`type`,`button`,3,`click`]],template:function(t,e){t&1&&(ce(0,`form`,0)(1,`div`,1)(2,`ngs-switch`,2),f7(),Zf(3,`Dark mode`),vi(),ce(4,`ngs-switch`,3),f7(),Zf(5,`Locked`),vi()(),ce(6,`div`,1)(7,`p`,4)(8,`code`),Zf(9),ej(10,`json`),vi()(),ce(11,`button`,5),ui(`click`,function(){return e.toggleDisabled()}),Zf(12),vi()()()),t&2&&(Ot(`formGroup`,e.form),Tt(2),m7(),Tt(2),m7(),Tt(5),fh(tj(10,3,e.form.getRawValue())),Tt(3),hg(` `,e.form.controls.darkMode.disabled?`Enable`:`Disable`,` dark mode `))},dependencies:[z,f,ms,hs,cs,ds,Br,zr,Rm],encapsulation:2})};var u=class c{static ɵfac=function(t){return new(t||c)};static ɵcmp=ve({type:c,selectors:[[`docs-switch-sizes`]],decls:15,vars:6,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-4`],[`size`,`sm`,3,`value`],[3,`value`],[`size`,`lg`,3,`value`],[`color`,`success`,3,`value`],[`color`,`warning`,3,`value`],[`color`,`danger`,3,`value`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-switch`,2),Zf(3,`Small`),vi(),ce(4,`ngs-switch`,3),Zf(5,`Medium`),vi(),ce(6,`ngs-switch`,4),Zf(7,`Large`),vi()(),ce(8,`div`,1)(9,`ngs-switch`,5),Zf(10,`Success`),vi(),ce(11,`ngs-switch`,6),Zf(12,`Warning`),vi(),ce(13,`ngs-switch`,7),Zf(14,`Danger`),vi()()()),t&2&&(Tt(2),Ot(`value`,!0),Tt(2),Ot(`value`,!0),Tt(2),Ot(`value`,!0),Tt(3),Ot(`value`,!0),Tt(2),Ot(`value`,!0),Tt(2),Ot(`value`,!0))},dependencies:[z],encapsulation:2})};var w=class c{static ɵfac=function(t){return new(t||c)};static ɵcmp=ve({type:c,selectors:[[`docs-switch-states`]],decls:10,vars:1,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-4`],[`disabled`,``],[`disabled`,``,3,`value`],[`invalid`,``]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-switch`,2),Zf(3,`Disabled off`),vi()(),ce(4,`div`,1)(5,`ngs-switch`,3),Zf(6,`Disabled on`),vi()(),ce(7,`div`,1)(8,`ngs-switch`,4),Zf(9,`Invalid`),vi()()()),t&2&&(Tt(5),Ot(`value`,!0))},dependencies:[z],encapsulation:2})};var L={basic:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-switch [(value)]="notifications" hint="Sent by email.">Notifications</ngs-switch>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0">Notifications are {{ notifications() ? 'on' : 'off' }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;notifications&quot;</span> <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;Sent by email.&quot;</span>&gt;</span>Notifications<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Notifications are {{ notifications() ? &#x27;on&#x27; : &#x27;off&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsSwitch } from '@bootlace/core/switch';

@Component({
  selector: 'docs-switch-basic',
  imports: [NgsSwitch],
  templateUrl: './index.html',
})
export class SwitchBasicExample {
  protected readonly notifications = signal<boolean | null>(true);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSwitch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/switch&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-switch-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSwitch</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SwitchBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> notifications = signal&lt;<span class="hljs-built_in">boolean</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">true</span>);
}`}},"reactive-forms":{html:{code:`<form class="row g-3" [formGroup]="form">
  <div class="col-12 md:col-6">
    <ngs-switch formControlName="darkMode">Dark mode</ngs-switch>
    <ngs-switch formControlName="locked">Locked</ngs-switch>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-1">
      <code>{{ form.getRawValue() | json }}</code>
    </p>
    <button ngsButton variant="outline" size="sm" type="button" (click)="toggleDisabled()">
      {{ form.controls.darkMode.disabled ? 'Enable' : 'Disable' }} dark mode
    </button>
  </div>
</form>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;form&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;darkMode&quot;</span>&gt;</span>Dark mode<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;locked&quot;</span>&gt;</span>Locked<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ form.getRawValue() | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;toggleDisabled()&quot;</span>&gt;</span>
      {{ form.controls.darkMode.disabled ? &#x27;Enable&#x27; : &#x27;Disable&#x27; }} dark mode
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>`},ts:{code:`import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgsButton } from '@bootlace/core/button';
import { NgsSwitch } from '@bootlace/core/switch';

@Component({
  selector: 'docs-switch-reactive-forms',
  imports: [NgsSwitch, NgsButton, ReactiveFormsModule, JsonPipe],
  templateUrl: './index.html',
})
export class SwitchReactiveFormsExample {
  protected readonly form = new FormGroup({
    darkMode: new FormControl(false),
    locked: new FormControl({ value: true, disabled: true }),
  });

  protected toggleDisabled(): void {
    const control = this.form.controls.darkMode;
    if (control.disabled) control.enable();
    else control.disable();
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">JsonPipe</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span>, <span class="hljs-title class_">ReactiveFormsModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSwitch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/switch&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-switch-reactive-forms&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSwitch</span>, <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">JsonPipe</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SwitchReactiveFormsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> form = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormGroup</span>({
    <span class="hljs-attr">darkMode</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-literal">false</span>),
    <span class="hljs-attr">locked</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>({ <span class="hljs-attr">value</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }),
  });

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">toggleDisabled</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-keyword">const</span> control = <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">controls</span>.<span class="hljs-property">darkMode</span>;
    <span class="hljs-keyword">if</span> (control.<span class="hljs-property">disabled</span>) control.<span class="hljs-title function_">enable</span>();
    <span class="hljs-keyword">else</span> control.<span class="hljs-title function_">disable</span>();
  }
}`}},sizes:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-4">
    <ngs-switch size="sm" [value]="true">Small</ngs-switch>
    <ngs-switch [value]="true">Medium</ngs-switch>
    <ngs-switch size="lg" [value]="true">Large</ngs-switch>
  </div>
  <div class="col-12 md:col-4">
    <ngs-switch color="success" [value]="true">Success</ngs-switch>
    <ngs-switch color="warning" [value]="true">Warning</ngs-switch>
    <ngs-switch color="danger" [value]="true">Danger</ngs-switch>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Medium<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;warning&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Warning<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;danger&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsSwitch } from '@bootlace/core/switch';

@Component({
  selector: 'docs-switch-sizes',
  imports: [NgsSwitch],
  templateUrl: './index.html',
})
export class SwitchSizesExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSwitch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/switch&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-switch-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSwitch</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SwitchSizesExample</span> {}`}},states:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-4">
    <ngs-switch disabled>Disabled off</ngs-switch>
  </div>
  <div class="col-12 md:col-4">
    <ngs-switch disabled [value]="true">Disabled on</ngs-switch>
  </div>
  <div class="col-12 md:col-4">
    <ngs-switch invalid>Invalid</ngs-switch>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled off<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> <span class="hljs-attr">disabled</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Disabled on<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> <span class="hljs-attr">invalid</span>&gt;</span>Invalid<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsSwitch } from '@bootlace/core/switch';

@Component({
  selector: 'docs-switch-states',
  imports: [NgsSwitch],
  templateUrl: './index.html',
})
export class SwitchStatesExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSwitch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/switch&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-switch-states&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSwitch</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SwitchStatesExample</span> {}`}}};var J=class c{tab=Yn(`examples`);sources=L;basic=m;sizes=u;reactive=j;states=w;static ɵfac=function(t){return new(t||c)};static ɵcmp=ve({type:c,selectors:[[`docs-switch-page`]],inputs:{tab:[1,`tab`]},decls:57,vars:9,consts:[[`heading`,`Switch`,`package`,`@bootlace/core/switch`,`path`,`/components/switch`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes and colors`,3,`component`,`sources`],[`id`,`reactive-forms`,`heading`,`Reactive forms`,3,`component`,`sources`],[`id`,`states`,`heading`,`States`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,e){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` An on/off toggle built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.switch`),vi(),Zf(5,` over a native checkbox with `),ce(6,`code`),Zf(7,`role="switch"`),vi(),Zf(8,`. It binds with `),ce(9,`code`),Zf(10,`[(value)]`),vi(),Zf(11,`, `),ce(12,`code`),Zf(13,`[(ngModel)]`),vi(),Zf(14,` or `),ce(15,`code`),Zf(16,`formControlName`),vi(),Zf(17,`. `),vi(),ce(18,`docs-example`,2),Zf(19,` The projected content is the label; `),ce(20,`code`),Zf(21,`hint`),vi(),Zf(22,` adds a linked description. `),vi(),ce(23,`docs-example`,3)(24,`code`),Zf(25,`sm`),vi(),Zf(26,`, `),ce(27,`code`),Zf(28,`md`),vi(),Zf(29,` (default) and `),ce(30,`code`),Zf(31,`lg`),vi(),Zf(32,`, and the theme colours. `),vi(),ce(33,`docs-example`,4),Zf(34,` Works with `),ce(35,`code`),Zf(36,`formControlName`),vi(),Zf(37,`; disabling the control disables the switch. `),vi(),ce(38,`docs-example`,5),Zf(39,` Disabled and invalid switches. `),vi(),ce(40,`section`,6)(41,`h2`,7),Zf(42,`Accessibility`),vi(),ce(43,`p`),Zf(44,` The control is a native `),ce(45,`code`),Zf(46,`<input type="checkbox" role="switch">`),vi(),Zf(47,`, so assistive technology announces it as a switch that is on or off, and Space toggles it. The label is a `),ce(48,`code`),Zf(49,`<label for>`),vi(),Zf(50,`, so clicking the text toggles it, and `),ce(51,`code`),Zf(52,`hint`),vi(),Zf(53,` is linked with `),ce(54,`code`),Zf(55,`aria-describedby`),vi(),Zf(56,`. Word the label as the setting, not the action ("Notifications", not "Turn on notifications"). Do not use a switch for choices that need a Save button; use a checkbox instead. `),vi()()()),t&2&&(Ot(`tab`,e.tab()),Tt(18),Ot(`component`,e.basic)(`sources`,e.sources.basic),Tt(5),Ot(`component`,e.sizes)(`sources`,e.sources.sizes),Tt(10),Ot(`component`,e.reactive)(`sources`,e.sources[`reactive-forms`]),Tt(5),Ot(`component`,e.states)(`sources`,e.sources.states))},dependencies:[ue,pe],encapsulation:2})};export{J as SwitchPage};