import{An as hg,At as W,Br as ui,Cr as rf,Gt as Yn,Jt as Zf,L as KC,Pt as XC,Rr as ue,Sn as fh,W as Ll,Wr as ve,Zn as m7,bn as f7,ei as xh,et as Ot,ir as nf,on as ce,pr as pU,q as Mh,qr as vi,r as $f,ri as yU,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./chunk-B6h8Jb5u.js";import{I as rt,M as ms,N as pn,O as gs,T as ds,b as Xi,k as hs,m as Ot$1,r as Br,u as Hr,w as cs,z as zr}from"./chunk-DycqepRM.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";import{n as m}from"./chunk-BPk3HYY3.js";import"./chunk-CT3GIJZF.js";import{n as V,r as k,t as A}from"./chunk-CX55sP_u.js";var I=class l{mail=pU;search=yU;static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-text-input-affixes`]],decls:19,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-4`],[`label`,`Email`],[`ngsPrefix`,``],[3,`icon`],[`ngsInput`,``,`type`,`email`,`autocomplete`,`email`],[`label`,`Amount`],[`ngsInput`,``,`type`,`number`,`inputmode`,`decimal`],[`ngsSuffix`,``],[`label`,`Search`],[`ngsInput`,``,`type`,`search`],[`ngsSuffix`,``,`ngsButton`,``,`variant`,`outline`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-textfield`,2)(3,`span`,3),ue(4,`ngs-icon`,4),vi(),ue(5,`input`,5),vi()(),ce(6,`div`,1)(7,`ngs-textfield`,6)(8,`span`,3),Zf(9,`$`),vi(),ue(10,`input`,7),ce(11,`span`,8),Zf(12,`.00`),vi()()(),ce(13,`div`,1)(14,`ngs-textfield`,9),ue(15,`input`,10),ce(16,`button`,11),ue(17,`ngs-icon`,4),Zf(18,` Go`),vi()()()()),t&2&&(Tt(4),Ot(`icon`,e.mail),Tt(13),Ot(`icon`,e.search))},dependencies:[f,Ll,m,V,k,A],encapsulation:2})};var q=class l{static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-text-input-basic`]],decls:7,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`label`,`Full name`,`hint`,`As it appears on your passport.`],[`ngsInput`,``,`autocomplete`,`name`,`placeholder`,`Ada Lovelace`],[`label`,`Username`],[`ngsInput`,``,`value`,`ada`,`disabled`,``]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-textfield`,2),ue(3,`input`,3),vi()(),ce(4,`div`,1)(5,`ngs-textfield`,4),ue(6,`input`,5),vi()()())},dependencies:[m,A],encapsulation:2})};var w=class l{query=W(`Bootstrap`);clears=W(0);static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-text-input-clear`]],decls:10,vars:3,consts:[[1,`row`,`g-3`,`align-items-end`],[1,`col-12`,`md:col-6`],[`label`,`Framework`,`clearable`,``,3,`cleared`],[`ngsInput`,``,`name`,`query`,3,`ngModelChange`,`ngModel`],[1,`mb-0`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-textfield`,2),ui(`cleared`,function(){return e.clears.set(e.clears()+1)}),ce(3,`input`,3),f7(),xh(`ngModelChange`,function(E){return $f(e.query,E)||(e.query=E),E}),vi()()(),ce(4,`div`,1)(5,`p`,4),Zf(6,` Value: `),ce(7,`code`),Zf(8),vi(),Zf(9),vi()()()),t&2&&(Tt(3),Mh(`ngModel`,e.query),m7(),Tt(5),fh(e.query()),Tt(),hg(`, cleared `,e.clears(),` times. `))},dependencies:[gs,Xi,cs,Hr,m,A],encapsulation:2})};function is(l,i){if(l&1&&(ce(0,`div`,1)(1,`ngs-textfield`,2),ue(2,`input`,3),vi()()),l&2){let t=i.$implicit;Tt(),Ot(`label`,`Size `+t)(`size`,t)}}var N=class l{sizes=[`sm`,`md`,`lg`];static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-text-input-sizes`]],decls:3,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-4`],[3,`label`,`size`],[`ngsInput`,``,`placeholder`,`Type here`]],template:function(t,e){t&1&&(ce(0,`div`,0),of(1,is,3,2,`div`,1,nf),vi()),t&2&&(Tt(),rf(e.sizes))},dependencies:[m,A],encapsulation:2})};var S=class l{static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-text-input-textarea`]],decls:8,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`label`,`Message`,`hint`,`Plain text only.`,`clearable`,``],[`ngsInput`,``,`rows`,`4`],[`label`,`Read-only note`],[`ngsInput`,``,`rows`,`4`,`readonly`,``]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-textfield`,2),ue(3,`textarea`,3),vi()(),ce(4,`div`,1)(5,`ngs-textfield`,4)(6,`textarea`,5),Zf(7,`Read-only text cannot be edited.`),vi()()()())},dependencies:[m,A],encapsulation:2})};function os(l,i){l&1&&(ce(0,`span`,5),Zf(1,`Subscribed.`),vi())}var T=class l{form=new rt({email:new pn(``,{nonNullable:!0,validators:[Ot$1.required,Ot$1.email]})});sent=W(!1);submit(){this.form.markAllAsTouched(),this.sent.set(this.form.valid)}static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-text-input-validation`]],decls:8,vars:2,consts:[[`novalidate`,``,1,`row`,`g-3`,3,`ngSubmit`,`formGroup`],[1,`col-12`,`md:col-6`],[`label`,`Email`,`hint`,`We will send a receipt.`,`error`,`Enter a valid email address.`,`clearable`,``],[`ngsInput`,``,`type`,`email`,`formControlName`,`email`,`autocomplete`,`email`],[`ngsButton`,``,`type`,`submit`],[`role`,`status`,1,`ms-2`]],template:function(t,e){t&1&&(ce(0,`form`,0),ui(`ngSubmit`,function(){return e.submit()}),ce(1,`div`,1)(2,`ngs-textfield`,2)(3,`input`,3),f7(),vi()()(),ce(4,`div`,1)(5,`button`,4),Zf(6,`Subscribe`),vi(),KC(7,os,2,0,`span`,5),vi()()),t&2&&(Ot(`formGroup`,e.form),Tt(3),m7(),Tt(4),XC(e.sent()?7:-1))},dependencies:[f,m,A,ms,hs,Xi,cs,ds,Br,zr],encapsulation:2})};var es={affixes:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-4">
    <ngs-textfield label="Email">
      <span ngsPrefix><ngs-icon [icon]="mail" /></span>
      <input ngsInput type="email" autocomplete="email" />
    </ngs-textfield>
  </div>
  <div class="col-12 md:col-4">
    <ngs-textfield label="Amount">
      <span ngsPrefix>$</span>
      <input ngsInput type="number" inputmode="decimal" />
      <span ngsSuffix>.00</span>
    </ngs-textfield>
  </div>
  <div class="col-12 md:col-4">
    <ngs-textfield label="Search">
      <input ngsInput type="search" />
      <button ngsSuffix ngsButton variant="outline"><ngs-icon [icon]="search" /> Go</button>
    </ngs-textfield>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Email&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">ngsPrefix</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;mail&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;email&quot;</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;email&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Amount&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">ngsPrefix</span>&gt;</span>$<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">inputmode</span>=<span class="hljs-string">&quot;decimal&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">ngsSuffix</span>&gt;</span>.00<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Search&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;search&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsSuffix</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;search&quot;</span> /&gt;</span> Go<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsIcon } from '@bootlace/core/icon';
import { NgsInput, NgsPrefix, NgsSuffix, NgsTextfield } from '@bootlace/core/input';
import { ngsIconMail, ngsIconSearch } from '@bootlace/icons';

@Component({
  selector: 'docs-text-input-affixes',
  imports: [NgsButton, NgsIcon, NgsInput, NgsPrefix, NgsSuffix, NgsTextfield],
  templateUrl: './index.html',
})
export class TextInputAffixesExample {
  protected readonly mail = ngsIconMail;
  protected readonly search = ngsIconSearch;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsPrefix</span>, <span class="hljs-title class_">NgsSuffix</span>, <span class="hljs-title class_">NgsTextfield</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconMail, ngsIconSearch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-text-input-affixes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsIcon</span>, <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsPrefix</span>, <span class="hljs-title class_">NgsSuffix</span>, <span class="hljs-title class_">NgsTextfield</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TextInputAffixesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> mail = ngsIconMail;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> search = ngsIconSearch;
}`}},basic:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-textfield label="Full name" hint="As it appears on your passport.">
      <input ngsInput autocomplete="name" placeholder="Ada Lovelace" />
    </ngs-textfield>
  </div>
  <div class="col-12 md:col-6">
    <ngs-textfield label="Username">
      <input ngsInput value="ada" disabled />
    </ngs-textfield>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Full name&quot;</span> <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;As it appears on your passport.&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Ada Lovelace&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Username&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;ada&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsInput, NgsTextfield } from '@bootlace/core/input';

@Component({
  selector: 'docs-text-input-basic',
  imports: [NgsInput, NgsTextfield],
  templateUrl: './index.html',
})
export class TextInputBasicExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-text-input-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TextInputBasicExample</span> {}`}},clear:{html:{code:`<div class="row g-3 align-items-end">
  <div class="col-12 md:col-6">
    <ngs-textfield label="Framework" clearable (cleared)="clears.set(clears() + 1)">
      <input ngsInput name="query" [(ngModel)]="query" />
    </ngs-textfield>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0">
      Value: <code>{{ query() }}</code
      >, cleared {{ clears() }} times.
    </p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-end&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Framework&quot;</span> <span class="hljs-attr">clearable</span> (<span class="hljs-attr">cleared</span>)=<span class="hljs-string">&quot;clears.set(clears() + 1)&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;query&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;query&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>
      Value: <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ query() }}&lt;/code
      &gt;, cleared {{ clears() }} times.
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgsInput, NgsTextfield } from '@bootlace/core/input';

@Component({
  selector: 'docs-text-input-clear',
  imports: [FormsModule, NgsInput, NgsTextfield],
  templateUrl: './index.html',
})
export class TextInputClearExample {
  protected readonly query = signal('Bootstrap');
  protected readonly clears = signal(0);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormsModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-text-input-clear&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">FormsModule</span>, <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TextInputClearExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> query = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;Bootstrap&#x27;</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> clears = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);
}`}},sizes:{html:{code:`<div class="row g-3">
  @for (size of sizes; track size) {
    <div class="col-12 md:col-4">
      <ngs-textfield [label]="'Size ' + size" [size]="size">
        <input ngsInput placeholder="Type here" />
      </ngs-textfield>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  @for (size of sizes; track size) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;Size &#x27; + size&quot;</span> [<span class="hljs-attr">size</span>]=<span class="hljs-string">&quot;size&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Type here&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsInput, NgsInputSize, NgsTextfield } from '@bootlace/core/input';

@Component({
  selector: 'docs-text-input-sizes',
  imports: [NgsInput, NgsTextfield],
  templateUrl: './index.html',
})
export class TextInputSizesExample {
  protected readonly sizes: NgsInputSize[] = ['sm', 'md', 'lg'];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsInputSize</span>, <span class="hljs-title class_">NgsTextfield</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-text-input-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TextInputSizesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">sizes</span>: <span class="hljs-title class_">NgsInputSize</span>[] = [<span class="hljs-string">&#x27;sm&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;lg&#x27;</span>];
}`}},textarea:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-textfield label="Message" hint="Plain text only." clearable>
      <textarea ngsInput rows="4"></textarea>
    </ngs-textfield>
  </div>
  <div class="col-12 md:col-6">
    <ngs-textfield label="Read-only note">
      <textarea ngsInput rows="4" readonly>Read-only text cannot be edited.</textarea>
    </ngs-textfield>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Message&quot;</span> <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;Plain text only.&quot;</span> <span class="hljs-attr">clearable</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Read-only note&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;4&quot;</span> <span class="hljs-attr">readonly</span>&gt;</span>Read-only text cannot be edited.<span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsInput, NgsTextfield } from '@bootlace/core/input';

@Component({
  selector: 'docs-text-input-textarea',
  imports: [NgsInput, NgsTextfield],
  templateUrl: './index.html',
})
export class TextInputTextareaExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-text-input-textarea&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TextInputTextareaExample</span> {}`}},validation:{html:{code:`<form class="row g-3" [formGroup]="form" (ngSubmit)="submit()" novalidate>
  <div class="col-12 md:col-6">
    <ngs-textfield
      label="Email"
      hint="We will send a receipt."
      error="Enter a valid email address."
      clearable
    >
      <input ngsInput type="email" formControlName="email" autocomplete="email" />
    </ngs-textfield>
  </div>
  <div class="col-12 md:col-6">
    <button ngsButton type="submit">Subscribe</button>
    @if (sent()) {
      <span class="ms-2" role="status">Subscribed.</span>
    }
  </div>
</form>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;form&quot;</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">&quot;submit()&quot;</span> <span class="hljs-attr">novalidate</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Email&quot;</span>
      <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;We will send a receipt.&quot;</span>
      <span class="hljs-attr">error</span>=<span class="hljs-string">&quot;Enter a valid email address.&quot;</span>
      <span class="hljs-attr">clearable</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;email&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;email&quot;</span> <span class="hljs-attr">autocomplete</span>=<span class="hljs-string">&quot;email&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>Subscribe<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    @if (sent()) {
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ms-2&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;status&quot;</span>&gt;</span>Subscribed.<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgsButton } from '@bootlace/core/button';
import { NgsInput, NgsTextfield } from '@bootlace/core/input';

@Component({
  selector: 'docs-text-input-validation',
  imports: [NgsButton, NgsInput, NgsTextfield, ReactiveFormsModule],
  templateUrl: './index.html',
})
export class TextInputValidationExample {
  protected readonly form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });
  protected readonly sent = signal(false);

  protected submit(): void {
    this.form.markAllAsTouched();
    this.sent.set(this.form.valid);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">Validators</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-text-input-validation&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span>, <span class="hljs-title class_">ReactiveFormsModule</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TextInputValidationExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> form = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormGroup</span>({
    <span class="hljs-attr">email</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;&#x27;</span>, {
      <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">validators</span>: [<span class="hljs-title class_">Validators</span>.<span class="hljs-property">required</span>, <span class="hljs-title class_">Validators</span>.<span class="hljs-property">email</span>],
    }),
  });
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sent = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">submit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-title function_">markAllAsTouched</span>();
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">sent</span>.<span class="hljs-title function_">set</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">valid</span>);
  }
}`}}};var ls=class l{tab=Yn(`examples`);sources=es;basic=q;sizes=N;affixes=I;clear=w;validation=T;textarea=S;static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-text-input-page`]],inputs:{tab:[1,`tab`]},decls:102,vars:13,consts:[[`heading`,`Text input`,`package`,`@bootlace/core/input`,`path`,`/form/text-input`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`id`,`affixes`,`heading`,`Prefix and suffix`,3,`component`,`sources`],[`id`,`clear`,`heading`,`Clear button`,3,`component`,`sources`],[`id`,`validation`,`heading`,`Validation`,3,`component`,`sources`],[`id`,`textarea`,`heading`,`Textarea`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,e){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A text field built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.form-control`),vi(),Zf(5,` and `),ce(6,`code`),Zf(7,`.input-group`),vi(),Zf(8,`. Add `),ce(9,`code`),Zf(10,`ngsInput`),vi(),Zf(11,` to a native `),ce(12,`code`),Zf(13,`<input>`),vi(),Zf(14,`, `),ce(15,`code`),Zf(16,`<textarea>`),vi(),Zf(17,` or `),ce(18,`code`),Zf(19,`<select>`),vi(),Zf(20,`, and wrap it in `),ce(21,`code`),Zf(22,`<ngs-textfield>`),vi(),Zf(23,` for a label, prefix and suffix, a clear button, hint and error text. `),vi(),ce(24,`docs-example`,2),Zf(25,` The label is tied to the input with `),ce(26,`code`),Zf(27,`for`),vi(),Zf(28,` and a generated id. The hint is linked with `),ce(29,`code`),Zf(30,`aria-describedby`),vi(),Zf(31,`. `),vi(),ce(32,`docs-example`,3)(33,`code`),Zf(34,`sm`),vi(),Zf(35,`, `),ce(36,`code`),Zf(37,`md`),vi(),Zf(38,` (default) and `),ce(39,`code`),Zf(40,`lg`),vi(),Zf(41,`, set on the field. `),vi(),ce(42,`docs-example`,4),Zf(43,` Mark an icon, text or button with `),ce(44,`code`),Zf(45,`ngsPrefix`),vi(),Zf(46,` or `),ce(47,`code`),Zf(48,`ngsSuffix`),vi(),Zf(49,`. Text and icons become `),ce(50,`code`),Zf(51,`.input-group-text`),vi(),Zf(52,`; a button keeps its own styling. `),vi(),ce(53,`docs-example`,5)(54,`code`),Zf(55,`clearable`),vi(),Zf(56,` shows a close button while the input has a value. It empties the input, returns focus to it and emits `),ce(57,`code`),Zf(58,`cleared`),vi(),Zf(59,`. Its name comes from the `),ce(60,`code`),Zf(61,`clear`),vi(),Zf(62,` string of `),ce(63,`code`),Zf(64,`NGS_I18N`),vi(),Zf(65,`. `),vi(),ce(66,`docs-example`,6),Zf(67,` With a reactive form, the error appears once the control is invalid and touched. It also works with `),ce(68,`code`),Zf(69,`ngModel`),vi(),Zf(70,`. `),vi(),ce(71,`docs-example`,7),Zf(72,` The same directive and wrapper work on a `),ce(73,`code`),Zf(74,`<textarea>`),vi(),Zf(75,`. `),vi(),ce(76,`section`,8)(77,`h2`,9),Zf(78,`Accessibility`),vi(),ce(79,`p`),Zf(80,` The directive enhances the native element, so the browser keeps its role, keyboard and autofill behaviour. The label is a real `),ce(81,`code`),Zf(82,`<label for>`),vi(),Zf(83,` that points at the input's id. The hint and error text are linked with `),ce(84,`code`),Zf(85,`aria-describedby`),vi(),Zf(86,`, and the error exists in the page only while it applies. An invalid and touched control gets `),ce(87,`code`),Zf(88,`aria-invalid="true"`),vi(),Zf(89,` and `),ce(90,`code`),Zf(91,`.is-invalid`),vi(),Zf(92,`, so the error does not appear before the user has had a chance to type. The clear button is a real `),ce(93,`code`),Zf(94,`<button>`),vi(),Zf(95,` with an accessible name, and it moves focus back to the input. Placeholders do not replace labels: always give the field a `),ce(96,`code`),Zf(97,`label`),vi(),Zf(98,`, or an `),ce(99,`code`),Zf(100,`aria-label`),vi(),Zf(101,` on the input. `),vi()()()),t&2&&(Ot(`tab`,e.tab()),Tt(24),Ot(`component`,e.basic)(`sources`,e.sources.basic),Tt(8),Ot(`component`,e.sizes)(`sources`,e.sources.sizes),Tt(10),Ot(`component`,e.affixes)(`sources`,e.sources.affixes),Tt(11),Ot(`component`,e.clear)(`sources`,e.sources.clear),Tt(13),Ot(`component`,e.validation)(`sources`,e.sources.validation),Tt(5),Ot(`component`,e.textarea)(`sources`,e.sources.textarea))},dependencies:[ue$1,pe],encapsulation:2})};export{ls as TextInputPage};