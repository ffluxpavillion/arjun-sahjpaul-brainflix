import './SideVideo.scss';
import { Link } from "react-router-dom";


export default function SideVideo({ video, onClick }) {
  //  Change video, onClick ---> , title, channel, image ???? ^^^ or <Link to={`/video/${id}`}>  below ?
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