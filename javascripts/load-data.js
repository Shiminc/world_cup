let dataset
d3.json("../data/data.json")
.then(data => {
    dataset = data
    // console.table(data)
    // console.log(data.length)

    plotMultipleTeam(data, varName)
    handleTooltips()  
    createLegendAll(varName,varColorData)
    listenForHighLightSelection() 
    listenForShowAll() 
    // create_sort()
    // create_age_selection()
    // create_bigFive_selection()
    // create_play_local_selection()
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