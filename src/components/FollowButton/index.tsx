import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Mutation } from 'react-apollo'
import { FOLLOW_USER, UNFOLLOW_USER } from '../../api/graphql'
import { connect } from 'react-redux'

class FollowButton extends Component<any> {
    state = {
        status: this.props.followers.findIndex((user:any) => user.id === this.props.authUser.id) === -1 ? false : true
    };

    render() {
        const mutation = this.state.status ? UNFOLLOW_USER : FOLLOW_USER;
        const text = this.state.status ? 'Unfollow' : 'Follow';
        const variant = this.state.status ? 'outlined' : 'contained';
        const color = this.state.status ? 'outline-button' : 'fill-button';

        return (
            <Mutation mutation={mutation} onCompleted={() => {
                this.setState((state:any) => ({
                    status: !state.status
                }));
            }} onError={(error)=>console.log(error)}>
                {followUser => (
                    <Button variant={variant} color="secondary" size="small" className={`button ${this.props.style} ${color}`}
                            onClick={() => followUser({variables: {userId: this.props.id, fanId: this.props.authUser.id}})}>
                        {text}
                    </Button>
                )}
            </Mutation>
        )
    }
}

const mapStateToProps = ({auth}:any) => {
    return {
        authUser: auth.authUser
    }
};

export default connect(mapStateToProps)(FollowButton)