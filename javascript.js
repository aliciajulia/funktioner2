$(document).ready(function() {

    $('form').submit(function(event) {
        event.preventDefault();
    });

    function kasta(kastad) {
        var summa = 0;
        var tal = new Array();
        for (var i = 0; i < kastad; i++) {
            var tmp = Math.floor((Math.random() * 6) + 1);
            summa += tmp;
            tal.push(tmp);
        }
        var x = tal.length;
        $("#p").html("");
        for (var a = 0; a < x; a++) {
            if (a == x - 1) {
                $("<p>").text(tal[a]).appendTo("#p");
            }
            else {
                $("<p>").text(tal[a] + "+").appendTo("#p");
            }
        }
        $("<p>").text("=" + summa).appendTo("#p");
        switch (x) {
            case 1:
                $('<p>').text(summa).appendTo("#box1");
//                console.log(summa);
                break;
            case 2:
                $('<p>').text(summa).appendTo("#box2");
                break;
            case 3:
                $('<p>').text(summa).appendTo("#box3");
                break;
            default:
                $('<p>').text("Något gick fel").appendTo("#p");
        }


    }
    $(".kasta").click(function() {
        var antal = $('.antal:checked').val();
//        console.log(antal);
        kasta(antal);

    });


});