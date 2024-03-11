import './CommentForm.scss';
import Comment from '../../assets/Icons/add_comment.svg';

export default function CommentForm(props) {
	return (
		<form className="comments-form">
			<div className="comments__avatar"></div>
			<label className="comments__label" htmlFor="text">
				JOIN THE CONVERSATION
			</label>
			<textarea
				className="comments__input"
				id="text"
				placeholder="Add a new comment"
			></textarea>
			<button
				onClick={(event) => event.preventDefault()}
				className="comments__button"
			>
				<img
					className="comments__add-comment"
					src={Comment}
					alt="Add Comment"
				></img>
				COMMENT
			</button>
		</form>
	);
}
