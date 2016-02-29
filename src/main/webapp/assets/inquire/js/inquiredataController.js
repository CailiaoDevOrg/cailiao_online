/*inquire*/
scotchApp.controller('inquiredataController',function($scope){
	//console.log("inquire");
	$(".tabcontent").css("display","none");
	$(".tabcontent").eq(0).css("display","block");
	$("#tab li").click(function(){
		var Index=$(this).index();
		$("#tab li").removeClass("active");
		$("#tab li").eq(Index).addClass("active");

		$(".tabcontent").css("display","none");
		$(".tabcontent").eq(Index).css("display","block");
	})

});