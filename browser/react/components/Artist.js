import React, { Component } from 'react';
import axios from 'axios';
import Albums from './Albums';
import Songs from './Songs';
import {Link} from 'react-router';

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

        const selectedArtist = this.props.selectedArtist;
        const children = this.props.children;
        const propsToPassToChildren = {
          /**todo: make sure to include all the props that the child components need! **/
          albums: this.props.selectedArtist.albums,
          songs: this.props.selectedArtist.songs,
          currentSong: currentSong,
          isPlaying: isPlaying,
          toggleOne: toggleOne
        }

        if (!this.props.selectedArtist.artist.id) return null;
        else {
            return (
                <div>
                  <h3>{ selectedArtist.artist.name }</h3>
                  <ul className="nav nav-tabs">
                    <li><Link to={`artists/${artistId}/albums`}>ALBUMS</Link></li>
                    <li><Link to={`artists/${artistId}/songs`}>SONGS</Link></li>
                  </ul>
                  { children && React.cloneElement(children, propsToPassToChildren) }
                </div>
            )
        }
    }
}

export default Artist;