import React from 'react';
import styles from './style.scss';
import CSSModules from 'react-css-modules';
import cs from 'classnames';

class Hero extends React.Component {
  componentDidMount() {
    setTimeout(function () {
      this.refs.text.classList.add(styles.active);
    }.bind(this), 200);
  }

  render() {
    return (
      <div styleName='background'>
        <img src="img/background.jpg" styleName='image'/>
        <div styleName='text' ref='text'>
          <h1>Software Developer</h1>
          <div styleName='line'></div>
          <h1>Boston, MA</h1>
        </div>
      </div>
    );
  }
}

export default CSSModules(Hero, styles);
