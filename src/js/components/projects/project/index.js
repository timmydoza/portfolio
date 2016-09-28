var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="project">
        <div className="overlay">
        {this.props.project.description}
        </div>
        <a href={this.props.project.href}>
          <img src={this.props.project.img} />
        </a>
        <div className="description">
          {this.props.project.name}
        </div>
      </div>
    );
  }
});
