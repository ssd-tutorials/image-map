var mapObject = {
	hover : function(area, event) {
		var id = area.attr('name');
		if (event.type == 'mouseover') {
			$('.' + id).show();
			$('#' + id).siblings().each(function() {
				if ($(this).is(':visible')) {
					$(this).hide();
				}
			});
			$('#' + id).show();
		} else {
			$('.' + id).hide();
			$('#' + id).hide();
			$('#room-0').show();
		}
	}
};
$(function() {
	
	$('area').live('mouseover mouseout', function(event) {
		mapObject.hover($(this), event);
	});
	
});