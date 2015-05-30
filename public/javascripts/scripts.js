
$(document).ready(function(){
	$('.hidden').fadeIn(3000).removeClass('hidden');
});

//Fade on hover for project pics
$('.imgOverlay').hover(function() {
    $(this).fadeTo('fast', 0.9, function(){});
}, function() {
    $(this).fadeTo('fast', 0, function(){});
});

//Resume tab js
$(function () {
	$('#myTab a:first').tab('show')
})

