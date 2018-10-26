import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  wrapper: {
    minWidth: '1100px',
    width: '100%',
    backgroundColor: '#fff',
  },
  section: {
    width: '100%',
    boxSizing: 'border-box',
  },
  container: {
    width: '800px',
    margin: '0 auto',
    color: '#171717',
  },
  title: {
    fontSize: '24px',
    fontWeight: 800,
    lineHeight: '30px',
    margin: 0,
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '22px',
    margin: 0,
    marginBottom: '10px',
  },
  pageHeading: {
    height: '560px',
    background: 'url("./for_pitch.jpg") center',
    backgroundSize: 'cover',
    display: 'flex',
    position: 'relative',
  },
  pageHeadingFilter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.2,
  },
  pageItem: {
    marginBottom: '50px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  content: {
    fontSize: '16px',
    marginTop: '10px',
  },
  numberList: {
    marginTop: '10px',
  },

  info: {
    fontSize: '16px',
    marginTop: '50px',
  },
  infoLink: {
    color: '#171717',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  footerContainer: {
    width: '800px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px 0',
  },
  footerDescription: {
    fontSize: '14px',
    color: '#171717',
    marginTop: '10px',
    display: 'inline-block',
  },
  footerSections: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  footerSectionsItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerSectionsTitle: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '7px',
    color: '#171717',
  },
  footerSectionsLink: {
    color: '#171717',
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '20px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  link: {
    color: '#4a86e8',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  popupWrap: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  popup: {
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '15px',
  },
  input: {
    width: '365px',
    height: '25px',
  },
  button: {
    fontWeight: 400,
    backgroundColor: '#303546',
    width: '365px',
    height: '35px',
    border: 'none',
    outline: 'none',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    marginTop: '20px',
    cursor: 'pointer',
  },
});

class PitchForInvestorsPage extends React.Component<any> {
  state = {
    open: false,
    investmentAmount: '',
  }

  handleClose = (e: any) => {
    let clickBloc = e.target;

    if(clickBloc.classList.contains('wrap')) {
      this.setState({
        open: false
      })
    }
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  replacer = (e: any) => {
    let formatedText = e.target.value;
    formatedText = formatedText.replace(/([^0-9]+)/g, '')
    formatedText = formatedText.replace(/\./g, '')
    formatedText = formatedText.replace(/\B(?=(?:\d{3})+(?!\d))/g, '.')

    this.setState({
      investmentAmount: formatedText ? `$ ${formatedText}` : ''
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>

        <div className={classes.pageHeading}>
          <div className={classes.pageHeadingFilter} />
          <div className={classes.container} style={{display: 'flex', alignItems: 'flex-end'}}>
            <h1 className={classes.title} style={{marginBottom: '40px', color: '#fff', zIndex: 10}}>Pitch for Investors</h1>
          </div>
        </div>

        <div className={classes.container} style={{marginTop: '30px'}}>
          <ul className={classes.pageList}>

            <li className={classes.pageItem}>
              <h2 className={classes.title}>Keys</h2>
              <div className={classes.content}>
                The most important:
                <ol className={classes.numberList}>
                  <li>Today's ICO-market is worth 18 billion</li>
                  <li>We are going to monopolize this marketplace</li>
                  <li>We have a development team and a minimum viable product</li>
                </ol>
              </div>
            </li>

            <li className={classes.pageItem}>
              <h2 className={classes.title}>Problem</h2>
              <div className={classes.content}>
              Today's ICO marketplace has the following problems:
                <ol className={classes.numberList}>
                  <li>Many scam projects</li>
                  <li>No profitable asset management</li>
                  <li>Total distrust between market stakeholders</li>
                </ol>
              </div>
            </li>

            <li className={classes.pageItem}>
              <h2 className={classes.title}>Solution</h2>
              <div className={classes.content}>
                We are developing a social network for crypto investors, asset managers, and ICO projects. Our main idea
                is to collect all ICO-market participants in one space and obtain a scale effect. Based on this effect,
                we are going to create services that allow users to trust each other and to provide protection from scam projects.
                <br style={{fontSize: '24px'}}/>
                We are creating a platform that unites many cryptocurrency investors. As a result, there will be a large
                turnover of investment funds appearing on our platform. Collecting small commission payments from this
                turnover will allow us to fully maintain the infrastructure that filters out ICO scams.
                <br style={{fontSize: '24px'}}/>
                We are also creating additional escrow services and an asset management infrastructure.
              </div>
            </li>

            <li className={classes.pageItem}>
              <h2 className={classes.title}>Business model</h2>
              <div className={classes.content}>
                We have a classic investment banking business model. We provide investors with project scoring and valuation
                services and receive a commission from investments for our work.
              </div>
            </li>

            <li className={classes.pageItem}>
              <h2 className={classes.title}>Stage</h2>
              <div className={classes.content}>
                We have a fifteen-member team. We are developing the platform now and have a working MVP. We presented a
                preliminary announcement of our project to collect feedback. You can see the results here.
              </div>
            </li>

            <li className={classes.pageItem}>
              <h2 className={classes.title}>WRLD-token</h2>
              <div className={classes.content}>
                We issue 100.000.000 WRLD-tokens. Each tokenholder gets the right to receive profit proportionally to its share.
                Each tokenholder gets the right to manage the company proportionally to its share. Each tokenholder gets the right
                to convert tokens into ordinary shares proportionally to its share.
              </div>
            </li>

            <li className={classes.pageItem}>
              <h2 className={classes.title}>Private Sale</h2>
              <div className={classes.content}>
                In Private Sale, we sell 10.000.000 WRLD-tokens worth a total amount of $500.000. We will use the raised money for:
                <ol className={classes.numberList} style={{marginBottom: '7px'}}>
                  <li>Completion of the social part of MVP to the final version</li>
                  <li>Recruitment of the first users</li>
                  <li>Optimization of marketing expenses</li>
                </ol>
                The minimum amount of investments in the private sale stage is $30.000. The soft-cap in the private sale stage is $300.000. If we don’t reach the amount, we will refund the money to the investors. We guarantee this agreement by smart-contract. We will raise investments in Ethereum.
              </div>
            </li>

            <li className={classes.pageItem}>
              <h2 className={classes.title}>Estimate profit</h2>
              <div className={classes.content}>
                For investments, investors will receive a 10% share of the project.
                <br style={{fontSize: '24px'}}/>
                After the Initial Coin Offering, the estimated enterprise value of the project will be $18 million.
                The estimated enterprise value of the share of investors will be $1.8 million. We are going to start
                the ICO in six months after the Private Sale.
                <br style={{fontSize: '24px'}}/>
                In the case of long-term project success, its enterprise value will exceed $540 million. The share
                of investors will exceed $54 million. At the same time, our global goal is to create a unicorn
                company (a company whose value over $1 billion).
              </div>
            </li>
            
            <li className={classes.pageItem}>
              <h2 className={classes.title}>White List</h2>
              <div className={classes.content}>
                If you want to invest in our project in the Private Sale stage, please fill in our <span onClick={this.handleOpen} className={classes.link}>White List</span>.
              </div>
            </li>

          </ul>

          <div className={classes.info}>
            <h3 className={classes.subtitle}>More information:</h3>
            <ul className={classes.infoList}>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>White Paper (download)</a></li>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>Financial model (download)</a></li>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>How are we going to protect from scam?</a></li>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>Why is the social network?</a></li>
            </ul>
          </div>
        </div>
        
        <footer className={classes.footer} style={{borderTop: '1px solid #f1f1f1',  marginTop: '75px'}}>
          <div className={classes.footerContainer}>
            <div style={{width: '240px', marginRight: '55px'}}>
              <a href='/landing' style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
                <img style={{width: '30px', marginRight: '10px'}} src="./icons/logo.svg" alt="logo"/>
                <h2 style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
              </a>
              <span className={classes.footerDescription}>A social network for cryptoinvestors, asset managers and ICO-projects</span>
            </div>
            <div className={classes.footerRight} style={{flex: 1}}>
              <ul className={classes.footerSections}>
                <li className={classes.footerSectionsItem}>
                  <span className={classes.footerSectionsTitle}>Product</span>

                  <a className={classes.footerSectionsLink} href="#">White Paper</a>
                  <a className={classes.footerSectionsLink} href="#">Pitch for Investors</a>
                  <a className={classes.footerSectionsLink} href="#">MVP</a>
                </li>

                <li className={classes.footerSectionsItem}>
                  <span className={classes.footerSectionsTitle}>Social</span>

                  <a className={classes.footerSectionsLink} href="#">Bitcointalk</a>
                  <a className={classes.footerSectionsLink} href="#">GitHub</a>
                  <a className={classes.footerSectionsLink} href="#">Telegram</a>
                </li>

                <li className={classes.footerSectionsItem}>
                  <span className={classes.footerSectionsTitle}>Legal</span>

                  <a className={classes.footerSectionsLink} href="#">Token Sale Agreement</a>
                  <a className={classes.footerSectionsLink} href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        {this.state.open === true ?
          <div className={`${classes.popupWrap} wrap`} onClick={this.handleClose}>
            <div className={classes.popup}>
              <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', textDecoration: 'none', color: 'inherit'}}>
                <img style={{width: '50px', marginBottom: '10px'}} src="./icons/logo.svg" alt="logo"/>
                <h2 style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
              </div>
              <div className={classes.formContainer}>
                <h3 style={{fontWeight: 400, fontSize: '16px'}}>White List:</h3>
                <form action="" style={{display: 'flex', flexDirection: 'column'}}>
                  <input type="text" name="name" id="name" placeholder="Name*" className={`input border-input ${classes.input}`} style={{marginBottom: '10px'}} />
                  <input type="text" name="email" id="email" placeholder="Email*" className={`input border-input ${classes.input}`} style={{marginBottom: '10px'}} />
                  <input type="text" name="telegram" id="telegram" placeholder="Telegram" className={`input border-input ${classes.input}`} style={{marginBottom: '10px'}} />
                  <input type="text" name="investmentAmount" id="investmentAmount"
                    placeholder="Amount of investment (USD)*" className={`input border-input ${classes.input}`}
                    value={this.state.investmentAmount} onChange={this.replacer}
                  />
                  <button className={classes.button} type="submit" onClick={(e) => {e.preventDefault()}}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        : null}
      </div>
    )
  }
}

export default withStyles(styles)(PitchForInvestorsPage)
