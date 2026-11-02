import{Cr as rf,Gt as Yn,Jt as Zf,Sn as fh,Wr as ve,et as Ot,ir as nf,on as ce,qr as vi,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import{t as c}from"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";function B(t,o){if(t&1&&(ce(0,`div`,1)(1,`ngs-badge`,2),Zf(2),vi()()),t&2){let e=o.$implicit;Tt(),Ot(`color`,e),Tt(),fh(e)}}var d=class t{colors=[`primary`,`accent`,`secondary`,`success`,`danger`,`warning`,`info`,`inverse`];static ɵfac=function(e){return new(e||t)};static ɵcmp=ve({type:t,selectors:[[`docs-badge-colors`]],decls:3,vars:0,consts:[[1,`row`,`g-2`],[1,`col-auto`],[3,`color`]],template:function(e,l){e&1&&(ce(0,`div`,0),of(1,B,3,2,`div`,1,nf),vi()),e&2&&(Tt(),rf(l.colors))},dependencies:[c],encapsulation:2})};var g=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=ve({type:t,selectors:[[`docs-badge-sizes`]],decls:7,vars:0,consts:[[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[`color`,`info`],[`color`,`info`,`size`,`lg`]],template:function(e,l){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-badge`,2),Zf(3,`Medium`),vi()(),ce(4,`div`,1)(5,`ngs-badge`,3),Zf(6,`Large`),vi()()())},dependencies:[c],encapsulation:2})};var m=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=ve({type:t,selectors:[[`docs-badge-variants`]],decls:10,vars:0,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`color`,`success`],[`color`,`success`,`variant`,`subtle`],[`color`,`success`,`variant`,`outline`]],template:function(e,l){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-badge`,2),Zf(3,`Solid`),vi()(),ce(4,`div`,1)(5,`ngs-badge`,3),Zf(6,`Subtle`),vi()(),ce(7,`div`,1)(8,`ngs-badge`,4),Zf(9,`Outline`),vi()()())},dependencies:[c],encapsulation:2})};var C={colors:{html:{code:`<div class="row g-2">
  @for (color of colors; track color) {
    <div class="col-auto">
      <ngs-badge [color]="color">{{ color }}</ngs-badge>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @for (color of colors; track color) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-badge</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>{{ color }}<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-badge</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsThemeColor } from '@bootlace/core';
import { NgsBadge } from '@bootlace/core/badge';

@Component({
  selector: 'docs-badge-colors',
  imports: [NgsBadge],
  templateUrl: './index.html',
})
export class BadgeColorsExample {
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
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsBadge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/badge&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-badge-colors&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsBadge</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">BadgeColorsExample</span> {
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
  <div class="col-auto"><ngs-badge color="info">Medium</ngs-badge></div>
  <div class="col-auto"><ngs-badge color="info" size="lg">Large</ngs-badge></div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>Medium<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-badge</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-badge</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsBadge } from '@bootlace/core/badge';

@Component({
  selector: 'docs-badge-sizes',
  imports: [NgsBadge],
  templateUrl: './index.html',
})
export class BadgeSizesExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsBadge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/badge&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-badge-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsBadge</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">BadgeSizesExample</span> {}`}},variants:{html:{code:`<div class="row g-2">
  <div class="col-auto"><ngs-badge color="success">Solid</ngs-badge></div>
  <div class="col-auto"><ngs-badge color="success" variant="subtle">Subtle</ngs-badge></div>
  <div class="col-auto"><ngs-badge color="success" variant="outline">Outline</ngs-badge></div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>Solid<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-badge</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span>&gt;</span>Subtle<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-badge</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>&gt;</span>Outline<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-badge</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsBadge } from '@bootlace/core/badge';

@Component({
  selector: 'docs-badge-variants',
  imports: [NgsBadge],
  templateUrl: './index.html',
})
export class BadgeVariantsExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsBadge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/badge&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-badge-variants&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsBadge</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">BadgeVariantsExample</span> {}`}}};var w=class t{tab=Yn(`examples`);sources=C;colors=d;variants=m;sizes=g;static ɵfac=function(e){return new(e||t)};static ɵcmp=ve({type:t,selectors:[[`docs-badge-page`]],inputs:{tab:[1,`tab`]},decls:36,vars:7,consts:[[`heading`,`Badge`,`package`,`@bootlace/core/badge`,`path`,`/components/badge`,3,`tab`],[1,`docs-page-lead`],[`id`,`colors`,`heading`,`Colors`,3,`component`,`sources`],[`id`,`variants`,`heading`,`Variants`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(e,l){e&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A small count or label, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.badge`),vi(),Zf(5,`. `),vi(),ce(6,`docs-example`,2),Zf(7,` The eight Bootstrap 6 theme colours, applied with the `),ce(8,`code`),Zf(9,`.theme-*`),vi(),Zf(10,` classes. `),vi(),ce(11,`docs-example`,3)(12,`code`),Zf(13,`solid`),vi(),Zf(14,` (default), `),ce(15,`code`),Zf(16,`subtle`),vi(),Zf(17,` and `),ce(18,`code`),Zf(19,`outline`),vi(),Zf(20,`. `),vi(),ce(21,`docs-example`,4)(22,`code`),Zf(23,`md`),vi(),Zf(24,` (default) and `),ce(25,`code`),Zf(26,`lg`),vi(),Zf(27,`. `),vi(),ce(28,`section`,5)(29,`h2`,6),Zf(30,`Accessibility`),vi(),ce(31,`p`),Zf(32,` A badge is plain text with no role of its own. When it carries meaning beyond its text (for example an unread count next to an icon), add context for screen readers, such as `),ce(33,`code`),Zf(34,`<span class="visually-hidden">unread messages</span>`),vi(),Zf(35,`. Colour alone must not convey the meaning. `),vi()()()),e&2&&(Ot(`tab`,l.tab()),Tt(6),Ot(`component`,l.colors)(`sources`,l.sources.colors),Tt(5),Ot(`component`,l.variants)(`sources`,l.sources.variants),Tt(10),Ot(`component`,l.sizes)(`sources`,l.sources.sizes))},dependencies:[ue,pe],encapsulation:2})};export{w as BadgePage};