const breadcrumbs = [
    {name: "Главная", href: "index.html"},
    {name: "О саде", href: "about.html"},
    {name: "Юридическое положение"}
];

const sidebar = {
    menu: {
        title: 'О саде',
        items: [
            {href: 'garden-history.html', name: 'История сада'},
            {href: '', name: 'Юридическое положение'}
        ]
    }
};


const documents = [
    {
        image: require("../../resources/external-images/legal-position/doc-prew1.jpg"),
        name: 'Паспорт 1989',
        href:"doc1",
        data: '6,22 МБ'
    },
    {
        image: require("../../resources/external-images/legal-position/doc-prew2.jpg"),
        name: 'Основание придания статуса ООПТ',
        href:"doc2",
        data: '49,3 МБ'
    },
    {
        image: require("../../resources/external-images/legal-position/doc-prew3.jpg"),
        name: 'Паспорт 2016',
        href:"doc3",
        data: '385 КБ'
    }
];

export {breadcrumbs, sidebar, documents};