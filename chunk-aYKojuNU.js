import{An as hg,At as W,B as Kf,Br as ui,Cr as rf,G as Lr,Gr as vf,Gt as Yn,Hn as kf,Jt as Zf,M as JF,Rn as jo,Sn as fh,T as Hu,Tn as gf,Vt as Y3,Wr as ve,Yt as _F,Zr as wf,_r as q3,cn as ch,ct as RU,ei as xh,et as Ot,hn as eA,i as $t,in as bU,ir as nf,kn as hf,on as ce,q as Mh,qr as vi,r as $f,tt as P0,un as cn,ur as of,xt as Tt,zn as k$1}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{A as ll,F as qn,L as ye}from"./chunk-DycqepRM.js";import{r as y}from"./chunk-CfGjEUxa.js";import"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";import{n as j,t as B}from"./chunk-Dv7PHoGw.js";var rs=[`*`];var k=class p extends qn{label=Yn();multiple=Yn(!1,{transform:$t});chips=eA(B,{descendants:!0});options=/* @__PURE__ */ new WeakMap;focusable=jo(()=>this.chips().filter(l=>l.selectable()&&!l.isDisabled()));focusableOptions=jo(()=>this.focusable().map(l=>this.option(l)));active=W(null);keyManager=new y(this.focusableOptions,k$1(cn)).withWrap().withHomeAndEnd().withHorizontalOrientation(k$1(ye).value);tabbable=jo(()=>{let l=this.focusable(),e=this.active();return(e&&l.includes(e)?e:null)??l.find(t=>this.isSelected(t.value()))??l[0]??null});isSelected(l){let e=this.value();return this.multiple()?Array.isArray(e)&&e.includes(l):e!==null&&e===l}toggle(l){if(!this.multiple()){this.setValue(this.isSelected(l)?null:l);return}let e=this.value(),t=Array.isArray(e)?e:[];this.setValue(t.includes(l)?t.filter(g=>g!==l):[...t,l])}isTabbable(l){return this.tabbable()===l}activate(l){this.active.set(l),this.keyManager.updateActiveItem(this.option(l))}option(l){let e=this.options.get(l);return e||this.options.set(l,e={focus:()=>l.focus()}),e}static ɵfac=(()=>{let l;return function(t){return(l||(l=Hu(p)))(t||p)}})();static ɵcmp=ve({type:p,selectors:[[`ngs-chip-group`]],contentQueries:function(e,t,g){e&1&&ch(g,t.chips,B,5),e&2&&wf()},hostAttrs:[`role`,`group`,1,`chip-group`],hostVars:1,hostBindings:function(e,t){e&1&&ui(`keydown`,function(c){return t.keyManager.onKeydown(c)})(`focusout`,function(){return t.markTouched()}),e&2&&Lr(`aria-label`,t.label())},inputs:{label:[1,`label`],multiple:[1,`multiple`]},features:[Kf([ll(()=>p),{provide:j,useExisting:p}]),P0],ngContentSelectors:rs,decls:1,vars:0,template:function(e,t){e&1&&(kf(),hf(0))},encapsulation:2})};function hs(p,l){if(p&1&&(ce(0,`div`,1)(1,`ngs-chip`,2),Zf(2),vi()()),p&2){let e=l.$implicit;Tt(),Ot(`color`,e),Tt(),fh(e)}}var _=class p{colors=[`primary`,`accent`,`secondary`,`success`,`danger`,`warning`,`info`,`inverse`];static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-chips-colors`]],decls:6,vars:0,consts:[[1,`row`,`g-2`],[1,`col-auto`],[3,`color`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-chip`),Zf(3,`Default`),vi()(),of(4,hs,3,2,`div`,1,nf),vi()),e&2&&(Tt(4),rf(t.colors))},dependencies:[B],encapsulation:2})};var N=class p{check=_F;fire=JF;star=bU;user=RU;static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-chips-icons`]],decls:13,vars:4,consts:[[1,`row`,`g-2`],[1,`col-auto`],[3,`icon`],[`color`,`success`,3,`icon`],[`color`,`warning`,3,`icon`],[`color`,`danger`,`removable`,``,3,`icon`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-chip`,2),Zf(3,`Ada Lovelace`),vi()(),ce(4,`div`,1)(5,`ngs-chip`,3),Zf(6,`Verified`),vi()(),ce(7,`div`,1)(8,`ngs-chip`,4),Zf(9,`Featured`),vi()(),ce(10,`div`,1)(11,`ngs-chip`,5),Zf(12,`Trending`),vi()()()),e&2&&(Tt(2),Ot(`icon`,t.user),Tt(3),Ot(`icon`,t.check),Tt(3),Ot(`icon`,t.star),Tt(3),Ot(`icon`,t.fire))},dependencies:[B],encapsulation:2})};function gs(p,l){if(p&1){let e=gf();ce(0,`div`,3)(1,`ngs-chip`,5),ui(`removed`,function(){let g=q3(e).$implicit,c=vf();return Y3(c.remove(g))}),Zf(2),vi()()}if(p&2){let e=l.$implicit;Tt(2),fh(e)}}function ms(p,l){p&1&&(ce(0,`div`,3),Zf(1,`No tags left.`),vi())}var is=[`Angular`,`Bootstrap`,`TypeScript`,`Signals`];var D=class p{tags=W(is);remove(l){this.tags.update(e=>e.filter(t=>t!==l))}reset(){this.tags.set(is)}static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-chips-removable`]],decls:9,vars:1,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-12`],[`aria-live`,`polite`,1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`size`,`sm`,`variant`,`outline`,3,`click`],[`removable`,``,3,`removed`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`div`,2),of(3,gs,3,1,`div`,3,nf,!1,ms,2,0,`div`,3),vi()(),ce(6,`div`,3)(7,`button`,4),ui(`click`,function(){return t.reset()}),Zf(8,`Reset`),vi()()()),e&2&&(Tt(3),rf(t.tags()))},dependencies:[B,f],encapsulation:2})};var T=class p{pinned=W(!1);size=W(`m`);topics=W([`a11y`]);static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-chips-selectable`]],decls:35,vars:6,consts:[[1,`row`,`g-4`],[1,`col-12`,`md:col-4`],[1,`mb-2`],[`selectable`,``,3,`selectedChange`,`selected`],[1,`mt-2`,`mb-0`],[`label`,`Size`,3,`valueChange`,`value`],[`selectable`,``,`value`,`s`],[`selectable`,``,`value`,`m`],[`selectable`,``,`value`,`l`],[`label`,`Topics`,`multiple`,``,3,`valueChange`,`value`],[`selectable`,``,`color`,`success`,`value`,`a11y`],[`selectable`,``,`color`,`success`,`value`,`i18n`],[`selectable`,``,`color`,`success`,`value`,`ssr`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`p`,2)(3,`strong`),Zf(4,`Single chip`),vi()(),ce(5,`ngs-chip`,3),xh(`selectedChange`,function(c){return $f(t.pinned,c)||(t.pinned=c),c}),Zf(6,`Pinned`),vi(),ce(7,`p`,4),Zf(8),vi()(),ce(9,`div`,1)(10,`p`,2)(11,`strong`),Zf(12,`Single selection`),vi()(),ce(13,`ngs-chip-group`,5),xh(`valueChange`,function(c){return $f(t.size,c)||(t.size=c),c}),ce(14,`ngs-chip`,6),Zf(15,`Small`),vi(),ce(16,`ngs-chip`,7),Zf(17,`Medium`),vi(),ce(18,`ngs-chip`,8),Zf(19,`Large`),vi()(),ce(20,`p`,4),Zf(21),vi()(),ce(22,`div`,1)(23,`p`,2)(24,`strong`),Zf(25,`Multiple selection`),vi()(),ce(26,`ngs-chip-group`,9),xh(`valueChange`,function(c){return $f(t.topics,c)||(t.topics=c),c}),ce(27,`ngs-chip`,10),Zf(28,`Accessibility`),vi(),ce(29,`ngs-chip`,11),Zf(30,`i18n`),vi(),ce(31,`ngs-chip`,12),Zf(32,`SSR`),vi()(),ce(33,`p`,4),Zf(34),vi()()()),e&2&&(Tt(5),Mh(`selected`,t.pinned),Tt(3),hg(`Pinned: `,t.pinned()),Tt(5),Mh(`value`,t.size),Tt(8),hg(`Size: `,t.size()??`none`),Tt(5),Mh(`value`,t.topics),Tt(8),hg(`Topics: `,t.topics()?.join(`, `)||`none`))},dependencies:[B,k],encapsulation:2})};var I=class p{static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-chips-sizes`]],decls:10,vars:0,consts:[[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[2,`--chip-height`,`1.375rem`,`--chip-padding-x`,`0.5rem`,`--chip-font-size`,`0.75rem`],[2,`--chip-height`,`2.25rem`,`--chip-padding-x`,`0.875rem`,`--chip-font-size`,`1rem`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-chip`),Zf(3,`Default`),vi()(),ce(4,`div`,1)(5,`ngs-chip`,2),Zf(6,` Compact `),vi()(),ce(7,`div`,1)(8,`ngs-chip`,3),Zf(9,` Large `),vi()()())},dependencies:[B],encapsulation:2})};var cs={colors:{html:{code:`<div class="row g-2">
  <div class="col-auto"><ngs-chip>Default</ngs-chip></div>
  @for (color of colors; track color) {
    <div class="col-auto">
      <ngs-chip [color]="color">{{ color }}</ngs-chip>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  @for (color of colors; track color) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> [<span class="hljs-attr">color</span>]=<span class="hljs-string">&quot;color&quot;</span>&gt;</span>{{ color }}<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsThemeColor } from '@bootlace/core';
import { NgsChip } from '@bootlace/core/chips';

@Component({
  selector: 'docs-chips-colors',
  imports: [NgsChip],
  templateUrl: './index.html',
})
export class ChipsColorsExample {
  protected readonly colors: NgsThemeColor[] = [
    'primary',
    'accent',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'inverse',
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsThemeColor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsChip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/chips&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-chips-colors&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsChip</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChipsColorsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">colors</span>: <span class="hljs-title class_">NgsThemeColor</span>[] = [
    <span class="hljs-string">&#x27;primary&#x27;</span>,
    <span class="hljs-string">&#x27;accent&#x27;</span>,
    <span class="hljs-string">&#x27;secondary&#x27;</span>,
    <span class="hljs-string">&#x27;success&#x27;</span>,
    <span class="hljs-string">&#x27;danger&#x27;</span>,
    <span class="hljs-string">&#x27;warning&#x27;</span>,
    <span class="hljs-string">&#x27;info&#x27;</span>,
    <span class="hljs-string">&#x27;inverse&#x27;</span>,
  ];
}`}},icons:{html:{code:`<div class="row g-2">
  <div class="col-auto"><ngs-chip [icon]="user">Ada Lovelace</ngs-chip></div>
  <div class="col-auto"><ngs-chip color="success" [icon]="check">Verified</ngs-chip></div>
  <div class="col-auto"><ngs-chip color="warning" [icon]="star">Featured</ngs-chip></div>
  <div class="col-auto">
    <ngs-chip color="danger" [icon]="fire" removable>Trending</ngs-chip>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;user&quot;</span>&gt;</span>Ada Lovelace<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;check&quot;</span>&gt;</span>Verified<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;warning&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;star&quot;</span>&gt;</span>Featured<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;danger&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;fire&quot;</span> <span class="hljs-attr">removable</span>&gt;</span>Trending<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsChip } from '@bootlace/core/chips';
import { ngsIconCheck, ngsIconFire, ngsIconStar, ngsIconUser } from '@bootlace/icons';

@Component({
  selector: 'docs-chips-icons',
  imports: [NgsChip],
  templateUrl: './index.html',
})
export class ChipsIconsExample {
  protected readonly check = ngsIconCheck;
  protected readonly fire = ngsIconFire;
  protected readonly star = ngsIconStar;
  protected readonly user = ngsIconUser;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsChip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/chips&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconCheck, ngsIconFire, ngsIconStar, ngsIconUser } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-chips-icons&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsChip</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChipsIconsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> check = ngsIconCheck;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> fire = ngsIconFire;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> star = ngsIconStar;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> user = ngsIconUser;
}`}},removable:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-12">
    <div class="row g-2" aria-live="polite">
      @for (tag of tags(); track tag) {
        <div class="col-auto">
          <ngs-chip removable (removed)="remove(tag)">{{ tag }}</ngs-chip>
        </div>
      } @empty {
        <div class="col-auto">No tags left.</div>
      }
    </div>
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" variant="outline" (click)="reset()">Reset</button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>
      @for (tag of tags(); track tag) {
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">removable</span> (<span class="hljs-attr">removed</span>)=<span class="hljs-string">&quot;remove(tag)&quot;</span>&gt;</span>{{ tag }}<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      } @empty {
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>No tags left.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;reset()&quot;</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsChip } from '@bootlace/core/chips';

const TAGS = ['Angular', 'Bootstrap', 'TypeScript', 'Signals'];

@Component({
  selector: 'docs-chips-removable',
  imports: [NgsChip, NgsButton],
  templateUrl: './index.html',
})
export class ChipsRemovableExample {
  protected readonly tags = signal(TAGS);

  protected remove(tag: string): void {
    this.tags.update((tags) => tags.filter((t) => t !== tag));
  }

  protected reset(): void {
    this.tags.set(TAGS);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsChip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/chips&#x27;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">TAGS</span> = [<span class="hljs-string">&#x27;Angular&#x27;</span>, <span class="hljs-string">&#x27;Bootstrap&#x27;</span>, <span class="hljs-string">&#x27;TypeScript&#x27;</span>, <span class="hljs-string">&#x27;Signals&#x27;</span>];

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-chips-removable&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsChip</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChipsRemovableExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> tags = <span class="hljs-title function_">signal</span>(<span class="hljs-variable constant_">TAGS</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">remove</span>(<span class="hljs-attr">tag</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">tags</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">tags</span>) =&gt;</span> tags.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">t</span>) =&gt;</span> t !== tag));
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">reset</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">tags</span>.<span class="hljs-title function_">set</span>(<span class="hljs-variable constant_">TAGS</span>);
  }
}`}},selectable:{html:{code:`<div class="row g-4">
  <div class="col-12 md:col-4">
    <p class="mb-2"><strong>Single chip</strong></p>
    <ngs-chip selectable [(selected)]="pinned">Pinned</ngs-chip>
    <p class="mt-2 mb-0">Pinned: {{ pinned() }}</p>
  </div>
  <div class="col-12 md:col-4">
    <p class="mb-2"><strong>Single selection</strong></p>
    <ngs-chip-group label="Size" [(value)]="size">
      <ngs-chip selectable value="s">Small</ngs-chip>
      <ngs-chip selectable value="m">Medium</ngs-chip>
      <ngs-chip selectable value="l">Large</ngs-chip>
    </ngs-chip-group>
    <p class="mt-2 mb-0">Size: {{ size() ?? 'none' }}</p>
  </div>
  <div class="col-12 md:col-4">
    <p class="mb-2"><strong>Multiple selection</strong></p>
    <ngs-chip-group label="Topics" multiple [(value)]="topics">
      <ngs-chip selectable color="success" value="a11y">Accessibility</ngs-chip>
      <ngs-chip selectable color="success" value="i18n">i18n</ngs-chip>
      <ngs-chip selectable color="success" value="ssr">SSR</ngs-chip>
    </ngs-chip-group>
    <p class="mt-2 mb-0">Topics: {{ topics()?.join(', ') || 'none' }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Single chip<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">selectable</span> [(<span class="hljs-attr">selected</span>)]=<span class="hljs-string">&quot;pinned&quot;</span>&gt;</span>Pinned<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2 mb-0&quot;</span>&gt;</span>Pinned: {{ pinned() }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Single selection<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Size&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;size&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">selectable</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;s&quot;</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">selectable</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;m&quot;</span>&gt;</span>Medium<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">selectable</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;l&quot;</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2 mb-0&quot;</span>&gt;</span>Size: {{ size() ?? &#x27;none&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Multiple selection<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Topics&quot;</span> <span class="hljs-attr">multiple</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;topics&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">selectable</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a11y&quot;</span>&gt;</span>Accessibility<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">selectable</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;i18n&quot;</span>&gt;</span>i18n<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">selectable</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;success&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;ssr&quot;</span>&gt;</span>SSR<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2 mb-0&quot;</span>&gt;</span>Topics: {{ topics()?.join(&#x27;, &#x27;) || &#x27;none&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsChip, NgsChipGroup } from '@bootlace/core/chips';

@Component({
  selector: 'docs-chips-selectable',
  imports: [NgsChip, NgsChipGroup],
  templateUrl: './index.html',
})
export class ChipsSelectableExample {
  protected readonly pinned = signal(false);
  protected readonly size = signal<string | null>('m');
  protected readonly topics = signal<string[] | null>(['a11y']);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsChip</span>, <span class="hljs-title class_">NgsChipGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/chips&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-chips-selectable&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsChip</span>, <span class="hljs-title class_">NgsChipGroup</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChipsSelectableExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> pinned = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> size = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;m&#x27;</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> topics = signal&lt;<span class="hljs-built_in">string</span>[] | <span class="hljs-literal">null</span>&gt;([<span class="hljs-string">&#x27;a11y&#x27;</span>]);
}`}},sizes:{html:{code:`<div class="row g-2 align-items-center">
  <div class="col-auto"><ngs-chip>Default</ngs-chip></div>
  <div class="col-auto">
    <ngs-chip style="--chip-height: 1.375rem; --chip-padding-x: 0.5rem; --chip-font-size: 0.75rem">
      Compact
    </ngs-chip>
  </div>
  <div class="col-auto">
    <ngs-chip style="--chip-height: 2.25rem; --chip-padding-x: 0.875rem; --chip-font-size: 1rem">
      Large
    </ngs-chip>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;--chip-height: 1.375rem; --chip-padding-x: 0.5rem; --chip-font-size: 0.75rem&quot;</span>&gt;</span>
      Compact
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;--chip-height: 2.25rem; --chip-padding-x: 0.875rem; --chip-font-size: 1rem&quot;</span>&gt;</span>
      Large
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsChip } from '@bootlace/core/chips';

@Component({
  selector: 'docs-chips-sizes',
  imports: [NgsChip],
  templateUrl: './index.html',
})
export class ChipsSizesExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsChip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/chips&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-chips-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsChip</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ChipsSizesExample</span> {}`}}};var os=class p{tab=Yn(`examples`);sources=cs;colors=_;icons=N;sizes=I;selectable=T;removable=D;static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-chips-page`]],inputs:{tab:[1,`tab`]},decls:88,vars:11,consts:[[`heading`,`Chips`,`package`,`@bootlace/core/chips`,`path`,`/components/chips`,3,`tab`],[1,`docs-page-lead`],[`id`,`colors`,`heading`,`Colors`,3,`component`,`sources`],[`id`,`icons`,`heading`,`With icon`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`id`,`selectable`,`heading`,`Selectable`,3,`component`,`sources`],[`id`,`removable`,`heading`,`Removable`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(e,t){e&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` Compact labels built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.chip`),vi(),Zf(5,`. A chip can be static, selectable (a toggle with `),ce(6,`code`),Zf(7,`aria-pressed`),vi(),Zf(8,`) or removable. Group selectable chips in `),ce(9,`code`),Zf(10,`ngs-chip-group`),vi(),Zf(11,` for single or multiple selection with arrow-key navigation. `),vi(),ce(12,`docs-example`,2),Zf(13,` Neutral by default, or one of the eight theme colours. `),vi(),ce(14,`docs-example`,3),Zf(15,` A leading icon from `),ce(16,`code`),Zf(17,`@bootlace/icons`),vi(),Zf(18,`, set with `),ce(19,`code`),Zf(20,`icon`),vi(),Zf(21,`. `),vi(),ce(22,`docs-example`,4),Zf(23,` Bootstrap 6 has no chip size classes. Resize a chip with its tokens (`),ce(24,`code`),Zf(25,`--chip-height`),vi(),Zf(26,`, `),ce(27,`code`),Zf(28,`--chip-padding-x`),vi(),Zf(29,`, `),ce(30,`code`),Zf(31,`--chip-font-size`),vi(),Zf(32,`), on the chip or on any ancestor. `),vi(),ce(33,`docs-example`,5),Zf(34,` A lone chip toggles with `),ce(35,`code`),Zf(36,`[(selected)]`),vi(),Zf(37,`. In an `),ce(38,`code`),Zf(39,`ngs-chip-group`),vi(),Zf(40,` each chip has a `),ce(41,`code`),Zf(42,`value`),vi(),Zf(43,` and the group's `),ce(44,`code`),Zf(45,`[(value)]`),vi(),Zf(46,` holds the selection: a single value, or an array with `),ce(47,`code`),Zf(48,`multiple`),vi(),Zf(49,`. The group also works with `),ce(50,`code`),Zf(51,`ngModel`),vi(),Zf(52,` and reactive forms. `),vi(),ce(53,`docs-example`,6)(54,`code`),Zf(55,`removable`),vi(),Zf(56,` adds a dismiss button. The chip only emits `),ce(57,`code`),Zf(58,`removed`),vi(),Zf(59,`; the app removes it from its own list. `),vi(),ce(60,`section`,7)(61,`h2`,8),Zf(62,`Accessibility`),vi(),ce(63,`p`),Zf(64,` A static chip is plain text. A selectable chip is a toggle button: it has `),ce(65,`code`),Zf(66,`role="button"`),vi(),Zf(67,`, `),ce(68,`code`),Zf(69,`aria-pressed`),vi(),Zf(70,` and toggles with Enter or Space. A group is a single tab stop with roving focus: arrow keys (reversed in right-to-left layouts), Home and End move between chips, and disabled chips are skipped. Give the group a `),ce(71,`code`),Zf(72,`label`),vi(),Zf(73,` so it is announced as a named group. `),vi(),ce(74,`p`),Zf(75,` The dismiss button is named "Remove" plus the chip's text (translatable through the `),ce(76,`code`),Zf(77,`chip.remove`),vi(),Zf(78,` string of `),ce(79,`code`),Zf(80,`NGS_I18N`),vi(),Zf(81,`); set `),ce(82,`code`),Zf(83,`label`),vi(),Zf(84,` on the chip when its content is not plain text. On a chip that is both selectable and removable the button stays out of the tab order and Delete or Backspace removes the chip, since an interactive control cannot nest in a button. When a focused chip is removed, focus moves to the next chip, else the previous one. If none is left, move focus yourself, for example to the field that adds chips. Announce changes to the list if they matter, as the removable example does with `),ce(85,`code`),Zf(86,`aria-live`),vi(),Zf(87,`. `),vi()()()),e&2&&(Ot(`tab`,t.tab()),Tt(12),Ot(`component`,t.colors)(`sources`,t.sources.colors),Tt(2),Ot(`component`,t.icons)(`sources`,t.sources.icons),Tt(8),Ot(`component`,t.sizes)(`sources`,t.sources.sizes),Tt(11),Ot(`component`,t.selectable)(`sources`,t.sources.selectable),Tt(20),Ot(`component`,t.removable)(`sources`,t.sources.removable))},dependencies:[ue,pe],encapsulation:2})};export{os as ChipsPage};