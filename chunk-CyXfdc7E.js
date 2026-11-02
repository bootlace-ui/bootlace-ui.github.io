import{A as J4,An as hg,At as W,Br as ui,G as Lr,Gr as vf,Gt as Yn,H as LU,Hn as kf,Jt as Zf,K as MU,L as KC,Ln as jn,Lr as uU,N as JR,Or as sc,Ot as Vm,Pn as jU,Pt as XC,Rn as jo,Tn as gf,Ut as YZ,Vt as Y3,Wr as ve,Yn as lt,Z as Na,Zr as wf,_r as q3,cn as ch,ei as xh,et as Ot,hn as eA,i as $t,kn as hf,mn as dh,mt as So,on as ce,q as Mh,qr as vi,r as $f,xt as Tt,zn as k}from"./chunk-D9kFirzL.js";import{t as o}from"./chunk-D1rBNx9a.js";import"./main-M33NX4WO.js";import{n as ue,t as pe}from"./chunk-C1Csa6NH.js";import{t as N}from"./chunk-DX4JeZih.js";import"./chunk-_QnoVoFv.js";import{t as y}from"./chunk-C5VGU11Q.js";import{t as V}from"./chunk-_RyKDr8k.js";var os=[`*`];function gs(i,e){if(i&1){let n=gf();ce(0,`button`,5),ui(`click`,function(){q3(n);let p=vf();return Y3(p.previous())}),vi()}if(i&2){let n=vf();Ot(`icon`,n.previousIcon)(`label`,n.i18n.carousel.previous)(`disabled`,!n.canPrevious())}}function hs(i,e){if(i&1){let n=gf();ce(0,`button`,5),ui(`click`,function(){q3(n);let p=vf();return Y3(p.next())}),vi()}if(i&2){let n=vf();Ot(`icon`,n.nextIcon)(`label`,n.i18n.carousel.next)(`disabled`,!n.canNext())}}function us(i,e){if(i&1){let n=gf();ce(0,`ngs-pager`,8),ui(`indexChange`,function(p){q3(n);let g=vf(2);return Y3(g.index.set(p))}),vi()}if(i&2){let n=vf(2);Ot(`count`,n.slides().length)(`index`,n.current())(`maxVisible`,n.maxIndicators())}}function ms(i,e){if(i&1){let n=gf();ce(0,`button`,9),ui(`click`,function(){q3(n);let p=vf(2);return Y3(p.toggle())}),vi()}if(i&2){let n=vf(2);Ot(`icon`,n.paused()?n.playIcon:n.pauseIcon)(`label`,n.paused()?n.i18n.carousel.play:n.i18n.carousel.pause)}}function bs(i,e){if(i&1&&(ce(0,`div`,4),KC(1,us,1,3,`ngs-pager`,6),KC(2,ms,1,2,`button`,7),vi()),i&2){let n=vf();Tt(),XC(n.indicators()?1:-1),Tt(),XC(n.autoplay()?2:-1)}}var d=class i{carousel=k(sc(()=>u));i18n=k(o);position=jo(()=>this.carousel.slides().indexOf(this));active=jo(()=>this.position()===this.carousel.current());label=jo(()=>this.i18n.carousel.slide.replace(`{index}`,String(this.position()+1)).replace(`{count}`,String(this.carousel.slides().length)));static ɵfac=function(n){return new(n||i)};static ɵcmp=ve({type:i,selectors:[[`ngs-slide`]],hostAttrs:[`role`,`group`,`aria-roledescription`,`slide`,1,`ngs-slide`],hostVars:4,hostBindings:function(n,t){n&2&&(Lr(`aria-label`,t.label())(`inert`,t.active()?null:``),dh(`active`,t.active()))},ngContentSelectors:os,decls:1,vars:0,template:function(n,t){n&1&&(kf(),hf(0))},encapsulation:2})};var u=class i{i18n=k(o);animation=k(N).animation;element=k(So).nativeElement;browser=YZ(k(lt));swipe=null;previousIcon=uU;nextIcon=LU;pauseIcon=jU;playIcon=MU;index=JR(0);label=Yn();wrap=Yn(!0,{transform:$t});interval=Yn(0,{transform:e=>Math.max(Vm(e,0),0)});pauseOnHover=Yn(!0,{transform:$t});pauseOnFocus=Yn(!0,{transform:$t});paused=JR(!1);transition=Yn(`slide`);arrows=Yn(!0,{transform:$t});indicators=Yn(!0,{transform:$t});maxIndicators=Yn(5,{transform:e=>Vm(e,5)});swipeThreshold=Yn(40,{transform:e=>Vm(e,40)});slides=eA(sc(()=>d));hovered=W(!1);focused=W(!1);current=jo(()=>Math.min(Math.max(this.index(),0),Math.max(this.slides().length-1,0)));autoplay=jo(()=>this.interval()>0&&this.slides().length>1);canPrevious=jo(()=>this.wrap()||this.current()>0);canNext=jo(()=>this.wrap()||this.current()<this.slides().length-1);rotating=jo(()=>this.autoplay()&&!this.paused()&&!(this.pauseOnHover()&&this.hovered())&&!(this.pauseOnFocus()&&this.focused()));constructor(){if(this.browser&&typeof matchMedia==`function`){let e=matchMedia(`(prefers-reduced-motion: reduce)`),n=t=>{t.matches&&this.paused.set(!0)};n(e),e.addEventListener?.(`change`,n),k(jn).onDestroy(()=>e.removeEventListener?.(`change`,n))}J4(e=>{if(!this.browser||!this.rotating()||!this.canNext())return;this.current();let n=setTimeout(()=>this.next(),this.interval());e(()=>clearTimeout(n))})}previous(){this.go(this.current()-1)}next(){this.go(this.current()+1)}toggle(){let e=this.paused();this.paused.set(!e),e&&(this.hovered.set(!1),this.focused.set(!1))}go(e){let n=this.slides().length;n!==0&&this.index.set(this.wrap()?(e+n)%n:Math.min(Math.max(e,0),n-1))}keydown(e){if(e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.key!==`ArrowLeft`&&e.key!==`ArrowRight`)return;let n=e.target;n.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||(e.preventDefault(),this.step(e.key===`ArrowRight`?1:-1))}focusout(e){this.element.contains(e.relatedTarget)||this.focused.set(!1)}swipeStart(e){this.swipe=e.pointerType===`mouse`||!e.isPrimary?null:{x:e.clientX,y:e.clientY}}swipeEnd(e){let n=this.swipe;if(this.swipe=null,!n)return;let t=e.clientX-n.x,p=e.clientY-n.y;Math.abs(t)<this.swipeThreshold()||Math.abs(t)<Math.abs(p)||this.step(t<0?1:-1)}swipeCancel(){this.swipe=null}step(e){let n=this.browser&&getComputedStyle(this.element).direction===`rtl`;this.go(this.current()+(n?-e:e))}static ɵfac=function(n){return new(n||i)};static ɵcmp=ve({type:i,selectors:[[`ngs-carousel`]],contentQueries:function(n,t,p){n&1&&ch(p,t.slides,d,4),n&2&&wf()},hostAttrs:[`role`,`region`,`aria-roledescription`,`carousel`,1,`ngs-carousel`],hostVars:7,hostBindings:function(n,t){n&1&&ui(`keydown`,function(g){return t.keydown(g)})(`mouseenter`,function(){return t.hovered.set(!0)})(`mouseleave`,function(){return t.hovered.set(!1)})(`focusin`,function(){return t.focused.set(!0)})(`focusout`,function(g){return t.focusout(g)}),n&2&&(Lr(`aria-label`,t.label()??t.i18n.carousel.label),dh(`ngs-carousel-fade`,t.transition()===`fade`)(`ngs-carousel-static`,!t.animation)(`ngs-carousel-playing`,t.rotating()))},inputs:{index:[1,`index`],label:[1,`label`],wrap:[1,`wrap`],interval:[1,`interval`],pauseOnHover:[1,`pauseOnHover`],pauseOnFocus:[1,`pauseOnFocus`],paused:[1,`paused`],transition:[1,`transition`],arrows:[1,`arrows`],indicators:[1,`indicators`],maxIndicators:[1,`maxIndicators`],swipeThreshold:[1,`swipeThreshold`]},outputs:{index:`indexChange`,paused:`pausedChange`},ngContentSelectors:os,decls:7,vars:6,consts:[[1,`ngs-carousel-main`],[`ngsIconButton`,``,`type`,`button`,`variant`,`text`,1,`ngs-carousel-arrow`,3,`icon`,`label`,`disabled`],[1,`ngs-carousel-viewport`,3,`pointerdown`,`pointerup`,`pointercancel`],[1,`ngs-carousel-track`],[1,`ngs-carousel-footer`],[`ngsIconButton`,``,`type`,`button`,`variant`,`text`,1,`ngs-carousel-arrow`,3,`click`,`icon`,`label`,`disabled`],[`interactive`,``,3,`count`,`index`,`maxVisible`],[`ngsIconButton`,``,`type`,`button`,`variant`,`text`,`size`,`sm`,1,`ngs-carousel-toggle`,3,`icon`,`label`],[`interactive`,``,3,`indexChange`,`count`,`index`,`maxVisible`],[`ngsIconButton`,``,`type`,`button`,`variant`,`text`,`size`,`sm`,1,`ngs-carousel-toggle`,3,`click`,`icon`,`label`]],template:function(n,t){n&1&&(kf(),ce(0,`div`,0),KC(1,gs,1,3,`button`,1),ce(2,`div`,2),ui(`pointerdown`,function(g){return t.swipeStart(g)})(`pointerup`,function(g){return t.swipeEnd(g)})(`pointercancel`,function(){return t.swipeCancel()}),ce(3,`div`,3),hf(4),vi()(),KC(5,hs,1,3,`button`,1),vi(),KC(6,bs,3,2,`div`,4)),n&2&&(Tt(),XC(t.arrows()?1:-1),Tt(),Lr(`aria-live`,t.rotating()?`off`:`polite`),Tt(),Na(`--%NS%ngs-carousel-index`,t.current()),Tt(2),XC(t.arrows()?5:-1),Tt(),XC(t.indicators()||t.autoplay()?6:-1))},dependencies:[y,V],encapsulation:2})};var M=class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=ve({type:i,selectors:[[`docs-carousel-autoplay`]],decls:15,vars:1,consts:[[1,`row`,`g-3`],[1,`col-12`,`lg:col-8`],[`label`,`Autoplay carousel`,3,`interval`],[1,`slide`]],template:function(n,t){n&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-carousel`,2)(3,`ngs-slide`)(4,`div`,3),Zf(5,`Slide 1`),vi()(),ce(6,`ngs-slide`)(7,`div`,3),Zf(8,`Slide 2`),vi()(),ce(9,`ngs-slide`)(10,`div`,3),Zf(11,`Slide 3`),vi()(),ce(12,`ngs-slide`)(13,`div`,3),Zf(14,`Slide 4`),vi()()()()()),n&2&&(Tt(2),Ot(`interval`,4e3))},dependencies:[u,d],styles:[`.slide[_ngcontent-%COMP%]{display:flex;align-items:flex-end;min-block-size:11rem;padding:1rem 1.25rem;font-weight:800;color:var(--%NS%fg-body)}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+1)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%primary-bg) 28%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%info-bg) 22%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+2)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%success-bg) 28%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%info-bg) 22%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+3)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%warning-bg) 30%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%danger-bg) 20%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%danger-bg) 24%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%primary-bg) 24%,var(--%NS%bg-body)))}`]})};var P=class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=ve({type:i,selectors:[[`docs-carousel-basic`]],decls:15,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`lg:col-8`],[`label`,`Basic carousel`],[1,`slide`]],template:function(n,t){n&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-carousel`,2)(3,`ngs-slide`)(4,`div`,3),Zf(5,`Slide 1`),vi()(),ce(6,`ngs-slide`)(7,`div`,3),Zf(8,`Slide 2`),vi()(),ce(9,`ngs-slide`)(10,`div`,3),Zf(11,`Slide 3`),vi()(),ce(12,`ngs-slide`)(13,`div`,3),Zf(14,`Slide 4`),vi()()()()())},dependencies:[u,d],styles:[`.slide[_ngcontent-%COMP%]{display:flex;align-items:flex-end;min-block-size:11rem;padding:1rem 1.25rem;font-weight:800;color:var(--%NS%fg-body)}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+1)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%primary-bg) 28%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%info-bg) 22%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+2)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%success-bg) 28%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%info-bg) 22%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+3)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%warning-bg) 30%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%danger-bg) 20%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%danger-bg) 24%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%primary-bg) 24%,var(--%NS%bg-body)))}`]})};var O=class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=ve({type:i,selectors:[[`docs-carousel-captions`]],decls:24,vars:0,consts:[[1,`row`,`g-3`],[1,`col-12`,`lg:col-8`],[`label`,`Carousel with captions`,`transition`,`fade`],[1,`slide`],[1,`h5`,`mb-1`],[1,`fw-normal`,`mb-0`]],template:function(n,t){n&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-carousel`,2)(3,`ngs-slide`)(4,`div`,3)(5,`div`)(6,`h3`,4),Zf(7,`Slide 1 title`),vi(),ce(8,`p`,5),Zf(9,`A short caption describing slide 1.`),vi()()()(),ce(10,`ngs-slide`)(11,`div`,3)(12,`div`)(13,`h3`,4),Zf(14,`Slide 2 title`),vi(),ce(15,`p`,5),Zf(16,`A short caption describing slide 2.`),vi()()()(),ce(17,`ngs-slide`)(18,`div`,3)(19,`div`)(20,`h3`,4),Zf(21,`Slide 3 title`),vi(),ce(22,`p`,5),Zf(23,`A short caption describing slide 3.`),vi()()()()()()())},dependencies:[u,d],styles:[`.slide[_ngcontent-%COMP%]{display:flex;align-items:flex-end;min-block-size:11rem;padding:1rem 1.25rem;font-weight:800;color:var(--%NS%fg-body)}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+1)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%primary-bg) 28%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%info-bg) 22%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+2)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%success-bg) 28%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%info-bg) 22%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+3)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%warning-bg) 30%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%danger-bg) 20%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%danger-bg) 24%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%primary-bg) 24%,var(--%NS%bg-body)))}`]})};var D=class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=ve({type:i,selectors:[[`docs-carousel-indicators`]],decls:27,vars:1,consts:[[1,`row`,`g-3`],[1,`col-12`,`lg:col-8`],[`label`,`Carousel with three dots`,3,`maxIndicators`],[1,`slide`]],template:function(n,t){n&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-carousel`,2)(3,`ngs-slide`)(4,`div`,3),Zf(5,`Slide 1`),vi()(),ce(6,`ngs-slide`)(7,`div`,3),Zf(8,`Slide 2`),vi()(),ce(9,`ngs-slide`)(10,`div`,3),Zf(11,`Slide 3`),vi()(),ce(12,`ngs-slide`)(13,`div`,3),Zf(14,`Slide 4`),vi()(),ce(15,`ngs-slide`)(16,`div`,3),Zf(17,`Slide 5`),vi()(),ce(18,`ngs-slide`)(19,`div`,3),Zf(20,`Slide 6`),vi()(),ce(21,`ngs-slide`)(22,`div`,3),Zf(23,`Slide 7`),vi()(),ce(24,`ngs-slide`)(25,`div`,3),Zf(26,`Slide 8`),vi()()()()()),n&2&&(Tt(2),Ot(`maxIndicators`,3))},dependencies:[u,d],styles:[`.slide[_ngcontent-%COMP%]{display:flex;align-items:flex-end;min-block-size:11rem;padding:1rem 1.25rem;font-weight:800;color:var(--%NS%fg-body)}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+1)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%primary-bg) 28%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%info-bg) 22%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+2)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%success-bg) 28%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%info-bg) 22%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+3)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%warning-bg) 30%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%danger-bg) 20%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%danger-bg) 24%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%primary-bg) 24%,var(--%NS%bg-body)))}`]})};var I=class i{index=W(0);static ɵfac=function(n){return new(n||i)};static ɵcmp=ve({type:i,selectors:[[`docs-carousel-no-wrap`]],decls:18,vars:3,consts:[[1,`row`,`g-3`],[1,`col-12`,`lg:col-8`],[`label`,`Carousel without wrap`,3,`indexChange`,`index`,`wrap`],[1,`slide`],[1,`col-12`],[1,`mb-0`]],template:function(n,t){n&1&&(ce(0,`div`,0)(1,`div`,1)(2,`ngs-carousel`,2),xh(`indexChange`,function(g){return $f(t.index,g)||(t.index=g),g}),ce(3,`ngs-slide`)(4,`div`,3),Zf(5,`Slide 1`),vi()(),ce(6,`ngs-slide`)(7,`div`,3),Zf(8,`Slide 2`),vi()(),ce(9,`ngs-slide`)(10,`div`,3),Zf(11,`Slide 3`),vi()(),ce(12,`ngs-slide`)(13,`div`,3),Zf(14,`Slide 4`),vi()()()(),ce(15,`div`,4)(16,`p`,5),Zf(17),vi()()()),n&2&&(Tt(2),Mh(`index`,t.index),Ot(`wrap`,!1),Tt(15),hg(`Slide `,t.index()+1,` of 4`))},dependencies:[u,d],styles:[`.slide[_ngcontent-%COMP%]{display:flex;align-items:flex-end;min-block-size:11rem;padding:1rem 1.25rem;font-weight:800;color:var(--%NS%fg-body)}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+1)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%primary-bg) 28%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%info-bg) 22%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+2)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%success-bg) 28%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%info-bg) 22%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n+3)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%warning-bg) 30%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%danger-bg) 20%,var(--%NS%bg-body)))}ngs-slide[_ngcontent-%COMP%]:nth-child(4n)   .slide[_ngcontent-%COMP%]{background:linear-gradient(135deg,color-mix(in srgb,var(--%NS%danger-bg) 24%,var(--%NS%bg-body)),color-mix(in srgb,var(--%NS%primary-bg) 24%,var(--%NS%bg-body)))}`]})};var cs={autoplay:{html:{code:`<div class="row g-3">
  <div class="col-12 lg:col-8">
    <ngs-carousel label="Autoplay carousel" [interval]="4000">
      <ngs-slide><div class="slide">Slide 1</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 2</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 3</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 4</div></ngs-slide>
    </ngs-carousel>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-carousel</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Autoplay carousel&quot;</span> [<span class="hljs-attr">interval</span>]=<span class="hljs-string">&quot;4000&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-carousel</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsCarousel, NgsSlide } from '@bootlace/core/carousel';

@Component({
  selector: 'docs-carousel-autoplay',
  imports: [NgsCarousel, NgsSlide],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class CarouselAutoplayExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCarousel</span>, <span class="hljs-title class_">NgsSlide</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/carousel&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-carousel-autoplay&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCarousel</span>, <span class="hljs-title class_">NgsSlide</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./index.scss&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CarouselAutoplayExample</span> {}`},scss:{code:`.slide {
  display: flex;
  align-items: flex-end;
  min-block-size: 11rem;
  padding: 1rem 1.25rem;
  font-weight: 800;
  color: var(--fg-body);
}

ngs-slide:nth-child(4n + 1) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--primary-bg) 28%, var(--bg-body)),
    color-mix(in srgb, var(--info-bg) 22%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n + 2) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--success-bg) 28%, var(--bg-body)),
    color-mix(in srgb, var(--info-bg) 22%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n + 3) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--warning-bg) 30%, var(--bg-body)),
    color-mix(in srgb, var(--danger-bg) 20%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--danger-bg) 24%, var(--bg-body)),
    color-mix(in srgb, var(--primary-bg) 24%, var(--bg-body))
  );
}`,html:`<span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: flex-end;
  <span class="hljs-attribute">min-block-size</span>: <span class="hljs-number">11rem</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1.25rem</span>;
  <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">800</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--fg-body);
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">1</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--primary-bg) <span class="hljs-number">28%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--info-bg) <span class="hljs-number">22%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">2</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--success-bg) <span class="hljs-number">28%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--info-bg) <span class="hljs-number">22%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">3</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--warning-bg) <span class="hljs-number">30%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--danger-bg) <span class="hljs-number">20%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--danger-bg) <span class="hljs-number">24%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--primary-bg) <span class="hljs-number">24%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}`}},basic:{html:{code:`<div class="row g-3">
  <div class="col-12 lg:col-8">
    <ngs-carousel label="Basic carousel">
      <ngs-slide><div class="slide">Slide 1</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 2</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 3</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 4</div></ngs-slide>
    </ngs-carousel>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-carousel</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Basic carousel&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-carousel</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsCarousel, NgsSlide } from '@bootlace/core/carousel';

@Component({
  selector: 'docs-carousel-basic',
  imports: [NgsCarousel, NgsSlide],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class CarouselBasicExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCarousel</span>, <span class="hljs-title class_">NgsSlide</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/carousel&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-carousel-basic&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCarousel</span>, <span class="hljs-title class_">NgsSlide</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./index.scss&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CarouselBasicExample</span> {}`},scss:{code:`.slide {
  display: flex;
  align-items: flex-end;
  min-block-size: 11rem;
  padding: 1rem 1.25rem;
  font-weight: 800;
  color: var(--fg-body);
}

ngs-slide:nth-child(4n + 1) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--primary-bg) 28%, var(--bg-body)),
    color-mix(in srgb, var(--info-bg) 22%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n + 2) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--success-bg) 28%, var(--bg-body)),
    color-mix(in srgb, var(--info-bg) 22%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n + 3) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--warning-bg) 30%, var(--bg-body)),
    color-mix(in srgb, var(--danger-bg) 20%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--danger-bg) 24%, var(--bg-body)),
    color-mix(in srgb, var(--primary-bg) 24%, var(--bg-body))
  );
}`,html:`<span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: flex-end;
  <span class="hljs-attribute">min-block-size</span>: <span class="hljs-number">11rem</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1.25rem</span>;
  <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">800</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--fg-body);
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">1</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--primary-bg) <span class="hljs-number">28%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--info-bg) <span class="hljs-number">22%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">2</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--success-bg) <span class="hljs-number">28%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--info-bg) <span class="hljs-number">22%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">3</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--warning-bg) <span class="hljs-number">30%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--danger-bg) <span class="hljs-number">20%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--danger-bg) <span class="hljs-number">24%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--primary-bg) <span class="hljs-number">24%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}`}},captions:{html:{code:`<div class="row g-3">
  <div class="col-12 lg:col-8">
    <ngs-carousel label="Carousel with captions" transition="fade">
      <ngs-slide>
        <div class="slide">
          <div>
            <h3 class="h5 mb-1">Slide 1 title</h3>
            <p class="fw-normal mb-0">A short caption describing slide 1.</p>
          </div>
        </div>
      </ngs-slide>
      <ngs-slide>
        <div class="slide">
          <div>
            <h3 class="h5 mb-1">Slide 2 title</h3>
            <p class="fw-normal mb-0">A short caption describing slide 2.</p>
          </div>
        </div>
      </ngs-slide>
      <ngs-slide>
        <div class="slide">
          <div>
            <h3 class="h5 mb-1">Slide 3 title</h3>
            <p class="fw-normal mb-0">A short caption describing slide 3.</p>
          </div>
        </div>
      </ngs-slide>
    </ngs-carousel>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-carousel</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Carousel with captions&quot;</span> <span class="hljs-attr">transition</span>=<span class="hljs-string">&quot;fade&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h5 mb-1&quot;</span>&gt;</span>Slide 1 title<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fw-normal mb-0&quot;</span>&gt;</span>A short caption describing slide 1.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h5 mb-1&quot;</span>&gt;</span>Slide 2 title<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fw-normal mb-0&quot;</span>&gt;</span>A short caption describing slide 2.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;h5 mb-1&quot;</span>&gt;</span>Slide 3 title<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;fw-normal mb-0&quot;</span>&gt;</span>A short caption describing slide 3.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-carousel</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsCarousel, NgsSlide } from '@bootlace/core/carousel';

@Component({
  selector: 'docs-carousel-captions',
  imports: [NgsCarousel, NgsSlide],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class CarouselCaptionsExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCarousel</span>, <span class="hljs-title class_">NgsSlide</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/carousel&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-carousel-captions&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCarousel</span>, <span class="hljs-title class_">NgsSlide</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./index.scss&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CarouselCaptionsExample</span> {}`},scss:{code:`.slide {
  display: flex;
  align-items: flex-end;
  min-block-size: 11rem;
  padding: 1rem 1.25rem;
  font-weight: 800;
  color: var(--fg-body);
}

ngs-slide:nth-child(4n + 1) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--primary-bg) 28%, var(--bg-body)),
    color-mix(in srgb, var(--info-bg) 22%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n + 2) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--success-bg) 28%, var(--bg-body)),
    color-mix(in srgb, var(--info-bg) 22%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n + 3) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--warning-bg) 30%, var(--bg-body)),
    color-mix(in srgb, var(--danger-bg) 20%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--danger-bg) 24%, var(--bg-body)),
    color-mix(in srgb, var(--primary-bg) 24%, var(--bg-body))
  );
}`,html:`<span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: flex-end;
  <span class="hljs-attribute">min-block-size</span>: <span class="hljs-number">11rem</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1.25rem</span>;
  <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">800</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--fg-body);
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">1</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--primary-bg) <span class="hljs-number">28%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--info-bg) <span class="hljs-number">22%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">2</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--success-bg) <span class="hljs-number">28%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--info-bg) <span class="hljs-number">22%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">3</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--warning-bg) <span class="hljs-number">30%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--danger-bg) <span class="hljs-number">20%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--danger-bg) <span class="hljs-number">24%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--primary-bg) <span class="hljs-number">24%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}`}},indicators:{html:{code:`<div class="row g-3">
  <div class="col-12 lg:col-8">
    <ngs-carousel label="Carousel with three dots" [maxIndicators]="3">
      <ngs-slide><div class="slide">Slide 1</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 2</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 3</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 4</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 5</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 6</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 7</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 8</div></ngs-slide>
    </ngs-carousel>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-carousel</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Carousel with three dots&quot;</span> [<span class="hljs-attr">maxIndicators</span>]=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 5<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 7<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-carousel</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component } from '@angular/core';
import { NgsCarousel, NgsSlide } from '@bootlace/core/carousel';

@Component({
  selector: 'docs-carousel-indicators',
  imports: [NgsCarousel, NgsSlide],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class CarouselIndicatorsExample {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCarousel</span>, <span class="hljs-title class_">NgsSlide</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/carousel&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-carousel-indicators&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCarousel</span>, <span class="hljs-title class_">NgsSlide</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./index.scss&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CarouselIndicatorsExample</span> {}`},scss:{code:`.slide {
  display: flex;
  align-items: flex-end;
  min-block-size: 11rem;
  padding: 1rem 1.25rem;
  font-weight: 800;
  color: var(--fg-body);
}

ngs-slide:nth-child(4n + 1) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--primary-bg) 28%, var(--bg-body)),
    color-mix(in srgb, var(--info-bg) 22%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n + 2) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--success-bg) 28%, var(--bg-body)),
    color-mix(in srgb, var(--info-bg) 22%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n + 3) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--warning-bg) 30%, var(--bg-body)),
    color-mix(in srgb, var(--danger-bg) 20%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--danger-bg) 24%, var(--bg-body)),
    color-mix(in srgb, var(--primary-bg) 24%, var(--bg-body))
  );
}`,html:`<span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: flex-end;
  <span class="hljs-attribute">min-block-size</span>: <span class="hljs-number">11rem</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1.25rem</span>;
  <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">800</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--fg-body);
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">1</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--primary-bg) <span class="hljs-number">28%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--info-bg) <span class="hljs-number">22%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">2</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--success-bg) <span class="hljs-number">28%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--info-bg) <span class="hljs-number">22%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">3</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--warning-bg) <span class="hljs-number">30%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--danger-bg) <span class="hljs-number">20%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--danger-bg) <span class="hljs-number">24%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--primary-bg) <span class="hljs-number">24%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}`}},"no-wrap":{html:{code:`<div class="row g-3">
  <div class="col-12 lg:col-8">
    <ngs-carousel label="Carousel without wrap" [(index)]="index" [wrap]="false">
      <ngs-slide><div class="slide">Slide 1</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 2</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 3</div></ngs-slide>
      <ngs-slide><div class="slide">Slide 4</div></ngs-slide>
    </ngs-carousel>
  </div>
  <div class="col-12">
    <p class="mb-0">Slide {{ index() + 1 }} of 4</p>
  </div>
</div>`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;row g-3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12 lg:col-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">ngs-carousel</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Carousel without wrap&quot;</span> [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;index&quot;</span> [<span class="hljs-attr">wrap</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">ngs-slide</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;slide&quot;</span>&gt;</span>Slide 4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ngs-slide</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ngs-carousel</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;col-12&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mb-0&quot;</span>&gt;</span>Slide {{ index() + 1 }} of 4<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>`},ts:{code:`import { Component, signal } from '@angular/core';
import { NgsCarousel, NgsSlide } from '@bootlace/core/carousel';

@Component({
  selector: 'docs-carousel-no-wrap',
  imports: [NgsCarousel, NgsSlide],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class CarouselNoWrapExample {
  protected readonly index = signal(0);
}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span>, signal } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsCarousel</span>, <span class="hljs-title class_">NgsSlide</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/carousel&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;docs-carousel-no-wrap&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsCarousel</span>, <span class="hljs-title class_">NgsSlide</span>],
  <span class="hljs-attr">templateUrl</span>: <span class="hljs-string">&#x27;./index.html&#x27;</span>,
  <span class="hljs-attr">styleUrl</span>: <span class="hljs-string">&#x27;./index.scss&#x27;</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">CarouselNoWrapExample</span> {
  <span class="hljs-keyword">protected</span> <span class="hljs-keyword">readonly</span> index = <span class="hljs-title function_">signal</span>(<span class="hljs-number">0</span>);
}`},scss:{code:`.slide {
  display: flex;
  align-items: flex-end;
  min-block-size: 11rem;
  padding: 1rem 1.25rem;
  font-weight: 800;
  color: var(--fg-body);
}

ngs-slide:nth-child(4n + 1) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--primary-bg) 28%, var(--bg-body)),
    color-mix(in srgb, var(--info-bg) 22%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n + 2) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--success-bg) 28%, var(--bg-body)),
    color-mix(in srgb, var(--info-bg) 22%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n + 3) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--warning-bg) 30%, var(--bg-body)),
    color-mix(in srgb, var(--danger-bg) 20%, var(--bg-body))
  );
}

ngs-slide:nth-child(4n) .slide {
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--danger-bg) 24%, var(--bg-body)),
    color-mix(in srgb, var(--primary-bg) 24%, var(--bg-body))
  );
}`,html:`<span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">display</span>: flex;
  <span class="hljs-attribute">align-items</span>: flex-end;
  <span class="hljs-attribute">min-block-size</span>: <span class="hljs-number">11rem</span>;
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">1rem</span> <span class="hljs-number">1.25rem</span>;
  <span class="hljs-attribute">font-weight</span>: <span class="hljs-number">800</span>;
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--fg-body);
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">1</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--primary-bg) <span class="hljs-number">28%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--info-bg) <span class="hljs-number">22%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">2</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--success-bg) <span class="hljs-number">28%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--info-bg) <span class="hljs-number">22%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n + <span class="hljs-number">3</span>) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--warning-bg) <span class="hljs-number">30%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--danger-bg) <span class="hljs-number">20%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}

ngs-slide<span class="hljs-selector-pseudo">:nth-child</span>(<span class="hljs-number">4</span>n) <span class="hljs-selector-class">.slide</span> {
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(
    <span class="hljs-number">135deg</span>,
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--danger-bg) <span class="hljs-number">24%</span>, <span class="hljs-built_in">var</span>(--bg-body)),
    <span class="hljs-built_in">color-mix</span>(in srgb, <span class="hljs-built_in">var</span>(--primary-bg) <span class="hljs-number">24%</span>, <span class="hljs-built_in">var</span>(--bg-body))
  );
}`}}};var ds=class i{tab=Yn(`examples`);sources=cs;basic=P;captions=O;autoplay=M;noWrap=I;indicators=D;static ɵfac=function(n){return new(n||i)};static ɵcmp=ve({type:i,selectors:[[`docs-carousel-page`]],inputs:{tab:[1,`tab`]},decls:107,vars:11,consts:[[`heading`,`Carousel`,`package`,`@bootlace/core/carousel`,`path`,`/components/carousel`,3,`tab`],[1,`docs-page-lead`],[`id`,`basic`,`heading`,`Basic`,3,`component`,`sources`],[`id`,`captions`,`heading`,`Captions and fade`,3,`component`,`sources`],[`id`,`autoplay`,`heading`,`Autoplay`,3,`component`,`sources`],[`id`,`no-wrap`,`heading`,`No wrap`,3,`component`,`sources`],[`id`,`indicators`,`heading`,`Indicator count`,3,`component`,`sources`],[`aria-labelledby`,`accessibility`,1,`docs-section`],[`id`,`accessibility`,1,`h6`]],template:function(n,t){n&1&&(ce(0,`docs-component-page`,0)(1,`p`,1),Zf(2,` A slideshow of `),ce(3,`code`),Zf(4,`ngs-slide`),vi(),Zf(5,` children, with Bootstrap's behaviour (wrapping, autoplay, pause on hover and focus, keyboard and touch) and the look of Taiga UI's Carousel: quiet arrows either side and `),ce(6,`code`),Zf(7,`ngs-pager`),vi(),Zf(8,` dots underneath. The current slide is `),ce(9,`code`),Zf(10,`[(index)]`),vi(),Zf(11,`, starting at 0. `),vi(),ce(12,`docs-example`,2),Zf(13,` Put one `),ce(14,`code`),Zf(15,`ngs-slide`),vi(),Zf(16,` per slide inside `),ce(17,`code`),Zf(18,`ngs-carousel`),vi(),Zf(19,`. Slides are plain elements, so their content is in the page from the start and is not created by a template outlet. The arrows, the dots, the Left and Right arrow keys while focus is inside, and a horizontal swipe on touch screens all move between slides. `),vi(),ce(20,`docs-example`,3),Zf(21,` Slide content is yours: images, text or both. `),ce(22,`code`),Zf(23,`transition="fade"`),vi(),Zf(24,` cross-fades instead of sliding. The slides here are CSS gradients; for an image slide use an `),ce(25,`code`),Zf(26,`<img>`),vi(),Zf(27,` with a real `),ce(28,`code`),Zf(29,`alt`),vi(),Zf(30,`, or an empty one if it is decoration. `),vi(),ce(31,`docs-example`,4)(32,`code`),Zf(33,`interval`),vi(),Zf(34,` is the time in milliseconds each slide stays; `),ce(35,`code`),Zf(36,`0`),vi(),Zf(37,`, the default, turns autoplay off. A pause and play button appears next to the dots, and `),ce(38,`code`),Zf(39,`[(paused)]`),vi(),Zf(40,` reads and sets it. Autoplay also waits while the pointer is over the carousel or focus is inside it; turn that off with `),ce(41,`code`),Zf(42,`pauseOnHover`),vi(),Zf(43,` and `),ce(44,`code`),Zf(45,`pauseOnFocus`),vi(),Zf(46,`. `),vi(),ce(47,`docs-example`,5)(48,`code`),Zf(49,`[wrap]="false"`),vi(),Zf(50,` stops at the first and last slide: the arrow that cannot go any further is disabled, and autoplay stops on the last slide. `),vi(),ce(51,`docs-example`,6),Zf(52,` With many slides only `),ce(53,`code`),Zf(54,`maxIndicators`),vi(),Zf(55,` dots (default 5) are drawn. The window follows the current slide and the outermost dots shrink where more continue. Hide the arrows or the dots with `),ce(56,`code`),Zf(57,`[arrows]="false"`),vi(),Zf(58,` and `),ce(59,`code`),Zf(60,`[indicators]="false"`),vi(),Zf(61,`. `),vi(),ce(62,`section`,7)(63,`h2`,8),Zf(64,`Accessibility`),vi(),ce(65,`p`),Zf(66,` The carousel follows the WAI-ARIA carousel pattern. The host is a `),ce(67,`code`),Zf(68,`role="region"`),vi(),Zf(69,` with `),ce(70,`code`),Zf(71,`aria-roledescription="carousel"`),vi(),Zf(72,` and a name from `),ce(73,`code`),Zf(74,`label`),vi(),Zf(75,` (default "Carousel"). Each slide is a `),ce(76,`code`),Zf(77,`role="group"`),vi(),Zf(78,` with `),ce(79,`code`),Zf(80,`aria-roledescription="slide"`),vi(),Zf(81,` named "n of N". Strings come from `),ce(82,`code`),Zf(83,`NGS_I18N.carousel`),vi(),Zf(84,`. `),vi(),ce(85,`p`),Zf(86,` Slides that are not showing are `),ce(87,`code`),Zf(88,`inert`),vi(),Zf(89,`, so links and buttons inside them leave the tab order and screen readers skip them. The arrows are native buttons ("Previous slide", "Next slide"); the dots are the Pager's buttons ("Go to slide n"). `),vi(),ce(90,`p`),Zf(91,` Autoplay always shows a visible pause and play button (WCAG 2.2.2), stops while the pointer or keyboard focus is inside, and sets `),ce(92,`code`),Zf(93,`aria-live="off"`),vi(),Zf(94,` on the slides while rotating and `),ce(95,`code`),Zf(96,`"polite"`),vi(),Zf(97,` when not, so a screen reader announces a change the user made but not every automatic one. Slide and fade animations are switched off by `),ce(98,`code`),Zf(99,`prefers-reduced-motion`),vi(),Zf(100,` and `),ce(101,`code`),Zf(102,`provideNgs({ animation: false })`),vi(),Zf(103,`. With `),ce(104,`code`),Zf(105,`prefers-reduced-motion: reduce`),vi(),Zf(106,` autoplay also starts paused, with the button reading "Play", and pauses if the preference is turned on while the page is open; the user starts it. `),vi()()()),n&2&&(Ot(`tab`,t.tab()),Tt(12),Ot(`component`,t.basic)(`sources`,t.sources.basic),Tt(8),Ot(`component`,t.captions)(`sources`,t.sources.captions),Tt(11),Ot(`component`,t.autoplay)(`sources`,t.sources.autoplay),Tt(16),Ot(`component`,t.noWrap)(`sources`,t.sources[`no-wrap`]),Tt(4),Ot(`component`,t.indicators)(`sources`,t.sources.indicators))},dependencies:[ue,pe],encapsulation:2})};export{ds as CarouselPage};