function showHyperlink(e,d){
    // const name= d.player.replace
    window.open(`https://en.wikipedia.org/wiki/${d.player}`,"_blank")

}

function hideTooltips(e,d) {
    //remove the tooltips

    d3.select("#toolTip-text")
    .remove();

    d3.select("#toolTip-background")
    .remove();

}

function showTooltips(e,d) {
    //use the centroid of the circle as the bases of coordinate to show tooltips
    const cx = e.target.getAttribute('cx')
    const cy = e.target.getAttribute('cy')
    const r = e.target.getAttribute('r')

    // append the rect first so the rect background won't obscure the text
    let rectBackground=d3.select(this.parentNode).append('rect')

    // append the text then tspan
    textContainer = d3.select(this.parentNode).append('text')
    .attr('id','toolTip-text')
    .attr('font-size',0.5)
    .attr('font-family', 'sans-serif')
    .attr('x',cx)
    .attr('y',cy) 
    //move the text a bit away from the circle
    .attr('transform',`translate (${r*2},${r})`)

    textContainer.append('tspan').attr('class','player')
      .text(d.player)
      .style("font-weight", "bold") 
      .attr('x',cx)
      .attr('transform',`translateX (${r})`)
      .attr("text-anchor", "start")
      
    textContainer.append('tspan').attr('class','club')
      .text(d.club)
      .attr('x',cx)
      .attr('transform',`translateX (${r})`)
      .attr('dy','1.2em')
      .attr("text-anchor", "start")

    textContainer.append('tspan').attr('class','play_in')
      .text(d.play_in.replaceAll("_"," "))
      .attr('x',cx)
      .attr('transform',`translateX (${r})`)  
      .attr('dy','1.2em')
      .attr("text-anchor", "start")

    textContainer.append('tspan').attr('class','age')
      .text(`${d.age} year old`)
      .attr('x',cx)
      .attr('transform',`translateX (${r})`)  
      .attr('dy','1.2em')
      .attr("text-anchor", "start")

    textContainer.append('tspan').attr('class','birth_nation')
      .text(`Born in ${d.birth_country}`)
      .attr('x',cx)
      .attr('transform',`translateX (${r})`)  
      .attr('dy','1.2em')
      .attr("text-anchor", "start")

    //get the dimension of the rect-background based on the space text takes on
    let text = this.parentNode.querySelector('text');
    let box = text.getBBox();
    console.log(box)
    rectBackground.attr('id','toolTip-background')
      .attr("x", cx)
      .attr("y", cy)
      .attr('transform',`translate (${r}, ${-r})`)
      .attr("width", box.width + 0.35)
      .attr("height", box.height + 0.35)
      .style("fill","white")
      .attr('fill-opacity',1)

};

function handleTooltips () {
    const playerToolTips = d3.selectAll('.player-circle')
    .on('mouseenter',showTooltips)
    .on('mouseleave',hideTooltips)
    .on('click',showHyperlink)

}