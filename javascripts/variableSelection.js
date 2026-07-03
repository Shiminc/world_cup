variables = [
    {"variable_name":"play_in", "label":"Where players play professionally", "data":play_in_data},
    {"variable_name":"birth_place", "label":"Where players were born","data":birth_place_data},
    {"variable_name":"league", "label":"Whether players play in Big 5","data":league_data},

]

function showSelected(varSelected){
    const varSelectedData = variables.find(variable=>variable.variable_name===varSelected)

    varColorData = varSelectedData.data
    d3.selectAll('circle')
    // .attr('cx', d=>xScaleAge(d.age))
    .attr('fill',d=> {
        if (varSelected === 'play_in'){
            return colorScalePlayIn(d.play_in)
        }
        else if (varSelected === 'birth_place'){
            return colorScaleBirthPlace(d.birth_place)
        }
        else if (varSelected === 'league'){
            return colorScaleBigFive(d.league)

        }
    })
    .attr('class', d=>`player-circle ${d[varSelected]}` )
    .style('opacity',1)

    d3.select('.legend-ul')
    .remove()

    createLegendAll (varSelected,varColorData)
    listenForHighLightSelection() 
    listenForShowAll()

}


function createVariableSelection(){
    const variableButtons = d3.select('.selection-grid-container')
            .selectAll('div')
            .data(variables)
            .join('div')
                .attr('class','selection-button')
                .attr('id',d=>d.variable_name)
                .text(d=>d.label)
}

function changeVar(e,d){
    const varSelected = e.target.getAttribute('id')
    showSelected(varSelected)
}


function listenVarSelection(){
    d3.selectAll('.selection-button')
    .on('click',changeVar)
}

