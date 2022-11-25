[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [NFTVaultDataHumanized](./protocol.nftvaultdatahumanized.md)

## NFTVaultDataHumanized type

<b>Signature:</b>

```typescript
export type NFTVaultDataHumanized = {
  id: string
  priceInMarketReferenceCurrency: string
  underlyingAsset: string
  name: string
  symbol: string
  baseLTVasCollateral: string
  reserveLiquidationThreshold: string
  reserveLiquidationBonus: string
  usageAsCollateralEnabled: boolean
  isActive: boolean
  isFrozen: boolean
  lastUpdateTimestamp: number
  totalNumberOfCollateral: string
}
```
