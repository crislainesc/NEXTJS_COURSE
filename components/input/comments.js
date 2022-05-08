import {useState, useEffect, useContext} from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
    const {eventId} = props;

    const {showNotification} = useContext(NotificationContext);

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [isFetchingComments, setIsFetchingComments] = useState(false);

    useEffect(() => {
        if (showComments) {
            setIsFetchingComments(true);
            fetch(`/api/comments/${eventId}`)
                .then((response) => response.json())
                .then((data) => {
                    setComments(data.comments);
                    setIsFetchingComments(false);
                });
        }
    }, [showComments]);

    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(commentData) {
        showNotification({
            title: 'Sending comments...',
            message: 'Your comments is currently being stored into a database.',
            status: 'pending',
        });

        fetch(`/api/comments/${eventId}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(commentData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                return response.json().then((data) => {
                    throw new Error(data.message || 'Something went wrong!');
                });
            })
            .then((data) => {
                showNotification({
                    title: 'Success!',
                    message: 'Your comment was saved.',
                    status: 'pending',
                });
                console.log(data);
            })
            .catch((error) => {
                showNotification({
                    title: 'Error!',
                    message: error.message || 'Something went wrong!',
                    status: 'error',
                });
                console.log(error);
            });
    }

    return (
        <section className={classes.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && isFetchingComments && (
                <p>Loading...</p>
            )}
            {showComments && !isFetchingComments && (
                <CommentList items={comments} />
            )}
        </section>
    );
}

export default Comments;
