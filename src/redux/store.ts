import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './RootReducer'

export const store = configureStore({
    reducer: {
      root: rootReducer
    }
})