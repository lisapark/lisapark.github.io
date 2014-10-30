$( document ).ready(function() {
	$('.on').click(function(){
    	var $this = $(this);
    	$this.toggleClass('on');
    	if($this.hasClass('on')){
      		$this.text('On');
   			$(".on").attr('src',"images/Cat1.jpg");
    	} else {
      		$this.text('Off');
      		$(".on").attr('src',"images/Cat2.jpg");

      		$(function() {
			});
    	}
 	})
});

/*
var pageHeader = document.getElementById('page-header');
var pageHeader1 = document.getElementByTagName('page-header');
var pageHeader2 = document.getElementByClassName('page-header');
*/