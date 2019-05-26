const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const repsData = require('../data/reps.json');
const senateData = require('../data/senate.json');


import $ from 'jquery';
import map from './map.config';
import elements from './base';
import {senatePartyLayer, repsPartyLayer} from './map.layers';
import {addActiveClass, showFilter} from './view'

const state = {}

state.map = map;



console.log(senateData)
console.log(repsData)

const checkLayerExist = (layerId) => {
    const i = state.map.style._layers.hasOwnProperty(layerId)
    if(i) {return i};
    return false;
}

const addLayerToMap = (layer, layerId) => {
    if(!checkLayerExist(layerId)) {
       state.map.addLayer(layer)
    }
    else {
        state.map.setLayoutProperty(layerId,'visibility', 'visible');
        console.log(state.map.getLayer(layerId))
    }
}


elements.senateBtn.addEventListener('click', e => {
    showFilter(elements.partyFilter)
    //check if reps layer is added, if added set visibility to none
    if(checkLayerExist('reps-layer')) {
       state.map.setLayoutProperty('reps-layer','visibility', 'none');
      
    }
    // add senate layer to map

    addLayerToMap(senatePartyLayer,'senate-layer');

    

    //toggle active btn class
    addActiveClass(e.target);
    //close all other filters and open party;
   
    //2. remove active class from all btn and add to this btn
    //3. close all filter for the other categories and open for party
})


elements.repsBtn.addEventListener('click', e => {
    showFilter(elements.partyFilter)
    //check if reps layer is added, if added set visibility to none
    if(checkLayerExist('senate-layer')) {
       state.map.setLayoutProperty('senate-layer','visibility', 'none');
    }
    // add senate layer to map

    addLayerToMap(repsPartyLayer, 'reps-layer');

    

    //toggle active btn class
    addActiveClass(e.target);
    //close all other filters and open party;
   
    //2. remove active class from all btn and add to this btn
    //3. close all filter for the other categories and open for party
})




