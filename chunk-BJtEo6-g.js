import{$t as ag,An as hg,B as Kf,Br as ui,Cr as rf,Et as Va,G as Lr,Gr as vf,Gt as Yn,Hn as kf,Jt as Zf,L as KC,Nt as X0,Or as sc,P as Jf,Pt as XC,Rr as ue,Sn as fh,T as Hu,Wr as ve,Zn as m7,bn as f7,et as Ot,ir as nf,kn as hf,mn as dh,on as ce,qr as vi,sn as cg,tt as P0,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{D as gn,E as fs,I as rt,M as ms$1,N as pn,P as ps,T as ds$1,b as Xi,k as hs$1,m as Ot$1,r as Br,w as cs$1,z as zr}from"./chunk-DycqepRM.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";import{n as m,t as I}from"./chunk-BPk3HYY3.js";import{t as u}from"./chunk-CT3GIJZF.js";var ms=[`*`];function gs(t,o){if(t&1&&(cg(0,`label`),Zf(1),ag()),t&2){let l=vf();dh(`ngs-float-label`,l.appearance()!=="default"),Lr(`for`,l.labelFor()),Tt(),hg(` `,l.label(),` `)}}function hs(t,o){if(t&1&&(cg(0,`span`,7),Zf(1),ag()),t&2){let l=vf(2);Tt(),fh(l.label())}}function ds(t,o){if(t&1&&(cg(0,`span`,2),X0(1,`span`,5),cg(2,`span`,6),KC(3,hs,2,1,`span`,7),ag(),X0(4,`span`,8),ag()),t&2){let l=vf();Tt(3),XC(l.label()?3:-1)}}function us(t,o){if(t&1&&(cg(0,`div`,3),Zf(1),ag()),t&2){let l=vf();Va(`id`,l.hintId),Tt(),fh(l.hint())}}function js(t,o){if(t&1&&(cg(0,`div`,4),Zf(1),ag()),t&2){let l=vf();Va(`id`,l.errorId),Tt(),fh(l.error())}}var c=class t extends u{placeholder=` `;appearance=Yn(`default`);static ɵfac=(()=>{let o;return function(p){return(o||(o=Hu(t)))(p||t)}})();static ɵcmp=ve({type:t,selectors:[[`ngs-floating-label`]],hostAttrs:[1,`form-field`],inputs:{appearance:[1,`appearance`]},features:[Kf([{provide:I,useExisting:sc(()=>t)}]),P0],ngContentSelectors:ms,decls:7,vars:12,consts:[[1,`input-group`],[3,`ngs-float-label`],[`aria-hidden`,`true`,1,`ngs-float-border`],[1,`form-text`,3,`id`],[1,`invalid-feedback`,3,`id`],[1,`ngs-float-border-start`],[1,`ngs-float-notch`],[1,`ngs-float-notch-text`],[1,`ngs-float-border-end`]],template:function(l,p){l&1&&(kf(),cg(0,`div`,0)(1,`div`),KC(2,gs,2,4,`label`,1),hf(3),KC(4,ds,5,1,`span`,2),ag()(),KC(5,us,2,2,`div`,3),KC(6,js,2,2,`div`,4)),l&2&&(Tt(),dh(`form-floating`,p.appearance()==="default")(`ngs-float`,p.appearance()!=="default")(`ngs-float-outline`,p.appearance()===`outline`)(`ngs-float-fill`,p.appearance()===`fill`),Tt(),XC(p.label()?2:-1),Tt(2),XC(p.appearance()===`outline`?4:-1),Tt(),XC(p.hint()?5:-1),Tt(),XC(p.showError()?6:-1))},encapsulation:2})};function bs(t,o){if(t&1&&(ce(0,`div`,1)(1,`h3`,2),Zf(2),vi(),ce(3,`div`,3)(4,`div`,4)(5,`ngs-floating-label`,5)(6,`input`,6),f7(),vi()()(),ce(7,`div`,4)(8,`ngs-floating-label`,7)(9,`input`,8),f7(),vi()()(),ce(10,`div`,4)(11,`ngs-floating-label`,9)(12,`select`,10),f7(),ce(13,`option`),Zf(14,`Zambia`),vi(),ce(15,`option`),Zf(16,`Kenya`),vi(),ce(17,`option`),Zf(18,`Norway`),vi()()()(),ce(19,`div`,4)(20,`ngs-floating-label`,11)(21,`textarea`,12),f7(),vi()()(),ce(22,`div`,4)(23,`ngs-floating-label`,13)(24,`input`,14),f7(),vi()()()()()),t&2){let l=o.$implicit;Tt(2),fh(l),Tt(3),Ot(`appearance`,l),Tt(),m7(),Tt(2),Ot(`appearance`,l),Tt(),m7(),Tt(2),Ot(`appearance`,l),Tt(),m7(),Tt(8),Ot(`appearance`,l),Tt(),m7(),Tt(2),Ot(`appearance`,l),Tt(),m7()}}var T=class t{appearances=[`outline`,`fill`];form=new rt({name:new pn(``,{nonNullable:!0}),email:new pn(`ada@`,{nonNullable:!0,validators:[Ot$1.required,Ot$1.email]}),country:new pn(`Zambia`,{nonNullable:!0}),notes:new pn(``,{nonNullable:!0}),team:new pn({value:`Analytical Engines`,disabled:!0},{nonNullable:!0})});constructor(){this.form.controls.email.markAsTouched()}static ɵfac=function(l){return new(l||t)};static ɵcmp=ve({type:t,selectors:[[`docs-floating-label-appearance`]],decls:3,vars:1,consts:[[1,`row`,`g-4`,3,`formGroup`],[1,`col-12`,`md:col-6`],[1,`h6`],[1,`row`,`g-3`],[1,`col-12`],[`label`,`Name`,3,`appearance`],[`ngsInput`,``,`formControlName`,`name`,`autocomplete`,`name`],[`label`,`Email`,`hint`,`We never share it.`,`error`,`Enter a valid email.`,3,`appearance`],[`ngsInput`,``,`type`,`email`,`formControlName`,`email`,`autocomplete`,`email`],[`label`,`Country`,3,`appearance`],[`ngsInput`,``,`formControlName`,`country`],[`label`,`Notes`,3,`appearance`],[`ngsInput`,``,`rows`,`3`,`formControlName`,`notes`],[`label`,`Team`,3,`appearance`],[`ngsInput`,``,`formControlName`,`team`]],template:function(l,p){l&1&&(ce(0,`form`,0),of(1,bs,25,6,`div`,1,nf),vi()),l&2&&(Ot(`formGroup`,p.form),Tt(),rf(p.appearances))},dependencies:[c,m,ms$1,hs$1,ps,fs,Xi,gn,cs$1,ds$1,Br,zr],encapsulation:2})};var A=class t{static ɵfac=function(l){return new(l||t)};static ɵcmp=ve({type:t,selectors:[[`docs-floating-label-basic`]],decls:7,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`label`,`Email address`,`hint`,`The label floats once you type.`],[`ngsInput`,``,`type`,`email`,`autocomplete`,`email`],[`label`,`Password`],[`ngsInput`,``,`type`,`password`,`autocomplete`,`current-password`]],template:function(l,p){l&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-floating-label`,2),ue(3,`input`,3),vi()(),ce(4,`div`,1)(5,`ngs-floating-label`,4),ue(6,`input`,5),vi()()())},dependencies:[c,m],encapsulation:2})};var P=class t{static ɵfac=function(l){return new(l||t)};static ɵcmp=ve({type:t,selectors:[[`docs-floating-label-controls`]],decls:13,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`label`,`Comments`],[`ngsInput`,``,`rows`,`4`],[`label`,`Country`],[`ngsInput`,``]],template:function(l,p){l&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-floating-label`,2),ue(3,`textarea`,3),vi()(),ce(4,`div`,1)(5,`ngs-floating-label`,4)(6,`select`,5)(7,`option`),Zf(8,`Zambia`),vi(),ce(9,`option`),Zf(10,`Kenya`),vi(),ce(11,`option`),Zf(12,`Norway`),vi()()()()())},dependencies:[c,m],encapsulation:2})};var M=class t{static ɵfac=function(l){return new(l||t)};static ɵcmp=ve({type:t,selectors:[[`docs-floating-label-placeholder`]],decls:7,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`label`,`Default placeholder`],[`ngsInput`,``],[`label`,`Your placeholder`],[`ngsInput`,``,`placeholder`,`name@example.com`]],template:function(l,p){l&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-floating-label`,2),ue(3,`input`,3),vi()(),ce(4,`div`,1)(5,`ngs-floating-label`,4),ue(6,`input`,5),vi()()())},dependencies:[c,m],encapsulation:2})};var V=class t{form=new rt({name:new pn(``,{nonNullable:!0,validators:[Ot$1.required]})});static ɵfac=function(l){return new(l||t)};static ɵcmp=ve({type:t,selectors:[[`docs-floating-label-validation`]],decls:7,vars:1,consts:[[`novalidate`,``,1,`row`,`g-3`,3,`ngSubmit`,`formGroup`],[1,`col-12`,`md:col-6`],[`label`,`Name`,`error`,`Name is required.`],[`ngsInput`,``,`formControlName`,`name`,`autocomplete`,`name`],[`ngsButton`,``,`type`,`submit`]],template:function(l,p){l&1&&(ce(0,`form`,0),ui(`ngSubmit`,function(){return p.form.markAllAsTouched()}),ce(1,`div`,1)(2,`ngs-floating-label`,2)(3,`input`,3),f7(),vi()()(),ce(4,`div`,1)(5,`button`,4),Zf(6,`Save`),vi()()()),l&2&&(Ot(`formGroup`,p.form),Tt(3),m7())},dependencies:[f,c,m,ms$1,hs$1,Xi,cs$1,ds$1,Br,zr],encapsulation:2})};var is={appearance:{html:{code:`<form class="row g-4" [formGroup]="form">
  @for (appearance of appearances; track appearance) {
    <div class="col-12 md:col-6">
      <h3 class="h6">{{ appearance }}</h3>
      <div class="row g-3">
        <div class="col-12">
          <ngs-floating-label label="Name" [appearance]="appearance">
            <input ngsInput formControlName="name" autocomplete="name" />
          </ngs-floating-label>
        </div>
        <div class="col-12">
          <ngs-floating-label
            label="Email"
            hint="We never share it."
            error="Enter a valid email."
            [appearance]="appearance"
          >
            <input ngsInput type="email" formControlName="email" autocomplete="email" />
          </ngs-floating-label>
        </div>
        <div class="col-12">
          <ngs-floating-label label="Country" [appearance]="appearance">
            <select ngsInput formControlName="country">
              <option>Zambia</option>
              <option>Kenya</option>
              <option>Norway</option>
            </select>
          </ngs-floating-label>
        </div>
        <div class="col-12">
          <ngs-floating-label label="Notes" [appearance]="appearance">
            <textarea ngsInput rows="3" formControlName="notes"></textarea>
          </ngs-floating-label>
        </div>
        <div class="col-12">
          <ngs-floating-label label="Team" [appearance]="appearance">
            <input ngsInput formControlName="team" />
          </ngs-floating-label>
        </div>
      </div>
    </div>
  }
</form>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-4&quot;</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;form&quot;</span>&gt;</span>
  @for (appearance of appearances; track appearance) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h6&quot;</span>&gt;</span>{{ appearance }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Name&quot;</span> [<span class="hljs-attr">appearance</span>]=<span class="hljs-string">&quot;appearance&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span>
            <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Email&quot;</span>
            <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;We never share it.&quot;</span>
            <span class="hljs-attr">error</span>=<span class="hljs-string">&quot;Enter a valid email.&quot;</span>
            [<span class="hljs-attr">appearance</span>]=<span class="hljs-string">&quot;appearance&quot;</span>
          &gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;email&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;email&quot;</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;email&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Country&quot;</span> [<span class="hljs-attr">appearance</span>]=<span class="hljs-string">&quot;appearance&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;country&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>Zambia<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>Kenya<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>Norway<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Notes&quot;</span> [<span class="hljs-attr">appearance</span>]=<span class="hljs-string">&quot;appearance&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;notes&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Team&quot;</span> [<span class="hljs-attr">appearance</span>]=<span class="hljs-string">&quot;appearance&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;team&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgsFloatingLabel, NgsFloatingLabelAppearance } from '@bootlace/core/floating-label';
import { NgsInput } from '@bootlace/core/input';

@Component({
  selector: 'docs-floating-label-appearance',
  imports: [NgsFloatingLabel, NgsInput, ReactiveFormsModule],
  templateUrl: './index.html',
})
export class FloatingLabelAppearanceExample {
  protected readonly appearances: NgsFloatingLabelAppearance[] = ['outline', 'fill'];
  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('ada@', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    country: new FormControl('Zambia', { nonNullable: true }),
    notes: new FormControl('', { nonNullable: true }),
    team: new FormControl({ value: 'Analytical Engines', disabled: true }, { nonNullable: true }),
  });

  constructor() {
    // Show the invalid email's state from the start.
    this.form.controls.email.markAsTouched();
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">Validators</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFloatingLabel</span>, <span class="hljs-title class_">NgsFloatingLabelAppearance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/floating-label&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-floating-label-appearance&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFloatingLabel</span>, <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">ReactiveFormsModule</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FloatingLabelAppearanceExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">appearances</span>: <span class="hljs-title class_">NgsFloatingLabelAppearance</span>[] = [<span class="hljs-string">&#x27;outline&#x27;</span>, <span class="hljs-string">&#x27;fill&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> form = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormGroup</span>({
    <span class="hljs-attr">name</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;&#x27;</span>, { <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span> }),
    <span class="hljs-attr">email</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;ada@&#x27;</span>, {
      <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">validators</span>: [<span class="hljs-title class_">Validators</span>.<span class="hljs-property">required</span>, <span class="hljs-title class_">Validators</span>.<span class="hljs-property">email</span>],
    }),
    <span class="hljs-attr">country</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;Zambia&#x27;</span>, { <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span> }),
    <span class="hljs-attr">notes</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;&#x27;</span>, { <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span> }),
    <span class="hljs-attr">team</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>({ <span class="hljs-attr">value</span>: <span class="hljs-string">&#x27;Analytical Engines&#x27;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> }, { <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span> }),
  });

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// Show the invalid email&#x27;s state from the start.</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">controls</span>.<span class="hljs-property">email</span>.<span class="hljs-title function_">markAsTouched</span>();
  }
}`}},basic:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-floating-label label="Email address" hint="The label floats once you type.">
      <input ngsInput type="email" autocomplete="email" />
    </ngs-floating-label>
  </div>
  <div class="col-12 md:col-6">
    <ngs-floating-label label="Password">
      <input ngsInput type="password" autocomplete="current-password" />
    </ngs-floating-label>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Email address&quot;</span> <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;The label floats once you type.&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;email&quot;</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;email&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Password&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;current-password&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsFloatingLabel } from '@bootlace/core/floating-label';
import { NgsInput } from '@bootlace/core/input';

@Component({
  selector: 'docs-floating-label-basic',
  imports: [NgsFloatingLabel, NgsInput],
  templateUrl: './index.html',
})
export class FloatingLabelBasicExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFloatingLabel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/floating-label&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-floating-label-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFloatingLabel</span>, <span class="hljs-title class_">NgsInput</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FloatingLabelBasicExample</span> {}`}},controls:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-floating-label label="Comments">
      <textarea ngsInput rows="4"></textarea>
    </ngs-floating-label>
  </div>
  <div class="col-12 md:col-6">
    <ngs-floating-label label="Country">
      <select ngsInput>
        <option>Zambia</option>
        <option>Kenya</option>
        <option>Norway</option>
      </select>
    </ngs-floating-label>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Comments&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Country&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">ngsInput</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>Zambia<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>Kenya<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>Norway<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsFloatingLabel } from '@bootlace/core/floating-label';
import { NgsInput } from '@bootlace/core/input';

@Component({
  selector: 'docs-floating-label-controls',
  imports: [NgsFloatingLabel, NgsInput],
  templateUrl: './index.html',
})
export class FloatingLabelControlsExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFloatingLabel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/floating-label&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-floating-label-controls&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFloatingLabel</span>, <span class="hljs-title class_">NgsInput</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FloatingLabelControlsExample</span> {}`}},placeholder:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-floating-label label="Default placeholder">
      <input ngsInput />
    </ngs-floating-label>
  </div>
  <div class="col-12 md:col-6">
    <ngs-floating-label label="Your placeholder">
      <input ngsInput placeholder="name@example.com" />
    </ngs-floating-label>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Default placeholder&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Your placeholder&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;name@example.com&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsFloatingLabel } from '@bootlace/core/floating-label';
import { NgsInput } from '@bootlace/core/input';

@Component({
  selector: 'docs-floating-label-placeholder',
  imports: [NgsFloatingLabel, NgsInput],
  templateUrl: './index.html',
})
export class FloatingLabelPlaceholderExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFloatingLabel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/floating-label&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-floating-label-placeholder&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFloatingLabel</span>, <span class="hljs-title class_">NgsInput</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FloatingLabelPlaceholderExample</span> {}`}},validation:{html:{code:`<form class="row g-3" [formGroup]="form" (ngSubmit)="form.markAllAsTouched()" novalidate>
  <div class="col-12 md:col-6">
    <ngs-floating-label label="Name" error="Name is required.">
      <input ngsInput formControlName="name" autocomplete="name" />
    </ngs-floating-label>
  </div>
  <div class="col-12 md:col-6">
    <button ngsButton type="submit">Save</button>
  </div>
</form>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;form&quot;</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">&quot;form.markAllAsTouched()&quot;</span> <span class="hljs-attr">novalidate</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-floating-label</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Name&quot;</span> <span class="hljs-attr">error</span>=<span class="hljs-string">&quot;Name is required.&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;name&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-floating-label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgsButton } from '@bootlace/core/button';
import { NgsFloatingLabel } from '@bootlace/core/floating-label';
import { NgsInput } from '@bootlace/core/input';

@Component({
  selector: 'docs-floating-label-validation',
  imports: [NgsButton, NgsFloatingLabel, NgsInput, ReactiveFormsModule],
  templateUrl: './index.html',
})
export class FloatingLabelValidationExample {
  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">Validators</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFloatingLabel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/floating-label&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-floating-label-validation&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsFloatingLabel</span>, <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">ReactiveFormsModule</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FloatingLabelValidationExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> form = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormGroup</span>({
    <span class="hljs-attr">name</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;&#x27;</span>, { <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">validators</span>: [<span class="hljs-title class_">Validators</span>.<span class="hljs-property">required</span>] }),
  });
}`}}};var xs=()=>[`@bootlace/core/input`];var cs=class t{tab=Yn(`examples`);appearance=T;sources=is;basic=A;controls=P;placeholder=M;validation=V;static ɵfac=function(l){return new(l||t)};static ɵcmp=ve({type:t,selectors:[[`docs-floating-labels-page`]],inputs:{tab:[1,`tab`]},decls:79,vars:13,consts:[[`heading`,`Floating labels`,`package`,`@bootlace/core/floating-label`,`path`,`/form/floating-labels`,3,`tab`,`extraPackages`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`appearance`,`heading`,`Material appearance`,3,`component`,`sources`],[`id`,`controls`,`heading`,`Textarea and select`,3,`component`,`sources`],[`id`,`placeholder`,`heading`,`Placeholder`,3,`component`,`sources`],[`id`,`validation`,`heading`,`Validation`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(l,p){l&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A label that sits inside the control and floats up on focus or when it has a value, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.form-floating`),vi(),Zf(5,`. Wrap an `),ce(6,`code`),Zf(7,`ngsInput`),vi(),Zf(8,` in `),ce(9,`code`),Zf(10,`<ngs-floating-label>`),vi(),Zf(11,`. `),vi(),ce(12,`docs-example`,2),Zf(13,` Works with every text type of `),ce(14,`code`),Zf(15,`<input>`),vi(),Zf(16,`. `),vi(),ce(17,`docs-example`,3)(18,`code`),Zf(19,`appearance="outline"`),vi(),Zf(20,` and `),ce(21,`code`),Zf(22,`appearance="fill"`),vi(),Zf(23,` follow Material Design. In `),ce(24,`code`),Zf(25,`outline`),vi(),Zf(26,` the label floats onto the border, which opens a gap for it; in `),ce(27,`code`),Zf(28,`fill`),vi(),Zf(29,` it floats to the top of a tinted box, whose underline grows from the middle on focus. Focus colours the border or underline and the label, and an invalid field stays red. Both work with inputs, textareas and selects, and with `),ce(30,`code`),Zf(31,`hint`),vi(),Zf(32,` and `),ce(33,`code`),Zf(34,`error`),vi(),Zf(35,`. The default, `),ce(36,`code`),Zf(37,`appearance="default"`),vi(),Zf(38,`, is Bootstrap's. `),vi(),ce(39,`docs-example`,4),Zf(40,` Bootstrap 6 floats the label over a `),ce(41,`code`),Zf(42,`<textarea>`),vi(),Zf(43,` and a `),ce(44,`code`),Zf(45,`<select>`),vi(),Zf(46,` too. `),vi(),ce(47,`docs-example`,5),Zf(48,` Bootstrap tells whether the control has a value with `),ce(49,`code`),Zf(50,`:placeholder-shown`),vi(),Zf(51,`, which needs a `),ce(52,`code`),Zf(53,`placeholder`),vi(),Zf(54,`. `),ce(55,`code`),Zf(56,`ngsInput`),vi(),Zf(57,` sets a single space for you. Give it your own and it is shown once the control has focus. `),vi(),ce(58,`docs-example`,6)(59,`code`),Zf(60,`hint`),vi(),Zf(61,` and `),ce(62,`code`),Zf(63,`error`),vi(),Zf(64,` work as on the text input: the error shows when the control is invalid and touched. `),vi(),ce(65,`section`,7)(66,`h2`,8),Zf(67,`Accessibility`),vi(),ce(68,`p`),Zf(69,` The label comes first in the DOM and points at the control with `),ce(70,`code`),Zf(71,`for`),vi(),Zf(72,`, so screen readers announce it before the value. A floating label is a real label, which stays visible after the user types; never replace it with the placeholder. The placeholder's single space is empty to assistive technology. Hint and error text are linked with `),ce(73,`code`),Zf(74,`aria-describedby`),vi(),Zf(75,`, and an invalid and touched control gets `),ce(76,`code`),Zf(77,`aria-invalid="true"`),vi(),Zf(78,`. The label's default colour has reduced opacity: check contrast in your theme. `),vi()()()),l&2&&(Ot(`tab`,p.tab())(`extraPackages`,Jf(12,xs)),Tt(12),Ot(`component`,p.basic)(`sources`,p.sources.basic),Tt(5),Ot(`component`,p.appearance)(`sources`,p.sources.appearance),Tt(22),Ot(`component`,p.controls)(`sources`,p.sources.controls),Tt(8),Ot(`component`,p.placeholder)(`sources`,p.sources.placeholder),Tt(11),Ot(`component`,p.validation)(`sources`,p.sources.validation))},dependencies:[ue$1,pe],encapsulation:2})};export{cs as FloatingLabelsPage};