import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
// import { Link } from 'react-scroll';
import Scrollbar from "react-custom-scrollbars";

const styles = () => createStyles({
  wrapper: {
    minWidth: '1300px',
    width: '100%',
    backgroundColor: '#fff',
    color: '#2d3546',
  },
  section: {
    width: '100%',
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
    color: '#2d3546',
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
    transition: '.3s',
    '&:hover': {
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
  },
  buttonLinkOutline: {
    border: '1px solid #2d3546',
    color: '#2d3546',
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
    marginRight: '80px',
    textAlign: 'center',
    '&:last-child': {
      marginRight: 0,
    },
  },
  teamSocialsItem: {
    marginRight: '15px',
    '&:last-child': {
      marginRight: 0,
    },
  },
  itemPhoto: {
    width: '215px',
    height: '270px',
    backgroundColor: '#000',
    marginBottom: '15px',
    overflow: 'hidden',
  },
  itemName: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '2px',
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

  progressBarContainer: {  
    position: 'relative',
  },
  progressText: { 
    transform: 'translate(-50%, -55%)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    color: '#2d3546',
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

class LandingPage extends React.Component<any> {
  state = {
    mins: 0,
    hours: 0,
    days: 0,
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
      mins: Math.floor(min % 60) >= 0 ? Math.floor(min % 60) : 0,
      hours: dd >= 0 ? dd : 0,
      days: d >= 0 ? d : 0,
    })
  }

  handleClick(e:any) {
    let to = e.target.getAttribute('data-to')
    let element: any = document.getElementById(to);
    if(element !== null) {
      element.scrollIntoView({block: 'start', behavior: 'smooth'})
    }
    return void(0)
  }

  renderThumbVertical({ style, ...props }: any) {
    const customStyle = {
      backgroundColor: `rgb(45, 53, 70)`,
      borderRadius: "5px",
      zIndex: 100,
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  }

  render() {
    const { classes } = this.props;

    return (
      <Scrollbar autoHeight={true} autoHeightMax={'100vh'} renderThumbVertical={this.renderThumbVertical}>
        <div className={classes.wrapper} id="first">

          <header className={classes.header} data-to='first' onClick={this.handleClick}>
            <div className={classes.headerContainer}>
              <span data-to='first' onClick={this.handleClick} style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
                <img data-to='first' onClick={this.handleClick} style={{width: '30px', marginRight: '10px'}} src="./icons/logo.svg" alt="logo"/>
                <h2 data-to='first' onClick={this.handleClick} style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
              </span>
              <div className={classes.headerLinks}>
                <ul className={classes.headerLinksList}>
                  <li className={classes.headerLinksItem}>
                    <span data-to='solutions' onClick={this.handleClick}>Solutions</span>
                  </li>
                  <li className={classes.headerLinksItem}>
                    <span data-to='roadmap' onClick={this.handleClick}>Roadmap</span>
                  </li>
                  <li className={classes.headerLinksItem}>
                    <span data-to='team' onClick={this.handleClick}>Team</span>
                  </li>
                  <li className={classes.headerLinksItem}>
                    <span data-to='contacts' onClick={this.handleClick}>Contacts</span>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <div className={classes.section} style={{paddingTop: '280px', paddingBottom: '70px'}}>
            <div className={classes.container}>
              <h2 className={classes.title}>icoWorld is a social network for cryptoinvestors, asset managers and ICO-projects</h2>
              <h3 className={classes.subtitle} style={{marginTop: '60px'}}>Private sale will start in</h3>
              
              <ul style={{display: 'flex', marginTop: '60px'}}>
                <li className={classes.progressBarContainer} style={{marginRight: '20px'}}>
                  <span className={classes.progressText}>
                    <span className={classes.amount}>{this.state.days}</span>
                    <span className={classes.text}>Days</span>
                  </span>
                  <svg className={classes.progressSvg}>
                    <circle className={classes.circle} r="45%" cx="50%" cy="50%" fill="#fafafa" stroke="#e5e5e5"></circle>
                    <circle style={{strokeDashoffset: (283 - (this.state.days / 50) * 283)}} className={`${classes.progressbar} ${classes.circle}`} r="45%" cx="50%" cy="50%" fill="transparent" stroke="#2d3546"></circle>
                  </svg>
                </li>
                <li className={classes.progressBarContainer} style={{marginRight: '20px'}}>
                  <span className={classes.progressText}>
                    <span className={classes.amount}>{this.state.hours}</span>
                    <span className={classes.text}>Hours</span>
                  </span>
                  <svg className={classes.progressSvg}>
                    <circle className={classes.circle} r="45%" cx="50%" cy="50%" fill="#fafafa" stroke="#e5e5e5"></circle>
                    <circle style={{strokeDashoffset: (283 - (this.state.hours / 24) * 283)}} className={`${classes.progressbar} ${classes.circle}`} r="45%" cx="50%" cy="50%" fill="transparent" stroke="#2d3546"></circle>
                  </svg>
                </li>
                <li className={classes.progressBarContainer}>
                  <span className={classes.progressText}>
                    <span className={classes.amount}>{this.state.mins}</span>
                    <span className={classes.text}>Minutes</span>
                  </span>
                  <svg className={classes.progressSvg}>
                    <circle className={classes.circle} r="45%" cx="50%" cy="50%" fill="#fafafa" stroke="#e5e5e5"></circle>
                    <circle style={{strokeDashoffset: (283 - (this.state.mins / 60) * 283)}} className={`${classes.progressbar} ${classes.circle}`} r="45%" cx="50%" cy="50%" fill="transparent" stroke="#2d3546"></circle>
                  </svg>
                </li>
              </ul>
              
              <div className={classes.buttons} style={{marginTop: '60px'}}>
                <ul className={classes.buttonsList}>
                  <li className={classes.buttonsItem}><a className={`${classes.buttonLink} ${classes.buttonLinkOutline}`} href="./White Paper (english).pdf" download>White Paper</a></li>
                  <li className={classes.buttonsItem}><a className={`${classes.buttonLink} ${classes.buttonLinkOutline}`} href="/pitch" target="_blank">Pitch for Investors</a></li>
                  <li className={classes.buttonsItem}><a className={`${classes.buttonLink} ${classes.buttonLinkFill}`} href="http://icoworld.network/" target="_blank">MVP</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={classes.section} id="solutions" style={{backgroundColor: '#2d3546', paddingTop: '80px', paddingBottom: '80px'}}>
            <div className={classes.container}>
              <h2 className={classes.title} style={{color: '#fff'}}>Our solutions:</h2>
              <div className={classes.solutions} style={{marginTop: '80px', width: '100%'}}>
                <ul className={classes.solutionsList}>
                  <li className={classes.solutionsItem}>
                    <img style={{width: '170px'}} src="./icons/investors.svg" alt="investors"/>
                    <span className={classes.solutionsText}>Investor collaboration</span>
                  </li>
                  <li className={classes.solutionsItem}>
                    <img style={{width: '150px'}} src="./icons/shield.svg" alt="shield"/>
                    <span className={classes.solutionsText}>Scam-protection</span>
                  </li>
                  <li className={classes.solutionsItem}>
                    <img style={{width: '170px'}} src="./icons/wallet.svg" alt="wallet"/>
                    <span className={classes.solutionsText}>Asset management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={classes.section} style={{paddingTop: '80px'}} id="roadmap">
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
                  <div className={classes.roadmapLeft}>August - November, 2018</div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#7ED321'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}>Team building</li>
                    <li className={classes.roadmapRightItem}>Pre-seed investment raising</li>
                    <li className={classes.roadmapRightItem}>Minimum viable product development</li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}>December, 2018</div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}>Private Sale</li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}>January, 2019 - June, 2019</div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}>Completion of social part of the project</li>
                    <li className={classes.roadmapRightItem}>Attraction of first users</li>
                    <li className={classes.roadmapRightItem}>Optimization of marketing expenses</li>
                    <li className={classes.roadmapRightItem}>Partnerships with suppliers</li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}>July, 2019</div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}>Initial Coin Offering</li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}>August, 2019 - March, 2020</div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}>Creating scam-protection product</li>
                    <li className={classes.roadmapRightItem}>Adding five projects to the platform</li>
                    <li className={classes.roadmapRightItem}>Optimization of research and scam-scoring expenses</li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}>April, 2020 - April, 2021</div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}>Business scaling</li>
                    <li className={classes.roadmapRightItem}>Opening offices in business capitals of the world</li>
                    <li className={classes.roadmapRightItem}>Adding thirty-five projects to the platform</li>
                    <li className={classes.roadmapRightItem}>Optimization of all expenses</li>
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

          <div className={classes.section} style={{paddingTop: '80px'}} id="team">
            <div className={classes.container}>
              <h2 className={classes.title}>Team</h2>
              
              <ul className={classes.photosList} style={{marginTop: '40px'}}>
                <li className={classes.photosItem}>
                  <div className={classes.itemPhoto}><img src="./Ivan.jpg" style={{width: '100%', transform: 'translateY(-30px)'}} /></div>
                  <p className={classes.itemName}>Ivan Fedotov</p>
                  <p style={{marginBottom: '10px'}}>Chief Executive Officer</p>

                  <ul style={{display: 'flex', justifyContent: 'center'}}>
                    <li className={classes.teamSocialsItem}>
                      <a href='https://www.facebook.com/ivan.fedotov.568' target="_blank" style={{textDecoration: 'none'}}>
                        <img src="./icons/facebook.png" alt="facebook" style={{width: '25px'}} />
                      </a>
                    </li>
                    <li className={classes.teamSocialsItem}>
                      <a href='https://www.linkedin.com/in/ivan-fedotov-264b40b1/' target="_blank" style={{textDecoration: 'none'}}>
                        <img src="./icons/linkIn.png" alt="linkedIn" style={{width: '25px'}} />
                      </a>
                    </li>
                    <li className={classes.teamSocialsItem}>
                      <a href='https://t.me/iyufedotov' target="_blank" style={{textDecoration: 'none'}}>
                        <img src="./icons/telegram.png" alt="telegram" style={{width: '25px'}}  />
                      </a>
                    </li>
                  </ul>
                </li>

                <li className={classes.photosItem}>
                  <div className={classes.itemPhoto}><img src="./Alexey.jpg" style={{width: '100%', transform: 'translateY(-12px)'}} /></div>
                  <p className={classes.itemName}>Aleksey Rezvov</p>
                  <p style={{marginBottom: '10px'}}>Chief Technical Officer</p>

                  <ul style={{display: 'flex', justifyContent: 'center'}}>
                    <li className={classes.teamSocialsItem}>
                      <a href='https://www.facebook.com/therezvov' target="_blank" style={{textDecoration: 'none'}}>
                        <img src="./icons/facebook.png" alt="facebook" style={{width: '25px'}} />
                      </a>
                    </li>
                    <li className={classes.teamSocialsItem}>
                      <a href='https://www.linkedin.com/in/arezvov/' target="_blank" style={{textDecoration: 'none'}}>
                        <img src="./icons/linkIn.png" alt="linkedIn" style={{width: '25px'}} />
                      </a>
                    </li>
                    <li className={classes.teamSocialsItem}>
                      <a href='https://t.me/arezvov' target="_blank" style={{textDecoration: 'none'}}>
                        <img src="./icons/telegram.png" alt="telegram" style={{width: '25px'}} />
                      </a>
                    </li>
                  </ul>
                </li>

                <li className={classes.photosItem}>
                  <div className={classes.itemPhoto}><img src="./Nikolai.jpg" style={{width: '100%', transform: 'translateY(-25px)'}} /></div>
                  <p className={classes.itemName}>Nikolay Beschastny</p>
                  <p style={{marginBottom: '10px'}}>Team Leader</p>

                  <ul style={{display: 'flex', justifyContent: 'center'}}>
                    <li className={classes.teamSocialsItem}>
                      <a href='https://t.me/yabeshan' target="_blank" style={{textDecoration: 'none'}}>
                        <img src="./icons/telegram.png" alt="telegram" style={{width: '25px'}} />
                      </a>
                    </li>
                  </ul>
                </li>

                <li className={classes.photosItem}>
                  <div className={classes.itemPhoto}><img src="./Alexander.jpg" style={{width: '100%', transform: 'translateY(-10px)'}} /></div>
                  <p className={classes.itemName}>Aleksandr Saveliev</p>
                  <p style={{marginBottom: '10px'}}>Project Manager</p>

                  <ul style={{display: 'flex', justifyContent: 'center'}}>
                    <li className={classes.teamSocialsItem}>
                      <a href='https://t.me/an_saveliev' target="_blank" style={{textDecoration: 'none'}}>
                        <img src="./icons/telegram.png" alt="telegram" style={{width: '25px'}} />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <h2 className={classes.title} style={{marginTop: '80px'}} id="contacts">Join us!</h2>

              <div className={classes.socials} style={{marginTop: '40px'}}>
                <ul className={classes.socialsList} style={{display: 'flex'}}>
                  <li className={classes.socialsItem}>
                    <a href='https://github.com/pyshopml2' target="_blank" style={{textDecoration: 'none'}}>
                      <img src="./icons/github.svg" alt="github"/>
                    </a>
                  </li>
                  <li className={classes.socialsItem}>
                    <a href='https://t.me/icoWorld_EN' target="_blank" style={{textDecoration: 'none'}}>
                      <img src="./icons/telegram.svg" alt="telegram"/>
                    </a>
                  </li>
                  <li className={classes.socialsItem}>
                    <a href='https://bitcointalk.org/index.php?topic=4954870.msg44647378#msg44647378' target="_blank" style={{textDecoration: 'none'}}>
                      <img src="./icons/bitcoin.svg" alt="bitcoin"/>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          
          <footer className={classes.footer} style={{borderTop: '1px solid #f1f1f1',  marginTop: '75px', backgroundColor: '#2d3546', color: '#fff'}}>
            <div className={classes.footerContainer}>
              <div style={{width: '240px', marginRight: '80px'}}>
                <span data-to='first' onClick={this.handleClick} style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
                  <img data-to='first' onClick={this.handleClick} style={{width: '30px', marginRight: '10px'}} src="./icons/logo.svg" alt="logo"/>
                  <h2 data-to='first' onClick={this.handleClick} style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
                </span>

                <span className={classes.footerDescription}>A social network for cryptoinvestors, asset managers and ICO-projects</span>
              </div>
              <div className={classes.footerRight} style={{flex: 1}}>
                <ul className={classes.footerSections}>
                  <li className={classes.footerSectionsItem}>
                    <span className={classes.footerSectionsTitle}>Product</span>

                    <a className={classes.footerSectionsLink} href="./White Paper (english).pdf" download>White Paper</a>
                    <a className={classes.footerSectionsLink} target="_blank" href="/pitch">Pitch for Investors</a>
                    <a className={classes.footerSectionsLink} href="http://www.icoworld.network" target="_blank">MVP</a>
                  </li>

                  <li className={classes.footerSectionsItem}>
                    <span className={classes.footerSectionsTitle}>Social</span>

                    <a className={classes.footerSectionsLink} target="_blank" href="https://bitcointalk.org/index.php?topic=4954870.msg44647378#msg44647378">Bitcointalk</a>
                    <a className={classes.footerSectionsLink} target="_blank" href="https://github.com/pyshopml2">GitHub</a>
                    <a className={classes.footerSectionsLink} target="_blank" href="https://t.me/icoWorld_EN">Telegram</a>
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

export default withStyles(styles)(LandingPage)
