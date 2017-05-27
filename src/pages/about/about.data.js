const breadcrumbs = [
    {name: "Главная", href: "index.html"},
    {name: "О саде"}
];

const sidebar = {
    menu: {
        title: 'О саде',
        items: [
            {href: 'garden-history.html', name: 'История сада'},
            {href: 'legal-position.html', name: 'Юридическое положение'}
        ]
    }
};

const photo1 = require('../../resources/external-images/about/about-garden-1.jpg');
const photo2 = require('../../resources/external-images/about/about-garden-2.jpg');

export {breadcrumbs, sidebar, photo1, photo2};