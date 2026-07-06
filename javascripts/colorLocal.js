 const play_local_data=[
    {"play_local": "Do_Not_Play_Local", "color": "gray","count":906},
    {"play_local": "Play_Local", "color": "orange","count":343},
 ]

 const barWidthScalePlayLocal = d3.scaleLinear()
        .domain([0,1000])
        .range([0,100])

const colorScalePlayLocal = d3.scaleOrdinal()
        .domain(play_local_data.map(d => d.play_local))
        .range(play_local_data.map(d => d.color))

 const born_local_data=[
    {"born_local": "Born_Local", "color": "orange","count":940},
    {"born_local": "Not_Born_Local", "color": "gray","count":309},
 ]

 const barWidthScaleBornLocal = d3.scaleLinear()
        .domain([0,1000])
        .range([0,100])

const colorScaleBornLocal = d3.scaleOrdinal()
        .domain(born_local_data.map(d => d.born_local))
        .range(born_local_data.map(d => d.color))