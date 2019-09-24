import React, { useState, useEffect } from "react";
// import { spinnerService } from "../../service/spinner";
import axios from "axios";
import Post from "../../components/post/post";
import Layout from "../../components/layout";
import Head from "next/head";

const PostByCategory = (props) => {
    const [posts, setPost] = useState(props.posts);
    useEffect(() => {
        setPost(props.posts)
    }, [props])
    return (
        <div>
            <Head>
                <title>XReactive-Tutorials on JavaScript, React, Angular and more</title>
                <meta name="description" content="Tutorials on JavaScript, React, Angular and more" />
            </Head>
            <Layout>
                {
                    posts.map((post: any, index: number) => {
                        return <Post post={post} key={index} />;
                    })
                }
            </Layout>
        </div>
    );
};

PostByCategory.getInitialProps = async ({ req, query }) => {
    const res = await axios.get(process.env.API_ENDPOINT + "api/posts/getpostbycategory/" + query.category);
    return { posts: res.data }
}

export default PostByCategory;
