$(function () {

    var $container = $('.slider-container');
    var $long = $container.find('.slider-long');
    var $arrow_left = $container.find('.arrow-left .arrow');
    var $arrow_right = $container.find('.arrow-right .arrow');
    var $paginator = $container.find('.slider-paginator');
    var $page_circles = $paginator.find('a');

    var $items = $('.slider-container .item');

    var index = 0;


    function update() {
        $arrow_left.toggle(index > 0);
        $arrow_right.toggle($items.length > 3 && index < $items.length - 3);

        $long.animate({
            left: -index * 278
        });

        $page_circles.removeClass('active');
        $($page_circles.get(index)).addClass('active');
    }

    update();

    $arrow_left.on('click', function () {
        if (index > 0)index--;
        update();
        return false;
    });

    $arrow_right.on('click', function () {
        if (index < $items.length - 3)index++;
        update();
        return false;
    });

    $page_circles.on('click', function(ind){
        index = +$(this).data('num') - 1;
        update();
        return false;
    });
});