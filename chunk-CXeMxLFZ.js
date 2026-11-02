import{An as hg,At as W,Br as ui,Cr as rf,Et as Va,F as Jo,G as Lr,Gt as Yn,Hn as kf,Jt as Zf,N as JR,Rn as jo,Rr as ue,Sn as fh,Un as kg,W as Ll,Wr as ve,Zr as wf,cn as ch,ei as xh,et as Ot,i as $t,ir as nf,kn as hf,l as BU,on as ce,q as Mh,qr as vi,r as $f,t as $8,ur as of,vr as qF,xt as Tt,yr as rA,zn as k$1}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import{n as Ba}from"./chunk-DycqepRM.js";import{t as c}from"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as N}from"./chunk-DX4JeZih.js";import{t as f}from"./chunk-_QnoVoFv.js";import{t as y$1}from"./chunk-C5VGU11Q.js";var ms=[`*`];var j=class e{color=Yn();variant=Yn(`default`);classes=jo(()=>{let p=[`card`],t=this.color();return t&&p.push(`theme-${t}`),this.variant()===`subtle`&&p.push(`card-subtle`),p.join(` `)});static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`ngs-card`]],hostVars:2,hostBindings:function(t,l){t&2&&kg(l.classes())},inputs:{color:[1,`color`],variant:[1,`variant`]},ngContentSelectors:ms,decls:1,vars:0,template:function(t,l){t&1&&(kf(),hf(0))},encapsulation:2})};var F=class e{static ɵfac=function(t){return new(t||e)};static ɵdir=Jo({type:e,selectors:[[``,`ngsCardHeader`,``]],hostAttrs:[1,`card-header`]})};var v=class e{static ɵfac=function(t){return new(t||e)};static ɵdir=Jo({type:e,selectors:[[``,`ngsCardBody`,``]],hostAttrs:[1,`card-body`]})};var M=class e{static ɵfac=function(t){return new(t||e)};static ɵdir=Jo({type:e,selectors:[[``,`ngsCardSubtitle`,``]],hostAttrs:[1,`card-subtitle`]})};var k=class e{static ɵfac=function(t){return new(t||e)};static ɵdir=Jo({type:e,selectors:[[``,`ngsCardFooter`,``]],hostAttrs:[1,`card-footer`]})};var P=class e{ngsCardImg=Yn(`top`);classes=jo(()=>this.ngsCardImg()===`bottom`?`card-img-bottom`:`card-img-top`);static ɵfac=function(t){return new(t||e)};static ɵdir=Jo({type:e,selectors:[[`img`,`ngsCardImg`,``]],hostVars:2,hostBindings:function(t,l){t&2&&kg(l.classes())},inputs:{ngsCardImg:[1,`ngsCardImg`]}})};var js=[`*`,[[``,`ngsCollapsibleContent`,``]]];var us=[`*`,`[ngsCollapsibleContent]`];var d=class e{id=Ba(`ngs-collapsible-title`);static ɵfac=function(t){return new(t||e)};static ɵdir=Jo({type:e,selectors:[[``,`ngsCollapsibleTitle`,``]],hostVars:1,hostBindings:function(t,l){t&2&&Va(`id`,l.id)}})};var y=class e{static ɵfac=function(t){return new(t||e)};static ɵdir=Jo({type:e,selectors:[[``,`ngsCollapsibleContent`,``]]})};var b=class e{animation=k$1(N).animation;i18n=k$1(o);toggleId=Ba(`ngs-collapsible-toggle`);regionId=Ba(`ngs-collapsible-region`);chevron=qF;title=rA(d);expanded=JR(!1);disabled=Yn(!1,{transform:$t});expandLabel=Yn();collapseLabel=Yn();label=jo(()=>this.expanded()?this.collapseLabel()??this.i18n.collapse:this.expandLabel()??this.i18n.expand);classes=jo(()=>{let p=[`card`,`ngs-collapsible-card`];return this.expanded()&&p.push(`ngs-collapsible-expanded`),this.animation||p.push(`ngs-collapsible-static`),p.join(` `)});static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`ngs-collapsible-card`]],contentQueries:function(t,l,f){t&1&&ch(f,l.title,d,5),t&2&&wf()},hostVars:2,hostBindings:function(t,l){t&2&&kg(l.classes())},inputs:{expanded:[1,`expanded`],disabled:[1,`disabled`],expandLabel:[1,`expandLabel`],collapseLabel:[1,`collapseLabel`]},outputs:{expanded:`expandedChange`},ngContentSelectors:us,decls:9,vars:9,consts:[[1,`row`,`g-3`],[1,`col`],[1,`col-auto`,`align-self-end`],[`ngsIconButton`,``,`color`,`secondary`,`variant`,`subtle`,`size`,`sm`,1,`ngs-collapsible-toggle`,3,`click`,`icon`,`label`,`id`,`disabled`],[`role`,`region`,1,`ngs-collapsible-region`,3,`id`],[1,`ngs-collapsible-region-inner`],[1,`ngs-collapsible-region-content`]],template:function(t,l){t&1&&(kf(js),ce(0,`div`,0)(1,`div`,1),hf(2),vi(),ce(3,`div`,2)(4,`button`,3),ui(`click`,function(){return l.expanded.set(!l.expanded())}),vi()()(),ce(5,`div`,4)(6,`div`,5)(7,`div`,6),hf(8,1),vi()()()),t&2&&(Tt(4),Ot(`icon`,l.chevron)(`label`,l.label())(`id`,l.toggleId)(`disabled`,l.disabled()),Lr(`aria-expanded`,l.expanded())(`aria-controls`,l.regionId),Tt(),Ot(`id`,l.regionId),Lr(`aria-labelledby`,l.title()?.id??l.toggleId)(`inert`,l.expanded()?null:``))},dependencies:[y$1],encapsulation:2})};var A=class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-card-basic`]],decls:12,vars:0,consts:[[1,`row`],[1,`col-12`,`md:col-6`],[`ngsCardBody`,``],[`ngsCardSubtitle`,``],[`ngsButton`,``,`href`,`#basic`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-card`)(3,`div`,2)(4,`h5`),Zf(5,`Card title`),vi(),ce(6,`h6`,3),Zf(7,`Card subtitle`),vi(),ce(8,`p`),Zf(9,`Some quick example text that builds on the card title and fills the card.`),vi(),ce(10,`a`,4),Zf(11,`Go somewhere`),vi()()()()())},dependencies:[j,v,M,f],encapsulation:2})};var U=class e{open=W(!0);locked=W(!1);static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-card-controlled`]],decls:21,vars:4,consts:[[1,`bg-1`,`rounded-7`,`p-4`],[1,`row`,`g-3`,`align-items-center`],[1,`col-12`,`xl:col-10`],[3,`expandedChange`,`expanded`,`disabled`],[`ngsCollapsibleTitle`,``,1,`h5`],[1,`fg-2`,`mb-0`],[`ngsCollapsibleContent`,``],[1,`row`,`g-3`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[`ngsButton`,``,`variant`,`text`,3,`click`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`ngs-collapsible-card`,3),xh(`expandedChange`,function(O){return $f(l.open,O)||(l.open=O),O}),ce(4,`h3`,4),Zf(5,`Controlled card`),vi(),ce(6,`p`,5),Zf(7,`Bound with `),ce(8,`code`),Zf(9,`[(expanded)]`),vi(),Zf(10,`.`),vi(),ce(11,`div`,6)(12,`div`,0),Zf(13,` The toggle and the buttons below drive the same state. `),vi()()()()()(),ce(14,`div`,7)(15,`div`,8)(16,`button`,9),ui(`click`,function(){return l.open.set(!l.open())}),Zf(17),vi()(),ce(18,`div`,8)(19,`button`,10),ui(`click`,function(){return l.locked.set(!l.locked())}),Zf(20),vi()()()),t&2&&(Tt(3),Mh(`expanded`,l.open),Ot(`disabled`,l.locked()),Tt(14),hg(` `,l.open()?`Collapse`:`Expand`,` from outside `),Tt(3),hg(` `,l.locked()?`Enable`:`Disable`,` toggle `))},dependencies:[b,d,y,f],encapsulation:2})};function vs(e,p){if(e&1&&(ce(0,`div`,1)(1,`ngs-card`,2)(2,`div`,3)(3,`h5`),Zf(4),vi(),ce(5,`p`),Zf(6,`A card in a responsive grid: one column on phones, two from sm, three from lg.`),vi()(),ce(7,`div`,4),Zf(8,`Updated today`),vi()()()),e&2){let t=p.$implicit;Tt(4),fh(t)}}var H=class e{items=[`Design`,`Develop`,`Deploy`,`Monitor`,`Learn`,`Repeat`];static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-card-grid`]],decls:3,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`sm:col-6`,`lg:col-4`],[1,`h-100`],[`ngsCardBody`,``],[`ngsCardFooter`,``]],template:function(t,l){t&1&&(ce(0,`div`,0),of(1,vs,9,1,`div`,1,nf),vi()),t&2&&(Tt(),rf(l.items))},dependencies:[j,v,k],encapsulation:2})};var R=class e{image=`data:image/svg+xml;utf8,`+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="120"><rect width="400" height="120" fill="#adb5bd"/></svg>`);static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-card-parts`]],decls:23,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`ngsCardImg`,``,`alt`,``,3,`src`],[`ngsCardHeader`,``],[`ngsCardBody`,``],[`ngsCardFooter`,``],[`color`,`info`,`variant`,`subtle`],[`ngsCardImg`,`bottom`,`alt`,``,3,`src`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-card`),ue(3,`img`,2),ce(4,`div`,3),Zf(5,`Header`),vi(),ce(6,`div`,4)(7,`h5`),Zf(8,`Top image`),vi(),ce(9,`p`),Zf(10,`An image, header, body and footer in one card.`),vi()(),ce(11,`div`,5),Zf(12,`Footer`),vi()()(),ce(13,`div`,1)(14,`ngs-card`,6)(15,`div`,3),Zf(16,`Subtle info card`),vi(),ce(17,`div`,4)(18,`h5`),Zf(19,`Bottom image`),vi(),ce(20,`p`),Zf(21,`The image sits under the body.`),vi()(),ue(22,`img`,7),vi()()()),t&2&&(Tt(3),Ot(`src`,l.image),Tt(19),Ot(`src`,l.image))},dependencies:[j,F,v,k,P],encapsulation:2})};var ys=(e,p)=>p.id;function bs(e,p){if(e&1&&(ce(0,`div`,2)(1,`ngs-collapsible-card`)(2,`h3`,3),Zf(3),vi(),ce(4,`p`,4),Zf(5),vi(),ce(6,`div`,5)(7,`div`,0),Zf(8),vi()()()()),e&2){let t=p.$implicit;Tt(3),hg(`Order `,t.id),Tt(2),fh(t.summary),Tt(3),fh(t.detail)}}var L=class e{orders=[{id:`A-1042`,summary:`Two items, shipped on Monday.`,detail:`Delivered to the front desk.`},{id:`A-1043`,summary:`One item, packing.`,detail:`Expected to ship tomorrow.`},{id:`A-1044`,summary:`Three items, waiting for stock.`,detail:`Backordered until Friday.`}];static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-card-stacked`]],decls:4,vars:0,consts:[[1,`bg-1`,`rounded-7`,`p-4`],[1,`row`,`g-4`],[1,`col-12`,`xl:col-10`],[`ngsCollapsibleTitle`,``,1,`h5`],[1,`fg-2`,`mb-0`],[`ngsCollapsibleContent`,``]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`div`,1),of(2,bs,9,3,`div`,2,ys),vi()()),t&2&&(Tt(2),rf(l.orders))},dependencies:[b,d,y],encapsulation:2})};var Cs=(e,p)=>p.name;function xs(e,p){if(e&1&&(ce(0,`tr`)(1,`th`,18),Zf(2),vi(),ce(3,`td`),Zf(4),vi(),ce(5,`td`,10),Zf(6),vi()()),e&2){let t=p.$implicit;Tt(2),fh(t.name),Tt(2),fh(t.version),Tt(2),fh(t.note)}}var G=class e{copy=$8;pending=BU;packages=[{name:`Router`,version:`4.1.0`,note:`Routes and guards for single page apps`},{name:`Forms`,version:`2.8.3`,note:`Typed inputs with built-in validation`}];copyId(p){navigator.clipboard?.writeText(p)}static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-card-summary`]],decls:53,vars:2,consts:[[1,`bg-1`,`rounded-7`,`p-4`],[1,`row`],[1,`col-12`,`xl:col-10`],[1,`row`,`g-3`],[1,`col`],[`ngsCollapsibleTitle`,``,1,`h5`],[1,`col-auto`],[1,`row`,`g-1`,`align-items-center`],[1,`col-auto`,`fg-2`],[`ngsIconButton`,``,`color`,`secondary`,`variant`,`text`,`size`,`sm`,`label`,`Copy id`,3,`click`,`icon`],[1,`fg-2`],[1,`row`,`g-5`],[1,`fg-2`,`small`],[`size`,`1.25rem`,1,`fg-warning`,3,`icon`],[`href`,`#summary`],[`color`,`secondary`,`variant`,`subtle`],[`ngsCollapsibleContent`,``],[1,`table`,`mb-0`,2,`--table-bg`,`transparent`],[`scope`,`row`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`ngs-collapsible-card`)(4,`div`,3)(5,`div`,4)(6,`h3`,5),Zf(7,` [20418] Invoice total is wrong after applying a coupon `),vi()(),ce(8,`div`,6)(9,`div`,7)(10,`div`,8),Zf(11,`518-204-17`),vi(),ce(12,`div`,6)(13,`button`,9),ui(`click`,function(){return l.copyId(`518-204-17`)}),vi()()()()(),ce(14,`p`,10),Zf(15,` Some shoppers see a total that ignores the discount when the coupon is added after the shipping method is chosen. `),vi(),ce(16,`div`,11)(17,`div`,6)(18,`div`,12),Zf(19,`Status`),vi(),ce(20,`div`,7)(21,`div`,6),ue(22,`ngs-icon`,13),vi(),ce(23,`div`,6),Zf(24,`Pending`),vi()()(),ce(25,`div`,6)(26,`div`,12),Zf(27,`Unit`),vi(),ce(28,`a`,14),Zf(29,`Checkout`),vi()(),ce(30,`div`,6)(31,`div`,12),Zf(32,`Category`),vi(),ce(33,`div`,7)(34,`div`,6),Zf(35,`Billing`),vi(),ce(36,`div`,6)(37,`ngs-badge`,15),Zf(38,`Regression`),vi()()()()(),ce(39,`div`,16)(40,`div`,0)(41,`table`,17)(42,`thead`)(43,`tr`)(44,`th`),Zf(45,`Package`),vi(),ce(46,`th`),Zf(47,`Version`),vi(),ce(48,`th`),Zf(49,`Description`),vi()()(),ce(50,`tbody`),of(51,xs,7,3,`tr`,null,Cs),vi()()()()()()()()),t&2&&(Tt(13),Ot(`icon`,l.copy),Tt(9),Ot(`icon`,l.pending),Tt(29),rf(l.packages))},dependencies:[b,d,y,c,Ll,y$1],encapsulation:2})};var gs={basic:{html:{code:`<div class="row">
  <div class="col-12 md:col-6">
    <ngs-card>
      <div ngsCardBody>
        <h5>Card title</h5>
        <h6 ngsCardSubtitle>Card subtitle</h6>
        <p>Some quick example text that builds on the card title and fills the card.</p>
        <a ngsButton href="#basic">Go somewhere</a>
      </div>
    </ngs-card>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-card</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCardBody</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Card title<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h6</span> <span class="hljs-attr">ngsCardSubtitle</span>&gt;</span>Card subtitle<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Some quick example text that builds on the card title and fills the card.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#basic&quot;</span>&gt;</span>Go somewhere<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-card</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsCard, NgsCardBody, NgsCardSubtitle } from '@bootlace/core/card';

@Component({
  selector: 'docs-card-basic',
  imports: [NgsCard, NgsCardBody, NgsCardSubtitle, NgsButton],
  templateUrl: './index.html',
})
export class CardBasicExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCard</span>, <span class="hljs-title class_">NgsCardBody</span>, <span class="hljs-title class_">NgsCardSubtitle</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/card&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-card-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCard</span>, <span class="hljs-title class_">NgsCardBody</span>, <span class="hljs-title class_">NgsCardSubtitle</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CardBasicExample</span> {}`}},controlled:{html:{code:`<div class="bg-1 rounded-7 p-4">
  <div class="row g-3 align-items-center">
    <div class="col-12 xl:col-10">
      <ngs-collapsible-card [(expanded)]="open" [disabled]="locked()">
        <h3 ngsCollapsibleTitle class="h5">Controlled card</h3>
        <p class="fg-2 mb-0">Bound with <code>[(expanded)]</code>.</p>
        <div ngsCollapsibleContent>
          <div class="bg-1 rounded-7 p-4">
            The toggle and the buttons below drive the same state.
          </div>
        </div>
      </ngs-collapsible-card>
    </div>
  </div>
</div>
<div class="row g-3">
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="open.set(!open())">
      {{ open() ? 'Collapse' : 'Expand' }} from outside
    </button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="text" (click)="locked.set(!locked())">
      {{ locked() ? 'Enable' : 'Disable' }} toggle
    </button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-1 rounded-7 p-4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 xl:col-10&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-collapsible-card</span> [(<span class="hljs-attr">expanded</span>)]=<span class="hljs-string">&quot;open&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;locked()&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">ngsCollapsibleTitle</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h5&quot;</span>&gt;</span>Controlled card<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2 mb-0&quot;</span>&gt;</span>Bound with <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>[(expanded)]<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCollapsibleContent</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-1 rounded-7 p-4&quot;</span>&gt;</span>
            The toggle and the buttons below drive the same state.
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-collapsible-card</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open.set(!open())&quot;</span>&gt;</span>
      {{ open() ? &#x27;Collapse&#x27; : &#x27;Expand&#x27; }} from outside
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;text&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;locked.set(!locked())&quot;</span>&gt;</span>
      {{ locked() ? &#x27;Enable&#x27; : &#x27;Disable&#x27; }} toggle
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsCollapsibleCard,
  NgsCollapsibleContent,
  NgsCollapsibleTitle,
} from '@bootlace/core/card';

@Component({
  selector: 'docs-card-controlled',
  imports: [NgsCollapsibleCard, NgsCollapsibleTitle, NgsCollapsibleContent, NgsButton],
  templateUrl: './index.html',
})
export class CardControlledExample {
  protected readonly open = signal(true);
  protected readonly locked = signal(false);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsCollapsibleCard</span>,
  <span class="hljs-title class_">NgsCollapsibleContent</span>,
  <span class="hljs-title class_">NgsCollapsibleTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/card&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-card-controlled&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCollapsibleCard</span>, <span class="hljs-title class_">NgsCollapsibleTitle</span>, <span class="hljs-title class_">NgsCollapsibleContent</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CardControlledExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> open = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> locked = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
}`}},grid:{html:{code:`<div class="row g-3">
  @for (item of items; track item) {
    <div class="col-12 sm:col-6 lg:col-4">
      <ngs-card class="h-100">
        <div ngsCardBody>
          <h5>{{ item }}</h5>
          <p>A card in a responsive grid: one column on phones, two from sm, three from lg.</p>
        </div>
        <div ngsCardFooter>Updated today</div>
      </ngs-card>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  @for (item of items; track item) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 sm:col-6 lg:col-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-card</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h-100&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCardBody</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>A card in a responsive grid: one column on phones, two from sm, three from lg.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCardFooter</span>&gt;</span>Updated today<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-card</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsCard, NgsCardBody, NgsCardFooter } from '@bootlace/core/card';

@Component({
  selector: 'docs-card-grid',
  imports: [NgsCard, NgsCardBody, NgsCardFooter],
  templateUrl: './index.html',
})
export class CardGridExample {
  protected readonly items = ['Design', 'Develop', 'Deploy', 'Monitor', 'Learn', 'Repeat'];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCard</span>, <span class="hljs-title class_">NgsCardBody</span>, <span class="hljs-title class_">NgsCardFooter</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/card&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-card-grid&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCard</span>, <span class="hljs-title class_">NgsCardBody</span>, <span class="hljs-title class_">NgsCardFooter</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CardGridExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> items = [<span class="hljs-string">&#x27;Design&#x27;</span>, <span class="hljs-string">&#x27;Develop&#x27;</span>, <span class="hljs-string">&#x27;Deploy&#x27;</span>, <span class="hljs-string">&#x27;Monitor&#x27;</span>, <span class="hljs-string">&#x27;Learn&#x27;</span>, <span class="hljs-string">&#x27;Repeat&#x27;</span>];
}`}},parts:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-card>
      <img ngsCardImg [src]="image" alt="" />
      <div ngsCardHeader>Header</div>
      <div ngsCardBody>
        <h5>Top image</h5>
        <p>An image, header, body and footer in one card.</p>
      </div>
      <div ngsCardFooter>Footer</div>
    </ngs-card>
  </div>
  <div class="col-12 md:col-6">
    <ngs-card color="info" variant="subtle">
      <div ngsCardHeader>Subtle info card</div>
      <div ngsCardBody>
        <h5>Bottom image</h5>
        <p>The image sits under the body.</p>
      </div>
      <img ngsCardImg="bottom" [src]="image" alt="" />
    </ngs-card>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-card</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">ngsCardImg</span> [<span class="hljs-attr">src</span>]=<span class="hljs-string">&quot;image&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCardHeader</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCardBody</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Top image<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>An image, header, body and footer in one card.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCardFooter</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-card</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-card</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;info&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCardHeader</span>&gt;</span>Subtle info card<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCardBody</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Bottom image<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>The image sits under the body.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">ngsCardImg</span>=<span class="hljs-string">&quot;bottom&quot;</span> [<span class="hljs-attr">src</span>]=<span class="hljs-string">&quot;image&quot;</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">&quot;&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-card</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import {
  NgsCard,
  NgsCardBody,
  NgsCardFooter,
  NgsCardHeader,
  NgsCardImg,
} from '@bootlace/core/card';

@Component({
  selector: 'docs-card-parts',
  imports: [NgsCard, NgsCardHeader, NgsCardBody, NgsCardFooter, NgsCardImg],
  templateUrl: './index.html',
})
export class CardPartsExample {
  /** A decorative placeholder, so the example needs no image file. */
  protected readonly image =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="120"><rect width="400" height="120" fill="#adb5bd"/></svg>',
    );
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsCard</span>,
  <span class="hljs-title class_">NgsCardBody</span>,
  <span class="hljs-title class_">NgsCardFooter</span>,
  <span class="hljs-title class_">NgsCardHeader</span>,
  <span class="hljs-title class_">NgsCardImg</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/card&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-card-parts&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCard</span>, <span class="hljs-title class_">NgsCardHeader</span>, <span class="hljs-title class_">NgsCardBody</span>, <span class="hljs-title class_">NgsCardFooter</span>, <span class="hljs-title class_">NgsCardImg</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CardPartsExample</span> {
  <span class="hljs-comment">/** A decorative placeholder, so the example needs no image file. */</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> image =
    <span class="hljs-string">&#x27;data:image/svg+xml;utf8,&#x27;</span> +
    <span class="hljs-built_in">encodeURIComponent</span>(
      <span class="hljs-string">&#x27;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;400&quot; height=&quot;120&quot;&gt;&lt;rect width=&quot;400&quot; height=&quot;120&quot; fill=&quot;#adb5bd&quot;/&gt;&lt;/svg&gt;&#x27;</span>,
    );
}`}},stacked:{html:{code:`<div class="bg-1 rounded-7 p-4">
  <div class="row g-4">
    @for (order of orders; track order.id) {
      <div class="col-12 xl:col-10">
        <ngs-collapsible-card>
          <h3 ngsCollapsibleTitle class="h5">Order {{ order.id }}</h3>
          <p class="fg-2 mb-0">{{ order.summary }}</p>
          <div ngsCollapsibleContent>
            <div class="bg-1 rounded-7 p-4">{{ order.detail }}</div>
          </div>
        </ngs-collapsible-card>
      </div>
    }
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-1 rounded-7 p-4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-4&quot;</span>&gt;</span>
    @for (order of orders; track order.id) {
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 xl:col-10&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-collapsible-card</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">ngsCollapsibleTitle</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h5&quot;</span>&gt;</span>Order {{ order.id }}<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2 mb-0&quot;</span>&gt;</span>{{ order.summary }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCollapsibleContent</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-1 rounded-7 p-4&quot;</span>&gt;</span>{{ order.detail }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-collapsible-card</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import {
  NgsCollapsibleCard,
  NgsCollapsibleContent,
  NgsCollapsibleTitle,
} from '@bootlace/core/card';

@Component({
  selector: 'docs-card-stacked',
  imports: [NgsCollapsibleCard, NgsCollapsibleTitle, NgsCollapsibleContent],
  templateUrl: './index.html',
})
export class CardStackedExample {
  protected readonly orders = [
    {
      id: 'A-1042',
      summary: 'Two items, shipped on Monday.',
      detail: 'Delivered to the front desk.',
    },
    { id: 'A-1043', summary: 'One item, packing.', detail: 'Expected to ship tomorrow.' },
    {
      id: 'A-1044',
      summary: 'Three items, waiting for stock.',
      detail: 'Backordered until Friday.',
    },
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsCollapsibleCard</span>,
  <span class="hljs-title class_">NgsCollapsibleContent</span>,
  <span class="hljs-title class_">NgsCollapsibleTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/card&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-card-stacked&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCollapsibleCard</span>, <span class="hljs-title class_">NgsCollapsibleTitle</span>, <span class="hljs-title class_">NgsCollapsibleContent</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CardStackedExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> orders = [
    {
      <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;A-1042&#x27;</span>,
      <span class="hljs-attr">summary</span>: <span class="hljs-string">&#x27;Two items, shipped on Monday.&#x27;</span>,
      <span class="hljs-attr">detail</span>: <span class="hljs-string">&#x27;Delivered to the front desk.&#x27;</span>,
    },
    { <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;A-1043&#x27;</span>, <span class="hljs-attr">summary</span>: <span class="hljs-string">&#x27;One item, packing.&#x27;</span>, <span class="hljs-attr">detail</span>: <span class="hljs-string">&#x27;Expected to ship tomorrow.&#x27;</span> },
    {
      <span class="hljs-attr">id</span>: <span class="hljs-string">&#x27;A-1044&#x27;</span>,
      <span class="hljs-attr">summary</span>: <span class="hljs-string">&#x27;Three items, waiting for stock.&#x27;</span>,
      <span class="hljs-attr">detail</span>: <span class="hljs-string">&#x27;Backordered until Friday.&#x27;</span>,
    },
  ];
}`}},summary:{html:{code:`<div class="bg-1 rounded-7 p-4">
  <div class="row">
    <div class="col-12 xl:col-10">
      <ngs-collapsible-card>
        <div class="row g-3">
          <div class="col">
            <h3 ngsCollapsibleTitle class="h5">
              [20418] Invoice total is wrong after applying a coupon
            </h3>
          </div>
          <div class="col-auto">
            <div class="row g-1 align-items-center">
              <div class="col-auto fg-2">518-204-17</div>
              <div class="col-auto">
                <button
                  ngsIconButton
                  color="secondary"
                  variant="text"
                  size="sm"
                  label="Copy id"
                  [icon]="copy"
                  (click)="copyId('518-204-17')"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <p class="fg-2">
          Some shoppers see a total that ignores the discount when the coupon is added after the
          shipping method is chosen.
        </p>
        <div class="row g-5">
          <div class="col-auto">
            <div class="fg-2 small">Status</div>
            <div class="row g-1 align-items-center">
              <div class="col-auto">
                <ngs-icon class="fg-warning" [icon]="pending" size="1.25rem" />
              </div>
              <div class="col-auto">Pending</div>
            </div>
          </div>
          <div class="col-auto">
            <div class="fg-2 small">Unit</div>
            <a href="#summary">Checkout</a>
          </div>
          <div class="col-auto">
            <div class="fg-2 small">Category</div>
            <div class="row g-1 align-items-center">
              <div class="col-auto">Billing</div>
              <div class="col-auto">
                <ngs-badge color="secondary" variant="subtle">Regression</ngs-badge>
              </div>
            </div>
          </div>
        </div>

        <div ngsCollapsibleContent>
          <div class="bg-1 rounded-7 p-4">
            <table class="table mb-0" style="--table-bg: transparent">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Version</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                @for (item of packages; track item.name) {
                  <tr>
                    <th scope="row">{{ item.name }}</th>
                    <td>{{ item.version }}</td>
                    <td class="fg-2">{{ item.note }}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </ngs-collapsible-card>
    </div>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-1 rounded-7 p-4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 xl:col-10&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-collapsible-card</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">ngsCollapsibleTitle</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h5&quot;</span>&gt;</span>
              [20418] Invoice total is wrong after applying a coupon
            <span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-1 align-items-center&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto fg-2&quot;</span>&gt;</span>518-204-17<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
                  <span class="hljs-attr">ngsIconButton</span>
                  <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;secondary&quot;</span>
                  <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;text&quot;</span>
                  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
                  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Copy id&quot;</span>
                  [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;copy&quot;</span>
                  (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;copyId(&#x27;518-204-17&#x27;)&quot;</span>
                &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2&quot;</span>&gt;</span>
          Some shoppers see a total that ignores the discount when the coupon is added after the
          shipping method is chosen.
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-5&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2 small&quot;</span>&gt;</span>Status<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-1 align-items-center&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-warning&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;pending&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1.25rem&quot;</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>Pending<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2 small&quot;</span>&gt;</span>Unit<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#summary&quot;</span>&gt;</span>Checkout<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2 small&quot;</span>&gt;</span>Category<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-1 align-items-center&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>Billing<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">ngs-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;secondary&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span>&gt;</span>Regression<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-badge</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsCollapsibleContent</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;bg-1 rounded-7 p-4&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;table mb-0&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;--table-bg: transparent&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Package<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Version<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Description<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
                @for (item of packages; track item.name) {
                  <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>{{ item.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ item.version }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2&quot;</span>&gt;</span>{{ item.note }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
                }
              <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-collapsible-card</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsBadge } from '@bootlace/core/badge';
import { NgsIconButton } from '@bootlace/core/button';
import {
  NgsCollapsibleCard,
  NgsCollapsibleContent,
  NgsCollapsibleTitle,
} from '@bootlace/core/card';
import { NgsIcon } from '@bootlace/core/icon';
import { ngsIconCopy, ngsIconTime } from '@bootlace/icons';

@Component({
  selector: 'docs-card-summary',
  imports: [
    NgsCollapsibleCard,
    NgsCollapsibleTitle,
    NgsCollapsibleContent,
    NgsBadge,
    NgsIcon,
    NgsIconButton,
  ],
  templateUrl: './index.html',
})
export class CardSummaryExample {
  protected readonly copy = ngsIconCopy;
  protected readonly pending = ngsIconTime;
  protected readonly packages = [
    { name: 'Router', version: '4.1.0', note: 'Routes and guards for single page apps' },
    { name: 'Forms', version: '2.8.3', note: 'Typed inputs with built-in validation' },
  ];

  protected copyId(id: string) {
    void navigator.clipboard?.writeText(id);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsBadge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/badge&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIconButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsCollapsibleCard</span>,
  <span class="hljs-title class_">NgsCollapsibleContent</span>,
  <span class="hljs-title class_">NgsCollapsibleTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/card&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconCopy, ngsIconTime } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-card-summary&#x27;</span>,
  <span class="hljs-attr">imports</span>: [
    <span class="hljs-title class_">NgsCollapsibleCard</span>,
    <span class="hljs-title class_">NgsCollapsibleTitle</span>,
    <span class="hljs-title class_">NgsCollapsibleContent</span>,
    <span class="hljs-title class_">NgsBadge</span>,
    <span class="hljs-title class_">NgsIcon</span>,
    <span class="hljs-title class_">NgsIconButton</span>,
  ],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CardSummaryExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> copy = ngsIconCopy;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> pending = ngsIconTime;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> packages = [
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Router&#x27;</span>, <span class="hljs-attr">version</span>: <span class="hljs-string">&#x27;4.1.0&#x27;</span>, <span class="hljs-attr">note</span>: <span class="hljs-string">&#x27;Routes and guards for single page apps&#x27;</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Forms&#x27;</span>, <span class="hljs-attr">version</span>: <span class="hljs-string">&#x27;2.8.3&#x27;</span>, <span class="hljs-attr">note</span>: <span class="hljs-string">&#x27;Typed inputs with built-in validation&#x27;</span> },
  ];

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">copyId</span>(<span class="hljs-params"><span class="hljs-attr">id</span>: <span class="hljs-built_in">string</span></span>) {
    <span class="hljs-built_in">void</span> navigator.<span class="hljs-property">clipboard</span>?.<span class="hljs-title function_">writeText</span>(id);
  }
}`}}};var hs=class e{tab=Yn(`examples`);sources=gs;basic=A;parts=R;grid=H;summary=G;stacked=L;controlled=U;static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-card-page`]],inputs:{tab:[1,`tab`]},decls:104,vars:13,consts:[[`heading`,`Card`,`package`,`@bootlace/core/card`,`path`,`/components/card`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`parts`,`heading`,`Parts`,3,`component`,`sources`],[`id`,`grid`,`heading`,`Grid of cards`,3,`component`,`sources`],[`id`,`collapsible-card`,1,`h5`],[`id`,`summary`,`heading`,`Summary card`,3,`component`,`sources`],[`id`,`controlled`,`heading`,`Controlled`,3,`component`,`sources`],[`id`,`stacked`,`heading`,`Stacked cards`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,l){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A content container built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.card`),vi(),Zf(5,`, plus a collapsible variant whose hidden content folds under a summary. The parts are directives you put on any element. `),vi(),ce(6,`docs-example`,2)(7,`code`),Zf(8,`ngs-card`),vi(),Zf(9,` with an `),ce(10,`code`),Zf(11,`ngsCardBody`),vi(),Zf(12,`. Titles and text are plain headings and paragraphs: Bootstrap 6 has no title or text classes. `),vi(),ce(13,`docs-example`,3)(14,`code`),Zf(15,`ngsCardHeader`),vi(),Zf(16,`, `),ce(17,`code`),Zf(18,`ngsCardFooter`),vi(),Zf(19,`, `),ce(20,`code`),Zf(21,`ngsCardImg`),vi(),Zf(22,` (top or bottom), and the `),ce(23,`code`),Zf(24,`color`),vi(),Zf(25,` and `),ce(26,`code`),Zf(27,`variant`),vi(),Zf(28,` inputs. `),vi(),ce(29,`docs-example`,4),Zf(30,` Lay cards out with the Bootstrap grid: a `),ce(31,`code`),Zf(32,`.row`),vi(),Zf(33,` of responsive columns, each with one card. `),ce(34,`code`),Zf(35,`h-100`),vi(),Zf(36,` makes the cards in a row equally tall. `),vi(),ce(37,`h2`,5),Zf(38,`Collapsible card`),vi(),ce(39,`p`)(40,`code`),Zf(41,`ngs-collapsible-card`),vi(),Zf(42,` is a large, borderless card, like Taiga UI's. Its default content is the summary, which is always visible. Mark the part that folds away with `),ce(43,`code`),Zf(44,`ngsCollapsibleContent`),vi(),Zf(45,`, and the title with `),ce(46,`code`),Zf(47,`ngsCollapsibleTitle`),vi(),Zf(48,` so the region has a name. A small icon button at the bottom-end of the summary toggles it, and while collapsed a narrower strip peeks out under the card. It starts collapsed. `),vi(),ce(49,`docs-example`,6),Zf(50,` A summary with a title, an id and copy button, a description and attributes, plus a table in an inset panel. The panel is the example's own markup, not part of the component. `),vi(),ce(51,`docs-example`,7),Zf(52,` Bind `),ce(53,`code`),Zf(54,`[(expanded)]`),vi(),Zf(55,` to open and close the card from outside, and `),ce(56,`code`),Zf(57,`disabled`),vi(),Zf(58,` to stop the toggle. `),ce(59,`code`),Zf(60,`expandLabel`),vi(),Zf(61,` and `),ce(62,`code`),Zf(63,`collapseLabel`),vi(),Zf(64,` override the toggle's accessible name. `),vi(),ce(65,`docs-example`,8),Zf(66,` Several cards in a column. Each collapsed card shows its peek strip. `),vi(),ce(67,`section`,9)(68,`h2`,10),Zf(69,`Accessibility`),vi(),ce(70,`p`),Zf(71,` A plain card has no role: use a heading for the title so the page outline stays correct, and give each image an `),ce(72,`code`),Zf(73,`alt`),vi(),Zf(74,` (empty if decorative). `),vi(),ce(75,`p`),Zf(76,` In a collapsible card the toggle is a native `),ce(77,`code`),Zf(78,`<button>`),vi(),Zf(79,`, so Enter and Space work. It sets `),ce(80,`code`),Zf(81,`aria-expanded`),vi(),Zf(82,` and `),ce(83,`code`),Zf(84,`aria-controls`),vi(),Zf(85,`, and its name is "Show more" or "Show less" (the `),ce(86,`code`),Zf(87,`expand`),vi(),Zf(88,` and `),ce(89,`code`),Zf(90,`collapse`),vi(),Zf(91,` i18n strings), because the icon has no text. The hidden content is a `),ce(92,`code`),Zf(93,`role="region"`),vi(),Zf(94,` labelled by the `),ce(95,`code`),Zf(96,`ngsCollapsibleTitle`),vi(),Zf(97,` element, or by the toggle when there is none. While collapsed it is `),ce(98,`code`),Zf(99,`inert`),vi(),Zf(100,` and invisible, so its links and controls cannot be reached with Tab. The peek strip is decorative and not in the accessibility tree. The animation is off when `),ce(101,`code`),Zf(102,`NGS_CONFIG.animation`),vi(),Zf(103,` is false or the user prefers reduced motion. `),vi()()()),t&2&&(Ot(`tab`,l.tab()),Tt(6),Ot(`component`,l.basic)(`sources`,l.sources.basic),Tt(7),Ot(`component`,l.parts)(`sources`,l.sources.parts),Tt(16),Ot(`component`,l.grid)(`sources`,l.sources.grid),Tt(20),Ot(`component`,l.summary)(`sources`,l.sources.summary),Tt(2),Ot(`component`,l.controlled)(`sources`,l.sources.controlled),Tt(14),Ot(`component`,l.stacked)(`sources`,l.sources.stacked))},dependencies:[ue$1,pe],encapsulation:2})};export{hs as CardPage};