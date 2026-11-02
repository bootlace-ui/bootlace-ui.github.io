import{A as J4,An as hg,At as W,Br as ui,Cr as rf,Ct as U0,F as Jo,Gr as vf,Gt as Yn,Jt as Zf,Ln as jn,Rr as ue,Sn as fh,Tn as gf,Vt as Y3,W as Ll,Wr as ve,_r as q3,et as Ot,f as Cf,j as JC,ln as cj,mr as pa,mt as So,nt as PF,on as ce,qr as vi,t as $8,ur as of,xt as Tt,y as G,zn as k}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import"./chunk-DycqepRM.js";import"./chunk-CfGjEUxa.js";import{n as q$1,r as x$1,t as N}from"./chunk-BOhm2mpp.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";var x=class l{dropdown=k(q$1);el=k(So);doc=k(G);destroyRef=k(jn);selectedText=W(``);predicate=Yn(()=>!0,{alias:`ngsDropdownSelection`,transform:n=>typeof n==`function`?n:()=>!0});text=this.selectedText.asReadonly();pressed=!1;constructor(){this.dropdown.suppressTriggers(),this.dropdown.menuLabel.set(k(o).dropdown.selectionMenu),pa(()=>{let n=()=>{this.pressed&&(this.pressed=!1,setTimeout(()=>this.update()))},s=()=>{this.pressed||this.update()},o=p=>this.onKeydown(p);this.doc.addEventListener(`keydown`,o,!0),this.doc.addEventListener(`selectionchange`,s),this.doc.addEventListener(`pointerup`,n),this.doc.addEventListener(`pointercancel`,n),this.destroyRef.onDestroy(()=>{this.doc.removeEventListener(`keydown`,o,!0),this.doc.removeEventListener(`selectionchange`,s),this.doc.removeEventListener(`pointerup`,n),this.doc.removeEventListener(`pointercancel`,n)})}),J4(n=>{let s=this.dropdown.panelElement();if(!s)return;let o=p=>p.preventDefault();s.addEventListener(`mousedown`,o),n(()=>s.removeEventListener(`mousedown`,o))})}update(){let n=this.doc.getSelection(),s=n&&n.rangeCount?n.getRangeAt(0):null,o=s&&!n?.isCollapsed?n?.toString()??``:``;if(!s||!o.trim()||!this.el.nativeElement.contains(s.commonAncestorContainer)||!this.predicate()(o)){this.selectedText.set(``),this.dropdown.open()&&this.dropdown.close();return}let p=s.getClientRects(),c=p.length?p[p.length-1]:s.getBoundingClientRect();this.selectedText.set(o),this.dropdown.show(`none`,{x:c.x,y:c.y,width:c.width,height:c.height})}onKeydown(n){n.altKey&&n.key===`ArrowDown`&&this.dropdown.open()&&(n.preventDefault(),this.dropdown.focusMenu(`first`))}static ɵfac=function(s){return new(s||l)};static ɵdir=Jo({type:l,selectors:[[``,`ngsDropdownSelection`,``]],hostBindings:function(s,o){s&1&&ui(`pointerdown`,function(){return o.pressed=!0})},inputs:{predicate:[1,`ngsDropdownSelection`,`predicate`]},exportAs:[`ngsDropdownSelection`]})};function Y(l,n){if(l&1&&(ce(0,`li`),Zf(1),vi()),l&2){let s=n.$implicit;Tt(),hg(`"`,s,`"`)}}function Z(l,n){l&1&&(ce(0,`li`),Zf(1,`None yet.`),vi())}function ss(l,n){if(l&1){let s=gf();ce(0,`div`,9)(1,`button`,10),ui(`click`,function(){q3(s);let p=vf(),c=Cf(3);return Y3(p.comment(c.text()))}),ue(2,`ngs-icon`,11),Zf(3,` Comment `),vi(),ce(4,`button`,10),ui(`click`,function(){q3(s);let p=vf(),c=Cf(3);return Y3(p.copy(c.text()))}),ue(5,`ngs-icon`,11),Zf(6,` Copy `),vi()()}if(l&2){let s=vf();Tt(2),Ot(`icon`,s.commentIcon),Tt(3),Ot(`icon`,s.copyIcon)}}var q=class l{commentIcon=PF;copyIcon=$8;comments=W([]);comment(n){this.comments.update(s=>[...s,n.trim()])}copy(n){navigator.clipboard?.writeText(n)}static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`docs-dropdown-selection-actions`]],decls:18,vars:2,consts:[[`selection`,`ngsDropdownSelection`],[`menu`,``],[1,`row`],[1,`col-12`,`lg:col-8`],[`ngsDropdownPlacement`,`top`,`ngsDropdownSelection`,``,3,`ngsDropdown`],[1,`mb-0`],[1,`col-12`,`lg:col-4`],[1,`mb-2`],[`aria-live`,`polite`,1,`mb-0`],[`ngsMenu`,``],[`ngsMenuItem`,``,3,`click`],[1,`menu-item-icon`,3,`icon`]],template:function(s,o){if(s&1&&(ce(0,`div`,2)(1,`div`,3)(2,`article`,4,0)(4,`p`),Zf(5,` Dropdown Selection anchors a menu to the text the user selects. It appears once the selection is made and disappears when it is cleared, so it never gets in the way of dragging. `),vi(),ce(6,`p`,5),Zf(7,` Use it for inline actions such as commenting on a passage, copying a quote or looking a term up. `),vi()()(),ce(8,`div`,6)(9,`p`,7)(10,`strong`),Zf(11,`Comments`),vi()(),ce(12,`ul`,8),of(13,Y,2,1,`li`,null,JC,!1,Z,2,0,`li`),vi()()(),U0(16,ss,7,2,`ng-template`,null,1,cj)),s&2){let p=Cf(17);Tt(2),Ot(`ngsDropdown`,p),Tt(11),rf(o.comments())}},dependencies:[q$1,x,x$1,N,Ll],encapsulation:2})};function ns(l,n){if(l&1){let s=gf();ce(0,`div`,4)(1,`button`,5),ui(`click`,function(){q3(s);let p=vf(),c=Cf(1);return Y3(p.show(`Searched for`,c.text()))}),Zf(2,`Search`),vi(),ce(3,`button`,5),ui(`click`,function(){q3(s);let p=vf(),c=Cf(1);return Y3(p.show(`Copied`,c.text()))}),Zf(4,`Copy`),vi()()}}var C=class l{result=W(`Nothing chosen yet.`);show(n,s){this.result.set(`${n} "${s}".`)}static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`docs-dropdown-selection-basic`]],decls:7,vars:2,consts:[[`selection`,`ngsDropdownSelection`],[`menu`,``],[`ngsDropdownPlacement`,`bottom`,`ngsDropdownSelection`,``,1,`mb-0`,3,`ngsDropdown`],[`aria-live`,`polite`,1,`mt-3`,`mb-0`],[`ngsMenu`,``],[`ngsMenuItem`,``,3,`click`]],template:function(s,o){if(s&1&&(ce(0,`p`,2,0),Zf(2,` Select some of this text to see the menu appear right below it.
`),vi(),U0(3,ns,5,0,`ng-template`,null,1,cj),ce(5,`p`,3),Zf(6),vi()),s&2){let p=Cf(4);Ot(`ngsDropdown`,p),Tt(6),fh(o.result())}},dependencies:[q$1,x,x$1,N],encapsulation:2})};function es(l,n){if(l&1){let s=gf();ce(0,`div`,4)(1,`button`,5),ui(`click`,function(){q3(s);let p=vf(),c=Cf(1);return Y3(p.define(c.text()))}),Zf(2,`Define`),vi()()}}var M=class l{result=W(`Nothing defined yet.`);isWord=n=>/^\s*\S+\s*$/.test(n);define(n){this.result.set(`Looking up "${n.trim()}".`)}static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`docs-dropdown-selection-predicate`]],decls:7,vars:3,consts:[[`selection`,`ngsDropdownSelection`],[`menu`,``],[`ngsDropdownPlacement`,`bottom`,1,`mb-0`,3,`ngsDropdown`,`ngsDropdownSelection`],[`aria-live`,`polite`,1,`mt-3`,`mb-0`],[`ngsMenu`,``],[`ngsMenuItem`,``,3,`click`]],template:function(s,o){if(s&1&&(ce(0,`p`,2,0),Zf(2,` The menu only opens for a single word. Try a word, then a whole sentence.
`),vi(),U0(3,es,3,0,`ng-template`,null,1,cj),ce(5,`p`,3),Zf(6),vi()),s&2){let p=Cf(4);Ot(`ngsDropdown`,p)(`ngsDropdownSelection`,o.isWord),Tt(6),fh(o.result())}},dependencies:[q$1,x,x$1,N],encapsulation:2})};var Q={actions:{html:{code:`<div class="row">
  <div class="col-12 lg:col-8">
    <article
      [ngsDropdown]="menu"
      ngsDropdownPlacement="top"
      ngsDropdownSelection
      #selection="ngsDropdownSelection"
    >
      <p>
        Dropdown Selection anchors a menu to the text the user selects. It appears once the
        selection is made and disappears when it is cleared, so it never gets in the way of
        dragging.
      </p>
      <p class="mb-0">
        Use it for inline actions such as commenting on a passage, copying a quote or looking a term
        up.
      </p>
    </article>
  </div>
  <div class="col-12 lg:col-4">
    <p class="mb-2"><strong>Comments</strong></p>
    <ul class="mb-0" aria-live="polite">
      @for (comment of comments(); track $index) {
        <li>"{{ comment }}"</li>
      } @empty {
        <li>None yet.</li>
      }
    </ul>
  </div>
</div>

<ng-template #menu>
  <div ngsMenu>
    <button ngsMenuItem (click)="comment(selection.text())">
      <ngs-icon class="menu-item-icon" [icon]="commentIcon" /> Comment
    </button>
    <button ngsMenuItem (click)="copy(selection.text())">
      <ngs-icon class="menu-item-icon" [icon]="copyIcon" /> Copy
    </button>
  </div>
</ng-template>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">article</span>
      [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span>
      <span class="hljs-attr">ngsDropdownPlacement</span>=<span class="hljs-string">&quot;top&quot;</span>
      <span class="hljs-attr">ngsDropdownSelection</span>
      #<span class="hljs-attr">selection</span>=<span class="hljs-string">&quot;ngsDropdownSelection&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
        Dropdown Selection anchors a menu to the text the user selects. It appears once the
        selection is made and disappears when it is cleared, so it never gets in the way of
        dragging.
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>
        Use it for inline actions such as commenting on a passage, copying a quote or looking a term
        up.
      <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">article</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Comments<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>
      @for (comment of comments(); track $index) {
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>&quot;{{ comment }}&quot;<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      } @empty {
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>None yet.<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;comment(selection.text())&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-icon&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;commentIcon&quot;</span> /&gt;</span> Comment
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;copy(selection.text())&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;menu-item-icon&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;copyIcon&quot;</span> /&gt;</span> Copy
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsDropdown, NgsDropdownSelection, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';
import { NgsIcon } from '@bootlace/core/icon';
import { ngsIconComment, ngsIconCopy } from '@bootlace/icons';

@Component({
  selector: 'docs-dropdown-selection-actions',
  imports: [NgsDropdown, NgsDropdownSelection, NgsMenu, NgsMenuItem, NgsIcon],
  templateUrl: './index.html',
})
export class DropdownSelectionActionsExample {
  protected readonly commentIcon = ngsIconComment;
  protected readonly copyIcon = ngsIconCopy;
  protected readonly comments = signal<string[]>([]);

  protected comment(text: string): void {
    this.comments.update((all) => [...all, text.trim()]);
  }

  protected copy(text: string): void {
    void navigator.clipboard?.writeText(text);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownSelection</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconComment, ngsIconCopy } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-selection-actions&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownSelection</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>, <span class="hljs-title class_">NgsIcon</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownSelectionActionsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> commentIcon = ngsIconComment;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> copyIcon = ngsIconCopy;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> comments = signal&lt;<span class="hljs-built_in">string</span>[]&gt;([]);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">comment</span>(<span class="hljs-attr">text</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">comments</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">all</span>) =&gt;</span> [...all, text.<span class="hljs-title function_">trim</span>()]);
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">copy</span>(<span class="hljs-attr">text</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-built_in">void</span> navigator.<span class="hljs-property">clipboard</span>?.<span class="hljs-title function_">writeText</span>(text);
  }
}`}},basic:{html:{code:`<p
  class="mb-0"
  [ngsDropdown]="menu"
  ngsDropdownPlacement="bottom"
  ngsDropdownSelection
  #selection="ngsDropdownSelection"
>
  Select some of this text to see the menu appear right below it.
</p>

<ng-template #menu>
  <div ngsMenu>
    <button ngsMenuItem (click)="show('Searched for', selection.text())">Search</button>
    <button ngsMenuItem (click)="show('Copied', selection.text())">Copy</button>
  </div>
</ng-template>

<p class="mt-3 mb-0" aria-live="polite">{{ result() }}</p>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">p</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>
  [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span>
  <span class="hljs-attr">ngsDropdownPlacement</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  <span class="hljs-attr">ngsDropdownSelection</span>
  #<span class="hljs-attr">selection</span>=<span class="hljs-string">&quot;ngsDropdownSelection&quot;</span>
&gt;</span>
  Select some of this text to see the menu appear right below it.
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;show(&#x27;Searched for&#x27;, selection.text())&quot;</span>&gt;</span>Search<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;show(&#x27;Copied&#x27;, selection.text())&quot;</span>&gt;</span>Copy<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3 mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>{{ result() }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsDropdown, NgsDropdownSelection, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';

@Component({
  selector: 'docs-dropdown-selection-basic',
  imports: [NgsDropdown, NgsDropdownSelection, NgsMenu, NgsMenuItem],
  templateUrl: './index.html',
})
export class DropdownSelectionBasicExample {
  protected readonly result = signal('Nothing chosen yet.');

  protected show(verb: string, text: string): void {
    this.result.set(\`\${verb} "\${text}".\`);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownSelection</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-selection-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownSelection</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownSelectionBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> result = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;Nothing chosen yet.&#x27;</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">show</span>(<span class="hljs-attr">verb</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">text</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">result</span>.<span class="hljs-title function_">set</span>(<span class="hljs-string">\`<span class="hljs-subst">\${verb}</span> &quot;<span class="hljs-subst">\${text}</span>&quot;.\`</span>);
  }
}`}},predicate:{html:{code:`<p
  class="mb-0"
  [ngsDropdown]="menu"
  [ngsDropdownSelection]="isWord"
  ngsDropdownPlacement="bottom"
  #selection="ngsDropdownSelection"
>
  The menu only opens for a single word. Try a word, then a whole sentence.
</p>

<ng-template #menu>
  <div ngsMenu>
    <button ngsMenuItem (click)="define(selection.text())">Define</button>
  </div>
</ng-template>

<p class="mt-3 mb-0" aria-live="polite">{{ result() }}</p>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">p</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>
  [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span>
  [<span class="hljs-attr">ngsDropdownSelection</span>]=<span class="hljs-string">&quot;isWord&quot;</span>
  <span class="hljs-attr">ngsDropdownPlacement</span>=<span class="hljs-string">&quot;bottom&quot;</span>
  #<span class="hljs-attr">selection</span>=<span class="hljs-string">&quot;ngsDropdownSelection&quot;</span>
&gt;</span>
  The menu only opens for a single word. Try a word, then a whole sentence.
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">menu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ngsMenu</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsMenuItem</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;define(selection.text())&quot;</span>&gt;</span>Define<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-3 mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>{{ result() }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsDropdown, NgsDropdownSelection, NgsMenu, NgsMenuItem } from '@bootlace/core/dropdown';

@Component({
  selector: 'docs-dropdown-selection-predicate',
  imports: [NgsDropdown, NgsDropdownSelection, NgsMenu, NgsMenuItem],
  templateUrl: './index.html',
})
export class DropdownSelectionPredicateExample {
  protected readonly result = signal('Nothing defined yet.');

  protected readonly isWord = (text: string): boolean => /^\\s*\\S+\\s*$/.test(text);

  protected define(word: string): void {
    this.result.set(\`Looking up "\${word.trim()}".\`);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownSelection</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/dropdown&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-dropdown-selection-predicate&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsDropdown</span>, <span class="hljs-title class_">NgsDropdownSelection</span>, <span class="hljs-title class_">NgsMenu</span>, <span class="hljs-title class_">NgsMenuItem</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DropdownSelectionPredicateExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> result = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;Nothing defined yet.&#x27;</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> isWord = (<span class="hljs-attr">text</span>: <span class="hljs-built_in">string</span>): <span class="hljs-function"><span class="hljs-params">boolean</span> =&gt;</span> <span class="hljs-regexp">/^\\s*\\S+\\s*$/</span>.<span class="hljs-title function_">test</span>(text);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">define</span>(<span class="hljs-attr">word</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">result</span>.<span class="hljs-title function_">set</span>(<span class="hljs-string">\`Looking up &quot;<span class="hljs-subst">\${word.trim()}</span>&quot;.\`</span>);
  }
}`}}};var X=class l{tab=Yn(`examples`);sources=Q;basic=C;predicate=M;actions=q;static ɵfac=function(s){return new(s||l)};static ɵcmp=ve({type:l,selectors:[[`docs-dropdown-selection-page`]],inputs:{tab:[1,`tab`]},decls:35,vars:7,consts:[[`heading`,`Dropdown Selection`,`package`,`@bootlace/core/dropdown`,`path`,`/components/dropdown/dropdown-selection`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`predicate`,`heading`,`Limit what opens it`,3,`component`,`sources`],[`id`,`actions`,`heading`,`Inline actions`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(s,o){s&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` Add `),ce(3,`code`),Zf(4,`ngsDropdownSelection`),vi(),Zf(5,` to an `),ce(6,`code`),Zf(7,`ngsDropdown`),vi(),Zf(8,` host to open its menu next to the text the user selects inside it, for actions such as Comment or Copy. The menu waits until the selection is made, follows it as it changes and closes when it is cleared. Read the selected text from the exported directive. `),vi(),ce(9,`docs-example`,2),Zf(10,` Select any text in the paragraph. The menu is anchored to the end of the selection and `),ce(11,`code`),Zf(12,`selection.text()`),vi(),Zf(13,` returns what was selected. `),vi(),ce(14,`docs-example`,3),Zf(15,` Bind a function to `),ce(16,`code`),Zf(17,`ngsDropdownSelection`),vi(),Zf(18,` to open the menu only for selections it accepts, here a single word. `),vi(),ce(19,`docs-example`,4),Zf(20,` A realistic setup: a longer article, a menu with icons placed above the selection, and the comments the user adds collected beside it. `),vi(),ce(21,`section`,5)(22,`h2`,6),Zf(23,`Accessibility`),vi(),ce(24,`p`),Zf(25,` Focus stays in the text, so the user keeps their selection and caret. Alt + Arrow Down moves focus into the menu, which then works like any menu: arrow keys, Enter or Space to activate, Escape to close. A keyboard user can select with Shift + arrow keys and the menu follows. The menu has an accessible name (translatable through the `),ce(26,`code`),Zf(27,`dropdown.selectionMenu`),vi(),Zf(28,` string of `),ce(29,`code`),Zf(30,`NGS_I18N`),vi(),Zf(31,`), and the host does not become a button, so it has no `),ce(32,`code`),Zf(33,`aria-haspopup`),vi(),Zf(34,` of its own. Offer the same actions elsewhere too, such as a toolbar, for users who cannot select text. `),vi()()()),s&2&&(Ot(`tab`,o.tab()),Tt(9),Ot(`component`,o.basic)(`sources`,o.sources.basic),Tt(5),Ot(`component`,o.predicate)(`sources`,o.sources.predicate),Tt(5),Ot(`component`,o.actions)(`sources`,o.sources.actions))},dependencies:[ue$1,pe],encapsulation:2})};export{X as DropdownSelectionPage};