(function($){
  $(function(){
    "use strict";

var navRow = $('.nav-row');
var menuList = $('.menu-list');
var menuItems = $('li');


menuItems.hide();

navRow.click(function(event){
  event.preventDefault();
  navRow.css('background-color', '#4E5052');
});

navRow.click(function(event){
  event.preventDefault();
  menuItems.slideUp();//makes all other menu-items slide up
  //when the navRow is not clicked.
  $(this).next().children().slideDown(500);
  $(this).css('background-color', '#849A32');
});



});
}(jQuery));
