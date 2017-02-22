var React = require('react');
var Stylesheet=require("aphrodite/no-important").StyleSheet;
var css=require("aphrodite/no-important").css;

var Switch= require('./switch');
var utils=require("../utils/particle");

const SwitchCard = React.createClass({
  componentDidMount:function(){
    if(this.props.toggle!="-"){
      utils.getStatus(this.props.toggle)
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
    utils.setStatus(this.props.toggle, {arg:d})
  },
  render:function() {
    label=(this.state.on ? "on" : "off");
    background={
      "backgroundImage":"url('./app/assets/"+this.props.background+".jpg')",
    }
    return (
      <div className={css(style.switchCard)}>
        <div className={css(style.main)} style={background}>
          <div className={css(style.textContainer)} >
            <div className={css(style.text)}>{this.props.name} {this.props.verb} {label}</div>
            <span className={css(style._switch)}>
              <Switch on={this.state.on} onChange={this.onChange} labelOff={"Switch On"} labelOn={"Switch Off"} />
            </span>
          </div>
        </div>
      </div>
    );
  },
});

const style=Stylesheet.create({
  switchCard:{
    marginBottom:"8px",
  },
  main:{
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    height:"240px",
    backgroundSize:"cover",
    backgroundPosition:"50%",
  },
  textContainer:{
    marginTop: "auto",
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
    background:"rgba(0,0,0,0.4)",
    padding:"32px 16px"
  },
  text:{
    color:"white",
    fontSize:"20px",
    fontWeight:"300"
  },
  _switch:{
    marginLeft:"auto"
  }
});

module.exports=SwitchCard;
