var React = require('react');
var Header = React.createClass({
  render: function () {
    return (
      <div className='header'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Header;
