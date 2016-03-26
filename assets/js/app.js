/**
 * Created by jelleoverbeek on 26-03-16.
 */

$(function() {

    $("#cancel-13dec").click(function () {
        $("#cancel-13dec-modal").fadeIn(300);
    });

    $(".cancel-13dec-submit").click( function() {
        $("#cancel-13dec").hide();
        $("#cancel-13dec-status").css('display', 'inline-block');
        $(".13dec").addClass("disabled");

        $("#cancel-13dec-modal").fadeOut(300);
    });

    $("#cancel-20dec").click(function () {
        $("#cancel-20dec-modal").fadeIn(300);
    });

    $(".cancel-20dec-submit").click( function() {
        $("#cancel-20dec").hide();
        $("#cancel-20dec-status").css('display', 'inline-block');
        $(".20dec").addClass("disabled");

        $("#cancel-20dec-modal").fadeOut(300);
    });
});