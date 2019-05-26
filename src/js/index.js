const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
const repsData = require('../data/reps.json');
const senateData = require('../data/senate.json');


import $ from 'jquery';
import map from './map.config';
import elements from './base';
import {senatePartyLayer, repsPartyLayer,senateAgeFilter, senateEducationFilter, senateGenderFilter, senatePartyFilter,repsAgeFilter, repsEducationFilter, repsGenderFilter, repsPartyFilter} from './map.layers';
import {addActiveClass, showFilter} from './view'

const state = {}

state.map = map;



const arr = repsData.features.map(e => {return e.properties})
console.log(new Set(arr))

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
       
    }
}


elements.senateBtn.addEventListener('click', e => {
    showFilter(elements.partyFilter);
    state.buttonClicked = 'senate'
    //check if reps layer is added, if added set visibility to none
    if(checkLayerExist('reps-layer')) {
       state.map.setLayoutProperty('reps-layer','visibility', 'none');
      
    }

    addLayerToMap(senatePartyLayer,'senate-layer');
    addActiveClass(e.target);

})


elements.repsBtn.addEventListener('click', e => {
    showFilter(elements.partyFilter);
    state.buttonClicked = 'reps'
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

Array.from(elements.filterInputs).forEach(input => {
    input.addEventListener('change', e => {
        if(state.buttonClicked === 'senate') {
            console.log(e.target.value)
            //show filter category
            const filterCategoryChosen = e.target.value;
            showFilter(elements[filterCategoryChosen]);
            if(filterCategoryChosen === 'partyFilter' ){
                state.map.setPaintProperty('senate-layer', 'fill-color', senatePartyFilter);
            } else if(filterCategoryChosen === 'educationFilter') {
                state.map.setPaintProperty('senate-layer', 'fill-color', senateEducationFilter);
            } else if(filterCategoryChosen === 'genderFilter') {
                state.map.setPaintProperty('senate-layer', 'fill-color', senateGenderFilter);
            }else if (filterCategoryChosen === 'ageFilter') {
                state.map.setPaintProperty('senate-layer', 'fill-color', senateAgeFilter)
            }
            
            //get layer
            //filter layer
        }else if (state.buttonClicked === 'reps') {
            console.log(e.target.value)
            //show filter category
            const filterCategoryChosen = e.target.value;
            showFilter(elements[filterCategoryChosen]);
            if(filterCategoryChosen === 'partyFilter' ){
                state.map.setPaintProperty('reps-layer', 'fill-color', repsPartyFilter);
            } else if(filterCategoryChosen === 'educationFilter') {
                state.map.setPaintProperty('reps-layer', 'fill-color', repsEducationFilter);
            } else if(filterCategoryChosen === 'genderFilter') {
                state.map.setPaintProperty('reps-layer', 'fill-color', repsGenderFilter);
            }else if (filterCategoryChosen === 'ageFilter') {
                state.map.setPaintProperty('reps-layer', 'fill-color', repsAgeFilter)
            }
            
            //get layer
            //filter layer
        }
        
    })
})




