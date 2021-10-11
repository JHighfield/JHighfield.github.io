$( document ).ready(function() {
    console.log( "ready!" );

$('.1-1').click(function() {
  $('.1-2').removeClass('w3-hide');
    $('.1-1').addClass('w3-hide');
});
$('.1-2').click(function() {
  $('.1-3').removeClass('w3-hide');
    $('.1-2').addClass('w3-hide');
});
$('.1-3').click(function() {
  $('.1-4').removeClass('w3-hide');
    $('.1-3').addClass('w3-hide');
});
$('.1-4').click(function() {
  $('.1-1').removeClass('w3-hide');
    $('.1-4').addClass('w3-hide');
});


$('.2-1').click(function() {
  $('.2-2').removeClass('w3-hide');
    $('.2-1').addClass('w3-hide');
});
$('.2-2').click(function() {
  $('.2-3').removeClass('w3-hide');
    $('.2-2').addClass('w3-hide');
});
$('.2-3').click(function() {
  $('.2-1').removeClass('w3-hide');
    $('.2-3').addClass('w3-hide');
});



});