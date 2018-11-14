import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Query } from "react-apollo";

const LoadingQuery = (props:any) => {
    return (
        <Query {...props}>
            {({loading, ...otherProps}) => {
                if (loading) return <div style={{textAlign: 'center', margin: '0 auto'}}><CircularProgress style={{color: '#2d3546'}}/></div>;
                return props.children(otherProps);
            }}
        </Query>
    )
};

export default LoadingQuery;
