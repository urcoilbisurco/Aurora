var React = require('react');
var css=require("./section.scss");


var Section=function(props){
  return (
    <div className={css.section}>
      <div className={css.section_title}>{props.title}</div>
      {props.children}
    </div>
  )
};
module.exports = Section;
