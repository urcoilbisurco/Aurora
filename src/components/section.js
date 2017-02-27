var React = require('react');
var Stylesheet=require("aphrodite/no-important").StyleSheet;
var css=require("aphrodite/no-important").css;



var Section = React.createClass({
  render: function () {
    return (
      <div className='section'>
        <div className={css(style.sectionTitle)}>{this.props.title}</div>
        {this.props.children}
      </div>
    )
  }
});
const style=Stylesheet.create({
  sectionTitle:{
    padding:"20px",
    paddingBottom:"12px",
    fontSize:"20px",
    fontWeight:"700",
    marginTop:"auto",
    color:"#333"
  }
})

module.exports = Section;
