var React = require('react');

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


module.exports = Switch;
