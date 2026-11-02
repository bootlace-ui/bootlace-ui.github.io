import{An as hg,At as W,Br as ui,Cr as rf,Gr as vf,Gt as Yn,Jt as Zf,L as KC,Pt as XC,Rn as jo,Sn as fh,Tn as gf,Vt as Y3,Wr as ve,Zn as m7,_r as q3,bn as f7,ei as xh,et as Ot,ir as nf,on as ce,q as Mh,qr as vi,r as $f,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{I as rt,M as ms,N as pn,T as ds,k as hs,m as Ot$1,r as Br,w as cs,z as zr}from"./chunk-DycqepRM.js";import"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";import{t as M}from"./chunk-yZF3fHTz.js";import{t as f$1}from"./chunk-_QnoVoFv.js";var j=class c{accepted=W(!1);static ɵfac=function(t){return new(t||c)};static ɵcmp=ve({type:c,selectors:[[`docs-checkbox-basic`]],decls:7,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`hint`,`You can change this later.`,3,`valueChange`,`value`],[1,`mb-0`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-checkbox`,2),xh(`valueChange`,function(h){return $f(e.accepted,h)||(e.accepted=h),h}),Zf(3,` Accept the terms `),vi()(),ce(4,`div`,1)(5,`p`,3),Zf(6),vi()()()),t&2&&(Tt(2),Mh(`value`,e.accepted),Tt(4),hg(`Accepted: `,e.accepted()?`yes`:`no`))},dependencies:[M],encapsulation:2})};function ss(c,p){if(c&1){let t=gf();ce(0,`div`,3)(1,`ngs-checkbox`,4),ui(`valueChange`,function(g){let h=q3(t).$implicit,Z=vf();return Y3(Z.toggle(h,!!g))}),Zf(2),vi()()}if(c&2){let t=p.$implicit,e=vf();Tt(),Ot(`value`,e.selected().has(t)),Tt(),hg(` `,t,` `)}}var v=class c{items=[`Email`,`SMS`,`Push`];selected=W(/* @__PURE__ */ new Set([`Email`]));all=jo(()=>this.selected().size===this.items.length);some=jo(()=>this.selected().size>0&&!this.all());toggle(p,t){let e=new Set(this.selected());t?e.add(p):e.delete(p),this.selected.set(e)}toggleAll(p){this.selected.set(new Set(p?this.items:[]))}static ɵfac=function(t){return new(t||c)};static ɵcmp=ve({type:c,selectors:[[`docs-checkbox-indeterminate`]],decls:6,vars:2,consts:[[1,`row`,`g-2`],[1,`col-12`],[3,`valueChange`,`value`,`indeterminate`],[1,`col-12`,`ps-4`],[3,`valueChange`,`value`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-checkbox`,2),ui(`valueChange`,function(h){return e.toggleAll(h)}),Zf(3,` Select all `),vi()(),of(4,ss,3,2,`div`,3,nf),vi()),t&2&&(Tt(2),Ot(`value`,e.all())(`indeterminate`,e.some()),Tt(2),rf(e.items))},dependencies:[M],encapsulation:2})};function as(c,p){c&1&&(ce(0,`div`,3),Zf(1,`You must accept to continue.`),vi())}var k=class c{form=new rt({terms:new pn(!1,Ot$1.requiredTrue),news:new pn(!0)});result=W(``);submit(){this.form.markAllAsTouched(),this.result.set(this.form.valid?JSON.stringify(this.form.value):``)}static ɵfac=function(t){return new(t||c)};static ɵcmp=ve({type:c,selectors:[[`docs-checkbox-reactive-forms`]],decls:14,vars:3,consts:[[1,`row`,`g-3`,3,`ngSubmit`,`formGroup`],[1,`col-12`],[`formControlName`,`terms`],[1,`text-danger`,`small`],[`formControlName`,`news`],[1,`col-auto`],[`ngsButton`,``,`type`,`submit`],[1,`col-auto`,`align-self-center`]],template:function(t,e){t&1&&(ce(0,`form`,0),ui(`ngSubmit`,function(){return e.submit()}),ce(1,`div`,1)(2,`ngs-checkbox`,2),f7(),Zf(3,`I agree to the terms`),vi(),KC(4,as,2,0,`div`,3),vi(),ce(5,`div`,1)(6,`ngs-checkbox`,4),f7(),Zf(7,`Send me the newsletter`),vi()(),ce(8,`div`,5)(9,`button`,6),Zf(10,`Submit`),vi()(),ce(11,`div`,7)(12,`code`),Zf(13),vi()()()),t&2&&(Ot(`formGroup`,e.form),Tt(2),m7(),Tt(2),XC(e.form.controls.terms.invalid&&e.form.controls.terms.touched?4:-1),Tt(2),m7(),Tt(7),fh(e.result()))},dependencies:[M,f$1,ms,hs,cs,ds,Br,zr],encapsulation:2})};var f=class c{static ɵfac=function(t){return new(t||c)};static ɵcmp=ve({type:c,selectors:[[`docs-checkbox-states`]],decls:22,vars:7,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-4`],[`size`,`sm`,3,`value`],[3,`value`],[`size`,`lg`,3,`value`],[`color`,`success`,3,`value`],[`color`,`danger`,3,`value`],[`invalid`,``],[`disabled`,``],[`disabled`,``,3,`value`],[3,`indeterminate`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-checkbox`,2),Zf(3,`Small`),vi(),ce(4,`ngs-checkbox`,3),Zf(5,`Medium`),vi(),ce(6,`ngs-checkbox`,4),Zf(7,`Large`),vi()(),ce(8,`div`,1)(9,`ngs-checkbox`,5),Zf(10,`Success`),vi(),ce(11,`ngs-checkbox`,6),Zf(12,`Danger`),vi(),ce(13,`ngs-checkbox`,7),Zf(14,`Invalid`),vi()(),ce(15,`div`,1)(16,`ngs-checkbox`,8),Zf(17,`Disabled`),vi(),ce(18,`ngs-checkbox`,9),Zf(19,`Disabled checked`),vi(),ce(20,`ngs-checkbox`,10),Zf(21,`Indeterminate`),vi()()()),t&2&&(Tt(2),Ot(`value`,!0),Tt(2),Ot(`value`,!0),Tt(2),Ot(`value`,!0),Tt(3),Ot(`value`,!0),Tt(2),Ot(`value`,!0),Tt(7),Ot(`value`,!0),Tt(2),Ot(`indeterminate`,!0))},dependencies:[M],encapsulation:2})};var Q={basic:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-checkbox [(value)]="accepted" hint="You can change this later.">
      Accept the terms
    </ngs-checkbox>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0">Accepted: {{ accepted() ? 'yes' : 'no' }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;accepted&quot;</span> <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;You can change this later.&quot;</span>&gt;</span>
      Accept the terms
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Accepted: {{ accepted() ? &#x27;yes&#x27; : &#x27;no&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsCheckbox } from '@bootlace/core/checkbox';

@Component({
  selector: 'docs-checkbox-basic',
  imports: [NgsCheckbox],
  templateUrl: './index.html',
})
export class CheckboxBasicExample {
  protected readonly accepted = signal<boolean | null>(false);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCheckbox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/checkbox&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-checkbox-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCheckbox</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CheckboxBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> accepted = signal&lt;<span class="hljs-built_in">boolean</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">false</span>);
}`}},indeterminate:{html:{code:`<div class="row g-2">
  <div class="col-12">
    <ngs-checkbox [value]="all()" [indeterminate]="some()" (valueChange)="toggleAll($event)">
      Select all
    </ngs-checkbox>
  </div>
  @for (item of items; track item) {
    <div class="col-12 ps-4">
      <ngs-checkbox [value]="selected().has(item)" (valueChange)="toggle(item, !!$event)">
        {{ item }}
      </ngs-checkbox>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;all()&quot;</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">&quot;some()&quot;</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">&quot;toggleAll($event)&quot;</span>&gt;</span>
      Select all
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  @for (item of items; track item) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 ps-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;selected().has(item)&quot;</span> (<span class="hljs-attr">valueChange</span>)=<span class="hljs-string">&quot;toggle(item, !!$event)&quot;</span>&gt;</span>
        {{ item }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, computed, signal } from '@angular/core';
import { NgsCheckbox } from '@bootlace/core/checkbox';

@Component({
  selector: 'docs-checkbox-indeterminate',
  imports: [NgsCheckbox],
  templateUrl: './index.html',
})
export class CheckboxIndeterminateExample {
  protected readonly items = ['Email', 'SMS', 'Push'];
  protected readonly selected = signal(new Set(['Email']));
  protected readonly all = computed(() => this.selected().size === this.items.length);
  protected readonly some = computed(() => this.selected().size > 0 && !this.all());

  protected toggle(item: string, on: boolean): void {
    const next = new Set(this.selected());
    if (on) next.add(item);
    else next.delete(item);
    this.selected.set(next);
  }

  protected toggleAll(on: boolean | null): void {
    this.selected.set(new Set(on ? this.items : []));
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, computed, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCheckbox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/checkbox&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-checkbox-indeterminate&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCheckbox</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CheckboxIndeterminateExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> items = [<span class="hljs-string">&#x27;Email&#x27;</span>, <span class="hljs-string">&#x27;SMS&#x27;</span>, <span class="hljs-string">&#x27;Push&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> selected = <span class="hljs-title function_">signal</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>([<span class="hljs-string">&#x27;Email&#x27;</span>]));
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> all = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">selected</span>().<span class="hljs-property">size</span> === <span class="hljs-variable language_">this</span>.<span class="hljs-property">items</span>.<span class="hljs-property">length</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> some = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">selected</span>().<span class="hljs-property">size</span> &gt; <span class="hljs-number">0</span> &amp;&amp; !<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">all</span>());

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">toggle</span>(<span class="hljs-attr">item</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">on</span>: <span class="hljs-built_in">boolean</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-keyword">const</span> next = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">selected</span>());
    <span class="hljs-keyword">if</span> (on) next.<span class="hljs-title function_">add</span>(item);
    <span class="hljs-keyword">else</span> next.<span class="hljs-title function_">delete</span>(item);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">selected</span>.<span class="hljs-title function_">set</span>(next);
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">toggleAll</span>(<span class="hljs-attr">on</span>: <span class="hljs-built_in">boolean</span> | <span class="hljs-literal">null</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">selected</span>.<span class="hljs-title function_">set</span>(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>(on ? <span class="hljs-variable language_">this</span>.<span class="hljs-property">items</span> : []));
  }
}`}},"reactive-forms":{html:{code:`<form class="row g-3" [formGroup]="form" (ngSubmit)="submit()">
  <div class="col-12">
    <ngs-checkbox formControlName="terms">I agree to the terms</ngs-checkbox>
    @if (form.controls.terms.invalid && form.controls.terms.touched) {
      <div class="text-danger small">You must accept to continue.</div>
    }
  </div>
  <div class="col-12">
    <ngs-checkbox formControlName="news">Send me the newsletter</ngs-checkbox>
  </div>
  <div class="col-auto">
    <button ngsButton type="submit">Submit</button>
  </div>
  <div class="col-auto align-self-center">
    <code>{{ result() }}</code>
  </div>
</form>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;form&quot;</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">&quot;submit()&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;terms&quot;</span>&gt;</span>I agree to the terms<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
    @if (form.controls.terms.invalid &amp;&amp; form.controls.terms.touched) {
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-danger small&quot;</span>&gt;</span>You must accept to continue.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;news&quot;</span>&gt;</span>Send me the newsletter<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto align-self-center&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ result() }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgsButton } from '@bootlace/core/button';
import { NgsCheckbox } from '@bootlace/core/checkbox';

@Component({
  selector: 'docs-checkbox-reactive-forms',
  imports: [NgsCheckbox, NgsButton, ReactiveFormsModule],
  templateUrl: './index.html',
})
export class CheckboxReactiveFormsExample {
  protected readonly form = new FormGroup({
    terms: new FormControl(false, Validators.requiredTrue),
    news: new FormControl(true),
  });
  protected readonly result = signal('');

  protected submit(): void {
    // Touched and invalid controls show their error state on their own.
    this.form.markAllAsTouched();
    this.result.set(this.form.valid ? JSON.stringify(this.form.value) : '');
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">Validators</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCheckbox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/checkbox&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-checkbox-reactive-forms&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCheckbox</span>, <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">ReactiveFormsModule</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CheckboxReactiveFormsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> form = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormGroup</span>({
    <span class="hljs-attr">terms</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-literal">false</span>, <span class="hljs-title class_">Validators</span>.<span class="hljs-property">requiredTrue</span>),
    <span class="hljs-attr">news</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-literal">true</span>),
  });
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> result = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;&#x27;</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">submit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-comment">// Touched and invalid controls show their error state on their own.</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-title function_">markAllAsTouched</span>();
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">result</span>.<span class="hljs-title function_">set</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">valid</span> ? <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">value</span>) : <span class="hljs-string">&#x27;&#x27;</span>);
  }
}`}},states:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-4">
    <ngs-checkbox size="sm" [value]="true">Small</ngs-checkbox>
    <ngs-checkbox [value]="true">Medium</ngs-checkbox>
    <ngs-checkbox size="lg" [value]="true">Large</ngs-checkbox>
  </div>
  <div class="col-12 md:col-4">
    <ngs-checkbox color="success" [value]="true">Success</ngs-checkbox>
    <ngs-checkbox color="danger" [value]="true">Danger</ngs-checkbox>
    <ngs-checkbox invalid>Invalid</ngs-checkbox>
  </div>
  <div class="col-12 md:col-4">
    <ngs-checkbox disabled>Disabled</ngs-checkbox>
    <ngs-checkbox disabled [value]="true">Disabled checked</ngs-checkbox>
    <ngs-checkbox [indeterminate]="true">Indeterminate</ngs-checkbox>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Medium<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Success<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;danger&quot;</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Danger<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> <span class="hljs-attr">invalid</span>&gt;</span>Invalid<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> <span class="hljs-attr">disabled</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Disabled checked<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-checkbox</span> [<span class="hljs-attr">indeterminate</span>]=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>Indeterminate<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsCheckbox } from '@bootlace/core/checkbox';

@Component({
  selector: 'docs-checkbox-states',
  imports: [NgsCheckbox],
  templateUrl: './index.html',
})
export class CheckboxStatesExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCheckbox</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/checkbox&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-checkbox-states&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCheckbox</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CheckboxStatesExample</span> {}`}}};var X=class c{tab=Yn(`examples`);sources=Q;basic=j;indeterminate=v;reactive=k;states=f;static ɵfac=function(t){return new(t||c)};static ɵcmp=ve({type:c,selectors:[[`docs-checkbox-page`]],inputs:{tab:[1,`tab`]},decls:66,vars:9,consts:[[`heading`,`Checkbox`,`package`,`@bootlace/core/checkbox`,`path`,`/form/checkbox`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`indeterminate`,`heading`,`Indeterminate`,3,`component`,`sources`],[`id`,`reactive-forms`,`heading`,`Reactive forms`,3,`component`,`sources`],[`id`,`states`,`heading`,`Sizes, colors and states`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,e){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A checkbox built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.check`),vi(),Zf(5,` over a native `),ce(6,`code`),Zf(7,`<input type="checkbox">`),vi(),Zf(8,`. It binds with `),ce(9,`code`),Zf(10,`[(value)]`),vi(),Zf(11,`, `),ce(12,`code`),Zf(13,`[(ngModel)]`),vi(),Zf(14,` or `),ce(15,`code`),Zf(16,`formControlName`),vi(),Zf(17,`, and supports an indeterminate state. `),vi(),ce(18,`docs-example`,2),Zf(19,` The projected content is the label. `),ce(20,`code`),Zf(21,`hint`),vi(),Zf(22,` adds a description linked with `),ce(23,`code`),Zf(24,`aria-describedby`),vi(),Zf(25,`. `),vi(),ce(26,`docs-example`,3),Zf(27,` A parent checkbox shows a dash when only some children are selected. A user toggle clears the state. `),vi(),ce(28,`docs-example`,4),Zf(29,` Works with `),ce(30,`code`),Zf(31,`formControlName`),vi(),Zf(32,` and validators such as `),ce(33,`code`),Zf(34,`Validators.requiredTrue`),vi(),Zf(35,`. The checkbox shows its error state once its control is invalid and touched; `),ce(36,`code`),Zf(37,`[invalid]`),vi(),Zf(38,` forces it on or off, e.g. for a server error. `),vi(),ce(39,`docs-example`,5)(40,`code`),Zf(41,`sm`),vi(),Zf(42,`, `),ce(43,`code`),Zf(44,`md`),vi(),Zf(45,` and `),ce(46,`code`),Zf(47,`lg`),vi(),Zf(48,` sizes, theme colours, and disabled, invalid and indeterminate states. `),vi(),ce(49,`section`,6)(50,`h2`,7),Zf(51,`Accessibility`),vi(),ce(52,`p`),Zf(53,` The control is a native checkbox, so Space toggles it and it is announced as checked, unchecked or mixed (when indeterminate). The projected label is a `),ce(54,`code`),Zf(55,`<label for>`),vi(),Zf(56,` tied to the input with an SSR-safe id, so clicking the text toggles it. `),ce(57,`code`),Zf(58,`hint`),vi(),Zf(59,` text is linked with `),ce(60,`code`),Zf(61,`aria-describedby`),vi(),Zf(62,`. An invalid control sets `),ce(63,`code`),Zf(64,`aria-invalid`),vi(),Zf(65,`; also explain the error in text, as colour alone is not enough. Disabled controls leave the tab order. `),vi()()()),t&2&&(Ot(`tab`,e.tab()),Tt(18),Ot(`component`,e.basic)(`sources`,e.sources.basic),Tt(8),Ot(`component`,e.indeterminate)(`sources`,e.sources.indeterminate),Tt(2),Ot(`component`,e.reactive)(`sources`,e.sources[`reactive-forms`]),Tt(11),Ot(`component`,e.states)(`sources`,e.sources.states))},dependencies:[ue,pe],encapsulation:2})};export{X as CheckboxPage};