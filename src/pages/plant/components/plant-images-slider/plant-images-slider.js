import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

$(init());

function init() {
    $('.c-plant-images-slider__main-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.c-plant-images-slider__images'
    });
    $('.c-plant-images-slider__images').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.c-plant-images-slider__main-images',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<button class="c-plant-images-slider__prev-arrow"></button>',
        nextArrow: '<button class="c-plant-images-slider__next-arrow"></button>'
    });
}
