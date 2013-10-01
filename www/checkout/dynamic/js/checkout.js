var Checkout = {

    pickups: [],

    addPickup: function (_pickup) {

        if (_pickup instanceof Pickup === false) {
            throw "Error in addPickup: variable must be object of class Pickup";
        }

        this.pickups.push(_pickup);
    },

    findPickupById: function (_id) {

        for (var i = 0; i < this.pickups.length; i++) {
            if (this.pickups[i].id === _id) {
                return this.pickups[i];
            }
        }

        return null;
    },

    items: [],

    addItem: function (_item) {

        if (_item instanceof Item === false) {
            throw "Error in addItem: variable must be object of class Item";
        }

        this.items.push(_item);
    },

    findItemById: function (_id) {

        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === _id) {
                return this.items[i];
            }
        }

        return null;
    },


    getDeliveryData: function () {
        var result = [];
        var i, j;

        var courierItems = [];
        for (i = 0; i < this.items.length; i++) {
            if (!this.items[i].isPickup) {
                courierItems.push(this.items[i]);
            }
        }

        if (courierItems.length > 0) {
            result.push({
                pickup: null,
                items: courierItems
            });
        }

        for (i = 0; i < this.pickups.length; i++) {
            var items = [];

            for (j = 0; j < this.items.length; j++) {
                if (this.items[j].isPickup && this.items[j].pickup.id == this.pickups[i].id) {
                    items.push(this.items[j]);
                }
            }

            if (items.length > 0) {
                result.push({
                    pickup: this.pickups[i],
                    items: items
                });
            }
        }

        return {
            pickups: result,
            hasCourier: result.length > 0 && result[0].pickup === null,
            onlyCourier: result.length === 1 && result[0].pickup === null,
            isClinic: result.length > 1 || (result.length == 1 && result[0].pickup !== null),
        };
    }

};

Checkout.Helper = {

    validateEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    getItemsCountLabel: function (count) {
        if (count === 1) {
            return 'товар';
        }
        if (count >= 2 && count <= 4) {
            return 'товара';
        }
        if (count >= 5) {
            return 'товаров';
        }
    },

    getAmountLabel: function (amount) {
        amount = amount.toString();

        if (amount.length < 4) {
            return amount;
        }

        if (amount.length >= 4 && amount.length <= 6) {
            return amount.substr(0, amount.length - 3) + ' ' + amount.substr(amount.length - 3, 3);
        }

        return amount;
    }
};

Checkout.openPopup = function ($popup, callback) {
    $popup.find('.popup-close-btn').on('click', function () {
        $.unblockUI();
        return false;
    });

    $.blockUI({
        message: $popup,
        baseZ: 1000000000,
        css: {
            top: ($(window).height() - $popup.outerHeight()) / 2 + 'px',
            left: ($(window).width() - $popup.outerWidth()) / 2 + 'px',
            width: $popup.outerWidth() + 'px',
            border: 'none',
            cursor: 'auto'
        },
        onBlock: callback
    });
};

jQuery(function ($) {

    // Собираю все заказы
    $('.order-block').find('.order-item').each(function () {
        var $item = $(this);

        var item = new Item($item.data('id'));

        item.setSinglePrice($item.data('price'));
        item.setCount($item.data('count'));

        var itemPickup = $item.data('pickup');
        if (itemPickup) {
            item.setIsPickup(true);
            item.setPickupId(itemPickup);
        }
        else {
            item.setIsPickup(false);
        }
        item.setName($item.find('.order-item-name').text());
        item.setImageSrc($item.find('.order-item-image img').attr('src'));


        Checkout.addItem(item);
    });

    // Собираю все пункты самовывоза
    $('#popup_pickup').find('.shop-line').each(function () {
        var $pickup = $(this);

        var pickup = new Pickup;

        pickup.id = $pickup.data('id');
        pickup.address = $pickup.data('address');
        pickup.metro = $pickup.data('metro');
        pickup.name = $pickup.data('name');

        Checkout.addPickup(pickup);
        $pickup.data('model', pickup);
    });


    $('.checkbox-label').click(function () {
        $(this).toggleClass('checked');
        $(this).find('input[type=checkbox]').val($(this).hasClass('checked') ? 1 : 0);
        return false;
    });

    $('.phone-input').mask("+7 (999) 999-99-99");


    var deliveryWidget = new Widget('delivery_method_block');
    var addressWidget = new Widget('address_time_block');
    var personalWidget = new Widget('personal_block');
    var paymentWidget = new Widget('payment_block');

    deliveryWidget.onSubmit = function () {
        deliveryWidget.close();
        addressWidget.open();
        deliveryWidget.setAccepted(true);
    };

    addressWidget.onSubmit = function () {
        addressWidget.setAccepted(true);
        addressWidget.close();
        personalWidget.open();
    };

    addressWidget.onOpen = function () {
        addressWidget.element.find(':input').first().focus();
    };


    personalWidget.onSubmit = function () {
        personalWidget.setAccepted(true);
        personalWidget.close();
        paymentWidget.open();
    };

    paymentWidget.onOpen = function () {

        paymentWidget.element.find('.popover').each(function (index) {
            if (index > 0) {
                $(this).css('top', (18 - ($(this).height() / 2)) + 'px');
            }
        });

    };


    deliveryWidget.setAccepted(true);
    addressWidget.open();

    var $bonuscard_popup = $('#popup_bonuscard');

    $bonuscard_popup.find('.row-type .switch-container').Switch(function (selected) {
        $bonuscard_popup.find('.tooltip-block .card-type').text(selected.text());
    });

    $bonuscard_popup.find('.reset-row').click(function () {
        $bonuscard_popup.find('.row-number input').val('');
        return false;
    });
    $bonuscard_popup.find('.popup-submit').click(function () {

        var validate_inputs = $bonuscard_popup.find('.row-number input');
        validate_inputs.removeClass('error');

        var error = false;
        validate_inputs.each(function () {
            if ($(this).val().length === 0) {
                $(this).addClass('error');
                error = true;
            }
        });

        if (error) {
            return false;
        }
        else {
            $.unblockUI();
        }
    });

    $bonuscard_popup.find('input[type=text]').keydown(function () {
        $(this).removeClass('error');
    });

    var $popup_pickups = $('#popup_pickups');
    /*$('.btn-calendar').on('click', function () {
     Checkout.openPopup($popup_pickups, function () {

     $popup_pickups.find('.checkbox').Checkbox(function (value) {
     if (value) {
     $popup_pickups.find('.pickup-item').addClass('hidden');
     $popup_pickups.find('.pickup-item[data-today=1]').removeClass('hidden');
     }
     else {
     $popup_pickups.find('.pickup-item').removeClass('hidden');
     }
     $popup_pickups.find('.section').each(function(){
     $(this).toggle($(this).find('.pickup-item').not('.hidden').length > 0);
     });
     $('.scroll-pane').data('jsp').reinitialise();
     });

     $popup_pickups.find('.scroll-pane').on('jsp-scroll-y',function (event, scrollPositionY, isAtTop, isAtBottom) {
     var hasClass = $popup_pickups.find('.fixed-container').hasClass('fixed');
     $popup_pickups.find('.fixed-container').toggleClass('fixed', scrollPositionY > 115).css('top', scrollPositionY + 'px');
     $popup_pickups.find('.list-container').toggleClass('fixed', scrollPositionY > 115);

     }).jScrollPane();
     });
     return false;
     });
     */

    var calendar = new Calendar('.btn-calendar .popover-content');
    calendar.setData(new Date(2013, 8, 12), new Date(2013, 8, 30), {
        "15.08.2013": "500р",
        "24.08.2013": "700р",
        "30.08.2013": "900р"
    });
    $('.btn-calendar').on('click', function () {
        $('.btn-calendar').find('.popover').toggle();
        return false;
    });


    $popup_pickups.on('click', '.btn-map', function () {
        $(this).toggleClass('btn-map-opened');
        $(this).parents('.pickup-item').find('.pickup-map').toggle();
        var scroll_api = $popup_pickups.find('.scroll-pane').data('jsp');
        scroll_api.reinitialise();
        return false;
    });


    var $popup_address = $('#popup_address');

    $popup_address.find('#popup_address_btn_new').on('click', function () {
        var $form = $popup_address.find('.address-form').hide();
        $form.find('.address-form-header').text('Новый адрес');
        $form.find('.address-form-footer .btn-red').text('Сохранить адрес');
        $popup_address.find('.address-item').last().after($form);
        $form.show();

        $('#popup_address').find('.scroll-pane').data('jsp').reinitialise();
        $('#popup_address').find('.scroll-pane').data('jsp').scrollToY(+$form.position().top - 10);

        return false;
    });

    $popup_address.find('.edit-address-item-btn').on('click', function () {
        var $form = $popup_address.find('.address-form').hide();
        $form.find('.address-form-header').text('Изменение адреса');
        $form.find('.address-form-footer .btn-red').text('Сохранить изменения');
        $(this).parents('.address-item').after($form);
        $form.show();
        $popup_address.find('.address-item').addClass('disabled');

        $('#popup_address').find('.scroll-pane').data('jsp').reinitialise();
        $('#popup_address').find('.scroll-pane').data('jsp').scrollToY(+$form.position().top - 10);

        return false;
    });

    $popup_address.find('.address-form-footer .cancel-btn').on('click', function () {
        $popup_address.find('.address-form').hide();
        $popup_address.find('.address-item').removeClass('disabled');

        $('#popup_address').find('.scroll-pane').data('jsp').reinitialise();

        return false;
    });


    $('.address-preview a').on('click', function () {
        Checkout.openPopup($('#popup_address'), function () {
            $('#popup_address').find('.scroll-pane').jScrollPane({
                contentWidth: '0px'
            });
        });
        return false;
    });

});

