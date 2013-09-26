$.fn.PasswordEye = function (options) {

    if($.browser.msie && $.browser.version <= 9){
       // return;
    }

    var that = this;
    var $item = $(this);

    var width = $item.outerWidth() - 46;

    $item.wrap('<div class="input-eye-wr" style="width: ' + width + 'px"/>');
    $item.after('<i/>').after('<input style="display: none" type="text"/>');

    var $wrapper = $item.parent();

    $wrapper.find('input').width(width);

    var value = $wrapper.find('input[type=password]').val();

    $wrapper.find('input').on('change', function () {
        if ($(this).attr('type') == 'text') {
            $wrapper.find('input[type=password]').val($(this).val());
        }
        else {
            $wrapper.find('input[type=text]').val($(this).val());
        }
    }).on('focus', function(){
            $(this).parents('.input-eye-wr').addClass('focus');
        }).on('blur', function(){
            $(this).parents('.input-eye-wr').removeClass('focus');
        });

    $wrapper.find('i').on('click', function () {
        $wrapper.toggleClass('input-pass-visible');
        $wrapper.find('input').toggle();
    });

};