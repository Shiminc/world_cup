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

// Chart

// const chartArea = {
//     'width' : 1000,
//     'height' : 12000
// }

// const margin = {
//     'left':50,
//     'right':50,
//     'top':50,
//     'bottom':50
// }

// const innerChart = {
//     'width' : chartArea.width - margin.left - margin.right,
//     'height' : chartArea.height - margin.top - margin.bottom
// }

const teamChart = {
    'width' : 4,
    'height' : 7
}

const teamChartMargin = 1
const width = 4;
const height = 7;


const rectPlayerDimension = 20;
const teamDimension = {
    'width' : 4,
    'height' :7
// plus 1 to leave space for caption
}

const teamPlotDimension = {
    'width' : teamDimension.width*rectPlayerDimension,
    'height' :teamDimension.height*rectPlayerDimension   
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


