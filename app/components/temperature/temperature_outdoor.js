var React = require('react');

var TemperatureCard=require("./temperature_card");
var utils=require("../../utils/weather");


const OutdoorCard = React.createClass({
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
    return (
      <TemperatureCard
      title="Outdoor"
      background="outdoor.jpg"
      temperature={`${this.state.temp}`}
      description={this.state.descr}
    />
  )},
});

module.exports=OutdoorCard;
