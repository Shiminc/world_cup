const xScaleAge = d3.scaleThreshold([25, 30, 35], [1, 2, 3, 4]);
const xScaleAgeColor = d3.scaleThreshold([20, 25, 30, 35, 40], d3.schemeBlues[6]);

function showAge(){
    d3.selectAll('circle')
    // .attr('cx', d=>xScaleAge(d.age))
    .attr('fill',d=>xScaleAgeColor(d.age))
    console.log(xScaleAgeColor(45))

}
function listenSelection () {
    d3.select('.age-container')
        .on('click',showAge)

}

const create_age_selection = () => {
    d3.select('.age-container')
        .append('div')
        .attr('class','age-button')
        .text('Show age composition')

    listenSelection () 
    
}