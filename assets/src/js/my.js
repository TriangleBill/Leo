$(".tab").on("click",function (event) {
    event.preventDefault();

    $(".tab").removeClass("active");
    $(this).addClass("active");
})