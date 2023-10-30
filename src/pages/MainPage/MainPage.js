import { useState, useEffect } from 'react'
import { useParams, useNavigate,} from 'react-router-dom'
import axios from 'axios';
import HeroVideo from '../../components/HeroVideo/HeroVideo'
import VideoInfo from '../../components/VideoInfo/VideoInfo'
import VideoList from '../../components/VideoList/VideoList'
import CommentForm from '../../components/CommentForm/CommentForm'
import Comments from '../../components/Comments/Comments'




export default function MainPage() {

  const [mainVideo, setMainVideo] = useState([null]);
  const [sideVideos, setSideVideos] = useState([]);
  const { videoId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/videos/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        setSideVideos(response.data);
      });
  }, []);
  
  let filteredVideoList = sideVideos.filter(
    (video) => video.id !== mainVideo.id
  )

  useEffect(() => {
    axios
      .get(
        videoId
          ? `http://localhost:8080/videos/${videoId}/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec`
          : "http://localhost:8080/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=e8ea54d0-3cd7-4281-8936-65a324902fec"
      )
      .then((response) => {
        setMainVideo(response.data);
        setLoading(false);

      })
      .catch((err) => {
        console.error(err);
        navigate("/video/notfound/error");
      });
  }, [videoId]);
  

  return (
    <div className="App">
      {mainVideo && <HeroVideo video={mainVideo} />}
      <div className="split">
					<div className="split-left">
            <VideoInfo mainVideo={mainVideo} />
            <CommentForm />
            {mainVideo && mainVideo.comments && <Comments comments={mainVideo.comments} />}
          </div>
          <VideoList
              sideVideos={filteredVideoList}
              setMainVideo={setMainVideo}
            />
      </div>
    </div>
  )
}
