$(".map-text").on('click', (function(){
	$(".lock").css({ display: 'flex'
	});
	$(".map").css({ visibility: 'visible', height: 'auto'
	});
	$(".map-text").css({ display: 'none'
	});
}))

$(".lock").on('click', (function(){
	$(".lock").css({ display: 'none'
	});
	$(".map").css({ visibility: 'hidden', height: '0'
	});
	$(".map-text").css({ display: 'flex'
	});
}))