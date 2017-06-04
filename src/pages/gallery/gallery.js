import './gallery.styl';
import {TimeSlider} from './components';

const timeSlider = new TimeSlider();
timeSlider.onChange((slide) => {
    console.log(`Time slide changed to ${slide}`);
});

timeSlider.init();