import { optimistic } from "apollo-client/optimistic-data/store";
import React from "react";
import { graphql } from "react-apollo";

import likeLyric from "../queries/likeLyric";

const LyricList = (props) => {

  const onLike = (lyricId, likes) => {
    props.mutate({
      variables: { id: lyricId },
      optimisticResponse: {
        _typename: 'Mutation',
        likeLyric: {
          id: lyricId,
          _typename: 'LyricType',
          likes: likes + 1
        }
      }
    })
  }

  const renderLyrics = () => props.lyrics.map(({ id, content, likes }) => (
    <li key={id} className="collection-item">
      {content}
      <div className="vote-box">
        {likes}
        &nbsp;
        <i 
          className="material-icons"
          onClick={() => onLike(id, likes)}>
          thumb_up
        </i>
      </div>
    </li>
  ));
  
  return (
    <ul className="collection">
      {renderLyrics()}
    </ul>
  )
};

export default graphql(likeLyric)(LyricList);
