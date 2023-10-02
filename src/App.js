import './App.scss';
import React, { Component } from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoInfo from './components/VideoInfo/VideoInfo';
import CommentForm from './components/CommentForm/CommentForm';
import Comments from './components/Comments/Comments';
import VideoList from './components/VideoList/VideoList';
import data from './data/video-details.json';
import list from './data/videos.json';

class App extends Component {
	state = {
		list: list.filter((video) => video.id !== data[0].id),
		data: data,
		selectedData: data[0],
		mainVideo: data[0],
		sideVideos: list.filter((video) => video.id !== data[0].id),
	};

	clickHandler = (id) => {
		const newMainVideo = data.find((entry) => entry.id === id);
		const newSideVideos = list.filter((video) => video.id !== id);
		this.setState({
			selectedData: newMainVideo,
			list: list.filter((video) => video.id !== id),
			mainVideo: newMainVideo,
			sideVideos: newSideVideos,
		});
	};

	render() {
		const { mainVideo, sideVideos } = this.state;

		return (
			<div className="App">
				<Header />
				<Video content={mainVideo} />
				<div className="split">
					<div className="split-left">
						<VideoInfo content={mainVideo} />
						<CommentForm />
						<Comments comments={mainVideo.comments} />
					</div>
					<VideoList
						clickHandler={this.clickHandler}
						selectedId={mainVideo.id}
						list={sideVideos}
					/>
				</div>
			</div>
		);
	}
}

export default App;
