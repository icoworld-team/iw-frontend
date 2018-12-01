import React from 'react'
import { connect } from 'react-redux'
import Post from '../Post'


function PostList (props:any) {
    props.onLoadMore !== undefined && props.scrollPos === 1 && props.onLoadMore();
    const sortedPosts = props.posts.slice().sort((a:any,b:any) => {
        const f = new Date(a.reposted_date).getTime() || new Date(a.date).getTime();
        const s = new Date(b.reposted_date).getTime() || new Date(b.date).getTime();
        return f - s;
    }).reverse();

    const posts = sortedPosts.map(function (post:any) {
        return <Post key={post.postId} post={post} updateData={props.updateData} pinPost={props.pinPost} location={props.location} />
    });
    
    return (
        <>
            {posts}
        </>
    )
}

const mapStateToProps = ({scroll}:any) => {
    return {
        scrollPos: scroll.top
    }
};

export default connect(mapStateToProps)(PostList);
