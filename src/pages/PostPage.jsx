import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './PostPage.css'
import { useNavigate } from 'react-router-dom'

function PostPage() {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const [comments, setComments] = useState([])
    const [newComment, setNewcomment] = useState("")

    const [selectedImage, setSelectedImage] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:8080/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                setPost(data)
                setSelectedImage(data.images[0])
            })
        }, [id])

    useEffect(() => {
        fetch(`http://localhost:8080/posts/${id}/comments`)
            .then(response => response.json())
            .then(data => setComments(data))
        }, [id])

    function handleImageSelect(image) {
        setSelectedImage(image)
    }


    function handleAddComment() {
    if(newComment.trim() === "") return
    
    fetch(`http://localhost:8080/posts/${id}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ content: newComment })
    })
    .then(response => response.json())
    .then(data => {
        setComments([...comments, data])
        setNewcomment("")
    })
}

    if (!post) return <div>Loading...</div>

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
                        <span 
                            className="post-page-username"
                            onClick={() => navigate(`/users/${post.username}`)}
                        >
                            {post.username}
                        </span>
                    <span className="post-page-category">{post.category}</span>
                    <p className="post-page-description">{post.description}</p>
                </div>    
                <div className="comment-section">
                    <h2>Comments</h2>
                    <div className="comments-list">
                        {comments.map((comment, index) => (
                            <div key= {index} className="comment">
                                <p 
                                    className="comment-username"
                                    onClick={() => navigate(`/users/${comment.username}`)}
                                    style={{cursor: 'pointer'}}
                                >
                                    <strong>{comment.username}</strong>
                                </p>
                                <p>{comment.content}</p>
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