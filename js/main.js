(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    // new WOW().init(); 


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:4
            }
        }
    });
    
})(jQuery)

function sendmail() {

    var name = $('#fname').val();
    var lname = $('#lname').val();
    var email = $('#email').val();
    var mobile = $('#phone').val();
    var message = $('#text').val();

    var Body = 'Name: ' + name + '<br>Lastname: ' + lname + '<br>Email: ' + email + '<br>Mobile: ' + mobile + '<br>Message: ' + message;


    var spinner = `<div class="spinner-border text-light" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;


    $("#sendQuote").html(spinner);

    function sent() {
        let message = document.getElementById('message');
        console.log(message)
        message.innerHTML = `<span style="padding:8px; margin-top:8px;" class="badge bg-primary">Thank you! We'll Get back to you soon.</span>`;
        setTimeout(() => {
            message.innerHTML = "";
        }, 5000);
    }

    function failed() {
        let message = document.getElementById('message');
        console.log(message)
        message.innerHTML = `<span style="padding:8px; margin-top:8px;" class="badge bg-danger">Try again.</span>`;
        setTimeout(() => {
            message.innerHTML = "";
        }, 5000);
    }
    var bookingForm = document.getElementById('bookingForm');

    Email.send({
        SecureToken: "37b7c044-261c-4420-a336-88e3a41ba178",
        To: 'support@holygienehealthcare.in',
        From: "holygienec@gmail.com",
        Subject: "Site Visitor :- " + name,
        Body: Body
    }).then(
        message => {
            if (message == 'OK') {
                // alert('Your mail has been send. Thank you for connecting.');
                sent();
                $("#sendQuote").text("Submit Request");
                bookingForm.reset();

            } else {
                // console.error(message);
                // alert('There is an error sending message.')
                failed();
                $("#sendQuote").text("Submit Request");

            }

        }
    );
}

