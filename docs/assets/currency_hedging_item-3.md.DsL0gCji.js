import{_ as e,c as a,a3 as l,o as r}from"./chunks/framework.k_yU03aL.js";const g=JSON.parse('{"title":"货币对的对冲系统","description":"","frontmatter":{},"headers":[],"relativePath":"currency_hedging/item-3.md","filePath":"currency_hedging/item-3.md","lastUpdated":1729517202000}'),i={name:"currency_hedging/item-3.md"};function o(s,t,n,d,p,h){return r(),a("div",null,t[0]||(t[0]=[l('<h1 id="货币对的对冲系统" tabindex="-1">货币对的对冲系统 <a class="header-anchor" href="#货币对的对冲系统" aria-label="Permalink to &quot;货币对的对冲系统&quot;">​</a></h1><h2 id="top-g是一款基于趋势跟踪的多币种专家顾问。它使用对冲系统-风险管理非常好。它交易-17-种货币对-为您的账户投资组合提供多样化。" tabindex="-1">Top G是一款基于趋势跟踪的多币种专家顾问。它使用对冲系统，风险管理非常好。它交易 17 种货币对，为您的账户投资组合提供多样化。 <a class="header-anchor" href="#top-g是一款基于趋势跟踪的多币种专家顾问。它使用对冲系统-风险管理非常好。它交易-17-种货币对-为您的账户投资组合提供多样化。" aria-label="Permalink to &quot;Top G是一款基于趋势跟踪的多币种专家顾问。它使用对冲系统，风险管理非常好。它交易 17 种货币对，为您的账户投资组合提供多样化。&quot;">​</a></h2><p>注意！！！ 请仔细阅读安装顾问的规则，并正确安装。在发布之前，我们会检查所有内容，并仅发布那些适用于我们账户的顾问！！！至少在本文发布时。另外，请注意，请现在模拟盘上 运行后再实盘上运行</p><table tabindex="0"><thead><tr><th style="text-align:left;">终端</th><th style="text-align:left;">MT4</th></tr></thead><tbody><tr><td style="text-align:left;">货币对</td><td style="text-align:left;">英镑兑美元、欧元兑日元、英镑兑加元、澳元兑美元、欧元兑美元、欧元兑澳元、美元兑日元、新西兰元兑美元、欧元兑加元、美元兑瑞郎、美元兑加元、加元兑日元、澳元兑新西兰元、澳元兑加元、加元兑美元HF、新西兰元兑加元、欧元兑英镑</td></tr><tr><td style="text-align:left;">大体时间</td><td style="text-align:left;">M1</td></tr><tr><td style="text-align:left;">资金管理</td><td style="text-align:left;">至少 500 个货币单位</td></tr><tr><td style="text-align:left;">推荐经纪商</td><td style="text-align:left;">IC市场 [低点差平台ECN]</td></tr><tr><td style="text-align:left;">推荐经纪商</td><td style="text-align:left;">IC市场 [低点差平台ECN]</td></tr></tbody></table><h1 id="回测" tabindex="-1">回测： <a class="header-anchor" href="#回测" aria-label="Permalink to &quot;回测：&quot;">​</a></h1><p>EA 可以进行回测，但结果会不准确。EA 的基本策略是扫描每个外汇对，避免交易那些长期没有盈利的货币对。当市场再次变得有利时，它会重新包含这些货币对。此功能无法进行回测。但是作者有账户监控功能，虽然它是最近才创建的，但我还是会在下面发布它，以便您可以观看</p><p><img src="https://img.deattor.us.kg/file/1729518228238_2024-10-09_13-20-19.png" alt="alt text"></p><p>监控链接 – <a href="https://bit.ly/4eZIJkB" target="_blank" rel="noreferrer">https://bit.ly/4eZIJkB</a></p><h1 id="设置" tabindex="-1">设置： <a class="header-anchor" href="#设置" aria-label="Permalink to &quot;设置：&quot;">​</a></h1><p><img src="https://img.deattor.us.kg/file/1729518413125_2024-10-09_13-27-19.png" alt="alt text"></p><p>EA TOP G 参数说明 – One Chart Setup (Separate symbol with a comma) // 默认情况下，所有 18 个外汇对都以逗号分隔。如果您的经纪人使用后缀，您必须在货币对名称旁边输入它。 – Lot Size // 默认情况下，手数为 0.01 – Take Profit Mode (Keep It Visible)// 默认情况下，出于市场验证目的，它设置为隐藏。交易时请始终将其设置为可见。 – Take Profit in ($) // 默认情况下，获利为 1 美元。这意味着当每个外汇对达到 1 美元时，EA 将关闭交易。 – Max Spread (0=Disable) // 默认情况下，最大价差为 300。如果您选择较小的价差，则当价差高于您选择的金额时，EA 将不会进入交易。 – Allow Hedge (EA TOP G Smart Algo) // 默认情况下，它设置为 true，并且绝不能更改为 false。对冲意味着 EA 可以打开同一外汇对的 1 个买入和 1 个卖出订单。 – Max Lot Size // 默认情况下，它设置为 0。由于 TOP G 使用软马丁格尔，您可以选择希望 EA 交易的最大手数。它不会超过您输入的金额。 – Trade On Holidays // 默认情况下，它设置为 true。如果您不希望 EA 在圣诞节和新年期间进行交易，可以将其设置为 false。 – Magic Number // 默认情况下，它设置为 999。如果您使用一个图表设置，则无需更改它。但是，如果您计划使用新闻过滤器，则每个外汇对图表必须具有不同的魔幻数字。<br> – Avoid Trading X Pairs When Market Is Not Favorable // 默认情况下，它设置为 true，并且绝不能更改。这是机器人的主要核心策略。 – Use Strategy Trend Confirmations // 默认情况下，它设置为 false。False 表示它正在使用剥头皮模式。EA TOP G 遵循趋势，它必须保持这种趋势。 – Strategy 1, Strategy 2, Strategy 3, Strategy 4 &amp; Strategy 5 // 默认情况下，所有 5 种策略都设置为 true。如果您希望 EA 使用正确的策略进行正确交易，则绝不能更改它们。 – News Filter Settings (Off By Default) // 默认情况下，新闻过滤器设置为 false。这意味着 EA 仍将对高影响新闻进行交易。机器人的策略实际上不受新闻的影响，但如果您坚持使用它，您就不能再使用设置的一个图表了。您必须使用不同的幻数为每个外汇对打开每个图表。 – UseNewsFilter // 默认情况下，它设置为 false。如果您计划使用新闻过滤保护，可以将其设置为 true。– Use High Impact // 默认 情况下，它设置为 false。如果您计划使用新闻过滤保护，可以将其设置为 true。这意味着 EA 不会在高影响新闻期间进行交易。– HighPause Before //您希望 EA 在高新闻影响之前暂停多少分钟？我们喜欢将其设置为 60 分钟。您可以将其更改为更高或更低。 –HighPause After //您希望 EA 在高新闻影响之后暂停多少分钟？我们喜欢将其设置为 30 分钟。您可以将其更改为更高或更低。 – NewsCurrency //您 的目标货币是什么？如果您使用的是 EURUSD，则必须像这样分开：EUR,USD — USDCAD，它将像这样：USD,CAD — AUDNZD，它将像这样：AUD,NZD –账户保护 //这是交易时对您余额的保护 – 获利百分比 // 如果您将其设置为 1%，则意味着当您的账户权益增加 +1% 时，EA 将关闭所有交易。 – 最大亏损百分比 // 如果您将其设置为 15%，则意味着当您的账户权益为 -15% 时，EA 将关闭所有活跃交易。</p><h1 id="结论" tabindex="-1">结论： <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论：&quot;">​</a></h1><p>将 EA 附加到 M1 时间范围内的一个 EURUSD 图表上，它就会交易所有 17 种货币对。 新闻过滤器：机器人不需要新闻过滤器的保护。但是，如果您仍然想为每对外汇添加新闻过滤器，则需要为每对外汇打开每个图表，并为每对指定不同的幻数。要添加新闻过滤器：转到工具，然后是选项，然后是专家顾问。单击允许列出的 URL 的 WebRequest：<a href="https://ec.forexprostools.com" target="_blank" rel="noreferrer">https://ec.forexprostools.com</a> — 单击确定 对于 500 美元的余额，您只能使用 2 个外汇对，例如 EURUSD 和 USDJPY。对于 1000 美元的余额，您可以使用 3 个外汇对，例如 EURUSD、NZDCAD 和 USDJPY。</p><p>稳定模式下10个货币对资金管理：</p><ul><li>$2000 = 0.01手</li><li>$4000 = 0.02手</li><li>$6000 = 0.03手</li><li>$8000 = 0.04手</li><li>$10,000 = 0.05手</li><li>$15,000 = 0.06手</li><li>$20,000 = 0.07手</li></ul><p>*如果您使用的余额低于 2,000 美元 // 请务必使用 250 美元/1 个货币对，每手 0.01 手。例如：500 美元 = 2 个货币对，每手 0.01 手 // 例如：1,000 美元 = 4 个货币对，每手 0.01 手</p><p>剥头皮模式下 17 种货币对的资金管理：</p><ul><li>$3,000 = 0.01 手</li><li>$6,000 = 0.02手</li><li>$12,000 = 0.03 手</li><li>$18,000 = 0.04 手</li><li>$25,000 = 0.05 手</li><li>$35,000 = 0.06 手</li><li>$45,000 = 0.07 手</li></ul><p><strong>功能已测试，在版本 1420 中运行</strong></p><blockquote><p>提醒： 与每个交易系统一样，请始终记住外汇交易是有风险的。不要用您输不起的钱进行交易。最好先在模拟账户或低手数的实时账户上测试 EA。您以后可以随时增加风险！</p></blockquote>',20)]))}const c=e(i,[["render",o]]);export{g as __pageData,c as default};
