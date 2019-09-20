import { useState } from "react";
// import PostComment from "../../component/post-comment/PostComment";
// import ListComment from "../../component/list-comment/ListComment";
import { EditorState, convertFromRaw } from "draft-js";
import axios from "axios";
// import moment from "moment";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Layout from "../../../../components/layout";
// import { spinnerService } from "../../../services/spinner";
import Head from 'next/head'

const PostDetail = (props) => {
    const [post, setPost] = useState(props.post);
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(JSON.parse(props.post.content))));
    return (
        <div>
            <Head>
                <title>{post.heading}</title>
                <meta name="description" content={post.tags} />
            </Head>
            <Layout>
                <h1 className="h-text mt-4">{post.heading}</h1>
                {/* <b>Posted on {moment(this.state.post.date).format("MM/DD/YYYY")} - {this.state.post.min} Mins Read</b> */}
                <b>Posted on {post.date} - {post.min} Mins Read</b>
                <p className="lead">
                    By <a href="https://twitter.com/babirali001" target="_blank"> {post.postBy}</a>
                </p>
                <img className="img-fluid rounded" src={post.mainImg} alt="" />
                <Editor
                    editorState={editorState}
                    toolbarHidden
                    readOnly={true}
                />
                {/* <PostComment />
              <ListComment /> */}
            </Layout>
        </div>
    );
}

PostDetail.getInitialProps = async ({ req, query }) => {
    const res = await axios.get(process.env.API_ENDPOINT + "api/posts/get/" + query.id);
    return { post: res.data }
}

export default PostDetail;
