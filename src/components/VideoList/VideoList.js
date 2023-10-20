import './VideoList.scss';
import SideVideo from "../SideVideo/SideVideo"



function VideoList({ sideVideos }) {
  if (!sideVideos) {
      return <div>Loading...</div>;
  }

  return (
    <div className="videoList">
    <h5 className="videoList__header">NEXT VIDEO</h5>
    {sideVideos.list.map((video) => (
      <SideVideo 
      key={video.id} 
      id={video.id} 
      channel={video.channel} 
      title={video.title} 
      image={video.image} 
      video={video} 
       />
    ))}
  </div>
  );
}



export default VideoList;