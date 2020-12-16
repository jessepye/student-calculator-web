import React from 'react';

const button = (props) => {
  const classes = ['btn'];

  if(props && props.type) {
    classes.push('btn--' + props.type);
  }

  return (
    <button className={classes.join(' ')} onClick={props.onButtonPress}>
      {props.children}
    </button>
  );
}

export default button;