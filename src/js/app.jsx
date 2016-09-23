var React = require('react');
var ReactDOM = require('react-dom');

var Menu = require('./components/menu.jsx');
var Projects = require('./components/projects.jsx')

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />

        <div className="image-wrapper">
          <h1>Software Developer</h1>
          <div className="line white"></div>
          <h1>Seattle, WA</h1>
        </div>

        <div className="content-wrapper">
          <h1>Projects</h1>
          <Projects />
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App />, window.app);
