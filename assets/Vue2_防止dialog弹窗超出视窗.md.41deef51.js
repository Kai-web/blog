import{_ as s,o as a,c as n,a as l}from"./app.f0889f5c.js";const i=JSON.parse('{"title":"\u9632\u6B62dialog\u5F39\u7A97\u8D85\u51FA\u89C6\u7A97","description":"","frontmatter":{"title":"\u9632\u6B62dialog\u5F39\u7A97\u8D85\u51FA\u89C6\u7A97"},"headers":[],"relativePath":"Vue2/\u9632\u6B62dialog\u5F39\u7A97\u8D85\u51FA\u89C6\u7A97.md"}'),p={name:"Vue2/\u9632\u6B62dialog\u5F39\u7A97\u8D85\u51FA\u89C6\u7A97.md"},o=l(`<h1 id="\u9632\u6B62dialog\u5F39\u7A97\u8D85\u51FA\u89C6\u7A97" tabindex="-1">\u9632\u6B62dialog\u5F39\u7A97\u8D85\u51FA\u89C6\u7A97 <a class="header-anchor" href="#\u9632\u6B62dialog\u5F39\u7A97\u8D85\u51FA\u89C6\u7A97" aria-hidden="true">#</a></h1><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#A6ACCD;">/deep/ </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">el-dialog</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u5C45\u4E2D\u5F39\u6846</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  // \u9632\u6B62\u8D85\u51FA\u89C6\u7A97</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">max-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  //\u5B9E\u73B0body\u5185\u90E8\u6EDA\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> column</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  .el-dialog__body {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   // \u4FEE\u6539\u706B\u72D0\u6D4F\u89C8\u5668\u4E2D\u7684\u6EDA\u52A8\u6761\u5BBD\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">scrollbar-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> thin</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function c(t,r,C,D,y,A){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};
