var React = require('react');
var Project = require('./project');
var styles = require('./style.scss');
import { Grid, Row, Column } from '../layout';


var projects = require('./project-data.js');

module.exports = React.createClass({
  render: function() {
    return (
      <section>
        <Grid textCenter>
          <h1 id="projects" className={styles.heading}>Projects</h1>

          {projects.map(function(project) {
            return <Project project={project}/>
          })}
        </Grid>
      </section>
    )
  }
});
