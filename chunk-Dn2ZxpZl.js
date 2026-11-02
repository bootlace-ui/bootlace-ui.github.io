import{An as hg,At as W,Br as ui,Cr as rf,Gr as vf,Gt as Yn,In as jh,Jt as Zf,L as KC,P as Jf,Pt as XC,Rr as ue,Sn as fh,Tn as gf,Vt as Y3,Wr as ve,Zn as m7,_r as q3,bn as f7,ei as xh,et as Ot,f as Cf,ir as nf,on as ce,q as Mh,qr as vi,r as $f,ur as of,xt as Tt}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import"./chunk-B6h8Jb5u.js";import{D as gn,E as fs$1,I as rt,M as ms,N as pn,O as gs,P as ps,T as ds,j as ln,k as hs,m as Ot$1,r as Br,u as Hr,w as cs,z as zr}from"./chunk-DycqepRM.js";import"./chunk-CfGjEUxa.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f}from"./chunk-_QnoVoFv.js";import{i as se,t as C}from"./chunk-DBfEr8HX.js";import"./chunk-Dv7PHoGw.js";import{t as me}from"./chunk-DQmBexCj.js";import{n as m}from"./chunk-BPk3HYY3.js";import"./chunk-CT3GIJZF.js";import{t as A}from"./chunk-CX55sP_u.js";var N=class p{country=W(null);static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-select-basic`]],decls:18,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`id`,`basic-label`,1,`form-label`,`d-block`],[`labelledBy`,`basic-label`,`placeholder`,`Choose a country`,`clearable`,``,3,`valueChange`,`value`],[`value`,`fr`],[`value`,`de`],[`value`,`it`],[`value`,`es`],[`value`,`se`],[`aria-live`,`polite`,1,`mb-0`]],template:function(e,l){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`span`,2),Zf(3,`Country`),vi(),ce(4,`ngs-select`,3),xh(`valueChange`,function(i){return $f(l.country,i)||(l.country=i),i}),ce(5,`ngs-option`,4),Zf(6,`France`),vi(),ce(7,`ngs-option`,5),Zf(8,`Germany`),vi(),ce(9,`ngs-option`,6),Zf(10,`Italy`),vi(),ce(11,`ngs-option`,7),Zf(12,`Spain`),vi(),ce(13,`ngs-option`,8),Zf(14,`Sweden`),vi()()(),ce(15,`div`,1)(16,`p`,9),Zf(17),vi()()()),e&2&&(Tt(4),Mh(`value`,l.country),Tt(13),hg(`Selected: `,l.country()??`none`))},dependencies:[me,C],encapsulation:2})};var M=class p{food=W(`carrot`);static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-select-groups`]],decls:23,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`id`,`groups-label`,1,`form-label`,`d-block`],[`labelledBy`,`groups-label`,`placeholder`,`Choose a food`,3,`valueChange`,`value`],[`label`,`Fruit`],[`value`,`apple`],[`value`,`pear`,`disabled`,``],[`value`,`plum`],[`label`,`Vegetables`],[`value`,`carrot`],[`value`,`leek`],[`label`,`Unavailable`,`disabled`,``],[`value`,`fish`],[`aria-live`,`polite`,1,`mb-0`]],template:function(e,l){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`span`,2),Zf(3,`Food`),vi(),ce(4,`ngs-select`,3),xh(`valueChange`,function(i){return $f(l.food,i)||(l.food=i),i}),ce(5,`ngs-optgroup`,4)(6,`ngs-option`,5),Zf(7,`Apple`),vi(),ce(8,`ngs-option`,6),Zf(9,`Pear (out of season)`),vi(),ce(10,`ngs-option`,7),Zf(11,`Plum`),vi()(),ce(12,`ngs-optgroup`,8)(13,`ngs-option`,9),Zf(14,`Carrot`),vi(),ce(15,`ngs-option`,10),Zf(16,`Leek`),vi()(),ce(17,`ngs-optgroup`,11)(18,`ngs-option`,12),Zf(19,`Fish`),vi()()()(),ce(20,`div`,1)(21,`p`,13),Zf(22),vi()()()),e&2&&(Tt(4),Mh(`value`,l.food),Tt(18),hg(`Selected: `,l.food()??`none`))},dependencies:[me,C,se],encapsulation:2})};var T=class p{languages=[`TypeScript`,`Rust`,`Go`,`Python`,`Kotlin`,`Swift`];chips=W([`TypeScript`,`Rust`]);count=W([`Go`,`Python`,`Kotlin`]);static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-select-multiple`]],decls:11,vars:5,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`id`,`chips-label`,1,`form-label`,`d-block`],[`multiple`,``,`clearable`,``,`labelledBy`,`chips-label`,`placeholder`,`Pick languages`,3,`valueChange`,`options`,`value`],[`aria-live`,`polite`,1,`mt-2`,`mb-0`],[`id`,`count-label`,1,`form-label`,`d-block`],[`multiple`,``,`display`,`count`,`labelledBy`,`count-label`,`placeholder`,`Pick languages`,3,`valueChange`,`options`,`value`]],template:function(e,l){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`span`,2),Zf(3,`Languages (chips)`),vi(),ce(4,`ngs-select`,3),xh(`valueChange`,function(i){return $f(l.chips,i)||(l.chips=i),i}),vi(),ce(5,`p`,4),Zf(6),vi()(),ce(7,`div`,1)(8,`span`,5),Zf(9,`Languages (count)`),vi(),ce(10,`ngs-select`,6),xh(`valueChange`,function(i){return $f(l.count,i)||(l.count=i),i}),vi()()()),e&2&&(Tt(4),Ot(`options`,l.languages),Mh(`value`,l.chips),Tt(2),fh(l.chips()?.join(`, `)||`none`),Tt(4),Ot(`options`,l.languages),Mh(`value`,l.count))},dependencies:[me],encapsulation:2})};var D=class p{city=`oslo`;static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-select-native`]],decls:17,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`label`,`City`,`hint`,`The browser draws the list.`],[`ngsInput`,``,`name`,`city`,3,`ngModelChange`,`ngModel`],[`label`,`Norway`],[`value`,`oslo`],[`value`,`bergen`],[`label`,`Sweden`],[`value`,`stockholm`],[`value`,`malmo`,`disabled`,``],[1,`mb-0`]],template:function(e,l){e&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-textfield`,2)(3,`select`,3),f7(),xh(`ngModelChange`,function(i){return $f(l.city,i)||(l.city=i),i}),ce(4,`optgroup`,4)(5,`option`,5),Zf(6,`Oslo`),vi(),ce(7,`option`,6),Zf(8,`Bergen`),vi()(),ce(9,`optgroup`,7)(10,`option`,8),Zf(11,`Stockholm`),vi(),ce(12,`option`,9),Zf(13,`Malmö`),vi()()()()(),ce(14,`div`,1)(15,`p`,10),Zf(16),vi()()()),e&2&&(Tt(3),Mh(`ngModel`,l.city),m7(),Tt(13),hg(`City: `,l.city))},dependencies:[gs,ps,fs$1,gn,cs,Hr,m,A],encapsulation:2})};function vs(p,o){p&1&&(ce(0,`div`,4),Zf(1,`Choose an owner.`),vi())}function bs(p,o){p&1&&(ce(0,`div`,4),Zf(1,`Choose at least one reviewer.`),vi())}function ys(p,o){p&1&&(ce(0,`span`,9),Zf(1,`Assigned.`),vi())}var F=class p{users=[{id:1,name:`Ada Lovelace`,active:!0},{id:2,name:`Grace Hopper`,active:!0},{id:3,name:`Alan Turing`,active:!1},{id:4,name:`Margaret Hamilton`,active:!0}];form=new rt({owner:new pn(null,Ot$1.required),reviewers:new pn([],Ot$1.required)});sent=W(!1);id=o=>o.id;name=o=>o.name;inactive=o=>!o.active;submit(){this.form.markAllAsTouched(),this.sent.set(this.form.valid)}static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-select-reactive`]],decls:15,vars:12,consts:[[`novalidate`,``,1,`row`,`g-3`,3,`ngSubmit`,`formGroup`],[1,`col-12`,`md:col-6`],[`id`,`owner-label`,1,`form-label`,`d-block`],[`formControlName`,`owner`,`labelledBy`,`owner-label`,`placeholder`,`Choose an owner`,3,`options`,`optionValue`,`optionLabel`,`optionDisabled`],[1,`invalid-feedback`,`d-block`],[`id`,`reviewers-label`,1,`form-label`,`d-block`],[`multiple`,``,`formControlName`,`reviewers`,`labelledBy`,`reviewers-label`,`placeholder`,`Choose reviewers`,3,`options`,`optionValue`,`optionLabel`,`optionDisabled`],[1,`col-12`],[`ngsButton`,``,`type`,`submit`],[`role`,`status`,1,`ms-2`]],template:function(e,l){e&1&&(ce(0,`form`,0),ui(`ngSubmit`,function(){return l.submit()}),ce(1,`div`,1)(2,`span`,2),Zf(3,`Owner`),vi(),ce(4,`ngs-select`,3),f7(),vi(),KC(5,vs,2,0,`div`,4),vi(),ce(6,`div`,1)(7,`span`,5),Zf(8,`Reviewers`),vi(),ce(9,`ngs-select`,6),f7(),vi(),KC(10,bs,2,0,`div`,4),vi(),ce(11,`div`,7)(12,`button`,8),Zf(13,`Assign`),vi(),KC(14,ys,2,0,`span`,9),vi()()),e&2&&(Ot(`formGroup`,l.form),Tt(4),Ot(`options`,l.users)(`optionValue`,l.id)(`optionLabel`,l.name)(`optionDisabled`,l.inactive),m7(),Tt(),XC(l.form.controls.owner.invalid&&l.form.controls.owner.touched?5:-1),Tt(4),Ot(`options`,l.users)(`optionValue`,l.id)(`optionLabel`,l.name)(`optionDisabled`,l.inactive),m7(),Tt(),XC(l.form.controls.reviewers.invalid&&l.form.controls.reviewers.touched?10:-1),Tt(4),XC(l.sent()?14:-1))},dependencies:[f,me,ms,hs,cs,ds,Br,zr],encapsulation:2})};function xs(p,o){if(p&1&&(ce(0,`div`,1),ue(1,`ngs-select`,4),vi()),p&2){let e=o.$implicit,l=vf();Tt(),Ot(`size`,e)(`label`,`Colour, `+e)(`options`,l.colors)}}var B=class p{sizes=[`sm`,`md`,`lg`];colors=[`Red`,`Green`,`Blue`];static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-select-sizes`]],decls:7,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-4`],[`disabled`,``,`label`,`Disabled`,`placeholder`,`Disabled`,3,`options`],[`invalid`,``,`label`,`Invalid`,`placeholder`,`Invalid`,3,`options`],[`placeholder`,`Colour`,3,`size`,`label`,`options`]],template:function(e,l){e&1&&(ce(0,`div`,0),of(1,xs,2,3,`div`,1,nf),ce(3,`div`,1),ue(4,`ngs-select`,2),vi(),ce(5,`div`,1),ue(6,`ngs-select`,3),vi()()),e&2&&(Tt(),rf(l.sizes),Tt(3),Ot(`options`,l.colors),Tt(2),Ot(`options`,l.colors))},dependencies:[me],encapsulation:2})};function fs(p,o){p&1&&(ce(0,`div`,8),Zf(1,`A plan is required.`),vi())}var P=class p{plan=null;static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-select-template-driven`]],decls:18,vars:5,consts:[[`field`,`ngModel`],[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`id`,`plan-label`,1,`form-label`,`d-block`],[`required`,``,`name`,`plan`,`labelledBy`,`plan-label`,`placeholder`,`Choose a plan`,3,`ngModelChange`,`ngModel`],[`value`,`free`],[`value`,`team`],[`value`,`enterprise`],[1,`invalid-feedback`,`d-block`],[1,`mb-0`]],template:function(e,l){if(e&1){let d=gf();ce(0,`div`,1)(1,`div`,2)(2,`span`,3),Zf(3,`Plan`),vi(),ce(4,`ngs-select`,4,0),f7(),xh(`ngModelChange`,function(z){return q3(d),$f(l.plan,z)||(l.plan=z),Y3(z)}),ce(6,`ngs-option`,5),Zf(7,`Free`),vi(),ce(8,`ngs-option`,6),Zf(9,`Team`),vi(),ce(10,`ngs-option`,7),Zf(11,`Enterprise`),vi()(),KC(12,fs,2,0,`div`,8),vi(),ce(13,`div`,2)(14,`p`,9),Zf(15),vi(),ce(16,`p`,9),Zf(17),vi()()()}if(e&2){let d=Cf(5);Tt(4),Mh(`ngModel`,l.plan),m7(),Tt(8),XC(d.invalid&&d.touched?12:-1),Tt(3),hg(`Plan: `,l.plan??`none`),Tt(2),jh(`Touched: `,d.touched,`, valid: `,d.valid)}},dependencies:[gs,cs,ln,Hr,me,C],encapsulation:2})};var us={basic:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <span class="form-label d-block" id="basic-label">Country</span>
    <ngs-select
      labelledBy="basic-label"
      placeholder="Choose a country"
      clearable
      [(value)]="country"
    >
      <ngs-option value="fr">France</ngs-option>
      <ngs-option value="de">Germany</ngs-option>
      <ngs-option value="it">Italy</ngs-option>
      <ngs-option value="es">Spain</ngs-option>
      <ngs-option value="se">Sweden</ngs-option>
    </ngs-select>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0" aria-live="polite">Selected: {{ country() ?? 'none' }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label d-block&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;basic-label&quot;</span>&gt;</span>Country<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span>
      <span class="hljs-attr">labelledBy</span>=<span class="hljs-string">&quot;basic-label&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Choose a country&quot;</span>
      <span class="hljs-attr">clearable</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;country&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;fr&quot;</span>&gt;</span>France<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;de&quot;</span>&gt;</span>Germany<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;it&quot;</span>&gt;</span>Italy<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;es&quot;</span>&gt;</span>Spain<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;se&quot;</span>&gt;</span>Sweden<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-select</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Selected: {{ country() ?? &#x27;none&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsOption } from '@bootlace/core/listbox';
import { NgsSelect } from '@bootlace/core/select';

@Component({
  selector: 'docs-select-basic',
  imports: [NgsSelect, NgsOption],
  templateUrl: './index.html',
})
export class SelectBasicExample {
  protected readonly country = signal<string | null>(null);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/listbox&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/select&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-select-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSelect</span>, <span class="hljs-title class_">NgsOption</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SelectBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> country = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
}`}},groups:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <span class="form-label d-block" id="groups-label">Food</span>
    <ngs-select labelledBy="groups-label" placeholder="Choose a food" [(value)]="food">
      <ngs-optgroup label="Fruit">
        <ngs-option value="apple">Apple</ngs-option>
        <ngs-option value="pear" disabled>Pear (out of season)</ngs-option>
        <ngs-option value="plum">Plum</ngs-option>
      </ngs-optgroup>
      <ngs-optgroup label="Vegetables">
        <ngs-option value="carrot">Carrot</ngs-option>
        <ngs-option value="leek">Leek</ngs-option>
      </ngs-optgroup>
      <ngs-optgroup label="Unavailable" disabled>
        <ngs-option value="fish">Fish</ngs-option>
      </ngs-optgroup>
    </ngs-select>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0" aria-live="polite">Selected: {{ food() ?? 'none' }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label d-block&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;groups-label&quot;</span>&gt;</span>Food<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span> <span class="hljs-attr">labelledBy</span>=<span class="hljs-string">&quot;groups-label&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Choose a food&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;food&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-optgroup</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Fruit&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>Apple<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;pear&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Pear (out of season)<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;plum&quot;</span>&gt;</span>Plum<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-optgroup</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-optgroup</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Vegetables&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;carrot&quot;</span>&gt;</span>Carrot<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;leek&quot;</span>&gt;</span>Leek<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-optgroup</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-optgroup</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Unavailable&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;fish&quot;</span>&gt;</span>Fish<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-optgroup</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-select</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>Selected: {{ food() ?? &#x27;none&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsOptgroup, NgsOption } from '@bootlace/core/listbox';
import { NgsSelect } from '@bootlace/core/select';

@Component({
  selector: 'docs-select-groups',
  imports: [NgsSelect, NgsOption, NgsOptgroup],
  templateUrl: './index.html',
})
export class SelectGroupsExample {
  protected readonly food = signal<string | null>('carrot');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsOptgroup</span>, <span class="hljs-title class_">NgsOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/listbox&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/select&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-select-groups&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSelect</span>, <span class="hljs-title class_">NgsOption</span>, <span class="hljs-title class_">NgsOptgroup</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SelectGroupsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> food = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;carrot&#x27;</span>);
}`}},multiple:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <span class="form-label d-block" id="chips-label">Languages (chips)</span>
    <ngs-select
      multiple
      clearable
      labelledBy="chips-label"
      placeholder="Pick languages"
      [options]="languages"
      [(value)]="chips"
    />
    <p class="mt-2 mb-0" aria-live="polite">{{ chips()?.join(', ') || 'none' }}</p>
  </div>
  <div class="col-12 md:col-6">
    <span class="form-label d-block" id="count-label">Languages (count)</span>
    <ngs-select
      multiple
      display="count"
      labelledBy="count-label"
      placeholder="Pick languages"
      [options]="languages"
      [(value)]="count"
    />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label d-block&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;chips-label&quot;</span>&gt;</span>Languages (chips)<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span>
      <span class="hljs-attr">multiple</span>
      <span class="hljs-attr">clearable</span>
      <span class="hljs-attr">labelledBy</span>=<span class="hljs-string">&quot;chips-label&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Pick languages&quot;</span>
      [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;languages&quot;</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;chips&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-2 mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>{{ chips()?.join(&#x27;, &#x27;) || &#x27;none&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label d-block&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;count-label&quot;</span>&gt;</span>Languages (count)<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span>
      <span class="hljs-attr">multiple</span>
      <span class="hljs-attr">display</span>=<span class="hljs-string">&quot;count&quot;</span>
      <span class="hljs-attr">labelledBy</span>=<span class="hljs-string">&quot;count-label&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Pick languages&quot;</span>
      [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;languages&quot;</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;count&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsSelect } from '@bootlace/core/select';

@Component({
  selector: 'docs-select-multiple',
  imports: [NgsSelect],
  templateUrl: './index.html',
})
export class SelectMultipleExample {
  protected readonly languages = ['TypeScript', 'Rust', 'Go', 'Python', 'Kotlin', 'Swift'];
  protected readonly chips = signal<string[] | null>(['TypeScript', 'Rust']);
  protected readonly count = signal<string[] | null>(['Go', 'Python', 'Kotlin']);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/select&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-select-multiple&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSelect</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SelectMultipleExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> languages = [<span class="hljs-string">&#x27;TypeScript&#x27;</span>, <span class="hljs-string">&#x27;Rust&#x27;</span>, <span class="hljs-string">&#x27;Go&#x27;</span>, <span class="hljs-string">&#x27;Python&#x27;</span>, <span class="hljs-string">&#x27;Kotlin&#x27;</span>, <span class="hljs-string">&#x27;Swift&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> chips = signal&lt;<span class="hljs-built_in">string</span>[] | <span class="hljs-literal">null</span>&gt;([<span class="hljs-string">&#x27;TypeScript&#x27;</span>, <span class="hljs-string">&#x27;Rust&#x27;</span>]);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> count = signal&lt;<span class="hljs-built_in">string</span>[] | <span class="hljs-literal">null</span>&gt;([<span class="hljs-string">&#x27;Go&#x27;</span>, <span class="hljs-string">&#x27;Python&#x27;</span>, <span class="hljs-string">&#x27;Kotlin&#x27;</span>]);
}`}},native:{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <ngs-textfield label="City" hint="The browser draws the list.">
      <select ngsInput name="city" [(ngModel)]="city">
        <optgroup label="Norway">
          <option value="oslo">Oslo</option>
          <option value="bergen">Bergen</option>
        </optgroup>
        <optgroup label="Sweden">
          <option value="stockholm">Stockholm</option>
          <option value="malmo" disabled>Malm\xF6</option>
        </optgroup>
      </select>
    </ngs-textfield>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0">City: {{ city }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-textfield</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;City&quot;</span> <span class="hljs-attr">hint</span>=<span class="hljs-string">&quot;The browser draws the list.&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">ngsInput</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;city&quot;</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;city&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">optgroup</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Norway&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;oslo&quot;</span>&gt;</span>Oslo<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;bergen&quot;</span>&gt;</span>Bergen<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">optgroup</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">optgroup</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sweden&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;stockholm&quot;</span>&gt;</span>Stockholm<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;malmo&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Malm\xF6<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">optgroup</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-textfield</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>City: {{ city }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgsInput, NgsTextfield } from '@bootlace/core/input';

@Component({
  selector: 'docs-select-native',
  imports: [FormsModule, NgsInput, NgsTextfield],
  templateUrl: './index.html',
})
export class SelectNativeExample {
  protected city = 'oslo';
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormsModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-select-native&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">FormsModule</span>, <span class="hljs-title class_">NgsInput</span>, <span class="hljs-title class_">NgsTextfield</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SelectNativeExample</span> {
  <span class="hljs-keyword">protected</span> city = <span class="hljs-string">&#x27;oslo&#x27;</span>;
}`}},reactive:{html:{code:`<form class="row g-3" [formGroup]="form" (ngSubmit)="submit()" novalidate>
  <div class="col-12 md:col-6">
    <span class="form-label d-block" id="owner-label">Owner</span>
    <ngs-select
      formControlName="owner"
      labelledBy="owner-label"
      placeholder="Choose an owner"
      [options]="users"
      [optionValue]="id"
      [optionLabel]="name"
      [optionDisabled]="inactive"
    />
    @if (form.controls.owner.invalid && form.controls.owner.touched) {
      <div class="invalid-feedback d-block">Choose an owner.</div>
    }
  </div>
  <div class="col-12 md:col-6">
    <span class="form-label d-block" id="reviewers-label">Reviewers</span>
    <ngs-select
      multiple
      formControlName="reviewers"
      labelledBy="reviewers-label"
      placeholder="Choose reviewers"
      [options]="users"
      [optionValue]="id"
      [optionLabel]="name"
      [optionDisabled]="inactive"
    />
    @if (form.controls.reviewers.invalid && form.controls.reviewers.touched) {
      <div class="invalid-feedback d-block">Choose at least one reviewer.</div>
    }
  </div>
  <div class="col-12">
    <button ngsButton type="submit">Assign</button>
    @if (sent()) {
      <span class="ms-2" role="status">Assigned.</span>
    }
  </div>
</form>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;form&quot;</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">&quot;submit()&quot;</span> <span class="hljs-attr">novalidate</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label d-block&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;owner-label&quot;</span>&gt;</span>Owner<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span>
      <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;owner&quot;</span>
      <span class="hljs-attr">labelledBy</span>=<span class="hljs-string">&quot;owner-label&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Choose an owner&quot;</span>
      [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;users&quot;</span>
      [<span class="hljs-attr">optionValue</span>]=<span class="hljs-string">&quot;id&quot;</span>
      [<span class="hljs-attr">optionLabel</span>]=<span class="hljs-string">&quot;name&quot;</span>
      [<span class="hljs-attr">optionDisabled</span>]=<span class="hljs-string">&quot;inactive&quot;</span>
    /&gt;</span>
    @if (form.controls.owner.invalid &amp;&amp; form.controls.owner.touched) {
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;invalid-feedback d-block&quot;</span>&gt;</span>Choose an owner.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label d-block&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;reviewers-label&quot;</span>&gt;</span>Reviewers<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span>
      <span class="hljs-attr">multiple</span>
      <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;reviewers&quot;</span>
      <span class="hljs-attr">labelledBy</span>=<span class="hljs-string">&quot;reviewers-label&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Choose reviewers&quot;</span>
      [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;users&quot;</span>
      [<span class="hljs-attr">optionValue</span>]=<span class="hljs-string">&quot;id&quot;</span>
      [<span class="hljs-attr">optionLabel</span>]=<span class="hljs-string">&quot;name&quot;</span>
      [<span class="hljs-attr">optionDisabled</span>]=<span class="hljs-string">&quot;inactive&quot;</span>
    /&gt;</span>
    @if (form.controls.reviewers.invalid &amp;&amp; form.controls.reviewers.touched) {
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;invalid-feedback d-block&quot;</span>&gt;</span>Choose at least one reviewer.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>Assign<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    @if (sent()) {
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ms-2&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;status&quot;</span>&gt;</span>Assigned.<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgsButton } from '@bootlace/core/button';
import { NgsSelect } from '@bootlace/core/select';

interface User {
  id: number;
  name: string;
  active: boolean;
}

@Component({
  selector: 'docs-select-reactive',
  imports: [NgsButton, NgsSelect, ReactiveFormsModule],
  templateUrl: './index.html',
})
export class SelectReactiveExample {
  protected readonly users: User[] = [
    { id: 1, name: 'Ada Lovelace', active: true },
    { id: 2, name: 'Grace Hopper', active: true },
    { id: 3, name: 'Alan Turing', active: false },
    { id: 4, name: 'Margaret Hamilton', active: true },
  ];
  protected readonly form = new FormGroup({
    owner: new FormControl<number | null>(null, Validators.required),
    reviewers: new FormControl<number[]>([], Validators.required),
  });
  protected readonly sent = signal(false);

  protected readonly id = (user: User) => user.id;
  protected readonly name = (user: User) => user.name;
  protected readonly inactive = (user: User) => !user.active;

  protected submit(): void {
    this.form.markAllAsTouched();
    this.sent.set(this.form.valid);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">Validators</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/select&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">User</span> {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">active</span>: <span class="hljs-built_in">boolean</span>;
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-select-reactive&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsSelect</span>, <span class="hljs-title class_">ReactiveFormsModule</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SelectReactiveExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">users</span>: <span class="hljs-title class_">User</span>[] = [
    { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Ada Lovelace&#x27;</span>, <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Grace Hopper&#x27;</span>, <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Alan Turing&#x27;</span>, <span class="hljs-attr">active</span>: <span class="hljs-literal">false</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Margaret Hamilton&#x27;</span>, <span class="hljs-attr">active</span>: <span class="hljs-literal">true</span> },
  ];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> form = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormGroup</span>({
    <span class="hljs-attr">owner</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>&lt;<span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>, <span class="hljs-title class_">Validators</span>.<span class="hljs-property">required</span>),
    <span class="hljs-attr">reviewers</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>&lt;<span class="hljs-built_in">number</span>[]&gt;([], <span class="hljs-title class_">Validators</span>.<span class="hljs-property">required</span>),
  });
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sent = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> id = <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">user</span>: <span class="hljs-title class_">User</span></span>) =&gt;</span> user.<span class="hljs-property">id</span>;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> name = <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">user</span>: <span class="hljs-title class_">User</span></span>) =&gt;</span> user.<span class="hljs-property">name</span>;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> inactive = <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">user</span>: <span class="hljs-title class_">User</span></span>) =&gt;</span> !user.<span class="hljs-property">active</span>;

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">submit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-title function_">markAllAsTouched</span>();
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">sent</span>.<span class="hljs-title function_">set</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">valid</span>);
  }
}`}},sizes:{html:{code:`<div class="row g-3">
  @for (size of sizes; track size) {
    <div class="col-12 md:col-4">
      <ngs-select
        [size]="size"
        [label]="'Colour, ' + size"
        placeholder="Colour"
        [options]="colors"
      />
    </div>
  }
  <div class="col-12 md:col-4">
    <ngs-select disabled label="Disabled" placeholder="Disabled" [options]="colors" />
  </div>
  <div class="col-12 md:col-4">
    <ngs-select invalid label="Invalid" placeholder="Invalid" [options]="colors" />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  @for (size of sizes; track size) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span>
        [<span class="hljs-attr">size</span>]=<span class="hljs-string">&quot;size&quot;</span>
        [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;Colour, &#x27; + size&quot;</span>
        <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Colour&quot;</span>
        [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;colors&quot;</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Disabled&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Disabled&quot;</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;colors&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-4&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span> <span class="hljs-attr">invalid</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Invalid&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Invalid&quot;</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;colors&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsSelect, NgsSelectSize } from '@bootlace/core/select';

@Component({
  selector: 'docs-select-sizes',
  imports: [NgsSelect],
  templateUrl: './index.html',
})
export class SelectSizesExample {
  protected readonly sizes: NgsSelectSize[] = ['sm', 'md', 'lg'];
  protected readonly colors = ['Red', 'Green', 'Blue'];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSelect</span>, <span class="hljs-title class_">NgsSelectSize</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/select&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-select-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSelect</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SelectSizesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">sizes</span>: <span class="hljs-title class_">NgsSelectSize</span>[] = [<span class="hljs-string">&#x27;sm&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;lg&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> colors = [<span class="hljs-string">&#x27;Red&#x27;</span>, <span class="hljs-string">&#x27;Green&#x27;</span>, <span class="hljs-string">&#x27;Blue&#x27;</span>];
}`}},"template-driven":{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <span class="form-label d-block" id="plan-label">Plan</span>
    <ngs-select
      #field="ngModel"
      required
      name="plan"
      labelledBy="plan-label"
      placeholder="Choose a plan"
      [(ngModel)]="plan"
    >
      <ngs-option value="free">Free</ngs-option>
      <ngs-option value="team">Team</ngs-option>
      <ngs-option value="enterprise">Enterprise</ngs-option>
    </ngs-select>
    @if (field.invalid && field.touched) {
      <div class="invalid-feedback d-block">A plan is required.</div>
    }
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0">Plan: {{ plan ?? 'none' }}</p>
    <p class="mb-0">Touched: {{ field.touched }}, valid: {{ field.valid }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label d-block&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;plan-label&quot;</span>&gt;</span>Plan<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span>
      #<span class="hljs-attr">field</span>=<span class="hljs-string">&quot;ngModel&quot;</span>
      <span class="hljs-attr">required</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;plan&quot;</span>
      <span class="hljs-attr">labelledBy</span>=<span class="hljs-string">&quot;plan-label&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Choose a plan&quot;</span>
      [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">&quot;plan&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;free&quot;</span>&gt;</span>Free<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;team&quot;</span>&gt;</span>Team<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;enterprise&quot;</span>&gt;</span>Enterprise<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-select</span>&gt;</span>
    @if (field.invalid &amp;&amp; field.touched) {
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;invalid-feedback d-block&quot;</span>&gt;</span>A plan is required.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Plan: {{ plan ?? &#x27;none&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Touched: {{ field.touched }}, valid: {{ field.valid }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgsOption } from '@bootlace/core/listbox';
import { NgsSelect } from '@bootlace/core/select';

@Component({
  selector: 'docs-select-template-driven',
  imports: [FormsModule, NgsSelect, NgsOption],
  templateUrl: './index.html',
})
export class SelectTemplateDrivenExample {
  protected plan: string | null = null;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormsModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsOption</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/listbox&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/select&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-select-template-driven&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">FormsModule</span>, <span class="hljs-title class_">NgsSelect</span>, <span class="hljs-title class_">NgsOption</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SelectTemplateDrivenExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-attr">plan</span>: <span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span> = <span class="hljs-literal">null</span>;
}`}}};var qs=()=>[`@bootlace/core/listbox`];var js=class p{tab=Yn(`examples`);sources=us;basic=N;multiple=T;groups=M;reactive=F;templateDriven=P;native=D;sizes=B;static ɵfac=function(e){return new(e||p)};static ɵcmp=ve({type:p,selectors:[[`docs-select-page`]],inputs:{tab:[1,`tab`]},decls:140,vars:17,consts:[[`heading`,`Select`,`package`,`@bootlace/core/select`,`path`,`/form/select`,3,`extraPackages`,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`multiple`,`heading`,`Multiple`,3,`component`,`sources`],[`id`,`groups`,`heading`,`Groups and disabled options`,3,`component`,`sources`],[`id`,`reactive`,`heading`,`Reactive forms`,3,`component`,`sources`],[`id`,`template-driven`,`heading`,`Template-driven forms`,3,`component`,`sources`],[`id`,`native`,`heading`,`Native select`,3,`component`,`sources`],[`href`,`/form/text-input`],[`id`,`sizes`,`heading`,`Sizes and states`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(e,l){e&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A custom select built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.form-control`),vi(),Zf(5,` and `),ce(6,`code`),Zf(7,`.combobox-toggle`),vi(),Zf(8,`. The field opens an `),ce(9,`code`),Zf(10,`ngs-listbox`),vi(),Zf(11,` of `),ce(12,`code`),Zf(13,`ngs-option`),vi(),Zf(14,`s in an overlay, following the WAI-ARIA select-only combobox pattern. It is a form control, picks one value or many, and takes its options from child elements or from an `),ce(15,`code`),Zf(16,`options`),vi(),Zf(17,` array. The listbox is also usable on its own. When the browser's own picker is enough, use a native `),ce(18,`code`),Zf(19,`<select ngsInput>`),vi(),Zf(20,`. `),vi(),ce(21,`docs-example`,2),Zf(22,` Declare the options with `),ce(23,`code`),Zf(24,`ngs-option`),vi(),Zf(25,`. `),ce(26,`code`),Zf(27,`[(value)]`),vi(),Zf(28,` reads and sets the selected option's value, and `),ce(29,`code`),Zf(30,`clearable`),vi(),Zf(31,` adds a clear button. `),vi(),ce(32,`docs-example`,3)(33,`code`),Zf(34,`multiple`),vi(),Zf(35,` makes the value an array. The selection shows as removable chips, or as "n selected" with `),ce(36,`code`),Zf(37,`display="count"`),vi(),Zf(38,`. The list stays open while you pick. `),vi(),ce(39,`docs-example`,4)(40,`code`),Zf(41,`ngs-optgroup`),vi(),Zf(42,` adds a heading and can disable all its options. Disabled options are skipped by the arrow keys and ignore clicks. `),vi(),ce(43,`docs-example`,5),Zf(44,` Bind `),ce(45,`code`),Zf(46,`formControlName`),vi(),Zf(47,` and give `),ce(48,`code`),Zf(49,`options`),vi(),Zf(50,` with `),ce(51,`code`),Zf(52,`optionValue`),vi(),Zf(53,`, `),ce(54,`code`),Zf(55,`optionLabel`),vi(),Zf(56,` and `),ce(57,`code`),Zf(58,`optionDisabled`),vi(),Zf(59,` accessors, so the control holds an id rather than the object. The field turns invalid, and the error appears, once the control is invalid and touched. `),vi(),ce(60,`docs-example`,6)(61,`code`),Zf(62,`ngModel`),vi(),Zf(63,` and the `),ce(64,`code`),Zf(65,`required`),vi(),Zf(66,` attribute work the same way. `),vi(),ce(67,`docs-example`,7),Zf(68,` A plain `),ce(69,`code`),Zf(70,`<select ngsInput>`),vi(),Zf(71,` inside `),ce(72,`code`),Zf(73,`ngs-textfield`),vi(),Zf(74,` already gives a Bootstrap-styled native select with a label, hint, groups and disabled options. Reach for it on phones or when you need the platform picker; it is documented with the `),ce(75,`a`,8),Zf(76,`Text input`),vi(),Zf(77,`. `),vi(),ce(78,`docs-example`,9)(79,`code`),Zf(80,`sm`),vi(),Zf(81,`, `),ce(82,`code`),Zf(83,`md`),vi(),Zf(84,` (default) and `),ce(85,`code`),Zf(86,`lg`),vi(),Zf(87,`, plus the disabled and invalid states. `),vi(),ce(88,`section`,10)(89,`h2`,11),Zf(90,`Accessibility`),vi(),ce(91,`p`),Zf(92,` The field is a `),ce(93,`code`),Zf(94,`role="combobox"`),vi(),Zf(95,` with `),ce(96,`code`),Zf(97,`aria-haspopup="listbox"`),vi(),Zf(98,`, `),ce(99,`code`),Zf(100,`aria-expanded`),vi(),Zf(101,` and, while open, `),ce(102,`code`),Zf(103,`aria-controls`),vi(),Zf(104,` and `),ce(105,`code`),Zf(106,`aria-activedescendant`),vi(),Zf(107,`. The list is a `),ce(108,`code`),Zf(109,`role="listbox"`),vi(),Zf(110,` of `),ce(111,`code`),Zf(112,`role="option"`),vi(),Zf(113,` rows with `),ce(114,`code`),Zf(115,`aria-selected`),vi(),Zf(116,` (and `),ce(117,`code`),Zf(118,`aria-multiselectable`),vi(),Zf(119,`); groups are `),ce(120,`code`),Zf(121,`role="group"`),vi(),Zf(122,` named by their heading. Focus never leaves the field: the highlighted option moves through `),ce(123,`code`),Zf(124,`aria-activedescendant`),vi(),Zf(125,`. Name the field with `),ce(126,`code`),Zf(127,`label`),vi(),Zf(128,` or `),ce(129,`code`),Zf(130,`labelledBy`),vi(),Zf(131,`, since a `),ce(132,`code`),Zf(133,`<label for>`),vi(),Zf(134,` cannot point at it. `),vi(),ce(135,`p`),Zf(136,` Enter, Space, Arrow Down and Arrow Up open the list on the highlighted (selected) option. Arrow keys, Home and End move, wrapping, and typing a letter jumps to the next option that starts with it. Enter or Space selects, Escape closes and keeps focus on the field, and Tab selects the highlighted option and moves on. In a multiple select Backspace removes the last chip. An invalid and touched control gets `),ce(137,`code`),Zf(138,`aria-invalid="true"`),vi(),Zf(139,`. `),vi()()()),e&2&&(Ot(`extraPackages`,Jf(16,qs))(`tab`,l.tab()),Tt(21),Ot(`component`,l.basic)(`sources`,l.sources.basic),Tt(11),Ot(`component`,l.multiple)(`sources`,l.sources.multiple),Tt(7),Ot(`component`,l.groups)(`sources`,l.sources.groups),Tt(4),Ot(`component`,l.reactive)(`sources`,l.sources.reactive),Tt(17),Ot(`component`,l.templateDriven)(`sources`,l.sources[`template-driven`]),Tt(7),Ot(`component`,l.native)(`sources`,l.sources.native),Tt(11),Ot(`component`,l.sizes)(`sources`,l.sources.sizes))},dependencies:[ue$1,pe],encapsulation:2})};export{js as SelectPage};