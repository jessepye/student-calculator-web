import React from 'react';

const approximationScreen = (props) => {
  let classes = ["approximation-screen"]
  if(props.mode === "EnteringApproximation") {
    classes.push("selected")
  }
  return (
  <div className={classes.join(" ")}>
    {props.children}
  </div>
  );
}

export default approximationScreen;
