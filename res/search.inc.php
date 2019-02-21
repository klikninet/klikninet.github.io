<?php

/*****************
	GENERAL SETTINGS
*****************/
$imSettings['search']['general'] = array(
	'menu_position' => 'right',
	'defaultScope' => array(
		'0' => 'index.html',
		'3' => 'bux.html',
		'4' => 'credit.html',
		'5' => 'wallet.html',
		'6' => 'kran.html',
		'7' => 'exch.html',
		'8' => 'obmen.html',
		'9' => 'crypta.html',
		'10' => 'miner.html'
	),
	'extendedScope' => array(
	)
);

/*****************
	PRODUCTS SEARCH
*****************/
$imSettings['search']['products'] = array(
);

/*****************
	IMAGES SEARCH
*****************/
$imSettings['search']['images'] = array(
	array(
		'title' => 'Распределение мощности добычи биткоина',
		'description' => '',
		'location' => '',
		'src' => 'images/pool.jpg',
		'page' => 'miner.html'
	)
);

/*****************
	VIDEOS SEARCH
*****************/
$imSettings['search']['videos'] = array(
);
$imSettings['search']['dynamicobjects'] = array(
);

// End of file search.inc.php