import React from 'react'
import MainAppBar from '../MainAppBar'
import Grid from '@material-ui/core/Grid'
import InvestorCard from '../InvestorCard'
import Typography from '@material-ui/core/Typography'
import InvestorsFilter from '../InvestorsFilter'
import './style.css'

function InvestorsPage () {
        const data = {
            name: 'Paul Smith',
            login: '@paul',
            followers: 75
        };
        return (
            <div>
                <MainAppBar/>
                <Grid container spacing={0}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        <div className="page-content">
                            <div className="investors-block">
                                <div className="block-label">
                                    <Typography variant="subheading" align='center'>403 investors, 20 shows</Typography>
                                </div>
                                <div className="investors">
                                    <div className="investor-card"><InvestorCard data={data}/></div>
                                    <div className="investor-card"><InvestorCard data={data}/></div>
                                    <div className="investor-card"><InvestorCard data={data}/></div>
                                    <div className="investor-card"><InvestorCard data={data}/></div>
                                    <div className="investor-card"><InvestorCard data={data}/></div>
                                    <div className="investor-card"><InvestorCard data={data}/></div>
                                </div>
                            </div>
                            <div className="filter-block">
                                <div className="block-label">
                                    <Typography variant="subheading" align='center'>Filters</Typography>
                                </div>
                                <InvestorsFilter/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </div>
        )
}

export default InvestorsPage