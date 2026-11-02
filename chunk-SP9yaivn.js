import{An as hg,At as W$1,Br as ui,Cr as rf,G as Lr,Gr as vf,Gt as Yn,H as LU,Jt as Zf,L as KC,Lr as uU,N as JR,Ot as Vm,Pt as XC,Rn as jo,Rr as ue,Tn as gf,Un as kg,Vt as Y3,W as Ll,Wr as ve,_r as q3,b as GF,ei as xh,et as Ot,i as $t,ir as nf,jt as WF,mn as dh,on as ce,q as Mh,qr as vi,r as $f,ur as of,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";function oa(l,i){if(l&1){let a=gf();ce(0,`li`,0)(1,`button`,1),ui(`click`,function(){q3(a);let g=vf(2);return Y3(g.go(1))}),ue(2,`ngs-icon`,2),vi()()}if(l&2){let a=vf(2);Tt(),dh(`disabled`,a.atStart()),Ot(`disabled`,a.disabled()),Lr(`aria-disabled`,!a.disabled()&&a.atStart()?`true`:null)(`aria-label`,a.i18n.pagination.first)(`title`,a.i18n.pagination.first),Tt(),Ot(`icon`,a.first)}}function ra(l,i){if(l&1){let a=gf();KC(0,oa,3,7,`li`,0),ce(1,`li`,0)(2,`button`,1),ui(`click`,function(){q3(a);let g=vf();return Y3(g.go(g.current()-1))}),ue(3,`ngs-icon`,2),vi()()}if(l&2){let a=vf();XC(a.edges()?0:-1),Tt(2),dh(`disabled`,a.atStart()),Ot(`disabled`,a.disabled()),Lr(`aria-disabled`,!a.disabled()&&a.atStart()?`true`:null)(`aria-label`,a.i18n.pagination.previous)(`title`,a.i18n.pagination.previous),Tt(),Ot(`icon`,a.previous)}}function ga(l,i){l&1&&(ce(0,`li`,3)(1,`span`,4),Zf(2,`…`),vi()())}function ca(l,i){if(l&1){let a=gf();ce(0,`li`,0)(1,`button`,1),ui(`click`,function(){q3(a);let g=vf().$implicit,p=vf();return Y3(p.go(g))}),Zf(2),vi()()}if(l&2){let a=vf().$implicit,s=vf();Tt(),dh(`active`,a===s.current()),Ot(`disabled`,s.disabled()),Lr(`aria-current`,a===s.current()?`page`:null)(`aria-label`,s.pageLabel(a)),Tt(),hg(` `,a,` `)}}function da(l,i){if(l&1&&KC(0,ga,3,0,`li`,3)(1,ca,3,6,`li`,0),l&2){let a=i.$implicit;XC(a===`ellipsis-start`||a===`ellipsis-end`?0:1)}}function ma(l,i){if(l&1){let a=gf();ce(0,`li`,0)(1,`button`,1),ui(`click`,function(){q3(a);let g=vf(2);return Y3(g.go(g.length()))}),ue(2,`ngs-icon`,2),vi()()}if(l&2){let a=vf(2);Tt(),dh(`disabled`,a.atEnd()),Ot(`disabled`,a.disabled()),Lr(`aria-disabled`,!a.disabled()&&a.atEnd()?`true`:null)(`aria-label`,a.i18n.pagination.last)(`title`,a.i18n.pagination.last),Tt(),Ot(`icon`,a.last)}}function ha(l,i){if(l&1){let a=gf();ce(0,`li`,0)(1,`button`,1),ui(`click`,function(){q3(a);let g=vf();return Y3(g.go(g.current()+1))}),ue(2,`ngs-icon`,2),vi()(),KC(3,ma,3,7,`li`,0)}if(l&2){let a=vf();Tt(),dh(`disabled`,a.atEnd()),Ot(`disabled`,a.disabled()),Lr(`aria-disabled`,!a.disabled()&&a.atEnd()?`true`:null)(`aria-label`,a.i18n.pagination.next)(`title`,a.i18n.pagination.next),Tt(),Ot(`icon`,a.next),Tt(),XC(a.edges()?3:-1)}}function ua(l,i,a=1,s=1){let g=(R,la)=>Array.from({length:Math.max(la-R+1,0)},(ja,pa)=>R+pa);if(i<=(s+a)*2+3)return g(1,i);let p=g(1,s),U=g(i-s+1,i),F=Math.max(Math.min(l-a,i-s-a*2-1),s+2),O=Math.min(Math.max(l+a,s+a*2+2),U.length>0?U[0]-2:i-1),x=[...p];return F>s+2?x.push(`ellipsis-start`):s+1<i-s&&x.push(s+1),x.push(...g(F,O)),O<i-s-1?x.push(`ellipsis-end`):i-s>s&&x.push(i-s),x.push(...U),x}var y=class l{i18n=k(o);first=GF;previous=uU;next=LU;last=WF;page=JR(1);length=Yn(1,{transform:i=>Math.max(Vm(i,1),1)});siblings=Yn(1,{transform:i=>Math.max(Vm(i,1),0)});boundary=Yn(1,{transform:i=>Math.max(Vm(i,1),0)});edges=Yn(!1,{transform:$t});pagesOnly=Yn(!1,{transform:$t});disabled=Yn(!1,{transform:$t});size=Yn(`md`);color=Yn();label=Yn();current=jo(()=>Math.min(Math.max(this.page(),1),this.length()));atStart=jo(()=>this.current()<=1);atEnd=jo(()=>this.current()>=this.length());items=jo(()=>ua(this.current(),this.length(),this.siblings(),this.boundary()));classes=jo(()=>{let i=[`pagination`];return this.size()!==`md`&&i.push(`pagination-${this.size()}`),this.color()&&i.push(`theme-${this.color()}`),i.join(` `)});pageLabel(i){return this.i18n.pagination.page.replace(`{page}`,String(i))}go(i){let a=Math.min(Math.max(i,1),this.length());this.disabled()||a===this.current()||this.page.set(a)}static ɵfac=function(a){return new(a||l)};static ɵcmp=ve({type:l,selectors:[[`ngs-pagination`]],hostAttrs:[1,`ngs-pagination`],inputs:{page:[1,`page`],length:[1,`length`],siblings:[1,`siblings`],boundary:[1,`boundary`],edges:[1,`edges`],pagesOnly:[1,`pagesOnly`],disabled:[1,`disabled`],size:[1,`size`],color:[1,`color`],label:[1,`label`]},outputs:{page:`pageChange`},decls:6,vars:5,consts:[[1,`page-item`],[`type`,`button`,1,`page-link`,3,`click`,`disabled`],[3,`icon`],[`aria-hidden`,`true`,1,`page-item`,`ngs-pagination-gap`],[1,`page-link`]],template:function(a,s){a&1&&(ce(0,`nav`)(1,`ul`),KC(2,ra,4,8),of(3,da,2,1,null,null,nf),KC(5,ha,4,8),vi()()),a&2&&(Lr(`aria-label`,s.label()??s.i18n.pagination.label),Tt(),kg(s.classes()),Tt(),XC(s.pagesOnly()?-1:2),Tt(),rf(s.items()),Tt(2),XC(s.pagesOnly()?-1:5))},dependencies:[Ll],encapsulation:2})};var W=class l{page=W$1(11);static ɵfac=function(a){return new(a||l)};static ɵcmp=ve({type:l,selectors:[[`docs-pagination-basic`]],decls:6,vars:3,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-12`],[3,`pageChange`,`page`,`length`],[1,`mb-0`]],template:function(a,s){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-pagination`,2),xh(`pageChange`,function(p){return $f(s.page,p)||(s.page=p),p}),vi()(),ce(3,`div`,1)(4,`p`,3),Zf(5),vi()()()),a&2&&(Tt(2),Mh(`page`,s.page),Ot(`length`,64),Tt(3),hg(`Page `,s.page(),` of 64`))},dependencies:[y],encapsulation:2})};var I=class l{page=W$1(1);static ɵfac=function(a){return new(a||l)};static ɵcmp=ve({type:l,selectors:[[`docs-pagination-edges`]],decls:1,vars:2,consts:[[`edges`,``,3,`pageChange`,`page`,`length`]],template:function(a,s){a&1&&(ce(0,`ngs-pagination`,0),xh(`pageChange`,function(p){return $f(s.page,p)||(s.page=p),p}),vi()),a&2&&(Mh(`page`,s.page),Ot(`length`,12))},dependencies:[y],encapsulation:2})};var B=class l{page=W$1(3);static ɵfac=function(a){return new(a||l)};static ɵcmp=ve({type:l,selectors:[[`docs-pagination-sizes`]],decls:7,vars:6,consts:[[1,`row`,`g-3`],[1,`col-12`],[`size`,`sm`,3,`pageChange`,`page`,`length`],[3,`pageChange`,`page`,`length`],[`size`,`lg`,3,`pageChange`,`page`,`length`]],template:function(a,s){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-pagination`,2),xh(`pageChange`,function(p){return $f(s.page,p)||(s.page=p),p}),vi()(),ce(3,`div`,1)(4,`ngs-pagination`,3),xh(`pageChange`,function(p){return $f(s.page,p)||(s.page=p),p}),vi()(),ce(5,`div`,1)(6,`ngs-pagination`,4),xh(`pageChange`,function(p){return $f(s.page,p)||(s.page=p),p}),vi()()()),a&2&&(Tt(2),Mh(`page`,s.page),Ot(`length`,9),Tt(2),Mh(`page`,s.page),Ot(`length`,9),Tt(2),Mh(`page`,s.page),Ot(`length`,9))},dependencies:[y],encapsulation:2})};var V=class l{page=W$1(2);static ɵfac=function(a){return new(a||l)};static ɵcmp=ve({type:l,selectors:[[`docs-pagination-states`]],decls:9,vars:4,consts:[[1,`row`,`g-3`],[1,`col-12`],[1,`mb-1`],[`pagesOnly`,``,`color`,`success`,3,`pageChange`,`page`,`length`],[`disabled`,``,3,`pageChange`,`page`,`length`]],template:function(a,s){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`p`,2),Zf(3,`Pages only`),vi(),ce(4,`ngs-pagination`,3),xh(`pageChange`,function(p){return $f(s.page,p)||(s.page=p),p}),vi()(),ce(5,`div`,1)(6,`p`,2),Zf(7,`Disabled`),vi(),ce(8,`ngs-pagination`,4),xh(`pageChange`,function(p){return $f(s.page,p)||(s.page=p),p}),vi()()()),a&2&&(Tt(4),Mh(`page`,s.page),Ot(`length`,5),Tt(4),Mh(`page`,s.page),Ot(`length`,5))},dependencies:[y],encapsulation:2})};var L=class l{page=W$1(11);static ɵfac=function(a){return new(a||l)};static ɵcmp=ve({type:l,selectors:[[`docs-pagination-window`]],decls:9,vars:6,consts:[[1,`row`,`g-3`],[1,`col-12`],[1,`mb-1`],[3,`pageChange`,`page`,`length`,`siblings`],[3,`pageChange`,`page`,`length`,`boundary`]],template:function(a,s){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`p`,2),Zf(3,`siblings 2`),vi(),ce(4,`ngs-pagination`,3),xh(`pageChange`,function(p){return $f(s.page,p)||(s.page=p),p}),vi()(),ce(5,`div`,1)(6,`p`,2),Zf(7,`boundary 3`),vi(),ce(8,`ngs-pagination`,4),xh(`pageChange`,function(p){return $f(s.page,p)||(s.page=p),p}),vi()()()),a&2&&(Tt(4),Mh(`page`,s.page),Ot(`length`,64)(`siblings`,2),Tt(4),Mh(`page`,s.page),Ot(`length`,64)(`boundary`,3))},dependencies:[y],encapsulation:2})};var ta={basic:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-12">
    <ngs-pagination [(page)]="page" [length]="64" />
  </div>
  <div class="col-12">
    <p class="mb-0">Page {{ page() }} of 64</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pagination</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [<span class="hljs-attr">length</span>]=<span class="hljs-string">&quot;64&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Page {{ page() }} of 64<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsPagination } from '@bootlace/core/pagination';

@Component({
  selector: 'docs-pagination-basic',
  imports: [NgsPagination],
  templateUrl: './index.html',
})
export class PaginationBasicExample {
  protected readonly page = signal(11);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/pagination&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-pagination-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsPagination</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PaginationBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> page = <span class="hljs-title function_">signal</span>(<span class="hljs-number">11</span>);
}`}},edges:{html:{code:`<ngs-pagination [(page)]="page" [length]="12" edges />`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-pagination</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [<span class="hljs-attr">length</span>]=<span class="hljs-string">&quot;12&quot;</span> <span class="hljs-attr">edges</span> /&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsPagination } from '@bootlace/core/pagination';

@Component({
  selector: 'docs-pagination-edges',
  imports: [NgsPagination],
  templateUrl: './index.html',
})
export class PaginationEdgesExample {
  protected readonly page = signal(1);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/pagination&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-pagination-edges&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsPagination</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PaginationEdgesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> page = <span class="hljs-title function_">signal</span>(<span class="hljs-number">1</span>);
}`}},sizes:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <ngs-pagination [(page)]="page" [length]="9" size="sm" />
  </div>
  <div class="col-12">
    <ngs-pagination [(page)]="page" [length]="9" />
  </div>
  <div class="col-12">
    <ngs-pagination [(page)]="page" [length]="9" size="lg" />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pagination</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [<span class="hljs-attr">length</span>]=<span class="hljs-string">&quot;9&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pagination</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [<span class="hljs-attr">length</span>]=<span class="hljs-string">&quot;9&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pagination</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [<span class="hljs-attr">length</span>]=<span class="hljs-string">&quot;9&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsPagination } from '@bootlace/core/pagination';

@Component({
  selector: 'docs-pagination-sizes',
  imports: [NgsPagination],
  templateUrl: './index.html',
})
export class PaginationSizesExample {
  protected readonly page = signal(3);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/pagination&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-pagination-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsPagination</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PaginationSizesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> page = <span class="hljs-title function_">signal</span>(<span class="hljs-number">3</span>);
}`}},states:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <p class="mb-1">Pages only</p>
    <ngs-pagination [(page)]="page" [length]="5" pagesOnly color="success" />
  </div>
  <div class="col-12">
    <p class="mb-1">Disabled</p>
    <ngs-pagination [(page)]="page" [length]="5" disabled />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Pages only<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pagination</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [<span class="hljs-attr">length</span>]=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">pagesOnly</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Disabled<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pagination</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [<span class="hljs-attr">length</span>]=<span class="hljs-string">&quot;5&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsPagination } from '@bootlace/core/pagination';

@Component({
  selector: 'docs-pagination-states',
  imports: [NgsPagination],
  templateUrl: './index.html',
})
export class PaginationStatesExample {
  protected readonly page = signal(2);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/pagination&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-pagination-states&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsPagination</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PaginationStatesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> page = <span class="hljs-title function_">signal</span>(<span class="hljs-number">2</span>);
}`}},window:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <p class="mb-1">siblings 2</p>
    <ngs-pagination [(page)]="page" [length]="64" [siblings]="2" />
  </div>
  <div class="col-12">
    <p class="mb-1">boundary 3</p>
    <ngs-pagination [(page)]="page" [length]="64" [boundary]="3" />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>siblings 2<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pagination</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [<span class="hljs-attr">length</span>]=<span class="hljs-string">&quot;64&quot;</span> [<span class="hljs-attr">siblings</span>]=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>boundary 3<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-pagination</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [<span class="hljs-attr">length</span>]=<span class="hljs-string">&quot;64&quot;</span> [<span class="hljs-attr">boundary</span>]=<span class="hljs-string">&quot;3&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsPagination } from '@bootlace/core/pagination';

@Component({
  selector: 'docs-pagination-window',
  imports: [NgsPagination],
  templateUrl: './index.html',
})
export class PaginationWindowExample {
  protected readonly page = signal(11);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsPagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/pagination&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-pagination-window&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsPagination</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">PaginationWindowExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> page = <span class="hljs-title function_">signal</span>(<span class="hljs-number">11</span>);
}`}}};var ia=class l{tab=Yn(`examples`);sources=ta;basic=W;window=L;edges=I;sizes=B;states=V;static ɵfac=function(a){return new(a||l)};static ɵcmp=ve({type:l,selectors:[[`docs-pagination-page`]],inputs:{tab:[1,`tab`]},decls:88,vars:11,consts:[[`heading`,`Pagination`,`package`,`@bootlace/core/pagination`,`path`,`/navigation/pagination`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`window`,`heading`,`Visible pages`,3,`component`,`sources`],[`id`,`edges`,`heading`,`First and last`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`id`,`states`,`heading`,`Pages only and disabled`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(a,s){a&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` Page navigation built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.pagination`),vi(),Zf(5,`, with the borderless look of Taiga UI's pagination. It takes the total number of pages in `),ce(6,`code`),Zf(7,`length`),vi(),Zf(8,` and binds the current one with `),ce(9,`code`),Zf(10,`[(page)]`),vi(),Zf(11,`, starting at 1. Long ranges collapse into a window of pages with ellipses. `),vi(),ce(12,`docs-example`,2),Zf(13,` The window always shows the first and last page, the current page and one page either side, with an ellipsis for each gap. Its size stays the same while you page. The model is the page count rather than an item total and page size, so the component stays a plain "page n of N" control; a list that knows its item total divides it by the page size itself. `),vi(),ce(14,`docs-example`,3)(15,`code`),Zf(16,`siblings`),vi(),Zf(17,` sets how many pages show either side of the current one (Taiga's `),ce(18,`code`),Zf(19,`activePadding`),vi(),Zf(20,`) and `),ce(21,`code`),Zf(22,`boundary`),vi(),Zf(23,` how many always show at each end (`),ce(24,`code`),Zf(25,`sidePadding`),vi(),Zf(26,`). `),vi(),ce(27,`docs-example`,4)(28,`code`),Zf(29,`edges`),vi(),Zf(30,` adds buttons that jump to the first and last page. The previous and next buttons at the end of the range stay focusable and are marked `),ce(31,`code`),Zf(32,`aria-disabled`),vi(),Zf(33,`. `),vi(),ce(34,`docs-example`,5)(35,`code`),Zf(36,`size`),vi(),Zf(37,` is `),ce(38,`code`),Zf(39,`sm`),vi(),Zf(40,`, `),ce(41,`code`),Zf(42,`md`),vi(),Zf(43,` (default) or `),ce(44,`code`),Zf(45,`lg`),vi(),Zf(46,`. `),vi(),ce(47,`docs-example`,6)(48,`code`),Zf(49,`pagesOnly`),vi(),Zf(50,` drops the previous and next buttons. `),ce(51,`code`),Zf(52,`color`),vi(),Zf(53,` sets the colour of the current page and `),ce(54,`code`),Zf(55,`disabled`),vi(),Zf(56,` disables every button. `),vi(),ce(57,`section`,7)(58,`h2`,8),Zf(59,`Accessibility`),vi(),ce(60,`p`),Zf(61,` The control is a `),ce(62,`code`),Zf(63,`<nav>`),vi(),Zf(64,` landmark named by `),ce(65,`code`),Zf(66,`label`),vi(),Zf(67,` (default "Pagination") holding a list of real `),ce(68,`code`),Zf(69,`<button>`),vi(),Zf(70,`s, so every page is a tab stop and Enter or Space activates it. The current page has `),ce(71,`code`),Zf(72,`aria-current="page"`),vi(),Zf(73,`. Page buttons are named "Page n" and the previous, next, first and last buttons are icon buttons with translated names; all strings come from `),ce(74,`code`),Zf(75,`NGS_I18N.pagination`),vi(),Zf(76,`. The ellipses are hidden from assistive technology. `),vi(),ce(77,`p`),Zf(78,` Previous and next use `),ce(79,`code`),Zf(80,`aria-disabled`),vi(),Zf(81,` at the end of the range instead of the `),ce(82,`code`),Zf(83,`disabled`),vi(),Zf(84,` attribute, so focus does not vanish when the last page is reached. Disabling the whole control uses the `),ce(85,`code`),Zf(86,`disabled`),vi(),Zf(87,` attribute. `),vi()()()),a&2&&(Ot(`tab`,s.tab()),Tt(12),Ot(`component`,s.basic)(`sources`,s.sources.basic),Tt(2),Ot(`component`,s.window)(`sources`,s.sources.window),Tt(13),Ot(`component`,s.edges)(`sources`,s.sources.edges),Tt(7),Ot(`component`,s.sizes)(`sources`,s.sources.sizes),Tt(13),Ot(`component`,s.states)(`sources`,s.sources.states))},dependencies:[ue$1,pe],encapsulation:2})};export{ia as PaginationPage};