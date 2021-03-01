import React from 'react';
import Comments from "../Comments/Comments";
import "./CharacterItem.css"

const CharacterItem = ({name, birth_year}) => {
    return (
        <div className="char-item">
            <p className="char-text">{`Name: ${name}`}</p>
            <p className="char-text">{`Year of birth: ${birth_year}`}</p>
            <Comments/>
        </div>
    );
};

export default CharacterItem;