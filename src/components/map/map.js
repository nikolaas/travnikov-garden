import {GARDEN_COORDINATES, GARDEN_ZOOM} from '../../common/garden.data';

const DEFAULT_OPTIONS = {
    center: GARDEN_COORDINATES,
    zoom: GARDEN_ZOOM,
    controls: [], // убираем все контролы с карты
    behaviors: [] // отключаем все интерактивное поведение на карте
};

export class Map {

    constructor(id, options) {
        this._initialized = false;
        this.id = id;
        this.options = options || DEFAULT_OPTIONS;
        this.geoObjectsBuffer = [];
        ymaps.ready(this.init.bind(this));
    }

    init() {
        this.mapInstance = new ymaps.Map(this.id, this.options);

        this.geoObjectsBuffer.forEach(this.addGeoObject.bind(this));
        this.geoObjectsBuffer = [];
        this._initialized = true;
    }

    addMarker(coordinates, properties, options) {
        this.queueGeoObject({coordinates, properties, options});
    }

    queueGeoObject(geoObject) {
        if (this._initialized) {
            this.addGeoObject(geoObject);
        } else {
            this.geoObjectsBuffer.push(geoObject);
        }
    }

    addGeoObject(geoObject) {
        this.mapInstance.geoObjects.add(new ymaps.Placemark(geoObject.coordinates, geoObject.properties, geoObject.options));
    }
}