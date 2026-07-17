d3.json("./data/data.json")
.then(data => {
    dataset = data
    plotMultipleTeam(data, varName)
    handleTooltips()  
    showAnalysis(varName)
    createLegendAll(varName,varColorData)
    listenForHighLightSelection() 
    listenForShowAll()
    createVariableSelection(varName)
    createSort(varName)

    listenVarSelection()
    listenSort()
    listenSortPlayer()

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