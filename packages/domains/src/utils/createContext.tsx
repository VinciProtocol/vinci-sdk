import type { FCC } from '../types'
import { createContext as c, useContext } from 'react'
type IsNotAny<T> = 0 extends 1 & T ? false : true
type IsUnknown<T> = unknown extends T ? IsNotAny<T> : false

export function createContext<T, P>(fn: (props?: P) => T, initialValue: T | undefined = undefined) {
  const Context = c(initialValue as T)
  const Provider: FCC<IsUnknown<P> extends true ? { props?: undefined } : { props: P }> = ({ children, props }) => (
    <Context.Provider value={fn(props)}>{children}</Context.Provider>
  )
  const createUseContext = () => () => useContext(Context)
  return {
    Context,
    Provider,
    createUseContext,
  }
}
