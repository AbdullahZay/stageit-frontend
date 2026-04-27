import PostCard from "./PostCard"
import './PostGrid.css'

function PostGrid({ posts }) {
    return(
        <div className="post-grid">
            {posts.map(post => <PostCard key={post.id} post= {post} />)}
        </div>
    )
}

export default PostGrid