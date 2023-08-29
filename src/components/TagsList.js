// eslint-disable-next-line
import React from 'react'

function TagsList(props) {
  const {tagsList, activeTagId, onTagClick} = props

  // eslint-disable-next-line
  const handleTagClick = tagId => {
    const newActiveTagId = tagId === activeTagId ? 'none' : tagId
    onTagClick(newActiveTagId)
  }

  return (
    <div className="tags-list-container">
      <h1 className="tags-heading">Tags</h1>
      <ul className="tags-list">
        {tagsList.map(tag => (
          <li
            key={tag.optionId}
            className={`tag ${tag.optionId === activeTagId ? 'active' : ''}`}
            onClick={() => onTagClick(tag.optionId)}
          >
            <button type="button" className="tag-button">
              {tag.displayText}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagsList
