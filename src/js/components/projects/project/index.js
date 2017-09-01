var React = require('react');
var styles = require('./style.scss');

import { Grid, Row, Column } from '../../layout';

module.exports = React.createClass({
  render: function() {
    return (
      <div className={styles.project}>

        <a href={this.props.project.href} target="_blank"></a>

        <img src={this.props.project.img} />

        <div className={styles.content}>
          <Column col_12>
            <h2>{this.props.project.name}</h2>
            <p>{this.props.project.description}</p>
          </Column>
        </div>

      </div>
    );
  }
});
