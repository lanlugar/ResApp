const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const repsData = require('../data/reps.json');
const senateData = require('../data/senate.json');


import $ from 'jquery';
import {accesstoken} from '../../configurations';
import mapConfig from './map.config';
import elements from './base';

mapboxgl.accessToken =  accesstoken;
const map = new mapboxgl.Map(mapConfig);


elements.repsBtn.addEventListener('click', e => {
    //1.add senate layer 
    //2. remove active class from all btn and add to this btn
    //3. close all filter for the other categories and open for party
})
