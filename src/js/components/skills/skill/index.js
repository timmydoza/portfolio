import React from 'react';
import styles from './style.scss';
import throttle from 'lodash.throttle';

export default class Skill extends React.Component {
  componentDidMount() {

    var {bar, percent} = this.refs;

    var props = this.props;
    var skills = document.getElementById('skills');

    var threshold = (skills.getBoundingClientRect().top + window.scrollY) - (window.innerHeight * 0.6);

    function percentAnimate(val) {

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

    var scrollHandler = throttle( () => {

      if (window.scrollY > threshold) {

        window.removeEventListener('scroll', scrollHandler);

        window.setTimeout(function(){
          bar.style.width = props.width
          percentAnimate(props.width);
        }, props.delay);

      }

    }, 50);

    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
  }

  render() {
    return (
      <div className={styles.skill}>
        <span className={styles.skillName}>{this.props.name}</span>
        <span className={styles.percent} ref="percent">0%</span>
        <div className={styles.bar} style={{background: this.props.color}} ref="bar"></div>
      </div>
    )
  }
}
