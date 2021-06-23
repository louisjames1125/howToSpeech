// Smooth Scrolling - (for the up + down animation on the first and last page)
$('.up-down-animation').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});

// Adding a class names (fade-in / fade-out) on click of each back and next button in the main slideshow (the fade-in / fade-out classes add a cool fade affect using opacity through style.css)

$('.startPageNext').on('click', function (event) {
    var nextPage = document.getElementById("page-1");
    nextPage.classList.remove("fade-out");
    nextPage.classList.add("fade-in");
});

$('.page1Previous').on('click', function (event) {
    var thisPage = document.getElementById("page-1");
    thisPage.classList.remove("fade-in");
    thisPage.classList.add("fade-out");

});

$('.page1Next').on('click', function (event) {
    var thisPage = document.getElementById("page-1");
    var nextPage = document.getElementById("page-2");
    thisPage.classList.add("fade-out");
    nextPage.classList.remove("fade-out");
    nextPage.classList.add("fade-in");
});

$('.page2Previous').on('click', function (event) {
    var lastPage = document.getElementById("page-1");
    var thisPage = document.getElementById("page-2");
    lastPage.classList.remove("fade-out");
    lastPage.classList.add("fade-in");
    thisPage.classList.add("fade-out");
});

$('.page2Next').on('click', function (event) {
    var thisPage = document.getElementById("page-2");
    var nextPage = document.getElementById("page-3");
    thisPage.classList.add("fade-out");
    nextPage.classList.remove("fade-out");
    nextPage.classList.add("fade-in");
});

$('.page3Previous').on('click', function (event) {
    var lastPage = document.getElementById("page-2");
    var thisPage = document.getElementById("page-3");
    lastPage.classList.remove("fade-out");
    lastPage.classList.add("fade-in");
    thisPage.classList.add("fade-out");
});

$('.page3Next').on('click', function (event) {
    var thisPage = document.getElementById("page-3");
    var nextPage = document.getElementById("page-4");
    thisPage.classList.add("fade-out");
    nextPage.classList.remove("fade-out");
    nextPage.classList.add("fade-in");
});

$('.page4Previous').on('click', function (event) {
    var lastPage = document.getElementById("page-3");
    var thisPage = document.getElementById("page-4");
    lastPage.classList.remove("fade-out");
    lastPage.classList.add("fade-in");
    thisPage.classList.add("fade-out");
});

$('.page4Next').on('click', function (event) {
    var thisPage = document.getElementById("page-4");
    var nextPage = document.getElementById("page-5");
    thisPage.classList.add("fade-out");
    nextPage.classList.remove("fade-out");
    nextPage.classList.add("fade-in");
});

$('.page5Previous').on('click', function (event) {
    var lastPage = document.getElementById("page-4");
    var thisPage = document.getElementById("page-5");
    lastPage.classList.remove("fade-out");
    lastPage.classList.add("fade-in");
    thisPage.classList.add("fade-out");
});

$('.page5Next').on('click', function (event) {
    var thisPage = document.getElementById("page-5");
    var nextPage = document.getElementById("page-6");
    thisPage.classList.add("fade-out");
    nextPage.classList.remove("fade-out");
    nextPage.classList.add("fade-in");
});

$('.page6Previous').on('click', function (event) {
    var lastPage = document.getElementById("page-5");
    var thisPage = document.getElementById("page-6");
    lastPage.classList.remove("fade-out");
    lastPage.classList.add("fade-in");
    thisPage.classList.add("fade-out");
});

$('.page6Next').on('click', function (event) {
    var thisPage = document.getElementById("page-6");
    var nextPage = document.getElementById("page-end");
    thisPage.classList.add("fade-out");
    nextPage.classList.remove("fade-out");
    nextPage.classList.add("fade-in");
});

$('.endPagePrevious').on('click', function (event) {
    var lastPage = document.getElementById("page-6");
    lastPage.classList.remove("fade-out");
    lastPage.classList.add("fade-in");

});

// Opeing iframes on click of each one of the h1 tags (only on the 5th page)

$(".firstHalfVidTag").click(function () {
    $(".firstHalfVid").html('<h1 class="leftHalfVidTag">Backswing</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/4EiwXkP3Ywc" frameborder="0" allowfullscreen></iframe></iframe><a href="#page-4" class="button style-green up-down-animation page5Previous">Back <i class="fas fa-arrow-circle-left"></i></a>');

});

$(".secondHalfVidTag").click(function () {
    $(".secondHalfVid").html('<h1 class="leftHalfVidTag">Follow-through</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/tAF8ze_TbAM" frameborder="0" allowfullscreen></iframe></iframe><a href="#page-6" class="button style-green page5Next">Next <i class="fas fa-arrow-circle-right"></i></a>');
});