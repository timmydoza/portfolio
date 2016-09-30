var React = require('react');
var ReactDOM = require('react-dom');

var smoothScroll = require('smooth-scroll');
smoothScroll.init({offset: 75, speed: 700});

var Menu = require('./components/menu');
var Background = require('./components/background');
var About = require('./components/about');
var Projects = require('./components/projects');
var Skills = require('./components/skills');
var Contact = require('./components/contact');

var App = React.createClass({
  render: function() {
    return (

      <div>
        <Menu />
        <Background />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

    )
  }
});

ReactDOM.render(<App />, window.app);
