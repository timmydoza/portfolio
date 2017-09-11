import React from 'react';
import styles from './style.scss';
import CSSModules from 'react-css-modules';
import throttle from 'lodash.throttle';

import Skill from './skill';
import skillData from '../../../data/skill-data.js';

import { Grid, Row, Column } from '../layout';

var delay = 150;

class Skills extends React.Component {

  constructor() {
    super();
    this.state = {
      active: false
    }
  }

  componentDidMount() {
    var skills = this.refs.skills;
    var threshold = (skills.getBoundingClientRect().top + window.scrollY) - (window.innerHeight * 0.6); //between 0 and 1.  0 is top of screen.

    var scrollHandler = throttle( () => {

      if (window.scrollY > threshold) {

        window.removeEventListener('scroll', scrollHandler);

        setTimeout( () => {

          this.setState({
            active: true
          });

        }, 600);

      }

    }, 50);

    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
  }

  render() {

    var active = this.state.active;

    return (
      <section id="skills" className='pageSection' styleName='background' ref='skills'>
        <Grid>
          <h1 styleName='heading'>Skills</h1>
          <div styleName='skills'>

          {skillData.map(function(skill, index) {return (
            <Skill name={skill.name} color={skill.color} width={skill.width} delay={index * delay} active={active}/>
          )})}

          </div>
        </Grid>
      </section>
    )
  }
}

export default CSSModules(Skills, styles);
