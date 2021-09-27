import React, { Fragment } from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router'

const SongList = (props) => {

  const renderSongs = (songs) => {
    return (
      <ul className="collection">
        {songs.map(song => (
          <li key={song.id} className="collection-item">
            {song.title}
          </li>
        ))}
      </ul>
    )
  }

  const songList = props.data.loading 
    ? <div>loading...</div>
    : renderSongs(props.data.songs);

  return (
    <div>
      {songList}
      <Link 
        to="/songs/new" 
        className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
      </Link>
    </div>
  )
}

const songNamesQuery = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(songNamesQuery)(SongList);