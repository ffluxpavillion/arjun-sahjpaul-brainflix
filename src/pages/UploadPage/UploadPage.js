import { useNavigate } from 'react-router-dom';

function UploadPage() {
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		alert('Video uploaded successfully! Redirecting to the homepage...');
		navigate.push('/');
	};

	return (
		<div>
			<div className="upload">
				<h1 className="upload__title">Upload Video</h1>
				<div className="upload__big-container">
					<div className="upload__video-container">
						<h2 className="upload__subtitle">VIDEO THUMBNAIL</h2>
						<div className="upload__video"></div>
					</div>
					<form className="upload__input-container">
						<h5 className="upload__input-container--text">TITLE YOUR VIDEO</h5>
						<textarea
							className="upload__text-container upload__text-container--one"
							name="name"
							rows="10"
							cols="50"
							placeholder="Add a title to your video"
						></textarea>
						<h5 className="upload__input-container--text">
							ADD A VIDEO DESCRIPTION
						</h5>
						<textarea
							className="upload__text-container upload__text-container--two"
							name="comment"
							rows="10"
							cols="50"
							placeholder="Add a description of your video"
						></textarea>
					</form>
				</div>
				<div className="upload__button-container">
					<button className="upload__button-container--publish">PUBLISH</button>
					<button className="upload__button-container--cancel">CANCEL</button>
				</div>
			</div>
			<form onSubmit={handleFormSubmit}>
				{/* Add your input fields */}
				<button type="submit">Upload</button>
			</form>
		</div>
	);
}

export default UploadPage;
