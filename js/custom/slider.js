



$(document).ready(function(){

var arrList = document.getElementsByClassName("list-item");
var current = 0;
var firstItemIndex = arrList[0];
var lastItemIndex = arrList.length-1;
var lastItem = arrList[lastItemIndex];
var containerWidth = $(".container").css("width");
var listItemwidth = $("ul#main-list li.list-item").css("width", containerWidth);
var containerWidthString = containerWidth.split("px").shift();
var containerWidthNum = parseInt(containerWidthString);
var getWidth = arrList.length * containerWidthNum;
var unorderedListWidth = document.getElementById("main-list").style.width = getWidth +"px";
var rotator = $('#main-list');

var w = $(window).width();



$( window ).resize( function(){
    

    if($(window).width() <= w){
        console.log("maximised");

    rotator.animate({marginLeft:"0px"}, function(){});
                        current = 0;
    
     containerWidthString = containerWidth.split("px").shift();
     containerWidthNum = parseInt(containerWidthString);
     getWidth = arrList.length * containerWidthNum;
     console.log(containerWidthNum);
     
    
    containerWidth = $(".container").css("width");
    listItemwidth = $("ul#main-list li.list-item").css("width", containerWidth);
    listItemwidthVal = $("ul#main-list li.list-item").css("width");
    unorderedListWidth = $("#main-list").css("width", getWidth);
    unorderedListWidthVal = $("#main-list").css("width");
    console.log(containerWidthNum);
    }
  

});



        var carouselInterval = function() {
            
                var timerSlide = setInterval(function(){
                    
                current++;
                    if(current == lastItemIndex+1){
                        rotator.animate({marginLeft:"0px"}, function(){});
                        current = 0;             
                } else{ 
                    rotator.animate({marginLeft:"-=" + containerWidth}, function(){});
                 }
            }, 6000);         

            $('.right-a').click(function(e){
                e.preventDefault;
                clearInterval(timerSlide);
                current++;
                    if(current == lastItemIndex+1){
                        rotator.animate({marginLeft:"0px"}, function(){});
                        current = 0;
                } else{
                    rotator.animate({marginLeft:"-=" + containerWidth}, function(){});
                 }
            });
            
            $('.left-a').click(function(e){
                e.preventDefault;
                clearInterval(timerSlide);   

                 if(current == 0){
                    var penWidth = getWidth-containerWidthNum;
                         current = lastItemIndex;
                         rotator.animate({marginLeft:"-" + penWidth + "px"}, function(){});
                } else{
                     current--;
                     rotator.animate({marginLeft:"+=" + containerWidth}, function(){});
                 }
            });

        }();    
   
});