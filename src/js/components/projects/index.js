import React from 'react';
import Project from './project';
import { Grid, Row, Column } from '../layout';
import throttle from 'lodash.throttle';


var projects = require('../../../data/project-data.js');

var delay = 550;

export default class Projects extends React.Component {

  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  componentDidMount() {
    var projects = this.refs.projects;
    var threshold = (projects.getBoundingClientRect().top + window.scrollY) - (window.innerHeight * 0.6);

    var scrollHandler = throttle( () => {

      if (window.scrollY > threshold) {

        window.removeEventListener('scroll', scrollHandler);

        this.setState({
          active: true
        });

      }

    }, 50);

    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
  }

  render() {
    var active = this.state.active;

    return (
      <section id="projects" className="pageSection" ref='projects'>
        <Grid>
          <h1>Projects</h1>

          {projects.map(function(project, index) {
            return <Project project={project} active={active} delay={index * delay}/>
          })}
        </Grid>
      </section>
    )
  }
}
