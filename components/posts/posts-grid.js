import PostsItem from './post-item';

import styles from './posts-grid.module.css';

function PostsGrid({posts}) {
    return (
        <ul className={styles.grid}>
            {posts.map((post) => (
                <PostsItem key={post.slug} post={post} />
            ))}
        </ul>
    );
}

export default PostsGrid;
