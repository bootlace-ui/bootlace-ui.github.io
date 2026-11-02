import{A as J4,An as hg,At as W,Br as ui,Cr as rf,Ct as U0,Er as sL,Et as Va,F as Jo,G as Lr,Gr as vf,Gt as Yn,Hn as kf,Hr as vC,I as K,It as XR,Jt as Zf,L as KC,Ln as jn,N as JR,P as Jf,Pt as XC,Rn as jo,Rr as ue,Tn as gf,Un as kg,Ut as YZ,Vt as Y3,W as Ll,Wr as ve,Yn as lt,Z as Na,Zr as wf,Zt as _m,_n as ei,_r as q3,a as AF,ar as nh,cn as ch,cr as oA,ei as xh,en as ah,et as Ot,f as Cf,hn as eA,i as $t,ir as nf,kn as hf,ln as cj,mn as dh,mr as pa$1,mt as So,nr as nA,on as ce,p as DU,q as Mh,qn as lU,qr as vi,r as $f,rr as nU,ti as xl,un as cn,ur as of,vr as qF,xt as Tt,yr as rA,zn as k}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import{L as ye,n as Ba}from"./chunk-DycqepRM.js";import{r as y}from"./chunk-CfGjEUxa.js";import{n as q,r as x,t as N}from"./chunk-BOhm2mpp.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as N$1}from"./chunk-DX4JeZih.js";import{t as f}from"./chunk-_QnoVoFv.js";import{t as z}from"./chunk-y4SNPthP.js";var O=class i{el=k(So);browser=YZ(k(lt));lastActive=null;constructor(){if(!this.browser||typeof ResizeObserver>`u`)return;let l=k(jn),s=this.el.nativeElement;pa$1(()=>{this.update(),s.ownerDocument.defaultView?.requestAnimationFrame(()=>s.classList.add(`ngs-tab-indicator-ready`));let n=new ResizeObserver(()=>this.update());n.observe(s);for(let o of Array.from(s.children))n.observe(o);let p=new MutationObserver(o=>{for(let d of o)d.addedNodes.forEach(u=>u instanceof Element&&n.observe(u));this.update()});p.observe(s,{subtree:!0,childList:!0,attributes:!0,attributeFilter:[`class`]}),l.onDestroy(()=>{n.disconnect(),p.disconnect()})})}update(){let l=this.el.nativeElement,s=l.querySelector(`.nav-link.active`),n=!!s&&s.offsetParent!==null,p=(o,d)=>l.style.setProperty(o,d);if(!s||!n){p(`--ngs-indicator-opacity`,`0`);return}p(`--ngs-indicator-x`,`${s.offsetLeft}px`),p(`--ngs-indicator-y`,`${s.offsetTop}px`),p(`--ngs-indicator-width`,`${s.offsetWidth}px`),p(`--ngs-indicator-height`,`${s.offsetHeight}px`),p(`--ngs-indicator-opacity`,`1`),s!==this.lastActive&&(this.lastActive=s,this.revealActive(l,s))}revealActive(l,s){let n=l.scrollWidth-l.clientWidth;if(n<=0)return;let o=getComputedStyle(l).direction===`rtl`?n:0,d=s.offsetLeft,u=d+s.offsetWidth,U=l.scrollLeft+o;d<U?l.scrollLeft=d-o:u>U+l.clientWidth&&(l.scrollLeft=u-l.clientWidth-o)}static ɵfac=function(s){return new(s||i)};static ɵdir=Jo({type:i,selectors:[[``,`ngsTabIndicator`,``]],hostAttrs:[1,`ngs-tab-indicator`]})};var oa=[`*`];var as=class i{static ɵfac=function(s){return new(s||i)};static ɵdir=Jo({type:i,selectors:[[`a`,`ngsTabLink`,``]],hostAttrs:[1,`nav-link`]})};var ns=class i{label=Yn();variant=Yn(`underline`);size=Yn(`md`);classes=jo(()=>{let l=[`nav`,`ngs-tabs`,`ngs-tabs-list`,`ngs-tabs-links`];return l.push(this.variant()===`tabs`?`nav-tabs`:`nav-underline`),this.size()!==`md`&&l.push(`ngs-tabs-${this.size()}`),l.join(` `)});static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`ngs-tab-links`]],hostAttrs:[`role`,`navigation`],hostVars:3,hostBindings:function(s,n){s&2&&(Lr(`aria-label`,n.label()),kg(n.classes()))},inputs:{label:[1,`label`],variant:[1,`variant`],size:[1,`size`]},features:[vC([O])],ngContentSelectors:oa,decls:1,vars:0,template:function(s,n){s&1&&(kf(),hf(0))},encapsulation:2})};var aa=[`*`];function pa(i,l){if(i&1&&nh(0,0),i&2){let s=vf();Ot(`ngTemplateOutlet`,s.template)}}function ca(i,l){if(i&1&&KC(0,pa,1,1,`ng-container`,0),i&2){let s=vf();XC(s.rendered()?0:-1)}}function ra(i,l){i&1&&hf(0)}var da=[`button`];var ga=[`list`];var ma=[`more`];function ha(i,l){i&1&&ue(0,`ngs-icon`,9),i&2&&Ot(`icon`,l)}function ba(i,l){if(i&1){let s=gf();ce(0,`span`,11),ui(`click`,function(p){q3(s);let o=vf().$implicit,d=vf();return Y3(d.close(o,p))}),ue(1,`ngs-icon`,12),vi()}if(i&2){let s=vf(2);Tt(),Ot(`icon`,s.closeIcon)}}function ua(i,l){if(i&1){let s=gf();ce(0,`button`,8,2),ui(`click`,function(){let p=q3(s).$implicit,o=vf();return Y3(o.select(p))})(`focus`,function(){let p=q3(s).$index,o=vf();return Y3(o.keyManager.updateActiveItem(p))}),KC(2,ha,1,1,`ngs-icon`,9),Zf(3),KC(4,ba,2,1,`span`,10),vi()}if(i&2){let s,n=l.$implicit,p=l.$index,o=vf();dh(`active`,n===o.activeTab())(`ngs-tab-overflowed`,o.hidden().has(p)),Ot(`id`,n.tabId)(`disabled`,n.disabled()),Lr(`tabindex`,n===o.tabbable()?0:-1)(`aria-selected`,n===o.activeTab())(`aria-controls`,n.panelId)(`aria-keyshortcuts`,n.closable()?`Delete`:null),Tt(2),XC((s=n.icon())?2:-1,s),Tt(),hg(` `,n.label(),` `),Tt(),XC(n.closable()?4:-1)}}function ja(i,l){if(i&1&&(ce(0,`div`,13)(1,`button`,14,3),Zf(3),ue(4,`ngs-icon`,12),vi()()),i&2){let s=vf(),n=Cf(8);dh(`nav-underline`,s.variant()===`underline`),Tt(),dh(`active`,s.activeHidden())(`ngs-tabs-more-idle`,s.hidden().size===0),Ot(`ngsDropdown`,n)(`ngsDropdownDisabled`,s.hidden().size===0),Lr(`tabindex`,s.hidden().size===0?-1:null),Tt(2),hg(` `,s.i18n.tabs.more,` `),Tt(),Ot(`icon`,s.chevron)}}function va(i,l){if(i&1){let s=gf();ce(0,`button`,17),ui(`click`,function(){let p=q3(s).$implicit,o=vf(2);return Y3(o.select(p))}),Zf(1),vi()}if(i&2){let s=l.$implicit,n=vf(2);dh(`selected`,s===n.activeTab()),Ot(`disabled`,s.disabled()),Lr(`aria-current`,s===n.activeTab()?`true`:null),Tt(),hg(` `,s.label(),` `)}}function ya(i,l){if(i&1&&(ce(0,`div`,15),of(1,va,2,5,`button`,16,nf),vi()),i&2){let s=vf();Ot(`label`,s.i18n.tabs.more),Tt(),rf(s.overflowed())}}var V=class i{template=k(ei);static ɵfac=function(s){return new(s||i)};static ɵdir=Jo({type:i,selectors:[[`ng-template`,`ngsTabContent`,``]]})};var m=class i{tabs=k(h);value=Yn();label=Yn(``);icon=Yn();disabled=Yn(!1,{transform:$t});closable=Yn(!1,{transform:$t});closed=XR();tabId=Ba(`ngs-tab`);panelId=Ba(`ngs-tabpanel`);lazy=rA(V);isActive=jo(()=>this.tabs.activeTab()===this);rendered=jo(()=>this.isActive()||this.tabs.isKept(this));static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`ngs-tab`]],contentQueries:function(s,n,p){s&1&&ch(p,n.lazy,V,5),s&2&&wf()},hostAttrs:[`role`,`tabpanel`,`tabindex`,`0`,1,`ngs-tab-panel`],hostVars:3,hostBindings:function(s,n){s&2&&(Va(`hidden`,!n.isActive()),Lr(`id`,n.panelId)(`aria-labelledby`,n.tabId))},inputs:{value:[1,`value`],label:[1,`label`],icon:[1,`icon`],disabled:[1,`disabled`],closable:[1,`closable`]},outputs:{closed:`closed`},ngContentSelectors:aa,decls:2,vars:1,consts:[[3,`ngTemplateOutlet`]],template:function(s,n){if(s&1&&(kf(),KC(0,ca,1,1)(1,ra,1,0)),s&2){let p;XC((p=n.lazy())?0:1,p)}},dependencies:[_m],encapsulation:2})};var h=class i{i18n=k(o);injector=k(cn);direction=k(ye);browser=YZ(k(lt));animation=k(N$1).animation;chevron=qF;closeIcon=AF;active=JR(0);variant=Yn(`underline`);size=Yn(`md`);orientation=Yn(`horizontal`);activation=Yn(`auto`);keepAlive=Yn(!1,{transform:$t});overflow=Yn(`scroll`);label=Yn();tabs=eA(m);buttons=oA(`button`);list=nA(`list`);moreButton=nA(`more`);vertical=jo(()=>this.orientation()===`vertical`);hidden=W(/* @__PURE__ */ new Set);listWidth=W(null);overflowed=jo(()=>{let l=this.hidden();return this.tabs().filter((s,n)=>l.has(n))});activeHidden=jo(()=>this.overflowed().includes(this.activeTab()));shown=/* @__PURE__ */ new Set;activeTab=jo(()=>{let l=this.tabs(),s=this.active(),n=s===null?void 0:l.find(u=>u.value()===s),p=typeof s==`number`?l[s]:void 0,o=n??p,d=o&&!o.disabled()?o:l.find(u=>!u.disabled())??null;return d&&this.shown.add(d),d});tabbable=jo(()=>{let l=this.activeTab(),s=this.tabs(),n=this.hidden();return l&&!n.has(s.indexOf(l))?l:s.find((p,o)=>!p.disabled()&&!n.has(o))??null});options=/* @__PURE__ */ new WeakMap;focusable=jo(()=>this.tabs().map((l,s)=>this.option(l,s)));keyManager=new y(this.focusable,this.injector).withWrap().withHomeAndEnd();constructor(){if(this.keyManager.change.subscribe(l=>{let s=this.tabs()[l];s&&this.activation()===`auto`&&this.select(s)}),J4(()=>{this.tabs().forEach(l=>[l.label(),l.icon(),l.disabled()]),this.overflow(),this.vertical(),this.size(),K(()=>this.scheduleMeasure())}),this.browser&&typeof ResizeObserver<`u`){let l=k(jn);pa$1(()=>{let s=this.list()?.nativeElement.parentElement;if(!s)return;let n=new ResizeObserver(()=>this.measure());n.observe(s),l.onDestroy(()=>n.disconnect())})}}isKept(l){return this.keepAlive()&&this.shown.has(l)}select(l){if(l.disabled())return;let s=this.tabs().indexOf(l);this.active.set(l.value()??s),this.keyManager.updateActiveItem(s)}close(l,s){if(s?.stopPropagation(),!l.closable()||l.disabled())return;let n=this.tabs(),p=n.indexOf(l),o=_=>!_.disabled(),d=n.slice(p+1).find(o)??n.slice(0,p).reverse().find(o),u=this.buttons()[p]?.nativeElement,U=!!u&&u.ownerDocument.activeElement===u;d&&l===this.activeTab()&&this.select(d),d&&U&&this.buttons()[n.indexOf(d)]?.nativeElement.focus(),l.closed.emit()}onKeydown(l){if(l.key===`Delete`||l.key===`Backspace`){let s=this.buttons().findIndex(p=>p.nativeElement===l.target),n=this.tabs()[s];if(n?.closable()){l.preventDefault(),this.close(n);return}}this.vertical()?this.keyManager.withVerticalOrientation(!0).withHorizontalOrientation(null):this.keyManager.withVerticalOrientation(!1).withHorizontalOrientation(this.direction.value),this.keyManager.onKeydown(l)}option(l,s){let n=this.options.get(l);return n||(n={get disabled(){return l.disabled()},focus:()=>this.buttons()[this.tabs().indexOf(l)]?.nativeElement.focus()},this.options.set(l,n)),this.hidden().has(s)?{disabled:!0,focus:n.focus}:n}scheduleMeasure(){this.browser&&pa$1(()=>this.measure(),{injector:this.injector})}measure(){let l=this.buttons().map(d=>d.nativeElement),s=this.list()?.nativeElement.parentElement,n=/* @__PURE__ */ new Set,p=null;if(this.overflow()===`more`&&!this.vertical()&&s&&l.length){let d=parseFloat(getComputedStyle(l[0].parentElement).columnGap)||0,u=l.map(_=>_.offsetWidth);if(u.reduce((_,H)=>_+H+d,-d)>s.clientWidth){let _=(this.moreButton()?.nativeElement.offsetWidth??0)+d,H=_,ms=!0;u.forEach((ea,la)=>{H+=ea+d,ms=ms&&H-d<=s.clientWidth,ms?p=H-_-d:n.add(la)})}}this.listWidth.set(p);let o=this.hidden();(n.size!==o.size||[...n].some(d=>!o.has(d)))&&this.hidden.set(n)}static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`ngs-tabs`]],contentQueries:function(s,n,p){s&1&&ch(p,n.tabs,m,4),s&2&&wf()},viewQuery:function(s,n){s&1&&ah(n.buttons,da,5)(n.list,ga,5)(n.moreButton,ma,5),s&2&&wf(3)},hostAttrs:[1,`ngs-tabs`],hostVars:8,hostBindings:function(s,n){s&2&&dh(`ngs-tabs-vertical`,n.vertical())(`ngs-tabs-sm`,n.size()===`sm`)(`ngs-tabs-lg`,n.size()===`lg`)(`ngs-tabs-static`,!n.animation)},inputs:{active:[1,`active`],variant:[1,`variant`],size:[1,`size`],orientation:[1,`orientation`],activation:[1,`activation`],keepAlive:[1,`keepAlive`],overflow:[1,`overflow`],label:[1,`label`]},outputs:{active:`activeChange`},ngContentSelectors:aa,decls:9,vars:11,consts:[[`list`,``],[`moreMenu`,``],[`button`,``],[`more`,``],[1,`ngs-tabs-bar`],[`ngsTabIndicator`,``,`role`,`tablist`,1,`nav`,`ngs-tabs-list`,3,`keydown`],[`type`,`button`,`role`,`tab`,1,`nav-link`,3,`id`,`active`,`ngs-tab-overflowed`,`disabled`],[1,`nav`,`ngs-tabs-more-wrap`,3,`nav-underline`],[`type`,`button`,`role`,`tab`,1,`nav-link`,3,`click`,`focus`,`id`,`disabled`],[3,`icon`],[`aria-hidden`,`true`,1,`ngs-tab-close`],[`aria-hidden`,`true`,1,`ngs-tab-close`,3,`click`],[`size`,`1rem`,3,`icon`],[1,`nav`,`ngs-tabs-more-wrap`],[`type`,`button`,1,`nav-link`,3,`ngsDropdown`,`ngsDropdownDisabled`],[`ngsMenu`,``,3,`label`],[`ngsMenuItem`,``,3,`selected`,`disabled`],[`ngsMenuItem`,``,3,`click`,`disabled`]],template:function(s,n){s&1&&(kf(),ce(0,`div`,4)(1,`div`,5,0),ui(`keydown`,function(o){return n.onKeydown(o)}),of(3,ua,5,13,`button`,6,nf),vi(),KC(5,ja,5,11,`div`,7),vi(),hf(6),U0(7,ya,3,1,`ng-template`,null,1,cj)),s&2&&(dh(`ngs-tabs-more`,n.overflow()===`more`&&!n.vertical()),Tt(),Na(`max-inline-size`,n.listWidth(),`px`),dh(`nav-underline`,n.variant()===`underline`||n.vertical())(`nav-tabs`,n.variant()===`tabs`&&!n.vertical()),Lr(`aria-label`,n.label())(`aria-orientation`,n.vertical()?`vertical`:null),Tt(2),rf(n.tabs()),Tt(2),XC(n.overflow()===`more`&&!n.vertical()?5:-1))},dependencies:[Ll,O,q,x,N],encapsulation:2})};var ts=class i{home=lU;folder=nU;setting=DU;static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-basic`]],decls:11,vars:3,consts:[[1,`row`],[1,`col-12`],[`label`,`Project sections`],[`label`,`Overview`,3,`icon`],[`label`,`Files`,3,`icon`],[`label`,`Archive`,`disabled`,``],[`label`,`Settings`,3,`icon`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-tabs`,2)(3,`ngs-tab`,3),Zf(4,`The overview shows what changed this week.`),vi(),ce(5,`ngs-tab`,4),Zf(6,`Files live here.`),vi(),ce(7,`ngs-tab`,5),Zf(8,`Archived items.`),vi(),ce(9,`ngs-tab`,6),Zf(10,`Settings for the project.`),vi()()()()),s&2&&(Tt(3),Ot(`icon`,n.home),Tt(2),Ot(`icon`,n.folder),Tt(4),Ot(`icon`,n.setting))},dependencies:[h,m],encapsulation:2})};function fa(i,l){if(i&1){let s=gf();ce(0,`ngs-tab`,5),ui(`closed`,function(){let p=q3(s).$implicit,o=vf();return Y3(o.close(p))}),Zf(1),vi()}if(i&2){let s=l.$implicit;Ot(`value`,s)(`label`,`Document `+s.slice(-1)),Tt(),hg(` Contents of `,s,`. `)}}var es=class i{active=W(`draft-1`);documents=W([`draft-1`,`draft-2`,`draft-3`]);next=4;add(){let l=`draft-${this.next++}`;this.documents.update(s=>[...s,l]),this.active.set(l)}close(l){this.documents.update(s=>s.filter(n=>n!==l))}static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-closable`]],decls:8,vars:1,consts:[[1,`row`,`g-3`],[1,`col-12`],[`label`,`Open documents`,3,`activeChange`,`active`],[`closable`,``,3,`value`,`label`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[`closable`,``,3,`closed`,`value`,`label`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-tabs`,2),xh(`activeChange`,function(o){return $f(n.active,o)||(n.active=o),o}),of(3,fa,2,3,`ngs-tab`,3,nf),vi()(),ce(5,`div`,1)(6,`button`,4),ui(`click`,function(){return n.add()}),Zf(7,`Add document`),vi()()()),s&2&&(Tt(2),Mh(`active`,n.active),Tt(),rf(n.documents()))},dependencies:[h,m,f],encapsulation:2})};var ls=class i{active=W(`details`);static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-controlled`]],decls:19,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`],[`label`,`Report`,3,`activeChange`,`active`],[`value`,`summary`,`label`,`Summary`],[`value`,`details`,`label`,`Details`],[`value`,`notes`,`label`,`Notes`],[1,`row`,`g-2`,`align-items-center`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`click`],[1,`col-auto`,`fg-2`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-tabs`,2),xh(`activeChange`,function(o){return $f(n.active,o)||(n.active=o),o}),ce(3,`ngs-tab`,3),Zf(4,`A short summary.`),vi(),ce(5,`ngs-tab`,4),Zf(6,`All the details.`),vi(),ce(7,`ngs-tab`,5),Zf(8,`Notes from the team.`),vi()()(),ce(9,`div`,1)(10,`div`,6)(11,`div`,7)(12,`button`,8),ui(`click`,function(){return n.active.set(`summary`)}),Zf(13,`Summary`),vi()(),ce(14,`div`,7)(15,`button`,8),ui(`click`,function(){return n.active.set(2)}),Zf(16,`Third tab, by index`),vi()(),ce(17,`div`,9),Zf(18),vi()()()()),s&2&&(Tt(2),Mh(`active`,n.active),Tt(16),hg(`Active: `,n.active()))},dependencies:[h,m,f],encapsulation:2})};function xa(i,l){i&1&&(ce(0,`label`,7),Zf(1,`Note (switch tabs and come back)`),vi(),ue(2,`input`,8))}var is=class i{keep=W(!1);static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-lazy`]],decls:10,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`],[`label`,`Lazy panels`,3,`keepAlive`],[`label`,`Always there`],[`label`,`Counter`],[`ngsTabContent`,``],[3,`valueChange`,`value`],[`for`,`lazy-note`,1,`form-label`],[`id`,`lazy-note`,1,`form-control`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-tabs`,2)(3,`ngs-tab`,3),Zf(4,`Plain content is rendered with the page.`),vi(),ce(5,`ngs-tab`,4),U0(6,xa,3,0,`ng-template`,5),vi()()(),ce(7,`div`,1)(8,`ngs-switch`,6),xh(`valueChange`,function(o){return $f(n.keep,o)||(n.keep=o),o}),Zf(9,`Keep panels alive`),vi()()()),s&2&&(Tt(2),Ot(`keepAlive`,n.keep()),Tt(6),Mh(`value`,n.keep))},dependencies:[h,m,V,z],encapsulation:2})};var os=class i{static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-manual`]],decls:9,vars:0,consts:[[1,`row`],[1,`col-12`],[`label`,`Manual activation`,`activation`,`manual`],[`label`,`First`],[`label`,`Second`],[`label`,`Third`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-tabs`,2)(3,`ngs-tab`,3),Zf(4,`First panel.`),vi(),ce(5,`ngs-tab`,4),Zf(6,`Second panel.`),vi(),ce(7,`ngs-tab`,5),Zf(8,`Third panel.`),vi()()()())},dependencies:[h,m],encapsulation:2})};function wa(i,l){if(i&1&&(ce(0,`ngs-tab`,4),Zf(1),vi()),i&2){let s=l.$implicit;Ot(`label`,s),Tt(),hg(``,s,` panel.`)}}function Ta(i,l){if(i&1&&(ce(0,`ngs-tab`,4),Zf(1),vi()),i&2){let s=l.$implicit;Ot(`label`,s),Tt(),hg(``,s,` panel.`)}}var ps=class i{names=[`Inbox`,`Drafts`,`Sent`,`Scheduled`,`Archive`,`Spam`,`Trash`,`Labels`];static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-overflow`]],decls:13,vars:0,consts:[[1,`row`,`g-4`],[1,`col-12`,`lg:col-6`],[1,`fg-2`],[`label`,`Scrolling tabs`],[3,`label`],[`label`,`Tabs with a more menu`,`overflow`,`more`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`p`,2),Zf(3,`Scroll (default)`),vi(),ce(4,`ngs-tabs`,3),of(5,wa,2,2,`ngs-tab`,4,nf),vi()(),ce(7,`div`,1)(8,`p`,2),Zf(9,`More menu`),vi(),ce(10,`ngs-tabs`,5),of(11,Ta,2,2,`ngs-tab`,4,nf),vi()()()),s&2&&(Tt(5),rf(n.names),Tt(6),rf(n.names))},dependencies:[h,m],encapsulation:2})};var ka=()=>({exact:!0});var cs=class i{static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-router-links`]],decls:9,vars:2,consts:[[1,`row`],[1,`col-12`],[`label`,`Documentation pages`],[`ngsTabLink`,``,`routerLink`,`/navigation/tabs`,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,3,`routerLinkActiveOptions`],[`ngsTabLink`,``,`routerLink`,`/navigation/tabs/api`,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`],[`ngsTabLink`,``,`routerLink`,`/navigation/menu`,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-tab-links`,2)(3,`a`,3),Zf(4,` Examples `),vi(),ce(5,`a`,4),Zf(6,` API `),vi(),ce(7,`a`,5),Zf(8,` Menu `),vi()()()()),s&2&&(Tt(3),Ot(`routerLinkActiveOptions`,Jf(1,ka)))},dependencies:[ns,as,xl,sL],encapsulation:2})};var rs=class i{static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-variants`]],decls:25,vars:0,consts:[[1,`row`,`g-4`],[1,`col-12`,`lg:col-6`],[`label`,`Underline, small`,`size`,`sm`],[`label`,`Day`],[`label`,`Week`],[`label`,`Month`],[`label`,`Underline, large`,`size`,`lg`],[`label`,`Bordered tabs`,`variant`,`tabs`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-tabs`,2)(3,`ngs-tab`,3),Zf(4,`Day view.`),vi(),ce(5,`ngs-tab`,4),Zf(6,`Week view.`),vi(),ce(7,`ngs-tab`,5),Zf(8,`Month view.`),vi()()(),ce(9,`div`,1)(10,`ngs-tabs`,6)(11,`ngs-tab`,3),Zf(12,`Day view.`),vi(),ce(13,`ngs-tab`,4),Zf(14,`Week view.`),vi(),ce(15,`ngs-tab`,5),Zf(16,`Month view.`),vi()()(),ce(17,`div`,1)(18,`ngs-tabs`,7)(19,`ngs-tab`,3),Zf(20,`Day view.`),vi(),ce(21,`ngs-tab`,4),Zf(22,`Week view.`),vi(),ce(23,`ngs-tab`,5),Zf(24,`Month view.`),vi()()()())},dependencies:[h,m],encapsulation:2})};var ds=class i{static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-vertical`]],decls:9,vars:0,consts:[[1,`row`],[1,`col-12`],[`label`,`Account`,`orientation`,`vertical`],[`label`,`Profile`],[`label`,`Security and sign-in options`],[`label`,`Notifications`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-tabs`,2)(3,`ngs-tab`,3),Zf(4,`Name, photo and contact details.`),vi(),ce(5,`ngs-tab`,4),Zf(6,`Password and two-step sign-in.`),vi(),ce(7,`ngs-tab`,5),Zf(8,`What we may email you about.`),vi()()()())},dependencies:[h,m],encapsulation:2})};var gs=class i{steps=[`account`,`details`,`review`];active=W(`account`);reached=W(0);index=jo(()=>this.steps.indexOf(String(this.active())));locked(l){return l>this.reached()}go(l){this.reached.update(s=>Math.max(s,l)),this.active.set(this.steps[l])}static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-wizard`]],decls:17,vars:5,consts:[[1,`row`,`g-3`],[1,`col-12`],[`label`,`Sign-up steps`,`activation`,`manual`,3,`activeChange`,`active`],[`value`,`account`,`label`,`1. Account`],[`value`,`details`,`label`,`2. Details`,3,`disabled`],[`value`,`review`,`label`,`3. Review`,3,`disabled`],[1,`row`,`g-2`],[1,`col-auto`],[`ngsButton`,``,`variant`,`outline`,3,`click`,`disabled`],[`ngsButton`,``,3,`click`,`disabled`]],template:function(s,n){s&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-tabs`,2),xh(`activeChange`,function(o){return $f(n.active,o)||(n.active=o),o}),ce(3,`ngs-tab`,3),Zf(4,`Choose a name and a password.`),vi(),ce(5,`ngs-tab`,4),Zf(6,` Tell us a little about yourself. `),vi(),ce(7,`ngs-tab`,5),Zf(8,`Check and confirm.`),vi()()(),ce(9,`div`,1)(10,`div`,6)(11,`div`,7)(12,`button`,8),ui(`click`,function(){return n.go(n.index()-1)}),Zf(13,` Back `),vi()(),ce(14,`div`,7)(15,`button`,9),ui(`click`,function(){return n.go(n.index()+1)}),Zf(16,` Next `),vi()()()()()),s&2&&(Tt(2),Mh(`active`,n.active),Tt(3),Ot(`disabled`,n.locked(1)),Tt(2),Ot(`disabled`,n.locked(2)),Tt(5),Ot(`disabled`,n.index()===0),Tt(3),Ot(`disabled`,n.index()===n.steps.length-1))},dependencies:[h,m,f],encapsulation:2})};var na={basic:{html:{code:`<div class="row">
  <div class="col-12">
    <ngs-tabs label="Project sections">
      <ngs-tab label="Overview" [icon]="home">The overview shows what changed this week.</ngs-tab>
      <ngs-tab label="Files" [icon]="folder">Files live here.</ngs-tab>
      <ngs-tab label="Archive" disabled>Archived items.</ngs-tab>
      <ngs-tab label="Settings" [icon]="setting">Settings for the project.</ngs-tab>
    </ngs-tabs>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Project sections&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Overview&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;home&quot;</span>&gt;</span>The overview shows what changed this week.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Files&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;folder&quot;</span>&gt;</span>Files live here.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Archive&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Archived items.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Settings&quot;</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;setting&quot;</span>&gt;</span>Settings for the project.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsTabs, NgsTab } from '@bootlace/core/tabs';
import { ngsIconHome, ngsIconFolder, ngsIconSetting } from '@bootlace/icons';

@Component({
  selector: 'docs-tabs-basic',
  imports: [NgsTabs, NgsTab],
  templateUrl: './index.html',
})
export class TabsBasicExample {
  protected readonly home = ngsIconHome;
  protected readonly folder = ngsIconFolder;
  protected readonly setting = ngsIconSetting;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tabs&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconHome, ngsIconFolder, ngsIconSetting } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tabs-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> home = ngsIconHome;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> folder = ngsIconFolder;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> setting = ngsIconSetting;
}`}},closable:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <ngs-tabs label="Open documents" [(active)]="active">
      @for (id of documents(); track id) {
        <ngs-tab [value]="id" [label]="'Document ' + id.slice(-1)" closable (closed)="close(id)">
          Contents of {{ id }}.
        </ngs-tab>
      }
    </ngs-tabs>
  </div>
  <div class="col-12">
    <button ngsButton variant="outline" (click)="add()">Add document</button>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Open documents&quot;</span> [(<span class="hljs-attr">active</span>)]=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
      @for (id of documents(); track id) {
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;id&quot;</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;Document &#x27; + id.slice(-1)&quot;</span> <span class="hljs-attr">closable</span> (<span class="hljs-attr">closed</span>)=<span class="hljs-string">&quot;close(id)&quot;</span>&gt;</span>
          Contents of {{ id }}.
        <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;add()&quot;</span>&gt;</span>Add document<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsTab, NgsTabs } from '@bootlace/core/tabs';

@Component({
  selector: 'docs-tabs-closable',
  imports: [NgsTabs, NgsTab, NgsButton],
  templateUrl: './index.html',
})
export class TabsClosableExample {
  protected readonly active = signal<string | number | null>('draft-1');
  protected readonly documents = signal(['draft-1', 'draft-2', 'draft-3']);
  private next = 4;

  protected add(): void {
    const id = \`draft-\${this.next++}\`;
    this.documents.update((list) => [...list, id]);
    this.active.set(id);
  }

  protected close(id: string): void {
    this.documents.update((list) => list.filter((item) => item !== id));
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTab</span>, <span class="hljs-title class_">NgsTabs</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tabs&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tabs-closable&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsClosableExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> active = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;draft-1&#x27;</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> documents = <span class="hljs-title function_">signal</span>([<span class="hljs-string">&#x27;draft-1&#x27;</span>, <span class="hljs-string">&#x27;draft-2&#x27;</span>, <span class="hljs-string">&#x27;draft-3&#x27;</span>]);
  <span class="hljs-keyword">private</span> next = <span class="hljs-number">4</span>;

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">add</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-keyword">const</span> id = <span class="hljs-string">\`draft-<span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.next++}</span>\`</span>;
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">documents</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">list</span>) =&gt;</span> [...list, id]);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">active</span>.<span class="hljs-title function_">set</span>(id);
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">close</span>(<span class="hljs-attr">id</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">documents</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">list</span>) =&gt;</span> list.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item !== id));
  }
}`}},controlled:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <ngs-tabs label="Report" [(active)]="active">
      <ngs-tab value="summary" label="Summary">A short summary.</ngs-tab>
      <ngs-tab value="details" label="Details">All the details.</ngs-tab>
      <ngs-tab value="notes" label="Notes">Notes from the team.</ngs-tab>
    </ngs-tabs>
  </div>
  <div class="col-12">
    <div class="row g-2 align-items-center">
      <div class="col-auto">
        <button ngsButton variant="outline" (click)="active.set('summary')">Summary</button>
      </div>
      <div class="col-auto">
        <button ngsButton variant="outline" (click)="active.set(2)">Third tab, by index</button>
      </div>
      <div class="col-auto fg-2">Active: {{ active() }}</div>
    </div>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Report&quot;</span> [(<span class="hljs-attr">active</span>)]=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;summary&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Summary&quot;</span>&gt;</span>A short summary.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;details&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Details&quot;</span>&gt;</span>All the details.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;notes&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Notes&quot;</span>&gt;</span>Notes from the team.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;active.set(&#x27;summary&#x27;)&quot;</span>&gt;</span>Summary<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;active.set(2)&quot;</span>&gt;</span>Third tab, by index<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto fg-2&quot;</span>&gt;</span>Active: {{ active() }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsTabs, NgsTab } from '@bootlace/core/tabs';
import { NgsButton } from '@bootlace/core/button';

@Component({
  selector: 'docs-tabs-controlled',
  imports: [NgsTabs, NgsTab, NgsButton],
  templateUrl: './index.html',
})
export class TabsControlledExample {
  protected readonly active = signal<string | number | null>('details');
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tabs&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tabs-controlled&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsControlledExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> active = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;details&#x27;</span>);
}`}},lazy:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <ngs-tabs label="Lazy panels" [keepAlive]="keep()">
      <ngs-tab label="Always there">Plain content is rendered with the page.</ngs-tab>
      <ngs-tab label="Counter">
        <ng-template ngsTabContent>
          <label class="form-label" for="lazy-note">Note (switch tabs and come back)</label>
          <input id="lazy-note" class="form-control" />
        </ng-template>
      </ngs-tab>
    </ngs-tabs>
  </div>
  <div class="col-12">
    <ngs-switch [(value)]="keep">Keep panels alive</ngs-switch>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Lazy panels&quot;</span> [<span class="hljs-attr">keepAlive</span>]=<span class="hljs-string">&quot;keep()&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Always there&quot;</span>&gt;</span>Plain content is rendered with the page.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Counter&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> <span class="hljs-attr">ngsTabContent</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;lazy-note&quot;</span>&gt;</span>Note (switch tabs and come back)<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;lazy-note&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-control&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-switch</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;keep&quot;</span>&gt;</span>Keep panels alive<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsTabs, NgsTab, NgsTabContent } from '@bootlace/core/tabs';
import { NgsSwitch } from '@bootlace/core/switch';

@Component({
  selector: 'docs-tabs-lazy',
  imports: [NgsTabs, NgsTab, NgsTabContent, NgsSwitch],
  templateUrl: './index.html',
})
export class TabsLazyExample {
  protected readonly keep = signal(false);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span>, <span class="hljs-title class_">NgsTabContent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tabs&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSwitch</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/switch&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tabs-lazy&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span>, <span class="hljs-title class_">NgsTabContent</span>, <span class="hljs-title class_">NgsSwitch</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsLazyExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> keep = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);
}`}},manual:{html:{code:`<div class="row">
  <div class="col-12">
    <ngs-tabs label="Manual activation" activation="manual">
      <ngs-tab label="First">First panel.</ngs-tab>
      <ngs-tab label="Second">Second panel.</ngs-tab>
      <ngs-tab label="Third">Third panel.</ngs-tab>
    </ngs-tabs>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Manual activation&quot;</span> <span class="hljs-attr">activation</span>=<span class="hljs-string">&quot;manual&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;First&quot;</span>&gt;</span>First panel.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Second&quot;</span>&gt;</span>Second panel.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Third&quot;</span>&gt;</span>Third panel.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsTabs, NgsTab } from '@bootlace/core/tabs';

@Component({
  selector: 'docs-tabs-manual',
  imports: [NgsTabs, NgsTab],
  templateUrl: './index.html',
})
export class TabsManualExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tabs&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tabs-manual&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsManualExample</span> {}`}},overflow:{html:{code:`<div class="row g-4">
  <div class="col-12 lg:col-6">
    <p class="fg-2">Scroll (default)</p>
    <ngs-tabs label="Scrolling tabs">
      @for (name of names; track name) {
        <ngs-tab [label]="name">{{ name }} panel.</ngs-tab>
      }
    </ngs-tabs>
  </div>
  <div class="col-12 lg:col-6">
    <p class="fg-2">More menu</p>
    <ngs-tabs label="Tabs with a more menu" overflow="more">
      @for (name of names; track name) {
        <ngs-tab [label]="name">{{ name }} panel.</ngs-tab>
      }
    </ngs-tabs>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2&quot;</span>&gt;</span>Scroll (default)<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Scrolling tabs&quot;</span>&gt;</span>
      @for (name of names; track name) {
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>{{ name }} panel.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fg-2&quot;</span>&gt;</span>More menu<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Tabs with a more menu&quot;</span> <span class="hljs-attr">overflow</span>=<span class="hljs-string">&quot;more&quot;</span>&gt;</span>
      @for (name of names; track name) {
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>{{ name }} panel.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsTabs, NgsTab } from '@bootlace/core/tabs';

@Component({
  selector: 'docs-tabs-overflow',
  imports: [NgsTabs, NgsTab],
  templateUrl: './index.html',
})
export class TabsOverflowExample {
  protected readonly names = [
    'Inbox',
    'Drafts',
    'Sent',
    'Scheduled',
    'Archive',
    'Spam',
    'Trash',
    'Labels',
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tabs&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tabs-overflow&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsOverflowExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> names = [
    <span class="hljs-string">&#x27;Inbox&#x27;</span>,
    <span class="hljs-string">&#x27;Drafts&#x27;</span>,
    <span class="hljs-string">&#x27;Sent&#x27;</span>,
    <span class="hljs-string">&#x27;Scheduled&#x27;</span>,
    <span class="hljs-string">&#x27;Archive&#x27;</span>,
    <span class="hljs-string">&#x27;Spam&#x27;</span>,
    <span class="hljs-string">&#x27;Trash&#x27;</span>,
    <span class="hljs-string">&#x27;Labels&#x27;</span>,
  ];
}`}},"router-links":{html:{code:`<div class="row">
  <div class="col-12">
    <ngs-tab-links label="Documentation pages">
      <a
        ngsTabLink
        routerLink="/navigation/tabs"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        ariaCurrentWhenActive="page"
      >
        Examples
      </a>
      <a
        ngsTabLink
        routerLink="/navigation/tabs/api"
        routerLinkActive="active"
        ariaCurrentWhenActive="page"
      >
        API
      </a>
      <a
        ngsTabLink
        routerLink="/navigation/menu"
        routerLinkActive="active"
        ariaCurrentWhenActive="page"
      >
        Menu
      </a>
    </ngs-tab-links>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab-links</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Documentation pages&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>
        <span class="hljs-attr">ngsTabLink</span>
        <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/tabs&quot;</span>
        <span class="hljs-attr">routerLinkActive</span>=<span class="hljs-string">&quot;active&quot;</span>
        [<span class="hljs-attr">routerLinkActiveOptions</span>]=<span class="hljs-string">&quot;{ exact: true }&quot;</span>
        <span class="hljs-attr">ariaCurrentWhenActive</span>=<span class="hljs-string">&quot;page&quot;</span>
      &gt;</span>
        Examples
      <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>
        <span class="hljs-attr">ngsTabLink</span>
        <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/tabs/api&quot;</span>
        <span class="hljs-attr">routerLinkActive</span>=<span class="hljs-string">&quot;active&quot;</span>
        <span class="hljs-attr">ariaCurrentWhenActive</span>=<span class="hljs-string">&quot;page&quot;</span>
      &gt;</span>
        API
      <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span>
        <span class="hljs-attr">ngsTabLink</span>
        <span class="hljs-attr">routerLink</span>=<span class="hljs-string">&quot;/navigation/menu&quot;</span>
        <span class="hljs-attr">routerLinkActive</span>=<span class="hljs-string">&quot;active&quot;</span>
        <span class="hljs-attr">ariaCurrentWhenActive</span>=<span class="hljs-string">&quot;page&quot;</span>
      &gt;</span>
        Menu
      <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab-links</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsTabLinks, NgsTabLink } from '@bootlace/core/tabs';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'docs-tabs-router-links',
  imports: [NgsTabLinks, NgsTabLink, RouterLink, RouterLinkActive],
  templateUrl: './index.html',
})
export class TabsRouterLinksExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTabLinks</span>, <span class="hljs-title class_">NgsTabLink</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tabs&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RouterLink</span>, <span class="hljs-title class_">RouterLinkActive</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/router&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tabs-router-links&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTabLinks</span>, <span class="hljs-title class_">NgsTabLink</span>, <span class="hljs-title class_">RouterLink</span>, <span class="hljs-title class_">RouterLinkActive</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsRouterLinksExample</span> {}`}},variants:{html:{code:`<div class="row g-4">
  <div class="col-12 lg:col-6">
    <ngs-tabs label="Underline, small" size="sm">
      <ngs-tab label="Day">Day view.</ngs-tab>
      <ngs-tab label="Week">Week view.</ngs-tab>
      <ngs-tab label="Month">Month view.</ngs-tab>
    </ngs-tabs>
  </div>
  <div class="col-12 lg:col-6">
    <ngs-tabs label="Underline, large" size="lg">
      <ngs-tab label="Day">Day view.</ngs-tab>
      <ngs-tab label="Week">Week view.</ngs-tab>
      <ngs-tab label="Month">Month view.</ngs-tab>
    </ngs-tabs>
  </div>
  <div class="col-12 lg:col-6">
    <ngs-tabs label="Bordered tabs" variant="tabs">
      <ngs-tab label="Day">Day view.</ngs-tab>
      <ngs-tab label="Week">Week view.</ngs-tab>
      <ngs-tab label="Month">Month view.</ngs-tab>
    </ngs-tabs>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Underline, small&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Day&quot;</span>&gt;</span>Day view.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Week&quot;</span>&gt;</span>Week view.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Month&quot;</span>&gt;</span>Month view.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Underline, large&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;lg&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Day&quot;</span>&gt;</span>Day view.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Week&quot;</span>&gt;</span>Week view.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Month&quot;</span>&gt;</span>Month view.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Bordered tabs&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;tabs&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Day&quot;</span>&gt;</span>Day view.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Week&quot;</span>&gt;</span>Week view.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Month&quot;</span>&gt;</span>Month view.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsTabs, NgsTab } from '@bootlace/core/tabs';

@Component({
  selector: 'docs-tabs-variants',
  imports: [NgsTabs, NgsTab],
  templateUrl: './index.html',
})
export class TabsVariantsExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tabs&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tabs-variants&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsVariantsExample</span> {}`}},vertical:{html:{code:`<div class="row">
  <div class="col-12">
    <ngs-tabs label="Account" orientation="vertical">
      <ngs-tab label="Profile">Name, photo and contact details.</ngs-tab>
      <ngs-tab label="Security and sign-in options">Password and two-step sign-in.</ngs-tab>
      <ngs-tab label="Notifications">What we may email you about.</ngs-tab>
    </ngs-tabs>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Account&quot;</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;vertical&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Profile&quot;</span>&gt;</span>Name, photo and contact details.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Security and sign-in options&quot;</span>&gt;</span>Password and two-step sign-in.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Notifications&quot;</span>&gt;</span>What we may email you about.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsTabs, NgsTab } from '@bootlace/core/tabs';

@Component({
  selector: 'docs-tabs-vertical',
  imports: [NgsTabs, NgsTab],
  templateUrl: './index.html',
})
export class TabsVerticalExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tabs&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tabs-vertical&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsVerticalExample</span> {}`}},wizard:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <ngs-tabs label="Sign-up steps" [(active)]="active" activation="manual">
      <ngs-tab value="account" label="1. Account">Choose a name and a password.</ngs-tab>
      <ngs-tab value="details" label="2. Details" [disabled]="locked(1)">
        Tell us a little about yourself.
      </ngs-tab>
      <ngs-tab value="review" label="3. Review" [disabled]="locked(2)">Check and confirm.</ngs-tab>
    </ngs-tabs>
  </div>
  <div class="col-12">
    <div class="row g-2">
      <div class="col-auto">
        <button ngsButton variant="outline" [disabled]="index() === 0" (click)="go(index() - 1)">
          Back
        </button>
      </div>
      <div class="col-auto">
        <button ngsButton [disabled]="index() === steps.length - 1" (click)="go(index() + 1)">
          Next
        </button>
      </div>
    </div>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tabs</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sign-up steps&quot;</span> [(<span class="hljs-attr">active</span>)]=<span class="hljs-string">&quot;active&quot;</span> <span class="hljs-attr">activation</span>=<span class="hljs-string">&quot;manual&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;account&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1. Account&quot;</span>&gt;</span>Choose a name and a password.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;details&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2. Details&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;locked(1)&quot;</span>&gt;</span>
        Tell us a little about yourself.
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-tab</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;review&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3. Review&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;locked(2)&quot;</span>&gt;</span>Check and confirm.<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tab</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-tabs</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;index() === 0&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;go(index() - 1)&quot;</span>&gt;</span>
          Back
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;index() === steps.length - 1&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;go(index() + 1)&quot;</span>&gt;</span>
          Next
        <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, computed, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsTab, NgsTabs } from '@bootlace/core/tabs';

@Component({
  selector: 'docs-tabs-wizard',
  imports: [NgsTabs, NgsTab, NgsButton],
  templateUrl: './index.html',
})
export class TabsWizardExample {
  protected readonly steps = ['account', 'details', 'review'];
  protected readonly active = signal<string | number | null>('account');
  private readonly reached = signal(0);
  protected readonly index = computed(() => this.steps.indexOf(String(this.active())));

  protected locked(step: number): boolean {
    return step > this.reached();
  }

  protected go(step: number): void {
    this.reached.update((reached) => Math.max(reached, step));
    this.active.set(this.steps[step]);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, computed, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTab</span>, <span class="hljs-title class_">NgsTabs</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/tabs&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-tabs-wizard&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTabs</span>, <span class="hljs-title class_">NgsTab</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TabsWizardExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> steps = [<span class="hljs-string">&#x27;account&#x27;</span>, <span class="hljs-string">&#x27;details&#x27;</span>, <span class="hljs-string">&#x27;review&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> active = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;account&#x27;</span>);
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> reached = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> index = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">steps</span>.<span class="hljs-title function_">indexOf</span>(<span class="hljs-title class_">String</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">active</span>())));

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">locked</span>(<span class="hljs-attr">step</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">boolean</span> {
    <span class="hljs-keyword">return</span> step &gt; <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">reached</span>();
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">go</span>(<span class="hljs-attr">step</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">reached</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">reached</span>) =&gt;</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(reached, step));
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">active</span>.<span class="hljs-title function_">set</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">steps</span>[step]);
  }
}`}}};var ta=class i{tab=Yn(`examples`);sources=na;basic=ts;controlled=ls;lazy=is;manual=os;variants=rs;vertical=ds;overflow=ps;closable=es;wizard=gs;routerLinks=cs;static ɵfac=function(s){return new(s||i)};static ɵcmp=ve({type:i,selectors:[[`docs-tabs-page`]],inputs:{tab:[1,`tab`]},decls:198,vars:21,consts:[[`heading`,`Tabs`,`package`,`@bootlace/core/tabs`,`path`,`/navigation/tabs`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`controlled`,`heading`,`Controlled`,3,`component`,`sources`],[`id`,`lazy`,`heading`,`Lazy panels`,3,`component`,`sources`],[`id`,`manual`,`heading`,`Manual activation`,3,`component`,`sources`],[`id`,`variants`,`heading`,`Sizes and variants`,3,`component`,`sources`],[`id`,`vertical`,`heading`,`Vertical`,3,`component`,`sources`],[`id`,`overflow`,`heading`,`Overflow`,3,`component`,`sources`],[`id`,`closable`,`heading`,`Closable`,3,`component`,`sources`],[`id`,`wizard`,`heading`,`As steps`,3,`component`,`sources`],[`id`,`router-links`,`heading`,`Router links`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(s,n){s&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` Tabs and their panels, built on Bootstrap 6 `),ce(3,`code`),Zf(4,`.nav-underline`),vi(),Zf(5,` and `),ce(6,`code`),Zf(7,`.nav-tabs`),vi(),Zf(8,` and the WAI-ARIA tabs pattern. The active tab slides an underline along, as in Taiga UI. `),ce(9,`code`),Zf(10,`ngs-tabs`),vi(),Zf(11,` owns the panels; `),ce(12,`code`),Zf(13,`ngs-tab-links`),vi(),Zf(14,` is the router variant, where the tabs are links. `),vi(),ce(15,`docs-example`,2),Zf(16,` Put an `),ce(17,`code`),Zf(18,`ngs-tab`),vi(),Zf(19,` per tab inside `),ce(20,`code`),Zf(21,`ngs-tabs`),vi(),Zf(22,`. Its content is the panel; `),ce(23,`code`),Zf(24,`label`),vi(),Zf(25,` and `),ce(26,`code`),Zf(27,`icon`),vi(),Zf(28,` draw the tab. A `),ce(29,`code`),Zf(30,`disabled`),vi(),Zf(31,` tab is skipped by the arrow keys. Name the list with `),ce(32,`code`),Zf(33,`label`),vi(),Zf(34,`. `),vi(),ce(35,`docs-example`,3)(36,`code`),Zf(37,`[(active)]`),vi(),Zf(38,` takes a tab's `),ce(39,`code`),Zf(40,`value`),vi(),Zf(41,`, or its index, counted from 0. It follows clicks and keys, and can be set from code. `),vi(),ce(42,`docs-example`,4),Zf(43,` Wrap a panel's content in `),ce(44,`code`),Zf(45,`<ng-template ngsTabContent>`),vi(),Zf(46,` to create it when the tab is first shown. It is destroyed when the tab is left, unless `),ce(47,`code`),Zf(48,`keepAlive`),vi(),Zf(49,` is set. Content without the template is always in the DOM. `),vi(),ce(50,`docs-example`,5),Zf(51,` With `),ce(52,`code`),Zf(53,`activation="manual"`),vi(),Zf(54,` arrow keys only move focus; Enter or Space shows the panel. Use it when showing a panel is slow or has side effects. `),vi(),ce(55,`docs-example`,6)(56,`code`),Zf(57,`size`),vi(),Zf(58,` is `),ce(59,`code`),Zf(60,`sm`),vi(),Zf(61,`, `),ce(62,`code`),Zf(63,`md`),vi(),Zf(64,` or `),ce(65,`code`),Zf(66,`lg`),vi(),Zf(67,`. `),ce(68,`code`),Zf(69,`variant="tabs"`),vi(),Zf(70,` uses Bootstrap's bordered tabs instead of the sliding underline. `),vi(),ce(71,`docs-example`,7)(72,`code`),Zf(73,`orientation="vertical"`),vi(),Zf(74,` stacks the tabs beside the panel, with the indicator on the side. Arrow Up and Down move between tabs, and long labels wrap. `),vi(),ce(75,`docs-example`,8),Zf(76,` When the tabs do not fit, the list scrolls and keeps the active tab in view. `),ce(77,`code`),Zf(78,`overflow="more"`),vi(),Zf(79,` moves the tabs that do not fit into a "More" dropdown instead (it reuses `),ce(80,`code`),Zf(81,`ngsDropdown`),vi(),Zf(82,` and `),ce(83,`code`),Zf(84,`ngsMenu`),vi(),Zf(85,`); a hidden active tab highlights "More". Resize the window to see both. `),vi(),ce(86,`docs-example`,9),Zf(87,` A `),ce(88,`code`),Zf(89,`closable`),vi(),Zf(90,` tab shows a close icon, and Delete or Backspace closes the focused tab. The tab does not remove itself: drop it from your list in `),ce(91,`code`),Zf(92,`(closed)`),vi(),Zf(93,`. The active tab moves to a neighbour first, and focus follows. Give closable tabs a `),ce(94,`code`),Zf(95,`value`),vi(),Zf(96,`. `),vi(),ce(97,`docs-example`,10),Zf(98,` Manual activation and `),ce(99,`code`),Zf(100,`disabled`),vi(),Zf(101,` tabs make a simple step flow: later steps stay locked until reached. For a full progress indicator with states and errors, use the Stepper component. `),vi(),ce(102,`docs-example`,11),Zf(103,` When each tab is a route, use `),ce(104,`code`),Zf(105,`ngs-tab-links`),vi(),Zf(106,` with `),ce(107,`code`),Zf(108,`a[ngsTabLink]`),vi(),Zf(109,`, `),ce(110,`code`),Zf(111,`routerLinkActive="active"`),vi(),Zf(112,` and `),ce(113,`code`),Zf(114,`ariaCurrentWhenActive="page"`),vi(),Zf(115,`. It looks the same and slides the same underline, but it is navigation, not a tablist: see Accessibility. `),vi(),ce(116,`section`,12)(117,`h2`,13),Zf(118,`Accessibility`),vi(),ce(119,`p`)(120,`code`),Zf(121,`ngs-tabs`),vi(),Zf(122,` follows the WAI-ARIA tabs pattern. The list is a `),ce(123,`code`),Zf(124,`tablist`),vi(),Zf(125,` of `),ce(126,`code`),Zf(127,`tab`),vi(),Zf(128,` buttons, each with `),ce(129,`code`),Zf(130,`aria-selected`),vi(),Zf(131,` and `),ce(132,`code`),Zf(133,`aria-controls`),vi(),Zf(134,` pointing at its `),ce(135,`code`),Zf(136,`tabpanel`),vi(),Zf(137,`, which points back with `),ce(138,`code`),Zf(139,`aria-labelledby`),vi(),Zf(140,`. Only the active tab is in the Tab order (roving `),ce(141,`code`),Zf(142,`tabindex`),vi(),Zf(143,`); Tab then moves into the panel, which is itself focusable so content without controls stays reachable. Arrow Left and Right (reversed in right-to-left pages), Home and End move between tabs and wrap; disabled tabs are skipped. A vertical list uses Arrow Up and Down and sets `),ce(144,`code`),Zf(145,`aria-orientation`),vi(),Zf(146,`. A closable tab has `),ce(147,`code`),Zf(148,`aria-keyshortcuts="Delete"`),vi(),Zf(149,`; its close icon is for the mouse only and is hidden from assistive technology, because a button cannot nest inside a tab. `),vi(),ce(150,`p`),Zf(151,` Tabs activate as they take focus (`),ce(152,`code`),Zf(153,`activation="auto"`),vi(),Zf(154,`). Choose `),ce(155,`code`),Zf(156,`manual`),vi(),Zf(157,` when a panel is expensive to show: focus moves, and Enter or Space activates. Inactive panels are `),ce(158,`code`),Zf(159,`hidden`),vi(),Zf(160,` and leave the accessibility tree. With `),ce(161,`code`),Zf(162,`overflow="more"`),vi(),Zf(163,`, tabs that do not fit leave the tab list and appear as items of the "More" menu, a menu button with `),ce(164,`code`),Zf(165,`aria-haspopup`),vi(),Zf(166,` and `),ce(167,`code`),Zf(168,`aria-expanded`),vi(),Zf(169,`. `),vi(),ce(170,`p`)(171,`strong`),Zf(172,`Router links are navigation, not a tablist.`),vi(),Zf(173,` Taiga UI renders both with the same `),ce(174,`code`),Zf(175,`tui-tabs`),vi(),Zf(176,`; ng-bootstrap separates them the same way, since a tab's panel and a route's page are different things. A `),ce(177,`code`),Zf(178,`tablist`),vi(),Zf(179,` promises panels, arrow-key movement and one tab stop, none of which links provide: links navigate, every link is a tab stop and the active one has `),ce(180,`code`),Zf(181,`aria-current="page"`),vi(),Zf(182,`. So `),ce(183,`code`),Zf(184,`ngs-tab-links`),vi(),Zf(185,` is a `),ce(186,`code`),Zf(187,`nav`),vi(),Zf(188,` landmark of links. Give both a `),ce(189,`code`),Zf(190,`label`),vi(),Zf(191,`. The underline slides unless `),ce(192,`code`),Zf(193,`prefers-reduced-motion`),vi(),Zf(194,` or `),ce(195,`code`),Zf(196,`provideNgs({ animation: false })`),vi(),Zf(197,` turns it off. `),vi()()()),s&2&&(Ot(`tab`,n.tab()),Tt(15),Ot(`component`,n.basic)(`sources`,n.sources.basic),Tt(20),Ot(`component`,n.controlled)(`sources`,n.sources.controlled),Tt(7),Ot(`component`,n.lazy)(`sources`,n.sources.lazy),Tt(8),Ot(`component`,n.manual)(`sources`,n.sources.manual),Tt(5),Ot(`component`,n.variants)(`sources`,n.sources.variants),Tt(16),Ot(`component`,n.vertical)(`sources`,n.sources.vertical),Tt(4),Ot(`component`,n.overflow)(`sources`,n.sources.overflow),Tt(11),Ot(`component`,n.closable)(`sources`,n.sources.closable),Tt(11),Ot(`component`,n.wizard)(`sources`,n.sources.wizard),Tt(5),Ot(`component`,n.routerLinks)(`sources`,n.sources[`router-links`]))},dependencies:[ue$1,pe],encapsulation:2})};export{ta as TabsPage};