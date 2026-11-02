import{Gt as Yn,Jt as Zf,Wr as ve,et as Ot,on as ce,qr as vi,ti as xl,xt as Tt}from"./chunk-D9kFirzL.js";import{f as s}from"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";var p=class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=ve({type:e,selectors:[[`docs-footer-basic`]],decls:13,vars:0,consts:[[`aria-label`,`Footer`,1,`row`,`g-4`],[1,`col-auto`],[`routerLink`,`/information/about`],[`routerLink`,`/information/licensing`],[`href`,`https://github.com/Angular-Bootstrap-Project/angular-bootstrap`]],template:function(n,o){n&1&&(ce(0,`ngs-footer`)(1,`span`),Zf(2,`© 2026 Acme Inc.`),vi(),ce(3,`nav`,0)(4,`div`,1)(5,`a`,2),Zf(6,`About`),vi()(),ce(7,`div`,1)(8,`a`,3),Zf(9,`Licensing`),vi()(),ce(10,`div`,1)(11,`a`,4),Zf(12,`GitHub`),vi()()()())},dependencies:[s,xl],encapsulation:2})};var j={basic:{html:{code:`<ngs-footer>
  <span>\xA9 2026 Acme Inc.</span>
  <nav class="row g-4" aria-label="Footer">
    <div class="col-auto"><a routerLink="/information/about">About</a></div>
    <div class="col-auto"><a routerLink="/information/licensing">Licensing</a></div>
    <div class="col-auto">
      <a href="https://github.com/Angular-Bootstrap-Project/angular-bootstrap">GitHub</a>
    </div>
  </nav>
</ngs-footer>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-footer</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>\xA9 2026 Acme Inc.<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nav</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-4&quot;</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Footer&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/information/about&quot;</span>&gt;</span>About<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/information/licensing&quot;</span>&gt;</span>Licensing<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://github.com/Angular-Bootstrap-Project/angular-bootstrap&quot;</span>&gt;</span>GitHub<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nav</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-footer</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgsFooter } from '@bootlace/core/footer';

@Component({
  selector: 'docs-footer-basic',
  imports: [NgsFooter, RouterLink],
  templateUrl: './index.html',
})
export class FooterBasicExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFooter</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/footer&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-footer-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFooter</span>, <span class="hljs-title class_">RouterLink</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FooterBasicExample</span> {}`}}};var f=class e{tab=Yn(`examples`);sources=j;basic=p;static ɵfac=function(n){return new(n||e)};static ɵcmp=ve({type:e,selectors:[[`docs-footer-page`]],inputs:{tab:[1,`tab`]},decls:22,vars:3,consts:[[`heading`,`Footer`,`package`,`@bootlace/core/footer`,`path`,`/layout/footer`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(n,o){n&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A page footer in small secondary text, laid out as a wrapping row. `),vi(),ce(3,`docs-example`,2),Zf(4,` Its children are spread across the row and wrap on narrow screens. Inside `),ce(5,`code`),Zf(6,`<ngs-layout-content>`),vi(),Zf(7,` it becomes its own panel below the content, as on this page; elsewhere it has a divider above it. `),vi(),ce(8,`section`,3)(9,`h2`,4),Zf(10,`Accessibility`),vi(),ce(11,`p`),Zf(12,` The footer is the page's `),ce(13,`code`),Zf(14,`contentinfo`),vi(),Zf(15,` landmark, so use one per page. Give a group of links its own `),ce(16,`code`),Zf(17,`<nav>`),vi(),Zf(18,` with an `),ce(19,`code`),Zf(20,`aria-label`),vi(),Zf(21,`. `),vi()()()),n&2&&(Ot(`tab`,o.tab()),Tt(3),Ot(`component`,o.basic)(`sources`,o.sources.basic))},dependencies:[ue,pe],encapsulation:2})};export{f as FooterPage};