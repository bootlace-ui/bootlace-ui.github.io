import{An as hg,At as W,Br as ui,C as HU,Cr as rf,Ct as U0,Gr as vf,Gt as Yn,Ht as YF,In as jh,Jt as Zf,Rr as ue,Sn as fh,Tn as gf,Vt as Y3,W as Ll,Wr as ve,Yt as _F,_r as q3,ei as xh,et as Ot,f as Cf,ir as nf,ln as cj,nt as PF,on as ce,q as Mh,qr as vi,r as $f,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./chunk-DycqepRM.js";import"./chunk-CfGjEUxa.js";import{n as q,r as x,t as N}from"./chunk-BOhm2mpp.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";import{t as z}from"./chunk-y4SNPthP.js";function ss(l,p){if(l&1){let t=gf();ce(0,`div`,3)(1,`div`,4),Zf(2,`Document`),vi(),ce(3,`button`,5),ui(`click`,function(){q3(t);let c=vf();return Y3(c.choose(`Edit`))}),Zf(4,`Edit`),vi(),ce(5,`button`,5),ui(`click`,function(){q3(t);let c=vf();return Y3(c.choose(`Duplicate`))}),Zf(6,`Duplicate`),vi(),ce(7,`button`,6),Zf(8,`Archive`),vi(),ue(9,`div`,7),ce(10,`button`,5),ui(`click`,function(){q3(t);let c=vf();return Y3(c.choose(`Delete`))}),Zf(11,`Delete`),vi()()}}var P=class l{last=W(null);choose(p){this.last.set(p)}static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-dropdown-basic`]],decls:6,vars:2,consts:[[`menu`,``],[`ngsButton`,``,3,`ngsDropdown`],[`aria-live`,`polite`,1,`mt-3`,`mb-0`],[`ngsMenu`,``],[1,`menu-header`],[`ngsMenuItem`,``,3,`click`],[`ngsMenuItem`,``,`disabled`,``],[`role`,`separator`,1,`menu-divider`]],template:function(t,e){if(t&1&&(ce(0,`button`,1),Zf(1,`Actions`),vi(),U0(2,ss,12,0,`ng-template`,null,0,cj),ce(4,`p`,2),Zf(5),vi()),t&2){let c=Cf(3);Ot(`ngsDropdown`,c),Tt(5),hg(`Last action: `,e.last()??`none`)}},dependencies:[f,q,x,N],encapsulation:2})};function ns(l,p){l&1&&(ce(0,`div`,7)(1,`button`,8),Zf(2,`Open`),vi(),ce(3,`button`,8),Zf(4,`Rename`),vi()())}var V=class l{open=W(!1);locked=W(!1);static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-dropdown-controlled`]],decls:14,vars:6,consts:[[`menu`,``],[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,3,`ngsDropdownOpenChange`,`ngsDropdown`,`ngsDropdownOpen`,`ngsDropdownDisabled`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[3,`valueChange`,`value`],[`aria-live`,`polite`,1,`mt-3`,`mb-0`],[`ngsMenu`,``],[`ngsMenuItem`,``]],template:function(t,e){if(t&1){let c=gf();ce(0,`div`,1)(1,`div`,2)(2,`button`,3),xh(`ngsDropdownOpenChange`,function(E){return q3(c),$f(e.open,E)||(e.open=E),Y3(E)}),Zf(3,` Menu `),vi(),U0(4,ns,5,0,`ng-template`,null,0,cj),vi(),ce(6,`div`,2)(7,`button`,4),ui(`click`,function(){return e.open.set(!e.open())}),Zf(8),vi()(),ce(9,`div`,2)(10,`ngs-switch`,5),xh(`valueChange`,function(E){return q3(c),$f(e.locked,E)||(e.locked=E),Y3(E)}),Zf(11,`Disabled`),vi()()(),ce(12,`p`,6),Zf(13),vi()}if(t&2){let c=Cf(5);Tt(2),Ot(`ngsDropdown`,c),Mh(`ngsDropdownOpen`,e.open),Ot(`ngsDropdownDisabled`,e.locked()),Tt(6),hg(` `,e.open()?`Close`:`Open`,` from code `),Tt(2),Mh(`value`,e.locked),Tt(3),hg(`The menu is `,e.open()?`open`:`closed`,`.`)}},dependencies:[f,q,x,N,z],encapsulation:2})};function as(l,p){if(l&1&&(ce(0,`div`,2)(1,`button`,3),Zf(2),vi()()),l&2){let t=p.$implicit;vf();let e=Cf(4);Tt(),Ot(`ngsDropdown`,e)(`ngsDropdownPlacement`,t),Tt(),hg(` `,t,` `)}}function ts(l,p){l&1&&(ce(0,`div`,4)(1,`button`,5),Zf(2,`First`),vi(),ce(3,`button`,5),Zf(4,`Second`),vi(),ce(5,`button`,5),Zf(6,`Third`),vi()())}var R=class l{placements=[`bottom-start`,`bottom-end`,`top-start`,`end-top`,`start-top`];static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-dropdown-placement`]],decls:5,vars:0,consts:[[`menu`,``],[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`ngsDropdown`,`ngsDropdownPlacement`],[`ngsMenu`,``],[`ngsMenuItem`,``]],template:function(t,e){t&1&&(ce(0,`div`,1),of(1,as,3,3,`div`,2,nf),vi(),U0(3,ts,7,0,`ng-template`,null,0,cj)),t&2&&(Tt(),rf(e.placements))},dependencies:[f,q,x,N],encapsulation:2})};var es=(l,p)=>p.title;function ls(l,p){if(l&1){let t=gf();ce(0,`button`,5),ui(`click`,function(){let c=q3(t).$implicit,D=vf(2);return Y3(D.choose(c.title))}),ue(1,`ngs-icon`,6),ce(2,`span`,7),Zf(3),ce(4,`span`,8),Zf(5),vi()()()}if(l&2){let t=p.$implicit;Tt(),Ot(`icon`,t.icon),Tt(2),hg(` `,t.title,` `),Tt(2),fh(t.description)}}function os(l,p){if(l&1&&(ce(0,`div`,3),of(1,ls,6,3,`button`,4,es),vi()),l&2){let t=vf();Tt(),rf(t.items)}}var O=class l{items=[{title:`Create task`,description:`Draft a follow-up item for the team`,icon:PF},{title:`Share update`,description:`Post the latest progress to the channel`,icon:HU},{title:`Export report`,description:`Download everything as a CSV file`,icon:YF}];chosen=W(null);choose(p){this.chosen.set(p)}static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-dropdown-rich`]],decls:6,vars:2,consts:[[`menu`,``],[`ngsButton`,``,3,`ngsDropdown`],[`aria-live`,`polite`,1,`mt-3`,`mb-0`],[`ngsMenu`,``],[`ngsMenuItem`,``],[`ngsMenuItem`,``,3,`click`],[1,`menu-item-icon`,3,`icon`],[1,`menu-item-content`],[1,`menu-item-description`]],template:function(t,e){if(t&1&&(ce(0,`button`,1),Zf(1,`Choose`),vi(),U0(2,os,3,0,`ng-template`,null,0,cj),ce(4,`p`,2),Zf(5),vi()),t&2){let c=Cf(3);Ot(`ngsDropdown`,c),Tt(5),hg(`Chosen: `,e.chosen()??`none`)}},dependencies:[f,q,x,N,Ll],encapsulation:2})};function ps(l,p){if(l&1){let t=gf();ce(0,`div`,6)(1,`button`,7),ui(`click`,function(){q3(t);let c=vf();return Y3(c.toolbar.set(!c.toolbar()))}),ce(2,`span`,8),Zf(3,`Toolbar`),vi(),ue(4,`ngs-icon`,9),vi(),ce(5,`button`,7),ui(`click`,function(){q3(t);let c=vf();return Y3(c.sidebar.set(!c.sidebar()))}),ce(6,`span`,8),Zf(7,`Sidebar`),vi(),ue(8,`ngs-icon`,9),vi()()}if(l&2){let t=vf();Tt(),Ot(`checked`,t.toolbar()),Tt(3),Ot(`icon`,t.check),Tt(),Ot(`checked`,t.sidebar()),Tt(3),Ot(`icon`,t.check)}}function cs(l,p){if(l&1){let t=gf();ce(0,`button`,12),ui(`click`,function(){let c=q3(t).$implicit,D=vf(2);return Y3(D.order.set(c))}),ce(1,`span`,8),Zf(2),vi(),ue(3,`ngs-icon`,9),vi()}if(l&2){let t=p.$implicit,e=vf(2);Ot(`checked`,e.order()===t),Tt(2),fh(t),Tt(),Ot(`icon`,e.check)}}function is(l,p){if(l&1&&(ce(0,`div`,10),of(1,cs,4,3,`button`,11,nf),vi()),l&2){let t=vf();Tt(),rf(t.orders)}}var A=class l{check=_F;orders=[`Name`,`Date`,`Size`];toolbar=W(!0);sidebar=W(!1);order=W(`Name`);static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-dropdown-selectable`]],decls:13,vars:5,consts:[[`view`,``],[`sort`,``],[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`ngsButton`,``,3,`ngsDropdown`],[1,`mt-3`,`mb-0`],[`ngsMenu`,``,`label`,`View options`],[`ngsMenuItem`,`checkbox`,3,`click`,`checked`],[1,`menu-item-content`],[1,`menu-item-check`,3,`icon`],[`ngsMenu`,``,`label`,`Sort order`],[`ngsMenuItem`,`radio`,3,`checked`],[`ngsMenuItem`,`radio`,3,`click`,`checked`]],template:function(t,e){if(t&1&&(ce(0,`div`,2)(1,`div`,3)(2,`button`,4),Zf(3,`View`),vi(),U0(4,ps,9,4,`ng-template`,null,0,cj),ce(6,`p`,5),Zf(7),vi()(),ce(8,`div`,3)(9,`button`,4),Zf(10),vi(),U0(11,is,3,0,`ng-template`,null,1,cj),vi()()),t&2){let c=Cf(5),D=Cf(12);Tt(2),Ot(`ngsDropdown`,c),Tt(5),jh(` Toolbar `,e.toolbar()?`on`:`off`,`, sidebar `,e.sidebar()?`on`:`off`,` `),Tt(2),Ot(`ngsDropdown`,D),Tt(),hg(`Sort by `,e.order())}},dependencies:[f,q,x,N,Ll],encapsulation:2})};var Y={basic:{html:{code:`<button ngsButton [ngsDropdown]="menu">Actions</button>

<ng-template #menu>
  <div ngsMenu>
    <div class="menu-header">Document</div>
    <button ngsMenuItem (click)="choose('Edit')">Edit</button>
    <button ngsMenuItem (click)="choose('Duplicate')">Duplicate</button>
    <button ngsMenuItem disabled>Archive</button>
    <div class="menu-divider" role="separator"></div>
    <button ngsMenuItem (click)="choose('Delete')">Delete</button>
  </div>
</ng-template>

<p class="mt-3 mb-0" aria-live="polite">Last action: {{ last() ?? 'none' }}</p>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span>&gt;</span>Actions<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-header&quot;</span>&gt;</span>Document<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;choose(&#x27;Edit&#x27;)&quot;</span>&gt;</span>Edit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;choose(&#x27;Duplicate&#x27;)&quot;</span>&gt;</span>Duplicate<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> <span class="hljs-attr">disabled</span>&gt;</span>Archive<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-divider&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;separator&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;choose(&#x27;Delete&#x27;)&quot;</span>&gt;</span>Delete<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3 mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Last action: {{ last() ?? &#x27;none&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsDropdown, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';

@Component({
  selector: 'docs-dropdown-basic',
  imports: [NgsButton, NgsDropdown, NgsMenu, NgsMenuItem],
  templateUrl: './index.html',
})
export class DropdownBasicExample {
  protected readonly last = signal<string | null>(null);

  protected choose(action: string): void {
    this.last.set(action);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> last = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">choose</span>(<span class="hljs-attr">action</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">last</span>.<span class="hljs-title function_">set</span>(action);
  }
}`}},controlled:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-auto">
    <button
      ngsButton
      [ngsDropdown]="menu"
      [(ngsDropdownOpen)]="open"
      [ngsDropdownDisabled]="locked()"
    >
      Menu
    </button>
    <ng-template #menu>
      <div ngsMenu>
        <button ngsMenuItem>Open</button>
        <button ngsMenuItem>Rename</button>
      </div>
    </ng-template>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="open.set(!open())">
      {{ open() ? 'Close' : 'Open' }} from code
    </button>
  </div>
  <div class="col-auto">
    <ngs-switch [(value)]="locked">Disabled</ngs-switch>
  </div>
</div>
<p class="mt-3 mb-0" aria-live="polite">The menu is {{ open() ? 'open' : 'closed' }}.</p>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span>
      [(<span class="hljs-attr">ngsDropdownOpen</span>)]=<span class="hljs-string">&quot;open&quot;</span>
      [<span class="hljs-attr">ngsDropdownDisabled</span>]=<span class="hljs-string">&quot;locked()&quot;</span>
    &gt;</span>
      Menu
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>&gt;</span>Open<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>&gt;</span>Rename<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open.set(!open())&quot;</span>&gt;</span>
      {{ open() ? &#x27;Close&#x27; : &#x27;Open&#x27; }} from code
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;locked&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3 mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>The menu is {{ open() ? &#x27;open&#x27; : &#x27;closed&#x27; }}.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsDropdown, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';
import { NgsSwitch } from '@bootlace/core/switch';

@Component({
  selector: 'docs-dropdown-controlled',
  imports: [NgsButton, NgsDropdown, NgsMenu, NgsMenuItem, NgsSwitch],
  templateUrl: './index.html',
})
export class DropdownControlledExample {
  protected readonly open = signal(false);
  protected readonly locked = signal<boolean | null>(false);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSwitch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/switch&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-controlled&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>, <span class="hljs-title class_">NgsSwitch</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownControlledExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> open = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> locked = signal&lt;<span class="hljs-built_in">boolean</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">false</span>);
}`}},placement:{html:{code:`<div class="row g-2">
  @for (placement of placements; track placement) {
    <div class="col-auto">
      <button ngsButton variant="outline" [ngsDropdown]="menu" [ngsDropdownPlacement]="placement">
        {{ placement }}
      </button>
    </div>
  }
</div>

<ng-template #menu>
  <div ngsMenu>
    <button ngsMenuItem>First</button>
    <button ngsMenuItem>Second</button>
    <button ngsMenuItem>Third</button>
  </div>
</ng-template>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @for (placement of placements; track placement) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span> [<span class="hljs-attr">ngsDropdownPlacement</span>]=<span class="hljs-string">&quot;placement&quot;</span>&gt;</span>
        {{ placement }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>&gt;</span>First<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>&gt;</span>Second<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>&gt;</span>Third<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsPlacement } from '@bootlace/core/cdk';
import { NgsDropdown, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';

@Component({
  selector: 'docs-dropdown-placement',
  imports: [NgsButton, NgsDropdown, NgsMenu, NgsMenuItem],
  templateUrl: './index.html',
})
export class DropdownPlacementExample {
  protected readonly placements: NgsPlacement[] = [
    'bottom-start',
    'bottom-end',
    'top-start',
    'end-top',
    'start-top',
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPlacement</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/cdk&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-placement&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownPlacementExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">placements</span>: <span class="hljs-title class_">NgsPlacement</span>[] = [
    <span class="hljs-string">&#x27;bottom-start&#x27;</span>,
    <span class="hljs-string">&#x27;bottom-end&#x27;</span>,
    <span class="hljs-string">&#x27;top-start&#x27;</span>,
    <span class="hljs-string">&#x27;end-top&#x27;</span>,
    <span class="hljs-string">&#x27;start-top&#x27;</span>,
  ];
}`}},rich:{html:{code:`<button ngsButton [ngsDropdown]="menu">Choose</button>

<ng-template #menu>
  <div ngsMenu>
    @for (item of items; track item.title) {
      <button ngsMenuItem (click)="choose(item.title)">
        <ngs-icon class="menu-item-icon" [icon]="item.icon" />
        <span class="menu-item-content">
          {{ item.title }}
          <span class="menu-item-description">{{ item.description }}</span>
        </span>
      </button>
    }
  </div>
</ng-template>

<p class="mt-3 mb-0" aria-live="polite">Chosen: {{ chosen() ?? 'none' }}</p>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span>&gt;</span>Choose<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
    @for (item of items; track item.title) {
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;choose(item.title)&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-icon&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;item.icon&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-content&quot;</span>&gt;</span>
          {{ item.title }}
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-description&quot;</span>&gt;</span>{{ item.description }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3 mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Chosen: {{ chosen() ?? &#x27;none&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsDropdown, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';
import { NgsIcon } from '@bootlace/core/icon';
import { ngsIconComment, ngsIconDownload, ngsIconShare } from '@bootlace/icons';

@Component({
  selector: 'docs-dropdown-rich',
  imports: [NgsButton, NgsDropdown, NgsMenu, NgsMenuItem, NgsIcon],
  templateUrl: './index.html',
})
export class DropdownRichExample {
  protected readonly items = [
    {
      title: 'Create task',
      description: 'Draft a follow-up item for the team',
      icon: ngsIconComment,
    },
    {
      title: 'Share update',
      description: 'Post the latest progress to the channel',
      icon: ngsIconShare,
    },
    {
      title: 'Export report',
      description: 'Download everything as a CSV file',
      icon: ngsIconDownload,
    },
  ];
  protected readonly chosen = signal<string | null>(null);

  protected choose(title: string): void {
    this.chosen.set(title);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconComment, ngsIconDownload, ngsIconShare } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-rich&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>, <span class="hljs-title class_">NgsIcon</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownRichExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> items = [
    {
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Create task&#x27;</span>,
      <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;Draft a follow-up item for the team&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconComment,
    },
    {
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Share update&#x27;</span>,
      <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;Post the latest progress to the channel&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconShare,
    },
    {
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Export report&#x27;</span>,
      <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;Download everything as a CSV file&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconDownload,
    },
  ];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> chosen = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">choose</span>(<span class="hljs-attr">title</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">chosen</span>.<span class="hljs-title function_">set</span>(title);
  }
}`}},selectable:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <button ngsButton [ngsDropdown]="view">View</button>
    <ng-template #view>
      <div ngsMenu label="View options">
        <button ngsMenuItem="checkbox" [checked]="toolbar()" (click)="toolbar.set(!toolbar())">
          <span class="menu-item-content">Toolbar</span>
          <ngs-icon class="menu-item-check" [icon]="check" />
        </button>
        <button ngsMenuItem="checkbox" [checked]="sidebar()" (click)="sidebar.set(!sidebar())">
          <span class="menu-item-content">Sidebar</span>
          <ngs-icon class="menu-item-check" [icon]="check" />
        </button>
      </div>
    </ng-template>
    <p class="mt-3 mb-0">
      Toolbar {{ toolbar() ? 'on' : 'off' }}, sidebar {{ sidebar() ? 'on' : 'off' }}
    </p>
  </div>
  <div class="col-12 md:col-6">
    <button ngsButton [ngsDropdown]="sort">Sort by {{ order() }}</button>
    <ng-template #sort>
      <div ngsMenu label="Sort order">
        @for (option of orders; track option) {
          <button ngsMenuItem="radio" [checked]="order() === option" (click)="order.set(option)">
            <span class="menu-item-content">{{ option }}</span>
            <ngs-icon class="menu-item-check" [icon]="check" />
          </button>
        }
      </div>
    </ng-template>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;view&quot;</span>&gt;</span>View<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">view</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;View options&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>=<span class="hljs-string">&quot;checkbox&quot;</span> [<span class="hljs-attr">checked</span>]=<span class="hljs-string">&quot;toolbar()&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;toolbar.set(!toolbar())&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-content&quot;</span>&gt;</span>Toolbar<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-check&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;check&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>=<span class="hljs-string">&quot;checkbox&quot;</span> [<span class="hljs-attr">checked</span>]=<span class="hljs-string">&quot;sidebar()&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;sidebar.set(!sidebar())&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-content&quot;</span>&gt;</span>Sidebar<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-check&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;check&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3 mb-0&quot;</span>&gt;</span>
      Toolbar {{ toolbar() ? &#x27;on&#x27; : &#x27;off&#x27; }}, sidebar {{ sidebar() ? &#x27;on&#x27; : &#x27;off&#x27; }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;sort&quot;</span>&gt;</span>Sort by {{ order() }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">sort</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sort order&quot;</span>&gt;</span>
        @for (option of orders; track option) {
          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span>=<span class="hljs-string">&quot;radio&quot;</span> [<span class="hljs-attr">checked</span>]=<span class="hljs-string">&quot;order() === option&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;order.set(option)&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-content&quot;</span>&gt;</span>{{ option }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-check&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;check&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        }
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsDropdown, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';
import { NgsIcon } from '@bootlace/core/icon';
import { ngsIconCheck } from '@bootlace/icons';

@Component({
  selector: 'docs-dropdown-selectable',
  imports: [NgsButton, NgsDropdown, NgsMenu, NgsMenuItem, NgsIcon],
  templateUrl: './index.html',
})
export class DropdownSelectableExample {
  protected readonly check = ngsIconCheck;
  protected readonly orders = ['Name', 'Date', 'Size'];
  protected readonly toolbar = signal(true);
  protected readonly sidebar = signal(false);
  protected readonly order = signal('Name');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconCheck } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-selectable&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>, <span class="hljs-title class_">NgsIcon</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownSelectableExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> check = ngsIconCheck;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> orders = [<span class="hljs-string">&#x27;Name&#x27;</span>, <span class="hljs-string">&#x27;Date&#x27;</span>, <span class="hljs-string">&#x27;Size&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> toolbar = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sidebar = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> order = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;Name&#x27;</span>);
}`}}};var Z=class l{tab=Yn(`examples`);sources=Y;basic=P;rich=O;selectable=A;placement=R;controlled=V;static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-dropdown-page`]],inputs:{tab:[1,`tab`]},decls:102,vars:11,consts:[[`heading`,`Dropdown`,`package`,`@bootlace/core/dropdown`,`path`,`/components/dropdown/dropdown`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`rich`,`heading`,`Icons and descriptions`,3,`component`,`sources`],[`id`,`selectable`,`heading`,`Checkbox and radio items`,3,`component`,`sources`],[`id`,`placement`,`heading`,`Placement`,3,`component`,`sources`],[`id`,`controlled`,`heading`,`Controlled and disabled`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,e){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` Opens a floating menu next to a button, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.menu`),vi(),Zf(5,`. Put `),ce(6,`code`),Zf(7,`[ngsDropdown]`),vi(),Zf(8,` on the trigger and give it a template that holds an `),ce(9,`code`),Zf(10,`ngsMenu`),vi(),Zf(11,` of `),ce(12,`code`),Zf(13,`ngsMenuItem`),vi(),Zf(14,`s. It follows the WAI-ARIA menu button pattern: arrow keys move through the items, Escape closes the menu and returns focus to the button. The menu and item directives are reusable on their own. `),vi(),ce(15,`docs-example`,2),Zf(16,` A menu with a header, a divider and a disabled item. Bootstrap's `),ce(17,`code`),Zf(18,`.menu-header`),vi(),Zf(19,` and `),ce(20,`code`),Zf(21,`.menu-divider`),vi(),Zf(22,` are plain markup. Activating an item closes the menu. `),vi(),ce(23,`docs-example`,3),Zf(24,` Items can hold an icon and a second line with Bootstrap's `),ce(25,`code`),Zf(26,`.menu-item-icon`),vi(),Zf(27,`, `),ce(28,`code`),Zf(29,`.menu-item-content`),vi(),Zf(30,` and `),ce(31,`code`),Zf(32,`.menu-item-description`),vi(),Zf(33,`. `),vi(),ce(34,`docs-example`,4),Zf(35,` Write `),ce(36,`code`),Zf(37,`ngsMenuItem="checkbox"`),vi(),Zf(38,` or `),ce(39,`code`),Zf(40,`"radio"`),vi(),Zf(41,` and bind `),ce(42,`code`),Zf(43,`checked`),vi(),Zf(44,`; the item shows Bootstrap's check mark. A checkbox item keeps the menu open, a radio item closes it. `),vi(),ce(45,`docs-example`,5)(46,`code`),Zf(47,`ngsDropdownPlacement`),vi(),Zf(48,` picks the side and alignment. The menu flips to the opposite side when it does not fit in the viewport. `),vi(),ce(49,`docs-example`,6)(50,`code`),Zf(51,`[(ngsDropdownOpen)]`),vi(),Zf(52,` reads and sets the open state, and `),ce(53,`code`),Zf(54,`ngsDropdownDisabled`),vi(),Zf(55,` stops the menu from opening (the inputs keep their `),ce(56,`code`),Zf(57,`ngsDropdown`),vi(),Zf(58,` prefix because the directive sits on the trigger, and a plain `),ce(59,`code`),Zf(60,`disabled`),vi(),Zf(61,` would disable the host button as well). With `),ce(62,`code`),Zf(63,`ngsDropdownManual`),vi(),Zf(64,` clicks and keys do nothing and the app alone decides. `),vi(),ce(65,`section`,7)(66,`h2`,8),Zf(67,`Accessibility`),vi(),ce(68,`p`),Zf(69,` The trigger gets `),ce(70,`code`),Zf(71,`aria-haspopup="menu"`),vi(),Zf(72,`, `),ce(73,`code`),Zf(74,`aria-expanded`),vi(),Zf(75,` and, while open, `),ce(76,`code`),Zf(77,`aria-controls`),vi(),Zf(78,`. The panel is `),ce(79,`code`),Zf(80,`role="menu"`),vi(),Zf(81,` with `),ce(82,`code`),Zf(83,`menuitem`),vi(),Zf(84,`, `),ce(85,`code`),Zf(86,`menuitemcheckbox`),vi(),Zf(87,` or `),ce(88,`code`),Zf(89,`menuitemradio`),vi(),Zf(90,` items, and the trigger names it unless you set `),ce(91,`code`),Zf(92,`label`),vi(),Zf(93,` on `),ce(94,`code`),Zf(95,`ngsMenu`),vi(),Zf(96,`. `),vi(),ce(97,`p`),Zf(98,` Click or Enter opens the menu with the first item focused (a mouse click focuses the menu itself, so arrow keys work at once). Arrow Down and Up on the trigger open it with the first or last item focused. Inside the menu Arrow Up and Down, Home and End move focus (wrapping), a letter jumps to the next matching item, and Enter or Space activates. Escape closes the menu and returns focus to the trigger. Tab closes it and moves on. A click outside closes it without moving focus. Only the item with focus needs a tab stop, so the items have `),ce(99,`code`),Zf(100,`tabindex="-1"`),vi(),Zf(101,`. `),vi()()()),t&2&&(Ot(`tab`,e.tab()),Tt(15),Ot(`component`,e.basic)(`sources`,e.sources.basic),Tt(8),Ot(`component`,e.rich)(`sources`,e.sources.rich),Tt(11),Ot(`component`,e.selectable)(`sources`,e.sources.selectable),Tt(11),Ot(`component`,e.placement)(`sources`,e.sources.placement),Tt(4),Ot(`component`,e.controlled)(`sources`,e.sources.controlled))},dependencies:[ue$1,pe],encapsulation:2})};export{Z as DropdownPage};