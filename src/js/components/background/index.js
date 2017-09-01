import React from 'react';
import styles from './style.scss';

module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.background}>
        <img src="img/background.jpg" className={styles.image}/>
        <div className={styles.text}>
          <h1>Software Developer</h1>
          <div className={styles.line}></div>
          <h1>Boston, MA</h1>
        </div>
      </div>
    );
  }
});
