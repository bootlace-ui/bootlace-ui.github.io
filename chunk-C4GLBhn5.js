import{A as J4,An as hg,At as W,Br as ui,Cr as rf,Ct as U0,G as Lr,Gr as vf,Gt as Yn,H as LU,I as K,In as jh,It as XR,Jt as Zf,Lr as uU,N as JR,Ot as Vm,Rn as jo,Rr as ue,Sn as fh,Tn as gf,Vt as Y3,W as Ll,Wr as ve,Yt as _F,_r as q3,ei as xh,et as Ot,f as Cf,ir as nf,ln as cj,on as ce,q as Mh,qr as vi,r as $f,ur as of,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import{n as Ba}from"./chunk-DycqepRM.js";import"./chunk-CfGjEUxa.js";import{n as q$1,r as x,t as N$1}from"./chunk-BOhm2mpp.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import"./chunk-yZF3fHTz.js";import"./chunk-D4gOm0ql.js";import{a as m,c as qe,i as ge,l as ye}from"./chunk-C045pKrZ.js";function ms(o,l){if(o&1){let t=gf();ce(0,`button`,13),ui(`click`,function(){let c=q3(t).$implicit,i=vf(2);return Y3(i.setSize(c))}),ce(1,`span`,14),Zf(2),vi(),ue(3,`ngs-icon`,15),vi()}if(o&2){let t=l.$implicit,a=vf(2);Ot(`checked`,t===a.size()),Tt(2),fh(t),Tt(),Ot(`icon`,a.check)}}function js(o,l){if(o&1&&(ce(0,`div`,11),of(1,ms,4,3,`button`,12,nf),vi()),o&2){let t=vf();Ot(`label`,t.i18n.linesPerPage),Tt(),rf(t.sizes())}}var u=class o$1{i18n=k(o).tablePagination;previous=uU;next=LU;check=_F;labelId=Ba(`ngs-tp-label`);rangeId=Ba(`ngs-tp-range`);sizeId=Ba(`ngs-tp-size`);total=Yn(0,{transform:l=>Math.max(Vm(l,0),0)});page=JR(0);size=JR(10);sizes=Yn([10,20,50,100]);label=Yn();paginationChange=XR();changed=W(!1);pageSize=jo(()=>Math.max(Math.floor(this.size()),1));pages=jo(()=>Math.max(Math.ceil(this.total()/this.pageSize()),1));current=jo(()=>Math.min(Math.max(Math.floor(this.page()),0),this.pages()-1));atStart=jo(()=>this.current()<=0);atEnd=jo(()=>this.current()>=this.pages()-1);from=jo(()=>this.total()?this.current()*this.pageSize()+1:0);to=jo(()=>Math.min(this.total(),(this.current()+1)*this.pageSize()));sizeText=jo(()=>this.i18n.pageSize.replace(`{size}`,String(this.size())));announcement=jo(()=>this.changed()?this.i18n.range.replace(`{from}`,String(this.from())).replace(`{to}`,String(this.to())).replace(`{total}`,String(this.total())):``);constructor(){J4(()=>{let l=this.current();K(()=>{this.total()>0&&this.page()!==l&&this.page.set(l)})})}go(l){let t=Math.min(Math.max(l,0),this.pages()-1);t!==this.current()&&(this.changed.set(!0),this.page.set(t),this.paginationChange.emit({page:t,size:this.size()}))}setSize(l){if(l===this.size())return;let t=Math.floor(this.current()*this.pageSize()/l);this.changed.set(!0),this.size.set(l),this.page.set(t),this.paginationChange.emit({page:t,size:l})}static ɵfac=function(t){return new(t||o$1)};static ɵcmp=ve({type:o$1,selectors:[[`ngs-table-pagination`]],hostAttrs:[1,`ngs-table-pagination`],inputs:{total:[1,`total`],page:[1,`page`],size:[1,`size`],sizes:[1,`sizes`],label:[1,`label`]},outputs:{page:`pageChange`,size:`sizeChange`,paginationChange:`paginationChange`},decls:26,vars:22,consts:[[`menu`,``],[`role`,`group`,1,`ngs-table-pagination-group`],[1,`ngs-table-pagination-pages`],[1,`ngs-table-pagination-lines`],[3,`id`],[`type`,`button`,1,`ngs-table-pagination-trigger`,3,`ngsDropdown`],[1,`visually-hidden`,3,`id`],[1,`ngs-table-pagination-nav`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-icon`,`btn-text`,3,`click`],[3,`icon`],[`role`,`status`,`aria-live`,`polite`,`aria-atomic`,`true`,1,`visually-hidden`],[`ngsMenu`,``,3,`label`],[`ngsMenuItem`,`radio`,3,`checked`],[`ngsMenuItem`,`radio`,3,`click`,`checked`],[1,`menu-item-content`],[1,`menu-item-check`,3,`icon`]],template:function(t,a){if(t&1&&(ce(0,`div`,1)(1,`span`,2),Zf(2),ce(3,`strong`),Zf(4),vi()(),ce(5,`span`,3)(6,`span`,4),Zf(7),vi(),Zf(8,` `),ce(9,`button`,5)(10,`strong`,4),Zf(11),vi()(),Zf(12),ce(13,`strong`),Zf(14),vi()(),ce(15,`span`,6),Zf(16),vi(),ce(17,`span`,7)(18,`button`,8),ui(`click`,function(){return a.go(a.current()-1)}),ue(19,`ngs-icon`,9),vi(),ce(20,`button`,8),ui(`click`,function(){return a.go(a.current()+1)}),ue(21,`ngs-icon`,9),vi()()(),ce(22,`span`,10),Zf(23),vi(),U0(24,js,3,1,`ng-template`,null,0,cj)),t&2){let c=Cf(25);Lr(`aria-label`,a.label()??a.i18n.label),Tt(2),hg(` `,a.i18n.pages,` `),Tt(2),fh(a.pages()),Tt(2),Ot(`id`,a.labelId),Tt(),fh(a.i18n.linesPerPage),Tt(2),Ot(`ngsDropdown`,c),Lr(`aria-labelledby`,a.labelId+` `+a.rangeId)(`aria-describedby`,a.sizeId),Tt(),Ot(`id`,a.rangeId),Tt(),jh(``,a.from(),`–`,a.to()),Tt(),hg(` `,a.i18n.of,` `),Tt(2),fh(a.total()),Tt(),Ot(`id`,a.sizeId),Tt(),fh(a.sizeText()),Tt(2),Lr(`aria-label`,a.i18n.previous)(`aria-disabled`,a.atStart()?`true`:null),Tt(),Ot(`icon`,a.previous),Tt(),Lr(`aria-label`,a.i18n.next)(`aria-disabled`,a.atEnd()?`true`:null),Tt(),Ot(`icon`,a.next),Tt(2),fh(a.announcement())}},dependencies:[Ll,q$1,x,N$1],encapsulation:2})};var N=class o{page=W(0);size=W(10);static ɵfac=function(t){return new(t||o)};static ɵcmp=ve({type:o,selectors:[[`docs-table-pagination-basic`]],decls:12,vars:5,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-8`],[3,`pageChange`,`sizeChange`,`total`,`page`,`size`],[1,`col-12`],[1,`mb-0`]],template:function(t,a){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-table-pagination`,2),xh(`pageChange`,function(i){return $f(a.page,i)||(a.page=i),i})(`sizeChange`,function(i){return $f(a.size,i)||(a.size=i),i}),vi()(),ce(3,`div`,3)(4,`p`,4),Zf(5,` Page `),ce(6,`code`),Zf(7),vi(),Zf(8,` (zero-based), `),ce(9,`code`),Zf(10),vi(),Zf(11,` rows per page. `),vi()()()),t&2&&(Tt(2),Ot(`total`,300),Mh(`page`,a.page)(`size`,a.size),Tt(5),fh(a.page()),Tt(3),fh(a.size()))},dependencies:[u],encapsulation:2})};var us=(o,l)=>l.id;function bs(o,l){if(o&1&&(ce(0,`tr`)(1,`td`),Zf(2),vi(),ce(3,`td`),Zf(4),vi(),ce(5,`td`),Zf(6),vi()()),o&2){let t=l.$implicit;Tt(2),hg(`#`,t.id),Tt(2),fh(t.customer),Tt(2),fh(t.amount)}}var cs=128;function ys(o,l){let t=Math.max(Math.min(l,cs-o*l),0),a=Array.from({length:t},(c,i)=>{let I=o*l+i+1;return{id:I,customer:`Customer ${String(I).padStart(3,`0`)}`,amount:20+I*37%180}});return new Promise(c=>setTimeout(()=>c(a),400))}var q=class o{page=W(0);size=W(10);rows=W([]);loading=W(!1);total=W(cs);latest=0;constructor(){this.load({page:0,size:10})}async load({page:l,size:t}){let a=++this.latest;this.loading.set(!0);let c=await ys(l,t);a===this.latest&&(this.rows.set(c),this.loading.set(!1))}static ɵfac=function(t){return new(t||o)};static ɵcmp=ve({type:o,selectors:[[`docs-table-pagination-server`]],decls:17,vars:5,consts:[[1,`row`,`g-0`],[1,`col-12`],[`label`,`Orders`],[`ngsTable`,``,`bordered`,``,3,`loading`,`rowCount`],[`label`,`Orders pagination`,3,`pageChange`,`sizeChange`,`paginationChange`,`total`,`page`,`size`]],template:function(t,a){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-table-container`,2)(3,`table`,3)(4,`thead`)(5,`tr`)(6,`th`),Zf(7,`Order`),vi(),ce(8,`th`),Zf(9,`Customer`),vi(),ce(10,`th`),Zf(11,`Amount`),vi()()(),ce(12,`tbody`),of(13,bs,7,3,`tr`,null,us),vi()()()(),ce(15,`div`,1)(16,`ngs-table-pagination`,4),xh(`pageChange`,function(i){return $f(a.page,i)||(a.page=i),i})(`sizeChange`,function(i){return $f(a.size,i)||(a.size=i),i}),ui(`paginationChange`,function(i){return a.load(i)}),vi()()()),t&2&&(Tt(3),Ot(`loading`,a.loading())(`rowCount`,a.total()),Tt(10),rf(a.rows()),Tt(3),Ot(`total`,a.total()),Mh(`page`,a.page)(`size`,a.size))},dependencies:[m,ye,u],encapsulation:2})};var M=class o{page=W(0);size=W(5);sizeOptions=[5,25,125];static ɵfac=function(t){return new(t||o)};static ɵcmp=ve({type:o,selectors:[[`docs-table-pagination-sizes`]],decls:12,vars:6,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-8`],[3,`pageChange`,`sizeChange`,`total`,`sizes`,`page`,`size`],[1,`col-12`],[1,`mb-0`]],template:function(t,a){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-table-pagination`,2),xh(`pageChange`,function(i){return $f(a.page,i)||(a.page=i),i})(`sizeChange`,function(i){return $f(a.size,i)||(a.size=i),i}),vi()(),ce(3,`div`,3)(4,`p`,4),Zf(5,` Page `),ce(6,`code`),Zf(7),vi(),Zf(8,`, `),ce(9,`code`),Zf(10),vi(),Zf(11,` rows per page. Go to page 4 (rows 21 to 25), then pick 25: row 21 stays on screen. `),vi()()()),t&2&&(Tt(2),Ot(`total`,237)(`sizes`,a.sizeOptions),Mh(`page`,a.page)(`size`,a.size),Tt(5),fh(a.page()),Tt(3),fh(a.size()))},dependencies:[u],encapsulation:2})};var fs=(o,l)=>l.id;function xs(o,l){if(o&1&&(ce(0,`tr`)(1,`td`),Zf(2),vi(),ce(3,`td`),Zf(4),vi(),ce(5,`td`),Zf(6),vi()()),o&2){let t=l.$implicit;Tt(2),fh(t.name),Tt(2),fh(t.born),Tt(2),fh(t.age)}}var A=[`Adler`,`Brooks`,`Chen`,`Diaz`,`Evans`,`Fischer`,`Gupta`,`Haddad`];var gs=[`Alex`,`Blake`,`Casey`,`Drew`,`Ellis`,`Finn`,`Gray`,`Harper`,`Indy`,`Jules`];var ws=Array.from({length:300},(o,l)=>{let t=18+l*7%60,a=String(1+l*5%12).padStart(2,`0`),c=String(1+l*11%28).padStart(2,`0`);return{id:l+1,name:`${A[l%A.length]}, ${gs[Math.floor(l/A.length)%gs.length]}`,born:`${c}.${a}.${2027-t}`,age:t}});var D=class o{sort=W({key:`name`,direction:`asc`});page=W(0);size=W(10);data=qe({rows:()=>ws,sort:this.sort,page:this.page,pageSize:this.size});static ɵfac=function(t){return new(t||o)};static ɵcmp=ve({type:o,selectors:[[`docs-table-pagination-table`]],decls:18,vars:5,consts:[[1,`row`,`g-0`],[1,`col-12`],[`ngsTable`,``,`bordered`,``,3,`sortChange`,`sort`,`rowCount`],[1,`visually-hidden`],[`ngsTh`,`name`],[`ngsTh`,`born`],[`ngsTh`,`age`],[`label`,`People pagination`,3,`pageChange`,`sizeChange`,`total`,`page`,`size`]],template:function(t,a){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`table`,2),xh(`sortChange`,function(i){return $f(a.sort,i)||(a.sort=i),i}),ce(3,`caption`,3),Zf(4,` People `),vi(),ce(5,`thead`)(6,`tr`)(7,`th`,4),Zf(8,`Name`),vi(),ce(9,`th`,5),Zf(10,`Date of birth`),vi(),ce(11,`th`,6),Zf(12,`Age`),vi()()(),ce(13,`tbody`),of(14,xs,7,3,`tr`,null,fs),vi()()(),ce(16,`div`,1)(17,`ngs-table-pagination`,7),xh(`pageChange`,function(i){return $f(a.page,i)||(a.page=i),i})(`sizeChange`,function(i){return $f(a.size,i)||(a.size=i),i}),vi()()()),t&2&&(Tt(2),Mh(`sort`,a.sort),Ot(`rowCount`,a.data.filtered().length),Tt(12),rf(a.data.visible()),Tt(3),Ot(`total`,a.data.filtered().length),Mh(`page`,a.page)(`size`,a.size))},dependencies:[m,ge,u],encapsulation:2})};var hs={basic:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-8">
    <ngs-table-pagination [total]="300" [(page)]="page" [(size)]="size" />
  </div>
  <div class="col-12">
    <p class="mb-0">
      Page <code>{{ page() }}</code> (zero-based), <code>{{ size() }}</code> rows per page.
    </p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-table-pagination</span> [<span class="hljs-attr">total</span>]=<span class="hljs-string">&quot;300&quot;</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [(<span class="hljs-attr">size</span>)]=<span class="hljs-string">&quot;size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>
      Page <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ page() }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> (zero-based), <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ size() }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> rows per page.
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsTablePagination } from '@bootlace/core/table-pagination';

@Component({
  selector: 'docs-table-pagination-basic',
  imports: [NgsTablePagination],
  templateUrl: './index.html',
})
export class TablePaginationBasicExample {
  protected readonly page = signal(0);
  protected readonly size = signal(10);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTablePagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table-pagination&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-pagination-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTablePagination</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TablePaginationBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> page = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> size = <span class="hljs-title function_">signal</span>(<span class="hljs-number">10</span>);
}`}},server:{html:{code:`<div class="row g-0">
  <div class="col-12">
    <ngs-table-container label="Orders">
      <table ngsTable bordered [loading]="loading()" [rowCount]="total()">
        <thead>
          <tr>
            <th>Order</th>
            <th>Customer</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          @for (order of rows(); track order.id) {
            <tr>
              <td>#{{ order.id }}</td>
              <td>{{ order.customer }}</td>
              <td>{{ order.amount }}</td>
            </tr>
          }
        </tbody>
      </table>
    </ngs-table-container>
  </div>
  <div class="col-12">
    <ngs-table-pagination
      label="Orders pagination"
      [total]="total()"
      [(page)]="page"
      [(size)]="size"
      (paginationChange)="load($event)"
    />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-0&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-table-container</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Orders&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> <span class="hljs-attr">bordered</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading()&quot;</span> [<span class="hljs-attr">rowCount</span>]=<span class="hljs-string">&quot;total()&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Order<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Customer<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Amount<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
          @for (order of rows(); track order.id) {
            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>#{{ order.id }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ order.customer }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ order.amount }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
          }
        <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-table-container</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-table-pagination</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Orders pagination&quot;</span>
      [<span class="hljs-attr">total</span>]=<span class="hljs-string">&quot;total()&quot;</span>
      [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span>
      [(<span class="hljs-attr">size</span>)]=<span class="hljs-string">&quot;size&quot;</span>
      (<span class="hljs-attr">paginationChange</span>)=<span class="hljs-string">&quot;load($event)&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsTable, NgsTableContainer } from '@bootlace/core/table';
import { NgsTablePagination, NgsTablePaginationChange } from '@bootlace/core/table-pagination';

interface Order {
  id: number;
  customer: string;
  amount: number;
}

const TOTAL = 128;

/** Stands in for an HTTP call: one page of orders after a short delay. */
function fetchOrders(page: number, size: number): Promise<Order[]> {
  const count = Math.max(Math.min(size, TOTAL - page * size), 0);
  const rows = Array.from({ length: count }, (_, i) => {
    const id = page * size + i + 1;
    return {
      id,
      customer: \`Customer \${String(id).padStart(3, '0')}\`,
      amount: 20 + ((id * 37) % 180),
    };
  });
  return new Promise((resolve) => setTimeout(() => resolve(rows), 400));
}

@Component({
  selector: 'docs-table-pagination-server',
  imports: [NgsTable, NgsTableContainer, NgsTablePagination],
  templateUrl: './index.html',
})
export class TablePaginationServerExample {
  protected readonly page = signal(0);
  protected readonly size = signal(10);
  protected readonly rows = signal<readonly Order[]>([]);
  protected readonly loading = signal(false);
  /** Normally set from each response. Keep the last value while the next one loads. */
  protected readonly total = signal(TOTAL);
  private latest = 0;

  constructor() {
    void this.load({ page: 0, size: 10 });
  }

  /** Called once per user change with the new page and size. */
  protected async load({ page, size }: NgsTablePaginationChange): Promise<void> {
    const request = ++this.latest;
    this.loading.set(true);
    const rows = await fetchOrders(page, size);
    // Ignore an answer that a newer request has overtaken.
    if (request !== this.latest) return;
    this.rows.set(rows);
    this.loading.set(false);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableContainer</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTablePagination</span>, <span class="hljs-title class_">NgsTablePaginationChange</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table-pagination&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Order</span> {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">customer</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">amount</span>: <span class="hljs-built_in">number</span>;
}

<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">TOTAL</span> = <span class="hljs-number">128</span>;

<span class="hljs-comment">/** Stands in for an HTTP call: one page of orders after a short delay. */</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">fetchOrders</span>(<span class="hljs-params"><span class="hljs-attr">page</span>: <span class="hljs-built_in">number</span>, <span class="hljs-attr">size</span>: <span class="hljs-built_in">number</span></span>): <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-title class_">Order</span>[]&gt; {
  <span class="hljs-keyword">const</span> count = <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">min</span>(size, <span class="hljs-variable constant_">TOTAL</span> - page * size), <span class="hljs-number">0</span>);
  <span class="hljs-keyword">const</span> rows = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: count }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> id = page * size + i + <span class="hljs-number">1</span>;
    <span class="hljs-keyword">return</span> {
      id,
      <span class="hljs-attr">customer</span>: <span class="hljs-string">\`Customer <span class="hljs-subst">\${<span class="hljs-built_in">String</span>(id).padStart(<span class="hljs-number">3</span>, <span class="hljs-string">&#x27;0&#x27;</span>)}</span>\`</span>,
      <span class="hljs-attr">amount</span>: <span class="hljs-number">20</span> + ((id * <span class="hljs-number">37</span>) % <span class="hljs-number">180</span>),
    };
  });
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">resolve</span>(rows), <span class="hljs-number">400</span>));
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-pagination-server&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableContainer</span>, <span class="hljs-title class_">NgsTablePagination</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TablePaginationServerExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> page = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> size = <span class="hljs-title function_">signal</span>(<span class="hljs-number">10</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> rows = signal&lt;<span class="hljs-keyword">readonly</span> <span class="hljs-title class_">Order</span>[]&gt;([]);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> loading = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-comment">/** Normally set from each response. Keep the last value while the next one loads. */</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> total = <span class="hljs-title function_">signal</span>(<span class="hljs-variable constant_">TOTAL</span>);
  <span class="hljs-keyword">private</span> latest = <span class="hljs-number">0</span>;

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {
    <span class="hljs-built_in">void</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">load</span>({ <span class="hljs-attr">page</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">size</span>: <span class="hljs-number">10</span> });
  }

  <span class="hljs-comment">/** Called once per user change with the new page and size. */</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">async</span> <span class="hljs-title function_">load</span>({ page, size }: <span class="hljs-title class_">NgsTablePaginationChange</span>): <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-built_in">void</span>&gt; {
    <span class="hljs-keyword">const</span> request = ++<span class="hljs-variable language_">this</span>.<span class="hljs-property">latest</span>;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">loading</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">const</span> rows = <span class="hljs-keyword">await</span> <span class="hljs-title function_">fetchOrders</span>(page, size);
    <span class="hljs-comment">// Ignore an answer that a newer request has overtaken.</span>
    <span class="hljs-keyword">if</span> (request !== <span class="hljs-variable language_">this</span>.<span class="hljs-property">latest</span>) <span class="hljs-keyword">return</span>;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">rows</span>.<span class="hljs-title function_">set</span>(rows);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">loading</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">false</span>);
  }
}`}},sizes:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-8">
    <ngs-table-pagination [total]="237" [sizes]="sizeOptions" [(page)]="page" [(size)]="size" />
  </div>
  <div class="col-12">
    <p class="mb-0">
      Page <code>{{ page() }}</code
      >, <code>{{ size() }}</code> rows per page. Go to page 4 (rows 21 to 25), then pick 25: row 21
      stays on screen.
    </p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-table-pagination</span> [<span class="hljs-attr">total</span>]=<span class="hljs-string">&quot;237&quot;</span> [<span class="hljs-attr">sizes</span>]=<span class="hljs-string">&quot;sizeOptions&quot;</span> [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span> [(<span class="hljs-attr">size</span>)]=<span class="hljs-string">&quot;size&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>
      Page <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ page() }}&lt;/code
      &gt;, <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ size() }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> rows per page. Go to page 4 (rows 21 to 25), then pick 25: row 21
      stays on screen.
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsTablePagination } from '@bootlace/core/table-pagination';

@Component({
  selector: 'docs-table-pagination-sizes',
  imports: [NgsTablePagination],
  templateUrl: './index.html',
})
export class TablePaginationSizesExample {
  protected readonly page = signal(0);
  protected readonly size = signal(5);
  protected readonly sizeOptions = [5, 25, 125];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTablePagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table-pagination&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-pagination-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTablePagination</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TablePaginationSizesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> page = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> size = <span class="hljs-title function_">signal</span>(<span class="hljs-number">5</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sizeOptions = [<span class="hljs-number">5</span>, <span class="hljs-number">25</span>, <span class="hljs-number">125</span>];
}`}},table:{html:{code:`<div class="row g-0">
  <div class="col-12">
    <table ngsTable bordered [(sort)]="sort" [rowCount]="data.filtered().length">
      <caption class="visually-hidden">
        People
      </caption>
      <thead>
        <tr>
          <th ngsTh="name">Name</th>
          <th ngsTh="born">Date of birth</th>
          <th ngsTh="age">Age</th>
        </tr>
      </thead>
      <tbody>
        @for (person of data.visible(); track person.id) {
          <tr>
            <td>{{ person.name }}</td>
            <td>{{ person.born }}</td>
            <td>{{ person.age }}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>
  <div class="col-12">
    <ngs-table-pagination
      label="People pagination"
      [total]="data.filtered().length"
      [(page)]="page"
      [(size)]="size"
    />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-0&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> <span class="hljs-attr">bordered</span> [(<span class="hljs-attr">sort</span>)]=<span class="hljs-string">&quot;sort&quot;</span> [<span class="hljs-attr">rowCount</span>]=<span class="hljs-string">&quot;data.filtered().length&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">caption</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;visually-hidden&quot;</span>&gt;</span>
        People
      <span class="hljs-tag">&lt;/<span class="hljs-name">caption</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;born&quot;</span>&gt;</span>Date of birth<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;age&quot;</span>&gt;</span>Age<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
        @for (person of data.visible(); track person.id) {
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ person.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ person.born }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ person.age }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        }
      <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-table-pagination</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;People pagination&quot;</span>
      [<span class="hljs-attr">total</span>]=<span class="hljs-string">&quot;data.filtered().length&quot;</span>
      [(<span class="hljs-attr">page</span>)]=<span class="hljs-string">&quot;page&quot;</span>
      [(<span class="hljs-attr">size</span>)]=<span class="hljs-string">&quot;size&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsTable, NgsTableSort, NgsTh, ngsTableData } from '@bootlace/core/table';
import { NgsTablePagination } from '@bootlace/core/table-pagination';

interface Person {
  id: number;
  name: string;
  born: string;
  age: number;
}

const FAMILY = ['Adler', 'Brooks', 'Chen', 'Diaz', 'Evans', 'Fischer', 'Gupta', 'Haddad'];
const GIVEN = [
  'Alex',
  'Blake',
  'Casey',
  'Drew',
  'Ellis',
  'Finn',
  'Gray',
  'Harper',
  'Indy',
  'Jules',
];

/** 300 people with predictable, made-up data. */
const PEOPLE: readonly Person[] = Array.from({ length: 300 }, (_, i) => {
  const age = 18 + ((i * 7) % 60);
  const month = String(1 + ((i * 5) % 12)).padStart(2, '0');
  const day = String(1 + ((i * 11) % 28)).padStart(2, '0');
  return {
    id: i + 1,
    name: \`\${FAMILY[i % FAMILY.length]}, \${GIVEN[Math.floor(i / FAMILY.length) % GIVEN.length]}\`,
    born: \`\${day}.\${month}.\${2027 - age}\`,
    age,
  };
});

@Component({
  selector: 'docs-table-pagination-table',
  imports: [NgsTable, NgsTh, NgsTablePagination],
  templateUrl: './index.html',
})
export class TablePaginationTableExample {
  protected readonly sort = signal<NgsTableSort | null>({ key: 'name', direction: 'asc' });
  protected readonly page = signal(0);
  protected readonly size = signal(10);

  /** \`page\` is zero-based, which is what \`ngsTableData\` expects, so the signals bind directly. */
  protected readonly data = ngsTableData({
    rows: () => PEOPLE,
    sort: this.sort,
    page: this.page,
    pageSize: this.size,
  });
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableSort</span>, <span class="hljs-title class_">NgsTh</span>, ngsTableData } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTablePagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table-pagination&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Person</span> {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">born</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">age</span>: <span class="hljs-built_in">number</span>;
}

<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">FAMILY</span> = [<span class="hljs-string">&#x27;Adler&#x27;</span>, <span class="hljs-string">&#x27;Brooks&#x27;</span>, <span class="hljs-string">&#x27;Chen&#x27;</span>, <span class="hljs-string">&#x27;Diaz&#x27;</span>, <span class="hljs-string">&#x27;Evans&#x27;</span>, <span class="hljs-string">&#x27;Fischer&#x27;</span>, <span class="hljs-string">&#x27;Gupta&#x27;</span>, <span class="hljs-string">&#x27;Haddad&#x27;</span>];
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">GIVEN</span> = [
  <span class="hljs-string">&#x27;Alex&#x27;</span>,
  <span class="hljs-string">&#x27;Blake&#x27;</span>,
  <span class="hljs-string">&#x27;Casey&#x27;</span>,
  <span class="hljs-string">&#x27;Drew&#x27;</span>,
  <span class="hljs-string">&#x27;Ellis&#x27;</span>,
  <span class="hljs-string">&#x27;Finn&#x27;</span>,
  <span class="hljs-string">&#x27;Gray&#x27;</span>,
  <span class="hljs-string">&#x27;Harper&#x27;</span>,
  <span class="hljs-string">&#x27;Indy&#x27;</span>,
  <span class="hljs-string">&#x27;Jules&#x27;</span>,
];

<span class="hljs-comment">/** 300 people with predictable, made-up data. */</span>
<span class="hljs-keyword">const</span> <span class="hljs-attr">PEOPLE</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">Person</span>[] = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">300</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> {
  <span class="hljs-keyword">const</span> age = <span class="hljs-number">18</span> + ((i * <span class="hljs-number">7</span>) % <span class="hljs-number">60</span>);
  <span class="hljs-keyword">const</span> month = <span class="hljs-title class_">String</span>(<span class="hljs-number">1</span> + ((i * <span class="hljs-number">5</span>) % <span class="hljs-number">12</span>)).<span class="hljs-title function_">padStart</span>(<span class="hljs-number">2</span>, <span class="hljs-string">&#x27;0&#x27;</span>);
  <span class="hljs-keyword">const</span> day = <span class="hljs-title class_">String</span>(<span class="hljs-number">1</span> + ((i * <span class="hljs-number">11</span>) % <span class="hljs-number">28</span>)).<span class="hljs-title function_">padStart</span>(<span class="hljs-number">2</span>, <span class="hljs-string">&#x27;0&#x27;</span>);
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">id</span>: i + <span class="hljs-number">1</span>,
    <span class="hljs-attr">name</span>: <span class="hljs-string">\`<span class="hljs-subst">\${FAMILY[i % FAMILY.length]}</span>, <span class="hljs-subst">\${GIVEN[<span class="hljs-built_in">Math</span>.floor(i / FAMILY.length) % GIVEN.length]}</span>\`</span>,
    <span class="hljs-attr">born</span>: <span class="hljs-string">\`<span class="hljs-subst">\${day}</span>.<span class="hljs-subst">\${month}</span>.<span class="hljs-subst">\${<span class="hljs-number">2027</span> - age}</span>\`</span>,
    age,
  };
});

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-pagination-table&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTh</span>, <span class="hljs-title class_">NgsTablePagination</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TablePaginationTableExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sort = signal&lt;<span class="hljs-title class_">NgsTableSort</span> | <span class="hljs-literal">null</span>&gt;({ <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;name&#x27;</span>, <span class="hljs-attr">direction</span>: <span class="hljs-string">&#x27;asc&#x27;</span> });
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> page = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> size = <span class="hljs-title function_">signal</span>(<span class="hljs-number">10</span>);

  <span class="hljs-comment">/** \`page\` is zero-based, which is what \`ngsTableData\` expects, so the signals bind directly. */</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> data = <span class="hljs-title function_">ngsTableData</span>({
    <span class="hljs-attr">rows</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-variable constant_">PEOPLE</span>,
    <span class="hljs-attr">sort</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">sort</span>,
    <span class="hljs-attr">page</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">page</span>,
    <span class="hljs-attr">pageSize</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">size</span>,
  });
}`}}};var ds=class o{tab=Yn(`examples`);sources=hs;basic=N;table=D;sizes=M;server=q;static ɵfac=function(t){return new(t||o)};static ɵcmp=ve({type:o,selectors:[[`docs-table-pagination-page`]],inputs:{tab:[1,`tab`]},decls:87,vars:9,consts:[[`heading`,`Table Pagination`,`package`,`@bootlace/core/table-pagination`,`path`,`/components/table/table-pagination`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`table`,`heading`,`With a sortable table`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Custom sizes`,3,`component`,`sources`],[`id`,`server`,`heading`,`Server paging`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,a){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` The footer of a table, after Taiga UI's `),ce(3,`code`),Zf(4,`tui-table-pagination`),vi(),Zf(5,`: "Pages 30, Lines per page 1–10 of 300" with a menu for the page size and compact previous and next buttons. It knows the row count, not the rows, so it pairs with `),ce(6,`code`),Zf(7,`ngsTableData`),vi(),Zf(8,` or with a server. `),ce(9,`code`),Zf(10,`page`),vi(),Zf(11,` is `),ce(12,`strong`),Zf(13,`zero-based`),vi(),Zf(14,`, like `),ce(15,`code`),Zf(16,`ngsPageRows`),vi(),Zf(17,` and `),ce(18,`code`),Zf(19,`ngsTableData`),vi(),Zf(20,`, so one signal feeds both. `),vi(),ce(21,`docs-example`,2),Zf(22,` Give it the total number of rows and bind `),ce(23,`code`),Zf(24,`[(page)]`),vi(),Zf(25,` and `),ce(26,`code`),Zf(27,`[(size)]`),vi(),Zf(28,`. The bold range is a button that opens the page-size menu; the buttons at the end go to the previous and next page and look disabled at the ends while staying focusable. `),vi(),ce(29,`docs-example`,3)(30,`code`),Zf(31,`ngsTableData`),vi(),Zf(32,` sorts 300 rows and returns the page to render, from the same `),ce(33,`code`),Zf(34,`page`),vi(),Zf(35,` and `),ce(36,`code`),Zf(37,`size`),vi(),Zf(38,` signals the footer writes. Choosing a new size recomputes the page, so the first row you were looking at stays on screen. `),vi(),ce(39,`docs-example`,4)(40,`code`),Zf(41,`sizes`),vi(),Zf(42,` (default 10, 20, 50, 100) sets the options of the menu. The current `),ce(43,`code`),Zf(44,`size`),vi(),Zf(45,` does not have to be one of them. `),vi(),ce(46,`docs-example`,5)(47,`code`),Zf(48,`paginationChange`),vi(),Zf(49,` emits `),ce(50,`code`),Zf(51,`{ page, size }`),vi(),Zf(52,` once per user change, which is the moment to request a page. Pass the total from the response, and keep the last value while a request is pending: an empty total leaves `),ce(53,`code`),Zf(54,`page`),vi(),Zf(55,` alone, but a smaller one pulls it back into range. `),vi(),ce(56,`section`,6)(57,`h2`,7),Zf(58,`Accessibility`),vi(),ce(59,`p`),Zf(60,` The footer is a `),ce(61,`code`),Zf(62,`role="group"`),vi(),Zf(63,` named "Table pagination" (or `),ce(64,`code`),Zf(65,`label`),vi(),Zf(66,`). The range button is named by the visible text, "Lines per page 1–10", and described by the current size ("10 per page"); it opens a menu whose items are `),ce(67,`code`),Zf(68,`menuitemradio`),vi(),Zf(69,` with the current size checked, with the usual arrow key, Home, End, type-ahead and Escape support of `),ce(70,`code`),Zf(71,`ngsMenu`),vi(),Zf(72,`. Previous and next are native buttons named "Previous page" and "Next page". At the ends they use `),ce(73,`code`),Zf(74,`aria-disabled`),vi(),Zf(75,` instead of `),ce(76,`code`),Zf(77,`disabled`),vi(),Zf(78,`, so focus is not lost when you reach the last page. `),vi(),ce(79,`p`),Zf(80,` A visually hidden polite live region announces the new range, "Rows 11–20 of 300", after each change made with the controls. It stays quiet on first render. Every string comes from `),ce(81,`code`),Zf(82,`NgsI18n.tablePagination`),vi(),Zf(83,`. The labels use the muted `),ce(84,`code`),Zf(85,`--fg-2`),vi(),Zf(86,` colour, which meets AA contrast. `),vi()()()),t&2&&(Ot(`tab`,a.tab()),Tt(21),Ot(`component`,a.basic)(`sources`,a.sources.basic),Tt(8),Ot(`component`,a.table)(`sources`,a.sources.table),Tt(10),Ot(`component`,a.sizes)(`sources`,a.sources.sizes),Tt(7),Ot(`component`,a.server)(`sources`,a.sources.server))},dependencies:[ue$1,pe],encapsulation:2})};export{ds as TablePaginationPage};