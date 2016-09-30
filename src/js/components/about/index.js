var React = require('react');
var styles = require('./style.scss');

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <div className={styles.container}>
          <h1 id="about" className={styles.heading}>About</h1>
          <img src="img/Tim.jpg" className={styles.image}/>
          <p className={styles.text}>{text}</p>
          <div className={styles.icons}>
            <a href="mailto:timmydoza@gmail.com">
              <img src="img/gmail.png" className={styles.icon} />
            </a>
            <a href="https://github.com/timmydoza">
              <img src="img/github.png" className={styles.icon} />
            </a>
            <a href="https://linkedin.com/in/timmydoza">
              <img src="img/linkedin.png" className={styles.icon} />
            </a>
            <a href="http://npmjs.com/~timmydoza">
              <img src="img/npm.png" className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    )
  }
});
