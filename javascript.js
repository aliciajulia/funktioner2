$(document).ready(function() {
//    console.log("hej");
    $(".kasta").click(function() {
        var x = Math.floor((Math.random() * 6) + 1);
       var n = x.toString();
        $('<p>').text(n).appendTo("#box1");
        console.log(n);
   
    });
});



