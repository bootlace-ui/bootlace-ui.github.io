var e={title:`Customization`,blocks:[{kind:`html`,html:`<h1>Customization</h1>
<p>Components are themed with Bootstrap 6&#39;s tokens, so a Bootstrap theme changes them too. The
library&#39;s own additions use <code>--ngs-*</code> tokens with the same approach. You can change them in CSS at
runtime, or in SCSS when you load the styles.</p>
<h2 id="bootstrap-tokens"><a href="#bootstrap-tokens">Bootstrap tokens</a></h2>
<p>Change Bootstrap&#39;s tokens as Bootstrap documents, with its Sass maps (such as <code>$theme-colors</code>) or
with CSS custom properties. Each theme colour is a set of tokens (<code>--primary-bg</code>, <code>--primary-fg</code>,
<code>--primary-border</code> and so on), and every component reads them. For example, to restyle every primary
badge and button:</p>
`},{kind:`code`,file:{code:`:root {
  --primary-base: #7048e8;
  --primary-bg: #7048e8;
  --primary-fg: light-dark(#5f3dc4, #b197fc);
}`,html:`<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--primary-base</span>: <span class="hljs-number">#7048e8</span>;
  <span class="hljs-attr">--primary-bg</span>: <span class="hljs-number">#7048e8</span>;
  <span class="hljs-attr">--primary-fg</span>: <span class="hljs-built_in">light-dark</span>(<span class="hljs-number">#5f3dc4</span>, <span class="hljs-number">#b197fc</span>);
}`}},{kind:`html`,html:`<h2 id="overriding-tokens-in-css"><a href="#overriding-tokens-in-css">Overriding tokens in CSS</a></h2>
<p>Every <code>--ngs-*</code> token is declared on <code>:root</code> in the <code>components</code> cascade layer. Set it in your own
unlayered CSS to override it, on <code>:root</code> for the whole app or on any element for part of it:</p>
`},{kind:`code`,file:{code:`:root {
  --ngs-sidebar-width: 18rem;
  --ngs-layout-frame-radius: 1rem;
}

.compact {
  --ngs-layout-content-padding: 1rem;
}`,html:`<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--ngs-sidebar-width</span>: <span class="hljs-number">18rem</span>;
  <span class="hljs-attr">--ngs-layout-frame-radius</span>: <span class="hljs-number">1rem</span>;
}

<span class="hljs-selector-class">.compact</span> {
  <span class="hljs-attr">--ngs-layout-content-padding</span>: <span class="hljs-number">1rem</span>;
}`}},{kind:`html`,html:`<p>Bootstrap&#39;s own <code>:root</code> tokens, and the type scale&#39;s, are declared outside any layer. To override
those, your rule must also be unlayered, and loaded after the library.</p>
<h2 id="overriding-tokens-in-scss"><a href="#overriding-tokens-in-scss">Overriding tokens in SCSS</a></h2>
<p>When you load the styles with Sass, pass <code>$ngs-root-tokens</code> to replace defaults at build time.
Keys you leave out keep their defaults:</p>
`},{kind:`code`,file:{code:`@use '@bootlace/core/styles' with (
  $ngs-root-tokens: (
    --ngs-sidebar-width: 18rem,
    --ngs-focus-outline-offset: 3px,
  )
);`,html:`<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@bootlace/core/styles&#x27;</span> with (
  <span class="hljs-variable">$ngs-root-tokens</span>: (
    <span class="hljs-attribute">--ngs-sidebar-width</span>: <span class="hljs-number">18rem</span>,
    <span class="hljs-attribute">--ngs-focus-outline-offset</span>: <span class="hljs-number">3px</span>,
  )
);`}},{kind:`html`,html:`<h2 id="tokens"><a href="#tokens">Tokens</a></h2>
<div class="docs-markdown-table"><table class="table"><thead><tr><th>Token</th><th>Default</th><th>What it sets</th></tr></thead><tbody><tr><td><code>--ngs-transition-duration</code></td><td><code>0.2s</code> (<code>0s</code> with reduced motion)</td><td>Component transitions</td></tr><tr><td><code>--ngs-focus-outline-offset</code></td><td><code>2px</code></td><td>Gap between an element and its focus ring</td></tr><tr><td><code>--ngs-layout-frame-bg</code></td><td><code>#f6f6f6</code> / <code>#2f2f2f</code></td><td>Window frame, navbar and seams (light / dark)</td></tr><tr><td><code>--ngs-layout-panel-bg</code></td><td><code>#fff</code> / <code>#222</code></td><td>Content, sidebar and footer panels</td></tr><tr><td><code>--ngs-layout-frame-width</code></td><td><code>0.5rem</code></td><td>Width of the window frame</td></tr><tr><td><code>--ngs-layout-frame-radius</code></td><td>seam radius + frame width (<code>1.125rem</code>)</td><td>Rounding of the window frame</td></tr><tr><td><code>--ngs-layout-seam-width</code></td><td><code>0.25rem</code></td><td>Gap between the sidebar, content and footer</td></tr><tr><td><code>--ngs-layout-seam-radius</code></td><td><code>0.625rem</code></td><td>Rounding of the panels along the seams</td></tr><tr><td><code>--ngs-layout-divider-color</code></td><td>10% black / 14% white</td><td>Dividers, guide lines and hover backgrounds</td></tr><tr><td><code>--ngs-layout-content-padding</code></td><td><code>1rem</code>, <code>2rem</code> from <code>md</code>, <code>3rem</code> from <code>lg</code></td><td>Padding inside <code>&lt;main&gt;</code> and the footer</td></tr><tr><td><code>--ngs-navbar-height</code></td><td><code>4.125rem</code></td><td>Height of <code>&lt;ngs-navbar&gt;</code></td></tr><tr><td><code>--ngs-navbar-padding-x</code></td><td><code>1rem</code>, <code>1.5rem</code> from <code>md</code></td><td>Side padding of <code>&lt;ngs-navbar&gt;</code></td></tr><tr><td><code>--ngs-sidebar-width</code></td><td><code>16.5rem</code></td><td>Width of <code>&lt;ngs-sidebar&gt;</code> from <code>lg</code> up</td></tr><tr><td><code>--ngs-sidebar-collapsed-width</code></td><td><code>4.375rem</code></td><td>Width of a collapsed sidebar&#39;s icon rail</td></tr><tr><td><code>--ngs-sidebar-brand-bg</code></td><td><code>var(--ngs-layout-frame-bg)</code></td><td>Box behind the brand at the top of a full-height sidebar</td></tr></tbody></table></div>
<p>Icon colours have their own tokens; see <a href="/icon/usage">Icon usage</a>.</p>
<h2 id="typography"><a href="#typography">Typography</a></h2>
<p>The type scale is a set of tokens too (listed on <a href="/documentation/styles">Styles</a>). Override single
values in unlayered CSS:</p>
`},{kind:`code`,file:{code:`:root {
  --ngs-h1-font-size: 2.5rem;
  --ngs-h1-line-height: 3rem;
  --body-font-family: Inter, system-ui, sans-serif;
}`,html:`<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--ngs-h1-font-size</span>: <span class="hljs-number">2.5rem</span>;
  <span class="hljs-attr">--ngs-h1-line-height</span>: <span class="hljs-number">3rem</span>;
  <span class="hljs-attr">--body-font-family</span>: Inter, system-ui, sans-serif;
}`}},{kind:`html`,html:`<p>Or turn the whole scale off and keep Bootstrap&#39;s typography:</p>
`},{kind:`code`,file:{code:`@use '@bootlace/core/styles' with (
  $ngs-typography: false
);`,html:`<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@bootlace/core/styles&#x27;</span> with (
  <span class="hljs-variable">$ngs-typography</span>: false
);`}},{kind:`html`,html:`<h2 id="accessible-colours"><a href="#accessible-colours">Accessible colours</a></h2>
<p>Bootstrap 6.0.0-alpha.1&#39;s default theme colours fall short of WCAG AA contrast (4.5:1) in a few
places, such as white text on a solid success button (2.8:1). The library stylesheet moves those
tokens to the lightest shade of the same hue that passes:</p>
<div class="docs-markdown-table"><table class="table"><thead><tr><th>Token</th><th>Bootstrap default</th><th>bootlace</th></tr></thead><tbody><tr><td><code>--primary-bg</code></td><td><code>--blue-500</code></td><td><code>--blue-600</code></td></tr><tr><td><code>--success-bg</code></td><td><code>--green-500</code></td><td><code>--green-700</code></td></tr><tr><td><code>--danger-bg</code></td><td><code>--red-500</code></td><td><code>--red-600</code></td></tr><tr><td><code>--primary-fg</code></td><td><code>--blue-600</code> (light)</td><td><code>--blue-700</code> (light)</td></tr><tr><td><code>--success-fg</code></td><td><code>--green-600</code> (light)</td><td><code>--green-700</code> (light)</td></tr><tr><td><code>--info-fg</code></td><td><code>--cyan-600</code> (light)</td><td><code>--cyan-700</code> (light)</td></tr><tr><td><code>--warning-fg</code></td><td><code>--yellow-700</code> (light)</td><td><code>--yellow-800</code> (light)</td></tr></tbody></table></div>
<p>Dark-mode text colours already pass and are unchanged. To keep Bootstrap&#39;s palette exactly:</p>
`},{kind:`code`,file:{code:`@use '@bootlace/core/styles' with (
  $ngs-accessible-colors: false
);`,html:`<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@bootlace/core/styles&#x27;</span> with (
  <span class="hljs-variable">$ngs-accessible-colors</span>: false
);`}},{kind:`html`,html:`<h2 id="configuration-in-typescript"><a href="#configuration-in-typescript">Configuration in TypeScript</a></h2>
<p>Component defaults that are not styles are set with providers. Library-wide settings use
<code>provideNgs()</code>, and each component has its own provider, such as <code>provideNgsIconConfig()</code>:</p>
`},{kind:`code`,file:{code:`import { ApplicationConfig } from '@angular/core';
import { provideNgs } from '@bootlace/core';
import { provideNgsIconConfig } from '@bootlace/core/icon';

export const appConfig: ApplicationConfig = {
  providers: [provideNgs({ animation: false }), provideNgsIconConfig({ theme: 'two-tone' })],
};`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ApplicationConfig</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { provideNgs } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core&#x27;</span>;
<span class="hljs-keyword">import</span> { provideNgsIconConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-attr">appConfig</span>: <span class="hljs-title class_">ApplicationConfig</span> = {
  <span class="hljs-attr">providers</span>: [<span class="hljs-title function_">provideNgs</span>({ <span class="hljs-attr">animation</span>: <span class="hljs-literal">false</span> }), <span class="hljs-title function_">provideNgsIconConfig</span>({ <span class="hljs-attr">theme</span>: <span class="hljs-string">&#x27;two-tone&#x27;</span> })],
};`}},{kind:`html`,html:`<p>Each component&#39;s API tab lists its provider and the options it takes.</p>
`}]};export{e as CONTENT};