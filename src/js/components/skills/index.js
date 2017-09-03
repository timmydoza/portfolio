import React from 'react';
import styles from './style.scss';
import CSSModules from 'react-css-modules';

import Skill from './skill';
import skillData from '../../../data/skill-data.js';

import { Grid, Row, Column } from '../layout';

var delay = 150;

class Skills extends React.Component {
  render() {
    return (
      <section id="skills" className='pageSection' styleName='background'>
        <Grid>
          <h1 styleName='heading'>Skills</h1>
          <div styleName='skills'>

          {skillData.map(function(skill, index) {return (
            <Skill name={skill.name} color={skill.color} width={skill.width} delay={index * delay}/>
          )})}

          </div>
        </Grid>
      </section>
    )
  }
}

export default CSSModules(Skills, styles);
