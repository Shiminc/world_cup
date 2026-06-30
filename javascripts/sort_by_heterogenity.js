function changeOrder (order){
    if (order ==='descreasing'){
        sorted_data = d3.sort(dataset,(d)=>-d.diversity_index)
    }
    else if (order ==='ascending'){
        sorted_data = d3.sort(dataset,(d)=>d.diversity_index)

    }
    d3.select('.plot-grid-container').selectAll('div').remove()

    plotMultipleTeam(sorted_data)
    // .selectAll('div')
    // const country = d3.select('.plot-grid-container')
    // .selectAll('div')
    // .data(sorted_data)
    // .join(
    //     enter => enter.append('div').attr('class','grid-box-team'),
    //     update => update.select('.country-name').text(d=>d.country.replaceAll("_"," ")),
    //     exit => exit.remove()
    // )

    // const grid_box = d3.selectAll('.grid-box-team').select('svg')
    //   .attr('class',d=>`svg-team ${d.country}`)

    // // const grid_box_g = grid_box.select('g')
    // //                     .attr('class','trial')

    // // grid_box_g.selectAll('circle')
    // //   // .data(d=>d3.sort(d.squad,(x)=>x.player))
    // //   .data(d=>d.squad)
    // //   .join(
    // //         enter => enter.selectAll('circle'),
    // //         update=>update.attr('class',d=>`player-circle ${d.play_in}`)
    // //             .attr('fill',d => colorScale(d.play_in))
    // //             .attr('cx',(d,i) => xScale(i%teamDimension.width))
    // //             .attr('cy',(d,i) => yScale(Math.floor(i/teamDimension.width))),
    // //         // exit => exit.remove()
    // //     )

    // //   .attr('r',xScale.bandwidth()/3)
    // //   .attr('r',xScale.bandwidth()/3)
    // //         .attr('stroke-width', 0.05)
    // //   .attr('stroke','black')


}
function sort_by(e,d){

    if (e.target.innerText == 'Change to most homogenous on top'){
        e.target.innerText = 'Change to most heterogenous on top'
        document.getElementById("sort-current").innerText = "Most homogenous world cup team on top" ; 
        changeOrder('ascending')

    } else if (e.target.innerText == 'Change to most heterogenous on top'){
        e.target.innerText = 'Change to most homogenous on top'
        document.getElementById("sort-current").innerText = "Most heterogenous world cup team on top" ; 
        changeOrder('descreasing')

    }
}

function listenSort () {
    d3.select('.sort-container')
        .on('click',sort_by)

}

const create_sort = () => {
    d3.select('.sort-container')
        .append('div')
        .attr('id','sort-current')
        .text('Most heterogenous world cup team on top')
    
    d3.select('.sort-container')
        .append('div')
        .attr('class','sort-button')
        .text('Change to most homogenous on top')

    listenSort () 
    
}