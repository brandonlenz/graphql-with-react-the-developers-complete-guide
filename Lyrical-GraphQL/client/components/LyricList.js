import React from "react";

const LyricList = (props) => {

  const onLike = (lyricId) => {
    console.log(lyricId);
  }

  const renderLyrics = () => props.lyrics.map(({ id, content }) => <li key={id} className="collection-item">
    {content}
    <i 
      className="material-icons"
      onClick={() => onLike(id)}>
      thumb_up
    </i>
  </li>);
  
  return (
    <ul className="collection">
      {renderLyrics()}
    </ul>
  )
};

export default LyricList;
