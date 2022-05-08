import Head from 'next/head';

import {Fragment} from 'react';

import {FeaturedPosts, Hero} from '../components';

import {getFeaturedPost} from '../lib/posts-util';

function HomePage({posts}) {
    return (
        <Fragment>
            <Head>
                <title>Max' Blog</title>
                <meta
                    name="description"
                    content="I post about programming and web development."
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={posts} />
        </Fragment>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPost();

    return {
        props: {posts: featuredPosts},
    };
}

export default HomePage;
