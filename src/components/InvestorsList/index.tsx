import React from "react";
import {connect} from "react-redux";
import Typography from '@material-ui/core/Typography'
import InvestorCard from '../InvestorCard'

class InvestorsList extends React.Component<any> {
    componentDidMount() {
        this.props.changeAmount(this.props.data.length);
    }

    componentDidUpdate(prevProps:any) {
        if(prevProps.data.length !== this.props.data.length) {
            this.props.changeAmount(this.props.data.length);
        }
        this.props.scrollPos === 1 && this.props.onLoadMore();
    }

    render() {
        const { data, classes } = this.props;
        const investors = data.map((investor:any) => <li key={investor.id} className={classes.investorsItem}><InvestorCard data={investor}/></li>);
        return investors.length ? investors : <Typography style={{padding: '15px'}} variant="subheading" align='center'>No results</Typography>
    }
}

const listmapStateToProps = ({investorsFilter, scroll}:any) => {
    return {
        scrollPos: scroll.top
    }
};

export default connect(listmapStateToProps)(InvestorsList);