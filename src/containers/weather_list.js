import React , { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
renderWeather(cityData){
  const name = cityData.city.name;
  const temps = cityData.list.map(weather=>weather.main.temp);
  const pressures = cityData.list.map(weather =>weather.main.pressure);
  const humidities = cityData.list.map(weather =>weather.main.humidity);
/*  const lat = cityData.city.coord.lat;
  const lon = cityData.city.coord.lon;*/

    const { lon, lat } = cityData.city.coord;
  // can be replaced with this line below
  //const {lat ,lon} = cityData.city.coord;
   //returns Temprature from weather json

  return(
    <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units ="K"/></td>
        <td><Chart data={pressures} color="green" units = "hPa" /></td>
        <td><Chart data={humidities} color="black" units = "%" /></td>
    </tr>
  )
}
  render(){
    return(
      <table className="table table-hover">
            <thead>
                  <tr>
                    <th>City</th>
                    <th>Temprature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
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
  console.log('at reduser ' ,state.weather);
  return {weather:state.weather};
}

// we are using weather:state.weather   state.weather > from reducer  (from redux state)

//same as above in es6 method
/*fucntion mapStateToProps(weather){
  return {weather};
}*/

export default connect(mapStateToProps)(WeatherList);
