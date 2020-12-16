import React from 'react';

const computationScreen = (props) => {
  let classes = ["computation-screen"]
  if(props.mode === "EnteringEquation" || props.mode === "Finished") {
    classes.push("selected")
  }
  return (
    <div className={classes.join(" ")}>
      {props.children}
    </div>
  )
};

export default computationScreen;