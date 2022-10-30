import Checkbox from 'antd/lib/checkbox/Checkbox'
import React from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import cl from '../List/List.module.css'

const ListItem = ({ arr }) => {
  const { tasks, id: idTodo } = useTypedSelector((state) => state.todo)
  const { toggleTodo } = useActions()

  const toggleHandler = (id: number, status: boolean) => {
    const targetIndex = idTodo.indexOf(id)
    const copyTasks = JSON.parse(JSON.stringify(tasks))
    copyTasks[targetIndex].completed = !status
    localStorage.setItem('todos', JSON.stringify(copyTasks))
    toggleTodo(copyTasks)
  }
  return (
    <ul className={cl.list}>
      {arr.map((task) => (
        <li key={task.id} className={cl.listItemWrapper}>
          <div className={cl.listItem}>
            <Checkbox
              checked={task.completed}
              className={task.completed ? cl.textCompleted : cl.text}
              onClick={() => toggleHandler(task.id, task.completed)}
            >
              {task.text}
            </Checkbox>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ListItem
