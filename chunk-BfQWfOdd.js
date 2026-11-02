import{n as l,t as k}from"./chunk-DJVAsKa_.js";import{A as J4,An as hg,Ar as sn,At as W$1,Br as ui,Cr as rf,Ct as U0,G as Lr,Gr as vf,Gt as Yn,Jt as Zf,L as KC,Ln as jn,Pt as XC,Rn as jo,Rr as ue,Sn as fh,Tn as gf,Tr as sA,Un as kg,Ut as YZ,Vt as Y3,Wr as ve,Yn as lt,Zr as wf,Zt as _m,_n as ei,_r as q3,ar as nh,en as ah,et as Ot,ir as nf,ln as cj,mt as So,nn as b,nr as nA,on as ce,pt as Sn,qr as vi,u as Bi,ur as of,xt as Tt,y as G,yn as f,zn as k$1}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import"./chunk-B6h8Jb5u.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as N}from"./chunk-DX4JeZih.js";import{t as f$1}from"./chunk-_QnoVoFv.js";import{n as k$2,t as V$1}from"./chunk-sVr-PzFH.js";function _s(l,a){l&1&&nh(0)}function Ts(l,a){if(l&1&&U0(0,_s,1,0,`ng-container`,1),l&2){let s=vf();Ot(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,s.context())}}function Ns(l,a){if(l&1&&Zf(0),l&2){let s=vf();hg(` `,s.item().content,` `)}}var ws=(l,a)=>a.position;var ks=(l,a)=>a.id;function Cs(l,a){if(l&1&&ue(0,`ngs-toast`,2),l&2){let s=a.$implicit;Ot(`item`,s)}}function Ss(l,a){if(l&1&&(ce(0,`div`,1),of(1,Cs,1,1,`ngs-toast`,2,ks),vi()),l&2){let s=a.$implicit,n=vf();kg(`ngs-toast-region ngs-toast-region-`+s.position),Lr(`aria-label`,n.i18n.notifications),Tt(),rf(s.items)}}var Es=[`top-start`,`top-center`,`top-end`,`bottom-start`,`bottom-center`,`bottom-end`];var qs=600;var W=class l{host=k$1(So).nativeElement;document=k$1(G);animation=k$1(N).animation;timer;returnFocus=null;item=Yn.required();hovered=!1;focused=!1;template=jo(()=>{let a=this.item().content;return a instanceof ei?a:null});context=jo(()=>{let{data:a}=this.item().options;return{$implicit:a,data:a,ref:this.item().ref}});classes=jo(()=>{let a=[`ngs-toast`];return this.animation||a.push(`ngs-toast-static`),this.item().state()===`leaving`&&a.push(`ngs-toast-leaving`),a.join(` `)});constructor(){k$1(jn).onDestroy(()=>this.stop()),J4(s=>{if(this.item().state()!==`leaving`)return;this.stop();let n=setTimeout(()=>this.item().remove(),qs);s(()=>clearTimeout(n))})}ngOnInit(){this.item().beforeClose=()=>this.restoreFocus(),this.start()}start(){this.stop();let{autoClose:a}=this.item().options;a===!1||a<=0||this.hovered||this.focused||this.item().state()===`open`&&(this.timer=setTimeout(()=>this.item().ref.close(),a))}stop(){clearTimeout(this.timer)}onFocusIn(a){let s=a.relatedTarget;s instanceof HTMLElement&&!this.host.contains(s)&&(this.returnFocus=s),this.focused=!0,this.stop()}onFocusOut(a){let s=a.relatedTarget;s instanceof Node&&this.host.contains(s)||(this.focused=!1,this.start())}onAnimationEnd(a){a.target===this.host&&this.item().state()===`leaving`&&this.item().remove()}restoreFocus(){let a=this.document.activeElement;a&&this.host.contains(a)&&this.returnFocus?.isConnected&&this.returnFocus.focus()}static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`ngs-toast`]],hostVars:2,hostBindings:function(s,n){s&1&&ui(`mouseenter`,function(){return n.hovered=!0,n.stop()})(`mouseleave`,function(){return n.hovered=!1,n.start()})(`focusin`,function(m){return n.onFocusIn(m)})(`focusout`,function(m){return n.onFocusOut(m)})(`keydown.escape`,function(){return n.item().options.closable&&n.item().ref.close()})(`animationend`,function(m){return n.onAnimationEnd(m)}),s&2&&kg(n.classes())},inputs:{item:[1,`item`]},decls:3,vars:5,consts:[[`size`,`m`,`live`,`off`,3,`closed`,`status`,`heading`,`icon`,`closable`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(s,n){if(s&1&&(ce(0,`ngs-notification`,0),ui(`closed`,function(){return n.item().ref.close()}),KC(1,Ts,1,2,`ng-container`)(2,Ns,1,1),vi()),s&2){let i;Ot(`status`,n.item().options.status)(`heading`,n.item().options.label)(`icon`,n.item().options.icon)(`closable`,n.item().options.closable),Tt(),XC((i=n.template())?1:2,i)}},dependencies:[V$1,_m],encapsulation:2})};var z=class l{i18n=k$1(o);items=W$1([]);groups=jo(()=>Es.map(a=>({position:a,items:this.items().filter(s=>s.options.position===a)})));static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`ngs-toast-container`]],decls:2,vars:0,consts:[[`role`,`status`,`aria-live`,`polite`,`aria-relevant`,`additions`,3,`class`],[`role`,`status`,`aria-live`,`polite`,`aria-relevant`,`additions`],[3,`item`]],template:function(s,n){s&1&&of(0,Ss,3,3,`div`,0,ws),s&2&&rf(n.groups())},dependencies:[W],encapsulation:2})};var Ds=new f(`NGS_TOAST_DEFAULTS`,{providedIn:`root`,factory:()=>({status:`info`,autoClose:5e3,closable:!0,position:`top-end`})});var u=class l$1{document=k$1(G);defaults=k$1(Ds);animation=k$1(N).animation;browser=YZ(k$1(lt));appRef=k$1(Sn);injector=k$1(sn);destroyRef=k$1(jn);items=W$1([]);container;nextId=0;constructor(){this.browser&&this.mount()}open(a,s={}){let n=new Bi(1),i=W$1(`open`),m=()=>{this.items().includes(S)&&(this.items.update(Y=>Y.filter(bs=>bs!==S)),n.next(),n.complete())},G={closed:n.asObservable(),close:()=>{i()===`open`&&(S.beforeClose?.(),i.set(`leaving`),this.animated()||m())}},S={id:this.nextId++,content:a,options:l(k(k({},this.defaults),s),{closable:s.closable??s.closeable??this.defaults.closable}),state:i,ref:G,remove:m};return this.browser?(this.items.update(Y=>[...Y,S]),G):(n.next(),n.complete(),G)}closeAll(){for(let a of this.items())a.ref.close()}animated(){return this.animation?!this.document.defaultView?.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches:!1}mount(){this.container||(this.container=sA(z,{environmentInjector:this.injector}),this.container.instance.items=this.items,this.appRef.attachView(this.container.hostView),this.document.body.appendChild(this.container.location.nativeElement),this.destroyRef.onDestroy(()=>this.container?.destroy()))}static ɵfac=function(s){return new(s||l$1)};static ɵprov=b({token:l$1,factory:l$1.ɵfac,providedIn:`root`})};var Bs=[`deleted`];function As(l,a){if(l&1){let s=gf();Zf(0,` report-2025.pdf was moved to the bin. `),ce(1,`div`,2)(2,`button`,3),ui(`click`,function(){let i=q3(s).ref,m=vf();return Y3(m.undo(i))}),Zf(3,`Undo`),vi(),ce(4,`button`,4),ui(`click`,function(){let i=q3(s).ref;return Y3(i.close())}),Zf(5,`Dismiss`),vi()()}}var U=class l{toasts=k$1(u);deleted=nA.required(`deleted`);delete(){this.toasts.open(this.deleted(),{label:`File deleted`,autoClose:!1,status:`neutral`})}undo(a){a.close(),this.toasts.open(`The file is back.`,{status:`success`})}static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`docs-toast-actions`]],viewQuery:function(s,n){s&1&&ah(n.deleted,Bs,5),s&2&&wf()},decls:4,vars:0,consts:[[`deleted`,``],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,3,`click`],[`ngsNotificationActions`,``],[`ngsButton`,``,`size`,`sm`,3,`click`],[`ngsButton`,``,`variant`,`link`,`size`,`sm`,3,`click`]],template:function(s,n){s&1&&(ce(0,`button`,1),ui(`click`,function(){return n.delete()}),Zf(1,`Delete a file`),vi(),U0(2,As,6,0,`ng-template`,null,0,cj))},dependencies:[f$1,k$2],encapsulation:2})};var O=class l{toasts=k$1(u);timed(){this.toasts.open(`Closes itself in 4 seconds. Hover it to keep it.`,{label:`Timed`,autoClose:4e3})}persistent(){this.toasts.open(`Stays until you close it.`,{label:`Persistent`,autoClose:!1})}closeAll(){this.toasts.closeAll()}static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`docs-toast-autoclose`]],decls:10,vars:0,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,3,`click`],[`ngsButton`,``,`variant`,`text`,`size`,`sm`,3,`click`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),ui(`click`,function(){return n.timed()}),Zf(3,`Auto-close in 4 s`),vi()(),ce(4,`div`,1)(5,`button`,2),ui(`click`,function(){return n.persistent()}),Zf(6,`Persistent`),vi()(),ce(7,`div`,1)(8,`button`,3),ui(`click`,function(){return n.closeAll()}),Zf(9,`Close all`),vi()()())},dependencies:[f$1],encapsulation:2})};function Ps(l,a){if(l&1){let s=gf();ce(0,`div`,1)(1,`button`,2),ui(`click`,function(){let i=q3(s).$implicit,m=vf();return Y3(m.show(i))}),Zf(2),vi()()}if(l&2){let s=a.$implicit;Tt(2),hg(` `,s,` `)}}var H=class l{toasts=k$1(u);positions=[`top-start`,`top-center`,`top-end`,`bottom-start`,`bottom-center`,`bottom-end`];show(a){this.toasts.open(`Raised at ${a}.`,{position:a,label:a})}static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`docs-toast-positions`]],decls:3,vars:0,consts:[[1,`row`,`g-2`],[1,`col-6`,`md:col-4`,`lg:col-2`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,1,`w-100`,3,`click`]],template:function(s,n){s&1&&(ce(0,`div`,0),of(1,Ps,3,1,`div`,1,nf),vi()),s&2&&(Tt(),rf(n.positions))},dependencies:[f$1],encapsulation:2})};function Is(l,a){if(l&1){let s=gf();ce(0,`div`,1)(1,`button`,2),ui(`click`,function(){let i=q3(s).$implicit,m=vf();return Y3(m.show(i))}),Zf(2),vi()()}if(l&2){let s=a.$implicit;Tt(2),fh(s)}}var $=class l{toasts=k$1(u);statuses=[`info`,`success`,`warning`,`danger`,`neutral`];messages={info:[`Export started`,`We will email you when the report is ready.`],success:[`Changes saved`,`Your profile is up to date.`],warning:[`Session ending`,`You will be signed out in 5 minutes.`],danger:[`Payment failed`,`Check your card details and try again.`],neutral:[`Draft kept`,`Your draft is stored on this device.`]};show(a){let[s,n]=this.messages[a];this.toasts.open(n,{status:a,label:s})}static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`docs-toast-statuses`]],decls:3,vars:0,consts:[[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,3,`click`]],template:function(s,n){s&1&&(ce(0,`div`,0),of(1,Is,3,1,`div`,1,nf),vi()),s&2&&(Tt(),rf(n.statuses))},dependencies:[f$1],encapsulation:2})};var Rs=[`upload`];function Ms(l,a){if(l&1&&(ce(0,`strong`),Zf(1),vi(),Zf(2)),l&2){let s=a.$implicit;Tt(),fh(s.name),Tt(),hg(` (`,s.size,`) is ready to share.
`)}}var V=class l{toasts=k$1(u);upload=nA.required(`upload`);count=0;opened=W$1(0);show(){this.count++;let a=this.toasts.open(this.upload(),{status:`success`,label:`Upload finished`,data:{name:`photo-${this.count}.jpg`,size:`${this.count*1.5} MB`}});this.opened.update(s=>s+1),a.closed.subscribe(()=>this.opened.update(s=>s-1))}static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`docs-toast-template`]],viewQuery:function(s,n){s&1&&ah(n.upload,Rs,5),s&2&&wf()},decls:6,vars:1,consts:[[`upload`,``],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,3,`click`],[1,`ms-2`]],template:function(s,n){s&1&&(ce(0,`button`,1),ui(`click`,function(){return n.show()}),Zf(1,`Upload a photo`),vi(),ce(2,`span`,2),Zf(3),vi(),U0(4,Ms,3,2,`ng-template`,null,0,cj)),s&2&&(Tt(3),hg(``,n.opened(),` open`))},dependencies:[f$1],encapsulation:2})};var xs={actions:{html:{code:`<button ngsButton variant="outline" size="sm" (click)="delete()">Delete a file</button>

<ng-template #deleted let-ref="ref">
  report-2025.pdf was moved to the bin.
  <div ngsNotificationActions>
    <button ngsButton size="sm" (click)="undo(ref)">Undo</button>
    <button ngsButton variant="link" size="sm" (click)="ref.close()">Dismiss</button>
  </div>
</ng-template>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;delete()&quot;</span>&gt;</span>Delete a file<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">deleted</span> <span class="hljs-attr">let-ref</span>=<span class="hljs-string">&quot;ref&quot;</span>&gt;</span>
  report-2025.pdf was moved to the bin.
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsNotificationActions</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;undo(ref)&quot;</span>&gt;</span>Undo<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;link&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;ref.close()&quot;</span>&gt;</span>Dismiss<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>`},ts:{code:`import { Component, TemplateRef, inject, viewChild } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsNotificationActions } from '@bootlace/core/notification';
import { NgsToastContext, NgsToastService } from '@bootlace/core/toast';

@Component({
  selector: 'docs-toast-actions',
  imports: [NgsButton, NgsNotificationActions],
  templateUrl: './index.html',
})
export class ToastActionsExample {
  private readonly toasts = inject(NgsToastService);
  private readonly deleted = viewChild.required<TemplateRef<NgsToastContext>>('deleted');

  protected delete(): void {
    // A toast with an action should wait for the user, so it does not close by itself.
    this.toasts.open(this.deleted(), {
      label: 'File deleted',
      autoClose: false,
      status: 'neutral',
    });
  }

  protected undo(ref: { close(): void }): void {
    ref.close();
    this.toasts.open('The file is back.', { status: 'success' });
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">TemplateRef</span>, inject, viewChild } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNotificationActions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/notification&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsToastContext</span>, <span class="hljs-title class_">NgsToastService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/toast&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-toast-actions&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsNotificationActions</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ToastActionsExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> toasts = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsToastService</span>);
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> deleted = viewChild.<span class="hljs-property">required</span>&lt;<span class="hljs-title class_">TemplateRef</span>&lt;<span class="hljs-title class_">NgsToastContext</span>&gt;&gt;(<span class="hljs-string">&#x27;deleted&#x27;</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">delete</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-comment">// A toast with an action should wait for the user, so it does not close by itself.</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">toasts</span>.<span class="hljs-title function_">open</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">deleted</span>(), {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;File deleted&#x27;</span>,
      <span class="hljs-attr">autoClose</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;neutral&#x27;</span>,
    });
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">undo</span>(<span class="hljs-attr">ref</span>: { <span class="hljs-title function_">close</span>(): <span class="hljs-built_in">void</span> }): <span class="hljs-built_in">void</span> {
    ref.<span class="hljs-title function_">close</span>();
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">toasts</span>.<span class="hljs-title function_">open</span>(<span class="hljs-string">&#x27;The file is back.&#x27;</span>, { <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;success&#x27;</span> });
  }
}`}},autoclose:{html:{code:`<div class="row g-2">
  <div class="col-auto">
    <button ngsButton variant="outline" size="sm" (click)="timed()">Auto-close in 4 s</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" size="sm" (click)="persistent()">Persistent</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="text" size="sm" (click)="closeAll()">Close all</button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;timed()&quot;</span>&gt;</span>Auto-close in 4 s<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;persistent()&quot;</span>&gt;</span>Persistent<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;closeAll()&quot;</span>&gt;</span>Close all<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, inject } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsToastService } from '@bootlace/core/toast';

@Component({
  selector: 'docs-toast-autoclose',
  imports: [NgsButton],
  templateUrl: './index.html',
})
export class ToastAutocloseExample {
  private readonly toasts = inject(NgsToastService);

  protected timed(): void {
    // Hover or focus the toast and its timer waits.
    this.toasts.open('Closes itself in 4 seconds. Hover it to keep it.', {
      label: 'Timed',
      autoClose: 4000,
    });
  }

  protected persistent(): void {
    this.toasts.open('Stays until you close it.', { label: 'Persistent', autoClose: false });
  }

  protected closeAll(): void {
    this.toasts.closeAll();
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsToastService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/toast&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-toast-autoclose&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ToastAutocloseExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> toasts = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsToastService</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">timed</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-comment">// Hover or focus the toast and its timer waits.</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">toasts</span>.<span class="hljs-title function_">open</span>(<span class="hljs-string">&#x27;Closes itself in 4 seconds. Hover it to keep it.&#x27;</span>, {
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Timed&#x27;</span>,
      <span class="hljs-attr">autoClose</span>: <span class="hljs-number">4000</span>,
    });
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">persistent</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">toasts</span>.<span class="hljs-title function_">open</span>(<span class="hljs-string">&#x27;Stays until you close it.&#x27;</span>, { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Persistent&#x27;</span>, <span class="hljs-attr">autoClose</span>: <span class="hljs-literal">false</span> });
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">closeAll</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">toasts</span>.<span class="hljs-title function_">closeAll</span>();
  }
}`}},positions:{html:{code:`<div class="row g-2">
  @for (position of positions; track position) {
    <div class="col-6 md:col-4 lg:col-2">
      <button ngsButton variant="outline" size="sm" class="w-100" (click)="show(position)">
        {{ position }}
      </button>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @for (position of positions; track position) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-6 md:col-4 lg:col-2&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;w-100&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;show(position)&quot;</span>&gt;</span>
        {{ position }}
      <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, inject } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsToastPosition, NgsToastService } from '@bootlace/core/toast';

@Component({
  selector: 'docs-toast-positions',
  imports: [NgsButton],
  templateUrl: './index.html',
})
export class ToastPositionsExample {
  private readonly toasts = inject(NgsToastService);

  protected readonly positions: readonly NgsToastPosition[] = [
    'top-start',
    'top-center',
    'top-end',
    'bottom-start',
    'bottom-center',
    'bottom-end',
  ];

  protected show(position: NgsToastPosition): void {
    this.toasts.open(\`Raised at \${position}.\`, { position, label: position });
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsToastPosition</span>, <span class="hljs-title class_">NgsToastService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/toast&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-toast-positions&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ToastPositionsExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> toasts = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsToastService</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">positions</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">NgsToastPosition</span>[] = [
    <span class="hljs-string">&#x27;top-start&#x27;</span>,
    <span class="hljs-string">&#x27;top-center&#x27;</span>,
    <span class="hljs-string">&#x27;top-end&#x27;</span>,
    <span class="hljs-string">&#x27;bottom-start&#x27;</span>,
    <span class="hljs-string">&#x27;bottom-center&#x27;</span>,
    <span class="hljs-string">&#x27;bottom-end&#x27;</span>,
  ];

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">show</span>(<span class="hljs-attr">position</span>: <span class="hljs-title class_">NgsToastPosition</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">toasts</span>.<span class="hljs-title function_">open</span>(<span class="hljs-string">\`Raised at <span class="hljs-subst">\${position}</span>.\`</span>, { position, <span class="hljs-attr">label</span>: position });
  }
}`}},statuses:{html:{code:`<div class="row g-2">
  @for (status of statuses; track status) {
    <div class="col-auto">
      <button ngsButton variant="outline" size="sm" (click)="show(status)">{{ status }}</button>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  @for (status of statuses; track status) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;show(status)&quot;</span>&gt;</span>{{ status }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, inject } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsNotificationStatus } from '@bootlace/core/notification';
import { NgsToastService } from '@bootlace/core/toast';

@Component({
  selector: 'docs-toast-statuses',
  imports: [NgsButton],
  templateUrl: './index.html',
})
export class ToastStatusesExample {
  private readonly toasts = inject(NgsToastService);

  protected readonly statuses: readonly NgsNotificationStatus[] = [
    'info',
    'success',
    'warning',
    'danger',
    'neutral',
  ];

  private readonly messages: Record<NgsNotificationStatus, [label: string, text: string]> = {
    info: ['Export started', 'We will email you when the report is ready.'],
    success: ['Changes saved', 'Your profile is up to date.'],
    warning: ['Session ending', 'You will be signed out in 5 minutes.'],
    danger: ['Payment failed', 'Check your card details and try again.'],
    neutral: ['Draft kept', 'Your draft is stored on this device.'],
  };

  protected show(status: NgsNotificationStatus): void {
    const [label, text] = this.messages[status];
    this.toasts.open(text, { status, label });
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, inject } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNotificationStatus</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/notification&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsToastService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/toast&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-toast-statuses&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ToastStatusesExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> toasts = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsToastService</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">statuses</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">NgsNotificationStatus</span>[] = [
    <span class="hljs-string">&#x27;info&#x27;</span>,
    <span class="hljs-string">&#x27;success&#x27;</span>,
    <span class="hljs-string">&#x27;warning&#x27;</span>,
    <span class="hljs-string">&#x27;danger&#x27;</span>,
    <span class="hljs-string">&#x27;neutral&#x27;</span>,
  ];

  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">messages</span>: <span class="hljs-title class_">Record</span>&lt;<span class="hljs-title class_">NgsNotificationStatus</span>, [<span class="hljs-attr">label</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">text</span>: <span class="hljs-built_in">string</span>]&gt; = {
    <span class="hljs-attr">info</span>: [<span class="hljs-string">&#x27;Export started&#x27;</span>, <span class="hljs-string">&#x27;We will email you when the report is ready.&#x27;</span>],
    <span class="hljs-attr">success</span>: [<span class="hljs-string">&#x27;Changes saved&#x27;</span>, <span class="hljs-string">&#x27;Your profile is up to date.&#x27;</span>],
    <span class="hljs-attr">warning</span>: [<span class="hljs-string">&#x27;Session ending&#x27;</span>, <span class="hljs-string">&#x27;You will be signed out in 5 minutes.&#x27;</span>],
    <span class="hljs-attr">danger</span>: [<span class="hljs-string">&#x27;Payment failed&#x27;</span>, <span class="hljs-string">&#x27;Check your card details and try again.&#x27;</span>],
    <span class="hljs-attr">neutral</span>: [<span class="hljs-string">&#x27;Draft kept&#x27;</span>, <span class="hljs-string">&#x27;Your draft is stored on this device.&#x27;</span>],
  };

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">show</span>(<span class="hljs-attr">status</span>: <span class="hljs-title class_">NgsNotificationStatus</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-keyword">const</span> [label, text] = <span class="hljs-variable language_">this</span>.<span class="hljs-property">messages</span>[status];
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">toasts</span>.<span class="hljs-title function_">open</span>(text, { status, label });
  }
}`}},template:{html:{code:`<button ngsButton variant="outline" size="sm" (click)="show()">Upload a photo</button>
<span class="ms-2">{{ opened() }} open</span>

<ng-template #upload let-data>
  <strong>{{ data.name }}</strong> ({{ data.size }}) is ready to share.
</ng-template>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;show()&quot;</span>&gt;</span>Upload a photo<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ms-2&quot;</span>&gt;</span>{{ opened() }} open<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">upload</span> <span class="hljs-attr">let-data</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ data.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> ({{ data.size }}) is ready to share.
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>`},ts:{code:`import { Component, TemplateRef, inject, signal, viewChild } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsToastContext, NgsToastService } from '@bootlace/core/toast';

interface Upload {
  name: string;
  size: string;
}

@Component({
  selector: 'docs-toast-template',
  imports: [NgsButton],
  templateUrl: './index.html',
})
export class ToastTemplateExample {
  private readonly toasts = inject(NgsToastService);
  private readonly upload = viewChild.required<TemplateRef<NgsToastContext<Upload>>>('upload');
  private count = 0;

  protected readonly opened = signal(0);

  protected show(): void {
    this.count++;
    const ref = this.toasts.open(this.upload(), {
      status: 'success',
      label: 'Upload finished',
      data: { name: \`photo-\${this.count}.jpg\`, size: \`\${this.count * 1.5} MB\` },
    });
    this.opened.update((n) => n + 1);
    ref.closed.subscribe(() => this.opened.update((n) => n - 1));
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">TemplateRef</span>, inject, signal, viewChild } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsToastContext</span>, <span class="hljs-title class_">NgsToastService</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/toast&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Upload</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">size</span>: <span class="hljs-built_in">string</span>;
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-toast-template&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ToastTemplateExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> toasts = <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">NgsToastService</span>);
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> upload = viewChild.<span class="hljs-property">required</span>&lt;<span class="hljs-title class_">TemplateRef</span>&lt;<span class="hljs-title class_">NgsToastContext</span>&lt;<span class="hljs-title class_">Upload</span>&gt;&gt;&gt;(<span class="hljs-string">&#x27;upload&#x27;</span>);
  <span class="hljs-keyword">private</span> count = <span class="hljs-number">0</span>;

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> opened = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">show</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">count</span>++;
    <span class="hljs-keyword">const</span> ref = <span class="hljs-variable language_">this</span>.<span class="hljs-property">toasts</span>.<span class="hljs-title function_">open</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">upload</span>(), {
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;success&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Upload finished&#x27;</span>,
      <span class="hljs-attr">data</span>: { <span class="hljs-attr">name</span>: <span class="hljs-string">\`photo-<span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.count}</span>.jpg\`</span>, <span class="hljs-attr">size</span>: <span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.count * <span class="hljs-number">1.5</span>}</span> MB\`</span> },
    });
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">opened</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">n</span>) =&gt;</span> n + <span class="hljs-number">1</span>);
    ref.<span class="hljs-property">closed</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">opened</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">n</span>) =&gt;</span> n - <span class="hljs-number">1</span>));
  }
}`}}};var vs=class l{tab=Yn(`examples`);sources=xs;statuses=$;autoclose=O;actions=U;template=V;positions=H;static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`docs-toast-page`]],inputs:{tab:[1,`tab`]},decls:104,vars:11,consts:[[`heading`,`Toast`,`package`,`@bootlace/core/toast`,`path`,`/components/toast`,3,`tab`],[1,`docs-page-lead`],[`id`,`statuses`,`heading`,`Statuses`,3,`component`,`sources`],[`id`,`autoclose`,`heading`,`Auto-close and persistent`,3,`component`,`sources`],[`id`,`actions`,`heading`,`With actions`,3,`component`,`sources`],[`id`,`template`,`heading`,`Template with data`,3,`component`,`sources`],[`id`,`positions`,`heading`,`Positions`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(s,n){s&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A timed, stacked message raised from `),ce(3,`code`),Zf(4,`NgsToastService`),vi(),Zf(5,`, in Taiga UI's alert look: a notification on a raised panel that slides in at a corner of the viewport. Toasts close themselves after a few seconds, wait while hovered or focused, and close with their close button or Escape. `),vi(),ce(6,`docs-example`,2)(7,`code`),Zf(8,`toasts.open(content, { status, label })`),vi(),Zf(9,` raises a toast. `),ce(10,`code`),Zf(11,`status`),vi(),Zf(12,` picks the colour and icon, and `),ce(13,`code`),Zf(14,`label`),vi(),Zf(15,` adds a bold heading. Inject the service when the component is created so the live regions are on the page before the first toast. `),vi(),ce(16,`docs-example`,3)(17,`code`),Zf(18,`autoClose`),vi(),Zf(19,` is a time in milliseconds (5000 by default) or `),ce(20,`code`),Zf(21,`false`),vi(),Zf(22,` to keep the toast until it is closed. The timer waits while the pointer or focus is on the toast and restarts when it leaves. `),ce(23,`code`),Zf(24,`open`),vi(),Zf(25,` returns a ref: `),ce(26,`code`),Zf(27,`ref.close()`),vi(),Zf(28,` closes that toast, and `),ce(29,`code`),Zf(30,`closeAll()`),vi(),Zf(31,` on the service closes every one. `),vi(),ce(32,`docs-example`,4),Zf(33,` Pass a template to put buttons in a toast. The template gets the toast's `),ce(34,`code`),Zf(35,`ref`),vi(),Zf(36,` in its context, so an action can close it. A toast with an action should not close by itself: set `),ce(37,`code`),Zf(38,`autoClose: false`),vi(),Zf(39,`. `),vi(),ce(40,`docs-example`,5),Zf(41,` The `),ce(42,`code`),Zf(43,`data`),vi(),Zf(44,` option reaches the template as `),ce(45,`code`),Zf(46,`let-data`),vi(),Zf(47,`. The ref's `),ce(48,`code`),Zf(49,`closed`),vi(),Zf(50,` observable emits once the toast has left the page. `),vi(),ce(51,`docs-example`,6)(52,`code`),Zf(53,`position`),vi(),Zf(54,` is `),ce(55,`code`),Zf(56,`top-end`),vi(),Zf(57,` (default), `),ce(58,`code`),Zf(59,`top-start`),vi(),Zf(60,`, `),ce(61,`code`),Zf(62,`top-center`),vi(),Zf(63,`, `),ce(64,`code`),Zf(65,`bottom-start`),vi(),Zf(66,`, `),ce(67,`code`),Zf(68,`bottom-center`),vi(),Zf(69,` or `),ce(70,`code`),Zf(71,`bottom-end`),vi(),Zf(72,`. Each position stacks on its own, newest away from the edge. Change the default for the app with `),ce(73,`code`),Zf(74,`provideNgsToast()`),vi(),Zf(75,`. `),vi(),ce(76,`section`,7)(77,`h2`,8),Zf(78,`Accessibility`),vi(),ce(79,`p`),Zf(80,` Toasts live in six always-present `),ce(81,`code`),Zf(82,`role="status"`),vi(),Zf(83,` regions (`),ce(84,`code`),Zf(85,`aria-live="polite"`),vi(),Zf(86,`), named "Notifications" through `),ce(87,`code`),Zf(88,`NGS_I18N`),vi(),Zf(89,`. A screen reader announces each toast as it is added, without interrupting. Because the regions exist before the first toast, inject `),ce(90,`code`),Zf(91,`NgsToastService`),vi(),Zf(92,` when your component is created rather than in the click handler. `),vi(),ce(93,`p`),Zf(94,` A timed toast can vanish before it is read, so the timer pauses on hover and on keyboard focus, and messages the user must act on (errors, anything with an action) should be persistent with `),ce(95,`code`),Zf(96,`autoClose: false`),vi(),Zf(97,`. Toasts come last in the tab order. The close button is named "Close", Escape closes the focused toast, and when a focused toast closes, focus returns to the element that had it before. The enter and exit animations are skipped under `),ce(98,`code`),Zf(99,`prefers-reduced-motion`),vi(),Zf(100,` and when `),ce(101,`code`),Zf(102,`NGS_CONFIG.animation`),vi(),Zf(103,` is off. `),vi()()()),s&2&&(Ot(`tab`,n.tab()),Tt(6),Ot(`component`,n.statuses)(`sources`,n.sources.statuses),Tt(10),Ot(`component`,n.autoclose)(`sources`,n.sources.autoclose),Tt(16),Ot(`component`,n.actions)(`sources`,n.sources.actions),Tt(8),Ot(`component`,n.template)(`sources`,n.sources.template),Tt(11),Ot(`component`,n.positions)(`sources`,n.sources.positions))},dependencies:[ue$1,pe],encapsulation:2})};export{vs as ToastPage};