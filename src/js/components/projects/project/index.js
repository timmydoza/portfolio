var React = require('react');
var styles = require('./style.scss');

module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.project}>
        <div className={styles.overlay}>
        {this.props.project.description}
        </div>
        <a href={this.props.project.href}>
          <img src={this.props.project.img} />
        </a>
        <div className={styles.description}>
          {this.props.project.name}
        </div>
      </div>
    );
  }
});
