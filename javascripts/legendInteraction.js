const country_group = ["AFC","CAF","CONCACAF","CONMEBOL","OFC","UEFA",
    "Asia-Pacific","Africa","Europe","Carribean"]
const age_group =["below 20","20-24","25-29","30-34","35-39","40 and above"]

function highlightAge(selectedForHighlight,opacity_circle){
    const selectedAgeGroup = age_data.find(age_group=>age_group.age===selectedForHighlight)
    selectedAgeGroup.age_array.forEach((e) => {
            d3.selectAll(`.player-circle.${CSS.escape(e)}`)
            .style('opacity',opacity_circle)
            })
    }

function highlightCountry(selectedForHighlight,opacity_circle,opacity_legend){
    const selectedCountry = grouping.find(entity=>entity.entity===selectedForHighlight)
    selectedCountry.countries.forEach((country)=>{
            d3.selectAll(`.player-circle.${country}`)
            .style('opacity',opacity_circle)
            d3.selectAll(`#${country}.legend-svg`)
            .style('opacity',opacity_legend)
            })
    }

function showSelectedForHighlight (e,d){
    const selectedForHighlight = e.target.getAttribute('id')
    console.log(selectedForHighlight)
    let opacity_circle
    let opacity_legend

    if (e.shiftKey){
        opacity_circle = 1
        opacity_legend = 1
    } else if (e.ctrlKey){
        opacity_circle = 0.2
        opacity_legend = 0.5
    } else {
        d3.selectAll('.legend-svg')
                .style('opacity',0.5)
        d3.selectAll('.player-circle')
                .style('opacity',0.2)
        opacity_circle = 1
        opacity_legend = 1
    }
    
    d3.selectAll(`#${CSS.escape(selectedForHighlight)}.legend-svg`)
        .style('opacity',opacity_legend)
    
        if (country_group.includes(selectedForHighlight)==false){
            // when it was the age dashboard
            if (age_group.includes(selectedForHighlight)==true){
                highlightAge(selectedForHighlight, opacity_circle)
            }
            // when it was the normal selection instead of age and federation/region
            else if (age_group.includes(selectedForHighlight)==false){
                d3.selectAll(`.player-circle.${selectedForHighlight}`)
                .style('opacity',opacity_circle)
            }
    } // when the selection was the federation/region
    else if (country_group.includes(selectedForHighlight)==true){
        highlightCountry(selectedForHighlight, opacity_circle,opacity_legend)
    }

    let selectedCircle = d3.selectAll('.player-circle')
            .filter(function(){
                return (getComputedStyle(this).opacity==1)
            })
    console.log(selectedCircle.size())
    d3.selectAll('#dynamic-numbers')
        .text(selectedCircle.size())
};

function showAll(){
        d3.selectAll('.legend-svg')
        .style('opacity',1)
        d3.selectAll('.player-circle')
        .style('opacity',1)
        d3.selectAll('#dynamic-numbers')
        .text("1248")
}

function listenForHighLightSelection () {
    d3.selectAll('.legend-text')
    .on('click',showSelectedForHighlight)
}

function listenForShowAll () {
    d3.select("#show-all-button")
    .on('click',showAll)
}