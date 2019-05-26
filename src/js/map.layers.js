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

        "APC","#66fcf1",
        "PDP", "#c5c6c7",
        "#1f2833"
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

        "APC","#66fcf1",
        "PDP", "#c5c6c7",
        "#1f2833"
],
        "fill-opacity":1,
        "fill-outline-color": "#ccc"
    }

}