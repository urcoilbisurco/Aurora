var React = require('react');

var SwitchCard=require("./switch_card/switch_card");
var Section=require("./section/section");
var HeaderCard=require("./header/header_card");
var WeatherCard=require("./temperature/temperature_outdoor");
var IndoorCard=require("./temperature/temperature_indoor");


const HomePage = React.createClass({
  render:function() {
    return (
      <div>
        <HeaderCard/>
        <WeatherCard/>
        <IndoorCard />
        <Section title="Controls">
          <SwitchCard name="Star Lights" verb="are" background="star-lights" color="" toggle="stars"/>
          <SwitchCard name="Main Light" verb="is" background="main-lights" color="" toggle="-"/>
          <SwitchCard name="TV" verb="is" background="netflix" color="" toggle="tv"/>
        </Section>
      </div>
    );
  },
});

module.exports=HomePage;
