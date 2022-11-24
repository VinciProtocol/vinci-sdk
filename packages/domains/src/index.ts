export * from './types'
export * from './Provider'
export { reducer } from './store/reducer'
import { createContractDataContext, createContractNFTContext } from './contractData'
import { createControllersContext } from './controllers'

export const useVinciContractData = createContractDataContext()
export const useVinciContractNFT = createContractNFTContext()
export const useVinciControllers = createControllersContext()
