
// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

//Variables
var windowHeight=$(window).height(),
    windowWidth=$(window).width(),
    msg = new Array(),
    i,
    x = document.getElementById("show");

// Quotes
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
msg[11] = "Failure is only the opportunity to begin again more intelligently.";
msg[12] = "Integrity is doing the right thing, even if nobody is watching.";
msg[13] = "Conquer your fears or they will conquer you.";
msg[14] = "In this life it is not what we take up, but what we give up, that makes us rich.";
msg[15] = "A single conversation with a wise man is better than ten years of study.";
msg[16] = "The world may be your oyster, but that doesn't mean you'll get it's pearl.";
msg[17] = "Do not follow where the path may lead. Go where there is no path...and leave a trail.";
msg[18] = "We can't help everyone. But everyone can help someone.";
msg[19] = "All the water in the world can't sink a ship unless it gets inside.";
msg[20] = "Generosity will repay itself sooner than you imagine.";

$(document).ready(function(){
    // Window height
    $(window).height(windowHeight+"px");

    //alert(windowWidth);

    // Call Quotes
    $(".fortune").on('click', function() {
        fortune();
    });
});

// Call Quotes
function fortune() {
    i = Math.floor((Math.random() * 20) + 1);
    x.innerHTML = (msg[i]);
}
