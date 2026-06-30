const xScaleBigFive = d3.scaleOrdinal()
    .domain(['Premier_League','La_Liga','Ligue_1','Serie_A','Bundesliga',"non_big_five"])
    .range(['red','yellow','blue','green','black','white'])

function showBigFive(){
    d3.selectAll('circle')
    // .attr('cx', d=>xScaleAge(d.age))
    .attr('fill',d=>xScaleBigFive(d.league))
    console.log('click')
}
function listenSelectionBigFive () {
    d3.select('.big-five-container')
        .on('click',showBigFive)

}

const create_bigFive_selection = () => {
    d3.select('.big-five-container')
        .append('div')
        .attr('class','big-five-button')
        .text('Show players plays in Big 5 Leagues')

    listenSelectionBigFive () 
    
}