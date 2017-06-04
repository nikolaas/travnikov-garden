import $ from 'jquery';
import 'slick-carousel';

export class TimeSlider {

    constructor() {
        this.changeHandler = null;
    }

    init() {
        $(() => {
            const instanceNode = $('.c-time-slider');
            instanceNode.slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                prevArrow: '<button class="c-time-slider__prev-arrow"></button>',
                nextArrow: '<button class="c-time-slider__next-arrow"></button>',
            });
            instanceNode.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
                if (this.onChange instanceof Function) {
                    try {
                        this.changeHandler(nextSlide);
                    } catch (error) {
                        console.error(`Error caused on time slider change`);
                    }
                }
            });
        });
    }

    onChange(handler) {
        this.changeHandler = handler;
    }
}

