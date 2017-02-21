var React = require('react');
var Switch= require('./switch');
var utils=require("../utils/particle");

const SwitchCard = React.createClass({
  componentDidMount:function(){
    if(this.props.toggle!="-"){
      utils.getLightStatus(this.props.toggle)
      .then(function(state){
        this.setState({
          on:state
        })
      }.bind(this))
    }
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
    utils.setLightStatus(this.props.toggle, {arg:d})
  },
  render:function() {
    label=(this.state.on ? "on" : "off");
    background={
      "backgroundImage":"url('./app/assets/"+this.props.background+".jpg')",
    }
    return (
      <div className="lights_switch">
        <div className="main" style={background}>
          <div className="textContainer" >
            <div className="text">{this.props.name} {this.props.verb} {label}</div>
            <Switch on={this.state.on} onChange={this.onChange} labelOff={"Switch On"} labelOn={"Switch Off"} />
          </div>
        </div>
      </div>
    );
  },
});


module.exports=SwitchCard;
