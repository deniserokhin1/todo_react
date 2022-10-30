import React, { FC, useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ListItem from './ListItem'

const List: FC = () => {
  const { tasks } = useTypedSelector((state) => state.todo)
  const { loadAllTodos, loadAllIds } = useActions()

  const { active, all, completed } = useTypedSelector((state) => state.status)

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const id = JSON.parse(localStorage.getItem('id'))
    if (todos && id) {
      loadAllTodos(todos)
      loadAllIds(id)
    }
  }, [])

  const completedTask = tasks.filter((task) => task.completed === true)
  const activeTask = tasks.filter((task) => task.completed === false)

  return (
    <div>
      {completed && <ListItem arr={completedTask} />}
      {active && <ListItem arr={activeTask} />}
      {all && <ListItem arr={tasks} />}
    </div>
  )
}

export default List
