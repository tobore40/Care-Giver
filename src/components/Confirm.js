import React, { Component } from "react";
import { List, ListItem, ListItemText, Grid, Button } from "@material-ui/core/";
import "./Confrim.css";




export class Confirm extends Component {

  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        otherName,
        dob,
        residential,
        state,
        localGovernment,
        qualification,
        email,
        telephone,
        anyExperience,
        passport,
        passportId,
        upload,
      },
    } = this.props;
    return (
      <div className="confirm">
        <Grid container>
          <div class="wrapper">
            <div class="left">
              <ListItem>
                {/* <ListItemText primary="Upload Passport" secondary={upload} /> */}
                <img src={upload}  alt="user" width="200" />
              </ListItem>
              <List>
                <ListItem>
                  <ListItemText primary="First Name" secondary={firstName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Last Name" secondary={lastName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Other Name" secondary={otherName} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Enter Phone No"
                    secondary={telephone}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Enter your Email" secondary={email} />
                </ListItem>
              </List>
            </div>
            <div class="right">
              <div class="info">
                <h3>Information</h3>
                <div class="info_data">
                  <div class="data">
                    <List>
                      <ListItem>
                        <ListItemText primary="Date of Birth" secondary={dob} />
                      </ListItem>
                    </List>
                  </div>

                  <div class="data">
                    <ListItem>
                      <ListItemText
                        primary="Residential Address"
                        secondary={residential}
                      />
                    </ListItem>
                  </div>
                </div>
              </div>

              <div class="projects">
                <div class="projects_data">
                  <div class="data">
                    <ListItem>
                      <ListItemText
                        primary="State of Origin"
                        secondary={state}
                      />
                    </ListItem>
                  </div>
                  <div class="data">
                    <ListItem>
                      <ListItemText
                        primary="Local Government Area"
                        secondary={localGovernment}
                      />
                    </ListItem>
                  </div>
                </div>
              </div>

              <div class="projects">
                <div class="projects_data">
                  <div class="data">
                    <ListItem>
                      <ListItemText
                        primary="Qualification"
                        secondary={qualification}
                      />
                    </ListItem>
                  </div>
                  <div class="data">
                    <ListItem>
                      <ListItemText
                        primary="Any Experience in Health Sector"
                        secondary={anyExperience}
                      />
                    </ListItem>
                  </div>
                </div>
              </div>
              <div class="projects">
                <div class="projects_data"></div>
              </div>
              <div class="projects">
                <div class="projects_data">
                  <div class="data">
                    <ListItem>
                      <ListItemText
                        primary="Do have an International Passport"
                        secondary={passport}
                      />
                    </ListItem>
                  </div>
                  <div class="data">
                    <ListItem>
                      <ListItemText
                        primary="Passport ID"
                        secondary={passportId}
                      />
                    </ListItem>
                  </div>
                </div>
              </div>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <div>
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
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Confirm;
