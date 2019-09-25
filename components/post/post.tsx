import Link from 'next/link'

const Post = (props) => {
    return (
        <div className="card flex-row border-0 shadow-sm bg-white rounded mb-4">
            <div className="card-header border-0 padding-0">
                <Link href="/post/[category]/[id]/[heading]" as={`/post/${props.post.category}/${props.post._id}/${props.post.heading.split(" ").join("-")}`}>
                    <a><img className="img-l" src={props.post.img} alt={props.post.heading} /></a>
                </Link>
            </div>
            <div className="card-block p-2">
                <Link href="/post/[category]/[id]/[heading]" as={`/post/${props.post.category}/${props.post._id}/${props.post.heading.split(" ").join("-")}`}>
                    <a><h1 className="card-title mb-1 heading-list-post">{props.post.heading}</h1></a>
                </Link>
                <Link href="/post/[category]/[id]/[heading]" as={`/post/${props.post.category}/${props.post._id}/${props.post.heading.split(" ").join("-")}`}>
                    <a><p className="card-text text-hidden"> {props.post.homePageText}</p></a>
                </Link>
                {/* <Link href="/post/[category]/[id]/[heading]" as={`/post/${props.post.category}/${props.post._id}/${props.post.heading.split(" ").join("-")}`}>
                    <a>Read More <span className="pl-1">⟶</span></a>
                </Link> */}
            </div>
        </div >
    );
};

export default Post;
