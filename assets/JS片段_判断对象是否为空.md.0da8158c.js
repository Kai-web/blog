import{_ as s,o as a,c as n,a as l}from"./app.f0889f5c.js";const F=JSON.parse('{"title":"\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A","description":"","frontmatter":{"title":"\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A"},"headers":[],"relativePath":"JS\u7247\u6BB5/\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A.md"}'),o={name:"JS\u7247\u6BB5/\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A.md"},p=l(`<h1 id="\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A" tabindex="-1">\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A <a class="header-anchor" href="#\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u4E3A\u7A7A" aria-hidden="true">#</a></h1><ul><li>\u8BE5\u65B9\u6CD5\u6709\u4E2A\u7F3A\u70B9\uFF1AJSON.stringify()\u53EA\u80FD\u5E8F\u5217\u5316\u5BF9\u8C61\u7684\u53EF\u679A\u4E3E\u7684\u81EA\u6709\u5C5E\u6027\uFF0C\u5373\u5982\u679C\u6709\u5C5E\u6027\u662F\u4E0D\u53EF\u679A\u4E3E\u6216\u7EE7\u627F\u5C5E\u6027\u7684\u8BDD\uFF0C\u7ED3\u679C\u4E5F\u662Ftrue</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(obj) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div><ul><li>Object.getOwnPropertyNames()</li><li>\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u8BE5\u5BF9\u8C61\u6240\u6709\u53EF\u679A\u4E3E\u548C\u4E0D\u53EF\u679A\u4E3E\u5C5E\u6027\u7684\u5C5E\u6027\u540D\uFF08\u4E0D\u542BSymbol\u5C5E\u6027\uFF09\u7EC4\u6210\u7684\u6570\u7EC4\u3002\u7136\u540E\u518D\u901A\u8FC7\u5224\u65AD\u8FD4\u56DE\u7684\u6570\u7EC4\u957F\u5EA6\u662F\u5426\u4E3A\u96F6</li><li>\u5982\u679C\u4E3A\u96F6\u7684\u8BDD\u5C31\u662F\u7A7A\u5BF9\u8C61\u3002\u8BE5\u65B9\u6CD5\u5BF9\u4E8E\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\u4E5F\u80FD\u68C0\u6D4B\u51FA\u6765</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getOwnPropertyNames</span><span style="color:#A6ACCD;">(obj)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;">// true</span></span>
<span class="line"></span></code></pre></div>`,5),e=[p];function t(c,r,y,i,D,A){return a(),n("div",null,e)}const _=s(o,[["render",t]]);export{F as __pageData,_ as default};
