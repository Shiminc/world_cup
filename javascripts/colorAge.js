const xScaleAgeColor = d3.scaleThreshold([20, 25, 30, 35, 40], d3.schemeBlues[6]);
//scaleThreshold categorise the threshold number to the next group
const barWidthScaleAge = d3.scaleLinear()
        .domain([0,600])
        .range([0,100])

const age_data = [
    {"age": "below 20","count": 20,"color": "#eff3ff","age_array":[16,17,18,19]},
    { "age": "20-24", "count": 290, "color": "#c6dbef","age_array":[20,21,22,23,24]},
    { "age": "25-29", "count": 561, "color": "#9ecae1","age_array":[25,26,27,28,29]},
    { "age": "30-34", "count": 303, "color": "#6baed6","age_array":[30,31,32,33,34] },
    { "age": "35-39", "count": 67, "color": "#3182bd","age_array":[35,36,37,38,39] },
    { "age": "40 and above", "count": 8, "color": "#08519c","age_array":[40,41,42,43,44,45]  }
]

// const band15 = xScaleAgeColor(19)
// const band20 = xScaleAgeColor(24)
// const band25 = xScaleAgeColor(29)
// const band30 = xScaleAgeColor(34)
// const band35 = xScaleAgeColor(39)
// const band40 = xScaleAgeColor(44)

// let band15Counter=0
// let band20Counter=0
// let band25Counter=0
// let band30Counter=0
// let band35Counter=0
// let band40Counter=0

// function calculateAge (data){
//     const squadData = data.map(d=>d.squad)

//     squadData.forEach((squad) =>{
//         squad.map(d=>{
//             if (xScaleAgeColor(d.age)==band15){
//                 band15Counter+=1
//             }
//             else if (xScaleAgeColor(d.age)==band20){
//                 band20Counter+=1
//             }
//             else if (xScaleAgeColor(d.age)==band25){
//                 band25Counter+=1
//             }
//             else if (xScaleAgeColor(d.age)==band30){
//                 band30Counter+=1
//             }
//             else if (xScaleAgeColor(d.age)==band35){
//                 band35Counter+=1
//             }
//             else if (xScaleAgeColor(d.age)==band40){
//                 band40Counter+=1
//             }

//             }

//         )//d
//     })//forEach

//     console.log(band20Counter)
//     console.log(band20)

// // age_data = [
// // {"age": "15-19", "count":band15Counter, "color":band15},
// // {"age": "20-24", "count":band20Counter, "color":band20},
// // {"age": "25-29", "count":band25Counter, "color":band25},
// // {"age": "30-34", "count":band30Counter, "color":band30},
// // {"age": "35-39", "count":band35Counter, "color":band35},
// // {"age": "40 and above", "count":band40Counter, "color":band40},
// // ]
// // console.log(age_data)
// } 

