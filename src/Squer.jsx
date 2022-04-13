import React from "react";

const Squer = (props) => {
  const classes = props.className ? `${props.className} squer` : `squer`;
  return (
    <span className={classes} onClick={props.onClick}>
      {props.state}
    </span>
  );
};

export default Squer;
