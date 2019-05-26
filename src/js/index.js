const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const repsData = require('../data/reps.json');
const senateData = require('../data/senate.json');


import $ from 'jquery';
import map from './map.config';
import elements from './base';
import {senatePartyLayer, repsPartyLayer} from './map.layers';

const state = {}

state.map = map;



console.log(senateData)
console.log(repsData)

const checkLayerExist = (layerId) => {
    const i = state.map.style._layers.hasOwnProperty(layerId)
    if(i) {return i};
    return false;
}

const addLayerToMap = (layerId) => {
    if(!checkLayerExist(layerId)) {
        map.addLayer(senatePartyLayer)
    }else {
        state.map.getLayer(layerId).setLayoutProperty('visibility', 'visible')
    }
}

elements.senateBtn.addEventListener('click', e => {
    //check if reps layer is added, if added set visibility to none
    if(checkLayerExist('reps-layer')) {
       map.getLayer('reps-layer'.setLayoutProperty('visibility', 'none'));
    }
    // add senate layer to map
    addLayerToMap('senate-layer');
   
   

    //2. remove active class from all btn and add to this btn
    //3. close all filter for the other categories and open for party
})


elements.repsBtn.addEventListener('click', e => {
    //1.add senate layer 
    map.addLayer(repsPartyLayer);
    console.log(state.map);

    //2. remove active class from all btn and add to this btn
    //3. close all filter for the other categories and open for party
})




