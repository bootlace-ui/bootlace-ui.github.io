import{Cr as rf,Gt as Yn,Jt as Zf,Rr as ue,Wr as ve,et as Ot,ir as nf,on as ce,qr as vi,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as u}from"./chunk-D4gOm0ql.js";function C(t,o){if(t&1&&(ce(0,`div`,1),ue(1,`ngs-spinner`,2),vi()),t&2){let e=o.$implicit;Tt(),Ot(`color`,e)(`label`,`Loading `+e)}}var d=class t{colors=[`primary`,`accent`,`secondary`,`success`,`danger`,`warning`,`info`,`inverse`];static ɵfac=function(e){return new(e||t)};static ɵcmp=ve({type:t,selectors:[[`docs-spinner-colors`]],decls:3,vars:0,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[3,`color`,`label`]],template:function(e,l){e&1&&(ce(0,`div`,0),of(1,C,2,2,`div`,1,nf),vi()),e&2&&(Tt(),rf(l.colors))},dependencies:[u],encapsulation:2})};var g=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=ve({type:t,selectors:[[`docs-spinner-sizes`]],decls:11,vars:0,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[`size`,`sm`],[`type`,`grow`,`size`,`sm`],[`type`,`grow`],[`label`,`Loading the report`,2,`--spinner-width`,`3rem`,`--spinner-height`,`3rem`]],template:function(e,l){e&1&&(ce(0,`div`,0)(1,`div`,1),ue(2,`ngs-spinner`,2),vi(),ce(3,`div`,1),ue(4,`ngs-spinner`),vi(),ce(5,`div`,1),ue(6,`ngs-spinner`,3),vi(),ce(7,`div`,1),ue(8,`ngs-spinner`,4),vi(),ce(9,`div`,1),ue(10,`ngs-spinner`,5),vi()())},dependencies:[u],encapsulation:2})};var h=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=ve({type:t,selectors:[[`docs-spinner-types`]],decls:5,vars:0,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[`type`,`grow`]],template:function(e,l){e&1&&(ce(0,`div`,0)(1,`div`,1),ue(2,`ngs-spinner`),vi(),ce(3,`div`,1),ue(4,`ngs-spinner`,2),vi()())},dependencies:[u],encapsulation:2})};var E={colors:{html:{code:`<div class="row g-3 align-items-center">
  @for (color of colors; track color) {
    <div class="col-auto">
      <ngs-spinner [color]="color" [label]="'Loading ' + color" />
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  @for (color of colors; track color) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-spinner</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;Loading &#x27; + color&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsThemeColor } from '@bootlace/core';
import { NgsSpinner } from '@bootlace/core/spinner';

@Component({
  selector: 'docs-spinner-colors',
  imports: [NgsSpinner],
  templateUrl: './index.html',
})
export class SpinnerColorsExample {
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
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSpinner</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/spinner&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-spinner-colors&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSpinner</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SpinnerColorsExample</span> {
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
}`}},sizes:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-auto"><ngs-spinner size="sm" /></div>
  <div class="col-auto"><ngs-spinner /></div>
  <div class="col-auto"><ngs-spinner type="grow" size="sm" /></div>
  <div class="col-auto"><ngs-spinner type="grow" /></div>
  <div class="col-auto">
    <ngs-spinner style="--spinner-width: 3rem; --spinner-height: 3rem" label="Loading the report" />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-spinner</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-spinner</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-spinner</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;--spinner-width: 3rem; --spinner-height: 3rem&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Loading the report&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsSpinner } from '@bootlace/core/spinner';

@Component({
  selector: 'docs-spinner-sizes',
  imports: [NgsSpinner],
  templateUrl: './index.html',
})
export class SpinnerSizesExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSpinner</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/spinner&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-spinner-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSpinner</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SpinnerSizesExample</span> {}`}},types:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-auto"><ngs-spinner /></div>
  <div class="col-auto"><ngs-spinner type="grow" /></div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-spinner</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-spinner</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;grow&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsSpinner } from '@bootlace/core/spinner';

@Component({
  selector: 'docs-spinner-types',
  imports: [NgsSpinner],
  templateUrl: './index.html',
})
export class SpinnerTypesExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSpinner</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/spinner&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-spinner-types&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSpinner</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SpinnerTypesExample</span> {}`}}};var b=class t{tab=Yn(`examples`);sources=E;types=h;sizes=g;colors=d;static ɵfac=function(e){return new(e||t)};static ɵcmp=ve({type:t,selectors:[[`docs-spinner-page`]],inputs:{tab:[1,`tab`]},decls:60,vars:7,consts:[[`heading`,`Spinner`,`package`,`@bootlace/core/spinner`,`path`,`/components/spinner`,3,`tab`],[1,`docs-page-lead`],[`id`,`types`,`heading`,`Types`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`id`,`colors`,`heading`,`Colors`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(e,l){e&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A loading indicator, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.spinner-border`),vi(),Zf(5,` and `),ce(6,`code`),Zf(7,`.spinner-grow`),vi(),Zf(8,`. `),vi(),ce(9,`docs-example`,2)(10,`code`),Zf(11,`border`),vi(),Zf(12,` (default) rotates a ring, `),ce(13,`code`),Zf(14,`grow`),vi(),Zf(15,` pulses a dot. `),vi(),ce(16,`docs-example`,3)(17,`code`),Zf(18,`md`),vi(),Zf(19,` (default) and `),ce(20,`code`),Zf(21,`sm`),vi(),Zf(22,`. For other sizes set `),ce(23,`code`),Zf(24,`--spinner-width`),vi(),Zf(25,` and `),ce(26,`code`),Zf(27,`--spinner-height`),vi(),Zf(28,`. `),vi(),ce(29,`docs-example`,4),Zf(30,` A spinner takes the current text colour. `),ce(31,`code`),Zf(32,`color`),vi(),Zf(33,` sets a theme colour. `),vi(),ce(34,`section`,5)(35,`h2`,6),Zf(36,`Accessibility`),vi(),ce(37,`p`),Zf(38,` The spinner is a `),ce(39,`code`),Zf(40,`role="status"`),vi(),Zf(41,` region holding visually hidden text, so a screen reader announces "Loading…" (the `),ce(42,`code`),Zf(43,`loading`),vi(),Zf(44,` string of `),ce(45,`code`),Zf(46,`NGS_I18N`),vi(),Zf(47,`). Set `),ce(48,`code`),Zf(49,`label`),vi(),Zf(50,` to say what is loading. Bootstrap slows the animation under `),ce(51,`code`),Zf(52,`prefers-reduced-motion`),vi(),Zf(53,`. Inside a button, use the button's own `),ce(54,`code`),Zf(55,`loading`),vi(),Zf(56,` input instead, which sets `),ce(57,`code`),Zf(58,`aria-busy`),vi(),Zf(59,`. `),vi()()()),e&2&&(Ot(`tab`,l.tab()),Tt(9),Ot(`component`,l.types)(`sources`,l.sources.types),Tt(7),Ot(`component`,l.sizes)(`sources`,l.sources.sizes),Tt(13),Ot(`component`,l.colors)(`sources`,l.sources.colors))},dependencies:[ue$1,pe],encapsulation:2})};export{b as SpinnerPage};