import { useParams } from 'react-router-dom'
import { posts } from '../data'
import './PostPage.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function PostPage() {
    const { id } = useParams()
    const post = posts.find(p => p.id === Number(id))
    const navigate = useNavigate()

    const [selectedImage, setSelectedImage] = useState(post.images[0])
    function handleImageSelect(image) {
        setSelectedImage(image)
    }

    const [comments, setComments] = useState([])
    const [newComment, setNewcomment] = useState("")
    function handleAddComment() {
        if(newComment.trim() === "" ) return
        setComments([...comments, newComment])
        setNewcomment("")
    }

    return (
        <div className="post-page-conatiner">
                <button className="post-page-back" onClick={() => navigate('/')}>
                    ← Back
                </button>
            <div className="post-page" >
                <img className="post-page-image" src={selectedImage} alt={post.title} />
                <div className="post-page-thumbnails">
                    {post.images.map (image => (
                        <img
                            key= {image}
                            src= {image}
                            className={selectedImage === image ? "thumbnail selected-thumbnail" : "thumbnail"}
                            onClick= {() => handleImageSelect(image) }
                        />
                    ))} 
                </div>
                <div className="post-page-details">
                    <h1 className="post-page-title">{post.title}</h1>
                    <span className="post-page-category">{post.category}</span>
                    <p className="post-page-description">{post.description}</p>
                </div>    
                <div className="comment-section">
                    <h2>Comments</h2>
                    <div className="comments-list">
                        {comments.map((comment, index) => (
                            <div key= {index} className="comment">
                                <p>{comment}</p>
                            </div>
                        ))}
                    </div>
                    <div className="comment-input">
                        <input 
                            type="text"
                            placeholder="Write a comment..."
                            value={newComment}
                            onChange={(e) => setNewcomment(e.target.value)}
                        />
                        <button onClick={handleAddComment}>Post</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default PostPage