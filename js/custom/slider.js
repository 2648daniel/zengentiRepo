$(document).ready(function(){

    $(".search").on("click", function(){
        $(".search-box").fadeIn();
    });

    $(".search-query").on("blur", function(){
        $(".search-box").fadeOut();
    });




var arrList = document.getElementsByClassName("list-item"), 
    current = 0, 
    firstItemIndex = arrList[0], 
    lastItemIndex = arrList.length-1, 
    lastItem = arrList[lastItemIndex], 
    containerWidth = $(".container").css("width"), 
    listItemwidth = $("ul#main-list li.list-item").css("width", containerWidth), 
    containerWidthString = containerWidth.split("px").shift(), 
    containerWidthNum = parseInt(containerWidthString), 
    getWidth = arrList.length * containerWidthNum,
    unorderedListWidth = document.getElementById("main-list").style.width = getWidth +"px", 
    rotator = $('#main-list'), 
    featureHeight = $(".list-item > img").css("height"), 
    slideTitle = $("h2#mainTitle"),
    slidePara = $("p#mainPara");
    $(".feature-slider").css("height", featureHeight);

    var w = $(window).width();

    $( window ).resize(function(){



         function scroller(){
            setTimeout(function(){
                    rotator.animate({marginLeft:"0px"}, function(){});
                    current = 0;  
                    featureHeight = $(".list-item > img").css("height");
                    $(".feature-slider").css("height", featureHeight);

                    $(slidePara).html(arrList[current].childNodes[3].lastElementChild.innerHTML);
                    $(slideTitle).html(arrList[current].childNodes[3].firstElementChild.innerHTML); 

                    containerWidthString = containerWidth.split("px").shift();
                    containerWidthNum = parseInt(containerWidthString);
                    getWidth = arrList.length * containerWidthNum;
                     
                    
                    containerWidth = $(".container").css("width");
                    listItemwidth = $("ul#main-list li.list-item").css("width", containerWidth);
                    listItemwidthVal = $("ul#main-list li.list-item").css("width");
                    unorderedListWidth = $("#main-list").css("width", getWidth);
                    unorderedListWidthVal = $("#main-list").css("width");
             }, 1000 );

        }



    if($(window).width() <= w){
        scroller()
    }

    


});



    

        var carouselInterval = function() {
            
                var timerSlide = setInterval(function(){
                    
                current++;
                    if(current == lastItemIndex+1){
                        rotator.animate({marginLeft:"0px"}, function(){});
                        current = 0;        

                        $(slidePara).html(arrList[current].childNodes[3].lastElementChild.innerHTML);
                        $(slideTitle).html(arrList[current].childNodes[3].firstElementChild.innerHTML);     
                } else{ 
                    rotator.animate({marginLeft:"-=" + containerWidth}, function(){});
                        $(slidePara).html(arrList[current].childNodes[3].lastElementChild.innerHTML);
                        $(slideTitle).html(arrList[current].childNodes[3].firstElementChild.innerHTML);  
                 }
            }, 6000);         

            $('.right-a').on("click touchstart", function(e){

                e.preventDefault;
                clearInterval(timerSlide);
                current++;
                
                    if(current == lastItemIndex+1){
                        rotator.animate({marginLeft:"0px"}, function(){});
                        current = 0;
                        $(slidePara).html(arrList[current].childNodes[3].lastElementChild.innerHTML);
                        $(slideTitle).html(arrList[current].childNodes[3].firstElementChild.innerHTML);  
                    
                        
                } else{

                        $(slidePara).html(arrList[current].childNodes[3].lastElementChild.innerHTML);
                        $(slideTitle).html(arrList[current].childNodes[3].firstElementChild.innerHTML);  
                    
                    
                    rotator.animate({marginLeft:"-=" + containerWidth}, function(){});
                 }
            });
            
            $('.left-a').on("click touchstart", function(e){
                e.preventDefault;
                clearInterval(timerSlide);   

                 if(current == 0){
                    var penWidth = getWidth-containerWidthNum;
                         current = lastItemIndex;
                        $(slidePara).html(arrList[current].childNodes[3].lastElementChild.innerHTML);
                        $(slideTitle).html(arrList[current].childNodes[3].firstElementChild.innerHTML);  
                         rotator.animate({marginLeft:"-" + penWidth + "px"}, function(){});
                } else{
                     current--;
                        $(slidePara).html(arrList[current].childNodes[3].lastElementChild.innerHTML);
                        $(slideTitle).html(arrList[current].childNodes[3].firstElementChild.innerHTML);  
                     rotator.animate({marginLeft:"+=" + containerWidth}, function(){});
                 }
            });

        }();    
   
});