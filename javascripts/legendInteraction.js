function showSelectedForHighlight (e,d){
    const selectedForHighlight = e.target.getAttribute('id')
        console.log(`.player-circle.${selectedForHighlight}`)
        if (e.shiftKey) {
            e.target.setAttribute('fill','black')
            d3.selectAll(`.player-circle.${selectedForHighlight}`)
            .style('opacity',1)
        }

        // deselect
        else if (e.ctrlKey) {
            e.target.setAttribute('fill','gray')
            d3.selectAll(`.player-circle.${selectedForHighlight}`)
            .style('opacity',0.2)

        }
        else
        {
            d3.selectAll('.legend-text')
            .attr('fill','gray')
            e.target.setAttribute('fill','black')
            d3.selectAll(`.player-circle:not(.${selectedForHighlight})`)
            .style('opacity',0.2)
            d3.selectAll(`.player-circle.${selectedForHighlight}`)
            .style('opacity',1)

        }
    
};

function showAll(){
        d3.selectAll('.legend-text')
        .attr('fill','black')
        d3.selectAll('.player-circle')
        .style('opacity',1)
}

function listenForHighLightSelection () {
    d3.selectAll('.legend-text')
    .on('click',showSelectedForHighlight)

}

function listenForShowAll () {
    d3.select("#show-all-button")
    .on('click',showAll)

}