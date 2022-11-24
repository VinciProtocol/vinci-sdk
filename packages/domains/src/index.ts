export * from './types'
export * from './Provider'
import { createContractContext } from './contract'
// import { createContractDataContext, createContractNFTContext } from './contractData'
// import { createControllersContext } from './controllers'

export const useVinciContract = createContractContext()
// export const useVinciContractData = createContractDataContext()
// export const useVinciContractNFT = createContractNFTContext()
// export const useVinciControllers = createControllersContext()
