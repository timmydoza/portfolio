var React = require('react');
var Project = require('./project');
var styles = require('./style.scss');

var projects = require('./project-data.js');

module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.container}>
        <h1 id="projects" className={styles.heading}>Projects</h1>

        {projects.map(function(project) {
          return <Project project={project}/>
        })}

      </div>
    )
  }
});
