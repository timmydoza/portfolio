import React from 'react';
import styles from './style.scss';
import CSSModules from 'react-css-modules';

import { Grid, Row, Column } from '../layout';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

class Menu extends React.Component {

  constructor() {
    super();
    this.state = {
      minimize: window.innerWidth < 700,
      linkHighlightPosition: 0,
      movileNavOpen: false
    }

    this.handleScroll = () => {

      if (window.innerWidth < 700) {
        this.setState({minimize: true});
      } else {

        var y = window.scrollY;

        if (y > 100 && !this.state.minimize) {
          this.setState({minimize: true});
        }

        if (y < 100 && this.state.minimize) {
          this.setState({minimize: false});
        }

        this.pageSections.forEach((section, i) => {
          var rect = section.getBoundingClientRect();
          var position = i / this.pageSections.length * 100;
          if (rect.top < 70 && rect.bottom > 70 && this.state.linkHighlightPosition !== position) {
            this.setState({linkHighlightPosition: position});
          }
        });
      }

      }
  }

  componentDidMount() {
    this.pageSections = document.querySelectorAll('.pageSection');

    window.addEventListener('scroll', throttle(this.handleScroll, 100));
    window.addEventListener('resize', debounce(this.handleScroll, 25));
    this.handleScroll();


    this.toggleMobileNav = () => {
      this.setState({
        mobileNavopen: !this.state.mobileNavopen
      });
    }

    this.closeMobileNav = () => {
      this.setState({
        mobileNavopen: false
      });
    }
  }


  render() {

    var headerStyles = cx(
      'menu',
      {
        minimize: this.state.minimize
      }
    );

    var trayStyles = {
      height: this.state.mobileNavopen ? this.refs.nav.offsetHeight : 0
    }

    return (
      <header styleName={headerStyles}>

        <Grid>

          <a data-scroll href="#">
            <h1 styleName='name'>Tim Mendoza</h1>
          </a>
          <button className='show-md' styleName='hamburger' onClick={this.toggleMobileNav}></button>
          <div styleName='navTray' style={trayStyles} ref='navTray'>
            <nav styleName='nav' ref='nav' onClick={this.closeMobileNav}>
              <a styleName='link' data-scroll href="#about">About</a>
              <a styleName='link' data-scroll href="#skills">Skills</a>
              <a styleName='link' data-scroll href="#projects">Projects</a>
              <div className='hide-md' style={{left: this.state.linkHighlightPosition + '%'}}styleName='underline'></div>
            </nav>
          </div>

        </Grid>

      </header>
    )
  }
}

export default CSSModules(Menu, styles, {allowMultiple: true});
