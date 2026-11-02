import{An as hg,At as W,Br as ui,Cr as rf,Gt as Yn,Jt as Zf,Sn as fh,Wr as ve,et as Ot,ir as nf,on as ce,qr as vi,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";function q(e,p){if(e&1&&(ce(0,`div`,1)(1,`button`,2),Zf(2),vi()()),e&2){let n=p.$implicit;Tt(),Ot(`color`,n),Tt(),fh(n)}}var g=class e{colors=[`primary`,`accent`,`secondary`,`success`,`danger`,`warning`,`info`,`inverse`];static ɵfac=function(n){return new(n||e)};static ɵcmp=ve({type:e,selectors:[[`docs-button-colors`]],decls:3,vars:0,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,3,`color`]],template:function(n,o){n&1&&(ce(0,`div`,0),of(1,q,3,2,`div`,1,nf),vi()),n&2&&(Tt(),rf(o.colors))},dependencies:[f],encapsulation:2})};function _(e,p){if(e&1&&(ce(0,`div`,1)(1,`button`,2),Zf(2),vi()()),e&2){let n=p.$implicit;Tt(),Ot(`size`,n),Tt(),fh(n)}}var v=class e{sizes=[`xs`,`sm`,`md`,`lg`];static ɵfac=function(n){return new(n||e)};static ɵcmp=ve({type:e,selectors:[[`docs-button-sizes`]],decls:3,vars:0,consts:[[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,3,`size`]],template:function(n,o){n&1&&(ce(0,`div`,0),of(1,_,3,2,`div`,1,nf),vi()),n&2&&(Tt(),rf(o.sizes))},dependencies:[f],encapsulation:2})};var b=class e{saving=W(!1);save(){this.saving.set(!0),setTimeout(()=>this.saving.set(!1),1500)}static ɵfac=function(n){return new(n||e)};static ɵcmp=ve({type:e,selectors:[[`docs-button-states`]],decls:17,vars:2,consts:[[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,3,`click`,`loading`],[`ngsButton`,``,`variant`,`outline`,`disabled`,``],[`ngsButton`,``,`variant`,`subtle`,`href`,`https://getbootstrap.com`],[`ngsButton`,``,`variant`,`subtle`,`href`,`https://getbootstrap.com`,`disabled`,``],[1,`row`,`g-2`,`mt-2`],[1,`col-12`,`md:col-6`],[`ngsButton`,``,`variant`,`outline`,`block`,``]],template:function(n,o){n&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),ui(`click`,function(){return o.save()}),Zf(3),vi()(),ce(4,`div`,1)(5,`button`,3),Zf(6,`Disabled`),vi()(),ce(7,`div`,1)(8,`a`,4),Zf(9,`Link`),vi()(),ce(10,`div`,1)(11,`a`,5),Zf(12,`Disabled link`),vi()()(),ce(13,`div`,6)(14,`div`,7)(15,`button`,8),Zf(16,`Block`),vi()()()),n&2&&(Tt(2),Ot(`loading`,o.saving()),Tt(),hg(` `,o.saving()?`Saving`:`Save`,` `))},dependencies:[f],encapsulation:2})};function z(e,p){if(e&1&&(ce(0,`div`,1)(1,`button`,2),Zf(2),vi()()),e&2){let n=p.$implicit;Tt(),Ot(`variant`,n),Tt(),fh(n)}}var y=class e{variants=[`solid`,`outline`,`subtle`,`text`,`link`];static ɵfac=function(n){return new(n||e)};static ɵcmp=ve({type:e,selectors:[[`docs-button-variants`]],decls:3,vars:0,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,3,`variant`]],template:function(n,o){n&1&&(ce(0,`div`,0),of(1,z,3,2,`div`,1,nf),vi()),n&2&&(Tt(),rf(o.variants))},dependencies:[f],encapsulation:2})};var C={colors:{html:{code:`<div class="row g-2">
  @for (color of colors; track color) {
    <div class="col-auto">
      <button ngsButton [color]="color">{{ color }}</button>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @for (color of colors; track color) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>{{ color }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsThemeColor } from '@bootlace/core';
import { NgsButton } from '@bootlace/core/button';

@Component({
  selector: 'docs-button-colors',
  imports: [NgsButton],
  templateUrl: './index.html',
})
export class ButtonColorsExample {
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
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-button-colors&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonColorsExample</span> {
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
}`}},sizes:{html:{code:`<div class="row g-2 align-items-center">
  @for (size of sizes; track size) {
    <div class="col-auto">
      <button ngsButton [size]="size">{{ size }}</button>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
  @for (size of sizes; track size) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">size</span>]=<span class="hljs-string">&quot;size&quot;</span>&gt;</span>{{ size }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton, NgsButtonSize } from '@bootlace/core/button';

@Component({
  selector: 'docs-button-sizes',
  imports: [NgsButton],
  templateUrl: './index.html',
})
export class ButtonSizesExample {
  protected readonly sizes: NgsButtonSize[] = ['xs', 'sm', 'md', 'lg'];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsButtonSize</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-button-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonSizesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">sizes</span>: <span class="hljs-title class_">NgsButtonSize</span>[] = [<span class="hljs-string">&#x27;xs&#x27;</span>, <span class="hljs-string">&#x27;sm&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;lg&#x27;</span>];
}`}},states:{html:{code:`<div class="row g-2 align-items-center">
  <div class="col-auto">
    <button ngsButton [loading]="saving()" (click)="save()">
      {{ saving() ? 'Saving' : 'Save' }}
    </button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" disabled>Disabled</button>
  </div>
  <div class="col-auto">
    <a ngsButton variant="subtle" href="https://getbootstrap.com">Link</a>
  </div>
  <div class="col-auto">
    <a ngsButton variant="subtle" href="https://getbootstrap.com" disabled>Disabled link</a>
  </div>
</div>
<div class="row g-2 mt-2">
  <div class="col-12 md:col-6">
    <button ngsButton variant="outline" block>Block</button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;saving()&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;save()&quot;</span>&gt;</span>
      {{ saving() ? &#x27;Saving&#x27; : &#x27;Save&#x27; }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://getbootstrap.com&quot;</span>&gt;</span>Link<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://getbootstrap.com&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Disabled link<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 mt-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">block</span>&gt;</span>Block<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';

@Component({
  selector: 'docs-button-states',
  imports: [NgsButton],
  templateUrl: './index.html',
})
export class ButtonStatesExample {
  protected readonly saving = signal(false);

  protected save(): void {
    this.saving.set(true);
    setTimeout(() => this.saving.set(false), 1500);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-button-states&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonStatesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> saving = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">save</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">saving</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">saving</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">false</span>), <span class="hljs-number">1500</span>);
  }
}`}},variants:{html:{code:`<div class="row g-2">
  @for (variant of variants; track variant) {
    <div class="col-auto">
      <button ngsButton [variant]="variant">{{ variant }}</button>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @for (variant of variants; track variant) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">variant</span>]=<span class="hljs-string">&quot;variant&quot;</span>&gt;</span>{{ variant }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton, NgsButtonVariant } from '@bootlace/core/button';

@Component({
  selector: 'docs-button-variants',
  imports: [NgsButton],
  templateUrl: './index.html',
})
export class ButtonVariantsExample {
  protected readonly variants: NgsButtonVariant[] = ['solid', 'outline', 'subtle', 'text', 'link'];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsButtonVariant</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-button-variants&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonVariantsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">variants</span>: <span class="hljs-title class_">NgsButtonVariant</span>[] = [<span class="hljs-string">&#x27;solid&#x27;</span>, <span class="hljs-string">&#x27;outline&#x27;</span>, <span class="hljs-string">&#x27;subtle&#x27;</span>, <span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;link&#x27;</span>];
}`}}};var N=class e{tab=Yn(`examples`);sources=C;colors=g;variants=y;sizes=v;states=b;static ɵfac=function(n){return new(n||e)};static ɵcmp=ve({type:e,selectors:[[`docs-button-page`]],inputs:{tab:[1,`tab`]},decls:89,vars:9,consts:[[`heading`,`Button`,`package`,`@bootlace/core/button`,`path`,`/components/buttons/button`,3,`tab`],[1,`docs-page-lead`],[`id`,`colors`,`heading`,`Colors`,3,`component`,`sources`],[`id`,`variants`,`heading`,`Variants`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`id`,`states`,`heading`,`States`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(n,o){n&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A button or link styled with Bootstrap 6 `),ce(3,`code`),Zf(4,`.btn`),vi(),Zf(5,`. Add `),ce(6,`code`),Zf(7,`ngsButton`),vi(),Zf(8,` to a native `),ce(9,`code`),Zf(10,`<button>`),vi(),Zf(11,` or `),ce(12,`code`),Zf(13,`<a>`),vi(),Zf(14,`. `),vi(),ce(15,`docs-example`,2),Zf(16,` The eight theme colours, applied with `),ce(17,`code`),Zf(18,`.theme-*`),vi(),Zf(19,`. `),vi(),ce(20,`docs-example`,3)(21,`code`),Zf(22,`solid`),vi(),Zf(23,` (default), `),ce(24,`code`),Zf(25,`outline`),vi(),Zf(26,`, `),ce(27,`code`),Zf(28,`subtle`),vi(),Zf(29,`, `),ce(30,`code`),Zf(31,`text`),vi(),Zf(32,` and `),ce(33,`code`),Zf(34,`link`),vi(),Zf(35,`. `),vi(),ce(36,`docs-example`,4)(37,`code`),Zf(38,`xs`),vi(),Zf(39,`, `),ce(40,`code`),Zf(41,`sm`),vi(),Zf(42,`, `),ce(43,`code`),Zf(44,`md`),vi(),Zf(45,` (default) and `),ce(46,`code`),Zf(47,`lg`),vi(),Zf(48,`. `),vi(),ce(49,`docs-example`,5),Zf(50,` Loading, disabled, link and full-width (`),ce(51,`code`),Zf(52,`block`),vi(),Zf(53,`) buttons. `),vi(),ce(54,`section`,6)(55,`h2`,7),Zf(56,`Accessibility`),vi(),ce(57,`p`),Zf(58,` The directive enhances native elements, so a `),ce(59,`code`),Zf(60,`<button>`),vi(),Zf(61,` keeps its role, keyboard activation (Enter and Space) and form behaviour. A `),ce(62,`code`),Zf(63,`<button>`),vi(),Zf(64,` defaults to `),ce(65,`code`),Zf(66,`type="button"`),vi(),Zf(67,`; set `),ce(68,`code`),Zf(69,`type="submit"`),vi(),Zf(70,` to submit a form. While `),ce(71,`code`),Zf(72,`loading`),vi(),Zf(73,`, the button sets `),ce(74,`code`),Zf(75,`aria-busy="true"`),vi(),Zf(76,` and `),ce(77,`code`),Zf(78,`aria-disabled="true"`),vi(),Zf(79,`, ignores clicks and stays focusable, so focus is not lost. A disabled `),ce(80,`code`),Zf(81,`<a>`),vi(),Zf(82,` gets `),ce(83,`code`),Zf(84,`aria-disabled`),vi(),Zf(85,` and `),ce(86,`code`),Zf(87,`tabindex="-1"`),vi(),Zf(88,` and does not navigate. Colour alone must not convey meaning: keep a clear text label. `),vi()()()),n&2&&(Ot(`tab`,o.tab()),Tt(15),Ot(`component`,o.colors)(`sources`,o.sources.colors),Tt(5),Ot(`component`,o.variants)(`sources`,o.sources.variants),Tt(16),Ot(`component`,o.sizes)(`sources`,o.sources.sizes),Tt(13),Ot(`component`,o.states)(`sources`,o.sources.states))},dependencies:[ue,pe],encapsulation:2})};export{N as ButtonPage};