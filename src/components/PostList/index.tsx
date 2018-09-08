import React from 'react'
import Post from '../Post'

export default function PostList (props:any) {

    // const samplePosts = [
    //     {
    //         id: 1,
    //         userName: 'Ivan Fedotov',
    //         userLogin: '@iyufedotov',
    //         date: '01.09.2018',
    //         content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro
    //             impedit minus corrupti repellendus architecto alias voluptates, voluptate, ipsam
    //             iste dolores sequi culpa et! Perferendis fuga tenetur labore nihil earum
    //             architecto quod ducimus ratione quo repellendus, temporibus cum enim similique
    //             nam facilis ipsa dignissimos. Temporibus tempora corporis vero ab harum?`
    //     },
    //     {
    //         id: 2,
    //         userName: 'Ivan Fedotov',
    //         userLogin: '@iyufedotov',
    //         date: '01.09.2018',
    //         content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora nisi
    //             necessitatibus distinctio iure, perspiciatis delectus pariatur ab velit exercitationem?`
    //     },
    //     {
    //         id: 3,
    //         userName: 'Ivan Fedotov',
    //         userLogin: '@iyufedotov',
    //         date: '01.09.2018',
    //         content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ducimus
    //             magnam laborum possimus harum explicabo, placeat aliquid quod voluptatum mollitia
    //             dicta voluptates optio, consequuntur consectetur. Sed dolores quod enim ipsum,
    //             error fugiat officiis doloribus deleniti dolorum quidem mollitia dicta itaque
    //             culpa libero possimus minus modi perferendis fugit unde pariatur? Beatae
    //             consectetur aspernatur neque pariatur fugiat, esse cumque iusto tenetur magnam
    //             fuga obcaecati aut numquam officia quasi exercitationem rem minima architecto
    //             ad consequuntur sit totam optio! Laudantium suscipit, sequi illo optio ut ad,
    //             natus officia dolore minima culpa eaque! Reiciendis animi commodi mollitia
    //             voluptatibus cumque harum aut maxime optio, dolorem quae.`
    //     }
    // ];

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