$.fn.Checkbox = function (onChange) {

    onChange = onChange || function () {
    };

    if (!($(this).hasClass('checkbox'))) {
        throw "Class 'checkbox' is not set'";
    }

    $(this).on('click', function () {

        $(this).toggleClass('checkbox-checked');
        onChange($(this).hasClass('checkbox-checked'));

        $(this).trigger('change');

        return false;
    });

    return this;
};