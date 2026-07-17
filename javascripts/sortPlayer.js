function sortPlayerCircle () {
    d3.selectAll('.player-circle')
        .sort(function(a,b){
                return d3.ascending(a.age,b.age);})
        // .attr('fill', d=> {
        //     console.log(d.age)
        //     return colorScaleBornLocal(d.born_local)}
        // )
        .transition()
        .duration(1000)
        .attr('cx',(d,i) => xScale(i%teamDimension.width))
        .attr('cy',(d,i) => yScale(Math.floor(i/teamDimension.width)))

}

function listenSortPlayer() {
    d3.selectAll('.sort-player')
    .on('click', sortPlayerCircle)
}