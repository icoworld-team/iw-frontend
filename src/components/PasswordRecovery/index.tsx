import React, {Component} from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = () => createStyles({
  page: {
    background: 'url(/static/media/signp.52de34ae.jpg)',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    backgroundColor: '#fff',
    width: '420px',
    padding: '20px 15px',
    boxSizing: 'border-box',
  },
  input: {
    fontSize: '16px',
    height: '30px',
    color: '#171717',
    '&:-webkit-autofill': {
      '-webkit-box-shadow': 'inset 0 0 0 50px #fff!important',
      '-webkit-text-fill-color': '#171717!important',
      color: '#171717!important',
    }
  },
  formFooter: {
    marginTop: '20px',
    textAlign: 'right',
  },
  button: {
    minHeight: '30px',
    fontSize: '16px',
},
  link: {
    textDecoration: 'none',
  },
  linkButton: {
    textDecoration: 'none',
    color: '#2D3546',
    '&:hover': {
      textDecoration: 'underline',
    },
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
        <div className={classes.signupContainer}>

          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', textDecoration: 'none', color: 'inherit', marginBottom: '25px'}}>
            <img style={{width: '50px', marginBottom: '10px'}} src="./icons/logo.svg" alt="logo"/>
            <h2 style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
          </div>

          <div>
            <h2 style={{fontSize: '18px', fontWeight: 400, margin: 0, marginBottom: '15px'}}>Reset password</h2>
            <form>
              <TextField InputProps={{ disableUnderline: true, classes: {input: `${classes.input} border-input input`} }}
                name="email" placeholder="Enter your email" fullWidth={true} value={this.state.email}
                onChange={this.handleChange} style={{marginBottom: '10px'}} />
              
              <Button fullWidth={true} variant="contained" color="secondary"
                className={`button fill-button ${classes.button}`}>
                Reset
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default withStyles(styles)(SignInPage)