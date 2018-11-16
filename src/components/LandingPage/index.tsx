import React from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Scrollbar from "react-custom-scrollbars";
import { FormattedMessage } from 'react-intl';
import { IntlProvider } from 'react-intl';
import en from '../../i18n/en';
import ru from '../../i18n/ru';

const styles = (theme: Theme) => createStyles({
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
    color: '#2d3546',
  },
  section: {
    width: '100%',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
  },
  header: {
    position: 'fixed',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 100,
  },
  headerContainer: {
    maxWidth: '1100px',
    width: '95%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',

    [theme.breakpoints.down('xs')]: {
      padding: '8px 0',
      flexDirection: 'column',
    },
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',

    [theme.breakpoints.down('xs')]: {
      marginBottom: '7px',
    },
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

    [theme.breakpoints.down('xs')]: {
      marginRight: '15px',
      fontSize: '14px',
    },
  },

  firstSection: {
    paddingTop: '280px',
    paddingBottom: '70px',

    [theme.breakpoints.down('sm')]: {
      paddingTop: '230px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '180px',
    },
  },

  title: {
    fontSize: '36px',
    lineHeight: '45px',
    fontWeight: 800,
    textAlign: 'center',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
      lineHeight: '36px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
      lineHeight: '26px',
    },
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    textAlign: 'center',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '22px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
      lineHeight: '20px',
    },
  },
  buttonsList: {
    display: 'flex',

    [theme.breakpoints.down('xs')]: {
      width: '350px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  buttonsItem: {
    marginRight: '20px',

    [theme.breakpoints.down('xs')]: {
      marginRight: '0',

      '&:first-child': {
        marginRight: '10px',
      },

      '&:last-child': {
        marginTop: '10px',
      },
    },

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

    [theme.breakpoints.down('xs')]: {
      width: '140px',
      height: '38px',
      fontSize: '14px',
    },

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

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  solutionsItem: {
    textAlign: 'center',
    marginRight: '20px',
    width: '33.3%',

    '&:last-child': {
      marginRight: 0,
    },

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: 0,
      marginBottom: '40px',

      '&:last-child': {
        marginBottom: 0,
      },
    },
  },
  peoplesImg: {
    width: '170px',

    [theme.breakpoints.down('sm')]: {
      width: '150px',
    },
  },
  shieldImg: {
    width: '150px',

    [theme.breakpoints.down('sm')]: {
      width: '135px',
    },
  },
  walletImg: {
    width: '170px',

    [theme.breakpoints.down('sm')]: {
      width: '150px',
    },
  },
  solutionsText: {
    display: 'block',
    color: '#fff',
    height: '68px',
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: '60px',

    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '180px',
      marginTop: '40px',
      fontSize: '24px',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '15px',
      fontSize: '20px',
      width: 'auto',
    },
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

    [theme.breakpoints.down('sm')]: {
      width: '145px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  roadmapCenter: {
    marginRight: '90px',
    marginLeft: '210px',
    width: '4px',

    [theme.breakpoints.down('sm')]: {
      marginRight: '50px',
      marginLeft: '120px',
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: '20px',
      marginLeft: 0,
    },
  },
  roadmapRight: {
    marginTop: '15px',
    width: '400px',

    [theme.breakpoints.down('sm')]: {
      width: '230px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '14px',
      marginTop: '5px',
    },
  },
  roadmapRightItem: {
    marginBottom: '15px',
    '&:first-child': {
      display: 'none',
    },
    '&:last-child': {
      marginBottom: '20px',
    },

    [theme.breakpoints.down('xs')]: {
      marginBottom: '8px',

      '&:first-child': {
        display: 'list-item',
        fontSize: '16px',
        fontWeight: 600,
        marginBottom: '15px',
      },
      '&:last-child': {
        marginBottom: '12px',
      },
    },
  },

  photosList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',

    [theme.breakpoints.down(1040)]: {
      width: '550px',
      justifyContent: 'space-around',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      flexDirection: 'column',
    },
  },
  photosItem: {
    marginRight: '35px',
    textAlign: 'center',
    
    '&:last-child': {
      marginRight: 0,
    },

    [theme.breakpoints.down(1040)]: {
      '&:nth-child(2)': {
        marginRight: 0,
      },
      '&:nth-child(3)': {
        marginTop: '30px',
      },
      '&:last-child': {
        marginTop: '30px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      marginTop: '30px',

      '&:first-child': {
        marginTop: 0,
      },
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

  progressBarContainer: {  
    position: 'relative',
    marginRight: '20px',

    [theme.breakpoints.down('xs')]: {
      marginRight: '10px',
    },

    '&:last-child': {
      marginRight: 0,
    },
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
    zIndex: 110,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  popup: {
    width: '850px',
    backgroundColor: '#fff',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
});

class LandingPage extends React.Component<any> {
  state = {
    mins: 0,
    hours: 0,
    days: 0,
    open: false,
    lang: localStorage.getItem('lang'),
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
      <IntlProvider locale="en" messages={this.state.lang === 'en' ? en : ru}>
      <Scrollbar autoHeight={true} autoHeightMax={'100vh'} renderThumbVertical={this.renderThumbVertical}>
        <div className={classes.wrapper} id="first">

          <header className={classes.header} data-to='first' onClick={this.handleClick}>
            <div className={classes.headerContainer}>
              <span data-to='first' onClick={this.handleClick} className={classes.headerLeft}>
                <img data-to='first' onClick={this.handleClick} style={{width: '30px', marginRight: '10px'}} src="./icons/logo.svg" alt="logo"/>
                <h2 data-to='first' onClick={this.handleClick} style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
              </span>
              <div className={classes.headerLinks}>
              {this.state.lang === 'en' ? 
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
                    <li className={classes.headerLinksItem} style={{marginLeft: '5px'}}>
                      <span onClick={() => {localStorage.setItem('lang', 'ru'), this.setState({lang: 'ru'})}}>EN</span>
                    </li>
                  </ul>
                  :
                  <ul className={classes.headerLinksList}>
                    <li className={classes.headerLinksItem}>
                      <span data-to='solutions' onClick={this.handleClick}>Решения</span>
                    </li>
                    <li className={classes.headerLinksItem}>
                      <span data-to='roadmap' onClick={this.handleClick}>Дорожная карта</span>
                    </li>
                    <li className={classes.headerLinksItem}>
                      <span data-to='team' onClick={this.handleClick}>Команда</span>
                    </li>
                    <li className={classes.headerLinksItem}>
                      <span data-to='contacts' onClick={this.handleClick}>Контакты</span>
                    </li>
                    <li className={classes.headerLinksItem}>
                      <span onClick={() => {localStorage.setItem('lang', 'en'), this.setState({lang: 'en'})}}>RU</span>
                    </li>
                  </ul>
                }
              </div>
            </div>
          </header>

          <div className={`${classes.section} ${classes.firstSection}`}>
            <div className={classes.container}>
              <h2 className={classes.title}><FormattedMessage id='icoworld.desc' defaultMessage="" /></h2>
              <h3 className={classes.subtitle} style={{marginTop: '60px'}}><FormattedMessage id='private.sale.start' defaultMessage="" /></h3>
              
              <ul style={{display: 'flex', marginTop: '60px'}}>
                <li className={classes.progressBarContainer}>
                  <span className={classes.progressText}>
                    <span className={classes.amount}>{this.state.days}</span>
                    <span className={classes.text}><FormattedMessage id='days' defaultMessage="" /></span>
                  </span>
                  <svg className={classes.progressSvg}>
                    <circle className={classes.circle} r="45%" cx="50%" cy="50%" fill="#fafafa" stroke="#e5e5e5"></circle>
                    <circle style={{strokeDashoffset: (283 - (this.state.days / 50) * 283)}}
                      className={`${classes.progressbar} ${classes.circle}`} r="45%" cx="50%" cy="50%" fill="transparent" stroke="#2d3546" />
                  </svg>
                </li>
                <li className={classes.progressBarContainer}>
                  <span className={classes.progressText}>
                    <span className={classes.amount}>{this.state.hours}</span>
                    <span className={classes.text}><FormattedMessage id='hours' defaultMessage="" /></span>
                  </span>
                  <svg className={classes.progressSvg}>
                    <circle className={classes.circle} r="45%" cx="50%" cy="50%" fill="#fafafa" stroke="#e5e5e5"></circle>
                    <circle style={{strokeDashoffset: (283 - (this.state.hours / 24) * 283)}}
                      className={`${classes.progressbar} ${classes.circle}`} r="45%" cx="50%" cy="50%" fill="transparent" stroke="#2d3546" />
                  </svg>
                </li>
                <li className={classes.progressBarContainer}>
                  <span className={classes.progressText}>
                    <span className={classes.amount}>{this.state.mins}</span>
                    <span className={classes.text}><FormattedMessage id='minutes' defaultMessage="" /></span>
                  </span>
                  <svg className={classes.progressSvg}>
                    <circle className={classes.circle} r="45%" cx="50%" cy="50%" fill="#fafafa" stroke="#e5e5e5"></circle>
                    <circle style={{strokeDashoffset: (283 - (this.state.mins / 60) * 283)}}
                    className={`${classes.progressbar} ${classes.circle}`} r="45%" cx="50%" cy="50%" fill="transparent" stroke="#2d3546" />
                  </svg>
                </li>
              </ul>
              
              <div className={classes.buttons} style={{marginTop: '60px'}}>
                <ul className={classes.buttonsList}>
                  <li className={classes.buttonsItem}><a className={`${classes.buttonLink} ${classes.buttonLinkOutline}`} href={this.state.lang === 'en' ? "./White Paper (english).pdf" : "./White Paper (rus).pdf"} download><FormattedMessage id='white.paper' defaultMessage="" /></a></li>
                  <li className={classes.buttonsItem}><a className={`${classes.buttonLink} ${classes.buttonLinkOutline}`} href="/pitch" target="_blank"><FormattedMessage id='pitch' defaultMessage="" /></a></li>
                  <li className={classes.buttonsItem}><a className={`${classes.buttonLink} ${classes.buttonLinkFill}`} href="http://icoworld.network/" target="_blank"><FormattedMessage id='mvp' defaultMessage="" /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={classes.section} id="solutions" style={{backgroundColor: '#2d3546', paddingTop: '80px', paddingBottom: '80px'}}>
            <div className={classes.container}>
              <h2 className={classes.title} style={{color: '#fff'}}><FormattedMessage id='our.solutions' defaultMessage="" /></h2>
              <div className={classes.solutions} style={{marginTop: '80px', width: '100%'}}>
                <ul className={classes.solutionsList}>
                  <li className={classes.solutionsItem}>
                    <img className={classes.peoplesImg} src="./icons/investors.svg" alt="investors"/>
                    <span className={classes.solutionsText}><FormattedMessage id='investor.collaboration' defaultMessage="" /></span>
                  </li>
                  <li className={classes.solutionsItem}>
                    <img className={classes.shieldImg} src="./icons/shield.svg" alt="shield"/>
                    <span className={classes.solutionsText}><FormattedMessage id='scam.protection' defaultMessage="" /></span>
                  </li>
                  <li className={classes.solutionsItem}>
                    <img className={classes.walletImg} src="./icons/wallet.svg" alt="wallet"/>
                    <span className={classes.solutionsText}><FormattedMessage id='asset.management' defaultMessage="" /></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={classes.section} style={{paddingTop: '80px'}} id="roadmap">
            <li className={classes.container}>
              <h2 className={classes.title}><FormattedMessage id='roadmap' defaultMessage="" /></h2>
              <ul className={classes.roadmapList} style={{marginTop: '40px'}}>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}><FormattedMessage id='roadmap.first' defaultMessage="" /></div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#7ED321'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.first' defaultMessage="" /></li>

                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.first.item.first' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.first.item.second' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.first.item.third' defaultMessage="" /></li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}><FormattedMessage id='roadmap.second' defaultMessage="" /></div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#7ED321'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.second' defaultMessage="" /></li>

                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.second.item.first' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.second.item.second' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.second.item.third' defaultMessage="" /></li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}><FormattedMessage id='roadmap.third' defaultMessage="" /></div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.third' defaultMessage="" /></li>

                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.third.item.first' defaultMessage="" /></li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}><FormattedMessage id='roadmap.four' defaultMessage="" /></div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.four' defaultMessage="" /></li>

                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.four.item.first' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.four.item.second' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.four.item.third' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.four.item.four' defaultMessage="" /></li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}><FormattedMessage id='roadmap.five' defaultMessage="" /></div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.five' defaultMessage="" /></li>

                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.five.item.first' defaultMessage="" /></li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}><FormattedMessage id='roadmap.six' defaultMessage="" /></div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.six' defaultMessage="" /></li>

                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.six.item.first' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.six.item.second' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.six.item.third' defaultMessage="" /></li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}><FormattedMessage id='roadmap.seven' defaultMessage="" /></div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.seven' defaultMessage="" /></li>
                    
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.seven.item.first' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.seven.item.second' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.seven.item.third' defaultMessage="" /></li>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.seven.item.four' defaultMessage="" /></li>
                  </ul>
                </li>

                <li className={classes.roadmapItem}>
                  <div className={classes.roadmapLeft}><FormattedMessage id='roadmap.eight' defaultMessage="" /></div>
                  <div className={classes.roadmapCenter} style={{backgroundColor: '#FECD08'}} />
                  <ul className={classes.roadmapRight}>
                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.eight' defaultMessage="" /></li>

                    <li className={classes.roadmapRightItem}><FormattedMessage id='roadmap.eight.item.first' defaultMessage="" /></li>
                  </ul>
                </li>

              </ul>
            </li>
          </div>

          <div className={classes.section} style={{paddingTop: '80px'}} id="team">
            <div className={classes.container}>
              <h2 className={classes.title}><FormattedMessage id='team' defaultMessage="" /></h2>
              
              <ul className={classes.photosList} style={{marginTop: '40px'}}>
                <li className={classes.photosItem}>
                  <div className={classes.itemPhoto}><img src="./Ivan.jpg" style={{width: '100%', transform: 'translateY(-30px)'}} /></div>
                  <p className={classes.itemName}><FormattedMessage id='ivan.fedotov' defaultMessage="" /></p>
                  <p style={{marginBottom: '10px'}}><FormattedMessage id='ivan.fedotov.desc' defaultMessage="" /></p>

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
                  <p className={classes.itemName}><FormattedMessage id='aleksey.rezvov' defaultMessage="" /></p>
                  <p style={{marginBottom: '10px'}}><FormattedMessage id='aleksey.rezvov.desc' defaultMessage="" /></p>

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
                  <p className={classes.itemName}><FormattedMessage id='nikolay.beschastny' defaultMessage="" /></p>
                  <p style={{marginBottom: '10px'}}><FormattedMessage id='nikolay.beschastny.desc' defaultMessage="" /></p>

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
                  <p className={classes.itemName}><FormattedMessage id='aleksandr.saveliev' defaultMessage="" /></p>
                  <p style={{marginBottom: '10px'}}><FormattedMessage id='aleksandr.saveliev.desc' defaultMessage="" /></p>

                  <ul style={{display: 'flex', justifyContent: 'center'}}>
                    <li className={classes.teamSocialsItem}>
                      <a href='https://t.me/an_saveliev' target="_blank" style={{textDecoration: 'none'}}>
                        <img src="./icons/telegram.png" alt="telegram" style={{width: '25px'}} />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <h2 className={classes.title} style={{marginTop: '80px'}} id="contacts"><FormattedMessage id='join.us' defaultMessage="" /></h2>

              <div className={classes.socials} style={{marginTop: '40px'}}>
                <ul className={classes.socialsList} style={{display: 'flex'}}>
                  <li className={classes.socialsItem}>
                    <a href='https://github.com/pyshopml2' target="_blank" style={{textDecoration: 'none'}}>
                      <img src="./icons/github.svg" alt="github"/>
                    </a>
                  </li>
                  <li className={classes.socialsItem}>
                    <a href={this.state.lang === 'en' ? "https://t.me/icoWorld_EN" : "https://t.me/icoWorld_RU"} target="_blank" style={{textDecoration: 'none'}}>
                      <img src="./icons/telegram.svg" alt="telegram"/>
                    </a>
                  </li>
                  <li className={classes.socialsItem}>
                    <a href={this.state.lang === 'en' ? "https://bitcointalk.org/index.php?topic=4954870.msg44647378#msg44647378" : "https://bitcointalk.org/index.php?topic=4951081.msg44619247#msg44619247"} target="_blank" style={{textDecoration: 'none'}}>
                      <img src="./icons/bitcoin.svg" alt="bitcoin"/>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          
          <footer className={classes.footer}>
            <div className={classes.footerContainer}>
              <div className={classes.footerLeft}>
                <span data-to='first' onClick={this.handleClick} style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
                  <img data-to='first' onClick={this.handleClick} style={{width: '30px', marginRight: '10px'}} src="./icons/logo.svg" alt="logo"/>
                  <h2 data-to='first' onClick={this.handleClick} style={{fontFamily: 'HelveticaNeueCyr', margin: 0}}>icoWorld</h2>
                </span>

                <span className={classes.footerDescription}><FormattedMessage id='icoworld.desc' defaultMessage="" /></span>
              </div>
              <div className={classes.footerRight}>
                <ul className={classes.footerSections}>
                  <li className={classes.footerSectionsItem}>
                    <span className={classes.footerSectionsTitle}>Product</span>

                    <a className={classes.footerSectionsLink} href={this.state.lang === 'en' ? "./White Paper (english).pdf" : "./White Paper (rus).pdf"} download>White Paper</a>
                    <a className={classes.footerSectionsLink} target="_blank" href="/pitch">Pitch for Investors</a>
                    <a className={classes.footerSectionsLink} href="http://www.icoworld.network" target="_blank">MVP</a>
                  </li>

                  <li className={classes.footerSectionsItem}>
                    <span className={classes.footerSectionsTitle}>Social</span>

                    <a className={classes.footerSectionsLink} target="_blank" href={this.state.lang === 'en' ? "https://bitcointalk.org/index.php?topic=4954870.msg44647378#msg44647378" : "https://bitcointalk.org/index.php?topic=4951081.msg44619247#msg44619247"}>Bitcointalk</a>
                    <a className={classes.footerSectionsLink} target="_blank" href="https://github.com/pyshopml2">GitHub</a>
                    <a className={classes.footerSectionsLink} target="_blank" href={this.state.lang === 'en' ? "https://t.me/icoWorld_EN" : "https://t.me/icoWorld_RU"}>Telegram</a>
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
      </IntlProvider>
    )
  }
}

export default withStyles(styles)(LandingPage)
