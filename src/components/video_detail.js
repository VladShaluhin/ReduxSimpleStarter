import React, { Component } from 'react';

class VideoDetail extends Component {
    render() {
        const {video} = this.props;
        return video ? this._renderDedail(video) : this._renderLoading();
    }

    _renderLoading() {
        return <div>Loading !!!</div>
    }

    _renderDedail(video) {
        const {id: {videoId: videoId}} =  video;
        const {snippet} = video;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="details">
                    <div>{snippet.title}</div>
                    <div>{snippet.description}</div>
                </div>
            </div>
        );
    }
}


export default VideoDetail;