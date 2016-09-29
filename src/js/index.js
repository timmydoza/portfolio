var React = require('react');
var ReactDOM = require('react-dom');

var smoothScroll = require('smooth-scroll');
smoothScroll.init({offset: 75, speed: 700});

var Menu = require('./components/menu');
var Background = require('./components/background');
var Projects = require('./components/projects');
var Skills = require('./components/skills');

var styles = require('./style.scss');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <Background />
        <div className={styles.content}>
          <h1 id="projects" className="section">Projects</h1>
          <Projects />
          <h1 id="skills" className="section">Skills</h1>
          <Skills />
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App />, window.app);
