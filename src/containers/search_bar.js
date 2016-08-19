import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{

constructor(props){
  super(props);

  this.state={
    term:''
  }

  // call back cannot have this if this is presnt them you have to bind it or use fat arrow
  this.onInputChnage = this.onInputChnage.bind(this);
  this.onFormSubmit = this.onFormSubmit.bind(this);
}
// when you hit enter on the form browser makes a post call by default
onFormSubmit(event){
  // to prevent it by doing that event.preventDefault
// api key for openwaether
  //c018a2653dec445d95faeae0fdf4f844

    event.preventDefault();

// fetch weather data here
// all this should be binded 
this.props.fetchWeather(this.state.term);
this.setState({term:''});


}

onInputChnage(event){
  // do not use this // use setState method
  //this.state.term=event.target.value;
  this.setState({term:event.target.value});
  console.log(event.target.value);
}

  render(){
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input className="form-control"
        placeholder='Get a fiveday forecast in your favorite cities'
        value={this.state.term}
        onChange={this.onInputChnage}
        />
          <span        className="input-group-btn">
               <button type="submit" className="btn btn-secondary">Submit
               </button>
           </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather} ,dispatch);
}
// null means we dont need any redux sate here
export default connect (null, mapDispatchToProps)(SearchBar);
