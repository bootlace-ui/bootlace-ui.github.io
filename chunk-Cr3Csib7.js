import{A as J4,An as hg,At as W,B as Kf,Br as ui,Ct as U0,G as Lr,Gr as vf,Gt as Yn,I as K,It as XR,Jt as Zf,L as KC,Ln as jn,Ot as Vm,Pt as XC,Rn as jo,Rr as ue,Tn as gf,Ut as YZ,Vt as Y3,W as Ll,Wr as ve,Yn as lt,Z as Na,Zn as m7,Zr as wf,_r as q3,bn as f7,ei as xh,en as ah,et as Ot,i as $t,ln as cj,mn as dh,nr as nA,on as ce,q as Mh,qr as vi,r as $f,ri as yU,tt as P0,xt as Tt,zn as k,zt as Xo}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import{t as l}from"./chunk-B6h8Jb5u.js";import{A as ll,C as at,F as qn,M as ms,N as pn,c as Hn,n as Ba,v as Ur,w as cs}from"./chunk-DycqepRM.js";import"./chunk-CfGjEUxa.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as u}from"./chunk-D4gOm0ql.js";import{t as f}from"./chunk-_QnoVoFv.js";import{n as de}from"./chunk-DBfEr8HX.js";var xs=[`input`];var _s=[`group`];var Ss=[`panel`];function ws(r,n){r&1&&(ce(0,`span`,7),ue(1,`ngs-spinner`,9),vi())}function qs(r,n){if(r&1){let s=gf();ce(0,`span`,8)(1,`button`,10),ui(`click`,function(){q3(s);let c=vf();return Y3(c.clear())}),vi()()}if(r&2){let s=vf();Tt(),Ot(`label`,s.clearLabel()??s.i18n.clear)}}function Es(r,n){if(r&1){let s=gf();ce(0,`ngs-listbox`,11),ui(`optionSelected`,function(c){q3(s);let o=vf();return Y3(o.pick(c))}),vi()}if(r&2){let s=vf();Na(`min-width`,s.panelWidth(),`px`),Ot(`id`,s.listboxId)(`focusable`,!1)(`items`,s.items())(`loading`,s.loading()||s.pending())(`label`,s.label()??s.i18n.searchbar.search)(`emptyText`,s.emptyText())}}var m=class r extends qn{overlays=k(Hn);vcr=k(Xo);browser=YZ(k(lt));i18n=k(o);searchIcon=yU;input=nA.required(`input`);group=nA.required(`group`);panel=nA.required(`panel`);listbox=nA(de);placeholder=Yn(``);label=Yn();size=Yn(`md`);clearable=Yn(!0,{transform:$t});clearLabel=Yn();loading=Yn(!1,{transform:$t});suggestions=Yn(null);suggestionLabel=Yn(n=>String(n));emptyText=Yn();debounce=Yn(300,{transform:Vm});search=XR();selected=XR();cleared=XR();listboxId=Ba(`ngs-listbox`);panelWidth=W(0);suggesting=jo(()=>this.suggestions()!==null);open=W(!1);pending=W(!1);showClear=jo(()=>this.clearable()&&!this.isDisabled()&&!!this.value());items=jo(()=>{let n=this.suggestionLabel();return(this.suggestions()??[]).map((s,e)=>({value:e,label:n(s)}))});ref=null;timer;constructor(){super(),J4(()=>{let n=this.open()&&this.suggesting()&&!this.isDisabled();K(()=>n?this.openPanel():this.closePanel())}),k(jn).onDestroy(()=>{clearTimeout(this.timer),this.ref?.close()})}focus(){this.input().nativeElement.focus()}onInput(n){let s=n.target.value;this.setValue(s),this.open.set(!!s&&this.suggesting()),this.listbox()?.clearActive(),this.schedule(s)}onFocus(){this.value()&&this.suggesting()&&this.open.set(!0)}onBlur(){this.open.set(!1),this.markTouched()}onKeydown(n){let s=n.key;if(s===`ArrowDown`||s===`ArrowUp`){if(!this.suggesting())return;n.preventDefault(),this.open()?this.listbox()?.onKeydown(n):this.open.set(!!this.value())}else s===`Enter`?this.open()&&this.listbox()?.selectActive()?n.preventDefault():(this.flush(),this.open.set(!1)):s===`Escape`&&(this.open()?(n.preventDefault(),n.stopPropagation(),this.open.set(!1)):this.value()&&(n.preventDefault(),this.clear()))}clear(){this.setValue(``),this.open.set(!1),clearTimeout(this.timer),this.pending.set(!1),this.search.emit(``),this.cleared.emit(),this.focus()}pick(n){let s=this.suggestions()?.[n];s!==void 0&&(clearTimeout(this.timer),this.pending.set(!1),this.setValue(this.suggestionLabel()(s)),this.focus(),this.open.set(!1),this.selected.emit(s))}schedule(n){clearTimeout(this.timer);let s=this.debounce();s<=0||!n?(this.pending.set(!1),this.search.emit(n)):(this.pending.set(!0),this.timer=setTimeout(()=>{this.pending.set(!1),this.search.emit(n)},s))}flush(){clearTimeout(this.timer),this.pending.set(!1),this.search.emit(this.value()??``)}openPanel(){if(!this.browser||this.ref)return;this.panelWidth.set(this.group().nativeElement.getBoundingClientRect().width);let n=this.overlays.open(this.group().nativeElement,new at(this.panel(),this.vcr),{placement:`bottom-start`,offset:4,closeOnEscape:!1,panelClass:`ngs-listbox-panel`});this.ref=n,n.closed.subscribe(()=>{this.ref===n&&(this.ref=null,this.open()&&this.open.set(!1))})}closePanel(){let n=this.ref;this.ref=null,n?.close()}static ɵfac=function(s){return new(s||r)};static ɵcmp=ve({type:r,selectors:[[`ngs-searchbar`]],viewQuery:function(s,e){s&1&&ah(e.input,xs,5)(e.group,_s,5)(e.panel,Ss,5)(e.listbox,de,5),s&2&&wf(4)},hostAttrs:[1,`ngs-searchbar`],inputs:{placeholder:[1,`placeholder`],label:[1,`label`],size:[1,`size`],clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],loading:[1,`loading`],suggestions:[1,`suggestions`],suggestionLabel:[1,`suggestionLabel`],emptyText:[1,`emptyText`],debounce:[1,`debounce`]},outputs:{search:`search`,selected:`selected`,cleared:`cleared`},features:[Kf([ll(()=>r)]),P0],decls:10,vars:19,consts:[[`group`,``],[`input`,``],[`panel`,``],[1,`input-group`],[`aria-hidden`,`true`,1,`input-group-text`,`ngs-searchbar-icon`],[3,`icon`],[`type`,`search`,`autocomplete`,`off`,1,`form-control`,3,`input`,`keydown`,`focus`,`blur`,`disabled`,`value`],[1,`input-group-text`,`ngs-searchbar-loader`],[1,`input-group-text`,`ngs-searchbar-clear`],[`size`,`sm`],[`ngsButtonX`,``,3,`click`,`label`],[`activation`,`none`,3,`optionSelected`,`id`,`focusable`,`items`,`loading`,`label`,`emptyText`]],template:function(s,e){s&1&&(ce(0,`div`,3,0)(2,`span`,4),ue(3,`ngs-icon`,5),vi(),ce(4,`input`,6,1),ui(`input`,function(o){return e.onInput(o)})(`keydown`,function(o){return e.onKeydown(o)})(`focus`,function(){return e.onFocus()})(`blur`,function(){return e.onBlur()}),vi(),KC(6,ws,2,0,`span`,7),KC(7,qs,2,1,`span`,8),vi(),U0(8,Es,1,8,`ng-template`,null,2,cj)),s&2&&(dh(`input-group-sm`,e.size()===`sm`)(`input-group-lg`,e.size()===`lg`),Tt(3),Ot(`icon`,e.searchIcon),Tt(),dh(`is-invalid`,e.isInvalid()),Ot(`disabled`,e.isDisabled())(`value`,e.value()??``),Lr(`role`,e.suggesting()?`combobox`:null)(`aria-autocomplete`,e.suggesting()?`list`:null)(`aria-expanded`,e.suggesting()?e.open():null)(`aria-controls`,e.suggesting()&&e.open()?e.listboxId:null)(`aria-activedescendant`,e.open()?e.listbox()?.activeId()??null:null)(`aria-label`,e.label()??e.i18n.searchbar.search)(`aria-invalid`,e.isInvalid()?`true`:null)(`placeholder`,e.placeholder()||null),Tt(2),XC(e.loading()?6:-1),Tt(),XC(e.showClear()?7:-1))},dependencies:[l,Ll,de,u],encapsulation:2})};var q=class r{query=W(`Bootstrap`);searched=W(null);static ɵfac=function(s){return new(s||r)};static ɵcmp=ve({type:r,selectors:[[`docs-searchbar-basic`]],decls:6,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`placeholder`,`Search`,3,`valueChange`,`search`,`value`],[`aria-live`,`polite`,1,`mb-0`]],template:function(s,e){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-searchbar`,2),xh(`valueChange`,function(o){return $f(e.query,o)||(e.query=o),o}),ui(`search`,function(o){return e.searched.set(o)}),vi()(),ce(3,`div`,1)(4,`p`,3),Zf(5),vi()()()),s&2&&(Tt(2),Mh(`value`,e.query),Tt(3),hg(`Searched for: `,e.searched()??`nothing yet`))},dependencies:[m],encapsulation:2})};var Ns=[`Amsterdam`,`Athens`,`Berlin`,`Bergen`,`Copenhagen`,`Dublin`,`Lisbon`,`London`,`Madrid`,`Oslo`,`Paris`,`Prague`,`Rome`,`Stockholm`];var E=class r{results=W([]);loading=W(!1);picked=W(null);timer;find(n){if(clearTimeout(this.timer),!n){this.loading.set(!1),this.results.set([]);return}this.loading.set(!0),this.timer=setTimeout(()=>{let s=n.toLowerCase();this.results.set(Ns.filter(e=>e.toLowerCase().includes(s))),this.loading.set(!1)},600)}ngOnDestroy(){clearTimeout(this.timer)}static ɵfac=function(s){return new(s||r)};static ɵcmp=ve({type:r,selectors:[[`docs-searchbar-suggestions`]],decls:6,vars:4,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`label`,`Search cities`,`placeholder`,`Search cities`,3,`search`,`selected`,`debounce`,`suggestions`,`loading`],[`aria-live`,`polite`,1,`mb-0`]],template:function(s,e){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-searchbar`,2),ui(`search`,function(o){return e.find(o)})(`selected`,function(o){return e.picked.set(o)}),vi()(),ce(3,`div`,1)(4,`p`,3),Zf(5),vi()()()),s&2&&(Tt(2),Ot(`debounce`,250)(`suggestions`,e.results())(`loading`,e.loading()),Tt(3),hg(`Picked: `,e.picked()??`nothing yet`))},dependencies:[m],encapsulation:2})};var N=class r{query=new pn(``,{nonNullable:!0});last=W(null);run(){this.last.set(this.query.value)}static ɵfac=function(s){return new(s||r)};static ɵcmp=ve({type:r,selectors:[[`docs-searchbar-toolbar`]],decls:12,vars:2,consts:[[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[1,`fw-semibold`],[1,`col`],[`size`,`sm`,`placeholder`,`Search the docs`,3,`search`,`formControl`],[`ngsButton`,``,`size`,`sm`,`type`,`button`,3,`click`],[1,`col-12`],[`aria-live`,`polite`,1,`mb-0`]],template:function(s,e){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`span`,2),Zf(3,`Acme`),vi()(),ce(4,`div`,3)(5,`ngs-searchbar`,4),f7(),ui(`search`,function(o){return e.last.set(o)}),vi()(),ce(6,`div`,1)(7,`button`,5),ui(`click`,function(){return e.run()}),Zf(8,`Go`),vi()(),ce(9,`div`,6)(10,`p`,7),Zf(11),vi()()()),s&2&&(Tt(5),Ot(`formControl`,e.query),m7(),Tt(6),hg(`Last search: `,e.last()??`none`))},dependencies:[f,m,ms,cs,Ur],encapsulation:2})};var fs={basic:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-searchbar placeholder="Search" [(value)]="query" (search)="searched.set($event)" />
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0" aria-live="polite">Searched for: {{ searched() ?? 'nothing yet' }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-searchbar</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Search&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;query&quot;</span> (<span class="hljs-attr">search</span>)=<span class="hljs-string">&quot;searched.set($event)&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Searched for: {{ searched() ?? &#x27;nothing yet&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsSearchbar } from '@bootlace/core/searchbar';

@Component({
  selector: 'docs-searchbar-basic',
  imports: [NgsSearchbar],
  templateUrl: './index.html',
})
export class SearchbarBasicExample {
  protected readonly query = signal('Bootstrap');
  protected readonly searched = signal<string | null>(null);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSearchbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/searchbar&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-searchbar-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSearchbar</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SearchbarBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> query = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;Bootstrap&#x27;</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> searched = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
}`}},suggestions:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-searchbar
      label="Search cities"
      placeholder="Search cities"
      [debounce]="250"
      [suggestions]="results()"
      [loading]="loading()"
      (search)="find($event)"
      (selected)="picked.set($event)"
    />
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0" aria-live="polite">Picked: {{ picked() ?? 'nothing yet' }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-searchbar</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Search cities&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Search cities&quot;</span>
      [<span class="hljs-attr">debounce</span>]=<span class="hljs-string">&quot;250&quot;</span>
      [<span class="hljs-attr">suggestions</span>]=<span class="hljs-string">&quot;results()&quot;</span>
      [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading()&quot;</span>
      (<span class="hljs-attr">search</span>)=<span class="hljs-string">&quot;find($event)&quot;</span>
      (<span class="hljs-attr">selected</span>)=<span class="hljs-string">&quot;picked.set($event)&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Picked: {{ picked() ?? &#x27;nothing yet&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, OnDestroy, signal } from '@angular/core';
import { NgsSearchbar } from '@bootlace/core/searchbar';

const CITIES = [
  'Amsterdam',
  'Athens',
  'Berlin',
  'Bergen',
  'Copenhagen',
  'Dublin',
  'Lisbon',
  'London',
  'Madrid',
  'Oslo',
  'Paris',
  'Prague',
  'Rome',
  'Stockholm',
];

@Component({
  selector: 'docs-searchbar-suggestions',
  imports: [NgsSearchbar],
  templateUrl: './index.html',
})
export class SearchbarSuggestionsExample implements OnDestroy {
  protected readonly results = signal<string[]>([]);
  protected readonly loading = signal(false);
  protected readonly picked = signal<string | null>(null);
  private timer: ReturnType<typeof setTimeout> | undefined;

  /** Simulates a slow request. */
  protected find(query: string): void {
    clearTimeout(this.timer);
    if (!query) {
      this.loading.set(false);
      this.results.set([]);
      return;
    }
    this.loading.set(true);
    this.timer = setTimeout(() => {
      const needle = query.toLowerCase();
      this.results.set(CITIES.filter((city) => city.toLowerCase().includes(needle)));
      this.loading.set(false);
    }, 600);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, <span class="hljs-title class_">OnDestroy</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSearchbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/searchbar&#x27;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">CITIES</span> = [
  <span class="hljs-string">&#x27;Amsterdam&#x27;</span>,
  <span class="hljs-string">&#x27;Athens&#x27;</span>,
  <span class="hljs-string">&#x27;Berlin&#x27;</span>,
  <span class="hljs-string">&#x27;Bergen&#x27;</span>,
  <span class="hljs-string">&#x27;Copenhagen&#x27;</span>,
  <span class="hljs-string">&#x27;Dublin&#x27;</span>,
  <span class="hljs-string">&#x27;Lisbon&#x27;</span>,
  <span class="hljs-string">&#x27;London&#x27;</span>,
  <span class="hljs-string">&#x27;Madrid&#x27;</span>,
  <span class="hljs-string">&#x27;Oslo&#x27;</span>,
  <span class="hljs-string">&#x27;Paris&#x27;</span>,
  <span class="hljs-string">&#x27;Prague&#x27;</span>,
  <span class="hljs-string">&#x27;Rome&#x27;</span>,
  <span class="hljs-string">&#x27;Stockholm&#x27;</span>,
];

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-searchbar-suggestions&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSearchbar</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SearchbarSuggestionsExample</span> <span class="hljs-keyword">implements</span> <span class="hljs-title class_">OnDestroy</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> results = signal&lt;<span class="hljs-built_in">string</span>[]&gt;([]);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> loading = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> picked = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">private</span> <span class="hljs-attr">timer</span>: <span class="hljs-title class_">ReturnType</span>&lt;<span class="hljs-keyword">typeof</span> <span class="hljs-built_in">setTimeout</span>&gt; | <span class="hljs-literal">undefined</span>;

  <span class="hljs-comment">/** Simulates a slow request. */</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">find</span>(<span class="hljs-attr">query</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-built_in">clearTimeout</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">timer</span>);
    <span class="hljs-keyword">if</span> (!query) {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">loading</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">false</span>);
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">results</span>.<span class="hljs-title function_">set</span>([]);
      <span class="hljs-keyword">return</span>;
    }
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">loading</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">timer</span> = <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> needle = query.<span class="hljs-title function_">toLowerCase</span>();
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">results</span>.<span class="hljs-title function_">set</span>(<span class="hljs-variable constant_">CITIES</span>.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">city</span>) =&gt;</span> city.<span class="hljs-title function_">toLowerCase</span>().<span class="hljs-title function_">includes</span>(needle)));
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">loading</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">false</span>);
    }, <span class="hljs-number">600</span>);
  }

  <span class="hljs-title function_">ngOnDestroy</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-built_in">clearTimeout</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">timer</span>);
  }
}`}},toolbar:{html:{code:`<div class="row g-2 align-items-center">
  <div class="col-auto">
    <span class="fw-semibold">Acme</span>
  </div>
  <div class="col">
    <ngs-searchbar
      size="sm"
      placeholder="Search the docs"
      [formControl]="query"
      (search)="last.set($event)"
    />
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" type="button" (click)="run()">Go</button>
  </div>
  <div class="col-12">
    <p class="mb-0" aria-live="polite">Last search: {{ last() ?? 'none' }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fw-semibold&quot;</span>&gt;</span>Acme<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-searchbar</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Search the docs&quot;</span>
      [<span class="hljs-attr">formControl</span>]=<span class="hljs-string">&quot;query&quot;</span>
      (<span class="hljs-attr">search</span>)=<span class="hljs-string">&quot;last.set($event)&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;run()&quot;</span>&gt;</span>Go<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Last search: {{ last() ?? &#x27;none&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgsButton } from '@bootlace/core/button';
import { NgsSearchbar } from '@bootlace/core/searchbar';

@Component({
  selector: 'docs-searchbar-toolbar',
  imports: [NgsButton, NgsSearchbar, ReactiveFormsModule],
  templateUrl: './index.html',
})
export class SearchbarToolbarExample {
  protected readonly query = new FormControl('', { nonNullable: true });
  protected readonly last = signal<string | null>(null);

  protected run(): void {
    this.last.set(this.query.value);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">ReactiveFormsModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSearchbar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/searchbar&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-searchbar-toolbar&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsSearchbar</span>, <span class="hljs-title class_">ReactiveFormsModule</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SearchbarToolbarExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> query = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;&#x27;</span>, { <span class="hljs-attr">nonNullable</span>: <span class="hljs-literal">true</span> });
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> last = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">run</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">last</span>.<span class="hljs-title function_">set</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">query</span>.<span class="hljs-property">value</span>);
  }
}`}}};var vs=class r{tab=Yn(`examples`);sources=fs;basic=q;suggestions=E;toolbar=N;static ɵfac=function(s){return new(s||r)};static ɵcmp=ve({type:r,selectors:[[`docs-searchbar-page`]],inputs:{tab:[1,`tab`]},decls:70,vars:7,consts:[[`heading`,`Searchbar`,`package`,`@bootlace/core/searchbar`,`path`,`/components/searchbar`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`suggestions`,`heading`,`Suggestions and loading`,3,`component`,`sources`],[`id`,`toolbar`,`heading`,`In a toolbar`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(s,e){s&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A search field built on a Bootstrap 6 `),ce(3,`code`),Zf(4,`.input-group`),vi(),Zf(5,` and a native `),ce(6,`code`),Zf(7,`<input type="search">`),vi(),Zf(8,`, with a leading search icon, a clear button and a loading spinner. Give it `),ce(9,`code`),Zf(10,`suggestions`),vi(),Zf(11,` and it becomes an editable combobox with a listbox of matches. It is a form control, and its `),ce(12,`code`),Zf(13,`search`),vi(),Zf(14,` output is debounced. `),vi(),ce(15,`docs-example`,2),Zf(16,` The clear button shows while the field has text, empties it and returns focus. `),ce(17,`code`),Zf(18,`search`),vi(),Zf(19,` fires after typing pauses, on Enter, and when the field is cleared. `),vi(),ce(20,`docs-example`,3),Zf(21,` Fill `),ce(22,`code`),Zf(23,`suggestions`),vi(),Zf(24,` from the `),ce(25,`code`),Zf(26,`search`),vi(),Zf(27,` output, and set `),ce(28,`code`),Zf(29,`loading`),vi(),Zf(30,` while the request runs. Arrow keys move through the list, Enter picks a suggestion and `),ce(31,`code`),Zf(32,`selected`),vi(),Zf(33,` emits it. An empty list reads "No results". `),vi(),ce(34,`docs-example`,4),Zf(35,` Place it in a grid row next to a brand and a button, here with a reactive `),ce(36,`code`),Zf(37,`formControl`),vi(),Zf(38,` and `),ce(39,`code`),Zf(40,`size="sm"`),vi(),Zf(41,`. `),vi(),ce(42,`section`,5)(43,`h2`,6),Zf(44,`Accessibility`),vi(),ce(45,`p`),Zf(46,` The field is a native search input named "Search" (change it with `),ce(47,`code`),Zf(48,`label`),vi(),Zf(49,`). With suggestions it becomes a `),ce(50,`code`),Zf(51,`role="combobox"`),vi(),Zf(52,` with `),ce(53,`code`),Zf(54,`aria-autocomplete="list"`),vi(),Zf(55,`, `),ce(56,`code`),Zf(57,`aria-expanded`),vi(),Zf(58,`, `),ce(59,`code`),Zf(60,`aria-controls`),vi(),Zf(61,` and `),ce(62,`code`),Zf(63,`aria-activedescendant`),vi(),Zf(64,`, so focus stays in the input while the highlighted suggestion is announced. The search icon is decorative, the clear button has an accessible name, and the spinner is a `),ce(65,`code`),Zf(66,`role="status"`),vi(),Zf(67,` region. `),vi(),ce(68,`p`),Zf(69,` Arrow Down opens the suggestions and moves down, Arrow Up moves up, Enter picks the highlighted suggestion (or runs the search when none is highlighted), and Escape closes the list; with the list closed it clears the field. The browser's own clear button is hidden so there is only one. `),vi()()()),s&2&&(Ot(`tab`,e.tab()),Tt(15),Ot(`component`,e.basic)(`sources`,e.sources.basic),Tt(5),Ot(`component`,e.suggestions)(`sources`,e.sources.suggestions),Tt(14),Ot(`component`,e.toolbar)(`sources`,e.sources.toolbar))},dependencies:[ue$1,pe],encapsulation:2})};export{vs as SearchbarPage};