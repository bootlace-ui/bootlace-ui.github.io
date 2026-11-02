import{$n as mh,An as hg,At as W$1,Br as ui,Cr as rf,Ct as U0,F as Jo,Ft as XF,G as Lr,Gr as vf,Gt as Yn,Jt as Zf,L as KC,Ln as jn,Pt as XC,R as KF,Rn as jo,Rr as ue,Sn as fh,Un as kg,W as Ll,Wr as ve,Z as Na,an as cU,d as CU,ei as xh,et as Ot,in as bU,ir as nf,mt as So,on as ce,q as Mh,qr as vi,r as $f,ur as of,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import"./chunk-D1rBNx9a.js";import{_ as Uo,l as Ho,s as Go}from"./chunk-DycqepRM.js";import"./main-M33NX4WO.js";import{n as f,t as S}from"./chunk-D1C4nud_.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import"./chunk-yZF3fHTz.js";import"./chunk-D4gOm0ql.js";import{a as m,c as qe,i as ge,l as ye,n as Ce,o as me,r as be,s as pe$1,t as B}from"./chunk-C045pKrZ.js";import{t as f$1}from"./chunk-_QnoVoFv.js";import{t as B$1}from"./chunk-Dv7PHoGw.js";import{t as y}from"./chunk-C5VGU11Q.js";import{n as m$1}from"./chunk-BPk3HYY3.js";var $=class p{viewport=k(Go);el=k(So).nativeElement;label=Yn(``,{alias:`ngsTableViewport`});constructor(){let r=this.viewport.renderedRangeStream.subscribe(()=>queueMicrotask(()=>this.el.style.setProperty(`--ngs-table-offset`,`${this.viewport.getOffsetToRenderedContentStart()??0}px`)));k(jn).onDestroy(()=>r.unsubscribe())}static ɵfac=function(t){return new(t||p)};static ɵdir=Jo({type:p,selectors:[[`cdk-virtual-scroll-viewport`,`ngsTableViewport`,``]],hostAttrs:[`role`,`region`,`tabindex`,`0`,1,`ngs-table-viewport`],hostVars:1,hostBindings:function(t,e){t&2&&Lr(`aria-label`,e.label()||null)},inputs:{label:[1,`ngsTableViewport`,`label`]}})};var Ss=(p,r)=>r.name;function _s(p,r){if(p&1&&(ce(0,`tr`)(1,`td`),Zf(2),vi(),ce(3,`td`),Zf(4),vi(),ce(5,`td`),Zf(6),vi()()),p&2){let t=r.$implicit;Tt(2),fh(t.name),Tt(2),fh(t.moons),Tt(2),fh(t.distance)}}var O=class p{planets=[{name:`Mercury`,moons:0,distance:.39},{name:`Venus`,moons:0,distance:.72},{name:`Earth`,moons:1,distance:1},{name:`Mars`,moons:2,distance:1.52},{name:`Jupiter`,moons:95,distance:5.2}];static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-basic`]],decls:16,vars:0,consts:[[1,`row`],[1,`col-12`],[`ngsTable`,``,`hover`,``],[1,`visually-hidden`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`table`,2)(3,`caption`,3),Zf(4,` Planets of the solar system `),vi(),ce(5,`thead`)(6,`tr`)(7,`th`),Zf(8,`Planet`),vi(),ce(9,`th`),Zf(10,`Moons`),vi(),ce(11,`th`),Zf(12,`Distance (AU)`),vi()()(),ce(13,`tbody`),of(14,_s,7,3,`tr`,null,Ss),vi()()()()),t&2&&(Tt(14),rf(e.planets))},dependencies:[m],encapsulation:2})};var ks=(p,r)=>r.id;function Es(p,r){if(p&1&&(ce(0,`tr`)(1,`td`),Zf(2),vi(),ce(3,`td`),Zf(4),vi(),ce(5,`td`),Zf(6),vi()()),p&2){let t=r.$implicit;Tt(2),fh(t.name),Tt(2),fh(t.country),Tt(2),fh(t.population)}}function qs(p,r){p&1&&(ce(0,`tr`,9),Zf(1,` No city matches the filter. `),vi())}var U=class p{cities=[{id:1,name:`Lisbon`,country:`Portugal`,population:545},{id:2,name:`Porto`,country:`Portugal`,population:232},{id:3,name:`Madrid`,country:`Spain`,population:3305},{id:4,name:`Seville`,country:`Spain`,population:684},{id:5,name:`Lyon`,country:`France`,population:522},{id:6,name:`Paris`,country:`France`,population:2103},{id:7,name:`Nice`,country:`France`,population:342},{id:8,name:`Turin`,country:`Italy`,population:856},{id:9,name:`Rome`,country:`Italy`,population:2748}];query=W$1(``);sort=W$1(null);page=W$1(0);pageSize=4;data=qe({rows:()=>this.cities,sort:this.sort,filter:()=>{let r=this.query().trim().toLowerCase();return r?t=>`${t.name} ${t.country}`.toLowerCase().includes(r):null},page:this.page,pageSize:()=>this.pageSize});pages=jo(()=>Math.max(1,Math.ceil(this.data.filtered().length/this.pageSize)));search(r){this.query.set(r),this.page.set(0)}go(r){this.page.update(t=>Math.min(this.pages()-1,Math.max(0,t+r)))}static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-filter-page`]],decls:27,vars:9,consts:[[1,`row`,`g-3`],[1,`col-12`,`md:col-6`],[`ngsInput`,``,`type`,`search`,`aria-label`,`Filter cities`,`placeholder`,`Filter cities`,3,`input`,`value`],[1,`col-12`],[`ngsTable`,``,`hover`,``,3,`sortChange`,`sort`,`rowCount`],[1,`visually-hidden`],[`ngsTh`,`name`],[`ngsTh`,`country`],[`ngsTh`,`population`],[`ngsTableEmpty`,``,`colspan`,`3`],[1,`col-auto`],[`ngsButton`,``,`size`,`sm`,`variant`,`outline`,3,`click`,`disabled`],[1,`col-auto`,`align-self-center`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`input`,2),ui(`input`,function(o){return e.search(o.target.value)}),vi()(),ce(3,`div`,3)(4,`table`,4),xh(`sortChange`,function(o){return $f(e.sort,o)||(e.sort=o),o}),ce(5,`caption`,5),Zf(6,` Cities `),vi(),ce(7,`thead`)(8,`tr`)(9,`th`,6),Zf(10,`City`),vi(),ce(11,`th`,7),Zf(12,`Country`),vi(),ce(13,`th`,8),Zf(14,`Population (k)`),vi()()(),ce(15,`tbody`),of(16,Es,7,3,`tr`,null,ks,!1,qs,2,0,`tr`,9),vi()()(),ce(19,`div`,10)(20,`button`,11),ui(`click`,function(){return e.go(-1)}),Zf(21,` Previous `),vi()(),ce(22,`div`,10)(23,`button`,11),ui(`click`,function(){return e.go(1)}),Zf(24,` Next `),vi()(),ce(25,`div`,12),Zf(26),vi()()),t&2&&(Tt(2),Ot(`value`,e.query()),Tt(2),Mh(`sort`,e.sort),Ot(`rowCount`,e.data.filtered().length),Tt(12),rf(e.data.visible()),Tt(4),Ot(`disabled`,e.page()===0),Tt(3),Ot(`disabled`,e.page()>=e.pages()-1),Tt(3),mh(` Page `,e.page()+1,` of `,e.pages(),`, `,e.data.filtered().length,` rows `))},dependencies:[m,ge,pe$1,f$1,m$1],encapsulation:2})};var Ns=(p,r)=>r.id;function Cs(p,r){if(p&1&&(ce(0,`tr`)(1,`td`),Zf(2),vi(),ce(3,`td`),Zf(4),vi(),ce(5,`td`),Zf(6),vi(),ce(7,`td`),Zf(8),vi()()),p&2){let t=r.$implicit;Tt(2),fh(t.id),Tt(2),fh(t.sensor),Tt(2),fh(t.value),Tt(2),fh(t.zone)}}var W=class p{readings=Array.from({length:1e3},(r,t)=>({id:t+1,sensor:`Sensor ${t*7919%1e3}`,value:t*7919%1e3/10,zone:`Zone ${String.fromCharCode(65+t*31%26)}`}));sort=W$1(null);rows=jo(()=>Ce(this.readings,this.sort()));static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-large`]],decls:17,vars:2,consts:[[1,`row`],[1,`col-12`],[`label`,`1,000 sensor readings`,`maxHeight`,`24rem`],[`ngsTable`,``,`sticky`,``,`hover`,``,3,`sortChange`,`sort`,`rowCount`],[`ngsTh`,`id`],[`ngsTh`,`sensor`],[`ngsTh`,`value`],[`ngsTh`,`zone`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-table-container`,2)(3,`table`,3),xh(`sortChange`,function(o){return $f(e.sort,o)||(e.sort=o),o}),ce(4,`thead`)(5,`tr`)(6,`th`,4),Zf(7,`Id`),vi(),ce(8,`th`,5),Zf(9,`Sensor`),vi(),ce(10,`th`,6),Zf(11,`Value`),vi(),ce(12,`th`,7),Zf(13,`Zone`),vi()()(),ce(14,`tbody`),of(15,Cs,9,4,`tr`,null,Ns),vi()()()()()),t&2&&(Tt(3),Mh(`sort`,e.sort),Ot(`rowCount`,e.rows().length+1),Tt(12),rf(e.rows()))},dependencies:[m,ye,ge],encapsulation:2})};var zs=(p,r)=>r.id;function Is(p,r){if(p&1&&(ce(0,`ngs-radio`,3),Zf(1),vi()),p&2){let t=r.$implicit;Ot(`value`,t),Tt(),fh(t===`lg`?`Large`:t===`md`?`Medium`:`Small`)}}function Rs(p,r){if(p&1&&(ce(0,`span`,10),Zf(1),vi()),p&2){let t=vf(2).$implicit;Tt(),hg(`+`,t.more)}}function Ps(p,r){if(p&1&&(ce(0,`ngs-chip`),Zf(1),vi(),KC(2,Rs,2,1,`span`,10)),p&2){let t=vf().$implicit;Tt(),fh(t.label),Tt(),XC(t.more?2:-1)}}function Fs(p,r){if(p&1&&(ce(0,`tr`,8),ue(1,`td`,9),ce(2,`td`)(3,`div`),Zf(4),vi(),ce(5,`div`,10),Zf(6),vi()(),ce(7,`td`)(8,`div`,11),ue(9,`ngs-icon`,12),Zf(10),ce(11,`ngs-chip`),Zf(12,`Chip`),vi()(),ce(13,`div`,10),Zf(14,`More information`),vi()(),ce(15,`td`)(16,`div`,13)(17,`div`,14)(18,`span`,15),Zf(19),vi()(),ce(20,`div`,16)(21,`div`),Zf(22),vi(),ce(23,`div`,10),Zf(24),vi()()()(),ce(25,`td`),ue(26,`span`,17),Zf(27),vi(),ce(28,`td`),KC(29,Ps,3,2),vi(),ce(30,`td`)(31,`div`,13)(32,`div`,16)(33,`div`,18),ue(34,`div`,19),vi()(),ce(35,`div`,14),Zf(36),vi()()(),ce(37,`td`),ue(38,`button`,20)(39,`button`,20),vi()()),p&2){let t=r.$implicit,e=vf();Ot(`ngsRow`,t),Tt(),Ot(`label`,`Select `+t.title),Tt(3),fh(t.title),Tt(2),fh(t.subtitle),Tt(3),Ot(`icon`,t.icon),Tt(),hg(` `,t.tag,` `),Tt(8),kg(`theme-`+t.color),Tt(),fh(t.initials),Tt(3),fh(t.person),Tt(2),fh(t.email),Tt(2),kg(`theme-`+t.statusColor),Tt(),hg(` `,t.status,` `),Tt(2),XC(t.label?29:-1),Tt(4),Lr(`aria-label`,`Progress of `+t.title)(`aria-valuenow`,t.progress),Tt(),Na(`width`,t.progress,`%`),Tt(2),hg(``,t.progress,`ms`),Tt(2),Ot(`icon`,e.edit)(`label`,`Edit `+t.title),Tt(),Ot(`icon`,e.more)(`label`,`More actions for `+t.title)}}var H=class p{sizes=[`lg`,`md`,`sm`];size=W$1(`lg`);selected=W$1([]);edit=KF;more=CU;tasks=[{id:1,title:`Quarterly report`,subtitle:`Draft for review`,icon:XF,tag:`Doc`,person:`Maya Lindqvist`,initials:`ML`,email:`maya@example.com`,color:`accent`,status:`Success`,statusColor:`success`,label:`Finance`,more:6,progress:78},{id:2,title:`Onboarding flow`,subtitle:`Needs a second pass`,icon:cU,tag:`UX`,person:`Omar Haddad`,initials:`OH`,email:`omar@example.com`,color:`danger`,status:`Failure`,statusColor:`danger`,label:`Design`,more:1,progress:91},{id:3,title:`Release notes`,subtitle:`Not started`,icon:bU,tag:`Docs`,person:`Priya Nair`,initials:`PN`,email:`priya@example.com`,color:`success`,status:`Pending`,statusColor:`warning`,label:``,more:0,progress:32}];static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-rich`]],decls:30,vars:4,consts:[[1,`row`,`g-4`],[1,`col-12`],[`label`,`Size`,`orientation`,`horizontal`,3,`valueChange`,`value`],[3,`value`],[`label`,`Tasks`],[`ngsTable`,``,3,`selectedChange`,`size`,`selected`],[1,`visually-hidden`],[3,`ngsSelectAll`],[3,`ngsRow`],[`ngsRowSelect`,``,3,`label`],[1,`cell-sub`],[1,`cell-title`],[`size`,`1rem`,3,`icon`],[1,`row`,`g-2`,`align-items-center`,`flex-nowrap`],[1,`col-auto`],[1,`avatar`,`avatar-subtle`],[1,`col`],[`aria-hidden`,`true`,1,`dot`],[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,1,`progress`],[1,`progress-bar`],[`ngsIconButton`,``,`size`,`sm`,`variant`,`text`,3,`icon`,`label`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-radio-group`,2),xh(`valueChange`,function(o){return $f(e.size,o)||(e.size=o),o}),of(3,Is,2,2,`ngs-radio`,3,nf),vi()(),ce(5,`div`,1)(6,`ngs-table-container`,4)(7,`table`,5),xh(`selectedChange`,function(o){return $f(e.selected,o)||(e.selected=o),o}),ce(8,`caption`,6),Zf(9,` Tasks `),vi(),ce(10,`thead`)(11,`tr`),ue(12,`th`,7),ce(13,`th`),Zf(14,`Task`),vi(),ce(15,`th`),Zf(16,`Title`),vi(),ce(17,`th`),Zf(18,`Owner`),vi(),ce(19,`th`),Zf(20,`Status`),vi(),ce(21,`th`),Zf(22,`Items`),vi(),ce(23,`th`),Zf(24,`Progress`),vi(),ce(25,`th`),Zf(26,`Actions`),vi()()(),ce(27,`tbody`),of(28,Fs,40,24,`tr`,8,zs),vi()()()()()),t&2&&(Tt(2),Mh(`value`,e.size),Tt(),rf(e.sizes),Tt(4),Ot(`size`,e.size()??`md`),Mh(`selected`,e.selected),Tt(5),Ot(`ngsSelectAll`,e.tasks),Tt(16),rf(e.tasks))},dependencies:[m,ye,B,be,me,B$1,Ll,y,S,f],styles:[`[_nghost-%COMP%]   td[_ngcontent-%COMP%]{white-space:nowrap}.cell-sub[_ngcontent-%COMP%]{font-size:.8125rem;color:var(--%NS%fg-2)}.cell-title[_ngcontent-%COMP%]   ngs-icon[_ngcontent-%COMP%]{vertical-align:-.2em}.dot[_ngcontent-%COMP%]{display:inline-block;inline-size:.5rem;block-size:.5rem;margin-inline-end:.375rem;background-color:var(--%NS%theme-bg, currentcolor);border-radius:50%}.progress[_ngcontent-%COMP%]{min-inline-size:5rem}`]})};function Ms(p,r){if(p&1&&(ce(0,`th`),Zf(1),vi()),p&2){let t=r.$implicit;Tt(),fh(t)}}function Ds(p,r){if(p&1&&(ce(0,`td`),Zf(1),vi()),p&2){let t=r.$index,e=vf().$index,u=vf();Tt(),fh(u.value(e,t))}}function As(p,r){if(p&1&&(ce(0,`tr`)(1,`td`),Zf(2),vi(),of(3,Ds,2,1,`td`,null,nf),vi()),p&2){let t=r.$implicit,e=vf();Tt(2),fh(t),Tt(),rf(e.months)}}var G=class p{months=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];regions=Array.from({length:24},(r,t)=>`Region ${t+1}`);value(r,t){return(r+3)*(t+7)*37%900}static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-scroll`]],decls:13,vars:0,consts:[[1,`row`],[1,`col-12`],[`label`,`Sales by region and month`,`maxHeight`,`18rem`],[`ngsTable`,``,`sticky`,``,`striped`,``]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-table-container`,2)(3,`table`,3)(4,`thead`)(5,`tr`)(6,`th`),Zf(7,`Region`),vi(),of(8,Ms,2,1,`th`,null,nf),vi()(),ce(10,`tbody`),of(11,As,5,1,`tr`,null,nf),vi()()()()()),t&2&&(Tt(8),rf(e.months),Tt(3),rf(e.regions))},dependencies:[m,ye],encapsulation:2})};var Vs=(p,r)=>r.id;function Bs(p,r){if(p&1&&(ce(0,`tr`,5),ue(1,`td`,7),ce(2,`td`),Zf(3),vi(),ce(4,`td`),Zf(5),vi(),ce(6,`td`),Zf(7),vi()()),p&2){let t=r.$implicit;Ot(`ngsRow`,t),Tt(),Ot(`label`,`Select invoice `+t.id),Tt(2),hg(`#`,t.id),Tt(2),fh(t.customer),Tt(2),fh(t.amount)}}var J=class p{invoices=[{id:101,customer:`Northwind`,amount:1200},{id:102,customer:`Contoso`,amount:860},{id:103,customer:`Fabrikam`,amount:2450},{id:104,customer:`Tailwind`,amount:310}];selected=W$1([this.invoices[1]]);static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-selection`]],decls:23,vars:4,consts:[[1,`row`,`g-3`],[1,`col-12`],[`ngsTable`,``,3,`selectedChange`,`selected`],[1,`visually-hidden`],[3,`ngsSelectAll`],[3,`ngsRow`],[1,`mb-0`],[`ngsRowSelect`,``,3,`label`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`table`,2),xh(`selectedChange`,function(o){return $f(e.selected,o)||(e.selected=o),o}),ce(3,`caption`,3),Zf(4,` Invoices `),vi(),ce(5,`thead`)(6,`tr`),ue(7,`th`,4),ce(8,`th`),Zf(9,`Invoice`),vi(),ce(10,`th`),Zf(11,`Customer`),vi(),ce(12,`th`),Zf(13,`Amount`),vi()()(),ce(14,`tbody`),of(15,Bs,8,5,`tr`,5,Vs),vi()()(),ce(17,`div`,1)(18,`p`,6),Zf(19,` Selected: `),ce(20,`strong`),Zf(21),vi(),Zf(22),vi()()()),t&2&&(Tt(2),Mh(`selected`,e.selected),Tt(5),Ot(`ngsSelectAll`,e.invoices),Tt(8),rf(e.invoices),Tt(6),fh(e.selected().length),Tt(),hg(` of `,e.invoices.length,` `))},dependencies:[m,B,be,me],encapsulation:2})};var Ls=(p,r)=>r.id;function $s(p,r){if(p&1&&(ce(0,`tr`)(1,`td`),Zf(2),vi(),ce(3,`td`),Zf(4),vi(),ce(5,`td`),Zf(6),vi()()),p&2){let t=r.$implicit;Tt(2),fh(t.title),Tt(2),fh(t.priority),Tt(2),fh(t.points)}}var Z=class p{tickets=[{id:1,title:`Fix login redirect`,priority:`high`,points:3},{id:2,title:`Update the footer links`,priority:`low`,points:1},{id:3,title:`Export report to CSV`,priority:`medium`,points:5},{id:4,title:`Dark mode contrast`,priority:`high`,points:2},{id:5,title:`Add 2FA`,priority:`medium`,points:8}];order={low:0,medium:1,high:2};comparators={priority:(r,t)=>this.order[r.priority]-this.order[t.priority]};sort=W$1({key:`points`,direction:`desc`});rows=jo(()=>Ce(this.tickets,this.sort(),this.comparators));static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-sorting`]],decls:21,vars:2,consts:[[1,`row`,`g-3`],[1,`col-12`],[`ngsTable`,``,`bordered`,``,`hover`,``,3,`sortChange`,`sort`],[1,`visually-hidden`],[`ngsTh`,`title`],[`ngsTh`,`priority`],[`ngsTh`,`points`],[1,`mb-0`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`table`,2),xh(`sortChange`,function(o){return $f(e.sort,o)||(e.sort=o),o}),ce(3,`caption`,3),Zf(4,` Tickets `),vi(),ce(5,`thead`)(6,`tr`)(7,`th`,4),Zf(8,`Title`),vi(),ce(9,`th`,5),Zf(10,`Priority`),vi(),ce(11,`th`,6),Zf(12,`Points`),vi()()(),ce(13,`tbody`),of(14,$s,7,3,`tr`,null,Ls),vi()()(),ce(16,`div`,1)(17,`p`,7),Zf(18,` Sort: `),ce(19,`code`),Zf(20),vi()()()()),t&2&&(Tt(2),Mh(`sort`,e.sort),Tt(12),rf(e.rows()),Tt(6),fh(e.sort()?e.sort().key+` `+e.sort().direction:`none`))},dependencies:[m,ge],encapsulation:2})};function Os(p,r){if(p&1&&(ce(0,`tr`)(1,`td`),Zf(2),vi(),ce(3,`td`),Zf(4,`Active`),vi()()),p&2){let t=r.$implicit;Tt(2),fh(t)}}function Us(p,r){p&1&&(ce(0,`tr`,7),Zf(1,` No projects yet. Choose Load rows. `),vi())}function Ws(p,r){p&1&&(ce(0,`tr`,7),Zf(1,` \xA0 `),vi())}function Hs(p,r){if(p&1&&KC(0,Us,2,0,`tr`,7)(1,Ws,2,0,`tr`,7),p&2){let t=vf();XC(t.loading()?1:0)}}var K=class p{all=[`Alpha`,`Beta`,`Gamma`];rows=W$1([]);loading=W$1(!1);load(){this.loading.set(!0),this.rows.set([]),setTimeout(()=>{this.rows.set(this.all),this.loading.set(!1)},1200)}clear(){this.rows.set([])}static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-states`]],decls:20,vars:4,consts:[[1,`row`,`g-3`],[1,`col-auto`],[`ngsButton`,``,`size`,`sm`,3,`click`,`disabled`],[`ngsButton`,``,`size`,`sm`,`variant`,`outline`,3,`click`,`disabled`],[1,`col-12`],[`label`,`Projects`],[`ngsTable`,``,3,`loading`],[`ngsTableEmpty`,``,`colspan`,`2`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`button`,2),ui(`click`,function(){return e.load()}),Zf(3,`Load rows`),vi()(),ce(4,`div`,1)(5,`button`,3),ui(`click`,function(){return e.clear()}),Zf(6,` Clear `),vi()(),ce(7,`div`,4)(8,`ngs-table-container`,5)(9,`table`,6)(10,`thead`)(11,`tr`)(12,`th`),Zf(13,`Project`),vi(),ce(14,`th`),Zf(15,`Status`),vi()()(),ce(16,`tbody`),of(17,Os,5,1,`tr`,null,nf,!1,Hs,2,1),vi()()()()()),t&2&&(Tt(2),Ot(`disabled`,e.loading()),Tt(3),Ot(`disabled`,e.loading()),Tt(4),Ot(`loading`,e.loading()),Tt(8),rf(e.rows()))},dependencies:[m,ye,pe$1,f$1],encapsulation:2})};function Gs(p,r){if(p&1&&(ce(0,`tr`)(1,`td`),Zf(2),vi(),ce(3,`td`),Zf(4),vi(),ce(5,`td`),Zf(6),vi(),ce(7,`td`),Zf(8),vi()()),p&2){let t=r.$implicit,e=r.index;Lr(`aria-rowindex`,e+2),Tt(2),fh(t.id),Tt(2),fh(t.sensor),Tt(2),fh(t.value),Tt(2),fh(t.zone)}}var Q=class p{readings=Array.from({length:1e4},(r,t)=>({id:t+1,sensor:`Sensor ${t*7919%1e4}`,value:t*7919%1e4/10,zone:`Zone ${String.fromCharCode(65+t*31%26)}`}));sort=W$1(null);rows=jo(()=>Ce(this.readings,this.sort()));byId=(r,t)=>t.id;static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-virtual`]],decls:16,vars:4,consts:[[1,`row`],[1,`col-12`],[`ngsTableViewport`,`10,000 sensor readings`,`itemSize`,`44`],[`ngsTable`,``,`sticky`,``,`hover`,``,3,`sortChange`,`sort`,`rowCount`],[`ngsTh`,`id`],[`ngsTh`,`sensor`],[`ngsTh`,`value`],[`ngsTh`,`zone`],[4,`cdkVirtualFor`,`cdkVirtualForOf`,`cdkVirtualForTrackBy`]],template:function(t,e){t&1&&(ce(0,`div`,0)(1,`div`,1)(2,`cdk-virtual-scroll-viewport`,2)(3,`table`,3),xh(`sortChange`,function(o){return $f(e.sort,o)||(e.sort=o),o}),ce(4,`thead`)(5,`tr`)(6,`th`,4),Zf(7,`Id`),vi(),ce(8,`th`,5),Zf(9,`Sensor`),vi(),ce(10,`th`,6),Zf(11,`Value`),vi(),ce(12,`th`,7),Zf(13,`Zone`),vi()()(),ce(14,`tbody`),U0(15,Gs,9,5,`tr`,8),vi()()()()()),t&2&&(Tt(3),Mh(`sort`,e.sort),Ot(`rowCount`,e.rows().length+1),Tt(12),Ot(`cdkVirtualForOf`,e.rows())(`cdkVirtualForTrackBy`,e.byId))},dependencies:[Go,Ho,Uo,m,$,ge],encapsulation:2})};var Js=(p,r)=>r.name;function Zs(p,r){if(p&1&&(ce(0,`tr`)(1,`td`),Zf(2),vi(),ce(3,`td`),Zf(4),vi()()),p&2){let t=r.$implicit;Tt(2),fh(t.name),Tt(2),fh(t.role)}}function Ks(p,r){if(p&1&&(ce(0,`div`,1)(1,`table`,2)(2,`caption`,3),Zf(3),vi(),ce(4,`thead`)(5,`tr`)(6,`th`),Zf(7),vi(),ce(8,`th`),Zf(9,`Role`),vi()()(),ce(10,`tbody`),of(11,Zs,5,2,`tr`,null,Js),vi()()()),p&2){let t=r.$implicit,e=vf();Tt(),Ot(`size`,t)(`striped`,t===`md`)(`bordered`,t===`lg`),Tt(2),hg(` Size `,t,` `),Tt(4),hg(`Name (`,t,`)`),Tt(4),rf(e.rows)}}var X=class p{sizes=[`sm`,`md`,`lg`];rows=[{name:`Ada`,role:`Engineer`},{name:`Grace`,role:`Admiral`},{name:`Linus`,role:`Maintainer`}];static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-variants`]],decls:3,vars:0,consts:[[1,`row`,`g-4`],[1,`col-12`,`lg:col-4`],[`ngsTable`,``,3,`size`,`striped`,`bordered`],[1,`visually-hidden`]],template:function(t,e){t&1&&(ce(0,`div`,0),of(1,Ks,13,5,`div`,1,nf),vi()),t&2&&(Tt(),rf(e.sizes))},dependencies:[m],encapsulation:2})};var ws={basic:{html:{code:`<div class="row">
  <div class="col-12">
    <table ngsTable hover>
      <caption class="visually-hidden">
        Planets of the solar system
      </caption>
      <thead>
        <tr>
          <th>Planet</th>
          <th>Moons</th>
          <th>Distance (AU)</th>
        </tr>
      </thead>
      <tbody>
        @for (planet of planets; track planet.name) {
          <tr>
            <td>{{ planet.name }}</td>
            <td>{{ planet.moons }}</td>
            <td>{{ planet.distance }}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> <span class="hljs-attr">hover</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">caption</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;visually-hidden&quot;</span>&gt;</span>
        Planets of the solar system
      <span class="hljs-tag">&lt;/<span class="hljs-name">caption</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Planet<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Moons<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Distance (AU)<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
        @for (planet of planets; track planet.name) {
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ planet.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ planet.moons }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ planet.distance }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        }
      <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsTable } from '@bootlace/core/table';

@Component({
  selector: 'docs-table-basic',
  imports: [NgsTable],
  templateUrl: './index.html',
})
export class TableBasicExample {
  protected readonly planets = [
    { name: 'Mercury', moons: 0, distance: 0.39 },
    { name: 'Venus', moons: 0, distance: 0.72 },
    { name: 'Earth', moons: 1, distance: 1 },
    { name: 'Mars', moons: 2, distance: 1.52 },
    { name: 'Jupiter', moons: 95, distance: 5.2 },
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTable</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTable</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TableBasicExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> planets = [
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Mercury&#x27;</span>, <span class="hljs-attr">moons</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">distance</span>: <span class="hljs-number">0.39</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Venus&#x27;</span>, <span class="hljs-attr">moons</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">distance</span>: <span class="hljs-number">0.72</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Earth&#x27;</span>, <span class="hljs-attr">moons</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">distance</span>: <span class="hljs-number">1</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Mars&#x27;</span>, <span class="hljs-attr">moons</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">distance</span>: <span class="hljs-number">1.52</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Jupiter&#x27;</span>, <span class="hljs-attr">moons</span>: <span class="hljs-number">95</span>, <span class="hljs-attr">distance</span>: <span class="hljs-number">5.2</span> },
  ];
}`}},"filter-page":{html:{code:`<div class="row g-3">
  <div class="col-12 md:col-6">
    <input
      ngsInput
      type="search"
      aria-label="Filter cities"
      placeholder="Filter cities"
      [value]="query()"
      (input)="search($any($event.target).value)"
    />
  </div>
  <div class="col-12">
    <table ngsTable hover [(sort)]="sort" [rowCount]="data.filtered().length">
      <caption class="visually-hidden">
        Cities
      </caption>
      <thead>
        <tr>
          <th ngsTh="name">City</th>
          <th ngsTh="country">Country</th>
          <th ngsTh="population">Population (k)</th>
        </tr>
      </thead>
      <tbody>
        @for (city of data.visible(); track city.id) {
          <tr>
            <td>{{ city.name }}</td>
            <td>{{ city.country }}</td>
            <td>{{ city.population }}</td>
          </tr>
        } @empty {
          <tr ngsTableEmpty colspan="3">
            No city matches the filter.
          </tr>
        }
      </tbody>
    </table>
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" variant="outline" (click)="go(-1)" [disabled]="page() === 0">
      Previous
    </button>
  </div>
  <div class="col-auto">
    <button
      ngsButton
      size="sm"
      variant="outline"
      (click)="go(1)"
      [disabled]="page() >= pages() - 1"
    >
      Next
    </button>
  </div>
  <div class="col-auto align-self-center">
    Page {{ page() + 1 }} of {{ pages() }}, {{ data.filtered().length }} rows
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
      <span class="hljs-attr">ngsInput</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;search&quot;</span>
      <span class="hljs-attr">aria-label</span>=<span class="hljs-string">&quot;Filter cities&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Filter cities&quot;</span>
      [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;query()&quot;</span>
      (<span class="hljs-attr">input</span>)=<span class="hljs-string">&quot;search($any($event.target).value)&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> <span class="hljs-attr">hover</span> [(<span class="hljs-attr">sort</span>)]=<span class="hljs-string">&quot;sort&quot;</span> [<span class="hljs-attr">rowCount</span>]=<span class="hljs-string">&quot;data.filtered().length&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">caption</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;visually-hidden&quot;</span>&gt;</span>
        Cities
      <span class="hljs-tag">&lt;/<span class="hljs-name">caption</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;name&quot;</span>&gt;</span>City<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;country&quot;</span>&gt;</span>Country<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;population&quot;</span>&gt;</span>Population (k)<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
        @for (city of data.visible(); track city.id) {
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ city.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ city.country }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ city.population }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        } @empty {
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">ngsTableEmpty</span> <span class="hljs-attr">colspan</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
            No city matches the filter.
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        }
      <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;go(-1)&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;page() === 0&quot;</span>&gt;</span>
      Previous
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
      <span class="hljs-attr">ngsButton</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
      <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span>
      (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;go(1)&quot;</span>
      [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;page() &gt;= pages() - 1&quot;</span>
    &gt;</span>
      Next
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto align-self-center&quot;</span>&gt;</span>
    Page {{ page() + 1 }} of {{ pages() }}, {{ data.filtered().length }} rows
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, computed, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsInput } from '@bootlace/core/input';
import { NgsTable, NgsTableEmpty, NgsTableSort, NgsTh, ngsTableData } from '@bootlace/core/table';

interface City {
  id: number;
  name: string;
  country: string;
  population: number;
}

@Component({
  selector: 'docs-table-filter-page',
  imports: [NgsTable, NgsTh, NgsTableEmpty, NgsButton, NgsInput],
  templateUrl: './index.html',
})
export class TableFilterPageExample {
  private readonly cities: readonly City[] = [
    { id: 1, name: 'Lisbon', country: 'Portugal', population: 545 },
    { id: 2, name: 'Porto', country: 'Portugal', population: 232 },
    { id: 3, name: 'Madrid', country: 'Spain', population: 3305 },
    { id: 4, name: 'Seville', country: 'Spain', population: 684 },
    { id: 5, name: 'Lyon', country: 'France', population: 522 },
    { id: 6, name: 'Paris', country: 'France', population: 2103 },
    { id: 7, name: 'Nice', country: 'France', population: 342 },
    { id: 8, name: 'Turin', country: 'Italy', population: 856 },
    { id: 9, name: 'Rome', country: 'Italy', population: 2748 },
  ];

  protected readonly query = signal('');
  protected readonly sort = signal<NgsTableSort | null>(null);
  protected readonly page = signal(0);
  protected readonly pageSize = 4;

  /** Filtered, sorted, and one page: the same signals a paginator would bind to. */
  protected readonly data = ngsTableData({
    rows: () => this.cities,
    sort: this.sort,
    filter: () => {
      const q = this.query().trim().toLowerCase();
      return q ? (city) => \`\${city.name} \${city.country}\`.toLowerCase().includes(q) : null;
    },
    page: this.page,
    pageSize: () => this.pageSize,
  });

  protected readonly pages = computed(() =>
    Math.max(1, Math.ceil(this.data.filtered().length / this.pageSize)),
  );

  protected search(value: string): void {
    this.query.set(value);
    this.page.set(0);
  }

  protected go(delta: number): void {
    this.page.update((p) => Math.min(this.pages() - 1, Math.max(0, p + delta)));
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, computed, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/input&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableEmpty</span>, <span class="hljs-title class_">NgsTableSort</span>, <span class="hljs-title class_">NgsTh</span>, ngsTableData } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">City</span> {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">country</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">population</span>: <span class="hljs-built_in">number</span>;
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-filter-page&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTh</span>, <span class="hljs-title class_">NgsTableEmpty</span>, <span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsInput</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TableFilterPageExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">cities</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">City</span>[] = [
    { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Lisbon&#x27;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&#x27;Portugal&#x27;</span>, <span class="hljs-attr">population</span>: <span class="hljs-number">545</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Porto&#x27;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&#x27;Portugal&#x27;</span>, <span class="hljs-attr">population</span>: <span class="hljs-number">232</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Madrid&#x27;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&#x27;Spain&#x27;</span>, <span class="hljs-attr">population</span>: <span class="hljs-number">3305</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Seville&#x27;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&#x27;Spain&#x27;</span>, <span class="hljs-attr">population</span>: <span class="hljs-number">684</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Lyon&#x27;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&#x27;France&#x27;</span>, <span class="hljs-attr">population</span>: <span class="hljs-number">522</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Paris&#x27;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&#x27;France&#x27;</span>, <span class="hljs-attr">population</span>: <span class="hljs-number">2103</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Nice&#x27;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&#x27;France&#x27;</span>, <span class="hljs-attr">population</span>: <span class="hljs-number">342</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Turin&#x27;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&#x27;Italy&#x27;</span>, <span class="hljs-attr">population</span>: <span class="hljs-number">856</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Rome&#x27;</span>, <span class="hljs-attr">country</span>: <span class="hljs-string">&#x27;Italy&#x27;</span>, <span class="hljs-attr">population</span>: <span class="hljs-number">2748</span> },
  ];

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> query = <span class="hljs-title function_">signal</span>(<span class="hljs-string">&#x27;&#x27;</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sort = signal&lt;<span class="hljs-title class_">NgsTableSort</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> page = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> pageSize = <span class="hljs-number">4</span>;

  <span class="hljs-comment">/** Filtered, sorted, and one page: the same signals a paginator would bind to. */</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> data = <span class="hljs-title function_">ngsTableData</span>({
    <span class="hljs-attr">rows</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">cities</span>,
    <span class="hljs-attr">sort</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">sort</span>,
    <span class="hljs-attr">filter</span>: <span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> q = <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">query</span>().<span class="hljs-title function_">trim</span>().<span class="hljs-title function_">toLowerCase</span>();
      <span class="hljs-keyword">return</span> q ? <span class="hljs-function">(<span class="hljs-params">city</span>) =&gt;</span> <span class="hljs-string">\`<span class="hljs-subst">\${city.name}</span> <span class="hljs-subst">\${city.country}</span>\`</span>.<span class="hljs-title function_">toLowerCase</span>().<span class="hljs-title function_">includes</span>(q) : <span class="hljs-literal">null</span>;
    },
    <span class="hljs-attr">page</span>: <span class="hljs-variable language_">this</span>.<span class="hljs-property">page</span>,
    <span class="hljs-attr">pageSize</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">pageSize</span>,
  });

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> pages = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span>
    <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(<span class="hljs-number">1</span>, <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">ceil</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">data</span>.<span class="hljs-title function_">filtered</span>().<span class="hljs-property">length</span> / <span class="hljs-variable language_">this</span>.<span class="hljs-property">pageSize</span>)),
  );

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">search</span>(<span class="hljs-attr">value</span>: <span class="hljs-built_in">string</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">query</span>.<span class="hljs-title function_">set</span>(value);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">page</span>.<span class="hljs-title function_">set</span>(<span class="hljs-number">0</span>);
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">go</span>(<span class="hljs-attr">delta</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">page</span>.<span class="hljs-title function_">update</span>(<span class="hljs-function">(<span class="hljs-params">p</span>) =&gt;</span> <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">min</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-title function_">pages</span>() - <span class="hljs-number">1</span>, <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">max</span>(<span class="hljs-number">0</span>, p + delta)));
  }
}`}},large:{html:{code:`<div class="row">
  <div class="col-12">
    <ngs-table-container label="1,000 sensor readings" maxHeight="24rem">
      <table ngsTable sticky hover [(sort)]="sort" [rowCount]="rows().length + 1">
        <thead>
          <tr>
            <th ngsTh="id">Id</th>
            <th ngsTh="sensor">Sensor</th>
            <th ngsTh="value">Value</th>
            <th ngsTh="zone">Zone</th>
          </tr>
        </thead>
        <tbody>
          @for (reading of rows(); track reading.id) {
            <tr>
              <td>{{ reading.id }}</td>
              <td>{{ reading.sensor }}</td>
              <td>{{ reading.value }}</td>
              <td>{{ reading.zone }}</td>
            </tr>
          }
        </tbody>
      </table>
    </ngs-table-container>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-table-container</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1,000 sensor readings&quot;</span> <span class="hljs-attr">maxHeight</span>=<span class="hljs-string">&quot;24rem&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> <span class="hljs-attr">sticky</span> <span class="hljs-attr">hover</span> [(<span class="hljs-attr">sort</span>)]=<span class="hljs-string">&quot;sort&quot;</span> [<span class="hljs-attr">rowCount</span>]=<span class="hljs-string">&quot;rows().length + 1&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;id&quot;</span>&gt;</span>Id<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;sensor&quot;</span>&gt;</span>Sensor<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>Value<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;zone&quot;</span>&gt;</span>Zone<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
          @for (reading of rows(); track reading.id) {
            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ reading.id }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ reading.sensor }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ reading.value }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ reading.zone }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
          }
        <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-table-container</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, computed, signal } from '@angular/core';
import {
  NgsTable,
  NgsTableContainer,
  NgsTableSort,
  NgsTh,
  ngsSortRows,
} from '@bootlace/core/table';

interface Reading {
  id: number;
  sensor: string;
  value: number;
  zone: string;
}

@Component({
  selector: 'docs-table-large',
  imports: [NgsTable, NgsTableContainer, NgsTh],
  templateUrl: './index.html',
})
export class TableLargeExample {
  private readonly readings: readonly Reading[] = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    sensor: \`Sensor \${(i * 7919) % 1000}\`,
    value: ((i * 7919) % 1000) / 10,
    zone: \`Zone \${String.fromCharCode(65 + ((i * 31) % 26))}\`,
  }));

  protected readonly sort = signal<NgsTableSort | null>(null);
  protected readonly rows = computed(() => ngsSortRows(this.readings, this.sort()));
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, computed, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsTable</span>,
  <span class="hljs-title class_">NgsTableContainer</span>,
  <span class="hljs-title class_">NgsTableSort</span>,
  <span class="hljs-title class_">NgsTh</span>,
  ngsSortRows,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Reading</span> {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">sensor</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">value</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">zone</span>: <span class="hljs-built_in">string</span>;
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-large&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableContainer</span>, <span class="hljs-title class_">NgsTh</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TableLargeExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">readings</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">Reading</span>[] = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">1000</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> ({
    <span class="hljs-attr">id</span>: i + <span class="hljs-number">1</span>,
    <span class="hljs-attr">sensor</span>: <span class="hljs-string">\`Sensor <span class="hljs-subst">\${(i * <span class="hljs-number">7919</span>) % <span class="hljs-number">1000</span>}</span>\`</span>,
    <span class="hljs-attr">value</span>: ((i * <span class="hljs-number">7919</span>) % <span class="hljs-number">1000</span>) / <span class="hljs-number">10</span>,
    <span class="hljs-attr">zone</span>: <span class="hljs-string">\`Zone <span class="hljs-subst">\${<span class="hljs-built_in">String</span>.fromCharCode(<span class="hljs-number">65</span> + ((i * <span class="hljs-number">31</span>) % <span class="hljs-number">26</span>))}</span>\`</span>,
  }));

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sort = signal&lt;<span class="hljs-title class_">NgsTableSort</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> rows = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">ngsSortRows</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">readings</span>, <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">sort</span>()));
}`}},rich:{html:{code:`<div class="row g-4">
  <div class="col-12">
    <ngs-radio-group label="Size" orientation="horizontal" [(value)]="size">
      @for (option of sizes; track option) {
        <ngs-radio [value]="option">{{
          option === 'lg' ? 'Large' : option === 'md' ? 'Medium' : 'Small'
        }}</ngs-radio>
      }
    </ngs-radio-group>
  </div>
  <div class="col-12">
    <ngs-table-container label="Tasks">
      <table ngsTable [size]="size() ?? 'md'" [(selected)]="selected">
        <caption class="visually-hidden">
          Tasks
        </caption>
        <thead>
          <tr>
            <th [ngsSelectAll]="tasks"></th>
            <th>Task</th>
            <th>Title</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Items</th>
            <th>Progress</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (task of tasks; track task.id) {
            <tr [ngsRow]="task">
              <td ngsRowSelect [label]="'Select ' + task.title"></td>
              <td>
                <div>{{ task.title }}</div>
                <div class="cell-sub">{{ task.subtitle }}</div>
              </td>
              <td>
                <div class="cell-title">
                  <ngs-icon [icon]="task.icon" size="1rem" />
                  {{ task.tag }} <ngs-chip>Chip</ngs-chip>
                </div>
                <div class="cell-sub">More information</div>
              </td>
              <td>
                <div class="row g-2 align-items-center flex-nowrap">
                  <div class="col-auto">
                    <span class="avatar avatar-subtle" [class]="'theme-' + task.color">{{
                      task.initials
                    }}</span>
                  </div>
                  <div class="col">
                    <div>{{ task.person }}</div>
                    <div class="cell-sub">{{ task.email }}</div>
                  </div>
                </div>
              </td>
              <td>
                <span class="dot" [class]="'theme-' + task.statusColor" aria-hidden="true"></span>
                {{ task.status }}
              </td>
              <td>
                @if (task.label) {
                  <ngs-chip>{{ task.label }}</ngs-chip>
                  @if (task.more) {
                    <span class="cell-sub">+{{ task.more }}</span>
                  }
                }
              </td>
              <td>
                <div class="row g-2 align-items-center flex-nowrap">
                  <div class="col">
                    <div
                      class="progress"
                      role="progressbar"
                      [attr.aria-label]="'Progress of ' + task.title"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      [attr.aria-valuenow]="task.progress"
                    >
                      <div class="progress-bar" [style.width.%]="task.progress"></div>
                    </div>
                  </div>
                  <div class="col-auto">{{ task.progress }}ms</div>
                </div>
              </td>
              <td>
                <button
                  ngsIconButton
                  size="sm"
                  variant="text"
                  [icon]="edit"
                  [label]="'Edit ' + task.title"
                ></button>
                <button
                  ngsIconButton
                  size="sm"
                  variant="text"
                  [icon]="more"
                  [label]="'More actions for ' + task.title"
                ></button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </ngs-table-container>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-4&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio-group</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Size&quot;</span> <span class="hljs-attr">orientation</span>=<span class="hljs-string">&quot;horizontal&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;size&quot;</span>&gt;</span>
      @for (option of sizes; track option) {
        <span class="hljs-tag">&lt;<span class="hljs-name">ngs-radio</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;option&quot;</span>&gt;</span>{{
          option === &#x27;lg&#x27; ? &#x27;Large&#x27; : option === &#x27;md&#x27; ? &#x27;Medium&#x27; : &#x27;Small&#x27;
        }}<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio</span>&gt;</span>
      }
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-table-container</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Tasks&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> [<span class="hljs-attr">size</span>]=<span class="hljs-string">&quot;size() ?? &#x27;md&#x27;&quot;</span> [(<span class="hljs-attr">selected</span>)]=<span class="hljs-string">&quot;selected&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">caption</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;visually-hidden&quot;</span>&gt;</span>
          Tasks
        <span class="hljs-tag">&lt;/<span class="hljs-name">caption</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">ngsSelectAll</span>]=<span class="hljs-string">&quot;tasks&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Task<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Owner<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Status<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Items<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Progress<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Actions<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
          @for (task of tasks; track task.id) {
            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> [<span class="hljs-attr">ngsRow</span>]=<span class="hljs-string">&quot;task&quot;</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">ngsRowSelect</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;Select &#x27; + task.title&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ task.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-sub&quot;</span>&gt;</span>{{ task.subtitle }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-title&quot;</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;task.icon&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;1rem&quot;</span> /&gt;</span>
                  {{ task.tag }} <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span>&gt;</span>Chip<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-sub&quot;</span>&gt;</span>More information<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center flex-nowrap&quot;</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;avatar avatar-subtle&quot;</span> [<span class="hljs-attr">class</span>]=<span class="hljs-string">&quot;&#x27;theme-&#x27; + task.color&quot;</span>&gt;</span>{{
                      task.initials
                    }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col&quot;</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{{ task.person }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-sub&quot;</span>&gt;</span>{{ task.email }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;dot&quot;</span> [<span class="hljs-attr">class</span>]=<span class="hljs-string">&quot;&#x27;theme-&#x27; + task.statusColor&quot;</span> <span class="hljs-attr">aria-hidden</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                {{ task.status }}
              <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                @if (task.label) {
                  <span class="hljs-tag">&lt;<span class="hljs-name">ngs-chip</span>&gt;</span>{{ task.label }}<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-chip</span>&gt;</span>
                  @if (task.more) {
                    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cell-sub&quot;</span>&gt;</span>+{{ task.more }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
                  }
                }
              <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-2 align-items-center flex-nowrap&quot;</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col&quot;</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>
                      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress&quot;</span>
                      <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;progressbar&quot;</span>
                      [<span class="hljs-attr">attr.aria-label</span>]=<span class="hljs-string">&quot;&#x27;Progress of &#x27; + task.title&quot;</span>
                      <span class="hljs-attr">aria-valuemin</span>=<span class="hljs-string">&quot;0&quot;</span>
                      <span class="hljs-attr">aria-valuemax</span>=<span class="hljs-string">&quot;100&quot;</span>
                      [<span class="hljs-attr">attr.aria-valuenow</span>]=<span class="hljs-string">&quot;task.progress&quot;</span>
                    &gt;</span>
                      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;progress-bar&quot;</span> [<span class="hljs-attr">style.width.</span>%]=<span class="hljs-string">&quot;task.progress&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>{{ task.progress }}ms<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
                  <span class="hljs-attr">ngsIconButton</span>
                  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
                  <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;text&quot;</span>
                  [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;edit&quot;</span>
                  [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;Edit &#x27; + task.title&quot;</span>
                &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">button</span>
                  <span class="hljs-attr">ngsIconButton</span>
                  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span>
                  <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;text&quot;</span>
                  [<span class="hljs-attr">icon</span>]=<span class="hljs-string">&quot;more&quot;</span>
                  [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;More actions for &#x27; + task.title&quot;</span>
                &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
          }
        <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-table-container</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsIconButton } from '@bootlace/core/button';
import { NgsChip } from '@bootlace/core/chips';
import { NgsIcon } from '@bootlace/core/icon';
import { NgsRadio, NgsRadioGroup } from '@bootlace/core/radio';
import {
  NgsRow,
  NgsRowSelect,
  NgsSelectAll,
  NgsTable,
  NgsTableContainer,
  NgsTableSize,
} from '@bootlace/core/table';
import {
  NgsIconDefinition,
  ngsIconEdit,
  ngsIconFileText,
  ngsIconHeart,
  ngsIconMore,
  ngsIconStar,
} from '@bootlace/icons';

interface Task {
  id: number;
  title: string;
  subtitle: string;
  icon: NgsIconDefinition;
  tag: string;
  person: string;
  initials: string;
  email: string;
  color: 'accent' | 'danger' | 'success';
  status: 'Success' | 'Failure' | 'Pending';
  statusColor: 'success' | 'danger' | 'warning';
  label: string;
  more: number;
  progress: number;
}

@Component({
  selector: 'docs-table-rich',
  imports: [
    NgsTable,
    NgsTableContainer,
    NgsRow,
    NgsRowSelect,
    NgsSelectAll,
    NgsChip,
    NgsIcon,
    NgsIconButton,
    NgsRadio,
    NgsRadioGroup,
  ],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class TableRichExample {
  protected readonly sizes: readonly NgsTableSize[] = ['lg', 'md', 'sm'];
  protected readonly size = signal<NgsTableSize | null>('lg');
  protected readonly selected = signal<readonly unknown[]>([]);
  protected readonly edit = ngsIconEdit;
  protected readonly more = ngsIconMore;

  protected readonly tasks: readonly Task[] = [
    {
      id: 1,
      title: 'Quarterly report',
      subtitle: 'Draft for review',
      icon: ngsIconFileText,
      tag: 'Doc',
      person: 'Maya Lindqvist',
      initials: 'ML',
      email: 'maya@example.com',
      color: 'accent',
      status: 'Success',
      statusColor: 'success',
      label: 'Finance',
      more: 6,
      progress: 78,
    },
    {
      id: 2,
      title: 'Onboarding flow',
      subtitle: 'Needs a second pass',
      icon: ngsIconHeart,
      tag: 'UX',
      person: 'Omar Haddad',
      initials: 'OH',
      email: 'omar@example.com',
      color: 'danger',
      status: 'Failure',
      statusColor: 'danger',
      label: 'Design',
      more: 1,
      progress: 91,
    },
    {
      id: 3,
      title: 'Release notes',
      subtitle: 'Not started',
      icon: ngsIconStar,
      tag: 'Docs',
      person: 'Priya Nair',
      initials: 'PN',
      email: 'priya@example.com',
      color: 'success',
      status: 'Pending',
      statusColor: 'warning',
      label: '',
      more: 0,
      progress: 32,
    },
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIconButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsChip</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/chips&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsIcon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsRadio</span>, <span class="hljs-title class_">NgsRadioGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/radio&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsRow</span>,
  <span class="hljs-title class_">NgsRowSelect</span>,
  <span class="hljs-title class_">NgsSelectAll</span>,
  <span class="hljs-title class_">NgsTable</span>,
  <span class="hljs-title class_">NgsTableContainer</span>,
  <span class="hljs-title class_">NgsTableSize</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsIconDefinition</span>,
  ngsIconEdit,
  ngsIconFileText,
  ngsIconHeart,
  ngsIconMore,
  ngsIconStar,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Task</span> {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">title</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">subtitle</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">icon</span>: <span class="hljs-title class_">NgsIconDefinition</span>;
  <span class="hljs-attr">tag</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">person</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">initials</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">email</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;accent&#x27;</span> | <span class="hljs-string">&#x27;danger&#x27;</span> | <span class="hljs-string">&#x27;success&#x27;</span>;
  <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;Success&#x27;</span> | <span class="hljs-string">&#x27;Failure&#x27;</span> | <span class="hljs-string">&#x27;Pending&#x27;</span>;
  <span class="hljs-attr">statusColor</span>: <span class="hljs-string">&#x27;success&#x27;</span> | <span class="hljs-string">&#x27;danger&#x27;</span> | <span class="hljs-string">&#x27;warning&#x27;</span>;
  <span class="hljs-attr">label</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">more</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">progress</span>: <span class="hljs-built_in">number</span>;
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-rich&#x27;</span>,
  <span class="hljs-attr">imports</span>: [
    <span class="hljs-title class_">NgsTable</span>,
    <span class="hljs-title class_">NgsTableContainer</span>,
    <span class="hljs-title class_">NgsRow</span>,
    <span class="hljs-title class_">NgsRowSelect</span>,
    <span class="hljs-title class_">NgsSelectAll</span>,
    <span class="hljs-title class_">NgsChip</span>,
    <span class="hljs-title class_">NgsIcon</span>,
    <span class="hljs-title class_">NgsIconButton</span>,
    <span class="hljs-title class_">NgsRadio</span>,
    <span class="hljs-title class_">NgsRadioGroup</span>,
  ],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./index.scss&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TableRichExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">sizes</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">NgsTableSize</span>[] = [<span class="hljs-string">&#x27;lg&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;sm&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> size = signal&lt;<span class="hljs-title class_">NgsTableSize</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;lg&#x27;</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> selected = signal&lt;<span class="hljs-keyword">readonly</span> <span class="hljs-built_in">unknown</span>[]&gt;([]);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> edit = ngsIconEdit;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> more = ngsIconMore;

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">tasks</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">Task</span>[] = [
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Quarterly report&#x27;</span>,
      <span class="hljs-attr">subtitle</span>: <span class="hljs-string">&#x27;Draft for review&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconFileText,
      <span class="hljs-attr">tag</span>: <span class="hljs-string">&#x27;Doc&#x27;</span>,
      <span class="hljs-attr">person</span>: <span class="hljs-string">&#x27;Maya Lindqvist&#x27;</span>,
      <span class="hljs-attr">initials</span>: <span class="hljs-string">&#x27;ML&#x27;</span>,
      <span class="hljs-attr">email</span>: <span class="hljs-string">&#x27;maya@example.com&#x27;</span>,
      <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;accent&#x27;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;Success&#x27;</span>,
      <span class="hljs-attr">statusColor</span>: <span class="hljs-string">&#x27;success&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Finance&#x27;</span>,
      <span class="hljs-attr">more</span>: <span class="hljs-number">6</span>,
      <span class="hljs-attr">progress</span>: <span class="hljs-number">78</span>,
    },
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Onboarding flow&#x27;</span>,
      <span class="hljs-attr">subtitle</span>: <span class="hljs-string">&#x27;Needs a second pass&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconHeart,
      <span class="hljs-attr">tag</span>: <span class="hljs-string">&#x27;UX&#x27;</span>,
      <span class="hljs-attr">person</span>: <span class="hljs-string">&#x27;Omar Haddad&#x27;</span>,
      <span class="hljs-attr">initials</span>: <span class="hljs-string">&#x27;OH&#x27;</span>,
      <span class="hljs-attr">email</span>: <span class="hljs-string">&#x27;omar@example.com&#x27;</span>,
      <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;danger&#x27;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;Failure&#x27;</span>,
      <span class="hljs-attr">statusColor</span>: <span class="hljs-string">&#x27;danger&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Design&#x27;</span>,
      <span class="hljs-attr">more</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">progress</span>: <span class="hljs-number">91</span>,
    },
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Release notes&#x27;</span>,
      <span class="hljs-attr">subtitle</span>: <span class="hljs-string">&#x27;Not started&#x27;</span>,
      <span class="hljs-attr">icon</span>: ngsIconStar,
      <span class="hljs-attr">tag</span>: <span class="hljs-string">&#x27;Docs&#x27;</span>,
      <span class="hljs-attr">person</span>: <span class="hljs-string">&#x27;Priya Nair&#x27;</span>,
      <span class="hljs-attr">initials</span>: <span class="hljs-string">&#x27;PN&#x27;</span>,
      <span class="hljs-attr">email</span>: <span class="hljs-string">&#x27;priya@example.com&#x27;</span>,
      <span class="hljs-attr">color</span>: <span class="hljs-string">&#x27;success&#x27;</span>,
      <span class="hljs-attr">status</span>: <span class="hljs-string">&#x27;Pending&#x27;</span>,
      <span class="hljs-attr">statusColor</span>: <span class="hljs-string">&#x27;warning&#x27;</span>,
      <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;&#x27;</span>,
      <span class="hljs-attr">more</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">progress</span>: <span class="hljs-number">32</span>,
    },
  ];
}`},scss:{code:`// Two-line cells and the status dot are example content, not part of the table.
:host td {
  white-space: nowrap;
}

.cell-sub {
  font-size: 0.8125rem;
  color: var(--fg-2);
}

.cell-title ngs-icon {
  vertical-align: -0.2em;
}

.dot {
  display: inline-block;
  inline-size: 0.5rem;
  block-size: 0.5rem;
  margin-inline-end: 0.375rem;
  background-color: var(--theme-bg, currentcolor);
  border-radius: 50%;
}

.progress {
  min-inline-size: 5rem;
}`,html:`<span class="hljs-comment">// Two-line cells and the status dot are example content, not part of the table.</span>
<span class="hljs-selector-pseudo">:host</span> <span class="hljs-selector-tag">td</span> {
  <span class="hljs-attribute">white-space</span>: nowrap;
}

<span class="hljs-selector-class">.cell-sub</span> {
  <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0.8125rem</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--fg-<span class="hljs-number">2</span>);
}

<span class="hljs-selector-class">.cell-title</span> ngs-<span class="hljs-attribute">icon</span> {
  <span class="hljs-attribute">vertical-align</span>: -<span class="hljs-number">0.2em</span>;
}

<span class="hljs-selector-class">.dot</span> {
  <span class="hljs-attribute">display</span>: inline-block;
  <span class="hljs-attribute">inline-size</span>: <span class="hljs-number">0.5rem</span>;
  <span class="hljs-attribute">block-size</span>: <span class="hljs-number">0.5rem</span>;
  <span class="hljs-attribute">margin-inline-end</span>: <span class="hljs-number">0.375rem</span>;
  <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--theme-bg, currentcolor);
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;
}

<span class="hljs-selector-class">.progress</span> {
  <span class="hljs-attribute">min-inline-size</span>: <span class="hljs-number">5rem</span>;
}`}},scroll:{html:{code:`<div class="row">
  <div class="col-12">
    <ngs-table-container label="Sales by region and month" maxHeight="18rem">
      <table ngsTable sticky striped>
        <thead>
          <tr>
            <th>Region</th>
            @for (month of months; track month) {
              <th>{{ month }}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for (region of regions; track region; let r = $index) {
            <tr>
              <td>{{ region }}</td>
              @for (month of months; track month; let m = $index) {
                <td>{{ value(r, m) }}</td>
              }
            </tr>
          }
        </tbody>
      </table>
    </ngs-table-container>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-table-container</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Sales by region and month&quot;</span> <span class="hljs-attr">maxHeight</span>=<span class="hljs-string">&quot;18rem&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> <span class="hljs-attr">sticky</span> <span class="hljs-attr">striped</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Region<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            @for (month of months; track month) {
              <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>{{ month }}<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            }
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
          @for (region of regions; track region; let r = $index) {
            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ region }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              @for (month of months; track month; let m = $index) {
                <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ value(r, m) }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              }
            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
          }
        <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-table-container</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsTable, NgsTableContainer } from '@bootlace/core/table';

@Component({
  selector: 'docs-table-scroll',
  imports: [NgsTable, NgsTableContainer],
  templateUrl: './index.html',
})
export class TableScrollExample {
  protected readonly months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  protected readonly regions = Array.from({ length: 24 }, (_, i) => \`Region \${i + 1}\`);

  protected value(region: number, month: number): number {
    return ((region + 3) * (month + 7) * 37) % 900;
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableContainer</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-scroll&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableContainer</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TableScrollExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> months = [
    <span class="hljs-string">&#x27;Jan&#x27;</span>,
    <span class="hljs-string">&#x27;Feb&#x27;</span>,
    <span class="hljs-string">&#x27;Mar&#x27;</span>,
    <span class="hljs-string">&#x27;Apr&#x27;</span>,
    <span class="hljs-string">&#x27;May&#x27;</span>,
    <span class="hljs-string">&#x27;Jun&#x27;</span>,
    <span class="hljs-string">&#x27;Jul&#x27;</span>,
    <span class="hljs-string">&#x27;Aug&#x27;</span>,
    <span class="hljs-string">&#x27;Sep&#x27;</span>,
    <span class="hljs-string">&#x27;Oct&#x27;</span>,
    <span class="hljs-string">&#x27;Nov&#x27;</span>,
    <span class="hljs-string">&#x27;Dec&#x27;</span>,
  ];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> regions = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">24</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> <span class="hljs-string">\`Region <span class="hljs-subst">\${i + <span class="hljs-number">1</span>}</span>\`</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">value</span>(<span class="hljs-attr">region</span>: <span class="hljs-built_in">number</span>, <span class="hljs-attr">month</span>: <span class="hljs-built_in">number</span>): <span class="hljs-built_in">number</span> {
    <span class="hljs-keyword">return</span> ((region + <span class="hljs-number">3</span>) * (month + <span class="hljs-number">7</span>) * <span class="hljs-number">37</span>) % <span class="hljs-number">900</span>;
  }
}`}},selection:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <table ngsTable [(selected)]="selected">
      <caption class="visually-hidden">
        Invoices
      </caption>
      <thead>
        <tr>
          <th [ngsSelectAll]="invoices"></th>
          <th>Invoice</th>
          <th>Customer</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        @for (invoice of invoices; track invoice.id) {
          <tr [ngsRow]="invoice">
            <td ngsRowSelect [label]="'Select invoice ' + invoice.id"></td>
            <td>#{{ invoice.id }}</td>
            <td>{{ invoice.customer }}</td>
            <td>{{ invoice.amount }}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>
  <div class="col-12">
    <p class="mb-0">
      Selected: <strong>{{ selected().length }}</strong> of {{ invoices.length }}
    </p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> [(<span class="hljs-attr">selected</span>)]=<span class="hljs-string">&quot;selected&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">caption</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;visually-hidden&quot;</span>&gt;</span>
        Invoices
      <span class="hljs-tag">&lt;/<span class="hljs-name">caption</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> [<span class="hljs-attr">ngsSelectAll</span>]=<span class="hljs-string">&quot;invoices&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Invoice<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Customer<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Amount<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
        @for (invoice of invoices; track invoice.id) {
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> [<span class="hljs-attr">ngsRow</span>]=<span class="hljs-string">&quot;invoice&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">ngsRowSelect</span> [<span class="hljs-attr">label</span>]=<span class="hljs-string">&quot;&#x27;Select invoice &#x27; + invoice.id&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>#{{ invoice.id }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ invoice.customer }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ invoice.amount }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        }
      <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>
      Selected: <span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>{{ selected().length }}<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span> of {{ invoices.length }}
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsRow, NgsRowSelect, NgsSelectAll, NgsTable } from '@bootlace/core/table';

interface Invoice {
  id: number;
  customer: string;
  amount: number;
}

@Component({
  selector: 'docs-table-selection',
  imports: [NgsTable, NgsRow, NgsRowSelect, NgsSelectAll],
  templateUrl: './index.html',
})
export class TableSelectionExample {
  protected readonly invoices: readonly Invoice[] = [
    { id: 101, customer: 'Northwind', amount: 1200 },
    { id: 102, customer: 'Contoso', amount: 860 },
    { id: 103, customer: 'Fabrikam', amount: 2450 },
    { id: 104, customer: 'Tailwind', amount: 310 },
  ];
  protected readonly selected = signal<readonly unknown[]>([this.invoices[1]]);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsRow</span>, <span class="hljs-title class_">NgsRowSelect</span>, <span class="hljs-title class_">NgsSelectAll</span>, <span class="hljs-title class_">NgsTable</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Invoice</span> {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">customer</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">amount</span>: <span class="hljs-built_in">number</span>;
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-selection&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsRow</span>, <span class="hljs-title class_">NgsRowSelect</span>, <span class="hljs-title class_">NgsSelectAll</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TableSelectionExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">invoices</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">Invoice</span>[] = [
    { <span class="hljs-attr">id</span>: <span class="hljs-number">101</span>, <span class="hljs-attr">customer</span>: <span class="hljs-string">&#x27;Northwind&#x27;</span>, <span class="hljs-attr">amount</span>: <span class="hljs-number">1200</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">102</span>, <span class="hljs-attr">customer</span>: <span class="hljs-string">&#x27;Contoso&#x27;</span>, <span class="hljs-attr">amount</span>: <span class="hljs-number">860</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">103</span>, <span class="hljs-attr">customer</span>: <span class="hljs-string">&#x27;Fabrikam&#x27;</span>, <span class="hljs-attr">amount</span>: <span class="hljs-number">2450</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">104</span>, <span class="hljs-attr">customer</span>: <span class="hljs-string">&#x27;Tailwind&#x27;</span>, <span class="hljs-attr">amount</span>: <span class="hljs-number">310</span> },
  ];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> selected = signal&lt;<span class="hljs-keyword">readonly</span> <span class="hljs-built_in">unknown</span>[]&gt;([<span class="hljs-variable language_">this</span>.<span class="hljs-property">invoices</span>[<span class="hljs-number">1</span>]]);
}`}},sorting:{html:{code:`<div class="row g-3">
  <div class="col-12">
    <table ngsTable bordered hover [(sort)]="sort">
      <caption class="visually-hidden">
        Tickets
      </caption>
      <thead>
        <tr>
          <th ngsTh="title">Title</th>
          <th ngsTh="priority">Priority</th>
          <th ngsTh="points">Points</th>
        </tr>
      </thead>
      <tbody>
        @for (ticket of rows(); track ticket.id) {
          <tr>
            <td>{{ ticket.title }}</td>
            <td>{{ ticket.priority }}</td>
            <td>{{ ticket.points }}</td>
          </tr>
        }
      </tbody>
    </table>
  </div>
  <div class="col-12">
    <p class="mb-0">
      Sort: <code>{{ sort() ? sort()!.key + ' ' + sort()!.direction : 'none' }}</code>
    </p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> <span class="hljs-attr">bordered</span> <span class="hljs-attr">hover</span> [(<span class="hljs-attr">sort</span>)]=<span class="hljs-string">&quot;sort&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">caption</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;visually-hidden&quot;</span>&gt;</span>
        Tickets
      <span class="hljs-tag">&lt;/<span class="hljs-name">caption</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;priority&quot;</span>&gt;</span>Priority<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;points&quot;</span>&gt;</span>Points<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
        @for (ticket of rows(); track ticket.id) {
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ ticket.title }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ ticket.priority }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ ticket.points }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        }
      <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>
      Sort: <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ sort() ? sort()!.key + &#x27; &#x27; + sort()!.direction : &#x27;none&#x27; }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, computed, signal } from '@angular/core';
import {
  NgsTable,
  NgsTableComparator,
  NgsTableSort,
  NgsTh,
  ngsSortRows,
} from '@bootlace/core/table';

interface Ticket {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
  points: number;
}

@Component({
  selector: 'docs-table-sorting',
  imports: [NgsTable, NgsTh],
  templateUrl: './index.html',
})
export class TableSortingExample {
  private readonly tickets: readonly Ticket[] = [
    { id: 1, title: 'Fix login redirect', priority: 'high', points: 3 },
    { id: 2, title: 'Update the footer links', priority: 'low', points: 1 },
    { id: 3, title: 'Export report to CSV', priority: 'medium', points: 5 },
    { id: 4, title: 'Dark mode contrast', priority: 'high', points: 2 },
    { id: 5, title: 'Add 2FA', priority: 'medium', points: 8 },
  ];

  /** Priority sorts by importance, not alphabetically. */
  private readonly order = { low: 0, medium: 1, high: 2 };
  private readonly comparators: Record<string, NgsTableComparator<Ticket>> = {
    priority: (a, b) => this.order[a.priority] - this.order[b.priority],
  };

  protected readonly sort = signal<NgsTableSort | null>({ key: 'points', direction: 'desc' });
  protected readonly rows = computed(() =>
    ngsSortRows(this.tickets, this.sort(), this.comparators),
  );
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, computed, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">NgsTable</span>,
  <span class="hljs-title class_">NgsTableComparator</span>,
  <span class="hljs-title class_">NgsTableSort</span>,
  <span class="hljs-title class_">NgsTh</span>,
  ngsSortRows,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Ticket</span> {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">title</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">priority</span>: <span class="hljs-string">&#x27;low&#x27;</span> | <span class="hljs-string">&#x27;medium&#x27;</span> | <span class="hljs-string">&#x27;high&#x27;</span>;
  <span class="hljs-attr">points</span>: <span class="hljs-built_in">number</span>;
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-sorting&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTh</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TableSortingExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">tickets</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">Ticket</span>[] = [
    { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Fix login redirect&#x27;</span>, <span class="hljs-attr">priority</span>: <span class="hljs-string">&#x27;high&#x27;</span>, <span class="hljs-attr">points</span>: <span class="hljs-number">3</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Update the footer links&#x27;</span>, <span class="hljs-attr">priority</span>: <span class="hljs-string">&#x27;low&#x27;</span>, <span class="hljs-attr">points</span>: <span class="hljs-number">1</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Export report to CSV&#x27;</span>, <span class="hljs-attr">priority</span>: <span class="hljs-string">&#x27;medium&#x27;</span>, <span class="hljs-attr">points</span>: <span class="hljs-number">5</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Dark mode contrast&#x27;</span>, <span class="hljs-attr">priority</span>: <span class="hljs-string">&#x27;high&#x27;</span>, <span class="hljs-attr">points</span>: <span class="hljs-number">2</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Add 2FA&#x27;</span>, <span class="hljs-attr">priority</span>: <span class="hljs-string">&#x27;medium&#x27;</span>, <span class="hljs-attr">points</span>: <span class="hljs-number">8</span> },
  ];

  <span class="hljs-comment">/** Priority sorts by importance, not alphabetically. */</span>
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> order = { <span class="hljs-attr">low</span>: <span class="hljs-number">0</span>, <span class="hljs-attr">medium</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">high</span>: <span class="hljs-number">2</span> };
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">comparators</span>: <span class="hljs-title class_">Record</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-title class_">NgsTableComparator</span>&lt;<span class="hljs-title class_">Ticket</span>&gt;&gt; = {
    <span class="hljs-attr">priority</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> <span class="hljs-variable language_">this</span>.<span class="hljs-property">order</span>[a.<span class="hljs-property">priority</span>] - <span class="hljs-variable language_">this</span>.<span class="hljs-property">order</span>[b.<span class="hljs-property">priority</span>],
  };

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sort = signal&lt;<span class="hljs-title class_">NgsTableSort</span> | <span class="hljs-literal">null</span>&gt;({ <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;points&#x27;</span>, <span class="hljs-attr">direction</span>: <span class="hljs-string">&#x27;desc&#x27;</span> });
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> rows = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span>
    <span class="hljs-title function_">ngsSortRows</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">tickets</span>, <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">sort</span>(), <span class="hljs-variable language_">this</span>.<span class="hljs-property">comparators</span>),
  );
}`}},states:{html:{code:`<div class="row g-3">
  <div class="col-auto">
    <button ngsButton size="sm" (click)="load()" [disabled]="loading()">Load rows</button>
  </div>
  <div class="col-auto">
    <button ngsButton size="sm" variant="outline" (click)="clear()" [disabled]="loading()">
      Clear
    </button>
  </div>
  <div class="col-12">
    <ngs-table-container label="Projects">
      <table ngsTable [loading]="loading()">
        <thead>
          <tr>
            <th>Project</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          @for (row of rows(); track row) {
            <tr>
              <td>{{ row }}</td>
              <td>Active</td>
            </tr>
          } @empty {
            @if (!loading()) {
              <tr ngsTableEmpty colspan="2">
                No projects yet. Choose Load rows.
              </tr>
            } @else {
              <tr ngsTableEmpty colspan="2">
                &nbsp;
              </tr>
            }
          }
        </tbody>
      </table>
    </ngs-table-container>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;load()&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;loading()&quot;</span>&gt;</span>Load rows<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-auto&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">variant</span>=<span class="hljs-string">&quot;outline&quot;</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">&quot;clear()&quot;</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">&quot;loading()&quot;</span>&gt;</span>
      Clear
    <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-table-container</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Projects&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> [<span class="hljs-attr">loading</span>]=<span class="hljs-string">&quot;loading()&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Project<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Status<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
          @for (row of rows(); track row) {
            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ row }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Active<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
          } @empty {
            @if (!loading()) {
              <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">ngsTableEmpty</span> <span class="hljs-attr">colspan</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
                No projects yet. Choose Load rows.
              <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
            } @else {
              <span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">ngsTableEmpty</span> <span class="hljs-attr">colspan</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
                <span class="hljs-symbol">&amp;nbsp;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
            }
          }
        <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-table-container</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsButton } from '@bootlace/core/button';
import { NgsTable, NgsTableContainer, NgsTableEmpty } from '@bootlace/core/table';

@Component({
  selector: 'docs-table-states',
  imports: [NgsTable, NgsTableContainer, NgsTableEmpty, NgsButton],
  templateUrl: './index.html',
})
export class TableStatesExample {
  private readonly all = ['Alpha', 'Beta', 'Gamma'];

  protected readonly rows = signal<readonly string[]>([]);
  protected readonly loading = signal(false);

  protected load(): void {
    this.loading.set(true);
    this.rows.set([]);
    setTimeout(() => {
      this.rows.set(this.all);
      this.loading.set(false);
    }, 1200);
  }

  protected clear(): void {
    this.rows.set([]);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableContainer</span>, <span class="hljs-title class_">NgsTableEmpty</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-states&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableContainer</span>, <span class="hljs-title class_">NgsTableEmpty</span>, <span class="hljs-title class_">NgsButton</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TableStatesExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> all = [<span class="hljs-string">&#x27;Alpha&#x27;</span>, <span class="hljs-string">&#x27;Beta&#x27;</span>, <span class="hljs-string">&#x27;Gamma&#x27;</span>];

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> rows = signal&lt;<span class="hljs-keyword">readonly</span> <span class="hljs-built_in">string</span>[]&gt;([]);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> loading = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">load</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">loading</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">rows</span>.<span class="hljs-title function_">set</span>([]);
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">rows</span>.<span class="hljs-title function_">set</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">all</span>);
      <span class="hljs-variable language_">this</span>.<span class="hljs-property">loading</span>.<span class="hljs-title function_">set</span>(<span class="hljs-literal">false</span>);
    }, <span class="hljs-number">1200</span>);
  }

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">clear</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">rows</span>.<span class="hljs-title function_">set</span>([]);
  }
}`}},variants:{html:{code:`<div class="row g-4">
  @for (size of sizes; track size) {
    <div class="col-12 lg:col-4">
      <table ngsTable [size]="size" [striped]="size === 'md'" [bordered]="size === 'lg'">
        <caption class="visually-hidden">
          Size
          {{
            size
          }}
        </caption>
        <thead>
          <tr>
            <th>Name ({{ size }})</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          @for (row of rows; track row.name) {
            <tr>
              <td>{{ row.name }}</td>
              <td>{{ row.role }}</td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  }
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-4&quot;</span>&gt;</span>
  @for (size of sizes; track size) {
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-4&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> [<span class="hljs-attr">size</span>]=<span class="hljs-string">&quot;size&quot;</span> [<span class="hljs-attr">striped</span>]=<span class="hljs-string">&quot;size === &#x27;md&#x27;&quot;</span> [<span class="hljs-attr">bordered</span>]=<span class="hljs-string">&quot;size === &#x27;lg&#x27;&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">caption</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;visually-hidden&quot;</span>&gt;</span>
          Size
          {{
            size
          }}
        <span class="hljs-tag">&lt;/<span class="hljs-name">caption</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Name ({{ size }})<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Role<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
          @for (row of rows; track row.name) {
            <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ row.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ row.role }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
          }
        <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  }
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsTable, NgsTableSize } from '@bootlace/core/table';

@Component({
  selector: 'docs-table-variants',
  imports: [NgsTable],
  templateUrl: './index.html',
})
export class TableVariantsExample {
  protected readonly sizes: readonly NgsTableSize[] = ['sm', 'md', 'lg'];
  protected readonly rows = [
    { name: 'Ada', role: 'Engineer' },
    { name: 'Grace', role: 'Admiral' },
    { name: 'Linus', role: 'Maintainer' },
  ];
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableSize</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-variants&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsTable</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TableVariantsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">sizes</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">NgsTableSize</span>[] = [<span class="hljs-string">&#x27;sm&#x27;</span>, <span class="hljs-string">&#x27;md&#x27;</span>, <span class="hljs-string">&#x27;lg&#x27;</span>];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> rows = [
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Ada&#x27;</span>, <span class="hljs-attr">role</span>: <span class="hljs-string">&#x27;Engineer&#x27;</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Grace&#x27;</span>, <span class="hljs-attr">role</span>: <span class="hljs-string">&#x27;Admiral&#x27;</span> },
    { <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Linus&#x27;</span>, <span class="hljs-attr">role</span>: <span class="hljs-string">&#x27;Maintainer&#x27;</span> },
  ];
}`}},virtual:{html:{code:`<div class="row">
  <div class="col-12">
    <cdk-virtual-scroll-viewport ngsTableViewport="10,000 sensor readings" itemSize="44">
      <table ngsTable sticky hover [(sort)]="sort" [rowCount]="rows().length + 1">
        <thead>
          <tr>
            <th ngsTh="id">Id</th>
            <th ngsTh="sensor">Sensor</th>
            <th ngsTh="value">Value</th>
            <th ngsTh="zone">Zone</th>
          </tr>
        </thead>
        <tbody>
          <tr
            *cdkVirtualFor="let reading of rows(); trackBy: byId; let i = index"
            [attr.aria-rowindex]="i + 2"
          >
            <td>{{ reading.id }}</td>
            <td>{{ reading.sensor }}</td>
            <td>{{ reading.value }}</td>
            <td>{{ reading.zone }}</td>
          </tr>
        </tbody>
      </table>
    </cdk-virtual-scroll-viewport>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">cdk-virtual-scroll-viewport</span> <span class="hljs-attr">ngsTableViewport</span>=<span class="hljs-string">&quot;10,000 sensor readings&quot;</span> <span class="hljs-attr">itemSize</span>=<span class="hljs-string">&quot;44&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">ngsTable</span> <span class="hljs-attr">sticky</span> <span class="hljs-attr">hover</span> [(<span class="hljs-attr">sort</span>)]=<span class="hljs-string">&quot;sort&quot;</span> [<span class="hljs-attr">rowCount</span>]=<span class="hljs-string">&quot;rows().length + 1&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;id&quot;</span>&gt;</span>Id<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;sensor&quot;</span>&gt;</span>Sensor<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;value&quot;</span>&gt;</span>Value<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">ngsTh</span>=<span class="hljs-string">&quot;zone&quot;</span>&gt;</span>Zone<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">tr</span>
            *<span class="hljs-attr">cdkVirtualFor</span>=<span class="hljs-string">&quot;let reading of rows(); trackBy: byId; let i = index&quot;</span>
            [<span class="hljs-attr">attr.aria-rowindex</span>]=<span class="hljs-string">&quot;i + 2&quot;</span>
          &gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ reading.id }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ reading.sensor }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ reading.value }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>{{ reading.zone }}<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">cdk-virtual-scroll-viewport</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { Component, computed, signal } from '@angular/core';
import { NgsTable, NgsTableSort, NgsTableViewport, NgsTh, ngsSortRows } from '@bootlace/core/table';

interface Reading {
  id: number;
  sensor: string;
  value: number;
  zone: string;
}

@Component({
  selector: 'docs-table-virtual',
  imports: [
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    NgsTable,
    NgsTableViewport,
    NgsTh,
  ],
  templateUrl: './index.html',
})
export class TableVirtualExample {
  private readonly readings: readonly Reading[] = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    sensor: \`Sensor \${(i * 7919) % 10000}\`,
    value: ((i * 7919) % 10000) / 10,
    zone: \`Zone \${String.fromCharCode(65 + ((i * 31) % 26))}\`,
  }));

  protected readonly sort = signal<NgsTableSort | null>(null);
  protected readonly rows = computed(() => ngsSortRows(this.readings, this.sort()));

  protected readonly byId = (_: number, reading: Reading) => reading.id;
}`,html:`<span class="hljs-keyword">import</span> {
  <span class="hljs-title class_">CdkFixedSizeVirtualScroll</span>,
  <span class="hljs-title class_">CdkVirtualForOf</span>,
  <span class="hljs-title class_">CdkVirtualScrollViewport</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/cdk/scrolling&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, computed, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsTable</span>, <span class="hljs-title class_">NgsTableSort</span>, <span class="hljs-title class_">NgsTableViewport</span>, <span class="hljs-title class_">NgsTh</span>, ngsSortRows } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/table&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Reading</span> {
  <span class="hljs-attr">id</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">sensor</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">value</span>: <span class="hljs-built_in">number</span>;
  <span class="hljs-attr">zone</span>: <span class="hljs-built_in">string</span>;
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-table-virtual&#x27;</span>,
  <span class="hljs-attr">imports</span>: [
    <span class="hljs-title class_">CdkVirtualScrollViewport</span>,
    <span class="hljs-title class_">CdkFixedSizeVirtualScroll</span>,
    <span class="hljs-title class_">CdkVirtualForOf</span>,
    <span class="hljs-title class_">NgsTable</span>,
    <span class="hljs-title class_">NgsTableViewport</span>,
    <span class="hljs-title class_">NgsTh</span>,
  ],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">TableVirtualExample</span> {
  <span class="hljs-keyword">private</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">readings</span>: <span class="hljs-keyword">readonly</span> <span class="hljs-title class_">Reading</span>[] = <span class="hljs-title class_">Array</span>.<span class="hljs-title function_">from</span>({ <span class="hljs-attr">length</span>: <span class="hljs-number">10000</span> }, <span class="hljs-function">(<span class="hljs-params">_, i</span>) =&gt;</span> ({
    <span class="hljs-attr">id</span>: i + <span class="hljs-number">1</span>,
    <span class="hljs-attr">sensor</span>: <span class="hljs-string">\`Sensor <span class="hljs-subst">\${(i * <span class="hljs-number">7919</span>) % <span class="hljs-number">10000</span>}</span>\`</span>,
    <span class="hljs-attr">value</span>: ((i * <span class="hljs-number">7919</span>) % <span class="hljs-number">10000</span>) / <span class="hljs-number">10</span>,
    <span class="hljs-attr">zone</span>: <span class="hljs-string">\`Zone <span class="hljs-subst">\${<span class="hljs-built_in">String</span>.fromCharCode(<span class="hljs-number">65</span> + ((i * <span class="hljs-number">31</span>) % <span class="hljs-number">26</span>))}</span>\`</span>,
  }));

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sort = signal&lt;<span class="hljs-title class_">NgsTableSort</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> rows = <span class="hljs-title function_">computed</span>(<span class="hljs-function">() =&gt;</span> <span class="hljs-title function_">ngsSortRows</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">readings</span>, <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">sort</span>()));

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> byId = <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">_</span>: <span class="hljs-built_in">number</span>, <span class="hljs-attr">reading</span>: <span class="hljs-title class_">Reading</span></span>) =&gt;</span> reading.<span class="hljs-property">id</span>;
}`}}};var Ts=class p{tab=Yn(`examples`);sources=ws;basic=O;rich=H;variants=X;sorting=Z;selection=J;scroll=G;states=K;filterPage=U;large=W;virtual=Q;static ɵfac=function(t){return new(t||p)};static ɵcmp=ve({type:p,selectors:[[`docs-table-page`]],inputs:{tab:[1,`tab`]},decls:224,vars:21,consts:[[`heading`,`Table`,`package`,`@bootlace/core/table`,`path`,`/components/table/table`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`rich`,`heading`,`Rich cells`,3,`component`,`sources`],[`id`,`variants`,`heading`,`Sizes and variants`,3,`component`,`sources`],[`id`,`sorting`,`heading`,`Sorting`,3,`component`,`sources`],[`id`,`selection`,`heading`,`Row selection`,3,`component`,`sources`],[`id`,`scroll`,`heading`,`Scroll and sticky header`,3,`component`,`sources`],[`id`,`states`,`heading`,`Empty and loading`,3,`component`,`sources`],[`id`,`filter-page`,`heading`,`Filter and page`,3,`component`,`sources`],[`id`,`large`,`heading`,`1,000 rows`,3,`component`,`sources`],[`id`,`virtual`,`heading`,`Virtual scrolling`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(t,e){t&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A native `),ce(3,`code`),Zf(4,`<table>`),vi(),Zf(5,` on Bootstrap 6 `),ce(6,`code`),Zf(7,`.table`),vi(),Zf(8,` with the density of Taiga UI's table. `),ce(9,`code`),Zf(10,`ngsTable`),vi(),Zf(11,` adds striped, hover, bordered and size options, `),ce(12,`code`),Zf(13,`ngsTh`),vi(),Zf(14,` adds sortable headers with `),ce(15,`code`),Zf(16,`aria-sort`),vi(),Zf(17,`, and a few small pieces add row selection, empty and loading states and a scroll region with a sticky header. You render the rows with `),ce(18,`code`),Zf(19,`@for`),vi(),Zf(20,`, so the table stays fast: it handles 1,000 rows without virtual scrolling, and a CDK viewport covers much longer ones. `),vi(),ce(21,`docs-example`,2),Zf(22,` Put `),ce(23,`code`),Zf(24,`ngsTable`),vi(),Zf(25,` on a `),ce(26,`code`),Zf(27,`<table>`),vi(),Zf(28,` and use ordinary rows and cells. The directive only adds Bootstrap classes, so every native semantic stays. Name the table with a `),ce(29,`code`),Zf(30,`<caption>`),vi(),Zf(31,`. `),vi(),ce(32,`docs-example`,3),Zf(33,` Cells hold anything: two-line text, chips, Bootstrap `),ce(34,`code`),Zf(35,`.avatar`),vi(),Zf(36,`s, a status dot, a `),ce(37,`code`),Zf(38,`.progress`),vi(),Zf(39,` bar and icon buttons. The table supplies the size, the row separators, the header and the selection column; the rest is ordinary markup. `),vi(),ce(40,`docs-example`,4)(41,`code`),Zf(42,`size`),vi(),Zf(43,` is `),ce(44,`code`),Zf(45,`sm`),vi(),Zf(46,`, `),ce(47,`code`),Zf(48,`md`),vi(),Zf(49,` (default) or `),ce(50,`code`),Zf(51,`lg`),vi(),Zf(52,`. `),ce(53,`code`),Zf(54,`striped`),vi(),Zf(55,`, `),ce(56,`code`),Zf(57,`hover`),vi(),Zf(58,` and `),ce(59,`code`),Zf(60,`bordered`),vi(),Zf(61,` (vertical lines too) are boolean inputs. `),vi(),ce(62,`docs-example`,5),Zf(63,` Give a header a key, `),ce(64,`code`),Zf(65,`ngsTh="age"`),vi(),Zf(66,`, to make it sortable. The sort is one model, `),ce(67,`code`),Zf(68,`[(sort)]`),vi(),Zf(69,`, holding `),ce(70,`code`),Zf(71,`{ key, direction }`),vi(),Zf(72,` or `),ce(73,`code`),Zf(74,`null`),vi(),Zf(75,`. Clicking cycles ascending, descending, none. The table does not reorder your rows: sort them with `),ce(76,`code`),Zf(77,`ngsSortRows`),vi(),Zf(78,`, which takes an optional comparator per column (here, priority sorts by importance). For a server, send the sort to the API instead. `),vi(),ce(79,`docs-example`,6)(80,`code`),Zf(81,`[(selected)]`),vi(),Zf(82,` holds the selected rows. Mark each row with `),ce(83,`code`),Zf(84,`[ngsRow]="row"`),vi(),Zf(85,`, add a `),ce(86,`code`),Zf(87,`ngsRowSelect`),vi(),Zf(88,` cell for its checkbox and a `),ce(89,`code`),Zf(90,`[ngsSelectAll]="rows"`),vi(),Zf(91,` header cell. Selected rows get `),ce(92,`code`),Zf(93,`aria-selected="true"`),vi(),Zf(94,` and `),ce(95,`code`),Zf(96,`.table-active`),vi(),Zf(97,`. `),vi(),ce(98,`docs-example`,7),Zf(99,` Wrap the table in `),ce(100,`code`),Zf(101,`ngs-table-container`),vi(),Zf(102,` to scroll it in both directions. Give it a `),ce(103,`code`),Zf(104,`label`),vi(),Zf(105,`: once the table overflows, the region is focusable, so the keyboard can scroll it. `),ce(106,`code`),Zf(107,`maxHeight`),vi(),Zf(108,` with `),ce(109,`code`),Zf(110,`sticky`),vi(),Zf(111,` keeps the header in view. `),vi(),ce(112,`docs-example`,8)(113,`code`),Zf(114,`[loading]`),vi(),Zf(115,` marks the table `),ce(116,`code`),Zf(117,`aria-busy`),vi(),Zf(118,` and shows a spinner over the container. A `),ce(119,`code`),Zf(120,`tr ngsTableEmpty`),vi(),Zf(121,` row spans the columns when there is nothing to show; its content is yours, or the translated default. `),vi(),ce(122,`docs-example`,9)(123,`code`),Zf(124,`ngsTableData`),vi(),Zf(125,` derives `),ce(126,`code`),Zf(127,`filtered`),vi(),Zf(128,`, `),ce(129,`code`),Zf(130,`sorted`),vi(),Zf(131,` and `),ce(132,`code`),Zf(133,`visible`),vi(),Zf(134,` (one page) signals from your rows. Table Pagination binds to the same signals. `),ce(135,`code`),Zf(136,`ngsPageRows`),vi(),Zf(137,` slices a page on its own. `),vi(),ce(138,`docs-example`,10),Zf(139,` Plain `),ce(140,`code`),Zf(141,`@for`),vi(),Zf(142,` with `),ce(143,`code`),Zf(144,`track`),vi(),Zf(145,` on a stable key is enough: sorting 1,000 rows only moves existing rows, and the browser skips drawing the ones out of view. `),vi(),ce(146,`docs-example`,11),Zf(147,` For very long tables, put the table in a CDK `),ce(148,`code`),Zf(149,`cdk-virtual-scroll-viewport`),vi(),Zf(150,` and add `),ce(151,`code`),Zf(152,`ngsTableViewport`),vi(),Zf(153,`. Only the rows in view are rendered, here out of 10,000. Rows need one fixed height (`),ce(154,`code`),Zf(155,`itemSize`),vi(),Zf(156,`: 44 for `),ce(157,`code`),Zf(158,`md`),vi(),Zf(159,`, 34 for `),ce(160,`code`),Zf(161,`sm`),vi(),Zf(162,`, 57 for `),ce(163,`code`),Zf(164,`lg`),vi(),Zf(165,`, with one line of text). Set `),ce(166,`code`),Zf(167,`aria-rowindex`),vi(),Zf(168,` on each row and `),ce(169,`code`),Zf(170,`rowCount`),vi(),Zf(171,` on the table. `),vi(),ce(172,`section`,12)(173,`h2`,13),Zf(174,`Accessibility`),vi(),ce(175,`p`),Zf(176,` The table is native, so screen readers announce rows, columns and header cells without ARIA. A sortable header sets `),ce(177,`code`),Zf(178,`aria-sort`),vi(),Zf(179,` on the `),ce(180,`code`),Zf(181,`th`),vi(),Zf(182,` and holds a real `),ce(183,`code`),Zf(184,`<button>`),vi(),Zf(185,` named by the column text plus hidden text with the current sort ("Name, sorted ascending"); the strings come from `),ce(186,`code`),Zf(187,`NgsI18n.table`),vi(),Zf(188,`. Keep a `),ce(189,`code`),Zf(190,`<caption>`),vi(),Zf(191,` (visually hidden if needed) as the table's name. `),vi(),ce(192,`p`),Zf(193,` A scrolling container is a `),ce(194,`code`),Zf(195,`role="region"`),vi(),Zf(196,` named by `),ce(197,`code`),Zf(198,`label`),vi(),Zf(199,` and takes `),ce(200,`code`),Zf(201,`tabindex="0"`),vi(),Zf(202,` only while it overflows, which satisfies axe's `),ce(203,`code`),Zf(204,`scrollable-region-focusable`),vi(),Zf(205,`. Selection checkboxes are `),ce(206,`code`),Zf(207,`ngs-checkbox`),vi(),Zf(208,` with a hidden name ("Select row", or your `),ce(209,`code`),Zf(210,`label`),vi(),Zf(211,`), and rows carry `),ce(212,`code`),Zf(213,`aria-selected`),vi(),Zf(214,`. When the DOM holds only a page of the data, set `),ce(215,`code`),Zf(216,`rowCount`),vi(),Zf(217,` to the full count for `),ce(218,`code`),Zf(219,`aria-rowcount`),vi(),Zf(220,`. A loading table is `),ce(221,`code`),Zf(222,`aria-busy`),vi(),Zf(223,` and its spinner is a status region. `),vi()()()),t&2&&(Ot(`tab`,e.tab()),Tt(21),Ot(`component`,e.basic)(`sources`,e.sources.basic),Tt(11),Ot(`component`,e.rich)(`sources`,e.sources.rich),Tt(8),Ot(`component`,e.variants)(`sources`,e.sources.variants),Tt(22),Ot(`component`,e.sorting)(`sources`,e.sources.sorting),Tt(17),Ot(`component`,e.selection)(`sources`,e.sources.selection),Tt(19),Ot(`component`,e.scroll)(`sources`,e.sources.scroll),Tt(14),Ot(`component`,e.states)(`sources`,e.sources.states),Tt(10),Ot(`component`,e.filterPage)(`sources`,e.sources[`filter-page`]),Tt(16),Ot(`component`,e.large)(`sources`,e.sources.large),Tt(8),Ot(`component`,e.virtual)(`sources`,e.sources.virtual))},dependencies:[ue$1,pe],encapsulation:2})};export{Ts as TablePage};