import React from 'react';
import styles from './style.scss';

import { Grid, Row, Column } from '../layout';

import throttle from 'lodash.throttle';

export default class Menu extends React.Component {

  constructor() {
    super();
    this.state = {
      minimize: false
    }

    this.handleScroll = () => {
        var y = window.scrollY;

        if (y > 100 && !this.state.minimize) {
          this.setState({minimize: true});
        }

        if (y < 100 && this.state.minimize) {
          this.setState({minimize: false});
        }

      }
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 50));
    this.handleScroll();
  }

  render() {
    var minimize = this.state.minimize ? ' ' + styles.minimize : '';

    return (
      <header className={styles.menu + minimize}>
      
        <Grid>

          <a data-scroll href="#">
          <h1 className={styles.name + minimize}>Tim Mendoza</h1>
          </a>
          <nav className={styles.nav}>
          <a className={styles.link} data-scroll href="#about">About</a>
          <a className={styles.link} data-scroll href="#skills">Skills</a>
          <a className={styles.link} data-scroll href="#projects">Projects</a>
          </nav>

        </Grid>

      </header>
    )
  }
}
