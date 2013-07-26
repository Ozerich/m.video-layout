$.fn.switch = function (onChange) {

    onChange = onChange || function () {
    };

    if (!($(this).hasClass('switch-container'))) {
        throw "Class 'switch-container' is not set'";
    }

    var children = $(this).find('.switch-item');
    if (children.length === 0) {
        return this;
    }

    children.each(function () {
        $(this).on('click', function () {
            if ($(this).hasClass('selected')) {
                return false;
            }

            children.filter('.selected').removeClass('selected');
            $(this).addClass('selected');

            onChange($(this));
        });
    });

    return this;
};