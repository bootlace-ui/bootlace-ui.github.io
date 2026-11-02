var s={title:`Getting started`,blocks:[{kind:`html`,html:`<h1>Getting started</h1>
<p>bootlace is a set of Angular components styled by Bootstrap 6. Each component is standalone,
uses signal inputs and <code>OnPush</code> change detection, and lives in its own entry point, so an app only
bundles what it imports.</p>
<blockquote>
<p>Pre-release. The packages are built against <code>bootstrap@6.0.0-alpha.1</code>, and APIs can change in any
0.x release until 1.0. Prereleases are published under the <code>next</code> tag.</p>
</blockquote>
<h2 id="requirements"><a href="#requirements">Requirements</a></h2>
<div class="docs-markdown-table"><table class="table"><thead><tr><th>Package</th><th>Version</th></tr></thead><tbody><tr><td>Angular</td><td>22 or 23</td></tr><tr><td>Bootstrap</td><td><code>6.0.0-alpha.1</code></td></tr><tr><td><code>@angular/cdk</code></td><td>22 or 23 (overlays)</td></tr><tr><td>Node.js (to build)</td><td>22.12 or later</td></tr></tbody></table></div>
<h2 id="quick-start"><a href="#quick-start">Quick start</a></h2>
<p>In an Angular workspace, run the schematic:</p>
`},{kind:`code`,file:{code:`ng add @bootlace/core@next`,html:`ng add @bootlace/core@next`}},{kind:`html`,html:`<p>It installs <code>@bootlace/icons</code>, <code>bootstrap</code> and <code>@angular/cdk</code> at the versions this release
needs, adds Bootstrap&#39;s and the library&#39;s prebuilt CSS to the <code>styles</code> of <code>angular.json</code>, and adds
<code>provideNgs()</code> to your application providers. It is safe to run again. Options:</p>
<div class="docs-markdown-table"><table class="table"><thead><tr><th>Option</th><th>Effect</th></tr></thead><tbody><tr><td><code>--project &lt;name&gt;</code></td><td>The application to change, when the workspace has more than one.</td></tr><tr><td><code>--skip-styles</code></td><td>Leave <code>angular.json</code> alone.</td></tr><tr><td><code>--skip-provider</code></td><td>Do not add <code>provideNgs()</code>.</td></tr><tr><td><code>--skip-install</code></td><td>Update <code>package.json</code> but do not run the package manager.</td></tr><tr><td><code>--font</code></td><td>Also install Manrope, as in &quot;Load the font&quot; below.</td></tr></tbody></table></div>
<p>Prefer to do it by hand, or use SCSS? The next sections are the same steps.</p>
<h2 id="install"><a href="#install">Install</a></h2>
`},{kind:`code`,file:{code:`pnpm add @bootlace/core@next @bootlace/icons@next bootstrap@6.0.0-alpha.1 @angular/cdk`,html:`pnpm add @bootlace/core@next @bootlace/icons@next bootstrap@6.0.0-alpha.1 @angular/cdk`}},{kind:`html`,html:`<p>npm and Yarn work the same way, with <code>npm install</code> or <code>yarn add</code>.</p>
<h2 id="add-the-styles"><a href="#add-the-styles">Add the styles</a></h2>
<p>Load Bootstrap first, then the library&#39;s styles, in your global stylesheet:</p>
`},{kind:`code`,file:{code:`// src/styles.scss
@use 'bootstrap/scss/bootstrap.scss';
@use '@bootlace/core/styles';`,html:`<span class="hljs-comment">// src/styles.scss</span>
<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;bootstrap/scss/bootstrap.scss&#x27;</span>;
<span class="hljs-keyword">@use</span> <span class="hljs-string">&#x27;@bootlace/core/styles&#x27;</span>;`}},{kind:`html`,html:`<p>Prefer plain CSS? Add the prebuilt files to the <code>styles</code> array in <code>angular.json</code> instead:</p>
`},{kind:`code`,file:{code:`"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/@bootlace/core/bootlace.css",
  "src/styles.css"
]`,html:`<span class="hljs-attr">&quot;styles&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
  <span class="hljs-string">&quot;node_modules/bootstrap/dist/css/bootstrap.min.css&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-string">&quot;node_modules/@bootlace/core/bootlace.css&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-string">&quot;src/styles.css&quot;</span>
<span class="hljs-punctuation">]</span>`}},{kind:`html`,html:`<p>With SCSS you can also configure the library as you load it. See
<a href="/documentation/customization">Customization</a>.</p>
<h2 id="use-a-component"><a href="#use-a-component">Use a component</a></h2>
<p>Import the component from its entry point and add it to your component&#39;s <code>imports</code>:</p>
`},{kind:`code`,file:{code:`import { Component } from '@angular/core';
import { NgsBadge } from '@bootlace/core/badge';

@Component({
  selector: 'app-status',
  imports: [NgsBadge],
  template: \`<ngs-badge color="success" variant="subtle">Active</ngs-badge>\`,
})
export class Status {}`,html:`<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NgsBadge</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/badge&#x27;</span>;

<span class="hljs-meta">@Component</span>({
  <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;app-status&#x27;</span>,
  <span class="hljs-attr">imports</span>: [<span class="hljs-title class_">NgsBadge</span>],
  <span class="hljs-attr">template</span>: <span class="hljs-string">\`&lt;ngs-badge color=&quot;success&quot; variant=&quot;subtle&quot;&gt;Active&lt;/ngs-badge&gt;\`</span>,
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Status</span> {}`}},{kind:`html`,html:`<p>Each component page shows its entry point next to its title, and its API tab lists every input and
output. Only the entry points you import end up in your bundle.</p>
<h2 id="add-icons"><a href="#add-icons">Add icons</a></h2>
<p><code>&lt;ngs-icon&gt;</code> renders icons from <code>@bootlace/icons</code>. Pass an icon directly, or register the ones
your app uses once and refer to them by name:</p>
`},{kind:`code`,file:{code:`// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideNgsIcons } from '@bootlace/core/icon';
import { ngsIconHome, ngsIconSearch } from '@bootlace/icons';

export const appConfig: ApplicationConfig = {
  providers: [provideNgsIcons([ngsIconHome, ngsIconSearch])],
};`,html:`<span class="hljs-comment">// src/app/app.config.ts</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ApplicationConfig</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@angular/core&#x27;</span>;
<span class="hljs-keyword">import</span> { provideNgsIcons } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/core/icon&#x27;</span>;
<span class="hljs-keyword">import</span> { ngsIconHome, ngsIconSearch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@bootlace/icons&#x27;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> <span class="hljs-attr">appConfig</span>: <span class="hljs-title class_">ApplicationConfig</span> = {
  <span class="hljs-attr">providers</span>: [<span class="hljs-title function_">provideNgsIcons</span>([ngsIconHome, ngsIconSearch])],
};`}},{kind:`html`,html:``},{kind:`code`,file:{code:`<ngs-icon name="home" />

<ngs-icon name="search" theme="two-tone" label="Search" />`,html:`<span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;home&quot;</span> /&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">ngs-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;two-tone&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Search&quot;</span> /&gt;</span>`}},{kind:`html`,html:`<p><a href="/icon/usage">Icon usage</a> covers themes, sizes and accessibility, and the
<a href="/icon/icon-browser">Icon browser</a> helps you find an icon.</p>
<h2 id="load-the-font-optional"><a href="#load-the-font-optional">Load the font (optional)</a></h2>
<p>The library sets Manrope first in Bootstrap&#39;s font stack, as on these docs, but does not bundle it.
To match the docs, install it and load weights 500 and 800:</p>
`},{kind:`code`,file:{code:`pnpm add @fontsource/manrope`,html:`pnpm add @fontsource/manrope`}},{kind:`html`,html:``},{kind:`code`,file:{code:`"styles": [
  "node_modules/@fontsource/manrope/500.css",
  "node_modules/@fontsource/manrope/800.css",
  "src/styles.scss"
]`,html:`<span class="hljs-attr">&quot;styles&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
  <span class="hljs-string">&quot;node_modules/@fontsource/manrope/500.css&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-string">&quot;node_modules/@fontsource/manrope/800.css&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-string">&quot;src/styles.scss&quot;</span>
<span class="hljs-punctuation">]</span>`}},{kind:`html`,html:`<p><a href="/documentation/styles">Styles</a> explains the type scale and how to turn it off.</p>
<h2 id="server-side-rendering"><a href="#server-side-rendering">Server-side rendering</a></h2>
<p>Every component can be rendered on the server and prerendered. Browser-only work, such as focus,
measuring and <code>matchMedia</code>, runs after the first render. These docs are prerendered with Angular SSR.</p>
`}]};export{s as CONTENT};