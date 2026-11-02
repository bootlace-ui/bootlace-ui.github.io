import{n as l,t as k}from"./chunk-DJVAsKa_.js";import{An as hg,At as W,Br as ui,Gt as Yn,Jt as Zf,Rr as ue,Wr as ve,et as Ot,on as ce,qr as vi,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./chunk-B6h8Jb5u.js";import"./chunk-DycqepRM.js";import"./chunk-CfGjEUxa.js";import{p as me}from"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";var q=[`Botswana`,`Kenya`,`Malawi`,`Namibia`,`Tanzania`,`Zambia`,`Zimbabwe`];var h=class l{find=p=>new Promise(e=>setTimeout(()=>e(q.filter(t=>t.toLowerCase().startsWith(p.toLowerCase())).map(t=>({title:t,section:`Africa`,link:`https://en.wikipedia.org/wiki/${t}`}))),300));static ɵfac=function(e){return new(e||l)};static ɵcmp=ve({type:l,selectors:[[`docs-search-async`]],decls:1,vars:2,consts:[[`label`,`Find a country`,`placeholder`,`Country name`,`storageKey`,`docs-search-countries`,3,`search`,`hotkey`]],template:function(e,t){e&1&&ue(0,`ngs-search`,0),e&2&&Ot(`search`,t.find)(`hotkey`,!1)},dependencies:[me],encapsulation:2})};var _=[{title:`Button`,section:`Components › Buttons`,link:`/components/buttons/button`},{title:`Modal`,section:`Components`,link:`/components/modal`},{title:`Drawer`,section:`Components`,link:`/components/drawer`},{title:`Text input`,section:`Form`,link:`/form/text-input`},{title:`Select`,section:`Form`,link:`/form/select`},{title:`Tabs`,section:`Navigation`,link:`/navigation/tabs`}].map(l$1=>l(k({},l$1),{group:l$1.section.split(` › `)[0]}));var d=class l{opened=W(null);find=p=>{let e=p.toLowerCase().split(/\s+/);return _.filter(t=>e.every(m=>t.title.toLowerCase().includes(m)))};static ɵfac=function(e){return new(e||l)};static ɵcmp=ve({type:l,selectors:[[`docs-search-basic`]],decls:6,vars:3,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-12`,`md:col-6`],[`placeholder`,`Search pages`,`storageKey`,`docs-search-example`,3,`selected`,`search`,`hotkey`],[`aria-live`,`polite`,1,`mb-0`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-search`,2),ui(`selected`,function(N){return t.opened.set(N.title)}),vi()(),ce(3,`div`,1)(4,`p`,3),Zf(5),vi()()()),e&2&&(Tt(2),Ot(`search`,t.find)(`hotkey`,!1),Tt(3),hg(`Opened: `,t.opened()??`nothing yet`))},dependencies:[me],encapsulation:2})};var E={async:{html:{code:`<ngs-search
  label="Find a country"
  placeholder="Country name"
  storageKey="docs-search-countries"
  [search]="find"
  [hotkey]="false"
/>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-search</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Find a country&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Country name&quot;</span>
  <span class="hljs-attr">storageKey</span>=<span class="hljs-string">&quot;docs-search-countries&quot;</span>
  [<span class="hljs-attr">search</span>]=<span class="hljs-string">&quot;find&quot;</span>
  [<span class="hljs-attr">hotkey</span>]=<span class="hljs-string">&quot;false&quot;</span>
/&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsSearch, NgsSearchFn, NgsSearchResult } from '@bootlace/core/search';

const COUNTRIES = ['Botswana', 'Kenya', 'Malawi', 'Namibia', 'Tanzania', 'Zambia', 'Zimbabwe'];

@Component({
  selector: 'docs-search-async',
  imports: [NgsSearch],
  templateUrl: './index.html',
})
export class SearchAsyncExample {
  /** Stands in for a request to a server, which answers after 300 ms. */
  protected readonly find: NgsSearchFn = (query) =>
    new Promise<NgsSearchResult[]>((resolve) =>
      setTimeout(
        () =>
          resolve(
            COUNTRIES.filter((name) => name.toLowerCase().startsWith(query.toLowerCase())).map(
              (name) => ({
                title: name,
                section: 'Africa',
                link: \`https://en.wikipedia.org/wiki/\${name}\`,
              }),
            ),
          ),
        300,
      ),
    );
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSearch</span>, <span class="hljs-title class_">NgsSearchFn</span>, <span class="hljs-title class_">NgsSearchResult</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/search&#x27;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">COUNTRIES</span> = [<span class="hljs-string">&#x27;Botswana&#x27;</span>, <span class="hljs-string">&#x27;Kenya&#x27;</span>, <span class="hljs-string">&#x27;Malawi&#x27;</span>, <span class="hljs-string">&#x27;Namibia&#x27;</span>, <span class="hljs-string">&#x27;Tanzania&#x27;</span>, <span class="hljs-string">&#x27;Zambia&#x27;</span>, <span class="hljs-string">&#x27;Zimbabwe&#x27;</span>];

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-search-async&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSearch</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SearchAsyncExample</span> {
  <span class="hljs-comment">/** Stands in for a request to a server, which answers after 300 ms. */</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">find</span>: <span class="hljs-title class_">NgsSearchFn</span> = <span class="hljs-function">(<span class="hljs-params">query</span>) =&gt;</span>
    <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>&lt;<span class="hljs-title class_">NgsSearchResult</span>[]&gt;(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span>
      <span class="hljs-built_in">setTimeout</span>(
        <span class="hljs-function">() =&gt;</span>
          <span class="hljs-title function_">resolve</span>(
            <span class="hljs-variable constant_">COUNTRIES</span>.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> name.<span class="hljs-title function_">toLowerCase</span>().<span class="hljs-title function_">startsWith</span>(query.<span class="hljs-title function_">toLowerCase</span>())).<span class="hljs-title function_">map</span>(
              <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> ({
                <span class="hljs-attr">title</span>: name,
                <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;Africa&#x27;</span>,
                <span class="hljs-attr">link</span>: <span class="hljs-string">\`https://en.wikipedia.org/wiki/<span class="hljs-subst">\${name}</span>\`</span>,
              }),
            ),
          ),
        <span class="hljs-number">300</span>,
      ),
    );
}`}},basic:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-12 md:col-6">
    <ngs-search
      placeholder="Search pages"
      storageKey="docs-search-example"
      [search]="find"
      [hotkey]="false"
      (selected)="opened.set($event.title)"
    />
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0" aria-live="polite">Opened: {{ opened() ?? 'nothing yet' }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-search</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Search pages&quot;</span>
      <span class="hljs-attr">storageKey</span>=<span class="hljs-string">&quot;docs-search-example&quot;</span>
      [<span class="hljs-attr">search</span>]=<span class="hljs-string">&quot;find&quot;</span>
      [<span class="hljs-attr">hotkey</span>]=<span class="hljs-string">&quot;false&quot;</span>
      (<span class="hljs-attr">selected</span>)=<span class="hljs-string">&quot;opened.set($event.title)&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Opened: {{ opened() ?? &#x27;nothing yet&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsSearch, NgsSearchFn, NgsSearchResult } from '@bootlace/core/search';

const PAGES: NgsSearchResult[] = [
  { title: 'Button', section: 'Components \u203A Buttons', link: '/components/buttons/button' },
  { title: 'Modal', section: 'Components', link: '/components/modal' },
  { title: 'Drawer', section: 'Components', link: '/components/drawer' },
  { title: 'Text input', section: 'Form', link: '/form/text-input' },
  { title: 'Select', section: 'Form', link: '/form/select' },
  { title: 'Tabs', section: 'Navigation', link: '/navigation/tabs' },
].map((page) => ({ ...page, group: page.section.split(' \u203A ')[0] }));

@Component({
  selector: 'docs-search-basic',
  imports: [NgsSearch],
  templateUrl: './index.html',
})
export class SearchBasicExample {
  protected readonly opened = signal<string | null>(null);

  protected readonly find: NgsSearchFn = (query) => {
    const words = query.toLowerCase().split(/\\s+/);
    return PAGES.filter((page) => words.every((word) => page.title.toLowerCase().includes(word)));
  };
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSearch</span>, <span class="hljs-title class_">NgsSearchFn</span>, <span class="hljs-title class_">NgsSearchResult</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/search&#x27;</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">PAGES</span>: <span class="hljs-title class_">NgsSearchResult</span>[] = [
  { <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Button&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;Components \u203A Buttons&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/components/buttons/button&#x27;</span> },
  { <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Modal&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;Components&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/components/modal&#x27;</span> },
  { <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Drawer&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;Components&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/components/drawer&#x27;</span> },
  { <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Text input&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;Form&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/form/text-input&#x27;</span> },
  { <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Select&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;Form&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/form/select&#x27;</span> },
  { <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Tabs&#x27;</span>, <span class="hljs-attr">section</span>: <span class="hljs-string">&#x27;Navigation&#x27;</span>, <span class="hljs-attr">link</span>: <span class="hljs-string">&#x27;/navigation/tabs&#x27;</span> },
].<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">page</span>) =&gt;</span> ({ ...page, <span class="hljs-attr">group</span>: page.<span class="hljs-property">section</span>.<span class="hljs-title function_">split</span>(<span class="hljs-string">&#x27; \u203A &#x27;</span>)[<span class="hljs-number">0</span>] }));

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-search-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSearch</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SearchBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> opened = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">find</span>: <span class="hljs-title class_">NgsSearchFn</span> = <span class="hljs-function">(<span class="hljs-params">query</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> words = query.<span class="hljs-title function_">toLowerCase</span>().<span class="hljs-title function_">split</span>(<span class="hljs-regexp">/\\s+/</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-variable constant_">PAGES</span>.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">page</span>) =&gt;</span> words.<span class="hljs-title function_">every</span>(<span class="hljs-function">(<span class="hljs-params">word</span>) =&gt;</span> page.<span class="hljs-property">title</span>.<span class="hljs-title function_">toLowerCase</span>().<span class="hljs-title function_">includes</span>(word)));
  };
}`}}};var C=class l{tab=Yn(`examples`);sources=E;basic=d;async=h;static ɵfac=function(e){return new(e||l)};static ɵcmp=ve({type:l,selectors:[[`docs-search-page`]],inputs:{tab:[1,`tab`]},decls:73,vars:5,consts:[[`heading`,`Search`,`package`,`@bootlace/core/search`,`path`,`/components/search`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`async`,`heading`,`Results from a server`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(e,t){e&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A site search like the one on these docs: a button that opens a modal with a search field, results as you type, and the pages the user opened recently or saved. You find the results; the component draws them, handles the keyboard and remembers what was opened. Try it with `),ce(3,`kbd`),Zf(4,`Ctrl K`),vi(),Zf(5,` (`),ce(6,`kbd`),Zf(7,`⌘K`),vi(),Zf(8,` on a Mac). `),vi(),ce(9,`docs-example`,2),Zf(10,` Pass `),ce(11,`code`),Zf(12,`search`),vi(),Zf(13,` a function that takes the query and returns results: a `),ce(14,`code`),Zf(15,`title`),vi(),Zf(16,`, a `),ce(17,`code`),Zf(18,`section`),vi(),Zf(19,` line and a `),ce(20,`code`),Zf(21,`link`),vi(),Zf(22,`. Results with a `),ce(23,`code`),Zf(24,`group`),vi(),Zf(25,` are listed under it. Choosing one emits `),ce(26,`code`),Zf(27,`selected`),vi(),Zf(28,` and goes to its link with the router (a URL with a scheme opens with a full page load). Before you type, the dialog lists Recent and Favorites, kept in `),ce(29,`code`),Zf(30,`localStorage`),vi(),Zf(31,` under `),ce(32,`code`),Zf(33,`storageKey`),vi(),Zf(34,`; give each search on a site its own key. These examples set `),ce(35,`code`),Zf(36,`[hotkey]="false"`),vi(),Zf(37,`, as Ctrl K belongs to the search in the navbar. `),vi(),ce(38,`docs-example`,3)(39,`code`),Zf(40,`search`),vi(),Zf(41,` can return a promise. It runs on every change of the query, and an answer that arrives after a newer query is ignored, so a search over the network should debounce or cancel by itself. `),ce(42,`code`),Zf(43,`label`),vi(),Zf(44,` names the button and the dialog. These results link to Wikipedia. `),vi(),ce(45,`section`,4)(46,`h2`,5),Zf(47,`Accessibility`),vi(),ce(48,`p`),Zf(49,` The button has `),ce(50,`code`),Zf(51,`aria-haspopup="dialog"`),vi(),Zf(52,` and announces its shortcut with `),ce(53,`code`),Zf(54,`aria-keyshortcuts`),vi(),Zf(55,`. The dialog is a native modal `),ce(56,`code`),Zf(57,`<dialog>`),vi(),Zf(58,` named after the button. Focus starts in the field and returns to the button when the dialog closes. `),vi(),ce(59,`p`),Zf(60,` The field is a `),ce(61,`code`),Zf(62,`role="combobox"`),vi(),Zf(63,` that controls a listbox of results, and the highlighted result is its `),ce(64,`code`),Zf(65,`aria-activedescendant`),vi(),Zf(66,`, so focus never leaves the field. Arrow Up and Arrow Down move the highlight, Enter opens the highlighted result, and Escape closes. `),ce(67,`kbd`),Zf(68,`Ctrl D`),vi(),Zf(69,` (`),ce(70,`kbd`),Zf(71,`⌘D`),vi(),Zf(72,`) saves the highlighted result to Favorites or removes it, and Delete removes a saved result. The field describes these keys to screen readers, and a status region reads out how many results were found. The star and remove icons on saved rows are a mouse shortcut for the same keys, so they are hidden from assistive technology. `),vi()()()),e&2&&(Ot(`tab`,t.tab()),Tt(9),Ot(`component`,t.basic)(`sources`,t.sources.basic),Tt(29),Ot(`component`,t.async)(`sources`,t.sources.async))},dependencies:[ue$1,pe],encapsulation:2})};export{C as SearchPage};