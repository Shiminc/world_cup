const create_legend_play_in = () => {
    const legend_play_in = d3.select('.legend-panel')
        .append('ul')
        .selectAll('li')
        .data(colorEntity)
        .join('li')
            .attr('class',d=>`legend-entity-${d.entity}`)

    const legend_svg = legend_play_in
        .append('svg')
            .attr("width", 120)
            .attr("height", 20)
            .attr('class',d=>`legend-svg-${d.entity}`)

    d3.select('.legend-svg-AFC').attr('height',100)
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
        .attr('font-size','10px')
        .attr('class',d=>`legend-entity-text-${d.entity}`)
    
    const afc_legend = d3.select(".legend-entity-text-AFC")
            .selectAll('tspan')
            .data(AFC_country) 
            .join('tspan')
                .attr('x',0)
                .attr('dy','1.2em')

    afc_legend.text(d=>d)

    };