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
    var descr="Humidity: "+this.state.descr
    return (
      <TemperatureCard
      title="Indoor"
      background="indoor.jpg"
      temperature={this.state.temp}
      description={descr}
    />
  )},
});


module.exports=IndoorTemperatureCard;
