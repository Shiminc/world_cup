const plotMultipleTeam = (data) => {
    sorted_data = d3.sort(data,(d)=>d.diversity_index)
    sorted_data = d3.sort(data,(d)=>-d.proportion_local)
    sorted_data = d3.sort(data,(d)=>-d.proportion_big_five)

    const teamPlot = d3.select('.plot-grid-container')
    .selectAll('div')
    .data(sorted_data)
    .join('div')
    .attr('class','grid-box-team')

    teamSVG = teamPlot
      .append('svg')
      .attr("viewBox", `0, 0, ${teamChart.width + teamChartMargin.left + teamChartMargin.right}, ${teamChart.height + teamChartMargin.bottom + teamChartMargin.top}`)
      .attr('class',d=>`svg-team ${d.country}`)
      .append('g')
      .attr("transform", `translate(${teamChartMargin.left}, ${teamChartMargin.top})`)

    playerCircle = teamSVG.selectAll('circle')
      // .data(d=>d3.sort(d.squad,(x)=>x.player))
      .data(d=>d.squad)
      .join('circle')
      .attr('class','player-circle')
      .attr('fill',d => colorScale(d.play_in_entity))
      .attr('cx',(d,i) => xScale(i%teamDimension.width))
      .attr('cy',(d,i) => yScale(Math.floor(i/teamDimension.width)))
      .attr('r',xScale.bandwidth()/3)
      .attr('r',xScale.bandwidth()/3)
            .attr('stroke-width', 0.05)
      .attr('stroke','black')

    teamPlot
      .append('div')
      .attr('class','country-name')
      .text(d=>d.country.replaceAll("_"," "))
};