import{An as hg,At as W,Br as ui,Ct as U0,Gt as Yn,Jt as Zf,Tn as gf,Vt as Y3,Wr as ve,_r as q3,ei as xh,et as Ot,f as Cf,ln as cj,on as ce,q as Mh,qr as vi,r as $f,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./chunk-DycqepRM.js";import"./chunk-CfGjEUxa.js";import{n as q,r as x$1,t as N}from"./chunk-BOhm2mpp.js";import{s as y$1}from"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";import{t as f$1}from"./chunk-_QnoVoFv.js";function R(o,p){o&1&&(ce(0,`div`,2)(1,`a`,3),ui(`click`,function(t){return t.preventDefault()}),Zf(2,`Analytics`),vi(),ce(3,`a`,4),ui(`click`,function(t){return t.preventDefault()}),Zf(4,`Engagement`),vi(),ce(5,`a`,5),ui(`click`,function(t){return t.preventDefault()}),Zf(6,`Security`),vi()())}var y=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=ve({type:o,selectors:[[`docs-dropdown-hover-basic`]],decls:4,vars:1,consts:[[`menu`,``],[`ngsButton`,``,`ngsDropdownHover`,``,3,`ngsDropdown`],[`ngsMenu`,``],[`ngsMenuItem`,``,`href`,`#hover-analytics`,3,`click`],[`ngsMenuItem`,``,`href`,`#hover-engagement`,3,`click`],[`ngsMenuItem`,``,`href`,`#hover-security`,3,`click`]],template:function(e,t){if(e&1&&(ce(0,`button`,1),Zf(1,`Products`),vi(),U0(2,R,7,0,`ng-template`,null,0,cj)),e&2){let c=Cf(3);Ot(`ngsDropdown`,c)}},dependencies:[f$1,q,y$1,x$1,N],encapsulation:2})};function U(o,p){o&1&&(ce(0,`div`,4)(1,`button`,5),Zf(2,`First`),vi(),ce(3,`button`,5),Zf(4,`Second`),vi()())}var f=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=ve({type:o,selectors:[[`docs-dropdown-hover-delays`]],decls:9,vars:6,consts:[[`menu`,``],[1,`row`,`g-3`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,`ngsDropdownHover`,``,3,`ngsDropdown`,`ngsDropdownHoverShowDelay`,`ngsDropdownHoverHideDelay`],[`ngsMenu`,``],[`ngsMenuItem`,``]],template:function(e,t){if(e&1&&(ce(0,`div`,1)(1,`div`,2)(2,`button`,3),Zf(3,` Instant `),vi()(),ce(4,`div`,2)(5,`button`,3),Zf(6,` Patient `),vi()()(),U0(7,U,5,0,`ng-template`,null,0,cj)),e&2){let c=Cf(8);Tt(2),Ot(`ngsDropdown`,c)(`ngsDropdownHoverShowDelay`,0)(`ngsDropdownHoverHideDelay`,100),Tt(3),Ot(`ngsDropdown`,c)(`ngsDropdownHoverShowDelay`,600)(`ngsDropdownHoverHideDelay`,800)}},dependencies:[f$1,q,y$1,x$1,N],encapsulation:2})};function F(o,p){o&1&&(ce(0,`div`,3)(1,`button`,4),Zf(2,`Documentation`),vi(),ce(3,`button`,4),Zf(4,`Guides`),vi(),ce(5,`button`,4),Zf(6,`Community`),vi()())}var x=class o{open=W(!1);static ɵfac=function(e){return new(e||o)};static ɵcmp=ve({type:o,selectors:[[`docs-dropdown-hover-pinned`]],decls:6,vars:3,consts:[[`menu`,``],[`ngsButton`,``,`ngsDropdownHover`,``,3,`ngsDropdownOpenChange`,`ngsDropdown`,`ngsDropdownOpen`],[`aria-live`,`polite`,1,`mt-3`,`mb-0`],[`ngsMenu`,``],[`ngsMenuItem`,``]],template:function(e,t){if(e&1){let c=gf();ce(0,`button`,1),xh(`ngsDropdownOpenChange`,function(b){return q3(c),$f(t.open,b)||(t.open=b),Y3(b)}),Zf(1,` Resources
`),vi(),U0(2,F,7,0,`ng-template`,null,0,cj),ce(4,`p`,2),Zf(5),vi()}if(e&2){let c=Cf(3);Ot(`ngsDropdown`,c),Mh(`ngsDropdownOpen`,t.open),Tt(5),hg(`The menu is `,t.open()?`open`:`closed`,`.`)}},dependencies:[f$1,q,y$1,x$1,N],encapsulation:2})};var A={basic:{html:{code:`<button ngsButton [ngsDropdown]="menu" ngsDropdownHover>Products</button>

<ng-template #menu>
  <div ngsMenu>
    <a ngsMenuItem href="#hover-analytics" (click)="$event.preventDefault()">Analytics</a>
    <a ngsMenuItem href="#hover-engagement" (click)="$event.preventDefault()">Engagement</a>
    <a ngsMenuItem href="#hover-security" (click)="$event.preventDefault()">Security</a>
  </div>
</ng-template>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span> <span class="hljs-attr">ngsDropdownHover</span>&gt;</span>Products<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsMenuItem</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#hover-analytics&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;$event.preventDefault()&quot;</span>&gt;</span>Analytics<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsMenuItem</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#hover-engagement&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;$event.preventDefault()&quot;</span>&gt;</span>Engagement<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsMenuItem</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#hover-security&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;$event.preventDefault()&quot;</span>&gt;</span>Security<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsDropdown, NgsDropdownHover, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';

@Component({
  selector: 'docs-dropdown-hover-basic',
  imports: [NgsButton, NgsDropdown, NgsDropdownHover, NgsMenu, NgsMenuItem],
  templateUrl: './index.html',
})
export class DropdownHoverBasicExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownHover</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-hover-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownHover</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownHoverBasicExample</span> {}`}},delays:{html:{code:`<div class="row g-3">
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      [ngsDropdown]="menu"
      ngsDropdownHover
      [ngsDropdownHoverShowDelay]="0"
      [ngsDropdownHoverHideDelay]="100"
    >
      Instant
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      [ngsDropdown]="menu"
      ngsDropdownHover
      [ngsDropdownHoverShowDelay]="600"
      [ngsDropdownHoverHideDelay]="800"
    >
      Patient
    </button>
  </div>
</div>

<ng-template #menu>
  <div ngsMenu>
    <button ngsMenuItem>First</button>
    <button ngsMenuItem>Second</button>
  </div>
</ng-template>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span>
      <span class="hljs-attr">ngsDropdownHover</span>
      [<span class="hljs-attr">ngsDropdownHoverShowDelay</span>]=<span class="hljs-string">&quot;0&quot;</span>
      [<span class="hljs-attr">ngsDropdownHoverHideDelay</span>]=<span class="hljs-string">&quot;100&quot;</span>
    &gt;</span>
      Instant
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span>
      <span class="hljs-attr">ngsDropdownHover</span>
      [<span class="hljs-attr">ngsDropdownHoverShowDelay</span>]=<span class="hljs-string">&quot;600&quot;</span>
      [<span class="hljs-attr">ngsDropdownHoverHideDelay</span>]=<span class="hljs-string">&quot;800&quot;</span>
    &gt;</span>
      Patient
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>&gt;</span>First<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>&gt;</span>Second<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsDropdown, NgsDropdownHover, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';

@Component({
  selector: 'docs-dropdown-hover-delays',
  imports: [NgsButton, NgsDropdown, NgsDropdownHover, NgsMenu, NgsMenuItem],
  templateUrl: './index.html',
})
export class DropdownHoverDelaysExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownHover</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-hover-delays&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownHover</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownHoverDelaysExample</span> {}`}},pinned:{html:{code:`<button ngsButton [ngsDropdown]="menu" ngsDropdownHover [(ngsDropdownOpen)]="open">
  Resources
</button>

<ng-template #menu>
  <div ngsMenu>
    <button ngsMenuItem>Documentation</button>
    <button ngsMenuItem>Guides</button>
    <button ngsMenuItem>Community</button>
  </div>
</ng-template>

<p class="mt-3 mb-0" aria-live="polite">The menu is {{ open() ? 'open' : 'closed' }}.</p>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span> <span class="hljs-attr">ngsDropdownHover</span> [(<span class="hljs-attr">ngsDropdownOpen</span>)]=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>
  Resources
<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>&gt;</span>Documentation<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>&gt;</span>Guides<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>&gt;</span>Community<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3 mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>The menu is {{ open() ? &#x27;open&#x27; : &#x27;closed&#x27; }}.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsDropdown, NgsDropdownHover, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';

@Component({
  selector: 'docs-dropdown-hover-pinned',
  imports: [NgsButton, NgsDropdown, NgsDropdownHover, NgsMenu, NgsMenuItem],
  templateUrl: './index.html',
})
export class DropdownHoverPinnedExample {
  protected readonly open = signal(false);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownHover</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-hover-pinned&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownHover</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownHoverPinnedExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> open = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
}`}}};var O=class o{tab=Yn(`examples`);sources=A;basic=y;pinned=x;delays=f;static ɵfac=function(e){return new(e||o)};static ɵcmp=ve({type:o,selectors:[[`docs-dropdown-hover-page`]],inputs:{tab:[1,`tab`]},decls:27,vars:7,consts:[[`heading`,`Dropdown Hover`,`package`,`@bootlace/core/dropdown`,`path`,`/components/dropdown/dropdown-hover`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`pinned`,`heading`,`With open state`,3,`component`,`sources`],[`id`,`delays`,`heading`,`Delays`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(e,t){e&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` Add `),ce(3,`code`),Zf(4,`ngsDropdownHover`),vi(),Zf(5,` to an `),ce(6,`code`),Zf(7,`ngsDropdown`),vi(),Zf(8,` trigger to open its menu when the pointer rests on it. A short close delay lets the pointer cross the gap to the menu, and the menu stays open while the pointer is over it. Keyboard users get the regular dropdown behaviour. `),vi(),ce(9,`docs-example`,2),Zf(10,` Hover the button, then move onto the menu. Links work as items too. `),vi(),ce(11,`docs-example`,3)(12,`code`),Zf(13,`[(ngsDropdownOpen)]`),vi(),Zf(14,` works as on a click dropdown. A mouse click on the trigger after it opened on hover keeps the menu open instead of closing it; a second click closes it. `),vi(),ce(15,`docs-example`,4)(16,`code`),Zf(17,`ngsDropdownHoverShowDelay`),vi(),Zf(18,` (default 200 ms) and `),ce(19,`code`),Zf(20,`ngsDropdownHoverHideDelay`),vi(),Zf(21,` (default 300 ms) tune how eagerly the menu opens and closes. `),vi(),ce(22,`section`,5)(23,`h2`,6),Zf(24,`Accessibility`),vi(),ce(25,`p`),Zf(26,` Hover is an extra way in, never the only one. The trigger is a button with the usual menu attributes, so Enter, Space, Arrow Down and Arrow Up open the menu and Escape closes it and returns focus to the button, exactly as on a click dropdown. A menu that opened on hover does not take focus, and it is not closed by the pointer leaving while focus is inside it. Touch input does not open it on hover; a tap opens it as a click. Do not put essential actions only in a hover menu. `),vi()()()),e&2&&(Ot(`tab`,t.tab()),Tt(9),Ot(`component`,t.basic)(`sources`,t.sources.basic),Tt(2),Ot(`component`,t.pinned)(`sources`,t.sources.pinned),Tt(4),Ot(`component`,t.delays)(`sources`,t.sources.delays))},dependencies:[ue,pe],encapsulation:2})};export{O as DropdownHoverPage};