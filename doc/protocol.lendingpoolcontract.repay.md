[Home](./index.md) &gt; [@vinci-protocol/protocol](./protocol.md) &gt; [LendingPoolContract](./protocol.lendingpoolcontract.md) &gt; [repay](./protocol.lendingpoolcontract.repay.md)

## LendingPoolContract.repay() method

<b>Signature:</b>

```typescript
repay({ lendingPoolAddress, user, reserve, amount, interestRateMode, onBehalfOf, }: LPRepayParamsType): Promise<EthereumTransactionTypeExtended[]>;
```

## Parameters

| Parameter                                                                    | Type              | Description |
| ---------------------------------------------------------------------------- | ----------------- | ----------- |
| { lendingPoolAddress, user, reserve, amount, interestRateMode, onBehalfOf, } | LPRepayParamsType |             |

<b>Returns:</b>

Promise&lt;[EthereumTransactionTypeExtended](./protocol.ethereumtransactiontypeextended.md)<!-- -->\[\]&gt;
