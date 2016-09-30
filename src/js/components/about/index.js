var React = require('react');
var styles = require('./style.scss');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div className={styles.container}>
          <h1 id="about" className={styles.heading}>About</h1>
        </div>
      </div>
    )
  }
});
