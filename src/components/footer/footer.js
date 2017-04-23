import $ from 'jquery';
import {Map} from '../map';
import {MAP_ID} from './footer.constants';
import {GARDEN_COORDINATES} from '../../common/garden.data';
import gardenMarker from '../../resources/indi-images/garden-marker.png';

const gardenMarkerWidth = 38;
const gardenMarkerHeight = 57;

class Footer {

    constructor() {
        this.map = new Map(MAP_ID);
        this.map.addMarker(GARDEN_COORDINATES, null, {
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: gardenMarker,
            // Размеры метки.
            iconImageSize: [gardenMarkerWidth, gardenMarkerHeight],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-gardenMarkerWidth / 2, -gardenMarkerHeight]
        });
    }
}

$(() => new Footer());
