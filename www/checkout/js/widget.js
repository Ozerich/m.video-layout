function Widget(_id) {
    var that = this;

    this.id = _id;
    this.element = $('#' + _id);

    this.opened = false;

    var $widget = this.element;

    if (!this.element.length === 0) {
        throw "Widget is no found on page";
    }

    if (this.element.hasClass('widget') === false) {
        throw "Widget must have class 'widget'";
    }


    this.accepted = false;
    this.setAccepted = function (_value) {
        this.accepted = _value ? true : false;
        if (this.accepted) {
            $widget.addClass('accepted');
        }
        else {
            $widget.removeClass('accepted');
        }
    };

    this.onSubmit = null;
    this.onOpen = null;
    this.onClose = null;

    this.submitButton = $widget.find('.widget-submit');
    this.submitButton.on('click', function () {

        var $footer_tooltip = that.element.find('.widget-footer .error-tooltip');

        if ($(this).hasClass('btn-disabled')) {

            var tooltipHtml = '';
            var validateResult = that.validate();

            that.element.find('.error').removeClass('error').removeClass('error-with-tooltip');
            that.element.find('.error-tooltip').hide();

            for (var i in validateResult) {
                var error = validateResult[i];
                var $input = error.input;

                if ($input) {
                    if (error.label) {
                        tooltipHtml += '<li><span>–</span> ' + error.label + '</li>';
                    }
                    else {
                        $input.addClass('error-with-tooltip');
                        var $errorTooltip = $input.next();
                        if ($errorTooltip && $errorTooltip.hasClass('error-tooltip')) {
                            $errorTooltip.find('.error-content').html(error.error);
                            $errorTooltip.show();
                        }
                    }

                    $input.addClass('error');
                }
            }

            if ($footer_tooltip.length && tooltipHtml.length) {
                $footer_tooltip.find('ul').html(tooltipHtml);
                $footer_tooltip.show();
            }

            return false;
        }
        else {

            if ($footer_tooltip.length > 0) {
                $footer_tooltip.hide();
            }

            if (that.onSubmit) {
                that.onSubmit();
            }
        }
        return false;
    });

    this.submitEnabledMode = false;
    this.setSubmitEnabledMode = function (_value) {
        this.submitEnabledMode = _value ? true : false;
        this.submitButton.toggleClass('btn-disabled', this.submitEnabledMode);
    };


    this.validateInput = function (input) {
        input = $(input);
        var inputId = input.attr('id');
        if (!inputId) {
            return true;
        }

        var value = input.val();

        switch (inputId) {
            case "address_city":
                if (value.length === 0) {
                    return {
                        label: 'Город',
                        input: input,
                        error: 'Не заполнен город'
                    };
                }
                break;

            case "address_street":
                if (value.length === 0) {
                    return {
                        label: 'Адрес',
                        input: input,
                        error: 'Не заполнен Адрес'
                    };
                }
                break;

            case "address_home":
                if (value.length === 0) {
                    return {
                        label: 'Дом',
                        input: input,
                        error: 'Не заполнен Дом'
                    };
                }
                break;

            case "address_phone":
                if (value.length === 0) {
                    return {
                        label: 'Телефон',
                        input: input,
                        error: 'Не заполнен Телефон'
                    };
                }
                break;

            case "address_flat":
                if (value.length === 0) {
                    return {
                        label: 'Квартира',
                        input: input,
                        error: 'Не заполнен Квартира'
                    };
                }
                break;

            case "personal_phone":
                break;

            case "personal_email":
                if (value.length === 0) {
                    return {
                        label: 'Электронная почта',
                        input: input,
                        error: 'Не заполнен E-mail'
                    };
                }
                else if (Checkout.Helper.validateEmail(value) === false) {
                    return {
                        input: input,
                        error: '<p>Неверный формат адреса электронной почты. Он должен выглядеть примерно так:</p><p class="bold">mail@mail.ru</p>'
                    };
                }
                break;

            case "personal_name":
                if (value.length === 0) {
                    return {
                        label: 'Имя',
                        input: input,
                        error: 'Имя'
                    };
                }
                break;

            case "personal_surname":
                break;


            case "personal_agreement":

                if (input.hasClass('checkbox-checked') === false) {
                    return {
                        label: '',
                        input: null,
                        error: 'Вы не приняли соглашение'
                    };
                }

                break;

        }

        return true;
    };


    this.validate = function () {

        var inputs = [];

        if (this.id == 'address_time_block') {
            inputs = [$('#address_city'), $('#address_street'), $('#address_home'), $('#address_phone'), $('#address_flat')];
        } else if (this.id == 'personal_block') {
            inputs = [$('#personal_phone'), $('#personal_email'), $('#personal_name'), $('#personal_surname'), $('#personal_agreement')];
        }

        var errors = [];
        var v;
        for (var i in inputs) {
            var input = inputs[i];
            v = that.validateInput(input);
            if (v !== true) {
                errors.push(v);
            }
        }

        return errors;
    };

    this.onChanged = function () {
        var validateResult = this.validate();

        if (validateResult.length === 0) {
            this.setSubmitEnabledMode(false);
        }
        else {
            that.setSubmitEnabledMode(true);
        }

        var $footerTooltip = that.element.find('.error-tooltip');
        if ($footerTooltip) {
            $footerTooltip.hide();
        }
    };


    this.prepareOpened = function () {
        var deliveryData = Checkout.getDeliveryData();

        var $block = $widget.find('.opened');

        if (this.id == 'address_time_block') {
            var deliveryData = Checkout.getDeliveryData();

            $block.find('.pickups .pickup').not('.example').remove();

            if (deliveryData.onlyCourier) {
                $block.find('.block-line-header').hide();
            }
            else {
                $block.find('.block-line-header').show();

                for (var i = 0; i < deliveryData.pickups.length; i++) {
                    if (!deliveryData.pickups[i].pickup)continue;

                    var $pickup = $block.find('.pickups .pickup.example').clone();

                    $pickup.show().removeClass('example');

                    $pickup.find('.block-line-header h3').text('Самовывоз (' + deliveryData.pickups[i].pickup.name + ')');

                    var item_names = [];
                    for (var j = 0; j < deliveryData.pickups[i].items.length; j++) {
                        item_names.push(deliveryData.pickups[i].items[j].name);
                    }

                    $pickup.find('.item-name').html(item_names.join('<span class="delimeter"> | </span>'));

                    $block.find('.pickups').append($pickup);
                }
            }
        }

        if (this.id == 'payment_block') {

            $('#basket').toggle(!deliveryData.isClinic);
            $widget.find('.items-info-block, .summary-clinic-block, .block-line-header').not('.example').toggle(deliveryData.isClinic);
            $block.find('.payment-methods-container.courier-container').toggle(deliveryData.hasCourier);
            $block.find('.pickups-container').toggle(!deliveryData.onlyCourier);

            $block.find('.payment-methods-container').each(function () {
                var $container = $(this);

                $container.find('.method').each(function () {
                    var $method = $(this);
                    $method.find('.radio-header').on('click', function () {

                        if ($(this).hasClass('method-selected')) {
                            return false;
                        }

                        $container.find('.method-selected').removeClass('method-selected').find('.radio.selected').removeClass('selected');
                        $method.addClass('method-selected').find('.radio').addClass('selected');

                        return false;
                    });
                })
            });

            if (deliveryData.isClinic) {
                $block.find('.pickups-container .pickup').not('.example').remove();

                for (var i = 1; i < deliveryData.pickups.length; i++) {
                    var $pickup = $block.find('.pickups-container .pickup.example').clone();
                    $pickup.removeClass('example').show();

                    $pickup.find('.shop-name').text(deliveryData.pickups[i].pickup.name);

                    $block.find('.pickups-container').append($pickup);
                }

                var total_amount = 0;
                for (i = 0; i < deliveryData.pickups.length; i++) {
                    var items = deliveryData.pickups[i].items;
                    var pickup = deliveryData.pickups[i].pickup;

                    var $infoblock = $widget.find('.items-info-block.example').clone();
                    $infoblock.removeClass('example').show();

                    $infoblock.find('.show-items-btn').text(items.length + ' ' + Checkout.Helper.getItemsCountLabel(items.length));

                    $infoblock.find('.popover-content').empty();
                    var cost = 0, total = 0, item;
                    for (j = 0; j < items.length; j++) {
                        item = items[j];
                        cost += item.price;

                        var $item = $widget.find('.items-info-block-popover-item.example').clone();
                        $item.removeClass('example').show();
                        $item.toggleClass('first', j === 0);

                        $item.find('.item-name').text(item.name);
                        $item.find('.price-total').text(Checkout.Helper.getAmountLabel(item.price));
                        $item.find('.items-count').text(item.count);
                        $item.find('.price-single').text(Checkout.Helper.getAmountLabel(item.singlePrice));
                        $item.find('.item-image img').attr('src', item.image_src);

                        $infoblock.find('.popover-content').append($item);
                    }

                    total = cost;
                    total_amount += total;

                    $infoblock.find('.items-info-block-content .items-cost').text(Checkout.Helper.getAmountLabel(cost));
                    $infoblock.find('.items-info-block-content .total-amount').text(Checkout.Helper.getAmountLabel(cost));


                    var $container = pickup ? $($block.find('.pickups-container .pickup').get(i)) : $block.find('.courier-container');
                    $container.find('.items-info-block').remove();
                    $container.find('.block-line-header').after($infoblock);
                }
                $('.summary-clinic-block').find('.total-amount').text(Checkout.Helper.getAmountLabel(total_amount));
            }

        }

    };

    this.prepareClosed = function () {
        var $block = $widget.find('.closed');

        var deliveryData = Checkout.getDeliveryData();

        if (this.id == 'delivery_method_block') {

            if (deliveryData.onlyCourier) {
                $block.find('.simple').show();
                $block.find('.clinic').hide();
            }
            else {
                $block.find('.simple').hide();
                $block.find('.clinic .item-summary').not('.example').remove();

                for (var i = 0; i < deliveryData.pickups.length; i++) {
                    var $row = $block.find('.clinic .example').clone();

                    $row.show().removeClass('example');

                    if (i === 0) {
                        $row.addClass('first');
                    }

                    $row.find('.item-pickup span').text(deliveryData.pickups[i].pickup ? 'Самовывоз' : 'Доставка курьером');
                    $row.find('.item-pickup a').text(deliveryData.pickups[i].pickup ? deliveryData.pickups[i].pickup.name : '');

                    var item_names = [];
                    for (var j = 0; j < deliveryData.pickups[i].items.length; j++) {
                        item_names.push(deliveryData.pickups[i].items[j].name);
                    }

                    $row.find('.item-name').html(item_names.join('<span class="delimeter"> | </span>'));

                    $block.find('.clinic').append($row);
                }

                $block.find('.clinic').show();
            }
        }

        if (this.id == 'address_time_block') {

            if ($('#address_city').val().length === 0) {
                this.element.find('.filled').hide();
                this.element.find('.no-filled').show();
                return;
            }

            if (deliveryData.onlyCourier) {
                $block.find('.address-container, .courier-container').show();
                $block.find('.pickups-container').hide();
            }
            else {
                $block.find('.pickups-container').show();
            }

            $block.find('.address-container, .courier-container').toggle(deliveryData.hasCourier);
            $block.find('.courier-container').find('.not-courier-only').toggle(!deliveryData.onlyCourier)

            if (deliveryData.hasCourier) {

                $block.find('.address-container .address').text($('#address_city').val() + ', ' + $('#address_street').val() + ', д.' +
                    $('#address_home').val() + ', ' +
                    ($('#address_korpus').val().length ? 'корп. ' + $('#address_korpus').val() + ', ' : '') +
                    'кв. ' + $('#address_flat').val()
                );

                $block.find('.address-container .phone').text($('#address_phone').val());

                var comment = $('#address_comment').val();
                $block.find('.address-container .user-comment').toggle(comment.length > 0).text(comment);

                var $selectedDay = this.element.find('.row-day .day.selected');
                var $selectedTime = this.element.find('.row-time .period.selected');
                $block.find('.delivery-time').text($selectedDay.find('a').text() + ' ' + $selectedTime.find('span:first').text() +
                    ' (' + $selectedDay.find('span').text() + ' ' + $selectedTime.find('span:eq(1)').text() + ')'
                );

                this.element.find('.filled').show();
                this.element.find('.no-filled').hide();

                var $personal_phone = $('#personal_phone');
                if ($personal_phone.val().length === 0) {
                    $personal_phone.val($('#address_phone').val());
                }
            }

            $block.find('.pickups-container .pickup').not('.example').remove();
            for (i = 0; i < deliveryData.pickups.length; i++) {
                if (deliveryData.pickups[i].pickup === null)continue;

                var $pickup = $block.find('.pickups-container .pickup.example').clone();
                $pickup.removeClass('example').show();
                $pickup.find('.param').text('Самовывоз (' + deliveryData.pickups[i].pickup.name + ')');

                $block.find('.pickups-container').append($pickup);
            }

        }

        if (this.id == 'personal_block') {

            if ($('#personal_name').val().length === 0) {
                $block.find('.filled').hide();
                $block.find('.no-filled').show();
                return;
            }

            var surname = $('#personal_surname').val();
            var phone = $('#personal_phone').val();

            $block.text($('#personal_name').val() +
                (surname.length ? ' ' + surname : '') + ', ' +
                $('#personal_email').val() + (phone ? ', ' + phone : '')
            );

            $block.find('.filled').show();
            $block.find('.no-filled').hide();
        }


        if (this.id == 'payment_block') {
            $('#basket').show();
        }

    };

    this.close = function (immediately) {
        immediately = immediately || false;
        immediately = true;

        $widget.removeClass('opened');
        $widget.find('.btn-open').show();

        this.prepareClosed();

        if (!immediately) {
            $widget.find('.opened').slideUp(function () {
                $widget.find('.closed').slideDown();
            });
        } else {
            $widget.find('.opened').hide();
            $widget.find('.closed').show();
        }

        if (this.onClose) {
            this.onClose();
        }
    };

    this.open = function (immediately) {
        immediately = immediately || false;
        immediately = true;

        $('.widget').each(function () {
            var api = $(this).data('api');
            if (api) {
                api.close();
            }
        });

        this.prepareOpened();

        $widget.removeClass('accepted').addClass('opened');

        $widget.find('.btn-open').hide();

        if (!immediately) {
            $widget.find('.closed').slideUp(function () {
                $widget.find('.opened').slideDown();
            });
        } else {
            $widget.find('.closed').hide();
            $widget.find('.opened').show();
        }

        that.opened = true;

        if (this.onOpen) {
            this.onOpen();
        }

        this.onChanged();
        that.element.find('.error').removeClass('error');
    };


    $widget.find('.btn-open').on('click', function () {
        that.open();
        return false;
    });

    if (this.id == 'delivery_method_block') {
        $widget.find('.item').each(function () {
            var $item = $(this);

            $item.find('.switch-container').Switch(function (selected) {
                $item.data('model').setIsPickup(selected.data('id') === 'pickup');
            });


            // Попап для самовывоза
            var $popup = $('#popup_pickup');

            // Нажатие на "Закрыть попап"
            $popup.find('.popup-close-btn').click(function () {
                $.unblockUI();
                return false;
            });

            // Нажатие на выбор магазина
            $popup.find('.table-body .cell-order a').click(function () {

                var itemModel = Checkout.findItemById($popup.data('id'));
                if (!itemModel)return;

                var pickupModel = $(this).parents('tr').data('model');
                if (!pickupModel)return;

                itemModel.setPickup(pickupModel);

                $.unblockUI();
                return false;
            });

            // Нажатие на "Изменить место доставки"
            $item.find('.change-pickup').click(function () {
                var model = $(this).parents('.item').data('model');
                $popup.data('id', model.id);
                $popup.find('.item-link').text($item.find('.item-name').text()).attr('href', 'http://mvideo.ru/products/' + model.id + '.html');

                $.blockUI({
                    message: $popup,
                    css: {
                        top: ($(window).height() - 680) / 2 + 100 + 'px',
                        left: ($(window).width() - 690) / 2 + 'px',
                        background: '#ffffff',
                        width: '690px',
                        'max-height': '500px',
                        border: 'none',
                        '-webkit-border-radius': '10px',
                        '-moz-border-radius': '10px',
                        cursor: 'auto'
                    },
                    overlayCSS: {
                        cursor: 'auto'
                    }
                });


                return false;
            });
        });
    }

    if (this.id == 'address_time_block') {

        $widget.find('.row-day .days').Switch(function (selected) {
            if (selected.hasClass('today')) {
                that.element.find('.row-time .today-period').show();
                that.element.find('.row-time .period-block').hide();
            }
            else {
                that.element.find('.row-time .today-period').hide();
                that.element.find('.row-time .period-block').show();
            }
        });

        $widget.find('.row-time .period-block').Switch();

        $widget.find('.btn-calendar').click(function (event) {
            if ($(event.target).parents('.tooltip-block').length || $(event.target).hasClass('tooltip-block')) {
                return false;
            }

            $(this).find('.tooltip-block').toggle();
            return false;
        });

        $widget.find('#delivery_calendar').Calendar({
            onChange: function (date) {

                var month_names = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
                var week_names = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

                var $day = $widget.find('.row-day .day.last');

                $day.find('a').text(date.getDate() + ' ' + month_names[date.getMonth()]);
                $day.find('span').text(week_names[date.getDay() == 0 ? 6 : date.getDay() - 1]);
                $day.find('a').trigger('click');

                $widget.find('.btn-calendar .tooltip-block').hide();
            }
        });

        $widget.find('#address_city').AutoComplete({
            url: 'http://www.mvideo.ru/suggest/usersRegions.php?term=',
            prepareItem: function (object, request) {
                return '<span class="city"><strong>' + object.city.substr(0, request.length) + '</strong>' + object.city.substr(request.length) + '</span><span class="full">' + object.full + '</span>'
            },
            noItemsHtml: '<p class="no-found">Нет совпадений</p>',
            onSelect: function (object) {
                return object.city;
            }
        });

    }

    if (this.id == 'address_time_block' || this.id == 'personal_block') {
        $widget.find(':input, .checkbox').change(function () {

            if ($(this).hasClass('error') && that.validateInput($(this))) {
                $(this).removeClass('error');
            }

            that.onChanged();
        }).focus(function () {
                var $footerTooltip = that.element.find('.error-tooltip');
                if ($footerTooltip) {
                    $footerTooltip.hide();
                }
            });
    }

    if (this.id == 'personal_block') {
        $("#personal_agreement").Checkbox();
    }
    if (this.id == 'address_time_block') {
        $("#address_attach_phone").Checkbox();
    }


    if (this.id == 'payment_block') {
        $widget.find('.bonuscard-button').click(function () {
            Checkout.openPopup($('#popup_bonuscard'));
            return false;
        });
        $('.checkbox').Checkbox();
    }

    that.element.find('.checkbox-label').click(function () {
        that.onChanged();
        return false;
    });

    $widget.data('api', this);
}