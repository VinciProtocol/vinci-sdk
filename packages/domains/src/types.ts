import type { FC, PropsWithChildren } from 'react'

export type FCC<P = {}> = FC<PropsWithChildren<P>>

export type NFT_ID = string

export type NFTSetting = {
  LENDING_POOL: string
  LENDING_POOL_ADDRESS_PROVIDER: string
  NFT_ID: string
  underlyingAsset: string
  walletUnderlyingAsset: string
  oracle: string
  name: string
  imageName: string
  symbol: string
  nToken: string
  src: any
  market: {
    logo: any
    url: string
  }
}
export type MarketData = {
  chainId: any
  addresses: {
    LENDING_POOL_ADDRESSES_PROVIDER_REGISTRY: string
    WETH_GATEWAY: string
    WPUNKS_GATEWAY: string
    walletBalanceProvider: string
    vinciNFTProvider: string
    uiPoolDataProvider: string
    cryptoPunksMarket: string
    NFTOracle: string
  }
  thegraph?: {
    oracleRecords: string
  }
  nfts: Record<NFT_ID, NFTSetting>
  nftsNtoken: Record<NFT_ID, NFTSetting>
  info: Record<
    string,
    {
      lendingPool: string
      lendingPoolAddressesProvider: string
    }
  >
}
