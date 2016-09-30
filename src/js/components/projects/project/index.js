var React = require('react');
var styles = require('./style.scss');

module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.project}>

        <a href={this.props.project.href}>

          <div className={styles.overlay}>
          {this.props.project.description}
          </div>

          <img src={this.props.project.img} />

          <div className={styles.description}>
            {this.props.project.name}
          </div>
          
        </a>

      </div>
    );
  }
});
