import React from 'react';
import styles from './style.scss';
import CSSModules from 'react-css-modules';
import cx from 'classnames';
import throttle from 'lodash.throttle';
import GithubSVG from './github.svg';

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

    var scrollHandler = throttle( () => {
      var threshold = (projectEl.getBoundingClientRect().top + window.scrollY) - (window.innerHeight - 100); // - 100 pixels

      if (window.scrollY > threshold) {

        window.removeEventListener('scroll', scrollHandler);

        setTimeout( () => {
          this.setState({
            active: true
          });
        }, 600);

      }

    }, 50);

    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
  }

  render() {

    var projectClasses = cx(
      'project',
      {
        'active': this.state.active
      }
    );

    return (
      <div styleName={projectClasses} ref='projectEl'>

        <a href={this.props.project.href} target="_blank"></a>

        <img src={this.props.project.img} />

        <div styleName='content'>
          <div styleName='buttonContainer'>
            <div styleName='buttonGroup'>
              <a className={!this.props.project.githubUrl && styles.disabled} styleName='github' href={this.props.project.githubUrl} target="_blank"><GithubSVG />Github</a>
              <a className={!this.props.project.demoUrl && styles.disabled} styleName='demo' href={this.props.project.demoUrl} target="_blank">Demo</a>
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
