import './VideoInfo.scss';
import ViewIcon from '../../assets/Icons/views.svg';
import LikeIcon from '../../assets/Icons/likes.svg';

function VideoInfo(props) {
  const { content } = props;
  const formattedDate = new Date(Number(content.timestamp)).toLocaleDateString();

  return (
    <div className="info">
      <h1 className="info__header">{content.title}</h1>
      <div className="info-div">
        <div className="info-user">
          <p className="info-user__ID">By {content.channel}</p>
          <p className="info-user__postDate">{formattedDate}</p>
        </div>
        <div className="info-social">
          <p className="info-social__views">
            <img className="info-social__viewsIcon" src={ViewIcon} alt="View count icon" />{content.views}
          </p>
          <p className="info-social__likes">
            <img className="info-social__likeIcon" src={LikeIcon} alt="Like count icon" />{content.likes}
          </p>
        </div>
      </div>
      <p className="info__text">{content.description}</p>
      <h4 className="info__commentCount">3 Comments</h4>
    </div>
  );
}

export default VideoInfo;