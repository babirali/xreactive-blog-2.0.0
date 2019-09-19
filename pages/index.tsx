import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from '../components/post/post';
import { spinnerService } from '../services/spinner';
import axios from "axios";
import Layout from '../components/layout';

const Home = (props) => {
  const [posts, setPosts] = useState(props.posts)
  return (
    <Layout>
      {posts.map((post: any, index: number) => {
        return <Post post={post} key={index} />;
      }
      )}
      {/* <Pagination /> */}
    </Layout>
  )
}

Home.getInitialProps = async ({ req }) => {
  const res = await axios.get(process.env.API_ENDPOINT + "api/posts");
  return { posts: res.data }
}

export default Home
