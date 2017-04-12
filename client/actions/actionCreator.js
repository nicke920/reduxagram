//increment likes
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}
//add a comment
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId: postId, 
		author: author, 
		comment: comment
	}
}

//remove a comment
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		postId: postId, 
		i: i
	}
}