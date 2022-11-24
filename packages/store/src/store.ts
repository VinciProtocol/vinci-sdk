import { configureStore } from '@reduxjs/toolkit'
import { vinciSDKReducer } from '.'

export function makeStore() {
  return configureStore({
    reducer: vinciSDKReducer,
  })
}
const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
