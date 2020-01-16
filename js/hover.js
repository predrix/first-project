$('.row').on('mouseover', '.show', function(e) {
	let target = $(e.currentTarget);
	let layer = target.find('.layer');
	let img = target.find('.img-fluid')

	layer.addClass('layer-hover');
	img.addClass('hover-img');

	target.on('mouseout', function(e) {

		layer.removeClass('layer-hover');
		img.removeClass('hover-img');
  		layer.off('mouseout');
  		img.off('mouseout');
	});
});
