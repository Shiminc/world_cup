variables = [
    {"variable_name":"play_in", "label":"Where players play professionally",
        "sort":"Sort with most mixed teams on top", 
        "sort_index":"play_diversity_index",
        "data":play_in_data},
    {"variable_name":"birth_place", "label":"Where players were born",
        "sort":"Sort with most mixed teams on top",
        "sort_index":"birth_diversity_index",   
        "data":birth_place_data},

    {"variable_name":"play_local", "label":"Whether players play in local leagues",
        "sort":"Sort with teams with most players playing in local leagues",
        "sort_index":"proportion_play_local",   
        "data":play_local_data},    
    {"variable_name":"born_local", "label":"Whether players were born local",
        "sort":"Sort with teams with most players born locally",
        "sort_index":"proportion_born_local",   
        "data":born_local_data},
    {"variable_name":"league", "label":"Bonus: Whether players play in Big 5 leagues",
        "sort":"Sort with teams with most players in Big 5 on top",
        "sort_index":"proportion_big_five",   
        "data":league_data},
    {"variable_name":"age", "label":"Bonus: Players' age",
        "sort":"Sort with teams with highest mean age on top",
        "sort_index":"mean_age",   
        "data":age_data},

]
function showAnalysis(varSelected){
    console.log('showAnalysis')
    const varSelectedData = analysis_data.find(variable=>variable.variable_name===varSelected)
    console.log(varSelectedData.analysis)

    d3.select('.analysis')
    .selectAll('p')
    .data(varSelectedData.analysis)
    .join('p')
        .text(d=>d)

}

function showSelected(varSelected){
    const varSelectedData = variables.find(variable=>variable.variable_name===varSelected)
    console.log("varSelectedData")

    console.log(varSelectedData)
    varColorData = varSelectedData.data
    d3.selectAll('circle')
    .attr('fill', d => circleFill(d))
    .attr('class', d=>`player-circle ${d[varSelected]}` )
    .style('opacity',1)

    d3.select('.legend-ul')
    .remove()

    createLegendAll (varSelected,varColorData)
    listenForHighLightSelection() 
    listenForShowAll()
    createSort(varSelected)
    showAnalysis(varSelected)
}


function createVariableSelection(varName){
    const variableButtons = d3.select('.selection-grid-container')
            .selectAll('div')
            .data(variables)
            .join('div')
                .attr('class','selection-button')
                .attr('id',d=>d.variable_name)
                .text(d=>d.label)
            
    d3.select(`#${varName}.selection-button`)
    .style('background-color','#3377ff')
    .style('color','white')
}

function changeVar(e,d){
    varName = e.target.getAttribute('id')
    console.log('did it run')
    console.log(varName)
    d3.select(`#${varName}.selection-button`)
    .style('background-color',' #3377ff')
    .style('color','white')
    d3.selectAll(`.selection-button:not(#${varName})`)
    .style('background-color', 'powderblue')
    .style('color','black')
    showSelected(varName)

}


function listenVarSelection(){
    d3.selectAll('.selection-button')
    .on('click',changeVar)
}

