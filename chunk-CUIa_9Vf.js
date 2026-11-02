import{An as hg,At as W,Br as ui,Cr as rf,Ct as U0,Gr as vf,Gt as Yn,Jt as Zf,L as KC,Pt as XC,Rr as ue,Sn as fh,Tn as gf,Vt as Y3,Wr as ve,Zn as m7,_r as q3,bn as f7,et as Ot,f as Cf,ir as nf,ln as cj,on as ce,qr as vi,ur as of,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./chunk-B6h8Jb5u.js";import{I as rt,M as ms,N as pn,T as ds,b as Xi,f as Li,k as hs,m as Ot$1,r as Br,w as cs,z as zr}from"./chunk-DycqepRM.js";import{_ as d,b as te,g as Z$1,h as Y,m as Q$1,v as ee,y as se}from"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";import{n as m}from"./chunk-BPk3HYY3.js";import"./chunk-CT3GIJZF.js";import{t as A}from"./chunk-CX55sP_u.js";var J=class e{modal=k(d);static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-confirm`]],decls:11,vars:0,consts:[[`ngsModalHeader`,``],[`ngsModalTitle`,``],[`ngsModalClose`,``],[`ngsModalBody`,``],[`ngsModalFooter`,``],[`ngsButton`,``,`variant`,`outline`,`color`,`secondary`,3,`click`],[`ngsButton`,``,`color`,`danger`,3,`click`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`h2`,1),Zf(2,`Delete project?`),vi(),ue(3,`button`,2),vi(),ce(4,`div`,3),Zf(5,`This permanently removes the project and its files.`),vi(),ce(6,`div`,4)(7,`button`,5),ui(`click`,function(){return l.modal.dismiss(`cancel`)}),Zf(8,` Cancel `),vi(),ce(9,`button`,6),ui(`click`,function(){return l.modal.close(`deleted`)}),Zf(10,`Delete`),vi()())},dependencies:[f,ee,te,se,Y,Z$1],encapsulation:2})};var V=class e{modals=k(Q$1);outcome=W(`Nothing chosen yet.`);async confirm(){let o=this.modals.open(J,{centered:!0});try{this.outcome.set(`Closed with "${await o.result}".`)}catch(t){this.outcome.set(`Dismissed with "${t}".`)}}static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-basic`]],decls:6,vars:1,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,3,`click`],[`role`,`status`,1,`col-auto`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),ui(`click`,function(){return l.confirm()}),Zf(3,`Delete project`),vi()(),ce(4,`div`,3),Zf(5),vi()()),t&2&&(Tt(5),fh(l.outcome()))},dependencies:[f],encapsulation:2})};function vs(e,o){e&1&&(ce(0,`div`,11),Zf(1,` You have unsaved changes. Save them, or discard them to close. `),vi())}function ys(e,o){if(e&1){let t=gf();ce(0,`button`,15),ui(`click`,function(){q3(t);let i=vf();return Y3(i.modal.close(null))}),Zf(1,` Discard `),vi()}}var Q=class e{modal=k(d);form=new rt({name:new pn(``,{nonNullable:!0,validators:[Ot$1.required]}),email:new pn(``,{nonNullable:!0,validators:[Ot$1.required,Ot$1.email]})});unsaved=W(!1);save(){this.form.markAllAsTouched(),this.form.valid&&this.modal.close(this.form.getRawValue())}static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-profile-form`]],decls:18,vars:3,consts:[[`novalidate`,``,1,`ngs-modal-content`,3,`ngSubmit`,`formGroup`],[`ngsModalHeader`,``],[`ngsModalTitle`,``],[`ngsModalClose`,``],[`ngsModalBody`,``],[1,`row`,`g-3`],[1,`col-12`],[`label`,`Name`,`error`,`Enter your name.`],[`ngsInput`,``,`ngsAutofocus`,``,`formControlName`,`name`,`autocomplete`,`name`],[`label`,`Email`,`error`,`Enter a valid email address.`],[`ngsInput`,``,`type`,`email`,`formControlName`,`email`,`autocomplete`,`email`],[`role`,`alert`,1,`col-12`],[`ngsModalFooter`,``],[`ngsButton`,``,`variant`,`outline`,`color`,`danger`,`type`,`button`],[`ngsButton`,``,`type`,`submit`],[`ngsButton`,``,`variant`,`outline`,`color`,`danger`,`type`,`button`,3,`click`]],template:function(t,l){t&1&&(ce(0,`form`,0),ui(`ngSubmit`,function(){return l.save()}),ce(1,`div`,1)(2,`h2`,2),Zf(3,`Edit profile`),vi(),ue(4,`button`,3),vi(),ce(5,`div`,4)(6,`div`,5)(7,`div`,6)(8,`ngs-textfield`,7)(9,`input`,8),f7(),vi()()(),ce(10,`div`,6)(11,`ngs-textfield`,9)(12,`input`,10),f7(),vi()()(),KC(13,vs,2,0,`div`,11),vi()(),ce(14,`div`,12),KC(15,ys,2,0,`button`,13),ce(16,`button`,14),Zf(17,`Save`),vi()()()),t&2&&(Ot(`formGroup`,l.form),Tt(9),m7(),Tt(3),m7(),Tt(),XC(l.unsaved()?13:-1),Tt(2),XC(l.unsaved()?15:-1))},dependencies:[Li,f,m,ee,te,se,Y,Z$1,A,ms,hs,Xi,cs,ds,Br,zr],encapsulation:2})};var R=class e{modals=k(Q$1);saved=W(`Nothing saved yet.`);async edit(){let o=this.modals.open(Q,{beforeDismiss:()=>{let t=o.componentInstance;return t.form.dirty?(t.unsaved.set(!0),!1):!0}});try{let t=await o.result;this.saved.set(t?`Saved ${t.name} <${t.email}>.`:`Changes discarded.`)}catch{this.saved.set(`Closed without saving.`)}}static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-form`]],decls:6,vars:1,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,3,`click`],[`role`,`status`,1,`col-auto`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),ui(`click`,function(){return l.edit()}),Zf(3,`Edit profile`),vi()(),ce(4,`div`,3),Zf(5),vi()()),t&2&&(Tt(5),fh(l.saved()))},dependencies:[f],encapsulation:2})};var X=class e{modal=k(d);static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-child`]],decls:9,vars:0,consts:[[`ngsModalHeader`,``],[`ngsModalTitle`,``],[`ngsModalClose`,``],[`ngsModalBody`,``],[`ngsModalFooter`,``],[`ngsButton`,``,3,`click`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`h2`,1),Zf(2,`Second modal`),vi(),ue(3,`button`,2),vi(),ce(4,`div`,3),Zf(5,`Opened from the first. Escape closes only this one.`),vi(),ce(6,`div`,4)(7,`button`,5),ui(`click`,function(){return l.modal.close()}),Zf(8,`Back`),vi()())},dependencies:[f,ee,te,se,Y,Z$1],encapsulation:2})};var Z=class e{modal=k(d);modals=k(Q$1);openChild(){this.modals.open(X,{centered:!0})}static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-parent`]],decls:11,vars:0,consts:[[`ngsModalHeader`,``],[`ngsModalTitle`,``],[`ngsModalClose`,``],[`ngsModalBody`,``],[`ngsModalFooter`,``],[`ngsButton`,``,`variant`,`outline`,3,`click`],[`ngsButton`,``,3,`click`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`h2`,1),Zf(2,`First modal`),vi(),ue(3,`button`,2),vi(),ce(4,`div`,3),Zf(5,`Open another modal on top of this one.`),vi(),ce(6,`div`,4)(7,`button`,5),ui(`click`,function(){return l.openChild()}),Zf(8,`Open second modal`),vi(),ce(9,`button`,6),ui(`click`,function(){return l.modal.close()}),Zf(10,`Done`),vi()())},dependencies:[f,ee,te,se,Y,Z$1],encapsulation:2})};var I=class e{modals=k(Q$1);open(){this.modals.open(Z)}static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-nested`]],decls:2,vars:0,consts:[[`ngsButton`,``,3,`click`]],template:function(t,l){t&1&&(ce(0,`button`,0),ui(`click`,function(){return l.open()}),Zf(1,`Open modal`),vi())},dependencies:[f],encapsulation:2})};function fs(e,o){if(e&1&&(ce(0,`p`),Zf(1),vi()),e&2){let t=o.$implicit;Tt(),hg(` Paragraph `,t,`. Long content scrolls with the modal, or inside the body when scrollable. `)}}function Ms(e,o){if(e&1){let t=gf();ce(0,`div`,5)(1,`h2`,6),Zf(2,`Terms of service`),vi(),ue(3,`button`,7),vi(),ce(4,`div`,8),of(5,fs,2,1,`p`,null,nf),vi(),ce(7,`div`,9)(8,`button`,10),ui(`click`,function(){let i=q3(t).$implicit;return Y3(i.close())}),Zf(9,`Accept`),vi()()}if(e&2){let t=vf();Tt(5),rf(t.paragraphs)}}function xs(e,o){if(e&1){let t=gf();ce(0,`div`,5)(1,`h2`,6),Zf(2,`Centred`),vi(),ue(3,`button`,7),vi(),ce(4,`div`,8),Zf(5,`Centred vertically. Without `),ce(6,`code`),Zf(7,`centered`),vi(),Zf(8,` it sits near the top.`),vi(),ce(9,`div`,9)(10,`button`,10),ui(`click`,function(){let i=q3(t).$implicit;return Y3(i.close())}),Zf(11,`Close`),vi()()}}var O=class e{modals=k(Q$1);paragraphs=Array.from({length:24},(o,t)=>t+1);open(o,t){this.modals.open(o,t)}static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-scrollable`]],decls:14,vars:0,consts:[[`long`,``],[`short`,``],[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[`ngsModalHeader`,``],[`ngsModalTitle`,``],[`ngsModalClose`,``],[`ngsModalBody`,``],[`ngsModalFooter`,``],[`ngsButton`,``,3,`click`]],template:function(t,l){if(t&1){let i=gf();ce(0,`div`,2)(1,`div`,3)(2,`button`,4),ui(`click`,function(){q3(i);let b=Cf(11);return Y3(l.open(b,{}))}),Zf(3,`Long content`),vi()(),ce(4,`div`,3)(5,`button`,4),ui(`click`,function(){q3(i);let b=Cf(11);return Y3(l.open(b,{scrollable:!0}))}),Zf(6,` Scrollable body `),vi()(),ce(7,`div`,3)(8,`button`,4),ui(`click`,function(){q3(i);let b=Cf(13);return Y3(l.open(b,{centered:!0}))}),Zf(9,`Centred`),vi()()(),U0(10,Ms,10,0,`ng-template`,null,0,cj)(12,xs,12,0,`ng-template`,null,1,cj)}},dependencies:[f,ee,te,se,Y,Z$1],encapsulation:2})};function bs(e,o){if(e&1){let t=gf();ce(0,`div`,2)(1,`button`,3),ui(`click`,function(){let i=q3(t).$implicit,q=vf(),b=Cf(4);return Y3(q.open(b,i))}),Zf(2),vi()()}if(e&2){let t=o.$implicit;Tt(2),fh(t)}}function _s(e,o){if(e&1){let t=gf();ce(0,`div`,4)(1,`h2`,5),Zf(2,`Modal sizes`),vi(),ue(3,`button`,6),vi(),ce(4,`div`,7),Zf(5,` This is the `),ce(6,`strong`),Zf(7),vi(),Zf(8,` size. `),vi(),ce(9,`div`,8)(10,`button`,9),ui(`click`,function(){let i=q3(t).$implicit;return Y3(i.close())}),Zf(11,`Done`),vi()()}if(e&2){let t=vf();Tt(7),fh(t.current())}}var $=class e{modals=k(Q$1);sizes=[`sm`,`default`,`lg`,`xl`,`fullscreen`];current=W(`default`);open(o,t){this.current.set(t),this.modals.open(o,{size:t==="default"?void 0:t})}static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-sizes`]],decls:5,vars:0,consts:[[`dialog`,``],[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[`ngsModalHeader`,``],[`ngsModalTitle`,``],[`ngsModalClose`,``],[`ngsModalBody`,``],[`ngsModalFooter`,``],[`ngsButton`,``,3,`click`]],template:function(t,l){t&1&&(ce(0,`div`,1),of(1,bs,3,1,`div`,2,nf),vi(),U0(3,_s,12,1,`ng-template`,null,0,cj)),t&2&&(Tt(),rf(l.sizes))},dependencies:[f,ee,te,se,Y,Z$1],encapsulation:2})};function Ns(e,o){if(e&1){let t=gf();ce(0,`div`,4)(1,`h2`,5),Zf(2,`Unsaved work`),vi()(),ce(3,`div`,6),Zf(4,` Clicking outside this modal does not close it, and neither does Escape when it is off. The modal shakes instead. Choose an action. `),vi(),ce(5,`div`,7)(6,`button`,8),ui(`click`,function(){let i=q3(t).$implicit;return Y3(i.dismiss(`discard`))}),Zf(7,` Discard `),vi(),ce(8,`button`,9),ui(`click`,function(){let i=q3(t).$implicit;return Y3(i.close(`saved`))}),Zf(9,`Save`),vi()()}}var U=class e{modals=k(Q$1);open(o,t){this.modals.open(o,t)}static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-static`]],decls:9,vars:0,consts:[[`dialog`,``],[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[`ngsModalHeader`,``],[`ngsModalTitle`,``],[`ngsModalBody`,``],[`ngsModalFooter`,``],[`ngsButton`,``,`variant`,`outline`,`color`,`secondary`,3,`click`],[`ngsButton`,``,3,`click`]],template:function(t,l){if(t&1){let i=gf();ce(0,`div`,1)(1,`div`,2)(2,`button`,3),ui(`click`,function(){q3(i);let b=Cf(8);return Y3(l.open(b,{backdrop:`static`}))}),Zf(3,` Static backdrop `),vi()(),ce(4,`div`,2)(5,`button`,3),ui(`click`,function(){q3(i);let b=Cf(8);return Y3(l.open(b,{backdrop:`static`,keyboard:!1}))}),Zf(6,` Static, Escape off `),vi()()(),U0(7,Ns,10,0,`ng-template`,null,0,cj)}},dependencies:[f,ee,se,Y,Z$1],encapsulation:2})};var us={basic:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-auto">
    <button ngsButton (click)="confirm()">Delete project</button>
  </div>
  <div class="col-auto" role="status">{{ outcome() }}</div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;confirm()&quot;</span>&gt;</span>Delete project<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;status&quot;</span>&gt;</span>{{ outcome() }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, inject, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
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
  selector: 'docs-modal-confirm',
  imports: [NgsButton, NgsModalBody, NgsModalClose, NgsModalFooter, NgsModalHeader, NgsModalTitle],
  template: \`
    <div ngsModalHeader>
      <h2 ngsModalTitle>Delete project?</h2>
      <button ngsModalClose></button>
    </div>
    <div ngsModalBody>This permanently removes the project and its files.</div>
    <div ngsModalFooter>
      <button ngsButton variant="outline" color="secondary" (click)="modal.dismiss('cancel')">
        Cancel
      </button>
      <button ngsButton color="danger" (click)="modal.close('deleted')">Delete</button>
    </div>
  \`,
})
export class ConfirmDialog {
  protected readonly modal = inject(NgsActiveModal);
}

@Component({
  selector: 'docs-modal-basic',
  imports: [NgsButton],
  templateUrl: './index.html',
})
export class ModalBasicExample {
  private readonly modals = inject(NgsModalService);
  protected readonly outcome = signal('Nothing chosen yet.');

  protected async confirm(): Promise<void> {
    const ref = this.modals.open(ConfirmDialog, { centered: true });
    try {
      this.outcome.set(\`Closed with "\${await ref.result}".\`);
    } catch (reason) {
      this.outcome.set(\`Dismissed with "\${reason}".\`);
    }
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
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
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-modal-confirm&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsModalBody</span>, <span class="hljs-title class_">NgsModalClose</span>, <span class="hljs-title class_">NgsModalFooter</span>, <span class="hljs-title class_">NgsModalHeader</span>, <span class="hljs-title class_">NgsModalTitle</span>],
  <span class="hljs-attr">template</span>: <span class="hljs-string">\`
    &lt;div ngsModalHeader&gt;
      &lt;h2 ngsModalTitle&gt;Delete project?&lt;/h2&gt;
      &lt;button ngsModalClose&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div ngsModalBody&gt;This permanently removes the project and its files.&lt;/div&gt;
    &lt;div ngsModalFooter&gt;
      &lt;button ngsButton variant=&quot;outline&quot; color=&quot;secondary&quot; (click)=&quot;modal.dismiss(&#x27;cancel&#x27;)&quot;&gt;
        Cancel
      &lt;/button&gt;
      &lt;button ngsButton color=&quot;danger&quot; (click)=&quot;modal.close(&#x27;deleted&#x27;)&quot;&gt;Delete&lt;/button&gt;
    &lt;/div&gt;
  \`</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ConfirmDialog</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> modal = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsActiveModal</span>);
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-modal-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ModalBasicExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modals = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsModalService</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> outcome = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;Nothing chosen yet.&#x27;</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">async</span> <span class="hljs-title function_">confirm</span>(): <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-built_in">void</span>&gt; {
    <span class="hljs-keyword">const</span> ref = <span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">ConfirmDialog</span>, { <span class="hljs-attr">centered</span>: <span class="hljs-literal">true</span> });
    <span class="hljs-keyword">try</span> {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">outcome</span>.<span class="hljs-title function_">set</span>(<span class="hljs-string">\`Closed with &quot;<span class="hljs-subst">\${<span class="hljs-keyword">await</span> ref.result}</span>&quot;.\`</span>);
    } <span class="hljs-keyword">catch</span> (reason) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">outcome</span>.<span class="hljs-title function_">set</span>(<span class="hljs-string">\`Dismissed with &quot;<span class="hljs-subst">\${reason}</span>&quot;.\`</span>);
    }
  }
}`}},form:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-auto">
    <button ngsButton (click)="edit()">Edit profile</button>
  </div>
  <div class="col-auto" role="status">{{ saved() }}</div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;edit()&quot;</span>&gt;</span>Edit profile<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;status&quot;</span>&gt;</span>{{ saved() }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgsButton } from '@bootlace/core/button';
import { NgsInput, NgsTextfield } from '@bootlace/core/input';
import {
  NgsActiveModal,
  NgsAutofocus,
  NgsModalBody,
  NgsModalClose,
  NgsModalFooter,
  NgsModalHeader,
  NgsModalService,
  NgsModalTitle,
} from '@bootlace/core/modal';

@Component({
  selector: 'docs-modal-profile-form',
  imports: [
    NgsAutofocus,
    NgsButton,
    NgsInput,
    NgsModalBody,
    NgsModalClose,
    NgsModalFooter,
    NgsModalHeader,
    NgsModalTitle,
    NgsTextfield,
    ReactiveFormsModule,
  ],
  template: \`
    <!-- The form wraps the header, body and footer; ngs-modal-content keeps the dialog's layout. -->
    <form class="ngs-modal-content" [formGroup]="form" (ngSubmit)="save()" novalidate>
      <div ngsModalHeader>
        <h2 ngsModalTitle>Edit profile</h2>
        <button ngsModalClose></button>
      </div>
      <div ngsModalBody>
        <div class="row g-3">
          <div class="col-12">
            <ngs-textfield label="Name" error="Enter your name.">
              <input ngsInput ngsAutofocus formControlName="name" autocomplete="name" />
            </ngs-textfield>
          </div>
          <div class="col-12">
            <ngs-textfield label="Email" error="Enter a valid email address.">
              <input ngsInput type="email" formControlName="email" autocomplete="email" />
            </ngs-textfield>
          </div>
          @if (unsaved()) {
            <div class="col-12" role="alert">
              You have unsaved changes. Save them, or discard them to close.
            </div>
          }
        </div>
      </div>
      <div ngsModalFooter>
        @if (unsaved()) {
          <button
            ngsButton
            variant="outline"
            color="danger"
            type="button"
            (click)="modal.close(null)"
          >
            Discard
          </button>
        }
        <button ngsButton type="submit">Save</button>
      </div>
    </form>
  \`,
})
export class ProfileFormDialog {
  protected readonly modal = inject(NgsActiveModal);
  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });
  /** Set when the user tried to leave with unsaved changes. */
  readonly unsaved = signal(false);

  protected save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) this.modal.close(this.form.getRawValue());
  }
}

@Component({
  selector: 'docs-modal-form',
  imports: [NgsButton],
  templateUrl: './index.html',
})
export class ModalFormExample {
  private readonly modals = inject(NgsModalService);
  protected readonly saved = signal('Nothing saved yet.');

  protected async edit(): Promise<void> {
    const ref = this.modals.open(ProfileFormDialog, {
      // Keep the modal open while the form has changes, and say why.
      beforeDismiss: () => {
        const dialog = ref.componentInstance!;
        if (!dialog.form.dirty) return true;
        dialog.unsaved.set(true);
        return false;
      },
    });
    try {
      const value = (await ref.result) as { name: string; email: string } | null;
      this.saved.set(value ? \`Saved \${value.name} <\${value.email}>.\` : 'Changes discarded.');
    } catch {
      this.saved.set('Closed without saving.');
    }
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">Validators</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsActiveModal</span>,
  <span class="hljs-title class_">NgsAutofocus</span>,
  <span class="hljs-title class_">NgsModalBody</span>,
  <span class="hljs-title class_">NgsModalClose</span>,
  <span class="hljs-title class_">NgsModalFooter</span>,
  <span class="hljs-title class_">NgsModalHeader</span>,
  <span class="hljs-title class_">NgsModalService</span>,
  <span class="hljs-title class_">NgsModalTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/modal&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-modal-profile-form&#x27;</span>,
  <span class="hljs-attr">imports</span>: [
    <span class="hljs-title class_">NgsAutofocus</span>,
    <span class="hljs-title class_">NgsButton</span>,
    <span class="hljs-title class_">NgsInput</span>,
    <span class="hljs-title class_">NgsModalBody</span>,
    <span class="hljs-title class_">NgsModalClose</span>,
    <span class="hljs-title class_">NgsModalFooter</span>,
    <span class="hljs-title class_">NgsModalHeader</span>,
    <span class="hljs-title class_">NgsModalTitle</span>,
    <span class="hljs-title class_">NgsTextfield</span>,
    <span class="hljs-title class_">ReactiveFormsModule</span>,
  ],
  <span class="hljs-attr">template</span>: <span class="hljs-string">\`
    &lt;!-- The form wraps the header, body and footer; ngs-modal-content keeps the dialog&#x27;s layout. --&gt;
    &lt;form class=&quot;ngs-modal-content&quot; [formGroup]=&quot;form&quot; (ngSubmit)=&quot;save()&quot; novalidate&gt;
      &lt;div ngsModalHeader&gt;
        &lt;h2 ngsModalTitle&gt;Edit profile&lt;/h2&gt;
        &lt;button ngsModalClose&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div ngsModalBody&gt;
        &lt;div class=&quot;row g-3&quot;&gt;
          &lt;div class=&quot;col-12&quot;&gt;
            &lt;ngs-textfield label=&quot;Name&quot; error=&quot;Enter your name.&quot;&gt;
              &lt;input ngsInput ngsAutofocus formControlName=&quot;name&quot; autocomplete=&quot;name&quot; /&gt;
            &lt;/ngs-textfield&gt;
          &lt;/div&gt;
          &lt;div class=&quot;col-12&quot;&gt;
            &lt;ngs-textfield label=&quot;Email&quot; error=&quot;Enter a valid email address.&quot;&gt;
              &lt;input ngsInput type=&quot;email&quot; formControlName=&quot;email&quot; autocomplete=&quot;email&quot; /&gt;
            &lt;/ngs-textfield&gt;
          &lt;/div&gt;
          @if (unsaved()) {
            &lt;div class=&quot;col-12&quot; role=&quot;alert&quot;&gt;
              You have unsaved changes. Save them, or discard them to close.
            &lt;/div&gt;
          }
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div ngsModalFooter&gt;
        @if (unsaved()) {
          &lt;button
            ngsButton
            variant=&quot;outline&quot;
            color=&quot;danger&quot;
            type=&quot;button&quot;
            (click)=&quot;modal.close(null)&quot;
          &gt;
            Discard
          &lt;/button&gt;
        }
        &lt;button ngsButton type=&quot;submit&quot;&gt;Save&lt;/button&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  \`</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ProfileFormDialog</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> modal = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsActiveModal</span>);
  <span class="hljs-keyword">readonly</span> form = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormGroup</span>({
    <span class="hljs-attr">name</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;&#x27;</span>, { <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">validators</span>: [<span class="hljs-title class_">Validators</span>.<span class="hljs-property">required</span>] }),
    <span class="hljs-attr">email</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;&#x27;</span>, {
      <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">validators</span>: [<span class="hljs-title class_">Validators</span>.<span class="hljs-property">required</span>, <span class="hljs-title class_">Validators</span>.<span class="hljs-property">email</span>],
    }),
  });
  <span class="hljs-comment">/** Set when the user tried to leave with unsaved changes. */</span>
  <span class="hljs-keyword">readonly</span> unsaved = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">save</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-title function_">markAllAsTouched</span>();
    <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">valid</span>) <span class="hljs-variable language_">this</span>.<span class="hljs-property">modal</span>.<span class="hljs-title function_">close</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-title function_">getRawValue</span>());
  }
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-modal-form&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ModalFormExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modals = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsModalService</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> saved = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;Nothing saved yet.&#x27;</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">async</span> <span class="hljs-title function_">edit</span>(): <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-built_in">void</span>&gt; {
    <span class="hljs-keyword">const</span> ref = <span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">ProfileFormDialog</span>, {
      <span class="hljs-comment">// Keep the modal open while the form has changes, and say why.</span>
      <span class="hljs-attr">beforeDismiss</span>: <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">const</span> dialog = ref.<span class="hljs-property">componentInstance</span>!;
        <span class="hljs-keyword">if</span> (!dialog.<span class="hljs-property">form</span>.<span class="hljs-property">dirty</span>) <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
        dialog.<span class="hljs-property">unsaved</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      },
    });
    <span class="hljs-keyword">try</span> {
      <span class="hljs-keyword">const</span> value = (<span class="hljs-keyword">await</span> ref.<span class="hljs-property">result</span>) <span class="hljs-keyword">as</span> { <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>; <span class="hljs-attr">email</span>: <span class="hljs-built_in">string</span> } | <span class="hljs-literal">null</span>;
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">saved</span>.<span class="hljs-title function_">set</span>(value ? <span class="hljs-string">\`Saved <span class="hljs-subst">\${value.name}</span> &lt;<span class="hljs-subst">\${value.email}</span>&gt;.\`</span> : <span class="hljs-string">&#x27;Changes discarded.&#x27;</span>);
    } <span class="hljs-keyword">catch</span> {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">saved</span>.<span class="hljs-title function_">set</span>(<span class="hljs-string">&#x27;Closed without saving.&#x27;</span>);
    }
  }
}`}},nested:{ts:{code:`import { Component, inject } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
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
  selector: 'docs-modal-child',
  imports: [NgsButton, NgsModalBody, NgsModalClose, NgsModalFooter, NgsModalHeader, NgsModalTitle],
  template: \`
    <div ngsModalHeader>
      <h2 ngsModalTitle>Second modal</h2>
      <button ngsModalClose></button>
    </div>
    <div ngsModalBody>Opened from the first. Escape closes only this one.</div>
    <div ngsModalFooter>
      <button ngsButton (click)="modal.close()">Back</button>
    </div>
  \`,
})
export class ChildDialog {
  protected readonly modal = inject(NgsActiveModal);
}

@Component({
  selector: 'docs-modal-parent',
  imports: [NgsButton, NgsModalBody, NgsModalClose, NgsModalFooter, NgsModalHeader, NgsModalTitle],
  template: \`
    <div ngsModalHeader>
      <h2 ngsModalTitle>First modal</h2>
      <button ngsModalClose></button>
    </div>
    <div ngsModalBody>Open another modal on top of this one.</div>
    <div ngsModalFooter>
      <button ngsButton variant="outline" (click)="openChild()">Open second modal</button>
      <button ngsButton (click)="modal.close()">Done</button>
    </div>
  \`,
})
export class ParentDialog {
  protected readonly modal = inject(NgsActiveModal);
  private readonly modals = inject(NgsModalService);

  protected openChild(): void {
    this.modals.open(ChildDialog, { centered: true });
  }
}

@Component({
  selector: 'docs-modal-nested',
  imports: [NgsButton],
  template: \`<button ngsButton (click)="open()">Open modal</button>\`,
})
export class ModalNestedExample {
  private readonly modals = inject(NgsModalService);

  protected open(): void {
    this.modals.open(ParentDialog);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
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
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-modal-child&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsModalBody</span>, <span class="hljs-title class_">NgsModalClose</span>, <span class="hljs-title class_">NgsModalFooter</span>, <span class="hljs-title class_">NgsModalHeader</span>, <span class="hljs-title class_">NgsModalTitle</span>],
  <span class="hljs-attr">template</span>: <span class="hljs-string">\`
    &lt;div ngsModalHeader&gt;
      &lt;h2 ngsModalTitle&gt;Second modal&lt;/h2&gt;
      &lt;button ngsModalClose&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div ngsModalBody&gt;Opened from the first. Escape closes only this one.&lt;/div&gt;
    &lt;div ngsModalFooter&gt;
      &lt;button ngsButton (click)=&quot;modal.close()&quot;&gt;Back&lt;/button&gt;
    &lt;/div&gt;
  \`</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChildDialog</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> modal = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsActiveModal</span>);
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-modal-parent&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsModalBody</span>, <span class="hljs-title class_">NgsModalClose</span>, <span class="hljs-title class_">NgsModalFooter</span>, <span class="hljs-title class_">NgsModalHeader</span>, <span class="hljs-title class_">NgsModalTitle</span>],
  <span class="hljs-attr">template</span>: <span class="hljs-string">\`
    &lt;div ngsModalHeader&gt;
      &lt;h2 ngsModalTitle&gt;First modal&lt;/h2&gt;
      &lt;button ngsModalClose&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div ngsModalBody&gt;Open another modal on top of this one.&lt;/div&gt;
    &lt;div ngsModalFooter&gt;
      &lt;button ngsButton variant=&quot;outline&quot; (click)=&quot;openChild()&quot;&gt;Open second modal&lt;/button&gt;
      &lt;button ngsButton (click)=&quot;modal.close()&quot;&gt;Done&lt;/button&gt;
    &lt;/div&gt;
  \`</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ParentDialog</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> modal = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsActiveModal</span>);
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modals = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsModalService</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">openChild</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">ChildDialog</span>, { <span class="hljs-attr">centered</span>: <span class="hljs-literal">true</span> });
  }
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-modal-nested&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">template</span>: <span class="hljs-string">\`&lt;button ngsButton (click)=&quot;open()&quot;&gt;Open modal&lt;/button&gt;\`</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ModalNestedExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modals = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsModalService</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">open</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">ParentDialog</span>);
  }
}`}},scrollable:{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="open(long, {})">Long content</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="open(long, { scrollable: true })">
      Scrollable body
    </button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="open(short, { centered: true })">Centred</button>
  </div>
</div>

<ng-template #long let-modal>
  <div ngsModalHeader>
    <h2 ngsModalTitle>Terms of service</h2>
    <button ngsModalClose></button>
  </div>
  <div ngsModalBody>
    @for (n of paragraphs; track n) {
      <p>
        Paragraph {{ n }}. Long content scrolls with the modal, or inside the body when scrollable.
      </p>
    }
  </div>
  <div ngsModalFooter>
    <button ngsButton (click)="modal.close()">Accept</button>
  </div>
</ng-template>

<ng-template #short let-modal>
  <div ngsModalHeader>
    <h2 ngsModalTitle>Centred</h2>
    <button ngsModalClose></button>
  </div>
  <div ngsModalBody>Centred vertically. Without <code>centered</code> it sits near the top.</div>
  <div ngsModalFooter>
    <button ngsButton (click)="modal.close()">Close</button>
  </div>
</ng-template>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open(long, {})&quot;</span>&gt;</span>Long content<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open(long, { scrollable: true })&quot;</span>&gt;</span>
      Scrollable body
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open(short, { centered: true })&quot;</span>&gt;</span>Centred<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">long</span> <span class="hljs-attr">let-modal</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsModalTitle</span>&gt;</span>Terms of service<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsModalClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalBody</span>&gt;</span>
    @for (n of paragraphs; track n) {
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
        Paragraph {{ n }}. Long content scrolls with the modal, or inside the body when scrollable.
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalFooter</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;modal.close()&quot;</span>&gt;</span>Accept<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">short</span> <span class="hljs-attr">let-modal</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsModalTitle</span>&gt;</span>Centred<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsModalClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalBody</span>&gt;</span>Centred vertically. Without <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>centered<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> it sits near the top.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalFooter</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;modal.close()&quot;</span>&gt;</span>Close<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>`},ts:{code:`import { Component, TemplateRef, inject } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsModalBody,
  NgsModalClose,
  NgsModalFooter,
  NgsModalHeader,
  NgsModalOptions,
  NgsModalService,
  NgsModalTitle,
} from '@bootlace/core/modal';

@Component({
  selector: 'docs-modal-scrollable',
  imports: [NgsButton, NgsModalBody, NgsModalClose, NgsModalFooter, NgsModalHeader, NgsModalTitle],
  templateUrl: './index.html',
})
export class ModalScrollableExample {
  private readonly modals = inject(NgsModalService);
  protected readonly paragraphs = Array.from({ length: 24 }, (_, i) => i + 1);

  protected open(content: TemplateRef<unknown>, options: NgsModalOptions): void {
    this.modals.open(content, options);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">TemplateRef</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsModalBody</span>,
  <span class="hljs-title class_">NgsModalClose</span>,
  <span class="hljs-title class_">NgsModalFooter</span>,
  <span class="hljs-title class_">NgsModalHeader</span>,
  <span class="hljs-title class_">NgsModalOptions</span>,
  <span class="hljs-title class_">NgsModalService</span>,
  <span class="hljs-title class_">NgsModalTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/modal&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-modal-scrollable&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsModalBody</span>, <span class="hljs-title class_">NgsModalClose</span>, <span class="hljs-title class_">NgsModalFooter</span>, <span class="hljs-title class_">NgsModalHeader</span>, <span class="hljs-title class_">NgsModalTitle</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ModalScrollableExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modals = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsModalService</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> paragraphs = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">24</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> i + <span class="hljs-number">1</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">open</span>(<span class="hljs-attr">content</span>: <span class="hljs-title class_">TemplateRef</span>&lt;<span class="hljs-built_in">unknown</span>&gt;, <span class="hljs-attr">options</span>: <span class="hljs-title class_">NgsModalOptions</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(content, options);
  }
}`}},sizes:{html:{code:`<div class="row g-2">
  @for (size of sizes; track size) {
    <div class="col-auto">
      <button ngsButton variant="outline" (click)="open(dialog, size)">{{ size }}</button>
    </div>
  }
</div>

<ng-template #dialog let-modal>
  <div ngsModalHeader>
    <h2 ngsModalTitle>Modal sizes</h2>
    <button ngsModalClose></button>
  </div>
  <div ngsModalBody>
    This is the <strong>{{ current() }}</strong> size.
  </div>
  <div ngsModalFooter>
    <button ngsButton (click)="modal.close()">Done</button>
  </div>
</ng-template>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @for (size of sizes; track size) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open(dialog, size)&quot;</span>&gt;</span>{{ size }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">dialog</span> <span class="hljs-attr">let-modal</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsModalTitle</span>&gt;</span>Modal sizes<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsModalClose</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalBody</span>&gt;</span>
    This is the <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ current() }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> size.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalFooter</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;modal.close()&quot;</span>&gt;</span>Done<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>`},ts:{code:`import { Component, TemplateRef, inject, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsModalBody,
  NgsModalClose,
  NgsModalFooter,
  NgsModalHeader,
  NgsModalService,
  NgsModalSize,
  NgsModalTitle,
} from '@bootlace/core/modal';

@Component({
  selector: 'docs-modal-sizes',
  imports: [NgsButton, NgsModalBody, NgsModalClose, NgsModalFooter, NgsModalHeader, NgsModalTitle],
  templateUrl: './index.html',
})
export class ModalSizesExample {
  private readonly modals = inject(NgsModalService);
  protected readonly sizes: (NgsModalSize | 'default')[] = [
    'sm',
    'default',
    'lg',
    'xl',
    'fullscreen',
  ];
  protected readonly current = signal<string>('default');

  protected open(content: TemplateRef<unknown>, size: NgsModalSize | 'default'): void {
    this.current.set(size);
    this.modals.open(content, { size: size === 'default' ? undefined : size });
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">TemplateRef</span>, inject, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsModalBody</span>,
  <span class="hljs-title class_">NgsModalClose</span>,
  <span class="hljs-title class_">NgsModalFooter</span>,
  <span class="hljs-title class_">NgsModalHeader</span>,
  <span class="hljs-title class_">NgsModalService</span>,
  <span class="hljs-title class_">NgsModalSize</span>,
  <span class="hljs-title class_">NgsModalTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/modal&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-modal-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsModalBody</span>, <span class="hljs-title class_">NgsModalClose</span>, <span class="hljs-title class_">NgsModalFooter</span>, <span class="hljs-title class_">NgsModalHeader</span>, <span class="hljs-title class_">NgsModalTitle</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ModalSizesExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modals = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsModalService</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">sizes</span>: (<span class="hljs-title class_">NgsModalSize</span> | <span class="hljs-string">&#x27;default&#x27;</span>)[] = [
    <span class="hljs-string">&#x27;sm&#x27;</span>,
    <span class="hljs-string">&#x27;default&#x27;</span>,
    <span class="hljs-string">&#x27;lg&#x27;</span>,
    <span class="hljs-string">&#x27;xl&#x27;</span>,
    <span class="hljs-string">&#x27;fullscreen&#x27;</span>,
  ];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> current = signal&lt;<span class="hljs-built_in">string</span>&gt;(<span class="hljs-string">&#x27;default&#x27;</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">open</span>(<span class="hljs-attr">content</span>: <span class="hljs-title class_">TemplateRef</span>&lt;<span class="hljs-built_in">unknown</span>&gt;, <span class="hljs-attr">size</span>: <span class="hljs-title class_">NgsModalSize</span> | <span class="hljs-string">&#x27;default&#x27;</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">current</span>.<span class="hljs-title function_">set</span>(size);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(content, { <span class="hljs-attr">size</span>: size === <span class="hljs-string">&#x27;default&#x27;</span> ? <span class="hljs-literal">undefined</span> : size });
  }
}`}},static:{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button ngsButton variant="outline" (click)="open(dialog, { backdrop: 'static' })">
      Static backdrop
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      variant="outline"
      (click)="open(dialog, { backdrop: 'static', keyboard: false })"
    >
      Static, Escape off
    </button>
  </div>
</div>

<ng-template #dialog let-modal>
  <div ngsModalHeader>
    <h2 ngsModalTitle>Unsaved work</h2>
  </div>
  <div ngsModalBody>
    Clicking outside this modal does not close it, and neither does Escape when it is off. The modal
    shakes instead. Choose an action.
  </div>
  <div ngsModalFooter>
    <button ngsButton variant="outline" color="secondary" (click)="modal.dismiss('discard')">
      Discard
    </button>
    <button ngsButton (click)="modal.close('saved')">Save</button>
  </div>
</ng-template>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open(dialog, { backdrop: &#x27;static&#x27; })&quot;</span>&gt;</span>
      Static backdrop
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;open(dialog, { backdrop: &#x27;static&#x27;, keyboard: false })&quot;</span>
    &gt;</span>
      Static, Escape off
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">dialog</span> <span class="hljs-attr">let-modal</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalHeader</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span> <span class="hljs-attr">ngsModalTitle</span>&gt;</span>Unsaved work<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalBody</span>&gt;</span>
    Clicking outside this modal does not close it, and neither does Escape when it is off. The modal
    shakes instead. Choose an action.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsModalFooter</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;secondary&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;modal.dismiss(&#x27;discard&#x27;)&quot;</span>&gt;</span>
      Discard
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;modal.close(&#x27;saved&#x27;)&quot;</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>`},ts:{code:`import { Component, TemplateRef, inject } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsModalBody,
  NgsModalFooter,
  NgsModalHeader,
  NgsModalOptions,
  NgsModalService,
  NgsModalTitle,
} from '@bootlace/core/modal';

@Component({
  selector: 'docs-modal-static',
  imports: [NgsButton, NgsModalBody, NgsModalFooter, NgsModalHeader, NgsModalTitle],
  templateUrl: './index.html',
})
export class ModalStaticExample {
  private readonly modals = inject(NgsModalService);

  protected open(content: TemplateRef<unknown>, options: NgsModalOptions): void {
    this.modals.open(content, options);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">TemplateRef</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsModalBody</span>,
  <span class="hljs-title class_">NgsModalFooter</span>,
  <span class="hljs-title class_">NgsModalHeader</span>,
  <span class="hljs-title class_">NgsModalOptions</span>,
  <span class="hljs-title class_">NgsModalService</span>,
  <span class="hljs-title class_">NgsModalTitle</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/modal&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-modal-static&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsModalBody</span>, <span class="hljs-title class_">NgsModalFooter</span>, <span class="hljs-title class_">NgsModalHeader</span>, <span class="hljs-title class_">NgsModalTitle</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ModalStaticExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> modals = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsModalService</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">open</span>(<span class="hljs-attr">content</span>: <span class="hljs-title class_">TemplateRef</span>&lt;<span class="hljs-built_in">unknown</span>&gt;, <span class="hljs-attr">options</span>: <span class="hljs-title class_">NgsModalOptions</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(content, options);
  }
}`}}};var js=class e{tab=Yn(`examples`);sources=us;basic=V;sizes=$;scrollable=O;staticBackdrop=U;nested=I;form=R;static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-modal-page`]],inputs:{tab:[1,`tab`]},decls:172,vars:13,consts:[[`heading`,`Modal`,`package`,`@bootlace/core/modal`,`path`,`/components/modal`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`id`,`scrollable`,`heading`,`Scrollable and centred`,3,`component`,`sources`],[`id`,`static`,`heading`,`Static backdrop`,3,`component`,`sources`],[`id`,`nested`,`heading`,`Nested modals`,3,`component`,`sources`],[`id`,`form`,`heading`,`Form`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,l){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A dialog that blocks the page until it is closed, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.dialog`),vi(),Zf(5,` and the native `),ce(6,`code`),Zf(7,`<dialog>`),vi(),Zf(8,` element. Open it from code with `),ce(9,`code`),Zf(10,`NgsModalService.open()`),vi(),Zf(11,`, as in ng-bootstrap, passing a component or an `),ce(12,`code`),Zf(13,`<ng-template>`),vi(),Zf(14,`. The returned `),ce(15,`code`),Zf(16,`NgsModalRef`),vi(),Zf(17,` has a `),ce(18,`code`),Zf(19,`result`),vi(),Zf(20,` promise and `),ce(21,`code`),Zf(22,`closed`),vi(),Zf(23,`, `),ce(24,`code`),Zf(25,`dismissed`),vi(),Zf(26,` and `),ce(27,`code`),Zf(28,`hidden`),vi(),Zf(29,` observables. `),vi(),ce(30,`docs-example`,2),Zf(31,` The content is a component that injects `),ce(32,`code`),Zf(33,`NgsActiveModal`),vi(),Zf(34,` to close the modal with a result or dismiss it with a reason. `),ce(35,`code`),Zf(36,`result`),vi(),Zf(37,` resolves on `),ce(38,`code`),Zf(39,`close()`),vi(),Zf(40,` and rejects on `),ce(41,`code`),Zf(42,`dismiss()`),vi(),Zf(43,`, Escape and a backdrop click. Compose the content from `),ce(44,`code`),Zf(45,`ngsModalHeader`),vi(),Zf(46,`, `),ce(47,`code`),Zf(48,`ngsModalTitle`),vi(),Zf(49,`, `),ce(50,`code`),Zf(51,`ngsModalBody`),vi(),Zf(52,` and `),ce(53,`code`),Zf(54,`ngsModalFooter`),vi(),Zf(55,`; `),ce(56,`code`),Zf(57,`ngsModalClose`),vi(),Zf(58,` is a close button. `),vi(),ce(59,`docs-example`,3)(60,`code`),Zf(61,`size`),vi(),Zf(62,` is `),ce(63,`code`),Zf(64,`sm`),vi(),Zf(65,` (280px), `),ce(66,`code`),Zf(67,`lg`),vi(),Zf(68,` (800px), `),ce(69,`code`),Zf(70,`xl`),vi(),Zf(71,` (1140px) or `),ce(72,`code`),Zf(73,`fullscreen`),vi(),Zf(74,`. The default is 500px. The content here is an `),ce(75,`code`),Zf(76,`<ng-template>`),vi(),Zf(77,`, whose context holds the active modal as `),ce(78,`code`),Zf(79,`$implicit`),vi(),Zf(80,`. `),vi(),ce(81,`docs-example`,4),Zf(82,` Long content scrolls with the modal. `),ce(83,`code`),Zf(84,`scrollable`),vi(),Zf(85,` keeps the header and footer in view and scrolls the body instead. A modal sits near the top by default; `),ce(86,`code`),Zf(87,`centered`),vi(),Zf(88,` centres it vertically. `),vi(),ce(89,`docs-example`,5)(90,`code`),Zf(91,`backdrop: 'static'`),vi(),Zf(92,` ignores clicks outside the modal and shakes it instead. `),ce(93,`code`),Zf(94,`keyboard: false`),vi(),Zf(95,` makes Escape do the same. Use this when the user must choose an action. `),ce(96,`code`),Zf(97,`backdrop: false`),vi(),Zf(98,` hides the dim backdrop (the page stays inert). `),vi(),ce(99,`docs-example`,6),Zf(100,` A modal can open another. Each is its own top-layer dialog, so the newest is on top, Escape and focus belong to it, and the page stays locked until the last one closes. Focus returns to the button that opened each modal. `),vi(),ce(101,`docs-example`,7),Zf(102,` A form can wrap the whole content (give it `),ce(103,`code`),Zf(104,`class="ngs-modal-content"`),vi(),Zf(105,` to keep the layout). `),ce(106,`code`),Zf(107,`ngsAutofocus`),vi(),Zf(108,` picks the field that receives focus first. Here `),ce(109,`code`),Zf(110,`beforeDismiss`),vi(),Zf(111,` keeps the modal open while the form has unsaved changes. It runs for Escape, backdrop clicks and `),ce(112,`code`),Zf(113,`dismiss()`),vi(),Zf(114,`, not for `),ce(115,`code`),Zf(116,`close()`),vi(),Zf(117,`. `),vi(),ce(118,`section`,8)(119,`h2`,9),Zf(120,`Accessibility`),vi(),ce(121,`p`),Zf(122,` A modal is a native `),ce(123,`code`),Zf(124,`<dialog>`),vi(),Zf(125,` opened with `),ce(126,`code`),Zf(127,`showModal()`),vi(),Zf(128,`, so the browser puts it in the top layer, contains focus and makes the rest of the page inert. Focus moves to the element marked `),ce(129,`code`),Zf(130,`ngsAutofocus`),vi(),Zf(131,`, else the first focusable element, and returns to the element that opened the modal when it closes. Tab and Shift+Tab stay inside. Page scrolling is locked while any modal is open and restored when the last one closes. `),vi(),ce(132,`p`),Zf(133,` Escape dismisses the modal unless `),ce(134,`code`),Zf(135,`keyboard`),vi(),Zf(136,` is `),ce(137,`code`),Zf(138,`false`),vi(),Zf(139,`; Escape is always handled by the component, so the browser's own close never bypasses the option. The modal is named after its `),ce(140,`code`),Zf(141,`ngsModalTitle`),vi(),Zf(142,`. When there is no visible title, set `),ce(143,`code`),Zf(144,`label`),vi(),Zf(145,` or `),ce(146,`code`),Zf(147,`labelledBy`),vi(),Zf(148,`, and use `),ce(149,`code`),Zf(150,`describedBy`),vi(),Zf(151,` to point to a description. The dismissal reason is `),ce(152,`code`),Zf(153,`'escape'`),vi(),Zf(154,` or `),ce(155,`code`),Zf(156,`'backdrop'`),vi(),Zf(157,` for those two, the same values as the drawer, or whatever you pass to `),ce(158,`code`),Zf(159,`dismiss()`),vi(),Zf(160,`. Give every modal a way out for keyboard and touch users: a close button or a footer action. With a static backdrop that is the only way. `),vi(),ce(161,`p`),Zf(162,` The close button is named from the `),ce(163,`code`),Zf(164,`close`),vi(),Zf(165,` string of `),ce(166,`code`),Zf(167,`NGS_I18N`),vi(),Zf(168,`. While rendering on the server nothing opens: `),ce(169,`code`),Zf(170,`open()`),vi(),Zf(171,` returns a ref that is already dismissed. `),vi()()()),t&2&&(Ot(`tab`,l.tab()),Tt(30),Ot(`component`,l.basic)(`sources`,l.sources.basic),Tt(29),Ot(`component`,l.sizes)(`sources`,l.sources.sizes),Tt(22),Ot(`component`,l.scrollable)(`sources`,l.sources.scrollable),Tt(8),Ot(`component`,l.staticBackdrop)(`sources`,l.sources.static),Tt(10),Ot(`component`,l.nested)(`sources`,l.sources.nested),Tt(2),Ot(`component`,l.form)(`sources`,l.sources.form))},dependencies:[ue$1,pe],encapsulation:2})};export{js as ModalPage};