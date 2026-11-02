import{An as hg,At as W,Br as ui,Gt as Yn,Jt as Zf,Wr as ve,ei as xh,et as Ot,on as ce,q as Mh,qr as vi,r as $f,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";import{t as V}from"./chunk-_RyKDr8k.js";var j=class o{index=W(0);move(r){this.index.update(t=>Math.min(Math.max(t+r,0),7))}static ɵfac=function(t){return new(t||o)};static ɵcmp=ve({type:o,selectors:[[`docs-pager-basic`]],decls:9,vars:3,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-12`],[3,`indexChange`,`count`,`maxVisible`,`index`],[1,`col-auto`],[`ngsButton`,``,`size`,`sm`,3,`click`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-pager`,2),xh(`indexChange`,function(l){return $f(e.index,l)||(e.index=l),l}),vi()(),ce(3,`div`,3)(4,`button`,4),ui(`click`,function(){return e.move(-1)}),Zf(5,`prev`),vi()(),ce(6,`div`,3)(7,`button`,4),ui(`click`,function(){return e.move(1)}),Zf(8,`next`),vi()()()),t&2&&(Tt(2),Ot(`count`,8)(`maxVisible`,6),Mh(`index`,e.index))},dependencies:[V,f],encapsulation:2})};var y=class o{index=W(1);static ɵfac=function(t){return new(t||o)};static ɵcmp=ve({type:o,selectors:[[`docs-pager-interactive`]],decls:6,vars:3,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-12`],[`interactive`,``,`label`,`Slides`,3,`indexChange`,`count`,`index`],[1,`mb-0`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-pager`,2),xh(`indexChange`,function(l){return $f(e.index,l)||(e.index=l),l}),vi()(),ce(3,`div`,1)(4,`p`,3),Zf(5),vi()()()),t&2&&(Tt(2),Ot(`count`,4),Mh(`index`,e.index),Tt(3),hg(`Showing item `,e.index()+1,` of 4`))},dependencies:[V],encapsulation:2})};var v=class o{index=W(8);static ɵfac=function(t){return new(t||o)};static ɵcmp=ve({type:o,selectors:[[`docs-pager-max-visible`]],decls:5,vars:5,consts:[[1,`row`,`g-3`],[1,`col-12`],[`interactive`,``,`label`,`Items, five dots`,3,`indexChange`,`count`,`index`],[`interactive`,``,`label`,`Items, nine dots`,3,`indexChange`,`count`,`index`,`maxVisible`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-pager`,2),xh(`indexChange`,function(l){return $f(e.index,l)||(e.index=l),l}),vi()(),ce(3,`div`,1)(4,`ngs-pager`,3),xh(`indexChange`,function(l){return $f(e.index,l)||(e.index=l),l}),vi()()()),t&2&&(Tt(2),Ot(`count`,20),Mh(`index`,e.index),Tt(2),Ot(`count`,20),Mh(`index`,e.index),Ot(`maxVisible`,9))},dependencies:[V],encapsulation:2})};var C={basic:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-12">
    <ngs-pager [count]="8" [maxVisible]="6" [(index)]="index" />
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" (click)="move(-1)">prev</button>
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" (click)="move(1)">next</button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pager</span> [<span class="hljs-attr">count</span>]=<span class="hljs-string">&quot;8&quot;</span> [<span class="hljs-attr">maxVisible</span>]=<span class="hljs-string">&quot;6&quot;</span> [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;index&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;move(-1)&quot;</span>&gt;</span>prev<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;move(1)&quot;</span>&gt;</span>next<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsPager } from '@bootlace/core/pager';

@Component({
  selector: 'docs-pager-basic',
  imports: [NgsPager, NgsButton],
  templateUrl: './index.html',
})
export class PagerBasicExample {
  protected readonly index = signal(0);

  protected move(step: number): void {
    this.index.update((index) => Math.min(Math.max(index + step, 0), 7));
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPager</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/pager&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-pager-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsPager</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PagerBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> index = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">move</span>(<span class="hljs-attr">step</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">index</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">index</span>) =&gt;</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">min</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(index + step, <span class="hljs-number">0</span>), <span class="hljs-number">7</span>));
  }
}`}},interactive:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-12">
    <ngs-pager [count]="4" [(index)]="index" interactive label="Slides" />
  </div>
  <div class="col-12">
    <p class="mb-0">Showing item {{ index() + 1 }} of 4</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pager</span> [<span class="hljs-attr">count</span>]=<span class="hljs-string">&quot;4&quot;</span> [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">interactive</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Slides&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Showing item {{ index() + 1 }} of 4<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsPager } from '@bootlace/core/pager';

@Component({
  selector: 'docs-pager-interactive',
  imports: [NgsPager],
  templateUrl: './index.html',
})
export class PagerInteractiveExample {
  protected readonly index = signal(1);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPager</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/pager&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-pager-interactive&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsPager</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PagerInteractiveExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> index = <span class="hljs-title function_">signal</span>(<span class="hljs-number">1</span>);
}`}},"max-visible":{html:{code:`<div class="row g-3">
  <div class="col-12">
    <ngs-pager [count]="20" [(index)]="index" interactive label="Items, five dots" />
  </div>
  <div class="col-12">
    <ngs-pager
      [count]="20"
      [(index)]="index"
      [maxVisible]="9"
      interactive
      label="Items, nine dots"
    />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pager</span> [<span class="hljs-attr">count</span>]=<span class="hljs-string">&quot;20&quot;</span> [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;index&quot;</span> <span class="hljs-attr">interactive</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Items, five dots&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pager</span>
      [<span class="hljs-attr">count</span>]=<span class="hljs-string">&quot;20&quot;</span>
      [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;index&quot;</span>
      [<span class="hljs-attr">maxVisible</span>]=<span class="hljs-string">&quot;9&quot;</span>
      <span class="hljs-attr">interactive</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Items, nine dots&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsPager } from '@bootlace/core/pager';

@Component({
  selector: 'docs-pager-max-visible',
  imports: [NgsPager],
  templateUrl: './index.html',
})
export class PagerMaxVisibleExample {
  protected readonly index = signal(8);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPager</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/pager&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-pager-max-visible&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsPager</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PagerMaxVisibleExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> index = <span class="hljs-title function_">signal</span>(<span class="hljs-number">8</span>);
}`}}};var k=class o{tab=Yn(`examples`);sources=C;basic=j;interactive=y;maxVisible=v;static ɵfac=function(t){return new(t||o)};static ɵcmp=ve({type:o,selectors:[[`docs-pager-page`]],inputs:{tab:[1,`tab`]},decls:64,vars:7,consts:[[`heading`,`Pager`,`package`,`@bootlace/core/pager`,`path`,`/components/pager`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`interactive`,`heading`,`Interactive`,3,`component`,`sources`],[`id`,`max-visible`,`heading`,`Many items`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,e){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A row of dots showing the current position among `),ce(3,`code`),Zf(4,`count`),vi(),Zf(5,` items, after Taiga UI's Pager. The position is `),ce(6,`code`),Zf(7,`[(index)]`),vi(),Zf(8,`, starting at 0. Display-only by default; set `),ce(9,`code`),Zf(10,`interactive`),vi(),Zf(11,` and the dots become buttons, which is what a carousel needs. `),vi(),ce(12,`docs-example`,2),Zf(13,` By default the dots are decorative and the pager announces "Slide n of N" as an image, so a position readout adds no tab stops. Drive it from your own controls through `),ce(14,`code`),Zf(15,`index`),vi(),Zf(16,`. `),vi(),ce(17,`docs-example`,3),Zf(18,` With `),ce(19,`code`),Zf(20,`interactive`),vi(),Zf(21,` each dot is a button named "Go to slide n" that sets `),ce(22,`code`),Zf(23,`index`),vi(),Zf(24,`, and the current one has `),ce(25,`code`),Zf(26,`aria-current`),vi(),Zf(27,`. Name the group with `),ce(28,`code`),Zf(29,`label`),vi(),Zf(30,`. `),vi(),ce(31,`docs-example`,4),Zf(32,` Only `),ce(33,`code`),Zf(34,`maxVisible`),vi(),Zf(35,` dots (default 5) are drawn. The window follows the current item and the outermost dots shrink where more items continue. `),vi(),ce(36,`section`,5)(37,`h2`,6),Zf(38,`Accessibility`),vi(),ce(39,`p`),Zf(40,` A display-only pager is `),ce(41,`code`),Zf(42,`role="img"`),vi(),Zf(43,` with an accessible name such as "Slide 2 of 5" (`),ce(44,`code`),Zf(45,`NGS_I18N.pager.position`),vi(),Zf(46,`, or your own `),ce(47,`code`),Zf(48,`label`),vi(),Zf(49,`). Its dots are not exposed individually. An interactive pager is a `),ce(50,`code`),Zf(51,`role="group"`),vi(),Zf(52,` of native buttons with the name from `),ce(53,`code`),Zf(54,`NGS_I18N.pager.goTo`),vi(),Zf(55,`; every dot is a tab stop with a hit area larger than the dot. The current dot is also marked with `),ce(56,`code`),Zf(57,`aria-current`),vi(),Zf(58,`, so colour is not the only cue. `),vi(),ce(59,`p`),Zf(60,` Dots animate their size and colour only while animations are on (`),ce(61,`code`),Zf(62,`prefers-reduced-motion`),vi(),Zf(63,` switches the transition off). `),vi()()()),t&2&&(Ot(`tab`,e.tab()),Tt(12),Ot(`component`,e.basic)(`sources`,e.sources.basic),Tt(5),Ot(`component`,e.interactive)(`sources`,e.sources.interactive),Tt(14),Ot(`component`,e.maxVisible)(`sources`,e.sources[`max-visible`]))},dependencies:[ue,pe],encapsulation:2})};export{k as PagerPage};