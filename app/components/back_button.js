var React = require('react');

const BackButton = React.createClass({
  contextTypes:{
    router:React.PropTypes.object.isRequired
  },
  onClick:function(){
    //this.props.path
    this.context.router.push("/");
  },
  render:function(){
    return (
      <span onClick={this.onClick} className="back-button">
        Back
      </span>
    )
  }
});


module.exports = BackButton;
