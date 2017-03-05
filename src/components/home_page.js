var React = require('react');

var SwitchCard=require("./switch_card/switch_card");
var SceneCard=require("./scene_card/scene_card");
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
        <Section title="Controls" direction="horizontal">
          <SwitchCard name="Star Lights" verb="are" background="star-lights" toggle="stars"/>
          <SwitchCard name="Main Light" verb="is" background="main-lights" toggle="-"/>
          <SwitchCard name="TV" verb="is" background="netflix" toggle="tv"/>
        </Section>
        <Section title="Scenes" direction="horizontal">
          <SceneCard name="Reading" background="star-lights" toggle="-"/>
          <SceneCard name="Telefilm" background="main-lights" toggle="-"/>
        </Section>
      </div>
    );
  },
});

module.exports=HomePage;
