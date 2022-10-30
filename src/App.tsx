import { Layout } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import React from 'react'
import './App.css'
import MyInput from './components/MyInput/MyInput'
import cl from './App.module.css'
import { Provider } from 'react-redux'
import { store } from './store'
import List from './components/List/List'
import GroupButton from './components/GroupButton/GroupButton'

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Layout className={cl.transparentBg}>
          <Content>
            <div className={cl.wrapper}>
              <div className={cl.block}>
                <MyInput />
                <List />
                <Footer className={cl.footer}>
                  <GroupButton />
                </Footer>
              </div>
            </div>
          </Content>
        </Layout>
      </Provider>
    </div>
  )
}

export default App
