import React from 'react';
import styles from './style.scss';

import Skill from './skill';
import skillData from './skill-data.js';

import { Grid, Row, Column } from '../layout';

var delay = 150;

export default class Skills extends React.Component {
  render() {
    return (
      <section className={styles.background}>
        <Grid>
          <h1 id="skills" className={styles.heading}>Skills</h1>
          <div className={styles.skills}>

          {skillData.map(function(skill, index) {return (
            <Skill name={skill.name} color={skill.color} width={skill.width} delay={index * delay}/>
          )})}

          </div>
        </Grid>
      </section>
    )
  }
}
