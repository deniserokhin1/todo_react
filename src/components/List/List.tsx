import { Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import React, { FC } from 'react'
import cl from './List.module.css'

const List: FC = () => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div>
      <ul className={cl.list}>
        <li className={cl.listItem}>
          <Checkbox className={cl.text} onChange={onChange}>
            Task1
          </Checkbox>
        </li>
        <li className={cl.listItem}>
          <Checkbox className={cl.text} onChange={onChange}>
            Task1
          </Checkbox>
        </li>
        <li className={cl.listItem}>
          <Checkbox className={cl.text} onChange={onChange}>
            Task1
          </Checkbox>
        </li>
        <li className={cl.listItem}>
          <Checkbox className={cl.text} onChange={onChange}>
            Task1
          </Checkbox>
        </li>
      </ul>
    </div>
  )
}

export default List
