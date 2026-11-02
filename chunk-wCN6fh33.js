import{Gt as Yn,Jt as Zf,Mr as tU,Rr as ue,Ur as vU,Wr as ve,et as Ot,on as ce,qr as vi,ti as xl,vt as TF,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./chunk-DycqepRM.js";import"./chunk-CfGjEUxa.js";import"./chunk-B6-qfzlj.js";import"./chunk-BOhm2mpp.js";import{a as _,i as S,n as Me,r as ke}from"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";var x=class l{items=[{label:`Getting started`,icon:TF,link:`/getting-started`},{label:`Layout`,icon:vU,children:[{label:`Navbar`,link:`/layout/navbar`},{label:`Sidebar`,link:`/layout/sidebar`},{label:`More`,children:[{label:`Footer`,link:`/layout/footer`},{label:`Breadcrumb`,link:`/navigation/breadcrumb`}]}]},{label:`GitHub`,icon:tU,href:`https://github.com/Angular-Bootstrap-Project/angular-bootstrap`}];static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-sidebar-items`]],decls:13,vars:1,consts:[[`routerLink`,`/`,1,`navbar-brand`],[`label`,`Acme docs`,3,`items`],[1,`small`,`fg-2`,`px-4`,`mb-2`]],template:function(t,e){t&1&&(ce(0,`ngs-layout`)(1,`ngs-navbar`)(2,`a`,0),Zf(3,`Acme`),vi()(),ce(4,`ngs-sidebar`,1)(5,`p`,2),Zf(6,`Content inside the sidebar shows above the items.`),vi()(),ce(7,`ngs-layout-content`)(8,`p`),Zf(9,` The group holding the current page opens by itself. Groups nest, and an item with `),ce(10,`code`),Zf(11,`href`),vi(),Zf(12,` opens in a new tab. `),vi()()()),t&2&&(Tt(4),Ot(`items`,e.items))},dependencies:[S,_,ke,Me,xl],encapsulation:2})};var y=class l{items=[{label:`Getting started`,icon:TF,link:`/getting-started`},{label:`Layout`,icon:vU,children:[{label:`Navbar`,link:`/layout/navbar`},{label:`Sidebar`,link:`/layout/sidebar`},{label:`More`,children:[{label:`Footer`,link:`/layout/footer`},{label:`Breadcrumb`,link:`/navigation/breadcrumb`}]}]},{label:`GitHub`,icon:tU,href:`https://github.com/Angular-Bootstrap-Project/angular-bootstrap`}];static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-sidebar-navigation`]],decls:11,vars:1,consts:[[`routerLink`,`/`,1,`navbar-brand`],[`label`,`Acme docs`,`menu`,`navigation`,3,`items`]],template:function(t,e){t&1&&(ce(0,`ngs-layout`)(1,`ngs-navbar`)(2,`a`,0),Zf(3,`Acme`),vi()(),ue(4,`ngs-sidebar`,1),ce(5,`ngs-layout-content`)(6,`p`),Zf(7,` The same items as above, drawn as an `),ce(8,`code`),Zf(9,`<ngs-navigation>`),vi(),Zf(10,` panel: icons on every entry, a filled current page, and groups that open under a chevron. `),vi()()()),t&2&&(Tt(4),Ot(`items`,e.items))},dependencies:[S,_,ke,Me,xl],encapsulation:2})};var E={items:{html:{code:`<ngs-layout>
  <ngs-navbar>
    <a class="navbar-brand" routerLink="/">Acme</a>
  </ngs-navbar>

  <ngs-sidebar label="Acme docs" [items]="items">
    <p class="small fg-2 px-4 mb-2">Content inside the sidebar shows above the items.</p>
  </ngs-sidebar>

  <ngs-layout-content>
    <p>
      The group holding the current page opens by itself. Groups nest, and an item with
      <code>href</code> opens in a new tab.
    </p>
  </ngs-layout-content>
</ngs-layout>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-layout</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-navbar</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;navbar-brand&quot;</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span>Acme<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navbar</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-sidebar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Acme docs&quot;</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;items&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;small fg-2 px-4 mb-2&quot;</span>&gt;</span>Content inside the sidebar shows above the items.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-sidebar</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-layout-content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      The group holding the current page opens by itself. Groups nest, and an item with
      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>href<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> opens in a new tab.
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-layout-content</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-layout</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgsLayout, NgsLayoutContent } from '@bootlace/core/layout';
import { NgsNavbar } from '@bootlace/core/navbar';
import { NgsSidebar, NgsSidebarItem } from '@bootlace/core/sidebar';
import { ngsIconBookOpen, ngsIconGithub, ngsIconLayoutFive } from '@bootlace/icons';

@Component({
  selector: 'docs-sidebar-items',
  imports: [NgsLayout, NgsLayoutContent, NgsNavbar, NgsSidebar, RouterLink],
  templateUrl: './index.html',
})
export class SidebarItemsExample {
  protected readonly items: NgsSidebarItem[] = [
    { label: 'Getting started', icon: ngsIconBookOpen, link: '/getting-started' },
    {
      label: 'Layout',
      icon: ngsIconLayoutFive,
      children: [
        { label: 'Navbar', link: '/layout/navbar' },
        { label: 'Sidebar', link: '/layout/sidebar' },
        {
          label: 'More',
          children: [
            { label: 'Footer', link: '/layout/footer' },
            { label: 'Breadcrumb', link: '/navigation/breadcrumb' },
          ],
        },
      ],
    },
    {
      label: 'GitHub',
      icon: ngsIconGithub,
      href: 'https://github.com/Angular-Bootstrap-Project/angular-bootstrap',
    },
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsLayout</span>, <span class="hljs-title class_">NgsLayoutContent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/layout&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNavbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navbar&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSidebar</span>, <span class="hljs-title class_">NgsSidebarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/sidebar&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconBookOpen, ngsIconGithub, ngsIconLayoutFive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-sidebar-items&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsLayout</span>, <span class="hljs-title class_">NgsLayoutContent</span>, <span class="hljs-title class_">NgsNavbar</span>, <span class="hljs-title class_">NgsSidebar</span>, <span class="hljs-title class_">RouterLink</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SidebarItemsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">items</span>: <span class="hljs-title class_">NgsSidebarItem</span>[] = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Getting started&#x27;</span>, <span class="hljs-attr">icon</span>: ngsIconBookOpen, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/getting-started&#x27;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Layout&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconLayoutFive,
      <span class="hljs-attr">children</span>: [
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Navbar&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/navbar&#x27;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Sidebar&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/sidebar&#x27;</span> },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;More&#x27;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Footer&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/footer&#x27;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Breadcrumb&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/navigation/breadcrumb&#x27;</span> },
          ],
        },
      ],
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;GitHub&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconGithub,
      <span class="hljs-attr">href</span>: <span class="hljs-string">&#x27;https://github.com/Angular-Bootstrap-Project/angular-bootstrap&#x27;</span>,
    },
  ];
}`}},navigation:{html:{code:`<ngs-layout>
  <ngs-navbar>
    <a class="navbar-brand" routerLink="/">Acme</a>
  </ngs-navbar>

  <ngs-sidebar label="Acme docs" menu="navigation" [items]="items" />

  <ngs-layout-content>
    <p>
      The same items as above, drawn as an <code>&lt;ngs-navigation&gt;</code> panel: icons on every
      entry, a filled current page, and groups that open under a chevron.
    </p>
  </ngs-layout-content>
</ngs-layout>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-layout</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-navbar</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;navbar-brand&quot;</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/&quot;</span>&gt;</span>Acme<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navbar</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-sidebar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Acme docs&quot;</span> <span class="hljs-attr">menu</span>=<span class="hljs-string">&quot;navigation&quot;</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;items&quot;</span> /&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-layout-content</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      The same items as above, drawn as an <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span><span class="hljs-symbol">&amp;lt;</span>ngs-navigation<span class="hljs-symbol">&amp;gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> panel: icons on every
      entry, a filled current page, and groups that open under a chevron.
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-layout-content</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-layout</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgsLayout, NgsLayoutContent } from '@bootlace/core/layout';
import { NgsNavbar } from '@bootlace/core/navbar';
import { NgsSidebar, NgsSidebarItem } from '@bootlace/core/sidebar';
import { ngsIconBookOpen, ngsIconGithub, ngsIconLayoutFive } from '@bootlace/icons';

@Component({
  selector: 'docs-sidebar-navigation',
  imports: [NgsLayout, NgsLayoutContent, NgsNavbar, NgsSidebar, RouterLink],
  templateUrl: './index.html',
})
export class SidebarNavigationExample {
  protected readonly items: NgsSidebarItem[] = [
    { label: 'Getting started', icon: ngsIconBookOpen, link: '/getting-started' },
    {
      label: 'Layout',
      icon: ngsIconLayoutFive,
      children: [
        { label: 'Navbar', link: '/layout/navbar' },
        { label: 'Sidebar', link: '/layout/sidebar' },
        {
          label: 'More',
          children: [
            { label: 'Footer', link: '/layout/footer' },
            { label: 'Breadcrumb', link: '/navigation/breadcrumb' },
          ],
        },
      ],
    },
    {
      label: 'GitHub',
      icon: ngsIconGithub,
      href: 'https://github.com/Angular-Bootstrap-Project/angular-bootstrap',
    },
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsLayout</span>, <span class="hljs-title class_">NgsLayoutContent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/layout&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNavbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navbar&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSidebar</span>, <span class="hljs-title class_">NgsSidebarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/sidebar&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconBookOpen, ngsIconGithub, ngsIconLayoutFive } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-sidebar-navigation&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsLayout</span>, <span class="hljs-title class_">NgsLayoutContent</span>, <span class="hljs-title class_">NgsNavbar</span>, <span class="hljs-title class_">NgsSidebar</span>, <span class="hljs-title class_">RouterLink</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SidebarNavigationExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">items</span>: <span class="hljs-title class_">NgsSidebarItem</span>[] = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Getting started&#x27;</span>, <span class="hljs-attr">icon</span>: ngsIconBookOpen, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/getting-started&#x27;</span> },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Layout&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconLayoutFive,
      <span class="hljs-attr">children</span>: [
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Navbar&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/navbar&#x27;</span> },
        { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Sidebar&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/sidebar&#x27;</span> },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;More&#x27;</span>,
          <span class="hljs-attr">children</span>: [
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Footer&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/layout/footer&#x27;</span> },
            { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Breadcrumb&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/navigation/breadcrumb&#x27;</span> },
          ],
        },
      ],
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;GitHub&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconGithub,
      <span class="hljs-attr">href</span>: <span class="hljs-string">&#x27;https://github.com/Angular-Bootstrap-Project/angular-bootstrap&#x27;</span>,
    },
  ];
}`}}};var I=class l{tab=Yn(`examples`);sources=E;items=x;navigation=y;static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-sidebar-page`]],inputs:{tab:[1,`tab`]},decls:88,vars:5,consts:[[`heading`,`Sidebar`,`package`,`@bootlace/core/sidebar`,`path`,`/layout/sidebar`,3,`tab`],[1,`docs-page-lead`],[`id`,`items`,`heading`,`Items`,`frame`,`26rem`,3,`component`,`sources`],[`id`,`navigation`,`heading`,`Navigation menu`,`frame`,`26rem`,3,`component`,`sources`],[`aria-labelledby`,`behaviour`,1,`docs-section`],[`id`,`behaviour`,1,`h6`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,e){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` Side navigation for `),ce(3,`code`),Zf(4,`<ngs-layout>`),vi(),Zf(5,`: a fixed column from `),ce(6,`code`),Zf(7,`lg`),vi(),Zf(8,` up, and a Bootstrap 6 drawer on phones and tablets. `),vi(),ce(9,`docs-example`,2),Zf(10,` Pass the navigation tree as `),ce(11,`code`),Zf(12,`items`),vi(),Zf(13,`. An item has a `),ce(14,`code`),Zf(15,`link`),vi(),Zf(16,` (a router link), an `),ce(17,`code`),Zf(18,`href`),vi(),Zf(19,` (an external page) or `),ce(20,`code`),Zf(21,`children`),vi(),Zf(22,` (a group). Top-level items can have an `),ce(23,`code`),Zf(24,`icon`),vi(),Zf(25,`, sized with `),ce(26,`code`),Zf(27,`iconSize`),vi(),Zf(28,` (any CSS length, `),ce(29,`code`),Zf(30,`1rem`),vi(),Zf(31,` by default). `),vi(),ce(32,`docs-example`,3)(33,`code`),Zf(34,`menu`),vi(),Zf(35,` picks how the items are drawn. The default, `),ce(36,`code`),Zf(37,`tree`),vi(),Zf(38,`, is `),ce(39,`code`),Zf(40,`<ngs-sidebar-tree>`),vi(),Zf(41,`, which you can also use on its own; `),ce(42,`code`),Zf(43,`navigation`),vi(),Zf(44,` draws them as an `),ce(45,`code`),Zf(46,`<ngs-navigation>`),vi(),Zf(47,` panel. Both open the groups around the current page, size icons with `),ce(48,`code`),Zf(49,`iconSize`),vi(),Zf(50,`, and on the collapsed rail open a group's children in a flyout menu. `),vi(),ce(51,`section`,4)(52,`h2`,5),Zf(53,`Behaviour`),vi(),ce(54,`p`),Zf(55,` Groups that contain the current route open by themselves, and stay open when the user opens others. Below `),ce(56,`code`),Zf(57,`lg`),vi(),Zf(58,` the sidebar is a modal `),ce(59,`code`),Zf(60,`<dialog>`),vi(),Zf(61,` opened by the navbar's menu button. It closes on Escape, a backdrop click or following a link, and when the window grows to `),ce(62,`code`),Zf(63,`lg`),vi(),Zf(64,`. `),vi()(),ce(65,`section`,6)(66,`h2`,7),Zf(67,`Accessibility`),vi(),ce(68,`p`),Zf(69,` The items are a `),ce(70,`code`),Zf(71,`<nav>`),vi(),Zf(72,` named by `),ce(73,`code`),Zf(74,`label`),vi(),Zf(75,`. The current page's link has `),ce(76,`code`),Zf(77,`aria-current="page"`),vi(),Zf(78,`, and group buttons report `),ce(79,`code`),Zf(80,`aria-expanded`),vi(),Zf(81,`. Collapsed groups are `),ce(82,`code`),Zf(83,`inert`),vi(),Zf(84,`, so Tab skips their links. The drawer traps focus while open; its close button, named by `),ce(85,`code`),Zf(86,`closeLabel`),vi(),Zf(87,`, appears on keyboard focus. `),vi()()()),t&2&&(Ot(`tab`,e.tab()),Tt(9),Ot(`component`,e.items)(`sources`,e.sources.items),Tt(23),Ot(`component`,e.navigation)(`sources`,e.sources.navigation))},dependencies:[ue$1,pe],encapsulation:2})};export{I as SidebarPage};