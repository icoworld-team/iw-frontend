import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import Scrollbar from "react-custom-scrollbars";
import Checkbox from '@material-ui/core/Checkbox';
// import './css.css'

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
    color: '#fff',
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
    color: '#fff',
  },
  footerSectionsLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    lineHeight: '20px',
    cursor: 'pointer',
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  popup: {
    width: '380px',
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '15px',
  },
  input: {
    height: '25px',
  },
  button: {
    fontWeight: 400,
    backgroundColor: '#303546',
    height: '35px',
    border: 'none',
    outline: 'none',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    marginTop: '10px',
    cursor: 'pointer',
  },
});

class PitchForInvestorsPage extends React.Component<any> {
  state = {
    open: false,
    privacyModal: false,
    investmentAmount: '',
    checkedB: false,
  }

  handlePrivacyClose = (e: any) => {
    let clickBloc = e.target;

    if(clickBloc.classList.contains('wrap')) {
      document.body.style.overflow = 'auto';
      this.setState({
        privacyModal: false
      })
    }
  }

  handlePrivacyOpen = () => {
    document.body.style.overflow = 'hidden';
    this.setState({
      privacyModal: true
    })
  }

  handleClose = (e: any) => {
    let clickBloc = e.target;

    if(clickBloc.classList.contains('wrap')) {
      document.body.style.overflow = 'auto';
      this.setState({
        open: false
      })
    }
  }

  handleOpen = () => {
    document.body.style.overflow = 'hidden';
    this.setState({
      open: true
    })
  }

  handleChange = (name: any) => (e: any) => {
      let elem = e.target
      console.log(elem.getAttribute('id'))
      this.setState({ [name]: e.target.checked });
  };

  replacer = (e: any) => {
    let formatedText = e.target.value;
    formatedText = formatedText.replace(/([^0-9]+)/g, '')
    formatedText = formatedText.replace(/\./g, '')
    formatedText = formatedText.replace(/\B(?=(?:\d{3})+(?!\d))/g, '.')

    this.setState({
      investmentAmount: formatedText ? `$ ${formatedText}` : ''
    })
  }

  renderThumbVertical({ style, ...props }: any) {
    const customStyle = {
      backgroundColor: `rgb(45, 53, 70)`,
      borderRadius: "5px",
      zIndex: 100
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  }

  render() {
    const { classes } = this.props;

    return (
      <Scrollbar autoHeight={true} autoHeightMax={'100vh'} renderThumbVertical={this.renderThumbVertical}>
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
                  preliminary announcement of our project to collect feedback. The result is positive.
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
                  If you want to invest in our project in the Private Sale stage, please fill in our <span id="privacy" onClick={this.handleOpen} className={classes.link}>White List</span>.
                </div>
              </li>

            </ul>

            <div className={classes.info}>
              <h3 className={classes.subtitle}>More information:</h3>
              <ul className={classes.infoList}>
                <li className={classes.infoItem}><a href="./White Paper (english).pdf" download className={classes.infoLink}>White Paper (download)</a></li>
                <li className={classes.infoItem}><a href="./Financial Model.xlsx" download className={classes.infoLink}>Financial Model (download)</a></li>
                <li className={classes.infoItem}><a href="/offer-protection" className={classes.infoLink}>How are we going to offer protection from scams?</a></li>
                <li className={classes.infoItem}><a href="/market-monopoly" className={classes.infoLink}>Market monopoly, or why are we developing a social network?</a></li>
              </ul>
            </div>
          </div>
          
          <footer className={classes.footer} style={{borderTop: '1px solid #f1f1f1',  marginTop: '75px', backgroundColor: '#2d3546', color: '#fff'}}>
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

                    <a className={classes.footerSectionsLink} href="./White Paper (english).pdf" download>White Paper</a>
                    <a className={classes.footerSectionsLink} href="/pitch">Pitch for Investors</a>
                    <a className={classes.footerSectionsLink} href="http://www.icoworld.network">MVP</a>
                  </li>

                  <li className={classes.footerSectionsItem}>
                    <span className={classes.footerSectionsTitle}>Social</span>

                    <a className={classes.footerSectionsLink} href="https://bitcointalk.org/index.php?topic=4954870.msg44647378#msg44647378">Bitcointalk</a>
                    <a className={classes.footerSectionsLink} href="https://github.com/pyshopml2">GitHub</a>
                    <a className={classes.footerSectionsLink} href="https://t.me/icoWorld_EN">Telegram</a>
                  </li>

                  <li className={classes.footerSectionsItem}>
                    <span className={classes.footerSectionsTitle}>Legal</span>

                    <a className={classes.footerSectionsLink} onClick={this.handlePrivacyOpen}>Privacy Policy</a>
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
                    <input type="text" name="country" id="country" placeholder="Country*" className={`input border-input ${classes.input}`} style={{marginBottom: '10px'}} />
                    <input type="text" name="email" id="email" placeholder="Email*" className={`input border-input ${classes.input}`} style={{marginBottom: '10px'}} />
                    <input type="text" name="telegram" id="telegram" placeholder="Telegram" className={`input border-input ${classes.input}`} style={{marginBottom: '10px'}} />
                    <input type="text" name="investmentAmount" id="investmentAmount"
                      placeholder="Amount of investment (USD)*" className={`input border-input ${classes.input}`}
                      value={this.state.investmentAmount} onChange={this.replacer}
                    />
                    <div className={classes.checkboxContainer} style={{display: 'flex', marginTop: '10px', cursor: 'pointer'}}>
                      <Checkbox
                        id="checkbox"
                        style={{width: '22px', height: '22px', marginRight: '10px'}}
                        // checked={this.state.checkedB}
                        // value="checkedB"
                        color="primary"
                      />
                      
                      <p style={{fontSize: '14px'}}><label htmlFor="checkbox" style={{cursor: 'pointer'}}>I have read understand and agree to the</label> <label htmlFor="checkbox1"><span className={classes.link} onClick={this.handlePrivacyOpen}>Privacy Policy</span></label></p>
                    </div>

                    {/* <div className="coloured" style={{marginTop: '10px'}}>
                      <div className="checkbox">
                        <label style={{cursor: 'pointer', display: 'flex'}}>
                          <input type="checkbox" /><span className="checkbox-material"><span className="check"></span></span> <p style={{fontSize: '14px'}}>I have read understand and agree to the <span className={classes.link} onClick={this.handlePrivacyOpen}>Privacy Policy</span></p>
                        </label>
                      </div>
                    </div> */}

                    <button className={classes.button} type="submit" onClick={(e) => {e.preventDefault()}}>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          : null}

          {this.state.privacyModal === true ?
            <div className={`${classes.popupWrap} wrap`} onClick={this.handlePrivacyClose}>
              <div className={classes.popup} style={{padding: 0, width: '850px'}}>
                <Scrollbar autoHeight={true} autoHeightMax={590} width={600} renderThumbVertical={this.renderThumbVertical}>
                  <p style={{padding: '15px'}}>
                    1. PRIVACY POLICY
                    <br />
                    icoWorld operates the <a href='http://www.icoworld.network' target='_blank'>http://www.icoworld.network</a> website (hereinafter referred to as the "Service").
                    <br />
                    This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. 
                    <br />
                    We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from <a href='http://www.icoworld.network'>http://www.icoworld.network</a>
                    <br />
                    <br />
                    2. INFORMATION COLLECTION AND USE
                    <br />
                    We collect several different types of information for various purposes to provide and improve our Service to you.
                    <br />
                    <br />
                    Types of Data Collected
                    <br />
                    <br />
                    Personal Data
                    <br />
                    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                    <br />
                    <ul style={{listStyle: 'inherit', listStylePosition: 'inside'}}>
                      <li>Email address</li>
                      <li>First name and last name</li>
                      <li>Phone number</li>
                      <li>Address, State, Province, ZIP/Postal code, City</li>
                      <li>Cookies and Usage Data</li>
                    </ul>
                    <br />
                    Usage Data
                    <br />
                    We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    <br />
                    <br />
                    Tracking & Cookies Data
                    <br />
                    We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
                    <br />
                    Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
                    <br />
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                    <br />
                    Examples of Cookies we use:
                    <br />
                    <ul style={{listStyle: 'inherit', listStylePosition: 'inside'}}>
                      <li>Session Cookies. We use Session Cookies to operate our Service.</li>
                      <li>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</li>
                      <li>Security Cookies. We use Security Cookies for security purposes.</li>
                    </ul>
                    <br />
                    3. USE OF DATA
                    <br />
                    icoWorld uses the collected data for various purposes:
                    <br />
                    <ul style={{listStyle: 'inherit', listStylePosition: 'inside'}}>
                      <li>To provide and maintain the Service</li>
                      <li>To notify you about changes to our Service</li>
                      <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                      <li>To provide customer care and support</li>
                      <li>To provide analysis or valuable information so that we can improve the Service</li>
                      <li>To monitor the usage of the Service</li>
                      <li>To detect, prevent and address technical issues</li>
                    </ul>
                    <br />
                    4. TRANSFER OF DATA
                    <br />
                    Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                    <br />
                    If you are located outside Malta and choose to provide information to us, please note that we transfer the data, including Personal Data, to Malta and process it there.
                    <br />
                    Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
                    <br />
                    icoWorld will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
                    <br />
                    <br />
                    5. DISCLOSURE OF DATA
                    <br />
                    Legal Requirements
                    <br />
                    icoWorld may disclose your Personal Data in the good faith belief that such action is necessary to:
                    <br />
                    <ul style={{listStyle: 'inherit', listStylePosition: 'inside'}}>
                      <li>To comply with a legal obligation</li>
                      <li>To protect and defend the rights or property of icoWorld</li>
                      <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                      <li>To protect the personal safety of users of the Service or the public</li>
                      <li>To protect against legal liability</li>
                    </ul>
                    <br />
                    6. SECURITY OF DATA
                    <br />
                    The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    <br />
                    <br />
                    7. SERVICE PROVIDERS
                    <br />
                    We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                    <br />
                    These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    <br />
                    <br />
                    8. LINKS TO OTHER SITES
                    <br />
                    Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                    <br />
                    We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                    <br />
                    <br />
                    9. CHILDREN'S PRIVACY
                    <br />
                    Our Service does not address anyone under the age of 18 ("Children").
                    <br />
                    We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                    <br />
                    <br />
                    10. CHANGES TO THIS PRIVACY POLICY
                    <br />
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    <br />
                    We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
                    <br />
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    <br />
                    <br />
                    11. CONTACT US
                    <br />
                    If you have any questions about this Privacy Policy, please contact us by visiting this page on our website: <a href='http://www.icoworld.network' target='_blank'>http://www.icoworld.network</a>
                  </p>
                </Scrollbar>
              </div>
            </div>
          : null}
        </div>
      </Scrollbar>
    )
  }
}

export default withStyles(styles)(PitchForInvestorsPage)
