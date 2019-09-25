import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Post from '../components/post/post';
// import { spinnerService } from '../services/spinner';
import axios from "axios";
import Layout from '../components/layout';
import Head from 'next/head';
import Pagination from '../components/pagination/Pagination';

const Home = (props) => {
  const [posts, setPosts] = useState(props.posts)
  return (
    <div>
      <Head>
        <title>XReactive-Tutorials on JavaScript, React, Angular and more</title>
        <meta name="description" content="Tutorials on JavaScript, React, Angular and more" />
      </Head>
      <Layout>
        {posts.map((post: any, index: number) => {
          return <Post post={post} key={index} />;
        }
        )}
        <Pagination />
      </Layout>
    </div>
  )
}

Home.getInitialProps = async ({ req }) => {
  const res = await axios.get(process.env.API_ENDPOINT + "api/posts");
  return { posts: res.data }
}

export default Home
