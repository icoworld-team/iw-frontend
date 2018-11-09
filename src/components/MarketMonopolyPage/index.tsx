import React from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Scrollbar from "react-custom-scrollbars";

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
    background: 'url("./page.png") 50% 70%',
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
  headingTitle: {
    marginBottom: '40px',
    color: '#fff',
    zIndex: 10,

    [theme.breakpoints.down('xs')]: {
      marginBottom: '25px',
    },
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
    maxWidth: '1100px',
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
    width: '240px',
    marginRight: '80px',

    [theme.breakpoints.down(730)]: {
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

class MarketMonopolyPage extends React.Component<any> {
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
      <Scrollbar autoHeight={true} autoHeightMax={'100vh'} renderThumbVertical={this.renderThumbVertical}>
        <div className={classes.wrapper}>

          <div className={classes.pageHeading}>
            <div className={classes.pageHeadingFilter} />
            <div className={classes.container} style={{display: 'flex', alignItems: 'flex-end'}}>
              <h1 className={`${classes.title} ${classes.headingTitle}`}>Market monopoly, or why are we developing a social network?</h1>
            </div>
          </div>

          <div className={classes.container} style={{marginTop: '30px'}}>
            <ul className={classes.pageList}>

              <li className={classes.pageItem}>
                <div className={classes.content}>
                Our project has two parts:
                  <ol className={classes.numberList}>
                    <li>The business part. This includes scam protection services and asset management infrastructure. This part
                      provides trust between the ICO market stakeholders and charges a commission for the service. This is the
                      monetization of the project.</li>
                    <li>The social part. This is a familiar social network that unites the participants of the ICO market. The
                      social network provides customers with a quick and simple connection and collaboration. It is free of charge.</li>
                  </ol>
                  <p>The first point is clear. We create useful services and earn money. This is just a business and nothing more.
                  But why are we developing a social network? Why are we delivering it free of charge?
                  <br style={{fontSize: '24px'}}/>
                  The answer is simple. We are doing this to attract customers to our business solutions. The social network is
                  a part of our marketing strategy. And it is a good part.
                  <br style={{fontSize: '24px'}}/>
                  Look.</p>
                </div>
              </li>

              <li className={classes.pageItem}>
                <h2 className={classes.title}>“Nothing except the mint can make money without advertising.”–Thomas Macaulay</h2>
                <div className={classes.content}>
                  Generally, any business has two parts:
                  <ol className={classes.numberList}>
                    <li>Product creation</li>
                    <li>Advertising</li>
                  </ol>
                  <p>So, in our business, the social network is a non-trivial way of advertising. We don’t want to pay big money for marketing
                  expenses all our lives. We are going to create and promote a popular platform once and just support it in the future.
                  <br style={{fontSize: '24px'}}/>
                  A social network is a self-developing ecosystem. Existing users of the social network regularly create new content to
                  promote their own accounts. This content improves and advertises the platform too. As a result, current users attract new
                  users. At the same time, the holder of the platform just manages one. He can use the results of advertising. And he doesn’t
                  have to pay for this. What could be better? Nothing. Facebook, Reddit, and Medium are successful examples of such a business model.</p>
                </div>
              </li>

              <li className={classes.pageItem}>
                <h2 className={classes.title}>“So in war, the way is to avoid what is strong, and strike at what is weak.”–Sun Tzu</h2>
                <div className={classes.content}>
                  A social network allows us to avoid a marketing war. We want to monopolize the ICO market and protect our positions with small
                  forces. We have the following arguments:
                  <ol className={classes.numberList}>
                    <li>Today marketing wars are wars of budgets. When giants like J.P. Morgan, Goldman Sachs or Citi come to the ICO market we
                      will not be able to defeat them in a direct battle. So we have to find another way.</li>
                    <li>In this case, a social network is a more elegant solution. We are going to attract the initial audience to our platform
                      because we are the first and we don’t have strong competitors. After that, new users will appear without our participation.</li>
                    <li>But most importantly, they will stay with us forever. A social network creates a strong connection between users. A
                      potential competitor can’t recruit one at a time. He must take them all at once. The complexity of this task will increase
                      with the growth of users. As a result, it will be impossible for even J.P. Morgan, Goldman Sachs or Citi.</li>
                    <li>In a long-term success case, we will have access to all ICO investors in the world through our social network.</li>
                  </ol>
                  <p>In a long-term success case, the social network will allow us to monopolize the ICO marketplace. We will create business
                  services and receive an inexhaustible flow of new customers. We will be able to dump competitors if necessary. At the same
                  time, we will always remain a profitable business because of the economies of scale.</p>
                </div>
              </li>

            </ul>

            <div className={classes.info}>
              <h3 className={classes.subtitle}>More information:</h3>
              <ul className={classes.infoList}>
                <li className={classes.infoItem}><a href="/pitch" className={classes.infoLink}>Pitch for Investors</a></li>
                <li className={classes.infoItem}><a href="./White Paper (english).pdf" download className={classes.infoLink}>White Paper (download)</a></li>
                <li className={classes.infoItem}><a href="./Financial Model.xlsx" download className={classes.infoLink}>Financial Model (download)</a></li>
                <li className={classes.infoItem}><a href="/offer-protection" className={classes.infoLink}>How are we going to offer protection from scams?</a></li>
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
                <span className={classes.footerDescription}>A social network for cryptoinvestors, asset managers and ICO-projects</span>
              </div>
              <div className={classes.footerRight}>
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

export default withStyles(styles)(MarketMonopolyPage)
