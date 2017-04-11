//increment likes
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index: index
	}
}
//add a comment
export function addComment(postID, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postID: postID, 
		author: author, 
		comment: comment
	}
}

//remove a comment
export function removeComment(postID, i) {
	return {
		type: 'REMOVE_COMMENT',
		postID: postID, 
		index: i
	}
}