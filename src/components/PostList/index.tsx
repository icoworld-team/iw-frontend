import React from 'react'
import Post from '../Post'

export default function PostList () {

    const samplePosts = [
        {
            id: 1,
            username: 'Ivan Fedotov',
            login: '@iyufedotov',
            date: '25 minutes ago',
            body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro
                impedit minus corrupti repellendus architecto alias voluptates, voluptate, ipsam
                iste dolores sequi culpa et! Perferendis fuga tenetur labore nihil earum
                architecto quod ducimus ratione quo repellendus, temporibus cum enim similique
                nam facilis ipsa dignissimos. Temporibus tempora corporis vero ab harum?`
        },
        {
            id: 2,
            username: 'Ivan Fedotov',
            login: '@iyufedotov',
            date: '28 minutes ago',
            body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora nisi
                necessitatibus distinctio iure, perspiciatis delectus pariatur ab velit exercitationem?`
        },
        {
            id: 3,
            username: 'Ivan Fedotov',
            login: '@iyufedotov',
            date: '28 minutes ago',
            body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ducimus
                magnam laborum possimus harum explicabo, placeat aliquid quod voluptatum mollitia
                dicta voluptates optio, consequuntur consectetur. Sed dolores quod enim ipsum,
                error fugiat officiis doloribus deleniti dolorum quidem mollitia dicta itaque
                culpa libero possimus minus modi perferendis fugit unde pariatur? Beatae
                consectetur aspernatur neque pariatur fugiat, esse cumque iusto tenetur magnam
                fuga obcaecati aut numquam officia quasi exercitationem rem minima architecto
                ad consequuntur sit totam optio! Laudantium suscipit, sequi illo optio ut ad,
                natus officia dolore minima culpa eaque! Reiciendis animi commodi mollitia
                voluptatibus cumque harum aut maxime optio, dolorem quae.`
        }
    ];

    const posts = samplePosts.map(function (post) {
        return <Post key={post.id} post={post}/>
    });

    return (
        <>
            {posts}
        </>
    )
}