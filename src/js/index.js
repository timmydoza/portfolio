import React from 'react';
import ReactDOM from 'react-dom';

import './core/polyfills';
import './core/analytics';

import smoothScroll from 'smooth-scroll';
new smoothScroll('a[href*="#"]', {offset: 60, speed: 700});

import Menu from './components/menu';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Footer from './components/footer';


class App extends React.Component {
  render() {
    return (

      <div>
        <Menu />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
