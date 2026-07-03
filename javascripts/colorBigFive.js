const league_data = [
{"league": "Others", "count":800, "color":"lightgray"},
{"league": "Premier_League", "count":154, "color":"#360d3a"},
{"league": "Bundesliga", "count":96, "color":"#D3010C"},
{"league": "Ligue_1", "count":75, "color":"#091C3E"},
{"league": "La_Liga", "count":70, "color":"#FF4B44"},
{"league": "Serie_A", "count":53, "color":"#0578FF"},
]

const barWidthScaleBigFive = d3.scaleLinear()
        .domain([0,805])
        .range([0,100])

const colorScaleBigFive = d3.scaleOrdinal()
        .domain(league_data.map(d => d.league))
        .range(league_data.map(d => d.color))