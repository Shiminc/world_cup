 const play_local_data=[
    {"play_local": "Do_Not_Play_Local", "color": "gray","count":906},
    {"play_local": "Play_Local", "color": "orange","count":343},
 ]

 const barWidthScalePlayLocal = d3.scaleLinear()
        .domain([0,1000])
        .range([0,100])

const colorScalePlayLocal = d3.scaleOrdinal()
        .domain(play_local_data.map(d => d.local))
        .range(play_local_data.map(d => d.color))