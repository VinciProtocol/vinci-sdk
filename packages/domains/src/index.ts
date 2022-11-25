export * from './types'
export * from './Provider'
import { createContractContext } from './contract'
import { createContractDataContext } from './contractData'
import { createControllersContext } from './controllers'

export const useVinciContract = createContractContext()
export const useVinciContractData = createContractDataContext()
export const useVinciControllers = createControllersContext()
