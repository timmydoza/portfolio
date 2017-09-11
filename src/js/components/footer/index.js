import React from 'react';
import styles from './style.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.container}>

          <p className={styles.text}>Built with React.
            &nbsp;<a href="https://github.com/timmydoza/portfolio" target="_blank" rel="noopener">Source Code</a>
          </p>

        </div>
      </div>
    )
  }
}
