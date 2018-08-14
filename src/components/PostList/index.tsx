import React from 'react'
import Post from '../Post'
import PostInput from '../PostInput'


export default function PostList () {

    const samplePosts = [
        {
            id: 1,
            username: 'Ivan Fedotov',
            login: '@iyufedotov',
            date: '25 minutes ago',
            body: `dasdasdsadasdasdasdsadsadsadsadsadsadasdasdasdasdsadsadasdsa
            asdasdasdasdadsadasdasdasdasdasdsadasdsadasdsadsadasdsadsadasdsadasd
            sadasdsadasdsadasdsadasdsadasdsadasdadsadasdsadasdasdasdasdasdasdsadsad`
        },
        {
            id: 2,
            username: 'Ivan Fedotov',
            login: '@iyufedotov',
            date: '28 minutes ago',
            body: `dasdasdsadasdasdasdsadsadsadsadsadsadasdasdasdasdsadsadasdsa
            asdasdasdasdadsadasdasdasdasdasdsadasdsadasdsadsadasdsadsadasdsadasd
            sadasdsadasdsadasdsadasdsadasdsadasdadsadasdsadasdasdasdasdasdasdsadsad`
        },
        {
            id: 3,
            username: 'Ivan Fedotov',
            login: '@iyufedotov',
            date: '28 minutes ago',
            body: `dasdasdsadasdasdasdsadsadsadsadsadsadasdasdasdasdsadsadasdsa
            asdasdasdasdadsadasdasdasdasdasdsadasdsadasdsadsadasdsadsadasdsadasd
            sadasdsadasdsadasdsadasdsadasdsadasdadsadasdsadasdasdasdasdasdasdsadsad`
        }
    ];

    const posts = samplePosts.map(function (post) {
        return <Post key={post.id} post={post}/>
    });

    return (
        <div>
            <PostInput/>
            {posts}
        </div>
    )
}