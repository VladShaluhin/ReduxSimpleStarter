import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';


const API_KEY  = 'AIzaSyB0sXrBtJsJ8xiHJtEqdN9mF5c5ZHQeay4';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.getVideosByTerm('surfboards');

    }

    search(term) {
        return new Promise(resolve => {
            YTSearch({key: API_KEY,term}, resolve )
        });
    }

    getVideosByTerm(term) {
        return this.search(term)
            .then(videos => {
                this.setState({videos, selectedVideo: videos[0]});
            })
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.getVideosByTerm(term) } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));