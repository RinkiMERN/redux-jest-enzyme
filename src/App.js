import React from 'react'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  console.log(store.getState());
  store.subscribe(()=> console.log(store.getState()) )
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  )
}

export default App
