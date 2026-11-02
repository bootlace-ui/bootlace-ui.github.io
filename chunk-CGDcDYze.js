import{A as J4,An as hg,At as W,B as Kf,Br as ui,Cr as rf,Ft as XF,G as Lr,Gr as vf,Gt as Yn,I as K,It as XR,Jt as Zf,L as KC,Ln as jn,O as Ih,Pt as XC,Rn as jo,Rr as ue,Sn as fh,Tn as gf,Vt as Y3,W as Ll,Wr as ve,Z as Na,Zn as m7,Zr as wf,_ as Ea,_r as q3,a as AF,bn as f7,ei as xh,en as ah,et as Ot,i as $t,ir as nf,j as JC,li as zf,mn as dh,mr as pa,mt as So,nr as nA,on as ce,q as Mh,qr as vi,r as $f,st as RF,tt as P0,un as cn,ur as of,ut as SF,wn as gU,x as Gf,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import{A as ll,F as qn,I as rt,M as ms,N as pn,T as ds,k as hs,m as Ot$1,n as Ba,r as Br,w as cs,z as zr}from"./chunk-DycqepRM.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f$1}from"./chunk-_QnoVoFv.js";function Rs(i,n){let e=(n??``).split(`,`).map(p=>p.trim().toLowerCase()).filter(Boolean);if(!e.length)return!0;let a=i.name.toLowerCase(),o=i.type.toLowerCase();return e.some(p=>p.startsWith(`.`)?a.endsWith(p):p.endsWith(`/*`)?o.startsWith(p.slice(0,-1)):o===p)}var Is=[`byte`,`kilobyte`,`megabyte`,`gigabyte`,`terabyte`];function L(i,n){let e=Math.max(i,0),a=0;for(;e>=1e3&&a<Is.length-1;)e/=1e3,a++;return new Intl.NumberFormat(n,{style:`unit`,unit:Is[a],unitDisplay:`short`,maximumFractionDigits:a===0?0:1}).format(e)}var As=[`picker`];function Vs(i,n){if(i&1&&(ce(0,`p`,5),Zf(1),vi()),i&2){let e=vf();Ot(`id`,e.hintId),Tt(),fh(e.hint())}}function Ls(i,n){if(i&1&&(ce(0,`li`),ue(1,`ngs-icon`,9),ce(2,`span`),Zf(3),vi()()),i&2){let e=n.$implicit,a=vf(2);Tt(),Ot(`icon`,a.attention),Tt(2),fh(a.reasonText(e))}}function Ws(i,n){if(i&1&&(ce(0,`ul`,6),of(1,Ls,4,2,`li`,null,JC),vi()),i&2){let e=vf();Tt(),rf(e.rejections())}}function Hs(i,n){if(i&1&&Zf(0),i&2){let e=vf(3);hg(` · `,e.i18n.uploaded,` `)}}function Gs(i,n){if(i&1&&Zf(0),i&2){vf();let e=Gf(0),a=vf(2);hg(` · `,a.percent(e),`% `)}}function $s(i,n){if(i&1&&(ce(0,`div`,16),ue(1,`div`,19),vi()),i&2){let e=vf().$implicit,a=Gf(0),o=vf(2);Lr(`aria-label`,o.text(o.i18n.progress,e.name))(`aria-valuenow`,o.percent(a)),Tt(),Na(`width`,o.percent(a),`%`)}}function Os(i,n){if(i&1&&(ce(0,`div`,17),Zf(1),vi()),i&2){let e=vf().$index,a=Gf(0),o=vf(2);Ot(`id`,o.id+`-error-`+e),Tt(),fh(a?.error)}}function Qs(i,n){if(i&1){let e=gf();Ih(0),ce(1,`li`,11),ue(2,`ngs-icon`,12),ce(3,`div`,13)(4,`div`,14),Zf(5),vi(),ce(6,`div`,15),Zf(7),KC(8,Hs,1,1)(9,Gs,1,1),vi(),KC(10,$s,2,4,`div`,16),KC(11,Os,2,2,`div`,17),vi(),ce(12,`button`,18),ui(`click`,function(){let o=q3(e),p=o.$implicit,_=o.$index,y=vf(2);return Y3(y.remove(p,_))}),ue(13,`ngs-icon`,9),vi()()}if(i&2){let e=n.$implicit,a=n.$index,o=vf(2),p=zf(o.uploads().get(e));Tt(),dh(`has-error`,!!p?.error)(`is-done`,o.isDone(p)),Tt(),Ot(`icon`,p?.error?o.attention:o.isDone(p)?o.done:o.fileIcon),Tt(3),fh(e.name),Tt(2),hg(` `,o.size(e),` `),Tt(),XC(o.isDone(p)?8:p?.progress!==void 0&&!p?.error?9:-1),Tt(2),XC(p?.progress!==void 0&&!o.isDone(p)&&!p?.error?10:-1),Tt(),XC(p?.error?11:-1),Tt(),Ot(`disabled`,o.isDisabled()),Lr(`aria-label`,o.text(o.i18n.remove,e.name))(`aria-describedby`,p?.error?o.id+`-error-`+a:null),Tt(),Ot(`icon`,o.close)}}function Zs(i,n){if(i&1&&(ce(0,`ul`,7),of(1,Qs,14,15,`li`,10,nf),vi()),i&2){let e=vf();Lr(`aria-label`,e.i18n.listLabel),Tt(),rf(e.files())}}var Ps=i=>{let n=i==null||i===``?NaN:Number(i);return Number.isFinite(n)&&n>0?n:void 0};var f=class i extends qn{i18n=k(o).file;locale=k(Ea);picker=nA.required(`picker`);host=k(So);environment=k(cn);id=Ba(`ngs-file`);hintId=`${this.id}-hint`;inbox=gU;fileIcon=XF;attention=SF;done=RF;close=AF;multiple=Yn(!1,{transform:$t});accept=Yn(``);maxSize=Yn(void 0,{transform:Ps});maxFiles=Yn(void 0,{transform:Ps});label=Yn();hint=Yn();uploads=Yn(/* @__PURE__ */ new Map);added=XR();rejected=XR();removed=XR();files=jo(()=>this.value()??[]);dragging=W(!1);rejections=W([]);announcement=W(``);title=jo(()=>this.label()??(this.multiple()?this.i18n.titleMultiple:this.i18n.title));depth=0;settled=/* @__PURE__ */ new WeakMap;constructor(){super(),J4(()=>{let n=this.uploads(),e=[];for(let a of this.files()){let o=n.get(a),p=o?.error?`error`:this.isDone(o)?`done`:`pending`,_=this.settled.get(a);this.settled.set(a,p),_!==void 0&&_!==p&&(p===`done`?e.push(this.text(this.i18n.uploadDone,a.name)):p===`error`&&e.push(this.text(this.i18n.uploadFailed,a.name).replace(`{error}`,o.error)))}e.length&&K(()=>this.announcement.set(e.join(`. `)))})}open(){this.isDisabled()||this.picker().nativeElement.click()}focus(){this.picker().nativeElement.focus()}isDone(n){return!n?.error&&(n?.progress??0)>=100}percent(n){return Math.round(Math.min(Math.max(n?.progress??0,0),100))}size(n){return L(n.size,this.locale)}text(n,e){return n.replace(`{name}`,e)}reasonText(n){let e={type:this.i18n.rejectedType,size:this.i18n.rejectedSize.replace(`{max}`,L(this.maxSize()??0,this.locale)),count:this.i18n.rejectedCount.replace(`{max}`,String(this.limit()))};return this.text(e[n.reason],n.file.name)}limit(){return this.multiple()?this.maxFiles()??1/0:1}picked(n){let e=n.target;this.receive(Array.from(e.files??[])),e.value=``}dragEnter(n){this.carriesFiles(n)&&(n.preventDefault(),this.depth++,this.isDisabled()||this.dragging.set(!0))}dragOver(n){this.carriesFiles(n)&&(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=this.isDisabled()?`none`:`copy`))}dragLeave(n){this.carriesFiles(n)&&(this.depth=Math.max(this.depth-1,0),this.depth||this.dragging.set(!1))}drop(n){this.carriesFiles(n)&&(n.preventDefault(),this.depth=0,this.dragging.set(!1),this.receive(Array.from(n.dataTransfer?.files??[])))}carriesFiles(n){return!!n.dataTransfer&&Array.from(n.dataTransfer.types).includes(`Files`)}receive(n){if(this.isDisabled()||!n.length)return;let e=this.multiple()?this.files():[],a=this.limit()-e.length,o=[],p=[];for(let y of n){let W=this.maxSize();Rs(y,this.accept())?W!==void 0&&y.size>W?p.push({file:y,reason:`size`}):o.length>=a?p.push({file:y,reason:`count`}):o.push(y):p.push({file:y,reason:`type`})}this.rejections.set(p);let _=[];o.length&&(this.setValue([...e,...o]),_.push(o.length===1?this.text(this.i18n.added,o[0].name):this.i18n.addedMany.replace(`{count}`,String(o.length))),this.added.emit(o)),p.length&&(_.push(...p.map(y=>this.reasonText(y))),this.rejected.emit(p)),this.announcement.set(_.join(`. `))}remove(n,e){if(this.isDisabled())return;let a=this.files().filter(o=>o!==n);this.setValue(a),this.removed.emit(n),this.announcement.set(this.text(this.i18n.removed,n.name)),pa(()=>{let o=this.host.nativeElement.querySelectorAll(`.ngs-file-remove`);(o[Math.min(e,o.length-1)]??this.picker().nativeElement).focus()},{injector:this.environment})}static ɵfac=function(e){return new(e||i)};static ɵcmp=ve({type:i,selectors:[[`ngs-file-upload`]],viewQuery:function(e,a){e&1&&ah(a.picker,As,5),e&2&&wf()},hostAttrs:[1,`ngs-file-upload`],inputs:{multiple:[1,`multiple`],accept:[1,`accept`],maxSize:[1,`maxSize`],maxFiles:[1,`maxFiles`],label:[1,`label`],hint:[1,`hint`],uploads:[1,`uploads`]},outputs:{added:`added`,rejected:`rejected`,removed:`removed`},features:[Kf([ll(()=>i)]),P0],decls:11,vars:19,consts:[[`picker`,``],[1,`ngs-file-zone`,3,`dragenter`,`dragover`,`dragleave`,`drop`],[`type`,`file`,1,`ngs-file-input`,`visually-hidden`,3,`change`,`blur`,`id`,`multiple`,`disabled`],[`size`,`3rem`,1,`ngs-file-icon`,3,`icon`],[1,`ngs-file-label`,3,`for`],[1,`ngs-file-hint`,3,`id`],[1,`ngs-file-rejections`],[1,`ngs-file-list`],[`role`,`status`,`aria-live`,`polite`,`aria-atomic`,`true`,1,`visually-hidden`],[3,`icon`],[1,`ngs-file-item`,3,`has-error`,`is-done`],[1,`ngs-file-item`],[1,`ngs-file-item-icon`,3,`icon`],[1,`ngs-file-main`],[1,`ngs-file-name`],[1,`ngs-file-meta`],[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,1,`progress`],[1,`ngs-file-error`,3,`id`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-icon`,`btn-text`,`ngs-file-remove`,3,`click`,`disabled`],[1,`progress-bar`]],template:function(e,a){e&1&&(ce(0,`div`,1),ui(`dragenter`,function(p){return a.dragEnter(p)})(`dragover`,function(p){return a.dragOver(p)})(`dragleave`,function(p){return a.dragLeave(p)})(`drop`,function(p){return a.drop(p)}),ce(1,`input`,2,0),ui(`change`,function(p){return a.picked(p)})(`blur`,function(){return a.markTouched()}),vi(),ue(3,`ngs-icon`,3),ce(4,`label`,4),Zf(5),vi(),KC(6,Vs,2,2,`p`,5),vi(),KC(7,Ws,3,0,`ul`,6),KC(8,Zs,3,1,`ul`,7),ce(9,`span`,8),Zf(10),vi()),e&2&&(dh(`is-dragover`,a.dragging())(`is-invalid`,a.isInvalid())(`is-disabled`,a.isDisabled()),Tt(),Ot(`id`,a.id)(`multiple`,a.multiple())(`disabled`,a.isDisabled()),Lr(`accept`,a.accept()||null)(`aria-invalid`,a.isInvalid()?`true`:null)(`aria-describedby`,a.hint()?a.hintId:null),Tt(2),Ot(`icon`,a.inbox),Tt(),Ot(`for`,a.id),Tt(),fh(a.title()),Tt(),XC(a.hint()?6:-1),Tt(),XC(a.rejections().length?7:-1),Tt(),XC(a.files().length?8:-1),Tt(2),fh(a.announcement()))},dependencies:[Ll],encapsulation:2})};var R=class i{files=W(null);names=jo(()=>this.files()?.map(n=>n.name).join(`, `)||`none`);static ɵfac=function(e){return new(e||i)};static ɵcmp=ve({type:i,selectors:[[`docs-file-basic`]],decls:8,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`lg:col-8`],[`multiple`,``,`hint`,`Upload a single file or several at once. Files stay in the browser until you submit.`,3,`valueChange`,`value`],[1,`col-12`,`lg:col-4`],[1,`mb-0`]],template:function(e,a){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-file-upload`,2),xh(`valueChange`,function(p){return $f(a.files,p)||(a.files=p),p}),vi()(),ce(3,`div`,3)(4,`p`,4),Zf(5,` Chosen: `),ce(6,`code`),Zf(7),vi()()()()),e&2&&(Tt(2),Mh(`value`,a.files),Tt(5),fh(a.names()))},dependencies:[f],encapsulation:2})};function Js(i,n){i&1&&(ce(0,`div`,3),Zf(1,`Add at least one document.`),vi())}var P=class i{form=new rt({documents:new pn([],{nonNullable:!0,validators:Ot$1.required})});result=W(``);submit(){this.form.markAllAsTouched(),this.result.set(this.form.valid?this.form.controls.documents.value.map(n=>n.name).join(`, `):``)}toggle(){this.form.disabled?this.form.enable():this.form.disable()}static ɵfac=function(e){return new(e||i)};static ɵcmp=ve({type:i,selectors:[[`docs-file-forms`]],decls:14,vars:4,consts:[[1,`row`,`g-3`,3,`ngSubmit`,`formGroup`],[1,`col-12`,`lg:col-8`],[`formControlName`,`documents`,`multiple`,``,`accept`,`.pdf,.doc,.docx`,`hint`,`PDF or Word documents. Required.`],[1,`text-danger`,`small`],[1,`col-12`],[1,`col-auto`],[`ngsButton`,``,`type`,`submit`],[`ngsButton`,``,`variant`,`outline`,`type`,`button`,3,`click`],[1,`col-auto`,`align-self-center`]],template:function(e,a){e&1&&(ce(0,`form`,0),ui(`ngSubmit`,function(){return a.submit()}),ce(1,`div`,1)(2,`ngs-file-upload`,2),f7(),vi(),KC(3,Js,2,0,`div`,3),vi(),ue(4,`div`,4),ce(5,`div`,5)(6,`button`,6),Zf(7,`Submit`),vi()(),ce(8,`div`,5)(9,`button`,7),ui(`click`,function(){return a.toggle()}),Zf(10),vi()(),ce(11,`div`,8)(12,`code`),Zf(13),vi()()()),e&2&&(Ot(`formGroup`,a.form),Tt(2),m7(),Tt(),XC(a.form.controls.documents.invalid&&a.form.controls.documents.touched?3:-1),Tt(7),hg(` `,a.form.disabled?`Enable`:`Disable`,` `),Tt(3),fh(a.result()))},dependencies:[f,f$1,ms,hs,cs,ds,Br,zr],encapsulation:2})};var z=class i{static ɵfac=function(e){return new(e||i)};static ɵcmp=ve({type:i,selectors:[[`docs-file-states`]],decls:7,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`lg:col-6`],[`disabled`,``,`hint`,`Disabled.`],[`invalid`,``,`hint`,`Invalid: a file is required.`],[`label`,`Drop a photo here`,`accept`,`image/*`,`hint`,`One file; a new choice replaces the current one.`]],template:function(e,a){e&1&&(ce(0,`div`,0)(1,`div`,1),ue(2,`ngs-file-upload`,2),vi(),ce(3,`div`,1),ue(4,`ngs-file-upload`,3),vi(),ce(5,`div`,1),ue(6,`ngs-file-upload`,4),vi()())},dependencies:[f],encapsulation:2})};var B=class i{files=W(null);uploads=W(/* @__PURE__ */ new Map);timers=/* @__PURE__ */ new Map;constructor(){k(jn).onDestroy(()=>this.timers.forEach(n=>clearInterval(n)))}upload(n){for(let e of n){this.set(e,{progress:0});let a=setInterval(()=>{let o=(this.uploads().get(e)?.progress??0)+10+Math.random()*15;e.name.includes(`fail`)&&o>60?(this.stop(e),this.set(e,{error:`The server rejected this file. Remove it and try again.`})):o>=100?(this.stop(e),this.set(e,{progress:100})):this.set(e,{progress:o})},400);this.timers.set(e,a)}}cancel(n){this.stop(n),this.uploads.update(e=>{let a=new Map(e);return a.delete(n),a})}set(n,e){this.uploads.update(a=>new Map(a).set(n,e))}stop(n){clearInterval(this.timers.get(n)),this.timers.delete(n)}static ɵfac=function(e){return new(e||i)};static ɵcmp=ve({type:i,selectors:[[`docs-file-upload`]],decls:3,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`lg:col-8`],[`multiple`,``,`hint`,`Files with “fail” in the name are rejected by the fake server.`,3,`valueChange`,`added`,`removed`,`value`,`uploads`]],template:function(e,a){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-file-upload`,2),xh(`valueChange`,function(p){return $f(a.files,p)||(a.files=p),p}),ui(`added`,function(p){return a.upload(p)})(`removed`,function(p){return a.cancel(p)}),vi()()()),e&2&&(Tt(2),Mh(`value`,a.files),Ot(`uploads`,a.uploads()))},dependencies:[f],encapsulation:2})};var Ks=(i,n)=>n.file;function Xs(i,n){if(i&1&&(ce(0,`li`)(1,`code`),Zf(2),vi(),Zf(3),vi()),i&2){let e=n.$implicit;Tt(2),fh(e.file.name),Tt(),hg(` (`,e.reason,`) `)}}function Ys(i,n){i&1&&(ce(0,`li`),Zf(1,`none`),vi())}var A=class i{files=W(null);rejected=W([]);static ɵfac=function(e){return new(e||i)};static ɵcmp=ve({type:i,selectors:[[`docs-file-validation`]],decls:10,vars:4,consts:[[1,`row`,`g-3`],[1,`col-12`,`lg:col-8`],[`multiple`,``,`accept`,`image/*,.pdf`,`hint`,`Images or PDFs, up to 1 MB each, at most 3 files.`,3,`valueChange`,`rejected`,`maxSize`,`maxFiles`,`value`],[1,`col-12`,`lg:col-4`],[1,`mb-1`],[1,`mb-0`]],template:function(e,a){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-file-upload`,2),xh(`valueChange`,function(p){return $f(a.files,p)||(a.files=p),p}),ui(`rejected`,function(p){return a.rejected.set(p)}),vi()(),ce(3,`div`,3)(4,`p`,4),Zf(5,`Last rejected:`),vi(),ce(6,`ul`,5),of(7,Xs,4,2,`li`,null,Ks,!1,Ys,2,0,`li`),vi()()()),e&2&&(Tt(2),Ot(`maxSize`,1e6)(`maxFiles`,3),Mh(`value`,a.files),Tt(5),rf(a.rejected()))},dependencies:[f],encapsulation:2})};var zs={basic:{html:{code:`<div class="row g-3">
  <div class="col-12 lg:col-8">
    <ngs-file-upload
      multiple
      hint="Upload a single file or several at once. Files stay in the browser until you submit."
      [(value)]="files"
    />
  </div>
  <div class="col-12 lg:col-4">
    <p class="mb-0">
      Chosen: <code>{{ names() }}</code>
    </p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-file-upload</span>
      <span class="hljs-attr">multiple</span>
      <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;Upload a single file or several at once. Files stay in the browser until you submit.&quot;</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;files&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>
      Chosen: <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ names() }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, computed, signal } from '@angular/core';
import { NgsFileUpload } from '@bootlace/core/file';

@Component({
  selector: 'docs-file-basic',
  imports: [NgsFileUpload],
  templateUrl: './index.html',
})
export class FileBasicExample {
  protected readonly files = signal<File[] | null>(null);
  protected readonly names = computed(
    () =>
      this.files()
        ?.map((f) => f.name)
        .join(', ') || 'none',
  );
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, computed, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFileUpload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/file&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-file-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFileUpload</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FileBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> files = signal&lt;<span class="hljs-title class_">File</span>[] | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> names = <span class="hljs-title function_">computed</span>(
    <span class="hljs-function">() =&gt;</span>
      <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">files</span>()
        ?.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">f</span>) =&gt;</span> f.<span class="hljs-property">name</span>)
        .<span class="hljs-title function_">join</span>(<span class="hljs-string">&#x27;, &#x27;</span>) || <span class="hljs-string">&#x27;none&#x27;</span>,
  );
}`}},forms:{html:{code:`<form class="row g-3" [formGroup]="form" (ngSubmit)="submit()">
  <div class="col-12 lg:col-8">
    <ngs-file-upload
      formControlName="documents"
      multiple
      accept=".pdf,.doc,.docx"
      hint="PDF or Word documents. Required."
    />
    @if (form.controls.documents.invalid && form.controls.documents.touched) {
      <div class="text-danger small">Add at least one document.</div>
    }
  </div>
  <div class="col-12"></div>
  <div class="col-auto">
    <button ngsButton type="submit">Submit</button>
  </div>
  <div class="col-auto">
    <button ngsButton variant="outline" type="button" (click)="toggle()">
      {{ form.disabled ? 'Enable' : 'Disable' }}
    </button>
  </div>
  <div class="col-auto align-self-center">
    <code>{{ result() }}</code>
  </div>
</form>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;form&quot;</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">&quot;submit()&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-file-upload</span>
      <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;documents&quot;</span>
      <span class="hljs-attr">multiple</span>
      <span class="hljs-attr">accept</span>=<span class="hljs-string">&quot;.pdf,.doc,.docx&quot;</span>
      <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;PDF or Word documents. Required.&quot;</span>
    /&gt;</span>
    @if (form.controls.documents.invalid &amp;&amp; form.controls.documents.touched) {
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;text-danger small&quot;</span>&gt;</span>Add at least one document.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;toggle()&quot;</span>&gt;</span>
      {{ form.disabled ? &#x27;Enable&#x27; : &#x27;Disable&#x27; }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto align-self-center&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ result() }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgsButton } from '@bootlace/core/button';
import { NgsFileUpload } from '@bootlace/core/file';

@Component({
  selector: 'docs-file-forms',
  imports: [NgsFileUpload, NgsButton, ReactiveFormsModule],
  templateUrl: './index.html',
})
export class FileFormsExample {
  protected readonly form = new FormGroup({
    documents: new FormControl<File[]>([], {
      nonNullable: true,
      validators: Validators.required,
    }),
  });
  protected readonly result = signal('');

  protected submit(): void {
    // Touched and invalid controls show their error state on their own.
    this.form.markAllAsTouched();
    this.result.set(
      this.form.valid ? this.form.controls.documents.value.map((f) => f.name).join(', ') : '',
    );
  }

  protected toggle(): void {
    if (this.form.disabled) this.form.enable();
    else this.form.disable();
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">Validators</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFileUpload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/file&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-file-forms&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFileUpload</span>, <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">ReactiveFormsModule</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FileFormsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> form = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormGroup</span>({
    <span class="hljs-attr">documents</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>&lt;<span class="hljs-title class_">File</span>[]&gt;([], {
      <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">validators</span>: <span class="hljs-title class_">Validators</span>.<span class="hljs-property">required</span>,
    }),
  });
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> result = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;&#x27;</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">submit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-comment">// Touched and invalid controls show their error state on their own.</span>
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-title function_">markAllAsTouched</span>();
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">result</span>.<span class="hljs-title function_">set</span>(
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">valid</span> ? <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">controls</span>.<span class="hljs-property">documents</span>.<span class="hljs-property">value</span>.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">f</span>) =&gt;</span> f.<span class="hljs-property">name</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#x27;, &#x27;</span>) : <span class="hljs-string">&#x27;&#x27;</span>,
    );
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">toggle</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-keyword">if</span> (<span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">disabled</span>) <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-title function_">enable</span>();
    <span class="hljs-keyword">else</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-title function_">disable</span>();
  }
}`}},states:{html:{code:`<div class="row g-3">
  <div class="col-12 lg:col-6">
    <ngs-file-upload disabled hint="Disabled." />
  </div>
  <div class="col-12 lg:col-6">
    <ngs-file-upload invalid hint="Invalid: a file is required." />
  </div>
  <div class="col-12 lg:col-6">
    <ngs-file-upload
      label="Drop a photo here"
      accept="image/*"
      hint="One file; a new choice replaces the current one."
    />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-file-upload</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;Disabled.&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-file-upload</span> <span class="hljs-attr">invalid</span> <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;Invalid: a file is required.&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-file-upload</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Drop a photo here&quot;</span>
      <span class="hljs-attr">accept</span>=<span class="hljs-string">&quot;image/*&quot;</span>
      <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;One file; a new choice replaces the current one.&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsFileUpload } from '@bootlace/core/file';

@Component({
  selector: 'docs-file-states',
  imports: [NgsFileUpload],
  templateUrl: './index.html',
})
export class FileStatesExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFileUpload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/file&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-file-states&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFileUpload</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FileStatesExample</span> {}`}},upload:{html:{code:`<div class="row g-3">
  <div class="col-12 lg:col-8">
    <ngs-file-upload
      multiple
      hint="Files with \u201Cfail\u201D in the name are rejected by the fake server."
      [(value)]="files"
      [uploads]="uploads()"
      (added)="upload($event)"
      (removed)="cancel($event)"
    />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-file-upload</span>
      <span class="hljs-attr">multiple</span>
      <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;Files with \u201Cfail\u201D in the name are rejected by the fake server.&quot;</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;files&quot;</span>
      [<span class="hljs-attr">uploads</span>]=<span class="hljs-string">&quot;uploads()&quot;</span>
      (<span class="hljs-attr">added</span>)=<span class="hljs-string">&quot;upload($event)&quot;</span>
      (<span class="hljs-attr">removed</span>)=<span class="hljs-string">&quot;cancel($event)&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, DestroyRef, inject, signal } from '@angular/core';
import { NgsFileUpload, NgsFileUploadState } from '@bootlace/core/file';

/**
 * The component does no HTTP. The app starts a request per added file and reports progress by
 * passing a new \`uploads\` map. Here a timer stands in for the request; with \`HttpClient\` use
 * \`reportProgress: true\` and map \`HttpEventType.UploadProgress\` to \`progress\`.
 */
@Component({
  selector: 'docs-file-upload',
  imports: [NgsFileUpload],
  templateUrl: './index.html',
})
export class FileUploadExample {
  protected readonly files = signal<File[] | null>(null);
  protected readonly uploads = signal<ReadonlyMap<File, NgsFileUploadState>>(new Map());

  private readonly timers = new Map<File, ReturnType<typeof setInterval>>();

  constructor() {
    inject(DestroyRef).onDestroy(() => this.timers.forEach((timer) => clearInterval(timer)));
  }

  protected upload(added: File[]): void {
    for (const file of added) {
      this.set(file, { progress: 0 });
      const timer = setInterval(() => {
        const progress = (this.uploads().get(file)?.progress ?? 0) + 10 + Math.random() * 15;
        if (file.name.includes('fail') && progress > 60) {
          this.stop(file);
          this.set(file, { error: 'The server rejected this file. Remove it and try again.' });
        } else if (progress >= 100) {
          this.stop(file);
          this.set(file, { progress: 100 });
        } else {
          this.set(file, { progress });
        }
      }, 400);
      this.timers.set(file, timer);
    }
  }

  protected cancel(file: File): void {
    this.stop(file);
    this.uploads.update((map) => {
      const next = new Map(map);
      next.delete(file);
      return next;
    });
  }

  private set(file: File, state: NgsFileUploadState): void {
    this.uploads.update((map) => new Map(map).set(file, state));
  }

  private stop(file: File): void {
    clearInterval(this.timers.get(file));
    this.timers.delete(file);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">DestroyRef</span>, inject, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFileUpload</span>, <span class="hljs-title class_">NgsFileUploadState</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/file&#x27;</span>;

<span class="hljs-comment">/**
 * The component does no HTTP. The app starts a request per added file and reports progress by
 * passing a new \`uploads\` map. Here a timer stands in for the request; with \`HttpClient\` use
 * \`reportProgress: true\` and map \`HttpEventType.UploadProgress\` to \`progress\`.
 */</span>
<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-file-upload&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFileUpload</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FileUploadExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> files = signal&lt;<span class="hljs-title class_">File</span>[] | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> uploads = signal&lt;<span class="hljs-title class_">ReadonlyMap</span>&lt;<span class="hljs-title class_">File</span>, <span class="hljs-title class_">NgsFileUploadState</span>&gt;&gt;(<span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>());

  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> timers = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>&lt;<span class="hljs-title class_">File</span>, <span class="hljs-title class_">ReturnType</span>&lt;<span class="hljs-keyword">typeof</span> <span class="hljs-built_in">setInterval</span>&gt;&gt;();

  <span class="hljs-title function_">constructor</span>(<span class="hljs-params"></span>) {
    <span class="hljs-title function_">inject</span>(<span class="hljs-title class_">DestroyRef</span>).<span class="hljs-title function_">onDestroy</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">timers</span>.<span class="hljs-title function_">forEach</span>(<span class="hljs-function">(<span class="hljs-params">timer</span>) =&gt;</span> <span class="hljs-built_in">clearInterval</span>(timer)));
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">upload</span>(<span class="hljs-attr">added</span>: <span class="hljs-title class_">File</span>[]): <span class="hljs-built_in">void</span> {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> file <span class="hljs-keyword">of</span> added) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">set</span>(file, { <span class="hljs-attr">progress</span>: <span class="hljs-number">0</span> });
      <span class="hljs-keyword">const</span> timer = <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">const</span> progress = (<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">uploads</span>().<span class="hljs-title function_">get</span>(file)?.<span class="hljs-property">progress</span> ?? <span class="hljs-number">0</span>) + <span class="hljs-number">10</span> + <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">random</span>() * <span class="hljs-number">15</span>;
        <span class="hljs-keyword">if</span> (file.<span class="hljs-property">name</span>.<span class="hljs-title function_">includes</span>(<span class="hljs-string">&#x27;fail&#x27;</span>) &amp;&amp; progress &gt; <span class="hljs-number">60</span>) {
          <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">stop</span>(file);
          <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">set</span>(file, { <span class="hljs-attr">error</span>: <span class="hljs-string">&#x27;The server rejected this file. Remove it and try again.&#x27;</span> });
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (progress &gt;= <span class="hljs-number">100</span>) {
          <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">stop</span>(file);
          <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">set</span>(file, { <span class="hljs-attr">progress</span>: <span class="hljs-number">100</span> });
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">set</span>(file, { progress });
        }
      }, <span class="hljs-number">400</span>);
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">timers</span>.<span class="hljs-title function_">set</span>(file, timer);
    }
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">cancel</span>(<span class="hljs-attr">file</span>: <span class="hljs-title class_">File</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">stop</span>(file);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">uploads</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">map</span>) =&gt;</span> {
      <span class="hljs-keyword">const</span> next = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>(map);
      next.<span class="hljs-title function_">delete</span>(file);
      <span class="hljs-keyword">return</span> next;
    });
  }

  <span class="hljs-keyword">private</span> <span class="hljs-title function_">set</span>(<span class="hljs-attr">file</span>: <span class="hljs-title class_">File</span>, <span class="hljs-attr">state</span>: <span class="hljs-title class_">NgsFileUploadState</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">uploads</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">map</span>) =&gt;</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Map</span>(map).<span class="hljs-title function_">set</span>(file, state));
  }

  <span class="hljs-keyword">private</span> <span class="hljs-title function_">stop</span>(<span class="hljs-attr">file</span>: <span class="hljs-title class_">File</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-built_in">clearInterval</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">timers</span>.<span class="hljs-title function_">get</span>(file));
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">timers</span>.<span class="hljs-title function_">delete</span>(file);
  }
}`}},validation:{html:{code:`<div class="row g-3">
  <div class="col-12 lg:col-8">
    <ngs-file-upload
      multiple
      accept="image/*,.pdf"
      [maxSize]="1000000"
      [maxFiles]="3"
      hint="Images or PDFs, up to 1 MB each, at most 3 files."
      [(value)]="files"
      (rejected)="rejected.set($event)"
    />
  </div>
  <div class="col-12 lg:col-4">
    <p class="mb-1">Last rejected:</p>
    <ul class="mb-0">
      @for (item of rejected(); track item.file) {
        <li>
          <code>{{ item.file.name }}</code> ({{ item.reason }})
        </li>
      } @empty {
        <li>none</li>
      }
    </ul>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-file-upload</span>
      <span class="hljs-attr">multiple</span>
      <span class="hljs-attr">accept</span>=<span class="hljs-string">&quot;image/*,.pdf&quot;</span>
      [<span class="hljs-attr">maxSize</span>]=<span class="hljs-string">&quot;1000000&quot;</span>
      [<span class="hljs-attr">maxFiles</span>]=<span class="hljs-string">&quot;3&quot;</span>
      <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;Images or PDFs, up to 1 MB each, at most 3 files.&quot;</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;files&quot;</span>
      (<span class="hljs-attr">rejected</span>)=<span class="hljs-string">&quot;rejected.set($event)&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Last rejected:<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>
      @for (item of rejected(); track item.file) {
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ item.file.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> ({{ item.reason }})
        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      } @empty {
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>none<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsFileRejection, NgsFileUpload } from '@bootlace/core/file';

@Component({
  selector: 'docs-file-validation',
  imports: [NgsFileUpload],
  templateUrl: './index.html',
})
export class FileValidationExample {
  protected readonly files = signal<File[] | null>(null);
  protected readonly rejected = signal<NgsFileRejection[]>([]);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsFileRejection</span>, <span class="hljs-title class_">NgsFileUpload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/file&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-file-validation&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsFileUpload</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">FileValidationExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> files = signal&lt;<span class="hljs-title class_">File</span>[] | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> rejected = signal&lt;<span class="hljs-title class_">NgsFileRejection</span>[]&gt;([]);
}`}}};var Bs=class i{tab=Yn(`examples`);sources=zs;basic=R;validation=A;upload=B;forms=P;states=z;static ɵfac=function(e){return new(e||i)};static ɵcmp=ve({type:i,selectors:[[`docs-file-page`]],inputs:{tab:[1,`tab`]},decls:139,vars:11,consts:[[`heading`,`File upload`,`package`,`@bootlace/core/file`,`path`,`/file`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`validation`,`heading`,`Validation`,3,`component`,`sources`],[`id`,`upload`,`heading`,`Upload progress`,3,`component`,`sources`],[`id`,`forms`,`heading`,`Forms`,3,`component`,`sources`],[`id`,`states`,`heading`,`States`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(e,a){e&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A drag-and-drop dropzone over a real `),ce(3,`code`),Zf(4,`<input type="file">`),vi(),Zf(5,`, after the upload dragger of NG-Zorro, with a list of the chosen files below it: name, size, progress, error and a remove button. The value is the list of `),ce(6,`code`),Zf(7,`File`),vi(),Zf(8,`s. The component does no HTTP: the app uploads the files and reports progress back. `),vi(),ce(9,`docs-example`,2),Zf(10,` Click the area, press Enter or Space while it is focused, or drop files on it. `),ce(11,`code`),Zf(12,`multiple`),vi(),Zf(13,` allows several files; without it a new choice replaces the current one. `),ce(14,`code`),Zf(15,`hint`),vi(),Zf(16,` is the muted text under the title, and `),ce(17,`code`),Zf(18,`label`),vi(),Zf(19,` replaces the title. Bind the files with `),ce(20,`code`),Zf(21,`[(value)]`),vi(),Zf(22,`. `),vi(),ce(23,`docs-example`,3)(24,`code`),Zf(25,`accept`),vi(),Zf(26,` takes what the native attribute takes: extensions, MIME types and wildcards such as `),ce(27,`code`),Zf(28,`image/*`),vi(),Zf(29,`. `),ce(30,`code`),Zf(31,`maxSize`),vi(),Zf(32,` is in bytes and `),ce(33,`code`),Zf(34,`maxFiles`),vi(),Zf(35,` counts the files already in the list. A file that breaks a rule is `),ce(36,`strong`),Zf(37,`not added`),vi(),Zf(38,`. It is reported in the `),ce(39,`code`),Zf(40,`rejected`),vi(),Zf(41,` output (each item has the `),ce(42,`code`),Zf(43,`file`),vi(),Zf(44,` and a `),ce(45,`code`),Zf(46,`reason`),vi(),Zf(47,` of `),ce(48,`code`),Zf(49,`type`),vi(),Zf(50,`, `),ce(51,`code`),Zf(52,`size`),vi(),Zf(53,` or `),ce(54,`code`),Zf(55,`count`),vi(),Zf(56,`), shown under the dropzone in the danger colour until the next selection, and announced. The rest of the files in the same selection are still added. `),vi(),ce(57,`docs-example`,4),Zf(58,` The component never talks to a server. Start a request in `),ce(59,`code`),Zf(60,`(added)`),vi(),Zf(61,` and cancel it in `),ce(62,`code`),Zf(63,`(removed)`),vi(),Zf(64,`. Feed the result back through `),ce(65,`code`),Zf(66,`uploads`),vi(),Zf(67,`, a map of `),ce(68,`code`),Zf(69,`File`),vi(),Zf(70,` to `),ce(71,`code`),Zf(72,`{ progress, error }`),vi(),Zf(73,`; pass a new map for each change. `),ce(74,`code`),Zf(75,`progress`),vi(),Zf(76,` from 0 to 99 shows a progress bar, 100 marks the file as uploaded, and an `),ce(77,`code`),Zf(78,`error`),vi(),Zf(79,` replaces the bar with the message. The example uses a timer; with `),ce(80,`code`),Zf(81,`HttpClient`),vi(),Zf(82,` map `),ce(83,`code`),Zf(84,`HttpEventType.UploadProgress`),vi(),Zf(85,` to `),ce(86,`code`),Zf(87,`progress`),vi(),Zf(88,`. `),vi(),ce(89,`docs-example`,5),Zf(90,` It is a `),ce(91,`code`),Zf(92,`ControlValueAccessor`),vi(),Zf(93,`, so `),ce(94,`code`),Zf(95,`formControlName`),vi(),Zf(96,`, `),ce(97,`code`),Zf(98,`[formControl]`),vi(),Zf(99,` and `),ce(100,`code`),Zf(101,`[(ngModel)]`),vi(),Zf(102,` work, and the value is `),ce(103,`code`),Zf(104,`File[]`),vi(),Zf(105,`. An invalid and touched control turns the border red, and disabling the control disables the dropzone and the remove buttons. The control is marked touched when the file input loses focus. Validators see the files, so `),ce(106,`code`),Zf(107,`Validators.required`),vi(),Zf(108,` checks that the list is not empty. `),vi(),ce(109,`docs-example`,6),Zf(110,` Disabled and invalid dropzones, and one with a custom label. `),vi(),ce(111,`section`,7)(112,`h2`,8),Zf(113,`Accessibility`),vi(),ce(114,`p`),Zf(115,` The dropzone is a native file input (visually hidden but focusable) with a visible `),ce(116,`code`),Zf(117,`<label>`),vi(),Zf(118,` that covers the whole area, so a click, Enter or Space opens the picker and the input is named by the title, for example "Click or drag files to this area to upload". Dropping is never the only way in. The hint is linked with `),ce(119,`code`),Zf(120,`aria-describedby`),vi(),Zf(121,`, an invalid control sets `),ce(122,`code`),Zf(123,`aria-invalid`),vi(),Zf(124,`, and the focus ring is drawn around the whole zone. `),vi(),ce(125,`p`),Zf(126,` A polite live region announces files that were added, removed or rejected, and uploads that finish or fail; the state a page starts with is not announced. Each progress bar is a `),ce(127,`code`),Zf(128,`role="progressbar"`),vi(),Zf(129,` with a name, "Upload progress of report.pdf", and `),ce(130,`code`),Zf(131,`aria-valuenow`),vi(),Zf(132,`. Remove buttons are named per file, "Remove report.pdf", and are described by that file's error when it has one. After a removal focus moves to the next remove button, or to the file input when the list is empty. Muted text uses the `),ce(133,`code`),Zf(134,`--fg-2`),vi(),Zf(135,` colour, and every string comes from `),ce(136,`code`),Zf(137,`NgsI18n.file`),vi(),Zf(138,`; file sizes are formatted for the app's locale. `),vi()()()),e&2&&(Ot(`tab`,a.tab()),Tt(9),Ot(`component`,a.basic)(`sources`,a.sources.basic),Tt(14),Ot(`component`,a.validation)(`sources`,a.sources.validation),Tt(34),Ot(`component`,a.upload)(`sources`,a.sources.upload),Tt(32),Ot(`component`,a.forms)(`sources`,a.sources.forms),Tt(20),Ot(`component`,a.states)(`sources`,a.sources.states))},dependencies:[ue$1,pe],encapsulation:2})};export{Bs as FilePage};