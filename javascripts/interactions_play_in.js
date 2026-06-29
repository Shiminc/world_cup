function showSelectedPlayIn (e,d){
    const play_in_selected = e.target.getAttribute('id')
    if (play_in_selected == 'All') {
        d3.selectAll('.legend-entity-text')
        .attr('fill','black')
        d3.selectAll('.player-circle')
        .style('opacity',1)

    }
    else {
        // multiple selection
        if (e.shiftKey) {
            e.target.setAttribute('fill','black')
            d3.selectAll(`.player-circle.${play_in_selected}`)
            .style('opacity',1)
        }

        // deselect
        else if (e.ctrlKey) {
            e.target.setAttribute('fill','gray')
            d3.selectAll(`.player-circle.${play_in_selected}`)
            .style('opacity',0.2)

        }
        else
        {
            d3.selectAll('.legend-entity-text')
            .attr('fill','gray')
            e.target.setAttribute('fill','black')
            d3.selectAll(`.player-circle:not(.${play_in_selected})`)
            .style('opacity',0.2)
            d3.selectAll(`.player-circle.${play_in_selected}`)
            .style('opacity',1)

        }
    }
};

function listenForSelection () {
    const playerToolTips = d3.selectAll('.legend-entity-text')
    .on('click',showSelectedPlayIn)

}