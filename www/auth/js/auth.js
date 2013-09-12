var Auth = {};
Auth.Helper = {
    validateEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
};

$(function () {

    $('.phone-input').mask("+7 (999) 999-99-99");

    $('[type=password]').each(function () {
        $(this).PasswordEye();
    });

    $('.checkbox-container .checkbox').Checkbox();

    $('.switch-container').each(function () {
        $(this).Switch(function (selected) {
            selected.parents('.row').find('input[type=text]').toggle(selected.data('last') == 1);

            validateAuthCheckData();
        });
    });

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


    var $popup_auth_email = $('#popup_auth_email');

    $popup_auth_email.find('input[type=text]').on('keyup', function () {
        $popup_auth_email.find('button').prop('disabled', $('#popup_auth_email').find('input[type=text]').val().length === 0);
    });
    $popup_auth_email.find('.popup-submit').on('click', function(){

        if(!Auth.Helper.validateEmail($popup_auth_email.find('input[type=text]').val())){
            $popup_auth_email.find('.popover').show();
            return false;
        }

        $popup_auth_email.find('.popover').hide();
        return true;
    });


    var $popup_auth_check_data = $('#popup_auth_check_data');

    function validateAuthCheckData() {
        var error = false;
        $popup_auth_check_data.find('.row').each(function () {
            error = error || ($(this).find('.switch-item.selected').data('last') == 1 && $(this).find('.switch-input-container input').val().length === 0);
        });
        $popup_auth_check_data.find('.popup-submit').prop('disabled', error);
    }
    validateAuthCheckData();

    $popup_auth_check_data.find('input[type=text]').keyup(validateAuthCheckData);


});