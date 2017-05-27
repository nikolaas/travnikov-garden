const breadcrumbs = [
    {name: "Главная", href: "index.html"},
    {name: "О саде", href: "about.html"},
    {name: "Об основателе"}
];

const sidebar = {
    menu: {
        title: 'О саде',
        items: [
            {href: '', name: 'Об основателе'},
            {href: 'about-romanova.html', name: 'О Н.И. Романовой'},
            {href: '', name: 'Возрождение'}
        ]
    }
};

const photo1 = require('../../resources/external-images/about-founder/about-founder-photo-1.jpg');
const photo2 = require('../../resources/external-images/about-founder/about-founder-photo-2.jpg');

const photosArchive = [
    require('../../resources/external-images/about-founder/about-founder-archive-photo-1.jpg'),
    require('../../resources/external-images/about-founder/about-founder-archive-photo-2.jpg'),
    require('../../resources/external-images/about-founder/about-founder-archive-photo-3.jpg'),
    require('../../resources/external-images/about-founder/about-founder-archive-photo-4.jpg'),
    require('../../resources/external-images/about-founder/about-founder-archive-photo-5.jpg'),
    require('../../resources/external-images/about-founder/about-founder-archive-photo-6.jpg')
];

export {breadcrumbs, sidebar, photo1, photo2, photosArchive};