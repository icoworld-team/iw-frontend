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
  quote: {
    fontWeight: 800,
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

class MarketMonopolyPage extends React.Component<any> {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>

        <div className={classes.pageHeading}>
          <div className={classes.pageHeadingFilter} />
          <div className={classes.container} style={{display: 'flex', alignItems: 'flex-end'}}>
            <h1 className={classes.title} style={{marginBottom: '40px', color: '#fff', zIndex: 10}}>Market monopoly, or why we are developing the social network</h1>
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
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>Pitch for Investors</a></li>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>White Paper (download)</a></li>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>Financial model (download)</a></li>
              <li className={classes.infoItem}><a href="#" className={classes.infoLink}>How we are going to offer protection from scams</a></li>
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

export default withStyles(styles)(MarketMonopolyPage)
