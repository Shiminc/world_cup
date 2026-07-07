const teamChart = {
    'width' : 4,
    'height' : 7
}

const teamChartMargin ={
    'left':1,
    'right':5, //to accomodate the tooltip
    'top':1,
    'bottom':1.8
    }
const width = 4;
const height = 7;

const teamDimension = {
    'width' : 4,
    'height' :7
}

// Tooltip
const tooltip ={
     'width' : 5,
     'height' : 3
}

const xScale = d3.scaleBand()
        .domain(d3.range(width))
        .range([0,width])
        .round(true)
        // .paddingInner(0.1)

const yScale = d3.scaleBand()
        .domain(d3.range(height))
        .range([0,height])
        .round(true)
        // .paddingInner(0.1)

        
let teamSVG
let playerCircle
// let varName = 'birth_place'
// let varColorData = birth_place_data
let variables
let varName = 'play_in'
let varColorData = play_in_data
let dataset

function circleFill(d)
    {
        if (varName === 'play_in'){
            return colorScalePlayIn(d.play_in)
        }
        else if (varName === 'birth_place'){
            return colorScaleBirthPlace(d.birth_place)
        }
        else if (varName === 'league'){
            return colorScaleBigFive(d.league)
        }
        else if (varName === 'play_local'){
            return colorScalePlayLocal(d.play_local)
        }
        else if (varName === 'born_local'){
            return colorScaleBornLocal(d.born_local)
        }
        else if (varName === 'play_born_local'){
            return colorScalePlayBornLocal(d.play_born_local)
        }
        else if (varName === 'age'){
            return xScaleAgeColor(d.age)
        }
    }