const plotMultipleTeam = (data,varName) => {

    const teamPlot = d3.select('.plot-grid-container')
    .selectAll('div')
    .data(data)
    .join('div')
    .attr('class','grid-box-team')

    teamPlot
      .append('div')
      .attr('class','country-name')
      .text(d=>d.country.replaceAll("_"," "))

      teamSVG = teamPlot
      .append('svg')
      .attr("viewBox", `0, 0, ${teamChart.width + teamChartMargin.left + teamChartMargin.right}, ${teamChart.height + teamChartMargin.bottom + teamChartMargin.top}`)
      .attr('class',d=>`svg-team ${d.country}`)
      .append('g')
      .attr("transform", `translate(${teamChartMargin.left}, ${teamChartMargin.top})`)


    //TODO d3.rollup/groupsout to sort within squad based on the varName so bubble grouped together
    
    playerCircle = teamSVG.selectAll('circle')
      .data(d=>d.squad)
      .join('circle')
        .attr('class', d=>`player-circle ${d[varName]}` )
        .attr('fill', d => circleFill(d))
      .attr('cx',(d,i) => xScale(i%teamDimension.width))
      .attr('cy',(d,i) => yScale(Math.floor(i/teamDimension.width)))
      .attr('r',xScale.bandwidth()/3)
      .attr('r',xScale.bandwidth()/3)
            .attr('stroke-width', 0.05)
      .attr('stroke','black')

    // teamPlot
    //   .append('div')
    //   .attr('class','country-name')
    //   .text(d=>d.country.replaceAll("_"," "))
};