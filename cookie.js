// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

var windowHeight = $(window).height(),
    windowWidth = $(window).width();

// Call Quotes
function showFortune() {
    var $show = $('#show'),
        // Random Number
        i,
        // Quotes
        msg = [
            "A smile is your passport into the hearts of others.",
            "What ever your goal is in life, embrace it, visualize it, and for it will be yours.",
            "You cannot love life until you live the life you love.",
            "The man or woman you desire feels the same about you.",
            "Our deeds determine us, as much as we determine our deeds.",
            "You can make your own happiness.",
            "A stranger is a friend you have not spoken to yet.",
            "A journey of a thousand miles begins with a single step.",
            "Believing that you are beautiful will make you appear beautiful to others around you.",
            "If you refuse to accept anything but the best, you very often get it.",
            "Failure is only the opportunity to begin again more intelligently.",
            "Integrity is doing the right thing, even if nobody is watching.",
            "Conquer your fears or they will conquer you.",
            "In this life it is not what we take up, but what we give up, that makes us rich.",
            "A single conversation with a wise man is better than ten years of study.",
            "The world may be your oyster, but that doesn't mean you'll get it's pearl.",
            "Do not follow where the path may lead. Go where there is no path...and leave a trail.",
            "We can't help everyone. But everyone can help someone.",
            "All the water in the world can't sink a ship unless it gets inside.",
            "Generosity will repay itself sooner than you imagine."
        ];

    // Remove Currently Displayed Quote
    if($show != null) {
        $show.hide();
    }
    i = Math.floor((Math.random() * 20));

    // Show Selected Quote
    $show.fadeIn("slow").text(msg[i]);
} // end showFortune function

$(document).ready(function(){
    // Call Quotes
    var $fortune = $(".fortune");
    $fortune.on('click', function() {
        showFortune();
    });
}); // end ready
