import _ from 'lodash';
import React,{ Component } from 'react';
import YoutubeSearch from './youtube-app/yt_searchbar';
import VideoList from './youtube-app/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './youtube-app/video_detail';
import './youtube-app/youtube-app.css';

const API_KEY = "AIzaSyBMQVEmxta6f5c5FlEtblgN0uZVgs1lWU8";



class YoutubeApp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        videos: [],
        selectedVideo: null
      };
      this.videoSearch('surfboards');
    }

    videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, (videos) => {
        this.setState({ 
          videos: videos,
          selectedVideo: videos[0] 
        });
      });
    }

    render() {
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

      return (
        <div>
          <YoutubeSearch onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
           onVideoSelect = {selectedVideo => this.setState({selectedVideo}) } 
           videos={this.state.videos} />
        </div>
      );
   
  }
}



export default YoutubeApp;
