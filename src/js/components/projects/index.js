import React from 'react';
import Project from './project';
import styles from './style.scss';
import { Grid, Row, Column } from '../layout';

var projects = require('./project-data.js');

export default class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="pageSection">
        <Grid>
          <h1 className={styles.heading}>Projects</h1>

          {projects.map(function(project) {
            return <Project project={project}/>
          })}
        </Grid>
      </section>
    )
  }
}
