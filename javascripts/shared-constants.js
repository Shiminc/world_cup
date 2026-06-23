// Chart
const width = 40;
const height = 70;


const rectPlayerDimension = 20;
const teamDimension = {
    'width' : 4,
    'height' :7
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


