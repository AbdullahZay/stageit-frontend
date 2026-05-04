import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostGrid from '../components/PostGrid'
import './UserProfilePage.css'

function UserProfilePage() {
    const { username } = useParams()
    const [profile, setProfile] = useState(null)


    useEffect(() => {
        fetch(`http://localhost:8080/users/${username}`)
            .then(response => response.json())
            .then(data => setProfile(data))
    }, [username])

    if (!profile) return <div>Loading...</div>

    return (
        <div className="user-profile">
            <div className="user-profile-header">
                <div className="user-profile-image">
                    {profile.profileImage ? 
                        <img src={profile.profileImage} alt={profile.username} /> 
                        : 
                        <div className="user-profile-placeholder">
                            {profile.username[0].toUpperCase()}
                        </div>
                    }
                </div>
                <div className="user-profile-info">
                    <h1>{profile.username}</h1>
                    <p>{profile.bio || "No bio yet"}</p>
                </div>
            </div>
            <h2 className="user-profile-posts-title">Posts</h2>
            <PostGrid posts={profile.posts} />
        </div>
)
}

export default UserProfilePage