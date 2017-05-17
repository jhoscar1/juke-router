import React, { Component } from 'react';
import axios from 'axios';

class Artist extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.selectArtist(this.props.params.artistId);
    }

    render() {
        console.log(this.props);
        const artistId = this.props.params.artistId;
        if (!Object.keys(this.props.artist).length) return null;
        else {
            return (
                <div>
                    <h3>{this.props.artist.name}</h3>
                    <h4>ALBUMS</h4>
                    <h4>SONGS</h4>
                </div>
            )
        }
    }
}

export default Artist;