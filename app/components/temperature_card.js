var React = require('react');

const TemperatureCard = React.createClass({
  componentDidMount:function(){
    // utils.getWeather().then(function(data){
    //   this.setState(data);
    // }.bind(this));
  },
  getInitialState:function() {
    return {
      temp:"16",
      descr:"14%"
    };
  },
  render:function() {
    background={
      "backgroundImage":"url('./app/assets/indoor.jpg')",
    }
    return (
      <div className="weather " style={background}>
        <div className="main indoor">
          <div className="title">Indoor</div>
          <div className="temp">
            <div className="temperature">{this.state.temp}°</div>
            <div className="temp-description">Humidity: {this.state.descr}</div>
          </div>
        </div>
      </div>
    );
  },
});


module.exports=TemperatureCard;
