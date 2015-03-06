$(document).ready(function() {

    $('form').submit(function(event) {
        event.preventDefault();
    });

    function kasta($kastad) {

        var tal = Math.floor((Math.random() * 6) + 1);
        var talToString = tal.toString();
        $('<p>').text(talToString).appendTo("#box");
        console.log(talToString);
    }
    $(".kasta").click(function() {
        kasta();
    });

    var antal = $('.antal:checked').val();
    console.log(antal);
});