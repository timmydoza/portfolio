import React from 'react';
import Project from './project';
import { Grid, Row, Column } from '../layout';


var projects = require('../../../data/project-data.js');

var delay = 550;

export default class Projects extends React.Component {

  render() {

    return (
      <section id="projects" className="pageSection">
        <Grid>
          <h1>Projects</h1>

          {projects.map(function(project, index) {
            return <Project project={project} delay={index * delay}/>
          })}
        </Grid>
      </section>
    )
  }
}
