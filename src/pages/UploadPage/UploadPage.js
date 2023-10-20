import { useNavigate } from 'react-router-dom';

export default function UploadPage() {
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		alert('Video uploaded successfully! Redirecting to the homepage...');
		navigate.push('/');
	};

	return (
		<section className="upload-section">
  <header className="upload-header">
    <h1>Upload Video</h1>
  </header>

  <div className="upload-content">
    <div className="upload-thumbnail">
      <h2>VIDEO THUMBNAIL</h2>
      <div className="upload-video"></div>
    </div>

    <form className="upload-form">
      <label className="upload-label" htmlFor="video-title">
        TITLE YOUR VIDEO
      </label>
      <textarea
        id="video-title"
        className="upload-textarea title-textarea"
        name="name"
        rows="10"
        placeholder="Add a title to your video"
      ></textarea>

      <label className="upload-label" htmlFor="video-description">
        ADD A VIDEO DESCRIPTION
      </label>
      <textarea
        id="video-description"
        className="upload-textarea description-textarea"
        name="comment"
        rows="10"
        placeholder="Add a description of your video"
      ></textarea>
    </form>
  </div>

  <div className="upload-actions">
    <button type="submit" className="upload-btn publish-btn">PUBLISH</button>
    <button type="button" className="upload-btn cancel-btn">CANCEL</button>
  </div>

  <form className="extra-form" onSubmit={handleFormSubmit}>
    {/* NEED 2 ADD INPUT FIELDS HERE */}
    <button type="submit" className="upload-submit-btn">Upload</button>
  </form>
</section>
  )
  }