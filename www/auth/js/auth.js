$(function () {
    if ($.browser.msie && $.browser.version <= 9) {
        $(':input[placeholder]').each(function () {

            $(this).val($(this).attr('placeholder'));

            $(this).on('focus',function () {
                if ($(this).val() == $(this).attr('placeholder')) {
                    $(this).val('');
                }
            }).on('blur', function () {
                    if ($(this).val().length === 0) {
                        $(this).val($(this).attr('placeholder'));
                    }
                });

        });
    }

    var $auth_form = $('.auth-form');

    var $email = $auth_form.find('.email');
    var $email2 = $auth_form.find('.email-2');
    var $password = $auth_form.find('input[type=password]');

    $email.on('keyup', function () {
        $auth_form.find('input[type=submit]:visible').prop('disabled', $email.val().length === 0 || $password.val().length === 0);
    });
    $password.on('keyup', function () {
        $auth_form.find('input[type=submit]:visible').prop('disabled', $email.val().length === 0 || $password.val().length === 0);
    });
    $email2.on('keyup', function () {
        $auth_form.find('input[type=submit]:visible').prop('disabled', $email2.val().length === 0);
    });

    $auth_form.find('.open-password-form').on('click', function () {
        $auth_form.find('#auth_form').hide();
        $auth_form.find('#password_form').show();
        $auth_form.find('#password_form').find('input[type=text]').val($auth_form.find('#auth_form').find('input[type=text]').val());
        $auth_form.find('#password_form').find('input[type=text]').trigger('keyup');
        return false;
    });

    $auth_form.find('.open-auth-form').on('click', function () {
        $auth_form.find('#password_form').hide();
        $auth_form.find('#auth_form').show();
        $auth_form.find('#auth_form').find('input[type=text]').val($auth_form.find('#password_form').find('input[type=text]').val());
        $auth_form.find('#auth_form').find('input[type=text]').trigger('keyup');
        return false;
    });

    $('#popup_auth_account_exists').find('input[type=password]').on('keyup', function () {
        $('#popup_auth_account_exists').find('button').prop('disabled', $('#popup_auth_account_exists').find('input[type=password]').val().length === 0);
    });

    $('#popup_auth_email').find('input[type=text]').on('keyup', function () {
        $('#popup_auth_email').find('button').prop('disabled', $('#popup_auth_email').find('input[type=text]').val().length === 0);
    });
});