const vendorsCss = [
    'bootstrap/dist/css/bootstrap.css',
    'font-awesome/css/font-awesome.css',
    'jquery-ui/themes/base/datepicker.css',
    'slick-carousel/slick/slick.css'
];

const vendorsJs = [
    'modernizr',
    'jquery',
    'jquery.animate-number',
    'bootstrap/dist/js/bootstrap',
    'imagesloaded',
    'masonry-layout',
    'jquery-ui/ui/widgets/datepicker',
    'jquery-ui/ui/i18n/datepicker-ru',
    'slick-carousel'
];

const vendors = [
    ...vendorsCss,
    ...vendorsJs
];

module.exports = vendors;