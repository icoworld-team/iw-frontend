import gql from 'graphql-tag'

export const GET_CHATS = gql`
    query getChats($userId: ID!) {
        getChats(userId: $userId) {
            chatId
            parnter {
                id
                name
                avatar
            }
            messages {
                id
                author {
                    id
                    name
                    avatar
                }
                content
                read
                date
            }
        }
    }
`;

export const GET_CHAT_MESSAGES = gql`
    query getChatMessages($input: ChatInput!) {
        getChatMessages(input: $input) {
            nextMessages,
            messages {
                id
                author {
                    id
                    name
                    avatar
                }
                content
                read
                date
            }
            
        }
    }
`;

export const GET_INVESTORS = gql`
    query getInvestors($input: InvestorsFilterParamsInput!) {
        getInvestors(input: $input) {
            id
            name
            login
            avatar
            countOfFollowers
        }
    }
`;

export const SEARCH_POST = gql`
    query searchPost($searchText: String!, $skip: Int!, $limit: Int!) {
        searchPost(searchText: $searchText, skip: $skip, limit: $limit) {
            postId
            userId
            userName
            userLogin
            avatar
            date
            edited
			content
			comments
            likes
            tags
            attachments
            reposted
        }
    }
`;

export const GET_FOLLOWS_POSTS = gql`
    query getFollowsPosts($userId: ID!) {
        getFollowsPosts(userId: $userId) {
            postId
            userId
			userName
			userLogin
			avatar
            date
            edited
			content
			comments
            likes
            tags
            attachments
            reposted
        }
    }
`;

export const GET_TOP_USERS = gql`
    query getTopUsers($flag: Boolean!) {
        getTopUsers(flag: $flag) {
            id
			name
			login
			country
			city
			top
			photo
			avatar
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
	mutation deletePost($id: ID!) {
		deletePost(id: $id)
	}
`;

export const PIN_POST = gql`
	mutation pinPost($id: ID!, $pin: Boolean!) {
		pinPost(id: $id, pin: $pin)
	}
`;
export const MAKE_TOP_USER = gql`
	mutation makeTopUser($userId: ID!, $flag: Boolean!) {
		makeTopUser(userId: $userId, flag: $flag)
	}
`;

export const CREATE_NEWS = gql`
	mutation createNews($title: String!) {
		createNews(title: $title)
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
	mutation createComment($postId: ID!, $content: String!) {
		createComment(postId: $postId, content: $content) {
			Id
			userId
			postId
			userName
			userLogin
			avatar
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
			avatar
			date
			edited
			content
		}
	}
`;

export const SEARCH_POST_IN_PROFILE = gql`
	query searchPostInProfile($userId: ID!, $searchText: String!, $skip: Int!, $limit: Int!) {
		searchPostInProfile(userId: $userId, searchText: $searchText, skip: $skip, limit: $limit) {
			posts {
				postId
				userId
				userName
				userLogin
				avatar
				date
				edited
				content
				likes
				comments
				tags
				attachments
				reposted
			}
			reposts {
			    id
				postId
				userId
				userName
				userLogin
				avatar
				date
				edited
				content
				tags
				reposted
				reposted_date
				likes
				attachments
			}
		}
	}
`;

export const GET_POST = gql`
	query getPost($postId: ID!) {
		getPost(postId: $postId) {
			postId
			userId
			userName
			userLogin
			avatar
			date
			edited
			content
			comments
			likes
			tags
			attachments
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
            avatar
            date
            edited
            content
            comments
            likes
            tags
            attachments
            reposted
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
			photo
			avatar
			country
			city
			site
			pined_post
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
			pmsenders
			commenters
			twoFactorAuth
			about
			language
			pwdUpdatedAt
		}
	}
`;

export const GET_SUBSCRIBERS = gql`
	query getSubscribers($userId: ID!) {
		getSubscribers(userId: $userId) {
			id
			name
			photo
			avatar
		}
	}
`;

export const GET_FOLLOWS = gql`
	query getFollows($userId: ID!) {
		getFollows(userId: $userId) {
			id
			name
			photo
			avatar
		}
	}
`;

export const GET_NEWS = gql`
	query getNews {
		getNews {
			id
			title
			date
		}
	}
`;

export const FOLLOW_USER = gql`
	mutation followUser($userId: ID!) {
		followUser(userId: $userId)
	}
`;

export const UNFOLLOW_USER = gql`
	mutation unfollowUser($userId: ID!) {
		unfollowUser(userId: $userId)
	}
`;

export const UPDATE_USER = gql`
	mutation updateUser($input: UserInput!) {
		updateUser(input: $input) {
			name
			login
			email
			phone
			photo
			avatar
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
			pmsenders
			commenters
			twoFactorAuth
			about
			language
		}
	}
`;

export const ADD_JOB = gql`
	mutation addJob($input: ExpirienceInput!,) {
		addJob(input: $input)
	}
`;

export const UPDATE_JOB = gql`
	mutation updateJob($id: ID!, $input: ExpirienceInput!) {
		updateJob(id: $id, input: $input)
	}
`;

export const REMOVE_JOB = gql`
	mutation removeJob($id: ID!) {
		removeJob(id: $id)
	}
`;

export const ADD_EDUCATION = gql`
	mutation addEducation($input: ExpirienceInput!,) {
		addEducation(input: $input)
	}
`;

export const UPDATE_EDUCATION = gql`
	mutation updateEducation($id: ID!, $input: ExpirienceInput!) {
		updateEducation(id: $id, input: $input)
	}
`;

export const REMOVE_EDUCATION = gql`
	mutation removeEducation($id: ID!) {
		removeEducation(id: $id)
	}
`;

export const LIKE_POST = gql`
	mutation likePost($id: ID!, $like: Boolean!) {
		likePost(id: $id, like: $like)
	}
`;

export const REPOST = gql`
	mutation rePost($postId: ID!) {
		rePost(postId: $postId)
	}
`;

export const DELETE_REPOST = gql`
	mutation deleteRePost($id: ID!) {
		deleteRePost(id: $id)
	}
`;

export const SET_PM_SENDERS = gql`
	mutation setPMSendersMode($mode: String!) {
		setPMSendersMode(mode: $mode)
	}
`;

export const SET_COMMENTERS = gql`
	mutation setCommentersMode($mode: String!) {
		setCommentersMode(mode: $mode)
	}
`;

export const UPLOAD_FILE = gql`
	mutation uploadFile($file: Upload!) {
		uploadFile(file: $file)
	}
`;

export const LIKE_REPOST = gql`
	mutation likeRePost($id: ID!, $like: Boolean!) {
		likeRePost(id: $id, like: $like)
	}
`;

export const GET_POPULAR_TAGS = gql`
	query getPopularTags($from: String!, $to: String!) {
		getPopularTags(from: $from, to: $to)
	}
`;

export const ADD_IMAGE = gql`
	mutation addImage($postId: ID!, $imageId: ID!) {
		addImage(postId: $postId, imageId: $imageId)
	}
`;

export const SEARCH_FOLLOW_POSTS = gql`
    query searchInFollowsPosts($userId: ID!, $txt: String!, $skip: Int!, $limit: Int!) {
        searchInFollowsPosts(userId: $userId, txt: $txt, skip: $skip, limit: $limit) {
            postId
            userId
			userName
			userLogin
			avatar
            date
            edited
			content
			comments
            likes
            tags
            attachments
            reposted
        }
    }
`;

export const COMPLAIN_POST = gql`
	query complainPost($postId: ID!, $content: String!) {
		complainPost(postId: $postId, content: $content)
	}
`;

export const COMPLAIN_USER = gql`
	query complainUser($userId: ID!, $content: String!) {
		complainUser(userId: $userId, content: $content)
	}
`;