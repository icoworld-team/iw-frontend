import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import Scrollbar from "react-custom-scrollbars";

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
    background: 'url("./protect.jpg") 50% 0%',
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
    marginBottom: '10px'
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

  popupWrap: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  popup: {
    width: '850px',
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

class OfferProtectionPage extends React.Component<any> {
  state = {
    open: false,
  };

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

  renderThumbVertical({ style, ...props }: any) {
    const customStyle = {
      backgroundColor: `rgb(45, 53, 70)`,
      borderRadius: "5px"
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>

        <div className={classes.pageHeading}>
          <div className={classes.pageHeadingFilter} />
          <div className={classes.container} style={{display: 'flex', alignItems: 'flex-end'}}>
            <h1 className={classes.title} style={{marginBottom: '40px', color: '#fff', zIndex: 10}}>How we are going to offer protection from scams</h1>
          </div>
        </div>

        <div className={classes.container} style={{marginTop: '30px'}}>
          <ul className={classes.pageList}>

            <li className={classes.pageItem}>
              <div className={classes.content}>
                The most frequent question is how we are going to offer protection from scams.
                <br style={{fontSize: '24px'}}/>
                The answer is below.
                <br style={{fontSize: '24px'}}/>
                <br style={{fontSize: '24px'}}/>

                Firstly, our goal is not to rectify the negative effects of the scam, but rather to prevent it by making it unprofitable. Our plan for doing this is as follows:
                <ol className={classes.numberList}>
                  <li>Every project passes mandatory due diligence when it is being registered on our platform.</li>
                  <li>We do KYC on the project founders, checking the reliability of their biographies, analyzing
                    the project in detail, writing an audit report, and attaching it to the project profile.</li>
                  <li>We communicate with every project not only online but also offline.</li>
                  <li>When regulation appears, we add legal support for investments.</li>
                </ol>

                <p>This is the first level of our defense. The number of scammers will decrease by 90% because it will be
                  impossible for them to remain anonymous. Every crypto-investor will know who took their money, and where that person is.
                <br style={{fontSize: '24px'}}/>
                <br style={{fontSize: '24px'}}/>

                The second level of scam protection is escrow service. We create a smart contract that sends money in tranches.
                For example, a project will state: "I need $10 million of investment. $1 million for the first stage, $2 million
                for the second, $3 million for the third, etc."
                <br style={{fontSize: '24px'}}/>

                After that:</p>
                <ol className={classes.numberList}>
                  <li>Investors' money comes into a smart contract that we administer. Under the terms of the smart contract,
                    we can’t take the money. We can only send it to the project or return it to the investors.</li>
                  <li>We send the first tranche of investments into the project for passing the first stage.</li>
                  <li>If the project fulfills its obligations at successive stages, we send the second tranche, then the third, etc.</li>
                  <li>If the project doesn’t fulfill these obligations, we return the money to the investors.</li>
                </ol>
              </div>
            </li>

            <li className={classes.pageItem}>
              <h2 className={classes.title}>There is also the question of why investors will trust our platform</h2>
              <div className={classes.content}>
              <p>The reason is the same: it is profitable for us to be honest. Our business is a reputable one. And
                only if we do our job well, can we earn the trust of investors. Thereby, we will be able to attract
                hundreds of projects per year. We will earn big money on commissions. Very big money. However, a
                few simple mistakes can destroy our reputation and instantly drive away clients. We do not want to
                lose hundreds of good projects over a few scams. Therefore, in our case honesty is not just a
                question of morality, but a matter of common sense.</p>
              </div>
            </li>

          </ul>

          <div className={classes.info}>
            <h3 className={classes.subtitle}>More information:</h3>
            <ul className={classes.infoList}>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>Pitch for Investors</a></li>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>White Paper (download)</a></li>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>Financial Model (download)</a></li>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>Market monopoly, or why we are developing the social network</a></li>
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

                  <a className={classes.footerSectionsLink} onClick={this.handleOpen}>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        {this.state.open === true ?
          <div className={`${classes.popupWrap} wrap`} onClick={this.handleClose}>
            <div className={classes.popup}>
              <Scrollbar autoHeight={true} autoHeightMax={590} width={600} renderThumbVertical={this.renderThumbVertical}>
                <p style={{padding: '15px'}}>
                  1. PRIVACY POLICY
                  <br />
                  icoWorld operates the <a href='http://www.icoworld.network'>http://www.icoworld.network</a> website (hereinafter referred to as the "Service").
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
                  If you have any questions about this Privacy Policy, please contact us by visiting this page on our website: <a href='http://www.icoworld.network'>http://www.icoworld.network</a>
                </p>
              </Scrollbar>
            </div>
          </div>
        : null}
      </div>
    )
  }
}

export default withStyles(styles)(OfferProtectionPage)
