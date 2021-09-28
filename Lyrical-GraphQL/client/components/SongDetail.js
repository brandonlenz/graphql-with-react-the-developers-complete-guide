import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from "react-apollo";

import getSong from '../queries/getSong';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import { render } from 'react-dom';

const SongDetail = (props) => {
    
  const renderBody = (song) => (
    <div>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics}/>
      <LyricCreate songId={song.id}/>
    </div>
  );
  
  const songDetails = props.data.loading
    ? <div>Loading...</div>
    : renderBody(props.data.song);

  return (
    <div>
      <Link to="/">back</Link>
      {songDetails}
      
    </div>
  );
}

export default graphql(getSong, {
  options: (props) => ({ variables: { id: props.params.id } })
})(SongDetail);
