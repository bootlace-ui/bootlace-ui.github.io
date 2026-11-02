var e={title:`Migration guide`,blocks:[{kind:`html`,html:`<h1>Migration guide</h1>
<p>How to upgrade between releases of <code>@bootlace/core</code> and <code>@bootlace/icons</code>. Every release
with a breaking change gets a section here, newest first, with the steps and before-and-after code.
The <a href="/information/changelog">Changelog</a> lists every change.</p>
<h2 id="before-10"><a href="#before-10">Before 1.0</a></h2>
<p>The 0.x releases are prereleases, published under the <code>next</code> tag. Any 0.x release can change APIs,
so pin an exact version and read this page before you upgrade:</p>
`},{kind:`code`,file:{code:`"dependencies": {
  "@bootlace/core": "0.3.0-next.0",
  "@bootlace/icons": "0.3.0-next.0"
}`,html:`<span class="hljs-attr">&quot;dependencies&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;@bootlace/core&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;0.3.0-next.0&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;@bootlace/icons&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;0.3.0-next.0&quot;</span>
<span class="hljs-punctuation">}</span>`}},{kind:`html`,html:`<p>Run <code>ng update @bootlace/core@next</code> to upgrade both packages and run any automatic
migrations for the release. Doing it by hand, upgrade both together: they are released with the same
version, and each release of <code>@bootlace/core</code> needs the matching <code>@bootlace/icons</code>.</p>
<h2 id="bootstrap-prereleases"><a href="#bootstrap-prereleases">Bootstrap prereleases</a></h2>
<p>Each release is built and tested against one Bootstrap 6 prerelease, currently <code>6.0.0-alpha.1</code>, and
asks for that exact version as a peer dependency. When a release moves to a newer Bootstrap
prerelease, its section here lists the Bootstrap changes that affect you, such as renamed tokens or
classes.</p>
<h2 id="api-freeze"><a href="#api-freeze">API freeze</a></h2>
<p>The public API of every entry point is recorded in <a href="https://github.com/Angular-Bootstrap-Project/angular-bootstrap/tree/main/goldens" target="_blank" rel="noopener">goldens</a>, one text file per entry
point: its exports, component and directive selectors and <code>exportAs</code>, inputs, models and outputs
with their types, defaults and required-ness, public methods and properties, interfaces and types.
CI fails when the API differs from the goldens, and when a new entry point has none. Run
<code>pnpm api:golden</code> to accept a change, then review the diff of <code>goldens/</code> in the pull request.</p>
<p>Until <code>1.0.0-rc.0</code>, goldens change freely. From <code>1.0.0-rc.0</code> on, the API is frozen:</p>
<ul>
<li>A golden change that only adds API (a new input, a new export, a new entry point) is fine and
ships in a minor release.</li>
<li>Anything else (a removed or renamed export, input or method, a narrower type, a new required
input, a changed default) is a breaking change. It needs a <code>BREAKING CHANGE:</code> footer in the
commit, which release-please turns into a changelog entry, and a section under
<a href="#releases">Releases</a> with the steps and before-and-after code. A pull request that changes a
golden without that is not ready to merge.</li>
</ul>
<p>Names follow a few conventions, so the API reads the same across components. A close option is
<code>closable</code> and its label <code>closeLabel</code>; a position model is a 0-based <code>index</code> (the exceptions are
documented where they are: Pagination&#39;s <code>page</code> is 1-based, Table Pagination&#39;s <code>page</code> is 0-based and
Tabs&#39; <code>active</code> takes a value or an index); a dialog&#39;s accessible name options are <code>label</code>,
<code>labelledBy</code> and <code>describedBy</code>; sizes are <code>sm</code>, <code>md</code> and <code>lg</code>. Tooltip and Popover keep
<code>disableTooltip</code> and <code>disablePopover</code>, and Dropdown keeps its <code>ngsDropdown*</code> inputs, on purpose:
those directives sit on the trigger element, often a <code>&lt;button&gt;</code>, and an unprefixed <code>disabled</code>
would disable that button too.</p>
<p>Members that only the library itself needs are not API. They are <code>protected</code>, or public with an
<code>@internal</code> tag in the source, and they are left out of the goldens and of the API reference. Do
not rely on them: they can change in any release, including after <code>1.0.0-rc.0</code>.</p>
<h2 id="releases"><a href="#releases">Releases</a></h2>
<h3 id="050-next9"><a href="#050-next9">0.5.0-next.9</a></h3>
<p><strong>On phones and tablets, modals and dropdown menus open as bottom sheets.</strong> Below 1024px,
Bootstrap&#39;s <code>lg</code> breakpoint, a modal opens as a sheet that slides up from the bottom, and a
dropdown menu opens as an action sheet with large rows and a Cancel button. A swipe down and the
browser&#39;s Back close them. Desktop is unchanged, and no API was removed. To keep the old look,
turn sheets off for the whole app, or for one modal or menu:</p>
`},{kind:`code`,file:{code:`// app.config.ts
providers: [provideNgsSheet({ breakpoint: 0 })]; // or { modals: false } / { menus: false }

// one modal
this.modals.open(EditDialog, { sheet: false });`,html:`<span class="hljs-comment">// app.config.ts</span>
<span class="hljs-attr">providers</span>: [<span class="hljs-title function_">provideNgsSheet</span>({ <span class="hljs-attr">breakpoint</span>: <span class="hljs-number">0</span> })]; <span class="hljs-comment">// or { modals: false } / { menus: false }</span>

<span class="hljs-comment">// one modal</span>
<span class="hljs-variable language_">this</span>.<span class="hljs-property">modals</span>.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">EditDialog</span>, { <span class="hljs-attr">sheet</span>: <span class="hljs-literal">false</span> });`}},{kind:`html`,html:``},{kind:`code`,file:{code:`<!-- one menu -->
<button [ngsDropdown]="menu" [ngsDropdownSheet]="false">Actions</button>`,html:`<span class="hljs-comment">&lt;!-- one menu --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> [<span class="hljs-attr">ngsDropdown</span>]=<span class="hljs-string">&quot;menu&quot;</span> [<span class="hljs-attr">ngsDropdownSheet</span>]=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>Actions<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>`}},{kind:`html`,html:`<p>Opening a sheet adds a browser history entry with the same URL, so Back closes it. Tests that
count history entries, or that call <code>history.back()</code> while a modal or menu is open on a small
viewport, see one more entry.</p>
<h3 id="050-next8"><a href="#050-next8">0.5.0-next.8</a></h3>
<p><strong>The library is renamed bootlace, with the <code>ngs</code> prefix</strong>, so it can&#39;t be confused with
ng-bootstrap, which uses <code>ngb</code>. Earlier releases were published as <code>@ngb-bootstrap/core</code> and
<code>@ngb-bootstrap/icons</code>. There is no automatic migration. Swap the packages, then replace the
prefix across your app:</p>
`},{kind:`code`,file:{code:`npm uninstall @ngb-bootstrap/core @ngb-bootstrap/icons
npm install @bootlace/core@next @bootlace/icons@next`,html:`npm uninstall @ngb-bootstrap/core @ngb-bootstrap/icons
npm install @bootlace/core@next @bootlace/icons@next`}},{kind:`html`,html:`<div class="docs-markdown-table"><table class="table"><thead><tr><th>Before</th><th>After</th></tr></thead><tbody><tr><td><code>@ngb-bootstrap/core</code>, <code>@ngb-bootstrap/icons</code></td><td><code>@bootlace/core</code>, <code>@bootlace/icons</code></td></tr><tr><td><code>@use &quot;@ngb-bootstrap/core/styles&quot;</code></td><td><code>@use &quot;@bootlace/core/styles&quot;</code></td></tr><tr><td>Classes, interfaces, functions: <code>NgbModalService</code></td><td><code>NgsModalService</code></td></tr><tr><td>Providers: <code>provideNgbToast()</code>, <code>mergeNgbI18n()</code></td><td><code>provideNgsToast()</code>, <code>mergeNgsI18n()</code></td></tr><tr><td>Tokens and constants: <code>NGB_I18N</code></td><td><code>NGS_I18N</code></td></tr><tr><td>Selectors and directives: <code>&lt;ngb-alert&gt;</code>, <code>ngbTooltip</code></td><td><code>&lt;ngs-alert&gt;</code>, <code>ngsTooltip</code></td></tr><tr><td>Icons: <code>ngbIconSearch</code></td><td><code>ngsIconSearch</code></td></tr><tr><td>CSS classes and custom properties: <code>.ngb-search</code>, <code>--ngb-*</code></td><td><code>.ngs-search</code>, <code>--ngs-*</code></td></tr></tbody></table></div>
<p>A case-sensitive replace of <code>@ngb-bootstrap/</code> with <code>@bootlace/</code>, then <code>ngb</code> with <code>ngs</code>, <code>Ngb</code> with
<code>Ngs</code> and <code>NGB</code> with <code>NGS</code>, covers it. Check the result if you also use ng-bootstrap, whose names
start with <code>ngb</code> too. Recent searches and favorites saved by <code>&lt;ngs-search&gt;</code> start empty, because
its default <code>storageKey</code> is now <code>ngs-search</code>.</p>
<h3 id="050-next0"><a href="#050-next0">0.5.0-next.0</a></h3>
<p>API cleanup before the API freezes at <code>1.0.0-rc.0</code>: consistent names, no hard-coded English and
fewer public internals. Run <code>ng update @bootlace/core@next</code>: its migration does the renames
in templates (<code>.html</code> files and inline templates), and in toast and modal options written as object
literals, for you. Run it from a clean git working tree and review the diff. What it does not touch
is listed under each item.</p>
<p>Renamed, with the old name still working (deprecated, removed in <code>1.0.0-rc.0</code>):</p>
<p><strong>Notification <code>size</code> is <code>sm</code>, <code>md</code> or <code>lg</code>.</strong> <code>NgsNotificationSize</code> was <code>&#39;s&#39; | &#39;m&#39; | &#39;l&#39;</code>. The
default is <code>lg</code>. The old values are still accepted and mapped, but the type no longer lists them,
so a variable typed <code>NgsNotificationSize</code> that holds <code>&#39;l&#39;</code> needs a new value. The migration renames
static attributes (<code>size=&quot;s&quot;</code>).</p>
`},{kind:`code`,file:{code:`<!-- Before -->
<ngs-notification size="s" closeable>...</ngs-notification>
<!-- After -->
<ngs-notification size="sm" closable>...</ngs-notification>`,html:`<span class="hljs-comment">&lt;!-- Before --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;s&quot;</span> <span class="hljs-attr">closeable</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>
<span class="hljs-comment">&lt;!-- After --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ngs-notification</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;sm&quot;</span> <span class="hljs-attr">closable</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-notification</span>&gt;</span>`}},{kind:`html`,html:`<p><strong><code>closable</code> everywhere.</strong> Notification <code>closeable</code> is <code>closable</code>, and so is Toast&#39;s option
(<code>NgsToastOptions</code>, <code>NGS_TOAST_DEFAULTS</code> and <code>provideNgsToast()</code>). Alert <code>dismissible</code> is <code>closable</code>
and <code>dismissLabel</code> is <code>closeLabel</code>, like Notification&#39;s <code>closeLabel</code>. The old inputs and the
<code>closeable</code> toast option still work. <code>NGS_TOAST_DEFAULTS</code> holds <code>closable</code> now: code that reads the
token and looks at <code>closeable</code> must change.</p>
`},{kind:`code`,file:{code:`// Before
toasts.open('Saved', { closeable: false });
provideNgsToast({ closeable: false });
// After
toasts.open('Saved', { closable: false });
provideNgsToast({ closable: false });`,html:`<span class="hljs-comment">// Before</span>
toasts.<span class="hljs-title function_">open</span>(<span class="hljs-string">&#x27;Saved&#x27;</span>, { <span class="hljs-attr">closeable</span>: <span class="hljs-literal">false</span> });
<span class="hljs-title function_">provideNgsToast</span>({ <span class="hljs-attr">closeable</span>: <span class="hljs-literal">false</span> });
<span class="hljs-comment">// After</span>
toasts.<span class="hljs-title function_">open</span>(<span class="hljs-string">&#x27;Saved&#x27;</span>, { <span class="hljs-attr">closable</span>: <span class="hljs-literal">false</span> });
<span class="hljs-title function_">provideNgsToast</span>({ <span class="hljs-attr">closable</span>: <span class="hljs-literal">false</span> });`}},{kind:`html`,html:``},{kind:`code`,file:{code:`<!-- Before -->
<ngs-alert color="warning" dismissible dismissLabel="Dismiss">...</ngs-alert>
<!-- After -->
<ngs-alert color="warning" closable closeLabel="Dismiss">...</ngs-alert>`,html:`<span class="hljs-comment">&lt;!-- Before --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ngs-alert</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">dismissible</span> <span class="hljs-attr">dismissLabel</span>=<span class="hljs-string">&quot;Dismiss&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-alert</span>&gt;</span>
<span class="hljs-comment">&lt;!-- After --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ngs-alert</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">closable</span> <span class="hljs-attr">closeLabel</span>=<span class="hljs-string">&quot;Dismiss&quot;</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">ngs-alert</span>&gt;</span>`}},{kind:`html`,html:`<p><strong>Modal options <code>label</code>, <code>labelledBy</code> and <code>describedBy</code>.</strong> They replace <code>ariaLabel</code>,
<code>ariaLabelledBy</code> and <code>ariaDescribedBy</code>, as Drawer and the other components name them. The <code>aria*</code>
options still work, and the new ones win when both are set.</p>
`},{kind:`code`,file:{code:`// Before
modals.open(Confirm, { ariaLabelledBy: 'title', ariaDescribedBy: 'text' });
// After
modals.open(Confirm, { labelledBy: 'title', describedBy: 'text' });`,html:`<span class="hljs-comment">// Before</span>
modals.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">Confirm</span>, { <span class="hljs-attr">ariaLabelledBy</span>: <span class="hljs-string">&#x27;title&#x27;</span>, <span class="hljs-attr">ariaDescribedBy</span>: <span class="hljs-string">&#x27;text&#x27;</span> });
<span class="hljs-comment">// After</span>
modals.<span class="hljs-title function_">open</span>(<span class="hljs-title class_">Confirm</span>, { <span class="hljs-attr">labelledBy</span>: <span class="hljs-string">&#x27;title&#x27;</span>, <span class="hljs-attr">describedBy</span>: <span class="hljs-string">&#x27;text&#x27;</span> });`}},{kind:`html`,html:`<p>Breaking, with no alias:</p>
<p><strong>Modal dismiss reasons are <code>&#39;escape&#39;</code> and <code>&#39;backdrop&#39;</code>.</strong> The modal dismisses with the cdk&#39;s
<code>NgsDialogDismissReason</code>, like Drawer, instead of ng-bootstrap&#39;s <code>&#39;Escape key&#39;</code> and
<code>&#39;Backdrop click&#39;</code>. <code>NGS_MODAL_DISMISS_REASONS</code> (deprecated) still exists and holds the new values
(<code>ESC: &#39;escape&#39;</code>, <code>BACKDROP_CLICK: &#39;backdrop&#39;</code>), so code that compares against the constant keeps
working. Code that compares the old literal strings fails silently: change it by hand, the
migration cannot see it. A reason you pass to <code>dismiss()</code> yourself, and the <code>&#39;Close click&#39;</code> of
<code>ngsModalClose</code>, are unchanged.</p>
`},{kind:`code`,file:{code:`// Before
ref.dismissed.subscribe((reason) => {
  if (reason === 'Backdrop click') warn();
});
// After
ref.dismissed.subscribe((reason) => {
  if (reason === 'backdrop') warn();
});`,html:`<span class="hljs-comment">// Before</span>
ref.<span class="hljs-property">dismissed</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">(<span class="hljs-params">reason</span>) =&gt;</span> {
  <span class="hljs-keyword">if</span> (reason === <span class="hljs-string">&#x27;Backdrop click&#x27;</span>) <span class="hljs-title function_">warn</span>();
});
<span class="hljs-comment">// After</span>
ref.<span class="hljs-property">dismissed</span>.<span class="hljs-title function_">subscribe</span>(<span class="hljs-function">(<span class="hljs-params">reason</span>) =&gt;</span> {
  <span class="hljs-keyword">if</span> (reason === <span class="hljs-string">&#x27;backdrop&#x27;</span>) <span class="hljs-title function_">warn</span>();
});`}},{kind:`html`,html:`<p><strong>Stepper <code>activeIndex</code> is <code>index</code>.</strong> The position model is a 0-based <code>index</code>, like Carousel and
Pager. A model has no deprecated alias. The migration renames <code>[(activeIndex)]</code>, <code>[activeIndex]</code>
and <code>(activeIndexChange)</code> on <code>ngsStepper</code> in templates; a <code>stepper.activeIndex()</code> call in code, for
example through <code>viewChild</code>, has to be renamed by hand.</p>
`},{kind:`code`,file:{code:`<!-- Before -->
<ol ngsStepper [(activeIndex)]="step">
  ...
</ol>
<!-- After -->
<ol ngsStepper [(index)]="step">
  ...
</ol>`,html:`<span class="hljs-comment">&lt;!-- Before --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ol</span> <span class="hljs-attr">ngsStepper</span> [(<span class="hljs-attr">activeIndex</span>)]=<span class="hljs-string">&quot;step&quot;</span>&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>
<span class="hljs-comment">&lt;!-- After --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">ol</span> <span class="hljs-attr">ngsStepper</span> [(<span class="hljs-attr">index</span>)]=<span class="hljs-string">&quot;step&quot;</span>&gt;</span>
  ...
<span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>`}},{kind:`html`,html:`<p><strong>Internals are no longer public API.</strong> These were public and are now hidden (<code>protected</code>,
<code>@internal</code> or not exported), and they stay out of the goldens. App code that used them stops
compiling:</p>
<ul>
<li>Dropdown: <code>attachMenu()</code>, <code>detachMenu()</code>, <code>suppressTriggers()</code>, <code>hoverOpened</code>, <code>panelElement</code>,
<code>menuId</code> and <code>menuLabel</code> on <code>NgsDropdown</code>; <code>NgsMenuHost</code> and <code>NGS_MENU_HOST</code>. <code>NgsMenuItem</code> has
one <code>disabled</code> input (it was <code>isDisabled</code> with the alias <code>disabled</code>, plus a <code>disabled</code> getter);
templates that write <code>disabled</code> are unchanged. <code>NgsDropdownSelection.text</code> is read-only.</li>
<li>Listbox: <code>onKeydown()</code>, <code>activate()</code>, <code>isSelected()</code>, <code>clearActive()</code>, <code>selectActive()</code> and the
<code>focusable</code> input, which only <code>ngs-select</code> and <code>ngs-searchbar</code> used; <code>NGS_LISTBOX_ENTRY</code>,
<code>NgsListboxEntry</code> and <code>item</code> of <code>ngs-option</code> and <code>ngs-optgroup</code>.</li>
<li>Chips: <code>NgsChipGroup.activate()</code>, <code>isSelected()</code>, <code>isTabbable()</code> and <code>toggle()</code>,
<code>NgsChip.isDisabled</code>, <code>NgsChipGroupRef</code> and <code>NGS_CHIP_GROUP</code>. Segmented: <code>select()</code>,
<code>isSelected()</code> and <code>name</code>, <code>NgsSegmentedRef</code> and <code>NGS_SEGMENTED</code>.</li>
<li>Tabs: <code>isKept()</code>, <code>select()</code>, and <code>tabId</code> and <code>panelId</code> of <code>NgsTab</code>. Set <code>[(active)]</code> to switch
tab.</li>
<li>Table: <code>isSelected</code> and <code>setSelected()</code> of <code>NgsRow</code>. (<code>NgsTable</code> keeps <code>toggleSort()</code>,
<code>directionOf()</code>, <code>isSelected()</code> and <code>setSelected()</code>.)</li>
<li>Modal: <code>NgsModalWindow</code> and <code>NgsModalWindowOptions</code>. Toast: <code>NgsToastItem</code>. Pager: <code>NgsPagerDot</code>.</li>
<li>Layout: <code>sidebarOpen</code> and <code>desktop</code> are read-only signals (<code>Signal&lt;boolean&gt;</code>, not
<code>WritableSignal</code>); use <code>openSidebar()</code>, <code>closeSidebar()</code> and <code>toggleSidebar()</code>.</li>
<li>Carousel <code>slides</code> and Stepper <code>steps</code> (typed <code>Signal&lt;ReadonlyArray&lt;any&gt;&gt;</code>), the <code>template</code> of
<code>NgsAccordionContent</code>, <code>NgsBrand</code> and <code>NgsTabContent</code>, <code>NgsAccordion.itemOpened()</code> and the <code>id</code>
of <code>NgsCollapsibleTitle</code>.</li>
</ul>
<p><strong>No hard-coded English defaults.</strong> The Sidebar <code>label</code> (&quot;Main&quot;) and <code>closeLabel</code> (&quot;Close&quot;), the
Navbar <code>menuLabel</code> (&quot;Menu&quot;) and the Breadcrumb <code>label</code> (&quot;Breadcrumb&quot;) defaulted to English in the
component, so <code>provideNgs({ i18n })</code> could not translate them. They default to <code>undefined</code> now and
fall back to <code>NgsI18n</code>: Sidebar <code>label</code> to the new <code>sidebar.label</code>, Sidebar <code>closeLabel</code> to the
existing <code>close</code>, Navbar <code>menuLabel</code> to the new <code>navbar.menu</code> and Breadcrumb <code>label</code> to the new
<code>breadcrumb.label</code>. The English texts are the same, and an app that passes the inputs sees no
change. The new keys are additive for apps that pass partial overrides; as in 0.3, only code that
builds a complete <code>NgsI18n</code> itself must add <code>sidebar</code>, <code>navbar</code> and <code>breadcrumb</code> (start from
<code>mergeNgsI18n()</code>).</p>
`},{kind:`code`,file:{code:`provideNgs({
  i18n: {
    sidebar: { label: 'Navigation principale' },
    navbar: { menu: 'Menu' },
    breadcrumb: { label: "Fil d'Ariane" },
  },
});`,html:`<span class="hljs-title function_">provideNgs</span>({
  <span class="hljs-attr">i18n</span>: {
    <span class="hljs-attr">sidebar</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Navigation principale&#x27;</span> },
    <span class="hljs-attr">navbar</span>: { <span class="hljs-attr">menu</span>: <span class="hljs-string">&#x27;Menu&#x27;</span> },
    <span class="hljs-attr">breadcrumb</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&quot;Fil d&#x27;Ariane&quot;</span> },
  },
});`}},{kind:`html`,html:`<p><strong>Drawer layout.</strong> Start and end drawers now span the full viewport height with square corners,
instead of hanging 3rem below the top with a rounded inner corner, and take the full width below
768px. The <code>--ngs-drawer-top</code> and <code>--ngs-drawer-radius</code> custom properties no longer move or round
them; drop any override of <code>--ngs-drawer-top</code>. <code>side</code> also takes <code>&#39;top&#39;</code> and <code>&#39;bottom&#39;</code>: full-width
drawers, <code>--drawer-height</code> (30vh) tall, with the corners facing the page rounded by
<code>--ngs-drawer-radius</code>. A closing drawer now stays above sticky page headers while it slides away.</p>
<p><strong>Docs only.</strong> The Alert and Notification examples <code>dismissible</code> and <code>closeable</code> are now
<code>closable</code> (anchors <code>#closable</code>). Pagination, Table Pagination and Tabs state the base of their
position: Pagination&#39;s <code>page</code> is 1-based, Table Pagination&#39;s <code>page</code> is 0-based and Tabs&#39; <code>active</code>
takes a value or a 0-based index. None of them changed.</p>
<h3 id="040-next0"><a href="#040-next0">0.4.0-next.0</a></h3>
<p>Datepicker and File. One type-level break, for apps that translate the File strings.</p>
<p><strong><code>NgsI18n.file</code> has new keys, and <code>browse</code> and <code>noFileChosen</code> are gone.</strong> The 0.3 strings belonged
to a placeholder file input. The <code>ngs-file-upload</code> drop zone uses <code>title</code> (or <code>titleMultiple</code>) for
its prompt, plus labels and live announcements for the file list. An override that still sets
<code>browse</code> or <code>noFileChosen</code> fails to compile with an excess-property error. Remove those two keys
and translate the new ones you need; any you leave out keep their English defaults:</p>
`},{kind:`code`,file:{code:`// Before
provideNgs({ i18n: { file: { browse: 'Parcourir', noFileChosen: 'Aucun fichier choisi' } } });

// After
provideNgs({
  i18n: {
    file: {
      title: 'Cliquez ou d\xE9posez un fichier ici',
      titleMultiple: 'Cliquez ou d\xE9posez des fichiers ici',
      remove: 'Retirer {name}',
    },
  },
});`,html:`<span class="hljs-comment">// Before</span>
<span class="hljs-title function_">provideNgs</span>({ <span class="hljs-attr">i18n</span>: { <span class="hljs-attr">file</span>: { <span class="hljs-attr">browse</span>: <span class="hljs-string">&#x27;Parcourir&#x27;</span>, <span class="hljs-attr">noFileChosen</span>: <span class="hljs-string">&#x27;Aucun fichier choisi&#x27;</span> } } });

<span class="hljs-comment">// After</span>
<span class="hljs-title function_">provideNgs</span>({
  <span class="hljs-attr">i18n</span>: {
    <span class="hljs-attr">file</span>: {
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#x27;Cliquez ou d\xE9posez un fichier ici&#x27;</span>,
      <span class="hljs-attr">titleMultiple</span>: <span class="hljs-string">&#x27;Cliquez ou d\xE9posez des fichiers ici&#x27;</span>,
      <span class="hljs-attr">remove</span>: <span class="hljs-string">&#x27;Retirer {name}&#x27;</span>,
    },
  },
});`}},{kind:`html`,html:`<p><code>NgsI18n.datepicker</code> gained keys too (<code>calendar</code>, <code>chooseDate</code>, the year navigation labels, the
date-input placeholders and more). As in 0.3, only code that builds a complete <code>NgsI18n</code> itself
needs to add them; start from <code>mergeNgsI18n()</code>.</p>
<h3 id="030-next0"><a href="#030-next0">0.3.0-next.0</a></h3>
<p>Tabs, navigation, pagination, stepper, table and carousel. One type-level break, for apps that
write out a whole translation object.</p>
<p><strong><code>NgsI18n</code> has new required keys.</strong> <code>carousel</code>, <code>navigation</code>, <code>pager</code>, <code>stepper</code>, <code>table</code>,
<code>tablePagination</code> and <code>tabs</code> are new, and <code>pagination</code> gained a required <code>label</code>. Apps that pass
overrides through <code>provideNgs({ i18n })</code> or <code>provideNgsI18n()</code> are not affected: overrides are
partial and merged over the English defaults. Only code that builds a complete <code>NgsI18n</code> itself
fails to compile, and a custom <code>NGS_I18N</code> provider shows no text for the new keys. Start from the
defaults instead:</p>
`},{kind:`code`,file:{code:`// Before
{ provide: NGS_I18N, useValue: { ...myCompleteTranslations } }

// After
{ provide: NGS_I18N, useValue: mergeNgsI18n(myTranslations) }`,html:`<span class="hljs-comment">// Before</span>
{ <span class="hljs-attr">provide</span>: <span class="hljs-variable constant_">NGS_I18N</span>, <span class="hljs-attr">useValue</span>: { ...myCompleteTranslations } }

<span class="hljs-comment">// After</span>
{ <span class="hljs-attr">provide</span>: <span class="hljs-variable constant_">NGS_I18N</span>, <span class="hljs-attr">useValue</span>: <span class="hljs-title function_">mergeNgsI18n</span>(myTranslations) }`}},{kind:`html`,html:``},{kind:`code`,file:{code:`// Before: pagination without a label
pagination: { first: 'Premi\xE8re', previous: 'Pr\xE9c\xE9dente', next: 'Suivante', last: 'Derni\xE8re', page: 'Page' }

// After
pagination: { label: 'Pagination', first: 'Premi\xE8re', previous: 'Pr\xE9c\xE9dente', next: 'Suivante', last: 'Derni\xE8re', page: 'Page' }`,html:`<span class="hljs-comment">// Before: pagination without a label</span>
<span class="hljs-attr">pagination</span>: { <span class="hljs-attr">first</span>: <span class="hljs-string">&#x27;Premi\xE8re&#x27;</span>, <span class="hljs-attr">previous</span>: <span class="hljs-string">&#x27;Pr\xE9c\xE9dente&#x27;</span>, <span class="hljs-attr">next</span>: <span class="hljs-string">&#x27;Suivante&#x27;</span>, <span class="hljs-attr">last</span>: <span class="hljs-string">&#x27;Derni\xE8re&#x27;</span>, <span class="hljs-attr">page</span>: <span class="hljs-string">&#x27;Page&#x27;</span> }

<span class="hljs-comment">// After</span>
<span class="hljs-attr">pagination</span>: { <span class="hljs-attr">label</span>: <span class="hljs-string">&#x27;Pagination&#x27;</span>, <span class="hljs-attr">first</span>: <span class="hljs-string">&#x27;Premi\xE8re&#x27;</span>, <span class="hljs-attr">previous</span>: <span class="hljs-string">&#x27;Pr\xE9c\xE9dente&#x27;</span>, <span class="hljs-attr">next</span>: <span class="hljs-string">&#x27;Suivante&#x27;</span>, <span class="hljs-attr">last</span>: <span class="hljs-string">&#x27;Derni\xE8re&#x27;</span>, <span class="hljs-attr">page</span>: <span class="hljs-string">&#x27;Page&#x27;</span> }`}},{kind:`html`,html:`<p><strong>Docs only.</strong> The documentation page for <code>ngs-navigation</code> moved from <code>/navigation/navigation</code> to
<code>/navigation/menu</code> and the old address has no redirect. The component, the
<code>@bootlace/core/navigation</code> entry point and its API are unchanged.</p>
<h3 id="020-next0"><a href="#020-next0">0.2.0-next.0</a></h3>
<p>Overlays and feedback. No API was removed or renamed; what changed is how some existing components
look and one type.</p>
<p><strong>Alert is restyled.</strong> <code>ngs-alert</code> takes Taiga UI&#39;s tinted, borderless look, with 0.75rem corners
and body-coloured text. Its inputs and output are unchanged. The tint uses lighter steps of each
hue, so <code>color=&quot;info&quot;</code> is now blue rather than Bootstrap&#39;s cyan, and <code>color=&quot;secondary&quot;</code> is a light
neutral grey. If you rely on the old colours, set them on <code>.alert</code> in your own CSS or use another
<code>color</code>. Visual regression baselines that include alerts need updating.</p>
<p><strong>Close buttons are a plain grey cross.</strong> <code>ngsButtonX</code> and every close button built on it (alert,
notification, toast, modal, drawer and the text input&#39;s clear button) draw Taiga UI&#39;s plain cross
instead of Bootstrap 6&#39;s filled rounded square. The class and markup are the same. To use a different cross, set the tokens the rule sets, in your own CSS
after the library&#39;s:</p>
`},{kind:`code`,file:{code:`.btn-close {
  --btn-close-icon: url('/assets/my-cross.svg');
  --btn-close-color: currentColor;
}`,html:`<span class="hljs-selector-class">.btn-close</span> {
  <span class="hljs-attr">--btn-close-icon</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">&#x27;/assets/my-cross.svg&#x27;</span>);
  <span class="hljs-attr">--btn-close-color</span>: currentColor;
}`}},{kind:`html`,html:`<p><strong><code>NgsI18n</code> has new required keys.</strong> <code>dropdown</code>, <code>listbox</code>, <code>notifications</code>, <code>searchbar</code> and
<code>select</code> were added. As with 0.3.0, only apps that build a complete <code>NgsI18n</code> themselves are
affected; use <code>mergeNgsI18n(overrides)</code> as shown above.</p>
<p><strong>Anchored overlays take an anchor point.</strong> <code>NgsAnchoredOverlay.open()</code> in
<code>@bootlace/core/cdk</code> now accepts an <code>NgsAnchor</code> (an element or an <code>NgsAnchorPoint</code> with <code>x</code>,
<code>y</code> and optional <code>width</code> and <code>height</code>) instead of only an <code>HTMLElement</code>. Existing calls compile
unchanged; code that implements or wraps <code>open()</code> with an <code>HTMLElement</code> parameter type should widen
it.</p>
<h3 id="010-next0"><a href="#010-next0">0.1.0-next.0</a></h3>
<p>The first release. There is nothing to migrate from, but two behaviours differ from what you may
expect from other Angular libraries:</p>
<ul>
<li><p><strong>A dismissed alert is not hidden for you.</strong> <code>ngs-alert</code> (and <code>ngs-notification</code>) only emit
<code>closed</code>. Remove the component in the handler, for example with <code>@if</code>, and move focus to a
sensible control if it was on the close button:</p>
<pre><code class="language-html">@if (saved()) {
&lt;ngs-alert color=&quot;success&quot; dismissible (closed)=&quot;saved.set(false)&quot;&gt;Saved&lt;/ngs-alert&gt;
}
</code></pre>
</li>
<li><p><strong>Form controls show their invalid state once touched.</strong> Checkbox, Radio and Switch (like the
text input) show <code>invalid</code> when the form control is invalid and touched. Set <code>[invalid]</code> to
<code>true</code> or <code>false</code> only to override that.</p>
</li>
</ul>
`}]};export{e as CONTENT};