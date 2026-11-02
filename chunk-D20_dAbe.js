import{Cr as rf,G as Lr,Gr as vf,Gt as Yn,Jt as Zf,L as KC,Pt as XC,Rn as jo,Rr as ue,Sn as fh,Wr as ve,et as Ot,j as JC,on as ce,qr as vi,ti as xl,ur as of,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";function M(a,r){if(a&1&&(ce(0,`span`,2),Zf(1),vi()),a&2){let e=vf().$implicit;Tt(),fh(e.label)}}function F(a,r){if(a&1&&(ce(0,`a`,3),Zf(1),vi()),a&2){let e=vf().$implicit;Ot(`routerLink`,e.link),Tt(),fh(e.label)}}function $(a,r){if(a&1&&(ce(0,`span`,4),Zf(1),vi()),a&2){let e=vf().$implicit;Tt(),fh(e.label)}}function q(a,r){a&1&&ue(0,`li`,5)}function H(a,r){if(a&1&&(ce(0,`li`,1),KC(1,M,2,1,`span`,2)(2,F,2,2,`a`,3)(3,$,2,1,`span`,4),vi(),KC(4,q,1,0,`li`,5)),a&2){let e=r.$implicit,l=r.$index,B=r.$count;Tt(),XC(l===B-1?1:e.link?2:3),Tt(3),XC(l!==B-1?4:-1)}}var m=class a{i18n=k(o);items=Yn([]);label=Yn();name=jo(()=>this.label()??this.i18n.breadcrumb.label);static ɵfac=function(e){return new(e||a)};static ɵcmp=ve({type:a,selectors:[[`ngs-breadcrumb`]],inputs:{items:[1,`items`],label:[1,`label`]},decls:4,vars:1,consts:[[1,`breadcrumb`],[1,`breadcrumb-item`],[`aria-current`,`page`,1,`breadcrumb-link`,`active`],[1,`breadcrumb-link`,3,`routerLink`],[1,`breadcrumb-link`],[`aria-hidden`,`true`,1,`breadcrumb-divider`]],template:function(e,l){e&1&&(ce(0,`nav`)(1,`ol`,0),of(2,H,5,2,null,null,JC),vi()()),e&2&&(Lr(`aria-label`,l.name()),Tt(2),rf(l.items()))},dependencies:[xl],encapsulation:2})};var g=class a{items=[{label:`Home`,link:`/`},{label:`Getting started`,link:`/getting-started`},{label:`Breadcrumb`}];static ɵfac=function(e){return new(e||a)};static ɵcmp=ve({type:a,selectors:[[`docs-breadcrumb-basic`]],decls:1,vars:1,consts:[[3,`items`]],template:function(e,l){e&1&&ue(0,`ngs-breadcrumb`,0),e&2&&Ot(`items`,l.items)},dependencies:[m],encapsulation:2})};var h=class a{items=[{label:`Home`,link:`/`},{label:`Navigation`},{label:`Breadcrumb`}];static ɵfac=function(e){return new(e||a)};static ɵcmp=ve({type:a,selectors:[[`docs-breadcrumb-steps`]],decls:1,vars:1,consts:[[`label`,`Page location`,3,`items`]],template:function(e,l){e&1&&ue(0,`ngs-breadcrumb`,0),e&2&&Ot(`items`,l.items)},dependencies:[m],encapsulation:2})};var T={basic:{html:{code:`<ngs-breadcrumb [items]="items" />`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-breadcrumb</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;items&quot;</span> /&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsBreadcrumb, NgsBreadcrumbItem } from '@bootlace/core/breadcrumb';

@Component({
  selector: 'docs-breadcrumb-basic',
  imports: [NgsBreadcrumb],
  templateUrl: './index.html',
})
export class BreadcrumbBasicExample {
  protected readonly items: NgsBreadcrumbItem[] = [
    { label: 'Home', link: '/' },
    { label: 'Getting started', link: '/getting-started' },
    { label: 'Breadcrumb' },
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsBreadcrumb</span>, <span class="hljs-title class_">NgsBreadcrumbItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/breadcrumb&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-breadcrumb-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsBreadcrumb</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">BreadcrumbBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">items</span>: <span class="hljs-title class_">NgsBreadcrumbItem</span>[] = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Home&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/&#x27;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Getting started&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/getting-started&#x27;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Breadcrumb&#x27;</span> },
  ];
}`}},steps:{html:{code:`<ngs-breadcrumb label="Page location" [items]="items" />`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-breadcrumb</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Page location&quot;</span> [<span class="hljs-attr">items</span>]=<span class="hljs-string">&quot;items&quot;</span> /&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsBreadcrumb, NgsBreadcrumbItem } from '@bootlace/core/breadcrumb';

@Component({
  selector: 'docs-breadcrumb-steps',
  imports: [NgsBreadcrumb],
  templateUrl: './index.html',
})
export class BreadcrumbStepsExample {
  // Navigation has no page of its own, so it has no link.
  protected readonly items: NgsBreadcrumbItem[] = [
    { label: 'Home', link: '/' },
    { label: 'Navigation' },
    { label: 'Breadcrumb' },
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsBreadcrumb</span>, <span class="hljs-title class_">NgsBreadcrumbItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/breadcrumb&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-breadcrumb-steps&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsBreadcrumb</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">BreadcrumbStepsExample</span> {
  <span class="hljs-comment">// Navigation has no page of its own, so it has no link.</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">items</span>: <span class="hljs-title class_">NgsBreadcrumbItem</span>[] = [
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Home&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/&#x27;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Navigation&#x27;</span> },
    { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Breadcrumb&#x27;</span> },
  ];
}`}}};var P=class a{tab=Yn(`examples`);sources=T;basic=g;steps=h;static ɵfac=function(e){return new(e||a)};static ɵcmp=ve({type:a,selectors:[[`docs-breadcrumb-page`]],inputs:{tab:[1,`tab`]},decls:33,vars:5,consts:[[`heading`,`Breadcrumb`,`package`,`@bootlace/core/breadcrumb`,`path`,`/navigation/breadcrumb`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`steps`,`heading`,`Steps without a page`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(e,l){e&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` The trail of pages leading to the current one, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.breadcrumb`),vi(),Zf(5,`. `),vi(),ce(6,`docs-example`,2),Zf(7,` Each item has a `),ce(8,`code`),Zf(9,`label`),vi(),Zf(10,` and a router `),ce(11,`code`),Zf(12,`link`),vi(),Zf(13,`. The last item is the current page and is never a link. `),vi(),ce(14,`docs-example`,3),Zf(15,` Leave out `),ce(16,`code`),Zf(17,`link`),vi(),Zf(18,` for a step that has no page of its own, such as a section. `),vi(),ce(19,`section`,4)(20,`h2`,5),Zf(21,`Accessibility`),vi(),ce(22,`p`),Zf(23,` The trail is a `),ce(24,`code`),Zf(25,`<nav>`),vi(),Zf(26,` named by `),ce(27,`code`),Zf(28,`label`),vi(),Zf(29,` (“Breadcrumb” by default) around an ordered list. The current page has `),ce(30,`code`),Zf(31,`aria-current="page"`),vi(),Zf(32,`, and the dividers are hidden from screen readers. `),vi()()()),e&2&&(Ot(`tab`,l.tab()),Tt(6),Ot(`component`,l.basic)(`sources`,l.sources.basic),Tt(8),Ot(`component`,l.steps)(`sources`,l.sources.steps))},dependencies:[ue$1,pe],encapsulation:2})};export{P as BreadcrumbPage};