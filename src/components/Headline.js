import { MenuItem, Select, SelectChangeEvent  } from "@mui/material";
import React, { useState } from "react";
import "./css/Headline.css";

function Headline() {

  const [mode, setMode] = useState('SI');

  const modeHandler = (event: SelectChangeEvent) => {
    setMode(event.target.value);
  };

  return (
    <div>
      <div className="headline-outer">
        <div>
          <div className="headline-heading">
            <h1>Request a quote</h1>
            <img src="icons/IconCard.svg" alt="" />
          </div>
          <p>And get the best rates from the leading logistics providers.</p>
        </div>

        <div className="select-component" >
        
        <Select value={mode} onChange={modeHandler}>
              <MenuItem value="SI">International (SI)</MenuItem>
              <MenuItem value="US">Imperial (US)</MenuItem>
            </Select>
        </div>
      </div>
    </div>
  );
}

export default Headline;
