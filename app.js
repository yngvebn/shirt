$(function(){
   $(".estimate__button").click(function(ev, target){
       console.log(ev.target.value);
       $(".estimate--letter").text(ev.target.value);
       $(".estimate--buttons").hide();
       $(".shirt").show();
   })  

    
    $(".shirt").click(function(){
        $(".shirt").hide();
        $(".estimate--buttons").show();
    })
});