var React = require('react');
var ReactDOM = require('react-dom');

var Menu = require('./components/menu.jsx');
var Project = require('./components/project.jsx')

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <div className="image-wrapper">
          <h1>Software Developer</h1>
          <div className="line"></div>
          <h1>Seattle, WA</h1>
        </div>

        <div className="content-wrapper">
          <Project />
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App />, window.app);
