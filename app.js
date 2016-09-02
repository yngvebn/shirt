$(function(){
   $(".estimate__button").click(function(ev, target){
       console.log(ev.target.value);
       $(".estimate--letter").text(ev.target.value);
       $(".estimate--buttons").hide();
       $(".shirt").show();
   });  

    
    $(".shirt").click(function(){
        $(".shirt").hide();
        $(".estimate--buttons").show();
    });
  

    Array.prototype.getUnique = function(){
    var u = {}, a = [];
    for(var i = 0, l = this.length; i < l; ++i){
        if(u.hasOwnProperty(this[i])) {
            continue;
        }
        a.push(this[i]);
        u[this[i]] = 1;
    }
    return a;
    }
    function fibonacci(max){
        var i;
        var fib = []; // Initialize array!

        fib[0] = 0;
        fib[1] = 1;
        for(i=2; i<=max; i++)
        {
            // Next fibonacci number = previous + one before previous
            // Translated to JavaScript:
            fib[i] = fib[i-2] + fib[i-1];
        }
        fib.shift()
        return fib.getUnique();
    }
    window.fibonacci = fibonacci;
    
    var numbers = fibonacci(8);
    
    $(".number").click(function(){
        $(".number").hide();
        $(".estimate--buttons").show();
    });
    for(var i = 0; i< numbers.length;i++){
        var btn = $("<button />");
        btn.addClass("estimate__button");
        btn.text(numbers[i]);
        btn.attr('value', numbers[i]);
        btn.click(function(ev){
            console.log(ev.target.value);
            $(".number .small").text(ev.target.value);
            $(".number .large").text(ev.target.value);
            $(".number").show();
            $(".estimate--buttons").hide();
        });
        
        $("#numbers .estimate--buttons").append(btn);        
    }
        
    
    var hammertime = new Hammer(document.body, {});
    hammertime.on('swipe', function(ev) {
        $(".number").hide();
        $(".shirt").hide();
        $(".estimate--buttons").show();
        if(ev.deltaX > 0){
            $("#main").removeClass('out');
            $("#numbers").addClass('out');
        }
        else{
            console.log('<- swipe');
            $("#main").addClass('out');
            $("#numbers").removeClass('out');
        }
    });
});