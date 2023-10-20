import './Comments.scss';

function Comment({ comment }) {
	const formattedDate = new Date(
		Number(comment.timestamp)
	).toLocaleDateString();

	return (
		<div className="comments-section" key={comment.id}>
			<div className="comments-user">
				<div className="comments-user__avatar"></div>
				<p className="comments-user__account">{comment.name}</p>
				<p className="comments-user__date">{formattedDate}</p>
			</div>
			<p className="comments-text">{comment.comment}</p>
		</div>
	);
}

function Comments(props) {
	return (
		<>
			{props.comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</>
	);
}

export default Comments;
