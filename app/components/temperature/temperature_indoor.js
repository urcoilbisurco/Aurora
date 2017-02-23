var React = require('react');
var TemperatureCard=require("./temperature_card");
const IndoorTemperatureCard = React.createClass({
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
    return (
      <TemperatureCard
      title="Indoor"
      background="indoor.jpg"
      temperature={this.state.temp}
      description={`Humidity: ${this.state.descr}`}
    />
  )},
});


module.exports=IndoorTemperatureCard;
