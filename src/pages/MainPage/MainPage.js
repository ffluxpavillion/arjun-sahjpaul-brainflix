import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/Header/Header';
import Video from '../../components/Video/Video';
import VideoInfo from '../../components/VideoInfo/VideoInfo';
import VideoList from '../../components/VideoList/VideoList';
import CommentForm from '../../components/CommentForm/CommentForm';
import Comments from '../../components/Comments/Comments';

const apiKey = '0352af1a-7d25-4772-ad92-0e50126c17fc';
const apiUrl = 'https://project-2-api.herokuapp.com/';

export default function MainPage() {
	const [mainVideo, setMainVideo] = useState({});
	const [sideVideos, setSideVideos] = useState([]);
	const { videoId } = useParams();

	console.log(videoId);

	useEffect(() => {
		axios
			.get(`${apiUrl}videos/${videoId || '1af0jruup5gu'}?api_key=${apiKey}`)
			.then((response) => {
				setMainVideo(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.error('Error fetching main video:', error);
			});

		axios
			.get(`${apiUrl}videos?api_key=${apiKey}`)
			.then((response) => {
				setSideVideos(response.data);
			})
			.catch((error) => {
				console.error('Error fetching side videos:', error);
			});
	}, [videoId]);

	// ======  TESTING IF LOADED =====

	// if (isLoaded) {
	// 	return (
	// 		<div>
	// 			<Video content={mainVideo} />
	// 			<div className="split">
	// 				<div className="split-left">
	// 					<VideoInfo content={mainVideo} />
	// 					<VideoList />
	// 					<CommentForm />
	// 					<Comments comments={mainVideo.comments} />
	// 				</div>
	// 				<VideoList
	// 					clickHandler={(videoId) => {
	// 						// NEED TO ADD CLICK HANDLER HERE ??
	// 					}}
	// 					selectedId={mainVideo.id}
	// 					list={sideVideos}
	// 				/>
	// 			</div>
	// 		</div>
	// 	);
	// } else {
	// 	return <div>"still loading"</div>;
	// }

	// ======  TESTING IF LOADED =====
}
