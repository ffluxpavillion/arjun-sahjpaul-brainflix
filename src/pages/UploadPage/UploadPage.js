import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './UploadPage.scss';
import uploadImg from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/publish.svg';

const API_KEY = "0352af1a-7d25-4772-ad92-0e50126c17fc"
const API_URL = "http://localhost:8080"

function UploadPage() {
  const [videosList, setVideosList] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();

    const videoInfo = {
      titleInput: e.target.title.value,
      descriptionInput: e.target.description.value,
    };

    if (videoInfo.titleInput === "" || videoInfo.descriptionInput === "") {
      alert("Please fill in both text fields before publishing video.");
      return;
    }

    axios
      .post(`${API_URL}/videos/?api_key=${API_KEY}`, videoInfo)
      .then((response) => {
        console.log({ response });
        setUploadSuccess(true);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error uploading video:", error);
      });
  };

  useEffect(() => {
    axios.get(`${API_URL}/videos/?api_key=${API_KEY}`)
      .then((response) => {
        setVideosList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  return (
    <>
      {uploadSuccess ? (
        <div className="upload__success-message">
          <h3 className="upload__success-text">Success!</h3>
          <p>Your video has been uploaded successfully.</p>
          <button className="upload__success-button" onClick={() => navigate('/')}>
            View Video
          </button>
        </div>
      ) : (
        <div className="upload">
          <header className="upload__header">
            <h1 className="upload__header-text">Upload Video</h1>
          </header>

          <form onSubmit={formHandler} >
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
                <label htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                <textarea id="description" name="description" placeholder="Add a description to your video"></textarea>
              </div>
            </section>

            <div className="button-container">
              <button type="button" onClick={() => navigate('/')} className="upload__buttons-cancel">
                CANCEL
              </button>
              <button type="submit" className="upload__buttons-publish">
                <img src={uploadIcon} alt="Publish icon" />
                PUBLISH
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default UploadPage;
