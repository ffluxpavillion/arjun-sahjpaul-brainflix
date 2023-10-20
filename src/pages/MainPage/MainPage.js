import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/Header/Header';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import VideoList from '../../components/VideoList/VideoList';
import CommentForm from '../../components/CommentForm/CommentForm';
import Comments from '../../components/Comments/Comments';

const apiKeyParam = 'api_key=7c8b9671-1c6e-455d-be11-f7ad883ff208';
const apiUrl = 'https://project-2-api.herokuapp.com';

export default function MainPage() {

  let { id } = useParams();
  const [mainVideo, setMainVideo] = useState();
  const [sideVideos, setSideVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [id]);

  const fetchVideos = () => {
    axios.get(`${apiUrl}/videos?${apiKeyParam}`)
      .then((response) => {
        const allVideosData = response.data;

        if (id) {
          const mainVideoData = allVideosData.find(video => video.id === id);
          setMainVideo(mainVideoData);
        } else {
          const defaultVideoId = allVideosData[0].id;
          const defaultMainVideo = allVideosData.find(video => video.id === defaultVideoId);
          setMainVideo(defaultMainVideo);
        }

        const sortedSideVideos = allVideosData.filter((video) => video.id !== id);
        setSideVideos(sortedSideVideos);
      });
  };

  return (
    <>
      <Header />
      {mainVideo && <HeroVideo video={mainVideo} />}
      <VideoInfo />
      <CommentForm />
      <Comments />
      <VideoList sideVideos={sideVideos} />
    </>
  );
}
