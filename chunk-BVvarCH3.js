import{An as hg,Cr as rf,Gr as vf,Gt as Yn,In as jh,Jt as Zf,Sn as fh,Wr as ve,et as Ot,ir as nf,on as ce,qr as vi,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import{t as y$1}from"./chunk-B6-qfzlj.js";import"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";function T(e,t){if(e&1&&(ce(0,`div`,4),Zf(1),vi()),e&2){let a=t.$implicit;Tt(),hg(` Photo `,a,` `)}}var y=class e{cards=Array.from({length:12},(t,a)=>a+1);static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-scrollbar-horizontal`]],decls:6,vars:0,consts:[[1,`row`],[1,`col-12`,`lg:col-8`],[`orientation`,`horizontal`,`label`,`Photo strip`,1,`border`,`rounded`,`p-3`],[1,`d-flex`,`gap-3`,2,`inline-size`,`max-content`],[1,`border`,`rounded`,`p-4`,`text-center`,2,`inline-size`,`8rem`]],template:function(a,r){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-scrollbar`,2)(3,`div`,3),of(4,T,2,1,`div`,4,nf),vi()()()()),a&2&&(Tt(4),rf(r.cards))},dependencies:[y$1],encapsulation:2})};function N(e,t){if(e&1&&(ce(0,`th`,4),Zf(1),vi()),e&2){let a=t.$implicit;Tt(),fh(a)}}function z(e,t){if(e&1&&(ce(0,`td`),Zf(1),vi()),e&2){let a=t.$implicit,r=vf().$implicit;Tt(),jh(``,a,` `,r)}}function D(e,t){if(e&1&&(ce(0,`tr`),of(1,z,2,2,`td`,null,nf),vi()),e&2){let a=vf();Tt(),rf(a.columns)}}var f=class e{columns=[`Name`,`Role`,`Team`,`City`,`Country`,`Started`,`Status`];rows=Array.from({length:12},(t,a)=>a+1);static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-scrollbar-table`]],decls:11,vars:0,consts:[[1,`row`],[1,`col-12`,`lg:col-8`],[`orientation`,`both`,`label`,`Team members table`,1,`border`,`rounded`,2,`max-height`,`12rem`],[1,`table`,`mb-0`,2,`inline-size`,`56rem`],[`scope`,`col`]],template:function(a,r){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-scrollbar`,2)(3,`table`,3)(4,`thead`)(5,`tr`),of(6,N,2,1,`th`,4,nf),vi()(),ce(8,`tbody`),of(9,D,3,0,`tr`,null,nf),vi()()()()()),a&2&&(Tt(6),rf(r.columns),Tt(3),rf(r.rows))},dependencies:[y$1],encapsulation:2})};function V(e,t){if(e&1&&(ce(0,`p`,3),Zf(1),vi()),e&2){let a=t.$implicit;Tt(),hg(` Release `,a,`: small fixes, faster start-up and clearer error messages. `)}}var v=class e{lines=Array.from({length:12},(t,a)=>a+1);static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-scrollbar-vertical`]],decls:5,vars:0,consts:[[1,`row`],[1,`col-12`,`md:col-6`,`lg:col-4`],[`label`,`Release notes`,1,`border`,`rounded`,`p-3`,2,`max-height`,`10rem`],[1,`mb-2`]],template:function(a,r){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-scrollbar`,2),of(3,V,2,1,`p`,3,nf),vi()()()),a&2&&(Tt(3),rf(r.lines))},dependencies:[y$1],encapsulation:2})};function I(e,t){if(e&1&&(ce(0,`p`,3),Zf(1),vi()),e&2){let a=t.$implicit,r=vf().$implicit;Tt(),jh(``,r,`: line `,a)}}function P(e,t){if(e&1&&(ce(0,`div`,1)(1,`ngs-scrollbar`,2),of(2,I,2,2,`p`,3,nf),vi()()),e&2){let a=t.$implicit,r=vf();Tt(),Ot(`visibility`,a)(`label`,`Visibility `+a),Tt(),rf(r.lines)}}var S=class e{modes=[`auto`,`always`,`hidden`];lines=Array.from({length:10},(t,a)=>a+1);static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-scrollbar-visibility`]],decls:3,vars:0,consts:[[1,`row`,`gy-3`],[1,`col-12`,`md:col-4`],[1,`border`,`rounded`,`p-3`,2,`max-height`,`8rem`,3,`visibility`,`label`],[1,`mb-1`]],template:function(a,r){a&1&&(ce(0,`div`,0),of(1,P,4,2,`div`,1,nf),vi()),a&2&&(Tt(),rf(r.modes))},dependencies:[y$1],encapsulation:2})};var q={horizontal:{html:{code:`<div class="row">
  <div class="col-12 lg:col-8">
    <ngs-scrollbar orientation="horizontal" label="Photo strip" class="border rounded p-3">
      <div class="d-flex gap-3" style="inline-size: max-content">
        @for (card of cards; track card) {
          <div class="border rounded p-4 text-center" style="inline-size: 8rem">
            Photo {{ card }}
          </div>
        }
      </div>
    </ngs-scrollbar>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-scrollbar</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Photo strip&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;border rounded p-3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;d-flex gap-3&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;inline-size: max-content&quot;</span>&gt;</span>
        @for (card of cards; track card) {
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;border rounded p-4 text-center&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;inline-size: 8rem&quot;</span>&gt;</span>
            Photo {{ card }}
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        }
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-scrollbar</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsScrollbar } from '@bootlace/core/scrollbar';

@Component({
  selector: 'docs-scrollbar-horizontal',
  imports: [NgsScrollbar],
  templateUrl: './index.html',
})
export class ScrollbarHorizontalExample {
  protected readonly cards = Array.from({ length: 12 }, (_, i) => i + 1);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsScrollbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/scrollbar&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-scrollbar-horizontal&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsScrollbar</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ScrollbarHorizontalExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> cards = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">12</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> i + <span class="hljs-number">1</span>);
}`}},table:{html:{code:`<div class="row">
  <div class="col-12 lg:col-8">
    <ngs-scrollbar
      orientation="both"
      label="Team members table"
      class="border rounded"
      style="max-height: 12rem"
    >
      <table class="table mb-0" style="inline-size: 56rem">
        <thead>
          <tr>
            @for (column of columns; track column) {
              <th scope="col">{{ column }}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for (row of rows; track row) {
            <tr>
              @for (column of columns; track column) {
                <td>{{ column }} {{ row }}</td>
              }
            </tr>
          }
        </tbody>
      </table>
    </ngs-scrollbar>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-scrollbar</span>
      <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;both&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Team members table&quot;</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;border rounded&quot;</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;max-height: 12rem&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;table mb-0&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;inline-size: 56rem&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            @for (column of columns; track column) {
              <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">&quot;col&quot;</span>&gt;</span>{{ column }}<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            }
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
          @for (row of rows; track row) {
            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
              @for (column of columns; track column) {
                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ column }} {{ row }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              }
            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
          }
        <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-scrollbar</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsScrollbar } from '@bootlace/core/scrollbar';

@Component({
  selector: 'docs-scrollbar-table',
  imports: [NgsScrollbar],
  templateUrl: './index.html',
})
export class ScrollbarTableExample {
  protected readonly columns = ['Name', 'Role', 'Team', 'City', 'Country', 'Started', 'Status'];
  protected readonly rows = Array.from({ length: 12 }, (_, i) => i + 1);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsScrollbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/scrollbar&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-scrollbar-table&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsScrollbar</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ScrollbarTableExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> columns = [<span class="hljs-string">&#x27;Name&#x27;</span>, <span class="hljs-string">&#x27;Role&#x27;</span>, <span class="hljs-string">&#x27;Team&#x27;</span>, <span class="hljs-string">&#x27;City&#x27;</span>, <span class="hljs-string">&#x27;Country&#x27;</span>, <span class="hljs-string">&#x27;Started&#x27;</span>, <span class="hljs-string">&#x27;Status&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> rows = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">12</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> i + <span class="hljs-number">1</span>);
}`}},vertical:{html:{code:`<div class="row">
  <div class="col-12 md:col-6 lg:col-4">
    <ngs-scrollbar label="Release notes" class="border rounded p-3" style="max-height: 10rem">
      @for (line of lines; track line) {
        <p class="mb-2">
          Release {{ line }}: small fixes, faster start-up and clearer error messages.
        </p>
      }
    </ngs-scrollbar>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6 lg:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-scrollbar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Release notes&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;border rounded p-3&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;max-height: 10rem&quot;</span>&gt;</span>
      @for (line of lines; track line) {
        <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-2&quot;</span>&gt;</span>
          Release {{ line }}: small fixes, faster start-up and clearer error messages.
        <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-scrollbar</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsScrollbar } from '@bootlace/core/scrollbar';

@Component({
  selector: 'docs-scrollbar-vertical',
  imports: [NgsScrollbar],
  templateUrl: './index.html',
})
export class ScrollbarVerticalExample {
  protected readonly lines = Array.from({ length: 12 }, (_, i) => i + 1);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsScrollbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/scrollbar&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-scrollbar-vertical&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsScrollbar</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ScrollbarVerticalExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> lines = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">12</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> i + <span class="hljs-number">1</span>);
}`}},visibility:{html:{code:`<div class="row gy-3">
  @for (mode of modes; track mode) {
    <div class="col-12 md:col-4">
      <ngs-scrollbar
        [visibility]="mode"
        [label]="'Visibility ' + mode"
        class="border rounded p-3"
        style="max-height: 8rem"
      >
        @for (line of lines; track line) {
          <p class="mb-1">{{ mode }}: line {{ line }}</p>
        }
      </ngs-scrollbar>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row gy-3&quot;</span>&gt;</span>
  @for (mode of modes; track mode) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-scrollbar</span>
        [<span class="hljs-attr">visibility</span>]=<span class="hljs-string">&quot;mode&quot;</span>
        [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;Visibility &#x27; + mode&quot;</span>
        <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;border rounded p-3&quot;</span>
        <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;max-height: 8rem&quot;</span>
      &gt;</span>
        @for (line of lines; track line) {
          <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>{{ mode }}: line {{ line }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
        }
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-scrollbar</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsScrollbar } from '@bootlace/core/scrollbar';

@Component({
  selector: 'docs-scrollbar-visibility',
  imports: [NgsScrollbar],
  templateUrl: './index.html',
})
export class ScrollbarVisibilityExample {
  protected readonly modes = ['auto', 'always', 'hidden'] as const;
  protected readonly lines = Array.from({ length: 10 }, (_, i) => i + 1);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsScrollbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/scrollbar&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-scrollbar-visibility&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsScrollbar</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ScrollbarVisibilityExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> modes = [<span class="hljs-string">&#x27;auto&#x27;</span>, <span class="hljs-string">&#x27;always&#x27;</span>, <span class="hljs-string">&#x27;hidden&#x27;</span>] <span class="hljs-keyword">as</span> <span class="hljs-keyword">const</span>;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> lines = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">10</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> i + <span class="hljs-number">1</span>);
}`}}};var C=class e{tab=Yn(`examples`);sources=q;vertical=v;horizontal=y;visibility=S;table=f;static ɵfac=function(a){return new(a||e)};static ɵcmp=ve({type:e,selectors:[[`docs-scrollbar-page`]],inputs:{tab:[1,`tab`]},decls:66,vars:9,consts:[[`heading`,`Scrollbar`,`package`,`@bootlace/core/scrollbar`,`path`,`/components/scrollbar`,3,`tab`],[1,`docs-page-lead`],[`id`,`vertical`,`heading`,`Vertical`,3,`component`,`sources`],[`id`,`horizontal`,`heading`,`Horizontal`,3,`component`,`sources`],[`id`,`visibility`,`heading`,`Visibility`,3,`component`,`sources`],[`id`,`table`,`heading`,`Around a table`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(a,r){a&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A scroll container with a thin scrollbar that is hidden at rest and appears on hover, focus or scroll. It is the browser's own scroller, styled with `),ce(3,`code`),Zf(4,`scrollbar-width`),vi(),Zf(5,` and `),ce(6,`code`),Zf(7,`scrollbar-color`),vi(),Zf(8,`, so keyboard, wheel, touch and screen reader scrolling stay native. The thumb colour follows light and dark mode. `),vi(),ce(9,`docs-example`,2),Zf(10,` Limit the height of `),ce(11,`code`),Zf(12,`ngs-scrollbar`),vi(),Zf(13,` and the content scrolls. Give it a `),ce(14,`code`),Zf(15,`label`),vi(),Zf(16,` so it is a named region. `),vi(),ce(17,`docs-example`,3)(18,`code`),Zf(19,`orientation="horizontal"`),vi(),Zf(20,` scrolls sideways only. Content wider than the host needs an explicit width, such as `),ce(21,`code`),Zf(22,`inline-size: max-content`),vi(),Zf(23,`. `),vi(),ce(24,`docs-example`,4)(25,`code`),Zf(26,`auto`),vi(),Zf(27,` (default) shows the thumb on hover, focus and scroll, `),ce(28,`code`),Zf(29,`always`),vi(),Zf(30,` keeps it visible and `),ce(31,`code`),Zf(32,`hidden`),vi(),Zf(33,` draws none while the content still scrolls. `),vi(),ce(34,`docs-example`,5)(35,`code`),Zf(36,`orientation="both"`),vi(),Zf(37,` makes any wide or tall content, such as a table, scroll in both directions. `),vi(),ce(38,`section`,6)(39,`h2`,7),Zf(40,`Accessibility`),vi(),ce(41,`p`),Zf(42,` The host is the native scroll container, so the browser handles arrow keys, Page Up and Down, Home and End, wheel, touch and assistive technology scrolling. A scroll region without focusable content must be reachable by keyboard, so the host has `),ce(43,`code`),Zf(44,`tabindex="0"`),vi(),Zf(45,`; set `),ce(46,`code`),Zf(47,`[focusable]="false"`),vi(),Zf(48,` when the content already has focusable elements. With a `),ce(49,`code`),Zf(50,`label`),vi(),Zf(51,` the host is a `),ce(52,`code`),Zf(53,`region`),vi(),Zf(54,` with that name, which satisfies the axe rule `),ce(55,`code`),Zf(56,`scrollable-region-focusable`),vi(),Zf(57,`. `),vi(),ce(58,`p`),Zf(59,` No drawn thumb is added, so nothing needs hiding from the accessibility tree. Browsers that use overlay scrollbars (touch, macOS) ignore `),ce(60,`code`),Zf(61,`scrollbar-color`),vi(),Zf(62,` and keep their own behaviour. For a dark region inside a light page, set `),ce(63,`code`),Zf(64,`data-bs-theme="dark"`),vi(),Zf(65,` on or above the host. `),vi()()()),a&2&&(Ot(`tab`,r.tab()),Tt(9),Ot(`component`,r.vertical)(`sources`,r.sources.vertical),Tt(8),Ot(`component`,r.horizontal)(`sources`,r.sources.horizontal),Tt(7),Ot(`component`,r.visibility)(`sources`,r.sources.visibility),Tt(10),Ot(`component`,r.table)(`sources`,r.sources.table))},dependencies:[ue,pe],encapsulation:2})};export{C as ScrollbarPage};