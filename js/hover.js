$('.row').on('mouseover', '.team_show', function(e) {
	let target = $(e.currentTarget);
	let layer = target.find('.team_layer');
	let img = target.find('.team_img')

	layer.addClass('layer_hover');
	img.addClass('hover_img');

	target.on('mouseout', function(e) {

		layer.removeClass('layer_hover');
		img.removeClass('hover_img');
  		layer.off('mouseout');
  		img.off('mouseout');
	});
});
