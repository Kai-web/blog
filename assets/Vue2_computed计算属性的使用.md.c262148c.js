import{_ as s,o as a,c as n,a as l}from"./app.f0889f5c.js";const C=JSON.parse('{"title":"computed\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528","description":"","frontmatter":{"title":"computed\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528"},"headers":[{"level":2,"title":"\u6839\u636E\u9009\u62E9\u7684id\u8FD4\u56DEname\u5C5E\u6027","slug":"\u6839\u636E\u9009\u62E9\u7684id\u8FD4\u56DEname\u5C5E\u6027","link":"#\u6839\u636E\u9009\u62E9\u7684id\u8FD4\u56DEname\u5C5E\u6027","children":[]}],"relativePath":"Vue2/computed\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528.md"}'),p={name:"Vue2/computed\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528.md"},o=l(`<h1 id="computed\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528" tabindex="-1">computed\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528 <a class="header-anchor" href="#computed\u8BA1\u7B97\u5C5E\u6027\u7684\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="\u6839\u636E\u9009\u62E9\u7684id\u8FD4\u56DEname\u5C5E\u6027" tabindex="-1">\u6839\u636E\u9009\u62E9\u7684id\u8FD4\u56DEname\u5C5E\u6027 <a class="header-anchor" href="#\u6839\u636E\u9009\u62E9\u7684id\u8FD4\u56DEname\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{stepsName(townsList,dialogForm.townCollectStation)}}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#FFCB6B;">computed</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">stepsName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">organizationId</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const A=s(p,[["render",t]]);export{C as __pageData,A as default};
