var React = require('react');
var Section = React.createClass({
  render: function () {
    return (
      <div className='section'>
        <div className="section-title">{this.props.title}</div>
        {this.props.children}
      </div>
    )
  }
});
module.exports = Section;
