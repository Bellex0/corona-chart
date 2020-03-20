import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { Line, ResponsiveLine } from '@nivo/line';
import './style.css';
import Dropdown from './Dropdown';
import moment from 'react-moment';
import Chart from './Chart'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      data:[],
      country: [],
      country1: "US",
      country2: "China",
      country3: "Italy",
      country4: "Iran",
      data1: [],
      data2: [],
      data3: [],
      data4: [],
    };
  }

componentDidMount(){
fetch('https://pomber.github.io/covid19/timeseries.json')
//   method: 'GET'
// })
.then(r=>r.json())
.then(data=>{
  // console.log(Object.keys(data))
      // Object.keys(data).forEach(function(country){
      //     console.log(country)
      //     console.log(data[country])
          this.setState( (state) => {
            return {
                    // country: [...this.state.country, country],
                    data: data
                  }
          },
          ()=>{
            this.setState({
              country: [...this.state.country, Object.keys(data)]
            })
          }
          )
        

    //       data.forEach(({ date, confirmed, recovered, deaths }) =>
    //   console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    // )
// })
})
//moment(date).format('MM-DD-YYYY')
fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data => {
  data[this.state.country3].forEach(({ date, confirmed, recovered, deaths }) =>
    // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
    this.setState({
      data1: [...this.state.data1, 
        {
          id: `Argentina`,
          // color: "hsl(348, 70%, 50%)",
          data: [
            { x: new Date(`${date}`), y: confirmed },
          ]
        }
      ]
    })
  )
})
}

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

  


  get lineChartConfig() {
    console.log(Object.keys(this.state.data))
    console.log(this.state.data1)
    return {
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
      // colors:{scheme: 'set1'},
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
        tickPadding: 5,
      //   tickRotation: 0,
        legend: 'Time period',
        legendOffset: 46,
        legendPosition: 'middle'
      },
      axisLeft:{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle'
      },
      legends:[
        {
          text: {
            fill: 'red',
            fontSize: '14px',
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

  handleChange = () => {
  fetch("https://pomber.github.io/covid19/timeseries.json")
  .then(response => response.json())
  .then(data => {
    data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
      // console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
      this.setState({
        data1: [
          {
            id: `Argentina`,
            data: [
              { x: date, y: confirmed },
            ]
          }
        ]
      })
    )
  })
  }

  render() {

    
    return (
      <div>
        <Dropdown data={Object.keys(this.state.data)}/> 
        <h3>Custom Data Index </h3>
        {/* <ResponsiveLine key={null}
          {...this.lineChartConfig}
        /> */}

        {/* <h3>Data from the <a
          href="http://nivo.rocks/storybook/?knob-curve=step&selectedKind=Line&selectedStory=time%20x%20scale&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybooks%2Fstorybook-addon-knobs"
          title="@nivo/line"
        >example</a></h3> */}
        {/* <Line key={2}
        {...this.lineChartConfigFromExample}
        /> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
