const repsData = require('../data/reps.json');
const senateData = require('../data/senate.json');


import elements from './base';




const layer = [

    {
        "id": "senate",
        "source": "senate",
        "type": "fill",
        "paint": {
            "fill-color": "#00ffff"
        }
    },
    {
        "id": "reps",
        "source": "reps",
        "type": "fill",
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "#00ffff"
        }
    },

    {
        "id": "admin",
        "source": "mapbox-streets",
        "source-layer": "admin",
        "type": "line",
        "paint": {
            "line-color": "#ffffff"
        }
    },
    {
        "id": "background",
        "type": "background",
        "layout": {
        },
        "paint": {
            "background-color": "#F1F2E4",
            "background-opacity": 0.3
        }

    }

]

export default {
    container: `${elements.map}`,
    style: 'mapbox://styles/mapbox/outdoors-v10',
    maxBounds: [[0.245040, 4.841294], [16.988203, 15.275607]],
    maxZoom: 5,
    minZoom: 1,
    //zoom: 1
}