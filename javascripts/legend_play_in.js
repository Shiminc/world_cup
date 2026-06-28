const create_legend_play_in = () => {
    const legend_play_in = d3.select('.legend-panel')
        .append('ul')
        .selectAll('li')
        .data(colorEntity)
        .join('li')
            .attr('class','legend-entity')

    const legend_svg = legend_play_in
        .append('svg')
            .attr("width", 20)
            .attr("height", 20)

    legend_svg.append('circle')
            .attr("cx", 10)
            .attr("cy", 10)
            .attr("r", 3)
            .attr("fill", d => d.color)
            .attr('stroke-width',0.09)
            .attr('stroke','black')

    legend_play_in
        .append("text")
        .text(d => d.entity.replaceAll("_"," "))
        .attr('font-size','10px');
    };