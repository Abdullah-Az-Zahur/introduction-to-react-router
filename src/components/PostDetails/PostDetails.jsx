import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {title} = post
    return (
        <div>
            <h4>Title: {title}</h4>
        </div>
    );
};

export default PostDetails;