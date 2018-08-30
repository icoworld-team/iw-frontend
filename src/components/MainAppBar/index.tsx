import React, {Component, ChangeEvent} from 'react'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Link} from "react-router-dom";
import './style.css'
import LanguageSelector from '../LanguageSelector'
import HeaderMessagesPopper from '../HeaderMessagesPopper'

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
		fontSize: '16px',
	},
	link: {
		color: '#fff',
		textDecoration: 'none',
	}
});

class MainAppBar extends Component<any> {
	state = {
		anchorEl: null,
		value: 0,
		open: false,
		menuOpen: false,
	};
	
	handleChange = (event: ChangeEvent, value: number) => {
		this.setState({ value });
	};

	handleClick = (event:any)=> {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose =()=> {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;
		const open = Boolean(this.state.anchorEl);

		return (
			<>
				<AppBar position="static">
					<Grid container>
						<Grid item xs={1} />
						<Grid item xs={10}>
							<ToolBar className={classes.toolBar}>
								<h2>icoWorld</h2>
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
										<Link className={classes.link} to="#">
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
								<div className="bar-icons">
									<LanguageSelector/>
									<HeaderMessagesPopper/>
									
									<IconButton
										aria-owns={open ? 'menu-appbar' : undefined}
										aria-haspopup="true"
										onClick={this.handleClick}
										color="inherit"
									>
										<AccountCircle/>
									</IconButton>
									<Menu
										id="menu-appbar"
										anchorEl={this.state.anchorEl}
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										open={open}
										onClose={this.handleClose}
									>
										<MenuItem onClick={this.handleClose}>Menu</MenuItem>
										<MenuItem onClick={this.handleClose}>Menu</MenuItem>
									</Menu>
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