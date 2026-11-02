import{$t as ag,A as J4,An as hg,At as W,Br as ui,Cr as rf,Ct as U0,Et as Va,F as Jo,G as Lr,Gr as vf,Gt as Yn,Hn as kf,Hr as vC,I as K,In as jh,It as XR,Jt as Zf,Ln as jn,N as JR,P as Jf,Rr as ue,Sn as fh,Tn as gf,Ut as YZ,Vt as Y3,Wr as ve,Yn as lt,Zr as wf,_r as q3,ei as xh,en as ah,et as Ot,f as Cf,i as $t,ir as nf,kn as hf,ln as cj,mn as dh,nr as nA,on as ce,q as Mh,qr as vi,r as $f,sn as cg,ur as of,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{t as l}from"./chunk-B6h8Jb5u.js";import{R as zn,S as Yn$1,a as Fi,g as Ti,n as Ba}from"./chunk-DycqepRM.js";import"./chunk-CfGjEUxa.js";import{n as q,r as x$1,t as N$1}from"./chunk-BOhm2mpp.js";import{_ as d,b as te,g as Z,h as Y,m as Q,v as ee,y as se}from"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";var Ts=[`dialog`];var Hs=[`*`];var S=class l{browser=YZ(k(lt));scrollLock=k(Fi);config=k(Yn$1);dialog=nA(`dialog`);native;behavior;id=Ba(`ngs-sheet`);open=JR(!1);detents=Yn([`auto`]);backdrop=Yn(!0);keyboard=Yn(!0,{transform:$t});swipeToClose=Yn(this.config.swipeToClose,{transform:$t});label=Yn();labelledBy=Yn();dismissed=XR();constructor(){J4(()=>{let o=this.open(),n=this.dialog()?.nativeElement;!n||!this.browser||K(()=>{this.native??=new Ti(n,{backdrop:()=>this.backdrop(),keyboard:()=>this.keyboard(),dismiss:a=>this.dismiss(a)},this.scrollLock,`ngs-sheet-static`),this.behavior??=new zn(n,{detents:()=>this.detents(),swipeToClose:()=>this.swipeToClose()&&this.backdrop()!==`static`,closeOnBack:()=>this.config.closeOnBack,dismiss:a=>this.dismiss(a)}),o?(this.behavior.prepare(),this.native.show(),this.behavior.attach()):(this.behavior.detach(),this.native.hide(!1))})}),k(jn).onDestroy(()=>{this.behavior?.detach(),this.native?.destroy()})}close(){this.open.set(!1)}dismiss(o){this.open.set(!1),this.dismissed.emit(o)}static ɵfac=function(n){return new(n||l)};static ɵcmp=ve({type:l,selectors:[[`ngs-sheet`]],viewQuery:function(n,a){n&1&&ah(a.dialog,Ts,5),n&2&&wf()},hostAttrs:[1,`ngs-sheet-host`],inputs:{open:[1,`open`],detents:[1,`detents`],backdrop:[1,`backdrop`],keyboard:[1,`keyboard`],swipeToClose:[1,`swipeToClose`],label:[1,`label`],labelledBy:[1,`labelledBy`]},outputs:{open:`openChange`,dismissed:`dismissed`},ngContentSelectors:Hs,decls:3,vars:5,consts:[[`dialog`,``],[`tabindex`,`-1`,1,`ngs-sheet`,3,`id`]],template:function(n,a){n&1&&(kf(),cg(0,`dialog`,1,0),hf(2),ag()),n&2&&(dh(`ngs-sheet-no-backdrop`,!a.backdrop()),Va(`id`,a.id),Lr(`aria-label`,a.label()||null)(`aria-labelledby`,a.labelledBy()||null))},encapsulation:2})};var b=class l{static ɵfac=function(n){return new(n||l)};static ɵdir=Jo({type:l,selectors:[[``,`ngsSheetHeader`,``]],hostAttrs:[1,`ngs-sheet-header`]})};var v=class l{id=Ba(`ngs-sheet-title`);static ɵfac=function(n){return new(n||l)};static ɵdir=Jo({type:l,selectors:[[``,`ngsSheetTitle`,``]],hostAttrs:[1,`ngs-sheet-title`],hostVars:1,hostBindings:function(n,a){n&2&&Va(`id`,a.id)}})};var x=class l{static ɵfac=function(n){return new(n||l)};static ɵdir=Jo({type:l,selectors:[[``,`ngsSheetBody`,``]],hostAttrs:[1,`ngs-sheet-body`]})};var D=class l{static ɵfac=function(n){return new(n||l)};static ɵdir=Jo({type:l,selectors:[[``,`ngsSheetFooter`,``]],hostAttrs:[1,`ngs-sheet-footer`]})};var N=class l$1{sheet=k(S);static ɵfac=function(n){return new(n||l$1)};static ɵdir=Jo({type:l$1,selectors:[[`button`,`ngsSheetClose`,``]],hostBindings:function(n,a){n&1&&ui(`click`,function(){return a.sheet.close()})},features:[vC([{directive:l,inputs:[`label`,`label`]}])]})};var H=class l{open=W(!1);last=W(null);static ɵfac=function(n){return new(n||l)};static ɵcmp=ve({type:l,selectors:[[`docs-sheet-basic`]],decls:17,vars:2,consts:[[`ngsButton`,``,3,`click`],[3,`openChange`,`dismissed`,`open`],[`ngsSheetHeader`,``],[`ngsSheetTitle`,``],[`ngsSheetClose`,``],[`ngsSheetBody`,``],[1,`mb-0`],[`ngsSheetFooter`,``],[`ngsButton`,``,`variant`,`outline`,`color`,`secondary`,3,`click`],[`aria-live`,`polite`,1,`mt-3`,`mb-0`]],template:function(n,a){n&1&&(ce(0,`button`,0),ui(`click`,function(){return a.open.set(!0)}),Zf(1,`Share`),vi(),ce(2,`ngs-sheet`,1),xh(`openChange`,function(h){return $f(a.open,h)||(a.open=h),h}),ui(`dismissed`,function(h){return a.last.set(h)}),ce(3,`div`,2)(4,`h2`,3),Zf(5,`Share “Quarterly report”`),vi(),ue(6,`button`,4),vi(),ce(7,`div`,5)(8,`p`,6),Zf(9,` Anyone with the link can view the report. Drag the handle down, tap outside, press Escape or go back to close the sheet. `),vi()(),ce(10,`div`,7)(11,`button`,8),ui(`click`,function(){return a.open.set(!1)}),Zf(12,`Cancel`),vi(),ce(13,`button`,0),ui(`click`,function(){return a.open.set(!1)}),Zf(14,`Copy link`),vi()()(),ce(15,`p`,9),Zf(16),vi()),n&2&&(Tt(2),Mh(`open`,a.open),Tt(14),hg(`Last dismissed with: `,a.last()??`nothing yet`))},dependencies:[f,S,x,N,D,b,v],encapsulation:2})};var As=()=>[`medium`,`large`];function Fs(l,o){if(l&1&&(ce(0,`p`,6),Zf(1),vi()),l&2){let n=o.$implicit;Tt(),hg(`Event `,n,`: something happened here.`)}}var A=class l{open=W(!1);items=Array.from({length:40},(o,n)=>n+1);static ɵfac=function(n){return new(n||l)};static ɵcmp=ve({type:l,selectors:[[`docs-sheet-heights`]],decls:10,vars:3,consts:[[`ngsButton`,``,`variant`,`outline`,3,`click`],[3,`openChange`,`open`,`detents`],[`ngsSheetHeader`,``],[`ngsSheetTitle`,``],[`ngsSheetClose`,``],[`ngsSheetBody`,``],[1,`mb-2`]],template:function(n,a){n&1&&(ce(0,`button`,0),ui(`click`,function(){return a.open.set(!0)}),Zf(1,`Activity`),vi(),ce(2,`ngs-sheet`,1),xh(`openChange`,function(h){return $f(a.open,h)||(a.open=h),h}),ce(3,`div`,2)(4,`h2`,3),Zf(5,`Activity`),vi(),ue(6,`button`,4),vi(),ce(7,`div`,5),of(8,Fs,2,1,`p`,6,nf),vi()()),n&2&&(Tt(2),Mh(`open`,a.open),Ot(`detents`,Jf(2,As)),Tt(6),rf(a.items))},dependencies:[f,S,x,N,b,v],encapsulation:2})};function Ps(l,o){if(l&1){let n=gf();ce(0,`div`,6)(1,`button`,7),ui(`click`,function(){q3(n);let i=vf();return Y3(i.outcome.set(`Profile chosen.`))}),Zf(2,`Profile`),vi(),ce(3,`button`,7),ui(`click`,function(){q3(n);let i=vf();return Y3(i.outcome.set(`Settings chosen.`))}),Zf(4,`Settings`),vi(),ue(5,`div`,8),ce(6,`button`,7),ui(`click`,function(){q3(n);let i=vf();return Y3(i.outcome.set(`Signed out.`))}),Zf(7,`Sign out`),vi()()}}var O=class l{modal=k(d);static ɵfac=function(n){return new(n||l)};static ɵcmp=ve({type:l,selectors:[[`docs-sheet-edit-profile`]],decls:11,vars:0,consts:[[`ngsModalHeader`,``],[`ngsModalTitle`,``],[`ngsModalClose`,``],[`ngsModalBody`,``],[`for`,`sheet-name`,1,`form-label`],[`id`,`sheet-name`,`value`,`Ada Lovelace`,1,`form-control`],[`ngsModalFooter`,``],[`ngsButton`,``,3,`click`]],template:function(n,a){n&1&&(ce(0,`div`,0)(1,`h2`,1),Zf(2,`Edit profile`),vi(),ue(3,`button`,2),vi(),ce(4,`div`,3)(5,`label`,4),Zf(6,`Name`),vi(),ue(7,`input`,5),vi(),ce(8,`div`,6)(9,`button`,7),ui(`click`,function(){return a.modal.close(`saved`)}),Zf(10,`Save`),vi()())},dependencies:[f,ee,te,se,Y,Z],encapsulation:2})};var F=class l{modals=k(Q);outcome=W(`Nothing chosen yet.`);async edit(){let o=this.modals.open(O);try{this.outcome.set(`Closed with "${await o.result}".`)}catch(n){this.outcome.set(`Dismissed with "${n}".`)}}static ɵfac=function(n){return new(n||l)};static ɵcmp=ve({type:l,selectors:[[`docs-sheet-small-screens`]],decls:11,vars:2,consts:[[`menu`,``],[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`ngsDropdown`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[`role`,`status`,1,`col-auto`],[`ngsMenu`,``],[`ngsMenuItem`,``,3,`click`],[`role`,`separator`,1,`menu-divider`]],template:function(n,a){if(n&1&&(ce(0,`div`,1)(1,`div`,2)(2,`button`,3),Zf(3,`Account`),vi()(),ce(4,`div`,2)(5,`button`,4),ui(`click`,function(){return a.edit()}),Zf(6,`Edit profile`),vi()(),ce(7,`div`,5),Zf(8),vi()(),U0(9,Ps,8,0,`ng-template`,null,0,cj)),n&2){let i=Cf(10);Tt(2),Ot(`ngsDropdown`,i),Tt(6),fh(a.outcome())}},dependencies:[f,q,x$1,N$1],encapsulation:2})};var Ds={basic:{html:{code:`<button ngsButton (click)="open.set(true)">Share</button>

<ngs-sheet [(open)]="open" (dismissed)="last.set($event)">
  <div ngsSheetHeader>
    <h2 ngsSheetTitle>Share \u201CQuarterly report\u201D</h2>
    <button ngsSheetClose></button>
  </div>
  <div ngsSheetBody>
    <p class="mb-0">
      Anyone with the link can view the report. Drag the handle down, tap outside, press Escape or
      go back to close the sheet.
    </p>
  </div>
  <div ngsSheetFooter>
    <button ngsButton variant="outline" color="secondary" (click)="open.set(false)">Cancel</button>
    <button ngsButton (click)="open.set(false)">Copy link</button>
  </div>
</ngs-sheet>

<p class="mt-3 mb-0" aria-live="polite">Last dismissed with: {{ last() ?? 'nothing yet' }}</p>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open.set(true)&quot;</span>&gt;</span>Share<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-sheet</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;open&quot;</span> (<span class="hljs-attr">dismissed</span>)=<span class="hljs-string">&quot;last.set($event)&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsSheetHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsSheetTitle</span>&gt;</span>Share \u201CQuarterly report\u201D<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsSheetClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsSheetBody</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>
      Anyone with the link can view the report. Drag the handle down, tap outside, press Escape or
      go back to close the sheet.
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsSheetFooter</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;secondary&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open.set(false)&quot;</span>&gt;</span>Cancel<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open.set(false)&quot;</span>&gt;</span>Copy link<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-sheet</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3 mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Last dismissed with: {{ last() ?? &#x27;nothing yet&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsSheet,
  NgsSheetBody,
  NgsSheetClose,
  NgsSheetDismissReason,
  NgsSheetFooter,
  NgsSheetHeader,
  NgsSheetTitle,
} from '@bootlace/core/sheet';

@Component({
  selector: 'docs-sheet-basic',
  imports: [
    NgsButton,
    NgsSheet,
    NgsSheetBody,
    NgsSheetClose,
    NgsSheetFooter,
    NgsSheetHeader,
    NgsSheetTitle,
  ],
  templateUrl: './index.html',
})
export class SheetBasicExample {
  protected readonly open = signal(false);
  protected readonly last = signal<NgsSheetDismissReason | null>(null);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsSheet</span>,
  <span class="hljs-title class_">NgsSheetBody</span>,
  <span class="hljs-title class_">NgsSheetClose</span>,
  <span class="hljs-title class_">NgsSheetDismissReason</span>,
  <span class="hljs-title class_">NgsSheetFooter</span>,
  <span class="hljs-title class_">NgsSheetHeader</span>,
  <span class="hljs-title class_">NgsSheetTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/sheet&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-sheet-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [
    <span class="hljs-title class_">NgsButton</span>,
    <span class="hljs-title class_">NgsSheet</span>,
    <span class="hljs-title class_">NgsSheetBody</span>,
    <span class="hljs-title class_">NgsSheetClose</span>,
    <span class="hljs-title class_">NgsSheetFooter</span>,
    <span class="hljs-title class_">NgsSheetHeader</span>,
    <span class="hljs-title class_">NgsSheetTitle</span>,
  ],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SheetBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> open = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> last = signal&lt;<span class="hljs-title class_">NgsSheetDismissReason</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
}`}},heights:{html:{code:`<button ngsButton variant="outline" (click)="open.set(true)">Activity</button>

<ngs-sheet [(open)]="open" [detents]="['medium', 'large']">
  <div ngsSheetHeader>
    <h2 ngsSheetTitle>Activity</h2>
    <button ngsSheetClose></button>
  </div>
  <div ngsSheetBody>
    @for (item of items; track item) {
      <p class="mb-2">Event {{ item }}: something happened here.</p>
    }
  </div>
</ngs-sheet>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open.set(true)&quot;</span>&gt;</span>Activity<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-sheet</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;open&quot;</span> [<span class="hljs-attr">detents</span>]=<span class="hljs-string">&quot;[&#x27;medium&#x27;, &#x27;large&#x27;]&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsSheetHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsSheetTitle</span>&gt;</span>Activity<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsSheetClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsSheetBody</span>&gt;</span>
    @for (item of items; track item) {
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span>Event {{ item }}: something happened here.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-sheet</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsSheet,
  NgsSheetBody,
  NgsSheetClose,
  NgsSheetHeader,
  NgsSheetTitle,
} from '@bootlace/core/sheet';

@Component({
  selector: 'docs-sheet-heights',
  imports: [NgsButton, NgsSheet, NgsSheetBody, NgsSheetClose, NgsSheetHeader, NgsSheetTitle],
  templateUrl: './index.html',
})
export class SheetHeightsExample {
  protected readonly open = signal(false);
  protected readonly items = Array.from({ length: 40 }, (_, i) => i + 1);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsSheet</span>,
  <span class="hljs-title class_">NgsSheetBody</span>,
  <span class="hljs-title class_">NgsSheetClose</span>,
  <span class="hljs-title class_">NgsSheetHeader</span>,
  <span class="hljs-title class_">NgsSheetTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/sheet&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-sheet-heights&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsSheet</span>, <span class="hljs-title class_">NgsSheetBody</span>, <span class="hljs-title class_">NgsSheetClose</span>, <span class="hljs-title class_">NgsSheetHeader</span>, <span class="hljs-title class_">NgsSheetTitle</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SheetHeightsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> open = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> items = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">40</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> i + <span class="hljs-number">1</span>);
}`}},"small-screens":{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-auto">
    <button ngsButton variant="outline" [ngsDropdown]="menu">Account</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="edit()">Edit profile</button>
  </div>
  <div class="col-auto" role="status">{{ outcome() }}</div>
</div>

<ng-template #menu>
  <div ngsMenu>
    <button ngsMenuItem (click)="outcome.set('Profile chosen.')">Profile</button>
    <button ngsMenuItem (click)="outcome.set('Settings chosen.')">Settings</button>
    <div class="menu-divider" role="separator"></div>
    <button ngsMenuItem (click)="outcome.set('Signed out.')">Sign out</button>
  </div>
</ng-template>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span>&gt;</span>Account<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;edit()&quot;</span>&gt;</span>Edit profile<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;status&quot;</span>&gt;</span>{{ outcome() }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;outcome.set(&#x27;Profile chosen.&#x27;)&quot;</span>&gt;</span>Profile<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;outcome.set(&#x27;Settings chosen.&#x27;)&quot;</span>&gt;</span>Settings<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-divider&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;separator&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;outcome.set(&#x27;Signed out.&#x27;)&quot;</span>&gt;</span>Sign out<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>`},ts:{code:`import { Component, inject, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsDropdown, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';
import {
  NgsActiveModal,
  NgsModalBody,
  NgsModalClose,
  NgsModalFooter,
  NgsModalHeader,
  NgsModalService,
  NgsModalTitle,
} from '@bootlace/core/modal';

@Component({
  selector: 'docs-sheet-edit-profile',
  imports: [NgsButton, NgsModalBody, NgsModalClose, NgsModalFooter, NgsModalHeader, NgsModalTitle],
  template: \`
    <div ngsModalHeader>
      <h2 ngsModalTitle>Edit profile</h2>
      <button ngsModalClose></button>
    </div>
    <div ngsModalBody>
      <label class="form-label" for="sheet-name">Name</label>
      <input id="sheet-name" class="form-control" value="Ada Lovelace" />
    </div>
    <div ngsModalFooter>
      <button ngsButton (click)="modal.close('saved')">Save</button>
    </div>
  \`,
})
export class EditProfileDialog {
  protected readonly modal = inject(NgsActiveModal);
}

@Component({
  selector: 'docs-sheet-small-screens',
  imports: [NgsButton, NgsDropdown, NgsMenu, NgsMenuItem],
  templateUrl: './index.html',
})
export class SheetSmallScreensExample {
  private readonly modals = inject(NgsModalService);
  protected readonly outcome = signal('Nothing chosen yet.');

  protected async edit(): Promise<void> {
    const ref = this.modals.open(EditProfileDialog);
    try {
      this.outcome.set(\`Closed with "\${await ref.result}".\`);
    } catch (reason) {
      this.outcome.set(\`Dismissed with "\${reason}".\`);
    }
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsActiveModal</span>,
  <span class="hljs-title class_">NgsModalBody</span>,
  <span class="hljs-title class_">NgsModalClose</span>,
  <span class="hljs-title class_">NgsModalFooter</span>,
  <span class="hljs-title class_">NgsModalHeader</span>,
  <span class="hljs-title class_">NgsModalService</span>,
  <span class="hljs-title class_">NgsModalTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/modal&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-sheet-edit-profile&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsModalBody</span>, <span class="hljs-title class_">NgsModalClose</span>, <span class="hljs-title class_">NgsModalFooter</span>, <span class="hljs-title class_">NgsModalHeader</span>, <span class="hljs-title class_">NgsModalTitle</span>],
  <span class="hljs-attr">template</span>: <span class="hljs-string">\`
    &lt;div ngsModalHeader&gt;
      &lt;h2 ngsModalTitle&gt;Edit profile&lt;/h2&gt;
      &lt;button ngsModalClose&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div ngsModalBody&gt;
      &lt;label class=&quot;form-label&quot; for=&quot;sheet-name&quot;&gt;Name&lt;/label&gt;
      &lt;input id=&quot;sheet-name&quot; class=&quot;form-control&quot; value=&quot;Ada Lovelace&quot; /&gt;
    &lt;/div&gt;
    &lt;div ngsModalFooter&gt;
      &lt;button ngsButton (click)=&quot;modal.close(&#x27;saved&#x27;)&quot;&gt;Save&lt;/button&gt;
    &lt;/div&gt;
  \`</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">EditProfileDialog</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> modal = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsActiveModal</span>);
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-sheet-small-screens&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SheetSmallScreensExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modals = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsModalService</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> outcome = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;Nothing chosen yet.&#x27;</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">async</span> <span class="hljs-title function_">edit</span>(): <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-built_in">void</span>&gt; {
    <span class="hljs-keyword">const</span> ref = <span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">EditProfileDialog</span>);
    <span class="hljs-keyword">try</span> {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">outcome</span>.<span class="hljs-title function_">set</span>(<span class="hljs-string">\`Closed with &quot;<span class="hljs-subst">\${<span class="hljs-keyword">await</span> ref.result}</span>&quot;.\`</span>);
    } <span class="hljs-keyword">catch</span> (reason) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">outcome</span>.<span class="hljs-title function_">set</span>(<span class="hljs-string">\`Dismissed with &quot;<span class="hljs-subst">\${reason}</span>&quot;.\`</span>);
    }
  }
}`}}};var qs=class l{tab=Yn(`examples`);sources=Ds;basic=H;heights=A;smallScreens=F;static ɵfac=function(n){return new(n||l)};static ɵcmp=ve({type:l,selectors:[[`docs-sheet-page`]],inputs:{tab:[1,`tab`]},decls:109,vars:11,consts:[[`heading`,`Sheet`,`package`,`@bootlace/core/sheet`,`path`,`/components/sheet`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`heights`,`heading`,`Heights`,3,`component`,`sources`],[`id`,`small-screens`,`heading`,`On small screens`,3,`component`,`sources`],[`aria-labelledby`,`config`,1,`docs-section`],[`id`,`config`,1,`h6`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(n,a){n&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A bottom sheet that behaves like a mobile app's. It slides up from the bottom with a drag handle and follows your finger: let go and it settles, or closes when swiped down. Back, Escape and a tap outside close it too. On phones and tablets, modals and dropdown menus become sheets on their own. `),vi(),ce(3,`docs-example`,2),Zf(4,` Open it with `),ce(5,`code`),Zf(6,`[(open)]`),vi(),Zf(7,` and compose it from `),ce(8,`code`),Zf(9,`ngsSheetHeader`),vi(),Zf(10,`, `),ce(11,`code`),Zf(12,`ngsSheetTitle`),vi(),Zf(13,`, `),ce(14,`code`),Zf(15,`ngsSheetBody`),vi(),Zf(16,` and `),ce(17,`code`),Zf(18,`ngsSheetFooter`),vi(),Zf(19,`; `),ce(20,`code`),Zf(21,`ngsSheetClose`),vi(),Zf(22,` is a close button. By default the sheet fits its content. It emits `),ce(23,`code`),Zf(24,`dismissed`),vi(),Zf(25,` with `),ce(26,`code`),Zf(27,`'swipe'`),vi(),Zf(28,`, `),ce(29,`code`),Zf(30,`'back'`),vi(),Zf(31,`, `),ce(32,`code`),Zf(33,`'escape'`),vi(),Zf(34,` or `),ce(35,`code`),Zf(36,`'backdrop'`),vi(),Zf(37,` when the user closes it. `),vi(),ce(38,`docs-example`,3)(39,`code`),Zf(40,`detents`),vi(),Zf(41,` lists the heights the sheet can rest at, smallest first: `),ce(42,`code`),Zf(43,`'auto'`),vi(),Zf(44,` (the content's height), `),ce(45,`code`),Zf(46,`'medium'`),vi(),Zf(47,` (half the screen) and `),ce(48,`code`),Zf(49,`'large'`),vi(),Zf(50,` (the full screen below a small gap). With `),ce(51,`code`),Zf(52,`['medium', 'large']`),vi(),Zf(53,` it opens at half height. Dragging it up, or swiping up on its content, makes it full height, and its content then scrolls. A swipe down only moves the sheet once the content is scrolled to the top. `),vi(),ce(54,`docs-example`,4),Zf(55,` Below 1024px, Bootstrap's `),ce(56,`code`),Zf(57,`lg`),vi(),Zf(58,` breakpoint, a dropdown menu opens as an action sheet with large rows and a Cancel button, and a modal opens as a sheet. Narrow the window or open this page on a phone to see it. Crossing the breakpoint while a modal is open turns it into the dialog and back, keeping what was typed. A menu closes instead. Turn it off for one dropdown with `),ce(59,`code`),Zf(60,`[ngsDropdownSheet]="false"`),vi(),Zf(61,` or one modal with `),ce(62,`code`),Zf(63,`sheet: false`),vi(),Zf(64,`; a modal's `),ce(65,`code`),Zf(66),vi(),Zf(67,` sets its heights. Fullscreen modals and the search dialog stay as they are. `),vi(),ce(68,`section`,5)(69,`h2`,6),Zf(70,`App-wide settings`),vi(),ce(71,`p`)(72,`code`),Zf(73,`provideNgsSheet()`),vi(),Zf(74,` sets the breakpoint (`),ce(75,`code`),Zf(76,`0`),vi(),Zf(77,` turns sheets off), whether `),ce(78,`code`),Zf(79,`modals`),vi(),Zf(80,` and `),ce(81,`code`),Zf(82,`menus`),vi(),Zf(83,` become sheets, the heights of modal sheets (`),ce(84,`code`),Zf(85,`detents`),vi(),Zf(86,`), and whether a swipe (`),ce(87,`code`),Zf(88,`swipeToClose`),vi(),Zf(89,`) and Back (`),ce(90,`code`),Zf(91,`closeOnBack`),vi(),Zf(92,`) close them. For example, `),ce(93,`code`),Zf(94),vi(),Zf(95,` keeps floating menus and makes modals sheets on phones only. `),vi(),ce(96,`p`),Zf(97,` Opening a sheet adds a history entry with the same URL, so Back closes it instead of leaving the page. Choosing a menu item that navigates leaves that entry behind, one step back. `),vi()(),ce(98,`section`,7)(99,`h2`,8),Zf(100,`Accessibility`),vi(),ce(101,`p`),Zf(102,` A sheet is a native modal `),ce(103,`code`),Zf(104,`<dialog>`),vi(),Zf(105,`: focus moves in and stays in, the page behind is inert and does not scroll, Escape closes it, and focus returns to the button that opened it. The drag handle is hidden from assistive technology, since Escape, Back and the close or Cancel button do the same. A menu in a sheet keeps `),ce(106,`code`),Zf(107,`role="menu"`),vi(),Zf(108,` and its arrow keys, and the sheet is named after the button that opened it. Rows are at least 44px tall. With reduced motion the sheet appears and disappears without sliding. `),vi()()()),n&2&&(Ot(`tab`,a.tab()),Tt(3),Ot(`component`,a.basic)(`sources`,a.sources.basic),Tt(35),Ot(`component`,a.heights)(`sources`,a.sources.heights),Tt(16),Ot(`component`,a.smallScreens)(`sources`,a.sources[`small-screens`]),Tt(12),jh(`sheet: `,`{`,` detents `,`}`),Tt(28),jh(`provideNgsSheet(`,`{`,` breakpoint: 768, menus: false `,`}`,`)`))},dependencies:[ue$1,pe],encapsulation:2})};export{qs as SheetPage};