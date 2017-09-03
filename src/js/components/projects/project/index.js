import React from 'react';
import styles from './style.scss';
import CSSModules from 'react-css-modules';
import cx from 'classnames';
import throttle from 'lodash.throttle';

import { Grid, Row, Column } from '../../layout';

class Project extends React.Component {

  constructor() {
    super();
    this.state = {
      active: false
    }
  }

  componentDidMount() {
    var projectEl = this.refs.projectEl;

    var threshold = (projectEl.getBoundingClientRect().top + window.scrollY) - (window.innerHeight * 0.7);

    var scrollHandler = throttle( () => {

      if (window.scrollY > threshold) {

        window.removeEventListener('scroll', scrollHandler);

        this.setState({
          active: true
        });

      }

    }, 50);

    window.addEventListener('scroll', scrollHandler);

  }


  render() {
    var projectStyles = cx(
      'project',
      {
        'active': this.state.active
      }
    );

    return (
      <div styleName={projectStyles} ref='projectEl'>

        <a href={this.props.project.href} target="_blank"></a>

        <img src={this.props.project.img} />

        <div styleName='content'>
          <div styleName='buttonContainer'>
            <div styleName='buttonGroup'>
            <a>Github</a>
            <a>Demo</a>
            </div>
          </div>
          <Column styleName='textContainer'>
            <h2>{this.props.project.name}</h2>
            <p>{this.props.project.description}</p>
          </Column>
        </div>

      </div>
    )
  }
}

export default CSSModules(Project, styles, {allowMultiple: true});
