const create_legend_play_in = () => {
    const legend_play_in = d3.select('.legend-panel')
        .append('ul')
        .selectAll('li')
        .data(colorEntity)
        .join('li')
            .attr('class',d=>`legend-entity-${d.entity}`)

    const legend_svg = legend_play_in
        .append('svg')
            .attr("width", 150)
            .attr("height", 20)
            .attr('class',d=>`legend-svg-${d.entity}`)

    //create larger svg area for federation
    federation.forEach((element) => {
        d3.select(`.legend-svg-${element.entity}`).attr('height',element.countries.length*17+20)
    })
    
    legend_svg.append('circle')
            .attr("cx", 10)
            .attr("cy", 10)
            .attr("r", 3)
            .attr("fill", d => d.color)
            .attr('stroke-width',0.09)
            .attr('stroke','black')

    legend_svg
        .append("text")
        .attr('x',18)
        .attr('y',12)
        .text(d => d.entity.replaceAll("_"," "))
        .attr('font-size','12px')
        .style('font-family','sans-serif')
        .attr('class',d=>`legend-entity-text-${d.entity}`)
    
    // add countries under federation
        federation.forEach((element) => {
                    console.log(element.countries)

        d3.select(`.legend-entity-text-${element.entity}`)
            .selectAll('tspan')
            .data(element.countries) 
            .join('tspan')
                .attr('x', 18)
                .attr('dy','1.3em')
                .text(d=>d)
    })    

    };