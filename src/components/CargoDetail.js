import React, { useState } from "react";
import "./css/CargoDetail.css";
import PropTypes from "prop-types";
import {
  Autocomplete,
  Avatar,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import {
  SearchRounded,
  Face,
  Train,
  Place,
  Flight,
  Rocket,
  Height,
} from "@mui/icons-material";
import { Box } from "@mui/system";
import Label from "./Label";

const CargoDetail = () => {
  const [mode, setMode] = useState("FCL");
  const [value, setValue] = useState(null);

  const modeHandler = (event: SelectChangeEvent) => {
    setMode(event.target.value);
  };

  return (
    <div>
      <h2>Cargo details</h2>

      <div className="search-outer">
        <FormControl fullWidth sx={{ m: 1 }}>
          <Label fvalue="PRODUCT" lvalue="HS Codes" required />
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <SearchRounded />
              </InputAdornment>
            }
            placeholder="Enter Commodity type or HS Code"
          />
        </FormControl>
      </div>

      <div className="form-outer">
        <h2>Delivery</h2>
        <form action="#">
          <div className="chip-container">
            <span>
              <img src="icons/train.svg" alt="" /> SEA
            </span>
            <span>
            <img src="icons/path.svg" alt="" /> LAND
            </span>
            <span>
            <img src="icons/plane.svg" alt="" /> AIR
            </span>
            <span>
            <img src="icons/train.svg" alt="" /> AUTO
            </span>
          </div>

          <div className="transportation">
            <Label fvalue="TRANSPORTATION BY" required />
            <Select value={mode} fullWidth onChange={modeHandler}>
              <MenuItem value="FCL">Full container load (FCL)</MenuItem>
              <MenuItem value="LCL">Less container load (LCL)</MenuItem>
              <MenuItem value="Bulk">Bulk</MenuItem>
            </Select>

            <div className="unit-checkbox">
              <FormControlLabel control={<Checkbox />} label="By unit" />
            </div>
          </div>

          <div className="input-container">
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <Label fvalue="WEIGHT" required />
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">MT</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <Label fvalue="VOLUME" required />
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">
                    <span>
                      M <sup>3</sup>
                    </span>
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </div>

          <div className="input-container">
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <Label fvalue="FROM" required />
              <OutlinedInput
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <Label fvalue="TO" required />
              <OutlinedInput
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </div>

          <div className="transportation">
            <Label fvalue="READY TO LOAD" required />
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <Label fvalue="FROM" required />
              <OutlinedInput
                id="outlined-adornment-weight"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </div>

          <div className="additional-info">
            <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
              <Label fvalue="ADDITIONAL INFORMATION" required />
              <OutlinedInput
                id="outlined-adornment-weight"
                multiline
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </div>

          <div className="associated-services">
            <h2>Associated services</h2>

            <div className="associated-chips">
              <Chip
                avatar={<><Checkbox /><img src="icons/icon1.png" height="15px" /></>}
                label="Insurance"
                variant="outlined"
              />
              <Chip
                avatar={<><Checkbox /> <img src="icons/icon2.png" height="15px" /></>}
                label="Inspection services"
                variant="outlined"
              />
              <Chip
                avatar={<><Checkbox /><img src="icons/icon3.png" height="15px" /></>}
                label="Certification"
                variant="outlined"
              />
              <Chip
                avatar={<><Checkbox /><img src="icons/icon4.png" height="15px" /></>}
                label="Customs clearance"
                variant="outlined"
              />
            </div>
          </div>

          <div className="cargoes-finance">
            <h2>СARGOES Finance</h2>

            <div className="blue-box">
              <div className="blue-box-check">
                <Checkbox />
              </div>
              <div>
                <h3>
                  I am interested in accessing Trade, Logistics or Invetory
                  Finance
                </h3>
                <p>
                  CARGOES Finance provides access to finance for exporters,
                  importers and logistics companies across the globe for
                  receivables and payables
                </p>
              </div>
            </div>
          </div>

          <div className="associated-services">
            <h2>Contact details</h2>
            <div className="transportation">
              <FormControl sx={{ m: 1 }} fullWidth variant="outlined">
                <Label fvalue="PHONE" required />
                <OutlinedInput
                  id="outlined-adornment-weight"
                  multiline
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </div>
          </div>

          <div className="associated-services">
            <div className="button-container">
              <Button variant="contained" className="button">
                Send
              </Button>
              <p><small>By clicking Send, you agree with our <span className="tandc">Terms & conditions</span>.</small></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CargoDetail;
