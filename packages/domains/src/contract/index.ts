import { useMemo } from 'react'
import { createContext } from '../utils/createContext'
import {
  ERC20Service,
  ERC721Service,
  LendingPoolContract,
  UiPoolDataContract,
  WalletBalanceContract,
  VinciNFTContract,
} from '@vinci-protocol/protocol'
import type { MarketData } from '../types'

export type ContractServiceProps = {
  provider: any
  market: MarketData
}
const useContractService = ({ provider, market }: ContractServiceProps) => {
  const contracts = useMemo(() => {
    const { WETH_GATEWAY, WPUNKS_GATEWAY, uiPoolDataProvider, walletBalanceProvider, vinciNFTProvider } =
      market.addresses
    return {
      lendingPool: new LendingPoolContract(provider, {
        WETH_GATEWAY,
        WPUNKS_GATEWAY,
      }),
      uiPool: new UiPoolDataContract({
        address: uiPoolDataProvider,
        provider,
      }),
      wallet: new WalletBalanceContract({
        address: walletBalanceProvider,
        provider,
      }),
      ERC20Service: new ERC20Service(provider),
      ERC721Service: new ERC721Service(provider),
      vinciNFT: new VinciNFTContract({
        address: vinciNFTProvider,
        provider,
      }),
    }
  }, [market.addresses, provider])

  return contracts
}
const { Provider: ContractProvider, createUseContext } = createContext(useContractService)
export const createContractContext = createUseContext

export default ContractProvider
