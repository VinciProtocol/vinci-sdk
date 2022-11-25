[Home](./index.md) &gt; [@vinci-protocol/domains](./domains.md) &gt; [MarketData](./domains.marketdata.md)

## MarketData type

<b>Signature:</b>

```typescript
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
```

<b>References:</b> [NFT_ID](./domains.nft_id.md)<!-- -->, [NFTSetting](./domains.nftsetting.md)
