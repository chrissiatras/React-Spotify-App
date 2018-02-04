import React from 'react';

const VideoDetail = ({video}) => {
	// user waits till selected video be rendered
	if(!video) {
		return <div>Loading...</div>
	}
	
	const videoId = video.id.videoId;
	const url = 'https://www.youtube.com/embed/' + videoId;
	// const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" title="iframeUrl" width="500"  height="300" src={url}></iframe>
			</div>
			<div className="details">
				<div id="videotitle">{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;