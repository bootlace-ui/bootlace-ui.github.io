import{At as W,Br as ui,Cr as rf,Gr as vf,Gt as Yn,Jt as Zf,Rr as ue,Wr as ve,an as cU,et as Ot,ir as nf,on as ce,p as DU,qr as vi,ri as yU,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import"./chunk-_QnoVoFv.js";import{t as y}from"./chunk-C5VGU11Q.js";var g=class c{search=yU;heart=cU;setting=DU;static ɵfac=function(a){return new(a||c)};static ɵcmp=ve({type:c,selectors:[[`docs-icon-button-basic`]],decls:9,vars:4,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`ngsIconButton`,``,`label`,`Search`,3,`icon`],[`ngsIconButton`,``,`label`,`Like`,`color`,`danger`,`variant`,`subtle`,3,`icon`],[`ngsIconButton`,``,`label`,`Settings`,`variant`,`outline`,`color`,`secondary`,3,`icon`],[`ngsIconButton`,``,`label`,`Search the docs`,`href`,`/getting-started`,`variant`,`text`,3,`icon`]],template:function(a,t){a&1&&(ce(0,`div`,0)(1,`div`,1),ue(2,`button`,2),vi(),ce(3,`div`,1),ue(4,`button`,3),vi(),ce(5,`div`,1),ue(6,`button`,4),vi(),ce(7,`div`,1),ue(8,`a`,5),vi()()),a&2&&(Tt(2),Ot(`icon`,t.search),Tt(2),Ot(`icon`,t.heart),Tt(2),Ot(`icon`,t.setting),Tt(2),Ot(`icon`,t.search))},dependencies:[y],encapsulation:2})};var m=class c{busy=W(!1);setting=DU;refresh(){this.busy.set(!0),setTimeout(()=>this.busy.set(!1),1500)}static ɵfac=function(a){return new(a||c)};static ɵcmp=ve({type:c,selectors:[[`docs-icon-button-loading`]],decls:5,vars:3,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`ngsIconButton`,``,`label`,`Refresh`,`variant`,`outline`,3,`click`,`icon`,`loading`],[`ngsIconButton`,``,`label`,`Unavailable`,`variant`,`outline`,`disabled`,``,3,`icon`]],template:function(a,t){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),ui(`click`,function(){return t.refresh()}),vi()(),ce(3,`div`,1),ue(4,`button`,3),vi()()),a&2&&(Tt(2),Ot(`icon`,t.setting)(`loading`,t.busy()),Tt(2),Ot(`icon`,t.setting))},dependencies:[y],encapsulation:2})};function N(c,p){if(c&1&&(ce(0,`div`,1),ue(1,`button`,2),vi()),c&2){let a=p.$implicit,t=vf();Tt(),Ot(`icon`,t.search)(`label`,`Search, `+a)(`size`,a)}}var j=class c{sizes=[`xs`,`sm`,`md`,`lg`];search=yU;static ɵfac=function(a){return new(a||c)};static ɵcmp=ve({type:c,selectors:[[`docs-icon-button-sizes`]],decls:3,vars:0,consts:[[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[`ngsIconButton`,``,3,`icon`,`label`,`size`]],template:function(a,t){a&1&&(ce(0,`div`,0),of(1,N,2,3,`div`,1,nf),vi()),a&2&&(Tt(),rf(t.sizes))},dependencies:[y],encapsulation:2})};var z={basic:{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button ngsIconButton [icon]="search" label="Search"></button>
  </div>
  <div class="col-auto">
    <button ngsIconButton [icon]="heart" label="Like" color="danger" variant="subtle"></button>
  </div>
  <div class="col-auto">
    <button
      ngsIconButton
      [icon]="setting"
      label="Settings"
      variant="outline"
      color="secondary"
    ></button>
  </div>
  <div class="col-auto">
    <a
      ngsIconButton
      [icon]="search"
      label="Search the docs"
      href="/getting-started"
      variant="text"
    ></a>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsIconButton</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Search&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsIconButton</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;heart&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Like&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsIconButton</span>
      [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;setting&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Settings&quot;</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;secondary&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span>
      <span class="hljs-attr">ngsIconButton</span>
      [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;search&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Search the docs&quot;</span>
      <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;/getting-started&quot;</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;text&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsIconButton } from '@bootlace/core/button';
import { ngsIconHeart, ngsIconSearch, ngsIconSetting } from '@bootlace/icons';

@Component({
  selector: 'docs-icon-button-basic',
  imports: [NgsIconButton],
  templateUrl: './index.html',
})
export class IconButtonBasicExample {
  protected readonly search = ngsIconSearch;
  protected readonly heart = ngsIconHeart;
  protected readonly setting = ngsIconSetting;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIconButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconHeart, ngsIconSearch, ngsIconSetting } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-icon-button-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsIconButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">IconButtonBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> search = ngsIconSearch;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> heart = ngsIconHeart;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> setting = ngsIconSetting;
}`}},loading:{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button
      ngsIconButton
      [icon]="setting"
      label="Refresh"
      variant="outline"
      [loading]="busy()"
      (click)="refresh()"
    ></button>
  </div>
  <div class="col-auto">
    <button ngsIconButton [icon]="setting" label="Unavailable" variant="outline" disabled></button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsIconButton</span>
      [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;setting&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Refresh&quot;</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;busy()&quot;</span>
      (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;refresh()&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsIconButton</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;setting&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Unavailable&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsIconButton } from '@bootlace/core/button';
import { ngsIconSetting } from '@bootlace/icons';

@Component({
  selector: 'docs-icon-button-loading',
  imports: [NgsIconButton],
  templateUrl: './index.html',
})
export class IconButtonLoadingExample {
  protected readonly busy = signal(false);
  protected readonly setting = ngsIconSetting;

  protected refresh(): void {
    this.busy.set(true);
    setTimeout(() => this.busy.set(false), 1500);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIconButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconSetting } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-icon-button-loading&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsIconButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">IconButtonLoadingExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> busy = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> setting = ngsIconSetting;

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">refresh</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">busy</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">busy</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">false</span>), <span class="hljs-number">1500</span>);
  }
}`}},sizes:{html:{code:`<div class="row g-2 align-items-center">
  @for (size of sizes; track size) {
    <div class="col-auto">
      <button ngsIconButton [icon]="search" [label]="'Search, ' + size" [size]="size"></button>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
  @for (size of sizes; track size) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsIconButton</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;search&quot;</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;Search, &#x27; + size&quot;</span> [<span class="hljs-attr">size</span>]=<span class="hljs-string">&quot;size&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButtonSize, NgsIconButton } from '@bootlace/core/button';
import { ngsIconSearch } from '@bootlace/icons';

@Component({
  selector: 'docs-icon-button-sizes',
  imports: [NgsIconButton],
  templateUrl: './index.html',
})
export class IconButtonSizesExample {
  protected readonly sizes: NgsButtonSize[] = ['xs', 'sm', 'md', 'lg'];
  protected readonly search = ngsIconSearch;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButtonSize</span>, <span class="hljs-title class_">NgsIconButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconSearch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-icon-button-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsIconButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">IconButtonSizesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">sizes</span>: <span class="hljs-title class_">NgsButtonSize</span>[] = [<span class="hljs-string">&#x27;xs&#x27;</span>, <span class="hljs-string">&#x27;sm&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;lg&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> search = ngsIconSearch;
}`}}};var _=class c{tab=Yn(`examples`);sources=z;basic=g;sizes=j;loading=m;static ɵfac=function(a){return new(a||c)};static ɵcmp=ve({type:c,selectors:[[`docs-icon-button-page`]],inputs:{tab:[1,`tab`]},decls:35,vars:7,consts:[[`heading`,`Icon Button`,`package`,`@bootlace/core/button`,`path`,`/components/buttons/icon-button`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`id`,`loading`,`heading`,`Loading and disabled`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(a,t){a&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A square button that shows only an icon, built on `),ce(3,`code`),Zf(4,`.btn`),vi(),Zf(5,` and `),ce(6,`code`),Zf(7,`.btn-icon`),vi(),Zf(8,` with `),ce(9,`code`),Zf(10,`ngs-icon`),vi(),Zf(11,`. The `),ce(12,`code`),Zf(13,`label`),vi(),Zf(14,` input is required. `),vi(),ce(15,`docs-example`,2),Zf(16,` Pass an icon from `),ce(17,`code`),Zf(18,`@bootlace/icons`),vi(),Zf(19,`. It takes the same colours and variants as Button, and also works on a link. `),vi(),ce(20,`docs-example`,3),Zf(21,` The button stays square at every size. `),vi(),ce(22,`docs-example`,4),Zf(23,` While loading, a spinner replaces the icon. `),vi(),ce(24,`section`,5)(25,`h2`,6),Zf(26,`Accessibility`),vi(),ce(27,`p`),Zf(28,` An icon button has no visible text, so `),ce(29,`code`),Zf(30,`label`),vi(),Zf(31,` is required and becomes the `),ce(32,`code`),Zf(33,`aria-label`),vi(),Zf(34,`. The icon itself is decorative and hidden from assistive technology. Describe the action ("Search"), not the picture ("Magnifier"). Loading and disabled states behave as on Button. `),vi()()()),a&2&&(Ot(`tab`,t.tab()),Tt(15),Ot(`component`,t.basic)(`sources`,t.sources.basic),Tt(5),Ot(`component`,t.sizes)(`sources`,t.sources.sizes),Tt(2),Ot(`component`,t.loading)(`sources`,t.sources.loading))},dependencies:[ue$1,pe],encapsulation:2})};export{_ as IconButtonPage};