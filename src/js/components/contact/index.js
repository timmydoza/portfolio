var React = require('react');
var styles = require('./style.scss');



module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>
          <h1 id="contact" className={styles.heading}>Contact</h1>

        </div>
      </div>
    )
  }
});
