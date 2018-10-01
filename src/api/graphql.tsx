import gql from 'graphql-tag'

export const GET_CHATS = gql`
    query getChats($userId: ID!) {
        getChats(userId: $userId) {
            chatId
            parnter {
                id
                name
            }
            lastMessage {
                id
                author {
                    id
                    name
                }
                content
                date
            }
        }
    }
`;

export const GET_CHAT_MESSAGES = gql`
    query getChatMessages($input: ChatInput!) {
        getChatMessages(input: $input) {
            id
            author {
                id
                name
            }
            content
            date
        }
    }
`;

export const GET_INVESTORS = gql`
    query getInvestors($input: InvestorsFilterParamsInput!) {
        getInvestors(input: $input) {
            id
            name
            login
            countOfFollowers
        }
    }
`;

export const SEARCH_POST = gql`
    query searchPost($searchText: String!) {
        searchPost(searchText: $searchText) {
            postId
            userId
            userName
            userLogin
            date
            edited
            content
            likes
            tags
        }
    }
`;

export const CREATE_POOL = gql`
    mutation createPool($input: PoolInput!) {
        createPool(input: $input)
    }
`;

export const GET_POOL = gql`
	query getPool($poolId: ID!) {
		getPool(poolId: $poolId) {
			poolId
			poolName
			status
			ownerId
			ownerName
			projectName
			projectAdress
			poolSoftCap
			poolHardCap
			minDeposit
			maxDeposit
			endDate
			ownerComission
			iwComission
		}
	}
`;

export const POOL_SEARCH = gql`
	query searchPool($poolName: String!) {
		searchPool(poolName: $poolName) {
			poolName
			poolId
			ownerId
			ownerName
			projectName
			endDate
		}
	}
`;

export const DELETE_POST = gql`
	mutation deletePost($postId: ID!) {
		deletePost(postId: $postId)
	}
`;

export const EDIT_POST = gql`
	mutation editPost($input: PostEditInput!) {
		editPost(input: $input) {
			postId
			userId
			date
			content
			tags
		}
	}
`;

export const CREATE_COMMENT = gql`
	mutation createComment($input: CommentInput!) {
		createComment(input: $input) {
			Id
			userId
			postId
			userName
			userLogin
            date
            edited
            content
        }
	}
`;

export const GET_COMMENTS = gql`
	query getComments($postId: ID!) {
		getComments(postId: $postId) {
			Id
			userId
			postId
			userName
			userLogin
			date
			edited
			content
		}
	}
`;

export const SEARCH_POST_IN_PROFILE = gql`
	query searchPostInProfile($userId: ID!, $searchText: String!) {
		searchPostInProfile(userId: $userId, searchText: $searchText) {
			posts {
				postId
				userId
				userName
				userLogin
				date
				edited
				content
				likes
				tags
			}
			reposts {
				postId
				userId
				userName
				userLogin
				date
				edited
				content
				tags
				reposted
			}
		}
	}
`;

export const CREATE_POST = gql`
    mutation createPost($input: PostInput!) {
        createPost(input: $input){
            postId
            userId
            userName
            userLogin
            date
            edited
            content
            likes
            tags
        }
    }
`;

export const GET_USER = gql`
	query getUser($userId: ID!) {
		getUser(userId: $userId) {
			id
			name
			login
			email
			phone
			country
			city
			site
			clinks {
			    fb
			    linkedin
			    twitter
			}
			educations {
			    id
				name
				from
				to
			}
			jobs {
				id
				name
				from
				to
			}
			wallets {
				id
				kind
				address
			}
			notifications
			language
		}
	}
`;

export const GET_SUBSCRIBERS = gql`
	query getSubscribers($userId: ID!) {
		getSubscribers(userId: $userId) {
			id
			name
		}
	}
`;

export const GET_FOLLOWS = gql`
	query getFollows($userId: ID!) {
		getFollows(userId: $userId) {
			id
			name
		}
	}
`;

export const FOLLOW_USER = gql`
	mutation followUser($userId: ID!, $fanId: ID!) {
		followUser(userId: $userId, fanId: $fanId)
	}
`;

export const UNFOLLOW_USER = gql`
	mutation unfollowUser($userId: ID!, $fanId: ID!) {
		unfollowUser(userId: $userId, fanId: $fanId)
	}
`;

export const UPDATE_USER = gql`
	mutation updateUser($input: UserInput!) {
		updateUser(input: $input) {
		    id
			name
			login
			email
			phone
			country
			city
			site
			clinks {
			    fb
			    linkedin
			    twitter
			}
			educations {
				id
				name
				from
				to
			}
			jobs {
				id
				name
				from
				to
			}
			wallets {
				id
				kind
				address
			}
			notifications
			language
		}
	}
`;

export const ADD_JOB = gql`
	mutation addJob($input: ExpirienceInput!,) {
		addJob(input: $input)
	}
`;

export const REMOVE_JOB = gql`
	mutation removeJob($userId: ID!, $id: ID!) {
		removeJob(userId: $userId, id: $id)
	}
`;

export const ADD_EDUCATION = gql`
	mutation addEducation($input: ExpirienceInput!,) {
		addEducation(input: $input)
	}
`;

export const REMOVE_EDUCATION = gql`
	mutation removeEducation($userId: ID!, $id: ID!) {
		removeEducation(userId: $userId, id: $id)
	}
`;

export const LIKE_POST = gql`
	mutation likePost($input: PostLikeInput!) {
		likePost(input: $input)
	}
`;

export const REPOST = gql`
	mutation rePost($userId: ID!, $postId: ID!) {
		rePost(userId: $userId, postId: $postId)
	}
`;