const plot = (data) => {
    data.sort((x,y) => x.play_in_entity.localeCompare(y.play_in_entity))
  /*******************************/
  /*    Append the containers    */
  /*******************************/
  // Append the SVG container
    const svg = d3.select("#plot")
        .append("svg")
        .attr("viewBox", `0, 0, ${width}, ${height}`);

  // Append the group that will contain the inner chart
    const teamPlot = svg
    .append("g")
      .attr("transform", `translate(0, 0)`)
      .attr('class','team_plot');


    teamPlot.selectAll('rect')
                .data(data)
                .join('rect')
                .attr('class','player-rect')
                .attr('height',yScale.bandwidth())
                .attr('width',xScale.bandwidth())
                .attr('stroke-width',0.01)
                .attr('stroke','black')
                .attr('fill',d => colorScale(d.play_in_entity))
                .attr('x',(d,i) => xScale(i%teamDimension.width))
                .attr('y',(d,i) => yScale(Math.floor(i/teamDimension.width)))
                // .attr('cy',(d,i) => console.log(calculate_x(i)))
};