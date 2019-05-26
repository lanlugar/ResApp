//////const repsData = require('../data/reps.json');
///const senateData = require('../data/senate.json');

export const senatePartyLayer  = {
    "id": "senate-layer",
    "source":"senate",
    "type": "fill",
    "layout": {
        
    },
    "paint": {
        "fill-color": ["match",
    ["get", "PARTY"],

        "APC","RED",
        "PDP", "BLUE",
        "BLACK"
],
        "fill-opacity":1,
        "fill-outline-color": "#ccc"
    }

}

export const repsPartyLayer  = {
    "id": "reps-layer",
    "source":"reps",
    "type": "fill",
    "layout": {
        
    },
    "paint": {
        "fill-color": ["match",
    ["get", "PARTY"],

        "APC","RED",
        "PDP", "BLUE",
        "BLACK"
],
        "fill-opacity":1,
        "fill-outline-color": "#ccc"
    }

}