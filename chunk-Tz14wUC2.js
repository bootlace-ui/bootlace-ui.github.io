import{A as J4,An as hg,At as W,B as Kf,Br as ui,Cr as rf,Ct as U0,G as Lr,Gr as vf,Gt as Yn,H as LU,I as K,In as jh,It as XR,Jt as Zf,L as KC,Ln as jn,Lr as uU,N as JR,Ot as Vm,Pr as tj,Pt as XC,Rn as jo,Rr as ue,Sn as fh,T as Hu,Tn as gf,Ut as YZ,Vt as Y3,W as Ll,Wr as ve,Yn as lt,Zn as m7,Zr as wf,_ as Ea$1,_r as q3,bn as f7,c as BF,ei as xh,en as ah,et as Ot,i as $t,j as JC,ln as cj,lt as Rm,mn as dh,mr as pa,mt as So,nr as nA,on as ce,q as Mh,qr as vi,r as $f,tt as P0,un as cn,ur as of,vn as ej,xt as Tt,zn as k$1,zt as Xo}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import"./chunk-B6h8Jb5u.js";import{A as ll,C as at,F as qn,I as rt,L as ye,M as ms,N as pn,T as ds,c as Hn,k as hs,m as Ot$1,n as Ba,r as Br,w as cs,z as zr}from"./chunk-DycqepRM.js";import{n as ee}from"./chunk-CfGjEUxa.js";import"./main-M33NX4WO.js";import{n as ue$1,t as pe}from"./chunk-C1Csa6NH.js";import{t as f$1}from"./chunk-_QnoVoFv.js";import"./chunk-DBfEr8HX.js";import"./chunk-Dv7PHoGw.js";import{t as me}from"./chunk-DQmBexCj.js";import{t as y}from"./chunk-C5VGU11Q.js";function O(n,s,a){return{year:n,month:s,day:a}}function _e(){return Le(/* @__PURE__ */ new Date)}function Le(n){return{year:n.getFullYear(),month:n.getMonth()+1,day:n.getDate()}}function R(n){if(typeof n!=`object`||n===null)return!1;let{year:s,month:a,day:e}=n;return Number.isInteger(s)&&Number.isInteger(a)&&Number.isInteger(e)&&a>=1&&a<=12&&e>=1&&e<=ga(s,a)}function X(n){if(typeof n!=`object`||n===null)return!1;let{start:s,end:a}=n;return R(s)&&R(a)}function ga(n,s){return new Date(Date.UTC(2e3,s,0)).getUTCDate()+Ve(n,s)}function Ve(n,s){return s!==2||n%4===0&&n%100!==0||n%400===0?0:-1}function f(n,s){return n.year-s.year||n.month-s.month||n.day-s.day}function aa(n,s){return n==null||s==null?n==s:f(n,s)===0}function Ca(n){let s=new Date(Date.UTC(2e3,0,1));return s.setUTCFullYear(n.year,n.month-1,n.day),s}function Ae(n){return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate()}}function P(n,s){let a=Ca(n);return a.setUTCDate(a.getUTCDate()+s),Ae(a)}function Y(n,s){let a=n.year*12+(n.month-1)+s,e=Math.floor(a/12),o=a%12+1;return{year:e,month:o,day:Math.min(n.day,ga(e,o))}}function J(n){return Ca(n).getUTCDay()}function ke(n,s,a){return s&&f(n,s)<0?s:a&&f(n,a)>0?a:n}function Ne(n){try{let s=new Intl.Locale(n),a=s.getWeekInfo?.()??s.weekInfo;if(a)return a.firstDay%7;let e=s.maximize().region??``;return Ue.has(e)?0:1}catch{return 1}}var Ue=/* @__PURE__ */ new Set([`US`,`CA`,`MX`,`BR`,`JP`,`IN`,`IL`,`KR`,`PH`,`TW`,`ZA`,`AU`,`SA`,`AR`,`CO`,`PE`,`VE`]);function Be(n){try{return new Intl.Locale(n,{numberingSystem:`latn`,calendar:`gregory`}).toString()}catch{return`en`}}function we(n,s=`long`){let a=new Intl.DateTimeFormat(n,{month:s,timeZone:`UTC`});return Array.from({length:12},(e,o)=>a.format(new Date(Date.UTC(2e3,o,1))))}function Sa(n,s=`short`){let a=new Intl.DateTimeFormat(n,{weekday:s,timeZone:`UTC`});return Array.from({length:7},(e,o)=>a.format(new Date(Date.UTC(2e3,0,2+o))))}function Ce(n,s){return new Intl.DateTimeFormat(s,{dateStyle:`full`,timeZone:`UTC`}).format(Ca(n))}function z(n){let s=new Intl.DateTimeFormat(Be(n),{year:`numeric`,month:`2-digit`,day:`2-digit`,timeZone:`UTC`}).formatToParts(new Date(Date.UTC(2e3,10,22))),a=[],e=[``];for(let o of s)o.type===`day`||o.type===`month`||o.type===`year`?(a.push(o.type),e.push(``)):o.type===`literal`&&(e[e.length-1]+=o.value.replace(/[‎‏؜]/g,``));return{order:a,literals:e}}var xe=(n,s)=>String(n).padStart(s,`0`);function H(n,s,a=z(s)){let e=a.literals[0];return a.order.forEach((o,i)=>{e+=o===`year`?xe(n.year,4):xe(n[o],2),e+=a.literals[i+1]}),e}function Se(n,s,a=`–`,e=z(s)){return`${H(n.start,s,e)} ${a} ${H(n.end,s,e)}`}function Ee(n,s){let a=n.literals[0];return n.order.forEach((e,o)=>{a+=s[e]+n.literals[o+1]}),a}function qe(n,s,a=z(s)){let e=n.match(/\d+/g);return!e||e.length!==3?null:wa(e,a)}function Ie(n,s,a=z(s)){let e=n.match(/\d+/g);if(!e||e.length!==6)return null;let o=wa(e.slice(0,3),a),i=wa(e.slice(3),a);return!o||!i?null:f(o,i)<=0?{start:o,end:i}:{start:i,end:o}}function wa(n,s){let a={};for(let o=0;o<3;o++){let i=s.order[o];if(i===`year`&&n[o].length!==4||i!==`year`&&n[o].length>2)return null;a[i]=Number(n[o])}let e={year:a.year,month:a.month,day:a.day};return R(e)?e:null}var We=(n,s)=>s.long;var Oe=(n,s)=>s[0].key;var Je=(n,s)=>s.key;function Ge(n,s){if(n&1){let a=gf();ce(0,`button`,10),ui(`click`,function(){q3(a);let o=vf();return Y3(o.setMode(`months`))}),Zf(1),vi(),ce(2,`button`,11),ui(`click`,function(){q3(a);let o=vf();return Y3(o.setMode(`years`))}),Zf(3),vi()}if(n&2){let a=vf();Ot(`disabled`,a.isDisabled()),Lr(`aria-label`,a.i18n.datepicker.selectMonth+`: `+a.monthName()),Tt(),hg(` `,a.monthName(),` `),Tt(),Ot(`disabled`,a.isDisabled()),Lr(`aria-label`,a.i18n.datepicker.selectYear+`: `+a.view().year),Tt(),hg(` `,a.view().year,` `)}}function Ke(n,s){if(n&1){let a=gf();ce(0,`button`,11),ui(`click`,function(){q3(a);let o=vf();return Y3(o.setMode(`years`))}),Zf(1),vi()}if(n&2){let a=vf();Ot(`disabled`,a.isDisabled()),Lr(`aria-label`,a.i18n.datepicker.selectYear+`: `+a.view().year),Tt(),hg(` `,a.view().year,` `)}}function He(n,s){if(n&1&&(ce(0,`span`,5),Zf(1),vi()),n&2){let a=vf();Tt(),jh(``,a.yearsStart(),` – `,a.yearsStart()+11)}}function Ye(n,s){if(n&1&&Zf(0),n&2){let a=vf();jh(` `,a.monthName(),` `,a.view().year,` `)}}function ze(n,s){if(n&1&&(ce(0,`th`,13)(1,`span`,14),Zf(2),vi(),ce(3,`span`,15),Zf(4),vi()()),n&2){let a=s.$implicit;Tt(2),fh(a.short),Tt(2),fh(a.long)}}function $e(n,s){if(n&1){let a=gf();ce(0,`td`,17)(1,`button`,18),ui(`click`,function(){let o=q3(a).$implicit,i=vf(3);return Y3(i.pick(o))})(`focus`,function(){let o=q3(a).$implicit,i=vf(3);return Y3(i.onDayFocus(o))})(`mouseenter`,function(){let o=q3(a).$implicit,i=vf(3);return Y3(i.onDayHover(o))}),Zf(2),vi()()}if(n&2){let a=s.$implicit,e=vf(3);dh(`ngs-in-range`,a.inRange||a.rangeStart||a.rangeEnd)(`ngs-range-start`,a.rangeStart)(`ngs-range-end`,a.rangeEnd)(`ngs-preview`,a.preview),Lr(`aria-selected`,a.selected||a.inRange?`true`:`false`),Tt(),dh(`ngs-outside`,a.outside)(`ngs-today`,a.today)(`ngs-weekend`,a.weekend)(`ngs-selected`,a.selected)(`ngs-unavailable`,a.disabled),Ot(`disabled`,e.isDisabled()),Lr(`data-date`,a.key)(`tabindex`,a.key===e.activeKey()?0:-1)(`aria-label`,a.label)(`aria-current`,a.today?`date`:null)(`aria-disabled`,a.disabled?`true`:null),Tt(),hg(` `,a.day,` `)}}function Ze(n,s){if(n&1&&(ce(0,`tr`),of(1,$e,3,26,`td`,16,Je),vi()),n&2){let a=s.$implicit;Tt(),rf(a)}}function Qe(n,s){if(n&1){let a=gf();ce(0,`table`,12),ui(`keydown`,function(o){q3(a);let i=vf();return Y3(i.onGridKeydown(o))})(`mouseleave`,function(){q3(a);let o=vf();return Y3(o.hover.set(null))}),ce(1,`thead`)(2,`tr`),of(3,ze,5,2,`th`,13,We),vi()(),ce(5,`tbody`),of(6,Ze,3,0,`tr`,null,Oe),vi()()}if(n&2){let a=vf();Lr(`aria-labelledby`,a.titleId)(`aria-multiselectable`,a.range()?`true`:null),Tt(3),rf(a.weekdays()),Tt(3),rf(a.weeks())}}function Xe(n,s){if(n&1){let a=gf();ce(0,`button`,20),ui(`click`,function(){let o=q3(a).$index,i=vf(2);return Y3(i.pickMonth(o+1))}),Zf(1),vi()}if(n&2){let a=s.$implicit,e=s.$index,o=vf(2);dh(`ngs-selected`,e+1===o.view().month),Ot(`disabled`,o.isDisabled()),Lr(`data-current`,e+1===o.view().month?``:null)(`aria-pressed`,e+1===o.view().month)(`aria-disabled`,o.monthDisabled(e+1)?`true`:null),Tt(),hg(` `,a,` `)}}function as(n,s){if(n&1&&(ce(0,`div`,9),of(1,Xe,2,7,`button`,19,JC),vi()),n&2){let a=vf();Lr(`aria-label`,a.view().year),Tt(),rf(a.monthNames())}}function es(n,s){if(n&1){let a=gf();ce(0,`button`,20),ui(`click`,function(){let o=q3(a).$implicit,i=vf(2);return Y3(i.pickYear(o))}),Zf(1),vi()}if(n&2){let a=s.$implicit,e=vf(2);dh(`ngs-selected`,a===e.view().year),Ot(`disabled`,e.isDisabled()),Lr(`data-current`,a===e.view().year?``:null)(`aria-pressed`,a===e.view().year)(`aria-disabled`,e.yearDisabled(a)?`true`:null),Tt(),hg(` `,a,` `)}}function ss(n,s){if(n&1&&(ce(0,`div`,9),of(1,es,2,7,`button`,19,JC),vi()),n&2){let a=vf();Lr(`aria-label`,a.yearsStart()+` – `+(a.yearsStart()+11)),Tt(),rf(a.years())}}var Ea=n=>`${n.year}-${n.month}-${n.day}`;var ea=12;var k=class n extends qn{el=k$1(So);hostInjector=k$1(cn);direction=k$1(ye);localeId=k$1(Ea$1);i18n=k$1(o);previousIcon=uU;nextIcon=LU;titleId=Ba(`ngs-calendar-title`);range=Yn(!1,{transform:$t});min=Yn(null);max=Yn(null);disabledDate=Yn(()=>!1);locale=Yn();firstDayOfWeek=Yn(void 0,{transform:s=>s==null?void 0:Vm(s)});label=Yn();month=JR(null);selected=XR();mode=W(`days`);hover=W(null);announcement=W(``);pending=W(null);focusDate=W(null);yearsStart=W(0);today=W(_e());tag=jo(()=>this.locale()??this.localeId);firstDay=jo(()=>this.firstDayOfWeek()??Ne(this.tag()));monthNames=jo(()=>we(this.tag(),`long`));view=jo(()=>{let s=this.value(),a=this.month()??(X(s)?s.start:R(s)?s:this.today());return O(a.year,a.month,1)});monthName=jo(()=>this.monthNames()[this.view().month-1]);weekdays=jo(()=>{let s=Sa(this.tag(),`short`),a=Sa(this.tag(),`long`);return Array.from({length:7},(e,o)=>{let i=(this.firstDay()+o)%7;return{short:s[i],long:a[i]}})});years=jo(()=>Array.from({length:ea},(s,a)=>this.yearsStart()+a));shownRange=jo(()=>{if(!this.range())return null;let s=this.pending();if(s){let e=this.hover()??s;return f(s,e)<=0?{start:s,end:e}:{start:e,end:s}}let a=this.value();return X(a)?a:null});weeks=jo(()=>{let s=this.view(),e=P(s,-((J(s)-this.firstDay()+7)%7)),o=this.tag(),i=this.today(),$=this.min(),M=this.max(),Pe=this.disabledDate(),Re=this.i18n.datepicker.unavailable,q=this.shownRange(),qa=this.value(),Ia=!this.range()&&R(qa)?qa:null,Fe=this.pending()!==null,Ma=[];for(let Da=0;Da<6;Da++){let Ta=[];for(let xa=0;xa<7;xa++){let v=P(e,Da*7+xa),Pa=!!$&&f(v,$)<0||!!M&&f(v,M)>0||Pe(v),Ra=J(v),Fa=Ce(v,o),La=!!q&&aa(v,q.start),Va=!!q&&aa(v,q.end),Aa=!!q&&f(q.start,q.end)!==0;Ta.push({date:v,key:Ea(v),label:Pa?`${Fa}, ${Re}`:Fa,day:v.day,outside:v.month!==s.month,today:aa(v,i),disabled:Pa,weekend:Ra===0||Ra===6,selected:Ia?aa(v,Ia):La||Va,rangeStart:Aa&&La,rangeEnd:Aa&&Va,inRange:!!q&&f(v,q.start)>0&&f(v,q.end)<0,preview:Fe})}Ma.push(Ta)}return Ma});activeKey=jo(()=>{let s=this.weeks().flat(),a=this.focusDate();if(a&&s.some(i=>i.key===Ea(a)))return Ea(a);let e=s.filter(i=>!i.outside);return(e.find(i=>i.selected)??e.find(i=>i.today)??e.find(i=>!i.disabled)??e[0]).key});previousLabel=jo(()=>this.navLabel(`previous`));nextLabel=jo(()=>this.navLabel(`next`));previousDisabled=jo(()=>this.stepBlocked(-1));nextDisabled=jo(()=>this.stepBlocked(1));focus(){let a=this.mode()===`days`?`.ngs-calendar-day[tabindex="0"]`:`.ngs-calendar-item[data-current]`;this.el.nativeElement.querySelector(a)?.focus({preventScroll:!0})}showMonth(s){this.mode.set(`days`),this.moveView(s)}navLabel(s){let a=this.i18n.datepicker,e=this.mode();return e===`days`?s===`previous`?a.previousMonth:a.nextMonth:e===`months`?s===`previous`?a.previousYear:a.nextYear:s===`previous`?a.previousYears:a.nextYears}stepBlocked(s){let a=this.min(),e=this.max(),o=this.mode(),i=this.view();if(o===`days`){let M=Y(i,s);return s<0?!!a&&f(O(M.year,M.month,ga(M.year,M.month)),a)<0:!!e&&f(O(M.year,M.month,1),e)>0}if(o===`months`)return s<0?!!a&&i.year-1<a.year:!!e&&i.year+1>e.year;let $=this.yearsStart();return s<0?!!a&&$-1<a.year:!!e&&$+ea>e.year}monthDisabled(s){let{year:a}=this.view(),e=this.min(),o=this.max();return!!e&&(a<e.year||a===e.year&&s<e.month)||!!o&&(a>o.year||a===o.year&&s>o.month)}yearDisabled(s){let a=this.min(),e=this.max();return!!a&&s<a.year||!!e&&s>e.year}setMode(s){s===`years`&&this.yearsStart.set(Math.floor(this.view().year/ea)*ea),this.mode.set(s),this.focusSoon()}step(s){if(s<0?this.previousDisabled():this.nextDisabled())return;let a=this.mode();a===`days`?this.moveView(Y(this.view(),s)):a===`months`?this.moveView(Y(this.view(),s*12)):this.yearsStart.update(e=>e+s*ea)}moveView(s){this.month.set(O(s.year,s.month,1))}pickMonth(s){if(this.monthDisabled(s))return;let{year:a}=this.view();this.moveView(O(a,s,1)),this.mode.set(`days`),this.focusDate.set(null),this.focusSoon()}pickYear(s){this.yearDisabled(s)||(this.moveView(O(s,this.view().month,1)),this.mode.set(`months`),this.focusSoon())}pick(s){if(s.disabled||this.isDisabled())return;let a=s.date;if(s.outside&&this.moveView(a),this.focusDate.set(a),!this.range()){this.setValue(a),this.selected.emit(a);return}let e=this.pending();if(!e){this.pending.set(a),this.hover.set(a),this.announcement.set(this.i18n.datepicker.rangeStart.replace(`{date}`,H(a,this.tag())));return}this.pending.set(null),this.hover.set(null),this.announcement.set(``);let o=f(e,a)<=0?{start:e,end:a}:{start:a,end:e};this.setValue(o),this.selected.emit(o)}onDayFocus(s){this.focusDate.set(s.date),this.pending()&&this.hover.set(s.date)}onDayHover(s){this.pending()&&this.hover.set(s.date)}onEscape(s){this.mode()!==`days`&&(s.stopPropagation(),this.mode.set(`days`),this.focusSoon())}onGridKeydown(s){if(s.altKey||s.ctrlKey||s.metaKey)return;let a=this.activeDateOf(),e=this.direction.value===`rtl`?-1:1,o;switch(s.key){case`ArrowLeft`:o=P(a,-e);break;case`ArrowRight`:o=P(a,e);break;case`ArrowUp`:o=P(a,-7);break;case`ArrowDown`:o=P(a,7);break;case`Home`:o=P(a,-((J(a)-this.firstDay()+7)%7));break;case`End`:o=P(a,6-(J(a)-this.firstDay()+7)%7);break;case`PageUp`:o=Y(a,s.shiftKey?-12:-1);break;case`PageDown`:o=Y(a,s.shiftKey?12:1);break;default:return}s.preventDefault(),this.moveFocus(ke(o,this.min(),this.max()))}activeDateOf(){let s=this.activeKey();return this.weeks().flat().find(e=>e.key===s).date}moveFocus(s){this.focusDate.set(s);let a=this.view();(s.month!==a.month||s.year!==a.year)&&this.moveView(s),this.pending()&&this.hover.set(s),this.focusSoon()}focusSoon(){pa(()=>this.focus(),{injector:this.hostInjector})}static ɵfac=(()=>{let s;return function(e){return(s||(s=Hu(n)))(e||n)}})();static ɵcmp=ve({type:n,selectors:[[`ngs-calendar`]],hostAttrs:[`role`,`group`,1,`ngs-calendar`],hostVars:1,hostBindings:function(a,e){a&1&&ui(`keydown.escape`,function(i){return e.onEscape(i)}),a&2&&Lr(`aria-label`,e.label()??e.i18n.datepicker.calendar)},inputs:{range:[1,`range`],min:[1,`min`],max:[1,`max`],disabledDate:[1,`disabledDate`],locale:[1,`locale`],firstDayOfWeek:[1,`firstDayOfWeek`],label:[1,`label`],month:[1,`month`]},outputs:{month:`monthChange`,selected:`selected`},features:[Kf([ll(()=>n)]),P0],decls:16,vars:13,consts:[[1,`ngs-calendar-header`],[`type`,`button`,1,`btn`,`btn-icon`,`btn-sm`,`btn-text`,`theme-primary`,`ngs-calendar-nav`,3,`click`,`disabled`],[`aria-hidden`,`true`,3,`icon`],[1,`ngs-calendar-title`],[`type`,`button`,`data-switch`,`year`,1,`ngs-calendar-switch`,`ngs-calendar-year`,3,`disabled`],[1,`ngs-calendar-range`],[`aria-live`,`polite`,1,`visually-hidden`,3,`id`],[`role`,`status`,1,`visually-hidden`],[`role`,`grid`,1,`ngs-calendar-grid`],[`role`,`group`,1,`ngs-calendar-list`],[`type`,`button`,`data-switch`,`month`,1,`ngs-calendar-switch`,3,`click`,`disabled`],[`type`,`button`,`data-switch`,`year`,1,`ngs-calendar-switch`,`ngs-calendar-year`,3,`click`,`disabled`],[`role`,`grid`,1,`ngs-calendar-grid`,3,`keydown`,`mouseleave`],[`scope`,`col`],[`aria-hidden`,`true`],[1,`visually-hidden`],[`role`,`gridcell`,3,`ngs-in-range`,`ngs-range-start`,`ngs-range-end`,`ngs-preview`],[`role`,`gridcell`],[`type`,`button`,1,`ngs-calendar-day`,3,`click`,`focus`,`mouseenter`,`disabled`],[`type`,`button`,1,`ngs-calendar-item`,3,`ngs-selected`,`disabled`],[`type`,`button`,1,`ngs-calendar-item`,3,`click`,`disabled`]],template:function(a,e){if(a&1&&(ce(0,`div`,0)(1,`button`,1),ui(`click`,function(){return e.step(-1)}),ue(2,`ngs-icon`,2),vi(),ce(3,`div`,3),KC(4,Ge,4,6)(5,Ke,2,3,`button`,4)(6,He,2,2,`span`,5),vi(),ce(7,`button`,1),ui(`click`,function(){return e.step(1)}),ue(8,`ngs-icon`,2),vi()(),ce(9,`div`,6),KC(10,Ye,1,2),vi(),ce(11,`div`,7),Zf(12),vi(),KC(13,Qe,8,2,`table`,8)(14,as,3,1,`div`,9)(15,ss,3,1,`div`,9)),a&2){let o,i;Tt(),Ot(`disabled`,e.isDisabled()),Lr(`aria-label`,e.previousLabel())(`aria-disabled`,e.previousDisabled()?`true`:null),Tt(),Ot(`icon`,e.previousIcon),Tt(2),XC((o=e.mode())===`days`?4:o===`months`?5:6),Tt(3),Ot(`disabled`,e.isDisabled()),Lr(`aria-label`,e.nextLabel())(`aria-disabled`,e.nextDisabled()?`true`:null),Tt(),Ot(`icon`,e.nextIcon),Tt(),Ot(`id`,e.titleId),Tt(),XC(e.mode()===`days`?10:-1),Tt(2),fh(e.announcement()),Tt(),XC((i=e.mode())===`days`?13:i===`months`?14:15)}},dependencies:[Ll],encapsulation:2})};var ns=[`field`];var ts=[`panel`];function ls(n,s){if(n&1){let a=gf();ce(0,`div`,4),ui(`keydown.escape`,function(o){q3(a);let i=vf();return Y3(i.closeAndFocus(o))}),ce(1,`ngs-calendar`,5),ui(`selected`,function(o){q3(a);let i=vf();return Y3(i.onPicked(o))}),vi()()}if(n&2){let a=vf();Ot(`id`,a.panelId),Lr(`aria-label`,a.buttonLabel()),Tt(),Ot(`range`,a.range())(`value`,a.value())(`min`,a.min())(`max`,a.max())(`disabledDate`,a.disabledDate())(`locale`,a.tag())(`firstDayOfWeek`,a.firstDayOfWeek())(`month`,a.month())}}var V=class n extends qn{el=k$1(So);overlays=k$1(Hn);vcr=k$1(Xo);hostInjector=k$1(cn);browser=YZ(k$1(lt));localeId=k$1(Ea$1);i18n=k$1(o);calendarIcon=BF;fieldId=Ba(`ngs-date-input`);panelId=Ba(`ngs-datepicker`);field=nA.required(`field`);panel=nA.required(`panel`);calendar=nA(k);range=Yn(!1,{transform:$t});min=Yn(null);max=Yn(null);disabledDate=Yn(()=>!1);locale=Yn();firstDayOfWeek=Yn(void 0,{transform:s=>s==null?void 0:Vm(s)});month=Yn(null);placeholder=Yn();label=Yn();labelledBy=Yn();size=Yn(`md`);readonly=Yn(!1,{transform:$t});placement=Yn(`bottom-start`);open=JR(!1);draft=W(null);tag=jo(()=>this.locale()??this.localeId);format=jo(()=>z(this.tag()));separator=jo(()=>` ${this.i18n.datepicker.rangeSeparator} `);text=jo(()=>{let s=this.draft();if(s!==null)return s;let a=this.value(),e=this.tag();return this.range()?X(a)?Se(a,e,this.i18n.datepicker.rangeSeparator,this.format()):``:R(a)?H(a,e,this.format()):``});placeholderText=jo(()=>{let s=this.placeholder();if(s!==void 0)return s||null;let a={day:this.i18n.datepicker.dayPlaceholder,month:this.i18n.datepicker.monthPlaceholder,year:this.i18n.datepicker.yearPlaceholder},e=Ee(this.format(),a);return this.range()?e+this.separator()+e:e});buttonLabel=jo(()=>this.range()?this.i18n.datepicker.chooseDateRange:this.i18n.datepicker.chooseDate);ref=null;constructor(){super(),J4(()=>{let s=this.open()&&!this.isDisabled()&&!this.readonly();K(()=>s?this.openPanel():this.closePanel())}),k$1(jn).onDestroy(()=>this.ref?.close())}focus(){this.field().nativeElement.focus({preventScroll:!0})}writeValue(s){this.draft.set(null),super.writeValue(s)}toggle(){this.open.update(s=>!s)}onMousedown(s){s.target===this.el.nativeElement&&(s.preventDefault(),this.focus())}onInput(s){let a=s.target.value;if(this.draft.set(a),!a.trim()){this.setValue(null);return}let e=this.parse(a);e&&this.setValue(e)}onBlur(){this.draft.set(null),this.open()||this.markTouched()}onKeydown(s){s.key===`ArrowDown`&&!this.isDisabled()&&!this.readonly()?(s.preventDefault(),this.open.set(!0)):s.key===`Escape`&&this.open()?this.closeAndFocus(s):s.key===`Enter`&&this.draft.set(null)}onPicked(s){this.draft.set(null),this.setValue(s),this.closeAndFocus()}closeAndFocus(s){s?.stopPropagation(),this.open.set(!1),this.focus()}parse(s){let a=this.tag();if(this.range()){let o=Ie(s,a,this.format());return o&&this.allowed(o.start)&&this.allowed(o.end)?o:null}let e=qe(s,a,this.format());return e&&this.allowed(e)?e:null}allowed(s){let a=this.min(),e=this.max();return!(a&&f(s,a)<0)&&!(e&&f(s,e)>0)&&!this.disabledDate()(s)}openPanel(){if(!this.browser||this.ref)return;let s=this.overlays.open(this.el.nativeElement,new at(this.panel(),this.vcr),{placement:this.placement(),offset:4,closeOnEscape:!1,panelClass:`ngs-datepicker-pane`});this.ref=s,s.closed.subscribe(()=>{this.ref===s&&(this.ref=null,this.open()&&(this.open.set(!1),this.markTouched()))}),pa(()=>this.calendar()?.focus(),{injector:this.hostInjector})}closePanel(){let s=this.ref;this.ref=null,s?.close()}static ɵfac=function(a){return new(a||n)};static ɵcmp=ve({type:n,selectors:[[`ngs-date-input`]],viewQuery:function(a,e){a&1&&ah(e.field,ns,5)(e.panel,ts,5)(e.calendar,k,5),a&2&&wf(3)},hostAttrs:[1,`form-control`,`ngs-date-input`],hostVars:10,hostBindings:function(a,e){a&1&&ui(`mousedown`,function(i){return e.onMousedown(i)}),a&2&&dh(`show`,e.open())(`disabled`,e.isDisabled())(`is-invalid`,e.isInvalid())(`form-control-sm`,e.size()===`sm`)(`form-control-lg`,e.size()===`lg`)},inputs:{range:[1,`range`],min:[1,`min`],max:[1,`max`],disabledDate:[1,`disabledDate`],locale:[1,`locale`],firstDayOfWeek:[1,`firstDayOfWeek`],month:[1,`month`],placeholder:[1,`placeholder`],label:[1,`label`],labelledBy:[1,`labelledBy`],size:[1,`size`],readonly:[1,`readonly`],placement:[1,`placement`],open:[1,`open`]},outputs:{open:`openChange`},features:[Kf([ll(()=>n)]),P0],decls:5,vars:13,consts:[[`field`,``],[`panel`,``],[`type`,`text`,`inputmode`,`numeric`,`autocomplete`,`off`,`spellcheck`,`false`,1,`ngs-date-input-field`,3,`input`,`keydown`,`blur`,`disabled`,`readOnly`,`value`],[`ngsIconButton`,``,`type`,`button`,`variant`,`text`,`size`,`sm`,`aria-haspopup`,`dialog`,1,`ngs-date-input-button`,3,`click`,`icon`,`label`,`disabled`],[`role`,`dialog`,`cdkTrapFocus`,``,1,`ngs-datepicker-panel`,3,`keydown.escape`,`id`],[3,`selected`,`range`,`value`,`min`,`max`,`disabledDate`,`locale`,`firstDayOfWeek`,`month`]],template:function(a,e){a&1&&(ce(0,`input`,2,0),ui(`input`,function(i){return e.onInput(i)})(`keydown`,function(i){return e.onKeydown(i)})(`blur`,function(){return e.onBlur()}),vi(),ce(2,`button`,3),ui(`click`,function(){return e.toggle()}),vi(),U0(3,ls,2,10,`ng-template`,null,1,cj)),a&2&&(Ot(`disabled`,e.isDisabled())(`readOnly`,e.readonly())(`value`,e.text()),Lr(`id`,e.fieldId)(`placeholder`,e.placeholderText())(`aria-label`,e.label()??null)(`aria-labelledby`,e.labelledBy()??null)(`aria-invalid`,e.isInvalid()?`true`:null),Tt(2),Ot(`icon`,e.calendarIcon)(`label`,e.buttonLabel())(`disabled`,e.isDisabled()||e.readonly()),Lr(`aria-expanded`,e.open())(`aria-controls`,e.open()?e.panelId:null))},dependencies:[ee,k,y],encapsulation:2})};var ua=class n{month={year:2026,month:10,day:1};date=W({year:2026,month:10,day:14});static ɵfac=function(a){return new(a||n)};static ɵcmp=ve({type:n,selectors:[[`docs-datepicker-calendar`]],decls:9,vars:5,consts:[[1,`row`,`g-3`,`align-items-start`],[1,`col-12`,`md:col-6`],[`label`,`Appointment date`,3,`valueChange`,`month`,`value`],[`aria-live`,`polite`,1,`mb-0`]],template:function(a,e){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-calendar`,2),xh(`valueChange`,function(i){return $f(e.date,i)||(e.date=i),i}),vi()(),ce(3,`div`,1)(4,`p`,3),Zf(5,` Selected: `),ce(6,`code`),Zf(7),ej(8,`json`),vi()()()()),a&2&&(Tt(2),Ot(`month`,e.month),Mh(`value`,e.date),Tt(5),fh(tj(8,3,e.date())))},dependencies:[k,Rm],encapsulation:2})};function rs(n,s){n&1&&(ce(0,`div`,4),Zf(1,`Enter a date of birth.`),vi())}function os(n,s){n&1&&(ce(0,`span`,8),Zf(1,`Saved.`),vi())}var ya=class n{month={year:2026,month:10,day:1};max={year:2026,month:12,day:31};form=new rt({birthday:new pn(null,Ot$1.required)});sent=W(!1);submit(){this.form.markAllAsTouched(),this.sent.set(this.form.valid)}static ɵfac=function(a){return new(a||n)};static ɵcmp=ve({type:n,selectors:[[`docs-datepicker-input`]],decls:16,vars:8,consts:[[`novalidate`,``,1,`row`,`g-3`,3,`ngSubmit`,`formGroup`],[1,`col-12`,`md:col-6`],[`for`,`birthday`,1,`form-label`],[`id`,`birthday`,`formControlName`,`birthday`,`label`,`Date of birth`,`locale`,`en-GB`,3,`month`,`max`],[1,`invalid-feedback`,`d-block`],[`aria-live`,`polite`,1,`mb-0`],[1,`col-12`],[`ngsButton`,``,`type`,`submit`],[`role`,`status`,1,`ms-2`]],template:function(a,e){a&1&&(ce(0,`form`,0),ui(`ngSubmit`,function(){return e.submit()}),ce(1,`div`,1)(2,`label`,2),Zf(3,`Date of birth`),vi(),ce(4,`ngs-date-input`,3),f7(),vi(),KC(5,rs,2,0,`div`,4),vi(),ce(6,`div`,1)(7,`p`,5),Zf(8,` Value: `),ce(9,`code`),Zf(10),ej(11,`json`),vi()()(),ce(12,`div`,6)(13,`button`,7),Zf(14,`Save`),vi(),KC(15,os,2,0,`span`,8),vi()()),a&2&&(Ot(`formGroup`,e.form),Tt(4),Ot(`month`,e.month)(`max`,e.max),m7(),Tt(),XC(e.form.controls.birthday.invalid&&e.form.controls.birthday.touched?5:-1),Tt(5),fh(tj(11,6,e.form.controls.birthday.value)),Tt(5),XC(e.sent()?15:-1))},dependencies:[f$1,V,ms,hs,cs,ds,Br,zr,Rm],encapsulation:2})};var ja=class n{month={year:2026,month:10,day:1};min={year:2026,month:10,day:1};stay=W(null);static ɵfac=function(a){return new(a||n)};static ɵcmp=ve({type:n,selectors:[[`docs-datepicker-input-range`]],decls:11,vars:6,consts:[[1,`row`,`g-3`,`align-items-start`],[1,`col-12`,`md:col-6`],[`for`,`stay`,1,`form-label`],[`id`,`stay`,`range`,``,`label`,`Stay`,`locale`,`en-US`,3,`valueChange`,`month`,`min`,`value`],[`aria-live`,`polite`,1,`mb-0`]],template:function(a,e){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`label`,2),Zf(3,`Stay`),vi(),ce(4,`ngs-date-input`,3),xh(`valueChange`,function(i){return $f(e.stay,i)||(e.stay=i),i}),vi()(),ce(5,`div`,1)(6,`p`,4),Zf(7,` Value: `),ce(8,`code`),Zf(9),ej(10,`json`),vi()()()()),a&2&&(Tt(4),Ot(`month`,e.month)(`min`,e.min),Mh(`value`,e.stay),Tt(5),fh(tj(10,4,e.stay())))},dependencies:[V,Rm],encapsulation:2})};var fa=class n{month={year:2026,month:10,day:1};min={year:2026,month:10,day:6};max={year:2026,month:11,day:20};date=W(null);weekend=s=>[0,6].includes(J(s));static ɵfac=function(a){return new(a||n)};static ɵcmp=ve({type:n,selectors:[[`docs-datepicker-limits`]],decls:19,vars:14,consts:[[1,`row`,`g-3`,`align-items-start`],[1,`col-12`,`md:col-6`],[`label`,`Delivery date`,3,`valueChange`,`month`,`min`,`max`,`disabledDate`,`value`],[`aria-live`,`polite`,1,`mb-0`]],template:function(a,e){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-calendar`,2),xh(`valueChange`,function(i){return $f(e.date,i)||(e.date=i),i}),vi()(),ce(3,`div`,1)(4,`p`),Zf(5,` Open from `),ce(6,`code`),Zf(7),ej(8,`json`),vi(),Zf(9,` to `),ce(10,`code`),Zf(11),ej(12,`json`),vi(),Zf(13,`, except weekends. `),vi(),ce(14,`p`,3),Zf(15,` Selected: `),ce(16,`code`),Zf(17),ej(18,`json`),vi()()()()),a&2&&(Tt(2),Ot(`month`,e.month)(`min`,e.min)(`max`,e.max)(`disabledDate`,e.weekend),Mh(`value`,e.date),Tt(5),fh(tj(8,8,e.min)),Tt(4),fh(tj(12,10,e.max)),Tt(6),fh(tj(18,12,e.date())))},dependencies:[k,Rm],encapsulation:2})};var ba=class n{locales=[{tag:`en-US`,name:`English (US)`},{tag:`en-GB`,name:`English (UK)`},{tag:`de`,name:`Deutsch`},{tag:`fr`,name:`Français`},{tag:`ja`,name:`日本語`},{tag:`sv`,name:`Svenska`}];locale=W(`de`);month={year:2026,month:10,day:1};date=W({year:2026,month:10,day:29});tag=s=>s.tag;name=s=>s.name;static ɵfac=function(a){return new(a||n)};static ɵcmp=ve({type:n,selectors:[[`docs-datepicker-locale`]],decls:11,vars:10,consts:[[1,`row`,`g-3`,`align-items-start`],[1,`col-12`,`md:col-6`],[`id`,`locale-label`,1,`form-label`,`d-block`],[`labelledBy`,`locale-label`,3,`valueChange`,`options`,`optionValue`,`optionLabel`,`value`],[`for`,`locale-date`,1,`form-label`],[`id`,`locale-date`,`label`,`Date`,3,`valueChange`,`month`,`locale`,`value`],[`label`,`Calendar`,3,`valueChange`,`month`,`locale`,`value`]],template:function(a,e){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`span`,2),Zf(3,`Locale`),vi(),ce(4,`ngs-select`,3),xh(`valueChange`,function(i){return $f(e.locale,i)||(e.locale=i),i}),vi()(),ce(5,`div`,1)(6,`label`,4),Zf(7,`Date`),vi(),ce(8,`ngs-date-input`,5),xh(`valueChange`,function(i){return $f(e.date,i)||(e.date=i),i}),vi()(),ce(9,`div`,1)(10,`ngs-calendar`,6),xh(`valueChange`,function(i){return $f(e.date,i)||(e.date=i),i}),vi()()()),a&2&&(Tt(4),Ot(`options`,e.locales)(`optionValue`,e.tag)(`optionLabel`,e.name),Mh(`value`,e.locale),Tt(4),Ot(`month`,e.month)(`locale`,e.locale()??`en-US`),Mh(`value`,e.date),Tt(2),Ot(`month`,e.month)(`locale`,e.locale()??`en-US`),Mh(`value`,e.date))},dependencies:[k,V,me],encapsulation:2})};var va=class n{month={year:2026,month:10,day:1};stay=W({start:{year:2026,month:10,day:12},end:{year:2026,month:10,day:16}});static ɵfac=function(a){return new(a||n)};static ɵcmp=ve({type:n,selectors:[[`docs-datepicker-range`]],decls:9,vars:5,consts:[[1,`row`,`g-3`,`align-items-start`],[1,`col-12`,`md:col-6`],[`range`,``,`label`,`Stay`,3,`valueChange`,`month`,`value`],[`aria-live`,`polite`,1,`mb-0`]],template:function(a,e){a&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-calendar`,2),xh(`valueChange`,function(i){return $f(e.stay,i)||(e.stay=i),i}),vi()(),ce(3,`div`,1)(4,`p`,3),Zf(5,` Selected: `),ce(6,`code`),Zf(7),ej(8,`json`),vi()()()()),a&2&&(Tt(2),Ot(`month`,e.month),Mh(`value`,e.stay),Tt(5),fh(tj(8,3,e.stay())))},dependencies:[k,Rm],encapsulation:2})};var Me={calendar:{html:{code:`<div class="row g-3 align-items-start">
  <div class="col-12 md:col-6">
    <ngs-calendar label="Appointment date" [month]="month" [(value)]="date" />
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0" aria-live="polite">
      Selected: <code>{{ date() | json }}</code>
    </p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-start&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-calendar</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Appointment date&quot;</span> [<span class="hljs-attr">month</span>]=<span class="hljs-string">&quot;month&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;date&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>
      Selected: <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ date() | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgsCalendar, NgsDate } from '@bootlace/core/datepicker';

@Component({
  selector: 'docs-datepicker-calendar',
  imports: [NgsCalendar, JsonPipe],
  templateUrl: './index.html',
})
export class DatepickerCalendarExample {
  // A fixed month keeps the prerendered page and the browser in agreement. Leave it out to open on
  // the month of the value, or today's.
  protected readonly month: NgsDate = { year: 2026, month: 10, day: 1 };
  protected readonly date = signal<NgsDate | null>({ year: 2026, month: 10, day: 14 });
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">JsonPipe</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCalendar</span>, <span class="hljs-title class_">NgsDate</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/datepicker&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-datepicker-calendar&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCalendar</span>, <span class="hljs-title class_">JsonPipe</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DatepickerCalendarExample</span> {
  <span class="hljs-comment">// A fixed month keeps the prerendered page and the browser in agreement. Leave it out to open on</span>
  <span class="hljs-comment">// the month of the value, or today&#x27;s.</span>
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">month</span>: <span class="hljs-title class_">NgsDate</span> = { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">1</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> date = signal&lt;<span class="hljs-title class_">NgsDate</span> | <span class="hljs-literal">null</span>&gt;({ <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">14</span> });
}`}},input:{html:{code:`<form class="row g-3" [formGroup]="form" (ngSubmit)="submit()" novalidate>
  <div class="col-12 md:col-6">
    <label class="form-label" for="birthday">Date of birth</label>
    <ngs-date-input
      id="birthday"
      formControlName="birthday"
      label="Date of birth"
      locale="en-GB"
      [month]="month"
      [max]="max"
    />
    @if (form.controls.birthday.invalid && form.controls.birthday.touched) {
      <div class="invalid-feedback d-block">Enter a date of birth.</div>
    }
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0" aria-live="polite">
      Value: <code>{{ form.controls.birthday.value | json }}</code>
    </p>
  </div>
  <div class="col-12">
    <button ngsButton type="submit">Save</button>
    @if (sent()) {
      <span class="ms-2" role="status">Saved.</span>
    }
  </div>
</form>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">&quot;form&quot;</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">&quot;submit()&quot;</span> <span class="hljs-attr">novalidate</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;birthday&quot;</span>&gt;</span>Date of birth<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-date-input</span>
      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;birthday&quot;</span>
      <span class="hljs-attr">formControlName</span>=<span class="hljs-string">&quot;birthday&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Date of birth&quot;</span>
      <span class="hljs-attr">locale</span>=<span class="hljs-string">&quot;en-GB&quot;</span>
      [<span class="hljs-attr">month</span>]=<span class="hljs-string">&quot;month&quot;</span>
      [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;max&quot;</span>
    /&gt;</span>
    @if (form.controls.birthday.invalid &amp;&amp; form.controls.birthday.touched) {
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;invalid-feedback d-block&quot;</span>&gt;</span>Enter a date of birth.<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>
      Value: <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ form.controls.birthday.value | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">ngsButton</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>Save<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    @if (sent()) {
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ms-2&quot;</span> <span class="hljs-attr">role</span>=<span class="hljs-string">&quot;status&quot;</span>&gt;</span>Saved.<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>`},ts:{code:`import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgsButton } from '@bootlace/core/button';
import { NgsDate, NgsDateInput } from '@bootlace/core/datepicker';

@Component({
  selector: 'docs-datepicker-input',
  imports: [NgsButton, NgsDateInput, ReactiveFormsModule, JsonPipe],
  templateUrl: './index.html',
})
export class DatepickerInputExample {
  protected readonly month: NgsDate = { year: 2026, month: 10, day: 1 };
  protected readonly max: NgsDate = { year: 2026, month: 12, day: 31 };
  protected readonly form = new FormGroup({
    birthday: new FormControl<NgsDate | null>(null, Validators.required),
  });
  protected readonly sent = signal(false);

  protected submit(): void {
    this.form.markAllAsTouched();
    this.sent.set(this.form.valid);
  }
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">JsonPipe</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FormControl</span>, <span class="hljs-title class_">FormGroup</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">Validators</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/forms&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/button&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDate</span>, <span class="hljs-title class_">NgsDateInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/datepicker&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-datepicker-input&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsButton</span>, <span class="hljs-title class_">NgsDateInput</span>, <span class="hljs-title class_">ReactiveFormsModule</span>, <span class="hljs-title class_">JsonPipe</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DatepickerInputExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">month</span>: <span class="hljs-title class_">NgsDate</span> = { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">1</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">max</span>: <span class="hljs-title class_">NgsDate</span> = { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">12</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">31</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> form = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormGroup</span>({
    <span class="hljs-attr">birthday</span>: <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormControl</span>&lt;<span class="hljs-title class_">NgsDate</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>, <span class="hljs-title class_">Validators</span>.<span class="hljs-property">required</span>),
  });
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> sent = <span class="hljs-title function_">signal</span>(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-title function_">submit</span>(): <span class="hljs-built_in">void</span> {
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-title function_">markAllAsTouched</span>();
    <span class="hljs-variable language_">this</span>.<span class="hljs-property">sent</span>.<span class="hljs-title function_">set</span>(<span class="hljs-variable language_">this</span>.<span class="hljs-property">form</span>.<span class="hljs-property">valid</span>);
  }
}`}},"input-range":{html:{code:`<div class="row g-3 align-items-start">
  <div class="col-12 md:col-6">
    <label class="form-label" for="stay">Stay</label>
    <ngs-date-input
      id="stay"
      range
      label="Stay"
      locale="en-US"
      [month]="month"
      [min]="min"
      [(value)]="stay"
    />
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0" aria-live="polite">
      Value: <code>{{ stay() | json }}</code>
    </p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-start&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;stay&quot;</span>&gt;</span>Stay<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-date-input</span>
      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;stay&quot;</span>
      <span class="hljs-attr">range</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Stay&quot;</span>
      <span class="hljs-attr">locale</span>=<span class="hljs-string">&quot;en-US&quot;</span>
      [<span class="hljs-attr">month</span>]=<span class="hljs-string">&quot;month&quot;</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;min&quot;</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;stay&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>
      Value: <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ stay() | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgsDate, NgsDateInput, NgsDateRange } from '@bootlace/core/datepicker';

@Component({
  selector: 'docs-datepicker-input-range',
  imports: [NgsDateInput, JsonPipe],
  templateUrl: './index.html',
})
export class DatepickerInputRangeExample {
  protected readonly month: NgsDate = { year: 2026, month: 10, day: 1 };
  protected readonly min: NgsDate = { year: 2026, month: 10, day: 1 };
  protected readonly stay = signal<NgsDateRange | null>(null);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">JsonPipe</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsDate</span>, <span class="hljs-title class_">NgsDateInput</span>, <span class="hljs-title class_">NgsDateRange</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/datepicker&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-datepicker-input-range&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsDateInput</span>, <span class="hljs-title class_">JsonPipe</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DatepickerInputRangeExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">month</span>: <span class="hljs-title class_">NgsDate</span> = { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">1</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">min</span>: <span class="hljs-title class_">NgsDate</span> = { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">1</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> stay = signal&lt;<span class="hljs-title class_">NgsDateRange</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);
}`}},limits:{html:{code:`<div class="row g-3 align-items-start">
  <div class="col-12 md:col-6">
    <ngs-calendar
      label="Delivery date"
      [month]="month"
      [min]="min"
      [max]="max"
      [disabledDate]="weekend"
      [(value)]="date"
    />
  </div>
  <div class="col-12 md:col-6">
    <p>
      Open from <code>{{ min | json }}</code> to <code>{{ max | json }}</code
      >, except weekends.
    </p>
    <p class="mb-0" aria-live="polite">
      Selected: <code>{{ date() | json }}</code>
    </p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-start&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-calendar</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Delivery date&quot;</span>
      [<span class="hljs-attr">month</span>]=<span class="hljs-string">&quot;month&quot;</span>
      [<span class="hljs-attr">min</span>]=<span class="hljs-string">&quot;min&quot;</span>
      [<span class="hljs-attr">max</span>]=<span class="hljs-string">&quot;max&quot;</span>
      [<span class="hljs-attr">disabledDate</span>]=<span class="hljs-string">&quot;weekend&quot;</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;date&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
      Open from <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ min | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span> to <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ max | json }}&lt;/code
      &gt;, except weekends.
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>
      Selected: <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ date() | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgsCalendar, NgsDate, ngsDayOfWeek } from '@bootlace/core/datepicker';

@Component({
  selector: 'docs-datepicker-limits',
  imports: [NgsCalendar, JsonPipe],
  templateUrl: './index.html',
})
export class DatepickerLimitsExample {
  protected readonly month: NgsDate = { year: 2026, month: 10, day: 1 };
  protected readonly min: NgsDate = { year: 2026, month: 10, day: 6 };
  protected readonly max: NgsDate = { year: 2026, month: 11, day: 20 };
  protected readonly date = signal<NgsDate | null>(null);

  protected readonly weekend = (date: NgsDate) => [0, 6].includes(ngsDayOfWeek(date));
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">JsonPipe</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCalendar</span>, <span class="hljs-title class_">NgsDate</span>, ngsDayOfWeek } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/datepicker&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-datepicker-limits&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCalendar</span>, <span class="hljs-title class_">JsonPipe</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DatepickerLimitsExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">month</span>: <span class="hljs-title class_">NgsDate</span> = { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">1</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">min</span>: <span class="hljs-title class_">NgsDate</span> = { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">6</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">max</span>: <span class="hljs-title class_">NgsDate</span> = { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">11</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">20</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> date = signal&lt;<span class="hljs-title class_">NgsDate</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-literal">null</span>);

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> weekend = <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">date</span>: <span class="hljs-title class_">NgsDate</span></span>) =&gt;</span> [<span class="hljs-number">0</span>, <span class="hljs-number">6</span>].<span class="hljs-title function_">includes</span>(<span class="hljs-title function_">ngsDayOfWeek</span>(date));
}`}},locale:{html:{code:`<div class="row g-3 align-items-start">
  <div class="col-12 md:col-6">
    <span class="form-label d-block" id="locale-label">Locale</span>
    <ngs-select
      labelledBy="locale-label"
      [options]="locales"
      [optionValue]="tag"
      [optionLabel]="name"
      [(value)]="locale"
    />
  </div>
  <div class="col-12 md:col-6">
    <label class="form-label" for="locale-date">Date</label>
    <ngs-date-input
      id="locale-date"
      label="Date"
      [month]="month"
      [locale]="locale() ?? 'en-US'"
      [(value)]="date"
    />
  </div>
  <div class="col-12 md:col-6">
    <ngs-calendar
      label="Calendar"
      [month]="month"
      [locale]="locale() ?? 'en-US'"
      [(value)]="date"
    />
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-start&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label d-block&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;locale-label&quot;</span>&gt;</span>Locale<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-select</span>
      <span class="hljs-attr">labelledBy</span>=<span class="hljs-string">&quot;locale-label&quot;</span>
      [<span class="hljs-attr">options</span>]=<span class="hljs-string">&quot;locales&quot;</span>
      [<span class="hljs-attr">optionValue</span>]=<span class="hljs-string">&quot;tag&quot;</span>
      [<span class="hljs-attr">optionLabel</span>]=<span class="hljs-string">&quot;name&quot;</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;locale&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;form-label&quot;</span> <span class="hljs-attr">for</span>=<span class="hljs-string">&quot;locale-date&quot;</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-date-input</span>
      <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;locale-date&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Date&quot;</span>
      [<span class="hljs-attr">month</span>]=<span class="hljs-string">&quot;month&quot;</span>
      [<span class="hljs-attr">locale</span>]=<span class="hljs-string">&quot;locale() ?? &#x27;en-US&#x27;&quot;</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;date&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-calendar</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Calendar&quot;</span>
      [<span class="hljs-attr">month</span>]=<span class="hljs-string">&quot;month&quot;</span>
      [<span class="hljs-attr">locale</span>]=<span class="hljs-string">&quot;locale() ?? &#x27;en-US&#x27;&quot;</span>
      [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;date&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsCalendar, NgsDate, NgsDateInput } from '@bootlace/core/datepicker';
import { NgsSelect } from '@bootlace/core/select';

interface Locale {
  tag: string;
  name: string;
}

@Component({
  selector: 'docs-datepicker-locale',
  imports: [NgsCalendar, NgsDateInput, NgsSelect],
  templateUrl: './index.html',
})
export class DatepickerLocaleExample {
  protected readonly locales: Locale[] = [
    { tag: 'en-US', name: 'English (US)' },
    { tag: 'en-GB', name: 'English (UK)' },
    { tag: 'de', name: 'Deutsch' },
    { tag: 'fr', name: 'Fran\xE7ais' },
    { tag: 'ja', name: '\u65E5\u672C\u8A9E' },
    { tag: 'sv', name: 'Svenska' },
  ];
  protected readonly locale = signal<string | null>('de');
  protected readonly month: NgsDate = { year: 2026, month: 10, day: 1 };
  protected readonly date = signal<NgsDate | null>({ year: 2026, month: 10, day: 29 });

  protected readonly tag = (locale: Locale) => locale.tag;
  protected readonly name = (locale: Locale) => locale.name;
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCalendar</span>, <span class="hljs-title class_">NgsDate</span>, <span class="hljs-title class_">NgsDateInput</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/datepicker&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsSelect</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/select&#x27;</span>;

<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Locale</span> {
  <span class="hljs-attr">tag</span>: <span class="hljs-built_in">string</span>;
  <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span>;
}

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-datepicker-locale&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCalendar</span>, <span class="hljs-title class_">NgsDateInput</span>, <span class="hljs-title class_">NgsSelect</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DatepickerLocaleExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">locales</span>: <span class="hljs-title class_">Locale</span>[] = [
    { <span class="hljs-attr">tag</span>: <span class="hljs-string">&#x27;en-US&#x27;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;English (US)&#x27;</span> },
    { <span class="hljs-attr">tag</span>: <span class="hljs-string">&#x27;en-GB&#x27;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;English (UK)&#x27;</span> },
    { <span class="hljs-attr">tag</span>: <span class="hljs-string">&#x27;de&#x27;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Deutsch&#x27;</span> },
    { <span class="hljs-attr">tag</span>: <span class="hljs-string">&#x27;fr&#x27;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Fran\xE7ais&#x27;</span> },
    { <span class="hljs-attr">tag</span>: <span class="hljs-string">&#x27;ja&#x27;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;\u65E5\u672C\u8A9E&#x27;</span> },
    { <span class="hljs-attr">tag</span>: <span class="hljs-string">&#x27;sv&#x27;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;Svenska&#x27;</span> },
  ];
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> locale = signal&lt;<span class="hljs-built_in">string</span> | <span class="hljs-literal">null</span>&gt;(<span class="hljs-string">&#x27;de&#x27;</span>);
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">month</span>: <span class="hljs-title class_">NgsDate</span> = { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">1</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> date = signal&lt;<span class="hljs-title class_">NgsDate</span> | <span class="hljs-literal">null</span>&gt;({ <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">29</span> });

  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> tag = <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">locale</span>: <span class="hljs-title class_">Locale</span></span>) =&gt;</span> locale.<span class="hljs-property">tag</span>;
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> name = <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">locale</span>: <span class="hljs-title class_">Locale</span></span>) =&gt;</span> locale.<span class="hljs-property">name</span>;
}`}},range:{html:{code:`<div class="row g-3 align-items-start">
  <div class="col-12 md:col-6">
    <ngs-calendar range label="Stay" [month]="month" [(value)]="stay" />
  </div>
  <div class="col-12 md:col-6">
    <p class="mb-0" aria-live="polite">
      Selected: <code>{{ stay() | json }}</code>
    </p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3 align-items-start&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-calendar</span> <span class="hljs-attr">range</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Stay&quot;</span> [<span class="hljs-attr">month</span>]=<span class="hljs-string">&quot;month&quot;</span> [(<span class="hljs-attr">value</span>)]=<span class="hljs-string">&quot;stay&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 md:col-6&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span> <span class="hljs-attr">aria-live</span>=<span class="hljs-string">&quot;polite&quot;</span>&gt;</span>
      Selected: <span class="hljs-tag">&lt;<span class="hljs-name">code</span>&gt;</span>{{ stay() | json }}<span class="hljs-tag">&lt;/<span class="hljs-name">code</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NgsCalendar, NgsDate, NgsDateRange } from '@bootlace/core/datepicker';

@Component({
  selector: 'docs-datepicker-range',
  imports: [NgsCalendar, JsonPipe],
  templateUrl: './index.html',
})
export class DatepickerRangeExample {
  protected readonly month: NgsDate = { year: 2026, month: 10, day: 1 };
  protected readonly stay = signal<NgsDateRange | null>({
    start: { year: 2026, month: 10, day: 12 },
    end: { year: 2026, month: 10, day: 16 },
  });
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">JsonPipe</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/common&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCalendar</span>, <span class="hljs-title class_">NgsDate</span>, <span class="hljs-title class_">NgsDateRange</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/datepicker&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-datepicker-range&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCalendar</span>, <span class="hljs-title class_">JsonPipe</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">DatepickerRangeExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> <span class="hljs-attr">month</span>: <span class="hljs-title class_">NgsDate</span> = { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">1</span> };
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> stay = signal&lt;<span class="hljs-title class_">NgsDateRange</span> | <span class="hljs-literal">null</span>&gt;({
    <span class="hljs-attr">start</span>: { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">12</span> },
    <span class="hljs-attr">end</span>: { <span class="hljs-attr">year</span>: <span class="hljs-number">2026</span>, <span class="hljs-attr">month</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">day</span>: <span class="hljs-number">16</span> },
  });
}`}}};var Te=class n{tab=Yn(`examples`);sources=Me;calendar=ua;range=va;limits=fa;input=ya;inputRange=ja;locale=ba;static ɵfac=function(a){return new(a||n)};static ɵcmp=ve({type:n,selectors:[[`docs-datepicker-page`]],inputs:{tab:[1,`tab`]},decls:175,vars:13,consts:[[`heading`,`Datepicker`,`package`,`@bootlace/core/datepicker`,`path`,`/components/datepicker`,3,`tab`],[1,`docs-page-lead`],[`id`,`calendar`,`heading`,`Calendar`,3,`component`,`sources`],[`id`,`range`,`heading`,`Range`,3,`component`,`sources`],[`id`,`limits`,`heading`,`Min, max and unavailable days`,3,`component`,`sources`],[`id`,`input`,`heading`,`Date field`,3,`component`,`sources`],[`id`,`input-range`,`heading`,`Date range field`,3,`component`,`sources`],[`id`,`locale`,`heading`,`Locale`,3,`component`,`sources`],[`aria-labelledby`,`value`,1,`docs-section`],[`id`,`value`,1,`h6`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(a,e){a&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A month calendar and a date field with a calendar popup, after Taiga UI's `),ce(3,`code`),Zf(4,`tui-calendar`),vi(),Zf(5,`, `),ce(6,`code`),Zf(7,`tui-input-date`),vi(),Zf(8,` and `),ce(9,`code`),Zf(10,`tui-input-date-range`),vi(),Zf(11,`. Pick one day or a range, limit the days with `),ce(12,`code`),Zf(13,`min`),vi(),Zf(14,`, `),ce(15,`code`),Zf(16,`max`),vi(),Zf(17,` and `),ce(18,`code`),Zf(19,`disabledDate`),vi(),Zf(20,`, and let `),ce(21,`code`),Zf(22,`locale`),vi(),Zf(23,` set the month and weekday names, the first day of the week and the way dates are typed. `),vi(),ce(24,`docs-example`,2)(25,`code`),Zf(26,`ngs-calendar`),vi(),Zf(27,` is a form control. The month and year buttons open a list of months and a list of years. Today is underlined. Pass `),ce(28,`code`),Zf(29,`month`),vi(),Zf(30,` to choose the month that is on show; without it the calendar opens on the month of the value, or today's month. Pages that are prerendered should set it, so the server and the browser agree. `),vi(),ce(31,`docs-example`,3),Zf(32,` With `),ce(33,`code`),Zf(34,`range`),vi(),Zf(35,` the first click starts the range, hovering (or moving focus to) another day previews it, and the second click completes it, whichever comes first in time. The value only changes when the range is complete. `),vi(),ce(36,`docs-example`,4),Zf(37,` Days before `),ce(38,`code`),Zf(39,`min`),vi(),Zf(40,`, after `),ce(41,`code`),Zf(42,`max`),vi(),Zf(43,` or matched by `),ce(44,`code`),Zf(45,`disabledDate`),vi(),Zf(46,` look dimmed, are marked `),ce(47,`code`),Zf(48,`aria-disabled`),vi(),Zf(49,`, named "unavailable" and cannot be picked. Keyboard focus can still reach them, so a screen reader user finds out why a day is not offered. `),vi(),ce(50,`docs-example`,5)(51,`code`),Zf(52,`ngs-date-input`),vi(),Zf(53,` takes text in the locale's order (here `),ce(54,`code`),Zf(55,`dd/mm/yyyy`),vi(),Zf(56,`) or a pick from the calendar button. It works with reactive forms, `),ce(57,`code`),Zf(58,`ngModel`),vi(),Zf(59,` and `),ce(60,`code`),Zf(61,`[(value)]`),vi(),Zf(62,`, and turns invalid like the other fields: submit the empty form to see it. Text that is not a complete, allowed date leaves the value alone and is replaced by it on blur. `),vi(),ce(63,`docs-example`,6),Zf(64,` With `),ce(65,`code`),Zf(66,`range`),vi(),Zf(67,` the field holds two dates; this one sets `),ce(68,`code`),Zf(69,`locale="en-US"`),vi(),Zf(70,`, so it reads "10/12/2026 – 10/16/2026". The calendar closes when the end is picked. Typed dates that fall outside `),ce(71,`code`),Zf(72,`min`),vi(),Zf(73,`, `),ce(74,`code`),Zf(75,`max`),vi(),Zf(76,` or `),ce(77,`code`),Zf(78,`disabledDate`),vi(),Zf(79,` are ignored. `),vi(),ce(80,`docs-example`,7),Zf(81,` Names come from `),ce(82,`code`),Zf(83,`Intl`),vi(),Zf(84,`; the first day of the week from `),ce(85,`code`),Zf(86,`Intl.Locale`),vi(),Zf(87,` (set `),ce(88,`code`),Zf(89,`firstDayOfWeek`),vi(),Zf(90,` to override); the typed format from `),ce(91,`code`),Zf(92,`Intl.DateTimeFormat`),vi(),Zf(93,`, always with Latin digits and the Gregorian calendar. The default is Angular's `),ce(94,`code`),Zf(95,`LOCALE_ID`),vi(),Zf(96,`. Strings of the component itself, such as "Previous month", come from `),ce(97,`code`),Zf(98,`NgsI18n.datepicker`),vi(),Zf(99,`. `),vi(),ce(100,`section`,8)(101,`h2`,9),Zf(102,`Value type`),vi(),ce(103,`p`),Zf(104,` A day is `),ce(105,`code`),Zf(106,`{ year, month, day }`),vi(),Zf(107,` with `),ce(108,`code`),Zf(109,`month`),vi(),Zf(110,` from 1 to 12 (`),ce(111,`code`),Zf(112,`NgsDate`),vi(),Zf(113,`) and a range is `),ce(114,`code`),Zf(115,`{ start, end }`),vi(),Zf(116,` (`),ce(117,`code`),Zf(118,`NgsDateRange`),vi(),Zf(119,`). It is not a `),ce(120,`code`),Zf(121,`Date`),vi(),Zf(122,`: a `),ce(123,`code`),Zf(124,`Date`),vi(),Zf(125,` at midnight names a different day in another time zone, so a value that is prerendered, saved in a database, or read on a server one zone away would drift by one. A plain object serialises to JSON as it is, and cannot pick up a time of day. Convert at the edge with `),ce(126,`code`),Zf(127,`ngsDateFromJs`),vi(),Zf(128,` and `),ce(129,`code`),Zf(130,`ngsDateToJs`),vi(),Zf(131,`, which use the local zone, and use `),ce(132,`code`),Zf(133,`ngsAddDays`),vi(),Zf(134,`, `),ce(135,`code`),Zf(136,`ngsAddMonths`),vi(),Zf(137,`, `),ce(138,`code`),Zf(139,`ngsCompareDates`),vi(),Zf(140,` and the other `),ce(141,`code`),Zf(142,`ngs*`),vi(),Zf(143,` helpers for the rest. `),vi()(),ce(144,`section`,10)(145,`h2`,11),Zf(146,`Accessibility`),vi(),ce(147,`p`),Zf(148,` The popup follows the WAI-ARIA date picker dialog pattern. The calendar button ("Choose date") has `),ce(149,`code`),Zf(150,`aria-haspopup="dialog"`),vi(),Zf(151,` and `),ce(152,`code`),Zf(153,`aria-expanded`),vi(),Zf(154,` and opens a `),ce(155,`code`),Zf(156,`role="dialog"`),vi(),Zf(157,` that traps Tab and moves focus to the selected, or else today's, day. Escape closes it and returns focus to the field; picking a day does the same. Arrow Down in the text field opens it too. `),vi(),ce(158,`p`),Zf(159,` The days are a `),ce(160,`code`),Zf(161,`role="grid"`),vi(),Zf(162,` named by the month and year, which a polite live region announces as you navigate. Column headers have the full weekday name for screen readers. The days are one tab stop. Arrows move by a day or a week, Home and End to the start and end of the week, Page Up and Page Down by a month, Shift with them by a year; the view follows focus, and the keys swap in right-to-left layouts. Enter or Space picks. Each day is named in full ("Thursday, October 29, 2026"), selected days have `),ce(163,`code`),Zf(164,`aria-selected`),vi(),Zf(165,`, today has `),ce(166,`code`),Zf(167,`aria-current="date"`),vi(),Zf(168,` and unavailable days have `),ce(169,`code`),Zf(170,`aria-disabled`),vi(),Zf(171,` and say "unavailable". In a range, the first click is announced and the end is previewed. Muted text uses `),ce(172,`code`),Zf(173,`--fg-2`),vi(),Zf(174,`, which meets AA. `),vi()()()),a&2&&(Ot(`tab`,e.tab()),Tt(24),Ot(`component`,e.calendar)(`sources`,e.sources.calendar),Tt(7),Ot(`component`,e.range)(`sources`,e.sources.range),Tt(5),Ot(`component`,e.limits)(`sources`,e.sources.limits),Tt(14),Ot(`component`,e.input)(`sources`,e.sources.input),Tt(13),Ot(`component`,e.inputRange)(`sources`,e.sources[`input-range`]),Tt(17),Ot(`component`,e.locale)(`sources`,e.sources.locale))},dependencies:[ue$1,pe],encapsulation:2})};export{Te as DatepickerPage};