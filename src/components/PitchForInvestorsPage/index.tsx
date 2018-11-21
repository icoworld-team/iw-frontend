import React from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Scrollbar from "react-custom-scrollbars";
import Checkbox from '@material-ui/core/Checkbox';
import { withApollo } from 'react-apollo';
import { sendEmail } from '../../api'
import { FormattedMessage } from 'react-intl';
import { IntlProvider } from 'react-intl';
import en from '../../i18n/en';
import ru from '../../i18n/ru';

const styles = (theme: Theme) => createStyles({
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
  },
  section: {
    width: '100%',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    color: '#171717',
    width: '95%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 800,
    lineHeight: '30px',
    margin: 0,

    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
      lineHeight: '24px',
    },
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '22px',
    margin: 0,
    marginBottom: '10px',

    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
  pageHeading: {
    height: '560px',
    background: 'url("./for_pitch.jpg") center',
    backgroundSize: 'cover',
    display: 'flex',
    position: 'relative',

    [theme.breakpoints.down('xs')]: {
      height: '280px',
    },
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
  headingText: {
    marginBottom: '40px',
    color: '#fff',
    zIndex: 10,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    [theme.breakpoints.down('xs')]: {
      marginBottom: '25px',
    },
  },
  lang: {
    cursor: 'pointer',
  },
  pageItem: {
    marginBottom: '50px',
    '&:last-child': {
      marginBottom: 0,
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: '30px',
    },
  },
  content: {
    fontSize: '16px',
    marginTop: '10px',

    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      lineHeight: '18px',
    },
  },
  numberList: {
    marginTop: '10px',
  },

  info: {
    fontSize: '16px',
    marginTop: '50px',

    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      lineHeight: '18px',
      marginTop: '30px',
    },
  },
  infoLink: {
    color: '#171717',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  footer: {
    borderTop: '1px solid #f1f1f1',
    marginTop: '75px',
    backgroundColor: '#2d3546',
    color: '#fff',
    width: '100%',
  },
  footerContainer: {
    maxWidth: '800px',
    width: '95%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px 0',

    [theme.breakpoints.down(630)]: {
      flexDirection: 'column',
    },
  },
  footerLeft: {
    width: '320px',
    marginRight: '60px',

    [theme.breakpoints.down(730)]: {
      width: '280px',
      marginRight: '40px',
    },
    [theme.breakpoints.down(630)]: {
      width: '100%',
      marginRight: 0,
    },
  },
  footerRight: {
    flex: 1,

    [theme.breakpoints.down(630)]: {
      marginTop: '30px',
      width: '100%',
    },
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
    zIndex: 105,
  },
  popup: {
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxSizing: 'border-box',
  },
  whiteListPopup: {
    padding: '15px',
    width: '380px',

    [theme.breakpoints.down(390)]: {
      width: '100%',
    },
  },
  privacyPopup: {
    width: '850px',
    paddingTop: '30px',

    [theme.breakpoints.down(850)]: {
      width: '100%',
    },
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
    marginTop: '15px',
    marginBottom: '5px',
    cursor: 'pointer',
  },
  modalClose: {
    color: '#8b8b8b',
    fontSize: '26px',
    lineHeight: '18px',
    cursor: 'pointer',
    position: 'absolute',
    top: '4px',
    right: '7px',
  },
});

class PitchForInvestorsPage extends React.Component<any> {
  state = {
    open: false,
    privacyModal: false,
    investmentAmount: '',
    checkedB: false,
    name: '',
    country: '',
    email: '',
    telegram: '',
    formError: false,
    fetchError: false,
    lang: localStorage.getItem('lang'),
  };

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

  handleChange = (e: any) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  };

  handleCheckbox = () => {
    this.setState((state:any) => ({checkedB: !state.checkedB}));
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

  handleSubmit = (e:any) => {
    e.preventDefault();
    if (this.state.checkedB && this.state.name && this.state.country && this.state.email && this.state.investmentAmount) this.sendEmail();
    else this.setState({formError: true});
  };

  sendEmail = async () => {
    const { name, country, email, telegram, investmentAmount} = this.state;
    const initState = {
      open: false,
      investmentAmount: '',
      checkedB: false,
      name: '',
      country: '',
      email: '',
      telegram: '',
      formError: false,
      fetchError: false,
    };
    const content = `${name} ${country} ${email} ${telegram ? telegram : 'NONE'} ${investmentAmount}`;
    sendEmail('icoworldwl@gmail.com', `White List`, content)
        .then(() => this.setState(initState))
        .catch(error => {
            console.log(error);
            this.setState({fetchError: true});
        })
  };

  updateData = (value: any) => {
    this.setState({ lang: value })
  }

  render() {
    const { classes } = this.props;

    return (
      <IntlProvider locale="en" messages={this.state.lang === 'ru' ? ru : en}>
      <Scrollbar autoHeight={true} autoHeightMax={'100vh'} renderThumbVertical={this.renderThumbVertical}>
        <div className={classes.wrapper}>

          <div className={classes.pageHeading}>
            <div className={classes.pageHeadingFilter} />
            <div className={classes.container} style={{display: 'flex', alignItems: 'flex-end'}}>
              <div className={classes.headingText}>
                <h1 className={classes.title} style={{marginRight: '20px'}}><FormattedMessage id='pitch' defaultMessage="" /></h1>

                {this.state.lang === 'en' ? 
                  <span className={`${classes.lang} ${classes.title}`} onClick={() => {localStorage.setItem('lang', 'ru'), this.setState({lang: 'ru'})}}>EN</span> :
                  <span className={`${classes.lang} ${classes.title}`} onClick={() => {localStorage.setItem('lang', 'en'), this.setState({lang: 'en'})}}>RU</span>
                }
              </div>
            </div>
          </div>

          <div className={classes.container} style={{marginTop: '30px'}}>
            <ul className={classes.pageList}>

              <li className={classes.pageItem}>
                <h2 className={classes.title}><FormattedMessage id='keys' defaultMessage="" /></h2>
                <div className={classes.content}>
                  {this.state.lang === 'en' ?
                    <FormattedMessage id='keys.text' defaultMessage="" />
                  : null}
                  <ol className={classes.numberList}>
                    <li><FormattedMessage id='keys.item.first' defaultMessage="" /></li>
                    <li><FormattedMessage id='keys.item.second' defaultMessage="" /></li>
                    <li><FormattedMessage id='keys.item.third' defaultMessage="" /></li>
                  </ol>
                </div>
              </li>

              <li className={classes.pageItem}>
                <h2 className={classes.title}><FormattedMessage id='problem' defaultMessage="" /></h2>
                <div className={classes.content}>
                  <FormattedMessage id='problem.text' defaultMessage="" />
                  <ol className={classes.numberList}>
                    <li><FormattedMessage id='problem.item.first' defaultMessage="" /></li>
                    <li><FormattedMessage id='problem.item.second' defaultMessage="" /></li>
                    <li><FormattedMessage id='problem.item.third' defaultMessage="" /></li>
                  </ol>
                </div>
              </li>

              <li className={classes.pageItem}>
                <h2 className={classes.title}><FormattedMessage id='solution' defaultMessage="" /></h2>
                <div className={classes.content}>
                  <FormattedMessage id='solution.paragraph.first' defaultMessage="" />
                  <br style={{fontSize: '24px'}}/>
                  <FormattedMessage id='solution.paragraph.second' defaultMessage="" />
                  <br style={{fontSize: '24px'}}/>
                  <FormattedMessage id='solution.paragraph.third' defaultMessage="" />
                </div>
              </li>

              <li className={classes.pageItem}>
                <h2 className={classes.title}><FormattedMessage id='business.model' defaultMessage="" /></h2>
                <div className={classes.content}>
                  <FormattedMessage id='business.model.text' defaultMessage="" />
                </div>
              </li>

              <li className={classes.pageItem}>
                <h2 className={classes.title}><FormattedMessage id='stage' defaultMessage="" /></h2>
                <div className={classes.content}>
                  <FormattedMessage id='stage.text' defaultMessage="" />
                </div>
              </li>

              <li className={classes.pageItem}>
                <h2 className={classes.title}><FormattedMessage id='investment.required' defaultMessage="" /></h2>
                <div className={classes.content}>
                  <FormattedMessage id='investment.required.text' defaultMessage="" />
                  <ol className={classes.numberList} style={{marginBottom: '7px'}}>
                    <li><FormattedMessage id='investment.required.item.first' defaultMessage="" /></li>
                    <li><FormattedMessage id='investment.required.item.second' defaultMessage="" /></li>
                    <li><FormattedMessage id='investment.required.item.third' defaultMessage="" /></li>
                  </ol>
                  <FormattedMessage id='investment.required.bottom.text' defaultMessage="" />
                </div>
              </li>

              <li className={classes.pageItem}>
                <h2 className={classes.title}><FormattedMessage id='estimate.profit' defaultMessage="" /></h2>
                <div className={classes.content}>
                  <FormattedMessage id='estimate.profit.paragraph.first' defaultMessage="" />
                  <br style={{fontSize: '24px'}}/>
                  <FormattedMessage id='estimate.profit.paragraph.second' defaultMessage="" />
                  <br style={{fontSize: '24px'}}/>
                  <FormattedMessage id='estimate.profit.paragraph.third' defaultMessage="" />
                </div>
              </li>
              
              <li className={classes.pageItem}>
                <h2 className={classes.title}><FormattedMessage id='white.list' defaultMessage="" /></h2>
                <div className={classes.content}>
                  <FormattedMessage id='white.list.text' defaultMessage="" /> <span id="privacy" onClick={this.handleOpen} className={classes.link}><FormattedMessage id='white.list' defaultMessage="" /></span>.
                </div>
              </li>

            </ul>

            <div className={classes.info}>
              <h3 className={classes.subtitle}><FormattedMessage id='more.information' defaultMessage="" /></h3>
              <ul className={classes.infoList}>
                <li className={classes.infoItem}><a href={this.state.lang === 'en' ? "./White Paper (english).pdf" : "./White Paper (rus).pdf"} download className={classes.infoLink}><FormattedMessage id='white.paper.download' defaultMessage="" /></a></li>
                <li className={classes.infoItem}><a href="./Financial Model.xlsx" download className={classes.infoLink}><FormattedMessage id='financial.model.download' defaultMessage="" /></a></li>
                <li className={classes.infoItem}><a href="/offer-protection" className={classes.infoLink}><FormattedMessage id='scams.protect' defaultMessage="" /></a></li>
                <li className={classes.infoItem}><a href="/market-monopoly" className={classes.infoLink}><FormattedMessage id='market.monopoly' defaultMessage="" /></a></li>
              </ul>
            </div>
          </div>
          
          <footer className={classes.footer}>
            <div className={classes.footerContainer}>
              <div className={classes.footerLeft}>
                <a href='/landing' style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
                  <img style={{width: '30px', marginRight: '10px'}} src="./icons/logo.svg" alt="logo"/>
                  <h2 style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
                </a>
                <span className={classes.footerDescription}><FormattedMessage id='icoworld.desc' defaultMessage="" /></span>
              </div>
              <div className={classes.footerRight}>
                <ul className={classes.footerSections}>
                  <li className={classes.footerSectionsItem}>
                    <span className={classes.footerSectionsTitle}>Product</span>

                    <a className={classes.footerSectionsLink} href={this.state.lang === 'en' ? "./White Paper (english).pdf" : "./White Paper (rus).pdf"} download>White Paper</a>
                    <a className={classes.footerSectionsLink} href="/pitch">Pitch for Investors</a>
                    <a className={classes.footerSectionsLink} href="http://www.icoworld.network">MVP</a>
                  </li>

                  <li className={classes.footerSectionsItem}>
                    <span className={classes.footerSectionsTitle}>Social</span>

                    <a className={classes.footerSectionsLink} href={this.state.lang === 'en' ? "https://bitcointalk.org/index.php?topic=4954870.msg44647378#msg44647378" : "https://bitcointalk.org/index.php?topic=4951081.msg44619247#msg44619247"}>Bitcointalk</a>
                    <a className={classes.footerSectionsLink} href="https://github.com/pyshopml2">GitHub</a>
                    <a className={classes.footerSectionsLink} href={this.state.lang === 'en' ? "https://t.me/icoWorld_EN" : "https://t.me/icoWorld_RU"}>Telegram</a>
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
              <div className={`${classes.popup} ${classes.whiteListPopup}`}>
                <span className={classes.modalClose} onClick={() => this.setState({open: false})}>x</span>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', textDecoration: 'none', color: 'inherit'}}>
                  <img style={{width: '50px', marginBottom: '10px'}} src="./icons/logo.svg" alt="logo"/>
                  <h2 style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
                </div>
                <div className={classes.formContainer}>
                  <h3 style={{fontWeight: 400, fontSize: '16px'}}>White List:</h3>
                  {this.state.formError && <h3 style={{fontWeight: 400, fontSize: '12px', color: 'red'}}>Required fields cannot be empty</h3>}
                  {this.state.fetchError && <h3 style={{fontWeight: 400, fontSize: '12px', color: 'red'}}>Something went wrong. Please try again</h3>}
                  <form action="" style={{display: 'flex', flexDirection: 'column'}}>
                    <input type="text" name="name" id="name" placeholder="Name*" className={`input border-input ${classes.input}`} style={{marginBottom: '10px'}} onChange={this.handleChange} />
                    <input type="text" name="country" id="country" placeholder="Country*" className={`input border-input ${classes.input}`} style={{marginBottom: '10px'}} onChange={this.handleChange} />
                    <input type="text" name="email" id="email" placeholder="Email*" className={`input border-input ${classes.input}`} style={{marginBottom: '10px'}} onChange={this.handleChange} />
                    <input type="text" name="telegram" id="telegram" placeholder="Telegram" className={`input border-input ${classes.input}`} style={{marginBottom: '10px'}} onChange={this.handleChange} />
                    <input type="text" name="investmentAmount" id="investmentAmount"
                      placeholder="Amount of investment (USD)*" className={`input border-input ${classes.input}`}
                      value={this.state.investmentAmount} onChange={this.replacer}
                    />
                    <button className={classes.button} onClick={this.handleSubmit}>
                      Submit
                    </button>
                    <div className={classes.checkboxContainer} style={{display: 'flex', marginTop: '10px', cursor: 'pointer'}}>
                      <Checkbox
                        disableRipple={true}
                        id="checkbox"
                        style={{width: '22px', height: '22px', marginRight: '10px', color: '#303546'}}
                        onChange={this.handleCheckbox}
                      />
                        <p style={{fontSize: '14px'}}><label htmlFor="checkbox" style={{cursor: 'pointer'}}>I have read understand and agree to the</label> <label htmlFor="checkbox1"><span className={classes.link} onClick={this.handlePrivacyOpen}>Privacy Policy</span></label></p>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          : null}

          {this.state.privacyModal === true ?
            <div className={`${classes.popupWrap} wrap`} onClick={this.handlePrivacyClose}>
              <div className={`${classes.popup} ${classes.privacyPopup}`}>
                <span className={classes.modalClose} onClick={() => this.setState({privacyModal: false})}>x</span>
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
      </IntlProvider>
    )
  }
}

export default withStyles(styles)(withApollo(PitchForInvestorsPage))
