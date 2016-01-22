$(document).ready(function(){

	$('#postcontent li').each(function(){
		$(this).after('<hr/>');
	});

	$('#postcontent li').each(function(){
		$(this).addClass('row');
	});

	$('#postcontent li p').each(function(){
		$(this).addClass('col-xs-12 col-md-6');
	});

});
