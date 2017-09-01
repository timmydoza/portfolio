import React from 'react';
import styles from './style.scss';

function getClasses(props) {
  var classes = Object.assign({}, props);
  delete classes.children;
  delete classes.state;
  return Object.keys(classes).reduce( (p, c) => {
    return p + c + ' ';
  }, '');
}

function Grid(props) {
  return (
    <div className='grid'>
      {props.children}
    </div>
  )
}

function Row(props) {
  var classes = getClasses(props);

  return (
    <div className='row ${getClasses(props)}'>
      {props.children}
    </div>
  )
}

function Column(props) {
  var classes = getClasses(props);
console.log(classes);
  return (
    <div className={`col ${props.className}`}>
      {props.children}
    </div>
  )
}


export {
  Grid,
  Row,
  Column
}
