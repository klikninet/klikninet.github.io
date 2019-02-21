<?php include('res/x5engine.php'); header('Content-Type: text/xml'); echo '<?xml version="1.0" encoding="utf-8"?>'; ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<atom:link href="http://klikninet.ru/x5feed.php" rel="self" type="application/rss+xml" />
		<title><![CDATA[Новости]]></title>
		<link>http://klikninet.ru</link>
		<description><![CDATA[Браузерный майнинг]]></description>
		<language>RU</language>
		<lastBuildDate><?php echo getLastAvailableDate(array(1550233500)); ?></lastBuildDate>
<?php if (time() > 1550233500): ?>
		<item>
			<title><![CDATA[Майнинг]]></title>
			<link>http://klikninet.ru/miner.html</link>
			<description><![CDATA[<div id="imRSSArticle_ag4ws6lo"><div><img class="image-0" src="http://klikninet.ru/images/jse.png"  title="" alt=""/><a href="https://platform.jsecoin.com/?lander=2&utm_source=referral&utm_campaign=aff144693&utm_content=" target="_blank">Браузерный майнинг JSE</a></div></div>]]></description>
			<pubDate>Fri, 15 Feb 2019 12:25:00 GMT</pubDate>
			<category>imrssfeed</category>
			<enclosure url="http://klikninet.ru/images/jse_22gf3wrz.png" length="7420" type="image/png" />
			<guid isPermaLink="false">http://klikninet.ru/rss/ag4ws6lo</guid>
		</item>
<?php endif; ?>
	</channel>
</rss>
