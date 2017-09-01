import React from 'react';
import styles from './style.scss';

import { Grid, Row, Column } from '../../layout';

export default class Project extends React.Component {

  constructor() {
    super();
    this.state.active = false;
  }

  
  render() {
    return (
      <div className={styles.project}>

        <a href={this.props.project.href} target="_blank"></a>

        <img src={this.props.project.img} />

        <div className={styles.content}>
          <Column className={styles.col+ ' ' + styles.active}>
            <h2>{this.props.project.name}</h2>
            <p>{this.props.project.description}</p>
          </Column>
        </div>

      </div>
    );
  }
}
