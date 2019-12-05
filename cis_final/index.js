$(function(){
  $('#console-box').append('console is ready...');
  
  $('li').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
    $(this).toggleClass('selected').siblings().removeClass('selected');
; 
  });
  
});

function githubPage() {
  location.replace("https://github.com/koltonbaker/FinalProject");
}

function giftCard() {
  location.replace("https://www.playstation.com/en-us/explore/playstation-plus/&activetab=pivot%3aoverviewtab");
}