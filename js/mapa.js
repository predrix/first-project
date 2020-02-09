$(".map_pack").on('click', (function(){
	$(".map_close").css({ display: 'flex'
	});
	$(".map_img").css({ visibility: 'visible', height: 'auto'
	});
	$(".map_pack").css({ display: 'none'
	});
}))

$(".map_close").on('click', (function(){
	$(".map_close").css({ display: 'none'
	});
	$(".map_img").css({ visibility: 'hidden', height: '0'
	});
	$(".map_pack").css({ display: 'flex'
	});
}))