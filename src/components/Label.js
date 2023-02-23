import React from "react";
import './css/Label.css'

const Label = ({fvalue, lvalue, required}) => {
  return (
    <div className="label">
      <p>
        <small>
        {fvalue && fvalue} {required && <sup className="sup">*</sup>}
        </small>
      </p>
      <p>{lvalue && lvalue}</p>
    </div>
  );
};

export default Label;
