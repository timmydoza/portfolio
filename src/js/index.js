var React = require('react');
var ReactDOM = require('react-dom');

var smoothScroll = require('smooth-scroll');
smoothScroll.init({offset: 75, speed: 700});

var Menu = require('./components/menu');
var Background = require('./components/background');
var Projects = require('./components/projects');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <Background />


        <div className="content-wrapper">
          <h1 id="projects" className="section">Projects</h1>
          <Projects />
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App />, window.app);
