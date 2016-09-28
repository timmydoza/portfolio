var React = require('react');
var ReactDOM = require('react-dom');

var smoothScroll = require('smooth-scroll');
smoothScroll.init({offset: 75, speed: 700});

var Menu = require('./components/menu');
var Projects = require('./components/projects')



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
          <h1 id="projects" className="section">Projects</h1>
          <Projects />
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App />, window.app);
