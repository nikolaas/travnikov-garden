import $ from 'jquery';
import domUtils from '../../utils/dom-utils';

/**
 * Easing функция для анимации счетчика.
 *
 * Возможные значения:
 * 1) linear
 * 2) easeIn
 * 3) easeOut
 * 4) easeInOut
 *
 * @see https://github.com/aishek/jquery-animateNumber - плагин инпользуемый для анимации счетчика
 * @see https://github.com/gdsmith/jquery.easing - набор дополнительных easing-функций
 * @type {string}
 */
const COUNTER_ANIMATION_EASING = 'easeOut';

/**
 * Длительность анимации счетчика.
 * Измеряется в миллисекундах
 * @type {number}
 */
const COUNTER_ANIMATION_DURATION = 1000;

$(initializeCounter);

function initializeCounter() {
   $('.c-live-counter').each(prepareCounter);
}

function prepareCounter() {
    const counter = $(this);
    $(window).scroll(counterRunner);

    function counterRunner() {
        if (tryRunCounterOnScroll(counter)) {
            $(window).off("scroll", counterRunner);
        }
    }
}

function tryRunCounterOnScroll(counter) {
    if (domUtils.isElementInView(counter)) {
        runCounter(counter);
        return true;
    } else {
        return false;
    }
}

function runCounter(counter) {
    const value = parseInt(counter.text(), 10);
    if (isNaN(value)) {
        return;
    }
    counter.text(0);
    counter.animateNumber(createCounterAnimation(value), COUNTER_ANIMATION_DURATION);
}

function createCounterAnimation(value) {
    return {
        number: value,
        easing: COUNTER_ANIMATION_EASING,
    };
}