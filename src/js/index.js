const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const repsData = require('../data/reps.json');
const senateData = require('../data/senate.json');

import $ from 'jquery';
import {accesstoken} from '../../configurations';
import mapConfig from './map.config';
import elements from './base';

mapboxgl.accessToken =  accesstoken;
const map = new mapboxgl.Map(mapConfig);

console.log(repsData);
