import { Row } from 'antd'
import Input from 'antd/lib/input/Input'
import Layout from 'antd/lib/layout/layout'
import React, { FC, useMemo, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ITask } from '../../models/ITask'
import cl from './MyInput.module.css'

export declare type ParseType = string | undefined

const MyInput: FC = () => {
  const [value, setValue] = useState('')
  const { addTodo } = useActions()
  const { tasks, id } = useTypedSelector((state) => state.todo)

  useMemo(() => {
    if (tasks.length && id.length) {
      localStorage.setItem('todos', JSON.stringify(tasks))
      localStorage.setItem('id', JSON.stringify(id))
    }
  }, [tasks, id])

  const createNewTask = () => {
    const id = Date.now()
    const task: ITask = {
      text: value,
      completed: false,
      id,
    }
    addTodo(task, id)
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const enterDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.length > 30) {
      alert('Вы ввели тарабарщину :(')
      setValue('')
      return
    }
    if (e.key === 'Enter' && value) {
      createNewTask()
      setValue('')
    }
  }

  return (
    <Layout style={{ background: 'transparent' }}>
      <Row className={cl.wrapperInput} justify="center">
        <Input
          value={value}
          onChange={changeHandler}
          onKeyDown={enterDownHandler}
          className={cl.input}
          placeholder="Введите задачу"
        />
      </Row>
    </Layout>
  )
}

export default MyInput
