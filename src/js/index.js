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
       
        state.map.addLayer(layer);
     
      
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

    addLayerToMap(senatePartyLayer,'senate-layer');


    addActiveClass(e.target);

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
})

window.document.addEventListener('DOMContentLoaded', e => {
    console.log('load');
    map.on('load', e => {
        elements.senateBtn.click();
    })
    
    
})




