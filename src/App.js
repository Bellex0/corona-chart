import React, { Component } from 'react';
import { render } from 'react-dom';
import { Line, ResponsiveLine } from '@nivo/line';
import './style.css';
import Dropdown from './Dropdown';
import moment from 'react-moment';
import Chart from './Chart';
import uuid from 'react-uuid';
import { ThemeProvider } from '@nivo/core';
import { black } from 'color-name';
import Multiselect from "@khanacademy/react-multi-select";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      data:[],
      country: [],
      countries: ["US","China","Italy","Iran"],
      country1: "US",
      country2: "China",
      country3: "Italy",
      country4: "Iran",
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      selected: [],
      isLoading: true
    };
  }

componentDidMount(){
setTimeout(() => {
    this.setState({
      isLoading: false
    });
  }, 5000);
fetch('https://pomber.github.io/covid19/timeseries.json')
//   method: 'GET'
// })
.then(r=>r.json())
.then(data=>{
          this.setState( (state) => {
            return {
                    // country: [...this.state.country, country],
                    data: data
                  }
          },
          // ()=>{
          //   this.setState({
          //     country: [...this.state.country, Object.keys(data)]
          //   })
          // }
          )
        

    //       data.forEach(({ date, confirmed, recovered, deaths }) =>
    //   console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    // )
// })
})
this.fetchAgain();
//moment(date).format('MM-DD-YYYY')
//! 1 


// fetch("https://pomber.github.io/covid19/timeseries.json")
// .then(response => response.json())
// .then(data => {
//   data[this.state.countries[3]].forEach(({ date, confirmed, recovered, deaths }) =>
//     // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
//     this.setState({
//       data1: [...this.state.data1, 
//         {
//           key: uuid(),
//           id: this.state.countries[3],
//           // color: "hsl(348, 70%, 50%)",
//           data: [
//             {key: uuid(),  x: new Date(`${date}`), y: confirmed, value: "a" },
//           ]
//         }
//       ]
//     })
//   )
// })
// //! 2 
// fetch("https://pomber.github.io/covid19/timeseries.json")
// .then(response => response.json())
// .then(data => {
//   data[this.state.countries[2]].forEach(({ date, confirmed, recovered, deaths }) =>
//     // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
//     this.setState({
//       data1: [...this.state.data1, 
//         {
//           key: uuid(),
//           id: this.state.countries[2],
//           color: "hsla(117, 100%, 50%, 1)",
//           data: [
//             { key: uuid(),  x: new Date(`${date}`), y: confirmed, value: "a" },
//           ]
//         }
//       ]
//     })
//   )
// })
// //! 3 
// fetch("https://pomber.github.io/covid19/timeseries.json")
// .then(response => response.json())
// .then(data => {
//   data[this.state.countries[1]].forEach(({ date, confirmed, recovered, deaths }) =>
//     // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
//     this.setState({
//       data1: [...this.state.data1, 
//         {
//           key: uuid(),
//           id: this.state.countries[1],
//           color: "hsla(311, 100%, 50%, 1)",
//           data: [
//             { key: uuid(), x: new Date(`${date}`), y: confirmed, value: "a" },
//           ]
//         }
//       ]
//     })
//   )
// })
// //! 4 
// fetch("https://pomber.github.io/covid19/timeseries.json")
// .then(response => response.json())
// .then(data => {
//   data[this.state.countries[0]].forEach(({ date, confirmed, recovered, deaths }) =>
//     // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
//     this.setState({
//       data1: [...this.state.data1, 
//         {
//           key: uuid(),
//           id: this.state.countries[0],
//           color: "hsl(348, 70%, 50%)",
//           data: [
//             { key: uuid(), x: new Date(`${date}`), y: confirmed , value: "a"},
//           ]
//         }
//       ]
//     })
//   )
// })
}

// options= [
//   Object.keys(this.state.data).map((country)=>{
//      return  {label: country,
//               value: country}
//   })
// ]

makeArrayOfCountries = () => {
  const countriesArray = Object.keys(this.state.data)
  console.log(countriesArray)
  //!  how do i iterate over this array to have output like {label: country, value: country}
  var outcome = countriesArray.sort().map(function(value){
    return {label: value, value: value};
  })
  return outcome
    // countriesArray.forEach((country)=>{
    //    return  country;
    // })
}

fetchAgain = () => {
  this.setState({
    data1: []
  })
fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
  data[this.state.countries[3]].forEach(({ date, confirmed, recovered, deaths }) =>
    // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    this.setState({
      data1: [...this.state.data1, 
        {
          key: uuid(),
          id: this.state.countries[3],
          // color: "hsl(348, 70%, 50%)",
          data: [
            {key: uuid(),  x: new Date(`${date}`), y: confirmed, value: "a" },
          ]
        }
      ]
    })
  )
})
//! 2 
fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
  data[this.state.countries[2]].forEach(({ date, confirmed, recovered, deaths }) =>
    // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    this.setState({
      data1: [...this.state.data1, 
        {
          key: uuid(),
          id: this.state.countries[2],
          color: "hsla(117, 100%, 50%, 1)",
          data: [
            { key: uuid(),  x: new Date(`${date}`), y: confirmed, value: "a" },
          ]
        }
      ]
    })
  )
})
//! 3 
fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
  data[this.state.countries[1]].forEach(({ date, confirmed, recovered, deaths }) =>
    // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    this.setState({
      data1: [...this.state.data1, 
        {
          key: uuid(),
          id: this.state.countries[1],
          color: "hsla(311, 100%, 50%, 1)",
          data: [
            { key: uuid(), x: new Date(`${date}`), y: confirmed, value: "a" },
          ]
        }
      ]
    })
  )
})
//! 4 
fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
  data[this.state.countries[0]].forEach(({ date, confirmed, recovered, deaths }) =>
    // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    this.setState({
      data1: [...this.state.data1, 
        {
          key: uuid(),
          id: this.state.countries[0],
          color: "hsl(348, 70%, 50%)",
          data: [
            { key: uuid(), x: new Date(`${date}`), y: confirmed , value: "a"},
          ]
        }
      ]
    })
  )
})
}

options = [
  { label: "KPI Degradtion", value: "kpi_degradation" },
  { label: "Sleeping Cell", value: "sleeping_cell" },
  { label: "Anomaly", value: "anomaly" },
  { label: "Label1", value: "label_1" },
  { label: "Label2fgfgfgfghfghgh", value: "label_2" },
  { label: "Label3", value: "label_3" },
  { label: "Label4", value: "label_4" },
  { label: "Label5", value: "label_5" }
];

// ! how the state should look like 
// [
//   { x: new Date(`09-10-2018`), y: 3 },
// ]

// !this works 
// Object.keys(data).forEach(function(item){
//   console.log(item)
//   console.log(data[item])
// })

// !code how it should work 
// fetch("https://pomber.github.io/covid19/timeseries.json")
//   .then(response => response.json())
//   .then(data => {
//     data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
//       console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
//     )
//   })

//! id =${countries}
// ? x = 

handleSelectedChanged = selected => {
  this.setState({ selected: selected });
  console.log(this.state.selected);
};

resetCountries = () => {
  this.setState({selected: []})
}

updateCountries = () => {
  this.setState({countries: this.state.selected});
  this.fetchAgain();
  // this.componentDidMount()
  // this.forceUpdate()
}

changeState = (e) => {
  // this.stateChange(e)
  this.setState({
    country1: e
  })
  console.log(this.state.country1)
}


  get lineChartConfig() {
    // console.log(this.makeArrayOfCountries())
    // console.log(Object.keys(this.state.data))
    return {
      background: black,
      width: 1200,
      height: 800,
      data: this.state.data1,
      xScale:{type: 'point' },
      yScale:{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false },
      margin: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
      // colors:{scheme: 'paired'},
      lineWidth:8,
      pointSize:19,
      yScale: {
        type: 'linear',
        stacked: false
        },
      xScale: {
        type: 'time',
        precision: 'day',
      },
      
      axisBottom:{
        format: '%b %d',
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 10,
      //   tickRotation: 0,
        legend: 'Time period',
        legendOffset: 46,
        legendPosition: 'center'
      },
      axisLeft:{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'center'
      },
      pointColor:{ theme: 'background' },
      legends:[
        {
          text: {
            fill: 'red',
            fontSize: 14,
            },
            anchor: 'right',
            // direction: 'column',
            justify: true,
            translateX: -900,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            // symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                    }
                }
            ]
        }
    ],
    tooltip: {
      container: {
          background: 'white',
          color: 'inherit',
          fontSize: 'inherit',
          borderRadius: '2px',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
          padding: '5px 9px',
      },
      basic: {
          whiteSpace: 'pre',
          display: 'flex',
          alignItems: 'center',
      },
      table: {},
      tableCell: {
          padding: '3px 5px',
      },
  },
    };
  }

  get lineChartConfigFromExample() {
    return {
      width: 900,
      height: 400,
      margin: {
        top: 20,
        right: 20,
        bottom: 60,
        left: 80
      },
      data: this.state.data1,
      animate: true,
      xScale:{
        type: 'time',
        format: '%Y-%m-%d',
        precision: 'day'
        },
      yScale: {
        type: 'linear',
        stacked: false
      },
      axisBottom: {
        format: '%b %d'
      },
      curve: 'step',
      enableDotLabel: true,
      dotSize: 16,
      dotBorderWidth: 1,
      dotBorderColor: 'inherit:darker(0.3)'
    };
  }

  // handleChange = () => {
  // fetch("https://pomber.github.io/covid19/timeseries.json")
  // .then(response => response.json())
  // .then(data => {
  //   data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
  //     // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
  //     this.setState({
  //       data1: [
  //         {
  //           id: `Argentina`,
  //           data: [
  //             { x: date, y: confirmed },
  //           ]
  //         }
  //       ]
  //     })
  //   )
  // })
  // }

  render() {
    console.log(this.state.data1.length);

    const { selected, isLoading } = this.state;
    return (
      <div>
        <Multiselect
          options={this.makeArrayOfCountries()}
          onSelectedChanged={this.handleSelectedChanged}
          selected={this.state.selected}
          isLoading={isLoading}
          disabled={isLoading}
          disableSearch={false}
          overrideStrings={{
            selectSomeItems: "do me a favor by selecting something",
            allItemsAreSelected: "You have gone nuts... all selected",
            // selectAll: "do u wanna select all of them?",
            search: "Fantasy search"
          }}
        />
        <button onClick={this.resetCountries}> Reset </button>
        <button onClick={this.updateCountries}>Update </button>
        {selected.join(", ")}
        {/* <Dropdown data={Object.keys(this.state.data)} changeState={(e)=> this.changeState(e)}/> 
        <Dropdown data={Object.keys(this.state.data)}/> 
        <Dropdown data={Object.keys(this.state.data)}/> 
        <Dropdown data={Object.keys(this.state.data)}/>  */}

        <h3>Custom Data Index </h3>
        <ResponsiveLine key={null}
          {...this.lineChartConfig}
        />

        {/* <h3>Data from the <a
          href="http://nivo.rocks/storybook/?knob-curve=step&selectedKind=Line&selectedStory=time%20x%20scale&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"
          title="@nivo/line"
        >example</a></h3> */}
        {/* <Line key={2}
        {...this.lineChartConfigFromExample}
        /> */}
        {/* <Trail/> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));