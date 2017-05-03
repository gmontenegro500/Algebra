$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1600);
                return false;
            }
        }
    });
});

$(function () {
    $('#form-main').validate({
        rules: {
            f_name: {
                required: true,
                lettersonly: true
            },
            l_name: {
                required: true,
                lettersonly: true
            },
            phone: {
                required: true,
                number: true
            },
            email: {
                required: true,
                email: true
            },
            post_code: {
                required: true,
                number: true
            },
            b_day: {
                required: true,
                date: true
            }

        },
        submitHandler: function (form) {
            $("#form-submit").prop("disabled", "disabled");
            $.post('contact.php', {
                f_name: $('#f_name').val(),
                l_name: $('#l_name').val(),
                phone: $('#phone').val(),
                email: $('#email').val(),
                post_code: $('#post_code').val(),
                b_day: $('#b_day').val()
            }, function (data) {

                if (data == 'Thank you, mail sent successfully!') {
                    $("#success").text(data).fadeIn();
                }
                else {
                    $("#error").text(data).fadeIn();
                }
            });

        }
    });
});