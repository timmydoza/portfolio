import React from 'react';
import styles from './style.scss';
import CSSModules from 'react-css-modules';
import cx from 'classnames';

import { Grid, Row, Column } from '../../layout';

class Project extends React.Component {

  constructor() {
    super();
    this.state = {
      active: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      setTimeout(function () {
        this.setState({
          active: true
        });
      }.bind(this), nextProps.delay);
    }
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
              <a styleName='github'>Github</a>
              <a styleName='demo'>Demo</a>
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
