import {createStore} from 'redux'
import devTools from 'remote-redux-devtools'
import rootReducer from '../reducers'

export  default function configureStore(preloadedState){
  //const enhancer = compose(
  //    applyMiddleware(thunk),
  //    devTools({ realtime: true })
  //);

  return createStore(
    rootReducer,
    preloadedState
  )

  return store;
}
