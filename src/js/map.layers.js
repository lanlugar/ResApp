const repsData = require('../data/reps.json');
const senateData = require('../data/senate.json');

export const senatePartyLayer  = {
    "id": "senate-layer",
    "source": {
        "type":"geojson",
        "data":senateData,
        "generateId": true
    },
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
        "fill-outline-color": "#000"
    }

}



export const senateGenderFilter = ["match",
["get", "GENDER"],

    "M","#c5c6c7",
    "F", "#1f2833",
    "#5d001e"
]

export const senateEducationFilter = ["match",
["get", "EDUCATIONA"],

    "TERTIARY (BACHELOR)","#c5c6c7",
    "TERTIARY (OND/HND)", "#1f2833",
    "TERTIARY (DIPLOMA)","#5d001e",
    "TERTIARY (MASTERS)","#45a29e",
    "TERTIARY (PHD)","#66fcf1",
    "SECONDARY","#d79922",
    "#ee4c7c"

]

export const senateAgeFilter = [
    "case",
     ["<", ["get", "Age"], 30], "#45a29e", 
    ["all", ["<",["get", "Age"], 40],[">=",["get", "Age"], 30]],"#66fcf1",
    ["all", ["<",["get", "Age"], 60],[">=",["get", "Age"], 40]],"#c5c6c7",
    [">=", ["get", "Age"],60], "#1f2833",
    "#5d001e"
]

export const senatePartyFilter =  [
    "match",
["get", "PARTY"],

    "APC","#66fcf1",
    "PDP", "#c5c6c7",
    "#1f2833"
]

//Reps Layers
export const repsPartyFilter =  [
    "match",
["get", "PARTY"],

    "APC","#66fcf1",
    "PDP", "#c5c6c7",
    "#1f2833"
]

export const repsPartyLayer  = {
    "id": "reps-layer",
    "source":{
        "type":"geojson",
        "data":repsData,
        "generateId": true
    },
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
        "fill-outline-color": "#000"
    }

}

export const repsGenderFilter = ["match",
["get", "GENDER"],

    "M","#c5c6c7",
    "F", "#1f2833",
    "#5d001e"
]

export const repsAgeFilter = [
    "case",
     ["<", ["get", "AGE"], 30], "#45a29e", 
    ["all", ["<",["get", "AGE"], 40],[">=",["get", "AGE"], 30]],"#66fcf1",
    ["all", ["<",["get", "AGE"], 60],[">=",["get", "AGE"], 40]],"#c5c6c7",
    [">=", ["get", "AGE"],60], "#1f2833",
    "#5d001e"
]

export const repsEducationFilter = ["match",
["get", "HIGHEST_QU"],

    "TERTIARY (BACHELOR)","#c5c6c7",
    "TERTIARY (OND/HND)", "#1f2833",
    "TERTIARY (DIPLOMA)","#5d001e",
    "TERTIARY (MASTERS)","#45a29e",
    "TERTIARY (PHD)","#66fcf1",
    "PRIMARY","#4056a1",
    "TERTIARY (NCE)","#5d001e",
    "SECONDARY","#d79922",
    "#ee4c7c"

]
