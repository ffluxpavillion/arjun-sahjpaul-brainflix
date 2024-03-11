import './VideoList.scss';
import SideVideo from '../SideVideo/SideVideo';

function VideoList({ sideVideos, setMainVideo }) {
	if (!sideVideos) {
		return <div>Loading...</div>;
	}

	return (
		<div className="videoList">
			<h5 className="videoList__header">NEXT VIDEO</h5>
			{sideVideos.map((video) => (
				<SideVideo key={video.id} video={video} />
			))}
		</div>
	);
}

export default VideoList;