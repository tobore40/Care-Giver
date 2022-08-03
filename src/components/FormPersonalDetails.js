import React, { Component } from "react";
import {
  Card,
  TextField,
  Grid,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import image from "../assets/img3.jpg";

export class FormPersonalDetails extends Component {
  //   constructor(props) {
  //   super(props)
  //   this.state = {
  //     photo: ''
  //   }
  // }

  // handleChangePhoto = (event) => {
  //   this.setState({
  //     photo: event.target.value
  //   })
  // }

  // handleChangeUpload = (event) => {
  //   this.setState({
  //     photo: event.preventDefault
  //   })
  // }

  constructor(props) {
    super(props);

    this.state = {
      question: "Select",
    };
  }

  handleSelectChange = (event) => {
    this.setState({
      question: event.target.value,
    });
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
                  placeholder="Enter Your Whatsapp phone No"
                  label="Whatsapp Number"
                  type="number"
                  onChange={handleChange("telephone")}
                  defaultValue={values.telephone}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="mt-4">
                <FormControl vmargin="normal" fullWidth variant="outlined">
                  <InputLabel id="demo-simple-select-standard-label">
                    Any Experience in Health Sector
                  </InputLabel>
                  <Select
                    placeholder="Health Sector"
                    label="health"
                    onChange={handleChange("anyExperience")}
                    defaultValue={values.anyExperience}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value="Select">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Doctor">Doctor</MenuItem>
                    <MenuItem value={"Nurse"}>Nurse</MenuItem>
                    <MenuItem value={"Care Giver"}>Care Giver</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="mt-4">
                <FormControl vmargin="normal" fullWidth variant="outlined">
                  <InputLabel id="demo-simple-select-standard-label">
                    Do you have International passport
                  </InputLabel>
                  <Select
                    placeholder="International Passport"
                    label="Passport"
                    onChange={handleChange("passport")}
                    defaultValue={values.passport}
                    margin="normal"
                    fullWidth
                    variant="outlined"
                  >
                    <MenuItem value="Select">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value={"No"}>No</MenuItem>
                    <MenuItem value={"Prefer Not to say"}>
                      Prefer Not to say
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="p-2">
                <TextField
                  placeholder="Enter Your Passport ID"
                  label="Passport ID"
                  type="number"
                  onChange={handleChange("passportId")}
                  defaultValue={values.passportId}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="p-2">
                <TextField
                  placeholder="Enter Your Email"
                  label="Email"
                  type="email"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12}>
              <div className="p-2">
                <TextField
                  placeholder="Enter Your Qualification"
                  label="Qualification"
                  type="text"
                  onChange={handleChange("qualification")}
                  defaultValue={values.qualification}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <input
                type="file"
                onChange={handleChange("upload")}
                defaultValue={values.upload}
              />

              {/* value={this.state.photo} onChange={this.handleChangePhoto} */}

              {/* <img src={image} value={this.state.photo} onChange={this.handleChangePhoto} alt="" style={{width: '100px', height: 'auto', border: '1px solid green'}} /> */}
            </Grid>
          </Grid>
          {/* {" "} */}
          <br />
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div style={{ margin: "5px" }}>
              <Button
                style={{ margin: "5px" }}
                color="secondary"
                variant="contained"
                onClick={this.back}
              >
                Back
              </Button>

              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
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

export default FormPersonalDetails;
