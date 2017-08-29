var React = require('react');
var ReactDOM = require('react-dom');

var smoothScroll = require('smooth-scroll');
new smoothScroll({offset: 75, speed: 700});

var Menu = require('./components/menu');
var Background = require('./components/background');
var About = require('./components/about');
var Projects = require('./components/projects');
var Skills = require('./components/skills');
var Footer = require('./components/footer');

var App = React.createClass({
  render: function() {
    return (

      <div>
        <Menu />
        <Background />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>

    )
  }
});

ReactDOM.render(<App />, window.app);
