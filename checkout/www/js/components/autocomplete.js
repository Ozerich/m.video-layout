$.fn.AutoComplete = function (options) {
    var that = this;
    var $item = $(this);

    options = $.extend({
        url: '',
        prepareItem: function (object) {
            return '';
        },
        onSelect: function(object){

        },
        noItemsHtml: ''
    }, options);

    var $list = $('<div class="autocomplete-list" style="display: none"></div>');

    $('body').append($list);

    var timeout = null;

    var LoadList = function () {
        var query = $item.val();
        if (query.length < 2) {
            return;
        }

        $list.css({
            top: $item.offset().top + $item.outerHeight() + 2 + 'px',
            left: $item.offset().left + 'px',
            width: $item.outerWidth() + 'px',
            position: 'absolute'
        });

        $.get(options.url + query, function (data) {
            var list = $('<ul></ul>');
            var count = 0;
            for(var i in data){
                if(++count > 3)break;

                var item = $('<li data-object="'+i+'">' + options.prepareItem(data[i], query) + '</li>');

                list.append(item);
            }

            var html = list.find('li').length ?  '<ul>' + list.html() + '</ul>' : options.noItemsHtml;

            $list.show().html(html);

            $list.find('li').click(function(){

                $item.val(options.onSelect(data[$(this).data('object')]));
                $list.hide();

                return false;
            });
        });
    };

    $item.keyup(function () {
        window.clearTimeout(timeout);
        if ($(this).val().length < 2) {
            $list.hide();
        }
        timeout = window.setTimeout(function () {
            LoadList();
        }, 100);
    });

    $(document).click(function(event){
        if($(event.target).parents('.autocomplete-list').length === 0){
            $list.hide();
        }
    })

};