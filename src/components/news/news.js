export default function newsList() {
    if (!Modernizr.flexbox) {
        setSameHeightForItems();
    }
}

/**
 * Функция устанавливает одинковую высоту всем элементам истории
 */
function setSameHeightForItems() {
    const items = $('.c-news__new');
    const itemsHeight = items.map((index, item) => $(item).height()).get();
    items.height(Math.max.apply(this, itemsHeight));
}

