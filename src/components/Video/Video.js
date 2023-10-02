import './Video.scss';

function Video(props) {
	return (
		<div className="video">
			<div className="video-wrapper">
				<video
					className="video__img"
					poster={props.content.image}
					controls
				></video>
			</div>
		</div>
	);
}

export default Video;
