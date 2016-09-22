var React = require('react');
var ReactDOM = require('react-dom');

var Menu = require('./components/menu.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
      </div>
    )
  }
});

ReactDOM.render(<App />, window.app);
