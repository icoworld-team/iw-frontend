import React, {Component} from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = () => createStyles({
  page: {
    background: 'url(/static/media/signp.52de34ae.jpg)',
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative',
  },
  formText: {
    textAlign: 'center',
    fontWeight: 'normal',
  },
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '420px',
  },
  formBtn: {
    margin: '20px 0',
  },
});

class SignInPage extends Component<any> {
  state = {
    email: '',
    emailInvalid: undefined,
  };

  handleChange = (e:any)=> {
    this.setState({
      [e.target.name]: e.target.value
    });
    switch (e.target.name) {
      case 'email':
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e.target.value.match(pattern) === null) {
          this.setState({emailInvalid: true});
          break;
        }
        this.setState({emailInvalid: false});
        break;
      default:
        break;
    }
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.page}>

        <div className={`${classes.container} card`}>

          <h3 className={classes.formText}>Reset Password</h3>
          <Typography>Enter your Email and instructions will be sent to you!</Typography>

          <form>
            <TextField name="email" label="Email" fullWidth margin="normal"
              value={this.state.email} onChange={this.handleChange}/>

            <Button className={classes.formBtn} variant="raised" color="primary" >
              Reset
            </Button>

          </form>

        </div>
      </div>
    )
  }
}


export default withStyles(styles)(SignInPage)