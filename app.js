$(document).ready(function(){
    $('.menu-button').on("click", function(){
      $('.menu').width("250px");
    })

    $('.close-button').on("click", function() {
      $('.menu').width("0px");
    })
});
