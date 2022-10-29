import { Button, Layout, Radio } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import React, { useState } from 'react'
import './App.css'
import List from './components/List/List'
import MyInput from './components/MyInput/MyInput'
import cl from './App.module.css'
import type { SizeType } from 'antd/es/config-provider/SizeContext'

const App = () => {
  const [size, setSize] = useState<SizeType>('large')
  return (
    <div>
      <Layout className={cl.transparentBg}>
        <Content>
          <div className={cl.wrapper}>
            <div className={cl.block}>
              <MyInput />
              <List />
              <Footer className={cl.footer}>
                <div className={cl.wrapperButton}>
                  <Radio.Group
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <Radio.Button className={cl.button} value="large">
                      Все
                    </Radio.Button>
                    <Radio.Button className={cl.button} value="default">
                      Активные
                    </Radio.Button>
                    <Radio.Button className={cl.button} value="small">
                      Завершённые
                    </Radio.Button>
                  </Radio.Group>
                  <div>
                    <Button>Очисть все</Button>
                  </div>
                </div>
              </Footer>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  )
}

export default App
