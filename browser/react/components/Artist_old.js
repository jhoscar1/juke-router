import React, { Component } from 'react';
import axios from 'axios';
import Albums from './Albums';
import Songs from './Songs';

class Artist extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.selectArtist(this.props.params.artistId);
        this.props.selectArtistAlbums(this.props.params.artistId);
        this.props.selectArtistSongs(this.props.params.artistId);
    }

    render() {
        console.log(this.props);
        const artistId = this.props.params.artistId;
        const currentSong = this.props.currentSong;
        const isPlaying = this.props.isPlaying;
        const toggleOne = this.props.toggleOne;

        if (!this.props.selectedArtist.artist.id) return null;
        else {
            return (
                <div>
                    <h3>{this.props.selectedArtist.artist.name}</h3>
                    <Albums albums={this.props.selectedArtist.albums} />
                    <h3>Songs</h3>
                    <Songs songs={this.props.selectedArtist.songs} 
                        currentSong={currentSong}
                        isPlaying={isPlaying}
                        toggleOne={toggleOne} />
                </div>
            )
        }
    }
}

export default Artist;