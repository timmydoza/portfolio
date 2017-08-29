import React from 'react';
import ReactDOM from 'react-dom';

import smoothScroll from 'smooth-scroll';
new smoothScroll({offset: 75, speed: 700});

import Menu from './components/menu';
import Background from './components/background';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';


class App extends React.Component {
  render() {
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
}

ReactDOM.render(<App />, document.getElementById('app'));
