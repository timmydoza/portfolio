import React from 'react';
import styles from './style.scss';

function Grid(props) {
  return (
    <div className="{styles.grid}">
      {props.children}
    </div>
  )
}

function Row(props) {
  return (
    <div className="row">
      {props.children}
    </div>
  )
}

function Column(props) {

  props.width = props.width || 12;

  return (
    <div className="col col-${props.width}">
      {props.children}
    </div>
  )
}

export {
  Grid,
  Row,
  Column
}
