import{$t as ag,An as hg,At as W$1,B as Kf,Br as ui,Et as Va,G as Lr,Gt as Yn,Hn as kf,Jt as Zf,Ln as jn,Mn as ih,Nt as X0,Pr as tj,Rn as jo,Rr as ue,Sn as fh,Un as kg,W as Ll,Wr as ve,Xr as wU,Z as Na,Zn as m7,bn as f7,dt as SU,ei as xh,et as Ot,i as $t,jr as tA,kn as hf,lt as Rm,mt as So,n as $F,on as ce,q as Mh,qr as vi,r as $f,sn as cg,tt as P0,vn as ej,xt as Tt,yn as f,zn as k}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{A as ll,F as qn,I as rt,M as ms,N as pn,O as gs,T as ds,k as hs,n as Ba,r as Br,u as Hr,w as cs,z as zr}from"./chunk-DycqepRM.js";import{t as c}from"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as N}from"./chunk-DX4JeZih.js";import{t as f$1}from"./chunk-_QnoVoFv.js";var T=new f(`NGS_SEGMENTED`);var Es=[`*`];var u=class g{group=k(T);contentId=Ba(`ngs-segment`);value=Yn.required();label=Yn();disabled=Yn(!1,{transform:$t});classes=jo(()=>{let l=this.group.size();return`btn-text btn-check ngs-segment${l===`md`?``:` btn-${l}`}`});static ɵfac=function(t){return new(t||g)};static ɵcmp=ve({type:g,selectors:[[`ngs-segment`]],hostVars:2,hostBindings:function(t,n){t&2&&kg(n.classes())},inputs:{value:[1,`value`],label:[1,`label`],disabled:[1,`disabled`]},ngContentSelectors:Es,decls:3,vars:6,consts:[[`type`,`radio`,3,`change`,`name`,`checked`,`disabled`],[1,`ngs-segment-content`,3,`id`]],template:function(t,n){t&1&&(kf(),cg(0,`input`,0),ih(`change`,function(){return n.group.select(n.value())}),ag(),cg(1,`span`,1),hf(2),ag()),t&2&&(Va(`name`,n.group.name)(`checked`,n.group.isSelected(n.value()))(`disabled`,n.group.isDisabled()||n.disabled()),Lr(`aria-label`,n.label()??null)(`aria-labelledby`,n.label()?null:n.contentId),Tt(),Va(`id`,n.contentId))},encapsulation:2})};var Ns=[`*`];var j=class g extends qn{element=k(So).nativeElement;animation=k(N).animation;name=Ba(`ngs-segmented`);label=Yn();size=Yn(`md`);block=Yn(!1,{transform:$t});box=W$1(null);animated=W$1(!1);classes=jo(()=>{let l=[`btn-group`,`ngs-segmented`];return this.size()!==`md`&&l.push(`ngs-segmented-${this.size()}`),this.block()&&l.push(`ngs-segmented-block`),this.box()&&l.push(`ngs-segmented-measured`),this.animated()&&this.animation&&l.push(`ngs-segmented-animated`),l.join(` `)});constructor(){if(super(),tA(()=>{this.value(),this.size(),this.measure()}),typeof ResizeObserver<`u`){let l=new ResizeObserver(()=>this.measure());l.observe(this.element),k(jn).onDestroy(()=>l.disconnect())}}isSelected(l){return this.value()===l}select(l){this.setValue(l)}measure(){let l=this.element.querySelector(`input:checked`)?.parentElement;if(!l){this.box.set(null);return}let t={x:l.offsetLeft,y:l.offsetTop,width:l.offsetWidth,height:l.offsetHeight},n=this.box();(!n||n.x!==t.x||n.y!==t.y||n.width!==t.width)&&this.box.set(t),this.animated()||requestAnimationFrame(()=>this.animated.set(!0))}static ɵfac=function(t){return new(t||g)};static ɵcmp=ve({type:g,selectors:[[`ngs-segmented`]],hostAttrs:[`role`,`radiogroup`],hostVars:13,hostBindings:function(t,n){t&1&&ui(`focusout`,function(){return n.markTouched()}),t&2&&(Lr(`aria-label`,n.label())(`aria-disabled`,n.isDisabled()?`true`:null)(`aria-invalid`,n.isInvalid()?`true`:null),kg(n.classes()),Na(`--%NS%ngs-segment-x`,n.box()?.x,`px`)(`--%NS%ngs-segment-y`,n.box()?.y,`px`)(`--%NS%ngs-segment-width`,n.box()?.width,`px`)(`--%NS%ngs-segment-height`,n.box()?.height,`px`))},inputs:{label:[1,`label`],size:[1,`size`],block:[1,`block`]},features:[Kf([ll(()=>g),{provide:T,useExisting:g}]),P0],ngContentSelectors:Ns,decls:2,vars:0,consts:[[`aria-hidden`,`true`,1,`ngs-segmented-indicator`]],template:function(t,n){t&1&&(kf(),X0(0,`span`,0),hf(1))},encapsulation:2})};var F=class g{view=W$1(`list`);static ɵfac=function(t){return new(t||g)};static ɵcmp=ve({type:g,selectors:[[`docs-segmented-basic`]],decls:12,vars:2,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-12`,`md:col-auto`],[`label`,`View`,3,`valueChange`,`value`],[`value`,`list`],[`value`,`grid`],[`value`,`board`],[1,`mb-0`]],template:function(t,n){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-segmented`,2),xh(`valueChange`,function(p){return $f(n.view,p)||(n.view=p),p}),ce(3,`ngs-segment`,3),Zf(4,`List`),vi(),ce(5,`ngs-segment`,4),Zf(6,`Grid`),vi(),ce(7,`ngs-segment`,5),Zf(8,`Board`),vi()()(),ce(9,`div`,1)(10,`p`,6),Zf(11),vi()()()),t&2&&(Tt(2),Mh(`value`,n.view),Tt(9),hg(`Selected: `,n.view()))},dependencies:[j,u],encapsulation:2})};var W=class g{box=W$1(`outgoing`);sun=SU;moon=wU;static ɵfac=function(t){return new(t||g)};static ɵcmp=ve({type:g,selectors:[[`docs-segmented-badges`]],decls:37,vars:9,consts:[[1,`row`,`g-3`],[1,`col-12`],[`label`,`Inbox small`,`size`,`sm`,3,`valueChange`,`value`],[`value`,`all`],[3,`icon`],[`color`,`danger`],[`value`,`incoming`],[`value`,`outgoing`],[`label`,`Inbox medium`,3,`valueChange`,`value`],[`label`,`Inbox large`,`size`,`lg`,3,`valueChange`,`value`],[`color`,`danger`,`size`,`lg`]],template:function(t,n){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-segmented`,2),xh(`valueChange`,function(p){return $f(n.box,p)||(n.box=p),p}),ce(3,`ngs-segment`,3),ue(4,`ngs-icon`,4),Zf(5,` All `),ce(6,`ngs-badge`,5),Zf(7,`3`),vi(),ue(8,`ngs-icon`,4),vi(),ce(9,`ngs-segment`,6),Zf(10,`Incoming`),vi(),ce(11,`ngs-segment`,7),Zf(12,`Outgoing`),vi()()(),ce(13,`div`,1)(14,`ngs-segmented`,8),xh(`valueChange`,function(p){return $f(n.box,p)||(n.box=p),p}),ce(15,`ngs-segment`,3),ue(16,`ngs-icon`,4),Zf(17,` All `),ce(18,`ngs-badge`,5),Zf(19,`3`),vi(),ue(20,`ngs-icon`,4),vi(),ce(21,`ngs-segment`,6),Zf(22,`Incoming`),vi(),ce(23,`ngs-segment`,7),Zf(24,`Outgoing`),vi()()(),ce(25,`div`,1)(26,`ngs-segmented`,9),xh(`valueChange`,function(p){return $f(n.box,p)||(n.box=p),p}),ce(27,`ngs-segment`,3),ue(28,`ngs-icon`,4),Zf(29,` All `),ce(30,`ngs-badge`,10),Zf(31,`3`),vi(),ue(32,`ngs-icon`,4),vi(),ce(33,`ngs-segment`,6),Zf(34,`Incoming`),vi(),ce(35,`ngs-segment`,7),Zf(36,`Outgoing`),vi()()()()),t&2&&(Tt(2),Mh(`value`,n.box),Tt(2),Ot(`icon`,n.sun),Tt(4),Ot(`icon`,n.moon),Tt(6),Mh(`value`,n.box),Tt(2),Ot(`icon`,n.sun),Tt(4),Ot(`icon`,n.moon),Tt(6),Mh(`value`,n.box),Tt(2),Ot(`icon`,n.sun),Tt(4),Ot(`icon`,n.moon))},dependencies:[j,u,Ll,c],encapsulation:2})};var R=class g{plan=W$1(`monthly`);static ɵfac=function(t){return new(t||g)};static ɵcmp=ve({type:g,selectors:[[`docs-segmented-block`]],decls:7,vars:1,consts:[[`label`,`Billing`,`block`,``,3,`valueChange`,`value`],[`value`,`monthly`],[`value`,`yearly`],[`value`,`lifetime`,`disabled`,``]],template:function(t,n){t&1&&(ce(0,`ngs-segmented`,0),xh(`valueChange`,function(p){return $f(n.plan,p)||(n.plan=p),p}),ce(1,`ngs-segment`,1),Zf(2,`Monthly`),vi(),ce(3,`ngs-segment`,2),Zf(4,`Yearly`),vi(),ce(5,`ngs-segment`,3),Zf(6,`Lifetime`),vi()()),t&2&&Mh(`value`,n.plan)},dependencies:[j,u],encapsulation:2})};var P=class g{form=new rt({align:new pn(`left`)});model=W$1(`b`);toggleDisabled(){let l=this.form.controls.align;l.disabled?l.enable():l.disable()}static ɵfac=function(t){return new(t||g)};static ɵcmp=ve({type:g,selectors:[[`docs-segmented-forms`]],decls:29,vars:7,consts:[[1,`row`,`g-3`,`align-items-center`],[1,`col-12`,`md:col-6`,3,`formGroup`],[1,`mb-1`],[`label`,`Alignment`,`formControlName`,`align`],[`value`,`left`],[`value`,`center`],[`value`,`right`],[1,`col-12`,`md:col-6`],[`ngsButton`,``,`variant`,`outline`,`size`,`sm`,`type`,`button`,3,`click`],[`label`,`Choice`,3,`ngModelChange`,`ngModel`],[`value`,`a`],[`value`,`b`],[1,`mb-0`]],template:function(t,n){t&1&&(ce(0,`div`,0)(1,`form`,1)(2,`p`,2),Zf(3,`Reactive forms`),vi(),ce(4,`ngs-segmented`,3),f7(),ce(5,`ngs-segment`,4),Zf(6,`Left`),vi(),ce(7,`ngs-segment`,5),Zf(8,`Center`),vi(),ce(9,`ngs-segment`,6),Zf(10,`Right`),vi()()(),ce(11,`div`,7)(12,`p`,2)(13,`code`),Zf(14),ej(15,`json`),vi()(),ce(16,`button`,8),ui(`click`,function(){return n.toggleDisabled()}),Zf(17),vi()(),ce(18,`div`,7)(19,`p`,2),Zf(20,`Template-driven`),vi(),ce(21,`ngs-segmented`,9),f7(),ui(`ngModelChange`,function(p){return n.model.set(p)}),ce(22,`ngs-segment`,10),Zf(23,`A`),vi(),ce(24,`ngs-segment`,11),Zf(25,`B`),vi()()(),ce(26,`div`,7)(27,`p`,12),Zf(28),vi()()()),t&2&&(Tt(),Ot(`formGroup`,n.form),Tt(3),m7(),Tt(10),fh(tj(15,5,n.form.getRawValue())),Tt(3),hg(` `,n.form.controls.align.disabled?`Enable`:`Disable`,` `),Tt(4),Ot(`ngModel`,n.model()),m7(),Tt(7),hg(`Model: `,n.model()))},dependencies:[j,u,f$1,ms,hs,cs,ds,Br,zr,gs,Hr,Rm],encapsulation:2})};var L=class g{theme=W$1(`light`);sun=SU;moon=wU;computer=$F;static ɵfac=function(t){return new(t||g)};static ɵcmp=ve({type:g,selectors:[[`docs-segmented-icons`]],decls:21,vars:7,consts:[[1,`row`,`g-3`],[1,`col-12`],[1,`mb-1`],[`label`,`Theme`,3,`valueChange`,`value`],[`value`,`light`,`label`,`Light`],[3,`icon`],[`value`,`dark`,`label`,`Dark`],[`value`,`auto`,`label`,`System`],[`label`,`Theme with text`,3,`valueChange`,`value`],[`value`,`light`],[`value`,`dark`]],template:function(t,n){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`p`,2),Zf(3,`Icon only, each with an accessible name`),vi(),ce(4,`ngs-segmented`,3),xh(`valueChange`,function(p){return $f(n.theme,p)||(n.theme=p),p}),ce(5,`ngs-segment`,4),ue(6,`ngs-icon`,5),vi(),ce(7,`ngs-segment`,6),ue(8,`ngs-icon`,5),vi(),ce(9,`ngs-segment`,7),ue(10,`ngs-icon`,5),vi()()(),ce(11,`div`,1)(12,`p`,2),Zf(13,`Icon and text`),vi(),ce(14,`ngs-segmented`,8),xh(`valueChange`,function(p){return $f(n.theme,p)||(n.theme=p),p}),ce(15,`ngs-segment`,9),ue(16,`ngs-icon`,5),Zf(17,` Light`),vi(),ce(18,`ngs-segment`,10),ue(19,`ngs-icon`,5),Zf(20,` Dark`),vi()()()()),t&2&&(Tt(4),Mh(`value`,n.theme),Tt(2),Ot(`icon`,n.sun),Tt(2),Ot(`icon`,n.moon),Tt(2),Ot(`icon`,n.computer),Tt(4),Mh(`value`,n.theme),Tt(2),Ot(`icon`,n.sun),Tt(3),Ot(`icon`,n.moon))},dependencies:[j,u,Ll],encapsulation:2})};var A=class g{range=W$1(`week`);static ɵfac=function(t){return new(t||g)};static ɵcmp=ve({type:g,selectors:[[`docs-segmented-sizes`]],decls:25,vars:3,consts:[[1,`row`,`g-3`],[1,`col-12`],[`label`,`Range small`,`size`,`sm`,3,`valueChange`,`value`],[`value`,`day`],[`value`,`week`],[`value`,`month`],[`label`,`Range medium`,3,`valueChange`,`value`],[`label`,`Range large`,`size`,`lg`,3,`valueChange`,`value`]],template:function(t,n){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-segmented`,2),xh(`valueChange`,function(p){return $f(n.range,p)||(n.range=p),p}),ce(3,`ngs-segment`,3),Zf(4,`Day`),vi(),ce(5,`ngs-segment`,4),Zf(6,`Week`),vi(),ce(7,`ngs-segment`,5),Zf(8,`Month`),vi()()(),ce(9,`div`,1)(10,`ngs-segmented`,6),xh(`valueChange`,function(p){return $f(n.range,p)||(n.range=p),p}),ce(11,`ngs-segment`,3),Zf(12,`Day`),vi(),ce(13,`ngs-segment`,4),Zf(14,`Week`),vi(),ce(15,`ngs-segment`,5),Zf(16,`Month`),vi()()(),ce(17,`div`,1)(18,`ngs-segmented`,7),xh(`valueChange`,function(p){return $f(n.range,p)||(n.range=p),p}),ce(19,`ngs-segment`,3),Zf(20,`Day`),vi(),ce(21,`ngs-segment`,4),Zf(22,`Week`),vi(),ce(23,`ngs-segment`,5),Zf(24,`Month`),vi()()()()),t&2&&(Tt(2),Mh(`value`,n.range),Tt(8),Mh(`value`,n.range),Tt(8),Mh(`value`,n.range))},dependencies:[j,u],encapsulation:2})};var ws={badges:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <ngs-segmented label="Inbox small" size="sm" [(value)]="box">
      <ngs-segment value="all">
        <ngs-icon [icon]="sun" /> All <ngs-badge color="danger">3</ngs-badge>
        <ngs-icon [icon]="moon" />
      </ngs-segment>
      <ngs-segment value="incoming">Incoming</ngs-segment>
      <ngs-segment value="outgoing">Outgoing</ngs-segment>
    </ngs-segmented>
  </div>
  <div class="col-12">
    <ngs-segmented label="Inbox medium" [(value)]="box">
      <ngs-segment value="all">
        <ngs-icon [icon]="sun" /> All <ngs-badge color="danger">3</ngs-badge>
        <ngs-icon [icon]="moon" />
      </ngs-segment>
      <ngs-segment value="incoming">Incoming</ngs-segment>
      <ngs-segment value="outgoing">Outgoing</ngs-segment>
    </ngs-segmented>
  </div>
  <div class="col-12">
    <ngs-segmented label="Inbox large" size="lg" [(value)]="box">
      <ngs-segment value="all">
        <ngs-icon [icon]="sun" /> All <ngs-badge color="danger" size="lg">3</ngs-badge>
        <ngs-icon [icon]="moon" />
      </ngs-segment>
      <ngs-segment value="incoming">Incoming</ngs-segment>
      <ngs-segment value="outgoing">Outgoing</ngs-segment>
    </ngs-segmented>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Inbox small&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;all&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;sun&quot;</span> /&gt;</span> All <span class="hljs-tag">&lt;<span class="hljs-name">ngs-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-badge</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;moon&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;incoming&quot;</span>&gt;</span>Incoming<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;outgoing&quot;</span>&gt;</span>Outgoing<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Inbox medium&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;all&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;sun&quot;</span> /&gt;</span> All <span class="hljs-tag">&lt;<span class="hljs-name">ngs-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-badge</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;moon&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;incoming&quot;</span>&gt;</span>Incoming<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;outgoing&quot;</span>&gt;</span>Outgoing<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Inbox large&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;box&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;all&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;sun&quot;</span> /&gt;</span> All <span class="hljs-tag">&lt;<span class="hljs-name">ngs-badge</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-badge</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;moon&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;incoming&quot;</span>&gt;</span>Incoming<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;outgoing&quot;</span>&gt;</span>Outgoing<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsBadge } from '@bootlace/core/badge';
import { NgsIcon } from '@bootlace/core/icon';
import { NgsSegment, NgsSegmented } from '@bootlace/core/segmented';
import { ngsIconMoon, ngsIconSun } from '@bootlace/icons';

@Component({
  selector: 'docs-segmented-badges',
  imports: [NgsSegmented, NgsSegment, NgsIcon, NgsBadge],
  templateUrl: './index.html',
})
export class SegmentedBadgesExample {
  protected readonly box = signal<string | null>('outgoing');
  protected readonly sun = ngsIconSun;
  protected readonly moon = ngsIconMoon;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsBadge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/badge&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSegment</span>, <span class="hljs-title class_">NgsSegmented</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/segmented&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconMoon, ngsIconSun } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-segmented-badges&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSegmented</span>, <span class="hljs-title class_">NgsSegment</span>, <span class="hljs-title class_">NgsIcon</span>, <span class="hljs-title class_">NgsBadge</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SegmentedBadgesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> box = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;outgoing&#x27;</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sun = ngsIconSun;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> moon = ngsIconMoon;
}`}},basic:{html:{code:`<div class="row g-3 align-items-center">
  <div class="col-12 md:col-auto">
    <ngs-segmented label="View" [(value)]="view">
      <ngs-segment value="list">List</ngs-segment>
      <ngs-segment value="grid">Grid</ngs-segment>
      <ngs-segment value="board">Board</ngs-segment>
    </ngs-segmented>
  </div>
  <div class="col-12 md:col-auto">
    <p class="mb-0">Selected: {{ view() }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;View&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;view&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>List<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;grid&quot;</span>&gt;</span>Grid<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;board&quot;</span>&gt;</span>Board<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Selected: {{ view() }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsSegment, NgsSegmented } from '@bootlace/core/segmented';

@Component({
  selector: 'docs-segmented-basic',
  imports: [NgsSegmented, NgsSegment],
  templateUrl: './index.html',
})
export class SegmentedBasicExample {
  protected readonly view = signal<string | null>('list');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSegment</span>, <span class="hljs-title class_">NgsSegmented</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/segmented&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-segmented-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSegmented</span>, <span class="hljs-title class_">NgsSegment</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SegmentedBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> view = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;list&#x27;</span>);
}`}},block:{html:{code:`<ngs-segmented label="Billing" block [(value)]="plan">
  <ngs-segment value="monthly">Monthly</ngs-segment>
  <ngs-segment value="yearly">Yearly</ngs-segment>
  <ngs-segment value="lifetime" disabled>Lifetime</ngs-segment>
</ngs-segmented>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Billing&quot;</span> <span class="hljs-attr">block</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;plan&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;monthly&quot;</span>&gt;</span>Monthly<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;yearly&quot;</span>&gt;</span>Yearly<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;lifetime&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Lifetime<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsSegment, NgsSegmented } from '@bootlace/core/segmented';

@Component({
  selector: 'docs-segmented-block',
  imports: [NgsSegmented, NgsSegment],
  templateUrl: './index.html',
})
export class SegmentedBlockExample {
  protected readonly plan = signal<string | null>('monthly');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSegment</span>, <span class="hljs-title class_">NgsSegmented</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/segmented&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-segmented-block&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSegmented</span>, <span class="hljs-title class_">NgsSegment</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SegmentedBlockExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> plan = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;monthly&#x27;</span>);
}`}},forms:{html:{code:`<div class="row g-3 align-items-center">
  <form class="col-12 md:col-6" [formGroup]="form">
    <p class="mb-1">Reactive forms</p>
    <ngs-segmented label="Alignment" formControlName="align">
      <ngs-segment value="left">Left</ngs-segment>
      <ngs-segment value="center">Center</ngs-segment>
      <ngs-segment value="right">Right</ngs-segment>
    </ngs-segmented>
  </form>
  <div class="col-12 md:col-6">
    <p class="mb-1">
      <code>{{ form.getRawValue() | json }}</code>
    </p>
    <button ngsButton variant="outline" size="sm" type="button" (click)="toggleDisabled()">
      {{ form.controls.align.disabled ? 'Enable' : 'Disable' }}
    </button>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-1">Template-driven</p>
    <ngs-segmented label="Choice" [ngModel]="model()" (ngModelChange)="model.set($event)">
      <ngs-segment value="a">A</ngs-segment>
      <ngs-segment value="b">B</ngs-segment>
    </ngs-segmented>
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0">Model: {{ model() }}</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-center&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;form&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Reactive forms<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Alignment&quot;</span> <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;align&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>Left<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>Center<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>Right<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ form.getRawValue() | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;button&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;toggleDisabled()&quot;</span>&gt;</span>
      {{ form.controls.align.disabled ? &#x27;Enable&#x27; : &#x27;Disable&#x27; }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Template-driven<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Choice&quot;</span> [<span class="hljs-attr">ngModel</span>]=<span class="hljs-string">&quot;model()&quot;</span> (<span class="hljs-attr">ngModelChange</span>)=<span class="hljs-string">&quot;model.set($event)&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>A<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>B<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Model: {{ model() }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgsButton } from '@bootlace/core/button';
import { NgsSegment, NgsSegmented } from '@bootlace/core/segmented';

@Component({
  selector: 'docs-segmented-forms',
  imports: [NgsSegmented, NgsSegment, NgsButton, ReactiveFormsModule, FormsModule, JsonPipe],
  templateUrl: './index.html',
})
export class SegmentedFormsExample {
  protected readonly form = new FormGroup({ align: new FormControl('left') });
  protected readonly model = signal('b');

  protected toggleDisabled(): void {
    const control = this.form.controls.align;
    if (control.disabled) control.enable();
    else control.disable();
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">JsonPipe</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span>, <span class="hljs-title class_">FormsModule</span>, <span class="hljs-title class_">ReactiveFormsModule</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSegment</span>, <span class="hljs-title class_">NgsSegmented</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/segmented&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-segmented-forms&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSegmented</span>, <span class="hljs-title class_">NgsSegment</span>, <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">FormsModule</span>, <span class="hljs-title class_">JsonPipe</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SegmentedFormsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> form = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormGroup</span>({ <span class="hljs-attr">align</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>(<span class="hljs-string">&#x27;left&#x27;</span>) });
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> model = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;b&#x27;</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">toggleDisabled</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-keyword">const</span> control = <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">controls</span>.<span class="hljs-property">align</span>;
    <span class="hljs-keyword">if</span> (control.<span class="hljs-property">disabled</span>) control.<span class="hljs-title function_">enable</span>();
    <span class="hljs-keyword">else</span> control.<span class="hljs-title function_">disable</span>();
  }
}`}},icons:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <p class="mb-1">Icon only, each with an accessible name</p>
    <ngs-segmented label="Theme" [(value)]="theme">
      <ngs-segment value="light" label="Light"><ngs-icon [icon]="sun" /></ngs-segment>
      <ngs-segment value="dark" label="Dark"><ngs-icon [icon]="moon" /></ngs-segment>
      <ngs-segment value="auto" label="System"><ngs-icon [icon]="computer" /></ngs-segment>
    </ngs-segmented>
  </div>
  <div class="col-12">
    <p class="mb-1">Icon and text</p>
    <ngs-segmented label="Theme with text" [(value)]="theme">
      <ngs-segment value="light"><ngs-icon [icon]="sun" /> Light</ngs-segment>
      <ngs-segment value="dark"><ngs-icon [icon]="moon" /> Dark</ngs-segment>
    </ngs-segmented>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Icon only, each with an accessible name<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Theme&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;theme&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;light&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Light&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;sun&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;dark&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Dark&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;moon&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;auto&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;System&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;computer&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-1&quot;</span>&gt;</span>Icon and text<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Theme with text&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;theme&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;light&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;sun&quot;</span> /&gt;</span> Light<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;dark&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;moon&quot;</span> /&gt;</span> Dark<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsIcon } from '@bootlace/core/icon';
import { NgsSegment, NgsSegmented } from '@bootlace/core/segmented';
import { ngsIconComputer, ngsIconMoon, ngsIconSun } from '@bootlace/icons';

@Component({
  selector: 'docs-segmented-icons',
  imports: [NgsSegmented, NgsSegment, NgsIcon],
  templateUrl: './index.html',
})
export class SegmentedIconsExample {
  protected readonly theme = signal<string | null>('light');
  protected readonly sun = ngsIconSun;
  protected readonly moon = ngsIconMoon;
  protected readonly computer = ngsIconComputer;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSegment</span>, <span class="hljs-title class_">NgsSegmented</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/segmented&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconComputer, ngsIconMoon, ngsIconSun } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-segmented-icons&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSegmented</span>, <span class="hljs-title class_">NgsSegment</span>, <span class="hljs-title class_">NgsIcon</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SegmentedIconsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> theme = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;light&#x27;</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sun = ngsIconSun;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> moon = ngsIconMoon;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> computer = ngsIconComputer;
}`}},sizes:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <ngs-segmented label="Range small" size="sm" [(value)]="range">
      <ngs-segment value="day">Day</ngs-segment>
      <ngs-segment value="week">Week</ngs-segment>
      <ngs-segment value="month">Month</ngs-segment>
    </ngs-segmented>
  </div>
  <div class="col-12">
    <ngs-segmented label="Range medium" [(value)]="range">
      <ngs-segment value="day">Day</ngs-segment>
      <ngs-segment value="week">Week</ngs-segment>
      <ngs-segment value="month">Month</ngs-segment>
    </ngs-segmented>
  </div>
  <div class="col-12">
    <ngs-segmented label="Range large" size="lg" [(value)]="range">
      <ngs-segment value="day">Day</ngs-segment>
      <ngs-segment value="week">Week</ngs-segment>
      <ngs-segment value="month">Month</ngs-segment>
    </ngs-segmented>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Range small&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;range&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;day&quot;</span>&gt;</span>Day<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;week&quot;</span>&gt;</span>Week<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;month&quot;</span>&gt;</span>Month<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Range medium&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;range&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;day&quot;</span>&gt;</span>Day<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;week&quot;</span>&gt;</span>Week<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;month&quot;</span>&gt;</span>Month<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segmented</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Range large&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;range&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;day&quot;</span>&gt;</span>Day<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;week&quot;</span>&gt;</span>Week<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-segment</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;month&quot;</span>&gt;</span>Month<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segment</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-segmented</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsSegment, NgsSegmented } from '@bootlace/core/segmented';

@Component({
  selector: 'docs-segmented-sizes',
  imports: [NgsSegmented, NgsSegment],
  templateUrl: './index.html',
})
export class SegmentedSizesExample {
  protected readonly range = signal<string | null>('week');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSegment</span>, <span class="hljs-title class_">NgsSegmented</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/segmented&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-segmented-sizes&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsSegmented</span>, <span class="hljs-title class_">NgsSegment</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">SegmentedSizesExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> range = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;week&#x27;</span>);
}`}}};var ks=class g{tab=Yn(`examples`);sources=ws;basic=F;icons=L;badges=W;sizes=A;block=R;forms=P;static ɵfac=function(t){return new(t||g)};static ɵcmp=ve({type:g,selectors:[[`docs-segmented-page`]],inputs:{tab:[1,`tab`]},decls:92,vars:13,consts:[[`heading`,`Segmented`,`package`,`@bootlace/core/segmented`,`path`,`/navigation/segmented`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`icons`,`heading`,`Icons`,3,`component`,`sources`],[`id`,`badges`,`heading`,`Badges`,3,`component`,`sources`],[`id`,`sizes`,`heading`,`Sizes`,3,`component`,`sources`],[`id`,`block`,`heading`,`Full width and disabled`,3,`component`,`sources`],[`id`,`forms`,`heading`,`Forms`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,n){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A single-choice control: a Bootstrap 6 `),ce(3,`code`),Zf(4,`.btn-group`),vi(),Zf(5,` of `),ce(6,`code`),Zf(7,`.btn-check`),vi(),Zf(8,` segments with an indicator that slides to the chosen one, after Taiga UI's Segmented. Each segment is a native radio, so the browser handles the keyboard and forms. Use it with `),ce(9,`code`),Zf(10,`[(value)]`),vi(),Zf(11,`, `),ce(12,`code`),Zf(13,`ngModel`),vi(),Zf(14,` or reactive forms. `),vi(),ce(15,`docs-example`,2),Zf(16,` Put a `),ce(17,`code`),Zf(18,`<ngs-segment value="…">`),vi(),Zf(19,` inside `),ce(20,`code`),Zf(21,`ngs-segmented`),vi(),Zf(22,` for each option. The value can be any type. Name the group with `),ce(23,`code`),Zf(24,`label`),vi(),Zf(25,`. `),vi(),ce(26,`docs-example`,3),Zf(27,` A segment holds text, an icon or both. A segment with only an icon needs `),ce(28,`code`),Zf(29,`label`),vi(),Zf(30,` as its accessible name. `),vi(),ce(31,`docs-example`,4),Zf(32,` A segment can also hold an `),ce(33,`code`),Zf(34,`ngs-badge`),vi(),Zf(35,`, such as a count, beside its label. `),vi(),ce(36,`docs-example`,5)(37,`code`),Zf(38,`size`),vi(),Zf(39,` is `),ce(40,`code`),Zf(41,`sm`),vi(),Zf(42,`, `),ce(43,`code`),Zf(44,`md`),vi(),Zf(45,` (default) or `),ce(46,`code`),Zf(47,`lg`),vi(),Zf(48,`. `),vi(),ce(49,`docs-example`,6)(50,`code`),Zf(51,`block`),vi(),Zf(52,` stretches the control and gives the segments equal widths. `),ce(53,`code`),Zf(54,`disabled`),vi(),Zf(55,` on a segment disables only that option. `),vi(),ce(56,`docs-example`,7),Zf(57,` It is a value accessor, so `),ce(58,`code`),Zf(59,`formControlName`),vi(),Zf(60,`, `),ce(61,`code`),Zf(62,`formControl`),vi(),Zf(63,` and `),ce(64,`code`),Zf(65,`ngModel`),vi(),Zf(66,` work, including the disabled state from the form. `),vi(),ce(67,`section`,8)(68,`h2`,9),Zf(69,`Accessibility`),vi(),ce(70,`p`),Zf(71,` Native radios were chosen over a custom `),ce(72,`code`),Zf(73,`radiogroup`),vi(),Zf(74,` with roving focus: the browser already gives one tab stop for the group, arrow keys that move and select, Home and End, form submission, and correct behaviour with assistive technology. The group has `),ce(75,`code`),Zf(76,`role="radiogroup"`),vi(),Zf(77,` and takes its name from `),ce(78,`code`),Zf(79,`label`),vi(),Zf(80,`. The sliding indicator is decorative and `),ce(81,`code`),Zf(82,`aria-hidden`),vi(),Zf(83,`; the chosen state is the radio's own checked state, so it does not depend on colour. `),vi(),ce(84,`p`),Zf(85,` The indicator slides only when animations are on: `),ce(86,`code`),Zf(87,`provideNgs({ animation: false })`),vi(),Zf(88,` and `),ce(89,`code`),Zf(90,`prefers-reduced-motion`),vi(),Zf(91,` make it jump instead. Before the indicator is measured (on the server, and on first paint) the chosen segment draws its own background. `),vi()()()),t&2&&(Ot(`tab`,n.tab()),Tt(15),Ot(`component`,n.basic)(`sources`,n.sources.basic),Tt(11),Ot(`component`,n.icons)(`sources`,n.sources.icons),Tt(5),Ot(`component`,n.badges)(`sources`,n.sources.badges),Tt(5),Ot(`component`,n.sizes)(`sources`,n.sources.sizes),Tt(13),Ot(`component`,n.block)(`sources`,n.sources.block),Tt(7),Ot(`component`,n.forms)(`sources`,n.sources.forms))},dependencies:[ue$1,pe],encapsulation:2})};export{ks as SegmentedPage};