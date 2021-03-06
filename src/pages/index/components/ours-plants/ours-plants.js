import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';

const MASONRY_CONFIG = {
    "itemSelector": '.c-ours-plants__gallery-item',
    "columnWidth": '.c-ours-plants__gallery-item',
    gutter: 0
    //percentPosition: true
};

const gallery = $('.c-ours-plants__gallery');
if (gallery.length > 0) {
    const masonry = new Masonry(gallery[0], MASONRY_CONFIG);
    imagesLoaded(gallery[0], () => {
        masonry.layout();
    });
}