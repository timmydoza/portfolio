var React = require('react');
var styles = require('./style.scss');

module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.background}>
        <img src="img/Untitled-0.jpg" className={styles.image}/>
        <div className={styles.text}>
          <h1>Software Developer</h1>
          <div className={styles.line}></div>
          <h1>Boston, MA</h1>
        </div>
      </div>
    );
  }
});
