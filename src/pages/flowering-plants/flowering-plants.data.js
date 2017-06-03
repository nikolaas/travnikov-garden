const breadcrumbs = [
    {name: "Главная", href: "index.html"},
    {name: "Растения", href: "plants.html"},
    {name: "Что сейчас цветет"}
];

const sidebar = {
    menu: {
        title: 'Растения',
        items: [
            {href: '', name: 'Что сейчас цветет'},
            {href: '', name: 'Каталог растений'}
        ]
    }
};

const floweringPlants = [
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/flowering-plants/flowering-plant-1.jpg')
    },
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/flowering-plants/flowering-plant-2.jpg')
    },
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/flowering-plants/flowering-plant-3.jpg')
    },
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/flowering-plants/flowering-plant-4.jpg')
    },
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/flowering-plants/flowering-plant-5.jpg')
    },
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/flowering-plants/flowering-plant-6.jpg')
    },
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/flowering-plants/flowering-plant-7.jpg')
    },
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/flowering-plants/flowering-plant-8.jpg')
    },
    {
        name: 'Название растения',
        latinName: 'Nazvanie rasteniya',
        image: require('../../resources/external-images/flowering-plants/flowering-plant-9.jpg')
    },
];

export {breadcrumbs, sidebar, floweringPlants};