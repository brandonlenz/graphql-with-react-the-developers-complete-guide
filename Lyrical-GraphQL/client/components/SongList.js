import React, { Fragment } from "react";
import { graphql } from 'react-apollo';
import { Link } from 'react-router'

import getSongs from "../queries/getSongs"
import deleteSong from "../queries/deleteSong";

const SongList = (props) => {

  const onSongDelete = (id) => {
    props.mutate({
      variables: {
       id
      }
    }).then(() => props.data.refetch());
  }

  const renderSongs = (songs) => {
    return (
      <ul className="collection">
        {songs.map(({ id, title }) => (
          <li key={id} className="collection-item">
            <Link to={`songs/${id}`}>
              {title}
            </Link>
            <i 
              className="material-icons"
              onClick={() => onSongDelete(id)}>
              delete
            </i>
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

export default graphql(deleteSong)(
  graphql(getSongs)(SongList)
);
