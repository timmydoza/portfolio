var React = require('react');
var styles = require('./style.scss');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container" style={{height: '500px'}}>
          <h1 id="about">About</h1>
        </div>
      </div>
    )
  }
});
