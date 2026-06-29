const colorEntity = [
    {'entity':'England','color':'#FFFFFF'},
    {'entity':'Germany','color':'#FFCE00'},
    {'entity':'Spain','color':'#E60026'},
    {'entity':'France','color':'#000091'},
    {'entity':'Italy','color':'#008C45'},
    {'entity':'Saudi_Arabia','color':'#005430'},
    {'entity':'Turkey','color':'#A91101'},
    {'entity':'United_States','color':'#0A3161'},
    {'entity':'Netherlands','color':'#FF9B00'},
    {'entity':'Brazil','color':'#fedf00'},
    {'entity':'Portugal','color':'#046A38'},
    {'entity':'Qatar','color':'#8A1538'},
    {'entity':'Belgium','color':'#000000'},
    // {'entity':'Belgium','color':'#EF3340'},
    // {'entity':'Belgium','color':'#FFBE7D'},
    {'entity':'Mexico','color':'#006847'},
    // {'entity':'Mexico','color':'#8CD17D'},
    {'entity':'Iran','color':'#239F40'},
    // {'entity':'Iran','color':'#E15759'},
    {'entity':'Czech_Republic','color':'#11457E'},
    {'entity':'Egypt','color':'#C09300'},
    {'entity':'Scotland','color':'#005EB8'},
    {'entity':'South_Africa','color':'#FFB612'},
    {'entity':'Uzbekistan','color':'#0072CE'},
    {'entity':'Argentina','color':'#6CACE4'},
    {'entity':'United_Arab_Emirates','color':'#525252'},
    {'entity':'Iraq','color':'#bdbdbd'},
    // {'entity':'Denmark','color':'#C8102E'},
    {'entity':'AFC','color':'#FABFD2'},
    {'entity':'CAF','color':'#b07AA1'},      
    {'entity':'CONCACAF','color':'#499894'},
    {'entity':'CONMEBOL','color':'#86BCB6'}, 
    {'entity':'OFC','color':'#D7B5A6'},
    {'entity':'UEFA','color':'#9c755f'},
    {'entity':'UNATTACHED','color':'#C8D0D9'},

    // {'entity':'AFC_11_22','color':'#B6992D'},
    // {'entity':'AFC_1_10','color':'#F1CE63'},
    // {'entity':'CAF_11_20','color':'#499894'},
    // {'entity':'CAF_1_10','color':'#86BCB6'},

]

const federation = [
    {'entity':'AFC',
    'countries': ["Jordan","South Korea","Japan","Australia","Malaysia","Thailand","China","Indonesia"]},
    {'entity':'CAF',
    'countries': ["Tunisia","Algeria","Morocco","Ghana"]},
    {'entity':'CONCACAF',
    'countries':["Canada","Costa Rica","Panama","Haiti","Honduras"]},
    {'entity':'CONMEBOL',
    'countries':["Ecuador","Paraguay","Venezuela","Chile","Uruguay","Colombia"]},
    {'entity':'OFC',
    'countries':["New Zealand"]},
    {'entity':'UEFA',
    'countries': ["Denmark","Russia","Greece","Switzerland","Cyprus","Austria","Norway","Wales",
"Wales","Croatia","Israel","Sweden","Serbia","Hungary","Romania","Poland","Azerbaijan","Slovakia",
"Ireland","Slovenia","Bulgaria","Armenia","Bosnia and Herzegovina","Kazakhstan","Finland"    
]}
]
AFC_country = ["Jordan","South Korea","Japan","Australia","Malaysia","Thailand","China","Indonesia"]
CAF_country = ["Tunisia","Algeria","Morocco","Ghana"]
CONCACAF_country = ["Canada","Costa Rica","Panama","Haiti","Honduras"]
CONMEBOL_country = ["Ecuador","Paraguay","Venezuela","Chile","Uruguay","Colombia"]
OFC_country = ["New Zealand"]
UEFA_country = ["Denmark","Russia","Greece","Switzerland","Cyprus","Austria","Norway","Wales",
"Wales","Croatia","Israel","Sweden","Serbia","Hungary","Romania","Poland","Azerbaijan","Slovakia",
"Ireland","Slovenia","Bulgaria","Armenia","Bosnia and Herzegovina","Kazakhstan","Finland"    
]
const colorScale = d3.scaleOrdinal()
        .domain(colorEntity.map(d => d.entity))
        .range(colorEntity.map(d => d.color))