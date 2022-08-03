import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './Success.css'

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className='success'>
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
            height='md'

          >
              <AppBar title="Success" />
              <div className='submition'>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
            <Link to='/'><Button
              color="primary"
              variant="contained"
              // onClick={this.continue}
                >Back to Home Page</Button></Link>
                </div>
          </Dialog>
        </>
        </MuiThemeProvider>
        </div>
    );
  }
}

export default Success;
