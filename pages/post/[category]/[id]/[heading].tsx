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
import Head from "next/head";
import server from "../../../../config";

const PostDetail = (props) => {
    const [post, setPost] = useState(props.post);
    const [date, setDate] = useState(new Date(props.post.date).toLocaleDateString("en-US"));
    const [editorState, setEditorState] = useState(EditorState.createWithContent(convertFromRaw(JSON.parse(props.post.content))));
    return (
        <div>
            <Head>
                <title>{post.heading}</title>
                <meta name="description" content={post.tags} />
                <meta name="keywords" content={post.keywordsMeta} />
                <link rel="canonical" href={`http://xreactive.com/post/${post.category}/${post._id}/${post.heading.split(" ").join("-")}`} />
                <meta name="author" content={post.postBy} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={post.tags} />
                <meta name="twitter:title" content={post.heading} />
                <meta name="twitter:image" content={post.mainImg} />
                <meta name="twitter:creator" content="@babirali001" />
            </Head>
            <Layout>
                <h1 className="h-text mt-4">{post.heading}</h1>
                <b className="post-info">
                    <span className="font-italic">
                        <i className="fa fa-user" />
                        <a href="https://twitter.com/babirali001" target="_blank"> {post.postBy}</a>
                    </span><span className="font-weight-bolder"> | </span><i className="fa fa-calendar" /> {date}<span className="font-weight-bolder"> | </span><i className="fa fa-clock-o" /> {post.min} Mins Read</b>
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
};

PostDetail.getInitialProps = async ({ req, query }) => {
    const res = await axios.get(server + "api/posts/get/" + query.id);
    return { post: res.data };
};

export default PostDetail;
