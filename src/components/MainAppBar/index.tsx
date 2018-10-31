import React, {Component} from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import HeaderPopper from '../HeaderPopper'
import HeaderAccountMenu from '../HeaderAccountMenu'
import { Link } from 'react-router-dom';

const styles = (theme: Theme) => createStyles({
	toolBar: {
		display: 'flex',
		justifyContent: 'flex-start',
		padding: 0,
		maxWidth: '1100px',
		minWidth: '1000px',
		margin: '0 auto'
	},
	tabsIndicator: {
		display: 'none',
	},
	tabRoot: {
		textTransform: 'initial',
		minWidth: 'auto',
		fontWeight: theme.typography.fontWeightRegular,
	},
	labelContainer: {
		padding: '8px',
	},
	label: {
		fontSize: '18px',
		fontFamily: 'Open Sans',
	},
	link: {
		color: '#fff',
		textDecoration: 'none',
	},
	barIcons: {
    display: 'inline-flex',
    marginLeft: 'auto',
	}
});

class MainAppBar extends Component<any> {
	state = {
		anchorEl: null,
		value: 0,
		// open: false,
	};

	componentWillReceiveProps(nextProps: any) {
		this.setState({value: nextProps.tab});
	}

	LinkTab = (props: any) => {
		const { classes } = this.props;
		return <Tab
			component={Link}
			disableRipple
			{...props}
			classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer, label: classes.label }}
		/>;
	}

	TabContainer = (props: any) => {
		return (
			<Typography component="div" style={{ padding: 8 * 3 }}>
				{props.children}
			</Typography>
		);
	}

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<>
				<AppBar style={{backgroundColor: 'rgb(48, 53, 70)', zIndex: 300}} position="static">
					<Grid container>
						<Grid item xs={1} />
						<Grid item xs={10}>
							<ToolBar className={classes.toolBar}>
								<a href='/feed' style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
									<img style={{width: '30px', marginRight: '10px'}} src="./icons/logo.svg" alt="logo"/>
									<h2 style={{fontFamily: 'HelveticaNeueCyr'}}>icoWorld</h2>
								</a>
								<div style={{marginLeft: '130px'}}>
									<Tabs
											value={value}
											// onChange={this.handleChange}
											classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
									>
										<this.LinkTab label="News" to="/feed" />
										<this.LinkTab label="Profile" to="/profile" />
										<this.LinkTab label="Messages" to="/messages" />
										<this.LinkTab label="Investors" to="/investors" />
										<this.LinkTab label="Projects" to="/projects" />
										{/* <this.LinkTab label="Pools" to="/pools" /> */}
									</Tabs>
								</div>
								<div className={classes.barIcons}>
									<HeaderPopper variant='messages'/>
									<HeaderAccountMenu />
								</div>
							</ToolBar>
						</Grid>
						<Grid item xs={1} />
					</Grid>
				</AppBar>
			</>
		)
	}
}

export default withStyles(styles)(MainAppBar);