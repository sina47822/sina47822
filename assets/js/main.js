  
var $ = jQuery.noConflict();

$(document).ready(function(){

  console.log("hello");
  $('.categoryfilter').on('click', function (e) { 
  e.preventDefault();
  
  $('.categoryfilter').removeClass('active');
  $(this).addClass('active');
  

  });

  $('.page-item').on('click' , function (e) {
    $('.page-item').removeClass('active');
    $(this).addClass('active');
  });

  // if $('.page-item') {
    
  // }
  $('.page-item-one').on('')
});









