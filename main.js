$(document).ready(function(){
 $('.header').height($(window).height());
})
$(".navbar a").click(function(){
$("body,html").animate({
  scrollTop:$("#" + $(this).data('value')).offset().top
},1000)
 })

let min = document.querySelector('input[name="min"]');
let max = document.querySelector('input[name="max"]');
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}