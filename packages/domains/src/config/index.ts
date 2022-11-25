import type BigNumber from 'BigNumber.js'
import { createContext } from 'packages/domains/src/utils/createContext'
import type { MarketData } from '../types'
import type { providers } from 'ethers'

export type WalletBalancesData = {
  id: string
  lendingPoolAddressesProvider: string
  data: Record<string, BigNumber>
}
export type WalletNFTsData = {
  underlyingNFT: string
  tokenIds: string[]
}

export type ConfigServiceProps = {
  provider: any
  web3Provider: providers.Web3Provider
  market: MarketData
  networkAccount?: string
  walletBalanceData?: WalletBalancesData[]
  walletNFTData?: WalletNFTsData[]
  onSendTransaction?: <T>(promise: Promise<T>) => Promise<T>
}
const useConfigService = (props: ConfigServiceProps) => {
  return props
}
const { Provider: ConfigProvider, createUseContext } = createContext(useConfigService)
export const useConfig = createUseContext()

export default ConfigProvider
