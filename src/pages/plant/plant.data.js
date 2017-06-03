const breadcrumbs = [
    {name: "Главная", href: "index.html"},
    {name: "Растения", href: "plants.html"},
    {name: "Наименование растения"}
];

const sidebar = {
    menu: {
        title: 'Растения',
        items: [
            {href: '', name: 'Деревья'},
            {href: '', name: 'Кустарники'},
            {href: '', name: 'Лианы'},
            {href: '', name: 'Травы'},
            {href: 'flowering-plants.html', name: 'Что сейчас цветет'}
        ]
    }
};

const plantImages = [
    {
        image: require('../../resources/external-images/plant/plant-image-1.jpg'),
        preview: require('../../resources/external-images/plant/plant-image-preview-1.jpg')
    },
    {
        image: require('../../resources/external-images/plant/plant-image-2.jpg'),
        preview: require('../../resources/external-images/plant/plant-image-preview-2.jpg')
    },
    {
        image: require('../../resources/external-images/plant/plant-image-1.jpg'),
        preview: require('../../resources/external-images/plant/plant-image-preview-1.jpg')
    },
    {
        image: require('../../resources/external-images/plant/plant-image-2.jpg'),
        preview: require('../../resources/external-images/plant/plant-image-preview-2.jpg')
    },
    {
        image: require('../../resources/external-images/plant/plant-image-1.jpg'),
        preview: require('../../resources/external-images/plant/plant-image-preview-1.jpg')
    }
];

const detailImage = require('../../resources/external-images/plant/plant-detail-image.jpg');

const recentPlants = [
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/plant/recent-plant-1.jpg')
    },
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/plant/recent-plant-2.jpg')
    },
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/plant/recent-plant-3.jpg')
    }
];


export {breadcrumbs, sidebar, plantImages, detailImage, recentPlants};