import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';


class App extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1XNHFwt1nCd-qsavz4hwaezYHDY7ZgSJG9IAZ9e9bUj4',
      callback: googleData => {
        var eles = googleData["Data"]["elements"];
        this.setState({
          data: eles
        }) 
        console.log('google sheet data --->', googleData)
        for(var i=0;i<eles.length;i++){
          console.log("Data "+ eles[i]["Email"]);

        }
      },
      simpleSheet: false
    })
  }


  render() {
    const { data } = this.state
    return (
      <div className="App">
        
         <div id="employee-details">
          {
           data.map(obj => {
              return (
                <div key={obj.Email}>
                  <p>{obj.Email}</p>
                  
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
