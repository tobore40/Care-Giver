import React, { Component } from "react";

import { Card, TextField, Grid, Button, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import "./FormUserDetails.css";
// import NameOfState from "./NameOfState";
// import Info from "./Info";






    
  

export class FormUserDetails extends Component {

     constructor(props) {
    super(props)
    
    this.state = {
      cities: 'Lagos'
    }
}

  handleSelectChange = event => {
    this.setState({
      cities: event.target.value
    })
  }



  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div
        className="mt-10"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px",
        }}
      >
        <Card className="card">
          <Grid container spacing="2">
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="p-2">
                <TextField
                  placeholder="Enter Your First Name"
                  label="First Name"
                  type="text"
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="p-2">
                <TextField
                  placeholder="Enter Your Other Name"
                  label="Other Name"
                  type="text"
                  variant="outlined"
                  onChange={handleChange("otherName")}
                  defaultValue={values.otherName}
                  margin="normal"
                  fullWidth
                />
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="p-2">
                <TextField
                  placeholder="Lastname"
                  label="Lastname"
                  type="text"
                  variant="outlined"
                  onChange={handleChange("lastName")}
                  defaultValue={values.lastName}
                  margin="normal"
                  fullWidth
                />
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="p-2">
                <TextField
                 
                  type="date"
                  variant="outlined"
                  onChange={handleChange("dob")}
                  defaultValue={values.dob}
                  margin="normal"
                  fullWidth
                />
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="mt-4">
               



          
          
           <FormControl vmargin="normal"fullWidth variant="outlined" >
        <InputLabel id="demo-simple-select-standard-label">State of Origin</InputLabel>
        <Select
          placeholder="Enter your State"
                  label="State of Origin"
                  onChange={handleChange("state")}  
                  defaultValue={values.state}
                    margin="normal"
                  fullWidth
                    variant="outlined"
                  
        >
          <MenuItem value="Select" >
                      <em>Select</em>
                 
          </MenuItem>
          <MenuItem value='Lagos'>Lagos</MenuItem>
          <MenuItem value={'Abuja'}>Abuja</MenuItem>
          <MenuItem value={'Oyo'}>Oyo</MenuItem>
        </Select>
      </FormControl>
        
        
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="p-2">
                <TextField
                  placeholder="Enter Your Local Government"
                  label="LGA"
                  type="text"
                  onChange={handleChange("localGovernment")}
                  defaultValue={values.localGovernment}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TextField
                placeholder="Enter Your Residential Address"
                variant="outlined"
                type="text"
                label="Residential Address"
                onChange={handleChange("residential")}
                defaultValue={values.residential}
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>{" "}
          <br />
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={this.continue}
                type="submit"
              >
                Continue
              </Button>
            </div>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default FormUserDetails;
