var React = require('react');
var Stylesheet=require("aphrodite/no-important").StyleSheet;
var css=require("aphrodite/no-important").css;

const Switch = React.createClass({
  render:function(){
    return (
      <span onClick={this.props.onChange} className={css(style.switch)}>
        <span className={css(style.handler, this.props.on  ? style.off : style.on)}></span>
      </span>
    )
  }
});

const style=Stylesheet.create({
  switch:{
    border:"3px solid white",
    borderRadius:"3px",
    color:"white",
    padding:"4px 8px",
    cursor:"pointer",
    width:"50px",
    display:"flex",
    padding:"2px",
    borderRadius:"999em",
    "-webkit-tap-highlight-color": "transparent",
    cursor:"pointer",
  },
  handler:{
    "-webkit-tap-highlight-color": "transparent",
    width:"20px",
    height:"20px",
    borderRadius:"999em",
    "-webkit-transition": ".4s",
    transition: ".4s",
  },
  on:{
    background:"white",
  },
  off:{
    transform: "translateX(30px)",
    background:"#536DFE",
  }
});

module.exports = Switch;
