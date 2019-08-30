$(document).ready(function(){

$("#objBTN").click(function () {
        $("html, body").animate({ scrollTop: $("#obj").offset().top
    }, 1000);
    });
$("#qualBTN").click(function () {
        $("html, body").animate({ scrollTop: $("#qual").offset().top
    }, 1000);
    });
$("#skillsBTN").click(function () {
        $("html, body").animate({ scrollTop: $("#skills").offset().top
    }, 1000);
    });
$("#eduBTN").click(function () {
        $("html, body").animate({ scrollTop: $("#edu").offset().top
    }, 1000);
    });
$("#expBTN").click(function () {
        $("html, body").animate({ scrollTop: $("#exp").offset().top
    }, 1000);
    });

});