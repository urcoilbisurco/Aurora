var React = require('react');

var SwitchCard=require("./switch_card");
var Section=require("./section");
var HeaderCard=require("./header_card");
var WeatherCard=require("./weather_card");
var TemperatureCard=require("./temperature_card");

//For animation
var ReactMotion=require("react-motion");
var Motion=ReactMotion.Motion;
var spring=ReactMotion.spring;


const HomePage = React.createClass({
  getInitialState:function(){
    return {
      pos:200,
      opacity:0
    }
  },
  componentDidMount:function(){
    setTimeout(function(){
      this.setState({pos:0, opacity:1})
    }.bind(this),200)
  },


  render:function() {
    return (
      <div>
        <Motion style={{opacity: spring(this.state.opacity, {stiffness: 70, damping: 20}), y: spring(this.state.pos, {stiffness: 70, damping: 20})}}>
        { ({opacity, y}) =>

          <div style={{
            opacity:`${opacity}`,
            WebkitTransform: `translate3d(0, ${y}px, 0)`,
            transform: `translate3d(0, ${y}px, 0)`,
          }}>
            <HeaderCard/>
            <WeatherCard/>
            <TemperatureCard/>
            <Section title="Controls">
              <SwitchCard name="Star Lights" verb="are" background="star-lights" color="" toggle="led"/>
              <SwitchCard name="Main Light" verb="is" background="main-lights" color="" toggle="relay"/>
              <SwitchCard name="TV" verb="is" background="netflix" color="" toggle="-"/>
            </Section>
          </div>
        }
        </Motion>
      </div>
    );
  },
});


module.exports=HomePage;
