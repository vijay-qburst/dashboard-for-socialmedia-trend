import { combineReducers } from '@reduxjs/toolkit'

import categoriesReducer from '../slice/categoriesSlice';
import countReducer from '../slice/countSlice';
import sessionReducer from '../slice/sessionSlice';
import toasterReducer from '../slice/toasterSlice';
import tweetsReducer from '../slice/tweetsSlice';


const rootReducer = combineReducers({
  categories: categoriesReducer,
  count: countReducer,
  session: sessionReducer,
  toaster: toasterReducer,
  tweets: tweetsReducer,
})

export default rootReducer