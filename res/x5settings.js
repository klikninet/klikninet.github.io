(function ( $, x5engine ) {
	var x = x5engine,
		s = x.settings,
		p = s.currentPath,
		b = x.boot;

	s.siteId = '17D920D3396CA3BF47E02606EB707442';
	s.version = '12-0-5-22';
	b.push(function () {
		x.setupDateTime();
		x.imAccess.showLogout();
		x.utils.autoHeight();
		x.cart.ui.updateWidget();
		x.imGrid.init();
	});
	s.menu = {
		verticalScroll: true,
		orientation: 'vertical'
	};
	b.push(function () {
		x.menu({
			target: '#imMnMn',
			showCurrent: false,
			desktopVerticalScroll: true,
			mobileVerticalScroll: true,
			showLogoOnScroll: false,
			orientation: 'vertical',
			menuHeight: 26,
			menuWidth: 100,
			submenuHeight: 22,
			submenuWidth: 100,
			opacity: 1,
			type: 'singleColumn',
			alignment: 'left',
			effect: 'fade'
		});
	});
	b.push(function () { x.utils.imPreloadImages([p + 'menu/hor_main.png',p + 'menu/hor_main_h.png',p + 'menu/hor_main_c.png',p + 'menu/ver_main.png',p + 'menu/ver_main_h.png',p + 'menu/ver_main_c.png', p + 'res/imLoad.gif', p + 'res/imClose.png']); });

	// ShowBox
	$.extend(s.imShowBox, {
		'effect' : 'fade',
		'shadow' : '',
		'background' : '#000000',
		'borderWidth' : {
			'top': 2,
			'right': 2,
			'bottom': 2,
			'left': 2
		},
		buttonRight: {
			url: p + 'res/b02_r.png',
			position: {
				x: -28,
				y: 0
			}
		},
		buttonLeft: {
			url: p + 'res/b02_l.png',
			position: {
				x: -28,
				y: 0
			}
		},
		'borderRadius' : '10px 10px 10px 10px',
		'borderColor' : '#FBF40B #FBF40B #FBF40B #FBF40B',
		'textColor' : '#000000',
		'fontFamily' : 'Tahoma',
		'fontStyle' : 'normal',
		'fontWeight' : 'normal',
		'fontSize' : '9pt',
		'textAlignment' : 'left',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.5,
		'radialBg' : true // Works only in Mozilla Firefox and Google Chrome
	});

	// PopUp
	$.extend(s.imPopUp, {
		'effect' : 'fade',
		'width' : 500,
		'shadow' : '',
		'background' : '#000000',
		'borderRadius' : 10,
		'textColor' : '#000000',
		'boxColor' : '#FFFFFF',
		'opacity' : 0.5
	});

	// Tip
	$.extend(s.imTip, {
		'borderRadius' : 1,
		'arrow' : true,
		'position' : 'bottom',
		'effect' : 'fade',
		'showTail' : true
	});

	// Captcha
	b.push(function () {
		x5engine.captcha.instance = new x5engine.captcha.x5captcha({
			"phpfile": "captcha/x5captcha.php",
		});
	}, false, 'first');

	// BreakPoints
	s.breakPoints.push({ "hash": "e757b1201baed01e3b15ed55684332d6", "name": "Desktop", "start": "max", "end": 1080, "fluid": false});
	s.breakPoints.push({ "hash": "07b5a23d084503a6b43ad2122b6c749f", "name": "BreakPoint", "start": 1079, "end": 840, "fluid": false});
	s.breakPoints.push({ "hash": "dec599558301699dfc271392a082819c", "name": "Breakpoint 1", "start": 839, "end": 720, "fluid": false});
	s.breakPoints.push({ "hash": "b5a6e70dcd45b271d4dbff444ddeed77", "name": "Mobile", "start": 719, "end": 480, "fluid": false});
	s.breakPoints.push({ "hash": "5f70824c5546877c12669b7a138d547d", "name": "BreakPoint", "start": 479, "end": 320, "fluid": false});
	s.breakPoints.push({ "hash": "e81e7c6a4cc72fa678403ac3f73710af", "name": "Mobile Fluid", "start": 319, "end": 0, "fluid": true});

	b.push(function () { x.cookielaw.activateScripts() });

	s.loaded = true;
})( _jq, x5engine );
