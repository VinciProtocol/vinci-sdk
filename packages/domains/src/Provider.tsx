import type { ContractServiceProps } from './contract'
import ContractProvider from './contract'
// import ContractDataProvider from './contractData'
// import ControllersProvider from './controllers'

import type { FCC } from './types'

export type VinciSDKProviderProps = {
  contractProps: ContractServiceProps
}
export const VinciSDKProvider: FCC<VinciSDKProviderProps> = ({ children, contractProps }) => {
  return (
    <ContractProvider props={contractProps}>
      {children}
      {/* <ContractDataProvider>
        <ControllersProvider>{children}</ControllersProvider>
      </ContractDataProvider> */}
    </ContractProvider>
  )
}
