import{$t as ag,A as J4,An as hg,At as W$1,Br as ui,Cr as rf,Et as Va,F as Jo,G as Lr,Gt as Yn,Hn as kf,Hr as vC,I as K,It as XR,Jt as Zf,L as KC,Ln as jn,N as JR,Pt as XC,Rn as jo,Rr as ue,Un as kg,Ut as YZ,Wr as ve,Yn as lt,Zr as wf,ei as xh,en as ah,et as Ot,i as $t,ir as nf,kn as hf,nr as nA,on as ce,q as Mh,qr as vi,r as $f,sn as cg,ur as of,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{t as l}from"./chunk-B6h8Jb5u.js";import{a as Fi,g as Ti,n as Ba}from"./chunk-DycqepRM.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f$1}from"./chunk-_QnoVoFv.js";var js=[`dialog`];var us=[`*`];var w=class l{browser=YZ(k(lt));scrollLock=k(Fi);dialog=nA(`dialog`);native;id=Ba(`ngs-drawer`);open=JR(!1);side=Yn(`end`);backdrop=Yn(!0);keyboard=Yn(!0,{transform:$t});label=Yn();labelledBy=Yn();dismissed=XR();classes=jo(()=>{let r=this.backdrop();return[`drawer`,`ngs-drawer`,`drawer-${this.side()}`,!r&&`ngs-drawer-no-backdrop`].filter(Boolean).join(` `)});constructor(){J4(()=>{let r=this.open(),t=this.dialog()?.nativeElement;!t||!this.browser||K(()=>{this.native??=new Ti(t,{backdrop:()=>this.backdrop(),keyboard:()=>this.keyboard(),dismiss:e=>{this.open.set(!1),this.dismissed.emit(e)}},this.scrollLock,`drawer-static`),r?this.native.show():this.native.hide(!1)})}),k(jn).onDestroy(()=>this.native?.destroy())}close(){this.open.set(!1)}static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`ngs-drawer`]],viewQuery:function(t,e){t&1&&ah(e.dialog,js,5),t&2&&wf()},hostAttrs:[1,`ngs-drawer-host`],inputs:{open:[1,`open`],side:[1,`side`],backdrop:[1,`backdrop`],keyboard:[1,`keyboard`],label:[1,`label`],labelledBy:[1,`labelledBy`]},outputs:{open:`openChange`,dismissed:`dismissed`},ngContentSelectors:us,decls:3,vars:5,consts:[[`dialog`,``],[`tabindex`,`-1`,3,`id`]],template:function(t,e){t&1&&(kf(),cg(0,`dialog`,1,0),hf(2),ag()),t&2&&(kg(e.classes()),Va(`id`,e.id),Lr(`aria-label`,e.label()||null)(`aria-labelledby`,e.labelledBy()||null))},encapsulation:2})};var y=class l{static ɵfac=function(t){return new(t||l)};static ɵdir=Jo({type:l,selectors:[[``,`ngsDrawerHeader`,``]],hostAttrs:[1,`drawer-header`]})};var D=class l{id=Ba(`ngs-drawer-title`);static ɵfac=function(t){return new(t||l)};static ɵdir=Jo({type:l,selectors:[[``,`ngsDrawerTitle`,``]],hostAttrs:[1,`drawer-title`],hostVars:1,hostBindings:function(t,e){t&2&&Va(`id`,e.id)}})};var F=class l{static ɵfac=function(t){return new(t||l)};static ɵdir=Jo({type:l,selectors:[[``,`ngsDrawerCaption`,``]],hostAttrs:[1,`ngs-drawer-caption`]})};var b=class l{static ɵfac=function(t){return new(t||l)};static ɵdir=Jo({type:l,selectors:[[``,`ngsDrawerBody`,``]],hostAttrs:[1,`drawer-body`]})};var N=class l{static ɵfac=function(t){return new(t||l)};static ɵdir=Jo({type:l,selectors:[[``,`ngsDrawerFooter`,``]],hostAttrs:[1,`drawer-footer`]})};var f=class l$1{drawer=k(w);static ɵfac=function(t){return new(t||l$1)};static ɵdir=Jo({type:l$1,selectors:[[`button`,`ngsDrawerClose`,``]],hostBindings:function(t,e){t&1&&ui(`click`,function(){return e.drawer.close()})},features:[vC([{directive:l,inputs:[`label`,`label`]}])]})};var P=class l{isStatic=W$1(!1);bare=W$1(!1);static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-drawer-backdrop`]],decls:21,vars:4,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[`backdrop`,`static`,3,`openChange`,`open`,`keyboard`],[`ngsDrawerHeader`,``],[`ngsDrawerTitle`,``],[`ngsDrawerClose`,``],[`ngsDrawerBody`,``],[3,`openChange`,`open`,`backdrop`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),ui(`click`,function(){return e.isStatic.set(!0)}),Zf(3,`Static backdrop`),vi()(),ce(4,`div`,1)(5,`button`,2),ui(`click`,function(){return e.bare.set(!0)}),Zf(6,`No backdrop`),vi()()(),ce(7,`ngs-drawer`,3),xh(`openChange`,function(p){return $f(e.isStatic,p)||(e.isStatic=p),p}),ce(8,`div`,4)(9,`h2`,5),Zf(10,`Static drawer`),vi(),ue(11,`button`,6),vi(),ce(12,`div`,7),Zf(13,` A click outside, or Escape, does not close it: it shakes instead. Use the close button. `),vi()(),ce(14,`ngs-drawer`,8),xh(`openChange`,function(p){return $f(e.bare,p)||(e.bare=p),p}),ce(15,`div`,4)(16,`h2`,5),Zf(17,`Without a backdrop`),vi(),ue(18,`button`,6),vi(),ce(19,`div`,7),Zf(20,` The page is not dimmed. The drawer is still modal: focus stays inside and the page is inert. `),vi()()),t&2&&(Tt(7),Mh(`open`,e.isStatic),Ot(`keyboard`,!1),Tt(7),Mh(`open`,e.bare),Ot(`backdrop`,!1))},dependencies:[f$1,w,b,f,y,D],encapsulation:2})};function ws(l,r){l&1&&(ce(0,`div`,3),Zf(1,`Filters applied.`),vi())}function ys(l,r){if(l&1&&(ce(0,`p`,8),Zf(1),vi()),l&2){let t=r.$implicit;Tt(),hg(`Filter `,t)}}var M=class l{open=W$1(!1);saved=W$1(!1);rows=Array.from({length:6},(r,t)=>t+1);apply(){this.saved.set(!0),this.open.set(!1)}static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-drawer-header-footer`]],decls:23,vars:2,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,3,`click`],[`role`,`status`,1,`col-auto`],[3,`openChange`,`open`],[`ngsDrawerHeader`,``],[`ngsDrawerCaption`,``],[`ngsDrawerTitle`,``],[1,`mb-0`],[`ngsDrawerClose`,``],[`ngsDrawerBody`,``],[`ngsDrawerFooter`,``],[`ngsButton`,``,`variant`,`outline`,`color`,`secondary`,3,`click`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),ui(`click`,function(){return e.open.set(!0)}),Zf(3,`Open drawer`),vi()(),KC(4,ws,2,0,`div`,3),vi(),ce(5,`ngs-drawer`,4),xh(`openChange`,function(p){return $f(e.open,p)||(e.open=p),p}),ce(6,`div`,5)(7,`div`)(8,`div`,6),Zf(9,`Orders`),vi(),ce(10,`h2`,7),Zf(11,`Filters`),vi(),ce(12,`p`,8),Zf(13,`Narrow the list by status and owner.`),vi()(),ue(14,`button`,9),vi(),ce(15,`div`,10),of(16,ys,2,1,`p`,8,nf),vi(),ce(18,`div`,11)(19,`button`,12),ui(`click`,function(){return e.open.set(!1)}),Zf(20,`Cancel`),vi(),ce(21,`button`,2),ui(`click`,function(){return e.apply()}),Zf(22,`Apply`),vi()()()),t&2&&(Tt(4),XC(e.saved()?4:-1),Tt(),Mh(`open`,e.open),Tt(11),rf(e.rows))},dependencies:[f$1,w,b,F,f,N,y,D],encapsulation:2})};var A=class l{start=W$1(!1);end=W$1(!1);top=W$1(!1);bottom=W$1(!1);static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-drawer-placement`]],decls:41,vars:4,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[`side`,`start`,3,`openChange`,`open`],[`ngsDrawerHeader`,``],[`ngsDrawerTitle`,``],[`ngsDrawerClose`,``],[`ngsDrawerBody`,``],[`side`,`end`,3,`openChange`,`open`],[`side`,`top`,3,`openChange`,`open`],[`side`,`bottom`,3,`openChange`,`open`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),ui(`click`,function(){return e.start.set(!0)}),Zf(3,`Start`),vi()(),ce(4,`div`,1)(5,`button`,2),ui(`click`,function(){return e.end.set(!0)}),Zf(6,`End`),vi()(),ce(7,`div`,1)(8,`button`,2),ui(`click`,function(){return e.top.set(!0)}),Zf(9,`Top`),vi()(),ce(10,`div`,1)(11,`button`,2),ui(`click`,function(){return e.bottom.set(!0)}),Zf(12,`Bottom`),vi()()(),ce(13,`ngs-drawer`,3),xh(`openChange`,function(p){return $f(e.start,p)||(e.start=p),p}),ce(14,`div`,4)(15,`h2`,5),Zf(16,`Start drawer`),vi(),ue(17,`button`,6),vi(),ce(18,`div`,7),Zf(19,`Slides in from the start edge, the left in left-to-right layouts.`),vi()(),ce(20,`ngs-drawer`,8),xh(`openChange`,function(p){return $f(e.end,p)||(e.end=p),p}),ce(21,`div`,4)(22,`h2`,5),Zf(23,`End drawer`),vi(),ue(24,`button`,6),vi(),ce(25,`div`,7),Zf(26,`Slides in from the end edge, the default.`),vi()(),ce(27,`ngs-drawer`,9),xh(`openChange`,function(p){return $f(e.top,p)||(e.top=p),p}),ce(28,`div`,4)(29,`h2`,5),Zf(30,`Top drawer`),vi(),ue(31,`button`,6),vi(),ce(32,`div`,7),Zf(33,`Slides down from the top, the full width of the page.`),vi()(),ce(34,`ngs-drawer`,10),xh(`openChange`,function(p){return $f(e.bottom,p)||(e.bottom=p),p}),ce(35,`div`,4)(36,`h2`,5),Zf(37,`Bottom drawer`),vi(),ue(38,`button`,6),vi(),ce(39,`div`,7),Zf(40,`Slides up from the bottom, the full width of the page.`),vi()()),t&2&&(Tt(13),Mh(`open`,e.start),Tt(7),Mh(`open`,e.end),Tt(7),Mh(`open`,e.top),Tt(7),Mh(`open`,e.bottom))},dependencies:[f$1,w,b,f,y,D],encapsulation:2})};function Ds(l,r){if(l&1&&(ce(0,`p`,6),Zf(1),vi()),l&2){let t=r.$implicit;Tt(),hg(`Event `,t,`: something happened here.`)}}var W=class l{open=W$1(!1);items=Array.from({length:40},(r,t)=>t+1);static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-drawer-scroll`]],decls:13,vars:1,consts:[[`ngsButton`,``,`variant`,`outline`,3,`click`],[3,`openChange`,`open`],[`ngsDrawerHeader`,``],[`ngsDrawerTitle`,``],[`ngsDrawerClose`,``],[`ngsDrawerBody`,``],[1,`mb-0`],[`ngsDrawerFooter`,``],[`ngsButton`,``,3,`click`]],template:function(t,e){t&1&&(ce(0,`button`,0),ui(`click`,function(){return e.open.set(!0)}),Zf(1,`Long content`),vi(),ce(2,`ngs-drawer`,1),xh(`openChange`,function(p){return $f(e.open,p)||(e.open=p),p}),ce(3,`div`,2)(4,`h2`,3),Zf(5,`Activity`),vi(),ue(6,`button`,4),vi(),ce(7,`div`,5),of(8,Ds,2,1,`p`,6,nf),vi(),ce(10,`div`,7)(11,`button`,8),ui(`click`,function(){return e.open.set(!1)}),Zf(12,`Done`),vi()()()),t&2&&(Tt(2),Mh(`open`,e.open),Tt(6),rf(e.items))},dependencies:[f$1,w,b,f,N,y,D],encapsulation:2})};var hs={backdrop:{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="isStatic.set(true)">Static backdrop</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="bare.set(true)">No backdrop</button>
  </div>
</div>

<ngs-drawer [(open)]="isStatic" backdrop="static" [keyboard]="false">
  <div ngsDrawerHeader>
    <h2 ngsDrawerTitle>Static drawer</h2>
    <button ngsDrawerClose></button>
  </div>
  <div ngsDrawerBody>
    A click outside, or Escape, does not close it: it shakes instead. Use the close button.
  </div>
</ngs-drawer>

<ngs-drawer [(open)]="bare" [backdrop]="false">
  <div ngsDrawerHeader>
    <h2 ngsDrawerTitle>Without a backdrop</h2>
    <button ngsDrawerClose></button>
  </div>
  <div ngsDrawerBody>
    The page is not dimmed. The drawer is still modal: focus stays inside and the page is inert.
  </div>
</ngs-drawer>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;isStatic.set(true)&quot;</span>&gt;</span>Static backdrop<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;bare.set(true)&quot;</span>&gt;</span>No backdrop<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-drawer</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;isStatic&quot;</span> <span class="hljs-attr">backdrop</span>=<span class="hljs-string">&quot;static&quot;</span> [<span class="hljs-attr">keyboard</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsDrawerTitle</span>&gt;</span>Static drawer<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsDrawerClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerBody</span>&gt;</span>
    A click outside, or Escape, does not close it: it shakes instead. Use the close button.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-drawer</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-drawer</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;bare&quot;</span> [<span class="hljs-attr">backdrop</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsDrawerTitle</span>&gt;</span>Without a backdrop<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsDrawerClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerBody</span>&gt;</span>
    The page is not dimmed. The drawer is still modal: focus stays inside and the page is inert.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-drawer</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsDrawer,
  NgsDrawerBody,
  NgsDrawerClose,
  NgsDrawerHeader,
  NgsDrawerTitle,
} from '@bootlace/core/drawer';

@Component({
  selector: 'docs-drawer-backdrop',
  imports: [NgsButton, NgsDrawer, NgsDrawerBody, NgsDrawerClose, NgsDrawerHeader, NgsDrawerTitle],
  templateUrl: './index.html',
})
export class DrawerBackdropExample {
  protected readonly isStatic = signal(false);
  protected readonly bare = signal(false);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsDrawer</span>,
  <span class="hljs-title class_">NgsDrawerBody</span>,
  <span class="hljs-title class_">NgsDrawerClose</span>,
  <span class="hljs-title class_">NgsDrawerHeader</span>,
  <span class="hljs-title class_">NgsDrawerTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/drawer&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-drawer-backdrop&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDrawer</span>, <span class="hljs-title class_">NgsDrawerBody</span>, <span class="hljs-title class_">NgsDrawerClose</span>, <span class="hljs-title class_">NgsDrawerHeader</span>, <span class="hljs-title class_">NgsDrawerTitle</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DrawerBackdropExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> isStatic = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> bare = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
}`}},"header-footer":{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-auto">
    <button ngsButton (click)="open.set(true)">Open drawer</button>
  </div>
  @if (saved()) {
    <div class="col-auto" role="status">Filters applied.</div>
  }
</div>

<ngs-drawer [(open)]="open">
  <div ngsDrawerHeader>
    <div>
      <div ngsDrawerCaption>Orders</div>
      <h2 ngsDrawerTitle>Filters</h2>
      <p class="mb-0">Narrow the list by status and owner.</p>
    </div>
    <button ngsDrawerClose></button>
  </div>
  <div ngsDrawerBody>
    @for (row of rows; track row) {
      <p class="mb-0">Filter {{ row }}</p>
    }
  </div>
  <div ngsDrawerFooter>
    <button ngsButton variant="outline" color="secondary" (click)="open.set(false)">Cancel</button>
    <button ngsButton (click)="apply()">Apply</button>
  </div>
</ngs-drawer>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open.set(true)&quot;</span>&gt;</span>Open drawer<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  @if (saved()) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;status&quot;</span>&gt;</span>Filters applied.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-drawer</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerCaption</span>&gt;</span>Orders<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsDrawerTitle</span>&gt;</span>Filters<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Narrow the list by status and owner.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsDrawerClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerBody</span>&gt;</span>
    @for (row of rows; track row) {
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Filter {{ row }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerFooter</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;secondary&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open.set(false)&quot;</span>&gt;</span>Cancel<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;apply()&quot;</span>&gt;</span>Apply<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-drawer</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsDrawer,
  NgsDrawerBody,
  NgsDrawerCaption,
  NgsDrawerClose,
  NgsDrawerFooter,
  NgsDrawerHeader,
  NgsDrawerTitle,
} from '@bootlace/core/drawer';

@Component({
  selector: 'docs-drawer-header-footer',
  imports: [
    NgsButton,
    NgsDrawer,
    NgsDrawerBody,
    NgsDrawerCaption,
    NgsDrawerClose,
    NgsDrawerFooter,
    NgsDrawerHeader,
    NgsDrawerTitle,
  ],
  templateUrl: './index.html',
})
export class DrawerHeaderFooterExample {
  protected readonly open = signal(false);
  protected readonly saved = signal(false);
  protected readonly rows = Array.from({ length: 6 }, (_, i) => i + 1);

  protected apply(): void {
    this.saved.set(true);
    this.open.set(false);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsDrawer</span>,
  <span class="hljs-title class_">NgsDrawerBody</span>,
  <span class="hljs-title class_">NgsDrawerCaption</span>,
  <span class="hljs-title class_">NgsDrawerClose</span>,
  <span class="hljs-title class_">NgsDrawerFooter</span>,
  <span class="hljs-title class_">NgsDrawerHeader</span>,
  <span class="hljs-title class_">NgsDrawerTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/drawer&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-drawer-header-footer&#x27;</span>,
  <span class="hljs-attr">imports</span>: [
    <span class="hljs-title class_">NgsButton</span>,
    <span class="hljs-title class_">NgsDrawer</span>,
    <span class="hljs-title class_">NgsDrawerBody</span>,
    <span class="hljs-title class_">NgsDrawerCaption</span>,
    <span class="hljs-title class_">NgsDrawerClose</span>,
    <span class="hljs-title class_">NgsDrawerFooter</span>,
    <span class="hljs-title class_">NgsDrawerHeader</span>,
    <span class="hljs-title class_">NgsDrawerTitle</span>,
  ],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DrawerHeaderFooterExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> open = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> saved = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> rows = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">6</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> i + <span class="hljs-number">1</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">apply</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">saved</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">open</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">false</span>);
  }
}`}},placement:{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="start.set(true)">Start</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="end.set(true)">End</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="top.set(true)">Top</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="bottom.set(true)">Bottom</button>
  </div>
</div>

<ngs-drawer [(open)]="start" side="start">
  <div ngsDrawerHeader>
    <h2 ngsDrawerTitle>Start drawer</h2>
    <button ngsDrawerClose></button>
  </div>
  <div ngsDrawerBody>Slides in from the start edge, the left in left-to-right layouts.</div>
</ngs-drawer>

<ngs-drawer [(open)]="end" side="end">
  <div ngsDrawerHeader>
    <h2 ngsDrawerTitle>End drawer</h2>
    <button ngsDrawerClose></button>
  </div>
  <div ngsDrawerBody>Slides in from the end edge, the default.</div>
</ngs-drawer>

<ngs-drawer [(open)]="top" side="top">
  <div ngsDrawerHeader>
    <h2 ngsDrawerTitle>Top drawer</h2>
    <button ngsDrawerClose></button>
  </div>
  <div ngsDrawerBody>Slides down from the top, the full width of the page.</div>
</ngs-drawer>

<ngs-drawer [(open)]="bottom" side="bottom">
  <div ngsDrawerHeader>
    <h2 ngsDrawerTitle>Bottom drawer</h2>
    <button ngsDrawerClose></button>
  </div>
  <div ngsDrawerBody>Slides up from the bottom, the full width of the page.</div>
</ngs-drawer>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;start.set(true)&quot;</span>&gt;</span>Start<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;end.set(true)&quot;</span>&gt;</span>End<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;top.set(true)&quot;</span>&gt;</span>Top<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;bottom.set(true)&quot;</span>&gt;</span>Bottom<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-drawer</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;start&quot;</span> <span class="hljs-attr">side</span>=<span class="hljs-string">&quot;start&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsDrawerTitle</span>&gt;</span>Start drawer<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsDrawerClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerBody</span>&gt;</span>Slides in from the start edge, the left in left-to-right layouts.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-drawer</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-drawer</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;end&quot;</span> <span class="hljs-attr">side</span>=<span class="hljs-string">&quot;end&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsDrawerTitle</span>&gt;</span>End drawer<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsDrawerClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerBody</span>&gt;</span>Slides in from the end edge, the default.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-drawer</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-drawer</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">side</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsDrawerTitle</span>&gt;</span>Top drawer<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsDrawerClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerBody</span>&gt;</span>Slides down from the top, the full width of the page.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-drawer</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-drawer</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">side</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsDrawerTitle</span>&gt;</span>Bottom drawer<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsDrawerClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerBody</span>&gt;</span>Slides up from the bottom, the full width of the page.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-drawer</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsDrawer,
  NgsDrawerBody,
  NgsDrawerClose,
  NgsDrawerHeader,
  NgsDrawerTitle,
} from '@bootlace/core/drawer';

@Component({
  selector: 'docs-drawer-placement',
  imports: [NgsButton, NgsDrawer, NgsDrawerBody, NgsDrawerClose, NgsDrawerHeader, NgsDrawerTitle],
  templateUrl: './index.html',
})
export class DrawerPlacementExample {
  protected readonly start = signal(false);
  protected readonly end = signal(false);
  protected readonly top = signal(false);
  protected readonly bottom = signal(false);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsDrawer</span>,
  <span class="hljs-title class_">NgsDrawerBody</span>,
  <span class="hljs-title class_">NgsDrawerClose</span>,
  <span class="hljs-title class_">NgsDrawerHeader</span>,
  <span class="hljs-title class_">NgsDrawerTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/drawer&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-drawer-placement&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDrawer</span>, <span class="hljs-title class_">NgsDrawerBody</span>, <span class="hljs-title class_">NgsDrawerClose</span>, <span class="hljs-title class_">NgsDrawerHeader</span>, <span class="hljs-title class_">NgsDrawerTitle</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DrawerPlacementExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> start = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> end = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> top = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> bottom = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
}`}},scroll:{html:{code:`<button ngsButton variant="outline" (click)="open.set(true)">Long content</button>

<ngs-drawer [(open)]="open">
  <div ngsDrawerHeader>
    <h2 ngsDrawerTitle>Activity</h2>
    <button ngsDrawerClose></button>
  </div>
  <div ngsDrawerBody>
    @for (item of items; track item) {
      <p class="mb-0">Event {{ item }}: something happened here.</p>
    }
  </div>
  <div ngsDrawerFooter>
    <button ngsButton (click)="open.set(false)">Done</button>
  </div>
</ngs-drawer>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open.set(true)&quot;</span>&gt;</span>Long content<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-drawer</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsDrawerTitle</span>&gt;</span>Activity<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsDrawerClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerBody</span>&gt;</span>
    @for (item of items; track item) {
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Event {{ item }}: something happened here.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsDrawerFooter</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open.set(false)&quot;</span>&gt;</span>Done<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-drawer</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsDrawer,
  NgsDrawerBody,
  NgsDrawerClose,
  NgsDrawerFooter,
  NgsDrawerHeader,
  NgsDrawerTitle,
} from '@bootlace/core/drawer';

@Component({
  selector: 'docs-drawer-scroll',
  imports: [
    NgsButton,
    NgsDrawer,
    NgsDrawerBody,
    NgsDrawerClose,
    NgsDrawerFooter,
    NgsDrawerHeader,
    NgsDrawerTitle,
  ],
  templateUrl: './index.html',
})
export class DrawerScrollExample {
  protected readonly open = signal(false);
  protected readonly items = Array.from({ length: 40 }, (_, i) => i + 1);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsDrawer</span>,
  <span class="hljs-title class_">NgsDrawerBody</span>,
  <span class="hljs-title class_">NgsDrawerClose</span>,
  <span class="hljs-title class_">NgsDrawerFooter</span>,
  <span class="hljs-title class_">NgsDrawerHeader</span>,
  <span class="hljs-title class_">NgsDrawerTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/drawer&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-drawer-scroll&#x27;</span>,
  <span class="hljs-attr">imports</span>: [
    <span class="hljs-title class_">NgsButton</span>,
    <span class="hljs-title class_">NgsDrawer</span>,
    <span class="hljs-title class_">NgsDrawerBody</span>,
    <span class="hljs-title class_">NgsDrawerClose</span>,
    <span class="hljs-title class_">NgsDrawerFooter</span>,
    <span class="hljs-title class_">NgsDrawerHeader</span>,
    <span class="hljs-title class_">NgsDrawerTitle</span>,
  ],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DrawerScrollExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> open = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> items = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">40</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> i + <span class="hljs-number">1</span>);
}`}}};var ms=class l{tab=Yn(`examples`);sources=hs;placement=A;headerFooter=M;scroll=W;backdrop=P;static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-drawer-page`]],inputs:{tab:[1,`tab`]},decls:124,vars:9,consts:[[`heading`,`Drawer`,`package`,`@bootlace/core/drawer`,`path`,`/components/drawer`,3,`tab`],[1,`docs-page-lead`],[`id`,`placement`,`heading`,`Placement`,3,`component`,`sources`],[`id`,`header-footer`,`heading`,`Header and footer`,3,`component`,`sources`],[`id`,`scroll`,`heading`,`Long content`,3,`component`,`sources`],[`id`,`backdrop`,`heading`,`Backdrop and Escape`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,e){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A panel that slides in from the edge of the page, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.drawer`),vi(),Zf(5,` and styled after Taiga UI's drawer: a header with the title and a close button, a scrolling body and a footer for actions. Open it declaratively with `),ce(6,`code`),Zf(7,`[(open)]`),vi(),Zf(8,`. It is a modal native `),ce(9,`code`),Zf(10,`<dialog>`),vi(),Zf(11,`, so focus is contained and the page behind it is inert. `),vi(),ce(12,`docs-example`,2)(13,`code`),Zf(14,`side`),vi(),Zf(15,` is `),ce(16,`code`),Zf(17,`end`),vi(),Zf(18,` (default), `),ce(19,`code`),Zf(20,`start`),vi(),Zf(21,`, `),ce(22,`code`),Zf(23,`top`),vi(),Zf(24,` or `),ce(25,`code`),Zf(26,`bottom`),vi(),Zf(27,`. `),ce(28,`code`),Zf(29,`start`),vi(),Zf(30,` and `),ce(31,`code`),Zf(32,`end`),vi(),Zf(33,` span the full height, and the full width on phones; they follow the writing direction, so they flip in right-to-left layouts. `),ce(34,`code`),Zf(35,`top`),vi(),Zf(36,` and `),ce(37,`code`),Zf(38,`bottom`),vi(),Zf(39,` span the full width with the corners facing the page rounded; set `),ce(40,`code`),Zf(41,`--drawer-height`),vi(),Zf(42,` to change their height. Compose the drawer from `),ce(43,`code`),Zf(44,`ngsDrawerHeader`),vi(),Zf(45,`, `),ce(46,`code`),Zf(47,`ngsDrawerTitle`),vi(),Zf(48,`, `),ce(49,`code`),Zf(50,`ngsDrawerBody`),vi(),Zf(51,` and `),ce(52,`code`),Zf(53,`ngsDrawerFooter`),vi(),Zf(54,`; `),ce(55,`code`),Zf(56,`ngsDrawerClose`),vi(),Zf(57,` is a close button. `),vi(),ce(58,`docs-example`,3),Zf(59,` The header can hold a caption (`),ce(60,`code`),Zf(61,`ngsDrawerCaption`),vi(),Zf(62,`), a title and a description next to the close button. The footer holds the actions, end-aligned. Both stay in view while the body scrolls. `),vi(),ce(63,`docs-example`,4),Zf(64,` The body scrolls on its own, so the header and footer never leave the screen. The page behind does not scroll while the drawer is open. `),vi(),ce(65,`docs-example`,5)(66,`code`),Zf(67,`backdrop="static"`),vi(),Zf(68,` ignores clicks outside and shakes the drawer; `),ce(69,`code`),Zf(70,`[keyboard]="false"`),vi(),Zf(71,` does the same for Escape. `),ce(72,`code`),Zf(73,`[backdrop]="false"`),vi(),Zf(74,` removes the dim backdrop. The drawer emits `),ce(75,`code`),Zf(76,`dismissed`),vi(),Zf(77,` with `),ce(78,`code`),Zf(79,`'escape'`),vi(),Zf(80,` or `),ce(81,`code`),Zf(82,`'backdrop'`),vi(),Zf(83,` when the user closes it that way. `),vi(),ce(84,`section`,6)(85,`h2`,7),Zf(86,`Accessibility`),vi(),ce(87,`p`),Zf(88,` The drawer is a native `),ce(89,`code`),Zf(90,`<dialog>`),vi(),Zf(91,` opened with `),ce(92,`code`),Zf(93,`showModal()`),vi(),Zf(94,`: focus is contained, Tab and Shift+Tab stay inside and the rest of the page is inert. Focus moves to the element marked `),ce(95,`code`),Zf(96,`ngsAutofocus`),vi(),Zf(97,`, else the first focusable element, and returns to the opener when the drawer closes. Escape closes it unless `),ce(98,`code`),Zf(99,`keyboard`),vi(),Zf(100,` is `),ce(101,`code`),Zf(102,`false`),vi(),Zf(103,`, and page scrolling is locked while it is open. `),vi(),ce(104,`p`),Zf(105,` The drawer is named after its `),ce(106,`code`),Zf(107,`ngsDrawerTitle`),vi(),Zf(108,`; set `),ce(109,`code`),Zf(110,`label`),vi(),Zf(111,` or `),ce(112,`code`),Zf(113,`labelledBy`),vi(),Zf(114,` when it has no visible title. The close button is named from the `),ce(115,`code`),Zf(116,`close`),vi(),Zf(117,` string of `),ce(118,`code`),Zf(119,`NGS_I18N`),vi(),Zf(120,`. Always give the drawer a close button or a footer action. Unlike Taiga's drawer, which can stay non-modal, this one always blocks the page behind it; `),ce(121,`code`),Zf(122,`[backdrop]="false"`),vi(),Zf(123,` only hides the dimming. `),vi()()()),t&2&&(Ot(`tab`,e.tab()),Tt(12),Ot(`component`,e.placement)(`sources`,e.sources.placement),Tt(46),Ot(`component`,e.headerFooter)(`sources`,e.sources[`header-footer`]),Tt(5),Ot(`component`,e.scroll)(`sources`,e.sources.scroll),Tt(2),Ot(`component`,e.backdrop)(`sources`,e.sources.backdrop))},dependencies:[ue$1,pe],encapsulation:2})};export{ms as DrawerPage};