import React from 'react';
import './VideoList.scss';

function VideoListItem({ video, onClick }) {
  return (
    <div className="videoList-panel" onClick={() => onClick(video.id)}>
      <div className="videoList-wrapper">
        <img
          className="videoList__thumbnail"
          src={video.image}
          alt="Video Thumbnail Preview"
        />
      </div>
      <div className="videoList-panel-card">
        <h4 className="videoList-panel-card__title">{video.title}</h4>
        <p className="videoList-panel-card__channel">{video.channel}</p>
      </div>
    </div>
  );
}

function VideoList(props) {
  return (
    <div className="videoList">
      <h5 className="videoList__header">NEXT VIDEO</h5>
      {props.list.map((video) => (
        <VideoListItem key={video.id} video={video} onClick={props.clickHandler} />
      ))}
    </div>
  );
}

export default VideoList;
