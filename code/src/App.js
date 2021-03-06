import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todoTasks } from 'reducers/todoTasks'

import { TodoList } from 'components/TodoList'
import { ClearButton } from 'components/ClearButton'
import { Header } from 'components/Header'
// import { StyleSheet } from 'react'
import { AddTodoForm } from './components/AddTodoForm'
import { TodoTasksSummary } from './components/TodoTasksSummary'

//create reducer
const reducer = combineReducers({
  todoTasks: todoTasks.reducer,
  // total: total.reducer
})

// create store
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="todoContainer">
      <Header />
      <AddTodoForm />
      <TodoList />
      <footer>
        <TodoTasksSummary />
        <ClearButton /> 
      </footer>
      </div>
    </Provider>
  )
}

