// eslint-disable-next-line
import React from 'react'

function Tasks(props) {
  const {tasksList, activeTagId} = props

  const filteredTasks =
    activeTagId === 'all'
      ? tasksList
      : tasksList.filter(task => task.tagId === activeTagId)

  return (
    <div className="tasks-container">
      <h1 className="tasks-heading">Tasks</h1>
      {tasksList.length > 0 ? (
        <ul className="tasks-list">
          {tasksList.map(task => (
            <li key={task.id} className="task">
              {task.text}
              {task.tagId !== 'none' && (
                <p className="task-tag">Tag: {task.tagId}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-tasks-message">No Tasks Added Yet</p>
      )}
    </div>
  )
}

export default Tasks
