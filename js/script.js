/* js */

function myLog(text) {
	console.log(text);
}

$(function() {
	var $body = $('body');
	var editPanel = '<div id="edit-panel">EDITING PANEL</div>';
	var $wrapper = $('#wrapper');
	var $button = $('.button');
	var panelHeight = '200px';
	
	$body.prepend(editPanel);
	var $editPanel = $('#edit-panel');
	$editPanel.css('height','0px').css('width','100%').css('background','yellow').css('opacity',0).css('',0);
	$editPanel.animate({opacity:1,height:panelHeight,width:'100%'},1000, 'easeInOutQuart');
	$body.animate({'background-position-y':panelHeight},1000, 'easeInOutQuart');
});