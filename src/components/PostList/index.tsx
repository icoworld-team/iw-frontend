import React from 'react'
import Post from '../Post'

export default function PostList (props:any) {

    let posts = props.posts.slice().reverse();
    console.log(posts);
    posts = posts.map(function (post:any) {
        return <Post key={post.postId} post={post} authUserId={props.authUserId}/>
    });

    return (
        <>
            {posts}
        </>
    )
}