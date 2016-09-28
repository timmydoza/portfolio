var React = require('react');
var Project = require('./project');

var projects = require('../../../lib/projects.js');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="project-wrapper">
      {projects.map(function(project) {
        return <Project project={project}/>
      })}
      </div>
    )
  }
});
