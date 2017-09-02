import React from 'react';
import cx from 'classnames';
window.cx = cx;
function Grid(props) {

  return (
    <div className={cx('grid', props.className)}>
      {props.children}
    </div>
  )
}

function Row(props) {
  var classes = getClasses(props);

  return (
    <div className={cx('row', props.className)}>
      {props.children}
    </div>
  )
}

function Column(props) {

  var classes = cx(
    'col',
    'col-' + (props.width ? props.width : '12'),
    props.className
  )

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}


export {
  Grid,
  Row,
  Column
}
