import React , { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component{
renderWeather(cityData){
  const name = cityData.city.name;
  return(
    <tr key={name}>
        <td>{name}</td>
    </tr>
  )
}
  render(){
    return(
      <table className="table table-hover">
            <thead>
                  <tr>
                    <th>City</th>
                    <th>Temprature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                  </tr>
            </thead>
            <tbody>
            {this.props.weather.map(this.renderWeather)}
            </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return {weather:state.weather};
}

// we are using weather:state.weather   state.weather > from reducer  (from redux state)

//same as above in es6 method
/*fucntion mapStateToProps(weather){
  return {weather};
}*/

export default connect(mapStateToProps)(WeatherList);
