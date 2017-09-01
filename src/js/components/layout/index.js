import React from 'react';
import styles from './style.scss';

function getClasses(props) {
  var classes = Object.assign({}, props);
  delete classes.children;
  delete classes.state;
  return classNames = Object.keys(classes).reduce( (p, c) => {
    return p + c + ' ';
  }, '');
}

function Grid(props) {
  return (
    <div className='grid ${getClasses(props)}'>
      {props.children}
    </div>
  )
}

function Row(props) {
  return (
    <div className='row ${getClasses(props)}'>
      {props.children}
    </div>
  )
}

function Column(props) {
  return (
    <div className='col ${getClasses(props)}'>
      {props.children}
    </div>
  )
}


export {
  Grid,
  Row,
  Column
}
