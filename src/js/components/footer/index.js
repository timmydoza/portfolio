var React = require('react');
var styles = require('./style.scss');



module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>

          <p className={styles.text}>Built with React.
            &nbsp;<a href="https://github.com/timmydoza/portfolio" target="_blank">Source Code</a>
          </p>

        </div>
      </div>
    )
  }
});
