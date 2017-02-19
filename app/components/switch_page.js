var React = require('react');
var Switch= require('./switch');
var utils=require("../utils/particle");
var BackButton= require("./back_button.js");
var Header= require("./header.js");
const SwitchPage = React.createClass({
  componentDidMount:function(){
    utils.getLightStatus()
      .then(function(state){
        this.setState({
          on:state
        })
      }.bind(this))
  },
  getInitialState:function() {
    return {
      on:0,
    };
  },
  onChange:function(what){
    n=this.state.on==0 ? 1 : 0
    this.setState({
      on: n
    })
    d=(n==1 ? "on" : "off");
    utils.setLightStatus({arg:d})
  },
  render:function() {
    label=(this.state.on ? "On" : "Off");
    return (
      <div className="lights_switch">
        <div className="main">
          <Header>
            <BackButton />
          </Header>
          <div className="textContainer">
            <div className="text">Lights are {label}</div>
            <Switch on={this.state.on} onChange={this.onChange} labelOff={"Switch On"} labelOn={"Switch Off"} />
          </div>
        </div>
      </div>
    );
  },
});


module.exports=SwitchPage;
