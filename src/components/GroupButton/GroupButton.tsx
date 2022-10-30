import { Button, Radio } from 'antd'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import React, { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ITask } from '../../models/ITask'
import cl from './GroupButton.module.css'

const GroupButton = () => {
  const [status, setStatus] = useState<SizeType>('ACTIVE')
  const { setStatusTodos, deleteCompletedTodos } = useActions()
  const { tasks } = useTypedSelector((state) => state.todo)

  const clickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    setStatusTodos(e.target.value)
  }

  const deleteHandler = () => {
    const copyTasks: ITask[] = JSON.parse(JSON.stringify(tasks))
    const activeTasks = copyTasks.filter((item) => item.completed === false)
    const activeId: number[] = activeTasks.map((item) => item.id)
    localStorage.setItem('todos', JSON.stringify(activeTasks))
    localStorage.setItem('id', JSON.stringify(activeId))

    deleteCompletedTodos(activeTasks, activeId)
  }

  return (
    <div className={cl.wrapperButton}>
      <Radio.Group value={status} onChange={(e) => setStatus(e.target.value)}>
        <Radio.Button onClick={clickHandler} value="ALL">
          Все
        </Radio.Button>
        <Radio.Button onClick={clickHandler} value="ACTIVE">
          Активные
        </Radio.Button>
        <Radio.Button onClick={clickHandler} value="COMPLETED">
          Завершённые
        </Radio.Button>
      </Radio.Group>
      <div>
        <Button onClick={deleteHandler}>Очисть</Button>
      </div>
    </div>
  )
}

export default GroupButton
