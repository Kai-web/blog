import{_ as s,o as n,c as a,a as l}from"./app.f0889f5c.js";const C=JSON.parse('{"title":"\u83B7\u53D6\u6388\u6743\u548C\u5B9A\u4F4D\u5C01\u88C5","description":"","frontmatter":{"title":"\u83B7\u53D6\u6388\u6743\u548C\u5B9A\u4F4D\u5C01\u88C5"},"headers":[{"level":2,"title":"common.js","slug":"common-js","link":"#common-js","children":[]}],"relativePath":"\u5C0F\u7A0B\u5E8F/\u83B7\u53D6\u6388\u6743\u548C\u5B9A\u4F4D\u5C01\u88C5.md"}'),p={name:"\u5C0F\u7A0B\u5E8F/\u83B7\u53D6\u6388\u6743\u548C\u5B9A\u4F4D\u5C01\u88C5.md"},o=l(`<h1 id="\u83B7\u53D6\u6388\u6743\u548C\u5B9A\u4F4D\u5C01\u88C5" tabindex="-1">\u83B7\u53D6\u6388\u6743\u548C\u5B9A\u4F4D\u5C01\u88C5 <a class="header-anchor" href="#\u83B7\u53D6\u6388\u6743\u548C\u5B9A\u4F4D\u5C01\u88C5" aria-hidden="true">#</a></h1><h2 id="common-js" tabindex="-1">common.js <a class="header-anchor" href="#common-js" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// common.js</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getLocation</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSetting</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// scope.userLocation  == undefined\u4EE3\u8868\u7528\u6237\u672A\u6388\u6743\u4E14\u7B2C\u4E00\u6B21\u767B\u9646</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u68C0\u67E5\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\u5426\u6388\u6743</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">authSetting</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scope.userLocation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">authSetting</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scope.userLocation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//\u5982\u679C\u7528\u6237\u662F\u7B2C\u4E00\u6B21\u767B\u9646\u4E14\u672A\u6388\u6743\u7684\u60C5\u51B5\uFF0C\u4F1A\u76F4\u63A5\u5F39\u7A97\u8BF7\u6C42\u6388\u6743</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">// \u4F7F\u7528 getlocation \u83B7\u53D6\u7528\u6237 \u7ECF\u7EAC\u5EA6\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getLocation</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">//\u8FD9\u91CC\u6211\u4EEC\u8981\u6307\u5B9A\u5B9A\u4F4D\u7C7B\u578B\u662Fgcj02\uFF0C\u56E0\u4E3A\u4E0D\u586B\u9ED8\u8BA4\u662Fwgs84\uFF0C\u5B9A\u4F4D\u7CBE\u786E\u5EA6\u4F1A\u76F8\u8F83\u4E8Egcj02\u6709\u51E0\u767E\u5230\u4E00\u5343\u7C73\u7684\u504F\u5DEE\uFF0C\u5982\u679C\u5BF9\u7CBE\u786E\u5EA6\u8981\u6C42\u8F83\u9AD8\u7684\u8BF7\u52A1\u5FC5\u52A0\u4E0Atype:&#39;gcj02&#39;</span></span>
<span class="line"><span style="color:#F07178;">            type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gcj02</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            isHighAccuracy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            highAccuracyExpireTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3100ms</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">//\u83B7\u53D6\u7528\u6237\u4F4D\u7F6E\u6210\u529F\u540E\uFF0C\u5C06\u4F1A\u8FD4\u56DE latitude, longitude \u4E24\u4E2A\u5B57\u6BB5\uFF0C\u4EE3\u8868\u7528\u6237\u7684\u7ECF\u7EAC\u5EA6\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">// //\u7ED9\u7ECF\u7EAC\u5EA6\u5B9A\u4E49\u4E3A\u5168\u5C40\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728\u5168\u5C40\u8C03\u7528</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">// app.latitude=res.latitude;</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">// app.longitude=res.longitude;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">//\u7528\u6237\u5DF2\u6388\u6743\uFF0C\u4F46\u662F\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\u5931\u8D25\uFF0C\u4F1A\u5F39\u6846\u63D0\u793A\u7528\u6237\u53BB\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u6253\u5F00\u5B9A\u4F4D</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showModal</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                content</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8BF7\u5728\u624B\u673A\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u6253\u5F00\u5B9A\u4F4D\u670D\u52A1,\u91CD\u65B0\u8FDB\u5165\u5C0F\u7A0B\u5E8F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                confirmText</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u786E\u5B9A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u5C0F\u7A0B\u5E8F\u68C0\u6D4B\u5230\u7528\u6237\u4E0D\u662F\u7B2C\u4E00\u6B21\u8FDB\u5165\u8BE5\u9875\u9762,\u4E14\u672A\u6388\u6743</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">authSetting</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scope.userLocation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">authSetting</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scope.userLocation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showModal</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u662F\u5426\u6388\u6743\u5F53\u524D\u4F4D\u7F6E</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            content</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u9700\u8981\u83B7\u53D6\u60A8\u7684\u5730\u7406\u4F4D\u7F6E\uFF0C\u8BF7\u786E\u8BA4\u6388\u6743\uFF0C\u5426\u5219\u65E0\u6CD5\u83B7\u53D6\u60A8\u6240\u9700\u6570\u636E</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">//\u5982\u679C\u70B9\u51FB\u53D6\u6D88\u5219\u663E\u793A\u6388\u6743\u5931\u8D25</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cancel</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showToast</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                  title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6388\u6743\u5931\u8D25</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                  icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                  duration</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">openSetting</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">              </span><span style="color:#676E95;">//\u5982\u679C\u70B9\u51FB\u786E\u5B9A\u4F1A\u6253\u5F00\u6388\u6743\u9875\u8BF7\u6C42\u4E8C\u6B21\u6388\u6743</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">confirm</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">openSetting</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dataAu</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">dataAu</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">authSetting</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scope.userLocation</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                      </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">navigateBack</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">delta</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                      </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showToast</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6388\u6743\u6210\u529F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        duration</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span></span>
<span class="line"><span style="color:#F07178;">                      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">                      </span><span style="color:#676E95;">//\u518D\u6B21\u6388\u6743\uFF0C\u8C03\u7528getLocationt\u7684API</span></span>
<span class="line"><span style="color:#F07178;">                      </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getLocation</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gcj02</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        isHighAccuracy</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        highAccuracyExpireTime</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3100ms</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                          </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">err</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                          </span><span style="color:#676E95;">//\u7528\u6237\u5DF2\u6388\u6743\uFF0C\u4F46\u662F\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\u5931\u8D25\uFF0C\u63D0\u793A\u7528\u6237\u53BB\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u6253\u5F00\u5B9A\u4F4D</span></span>
<span class="line"><span style="color:#F07178;">                          </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showModal</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                            title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                            content</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8BF7\u5728\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u6253\u5F00\u5B9A\u4F4D\u670D\u52A1,\u5426\u5219\u65E0\u6CD5\u6B63\u5E38\u4F7F\u7528</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                            confirmText</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u786E\u5B9A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                            </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">                          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                      </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showToast</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u6388\u6743\u5931\u8D25</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        icon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                        duration</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span></span>
<span class="line"><span style="color:#F07178;">                      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                      </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">openSetting</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">authSetting</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scope.userLocation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#676E95;">//\u6388\u6743\u540E\u9ED8\u8BA4\u52A0\u8F7D\uFF0C\u76F4\u63A5\u83B7\u53D6\u5B9A\u4F4D</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getLocation</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gcj02</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">            fail</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">errMsg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">getLocation:fail \u9891\u7E41\u8C03\u7528\u4F1A\u589E\u52A0\u7535\u91CF\u635F\u8017\uFF0C\u53EF\u8003\u8651\u4F7F\u7528 wx.onLocationChange \u76D1\u542C\u5730\u7406\u4F4D\u7F6E\u53D8\u5316</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">//\u7528\u6237\u5DF2\u6388\u6743\uFF0C\u4F46\u662F\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\u5931\u8D25\uFF0C\u63D0\u793A\u7528\u6237\u53BB\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u6253\u5F00\u5B9A\u4F4D</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">showModal</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                  title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                  content</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8BF7\u5728\u624B\u673A\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u6253\u5F00\u5B9A\u4F4D\u670D\u52A1,\u91CD\u65B0\u8FDB\u5165\u5C0F\u7A0B\u5E8F</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                  confirmText</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u786E\u5B9A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">                  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                    </span><span style="color:#676E95;">// \u672A\u6388\u6743\u5F3A\u5236\u9000\u51FA</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#A6ACCD;">wx</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">exitMiniProgram</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">                  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">              </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> common </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  getLocation</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> common</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function c(F,t,r,y,D,i){return n(),a("div",null,e)}const u=s(p,[["render",c]]);export{C as __pageData,u as default};
