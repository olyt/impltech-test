import React, {useState} from 'react';

const Comments = () => {
    const [commentsList, setCommentsList] = useState([]);
    const [value, setValue] = useState("");

    const comments = commentsList.map(comment => (
        <p
            key={Date.now() * Math.random()}
            className="char-text"
        >{comment}</p>
    ))

    const handleComment = () => {
        setCommentsList(prevState => [...prevState, value]);
        setValue("");
    }

    return (
        <div>
            {comments}
            <textarea
                className="char-comment-area"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button
                className="btn"
                onClick={handleComment}
            >
                Comment
            </button>
        </div>
    );
};

export default Comments;