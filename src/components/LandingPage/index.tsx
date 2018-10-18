import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Link, Element } from 'react-scroll';

const styles = () => createStyles({
  wrapper: {
    minWidth: '1300px',
    width: '100%',
    backgroundColor: '#fff',
  },
  section: {
    width: '100%',
    fontFamily: 'Open Sans',
    boxSizing: 'border-box',
  },
  container: {
    width: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'fixed',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 100,
  },
  headerContainer: {
    width: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
  },
  headerLinksList: {
    display: 'flex',
  },
  headerLinksItem: {
    marginRight: '20px',
    fontFamily: 'Open Sans',
    color: '#171717',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  title: {
    fontSize: '36px',
    fontWeight: 800,
    lineHeight: '45px',
    textAlign: 'center',
    margin: 0,
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'center',
    margin: 0,
  },
  buttonsList: {
    display: 'flex',
  },
  buttonsItem: {
    marginRight: '20px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  buttonLink: {
    boxSizing: 'border-box',
    textDecoration: 'none',
    width: '170px',
    height: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
  },
  buttonLinkOutline: {
    border: '1px solid #303546',
    color: '#171717',
  },
  buttonLinkFill: {
    backgroundColor: '#DB0043',
    color: '#fff',
  },

  solutionsList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  solutionsItem: {
    textAlign: 'center',
  },
  solutionsText: {
    display: 'block',
    color: '#fff',
    fontSize: '28px',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '75px',
  },

  roadmapItem: {
    display: 'flex',
    marginBottom: '30px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  roadmapLeft: {
    marginTop: '15px',
    transform: 'translateX(50%)',
    fontSize: '18px',
    fontWeight: 600,
    width: '300px',
    textAlign: 'center',
  },
  roadmapCenter: {
    marginRight: '90px',
    marginLeft: '210px',
    width: '4px',
  },
  roadmapRight: {
    marginTop: '15px',
    width: '400px',
  },
  roadmapRightItem: {
    marginBottom: '15px',
    '&:last-child': {
      marginBottom: '20px',
    },
  },

  photosList: {
    display: 'flex',
  },
  photosItem: {
    width: '215px',
    height: '270px',
    backgroundColor: '#000',
    marginRight: '80px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  smartContract: {
    width: '740px',
    height: '370px',
    backgroundColor: '#000',
  },
  socialsItem: {
    marginRight: '30px',
    '&:last-child': {
      marginRight: 0,
    },
  },

  footerContainer: {
    width: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  progressBarContainer: {  
    position: 'relative',
  },
  progressText: { 
    transform: 'translate(-50%, -55%)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: '#171717',
    zIndex: 1,
    lineHeight: 1,
    textAlign: 'center',
  },
  amount: {
    display: 'block',
    fontSize: '30px',
    fontWeight: 600,
  },
  text: {
    display: 'block',
    fontSize: '16px',
  },
  progressSvg: {
    width: '100px',
    height: '100px',
    transform: 'rotate(-90deg)',
  },
  circle: {
    strokeWidth: 6,
  },
  progressbar: {
    transition: '1s',
    strokeDasharray: 283,
  },
});

class LandingPage extends React.Component<any> {
  state = {
    mins: 0,
    hours: 0,
    days: 0,
};

  componentDidMount() {
    let to: any = new Date("December 1 2018 00:01:00");
    let now: any = Date.now();
      
    let remaining = to - now;
    remaining = (remaining / 1000)
    let min = (remaining / 60);
    let h = (min / 60);
    
    let d = Math.floor(h / 24);
    let dd = Math.floor(h % 24);
    this.setState({
      mins: Math.floor(min % 60),
      hours: dd,
      days: d,
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>

        <header className={classes.header}>
          <div className={classes.headerContainer}>
            <Link to="first" smooth={true} offset={-180} duration={500}>
              <a href='#' style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
                <img style={{width: '30px', marginRight: '10px'}} src="./icons/logo.svg" alt="logo"/>
                <h2 style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
              </a>
            </Link>
            <div className={classes.headerLinks}>
              <ul className={classes.headerLinksList}>
                <li className={classes.headerLinksItem}>
                  <Link to="solutions" smooth={true} offset={-100} duration={500}>Solutions</Link>
                </li>
                <li className={classes.headerLinksItem}>
                  <Link to="roadmap" smooth={true} offset={-80} duration={500}>Roadmap</Link>
                </li>
                <li className={classes.headerLinksItem}>
                  <Link to="team" smooth={true} offset={-80} duration={500}>Team</Link>
                </li>
                <li className={classes.headerLinksItem}>
                  <Link to="partners" smooth={true} duration={500}>Partners</Link>
                </li>
                <li className={classes.headerLinksItem}>
                  <Link to="smartContract" smooth={true} duration={500}>Smart contract</Link>
                </li>
                <li className={classes.headerLinksItem}>
                  <Link to="contacts" smooth={true} duration={500}>Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className={classes.section} style={{paddingTop: '180px', paddingBottom: '70px'}}>
          <Element name="first" />
          <div className={classes.container}>
            <h2 className={classes.title}>icoWorld is a social network for cryptoinvestors, assets managers and ICO-projects</h2>
            <h3 className={classes.subtitle} style={{marginTop: '60px'}}>Private sale will start in</h3>
            
            <ul style={{display: 'flex', marginTop: '60px'}}>
              <li className={classes.progressBarContainer} style={{marginRight: '20px'}}>
                <span className={classes.progressText}>
                  <span className={classes.amount}>{this.state.days}</span>
                  <span className={classes.text}>Days</span>
                </span>
                <svg className={classes.progressSvg}>
                  <circle className={classes.circle} r="45%" cx="50%" cy="50%" fill="#fafafa" stroke="#e5e5e5"></circle>
                  <circle style={{strokeDashoffset: (283 - (this.state.days / 50) * 283)}} className={`${classes.progressbar} ${classes.circle}`} r="45%" cx="50%" cy="50%" fill="transparent" stroke="#171717"></circle>
                </svg>
              </li>
              <li className={classes.progressBarContainer} style={{marginRight: '20px'}}>
                <span className={classes.progressText}>
                  <span className={classes.amount}>{this.state.hours}</span>
                  <span className={classes.text}>Hours</span>
                </span>
                <svg className={classes.progressSvg}>
                  <circle className={classes.circle} r="45%" cx="50%" cy="50%" fill="#fafafa" stroke="#e5e5e5"></circle>
                  <circle style={{strokeDashoffset: (283 - (this.state.hours / 24) * 283)}} className={`${classes.progressbar} ${classes.circle}`} r="45%" cx="50%" cy="50%" fill="transparent" stroke="#171717"></circle>
                </svg>
              </li>
              <li className={classes.progressBarContainer}>
                <span className={classes.progressText}>
                  <span className={classes.amount}>{this.state.mins}</span>
                  <span className={classes.text}>Minutes</span>
                </span>
                <svg className={classes.progressSvg}>
                  <circle className={classes.circle} r="45%" cx="50%" cy="50%" fill="#fafafa" stroke="#e5e5e5"></circle>
                  <circle style={{strokeDashoffset: (283 - (this.state.mins / 60) * 283)}} className={`${classes.progressbar} ${classes.circle}`} r="45%" cx="50%" cy="50%" fill="transparent" stroke="#171717"></circle>
                </svg>
              </li>
            </ul>
            
            <div className={classes.buttons} style={{marginTop: '60px'}}>
              <ul className={classes.buttonsList}>
                <li className={classes.buttonsItem}><a className={`${classes.buttonLink} ${classes.buttonLinkOutline}`} href="#">White Paper</a></li>
                <li className={classes.buttonsItem}><a className={`${classes.buttonLink} ${classes.buttonLinkOutline}`} href="#">Pitch for Investors</a></li>
                <li className={classes.buttonsItem}><a className={`${classes.buttonLink} ${classes.buttonLinkFill}`} href="#">MVP</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={classes.section} style={{backgroundColor: '#101010', paddingTop: '80px', paddingBottom: '80px'}}>
          <Element name="solutions" />
          <div className={classes.container}>
            <h2 className={classes.title} style={{color: '#fff'}}>Our solutions:</h2>
            <div className={classes.solutions} style={{marginTop: '80px', width: '100%'}}>
              <ul className={classes.solutionsList}>
                <li className={classes.solutionsItem}>
                  <img src="./icons/investors.svg" alt="investors"/>
                  <span className={classes.solutionsText}>Investors collaboration</span>
                </li>
                <li className={classes.solutionsItem}>
                  <img src="./icons/shield.svg" alt="shield"/>
                  <span className={classes.solutionsText}>SCAM-protection</span>
                </li>
                <li className={classes.solutionsItem}>
                  <img src="./icons/wallet.svg" alt="wallet"/>
                  <span className={classes.solutionsText}>Assets management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={classes.section} style={{padding: '80px 0'}}>
          <Element name="roadmap" />
          <div className={classes.container}>
            <h2 className={classes.title}>Roadmap</h2>
            <ul className={classes.roadmapList} style={{marginTop: '40px'}}>

              <li className={classes.roadmapItem}>
                <div className={classes.roadmapLeft}>June - July, 2018</div>
                <div className={classes.roadmapCenter} style={{backgroundColor: '#7ED321'}} />
                <ul className={classes.roadmapRight}>
                  <li className={classes.roadmapRightItem}>Creating the concept</li>
                  <li className={classes.roadmapRightItem}>Testing the concept</li>
                  <li className={classes.roadmapRightItem}>Finalizing the concept</li>
                </ul>
              </li>

              <li className={classes.roadmapItem}>
                <div className={classes.roadmapLeft}>August - October, 2018</div>
                <div className={classes.roadmapCenter} style={{backgroundColor: '#7ED321'}} />
                <ul className={classes.roadmapRight}>
                  <li className={classes.roadmapRightItem}>Team building</li>
                  <li className={classes.roadmapRightItem}>Pre-seed investments raising</li>
                  <li className={classes.roadmapRightItem}>Minimum viable product development</li>
                </ul>
              </li>

              <li className={classes.roadmapItem}>
                <div className={classes.roadmapLeft}>November, 2018</div>
                <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                <ul className={classes.roadmapRight}>
                  <li className={classes.roadmapRightItem}>Private Sale</li>
                </ul>
              </li>

              <li className={classes.roadmapItem}>
                <div className={classes.roadmapLeft}>December, 2018 - May, 2019</div>
                <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                <ul className={classes.roadmapRight}>
                  <li className={classes.roadmapRightItem}>Completion of the social part of the project</li>
                  <li className={classes.roadmapRightItem}>Attraction of the first users</li>
                  <li className={classes.roadmapRightItem}>Optimization of marketing expenses</li>
                  <li className={classes.roadmapRightItem}>Partnerships with suppliers</li>
                </ul>
              </li>

              <li className={classes.roadmapItem}>
                <div className={classes.roadmapLeft}>June, 2019</div>
                <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                <ul className={classes.roadmapRight}>
                  <li className={classes.roadmapRightItem}>Initial Coin Offering</li>
                </ul>
              </li>

              <li className={classes.roadmapItem}>
                <div className={classes.roadmapLeft}>July, 2019 - February, 2020</div>
                <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                <ul className={classes.roadmapRight}>
                  <li className={classes.roadmapRightItem}>Creating the scam-protection product</li>
                  <li className={classes.roadmapRightItem}>Adding five projects to the platform</li>
                  <li className={classes.roadmapRightItem}>Optimization of research and scam-scoring expenses</li>
                </ul>
              </li>

              <li className={classes.roadmapItem}>
                <div className={classes.roadmapLeft}>March, 2020 - March, 2021</div>
                <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                <ul className={classes.roadmapRight}>
                  <li className={classes.roadmapRightItem}>The business scaling</li>
                  <li className={classes.roadmapRightItem}>Opening offices in business capitals of the world</li>
                  <li className={classes.roadmapRightItem}>Adding thirty-five projects to the platform</li>
                  <li className={classes.roadmapRightItem}>Optimization all expenses</li>
                </ul>
              </li>

              <li className={classes.roadmapItem}>
                <div className={classes.roadmapLeft}>Always</div>
                <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                <ul className={classes.roadmapRight}>
                  <li className={classes.roadmapRightItem}>Research new opportunities</li>
                </ul>
              </li>

            </ul>
          </div>
        </div>

        <div className={classes.section}>
          <Element name="team" />
          <div className={classes.container}>
            <h2 className={classes.title}>Team</h2>
            
            <ul className={classes.photosList} style={{marginTop: '40px'}}>
              <li className={classes.photosItem}></li>
              <li className={classes.photosItem}></li>
              <li className={classes.photosItem}></li>
              <li className={classes.photosItem}></li>
            </ul>

            <Element name="partners" />
            <h2 className={classes.title} style={{marginTop: '80px'}}>Partners</h2>
            
            <ul className={classes.photosList} style={{marginTop: '40px'}}>
              <li className={classes.photosItem}></li>
              <li className={classes.photosItem}></li>
            </ul>

            <Element name="smartContract" />
            <h2 className={classes.title} style={{marginTop: '80px'}}>Smart Contract</h2>

            <div className={classes.smartContract} style={{marginTop: '40px'}}></div>

            <Element name="contacts" />
            <h2 className={classes.title} style={{marginTop: '80px'}}>Join us!</h2>

            <div className={classes.socials} style={{marginTop: '40px'}}>
              <ul className={classes.socialsList} style={{display: 'flex'}}>
                <li className={classes.socialsItem}>
                  <a href='#' style={{textDecoration: 'none'}}>
                    <img src="./icons/github.svg" alt="github"/>
                  </a>
                </li>
                <li className={classes.socialsItem}>
                  <a href='#' style={{textDecoration: 'none'}}>
                    <img src="./icons/telegram.svg" alt="telegram"/>
                  </a>
                </li>
                <li className={classes.socialsItem}>
                  <a href='#' style={{textDecoration: 'none'}}>
                    <img src="./icons/bitcoin.svg" alt="bitcoin"/>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        
        <footer className={classes.footer} style={{borderTop: '1px solid #f1f1f1',  marginTop: '75px'}}>
          <div className={classes.footerContainer}>
            <div style={{width: '240px', marginRight: '80px'}}>
              <Link to="first" smooth={true} offset={-180} duration={500}>
                <a href='#' style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
                  <img style={{width: '30px', marginRight: '10px'}} src="./icons/logo.svg" alt="logo"/>
                  <h2 style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
                </a>
              </Link>
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
      </div>
    )
  }
}

export default withStyles(styles)(LandingPage)
