// import './HeroVideo.scss';


export default function HeroVideo({ video }) {
  return (
    <section className="video">
      <div className="video-wrapper">
        <video className="video__img" controls poster={video.image}></video>
      </div>
    </section>
  );
}


// function Video(props) {
// 	return (
// 		<div className="video">
// 			<div className="video-wrapper">
// 				<video
// 					className="video__img"
// 					poster={props.content.image}
// 					controls
// 				></video>
// 			</div>
// 		</div>
// 	);
// }

// export default Video;
