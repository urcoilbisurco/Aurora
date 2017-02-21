var React = require('react');
var utils=require("../utils/weather");

const WeatherCard = React.createClass({
  componentDidMount:function(){
    utils.getWeather().then(function(data){
      this.setState(data);
    }.bind(this));
  },
  getInitialState:function() {
    return {
      temp:"-",
      descr:"-"
    };
  },
  render:function() {
    background={
      "backgroundImage":"url('./app/assets/weather.jpg')",
    }
    return (
      <div className="weather" style={background}>
        <div className="main">
          <div className="title">Weather</div>
          <div className="temp">
            <div className="temperature">{this.state.temp}°</div>
            <div className="temp-description">{this.state.descr}</div>
          </div>
        </div>
      </div>
    );
  },
});


module.exports=WeatherCard;
