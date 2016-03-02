/**
 * Created by Bernadette on 2/8/2016.
 */
// Copyright Year
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;

//Window height
$(document).ready(function(){
    var windowHeight=$(window).height();
    $(window).height(windowHeight+"px");

    var windowWidth=$(window).width();
    //alert(windowWidth);
});


var msg = new Array();
msg[1] = "A smile is your passport into the hearts of others.";
msg[2] = "What ever your goal is in life, embrace it, visualize it, and for it will be yours.";
msg[3] = "You cannot love life until you live the life you love.";
msg[4] = "The man or woman you desire feels the same about you.";
msg[5] = "Our deeds determine us, as much as we determine our deeds.";
msg[6] = "You can make your own happiness.";
msg[7] = "A stranger is a friend you have not spoken to yet.";
msg[8] = "A journey of a thousand miles begins with a single step.";
msg[9] = "Believing that you are beautiful will make you appear beautiful to others around you.";
msg[10] = "If you refuse to accept anything but the best, you very often get it.";


var i = Math.floor((Math.random() * 10) + 1);

function fortune() {
    var x = document.getElementById("show")
    x.innerHTML = (msg[i]);
}
