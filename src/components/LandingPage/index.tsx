import React from 'react'
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Link, Element } from 'react-scroll';
import Dialog from "@material-ui/core/Dialog";
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

  modal: {
    padding: '15px',
    width: '550px',
},
});

class LandingPage extends React.Component<any> {
  state = {
    mins: 0,
    hours: 0,
    days: 0,
    openModal: false,
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

        <header className={classes.header}>
          <div className={classes.headerContainer}>
            <Link to="first" smooth={true} offset={-280} duration={500}>
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
                  <Link to="contacts" smooth={true} duration={500}>Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className={classes.section} style={{paddingTop: '280px', paddingBottom: '70px'}}>
          <Element name="first" />
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
                <li className={classes.buttonsItem}><a className={`${classes.buttonLink} ${classes.buttonLinkFill}`} href="#">MVP</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={classes.section} style={{backgroundColor: '#2d3546', paddingTop: '80px', paddingBottom: '80px'}}>
          <Element name="solutions" />
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
                  <li className={classes.roadmapRightItem}>Pre-seed investment raising</li>
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
                  <li className={classes.roadmapRightItem}>Completion of social part of the project</li>
                  <li className={classes.roadmapRightItem}>Attraction of first users</li>
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
                  <li className={classes.roadmapRightItem}>Creating scam-protection product</li>
                  <li className={classes.roadmapRightItem}>Adding five projects to the platform</li>
                  <li className={classes.roadmapRightItem}>Optimization of research and scam-scoring expenses</li>
                </ul>
              </li>

              <li className={classes.roadmapItem}>
                <div className={classes.roadmapLeft}>March, 2020 - March, 2021</div>
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

        <div className={classes.section}>
          <Element name="team" />
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
                <div className={classes.itemPhoto}></div>
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
                <div className={classes.itemPhoto}></div>
                <p className={classes.itemName}>Aleksandr Saveliev</p>
                <p style={{marginBottom: '10px'}}>Project Manager</p>

                <ul style={{display: 'flex', justifyContent: 'center'}}>
                  <li className={classes.teamSocialsItem}>
                    <a href='https://t.me/asaveliev' target="_blank" style={{textDecoration: 'none'}}>
                      <img src="./icons/telegram.png" alt="telegram" style={{width: '25px'}} />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <Element name="contacts" />
            <h2 className={classes.title} style={{marginTop: '80px'}}>Join us!</h2>

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
              <Link to="first" smooth={true} offset={-280} duration={500}>
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

                  <a className={classes.footerSectionsLink} href="./White Paper (english).pdf" download>White Paper</a>
                  <a className={classes.footerSectionsLink} target="_blank" href="/pitch">Pitch for Investors</a>
                  <a className={classes.footerSectionsLink} href="#">MVP</a>
                </li>

                <li className={classes.footerSectionsItem}>
                  <span className={classes.footerSectionsTitle}>Social</span>

                  <a className={classes.footerSectionsLink} target="_blank" href="https://bitcointalk.org/index.php?topic=4954870.msg44647378#msg44647378">Bitcointalk</a>
                  <a className={classes.footerSectionsLink} target="_blank" href="https://github.com/pyshopml2">GitHub</a>
                  <a className={classes.footerSectionsLink} target="_blank" href="https://t.me/icoWorld_EN">Telegram</a>
                </li>

                <li className={classes.footerSectionsItem}>
                  <span className={classes.footerSectionsTitle}>Legal</span>

                  <a className={classes.footerSectionsLink} href="#" onClick={() => {this.setState({ openModal: true })}}>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        <Dialog PaperProps={{square: true}} onClose={() => this.setState({ openModal: false })} open={this.state.openModal}>
          <Scrollbar autoHeight={true} autoHeightMax={590} renderThumbVertical={this.renderThumbVertical}>
            <div className={classes.modal}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo ullam dolorem aliquid eum? Maiores a eos deserunt aut assumenda soluta, architecto odio. Explicabo, alias fugiat placeat tenetur officiis omnis.
                Reiciendis labore quibusdam architecto, cum, excepturi maiores dolores repudiandae dignissimos sapiente ullam deleniti autem. Eveniet sed laboriosam, ab eaque, distinctio fugit repellendus, autem id sequi suscipit veniam atque placeat enim?
                Rerum magni dolorem sapiente laboriosam, porro blanditiis explicabo eius nesciunt fugiat quaerat eum quam pariatur natus! Praesentium, suscipit? Incidunt, omnis nisi sunt rem quia recusandae ipsum. A doloremque quo voluptatibus.
                Veniam fugit totam mollitia veritatis qui, blanditiis accusamus consequatur culpa eaque excepturi sit minus alias, illum earum odit delectus cum cupiditate, fugiat officiis. Non iste doloremque dolor sunt iusto labore.
                Magnam, veniam nulla enim eius inventore voluptatum ipsum repudiandae pariatur deserunt ullam minus dolores est, illum, dignissimos ab earum reiciendis! Neque id expedita voluptatem sapiente, voluptatibus eligendi earum debitis itaque.
                Vero, vitae id exercitationem, neque accusamus qui architecto mollitia doloremque enim, perspiciatis aperiam fuga cum quod culpa inventore eius fugit voluptas corporis tenetur commodi? Sed necessitatibus at nesciunt architecto optio?
                Esse excepturi officiis distinctio, voluptatibus dolorum quo illo dolores nulla, id necessitatibus fuga temporibus dignissimos eaque. Hic repudiandae eligendi, odit unde molestiae magni aliquam quam iure officia minima? Deserunt, tempora.
                Quis vitae alias quaerat magni voluptatum voluptates praesentium in, beatae, sint ut labore! Hic unde sint aperiam possimus. Natus perferendis suscipit est ipsa quisquam ut aliquam ab incidunt dolorem sit?
                Obcaecati perferendis ipsa iusto distinctio nemo necessitatibus sapiente labore nesciunt autem excepturi saepe facilis eaque debitis, aspernatur, sit natus porro! Dignissimos fuga suscipit odit consequuntur repellat molestiae, sit alias magni.
                Doloremque enim fuga illum voluptates quo nobis voluptate neque, suscipit itaque adipisci labore rerum nesciunt placeat obcaecati qui voluptas saepe modi vel vitae sunt accusamus consequatur error maxime. Aspernatur, mollitia.
                Corporis ipsa quae voluptates repellat, possimus nam, impedit nostrum, sed dicta aspernatur illum quas labore veniam expedita quo quisquam. Libero quae adipisci velit earum est quis commodi et blanditiis itaque?
                Et nemo consectetur laboriosam facilis eum sapiente dolore ex aut maxime facere eaque voluptate, illo, sequi maiores possimus quae nulla. Corporis illum esse perferendis omnis consequuntur amet non nesciunt qui!
                Officia delectus perspiciatis vitae modi quod, tenetur repudiandae accusantium provident explicabo, voluptatum nostrum ut expedita totam unde! Nobis voluptatum corrupti a veritatis odit nostrum quam sequi soluta harum. Voluptatum, debitis.
                Facilis eos accusamus pariatur in exercitationem voluptatibus odio modi minima beatae assumenda iste incidunt officiis velit tenetur eveniet quae corporis recusandae animi accusantium consequatur sint est, quo nihil itaque? Veniam.
                Necessitatibus commodi optio minus nam enim corrupti ullam consequuntur, ipsam possimus placeat! Vero quae esse atque quisquam cupiditate pariatur maxime facere? Dicta, voluptates facilis. Recusandae incidunt vel facere in quae.
                Tempore ipsa nobis explicabo dignissimos delectus hic nam deserunt modi suscipit minima voluptates, harum quis eius, non recusandae praesentium dicta magnam culpa consequuntur repudiandae reiciendis veritatis ex itaque? Nulla, dicta.
                Perferendis officia omnis tempore sunt facere tempora molestias exercitationem harum fugiat nulla numquam nobis, sint ab, accusantium animi nostrum sed alias odio! Nostrum commodi accusantium et corrupti neque facere recusandae.
                Veniam enim illo, placeat, consequuntur corrupti obcaecati labore repellendus omnis voluptas, non vel neque amet? Tempore veritatis molestiae quos suscipit, nemo commodi minima nulla quod, officia beatae reprehenderit quibusdam cum?
                Harum laborum voluptate quae nam numquam consequuntur ea nihil sed, ducimus laboriosam suscipit! Similique nulla id blanditiis itaque consectetur consequatur nostrum commodi incidunt in, non ullam dignissimos quae quibusdam magnam.
                A sint repellat aliquid quam odit itaque impedit! Alias tempore iusto, fugit dolor eveniet sunt quaerat dolorem adipisci earum, at culpa sit voluptatibus quidem aliquam, placeat illum. Tenetur, molestias sequi.
                Odio soluta itaque fugit quibusdam sunt laboriosam nulla officiis eos tempore? Sequi fuga error fugiat harum, deleniti ea fugit quae cumque distinctio excepturi dicta aut incidunt, quisquam repellat totam iure.
                Dolor laudantium unde iure, aut vel saepe laboriosam deserunt iste blanditiis repellat fugiat neque quisquam nisi temporibus rem hic quam ullam molestiae labore rerum consectetur optio at adipisci in! Illo.
                Debitis, fugiat consectetur dignissimos minima porro temporibus deserunt? Enim laboriosam aperiam ullam rerum accusantium voluptates velit facere explicabo? Exercitationem explicabo dolore esse harum ut commodi non laborum officia aperiam cupiditate.
                Nesciunt non ipsum, aliquid laboriosam vitae obcaecati impedit nisi voluptatibus id repudiandae eaque odio laudantium sunt, eius unde recusandae. Iure obcaecati dicta officiis, veniam tenetur pariatur nemo vitae at commodi.
                Consequatur architecto voluptatum molestiae sunt, facere nisi inventore quod harum unde, debitis incidunt! Molestiae quibusdam aspernatur perferendis, qui cupiditate adipisci quod pariatur dolorum reiciendis totam explicabo, iste molestias iure dolores.
                Dolores qui accusantium ipsam vel atque tempore aliquid nobis harum vitae quo odit veniam fugiat necessitatibus nam, enim doloremque quisquam nulla officia culpa voluptatibus! Perferendis explicabo maiores aut placeat perspiciatis.
                Voluptas rem sit asperiores esse dolorum voluptatibus voluptatum repellendus cum porro perferendis autem, aperiam enim fugit architecto, consequatur, est facilis reprehenderit atque vel ullam alias laboriosam eius! Dignissimos, amet dolor?
                Ipsa, modi nam, pariatur doloremque repudiandae, repellendus deleniti esse eveniet nisi quod laborum cum commodi placeat. Consequatur asperiores neque id. Rerum id quasi dolor, alias nesciunt commodi est quas? Modi?
                Minus odio esse cum, quisquam sint rerum aliquid assumenda debitis quos itaque mollitia similique vero, dolores veniam cupiditate qui velit maiores molestias. Libero cum officiis tempora dignissimos corporis ratione explicabo!
                Reprehenderit iusto ullam eum totam fuga obcaecati, voluptatibus neque nihil sapiente atque eveniet deleniti accusantium, excepturi exercitationem molestias quis error ratione quas nesciunt iste vero! Praesentium libero eaque non voluptatem.
                Possimus modi consectetur, optio molestiae voluptatem doloremque dolorum adipisci fugit error nam iusto ad quos nobis illo distinctio, porro saepe perspiciatis voluptates. Repellendus non nostrum accusamus! Eaque ab laboriosam aliquid.
                Dolorum, facere reiciendis repudiandae rem nostrum culpa quae aspernatur quos atque iure officia facilis accusamus quas non nobis ex itaque libero laboriosam illum numquam et sint ipsam molestias. Aliquam, totam.
                Suscipit impedit odit dolorem harum unde sunt fugit aliquam molestiae enim veniam hic aliquid quo, quae culpa eaque iste at iure laudantium illo distinctio facere. Hic pariatur rerum nemo amet.
                Itaque, quos, excepturi temporibus, aspernatur sint ratione tenetur ea magnam tempora dolorem nihil. Aliquid minus ipsum quod animi id ipsa fugiat non reprehenderit dolorem nesciunt laudantium tempora, vero, quia aspernatur.
                Ipsum error neque magnam ratione! Pariatur doloribus, optio tempore commodi praesentium reprehenderit maxime sed! Laboriosam ex repellat repellendus fugit? Ea, ut ipsam! Nulla quas accusamus blanditiis molestias, quia doloremque dolor.
                Maiores, ab sed quo asperiores autem quibusdam tempora dolor, repudiandae eaque tempore maxime saepe dolore corrupti quasi? A, eligendi error obcaecati eos nihil cupiditate nostrum. Neque architecto iure esse deleniti.
                Nam, voluptates qui reprehenderit iusto repellat quod praesentium suscipit aliquam eius corporis molestias nemo recusandae quo consequuntur repellendus enim quibusdam eos quae totam excepturi voluptatem maiores minima ducimus quas? Explicabo!
                Illum quo commodi eligendi ex aperiam iusto tenetur earum tempora facere vel natus saepe, at quisquam? Molestiae ullam incidunt nobis repellat at laudantium possimus dignissimos officia sed beatae? Rerum, illo.
                Facere at ut, reiciendis nostrum provident error corrupti alias ipsum repellendus magni saepe quisquam esse doloribus explicabo nam maxime velit! Fugiat ipsum eius consequuntur exercitationem quae doloribus corrupti recusandae error.
                Voluptatibus dignissimos molestias itaque, nihil expedita nulla nesciunt fugit officia magnam eos, hic ab similique iusto beatae quaerat odio earum delectus quia, aliquid doloremque incidunt asperiores! Officiis quas eaque nam!
              </p>
            </div>
          </Scrollbar>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(LandingPage)
