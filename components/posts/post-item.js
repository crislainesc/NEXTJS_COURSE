import Image from 'next/image';
import Link from 'next/link';

import styles from './post-item.module.css';

function PostsItem({post}) {
    const {title, image, date, excerpt, slug} = post;

    const formattedDate = new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={styles.post}>
            <Link href={linkPath}>
                <a>
                    <div className={styles.image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                            layout='responsive'
                        />
                    </div>
                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
}

export default PostsItem;
