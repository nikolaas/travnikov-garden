import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/ui/i18n/datepicker-ru';
import 'jquery-ui/themes/base/datepicker.css';

$(function () {
    $('.sidebar-event-calender__calendar').datepicker({
        showOtherMonths: true
    });
});