[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [getCompoundedBalance](./protocol.getcompoundedbalance.md)

## getCompoundedBalance() function

<b>Signature:</b>

```typescript
export declare function getCompoundedBalance({
  principalBalance: _principalBalance,
  reserveIndex,
  reserveRate,
  lastUpdateTimestamp,
  currentTimestamp,
}: CompoundedBalanceRequest): BigNumber
```

## Parameters

| Parameter                                                                                                   | Type                     | Description |
| ----------------------------------------------------------------------------------------------------------- | ------------------------ | ----------- |
| { principalBalance: \_principalBalance, reserveIndex, reserveRate, lastUpdateTimestamp, currentTimestamp, } | CompoundedBalanceRequest |             |

<b>Returns:</b>

BigNumber
