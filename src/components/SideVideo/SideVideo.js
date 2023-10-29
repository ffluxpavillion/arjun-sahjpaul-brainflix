import './SideVideo.scss';
import { Link } from "react-router-dom";


export default function SideVideo({ video }) {
  return (
    
    <Link to={`/video/${video.id}`} className="videoList-panel">
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
    </Link>
  );
}