import React from 'react';

const Comments = React.createClass({
	renderComment(comment, i) {
		console.log(comment);
	},
	render() {
		return (
			<div className="comment">
				{this.props.postComments.map(this.renderComment)}
			</div>
		)
	}
})

export default Comments;