import { Row } from 'antd'
import Input from 'antd/lib/input/Input'
import Layout from 'antd/lib/layout/layout'
import React, { FC } from 'react'
import cl from './MyInput.module.css'

const MyInput: FC = () => {
  return (
    <Layout style={{ background: 'transparent' }}>
      <Row className={cl.wrapperInput} justify="center">
        <Input className={cl.input} placeholder="Введите задачу" />
      </Row>
    </Layout>
  )
}

export default MyInput
