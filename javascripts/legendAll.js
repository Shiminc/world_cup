const createLegendAll = (varName,varColorData) => {
    //todo make 'with corresponding characteristics' dynamics
    console.log(varName)
    console.table(varColorData)

    const legendList = d3.select('.legend-panel')
        .append('ul')
        .attr('class','legend-ul')
        .selectAll('li')
        .data(varColorData)
        .join('li')
            .attr('class',d=>`legend-${varName}`)

    const legendSVG = legendList
        .append('svg')
            .attr("width", 350)
            .attr("height", 20)
            .attr('class',d=>`legend-svg-${varName}`)
    
    legendSVG.append('circle')
            .attr("cx", 10)
            .attr("cy", 8)
            .attr("r", 5)
            .attr("fill", d => { 
                if (varName === 'play_in'){
                    if (d.count < 15 & d.count>0){
                        return 'white'
                        }
                    else {
                        return d.color
                    }
                } // varName === 'play_in'
                else if (varName === 'birth_place'){
                    if (d.count < 21 & d.count>0){
                        return 'white'
                        }
                    else {
                        return d.color
                    }

                }
            } // fill d
            ) // fill 
            .attr('stroke-width', 0.3)
            .attr('stroke', d => { 
                if (varName === 'play_in'){
                    if (d.count < 15 & d.count>0){
                        return 'white'
                        }
                    else {
                        return 'black'
                    }
                } // varName === 'play_in'
                else if (varName === 'birth_place'){
                    if (d.count < 21 & d.count>0){
                        return 'white'
                        }
                    else {
                        return 'black'
                    }

                }
            } // fill d
            ) // fill 

    legendSVG
        .append("text")
        .attr('x',20)
        .attr('y',12)
        .text(d => d[varName].replaceAll("_"," "))
        .attr('font-size','12px')
        .style('font-family','sans-serif')
        .attr('class',`legend-text`)
        .attr('id',d=>d[varName])
    
    
    const bar = legendSVG.append('rect')
            .attr('x',150)
            .attr('y',0)
            .attr('width',d=>{
                if (varName === 'play_in'){
                       return barWidthScalePlayIn(d.count)
                    } // varName === 'play_in'
                 
                else if (varName === 'birth_place'){
                       return barWidthScaleBirthPlace(d.count)
                    } // varName === 'play_in'
                } 
            ) // fill 
            .attr('height',18)
            // .attr("fill", d => { 
            //     if (varName === 'play_in'){
            //             return d.color
            //         } // varName === 'play_in'
            // } // fill d
            // ) // fill 
            .attr('fill',d=>d.color)
            .attr('stroke-width', 0.3)
            .attr('stroke','black')

    const label_count = legendSVG.append('text')
            .attr('x',d=>{
                if (varName === 'play_in'){
                        return barWidthScalePlayIn(d.count) + 160
                    }// varName === 'play_in'
                else if (varName === 'birth_place'){
                        return barWidthScaleBirthPlace(d.count) + 160
                } 
            })
            .attr('y',12)
            // .text(d=>{
            //     if (varName === 'play_in'){
            //             if (d.count!=0){
            //                 return d.count
            //             }
            //         }// varName === 'play_in'
            //     } 
            // )
            .text(d=>{
                if (d.count!=0){
                    return d.count
                }
            })
            .attr('font-size','12px')
            .style('font-family','sans-serif')

    };