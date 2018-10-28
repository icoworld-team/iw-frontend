import React, {Component, ChangeEvent} from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Link} from "react-router-dom";
// import LanguageSelector from '../LanguageSelector'
import HeaderPopper from '../HeaderPopper'
import HeaderAccountMenu from '../HeaderAccountMenu'

const styles = (theme: Theme) => createStyles({
	toolBar: {
		display: 'flex',
		justifyContent: 'space-between',
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
    float: 'right',
    display: "inline-flex",
	}
});

class MainAppBar extends Component<any> {
	state = {
		anchorEl: null,
		value: 0,
		// open: false,
	};
	
	handleChange = (event: ChangeEvent, value: number) => {
		this.setState({ value });
	};

	// handleClick = (event:any)=> {
	// 	this.setState({ anchorEl: event.currentTarget });
	// };

	// handleClose =()=> {
	// 	this.setState({ anchorEl: null });
	// };

	render() {
		const { classes } = this.props;
		const { value } = this.state;
		// const open = Boolean(this.state.anchorEl);

		return (
			<>
				<AppBar style={{backgroundColor: 'rgb(48, 53, 70)', zIndex: 300}} position="static">
					<Grid container>
						<Grid item xs={1} />
						<Grid item xs={10}>
							<ToolBar className={classes.toolBar}>
								<a href='/news' style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit'}}>
									<img style={{width: '30px', marginRight: '10px'}} src="./icons/logo.svg" alt="logo"/>
									<h2 style={{fontFamily: 'HelveticaNeueCyr'}}>icoWorld</h2>
								</a>
								<div className="bar-menu">
									<Tabs
											value={value}
											onChange={this.handleChange}
											classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
									>
										<Link className={classes.link} to="/news">
											<Tab
												disableRipple
												classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer, label: classes.label }}
												label="News"
											/>
										</Link>
										<Link className={classes.link} to="/profile">
											<Tab
												disableRipple
												classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer, label: classes.label }}
												label="Profile"
											/>
										</Link>
										<Link className={classes.link} to="/messages">
											<Tab
												disableRipple
												classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer, label: classes.label }}
												label="Messages"
											/>
										</Link>
										<Link className={classes.link} to="/investors">
											<Tab
												disableRipple
												classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer, label: classes.label }}
												label="Investors"
											/>
										</Link>
										<Link className={classes.link} to="/projects">
											<Tab
												disableRipple
												classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer, label: classes.label }}
												label="Projects"
											/>
										</Link>
										<Link className={classes.link} to="/pools">
											<Tab
												disableRipple
												classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer, label: classes.label }}
												label="Pools"
											/>
										</Link>
									</Tabs>
								</div>
								<div className={classes.barIcons}>
									{/* <LanguageSelector/> */}
									{/*<HeaderPopper variant='notify'/>*/}
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