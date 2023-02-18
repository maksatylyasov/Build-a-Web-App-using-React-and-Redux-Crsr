import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers/reducers'
// See 	https://www.npmjs.com/package/redux-persist
const persistConfig = {
  key: 'root',
  storage: storage
}



const configureStore = () => {
  
  return {  }
}
export default configureStore;