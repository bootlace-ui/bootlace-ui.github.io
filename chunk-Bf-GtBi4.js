import{An as hg,At as W,Br as ui,Cr as rf,Gr as vf,Gt as Yn,Jt as Zf,L as KC,Pt as XC,Tn as gf,Vt as Y3,Wr as ve,Zr as wf,_r as q3,en as ah,et as Ot,ir as nf,mt as So,nr as nA,on as ce,qn as lU,qr as vi,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./chunk-B6h8Jb5u.js";import"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";import{n as k,t as V$1}from"./chunk-sVr-PzFH.js";var N=class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-notification-actions`]],decls:20,vars:0,consts:[[1,`row`,`g-2`],[1,`col-12`,`lg:col-6`],[`status`,`warning`,`heading`,`Storage almost full`,`live`,`off`],[`ngsNotificationActions`,``],[`ngsButton`,``,`size`,`sm`],[`href`,`#actions`,3,`click`],[`status`,`danger`,`heading`,`Payment failed`,`live`,`off`],[`ngsButton`,``,`variant`,`link`,`size`,`sm`],[`status`,`success`,`heading`,`Backup complete`,`live`,`off`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-notification`,2),Zf(3,` You have used 95% of your space. Delete files or upgrade to keep uploading. `),ce(4,`div`,3)(5,`button`,4),Zf(6,`Upgrade`),vi(),ce(7,`a`,5),ui(`click`,function(W){return W.preventDefault()}),Zf(8,`Manage files`),vi()()()(),ce(9,`div`,1)(10,`ngs-notification`,6),Zf(11,` Check your card details and try again. `),ce(12,`div`,3)(13,`button`,4),Zf(14,`Retry`),vi(),ce(15,`button`,7),Zf(16,`Contact support`),vi()()()(),ce(17,`div`,1)(18,`ngs-notification`,8),Zf(19,` Everything was saved at 14:02. `),vi()()())},dependencies:[V$1,k,f],encapsulation:2})};var Y=[`restore`];function L(e,i){if(e&1){let t=gf();ce(0,`div`,2)(1,`ngs-notification`,5),ui(`closed`,function(){q3(t);let h=vf();return Y3(h.close(h.update))}),Zf(2,` Version 2.4 is ready to install. `),vi()()}}function $(e,i){if(e&1){let t=gf();ce(0,`div`,2)(1,`ngs-notification`,6),ui(`closed`,function(){q3(t);let h=vf();return Y3(h.close(h.offline))}),Zf(2,` Changes are saved on this device until you reconnect. `),vi()()}}var b=class e{update=W(!0);offline=W(!0);restore=nA.required(`restore`,{read:So});close(i){i.set(!1),this.restore().nativeElement.focus()}showAll(){this.update.set(!0),this.offline.set(!0)}static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-notification-closable`]],viewQuery:function(t,l){t&1&&ah(l.restore,Y,5,So),t&2&&wf()},decls:7,vars:2,consts:[[`restore`,``],[1,`row`,`g-2`],[1,`col-12`,`lg:col-6`],[1,`col-12`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,3,`click`],[`status`,`info`,`heading`,`Update available`,`closable`,``,`live`,`off`,3,`closed`],[`status`,`warning`,`heading`,`You are offline`,`closable`,``,`live`,`off`,3,`closed`]],template:function(t,l){t&1&&(ce(0,`div`,1),KC(1,L,3,0,`div`,2),KC(2,$,3,0,`div`,2),ce(3,`div`,3)(4,`button`,4,0),ui(`click`,function(){return l.showAll()}),Zf(6,` Show notifications again `),vi()()()),t&2&&(Tt(),XC(l.update()?1:-1),Tt(),XC(l.offline()?2:-1))},dependencies:[V$1,f],encapsulation:2})};var w=class e{home=lU;static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-notification-icons`]],decls:10,vars:2,consts:[[1,`row`,`g-2`],[1,`col-12`,`lg:col-4`],[`status`,`success`,`live`,`off`],[`status`,`success`,`live`,`off`,3,`icon`]],template:function(t,l){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-notification`,2),Zf(3,`The status icon, by default.`),vi()(),ce(4,`div`,1)(5,`ngs-notification`,3),Zf(6,`A custom icon.`),vi()(),ce(7,`div`,1)(8,`ngs-notification`,3),Zf(9,`No icon.`),vi()()()),t&2&&(Tt(5),Ot(`icon`,l.home),Tt(3),Ot(`icon`,!1))},dependencies:[V$1],encapsulation:2})};function Q(e,i){if(e&1&&(ce(0,`div`,1)(1,`ngs-notification`,2),Zf(2),ce(3,`div`,3)(4,`button`,4),Zf(5,`Action`),vi()()()()),e&2){let t=i.$implicit;Tt(),Ot(`size`,t)(`heading`,`Size `+t),Tt(),hg(` Taiga's `,t,` notification. `)}}var q=class e{sizes=[`lg`,`md`,`sm`];static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-notification-sizes`]],decls:3,vars:0,consts:[[1,`row`,`g-2`],[1,`col-12`,`lg:col-4`],[`status`,`info`,`live`,`off`,3,`size`,`heading`],[`ngsNotificationActions`,``],[`ngsButton`,``,`size`,`sm`]],template:function(t,l){t&1&&(ce(0,`div`,0),of(1,Q,6,3,`div`,1,nf),vi()),t&2&&(Tt(),rf(l.sizes))},dependencies:[V$1,k,f],encapsulation:2})};function G(e,i){if(e&1&&(ce(0,`div`,1)(1,`ngs-notification`,2),Zf(2),vi()()),e&2){let t=i.$implicit;Tt(),Ot(`status`,t),Tt(),hg(` A `,t,` notification with some message text. `)}}var E=class e{statuses=[`info`,`success`,`warning`,`danger`,`neutral`];static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-notification-statuses`]],decls:3,vars:0,consts:[[1,`row`,`g-2`],[1,`col-12`,`lg:col-6`],[`live`,`off`,3,`status`]],template:function(t,l){t&1&&(ce(0,`div`,0),of(1,G,3,2,`div`,1,nf),vi()),t&2&&(Tt(),rf(l.statuses))},dependencies:[V$1],encapsulation:2})};var H={actions:{html:{code:`<div class="row g-2">
  <div class="col-12 lg:col-6">
    <ngs-notification status="warning" heading="Storage almost full" live="off">
      You have used 95% of your space. Delete files or upgrade to keep uploading.
      <div ngsNotificationActions>
        <button ngsButton size="sm">Upgrade</button>
        <a href="#actions" (click)="$event.preventDefault()">Manage files</a>
      </div>
    </ngs-notification>
  </div>
  <div class="col-12 lg:col-6">
    <ngs-notification status="danger" heading="Payment failed" live="off">
      Check your card details and try again.
      <div ngsNotificationActions>
        <button ngsButton size="sm">Retry</button>
        <button ngsButton variant="link" size="sm">Contact support</button>
      </div>
    </ngs-notification>
  </div>
  <div class="col-12 lg:col-6">
    <ngs-notification status="success" heading="Backup complete" live="off">
      Everything was saved at 14:02.
    </ngs-notification>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Storage almost full&quot;</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>
      You have used 95% of your space. Delete files or upgrade to keep uploading.
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsNotificationActions</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>Upgrade<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;#actions&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;$event.preventDefault()&quot;</span>&gt;</span>Manage files<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Payment failed&quot;</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>
      Check your card details and try again.
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsNotificationActions</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>Retry<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;link&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>Contact support<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Backup complete&quot;</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>
      Everything was saved at 14:02.
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsNotification, NgsNotificationActions } from '@bootlace/core/notification';

@Component({
  selector: 'docs-notification-actions',
  imports: [NgsNotification, NgsNotificationActions, NgsButton],
  templateUrl: './index.html',
})
export class NotificationActionsExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNotification</span>, <span class="hljs-title class_">NgsNotificationActions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/notification&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-notification-actions&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsNotification</span>, <span class="hljs-title class_">NgsNotificationActions</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NotificationActionsExample</span> {}`}},closable:{html:{code:`<div class="row g-2">
  @if (update()) {
    <div class="col-12 lg:col-6">
      <ngs-notification
        status="info"
        heading="Update available"
        closable
        live="off"
        (closed)="close(update)"
      >
        Version 2.4 is ready to install.
      </ngs-notification>
    </div>
  }
  @if (offline()) {
    <div class="col-12 lg:col-6">
      <ngs-notification
        status="warning"
        heading="You are offline"
        closable
        live="off"
        (closed)="close(offline)"
      >
        Changes are saved on this device until you reconnect.
      </ngs-notification>
    </div>
  }
  <div class="col-12">
    <button #restore ngsButton variant="outline" size="sm" (click)="showAll()">
      Show notifications again
    </button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @if (update()) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span>
        <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;info&quot;</span>
        <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;Update available&quot;</span>
        <span class="hljs-attr">closable</span>
        <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>
        (<span class="hljs-attr">closed</span>)=<span class="hljs-string">&quot;close(update)&quot;</span>
      &gt;</span>
        Version 2.4 is ready to install.
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
  @if (offline()) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span>
        <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;warning&quot;</span>
        <span class="hljs-attr">heading</span>=<span class="hljs-string">&quot;You are offline&quot;</span>
        <span class="hljs-attr">closable</span>
        <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>
        (<span class="hljs-attr">closed</span>)=<span class="hljs-string">&quot;close(offline)&quot;</span>
      &gt;</span>
        Changes are saved on this device until you reconnect.
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> #<span class="hljs-attr">restore</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;showAll()&quot;</span>&gt;</span>
      Show notifications again
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, ElementRef, WritableSignal, signal, viewChild } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsNotification } from '@bootlace/core/notification';

@Component({
  selector: 'docs-notification-closable',
  imports: [NgsNotification, NgsButton],
  templateUrl: './index.html',
})
export class NotificationClosableExample {
  protected readonly update = signal(true);
  protected readonly offline = signal(true);
  // The template ref sits on an ngsButton host, so read the element, not the component.
  private readonly restore = viewChild.required('restore', { read: ElementRef<HTMLButtonElement> });

  /** Removes the notification, then moves focus off the close button that is about to go. */
  protected close(notification: WritableSignal<boolean>): void {
    notification.set(false);
    this.restore().nativeElement.focus();
  }

  protected showAll(): void {
    this.update.set(true);
    this.offline.set(true);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">ElementRef</span>, <span class="hljs-title class_">WritableSignal</span>, signal, viewChild } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNotification</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/notification&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-notification-closable&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsNotification</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NotificationClosableExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> update = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> offline = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-comment">// The template ref sits on an ngsButton host, so read the element, not the component.</span>
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> restore = viewChild.<span class="hljs-title function_">required</span>(<span class="hljs-string">&#x27;restore&#x27;</span>, { <span class="hljs-attr">read</span>: <span class="hljs-title class_">ElementRef</span>&lt;<span class="hljs-title class_">HTMLButtonElement</span>&gt; });

  <span class="hljs-comment">/** Removes the notification, then moves focus off the close button that is about to go. */</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">close</span>(<span class="hljs-attr">notification</span>: <span class="hljs-title class_">WritableSignal</span>&lt;<span class="hljs-built_in">boolean</span>&gt;): <span class="hljs-built_in">void</span> {
    notification.<span class="hljs-title function_">set</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">restore</span>().<span class="hljs-property">nativeElement</span>.<span class="hljs-title function_">focus</span>();
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">showAll</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">update</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">offline</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
  }
}`}},icons:{html:{code:`<div class="row g-2">
  <div class="col-12 lg:col-4">
    <ngs-notification status="success" live="off">The status icon, by default.</ngs-notification>
  </div>
  <div class="col-12 lg:col-4">
    <ngs-notification status="success" [icon]="home" live="off">A custom icon.</ngs-notification>
  </div>
  <div class="col-12 lg:col-4">
    <ngs-notification status="success" [icon]="false" live="off">No icon.</ngs-notification>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>The status icon, by default.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;success&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>A custom icon.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;success&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>No icon.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsNotification } from '@bootlace/core/notification';
import { ngsIconHome } from '@bootlace/icons';

@Component({
  selector: 'docs-notification-icons',
  imports: [NgsNotification],
  templateUrl: './index.html',
})
export class NotificationIconsExample {
  protected readonly home = ngsIconHome;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNotification</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/notification&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconHome } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-notification-icons&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsNotification</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NotificationIconsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> home = ngsIconHome;
}`}},sizes:{html:{code:`<div class="row g-2">
  @for (size of sizes; track size) {
    <div class="col-12 lg:col-4">
      <ngs-notification status="info" [size]="size" [heading]="'Size ' + size" live="off">
        Taiga's {{ size }} notification.
        <div ngsNotificationActions>
          <button ngsButton size="sm">Action</button>
        </div>
      </ngs-notification>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @for (size of sizes; track size) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span> <span class="hljs-attr">status</span>=<span class="hljs-string">&quot;info&quot;</span> [<span class="hljs-attr">size</span>]=<span class="hljs-string">&quot;size&quot;</span> [<span class="hljs-attr">heading</span>]=<span class="hljs-string">&quot;&#x27;Size &#x27; + size&quot;</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>
        Taiga&#x27;s {{ size }} notification.
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsNotificationActions</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>Action<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import {
  NgsNotification,
  NgsNotificationActions,
  NgsNotificationSize,
} from '@bootlace/core/notification';

@Component({
  selector: 'docs-notification-sizes',
  imports: [NgsNotification, NgsNotificationActions, NgsButton],
  templateUrl: './index.html',
})
export class NotificationSizesExample {
  protected readonly sizes: readonly NgsNotificationSize[] = ['lg', 'md', 'sm'];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsNotification</span>,
  <span class="hljs-title class_">NgsNotificationActions</span>,
  <span class="hljs-title class_">NgsNotificationSize</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/notification&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-notification-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsNotification</span>, <span class="hljs-title class_">NgsNotificationActions</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NotificationSizesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">sizes</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">NgsNotificationSize</span>[] = [<span class="hljs-string">&#x27;lg&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;sm&#x27;</span>];
}`}},statuses:{html:{code:`<div class="row g-2">
  @for (status of statuses; track status) {
    <div class="col-12 lg:col-6">
      <ngs-notification [status]="status" live="off">
        A {{ status }} notification with some message text.
      </ngs-notification>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @for (status of statuses; track status) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span> [<span class="hljs-attr">status</span>]=<span class="hljs-string">&quot;status&quot;</span> <span class="hljs-attr">live</span>=<span class="hljs-string">&quot;off&quot;</span>&gt;</span>
        A {{ status }} notification with some message text.
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsNotification, NgsNotificationStatus } from '@bootlace/core/notification';

@Component({
  selector: 'docs-notification-statuses',
  imports: [NgsNotification],
  templateUrl: './index.html',
})
export class NotificationStatusesExample {
  protected readonly statuses: readonly NgsNotificationStatus[] = [
    'info',
    'success',
    'warning',
    'danger',
    'neutral',
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNotification</span>, <span class="hljs-title class_">NgsNotificationStatus</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/notification&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-notification-statuses&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsNotification</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NotificationStatusesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">statuses</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">NgsNotificationStatus</span>[] = [
    <span class="hljs-string">&#x27;info&#x27;</span>,
    <span class="hljs-string">&#x27;success&#x27;</span>,
    <span class="hljs-string">&#x27;warning&#x27;</span>,
    <span class="hljs-string">&#x27;danger&#x27;</span>,
    <span class="hljs-string">&#x27;neutral&#x27;</span>,
  ];
}`}}};var V=class e{tab=Yn(`examples`);sources=H;statuses=E;actions=N;sizes=q;icons=w;closable=b;static ɵfac=function(t){return new(t||e)};static ɵcmp=ve({type:e,selectors:[[`docs-notification-page`]],inputs:{tab:[1,`tab`]},decls:109,vars:11,consts:[[`heading`,`Notification`,`package`,`@bootlace/core/notification`,`path`,`/components/notification`,3,`tab`],[1,`docs-page-lead`],[`id`,`statuses`,`heading`,`Statuses`,3,`component`,`sources`],[`id`,`actions`,`heading`,`Heading and actions`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`id`,`icons`,`heading`,`Icons`,3,`component`,`sources`],[`id`,`closable`,`heading`,`Closable`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,l){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` An inline status block in Taiga UI's look: a tinted, rounded block with a status icon, an optional bold heading, content, a row of actions and an optional close button. Use it for messages that belong to the page, such as a warning above a form. For a message that appears and fades by itself, raise a toast instead. `),vi(),ce(3,`docs-example`,2)(4,`code`),Zf(5,`status`),vi(),Zf(6,` is `),ce(7,`code`),Zf(8,`info`),vi(),Zf(9,` (default), `),ce(10,`code`),Zf(11,`success`),vi(),Zf(12,`, `),ce(13,`code`),Zf(14,`warning`),vi(),Zf(15,`, `),ce(16,`code`),Zf(17,`danger`),vi(),Zf(18,` or `),ce(19,`code`),Zf(20,`neutral`),vi(),Zf(21,`. Each status has its own icon. The tint is built from Bootstrap's colour scale, so it adapts to light and dark mode. `),vi(),ce(22,`docs-example`,3)(23,`code`),Zf(24,`heading`),vi(),Zf(25,` sets the bold first line. Put buttons and links in a `),ce(26,`code`),Zf(27,`ngsNotificationActions`),vi(),Zf(28,` row under the content: buttons take a quiet outline look and links are underlined. `),vi(),ce(29,`docs-example`,4)(30,`code`),Zf(31,`size`),vi(),Zf(32,` is `),ce(33,`code`),Zf(34,`lg`),vi(),Zf(35,` (default), `),ce(36,`code`),Zf(37,`md`),vi(),Zf(38,` or `),ce(39,`code`),Zf(40,`sm`),vi(),Zf(41,`, the three sizes of Taiga's notification. `),vi(),ce(42,`docs-example`,5),Zf(43,` The status icon is the default. Pass any `),ce(44,`code`),Zf(45,`@bootlace/icons`),vi(),Zf(46,` definition to `),ce(47,`code`),Zf(48,`icon`),vi(),Zf(49,` to replace it, or `),ce(50,`code`),Zf(51,`false`),vi(),Zf(52,` to hide it. `),vi(),ce(53,`docs-example`,6)(54,`code`),Zf(55,`closable`),vi(),Zf(56,` adds a close button that emits `),ce(57,`code`),Zf(58,`closed`),vi(),Zf(59,`. The notification does not remove itself: wrap it in `),ce(60,`code`),Zf(61,`@if`),vi(),Zf(62,` and clear the condition on `),ce(63,`code`),Zf(64,`closed`),vi(),Zf(65,`, as here. `),vi(),ce(66,`section`,7)(67,`h2`,8),Zf(68,`Accessibility`),vi(),ce(69,`p`),Zf(70,` The `),ce(71,`code`),Zf(72,`live`),vi(),Zf(73,` input picks the announcement, as on Alert: `),ce(74,`code`),Zf(75,`polite`),vi(),Zf(76,` (default) is `),ce(77,`code`),Zf(78,`role="status"`),vi(),Zf(79,`, `),ce(80,`code`),Zf(81,`assertive`),vi(),Zf(82,` is `),ce(83,`code`),Zf(84,`role="alert"`),vi(),Zf(85,` and `),ce(86,`code`),Zf(87,`off`),vi(),Zf(88,` sets no role. A live region only announces content that changes after the page has loaded, so a notification that is already on the page needs no role: use `),ce(89,`code`),Zf(90,`off`),vi(),Zf(91,` for it. Use `),ce(92,`code`),Zf(93,`assertive`),vi(),Zf(94,` only for errors that need attention right away. `),vi(),ce(95,`p`),Zf(96,` The status icon is decorative: the colour and icon never carry the meaning alone, so write what happened in the text. Text uses the page's body colour on a light tint, which keeps WCAG AA contrast in light and dark mode. The close button is a native `),ce(97,`code`),Zf(98,`<button>`),vi(),Zf(99,` named "Close" (from `),ce(100,`code`),Zf(101,`NGS_I18N`),vi(),Zf(102,`, or `),ce(103,`code`),Zf(104,`closeLabel`),vi(),Zf(105,`). Removing the notification removes the focused close button too, so move focus somewhere sensible in the `),ce(106,`code`),Zf(107,`closed`),vi(),Zf(108,` handler, as the closable example does. `),vi()()()),t&2&&(Ot(`tab`,l.tab()),Tt(3),Ot(`component`,l.statuses)(`sources`,l.sources.statuses),Tt(19),Ot(`component`,l.actions)(`sources`,l.sources.actions),Tt(7),Ot(`component`,l.sizes)(`sources`,l.sources.sizes),Tt(13),Ot(`component`,l.icons)(`sources`,l.sources.icons),Tt(11),Ot(`component`,l.closable)(`sources`,l.sources.closable))},dependencies:[ue,pe],encapsulation:2})};export{V as NotificationPage};