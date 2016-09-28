var React = require('react');
var styles = require('./style.scss');

module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.image}>
        <h1>Software Developer</h1>
        <div className={styles.line}></div>
        <h1>Seattle, WA</h1>
      </div>
    );
  }
});
