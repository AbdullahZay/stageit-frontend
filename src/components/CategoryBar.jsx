import './CategoryBar.css'

function CategoryBar({ categories, onCategoryClick, selected }) {
    
  return (
    <div className="category-bar">
      {categories.map(category => 
        (<button key={category} className={selected.includes(category) ? "category-pill selected" : "category-pill" } onClick = {() => onCategoryClick(category)}> 
        {category}</button>
    ))}
    </div>
  )
}

export default CategoryBar