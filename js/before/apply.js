$('.guide span').on("mouseenter",function(){
	$('.guide span').css({'background':'rgb(245,245,245)','color':'black'});
	$(this).css({'background':'rgb(2,134,216)','color':'white'});
	$('.guide_con div').css({'display':'none'});
	$('.guide_con_'+$(this).attr('class')).css({'display':'block'});
});
