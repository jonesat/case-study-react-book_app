import React from "react";

//  Data Structures
//  labels - string or number that represents values on x axes
//  Datasets - array of objects that represents Y valud data, 
// if you want to add multiple datasets to your chart you can add to this array
// 
// Inside the datasets array, each object should include:
//  Label: Name of the data - this will become the legends on the chart
//  Data: Numerical value representing the Y axes - this should be in the same order as the defined labels (X axes values).
// In the upcoming example "Jan" label is for "3" from data1 and "2" from data2

// export const data = {
//     labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],
//     datasets:[
//         {
//             label: "Data1",
//             data:data1,
//             backgroundColor: "rgba(87,121,234,0.6)",
//             borderColor:"rgba(87,121,234,0.6)",
//             order:1,
//         },
//         {
//             label: "Data2",
//             data:data2,
//             backgroundColor: "rgba(18,200,150,0.6)",
//             borderColor: "rgba(18,200,150,0.6)",
//             order: 1
//         },
//         {
//             label: "Data2",
//             data:data2,
//             backgroundColor: "rgba(18,200,150,0.6)",
//             borderColor: "rgba(18,200,150,0.6)",
//             order: 1
//         },
//         {
//             label: "Total",
//             data:total,
//             backgroundColor: "rgba(234,87,102,0.6)",
//             borderColor: "rgba(234,87,102,0.6)",
//             fill:false,
//             pointHoverRadius: 20,
//             pointHoverBorderWidth:5,
//             type:"line",
//             order: 0
//         },

//     ]
// }


export const UserData = [
    {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823,
    },
    {
        id:2,
        year: 2017,
        userGain: 45677,
        userLost:345,
    },
    {
        id:3,
        year:2018,
        userGain:78888,
        userLost:555,
    },
    {
        id:4,
        year:2019,
        userGain:90000,
        userLost:4555,
    },
    {
        id:5,
        year:2020,
        userGain:4300,
        userLost:234,
    }
]



export const options = {
    responsive: true,
    maintainAspectRation:false,
    animation: {
        duation:3000,
        easing:"easeInBounce"
    },
    title:{
        display:true,
        text: "Bar and Line Chart",
        fontSize:25,
    },
    scales:{
        xAxes:[
            {
                scaleLabel:{
                    display:true,
                    labelString:"Months",                    
                },
                stacked:"true",
            }
        ],
        yAxes:[
            {
                scaleLabel:{
                    display:true,
                    labelString:"Values"
                },
                stacked:"true"
            },
        ],
    },
}
