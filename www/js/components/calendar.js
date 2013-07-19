$.fn.Calendar = function (options) {
    var that = this;
    var $calendar = $(this);

    var today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);

    options = $.extend({
        onChange: function () {
        }
    }, options);

    function daydiff(first, second) {
        return Math.abs((second - first) / (1000 * 60 * 60 * 24));
    }

    this.checkDate = function (date) {
        var isEnabled = true;

        if (date.getFullYear() < today.getFullYear() || date.getMonth() < today.getMonth() || date.getDate() < today.getDate()) {
            isEnabled = false;
        }
        else {
            var diff_days = daydiff(date, today);
            if (diff_days > 14) {
                isEnabled = false;
            }
        }

        return isEnabled
    };

    function dateToData(date){

        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();

        return year + (month < 10 ? '0' : '') + month + (day < 10 ? '0' : '') + day;
    }

    this.renderHTML = function (month, year) {


        var printCount = 0;

        var print_day = function (_day, _month) {
            var currentYear = year;
            var currentMonth = month;

            var printYear = year;
            var printMonth = _month;

            if (printMonth < 0) {
                printMonth = 11;
                printYear--;
            }

            if (printMonth > 11) {
                printMonth = 0;
                printYear++;
            }

            var printDate = new Date(printYear, printMonth, _day);


            var result = '';
            if (printCount == 0) {
                result = '<tr class="days">';
            }

            if (that.checkDate(printDate)) {
                var classes = [];

                if (printDate.getDay() == 6 || printDate.getDay() == 0) {
                    classes.push('weekend');
                }

                if (printDate.getDate() == today.getDate() && printDate.getMonth() == today.getMonth() && printDate.getFullYear() == today.getFullYear()) {
                    classes.push('today');
                }

                result += '<td data-date="' + dateToData(printDate) +'" class="calendar-day ' + classes.join(' ') + '"><span>' + _day + '</span></td>';
            }
            else {
                result += '<td data-date="' + dateToData(printDate) +'" class="calendar-day prev-month">' + _day + '</td>';
            }
            printCount++;
            if (printCount % 7 == 0) {
                printCount = 0;
                result += '</tr>';
            }

            return result;
        };

        var i, j;

        var html = '<table width="100%" cellpadding="0" cellspacing="0" class="calendar-table"><tr class="weekdays">' +
            '<td class="calendar-day first">Пн</td><td class="calendar-day">Вт</td><td class="calendar-day">Ср</td>' +
            '<td class="calendar-day">Чт</td><td class="calendar-day">Пт</td>' +
            '<td class="calendar-day weekend">Сб</td><td class="calendar-day weekend last">Вс</td>' +
            '</tr>';

        html += '<tr class="days first-line">';

        var firstDay = new Date(year, month, 1).getDay();
        firstDay = firstDay == 0 ? 7 : firstDay;
        var needFromLastMonth = firstDay - 1;

        var lastDayPrevMonth = new Date(year, month, 0).getDate();

        for (i = needFromLastMonth; i > 0; i--) {
            html += print_day(lastDayPrevMonth - i + 1, month - 1);
        }

        for (j = 1, i = firstDay; i <= 7; i++, j++) {
            html += print_day(j, month);
        }

        var lastDayDate = new Date(year, month + 1, 0);
        var lastDay = lastDayDate.getDay() == 0 ? 7 : lastDayDate.getDay();

        var lastCycleDay = lastDayDate.getDate() - lastDay;
        var startCycleDay = 7 - firstDay + 2;

        for (j = 1, i = startCycleDay; i <= lastCycleDay; i++, j++) {
            html += print_day(i, month);
        }

        for (i = lastCycleDay + 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
            html += print_day(i, month);
        }

        for (i = 1; i <= 7 - lastDay; i++) {
            html += print_day(i, month + 1);
        }

        html += '</table>';

        $calendar.html(html);

        $calendar.find('.days .calendar-day').not('.prev-month').click(function () {
            var date = $(this).data('date').toString();
            date = new Date(date.substr(0, 4), date.substr(4, 2), date.substr(6, 2));
            options.onChange(date);
        });

    };

    this.renderHTML(today.getMonth(), today.getFullYear());

    $(document).click(function(event){
        if($(event.target).parents('.calendar-table').length === 0){
            $calendar.parent().hide();
        }
    })
};