[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [UserReserveDataHumanized](./protocol.userreservedatahumanized.md)

## UserReserveDataHumanized interface

<b>Signature:</b>

```typescript
export interface UserReserveDataHumanized
```

## Properties

| Property                                                                            | Modifiers | Type                                                                                                                                                                                                                                        | Description |
| ----------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [userNFTRReservesData](./protocol.userreservedatahumanized.usernftrreservesdata.md) |           | Array&lt;{ underlyingAsset: string; usageAsCollateralEnabledOnUser: boolean; nTokenBalance: BigNumber; tokenIds: string\[\]; amounts: string\[\]; }&gt;                                                                                     |             |
| [userReservesData](./protocol.userreservedatahumanized.userreservesdata.md)         |           | Array&lt;{ underlyingAsset: string; scaledVTokenBalance: string; usageAsCollateralEnabledOnUser: boolean; stableBorrowRate: string; scaledVariableDebt: string; principalStableDebt: string; stableBorrowLastUpdateTimestamp: number; }&gt; |             |
