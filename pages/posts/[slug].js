import Head from 'next/head';

import {Fragment} from 'react';

import {PostContent} from '../../components';

import {getPostData} from '../../lib/posts-util';

function PostDetailPage({post}) {
    return (
        <Fragment>
            <PostContent post={post} />
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
        </Fragment>
    );
}

export function getStaticProps({params}) {
    const {slug} = params;

    const postData = getPostData(slug);

    return {
        props: {post: postData},
    };
}

export function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export default PostDetailPage;
