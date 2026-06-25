country = 
[        'Czech_Republic',                 'Mexico',           'South_Africa',
            'South_Korea', 'Bosnia_and_Herzegovina',                 'Canada',
                  'Qatar',            'Switzerland',                 'Brazil',
                  'Haiti',                'Morocco',               'Scotland',
              'Australia',               'Paraguay',                 'Turkey',
          'United_States',                'Curacao',                'Ecuador',
                'Germany',            'Ivory_Coast',                  'Japan',
            'Netherlands',                 'Sweden',                'Tunisia',
                'Belgium',                  'Egypt',                   'Iran',
            'New_Zealand',             'Cape_Verde',           'Saudi_Arabia',
                  'Spain',                'Uruguay',                 'France',
                   'Iraq',                 'Norway',                'Senegal',
                'Algeria',              'Argentina',                'Austria',
                 'Jordan',               'Colombia',               'DR_Congo',
               'Portugal',             'Uzbekistan',                'Croatia',
                'England',                  'Ghana',                 'Panama']


const teamChart = {
    'width' : 4,
    'height' : 7
}

const teamChartMargin ={
    'left':1,
    'right':5, //to accomodate the tooltip
    'top':1,
    'bottom':1
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