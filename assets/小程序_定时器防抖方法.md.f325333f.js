import{_ as s,o as n,c as a,a as l}from"./app.f0889f5c.js";const A=JSON.parse('{"title":"\u5B9A\u65F6\u5668\u9632\u6296\u65B9\u6CD5","description":"","frontmatter":{"title":"\u5B9A\u65F6\u5668\u9632\u6296\u65B9\u6CD5"},"headers":[{"level":2,"title":"\u9700\u6C42","slug":"\u9700\u6C42","link":"#\u9700\u6C42","children":[]}],"relativePath":"\u5C0F\u7A0B\u5E8F/\u5B9A\u65F6\u5668\u9632\u6296\u65B9\u6CD5.md"}'),p={name:"\u5C0F\u7A0B\u5E8F/\u5B9A\u65F6\u5668\u9632\u6296\u65B9\u6CD5.md"},o=l(`<h1 id="\u5B9A\u65F6\u5668\u9632\u6296\u65B9\u6CD5" tabindex="-1">\u5B9A\u65F6\u5668\u9632\u6296\u65B9\u6CD5 <a class="header-anchor" href="#\u5B9A\u65F6\u5668\u9632\u6296\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u9700\u6C42" tabindex="-1">\u9700\u6C42 <a class="header-anchor" href="#\u9700\u6C42" aria-hidden="true">#</a></h2><ul><li><p>\u7528\u6237\u5728\u8F93\u5165\u6846\u4E2D\u505C\u6B62\u8F93\u5165\u540E\u5EF6\u8FDF800ms\u8C03\u7528\u540E\u7AEF\u63A5\u53E3</p></li><li><p>\u5F53\u7528\u6237\u8F93\u5165\u65F6\uFF0C\u4F1A\u8C03\u7528 keywordChange \u65B9\u6CD5\u3002\u5982\u679C\u8F93\u5165\u503C\u5B58\u5728\uFF0C\u5B83\u5C06\u6E05\u9664\u4E4B\u524D\u7684\u5B9A\u65F6\u5668\u5E76\u542F\u52A8\u4E00\u4E2A\u65B0\u7684\u5B9A\u65F6\u5668\uFF0C\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u540E\u6267\u884C\u8282\u6D41\u540E\u7684\u64CD\u4F5C\u3002\u5982\u679C\u8F93\u5165\u503C\u4E3A\u7A7A\uFF0C\u5219\u76F4\u63A5\u6267\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</p></li></ul><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">@input</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keywordChange</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">@focus</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keywordFocus</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u8BF7\u8F93\u5165</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        inputTimer</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">keywordChange</span><span style="color:#A6ACCD;">(e) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">detail</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">clearTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">inputTimer</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">inputTimer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">^</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">+|</span><span style="color:#C3E88D;">\\s</span><span style="color:#89DDFF;">+</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u505C\u6B62\u8F93\u5165800ms\u540E\u8C03\u7528\u63A5\u53E3</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">getKeywordChange</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">800</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,F,y,D,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
