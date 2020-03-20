import React, { Component } from 'react';
import Main from './Main';
import Chart from './Chart';

export default class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React',
        //   data: this.props.data,
        //   country:this.props.data,
          country1: "",
          country2: "",
          country3: "",
          country4: "",
        };
      }

    

    render() {
        console.log(this.props.data)
        return (
            <div>
                    <select class="custom-select"
                        style={{"margin-bottom":"15px", "height":"30px","font-size":"17px",
                                "background-color":"#ffff00"
                        }}
                        // options={options}
                        values={[]}
                        onChange={e => {
                        this.setState({
                            country1: e.target.value
                        });
                    }}
            >
        {this.props.data.map((country) => (
                <option
                      style={{"font-size":"30px"}}
                      selected={null}
                      key={country}
                      value={country}
                >
                      {country}
                </option>
        ))}
        </select>
            <Chart/>

        {/* <Index1 data={this.state}/> */}
                
            </div>
        )
    }
}
