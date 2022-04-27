import { configureStore } from '@reduxjs/toolkit'

import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer/reducer.jsx"


   
    
    
    const store = configureStore({
      reducer: rootReducer,
    })
    
    export default store
