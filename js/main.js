$(document).ready(function () {
        $(".go_to").click(function () {
                elementClick = $(this).attr("href");
                destination = $(elementClick).offset().top;
                $("body,html").animate({ scrollTop: destination }, 800);
        });
});
