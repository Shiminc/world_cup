const xScalePlayLocal = d3.scaleOrdinal()
    .domain(['true','false'])
    .range(['black','white'])

console.log(xScalePlayLocal('true'))

function showPlayLocal(){
    d3.selectAll('circle')
    // .attr('cx', d=>xScaleAge(d.age))
    .attr('fill',d=>xScalePlayLocal(d.local))
    console.log('click')
}
function listenSelectionPlayLocal () {
    d3.select('.play-local-container')
        .on('click',showPlayLocal)

}

const create_play_local_selection = () => {

    d3.select('.play-local-container')
        .append('div')
        .attr('class','play-local-button')
        .text('Show players play in local leagues')

    listenSelectionPlayLocal () 
    
}