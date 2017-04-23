import slide1 from '../resources/indi-images/slide1.png';
import slide2 from '../resources/indi-images/slide2.png';
import slide3 from '../resources/indi-images/slide3.png';

import news1 from '../resources/indi-images/new1.png';
import news2 from '../resources/indi-images/new2.png';
import news3 from '../resources/indi-images/new3.png';

import oursPlant1 from '../resources/indi-images/ours-plant-1.png';
import oursPlant2 from '../resources/indi-images/ours-plant-2.png';
import oursPlant3 from '../resources/indi-images/ours-plant-3.png';
import oursPlant4 from '../resources/indi-images/ours-plant-4.png';
import oursPlant5 from '../resources/indi-images/ours-plant-5.png';
import oursPlant6 from '../resources/indi-images/ours-plant-6.png';
import oursPlant7 from '../resources/indi-images/ours-plant-7.png';

const sliderItems = [
    {
        src: slide1,
        title: 'Ботанический сад П. И. Травникова',
        description: 'Основан 1957-1958 гг. на Фрунзенской набережной Павлом Ивановичем Травниковым'
    },
    {
        src: slide2,
        title: 'Ботанический сад П. И. Травникова',
        description: 'Основан 1957-1958 гг. на Фрунзенской набережной Павлом Ивановичем Травниковым'
    },
    {
        src: slide3,
        title: 'Ботанический сад П. И. Травникова',
        description: 'Основан 1957-1958 гг. на Фрунзенской набережной Павлом Ивановичем Травниковым'
    }
];

const newsItems = [
    {
        day: '6',
        month: 'Июн',
        title: 'Заголовок новости',
        shortContent: 'Семейство конскокаштановых. Занесено в красную книгу... Семейство конскокаштановых. Занесено в красную книгу... Семейство конскокаштановых. Занесено в красную книгу... Семейство конскокаштановых. Занесено в красную книгу...',
        image: news1
    },
    {
        day: '19',
        month: 'Окт',
        title: 'Заголовок новости',
        shortContent: 'Семейство кипарисовые. Занесено в красную книгу...',
        image: news2
    },
    {
        day: '2',
        month: 'Дек',
        title: 'Заголовок новости',
        shortContent: 'Семейство лилейные. Занесено в красную книгу...',
        image: news3
    }
];

const oursPlants = [
    {image: oursPlant1},
    {image: oursPlant3},
    {image: oursPlant4},
    {image: oursPlant7},
    {image: oursPlant2},
    {image: oursPlant5},
    {image: oursPlant6},
];

export default {sliderItems, newsItems, oursPlants};