import{An as hg,At as W$1,Br as ui,Cr as rf,Er as sL,Gr as vf,Gt as Yn,In as jh,Jt as Zf,P as Jf,Qn as mU,Rr as ue,Sn as fh,Tn as gf,Vt as Y3,W as Ll,Wr as ve,Y as NF,_r as q3,an as cU,ei as xh,et as Ot,in as bU,ir as nf,on as ce,p as DU,pr as pU,q as Mh,qn as lU,qr as vi,r as $f,ri as yU,rr as nU,ti as xl,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./chunk-DycqepRM.js";import"./chunk-B6-qfzlj.js";import{c as Q,d as _,l as U$1,u as W$2}from"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";var ls=()=>[`Account`,`Notifications`,`Privacy`];function is(p,o){if(p&1){let e=gf();ce(0,`a`,13),ui(`click`,function(){let u=q3(e).$implicit,r=vf();return Y3(r.current.set(u))}),Zf(1),vi()}if(p&2){let e=o.$implicit,t=vf();Ot(`active`,t.current()===e),Tt(),hg(` `,e,` `)}}var U=class p{collapsed=W$1(!1);settingsOpen=W$1(!0);current=W$1(`Account`);home=lU;search=yU;groups=mU;gear=DU;heart=cU;star=bU;add=NF;static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-navigation-basic`]],decls:23,vars:12,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`,`lg:col-5`],[1,`frame`],[`label`,`Project`,`collapsible`,``,3,`collapsedChange`,`collapsed`],[`ngsNavLink`,``,`ngsNavigationHeader`,``,`routerLink`,`/navigation/menu`,3,`icon`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,3,`icon`],[`label`,`Settings`,3,`openChange`,`icon`,`open`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,3,`active`],[`ngsButton`,``,`block`,``,1,`add`],[3,`icon`],[1,`ngs-nav-label`],[`ngsNavLink`,``,`ngsNavigationEnd`,``,`routerLink`,`/navigation/menu`,3,`icon`],[1,`col-12`,`md:col-6`,`lg:col-7`,`fg-2`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,3,`click`,`active`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`ngs-navigation`,3),xh(`collapsedChange`,function(r){return $f(t.collapsed,r)||(t.collapsed=r),r}),ce(4,`a`,4),Zf(5,` Acme cloud console with a very long product name `),vi(),ce(6,`a`,5),Zf(7,`Search`),vi(),ce(8,`a`,5),Zf(9,`Groups`),vi(),ce(10,`ngs-navigation-group`,6),xh(`openChange`,function(r){return $f(t.settingsOpen,r)||(t.settingsOpen=r),r}),of(11,is,2,2,`a`,7,nf),vi(),ce(13,`a`,5),Zf(14,`By default an ellipsis is used for long text`),vi(),ce(15,`button`,8),ue(16,`ngs-icon`,9),ce(17,`span`,10),Zf(18,`Add`),vi()(),ce(19,`a`,11),Zf(20,`Favorites`),vi()()()(),ce(21,`div`,12),Zf(22),vi()()),e&2&&(Tt(3),Mh(`collapsed`,t.collapsed),Tt(),Ot(`icon`,t.home),Tt(2),Ot(`icon`,t.search),Tt(2),Ot(`icon`,t.groups),Tt(2),Ot(`icon`,t.gear),Mh(`open`,t.settingsOpen),Tt(),rf(Jf(11,ls)),Tt(2),Ot(`icon`,t.heart),Tt(3),Ot(`icon`,t.add),Tt(3),Ot(`icon`,t.star),Tt(3),jh(` `,t.collapsed()?`Collapsed to a rail`:`Expanded`,`. Current page: `,t.current(),`. `))},dependencies:[xl,f,Ll,Q,_,U$1],styles:[`.frame[_ngcontent-%COMP%]{block-size:36rem;background:var(--%NS%bg-1);border-radius:var(--%NS%radius-5)}.add[_ngcontent-%COMP%]{margin-block:.5rem}`]})};function ps(p,o){if(p&1){let e=gf();ce(0,`button`,5),ui(`click`,function(){let u=q3(e).$implicit,r=vf();return Y3(r.view.set(u))}),Zf(1),vi()}if(p&2){let e=o.$implicit,t=vf();Ot(`active`,t.view()===e),Tt(),fh(e)}}var T=class p{views=[`All`,`Unread`,`Starred`];view=W$1(`All`);static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-navigation-buttons`]],decls:7,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`],[`label`,`Filter`,3,`landmark`],[`ngsNavLink`,``,3,`active`],[1,`col-12`,`fg-2`],[`ngsNavLink`,``,3,`click`,`active`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-nav`,2),of(3,ps,2,2,`button`,3,nf),vi()(),ce(5,`div`,4),Zf(6),vi()()),e&2&&(Tt(2),Ot(`landmark`,!1),Tt(),rf(t.views),Tt(3),hg(`Showing: `,t.view()))},dependencies:[W$2,Q],encapsulation:2})};var D=class p{home=lU;mail=pU;setting=DU;static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-navigation-list`]],decls:43,vars:6,consts:[[1,`row`,`g-4`],[1,`col-12`],[1,`fg-2`],[`label`,`Main sections`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,`active`,``,3,`icon`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,3,`icon`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,`disabled`,``],[`label`,`Underline`,`variant`,`underline`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,`active`,``],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`],[`label`,`Plain`,`variant`,`plain`,`fill`,``],[1,`col-12`,`md:col-6`],[`label`,`Vertical`,`orientation`,`vertical`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`p`,2),Zf(3,`Pills, with icons and a disabled entry`),vi(),ce(4,`ngs-nav`,3)(5,`a`,4),Zf(6,`Home`),vi(),ce(7,`a`,5),Zf(8,`Messages`),vi(),ce(9,`a`,6),Zf(10,`Archive`),vi(),ce(11,`a`,5),Zf(12,`Settings`),vi()()(),ce(13,`div`,1)(14,`p`,2),Zf(15,`Underline`),vi(),ce(16,`ngs-nav`,7)(17,`a`,8),Zf(18,`Overview`),vi(),ce(19,`a`,9),Zf(20,`Usage`),vi(),ce(21,`a`,9),Zf(22,`Changes`),vi()()(),ce(23,`div`,1)(24,`p`,2),Zf(25,`Plain, filling the width`),vi(),ce(26,`ngs-nav`,10)(27,`a`,8),Zf(28,`Overview`),vi(),ce(29,`a`,9),Zf(30,`Usage`),vi(),ce(31,`a`,9),Zf(32,`Changes`),vi()()(),ce(33,`div`,11)(34,`p`,2),Zf(35,`Vertical`),vi(),ce(36,`ngs-nav`,12)(37,`a`,4),Zf(38,`Home`),vi(),ce(39,`a`,5),Zf(40,`Messages`),vi(),ce(41,`a`,5),Zf(42,`Settings`),vi()()()()),e&2&&(Tt(5),Ot(`icon`,t.home),Tt(2),Ot(`icon`,t.mail),Tt(4),Ot(`icon`,t.setting),Tt(26),Ot(`icon`,t.home),Tt(2),Ot(`icon`,t.mail),Tt(2),Ot(`icon`,t.setting))},dependencies:[xl,W$2,Q],encapsulation:2})};var O=class p{collapsed=W$1(!0);home=lU;search=yU;groups=mU;gear=DU;static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-navigation-rail`]],decls:15,vars:5,consts:[[1,`row`],[1,`col-12`],[1,`frame`],[`label`,`Rail`,`collapsible`,``,3,`collapsedChange`,`collapsed`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,`active`,``,3,`icon`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,3,`icon`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,`disabled`,``,3,`icon`],[`label`,`Settings`,3,`icon`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`ngs-navigation`,3),xh(`collapsedChange`,function(r){return $f(t.collapsed,r)||(t.collapsed=r),r}),ce(4,`a`,4),Zf(5,`Overview`),vi(),ce(6,`a`,5),Zf(7,`Search`),vi(),ce(8,`a`,6),Zf(9,`Groups`),vi(),ce(10,`ngs-navigation-group`,7)(11,`a`,8),Zf(12,`Account`),vi(),ce(13,`a`,8),Zf(14,`Privacy`),vi()()()()()()),e&2&&(Tt(3),Mh(`collapsed`,t.collapsed),Tt(),Ot(`icon`,t.home),Tt(2),Ot(`icon`,t.search),Tt(2),Ot(`icon`,t.groups),Tt(2),Ot(`icon`,t.gear))},dependencies:[xl,Q,_,U$1],styles:[`.frame[_ngcontent-%COMP%]{display:flex;block-size:20rem;background:var(--%NS%bg-1);border-radius:var(--%NS%radius-5)}`]})};function os(p,o){if(p&1&&(ce(0,`a`,5),Zf(1),vi()),p&2){let e=o.$implicit,t=vf();Ot(`icon`,t.folder),Tt(),hg(`Project `,e)}}var F=class p{home=lU;folder=nU;star=bU;projects=[`Alpha`,`Beta`,`Gamma`,`Delta`,`Epsilon`,`Zeta`,`Eta`];static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-navigation-scroll`]],decls:10,vars:2,consts:[[1,`row`],[1,`col-12`,`md:col-6`],[1,`frame`],[`label`,`Projects`],[`ngsNavLink`,``,`ngsNavigationHeader`,``,`routerLink`,`/navigation/menu`,3,`icon`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,3,`icon`],[`ngsNavLink`,``,`ngsNavigationEnd`,``,`routerLink`,`/navigation/menu`,3,`icon`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`ngs-navigation`,3)(4,`a`,4),Zf(5,` Workspace `),vi(),of(6,os,2,2,`a`,5,nf),ce(8,`a`,6),Zf(9,` Favorites `),vi()()()()()),e&2&&(Tt(4),Ot(`icon`,t.home),Tt(2),rf(t.projects),Tt(2),Ot(`icon`,t.star))},dependencies:[xl,Q,_],styles:[`.frame[_ngcontent-%COMP%]{block-size:16rem;background:var(--%NS%bg-1);border-radius:var(--%NS%radius-5)}`]})};var rs=()=>({exact:!0});var W=class p{static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-navigation-router-links`]],decls:9,vars:2,consts:[[1,`row`],[1,`col-12`],[`label`,`Menu pages`],[`ngsNavLink`,``,`routerLink`,`/navigation/menu`,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,3,`routerLinkActiveOptions`],[`ngsNavLink`,``,`routerLink`,`/navigation/tabs`,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`],[`ngsNavLink`,``,`routerLink`,`/navigation/breadcrumb`,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`]],template:function(e,t){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-nav`,2)(3,`a`,3),Zf(4,` Menu `),vi(),ce(5,`a`,4),Zf(6,` Tabs `),vi(),ce(7,`a`,5),Zf(8,` Breadcrumb `),vi()()()()),e&2&&(Tt(3),Ot(`routerLinkActiveOptions`,Jf(1,rs)))},dependencies:[W$2,Q,xl,sL],encapsulation:2})};var ts={basic:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6 lg:col-5">
    <div class="frame">
      <ngs-navigation label="Project" collapsible [(collapsed)]="collapsed">
        <a ngsNavLink ngsNavigationHeader routerLink="/navigation/menu" [icon]="home">
          Acme cloud console with a very long product name
        </a>
        <a ngsNavLink routerLink="/navigation/menu" [icon]="search">Search</a>
        <a ngsNavLink routerLink="/navigation/menu" [icon]="groups">Groups</a>
        <ngs-navigation-group label="Settings" [icon]="gear" [(open)]="settingsOpen">
          @for (name of ['Account', 'Notifications', 'Privacy']; track name) {
            <a
              ngsNavLink
              routerLink="/navigation/menu"
              [active]="current() === name"
              (click)="current.set(name)"
            >
              {{ name }}
            </a>
          }
        </ngs-navigation-group>
        <a ngsNavLink routerLink="/navigation/menu" [icon]="heart"
          >By default an ellipsis is used for long text</a
        >
        <button ngsButton block class="add">
          <ngs-icon [icon]="add" />
          <span class="ngs-nav-label">Add</span>
        </button>
        <a ngsNavLink ngsNavigationEnd routerLink="/navigation/menu" [icon]="star">Favorites</a>
      </ngs-navigation>
    </div>
  </div>
  <div class="col-12 md:col-6 lg:col-7 fg-2">
    {{ collapsed() ? 'Collapsed to a rail' : 'Expanded' }}. Current page: {{ current() }}.
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6 lg:col-5&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;frame&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-navigation</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Project&quot;</span> <span class="hljs-attr">collapsible</span> [(<span class="hljs-attr">collapsed</span>)]=<span class="hljs-string">&quot;collapsed&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">ngsNavigationHeader</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
          Acme cloud console with a very long product name
        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>Search<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;groups&quot;</span>&gt;</span>Groups<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-navigation-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Settings&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;gear&quot;</span> [(<span class="hljs-attr">open</span>)]=<span class="hljs-string">&quot;settingsOpen&quot;</span>&gt;</span>
          @for (name of [&#x27;Account&#x27;, &#x27;Notifications&#x27;, &#x27;Privacy&#x27;]; track name) {
            <span class="hljs-tag">&lt;<span class="hljs-name">a</span>
              <span class="hljs-attr">ngsNavLink</span>
              <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span>
              [<span class="hljs-attr">active</span>]=<span class="hljs-string">&quot;current() === name&quot;</span>
              (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;current.set(name)&quot;</span>
            &gt;</span>
              {{ name }}
            <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
          }
        <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navigation-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;heart&quot;</span>
          &gt;</span>By default an ellipsis is used for long text&lt;/a
        &gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">block</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;add&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;add&quot;</span> /&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ngs-nav-label&quot;</span>&gt;</span>Add<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">ngsNavigationEnd</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;star&quot;</span>&gt;</span>Favorites<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navigation</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6 lg:col-7 fg-2&quot;</span>&gt;</span>
    {{ collapsed() ? &#x27;Collapsed to a rail&#x27; : &#x27;Expanded&#x27; }}. Current page: {{ current() }}.
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsIcon } from '@bootlace/core/icon';
import { RouterLink } from '@angular/router';
import { NgsNavLink, NgsNavigation, NgsNavigationGroup } from '@bootlace/core/navigation';
import {
  ngsIconAdd,
  ngsIconHeart,
  ngsIconHome,
  ngsIconPeoples,
  ngsIconSearch,
  ngsIconSetting,
  ngsIconStar,
} from '@bootlace/icons';

@Component({
  selector: 'docs-navigation-basic',
  imports: [RouterLink, NgsButton, NgsIcon, NgsNavLink, NgsNavigation, NgsNavigationGroup],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class NavigationBasicExample {
  protected readonly collapsed = signal(false);
  protected readonly settingsOpen = signal(true);
  protected readonly current = signal('Account');
  protected readonly home = ngsIconHome;
  protected readonly search = ngsIconSearch;
  protected readonly groups = ngsIconPeoples;
  protected readonly gear = ngsIconSetting;
  protected readonly heart = ngsIconHeart;
  protected readonly star = ngsIconStar;
  protected readonly add = ngsIconAdd;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNavLink</span>, <span class="hljs-title class_">NgsNavigation</span>, <span class="hljs-title class_">NgsNavigationGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navigation&#x27;</span>;
<span class="hljs-keyword">import</span> {
  ngsIconAdd,
  ngsIconHeart,
  ngsIconHome,
  ngsIconPeoples,
  ngsIconSearch,
  ngsIconSetting,
  ngsIconStar,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-navigation-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">RouterLink</span>, <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsIcon</span>, <span class="hljs-title class_">NgsNavLink</span>, <span class="hljs-title class_">NgsNavigation</span>, <span class="hljs-title class_">NgsNavigationGroup</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./index.scss&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NavigationBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> collapsed = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> settingsOpen = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> current = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;Account&#x27;</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> home = ngsIconHome;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> search = ngsIconSearch;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> groups = ngsIconPeoples;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> gear = ngsIconSetting;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> heart = ngsIconHeart;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> star = ngsIconStar;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> add = ngsIconAdd;
}`},scss:{code:`.frame {
  block-size: 36rem;
  background: var(--bg-1);
  border-radius: var(--radius-5);
}

.add {
  margin-block: 0.5rem;
}`,html:`<span class="hljs-selector-class">.frame</span> {
  <span class="hljs-attribute">block-size</span>: <span class="hljs-number">36rem</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">var</span>(--bg-<span class="hljs-number">1</span>);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-built_in">var</span>(--radius-<span class="hljs-number">5</span>);
}

<span class="hljs-selector-class">.add</span> {
  <span class="hljs-attribute">margin-block</span>: <span class="hljs-number">0.5rem</span>;
}`}},buttons:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <ngs-nav label="Filter" [landmark]="false">
      @for (name of views; track name) {
        <button ngsNavLink [active]="view() === name" (click)="view.set(name)">{{ name }}</button>
      }
    </ngs-nav>
  </div>
  <div class="col-12 fg-2">Showing: {{ view() }}</div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-nav</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Filter&quot;</span> [<span class="hljs-attr">landmark</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
      @for (name of views; track name) {
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsNavLink</span> [<span class="hljs-attr">active</span>]=<span class="hljs-string">&quot;view() === name&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;view.set(name)&quot;</span>&gt;</span>{{ name }}<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-nav</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 fg-2&quot;</span>&gt;</span>Showing: {{ view() }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsNav, NgsNavLink } from '@bootlace/core/navigation';

@Component({
  selector: 'docs-navigation-buttons',
  imports: [NgsNav, NgsNavLink],
  templateUrl: './index.html',
})
export class NavigationButtonsExample {
  protected readonly views = ['All', 'Unread', 'Starred'];
  protected readonly view = signal('All');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNav</span>, <span class="hljs-title class_">NgsNavLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navigation&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-navigation-buttons&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsNav</span>, <span class="hljs-title class_">NgsNavLink</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NavigationButtonsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> views = [<span class="hljs-string">&#x27;All&#x27;</span>, <span class="hljs-string">&#x27;Unread&#x27;</span>, <span class="hljs-string">&#x27;Starred&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> view = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;All&#x27;</span>);
}`}},list:{html:{code:`<div class="row g-4">
  <div class="col-12">
    <p class="fg-2">Pills, with icons and a disabled entry</p>
    <ngs-nav label="Main sections">
      <a ngsNavLink routerLink="/navigation/menu" [icon]="home" active>Home</a>
      <a ngsNavLink routerLink="/navigation/menu" [icon]="mail">Messages</a>
      <a ngsNavLink routerLink="/navigation/menu" disabled>Archive</a>
      <a ngsNavLink routerLink="/navigation/menu" [icon]="setting">Settings</a>
    </ngs-nav>
  </div>
  <div class="col-12">
    <p class="fg-2">Underline</p>
    <ngs-nav label="Underline" variant="underline">
      <a ngsNavLink routerLink="/navigation/menu" active>Overview</a>
      <a ngsNavLink routerLink="/navigation/menu">Usage</a>
      <a ngsNavLink routerLink="/navigation/menu">Changes</a>
    </ngs-nav>
  </div>
  <div class="col-12">
    <p class="fg-2">Plain, filling the width</p>
    <ngs-nav label="Plain" variant="plain" fill>
      <a ngsNavLink routerLink="/navigation/menu" active>Overview</a>
      <a ngsNavLink routerLink="/navigation/menu">Usage</a>
      <a ngsNavLink routerLink="/navigation/menu">Changes</a>
    </ngs-nav>
  </div>
  <div class="col-12 md:col-6">
    <p class="fg-2">Vertical</p>
    <ngs-nav label="Vertical" orientation="vertical">
      <a ngsNavLink routerLink="/navigation/menu" [icon]="home" active>Home</a>
      <a ngsNavLink routerLink="/navigation/menu" [icon]="mail">Messages</a>
      <a ngsNavLink routerLink="/navigation/menu" [icon]="setting">Settings</a>
    </ngs-nav>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2&quot;</span>&gt;</span>Pills, with icons and a disabled entry<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-nav</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Main sections&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">active</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;mail&quot;</span>&gt;</span>Messages<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Archive<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;setting&quot;</span>&gt;</span>Settings<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-nav</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2&quot;</span>&gt;</span>Underline<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-nav</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Underline&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;underline&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> <span class="hljs-attr">active</span>&gt;</span>Overview<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span>&gt;</span>Usage<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span>&gt;</span>Changes<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-nav</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2&quot;</span>&gt;</span>Plain, filling the width<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-nav</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Plain&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;plain&quot;</span> <span class="hljs-attr">fill</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> <span class="hljs-attr">active</span>&gt;</span>Overview<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span>&gt;</span>Usage<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span>&gt;</span>Changes<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-nav</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2&quot;</span>&gt;</span>Vertical<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-nav</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Vertical&quot;</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">active</span>&gt;</span>Home<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;mail&quot;</span>&gt;</span>Messages<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;setting&quot;</span>&gt;</span>Settings<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-nav</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgsNav, NgsNavLink } from '@bootlace/core/navigation';
import { ngsIconHome, ngsIconMail, ngsIconSetting } from '@bootlace/icons';

@Component({
  selector: 'docs-navigation-list',
  imports: [RouterLink, NgsNav, NgsNavLink],
  templateUrl: './index.html',
})
export class NavigationListExample {
  protected readonly home = ngsIconHome;
  protected readonly mail = ngsIconMail;
  protected readonly setting = ngsIconSetting;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNav</span>, <span class="hljs-title class_">NgsNavLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navigation&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconHome, ngsIconMail, ngsIconSetting } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-navigation-list&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">RouterLink</span>, <span class="hljs-title class_">NgsNav</span>, <span class="hljs-title class_">NgsNavLink</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NavigationListExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> home = ngsIconHome;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> mail = ngsIconMail;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> setting = ngsIconSetting;
}`}},rail:{html:{code:`<div class="row">
  <div class="col-12">
    <div class="frame">
      <ngs-navigation label="Rail" collapsible [(collapsed)]="collapsed">
        <a ngsNavLink routerLink="/navigation/menu" [icon]="home" active>Overview</a>
        <a ngsNavLink routerLink="/navigation/menu" [icon]="search">Search</a>
        <a ngsNavLink routerLink="/navigation/menu" [icon]="groups" disabled>Groups</a>
        <ngs-navigation-group label="Settings" [icon]="gear">
          <a ngsNavLink routerLink="/navigation/menu">Account</a>
          <a ngsNavLink routerLink="/navigation/menu">Privacy</a>
        </ngs-navigation-group>
      </ngs-navigation>
    </div>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;frame&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-navigation</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Rail&quot;</span> <span class="hljs-attr">collapsible</span> [(<span class="hljs-attr">collapsed</span>)]=<span class="hljs-string">&quot;collapsed&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;home&quot;</span> <span class="hljs-attr">active</span>&gt;</span>Overview<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;search&quot;</span>&gt;</span>Search<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;groups&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Groups<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-navigation-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Settings&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;gear&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span>&gt;</span>Account<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span>&gt;</span>Privacy<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navigation-group</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navigation</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgsNavLink, NgsNavigation, NgsNavigationGroup } from '@bootlace/core/navigation';
import { ngsIconHome, ngsIconPeoples, ngsIconSearch, ngsIconSetting } from '@bootlace/icons';

@Component({
  selector: 'docs-navigation-rail',
  imports: [RouterLink, NgsNavLink, NgsNavigation, NgsNavigationGroup],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class NavigationRailExample {
  protected readonly collapsed = signal(true);
  protected readonly home = ngsIconHome;
  protected readonly search = ngsIconSearch;
  protected readonly groups = ngsIconPeoples;
  protected readonly gear = ngsIconSetting;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNavLink</span>, <span class="hljs-title class_">NgsNavigation</span>, <span class="hljs-title class_">NgsNavigationGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navigation&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconHome, ngsIconPeoples, ngsIconSearch, ngsIconSetting } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-navigation-rail&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">RouterLink</span>, <span class="hljs-title class_">NgsNavLink</span>, <span class="hljs-title class_">NgsNavigation</span>, <span class="hljs-title class_">NgsNavigationGroup</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./index.scss&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NavigationRailExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> collapsed = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> home = ngsIconHome;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> search = ngsIconSearch;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> groups = ngsIconPeoples;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> gear = ngsIconSetting;
}`},scss:{code:`.frame {
  display: flex;
  block-size: 20rem;
  background: var(--bg-1);
  border-radius: var(--radius-5);
}`,html:`<span class="hljs-selector-class">.frame</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">block-size</span>: <span class="hljs-number">20rem</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">var</span>(--bg-<span class="hljs-number">1</span>);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-built_in">var</span>(--radius-<span class="hljs-number">5</span>);
}`}},"router-links":{html:{code:`<div class="row">
  <div class="col-12">
    <ngs-nav label="Menu pages">
      <a
        ngsNavLink
        routerLink="/navigation/menu"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        ariaCurrentWhenActive="page"
      >
        Menu
      </a>
      <a
        ngsNavLink
        routerLink="/navigation/tabs"
        routerLinkActive="active"
        ariaCurrentWhenActive="page"
      >
        Tabs
      </a>
      <a
        ngsNavLink
        routerLink="/navigation/breadcrumb"
        routerLinkActive="active"
        ariaCurrentWhenActive="page"
      >
        Breadcrumb
      </a>
    </ngs-nav>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-nav</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Menu pages&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>
        <span class="hljs-attr">ngsNavLink</span>
        <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span>
        <span class="hljs-attr">routerLinkActive</span>=<span class="hljs-string">&quot;active&quot;</span>
        [<span class="hljs-attr">routerLinkActiveOptions</span>]=<span class="hljs-string">&quot;{ exact: true }&quot;</span>
        <span class="hljs-attr">ariaCurrentWhenActive</span>=<span class="hljs-string">&quot;page&quot;</span>
      &gt;</span>
        Menu
      <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>
        <span class="hljs-attr">ngsNavLink</span>
        <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/tabs&quot;</span>
        <span class="hljs-attr">routerLinkActive</span>=<span class="hljs-string">&quot;active&quot;</span>
        <span class="hljs-attr">ariaCurrentWhenActive</span>=<span class="hljs-string">&quot;page&quot;</span>
      &gt;</span>
        Tabs
      <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>
        <span class="hljs-attr">ngsNavLink</span>
        <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/breadcrumb&quot;</span>
        <span class="hljs-attr">routerLinkActive</span>=<span class="hljs-string">&quot;active&quot;</span>
        <span class="hljs-attr">ariaCurrentWhenActive</span>=<span class="hljs-string">&quot;page&quot;</span>
      &gt;</span>
        Breadcrumb
      <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-nav</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsNav, NgsNavLink } from '@bootlace/core/navigation';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'docs-navigation-router-links',
  imports: [NgsNav, NgsNavLink, RouterLink, RouterLinkActive],
  templateUrl: './index.html',
})
export class NavigationRouterLinksExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNav</span>, <span class="hljs-title class_">NgsNavLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navigation&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span>, <span class="hljs-title class_">RouterLinkActive</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-navigation-router-links&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsNav</span>, <span class="hljs-title class_">NgsNavLink</span>, <span class="hljs-title class_">RouterLink</span>, <span class="hljs-title class_">RouterLinkActive</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NavigationRouterLinksExample</span> {}`}},scroll:{html:{code:`<div class="row">
  <div class="col-12 md:col-6">
    <div class="frame">
      <ngs-navigation label="Projects">
        <a ngsNavLink ngsNavigationHeader routerLink="/navigation/menu" [icon]="home">
          Workspace
        </a>
        @for (name of projects; track name) {
          <a ngsNavLink routerLink="/navigation/menu" [icon]="folder">Project {{ name }}</a>
        }
        <a ngsNavLink ngsNavigationEnd routerLink="/navigation/menu" [icon]="star"> Favorites </a>
      </ngs-navigation>
    </div>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;frame&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-navigation</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Projects&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">ngsNavigationHeader</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>
          Workspace
        <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        @for (name of projects; track name) {
          <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;folder&quot;</span>&gt;</span>Project {{ name }}<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
        }
        <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">ngsNavLink</span> <span class="hljs-attr">ngsNavigationEnd</span> <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;star&quot;</span>&gt;</span> Favorites <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-navigation</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgsNavLink, NgsNavigation } from '@bootlace/core/navigation';
import { ngsIconFolder, ngsIconHome, ngsIconStar } from '@bootlace/icons';

@Component({
  selector: 'docs-navigation-scroll',
  imports: [RouterLink, NgsNavLink, NgsNavigation],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class NavigationScrollExample {
  protected readonly home = ngsIconHome;
  protected readonly folder = ngsIconFolder;
  protected readonly star = ngsIconStar;
  protected readonly projects = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta'];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsNavLink</span>, <span class="hljs-title class_">NgsNavigation</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/navigation&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconFolder, ngsIconHome, ngsIconStar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-navigation-scroll&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">RouterLink</span>, <span class="hljs-title class_">NgsNavLink</span>, <span class="hljs-title class_">NgsNavigation</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./index.scss&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">NavigationScrollExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> home = ngsIconHome;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> folder = ngsIconFolder;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> star = ngsIconStar;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> projects = [<span class="hljs-string">&#x27;Alpha&#x27;</span>, <span class="hljs-string">&#x27;Beta&#x27;</span>, <span class="hljs-string">&#x27;Gamma&#x27;</span>, <span class="hljs-string">&#x27;Delta&#x27;</span>, <span class="hljs-string">&#x27;Epsilon&#x27;</span>, <span class="hljs-string">&#x27;Zeta&#x27;</span>, <span class="hljs-string">&#x27;Eta&#x27;</span>];
}`},scss:{code:`.frame {
  block-size: 16rem;
  background: var(--bg-1);
  border-radius: var(--radius-5);
}`,html:`<span class="hljs-selector-class">.frame</span> {
  <span class="hljs-attribute">block-size</span>: <span class="hljs-number">16rem</span>;
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">var</span>(--bg-<span class="hljs-number">1</span>);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-built_in">var</span>(--radius-<span class="hljs-number">5</span>);
}`}}};var es=class p{tab=Yn(`examples`);sources=ts;basic=U;rail=O;scroll=F;list=D;buttons=T;routerLinks=W;static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-navigation-page`]],inputs:{tab:[1,`tab`]},decls:164,vars:13,consts:[[`heading`,`Menu`,`package`,`@bootlace/core/navigation`,`path`,`/navigation/menu`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`rail`,`heading`,`Icon rail`,3,`component`,`sources`],[`id`,`scroll`,`heading`,`Short panel`,3,`component`,`sources`],[`id`,`list`,`heading`,`Lists`,3,`component`,`sources`],[`id`,`buttons`,`heading`,`Buttons`,3,`component`,`sources`],[`id`,`router-links`,`heading`,`Router links`,3,`component`,`sources`],[`aria-labelledby`,`scope`,1,`docs-section`],[`id`,`scope`,1,`h6`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(e,t){e&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A navigation panel in the style of Taiga UI's aside navigation: a header, entries with icons, expandable groups, an action and a pinned item, that collapses to an icon rail. The entries are `),ce(3,`code`),Zf(4,`ngsNavLink`),vi(),Zf(5,`s on Bootstrap 6 `),ce(6,`code`),Zf(7,`.nav-link`),vi(),Zf(8,`, which also work on their own in `),ce(9,`code`),Zf(10,`ngs-nav`),vi(),Zf(11,`, a plain horizontal or vertical list. `),vi(),ce(12,`docs-example`,2)(13,`code`),Zf(14,`ngs-navigation`),vi(),Zf(15,` takes `),ce(16,`code`),Zf(17,`ngsNavLink`),vi(),Zf(18,` entries, `),ce(19,`code`),Zf(20,`ngs-navigation-group`),vi(),Zf(21,`s and a full-width action. The entry marked `),ce(22,`code`),Zf(23,`ngsNavigationHeader`),vi(),Zf(24,` is ruled off at the top, and the one marked `),ce(25,`code`),Zf(26,`ngsNavigationEnd`),vi(),Zf(27,` is pinned to the bottom. Long text is cut with an ellipsis and shown in full as a tooltip. `),ce(28,`code`),Zf(29,`collapsible`),vi(),Zf(30,` adds the toggle. The panel fills its container's height and takes its colour; set `),ce(31,`code`),Zf(32,`--navigation-bg`),vi(),Zf(33,` to colour it. `),vi(),ce(34,`docs-example`,3)(35,`code`),Zf(36,`[(collapsed)]`),vi(),Zf(37,` shrinks the panel to a rail of icons. Labels stay available to screen readers and as tooltips, and a group opens the panel instead of expanding inside the rail. `),vi(),ce(38,`docs-example`,4),Zf(39,` The panel always contains its content. When the container is too short, the header stays at the top, the pinned entry stays at the bottom and the entries in between scroll. `),vi(),ce(40,`docs-example`,5)(41,`code`),Zf(42,`ngs-nav`),vi(),Zf(43,` is the plain list: `),ce(44,`code`),Zf(45,`variant`),vi(),Zf(46,` is `),ce(47,`code`),Zf(48,`pills`),vi(),Zf(49,` (default), `),ce(50,`code`),Zf(51,`underline`),vi(),Zf(52,` or `),ce(53,`code`),Zf(54,`plain`),vi(),Zf(55,`; `),ce(56,`code`),Zf(57,`orientation="vertical"`),vi(),Zf(58,` stacks it and `),ce(59,`code`),Zf(60,`fill`),vi(),Zf(61,` shares the width. `),ce(62,`code`),Zf(63,`active`),vi(),Zf(64,` marks the current entry, `),ce(65,`code`),Zf(66,`disabled`),vi(),Zf(67,` greys one out and `),ce(68,`code`),Zf(69,`icon`),vi(),Zf(70,` adds a leading icon. `),vi(),ce(71,`docs-example`,6),Zf(72,` Use `),ce(73,`code`),Zf(74,`button[ngsNavLink]`),vi(),Zf(75,` to switch something on the same page, and turn the landmark off with `),ce(76,`code`),Zf(77,`[landmark]="false"`),vi(),Zf(78,`. The current button has `),ce(79,`code`),Zf(80,`aria-current="true"`),vi(),Zf(81,`. `),vi(),ce(82,`docs-example`,7),Zf(83,` Let the router mark the current page: `),ce(84,`code`),Zf(85,`routerLinkActive="active"`),vi(),Zf(86,` with `),ce(87,`code`),Zf(88,`ariaCurrentWhenActive="page"`),vi(),Zf(89,`. Add `),ce(90,`code`),Zf(91,`[routerLinkActiveOptions]="{ exact: true }"`),vi(),Zf(92,` to a link that is a prefix of others. `),vi(),ce(93,`section`,8)(94,`h2`,9),Zf(95,`Navigation and Sidebar`),vi(),ce(96,`p`),Zf(97,` Taiga UI's aside navigation is a free-standing panel; its layout package then places it in a shell. The same split applies here. `),ce(98,`code`),Zf(99,`ngs-navigation`),vi(),Zf(100,` is the standalone panel: you fill it with markup, and it fits a card, a settings page or your own shell. `),ce(101,`code`),Zf(102,`ngs-sidebar`),vi(),Zf(103,` is the slot of `),ce(104,`code`),Zf(105,`ngs-layout`),vi(),Zf(106,`: a fixed column that turns into a drawer below `),ce(107,`code`),Zf(108,`lg`),vi(),Zf(109,`, built from a route tree. They are not merged because the sidebar's styles are tied to the layout's columns, seams and drawer. The panel reuses the sidebar's one generic piece, the height-animating group (`),ce(110,`code`),Zf(111,`.ngs-sidebar-collapse`),vi(),Zf(112,`), and has its own item styling. `),vi()(),ce(113,`section`,10)(114,`h2`,11),Zf(115,`Accessibility`),vi(),ce(116,`p`)(117,`code`),Zf(118,`ngs-navigation`),vi(),Zf(119,` and `),ce(120,`code`),Zf(121,`ngs-nav`),vi(),Zf(122,` are `),ce(123,`code`),Zf(124,`navigation`),vi(),Zf(125,` landmarks: give them a `),ce(126,`code`),Zf(127,`label`),vi(),Zf(128,` when a page has more than one. The current link has `),ce(129,`code`),Zf(130,`aria-current="page"`),vi(),Zf(131,`; a current button has `),ce(132,`code`),Zf(133,`aria-current="true"`),vi(),Zf(134,`. Every entry is a normal tab stop, so arrow keys do nothing special; use `),ce(135,`code`),Zf(136,`ngs-tabs`),vi(),Zf(137,` for the tablist pattern. `),vi(),ce(138,`p`),Zf(139,` A group's toggle is a button with `),ce(140,`code`),Zf(141,`aria-expanded`),vi(),Zf(142,` and `),ce(143,`code`),Zf(144,`aria-controls`),vi(),Zf(145,`; closed entries are `),ce(146,`code`),Zf(147,`inert`),vi(),Zf(148,`, so they leave the tab order. The collapse toggle has `),ce(149,`code`),Zf(150,`aria-expanded`),vi(),Zf(151,` and a name that says what it does. In the rail the labels are visually hidden but still read out, and appear as tooltips. A disabled button is natively disabled; a disabled link has `),ce(152,`code`),Zf(153,`aria-disabled`),vi(),Zf(154,`, leaves the tab order and ignores clicks, a `),ce(155,`code`),Zf(156,`routerLink`),vi(),Zf(157,`'s included. An icon-only entry needs an `),ce(158,`code`),Zf(159,`aria-label`),vi(),Zf(160,`. The chevron's rotation and the width change stop with `),ce(161,`code`),Zf(162,`prefers-reduced-motion`),vi(),Zf(163,`. `),vi()()()),e&2&&(Ot(`tab`,t.tab()),Tt(12),Ot(`component`,t.basic)(`sources`,t.sources.basic),Tt(22),Ot(`component`,t.rail)(`sources`,t.sources.rail),Tt(4),Ot(`component`,t.scroll)(`sources`,t.sources.scroll),Tt(2),Ot(`component`,t.list)(`sources`,t.sources.list),Tt(31),Ot(`component`,t.buttons)(`sources`,t.sources.buttons),Tt(11),Ot(`component`,t.routerLinks)(`sources`,t.sources[`router-links`]))},dependencies:[ue$1,pe],encapsulation:2})};export{es as NavigationPage};