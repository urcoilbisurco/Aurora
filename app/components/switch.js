var React = require('react');

const Switch = React.createClass({
  render:function(){
    if(this.props.on){
      label="switch off";
    }else {
      label="switch on";
    }
    return (
      <span onClick={this.props.onChange} className={label}>
        <span className="handler"></span>
      </span>
    )
  }
});


module.exports = Switch;
