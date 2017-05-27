const breadcrumbs = [
    {name: "Главная", href: "index.html"},
    {name: "О саде", href: "about.html"},
    {name: "О Н.И. Романовой"}
];

const sidebar = {
    menu: {
        title: 'О саде',
        items: [
            {href: 'about-founder.html', name: 'Об основателе'},
            {href: '', name: 'О Н.И. Романовой'},
            {href: '', name: 'Возрождение'}
        ]
    }
};

const photosArchive = [
    require('../../resources/external-images/about-romanova/about-romanova-archive-photo-1.jpg'),
    require('../../resources/external-images/about-romanova/about-romanova-archive-photo-2.jpg'),
    require('../../resources/external-images/about-romanova/about-romanova-archive-photo-3.jpg'),
    require('../../resources/external-images/about-romanova/about-romanova-archive-photo-4.jpg'),
    require('../../resources/external-images/about-romanova/about-romanova-archive-photo-5.jpg'),
    require('../../resources/external-images/about-romanova/about-romanova-archive-photo-6.jpg')
];

export {breadcrumbs, sidebar, photosArchive};