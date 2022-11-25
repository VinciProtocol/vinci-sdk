import type { ConfigServiceProps } from './config'
import ConfigProvider from './config'
import ContractProvider from './contract'
// import ContractDataProvider from './contractData'
// import ControllersProvider from './controllers'

import type { FCC } from './types'

export type VinciSDKProviderProps = ConfigServiceProps
export const VinciSDKProvider: FCC<VinciSDKProviderProps> = ({ children, ...configProps }) => {
  return (
    <ConfigProvider props={configProps}>
      <ContractProvider>
        {children}
        {/* <ContractDataProvider>
        <ControllersProvider>{children}</ControllersProvider>
      </ContractDataProvider> */}
      </ContractProvider>
    </ConfigProvider>
  )
}
