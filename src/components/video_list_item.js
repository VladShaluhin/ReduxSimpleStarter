import React, {Component} from 'react'


class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {video, onVideoSelect} = this.props;
        const {snippet} = video;

        return (
            <li className="list-group-item" onClick={() => onVideoSelect(video)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={snippet.thumbnails.default.url}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading"> {snippet.title} </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default  VideoListItem;