const exclusion = ["AFC","CAF","CONCACAF","CONMEBOL","OFC","UEFA",
    "Asia-Pacific","Africa","Europe","Carribean"]

function showSelectedForHighlight (e,d){
    const selectedForHighlight = e.target.getAttribute('id')
    console.log(selectedForHighlight)
    if (exclusion.includes(selectedForHighlight)==false){

        if (e.shiftKey) {
            d3.selectAll(`#${selectedForHighlight}.legend-svg`)
            .style('opacity',1)
            d3.selectAll(`.player-circle.${selectedForHighlight}`)
            .style('opacity',1)
        }

        // deselect
        else if (e.ctrlKey) {
            d3.selectAll(`#${selectedForHighlight}.legend-svg`)
            .style('opacity',0.5)
            d3.selectAll(`.player-circle.${selectedForHighlight}`)
            .style('opacity',0.2)

        }
        else
        {
            d3.selectAll(`#${selectedForHighlight}.legend-svg`)
            .style('opacity',1)
            d3.selectAll(`.legend-svg:not(#${selectedForHighlight})`)
            .style('opacity',0.5)
            // e.target.setAttribute('fill','black')
            d3.selectAll(`.player-circle:not(.${selectedForHighlight})`)
            .style('opacity',0.2)
            d3.selectAll(`.player-circle.${selectedForHighlight}`)
            .style('opacity',1)

        }
    }
    else if (exclusion.includes(selectedForHighlight)==true){
        const selectedGroup = grouping.find(entity=>entity.entity===selectedForHighlight)
            console.log(selectedGroup.countries)

        if (e.shiftKey) {
            d3.selectAll(`#${selectedForHighlight}.legend-svg`)
            .style('opacity',1)
            selectedGroup.countries.forEach((country)=>{
                d3.selectAll(`.player-circle.${country}`)
                .style('opacity',1)
                d3.selectAll(`#${country}.legend-svg`)
                .style('opacity',1)
            })
        }

        // deselect
        else if (e.ctrlKey) {
            selectedGroup.countries.forEach((country)=>{
                d3.selectAll(`.player-circle.${country}`)
                .style('opacity',0.2)
                d3.selectAll(`#${country}.legend-svg`)
                .style('opacity',0.5)
            }
            )

        }
        else
        {
            
            d3.selectAll('.legend-svg')
                .style('opacity',0.5)

            d3.selectAll('.player-circle')
            .style('opacity',0.2)

            d3.selectAll(`#${selectedForHighlight}.legend-svg`)
            .style('opacity',1)

            selectedGroup.countries.forEach((country)=>{
                d3.selectAll(`.player-circle.${country}`)
                .style('opacity',1)
                d3.selectAll(`#${country}.legend-svg`)
                .style('opacity',1)
            })

        }
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