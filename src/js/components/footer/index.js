var React = require('react');
var styles = require('./style.scss');



module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>

          <p className={styles.text}>Copyright 2016 Tim Mendoza</p>

        </div>
      </div>
    )
  }
});
