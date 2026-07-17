function listenSortPlayer() {
    d3.selectAll('.sort-player')
    .on('click', sortPlayerCircle)
}

function sortPlayerCircle(){
    var teams = document.querySelectorAll('.svg-team')
    // const team = d3.selectAll('.svg-team')
    teams.forEach((element)=> 
        d3.select(element).selectAll('.player-circle')
            .sort(function(a,b){
                return d3.ascending(a.age,b.age)
            })
            .transition()
            .duration(1000)
            .attr('cx',(d,i) => xScale(i%teamDimension.width))
            .attr('cy',(d,i) => yScale(Math.floor(i/teamDimension.width)))
        // .attr('fill','black')
    )

}