import './PostCard.css'
import { useNavigate } from 'react-router-dom'


function PostCard({ post }) {
    const navigate = useNavigate()

    return(
        <div className="post-card" onClick={() => navigate(`/post/${post.id}`)} >
            <img src={post.images[0]} alt={post.title} />
            <div className="post-card-title" >
                {post.title}
            </div>
            <div className="post-card-username" onClick={(e) => {
                e.stopPropagation()
                navigate(`/users/${post.username}`)
            }}>
                {post.username}
            </div>
        </div>
    )
}

export default PostCard