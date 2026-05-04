import { useEffect, useState } from 'react'
import CategoryBar from "../components/CategoryBar"
import PostGrid from "../components/PostGrid"


function HomePage() {
    const categories = ["Horror", "RPG", "Adventure", "Action"]

      const[selected, setSelected] = useState([])
      const[posts, setPosts] = useState([])

      useEffect(() => {
        fetch('http://localhost:8080/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
      }, [])

      const filteredPosts = selected.length === 0 
  ? posts 
  : posts.filter(post => selected.includes(post.category))

  function handleCategoreSelect(category) {
    if (selected.includes(category)) {
      setSelected(selected.filter(c => c !== category))
    } else {
      setSelected([...selected, category])
    }
  }

  return(
    <div>
        <CategoryBar categories={categories} 
            onCategoryClick = {handleCategoreSelect}
            selected= {selected} 
        />
      <PostGrid posts= {filteredPosts} />
    </div>
  )
}

export default HomePage