import React, {Component} from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fade from "@material-ui/core/Fade";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider'
import PortfolioChart from '../PortfolioChart'
import './style.css'


class Portfolio extends Component<any> {
    state={
        anchorEl: null,
        currency: 'USD',
        moreInfo: false
    };

    handleClick = (event:any)=> {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event:any)=> {
        if(event.target.id == "More"){
            this.setState({anchorEl: null, moreInfo: !this.state.moreInfo})
        }
        else {
            this.setState({ anchorEl: null, currency: event.target.id});
        }
    };

    render(){
        const {item} = this.props;
        return (
            <div className="portfolio">
                <div className="portfolio-heading">
                    <h2 className="portfolio-title">{item.title}</h2>
                    <IconButton aria-label="More" aria-owns={this.state.anchorEl ? 'fade-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                        <MoreVertIcon/>
                    </IconButton>
                    <Menu id="fade-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)}
                          onClose={this.handleClose} TransitionComponent={Fade}>
                        <MenuItem name="USD" id="USD" onClick={this.handleClose}>Price in USD</MenuItem>
                        <MenuItem name="BTH" id="BTH" onClick={this.handleClose}>Price in BTH</MenuItem>
                        <MenuItem name="ETH" id="ETH" onClick={this.handleClose}>Price in ETH</MenuItem>
                        <MenuItem id="More" onClick={this.handleClose}>More info</MenuItem>
                    </Menu>
                </div>
                <div className="portfolio-chart">
                   <PortfolioChart data={item.chartData} currency={this.state.currency}/>
                </div>
                <div className="more-info" hidden={!this.state.moreInfo}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Ticker</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Amount</TableCell>
                                <TableCell>Proportion</TableCell>
                                <TableCell>Change</TableCell>
                                <TableCell>%Change</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{item.tableData.ticker}</TableCell>
                                <TableCell>{item.tableData.price}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{item.tableData.ticker}</TableCell>
                                <TableCell>{item.tableData.price}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>{item.tableData.ticker}</TableCell>
                                <TableCell>{item.tableData.price}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                                <TableCell>{item.tableData.amount}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div>
                        <p>
                            {item.paragraph}
                        </p>
                    </div>
                </div>
                <Divider/>
            </div>
        )
    }
}

export default Portfolio