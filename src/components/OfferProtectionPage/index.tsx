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
    background: 'url("./page.jpg") 50% 70%',
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
});

class OfferProtectionPage extends React.Component<any> {

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

                Our plan for doing this is as follows:
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
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>Financial model (download)</a></li>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>Market monopoly, or why we are developing the social network</a></li>
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
      </div>
    )
  }
}

export default withStyles(styles)(OfferProtectionPage)
