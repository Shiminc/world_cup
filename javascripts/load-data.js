d3.json("../data/data.json")
.then(data => {
    console.table(data)
    console.log(data.length)

    plotMultipleTeam(data)
    handleTooltips()  
    create_legend_play_in()
    listenForSelection()  
  })
.catch(error => console.log(error));


// d3.json("../data/processed_data.json")
// .then(data => {
//     // console.table(data)
//     console.log(data.length)

//     //test with one team first
//     const oneTeam = data.filter(d => d.country==='Spain')
//     console.table(oneTeam);
//     console.log(xScale.bandwidth())
//     console.log(yScale.bandwidth())
//     plot(oneTeam);

//     //multiple teams
    
//   })
// .catch(error => console.log(error));