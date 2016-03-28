/**
 * Created by jelleoverbeek on 26-03-16.
 */

$(function() {

    $("#25dec-item").hide();
    
    $("#cancel-13dec").click(function () {
        $("#cancel-13dec-modal").fadeIn(300);
    });

    $("#cancel-13dec-cancel").click( function() {
        $("#cancel-13dec-modal").fadeOut(300);
    });
    
    $("#cancel-13dec-submit").click( function() {
        $("#cancel-13dec").hide();
        $("#cancel-13dec-status").css('display', 'inline-block');
        $(".13dec").addClass("disabled");

        $("#cancel-13dec-modal").fadeOut(300);
    });

    $("#cancel-20dec").click(function () {
        $("#cancel-20dec-modal").fadeIn(300);
    });

    $("#cancel-20dec-cancel").click( function() {
        $("#cancel-20dec-modal").fadeOut(300);
    });

    $("#cancel-20dec-submit").click( function() {
        $("#cancel-20dec").hide();
        $("#cancel-20dec-status").css('display', 'inline-block');
        $(".20dec").addClass("disabled");

        $("#cancel-20dec-modal").fadeOut(300);
    });

    $("#new-appointment").click( function() {
        $("#new-appointment-modal").fadeIn(300);
    });

    $("#new-appointment-cancel").click( function() {
        $("#new-appointment-modal").fadeOut(300);
    });

    $("#new-appointment-submit").click( function() {
        $("#25dec-item").fadeIn(300);
        $("#new-appointment-modal").fadeOut(300);
    });

    $(".toggle").click( function () {
        $(".toggle").removeClass('active');
        $(this).addClass('active');

        if( $(".left-toggle").hasClass("active")) {
            
            $("#location").html('Kalverstraat 10, Amsterdam <span class="color-red">(Niet aanpasbaar)</span>');
            
        } else if( $(".right-toggle").hasClass("active")) {
            
            $("#location").html('N.v.t. <span class="color-red">(Niet aanpasbaar)</span>');
            
        }
    });

    $(".calendar .days td").click( function (){

        if($(".calendar td.selected")) {
            $(".calendar td.selected").removeClass('selected');
        }

        if($(this).hasClass('other-month') == false && $(this).hasClass('unavailable') == false && $(this).hasClass('greyed-out') == false) {
                $(this).toggleClass('selected');
                $(".calendar-input").val($(this).text() + " - 12 - 2016");
        }

    });

    var chatInputObj = $("#chat-input-obj");
    var chatInputBtn = $("#chat-input-btn");
    var chatObj = $("#chat-obj");
    var chatMessageObj = $("#chat-message-obj");

    chatInputObj.keyup( function () {
        if($(this).val()) {
            chatInputBtn.removeClass('disabled');
        } else {
            chatInputBtn.addClass('disabled');
        }
    });

    chatInputBtn.click( function() {
       if(chatInputObj.val()) {
           chatMessageObj.text(chatInputObj.val());
           chatInputObj.val('');
           chatInputBtn.addClass('disabled');
           
           chatObj.fadeIn(150);
       }
    });

    function sliderInit(id) {
        $('#'+id).rangeslider({
            polyfill: false,

            // Callback function
            onSlide: function(position, value) {
                $('#'+id+'-value').text(value);
            }
        });
    }

    $('#toggle-volume-control').click( function() {
        $("#settings").fadeOut(150);
        $("#volume-control").fadeToggle(150);
    });

    $('#toggle-settings').click( function() {
        $("#volume-control").fadeOut(150);
        $("#settings").fadeToggle(150);
    });

    var volumeSlider = $('#volume-slider').rangeslider({ polyfill: false });

    $('#volume-min').click( function() {
        volumeSlider.val(0);
        volumeSlider.rangeslider('update', true);
    });

    $('#volume-max').click( function() {
        volumeSlider.val(100);
        volumeSlider.rangeslider('update', true);
    });
    
    sliderInit('happiness');
    sliderInit('angry');
    sliderInit('scared');

    $('#submit-results').click( function() {
        console.log(1);
        $('.score').fadeOut(200);

        function fadeInResultsSend() {
            $('#results-send').fadeIn(200);
        }

        function redirect() {
            window.location.href = "../dashboard.html"
        }

        setTimeout(fadeInResultsSend, 200);
        setTimeout(redirect, 2000);
    });
});

