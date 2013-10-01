function Pickup() {
    this.id = 0;
    this.address = '';
    this.name = '';
    this.metro = '';
}

function Item(_id) {
    var that = this;

    var $deliveryBlock = null;

    this.id = 0;
    this.setId = function (_value) {
        this.id = _value;

        $deliveryBlock = $('#delivery_method_block').find('.item[data-id=' + this.id + ']');

        if ($deliveryBlock.length === 0) {
            throw "Div для выбора доставки не найден";
        }

        $deliveryBlock.data('model', this);
    };
    this.setId(_id);

    this.image_src = '';
    this.setImageSrc = function(_src){
        this.image_src = _src;
    };

    this.isPickup = false;
    this.setIsPickup = function (_value) {
        this.isPickup = _value ? true : false;

        if(this.isPickup && !this.pickup){
            this.setPickup(Checkout.findPickupById(1));
        }

        $deliveryBlock.find('.pickup-block').toggle(this.isPickup);

    };

    this.pickup = 0;
    this.setPickup = function (pickup) {

        if (pickup instanceof Pickup === false) {
            throw "Pickup must be object of class Pickup";
        }
        this.pickup = pickup;

        if (this.pickup) {
            $deliveryBlock.find('.pickup-block .address').
                attr('title', this.pickup.address).
                text(this.pickup.address).
                toggleClass('metro', this.pickup.metro.length > 0);
        }
        else {
            $deliveryBlock.find('.pickup-block .address').attr('title', '').removeClass('metro').text('');
        }
    };

    this.price = 0;
    var updatePrice = function () {
        that.price = that.singlePrice * that.count;
    };

    this.singlePrice = 0;
    this.setSinglePrice = function (_value) {
        this.singlePrice = +_value;
        updatePrice();
    };

    this.count = 0;
    this.setCount = function (_value) {
        this.count = +_value;
        updatePrice();
    };

    this.name = '';
    this.setName = function (_value) {
        this.name = _value;
    };

}