// eslint-disable-next-line
import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TagsList from './TagsList'
import Tasks from './Tasks'

class TasksList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tagsList: [
        {
          optionId: 'HEALTH',
          displayText: 'Health',
        },
        {
          optionId: 'EDUCATION',
          displayText: 'Education',
        },
        {
          optionId: 'ENTERTAINMENT',
          displayText: 'Entertainment',
        },
        {
          optionId: 'SPORTS',
          displayText: 'Sports',
        },
        {
          optionId: 'TRAVEL',
          displayText: 'Travel',
        },
        {
          optionId: 'OTHERS',
          displayText: 'Others',
        },
      ],
      tasksList: [],
      activeTagId: 'all',
      newTask: '',
      newTaskTagId: '',
      addedTask: '',
    }
  }

  state = {
    tagsList: [
      {
        optionId: 'SPORTS',
        displayText: 'Sports',
      },
    ],
    tasksList: [],
    activeTagId: 'all',
    newTask: '',
    newTaskTagId: 'all',
  }

  handleTagClick = tagId => {
    this.setState({activeTagId: tagId})
  }

  handleInputChange = event => {
    this.setState({newTask: event.target.value})
  }

  handleTagChange = event => {
    this.setState({newTaskTagId: event.target.value})
  }

  handleAddTask = event => {
    event.preventDefault()
    // eslint-disable-next-line
    const {newTask, newTaskTagId, tasksList} = this.state

    if (newTask.trim() === '') return

    const newTaskItem = {
      id: uuidv4(),
      text: newTask,
      tagId: newTaskTagId,
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTaskItem],
      newTask: '',
      newTaskTagId:
        prevState.tagsList.length > 0 ? prevState.tagsList[0].optionId : 'all',
      addedTask: newTask,
    }))
  }

  render() {
    const {
      tagsList,
      tasksList,
      activeTagId,
      newTask,
      newTaskTagId,
      addedTask,
    } = this.state
    const filteredTasks =
      activeTagId === 'all' || activeTagId === 'none'
        ? tasksList
        : tasksList.filter(task => task.tagId === activeTagId)

    return (
      <div className="tasks-list-container">
        <h1 className="main-heading">Create a task</h1>
        <form onSubmit={this.handleAddTask}>
          <div className="tasks-header">
            <label htmlFor="taskInput" className="task-label">
              Task
            </label>
            <input
              type="text"
              id="taskInput"
              placeholder="Enter the task here"
              value={newTask}
              onChange={this.handleInputChange}
              className="task-input"
            />
            <label htmlFor="tagSelect" className="tag-label">
              Tags
            </label>
            <select
              id="tagSelect"
              value={newTaskTagId}
              onChange={this.handleTagChange}
              className="tag-select"
            >
              {tagsList.map(tag => (
                <option key={tag.optionId} value={tag.optionId}>
                  {tag.displayText}
                </option>
              ))}
            </select>
            <button
              type="submit"
              onClick={this.handleAddTask}
              className="add-task-button"
            >
              Add Task
            </button>
          </div>
        </form>
        {addedTask && <p className="added-task-message">Task: {addedTask}</p>}
        <TagsList
          tagsList={tagsList}
          activeTagId={activeTagId}
          onTagClick={this.handleTagClick}
        />
        <Tasks tasksList={filteredTasks} />
      </div>
    )
  }
}

export default TasksList

// tagsList.length > 0 ? tagsList[0].optionId : 'all', // Initial value
