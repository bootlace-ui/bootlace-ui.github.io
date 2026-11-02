import{Cr as rf,G as Lr,Gt as Yn,Hn as kf,Jt as Zf,Rn as jo,Un as kg,Wr as ve,et as Ot,i as $t,ir as nf,kn as hf,on as ce,qr as vi,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";var D=[`*`];var r=class e{label=Yn();orientation=Yn(`horizontal`);size=Yn(`md`);divider=Yn(!1,{transform:$t});classes=jo(()=>{let l=[this.orientation()===`vertical`?`btn-group-vertical`:`btn-group`];return this.size()!==`md`&&l.push(`btn-group-${this.size()}`),this.divider()&&l.push(`btn-group-divider`),l.join(` `)});static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`ngs-button-group`]],hostAttrs:[`role`,`group`],hostVars:3,hostBindings:function(a,o){a&2&&(Lr(`aria-label`,o.label()||null),kg(o.classes()))},inputs:{label:[1,`label`],orientation:[1,`orientation`],size:[1,`size`],divider:[1,`divider`]},ngContentSelectors:D,decls:1,vars:0,template:function(a,o){a&1&&(kf(),hf(0))},encapsulation:2})};var d=class e{static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-button-group-basic`]],decls:17,vars:0,consts:[[1,`row`,`g-3`],[1,`col-auto`],[`label`,`Text alignment`],[`ngsButton`,``,`variant`,`outline`],[`label`,`Colour`,`divider`,``],[`ngsButton`,``,`color`,`secondary`]],template:function(a,o){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-button-group`,2)(3,`button`,3),Zf(4,`Left`),vi(),ce(5,`button`,3),Zf(6,`Center`),vi(),ce(7,`button`,3),Zf(8,`Right`),vi()()(),ce(9,`div`,1)(10,`ngs-button-group`,4)(11,`button`,5),Zf(12,`Red`),vi(),ce(13,`button`,5),Zf(14,`Green`),vi(),ce(15,`button`,5),Zf(16,`Blue`),vi()()()())},dependencies:[f,r],encapsulation:2})};function _(e,l){if(e&1&&(ce(0,`div`,1)(1,`ngs-button-group`,2)(2,`button`,3),Zf(3,`1`),vi(),ce(4,`button`,3),Zf(5,`2`),vi(),ce(6,`button`,3),Zf(7,`3`),vi()()()),e&2){let a=l.$implicit;Tt(),Ot(`label`,`Pagination, `+a)(`size`,a)}}var j=class e{sizes=[`xs`,`sm`,`md`,`lg`];static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-button-group-sizes`]],decls:3,vars:0,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-auto`],[3,`label`,`size`],[`ngsButton`,``,`variant`,`outline`]],template:function(a,o){a&1&&(ce(0,`div`,0),of(1,_,8,2,`div`,1,nf),vi()),a&2&&(Tt(),rf(o.sizes))},dependencies:[f,r],encapsulation:2})};var b=class e{static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-button-group-vertical`]],decls:9,vars:0,consts:[[1,`row`],[1,`col-auto`],[`label`,`Document actions`,`orientation`,`vertical`],[`ngsButton`,``,`variant`,`subtle`],[`ngsButton`,``,`variant`,`subtle`,`color`,`danger`]],template:function(a,o){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-button-group`,2)(3,`button`,3),Zf(4,`Open`),vi(),ce(5,`button`,3),Zf(6,`Rename`),vi(),ce(7,`button`,4),Zf(8,`Delete`),vi()()()())},dependencies:[f,r],encapsulation:2})};var C={basic:{html:{code:`<div class="row g-3">
  <div class="col-auto">
    <ngs-button-group label="Text alignment">
      <button ngsButton variant="outline">Left</button>
      <button ngsButton variant="outline">Center</button>
      <button ngsButton variant="outline">Right</button>
    </ngs-button-group>
  </div>
  <div class="col-auto">
    <ngs-button-group label="Colour" divider>
      <button ngsButton color="secondary">Red</button>
      <button ngsButton color="secondary">Green</button>
      <button ngsButton color="secondary">Blue</button>
    </ngs-button-group>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-button-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text alignment&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>&gt;</span>Left<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>&gt;</span>Center<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>&gt;</span>Right<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-button-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-button-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Colour&quot;</span> <span class="hljs-attr">divider</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>Red<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>Green<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;secondary&quot;</span>&gt;</span>Blue<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-button-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton, NgsButtonGroup } from '@bootlace/core/button';

@Component({
  selector: 'docs-button-group-basic',
  imports: [NgsButton, NgsButtonGroup],
  templateUrl: './index.html',
})
export class ButtonGroupBasicExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsButtonGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-button-group-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsButtonGroup</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonGroupBasicExample</span> {}`}},sizes:{html:{code:`<div class="row g-3 align-items-center">
  @for (size of sizes; track size) {
    <div class="col-auto">
      <ngs-button-group [label]="'Pagination, ' + size" [size]="size">
        <button ngsButton variant="outline">1</button>
        <button ngsButton variant="outline">2</button>
        <button ngsButton variant="outline">3</button>
      </ngs-button-group>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  @for (size of sizes; track size) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-button-group</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;Pagination, &#x27; + size&quot;</span> [<span class="hljs-attr">size</span>]=<span class="hljs-string">&quot;size&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton, NgsButtonGroup, NgsButtonSize } from '@bootlace/core/button';

@Component({
  selector: 'docs-button-group-sizes',
  imports: [NgsButton, NgsButtonGroup],
  templateUrl: './index.html',
})
export class ButtonGroupSizesExample {
  protected readonly sizes: NgsButtonSize[] = ['xs', 'sm', 'md', 'lg'];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsButtonGroup</span>, <span class="hljs-title class_">NgsButtonSize</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-button-group-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsButtonGroup</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonGroupSizesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">sizes</span>: <span class="hljs-title class_">NgsButtonSize</span>[] = [<span class="hljs-string">&#x27;xs&#x27;</span>, <span class="hljs-string">&#x27;sm&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;lg&#x27;</span>];
}`}},vertical:{html:{code:`<div class="row">
  <div class="col-auto">
    <ngs-button-group label="Document actions" orientation="vertical">
      <button ngsButton variant="subtle">Open</button>
      <button ngsButton variant="subtle">Rename</button>
      <button ngsButton variant="subtle" color="danger">Delete</button>
    </ngs-button-group>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-button-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Document actions&quot;</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span>&gt;</span>Open<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span>&gt;</span>Rename<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;subtle&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>Delete<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-button-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsButton, NgsButtonGroup } from '@bootlace/core/button';

@Component({
  selector: 'docs-button-group-vertical',
  imports: [NgsButton, NgsButtonGroup],
  templateUrl: './index.html',
})
export class ButtonGroupVerticalExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsButtonGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-button-group-vertical&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsButtonGroup</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ButtonGroupVerticalExample</span> {}`}}};var w=class e{tab=Yn(`examples`);sources=C;basic=d;vertical=b;sizes=j;static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-button-group-page`]],inputs:{tab:[1,`tab`]},decls:32,vars:7,consts:[[`heading`,`Button Group`,`package`,`@bootlace/core/button`,`path`,`/components/buttons/button-group`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`vertical`,`heading`,`Vertical`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(a,o){a&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` Joins buttons into one segmented control, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.btn-group`),vi(),Zf(5,`. `),vi(),ce(6,`docs-example`,2),Zf(7,` A horizontal group, optionally with `),ce(8,`code`),Zf(9,`divider`),vi(),Zf(10,` between buttons. `),vi(),ce(11,`docs-example`,3),Zf(12,` Stack the buttons with `),ce(13,`code`),Zf(14,`orientation="vertical"`),vi(),Zf(15,`. `),vi(),ce(16,`docs-example`,4),Zf(17,` The group's `),ce(18,`code`),Zf(19,`size`),vi(),Zf(20,` applies to every button in it. `),vi(),ce(21,`section`,5)(22,`h2`,6),Zf(23,`Accessibility`),vi(),ce(24,`p`),Zf(25,` The group has `),ce(26,`code`),Zf(27,`role="group"`),vi(),Zf(28,`. Give it an accessible name with `),ce(29,`code`),Zf(30,`label`),vi(),Zf(31,` so assistive technology announces what the buttons belong to. Each button stays a separate tab stop; for a single-choice control use a radio group or tabs instead. `),vi()()()),a&2&&(Ot(`tab`,o.tab()),Tt(6),Ot(`component`,o.basic)(`sources`,o.sources.basic),Tt(5),Ot(`component`,o.vertical)(`sources`,o.sources.vertical),Tt(5),Ot(`component`,o.sizes)(`sources`,o.sources.sizes))},dependencies:[ue,pe],encapsulation:2})};export{w as ButtonGroupPage};