$.fn.PasswordEye = function (options) {
    var that = this;
    var $item = $(this);

    $item.wrap('<div class="input-eye-wr" style="width: ' + $item.innerWidth() + 'px"/>');
    $item.after('<i/>').after('<input style="display: none" type="text"/>');

    var $wrapper = $item.parent();

    $wrapper.find('input').width($wrapper.find('input[type=text]').width() - 20);

    var value = $wrapper.find('input[type=password]').val();

    $wrapper.find('input').on('change', function () {
        if ($(this).attr('type') == 'text') {
            $wrapper.find('input[type=password]').val($(this).val());
        }
        else {
            $wrapper.find('input[type=text]').val($(this).val());
        }
    });

    $wrapper.find('i').on('click', function () {
        $wrapper.toggleClass('input-pass-visible');
        $wrapper.find('input').toggle();
    });

};