import React from 'react'
import Post from '../Post'

export default function PostList (props:any) {
    // let posts = props.posts.slice().reverse();
    const sortedPosts = props.posts.slice().sort((a:any,b:any) => {
        const f = new Date(a.reposted).getTime() || new Date(a.date).getTime();
        const s = new Date(b.reposted).getTime() || new Date(b.date).getTime();
        return f - s;
        // new Date(a.date).getTime() - new Date(b.date).getTime()
    }).reverse();
    const posts = sortedPosts.map(function (post:any) {
        return <Post key={post.postId} post={post}/>
    });
    return (
        <>
            {posts}
        </>
    )
}