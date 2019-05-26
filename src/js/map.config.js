
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
import {accesstoken} from '../../configurations';
import elements from './base';


const mapOptions = {
    container: `${elements.map}`,
    style: 'mapbox://styles/mapbox/outdoors-v10',
    maxBounds: [[0.245040, 4.841294], [16.988203, 15.275607]],
    maxZoom: 5,
    minZoom: 1,
    //zoom: 1
}

mapboxgl.accessToken =  accesstoken;
const map = new mapboxgl.Map(mapOptions);





export default map