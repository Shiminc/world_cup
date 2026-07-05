
function sortTeam (e,d){
    const selectedForSort= e.target.getAttribute('id')
    console.log(selectedForSort)
    if (selectedForSort=='group'){
        sorted_data = d3.sort(dataset,(d)=>d.country_index)
        d3.select('#group.sort-team ')
        .style('background-color',' #3377ff')
        .style('color','white')
        d3.select('#variable.sort-team ')
        .style('background-color', 'powderblue')
        .style('color','black')

    }
    else if (selectedForSort=='variable'){
    const varSort = variables.find(variable=>variable.variable_name===varName)
        sortIndex = varSort.sort_index
        sorted_data = d3.sort(dataset,(d)=>-d[sortIndex])
        d3.select('#group.sort-team ')
        .style('background-color', 'powderblue')
        .style('color','black')
        d3.select('#variable.sort-team ')
        .style('background-color',' #3377ff')
        .style('color','white')

    }
    
    d3.select('.plot-grid-container').selectAll('div').remove()
    plotMultipleTeam(sorted_data,varName)
    handleTooltips()  

}
function createSort (varName) {
    const varSelectedData = variables.find(variable=>variable.variable_name===varName)
    const sortLabel = varSelectedData.sort
    console.log(sortLabel)
    d3.select('#variable.sort-team ')
    .text(sortLabel)
    .style('background-color', 'powderblue')
    .style('color','black')
}

function listenSort() {
    d3.selectAll('.sort-team')
    .on('click', sortTeam)
}