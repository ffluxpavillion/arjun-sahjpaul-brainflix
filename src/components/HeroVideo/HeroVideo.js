import './HeroVideo.scss';


export default function HeroVideo({ video }) {
  return (
    <section className="video">
      <div className="video-wrapper">
        <video className="video__img" controls poster={video.image}></video>
      </div>
    </section>
  );
}
