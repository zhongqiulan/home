$(function(){
	//Nav
	$(".nav li").hover(function(){
		$(this).addClass("hover").find(".subnav").stop(true,true).slideDown(300)
	}, function(){
		$(this).removeClass("hover").find(".subnav").stop(true,true).slideUp(300)
	})
	$(".nav li").eq(7).hover(function(){
		$(this).addClass("hover").find(".sunnav-pro").stop(true,true).slideDown(300)
	}, function(){
		$(this).removeClass("hover").find(".sunnav-pro").stop(true,true).slideUp(300)
	})
	$(".nav li").eq(8).hover(function(){
		$(this).addClass("hover").find(".sunnav-pro1").stop(true,true).slideDown(300)
	}, function(){
		$(this).removeClass("hover").find(".sunnav-pro1").stop(true,true).slideUp(300)
	})
	$(".nav li").eq(19).hover(function(){
		$(this).addClass("hover").find(".sunnav-pro2").stop(true,true).slideDown(300)
	}, function(){
		$(this).removeClass("hover").find(".sunnav-pro2").stop(true,true).slideUp(300)
	})

	//Footer weixin
	$(".f-tips .wx").hover(function(){
		$(".weixinbox").show()
	}, function(){
		$(".weixinbox").hide()
	})


	//weatherNav
	$(".weatherNav li").hover(function(){
		$(this).addClass("hover").find(".subWeatherNav").stop(true,true).slideDown(300)
	}, function(){
		$(this).removeClass("hover").find(".subWeatherNav").stop(true,true).slideUp(300)
	})
	

	//Footer weixin
	$(".f-tips .wx").hover(function(){
		$(".weixinbox").show()
	}, function(){
		$(".weixinbox").hide()
	})

});

function Hover(obj, calssName) {
	obj.hover(function(){
		$(this).addClass(calssName);
	},function(){
		$(this).removeClass(calssName);
	})
}















