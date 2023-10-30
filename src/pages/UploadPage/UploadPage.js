import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import './UploadPage.scss';
import uploadImg from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/publish.svg';



function UploadPage() {
  const [videosList, setVideosList] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/videos/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        setVideosList(response.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Upload");
    setUploadSuccess(true);
};



return (
  <>
    {uploadSuccess ? (
      <div className="upload__success-message">
        <h3>Success!</h3>
        <p>Your video has been uploaded successfully.</p>
        <button onClick={() => navigate('/')}>
          View Video
        </button>
      </div>
    ) : (
      <div className="upload">
        <header className="upload__header">
          <h1 className="upload__header-text">Upload Video</h1>
        </header>

        <main className="upload__main">
          <section className="upload__thumbnail">
            <h2>VIDEO THUMBNAIL</h2>
            <img src={uploadImg} alt="Upload image thumbnail" />
          </section>

          <section className="upload__forms">
            <div className="upload__forms-header">
              <label htmlFor="title">TITLE YOUR VIDEO</label>
              <input type="text" id="title" name="title" placeholder="Add a title to your video" />
            </div>
            <div className="upload__forms-text">
              <label htmlFor="desc">ADD A VIDEO DESCRIPTION</label>
              <textarea id="desc" name="desc" placeholder="Add a description to your video" />
            </div>
          </section>
        </main>

        <div className="button-container">
           <button 
            type="button" 
            onClick={() => navigate('/')} 
            className="upload__buttons-cancel"
          >
            CANCEL
          </button>
          <button 
            type="button" 
            onClick={handleSubmit} 
            className="upload__buttons-publish"
          >
            <img 
              src={uploadIcon} 
              alt="Publish icon" 
            />
            PUBLISH
          </button>
        </div>
      </div>
    )}
  </>
);
}

  

export default UploadPage;