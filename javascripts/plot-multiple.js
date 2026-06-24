const plotMultiple = (data) => {


    const teamPlot = d3.select('.grid-container')
    .selectAll('div')
    .data(data)
    .join('div')
    .attr('class','grid-box-team')


    const teamSVG = teamPlot
      .append('svg')
      .attr("viewBox", `0, 0, ${teamChart.width + teamChartMargin*2}, ${teamChart.height + teamChartMargin*2}`)
      .attr('class',d=>`svg-team ${d.country}`)
      .append('g')
      .attr("transform", `translate(${teamChartMargin}, ${teamChartMargin})`)

    const playerCircle = teamSVG.selectAll('circle')
      .data(d=>d.squad)
      .join('circle')
      .attr('class','player-circle')
      .attr('fill',d => colorScale(d.play_in_entity))
      .attr('cx',(d,i) => xScale(i%teamDimension.width))
      .attr('cy',(d,i) => yScale(Math.floor(i/teamDimension.width)))
      .attr('r',xScale.bandwidth()/3)
      .attr('r',xScale.bandwidth()/3)
      .attr('stroke-width',0.01)
      .attr('stroke','black')

    teamPlot
      .append('div')
      .attr('class','country-name')
      .text(d=>d.country.replaceAll("_"," "))
};