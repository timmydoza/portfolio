import React from 'react';
import styles from './style.scss';
import CSSModules from 'react-css-modules';

import { Grid, Row, Column } from '../layout';
import throttle from 'lodash.throttle';

function forEach(nodeList, fn) {
  Array.forEach.call(nodeList, fn);
}

class Menu extends React.Component {

  constructor() {
    super();
    this.state = {
      minimize: false,
      linkHighlightPosition: 0
    }



    this.handleScroll = () => {
        var y = window.scrollY;

        if (y > 100 && !this.state.minimize) {
          this.setState({minimize: true});
        }

        if (y < 100 && this.state.minimize) {
          this.setState({minimize: false});
        }

        this.pageSections.forEach((section, i) => {
          var rect = section.getBoundingClientRect();
          if (rect.top < 70 && rect.bottom > 70) {
            this.setState({linkHighlightPosition: i / this.pageSections.length * 100});
          }
        });

      }
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 50));
      this.pageSections = document.querySelectorAll('.pageSection');
    this.handleScroll();
  }

  render() {

    var headerStyles = cx(
      'menu',
      {
        minimize: this.state.minimize
      }
    );



    return (
      <header styleName={headerStyles}>

        <Grid>

          <a data-scroll href="#">
            <h1 styleName='name'>Tim Mendoza</h1>
          </a>
          <nav styleName='nav'>
            <a styleName='link' data-scroll href="#about">About</a>
            <a styleName='link' data-scroll href="#skills">Skills</a>
            <a styleName='link' data-scroll href="#projects">Projects</a>

            <div style={{left: this.state.linkHighlightPosition + '%'}}styleName='underline'></div>
          </nav>

        </Grid>

      </header>
    )
  }
}

export default CSSModules(Menu, styles, {allowMultiple: true});
