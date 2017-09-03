import React from 'react';
import styles from './style.scss';

export default class Skill extends React.Component {

  percentAnimate(val, percent) {

    val = parseInt(val)

    var count = 0;

    var loop = setInterval(() => {

      if (count >= val) {
        clearInterval(loop);
      } else {
        percent.innerHTML = ++count + '%';
      }

    }, 700 / val)

  }

  render() {

    var {bar, percent} = this.refs;
    var props = this.props;

    if (this.props.active) {

      window.setTimeout(function(){
        bar.style.width = props.width
        this.percentAnimate(props.width, percent);
      }.bind(this), props.delay);

    }

    return (
      <div className={styles.skill}>
        <span className={styles.skillName}>{props.name}</span>
        <span className={styles.percent} ref="percent">0%</span>
        <div className={styles.bar} style={{background: props.color}} ref="bar"></div>
      </div>
    )
  }
}
