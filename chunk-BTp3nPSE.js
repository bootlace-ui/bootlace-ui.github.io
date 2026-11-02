var e={title:`Styles`,blocks:[{kind:`html`,html:`<h1>Styles</h1>
<p>All styling comes from Bootstrap 6. <code>@bootlace/core/styles</code> adds three things on Bootstrap&#39;s
tokens: Taiga UI&#39;s type scale, the layout shell (<code>&lt;ngs-layout&gt;</code>, navbar, sidebar, footer) and icon
themes. Load it after Bootstrap:</p>
`},{kind:`code`,file:{code:`@use 'bootstrap/scss/bootstrap.scss';
@use '@bootlace/core/styles';`,html:`<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;bootstrap/scss/bootstrap.scss&#x27;</span>;
<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@bootlace/core/styles&#x27;</span>;`}},{kind:`html`,html:`<h2 id="cascade-layers"><a href="#cascade-layers">Cascade layers</a></h2>
<p>The library&#39;s rules sit in Bootstrap&#39;s <code>components</code> cascade layer, so your own unlayered CSS always
wins without extra specificity or <code>!important</code>. The type scale&#39;s <code>:root</code> tokens are the exception.
They are unlayered, like Bootstrap&#39;s own <code>:root</code> tokens, which they override.</p>
<h2 id="type-scale"><a href="#type-scale">Type scale</a></h2>
<p>Headings use Taiga UI&#39;s scale. The sizes are set with tokens, so <code>h1</code> to <code>h6</code> and the <code>.h1</code> to <code>.h6</code>
classes match:</p>
<div class="docs-type-scale">
  <p class="h1">Heading 1</p>
  <p class="h2">Heading 2</p>
  <p class="h3">Heading 3</p>
  <p class="h4">Heading 4</p>
  <p class="h5">Heading 5</p>
  <p class="h6">Heading 6</p>
  <p>Body text, 1rem on 1.5rem</p>
  <p class="small">Small text, on 1.25rem</p>
</div>

<div class="docs-markdown-table"><table class="table"><thead><tr><th>Level</th><th>Size</th><th>Line height</th><th>Tokens</th></tr></thead><tbody><tr><td><code>h1</code></td><td>3.125rem (50px)</td><td>3.5rem (56px)</td><td><code>--ngs-h1-font-size</code>, <code>--ngs-h1-line-height</code></td></tr><tr><td><code>h2</code></td><td>2.75rem (44px)</td><td>3rem (48px)</td><td><code>--ngs-h2-font-size</code>, <code>--ngs-h2-line-height</code></td></tr><tr><td><code>h3</code></td><td>2.25rem (36px)</td><td>2.5rem (40px)</td><td><code>--ngs-h3-font-size</code>, <code>--ngs-h3-line-height</code></td></tr><tr><td><code>h4</code></td><td>1.75rem (28px)</td><td>2rem (32px)</td><td><code>--ngs-h4-font-size</code>, <code>--ngs-h4-line-height</code></td></tr><tr><td><code>h5</code></td><td>1.5rem (24px)</td><td>1.75rem (28px)</td><td><code>--ngs-h5-font-size</code>, <code>--ngs-h5-line-height</code></td></tr><tr><td><code>h6</code></td><td>1.25rem (20px)</td><td>1.5rem (24px)</td><td><code>--ngs-h6-font-size</code>, <code>--ngs-h6-line-height</code></td></tr><tr><td>small</td><td>Bootstrap&#39;s</td><td>1.25rem (20px)</td><td><code>--ngs-small-line-height</code></td></tr></tbody></table></div>
<p>Headings are bold (<code>--heading-font-weight</code>). Bootstrap&#39;s <code>--font-size-*</code> scale is left alone, so
components keep Bootstrap&#39;s sizes.</p>
<h2 id="text-colours"><a href="#text-colours">Text colours</a></h2>
<p>The scale also sets Bootstrap&#39;s text and link tokens to Taiga UI&#39;s colours, in light and dark mode:</p>
<div class="docs-markdown-table"><table class="table"><thead><tr><th>Token</th><th>Used for</th></tr></thead><tbody><tr><td><code>--fg-body</code></td><td>Body text and headings</td></tr><tr><td><code>--fg-2</code></td><td>Secondary text</td></tr><tr><td><code>--fg-3</code></td><td>Hints, placeholders, line numbers</td></tr><tr><td><code>--link-color</code></td><td>Links</td></tr><tr><td><code>--link-hover-color</code></td><td>Links on hover</td></tr></tbody></table></div>
<p>Links are not underlined (<code>--link-decoration: none</code>). Inline <code>code</code> gets a light background.</p>
<h2 id="font"><a href="#font">Font</a></h2>
<p>The font stack starts with Manrope, then falls back to <code>system-ui</code>. Manrope is not bundled. Load
weights 500 (regular text) and 800 (bold), for example from <code>@fontsource/manrope</code>:</p>
`},{kind:`code`,file:{code:`pnpm add @fontsource/manrope`,html:`pnpm add @fontsource/manrope`}},{kind:`html`,html:``},{kind:`code`,file:{code:`"styles": [
  "node_modules/@fontsource/manrope/500.css",
  "node_modules/@fontsource/manrope/800.css",
  "src/styles.scss"
]`,html:`<span class="hljs-attr">&quot;styles&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
  <span class="hljs-string">&quot;node_modules/@fontsource/manrope/500.css&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-string">&quot;node_modules/@fontsource/manrope/800.css&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-string">&quot;src/styles.scss&quot;</span>
<span class="hljs-punctuation">]</span>`}},{kind:`html`,html:`<p>Without it, text uses the system font with the same sizes. Manrope is under the SIL Open Font
License, so keep its licence with the font files if you self-host them.</p>
<h2 id="turning-the-type-scale-off"><a href="#turning-the-type-scale-off">Turning the type scale off</a></h2>
<p>To keep Bootstrap&#39;s own typography, turn the scale off when you load the styles. The layout and icon
styles are unaffected:</p>
`},{kind:`code`,file:{code:`@use 'bootstrap/scss/bootstrap.scss';
@use '@bootlace/core/styles' with (
  $ngs-typography: false
);`,html:`<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;bootstrap/scss/bootstrap.scss&#x27;</span>;
<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@bootlace/core/styles&#x27;</span> with (
  <span class="hljs-variable">$ngs-typography</span>: false
);`}},{kind:`html`,html:`<p>The prebuilt <code>bootlace.css</code> always includes the scale. <a href="/documentation/customization">Customization</a>
shows how to change single values instead.</p>
<h2 id="dark-mode"><a href="#dark-mode">Dark mode</a></h2>
<p>Every colour is a <code>light-dark()</code> token, so the library follows Bootstrap&#39;s colour modes. By default
the page follows the system setting. Set <code>data-bs-theme=&quot;dark&quot;</code> or <code>data-bs-theme=&quot;light&quot;</code> on
<code>&lt;html&gt;</code>, or on any element to switch only that part of the page.</p>
`}]};export{e as CONTENT};