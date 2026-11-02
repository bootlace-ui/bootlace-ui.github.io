import{A as J4,An as hg,At as W$1,Br as ui,Cr as rf,Ct as U0,Et as Va,G as Lr,Gr as vf,Gt as Yn,Hn as kf,Jt as Zf,L as KC,N as JR,Or as sc,Pt as XC,Rn as jo,Rr as ue,Sn as fh,Tn as gf,Ut as YZ,Vt as Y3,W as Ll,Wr as ve,Yn as lt,Yt as _F,Zr as wf,Zt as _m,_r as q3,ar as nh,cn as ch,ei as xh,et as Ot,f as Cf,hn as eA,i as $t,ir as nf,kn as hf,ln as cj,mn as dh,mt as So,on as ce,q as Mh,qn as lU,qr as vi,r as $f,ur as of,ut as SF,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import{n as Ba}from"./chunk-DycqepRM.js";import{t as y}from"./chunk-B6-qfzlj.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";var xs=[`*`];function bs(l,p){l&1&&(ce(0,`span`,1),ue(1,`ngs-icon`,4),vi()),l&2&&(Tt(),Ot(`icon`,p))}function fs(l,p){l&1&&(ce(0,`span`,5),Zf(1),vi()),l&2&&(Tt(),hg(`, `,p))}function _s(l,p){if(l&1&&(ce(0,`span`,5),Zf(1),vi(),hf(2),KC(3,fs,2,1,`span`,5)),l&2){let t,n=vf();Tt(),fh(n.prefix()),Tt(2),XC((t=n.stateText())?3:-1,t)}}function ws(l,p){if(l&1){let t=gf();ce(0,`button`,6),ui(`click`,function(){q3(t);let c=vf();return Y3(c.activate())}),nh(1,7),vi()}if(l&2){let t=vf(),n=Cf(2);Ot(`disabled`,t.disabled()),Lr(`aria-current`,t.active()?`step`:null),Tt(),Ot(`ngTemplateOutlet`,n)}}function Ns(l,p){if(l&1&&(ce(0,`span`,3),nh(1,7),vi()),l&2){let t=vf(),n=Cf(2);Lr(`aria-current`,t.active()?`step`:null),Tt(),Ot(`ngTemplateOutlet`,n)}}var h=class l{index=JR(0);orientation=Yn(`horizontal`);connected=Yn(!1,{transform:$t});autoscroll=Yn(!0,{transform:$t});clickable=Yn(!0,{transform:$t});steps=eA(sc(()=>m));static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`ol`,`ngsStepper`,``]],contentQueries:function(t,n,c){t&1&&ch(c,n.steps,m,4),t&2&&wf()},hostAttrs:[1,`stepper`,`ngs-stepper`],hostVars:4,hostBindings:function(t,n){t&2&&dh(`ngs-stepper-row`,n.orientation()===`horizontal`)(`ngs-stepper-connected`,n.orientation()===`vertical`&&n.connected())},inputs:{index:[1,`index`],orientation:[1,`orientation`],connected:[1,`connected`],autoscroll:[1,`autoscroll`],clickable:[1,`clickable`]},outputs:{index:`indexChange`},ngContentSelectors:xs,decls:1,vars:0,template:function(t,n){t&1&&(kf(),hf(0))},encapsulation:2})};var m=class l{stepper=k(h);el=k(So);browser=YZ(k(lt));seen=!1;i18n=k(o).stepper;id=Ba(`ngs-step`);state=Yn(`auto`);icon=Yn();disabled=Yn(!1,{transform:$t});position=jo(()=>this.stepper.steps().indexOf(this));active=jo(()=>this.position()===this.stepper.index());resolved=jo(()=>{let p=this.state();return p!==`auto`?p:this.position()<this.stepper.index()?`done`:null});markerIcon=jo(()=>{let p=this.resolved(),t=p===`done`?_F:p===`error`?SF:void 0;return this.icon()??t});prefix=jo(()=>`${this.i18n.step.replace(`{index}`,String(this.position()+1)).replace(`{count}`,String(this.stepper.steps().length))}: `);stateText=jo(()=>{if(this.disabled())return this.i18n.disabled;let p=this.resolved();return p===`done`?this.i18n.done:p===`error`?this.i18n.error:``});constructor(){J4(()=>{let p=this.active(),t=this.stepper.autoscroll();p&&t&&this.seen&&this.browser&&this.el.nativeElement.scrollIntoView?.({block:`nearest`,inline:`nearest`}),this.seen=!0})}activate(){this.disabled()||this.stepper.index.set(this.position())}static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`li`,`ngsStep`,``]],hostAttrs:[1,`stepper-item`,`ngs-step`],hostVars:11,hostBindings:function(t,n){t&2&&(Va(`id`,n.id),dh(`active`,n.active())(`ngs-step-done`,n.resolved()===`done`)(`ngs-step-error`,n.resolved()===`error`)(`ngs-step-disabled`,n.disabled())(`ngs-step-marked`,!!n.markerIcon()))},inputs:{state:[1,`state`],icon:[1,`icon`],disabled:[1,`disabled`]},ngContentSelectors:xs,decls:5,vars:2,consts:[[`body`,``],[1,`ngs-step-marker`],[`type`,`button`,1,`ngs-step-label`,3,`disabled`],[1,`ngs-step-label`],[`size`,`1.25rem`,3,`icon`],[1,`ngs-step-sr`],[`type`,`button`,1,`ngs-step-label`,3,`click`,`disabled`],[3,`ngTemplateOutlet`]],template:function(t,n){if(t&1&&(kf(),KC(0,bs,2,1,`span`,1),U0(1,_s,4,2,`ng-template`,null,0,cj),KC(3,ws,2,3,`button`,2)(4,Ns,2,2,`span`,3)),t&2){let c;XC((c=n.markerIcon())?0:-1,c),Tt(3),XC(n.stepper.clickable()?3:4)}},dependencies:[Ll,_m],encapsulation:2})};function ks(l,p){if(l&1&&(ce(0,`li`,4),Zf(1),vi()),l&2){let t=p.$implicit;Tt(),fh(t)}}var P=class l{steps=[`One`,`Two`,`Three`,`Four`,`Five`,`Six`,`Seven`];active=W$1(0);go(p){this.active.update(t=>Math.min(Math.max(t+p,0),this.steps.length-1))}static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-stepper-autoscroll`]],decls:11,vars:3,consts:[[1,`row`,`gy-3`],[1,`col-12`,`sm:col-6`,`lg:col-4`],[`label`,`Steps`,1,`border`,`p-2`,2,`max-height`,`9rem`],[`ngsStepper`,``,`orientation`,`vertical`,3,`indexChange`,`index`],[`ngsStep`,``],[1,`col-12`],[`type`,`button`,`ngsButton`,``,`variant`,`outline`,3,`click`,`disabled`],[`type`,`button`,`ngsButton`,``,1,`ms-2`,3,`click`,`disabled`]],template:function(t,n){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-scrollbar`,2)(3,`ol`,3),xh(`indexChange`,function(r){return $f(n.active,r)||(n.active=r),r}),of(4,ks,2,1,`li`,4,nf),vi()()(),ce(6,`div`,5)(7,`button`,6),ui(`click`,function(){return n.go(-1)}),Zf(8,` Previous `),vi(),ce(9,`button`,7),ui(`click`,function(){return n.go(1)}),Zf(10,` Next `),vi()()()),t&2&&(Tt(3),Mh(`index`,n.active),Tt(),rf(n.steps),Tt(3),Ot(`disabled`,n.active()===0),Tt(2),Ot(`disabled`,n.active()===n.steps.length-1))},dependencies:[h,m,y,f],encapsulation:2})};var B=class l{active=W$1(1);static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-stepper-connected`]],decls:11,vars:1,consts:[[1,`row`],[1,`col-12`,`sm:col-6`,`lg:col-4`],[`ngsStepper`,``,`orientation`,`vertical`,`connected`,``,3,`indexChange`,`index`],[`ngsStep`,``]],template:function(t,n){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ol`,2),xh(`indexChange`,function(r){return $f(n.active,r)||(n.active=r),r}),ce(3,`li`,3),Zf(4,`Start up`),vi(),ce(5,`li`,3),Zf(6,`Cash in`),vi(),ce(7,`li`,3),Zf(8,` Sell out this large amount that you have been saving up for many years of hard work `),vi(),ce(9,`li`,3),Zf(10,`Wind down`),vi()()()()),t&2&&(Tt(2),Mh(`index`,n.active))},dependencies:[h,m],encapsulation:2})};var I=class l{active=W$1(1);icon=lU;static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-stepper-basic`]],decls:11,vars:2,consts:[[1,`row`],[1,`col-12`,`lg:col-10`],[`ngsStepper`,``,3,`indexChange`,`index`],[`ngsStep`,``,`state`,`done`],[`ngsStep`,``],[`ngsStep`,``,`state`,`error`],[`ngsStep`,``,`disabled`,``,3,`icon`]],template:function(t,n){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ol`,2),xh(`indexChange`,function(r){return $f(n.active,r)||(n.active=r),r}),ce(3,`li`,3),Zf(4,`Account`),vi(),ce(5,`li`,4),Zf(6,`Shipping`),vi(),ce(7,`li`,5),Zf(8,`Payment`),vi(),ce(9,`li`,6),Zf(10,`Review`),vi()()()()),t&2&&(Tt(2),Mh(`index`,n.active),Tt(7),Ot(`icon`,n.icon))},dependencies:[h,m],encapsulation:2})};var W=class l{static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-stepper-display-only`]],decls:11,vars:2,consts:[[1,`row`],[1,`col-12`,`lg:col-10`],[`ngsStepper`,``,3,`index`,`clickable`],[`ngsStep`,``]],template:function(t,n){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ol`,2)(3,`li`,3),Zf(4,`Order received`),vi(),ce(5,`li`,3),Zf(6,`Packed`),vi(),ce(7,`li`,3),Zf(8,`On its way`),vi(),ce(9,`li`,3),Zf(10,`Delivered`),vi()()()()),t&2&&(Tt(2),Ot(`index`,2)(`clickable`,!1))},dependencies:[h,m],encapsulation:2})};var z=class l{active=W$1(2);static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-stepper-vertical`]],decls:11,vars:1,consts:[[1,`row`],[1,`col-12`,`sm:col-6`,`lg:col-4`],[`ngsStepper`,``,`orientation`,`vertical`,3,`indexChange`,`index`],[`ngsStep`,``]],template:function(t,n){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ol`,2),xh(`indexChange`,function(r){return $f(n.active,r)||(n.active=r),r}),ce(3,`li`,3),Zf(4,`Place the order`),vi(),ce(5,`li`,3),Zf(6,`Pack the parcel`),vi(),ce(7,`li`,3),Zf(8,`Ship to the depot`),vi(),ce(9,`li`,3),Zf(10,`Deliver to the door`),vi()()()()),t&2&&(Tt(2),Mh(`index`,n.active))},dependencies:[h,m],encapsulation:2})};function Es(l,p){if(l&1&&(ce(0,`li`,3),Zf(1),vi()),l&2){let t=p.$implicit,n=p.$index,c=vf();Ot(`disabled`,n>c.active()),Tt(),fh(t)}}function Cs(l,p){l&1&&(ce(0,`p`),Zf(1,`Choose a name and an email address for the new account.`),vi())}function qs(l,p){l&1&&(ce(0,`p`),Zf(1,`Where should the order be delivered?`),vi())}function Ds(l,p){l&1&&(ce(0,`p`),Zf(1,`Pick a payment method and confirm the order.`),vi())}var A=class l{steps=[`Account`,`Shipping`,`Payment`];active=W$1(0);last=jo(()=>this.active()===this.steps.length-1);go(p){this.active.update(t=>Math.min(Math.max(t+p,0),this.steps.length-1))}static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-stepper-wizard`]],decls:14,vars:4,consts:[[1,`row`,`gy-3`],[1,`col-12`,`lg:col-8`],[`ngsStepper`,``,3,`indexChange`,`index`],[`ngsStep`,``,3,`disabled`],[`aria-live`,`polite`,1,`col-12`,`lg:col-8`],[`type`,`button`,`ngsButton`,``,`variant`,`outline`,3,`click`,`disabled`],[`type`,`button`,`ngsButton`,``,1,`ms-2`,3,`click`,`disabled`]],template:function(t,n){if(t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ol`,2),xh(`indexChange`,function(r){return $f(n.active,r)||(n.active=r),r}),of(3,Es,2,2,`li`,3,nf),vi()(),ce(5,`div`,4),KC(6,Cs,2,0,`p`)(7,qs,2,0,`p`)(8,Ds,2,0,`p`),vi(),ce(9,`div`,1)(10,`button`,5),ui(`click`,function(){return n.go(-1)}),Zf(11,` Back `),vi(),ce(12,`button`,6),ui(`click`,function(){return n.go(1)}),Zf(13,`Next`),vi()()()),t&2){let c;Tt(2),Mh(`index`,n.active),Tt(),rf(n.steps),Tt(3),XC((c=n.active())===0?6:c===1?7:8),Tt(4),Ot(`disabled`,n.active()===0),Tt(2),Ot(`disabled`,n.last())}},dependencies:[h,m,f],encapsulation:2})};var vs={autoscroll:{html:{code:`<div class="row gy-3">
  <div class="col-12 sm:col-6 lg:col-4">
    <ngs-scrollbar label="Steps" class="border p-2" style="max-height: 9rem">
      <ol ngsStepper orientation="vertical" [(index)]="active">
        @for (step of steps; track step) {
          <li ngsStep>{{ step }}</li>
        }
      </ol>
    </ngs-scrollbar>
  </div>
  <div class="col-12">
    <button type="button" ngsButton variant="outline" [disabled]="active() === 0" (click)="go(-1)">
      Previous
    </button>
    <button
      type="button"
      ngsButton
      class="ms-2"
      [disabled]="active() === steps.length - 1"
      (click)="go(1)"
    >
      Next
    </button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row gy-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 sm:col-6 lg:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-scrollbar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Steps&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;border p-2&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;max-height: 9rem&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ol</span> <span class="hljs-attr">ngsStepper</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;vertical&quot;</span> [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
        @for (step of steps; track step) {
          <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>{{ step }}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
        }
      <span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-scrollbar</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;active() === 0&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;go(-1)&quot;</span>&gt;</span>
      Previous
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ms-2&quot;</span>
      [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;active() === steps.length - 1&quot;</span>
      (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;go(1)&quot;</span>
    &gt;</span>
      Next
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsScrollbar } from '@bootlace/core/scrollbar';
import { NgsStep, NgsStepper } from '@bootlace/core/stepper';

@Component({
  selector: 'docs-stepper-autoscroll',
  imports: [NgsStepper, NgsStep, NgsScrollbar, NgsButton],
  templateUrl: './index.html',
})
export class StepperAutoscrollExample {
  protected readonly steps = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven'];
  protected readonly active = signal(0);

  protected go(delta: number): void {
    this.active.update((i) => Math.min(Math.max(i + delta, 0), this.steps.length - 1));
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsScrollbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/scrollbar&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsStep</span>, <span class="hljs-title class_">NgsStepper</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/stepper&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-stepper-autoscroll&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsStepper</span>, <span class="hljs-title class_">NgsStep</span>, <span class="hljs-title class_">NgsScrollbar</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">StepperAutoscrollExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> steps = [<span class="hljs-string">&#x27;One&#x27;</span>, <span class="hljs-string">&#x27;Two&#x27;</span>, <span class="hljs-string">&#x27;Three&#x27;</span>, <span class="hljs-string">&#x27;Four&#x27;</span>, <span class="hljs-string">&#x27;Five&#x27;</span>, <span class="hljs-string">&#x27;Six&#x27;</span>, <span class="hljs-string">&#x27;Seven&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> active = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">go</span>(<span class="hljs-attr">delta</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">active</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">i</span>) =&gt;</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">min</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(i + delta, <span class="hljs-number">0</span>), <span class="hljs-variable language_">this</span>.<span class="hljs-property">steps</span>.<span class="hljs-property">length</span> - <span class="hljs-number">1</span>));
  }
}`}},basic:{html:{code:`<div class="row">
  <div class="col-12 lg:col-10">
    <ol ngsStepper [(index)]="active">
      <li ngsStep state="done">Account</li>
      <li ngsStep>Shipping</li>
      <li ngsStep state="error">Payment</li>
      <li ngsStep [icon]="icon" disabled>Review</li>
    </ol>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-10&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ol</span> <span class="hljs-attr">ngsStepper</span> [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span> <span class="hljs-attr">state</span>=<span class="hljs-string">&quot;done&quot;</span>&gt;</span>Account<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Shipping<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span> <span class="hljs-attr">state</span>=<span class="hljs-string">&quot;error&quot;</span>&gt;</span>Payment<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;icon&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Review<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsStep, NgsStepper } from '@bootlace/core/stepper';
import { ngsIconHome } from '@bootlace/icons';

@Component({
  selector: 'docs-stepper-basic',
  imports: [NgsStepper, NgsStep],
  templateUrl: './index.html',
})
export class StepperBasicExample {
  protected readonly active = signal(1);
  protected readonly icon = ngsIconHome;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsStep</span>, <span class="hljs-title class_">NgsStepper</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/stepper&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconHome } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-stepper-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsStepper</span>, <span class="hljs-title class_">NgsStep</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">StepperBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> active = <span class="hljs-title function_">signal</span>(<span class="hljs-number">1</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> icon = ngsIconHome;
}`}},connected:{html:{code:`<div class="row">
  <div class="col-12 sm:col-6 lg:col-4">
    <ol ngsStepper orientation="vertical" connected [(index)]="active">
      <li ngsStep>Start up</li>
      <li ngsStep>Cash in</li>
      <li ngsStep>
        Sell out this large amount that you have been saving up for many years of hard work
      </li>
      <li ngsStep>Wind down</li>
    </ol>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 sm:col-6 lg:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ol</span> <span class="hljs-attr">ngsStepper</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;vertical&quot;</span> <span class="hljs-attr">connected</span> [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Start up<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Cash in<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>
        Sell out this large amount that you have been saving up for many years of hard work
      <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Wind down<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsStep, NgsStepper } from '@bootlace/core/stepper';

@Component({
  selector: 'docs-stepper-connected',
  imports: [NgsStepper, NgsStep],
  templateUrl: './index.html',
})
export class StepperConnectedExample {
  protected readonly active = signal(1);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsStep</span>, <span class="hljs-title class_">NgsStepper</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/stepper&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-stepper-connected&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsStepper</span>, <span class="hljs-title class_">NgsStep</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">StepperConnectedExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> active = <span class="hljs-title function_">signal</span>(<span class="hljs-number">1</span>);
}`}},"display-only":{html:{code:`<div class="row">
  <div class="col-12 lg:col-10">
    <ol ngsStepper [index]="2" [clickable]="false">
      <li ngsStep>Order received</li>
      <li ngsStep>Packed</li>
      <li ngsStep>On its way</li>
      <li ngsStep>Delivered</li>
    </ol>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-10&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ol</span> <span class="hljs-attr">ngsStepper</span> [<span class="hljs-attr">index</span>]=<span class="hljs-string">&quot;2&quot;</span> [<span class="hljs-attr">clickable</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Order received<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Packed<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>On its way<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Delivered<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsStep, NgsStepper } from '@bootlace/core/stepper';

@Component({
  selector: 'docs-stepper-display-only',
  imports: [NgsStepper, NgsStep],
  templateUrl: './index.html',
})
export class StepperDisplayOnlyExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsStep</span>, <span class="hljs-title class_">NgsStepper</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/stepper&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-stepper-display-only&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsStepper</span>, <span class="hljs-title class_">NgsStep</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">StepperDisplayOnlyExample</span> {}`}},vertical:{html:{code:`<div class="row">
  <div class="col-12 sm:col-6 lg:col-4">
    <ol ngsStepper orientation="vertical" [(index)]="active">
      <li ngsStep>Place the order</li>
      <li ngsStep>Pack the parcel</li>
      <li ngsStep>Ship to the depot</li>
      <li ngsStep>Deliver to the door</li>
    </ol>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 sm:col-6 lg:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ol</span> <span class="hljs-attr">ngsStepper</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;vertical&quot;</span> [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Place the order<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Pack the parcel<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Ship to the depot<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span>&gt;</span>Deliver to the door<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsStep, NgsStepper } from '@bootlace/core/stepper';

@Component({
  selector: 'docs-stepper-vertical',
  imports: [NgsStepper, NgsStep],
  templateUrl: './index.html',
})
export class StepperVerticalExample {
  protected readonly active = signal(2);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsStep</span>, <span class="hljs-title class_">NgsStepper</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/stepper&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-stepper-vertical&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsStepper</span>, <span class="hljs-title class_">NgsStep</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">StepperVerticalExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> active = <span class="hljs-title function_">signal</span>(<span class="hljs-number">2</span>);
}`}},wizard:{html:{code:`<div class="row gy-3">
  <div class="col-12 lg:col-8">
    <ol ngsStepper [(index)]="active">
      @for (step of steps; track step; let i = $index) {
        <li ngsStep [disabled]="i > active()">{{ step }}</li>
      }
    </ol>
  </div>
  <div class="col-12 lg:col-8" aria-live="polite">
    @switch (active()) {
      @case (0) {
        <p>Choose a name and an email address for the new account.</p>
      }
      @case (1) {
        <p>Where should the order be delivered?</p>
      }
      @default {
        <p>Pick a payment method and confirm the order.</p>
      }
    }
  </div>
  <div class="col-12 lg:col-8">
    <button type="button" ngsButton variant="outline" [disabled]="active() === 0" (click)="go(-1)">
      Back
    </button>
    <button type="button" ngsButton class="ms-2" [disabled]="last()" (click)="go(1)">Next</button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row gy-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ol</span> <span class="hljs-attr">ngsStepper</span> [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
      @for (step of steps; track step; let i = $index) {
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">ngsStep</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;i &gt; active()&quot;</span>&gt;</span>{{ step }}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>
    @switch (active()) {
      @case (0) {
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Choose a name and an email address for the new account.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      }
      @case (1) {
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Where should the order be delivered?<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      }
      @default {
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Pick a payment method and confirm the order.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      }
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;active() === 0&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;go(-1)&quot;</span>&gt;</span>
      Back
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ms-2&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;last()&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;go(1)&quot;</span>&gt;</span>Next<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, computed, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsStep, NgsStepper } from '@bootlace/core/stepper';

@Component({
  selector: 'docs-stepper-wizard',
  imports: [NgsStepper, NgsStep, NgsButton],
  templateUrl: './index.html',
})
export class StepperWizardExample {
  protected readonly steps = ['Account', 'Shipping', 'Payment'] as const;
  protected readonly active = signal(0);
  protected readonly last = computed(() => this.active() === this.steps.length - 1);

  protected go(delta: number): void {
    this.active.update((i) => Math.min(Math.max(i + delta, 0), this.steps.length - 1));
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, computed, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsStep</span>, <span class="hljs-title class_">NgsStepper</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/stepper&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-stepper-wizard&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsStepper</span>, <span class="hljs-title class_">NgsStep</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">StepperWizardExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> steps = [<span class="hljs-string">&#x27;Account&#x27;</span>, <span class="hljs-string">&#x27;Shipping&#x27;</span>, <span class="hljs-string">&#x27;Payment&#x27;</span>] <span class="hljs-keyword">as</span> <span class="hljs-keyword">const</span>;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> active = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> last = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">active</span>() === <span class="hljs-variable language_">this</span>.<span class="hljs-property">steps</span>.<span class="hljs-property">length</span> - <span class="hljs-number">1</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">go</span>(<span class="hljs-attr">delta</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">active</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">i</span>) =&gt;</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">min</span>(<span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(i + delta, <span class="hljs-number">0</span>), <span class="hljs-variable language_">this</span>.<span class="hljs-property">steps</span>.<span class="hljs-property">length</span> - <span class="hljs-number">1</span>));
  }
}`}}};var Ss=class l{tab=Yn(`examples`);sources=vs;basic=I;vertical=z;connected=B;autoscroll=P;wizard=A;displayOnly=W;static ɵfac=function(t){return new(t||l)};static ɵcmp=ve({type:l,selectors:[[`docs-stepper-page`]],inputs:{tab:[1,`tab`]},decls:91,vars:13,consts:[[`heading`,`Stepper`,`package`,`@bootlace/core/stepper`,`path`,`/navigation/stepper`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`vertical`,`heading`,`Vertical`,3,`component`,`sources`],[`id`,`connected`,`heading`,`Vertical connected`,3,`component`,`sources`],[`id`,`autoscroll`,`heading`,`Vertical autoscroll`,3,`component`,`sources`],[`id`,`wizard`,`heading`,`Wizard`,3,`component`,`sources`],[`id`,`display-only`,`heading`,`Display only`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,n){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A row or column of numbered steps, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.stepper`),vi(),Zf(5,`. Put `),ce(6,`code`),Zf(7,`ngsStepper`),vi(),Zf(8,` on an `),ce(9,`code`),Zf(10,`<ol>`),vi(),Zf(11,` and `),ce(12,`code`),Zf(13,`ngsStep`),vi(),Zf(14,` on each `),ce(15,`code`),Zf(16,`<li>`),vi(),Zf(17,`. Steps can be finished, current, in error or disabled, and `),ce(18,`code`),Zf(19,`[(index)]`),vi(),Zf(20,` reads and sets the current step. `),vi(),ce(21,`docs-example`,2),Zf(22,` With the default `),ce(23,`code`),Zf(24,`state="auto"`),vi(),Zf(25,` a step before `),ce(26,`code`),Zf(27,`index`),vi(),Zf(28,` counts as finished. Set `),ce(29,`code`),Zf(30,`state`),vi(),Zf(31,` to `),ce(32,`code`),Zf(33,`done`),vi(),Zf(34,` or `),ce(35,`code`),Zf(36,`error`),vi(),Zf(37,` to force it, `),ce(38,`code`),Zf(39,`disabled`),vi(),Zf(40,` to block it, and `),ce(41,`code`),Zf(42,`icon`),vi(),Zf(43,` to replace the number. Pressing a step makes it current. `),vi(),ce(44,`docs-example`,3)(45,`code`),Zf(46,`orientation="vertical"`),vi(),Zf(47,` stacks the steps in a column. `),vi(),ce(48,`docs-example`,4)(49,`code`),Zf(50,`connected`),vi(),Zf(51,` draws a thin line between the circles. Long labels wrap beside their circle. `),vi(),ce(52,`docs-example`,5),Zf(53,` In a box of fixed height the current step scrolls into view when `),ce(54,`code`),Zf(55,`index`),vi(),Zf(56,` changes (`),ce(57,`code`),Zf(58,`scrollIntoView`),vi(),Zf(59,` with `),ce(60,`code`),Zf(61,`block: 'nearest'`),vi(),Zf(62,`, in the browser only). Wrap the stepper in `),ce(63,`code`),Zf(64,`ngs-scrollbar`),vi(),Zf(65,` for the thin scrollbar, or set `),ce(66,`code`),Zf(67,`[autoscroll]="false"`),vi(),Zf(68,` to switch this off. `),vi(),ce(69,`docs-example`,6),Zf(70,` The stepper holds no content. Drive your own panel from `),ce(71,`code`),Zf(72,`index`),vi(),Zf(73,`, and disable the steps that are not reachable yet. `),vi(),ce(74,`docs-example`,7)(75,`code`),Zf(76,`[clickable]="false"`),vi(),Zf(77,` renders the steps as plain text, for a progress indicator the user cannot navigate. `),vi(),ce(78,`section`,8)(79,`h2`,9),Zf(80,`Accessibility`),vi(),ce(81,`p`),Zf(82,` The stepper is a native ordered list. The current step has `),ce(83,`code`),Zf(84,`aria-current="step"`),vi(),Zf(85,` and every step's name includes its position and state, for example "Step 2 of 4: Shipping, completed". The strings come from `),ce(86,`code`),Zf(87,`NgsI18n.stepper`),vi(),Zf(88,`. `),vi(),ce(89,`p`),Zf(90,` Clickable steps are buttons in the normal Tab order. ARIA has no stepper pattern, so roving focus would add keys users do not expect, and a stepper has few steps. Disabled steps are disabled buttons and leave the Tab order. Colour is never the only signal: the state is also in the icon and the accessible name. `),vi()()()),t&2&&(Ot(`tab`,n.tab()),Tt(21),Ot(`component`,n.basic)(`sources`,n.sources.basic),Tt(23),Ot(`component`,n.vertical)(`sources`,n.sources.vertical),Tt(4),Ot(`component`,n.connected)(`sources`,n.sources.connected),Tt(4),Ot(`component`,n.autoscroll)(`sources`,n.sources.autoscroll),Tt(17),Ot(`component`,n.wizard)(`sources`,n.sources.wizard),Tt(5),Ot(`component`,n.displayOnly)(`sources`,n.sources[`display-only`]))},dependencies:[ue$1,pe],encapsulation:2})};export{Ss as StepperPage};