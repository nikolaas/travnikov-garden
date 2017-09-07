import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

$(init());

function init() {
    $('.c-news__list').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="c-news__prev-arrow fa fa-angle-left"></button>',
                    nextArrow: '<button class="c-news__next-arrow fa fa-angle-right"></button>'
                }
            }
        ]
    });
    //setSameHeightForItems();
}

/**
 * Функция устанавливает одинковую высоту всем элементам истории
 */
function setSameHeightForItems() {
    const items = $('.c-news__new');
    if (items.length > 1) {
        const itemsHeight = items.map((index, item) => $(item).height()).get();
        items.height(Math.max.apply(this, itemsHeight));
    }
}

