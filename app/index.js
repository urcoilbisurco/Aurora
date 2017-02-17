
var React = require('react');
var ReactDOM = require('react-dom');
var utils=require("./utils/particle");

require("./style.scss");

const Switch = React.createClass({
  style:{
    border:"4px solid white",
    borderRadius:"10px",
    color:"white",
    padding:"16px 24px",
    cursor:"pointer",
    marginTop:"24px",
  },
  render:function(){
    if(this.props.on){
      label=this.props.labelOn;
    }else {
      label=this.props.labelOff;
    }
    return (
      <span onClick={this.props.onChange} style={this.style} className="switch">{label}</span>
    )
  }
});

const LightsSwitch = React.createClass({
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
          <div className="textContainer">
            <div className="text">Lights are {label}</div>
            <Switch on={this.state.on} onChange={this.onChange} labelOff={"Switch On"} labelOn={"Switch Off"} />
          </div>
        </div>
      </div>
    );
  },
});

const App = React.createClass({
  render:function() {
    return (
      <div>
        <LightsSwitch />
      </div>
    );
  },
});

ReactDOM.render(<App />, document.getElementById('app'));
