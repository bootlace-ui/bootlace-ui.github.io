import{At as W,Br as ui,Cr as rf,Ct as U0,F as Jo,Gr as vf,Gt as Yn,Hn as kf,Jt as Zf,L as KC,Ln as jn,P as Jf,Pt as XC,Rr as ue,Sn as fh,Tn as gf,Tt as VU,Vt as Y3,W as Ll,Wr as ve,Zr as wf,_r as q3,ar as nh,ct as RU,ei as xh,en as ah,et as Ot,f as Cf,kn as hf,ln as cj,nr as nA,on as ce,q as Mh,qn as lU,qr as vi,r as $f,ri as yU,ti as xl,ur as of,vr as qF,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./chunk-DycqepRM.js";import"./chunk-CfGjEUxa.js";import"./chunk-B6-qfzlj.js";import{n as q}from"./chunk-BOhm2mpp.js";import{a as _,f as s,i as S,n as Me,o as d,r as ke}from"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";var ys=[`*`];function vs(o,l){o&1&&ue(0,`img`,3),o&2&&Ot(`src`,l)}function fs(o,l){if(o&1&&ue(0,`ngs-icon`,4),o&2){let e=vf();Ot(`icon`,e.userIcon)}}function xs(o,l){o&1&&(nh(0,7),hf(1))}var O=class o{constructor(){k(jn).onDestroy(k(y).attachMenu())}static ɵfac=function(e){return new(e||o)};static ɵdir=Jo({type:o,selectors:[[``,`ngsNavbarProfileMenu`,``]]})};var y=class o{dropdown=nA.required(q);listening=/* @__PURE__ */ new WeakSet;name=Yn.required();src=Yn();userIcon=RU;chevron=qF;attachMenu(){let l=this.dropdown(),e={focus:()=>this.prepare()?.focus({preventScroll:!0}),focusFirst:()=>this.focusItem(0),focusLast:()=>this.focusItem(-1)};return l.attachMenu(e),()=>l.detachMenu(e)}prepare(){let l=this.dropdown(),e=l.panelElement()?.querySelector(`:scope > .menu`);if(!e)return null;e.classList.add(`show`),e.id=l.menuId,e.tabIndex=-1,e.setAttribute(`role`,`menu`),e.setAttribute(`aria-orientation`,`vertical`),e.setAttribute(`aria-labelledby`,l.triggerId);for(let t of e.querySelectorAll(`:scope > li`))t.setAttribute(`role`,`none`);for(let t of e.querySelectorAll(`.menu-divider`))t.setAttribute(`role`,`separator`);for(let t of e.querySelectorAll(`.menu-item`))t.getAttribute(`role`)?.startsWith(`menuitem`)||t.setAttribute(`role`,`menuitem`),t.tabIndex=-1,(t.classList.contains(`disabled`)||t.hasAttribute(`disabled`))&&t.setAttribute(`aria-disabled`,`true`);return this.listening.has(e)||(this.listening.add(e),e.addEventListener(`keydown`,t=>this.onKeydown(t,e))),e}focusItem(l){let e=this.prepare();(e?this.items(e):[]).at(l)?.focus({preventScroll:!0})}items(l){return[...l.querySelectorAll(`[role^="menuitem"]`)].filter(e=>e.getAttribute(`aria-disabled`)!==`true`)}onKeydown(l,e){let t=l.target;if(l.key===` `&&t.tagName===`A`){l.preventDefault(),t.click();return}let c=this.items(e),i=c.findIndex(R=>R.contains(t)),P=c.length-1,u;if(l.key===`ArrowDown`)u=i<P?i+1:0;else if(l.key===`ArrowUp`)u=i>0?i-1:P;else if(l.key===`Home`)u=0;else if(l.key===`End`)u=P;else if(l.key.length===1&&!l.ctrlKey&&!l.metaKey&&!l.altKey){let R=l.key.toLowerCase(),B=[...c.slice(i+1),...c.slice(0,i+1)].find(bs=>bs.textContent?.trim().toLowerCase().startsWith(R));if(!B)return;u=c.indexOf(B)}else return;l.preventDefault(),c[u]?.focus({preventScroll:!0})}static ɵfac=function(e){return new(e||o)};static ɵcmp=ve({type:o,selectors:[[`ngs-navbar-profile`]],viewQuery:function(e,t){e&1&&ah(t.dropdown,q,5),e&2&&wf()},hostAttrs:[1,`ngs-navbar-profile`],inputs:{name:[1,`name`],src:[1,`src`]},ngContentSelectors:ys,decls:9,vars:4,consts:[[`panel`,``],[`type`,`button`,`ngsDropdownPlacement`,`bottom-end`,1,`btn`,`btn-text`,`ngs-navbar-profile-toggle`,3,`ngsDropdown`],[`aria-hidden`,`true`,1,`avatar`,`avatar-sm`],[`alt`,``,1,`avatar-img`,3,`src`],[`size`,`1.25rem`,3,`icon`],[1,`ngs-navbar-profile-name`],[`size`,`1.25rem`,1,`ngs-navbar-profile-chevron`,3,`icon`],[`ngsNavbarProfileMenu`,``]],template:function(e,t){if(e&1&&(kf(),ce(0,`button`,1)(1,`span`,2),KC(2,vs,1,1,`img`,3)(3,fs,1,1,`ngs-icon`,4),vi(),ce(4,`span`,5),Zf(5),vi(),ue(6,`ngs-icon`,6),vi(),U0(7,xs,2,0,`ng-template`,null,0,cj)),e&2){let c,i=Cf(8);Ot(`ngsDropdown`,i),Tt(2),XC((c=t.src())?2:3,c),Tt(3),fh(t.name()),Tt(),Ot(`icon`,t.chevron)}},dependencies:[q,Ll,O],encapsulation:2})};var A=class o{search=yU;static ɵfac=function(e){return new(e||o)};static ɵcmp=ve({type:o,selectors:[[`docs-navbar-basic`]],decls:9,vars:1,consts:[[`routerLink`,`/`,1,`navbar-brand`],[`ngsNavbarCenter`,``],[`type`,`button`,`aria-label`,`Search`,1,`btn`,`btn-icon`,`btn-text`],[3,`icon`],[`ngsNavbarEnd`,``],[`routerLink`,`/getting-started`,1,`btn`,`btn-solid`,`theme-primary`,`btn-sm`]],template:function(e,t){e&1&&(ce(0,`ngs-navbar`)(1,`a`,0),Zf(2,`Acme`),vi(),ce(3,`div`,1)(4,`button`,2),ue(5,`ngs-icon`,3),vi()(),ce(6,`div`,4)(7,`a`,5),Zf(8,`Get started`),vi()()()),e&2&&(Tt(5),Ot(`icon`,t.search))},dependencies:[Ll,ke,xl],encapsulation:2})};var D=class o{items=[{label:`Overview`,icon:lU,link:`/layout/navbar`},{label:`Settings`,icon:VU,children:[{label:`Sidebar`,link:`/layout/sidebar`},{label:`Footer`,link:`/layout/footer`}]}];static ɵfac=function(e){return new(e||o)};static ɵcmp=ve({type:o,selectors:[[`docs-navbar-layout`]],decls:19,vars:1,consts:[[`routerLink`,`/`,1,`navbar-brand`],[`ngsNavbarEnd`,``],[`routerLink`,`/getting-started`,1,`btn`,`btn-solid`,`theme-primary`,`btn-sm`],[`label`,`Acme`,3,`items`],[1,`h5`]],template:function(e,t){e&1&&(ce(0,`ngs-layout`)(1,`ngs-navbar`)(2,`a`,0),Zf(3,`Acme`),vi(),ce(4,`div`,1)(5,`a`,2),Zf(6,`Get started`),vi()()(),ue(7,`ngs-sidebar`,3),ce(8,`ngs-layout-content`)(9,`h2`,4),Zf(10,`Overview`),vi(),ce(11,`p`),Zf(12,`The page content goes here. Below `),ce(13,`code`),Zf(14,`lg`),vi(),Zf(15,`, the menu button opens the sidebar.`),vi(),ce(16,`ngs-footer`)(17,`span`),Zf(18,`© 2026 Acme`),vi()()()()),e&2&&(Tt(7),Ot(`items`,t.items))},dependencies:[s,S,_,ke,Me,xl],encapsulation:2})};var Ns=(o,l)=>l.id;function ws(o,l){o&1&&(ce(0,`a`,7),Zf(1,`Acme`),vi())}function ks(o,l){if(o&1){let e=gf();ce(0,`div`,6)(1,`div`,8)(2,`div`,9)(3,`div`,10)(4,`input`,11,0),ui(`change`,function(){let c=q3(e).$implicit,i=Cf(5);return Y3(c.value.set(i.checked))}),vi()()(),ce(6,`div`,9)(7,`label`,12),Zf(8),vi()()()()}if(o&2){let e=l.$implicit;Tt(4),Ot(`id`,e.id)(`checked`,e.value()),Tt(3),Ot(`for`,e.id),Tt(),fh(e.label)}}var M=class o{rounded=W(!0);collapsible=W(!0);fullSidebar=W(!1);collapsed=W(!1);navigationMenu=W(!1);options=[{id:`layout-rounded`,label:`Rounded corners`,value:this.rounded},{id:`layout-collapsible`,label:`Collapsible sidebar`,value:this.collapsible},{id:`layout-full-sidebar`,label:`Full-height sidebar`,value:this.fullSidebar},{id:`layout-navigation-menu`,label:`Navigation menu`,value:this.navigationMenu}];items=[{label:`Overview`,icon:lU,link:`/layout/navbar`},{label:`Settings`,icon:VU,children:[{label:`Sidebar`,link:`/layout/sidebar`},{label:`Footer`,link:`/layout/footer`}]}];static ɵfac=function(e){return new(e||o)};static ɵcmp=ve({type:o,selectors:[[`docs-navbar-options`]],decls:13,vars:6,consts:[[`box`,``],[3,`sidebarCollapsedChange`,`rounded`,`mode`,`collapsible`,`sidebarCollapsed`],[`ngsBrand`,``,`logo`,`example-logo.svg`],[`label`,`Acme`,3,`items`,`menu`],[1,`h5`],[1,`row`,`gy-2`],[1,`col-12`],[`routerLink`,`/`,1,`navbar-brand`],[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[1,`switch`],[`type`,`checkbox`,3,`change`,`id`,`checked`],[3,`for`]],template:function(e,t){e&1&&(ce(0,`ngs-layout`,1),xh(`sidebarCollapsedChange`,function(i){return $f(t.collapsed,i)||(t.collapsed=i),i}),U0(1,ws,2,0,`ng-template`,2),ue(2,`ngs-navbar`)(3,`ngs-sidebar`,3),ce(4,`ngs-layout-content`)(5,`h2`,4),Zf(6,`Options`),vi(),ce(7,`div`,5),of(8,ks,9,4,`div`,6,Ns),vi(),ce(10,`ngs-footer`)(11,`span`),Zf(12,`© 2026 Acme`),vi()()()()),e&2&&(Ot(`rounded`,t.rounded())(`mode`,t.fullSidebar()?`full-sidebar`:`full-navbar`)(`collapsible`,t.collapsible()),Mh(`sidebarCollapsed`,t.collapsed),Tt(3),Ot(`items`,t.items)(`menu`,t.navigationMenu()?`navigation`:`tree`),Tt(5),rf(t.options))},dependencies:[d,s,S,_,ke,Me,xl],encapsulation:2})};var T=class o{static ɵfac=function(e){return new(e||o)};static ɵcmp=ve({type:o,selectors:[[`docs-navbar-profile`]],decls:17,vars:0,consts:[[`routerLink`,`/`,1,`navbar-brand`],[`ngsNavbarEnd`,``],[`name`,`Ada Lovelace`],[1,`menu`],[`href`,`#`,1,`menu-item`],[1,`menu-divider`]],template:function(e,t){e&1&&(ce(0,`ngs-navbar`)(1,`a`,0),Zf(2,`Acme`),vi(),ce(3,`div`,1)(4,`ngs-navbar-profile`,2)(5,`ul`,3)(6,`li`)(7,`a`,4),Zf(8,`Action`),vi()(),ce(9,`li`)(10,`a`,4),Zf(11,`Another action`),vi()(),ce(12,`li`),ue(13,`hr`,5),vi(),ce(14,`li`)(15,`a`,4),Zf(16,`Something else here`),vi()()()()()())},dependencies:[ke,y,xl],encapsulation:2})};var us={basic:{html:{code:`<ngs-navbar>
  <a class="navbar-brand" routerLink="/">Acme</a>

  <div ngsNavbarCenter>
    <button type="button" class="btn btn-icon btn-text" aria-label="Search">
      <ngs-icon [icon]="search" />
    </button>
  </div>

  <div ngsNavbarEnd>
    <a class="btn btn-solid theme-primary btn-sm" routerLink="/getting-started">Get started</a>
  </div>
</ngs-navbar>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-navbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;navbar-brand&quot;</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span>Acme<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsNavbarCenter</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn btn-icon btn-text&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Search&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;search&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsNavbarEnd</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn btn-solid theme-primary btn-sm&quot;</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/getting-started&quot;</span>&gt;</span>Get started<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navbar</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgsIcon } from '@bootlace/core/icon';
import { NgsNavbar } from '@bootlace/core/navbar';
import { ngsIconSearch } from '@bootlace/icons';

@Component({
  selector: 'docs-navbar-basic',
  imports: [NgsIcon, NgsNavbar, RouterLink],
  templateUrl: './index.html',
})
export class NavbarBasicExample {
  protected readonly search = ngsIconSearch;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNavbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navbar&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconSearch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-navbar-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsIcon</span>, <span class="hljs-title class_">NgsNavbar</span>, <span class="hljs-title class_">RouterLink</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NavbarBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> search = ngsIconSearch;
}`}},layout:{html:{code:`<ngs-layout>
  <ngs-navbar>
    <a class="navbar-brand" routerLink="/">Acme</a>
    <div ngsNavbarEnd>
      <a class="btn btn-solid theme-primary btn-sm" routerLink="/getting-started">Get started</a>
    </div>
  </ngs-navbar>

  <ngs-sidebar label="Acme" [items]="items" />

  <ngs-layout-content>
    <h2 class="h5">Overview</h2>
    <p>The page content goes here. Below <code>lg</code>, the menu button opens the sidebar.</p>

    <ngs-footer>
      <span>\xA9 2026 Acme</span>
    </ngs-footer>
  </ngs-layout-content>
</ngs-layout>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-layout</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-navbar</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;navbar-brand&quot;</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span>Acme<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsNavbarEnd</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;btn btn-solid theme-primary btn-sm&quot;</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/getting-started&quot;</span>&gt;</span>Get started<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navbar</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-sidebar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Acme&quot;</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;items&quot;</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-layout-content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h5&quot;</span>&gt;</span>Overview<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>The page content goes here. Below <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>lg<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>, the menu button opens the sidebar.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-footer</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\xA9 2026 Acme<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-footer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-layout-content</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-layout</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgsFooter } from '@bootlace/core/footer';
import { NgsLayout, NgsLayoutContent } from '@bootlace/core/layout';
import { NgsNavbar } from '@bootlace/core/navbar';
import { NgsSidebar, NgsSidebarItem } from '@bootlace/core/sidebar';
import { ngsIconHome, ngsIconSettingTwo } from '@bootlace/icons';

@Component({
  selector: 'docs-navbar-layout',
  imports: [NgsFooter, NgsLayout, NgsLayoutContent, NgsNavbar, NgsSidebar, RouterLink],
  templateUrl: './index.html',
})
export class NavbarLayoutExample {
  protected readonly items: NgsSidebarItem[] = [
    { label: 'Overview', icon: ngsIconHome, link: '/layout/navbar' },
    {
      label: 'Settings',
      icon: ngsIconSettingTwo,
      children: [
        { label: 'Sidebar', link: '/layout/sidebar' },
        { label: 'Footer', link: '/layout/footer' },
      ],
    },
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFooter</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/footer&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsLayout</span>, <span class="hljs-title class_">NgsLayoutContent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/layout&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNavbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navbar&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSidebar</span>, <span class="hljs-title class_">NgsSidebarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/sidebar&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconHome, ngsIconSettingTwo } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-navbar-layout&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFooter</span>, <span class="hljs-title class_">NgsLayout</span>, <span class="hljs-title class_">NgsLayoutContent</span>, <span class="hljs-title class_">NgsNavbar</span>, <span class="hljs-title class_">NgsSidebar</span>, <span class="hljs-title class_">RouterLink</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NavbarLayoutExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">items</span>: <span class="hljs-title class_">NgsSidebarItem</span>[] = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Overview&#x27;</span>, <span class="hljs-attr">icon</span>: ngsIconHome, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/navbar&#x27;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Settings&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconSettingTwo,
      <span class="hljs-attr">children</span>: [
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Sidebar&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/sidebar&#x27;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Footer&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/footer&#x27;</span> },
      ],
    },
  ];
}`}},options:{html:{code:`<ngs-layout
  [rounded]="rounded()"
  [mode]="fullSidebar() ? 'full-sidebar' : 'full-navbar'"
  [collapsible]="collapsible()"
  [(sidebarCollapsed)]="collapsed"
>
  <ng-template ngsBrand logo="example-logo.svg">
    <a class="navbar-brand" routerLink="/">Acme</a>
  </ng-template>

  <ngs-navbar />

  <ngs-sidebar label="Acme" [items]="items" [menu]="navigationMenu() ? 'navigation' : 'tree'" />

  <ngs-layout-content>
    <h2 class="h5">Options</h2>
    <div class="row gy-2">
      @for (option of options; track option.id) {
        <div class="col-12">
          <div class="row g-2 align-items-center">
            <div class="col-auto">
              <div class="switch">
                <input
                  #box
                  type="checkbox"
                  [id]="option.id"
                  [checked]="option.value()"
                  (change)="option.value.set(box.checked)"
                />
              </div>
            </div>
            <div class="col-auto">
              <label [for]="option.id">{{ option.label }}</label>
            </div>
          </div>
        </div>
      }
    </div>

    <ngs-footer>
      <span>\xA9 2026 Acme</span>
    </ngs-footer>
  </ngs-layout-content>
</ngs-layout>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-layout</span>
  [<span class="hljs-attr">rounded</span>]=<span class="hljs-string">&quot;rounded()&quot;</span>
  [<span class="hljs-attr">mode</span>]=<span class="hljs-string">&quot;fullSidebar() ? &#x27;full-sidebar&#x27; : &#x27;full-navbar&#x27;&quot;</span>
  [<span class="hljs-attr">collapsible</span>]=<span class="hljs-string">&quot;collapsible()&quot;</span>
  [(<span class="hljs-attr">sidebarCollapsed</span>)]=<span class="hljs-string">&quot;collapsed&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">ngsBrand</span> <span class="hljs-attr">logo</span>=<span class="hljs-string">&quot;example-logo.svg&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;navbar-brand&quot;</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span>Acme<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-navbar</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-sidebar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Acme&quot;</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;items&quot;</span> [<span class="hljs-attr">menu</span>]=<span class="hljs-string">&quot;navigationMenu() ? &#x27;navigation&#x27; : &#x27;tree&#x27;&quot;</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-layout-content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h5&quot;</span>&gt;</span>Options<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row gy-2&quot;</span>&gt;</span>
      @for (option of options; track option.id) {
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;switch&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
                  #<span class="hljs-attr">box</span>
                  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span>
                  [<span class="hljs-attr">id</span>]=<span class="hljs-string">&quot;option.id&quot;</span>
                  [<span class="hljs-attr">checked</span>]=<span class="hljs-string">&quot;option.value()&quot;</span>
                  (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;option.value.set(box.checked)&quot;</span>
                /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">label</span> [<span class="hljs-attr">for</span>]=<span class="hljs-string">&quot;option.id&quot;</span>&gt;</span>{{ option.label }}<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-footer</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\xA9 2026 Acme<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-footer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-layout-content</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-layout</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgsFooter } from '@bootlace/core/footer';
import { NgsBrand, NgsLayout, NgsLayoutContent } from '@bootlace/core/layout';
import { NgsNavbar } from '@bootlace/core/navbar';
import { NgsSidebar, NgsSidebarItem } from '@bootlace/core/sidebar';
import { ngsIconHome, ngsIconSettingTwo } from '@bootlace/icons';

@Component({
  selector: 'docs-navbar-options',
  imports: [NgsBrand, NgsFooter, NgsLayout, NgsLayoutContent, NgsNavbar, NgsSidebar, RouterLink],
  templateUrl: './index.html',
})
export class NavbarOptionsExample {
  protected readonly rounded = signal(true);
  protected readonly collapsible = signal(true);
  protected readonly fullSidebar = signal(false);
  protected readonly collapsed = signal(false);
  protected readonly navigationMenu = signal(false);

  protected readonly options = [
    { id: 'layout-rounded', label: 'Rounded corners', value: this.rounded },
    { id: 'layout-collapsible', label: 'Collapsible sidebar', value: this.collapsible },
    { id: 'layout-full-sidebar', label: 'Full-height sidebar', value: this.fullSidebar },
    { id: 'layout-navigation-menu', label: 'Navigation menu', value: this.navigationMenu },
  ];

  protected readonly items: NgsSidebarItem[] = [
    { label: 'Overview', icon: ngsIconHome, link: '/layout/navbar' },
    {
      label: 'Settings',
      icon: ngsIconSettingTwo,
      children: [
        { label: 'Sidebar', link: '/layout/sidebar' },
        { label: 'Footer', link: '/layout/footer' },
      ],
    },
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFooter</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/footer&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsBrand</span>, <span class="hljs-title class_">NgsLayout</span>, <span class="hljs-title class_">NgsLayoutContent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/layout&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNavbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navbar&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSidebar</span>, <span class="hljs-title class_">NgsSidebarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/sidebar&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconHome, ngsIconSettingTwo } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-navbar-options&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsBrand</span>, <span class="hljs-title class_">NgsFooter</span>, <span class="hljs-title class_">NgsLayout</span>, <span class="hljs-title class_">NgsLayoutContent</span>, <span class="hljs-title class_">NgsNavbar</span>, <span class="hljs-title class_">NgsSidebar</span>, <span class="hljs-title class_">RouterLink</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NavbarOptionsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> rounded = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> collapsible = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> fullSidebar = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> collapsed = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> navigationMenu = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> options = [
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;layout-rounded&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Rounded corners&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">rounded</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;layout-collapsible&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Collapsible sidebar&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">collapsible</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;layout-full-sidebar&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Full-height sidebar&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">fullSidebar</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;layout-navigation-menu&#x27;</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Navigation menu&#x27;</span>, <span class="hljs-attr">value</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">navigationMenu</span> },
  ];

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">items</span>: <span class="hljs-title class_">NgsSidebarItem</span>[] = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Overview&#x27;</span>, <span class="hljs-attr">icon</span>: ngsIconHome, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/navbar&#x27;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Settings&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconSettingTwo,
      <span class="hljs-attr">children</span>: [
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Sidebar&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/sidebar&#x27;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Footer&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/footer&#x27;</span> },
      ],
    },
  ];
}`}},profile:{html:{code:`<ngs-navbar>
  <a class="navbar-brand" routerLink="/">Acme</a>

  <div ngsNavbarEnd>
    <ngs-navbar-profile name="Ada Lovelace">
      <ul class="menu">
        <li><a class="menu-item" href="#">Action</a></li>
        <li><a class="menu-item" href="#">Another action</a></li>
        <li><hr class="menu-divider" /></li>
        <li><a class="menu-item" href="#">Something else here</a></li>
      </ul>
    </ngs-navbar-profile>
  </div>
</ngs-navbar>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-navbar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;navbar-brand&quot;</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span>Acme<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsNavbarEnd</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-navbar-profile</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Ada Lovelace&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Action<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Another action<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">hr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-divider&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#&quot;</span>&gt;</span>Something else here<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navbar-profile</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navbar</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgsNavbar, NgsNavbarProfile } from '@bootlace/core/navbar';

@Component({
  selector: 'docs-navbar-profile',
  imports: [NgsNavbar, NgsNavbarProfile, RouterLink],
  templateUrl: './index.html',
})
export class NavbarProfileExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNavbar</span>, <span class="hljs-title class_">NgsNavbarProfile</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navbar&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-navbar-profile&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsNavbar</span>, <span class="hljs-title class_">NgsNavbarProfile</span>, <span class="hljs-title class_">RouterLink</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NavbarProfileExample</span> {}`}}};var Ss=()=>[`@bootlace/core/layout`];var js=class o{tab=Yn(`examples`);sources=us;basic=A;layout=D;options=M;profile=T;static ɵfac=function(e){return new(e||o)};static ɵcmp=ve({type:o,selectors:[[`docs-navbar-page`]],inputs:{tab:[1,`tab`]},decls:140,vars:11,consts:[[`heading`,`Navbar`,`package`,`@bootlace/core/navbar`,`path`,`/layout/navbar`,3,`extraPackages`,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,`frame`,`var(--ngs-navbar-height)`,3,`component`,`sources`],[`id`,`profile`,`heading`,`Profile menu`,`frame`,`18rem`,3,`component`,`sources`],[`id`,`layout`,`heading`,`Page layout`,`frame`,`24rem`,3,`component`,`sources`],[`id`,`options`,`heading`,`Layout options`,`frame`,`28rem`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(e,t){e&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` The fixed top bar of the page shell, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.navbar`),vi(),Zf(5,`. With `),ce(6,`code`),Zf(7,`<ngs-layout>`),vi(),Zf(8,` it frames the page as on these docs. `),vi(),ce(9,`docs-example`,2),Zf(10,` Content goes in three slots: the start (for the brand), `),ce(11,`code`),Zf(12,`ngsNavbarCenter`),vi(),Zf(13,` and `),ce(14,`code`),Zf(15,`ngsNavbarEnd`),vi(),Zf(16,`. Below `),ce(17,`code`),Zf(18,`lg`),vi(),Zf(19,` the centre slot moves after the end slot. `),vi(),ce(20,`docs-example`,3)(21,`code`),Zf(22,`<ngs-navbar-profile>`),vi(),Zf(23,` shows the user's avatar and name with a chevron, and opens a menu of your own markup: a Bootstrap 6 `),ce(24,`code`),Zf(25,`<ul class="menu">`),vi(),Zf(26,` of `),ce(27,`code`),Zf(28,`.menu-item`),vi(),Zf(29,` links or buttons, with `),ce(30,`code`),Zf(31,`.menu-divider`),vi(),Zf(32,` rules between groups. Give `),ce(33,`code`),Zf(34,`src`),vi(),Zf(35,` for a photo; without one the avatar shows a user icon. Below `),ce(36,`code`),Zf(37,`md`),vi(),Zf(38,` the name is hidden, leaving the avatar and the chevron. `),vi(),ce(39,`docs-example`,4)(40,`code`),Zf(41,`<ngs-layout>`),vi(),Zf(42,` arranges a navbar, a sidebar and an `),ce(43,`code`),Zf(44,`<ngs-layout-content>`),vi(),Zf(45,` column in a rounded frame. The content column wraps its content in `),ce(46,`code`),Zf(47,`<main>`),vi(),Zf(48,` and places an `),ce(49,`code`),Zf(50,`<ngs-footer>`),vi(),Zf(51,` below it. Below `),ce(52,`code`),Zf(53,`lg`),vi(),Zf(54,` the navbar shows a menu button that opens the sidebar as a drawer. Resize the window to try it. `),vi(),ce(55,`docs-example`,5),Zf(56,` Set `),ce(57,`code`),Zf(58,`[rounded]="false"`),vi(),Zf(59,` for square corners on the frame and the sidebar, content and footer panels. `),ce(60,`code`),Zf(61,`mode="full-sidebar"`),vi(),Zf(62,` runs the sidebar the full height of the page with the navbar beside it, instead of the default `),ce(63,`code`),Zf(64,`full-navbar`),vi(),Zf(65,`. Put the brand in an `),ce(66,`code`),Zf(67,`<ng-template ngsBrand>`),vi(),Zf(68,`: the navbar shows it at its start, and a full-height sidebar shows it at its top instead. Give it a `),ce(69,`code`),Zf(70,`logo`),vi(),Zf(71,` URL (and `),ce(72,`code`),Zf(73,`logoAlt`),vi(),Zf(74,` if the logo needs a name of its own, and `),ce(75,`code`),Zf(76,`logoSize`),vi(),Zf(77,` for its height, `),ce(78,`code`),Zf(79,`2rem`),vi(),Zf(80,` by default) to show an image before it; on the rail the brand box then stays, showing only the logo. `),ce(81,`code`),Zf(82,`collapsible`),vi(),Zf(83,` keeps the menu button from `),ce(84,`code`),Zf(85,`lg`),vi(),Zf(86,` up, where it contracts the sidebar to a rail of top-level icons; bind `),ce(87,`code`),Zf(88,`[(sidebarCollapsed)]`),vi(),Zf(89,` to set or remember the state. On the rail a group opens its children in a flyout menu when hovered or clicked, without expanding the sidebar. `),ce(90,`code`),Zf(91,`menu="navigation"`),vi(),Zf(92,` on the sidebar draws the same `),ce(93,`code`),Zf(94,`items`),vi(),Zf(95,` as an `),ce(96,`code`),Zf(97,`<ngs-navigation>`),vi(),Zf(98,` panel instead of the tree. These options apply from `),ce(99,`code`),Zf(100,`lg`),vi(),Zf(101,` up; widen the window to try them. `),vi(),ce(102,`section`,6)(103,`h2`,7),Zf(104,`Accessibility`),vi(),ce(105,`p`),Zf(106,` The navbar is the page's `),ce(107,`code`),Zf(108,`banner`),vi(),Zf(109,` landmark and the content column's `),ce(110,`code`),Zf(111,`<main>`),vi(),Zf(112,` its `),ce(113,`code`),Zf(114,`main`),vi(),Zf(115,` landmark, so use one layout per page. The profile button is named by the user's name and follows the WAI-ARIA menu button pattern: its menu gets the `),ce(116,`code`),Zf(117,`menu`),vi(),Zf(118,` and `),ce(119,`code`),Zf(120,`menuitem`),vi(),Zf(121,` roles, and Arrow Up and Down, Home, End and typed letters move between items. The menu button is named by `),ce(122,`code`),Zf(123,`menuLabel`),vi(),Zf(124,` (“Menu” by default) and reports the drawer's state with `),ce(125,`code`),Zf(126,`aria-expanded`),vi(),Zf(127,` and `),ce(128,`code`),Zf(129,`aria-controls`),vi(),Zf(130,`; in a `),ce(131,`code`),Zf(132,`collapsible`),vi(),Zf(133,` layout from `),ce(134,`code`),Zf(135,`lg`),vi(),Zf(136,` up, `),ce(137,`code`),Zf(138,`aria-expanded`),vi(),Zf(139,` reports whether the sidebar is expanded. Rail links keep their labels for screen readers and show them as a tooltip; rail groups are menu buttons, whose flyout menu opens with Enter, Space or the arrow keys and closes with Escape. `),vi()()()),e&2&&(Ot(`extraPackages`,Jf(10,Ss))(`tab`,t.tab()),Tt(9),Ot(`component`,t.basic)(`sources`,t.sources.basic),Tt(11),Ot(`component`,t.profile)(`sources`,t.sources.profile),Tt(19),Ot(`component`,t.layout)(`sources`,t.sources.layout),Tt(16),Ot(`component`,t.options)(`sources`,t.sources.options))},dependencies:[ue$1,pe],encapsulation:2})};export{js as NavbarPage};